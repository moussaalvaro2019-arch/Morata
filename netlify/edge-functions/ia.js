// =====================================================================
// Morata · Assistant IA (Netlify Edge Function)  →  POST /api/ia
// Appelle l'API Claude (Anthropic) avec la clé ANTHROPIC_API_KEY stockée
// dans les variables d'environnement Netlify : elle n'est jamais envoyée
// au navigateur. Chaque demande est vérifiée par Supabase (compte connecté,
// non suspendu, quota quotidien) via la fonction SQL public.ia_check.
// =====================================================================
import Anthropic from "@anthropic-ai/sdk";

const MODELS = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-4-5"];
const DEFAULT_MODEL = "claude-opus-5-5";
// Modèles qui acceptent le repli automatique côté serveur en cas de refus
const WITH_FALLBACK = new Set(["claude-opus-5-5", "claude-sonnet-5-5"]);
const KINDS = ["chat", "expliquer", "quiz", "cours"];
const FIGURES = "poteau-coupe, poteau-elevation, poutre-coupe, poutre-elevation, dalle-coupe, hourdis, semelle, semelle-filante, longrine, chainage, escalier, enrobage, coupe-type, triangle, cercle-trigo, forces, pl, pert, gantt, moments, console, traction, flambement, mohr, granulo, proctor, tassement, fondations-types, bulbe, nivellement, gisement, implantation, paroi, pont-thermique, loi-masse, bernoulli, hydrostatique, treillis";

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  try { const v = globalThis.Deno?.env?.get?.(name); if (v) return v; } catch (_) {}
  return globalThis.process?.env?.[name] || "";
}
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });
const clip = (s, n) => String(s ?? "").slice(0, n);

/* Paramètres Supabase : variables Netlify, sinon lecture de /config.js du site */
async function supabaseConf(request) {
  let url = env("SUPABASE_URL"), key = env("SUPABASE_ANON_KEY");
  if (!url || !key) {
    try {
      const t = await (await fetch(new URL("/config.js", request.url))).text();
      url = url || (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || "";
      key = key || (t.match(/supabaseAnonKey\s*:\s*["']([^"']+)["']/) || [])[1] || "";
    } catch (_) { /* pas de config.js lisible */ }
  }
  return url && key ? { url: url.replace(/\/+$/, ""), key } : null;
}

/* Historique de conversation propre : alternance user / assistant, tailles bornées */
function cleanMessages(list) {
  const out = [];
  for (const m of Array.isArray(list) ? list.slice(-12) : []) {
    const role = m && m.role === "assistant" ? "assistant" : "user";
    const content = clip(m && m.content, 6000).trim();
    if (!content) continue;
    if (out.length && out[out.length - 1].role === role) out[out.length - 1].content += "\n\n" + content;
    else out.push({ role, content });
  }
  while (out.length && out[0].role !== "user") out.shift();
  if (out.length && out[out.length - 1].role !== "user") out.pop();
  return out;
}

const BASE = (platform) => `Tu es le professeur IA de ${platform}, une plateforme d'apprentissage des métiers du bâtiment et du génie civil utilisée surtout en Côte d'Ivoire et en Afrique de l'Ouest francophone. Tes apprenants vont de l'ouvrier ou de l'élève de lycée technique jusqu'au futur ingénieur.

Ta façon de répondre :
- Réponds toujours en français clair, avec des phrases courtes, en adaptant le niveau à la question posée.
- Utilise les unités SI et les réalités locales : agglos de 10, 15 et 20, ciment CEM II 32,5 ou 42,5, latérite, sable lagunaire, climat tropical humide, prix en FCFA, réseaux CIE et SODECI.
- Pour tout calcul : données, formule, application numérique avec les unités, résultat arrondi, puis vérification de l'ordre de grandeur.
- Cite les références utiles (BAEL 91 révisé 99, Eurocodes, DTU, NF C 15-100) et rappelle, pour un projet réel, de faire valider par un bureau d'études.
- Ne minimise jamais un risque pour la solidité ou la sécurité : recommande le bon professionnel (bureau d'études, géotechnicien, électricien qualifié) quand la décision engage la sécurité.
- Si la question sort du domaine du bâtiment, réponds brièvement puis ramène la discussion vers l'apprentissage.

Mise en forme (le texte est affiché par la plateforme, n'utilise ni LaTeX ni HTML) :
- titres de section avec ## ; listes avec - ou 1. ; **gras** pour les mots-clés ;
- une formule par ligne, la ligne commençant par $$ suivi d'un espace, avec des symboles Unicode, par exemple : $$ M = q × L² / 8 ;
- encadrés : une ligne « > [!retenir] Titre » suivie de lignes commençant par « > » (types disponibles : retenir, attention, exemple, astuce, norme) ;
- tableaux markdown simples quand ils aident à comparer.`;

function systemFor(kind, ctx, platform) {
  const mat = clip(ctx.matiere, 120), chap = clip(ctx.chapitre, 200), extrait = clip(ctx.extrait, 14000);
  let task;
  if (kind === "chat") {
    task = `Tu réponds aux questions d'un apprenant dans le chat de la plateforme${mat ? `, qui a choisi la matière « ${mat} »` : ""}. Sois précis et pédagogique ; vise 150 à 450 mots sauf si l'apprenant demande plus de détails.`;
  } else if (kind === "expliquer") {
    task = `L'apprenant lit ${chap ? `le chapitre « ${chap} »` : "un chapitre"}${mat ? ` de la matière « ${mat} »` : ""}. Réponds à sa demande en t'appuyant sur ce chapitre, sans le recopier.\n<chapitre>\n${extrait}\n</chapitre>`;
  } else if (kind === "quiz") {
    task = `Génère exactement 5 nouvelles questions à choix multiples sur ${chap ? `le chapitre « ${chap} »` : "le sujet"}${mat ? ` (matière « ${mat} »)` : ""}, avec 4 propositions dont une seule est juste, et une explication courte. Varie la position de la bonne réponse et mélange questions de cours et petits calculs.
Réponds UNIQUEMENT avec un tableau JSON valide, sans aucun texte avant ou après, au format :
[{"q":"question","o":["proposition A","proposition B","proposition C","proposition D"],"r":0,"e":"explication"}]
où "r" est l'indice (0 à 3) de la bonne proposition.
<chapitre>\n${extrait}\n</chapitre>`;
  } else {
    task = `Tu rédiges, pour la direction de la plateforme, le chapitre de cours « ${chap} » de la matière « ${mat} »${ctx.niveau ? ` (niveau ${clip(ctx.niveau, 40)})` : ""}.
${ctx.autres ? `Autres chapitres déjà présents dans cette matière (évite les répétitions) : ${clip(ctx.autres, 2000)}.\n` : ""}Consignes :
- 700 à 1 300 mots, commence directement par le contenu (le titre est déjà affiché, pas de titre # au début) ;
- 3 à 6 sections ## progressives, des formules $$, au moins un encadré > [!exemple] avec un calcul chiffré complet, un encadré > [!retenir], un > [!attention] si c'est pertinent, et un tableau si c'est utile ;
- tu peux insérer une figure existante de la plateforme avec une ligne « !fig:nom|Légende », en choisissant uniquement parmi : ${FIGURES} ;
- termine par une ligne contenant exactement === QUIZ === suivie d'un tableau JSON de 5 questions au format [{"q":"...","o":["...","...","...","..."],"r":0,"e":"..."}].`;
  }
  // Bloc stable en premier (mise en cache), consignes variables ensuite
  return [{ type: "text", text: BASE(platform), cache_control: { type: "ephemeral" } }, { type: "text", text: task }];
}

function errorText(e) {
  if (e instanceof Anthropic.AuthenticationError) return "Clé ANTHROPIC_API_KEY invalide : vérifiez la variable d'environnement sur Netlify.";
  if (e instanceof Anthropic.PermissionDeniedError) return "Cette clé API n'a pas accès au modèle choisi. Changez de modèle dans Espace PDG → Intelligence artificielle.";
  if (e instanceof Anthropic.RateLimitError) return "Trop de demandes en même temps : réessayez dans une minute.";
  if (e instanceof Anthropic.BadRequestError) return "Demande refusée par l'API (" + clip(e.message, 160) + ").";
  if (e instanceof Anthropic.APIError) return e.status === 529 ? "Le service IA est momentanément surchargé : réessayez dans quelques instants." : "Erreur du service IA (" + (e.status || "réseau") + ").";
  return "Connexion au service IA interrompue : réessayez.";
}

export default async (request) => {
  if (request.method !== "POST") return json({ error: "Méthode non autorisée" }, 405);
  const apiKey = env("ANTHROPIC_API_KEY");
  if (!apiKey) return json({ error: "L'assistant IA n'est pas encore activé : ajoutez la variable ANTHROPIC_API_KEY sur Netlify (voir GUIDE-INSTALLATION.md, étape 6)." }, 503);

  let body;
  try { body = await request.json(); } catch (_) { return json({ error: "Requête invalide" }, 400); }
  const kind = KINDS.includes(body.kind) ? body.kind : "chat";
  const ctx = body.ctx && typeof body.ctx === "object" ? body.ctx : {};

  // 1. Vérification de l'utilisateur, du quota et du modèle choisi par le PDG
  let check = { ok: true, model: DEFAULT_MODEL, admin: false, platform: "Morata" };
  const sb = await supabaseConf(request);
  if (sb) {
    const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Connectez-vous pour utiliser l'assistant IA." }, 401);
    let r;
    try {
      r = await fetch(`${sb.url}/rest/v1/rpc/ia_check`, { method: "POST", headers: { apikey: sb.key, Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ p_kind: kind, p_ref: clip(body.ref, 80) }) });
    } catch (_) { return json({ error: "Base de données injoignable." }, 502); }
    if (r.status === 401 || r.status === 403) return json({ error: "Session expirée : reconnectez-vous." }, 401);
    if (!r.ok) return json({ error: "Vérification impossible : le script supabase.sql a-t-il bien été exécuté ?" }, 502);
    check = Object.assign(check, await r.json());
    if (!check.ok) return json({ error: check.msg || "Accès refusé." }, check.code === "quota" ? 429 : 403);
    if (kind === "cours" && !check.admin) return json({ error: "La rédaction de chapitres est réservée à la direction." }, 403);
  } else if (env("IA_SANS_CONNEXION") !== "oui") {
    return json({ error: "L'assistant IA a besoin de Supabase (config.js) pour vérifier les comptes. Pour un essai sans comptes, ajoutez la variable IA_SANS_CONNEXION=oui sur Netlify." }, 403);
  }

  const messages = cleanMessages(body.messages);
  if (!messages.length) return json({ error: "Message vide." }, 400);
  const model = MODELS.includes(check.model) ? check.model : DEFAULT_MODEL;
  const params = {
    model,
    max_tokens: kind === "cours" ? 32000 : kind === "quiz" ? 8000 : 16000,
    system: systemFor(kind, ctx, clip(check.platform || "Morata", 60)),
    messages
  };
  // Haiku 4.5 n'accepte pas le réglage d'effort
  if (model !== "claude-haiku-4-5") params.output_config = { effort: kind === "cours" ? "high" : "medium" };

  const client = new Anthropic({ apiKey, baseURL: env("ANTHROPIC_BASE_URL") || undefined, maxRetries: 1 });
  const enc = new TextEncoder();

  // 2. Réponse transmise au fil de l'eau (texte brut)
  const stream = new ReadableStream({
    async start(controller) {
      let sent = 0;
      const run = async (withFallback) => {
        const p = withFallback ? { ...params, betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" } : params;
        const s = withFallback ? client.beta.messages.stream(p) : client.messages.stream(p);
        for await (const ev of s) {
          if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") { sent += ev.delta.text.length; controller.enqueue(enc.encode(ev.delta.text)); }
        }
        return s.finalMessage();
      };
      try {
        let final;
        try { final = await run(WITH_FALLBACK.has(model)); }
        catch (e) {
          // Si le paramètre de repli n'est pas accepté, on réessaie une fois sans lui
          if (sent === 0 && WITH_FALLBACK.has(model) && e instanceof Anthropic.BadRequestError) final = await run(false);
          else throw e;
        }
        if (final.stop_reason === "refusal") controller.enqueue(enc.encode("\n\n> [!attention]\n> L'assistant ne peut pas répondre à cette demande. Reformulez votre question autour du bâtiment."));
        else if (final.stop_reason === "max_tokens") controller.enqueue(enc.encode("\n\n*(Réponse coupée car trop longue : demandez la suite.)*"));
      } catch (e) {
        controller.enqueue(enc.encode((sent ? "\n\n" : "") + "> [!attention]\n> " + errorText(e)));
      }
      controller.close();
    }
  });
  return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
};

export const config = { path: "/api/ia" };
