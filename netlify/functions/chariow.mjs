// =====================================================================
// BâtiPro Académie · Paiement en ligne Chariow (Netlify Function)
//   POST /api/chariow/checkout → crée le paiement chez Chariow pour l'apprenant connecté
//                                (jeton Supabase) et renvoie l'adresse de la page de paiement
//   POST /api/chariow/webhook  → reçoit les « Pulses » de Chariow (vente réussie, remboursement),
//                                vérifie qu'ils viennent bien de Chariow, puis accorde
//                                aussitôt l'accès ou le livre payé (et envoie un e-mail)
//   GET  /api/chariow/etat     → indique à la direction ce qui est configuré (sans rien révéler)
//
// Variables Netlify (Site configuration › Environment variables), JAMAIS dans le dépôt :
//   CHARIOW_API_KEY            clé API de la boutique Chariow : création des paiements, vérification des ventes
//   CHARIOW_WEBHOOK_SECRET     secret du Pulse (whsec_…) : vérifie l'en-tête x-chariow-signature
//   SUPABASE_SERVICE_ROLE_KEY  clé secrète Supabase (service_role) : enregistre la vente, ouvre l'accès
//   SUPABASE_URL               facultatif (sinon lu dans /config.js)
//   SITE_URL                   facultatif : adresse du site pour le retour après paiement
//   RESEND_API_KEY + MAIL_FROM facultatif : e-mail « votre accès est activé » envoyé par la plateforme
//                              (Chariow envoie de toute façon son reçu d'achat à l'acheteur)
// =====================================================================
import crypto from "node:crypto";

const API = "https://api.chariow.com/v1";

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  return process.env[name] || "";
}
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

/* ---------- Supabase ---------- */
async function supabaseConf(request) {
  let url = env("SUPABASE_URL"), key = env("SUPABASE_ANON_KEY");
  if (!url || !key) {
    try {
      const t = await (await fetch(new URL("/config.js", request.url))).text();
      url = url || (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || "";
      key = key || (t.match(/supabaseAnonKey\s*:\s*["']([^"']+)["']/) || [])[1] || "";
    } catch (_) {}
  }
  return url ? { url: url.replace(/\/+$/, ""), key } : null;
}
// les clés au nouveau format (sb_secret_…, sb_publishable_…) se passent seulement dans « apikey »
function sbHeaders(apikey, bearer) {
  const h = { apikey, "Content-Type": "application/json" };
  const b = bearer || apikey;
  if (/^eyJ/.test(b)) h.Authorization = "Bearer " + b;
  return h;
}
async function rpc(sb, fn, args, apikey, bearer) {
  const r = await fetch(`${sb.url}/rest/v1/rpc/${fn}`, { method: "POST", headers: sbHeaders(apikey, bearer), body: JSON.stringify(args || {}) });
  const t = await r.text(); let j = null; try { j = JSON.parse(t); } catch (_) { j = { message: t }; }
  return { ok: r.ok, status: r.status, data: j };
}

/* ---------- lecture tolérante des données de Chariow ---------- */
function pick(o, paths) {
  for (const p of paths) {
    let v = o;
    for (const k of p.split(".")) { if (v == null || typeof v !== "object") { v = null; break; } v = Array.isArray(v) && /^\d+$/.test(k) ? v[+k] : v[k]; }
    if (v != null && v !== "") return v;
  }
  return null;
}
function findKey(o, re, depth = 0) {
  if (!o || typeof o !== "object" || depth > 5) return null;
  for (const [k, v] of Object.entries(o)) if (re.test(k) && (typeof v === "string" || typeof v === "number") && String(v).trim()) return v;
  for (const v of Object.values(o)) if (v && typeof v === "object") { const r = findKey(v, re, depth + 1); if (r != null) return r; }
  return null;
}
const str = (v, n = 200) => (v == null || typeof v === "object" ? "" : String(v).trim().slice(0, n));
const num = (v) => { if (v && typeof v === "object") v = v.value ?? v.amount ?? v.total; const n = typeof v === "number" ? v : parseFloat(String(v ?? "").replace(/\s/g, "").replace(",", ".")); return Number.isFinite(n) ? n : null; };

export function lireVente(body) {
  const b = body && typeof body === "object" ? body : {};
  const d = b.data && typeof b.data === "object" ? b.data : b;
  const sale = d.sale && typeof d.sale === "object" ? d.sale : d;
  const prod = pick(d, ["product", "sale.product", "products.0", "items.0.product", "purchase.product"]);
  let meta = pick(d, ["custom_metadata", "sale.custom_metadata", "metadata", "sale.metadata", "checkout.custom_metadata"]) || pick(b, ["custom_metadata", "metadata"]) || {};
  if (typeof meta === "string") { try { meta = JSON.parse(meta); } catch (_) { meta = {}; } }
  const montant = pick(sale, ["amount", "total", "total_amount", "amount_paid", "paid_amount", "price", "payment.amount"]);
  return {
    event: str(pick(b, ["event", "type", "event_type", "topic", "name"]), 80).toLowerCase(),
    id: str(pick(d, ["sale.id", "sale_id", "id", "transaction_id", "reference", "sale.reference"]), 120),
    statut: str(pick(sale, ["status", "payment.status", "payment_status", "state"]), 40).toLowerCase(),
    email: str(pick(d, ["customer.email", "sale.customer.email", "buyer.email", "client.email", "customer_email", "email", "sale.email"]) || findKey(d, /^e-?mail$/i), 200).toLowerCase(),
    telephone: str(pick(d, ["customer.phone.number", "customer.phone", "sale.customer.phone.number", "phone.number", "phone"]), 30),
    produit: str(prod && typeof prod === "object" ? (prod.id ?? prod.product_id ?? prod.uuid) : (prod ?? pick(d, ["product_id", "sale.product_id", "items.0.product_id"])), 120),
    produitNom: str(prod && typeof prod === "object" ? (prod.name ?? prod.title) : "", 200),
    montant: num(montant),
    devise: str(pick(sale, ["amount.currency", "currency", "total.currency", "price.currency", "payment_currency", "payment.currency"]), 8).toUpperCase(),
    meta: meta && typeof meta === "object" ? meta : {},
  };
}
const OK_EVENT = (e) => e === "successful.sale" || ((/sale|order|purchase|payment|vente/.test(e)) && /success|complet|paid|succeed|confirm|approv/.test(e));
const REFUND = (e) => /refund|rembours|chargeback/.test(e);
const BAD_STATUS = (s) => /fail|pending|abandon|cancel|expire|declin|unpaid|attente|echou/.test(s);

/* ---------- signature du Pulse : HMAC-SHA256 du corps brut avec le secret complet (whsec_…) ---------- */
const eq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };
export function signatureOk(raw, headers, secret) {
  const sig = headers.get("x-chariow-signature") || headers.get("x-pulse-signature") || headers.get("chariow-signature") || "";
  if (!secret || !sig) return false;
  const parts = sig.split(",").map((s) => s.trim()).filter(Boolean);
  const t = (parts.find((p) => p.startsWith("t=")) || "").slice(2);
  const cands = parts.filter((p) => !p.startsWith("t=")).map((p) => p.replace(/^(sha256=|v1=)/i, ""));
  const keys = [secret]; if (secret.startsWith("whsec_")) keys.push(secret.slice(6));
  for (const k of keys) for (const payload of t ? [raw, t + "." + raw] : [raw]) {
    const mac = crypto.createHmac("sha256", k).update(payload, "utf8").digest();
    const hex = mac.toString("hex"), b64 = mac.toString("base64");
    for (const c of cands) if (eq(c.toLowerCase(), hex) || eq(c, b64)) return true;
  }
  return false;
}

/* vérification auprès de Chariow : la vente existe et elle est payée */
async function venteChez(id, key) {
  if (!id || !key) return null;
  try {
    const r = await fetch(`${API}/sales/${encodeURIComponent(id)}`, { headers: { Authorization: "Bearer " + key, Accept: "application/json" } });
    if (!r.ok) return null;
    const j = await r.json(); const d = j && typeof j === "object" ? (j.data || j) : null;
    return d && typeof d === "object" ? lireVente({ data: d }) : null;
  } catch (_) { return null; }
}

/* ---------- e-mail de confirmation (facultatif, via Resend) ---------- */
const H = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
async function envoyerMail(o, site) {
  const key = env("RESEND_API_KEY"), from = env("MAIL_FROM");
  if (!key || !from || !o.email) return false;
  const nom = o.plateforme || "BâtiPro Académie", livre = o.objet === "livre";
  const lien = site + (o.compte ? (livre ? "/#/app/livres" : "/#/app") : "/#/inscription?email=" + encodeURIComponent(o.email));
  const sujet = o.compte ? (livre ? `Votre livre « ${o.livre || "acheté"} » est disponible` : `Votre accès à ${nom} est activé`) : `Paiement reçu : créez votre compte ${nom}`;
  const corps = o.compte
    ? (livre ? `<p>Merci pour votre achat. Le livre <b>${H(o.livre || "")}</b> est maintenant dans votre espace, rubrique « Livres ».</p>`
             : `<p>Merci pour votre paiement. <b>Votre accès complet est activé</b>${o.fin ? ` jusqu'au ${H(new Date(o.fin).toLocaleDateString("fr-FR"))}` : ""} : tous les cours, exercices corrigés, sujets d'examen, outils et l'assistant IA.</p>`)
    : `<p>Merci pour votre paiement. Pour en profiter, <b>créez votre compte avec cette même adresse e-mail</b> (${H(o.email)}) : ${livre ? "le livre" : "votre accès"} y sera ajouté automatiquement.</p>`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#14202E;max-width:560px">${o.nom ? `<p>Bonjour ${H(o.nom)},</p>` : "<p>Bonjour,</p>"}${corps}<p><a href="${H(lien)}" style="display:inline-block;background:#E8752A;color:#fff;padding:10px 18px;border-radius:10px;text-decoration:none;font-weight:bold">${o.compte ? "Ouvrir mon espace" : "Créer mon compte"}</a></p><p style="color:#5E6B7A;font-size:13px">${H(nom)} · paiement en ligne via Chariow</p></div>`;
  try {
    const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [o.email], subject: sujet, html }) });
    return r.ok;
  } catch (_) { return false; }
}

/* ---------- POST /api/chariow/webhook ---------- */
async function webhook(request) {
  const secret = env("CHARIOW_WEBHOOK_SECRET"), apiKey = env("CHARIOW_API_KEY"), svc = env("SUPABASE_SERVICE_ROLE_KEY");
  if (!secret && !apiKey) return json({ error: "Webhook non configuré : CHARIOW_WEBHOOK_SECRET manquant" }, 503);
  const raw = await request.text();
  let body; try { body = JSON.parse(raw); } catch (_) { return json({ error: "JSON invalide" }, 400); }
  const sigOk = signatureOk(raw, request.headers, secret);
  if (secret && !sigOk && !apiKey) return json({ error: "Signature invalide" }, 401);

  let v = lireVente(body);
  const refund = REFUND(v.event);
  if (!refund && v.event && !OK_EVENT(v.event)) return json({ ok: true, ignore: v.event });   // autre événement (test, abandon…)
  // double contrôle auprès de Chariow quand la clé API est là ; obligatoire si la signature n'a pas pu être vérifiée
  const api = await venteChez(v.id, apiKey);
  if (!sigOk) {
    if (!api || !api.email || refund) return json({ error: "Signature invalide" }, 401);
    v = { ...api, event: v.event };                        // seules les données lues chez Chariow comptent
  } else if (api) {
    v = { ...v, ...Object.fromEntries(Object.entries(api).filter(([k, x]) => k !== "event" && x !== "" && x != null && !(k === "meta" && !Object.keys(x).length))) };
  }
  if (!refund && v.statut && BAD_STATUS(v.statut)) return json({ ok: true, ignore: "statut " + v.statut });
  const ext = v.id || request.headers.get("x-pulse-delivery-id") || crypto.createHash("sha256").update(raw).digest("hex").slice(0, 32);
  if (!refund && !v.email && !v.meta.uid) return json({ error: "Vente sans e-mail d'acheteur" }, 422);

  const sb = await supabaseConf(request);
  if (!sb || !svc) return json({ error: "SUPABASE_SERVICE_ROLE_KEY manquant : la vente sera renvoyée par Chariow" }, 503);
  const r = await rpc(sb, "chariow_vente", { p: {
    type: refund ? "remboursement" : "vente", ext_id: ext, email: v.email, produit: v.produit, produit_nom: v.produitNom,
    montant: v.montant == null ? "" : String(v.montant), devise: v.devise, telephone: v.telephone,
    uid: str(v.meta.uid, 40), objet: str(v.meta.objet, 10), livre: str(v.meta.livre, 80) } }, svc);
  if (!r.ok) return json({ error: (r.data && r.data.message) || "Enregistrement impossible" }, 500);
  const o = r.data || {};
  let mail = false;
  if (o.ok && !o.doublon && !refund && o.statut === "valide") mail = await envoyerMail(o, (env("SITE_URL") || new URL(request.url).origin).replace(/\/+$/, ""));
  return json({ ok: true, statut: o.statut || (o.rembourse ? "rembourse" : ""), doublon: !!o.doublon, compte: !!o.compte, mail });
}

/* ---------- POST /api/chariow/checkout ---------- */
const INDICATIFS = { CI: "225", SN: "221", ML: "223", BF: "226", BJ: "229", TG: "228", NE: "227", GW: "245", GN: "224", GH: "233", NG: "234", LR: "231", SL: "232", GM: "220", MR: "222", CV: "238", CM: "237", GA: "241", CG: "242", CD: "243", TD: "235", CF: "236", GQ: "240", MA: "212", FR: "33", BE: "32", CH: "41", CA: "1", US: "1", GB: "44", DE: "49", IT: "39", ES: "34" };
async function appelChariow(key, corps) {
  try {
    const r = await fetch(`${API}/checkout`, { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(corps) });
    let j = {}; try { j = await r.json(); } catch (_) {}
    return { ok: r.ok, status: r.status, j };
  } catch (e) { return { ok: false, status: 502, j: { message: "Chariow injoignable" } }; }
}
async function checkout(request) {
  const key = env("CHARIOW_API_KEY");
  if (!key) return json({ code: "non_configure", error: "Le paiement en ligne n'est pas encore branché (clé API Chariow à ajouter dans Netlify)." }, 501);
  const sb = await supabaseConf(request);
  if (!sb || !sb.key) return json({ error: "Supabase non configuré" }, 503);
  const auth = request.headers.get("authorization") || "";
  if (!/^Bearer\s+\S+$/i.test(auth)) return json({ error: "Connectez-vous d'abord" }, 401);
  let b = {}; try { b = await request.json(); } catch (_) {}
  const objet = b.objet === "livre" ? "livre" : "acces", livre = objet === "livre" ? str(b.livre, 80) : null;
  const of = await rpc(sb, "chariow_offre", { p_objet: objet, p_livre: livre }, sb.key, auth.replace(/^Bearer\s+/i, ""));
  if (!of.ok) return json({ error: (of.data && of.data.message) || "Session expirée : reconnectez-vous" }, of.status === 401 ? 401 : 400);
  const o = of.data || {};
  if (o.deja) return json({ deja: true });
  if (!o.produit) return json({ code: "non_configure", error: "Ce produit n'est pas encore relié à Chariow par la direction." }, 501);

  const noms = str(b.nom || o.nom, 120).split(/\s+/).filter(Boolean);
  const pays = /^[A-Z]{2}$/.test(String(b.pays || "")) ? b.pays : "CI";
  let tel = String(b.tel || o.tel || "").replace(/\D/g, ""); const ind = INDICATIFS[pays];
  if (ind && tel.startsWith(ind) && tel.length > ind.length + 6) tel = tel.slice(ind.length);
  if (tel.startsWith("00")) tel = tel.slice(2);
  const site = (env("SITE_URL") || new URL(request.url).origin).replace(/\/+$/, "");
  const corps = {
    product_id: o.produit, email: o.email,
    first_name: noms[0] || "Client", last_name: noms.slice(1).join(" ") || noms[0] || "Client",
    redirect_url: `${site}/#/${objet === "livre" ? "app/livre/" + encodeURIComponent(livre) : "app/abonnement"}?chariow=retour`,
    custom_metadata: { uid: String(o.uid || ""), objet, livre: livre || "", plateforme: str(o.plateforme, 60) },
  };
  if (tel.length >= 6) corps.phone = { number: tel, country_code: pays };
  const devise = /^[A-Z]{3}$/.test(String(b.devise || "")) ? b.devise : "";
  if (devise) corps.payment_currency = devise;
  let r = await appelChariow(key, corps);
  if (!r.ok && devise && r.status >= 400 && r.status < 500) { delete corps.payment_currency; r = await appelChariow(key, corps); }  // devise non proposée : devise de la boutique
  const d = (r.j && (r.j.data || r.j)) || {};
  if (!r.ok) return json({ error: str(r.j.message || r.j.error || "Chariow a refusé la demande de paiement", 300) }, 502);
  const step = str(d.step, 40);
  if (step === "already_purchased") return json({ deja: true, chariow: true });
  if (step === "completed") return json({ ok: true, termine: true });
  const url = pick(d, ["payment.checkout_url", "checkout_url", "url"]);
  if (typeof url === "string" && /^https:\/\//.test(url)) return json({ url });
  return json({ error: "Réponse inattendue de Chariow" }, 502);
}

/* ---------- GET /api/chariow/etat ---------- */
async function etat(request) {
  const sb = await supabaseConf(request);
  return json({
    api: !!env("CHARIOW_API_KEY"), secret: !!env("CHARIOW_WEBHOOK_SECRET"), service: !!env("SUPABASE_SERVICE_ROLE_KEY"),
    supabase: !!(sb && sb.url), mail: !!(env("RESEND_API_KEY") && env("MAIL_FROM")),
    webhook: new URL("/api/chariow/webhook", request.url).toString(),
  });
}

export default async (request) => {
  const p = new URL(request.url).pathname.replace(/\/+$/, "");
  try {
    if (p.endsWith("/webhook")) return request.method === "POST" ? await webhook(request) : json({ ok: true, info: "Adresse du Pulse Chariow : envoyez les ventes ici en POST." });
    if (p.endsWith("/checkout")) return request.method === "POST" ? await checkout(request) : json({ error: "POST attendu" }, 405);
    if (p.endsWith("/etat")) return await etat(request);
    return json({ error: "Introuvable" }, 404);
  } catch (e) {
    return json({ error: "Erreur interne : " + (e && e.message ? e.message : e) }, 500);
  }
};

export const config = { path: ["/api/chariow/checkout", "/api/chariow/webhook", "/api/chariow/etat"] };
