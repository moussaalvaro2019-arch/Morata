// =====================================================================
// BâtiPro Académie · Relance immédiate par e-mail (Netlify Function)
//   POST /api/relance  { owner, situation }   (en-tête Authorization: Bearer <session de la direction>)
//   Envoie tout de suite à un apprenant le message type de la situation (paiement, essai_avant,
//   essai_fini, abo_avant, abo_fini), tel que la direction l'a rédigé dans l'onglet Relances.
//   Réservé aux administrateurs (vérifié par la fonction SQL is_admin avec la session de l'appelant).
// Variables Netlify : SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, MAIL_FROM, MAIL_REPLY_TO (facultatif),
//   SUPABASE_URL / SUPABASE_ANON_KEY (sinon lus dans config.js), SITE_URL (facultatif).
// =====================================================================
import { MODELES, message, reglagesPlateforme } from "./rappels.mjs";

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  return process.env[name] || "";
}
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });
function sbHeaders(apikey, bearer, extra) {
  const h = Object.assign({ apikey, "Content-Type": "application/json" }, extra || {});
  const b = bearer || apikey;
  if (/^eyJ/.test(b)) h.Authorization = "Bearer " + b;
  return h;
}
async function supabaseConf(site) {
  let url = env("SUPABASE_URL"), key = env("SUPABASE_ANON_KEY");
  if ((!url || !key) && site) {
    try {
      const t = await (await fetch(site + "/config.js")).text();
      url = url || (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || "";
      key = key || (t.match(/supabaseAnonKey\s*:\s*["']([^"']+)["']/) || [])[1] || "";
    } catch (_) {}
  }
  return { url: url.replace(/\/+$/, ""), key };
}

export default async (request) => {
  if (request.method !== "POST") return json({ error: "Méthode non autorisée" }, 405);
  const site = (env("SITE_URL") || env("URL") || new URL(request.url).origin).replace(/\/+$/, "");
  const svc = env("SUPABASE_SERVICE_ROLE_KEY"), cle = env("RESEND_API_KEY"), from = env("MAIL_FROM"), reponse = env("MAIL_REPLY_TO").trim();
  if (!svc) return json({ error: "SUPABASE_SERVICE_ROLE_KEY manquant dans Netlify" }, 503);
  if (!cle || !from) return json({ error: "E-mails non branchés : ajoutez RESEND_API_KEY et MAIL_FROM dans Netlify" }, 503);
  const jeton = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!jeton) return json({ error: "Connectez-vous d'abord" }, 401);
  let corps = {};
  try { corps = await request.json(); } catch (_) {}
  const owner = String(corps.owner || ""), sit = String(corps.situation || "");
  if (!/^[0-9a-f-]{36}$/i.test(owner) || !MODELES[sit]) return json({ error: "Demande incomplète" }, 400);
  const sb = await supabaseConf(site);
  if (!sb.url || !sb.key) return json({ error: "Adresse Supabase introuvable" }, 503);
  // la personne connectée est-elle administrateur ?
  const adm = await fetch(`${sb.url}/rest/v1/rpc/is_admin`, { method: "POST", headers: Object.assign(sbHeaders(sb.key), { Authorization: "Bearer " + jeton }), body: "{}" });
  if (!adm.ok || (await adm.json().catch(() => false)) !== true) return json({ error: "Réservé à la direction" }, 403);
  const lire = async (chemin) => { const r = await fetch(`${sb.url}/rest/v1/${chemin}`, { headers: sbHeaders(svc) }); if (!r.ok) throw new Error(chemin.split("?")[0] + " " + r.status); return r.json(); };
  let p, reglages;
  try {
    const [pr, st] = await Promise.all([lire(`profiles?id=eq.${owner}&select=id,email,data,abo,abo_fin,essai_fin,created_at,status`), lire("settings?id=eq.main&select=data")]);
    p = pr[0]; reglages = (st[0] || {}).data || {};
  } catch (e) { return json({ error: "Lecture de la base impossible : " + e.message }, 502); }
  if (!p || !p.email) return json({ error: "Apprenant introuvable" }, 404);
  const fini = sit.endsWith("_fini");
  const r = sit === "paiement" ? { kind: "paiement", ref: "manuel", cree: p.created_at }
    : sit.startsWith("essai") ? { kind: "fin_essai", ref: fini ? "fini:" : "avant:", fin: p.essai_fin }
    : { kind: "fin_abo", ref: fini ? "fini:" : "avant:", fin: p.abo_fin, plan: p.abo };
  if (r.kind !== "paiement" && !r.fin) return json({ error: "Pas de date de fin pour cet apprenant" }, 400);
  const m = message(r, p, reglagesPlateforme(reglages), site);
  const envoi = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: "Bearer " + cle, "Content-Type": "application/json" },
    body: JSON.stringify(Object.assign({ from, to: [p.email], subject: m.sujet, html: m.html, text: m.texte }, reponse ? { reply_to: reponse } : {})),
  }).catch(() => null);
  if (!envoi || !envoi.ok) return json({ error: "Resend a refusé l'envoi (domaine vérifié ? clé valide ?)" }, 502);
  // journal : visible dans l'onglet Relances (la référence « manuel:… » n'empêche pas les rappels automatiques)
  await fetch(`${sb.url}/rest/v1/rappels`, { method: "POST", headers: sbHeaders(svc, null, { Prefer: "return=minimal" }),
    body: JSON.stringify({ owner, kind: r.kind, ref: "manuel:" + new Date().toISOString(), canal: "email" }) }).catch(() => {});
  return json({ ok: true, email: p.email });
};
export const config = { path: "/api/relance" };
