// =====================================================================
// BâtiPro Académie · Rappels par e-mail (Netlify Scheduled Function)
//   Toutes les heures de 7 h à 19 h (heure d'Abidjan = UTC), la fonction relit les comptes
//   et envoie au plus un rappel par personne :
//   - inscrit qui n'a pas encore payé : 1, 3 puis 7 jours après la création du compte
//     (comptes de moins de 30 jours, sans paiement en attente de validation) ;
//   - période tout compris (essai) ou abonnement Basic / Premium qui se termine dans
//     3 jours au plus, puis qui vient de se terminer (3 derniers jours).
//   Chaque rappel est noté dans la table « rappels » avant l'envoi : jamais deux fois le même.
// Variables Netlify :
//   SUPABASE_SERVICE_ROLE_KEY  clé secrète Supabase (lecture des comptes, journal des rappels)
//   RESEND_API_KEY + MAIL_FROM envoi des e-mails (domaine vérifié sur resend.com)
//   SUPABASE_URL               facultatif (sinon lu dans config.js du site)
//   SITE_URL                   facultatif (sinon l'adresse principale du site Netlify)
//   MAIL_REPLY_TO              facultatif : adresse qui reçoit les réponses des apprenants (ex. votre Gmail)
// Réglages de la direction : settings.main.rappels = {actif, impayes, fins} (Espace PDG → Relances).
// Les apprenants qui décochent « Rappels par e-mail » dans Mon profil (data.rappels = false) ne reçoivent rien.
// =====================================================================

const DAY = 86400000;
const MAX_PAR_PASSAGE = 20;   // Resend accepte 2 envois par seconde ; une fonction planifiée dispose de 30 s
const PAUSE_MS = 550;

function env(name) {
  try { const v = globalThis.Netlify?.env?.get?.(name); if (v) return v; } catch (_) {}
  return process.env[name] || "";
}
const H = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ts = (v) => (v ? Date.parse(v) : 0);
const jour = (v) => new Date(ts(v)).toISOString().slice(0, 10);
const dateFr = (v) => new Date(ts(v)).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const F = (n) => Math.round(+n || 0).toLocaleString("fr-FR").replace(/[  ]/g, " ");
const telFmt = (t) => String(t || "").replace(/\D/g, "").replace(/(\d{2})(?=\d)/g, "$1 ").trim();
const prenom = (p) => String((p.data || {}).name || "").trim().split(/\s+/)[0] || "";

export function reglagesPlateforme(reglages = {}) {
  return Object.assign({ nom: "BâtiPro Académie", ceo: "La direction", prixAcces: 4000, prixBasic: 2000, prixPremium: 5000, essaiJours: 31, aboJours: 31, whatsapp: "0544176359" }, reglages);
}
/* ---------- qui relancer, et avec quel message (logique pure, testée hors ligne) ---------- */
export function choisirRappels({ profils = [], admins = [], paiements = [], envoyes = [], reglages = {}, maintenant = Date.now(), site = "" }) {
  const R = Object.assign({ actif: true, impayes: true, fins: true }, reglages.rappels || {});
  if (R.actif === false || reglages.paywall === false) return [];
  const adm = new Set(admins.map((a) => a.uid));
  const attente = new Set(paiements.filter((x) => x.statut === "en_attente" && ["acces", "abo", null, undefined].includes(x.objet)).map((x) => x.owner));
  const paye = new Set(paiements.filter((x) => x.statut === "valide" && ["acces", "abo", null, undefined].includes(x.objet)).map((x) => x.owner));
  const deja = new Set(envoyes.map((e) => `${e.owner}|${e.kind}|${e.ref}`));
  const c = reglagesPlateforme(reglages);
  const t = maintenant, out = [];
  for (const p of profils) {
    const email = String(p.email || "").trim().toLowerCase();
    if (!email || adm.has(p.id) || p.status === "suspendu" || (p.data || {}).rappels === false || /@(exemple|example)\./.test(email)) continue;
    const insc = p.acces === "actif" && (!p.acces_fin || ts(p.acces_fin) > t);
    const aboFin = ["basic", "premium"].includes(p.abo) ? ts(p.abo_fin) : 0, aboActif = aboFin > t;
    let r = null;
    if (R.fins !== false && aboFin) {
      const d = (aboFin - t) / DAY;
      if (d > 0 && d <= 3) r = { kind: "fin_abo", ref: "avant:" + jour(p.abo_fin), plan: p.abo, fin: p.abo_fin };
      else if (d <= 0 && d >= -3) r = { kind: "fin_abo", ref: "fini:" + jour(p.abo_fin), plan: p.abo, fin: p.abo_fin };
    }
    if (!r && R.fins !== false && insc && p.essai_fin && !(aboActif && aboFin >= ts(p.essai_fin))) {
      const d = (ts(p.essai_fin) - t) / DAY;
      if (d > 0 && d <= 3) r = { kind: "fin_essai", ref: "avant:" + jour(p.essai_fin), fin: p.essai_fin };
      else if (d <= 0 && d >= -3 && !aboActif) r = { kind: "fin_essai", ref: "fini:" + jour(p.essai_fin), fin: p.essai_fin };
    }
    if (!r && R.impayes !== false && !insc && !aboActif && !attente.has(p.id) && !paye.has(p.id)) {
      const age = (t - ts(p.created_at)) / DAY, etape = age >= 7 ? 7 : age >= 3 ? 3 : age >= 1 ? 1 : 0;
      if (etape && age <= 30) r = { kind: "paiement", ref: "j" + etape, cree: p.created_at, etape };
    }
    if (!r || deja.has(`${p.id}|${r.kind}|${r.ref}`)) continue;
    out.push(Object.assign({ owner: p.id, email, prenom: prenom(p) }, r, message(r, p, c, site)));
  }
  return out;
}

/* ---------- messages types (modifiables par la direction : settings.main.rappels.modeles) ----------
   Le même texte sert à l'e-mail automatique et au bouton WhatsApp de l'onglet Relances.
   Copie identique dans public/js/abo.js (A.RAP_MODELES) : un test vérifie qu'elles ne divergent pas. */
export const MODELES = {
  paiement: { sujet: "Votre compte {plateforme} est prêt : il reste à activer votre accès",
    texte: "Bonjour {prenom},\n\nVous avez créé votre compte sur {plateforme} le {date}, mais votre inscription n'est pas encore payée.\n\nLe premier chapitre de chaque matière reste gratuit. L'inscription ({prix_inscription} FCFA) ouvre tout pendant {jours_essai} jours : tous les cours, les exercices corrigés, les sujets d'examen, les calculs guidés, l'atelier de dessin et le professeur IA.\n\nPaiement par Wave, MTN Mobile Money ou carte bancaire : {lien}\n\nUne question ? Répondez à ce message ou écrivez-nous sur WhatsApp au {whatsapp}.\n\n{directeur}, {plateforme}" },
  essai_avant: { sujet: "Vos jours tout compris se terminent le {date}",
    texte: "Bonjour {prenom},\n\nVous profitez de tout sur {plateforme} jusqu'au {date}. Ensuite, vous gardez tous les cours avec la formule Inscrit.\n\nPour garder les exercices et sujets complets, les calculs guidés, le métré, l'atelier de dessin et le professeur IA, choisissez Basic ({prix_basic} FCFA) ou Premium ({prix_premium} FCFA) pour {jours_abo} jours : {lien}\n\n{directeur}, {plateforme}" },
  essai_fini: { sujet: "Votre période tout compris est terminée",
    texte: "Bonjour {prenom},\n\nVotre période tout compris sur {plateforme} s'est terminée le {date}. Vous gardez tous les cours avec la formule Inscrit.\n\nPour retrouver les exercices et sujets complets, les calculs guidés, le métré, l'atelier de dessin et le professeur IA : Basic ({prix_basic} FCFA) ou Premium ({prix_premium} FCFA) pour {jours_abo} jours : {lien}\n\n{directeur}, {plateforme}" },
  abo_avant: { sujet: "Votre abonnement {formule} se termine le {date}",
    texte: "Bonjour {prenom},\n\nVotre abonnement {formule} sur {plateforme} se termine le {date}. Renouvelez-le pour continuer sans interruption : {prix} FCFA pour {jours_abo} jours, ajoutés à la suite des jours qui vous restent.\n\nRenouveler : {lien}\n\n{directeur}, {plateforme}" },
  abo_fini: { sujet: "Votre abonnement {formule} a pris fin",
    texte: "Bonjour {prenom},\n\nVotre abonnement {formule} sur {plateforme} s'est terminé le {date} : vous êtes revenu à la formule Inscrit (tous les cours, contenus réduits).\n\nReprenez {formule} pour {prix} FCFA ({jours_abo} jours) : {lien}\n\n{directeur}, {plateforme}" },
};
const BOUTONS = { paiement: "Activer mon accès", essai_avant: "Choisir ma formule", essai_fini: "Choisir ma formule", abo_avant: "Renouveler", abo_fini: "Reprendre mon abonnement" };
export const situation = (r) => r.kind === "paiement" ? "paiement" : (r.kind === "fin_essai" ? "essai_" : "abo_") + (String(r.ref).startsWith("fini:") ? "fini" : "avant");
export function remplir(modele, vars) {
  return String(modele || "").replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k] ?? "") : m)).replace(/[ \u00a0]+([,.])/g, "$1").trim();
}
export function variables(r, p, c, site) {
  const plan = r.plan === "premium" ? "Premium" : "Basic";
  return { prenom: r.prenom || prenom(p), plateforme: c.nom, date: dateFr(r.kind === "paiement" ? r.cree : r.fin),
    prix_inscription: F(c.prixAcces), prix_basic: F(c.prixBasic), prix_premium: F(c.prixPremium),
    prix: F(r.kind === "fin_abo" ? (r.plan === "premium" ? c.prixPremium : c.prixBasic) : c.prixAcces), formule: plan,
    jours_essai: c.essaiJours, jours_abo: c.aboJours, lien: (site || "") + "/#/app/abonnement", whatsapp: telFmt(c.whatsapp), directeur: c.ceo };
}

/* ---------- e-mail à partir du message type ---------- */
export function message(r, p, c, site) {
  const k = situation(r), m = Object.assign({}, MODELES[k], ((c.rappels || {}).modeles || {})[k] || {});
  const v = variables(r, p, c, site), sujet = remplir(m.sujet || MODELES[k].sujet, v), texte = remplir(m.texte || MODELES[k].texte, v);
  const lien = v.lien, wa = v.whatsapp && !texte.includes(v.whatsapp) ? `Une question ? WhatsApp : ${v.whatsapp}` : "";
  const pied = `${c.nom} · ${(site || "").replace(/^https?:\/\//, "")}`, desinscription = "Vous recevez ce message car vous avez un compte sur la plateforme. Pour ne plus recevoir ces rappels : Mon profil → décochez « Recevoir par e-mail les rappels utiles ».";
  const para = texte.split(/\n\s*\n/).map((b) => `<p>${H(b).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color:#C95F18">$1</a>').replace(/\n/g, "<br>")}</p>`).join("");
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#14202E;max-width:560px">${para}
<p><a href="${H(lien)}" style="display:inline-block;background:#E8752A;color:#fff;padding:11px 20px;border-radius:10px;text-decoration:none;font-weight:bold">${H(BOUTONS[k])}</a></p>
${wa ? `<p>${H(wa)}</p>` : ""}<p style="color:#5E6B7A;font-size:12.5px">${H(pied)}<br>${H(desinscription)}</p></div>`;
  return { sujet, html, texte: texte + (wa ? "\n\n" + wa : "") + "\n\n--\n" + pied + "\n" + desinscription, situation: k };
}

/* ---------- Supabase (clé de service) ---------- */
function sbHeaders(key, extra) {
  const h = Object.assign({ apikey: key, "Content-Type": "application/json" }, extra || {});
  if (/^eyJ/.test(key)) h.Authorization = "Bearer " + key;   // nouvelles clés sb_secret_… : seulement « apikey »
  return h;
}
async function supabaseUrl(site) {
  let url = env("SUPABASE_URL");
  if (!url && site) {
    try { const t = await (await fetch(site + "/config.js")).text(); url = (t.match(/supabaseUrl\s*:\s*["']([^"']+)["']/) || [])[1] || ""; } catch (_) {}
  }
  return url.replace(/\/+$/, "");
}

export async function lancer({ maintenant = Date.now(), attendre = (ms) => new Promise((r) => setTimeout(r, ms)) } = {}) {
  const site = (env("SITE_URL") || env("URL") || "https://batiproo.com").replace(/\/+$/, "");
  const svc = env("SUPABASE_SERVICE_ROLE_KEY"), cle = env("RESEND_API_KEY"), from = env("MAIL_FROM"), reponse = env("MAIL_REPLY_TO").trim();
  if (!svc) return { ok: false, raison: "SUPABASE_SERVICE_ROLE_KEY manquant" };
  if (!cle || !from) return { ok: false, raison: "RESEND_API_KEY ou MAIL_FROM manquant : aucun e-mail envoyé" };
  const url = await supabaseUrl(site);
  if (!url) return { ok: false, raison: "adresse Supabase introuvable (SUPABASE_URL)" };
  const lire = async (chemin) => {
    const r = await fetch(`${url}/rest/v1/${chemin}`, { headers: sbHeaders(svc) });
    if (!r.ok) throw new Error(`${chemin.split("?")[0]} : ${r.status} ${(await r.text()).slice(0, 200)}`);
    return r.json();
  };
  let donnees;
  try {
    const depuis = new Date(maintenant - 120 * DAY).toISOString();
    const [st, profils, admins, paiements, envoyes] = await Promise.all([
      lire("settings?id=eq.main&select=data"),
      lire("profiles?select=id,email,data,status,acces,acces_fin,essai_fin,abo,abo_fin,created_at&limit=20000"),
      lire("admins?select=uid"),
      lire("paiements?select=owner,statut,objet&owner=not.is.null&statut=in.(en_attente,valide)&limit=50000"),
      lire(`rappels?select=owner,kind,ref&at=gte.${encodeURIComponent(depuis)}&limit=50000`),
    ]);
    donnees = { reglages: (st[0] || {}).data || {}, profils, admins, paiements, envoyes };
  } catch (e) {
    return { ok: false, raison: "lecture de la base impossible (relancez supabase.sql ?) : " + e.message };
  }
  const liste = choisirRappels(Object.assign({ maintenant, site }, donnees));
  let envoyes = 0, echecs = 0;
  for (const m of liste.slice(0, MAX_PAR_PASSAGE)) {
    // réserver le rappel d'abord : si un autre passage l'a déjà pris, rien n'est envoyé
    const res = await fetch(`${url}/rest/v1/rappels?on_conflict=owner,kind,ref`, {
      method: "POST", headers: sbHeaders(svc, { Prefer: "resolution=ignore-duplicates,return=representation" }),
      body: JSON.stringify({ owner: m.owner, kind: m.kind, ref: m.ref, canal: "email" }),
    });
    const pris = res.ok ? await res.json().catch(() => []) : [];
    if (!Array.isArray(pris) || !pris.length) continue;
    let ok = false;
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST", headers: { Authorization: "Bearer " + cle, "Content-Type": "application/json" },
        body: JSON.stringify(Object.assign({ from, to: [m.email], subject: m.sujet, html: m.html, text: m.texte }, reponse ? { reply_to: reponse } : {})),
      });
      ok = r.ok;
    } catch (_) { ok = false; }
    if (ok) envoyes++;
    else {   // échec : on libère le rappel, il repartira au prochain passage
      echecs++;
      await fetch(`${url}/rest/v1/rappels?id=eq.${pris[0].id}`, { method: "DELETE", headers: sbHeaders(svc) }).catch(() => {});
    }
    await attendre(PAUSE_MS);
  }
  return { ok: true, candidats: liste.length, envoyes, echecs, restants: Math.max(0, liste.length - MAX_PAR_PASSAGE) };
}

export default async () => {
  const r = await lancer();
  console.log("Rappels :", JSON.stringify(r));
  return new Response(JSON.stringify(r), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
// toutes les heures de 7 h à 19 h (UTC = heure d'Abidjan)
export const config = { schedule: "0 7-19 * * *" };
