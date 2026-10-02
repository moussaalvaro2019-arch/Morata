// Fonction Netlify : annonces de la boutique, gardées dans Netlify Blobs.
// Lire : ouvert à tous. Ajouter ou retirer : il faut le code vendeur,
// défini dans Netlify > Site configuration > Environment variables > BOUTIQUE_CODE.
import { getStore } from "@netlify/blobs";

const CLE = "livres";
const TAILLE_PHOTO_MAX = 300000; // environ 300 Ko en texte

function json(corps, status = 200) {
  return new Response(JSON.stringify(corps), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

function texte(valeur, max) {
  return String(valeur == null ? "" : valeur).trim().slice(0, max);
}

function nettoyer(livre) {
  const photo = texte(livre.photo, TAILLE_PHOTO_MAX + 1);
  return {
    id: "l" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    titre: texte(livre.titre, 120),
    auteur: texte(livre.auteur, 80),
    prix: Math.max(0, Math.round(Number(livre.prix) || 0)),
    format: texte(livre.format, 30) || "Papier",
    description: texte(livre.description, 800),
    whatsapp: texte(livre.whatsapp, 30),
    photo: photo.startsWith("data:image/") && photo.length <= TAILLE_PHOTO_MAX ? photo : "",
    creeLe: new Date().toISOString()
  };
}

export default async (req) => {
  const store = getStore("boutique");
  const lire = async () => (await store.get(CLE, { type: "json" })) || [];

  if (req.method === "GET") return json({ livres: await lire() });

  if (req.method !== "POST" && req.method !== "DELETE") return json({ erreur: "Méthode non autorisée." }, 405);
  if (!process.env.BOUTIQUE_CODE) return json({ erreur: "La boutique n'est pas encore configurée (BOUTIQUE_CODE manquant)." }, 503);

  let corps;
  try { corps = await req.json(); } catch { return json({ erreur: "Requête invalide." }, 400); }
  if (String(corps.code || "") !== process.env.BOUTIQUE_CODE) return json({ erreur: "Code vendeur incorrect." }, 403);

  const livres = await lire();
  if (req.method === "POST") {
    const livre = nettoyer(corps.livre || {});
    if (!livre.titre || !livre.auteur) return json({ erreur: "Titre et auteur obligatoires." }, 400);
    livres.unshift(livre);
    await store.setJSON(CLE, livres.slice(0, 200));
    return json({ livre });
  }

  const restants = livres.filter(l => l.id !== corps.id);
  await store.setJSON(CLE, restants);
  return json({ ok: true });
};
