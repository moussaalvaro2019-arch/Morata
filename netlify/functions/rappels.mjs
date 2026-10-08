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

/* ---------- qui relancer, et avec quel message (logique pure, testée hors ligne) ---------- */
export function choisirRappels({ profils = [], admins = [], paiements = [], envoyes = [], reglages = {}, maintenant = Date.now(), site = "" }) {
  const R = Object.assign({ actif: true, impayes: true, fins: true }, reglages.rappels || {});
  if (R.actif === false || reglages.paywall === false) return [];
  const adm = new Set(admins.map((a) => a.uid));
  const attente = new Set(paiements.filter((x) => x.statut === "en_attente" && ["acces", "abo", null, undefined].includes(x.objet)).map((x) => x.owner));
  const paye = new Set(paiements.filter((x) => x.statut === "valide" && ["acces", "abo", null, undefined].includes(x.objet)).map((x) => x.owner));
  const deja = new Set(envoyes.map((e) => `${e.owner}|${e.kind}|${e.ref}`));
  const c = Object.assign({ nom: "BâtiPro Académie", prixAcces: 4000, prixBasic: 2000, prixPremium: 5000, essaiJours: 31, aboJours: 31, whatsapp: "0544176359" }, reglages);
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

/* ---------- textes des e-mails ---------- */
export function message(r, p, c, site) {
  const plan = r.plan === "premium" ? "Premium" : "Basic", prixPlan = r.plan === "premium" ? c.prixPremium : c.prixBasic;
  const lien = (site || "") + "/#/app/abonnement", wa = telFmt(c.whatsapp), fini = String(r.ref).startsWith("fini:");
  let sujet, corps, bouton;
  if (r.kind === "paiement") {
    sujet = r.etape === 7 ? `Dernier rappel : votre accès à ${c.nom} n'est pas encore activé`
      : r.etape === 3 ? `Vous avez lu le premier chapitre ? Activez votre accès complet`
      : `Votre compte ${c.nom} est prêt : il reste à activer votre accès`;
    corps = [`Vous avez créé votre compte le ${dateFr(r.cree)}, mais votre inscription n'est pas encore payée.`,
      `Le premier chapitre de chaque matière reste gratuit. Pour tout débloquer (tous les cours, exercices corrigés, sujets d'examen, calculs guidés pas à pas, atelier de dessin et professeur IA), l'inscription coûte <b>${F(c.prixAcces)} FCFA</b>, avec <b>${c.essaiJours} jours tout compris</b>.`,
      `Paiement par Wave, MTN Mobile Money ou carte bancaire, depuis la page « Mon abonnement ».`];
    bouton = "Activer mon accès";
  } else if (r.kind === "fin_essai") {
    sujet = fini ? `Votre période tout compris est terminée` : `Vos jours tout compris se terminent le ${dateFr(r.fin)}`;
    corps = [fini ? `Votre période tout compris s'est terminée le ${dateFr(r.fin)}. Vous gardez tous les cours avec la formule Inscrit.`
                  : `Vous profitez de tout jusqu'au <b>${dateFr(r.fin)}</b>. Ensuite, vous gardez tous les cours avec la formule Inscrit.`,
      `Pour garder les exercices et sujets complets, les calculs guidés, le métré, l'atelier de dessin et le professeur IA : <b>Basic ${F(c.prixBasic)} FCFA</b> ou <b>Premium ${F(c.prixPremium)} FCFA</b> pour ${c.aboJours} jours.`];
    bouton = "Choisir ma formule";
  } else {
    sujet = fini ? `Votre abonnement ${plan} a pris fin` : `Votre abonnement ${plan} se termine le ${dateFr(r.fin)}`;
    corps = [fini ? `Votre abonnement <b>${plan}</b> s'est terminé le ${dateFr(r.fin)} : vous êtes revenu à la formule Inscrit (tous les cours, contenus réduits).`
                  : `Votre abonnement <b>${plan}</b> se termine le <b>${dateFr(r.fin)}</b>.`,
      `Renouvelez-le pour continuer sans interruption : <b>${F(prixPlan)} FCFA</b> pour ${c.aboJours} jours${fini ? "" : ", ajoutés à la suite des jours qui vous restent"}.`];
    bouton = fini ? "Reprendre mon abonnement" : "Renouveler";
  }
  const nom = r.prenom || prenom(p);
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#14202E;max-width:560px">
<p>Bonjour${nom ? " " + H(nom) : ""},</p>${corps.map((x) => `<p>${x}</p>`).join("")}
<p><a href="${H(lien)}" style="display:inline-block;background:#E8752A;color:#fff;padding:11px 20px;border-radius:10px;text-decoration:none;font-weight:bold">${H(bouton)}</a></p>
${wa ? `<p>Une question ? Écrivez-nous sur WhatsApp : <b>${H(wa)}</b>.</p>` : ""}
<p style="color:#5E6B7A;font-size:12.5px">${H(c.nom)} · ${H((site || "").replace(/^https?:\/\//, ""))}<br>Vous recevez ce message car vous avez un compte sur la plateforme. Pour ne plus recevoir ces rappels : Mon profil → décochez « Recevoir par e-mail les rappels utiles ».</p></div>`;
  const texte = [`Bonjour${nom ? " " + nom : ""},`, ...corps.map((x) => x.replace(/<[^>]+>/g, "")), `${bouton} : ${lien}`, wa ? `WhatsApp : ${wa}` : ""].filter(Boolean).join("\n\n");
  return { sujet, html, texte };
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
  const svc = env("SUPABASE_SERVICE_ROLE_KEY"), cle = env("RESEND_API_KEY"), from = env("MAIL_FROM");
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
        body: JSON.stringify({ from, to: [m.email], subject: m.sujet, html: m.html, text: m.texte }),
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
