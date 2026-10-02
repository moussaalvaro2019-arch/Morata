// Fonction Netlify : comptes lecteurs et abonnements, gardés dans Netlify Blobs.
// Lecteurs : inscription (nom, téléphone, mot de passe), connexion, déclaration de paiement.
// PDG (mot de passe de l'espace PDG) : liste des abonnés, validation, refus, suppression.
import { getStore } from "@netlify/blobs";
import { scryptSync, randomBytes, createHash, timingSafeEqual } from "node:crypto";
import { configure, codeValide } from "../lib/acces.mjs";

const JOUR = 86400000;

function json(corps, status = 200) {
  return new Response(JSON.stringify(corps), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}
const texte = (v, max) => String(v == null ? "" : v).trim().slice(0, max);
const chiffres = v => String(v || "").replace(/\D/g, "");
const hacherMdp = (mdp, sel) => scryptSync(mdp, sel, 32).toString("hex");
const hacherJeton = j => createHash("sha256").update(j).digest("hex");
function egal(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

// Ce que le lecteur (ou le PDG) a le droit de voir d'un compte.
function publicDe(u) {
  return { id: u.id, nom: u.nom, telephone: u.telephone, creeLe: u.creeLe, paiement: u.paiement || null, statut: u.statut || null, jusqua: u.jusqua || null, traiteLe: u.traiteLe || null };
}

export default async (req) => {
  if (req.method !== "POST") return json({ erreur: "Méthode non autorisée." }, 405);
  const store = getStore("abonnes");
  let c;
  try { c = await req.json(); } catch { return json({ erreur: "Requête invalide." }, 400); }

  const lire = id => store.get("u/" + id, { type: "json" });
  const ecrire = u => store.setJSON("u/" + u.id, u);

  async function parJeton(jeton) {
    const [id, secret] = String(jeton || "").split(".");
    if (!id || !secret) return null;
    const u = await lire(id);
    if (!u || !(u.jetons || []).some(h => egal(h, hacherJeton(secret)))) return null;
    return u;
  }
  async function ouvrirSession(u) {
    const secret = randomBytes(24).toString("hex");
    u.jetons = [hacherJeton(secret), ...(u.jetons || [])].slice(0, 5);
    await ecrire(u);
    return json({ jeton: u.id + "." + secret, compte: publicDe(u) });
  }

  switch (c.action) {
    case "inscrire": {
      const nom = texte(c.nom, 80), tel = chiffres(c.telephone).slice(0, 15), mdp = String(c.motdepasse || "");
      if (!nom || tel.length < 8) return json({ erreur: "Indiquez votre nom et un numéro de téléphone complet." }, 400);
      if (mdp.length < 6) return json({ erreur: "Le mot de passe doit faire au moins 6 caractères." }, 400);
      if (await store.get("t/" + tel)) return json({ erreur: "Ce numéro a déjà un compte : connectez-vous." }, 409);
      const sel = randomBytes(16).toString("hex");
      const u = { id: randomBytes(8).toString("hex"), nom, telephone: tel, sel, mdp: hacherMdp(mdp, sel), creeLe: new Date().toISOString() };
      await store.set("t/" + tel, u.id);
      return ouvrirSession(u);
    }
    case "connecter": {
      const id = await store.get("t/" + chiffres(c.telephone));
      const u = id && await lire(id);
      if (!u || !egal(hacherMdp(String(c.motdepasse || ""), u.sel), u.mdp)) return json({ erreur: "Numéro ou mot de passe incorrect." }, 403);
      return ouvrirSession(u);
    }
    case "moi": {
      const u = await parJeton(c.jeton);
      return u ? json({ compte: publicDe(u) }) : json({ erreur: "Session expirée." }, 401);
    }
    case "payer": {
      const u = await parJeton(c.jeton);
      if (!u) return json({ erreur: "Session expirée : reconnectez-vous." }, 401);
      const reference = texte(c.reference, 80);
      if (!reference) return json({ erreur: "Indiquez la référence ou le numéro qui a payé." }, 400);
      u.paiement = { moyen: texte(c.moyen, 40), reference, le: new Date().toISOString() };
      await ecrire(u);
      return json({ compte: publicDe(u) });
    }
    case "deconnecter": {
      const u = await parJeton(c.jeton);
      if (u) { const h = hacherJeton(String(c.jeton).split(".")[1]); u.jetons = (u.jetons || []).filter(x => x !== h); await ecrire(u); }
      return json({ ok: true });
    }
  }

  // Actions du PDG
  if (!configure()) return json({ erreur: "Espace PDG non configuré (ADMIN_CODE manquant)." }, 503);
  if (!(await codeValide(c.code))) return json({ erreur: "Mot de passe PDG incorrect." }, 403);
  switch (c.action) {
    case "lister": {
      const { blobs } = await store.list({ prefix: "u/" });
      const comptes = (await Promise.all(blobs.map(b => store.get(b.key, { type: "json" })))).filter(Boolean).map(publicDe);
      comptes.sort((a, b) => String(b.creeLe).localeCompare(String(a.creeLe)));
      return json({ comptes });
    }
    case "valider":
    case "refuser": {
      const u = await lire(texte(c.id, 40));
      if (!u) return json({ erreur: "Compte introuvable." }, 404);
      if (c.action === "valider") {
        const jours = Math.min(366, Math.max(1, Number(c.jours) || 30));
        const depart = Math.max(Date.now(), Date.parse(u.jusqua || 0) || 0);
        u.statut = "actif"; u.jusqua = new Date(depart + jours * JOUR).toISOString();
      } else { u.statut = "refuse"; }
      u.traiteLe = new Date().toISOString();
      await ecrire(u);
      return json({ compte: publicDe(u) });
    }
    case "supprimer": {
      const u = await lire(texte(c.id, 40));
      if (u) { await store.delete("u/" + u.id); await store.delete("t/" + u.telephone); }
      return json({ ok: true });
    }
    default:
      return json({ erreur: "Action inconnue." }, 400);
  }
};
