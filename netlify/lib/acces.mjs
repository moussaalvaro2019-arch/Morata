// Mot de passe de l'espace PDG, partagé par les fonctions contenu et boutique.
// Au départ : la variable Netlify ADMIN_CODE (ou BOUTIQUE_CODE, l'ancien nom).
// Une fois changé depuis l'espace PDG, le nouveau mot de passe est gardé (haché) dans Netlify Blobs.
import { getStore } from "@netlify/blobs";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

const CLE = "_motdepasse";

const hacher = (sel, code) => createHash("sha256").update(sel + "|" + code).digest("hex");

function egal(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

export function magasin() {
  return getStore("contenu");
}

export function configure() {
  return !!(process.env.ADMIN_CODE || process.env.BOUTIQUE_CODE);
}

export async function codeValide(code) {
  code = String(code || "");
  if (!code) return false;
  const enregistre = await magasin().get(CLE, { type: "json" });
  if (enregistre && enregistre.sel && enregistre.empreinte) return egal(hacher(enregistre.sel, code), enregistre.empreinte);
  const initial = process.env.ADMIN_CODE || process.env.BOUTIQUE_CODE;
  return !!initial && egal(code, initial);
}

export async function changerCode(nouveau) {
  const sel = randomBytes(16).toString("hex");
  await magasin().setJSON(CLE, { sel, empreinte: hacher(sel, nouveau) });
}
