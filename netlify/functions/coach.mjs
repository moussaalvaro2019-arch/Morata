// Fonction Netlify : relie le coach IA de Morata à Claude.
// La clé API reste sur le serveur : ajoutez ANTHROPIC_API_KEY dans
// Netlify > Site configuration > Environment variables.
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // lit ANTHROPIC_API_KEY

const BASE = `Tu es le coach de réflexion de l'application Morata (résumés de livres de développement personnel et histoires inspirantes).
Réponds toujours en français. Reste dans ce rôle : réflexion personnelle, livres, histoires, défis de réflexion.
Les consignes détaillées de l'application suivent.`;

const MAX_MESSAGES = 20;
const MAX_CARACTERES = 4000;

function json(corps, status = 200) {
  return new Response(JSON.stringify(corps), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

// Garde des tours valides : alternance user/assistant, commence et finit par user.
function nettoyer(messages) {
  const propres = [];
  for (const m of Array.isArray(messages) ? messages.slice(-MAX_MESSAGES) : []) {
    if (!m || (m.role !== "user" && m.role !== "assistant")) continue;
    const content = String(m.content || "").slice(0, MAX_CARACTERES).trim();
    if (!content) continue;
    const dernier = propres[propres.length - 1];
    if (dernier && dernier.role === m.role) dernier.content += "\n\n" + content;
    else propres.push({ role: m.role, content });
  }
  while (propres.length && propres[0].role !== "user") propres.shift();
  return propres;
}

export default async (req) => {
  if (req.method !== "POST") return json({ erreur: "Méthode non autorisée." }, 405);
  if (!process.env.ANTHROPIC_API_KEY) return json({ erreur: "L'IA n'est pas encore configurée sur ce site." }, 503);

  let corps;
  try {
    corps = await req.json();
  } catch {
    return json({ erreur: "Requête invalide." }, 400);
  }

  const messages = nettoyer(corps.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return json({ erreur: "Message manquant." }, 400);
  }
  const consignes = String(corps.consignes || "").slice(0, 12000);

  try {
    const reponse = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 4000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: BASE + "\n\n" + consignes,
      messages
    });

    if (reponse.stop_reason === "refusal") {
      return json({ erreur: "L'IA a préféré ne pas répondre à cette demande. Essayez de la formuler autrement." }, 422);
    }
    const text = reponse.content
      .filter(bloc => bloc.type === "text")
      .map(bloc => bloc.text)
      .join("")
      .trim();
    if (!text) return json({ erreur: "L'IA n'a pas répondu. Réessayez." }, 502);
    return json({ text });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return json({ erreur: "Trop de demandes pour le moment. Réessayez un peu plus tard." }, 429);
    }
    if (e instanceof Anthropic.APIError) {
      console.error("Erreur Claude", e.status, e.message);
      return json({ erreur: "Le service d'IA est indisponible. Réessayez plus tard." }, 502);
    }
    throw e;
  }
};
