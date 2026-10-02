// Fonction Netlify : modifications du contenu faites dans l'espace PDG, gardées dans Netlify Blobs.
// Lire : ouvert à tous (les lecteurs voient le site à jour). Écrire : mot de passe PDG obligatoire.
import { magasin, configure, codeValide, changerCode } from "../lib/acces.mjs";

const PREFIXE = "e/";
const TYPES = ["livre", "chapitres", "serie", "histoire", "theme", "image", "site"];
const TAILLE_MAX = 900000; // environ 900 Ko par élément (images comprises)

function json(corps, status = 200) {
  return new Response(JSON.stringify(corps), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}

function cleValide(cle) {
  if (typeof cle !== "string" || cle.length > 200) return false;
  const [type, id] = [cle.slice(0, cle.indexOf(":")), cle.slice(cle.indexOf(":") + 1)];
  return TYPES.includes(type) && /^[a-z0-9][a-z0-9-]{0,120}$/.test(id);
}

export default async (req) => {
  const store = magasin();

  if (req.method === "GET") {
    const { blobs } = await store.list({ prefix: PREFIXE });
    const entrees = {};
    await Promise.all(blobs.map(async b => {
      const v = await store.get(b.key, { type: "json" });
      if (v) entrees[b.key.slice(PREFIXE.length)] = v;
    }));
    return json({ entrees });
  }

  if (req.method !== "POST") return json({ erreur: "Méthode non autorisée." }, 405);
  if (!configure()) return json({ erreur: "L'espace PDG n'est pas encore configuré : ajoutez ADMIN_CODE dans les variables d'environnement Netlify." }, 503);

  let corps;
  try { corps = await req.json(); } catch { return json({ erreur: "Requête invalide." }, 400); }
  if (!(await codeValide(corps.code))) return json({ erreur: "Mot de passe incorrect." }, 403);

  switch (corps.action) {
    case "verifier":
      return json({ ok: true });
    case "motdepasse": {
      const nouveau = String(corps.nouveau || "");
      if (nouveau.length < 6) return json({ erreur: "Le nouveau mot de passe doit faire au moins 6 caractères." }, 400);
      await changerCode(nouveau);
      return json({ ok: true });
    }
    case "enregistrer": {
      if (!cleValide(corps.cle)) return json({ erreur: "Élément invalide." }, 400);
      const v = corps.valeur;
      if (!v || typeof v !== "object") return json({ erreur: "Contenu manquant." }, 400);
      const valeur = { data: v.supprime ? undefined : v.data, supprime: !!v.supprime, le: new Date().toISOString() };
      if (JSON.stringify(valeur).length > TAILLE_MAX) return json({ erreur: "Élément trop volumineux (image trop lourde ?)." }, 413);
      await store.setJSON(PREFIXE + corps.cle, valeur);
      return json({ ok: true });
    }
    case "effacer":
      if (!cleValide(corps.cle)) return json({ erreur: "Élément invalide." }, 400);
      await store.delete(PREFIXE + corps.cle);
      return json({ ok: true });
    default:
      return json({ erreur: "Action inconnue." }, 400);
  }
};
