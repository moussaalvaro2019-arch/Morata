// Contenu modifiable par le PDG (livres, chapitres, séries, histoires, thèmes, images, textes du site).
// Les fichiers du dossier data/ donnent le contenu de départ ; les modifications faites dans
// l'espace PDG sont enregistrées à part, puis appliquées par-dessus à chaque visite.
// Où sont gardées les modifications (essayé dans l'ordre) :
//  1. Dans Claude (aperçu publié) : la base de données de l'artefact (seul le propriétaire écrit).
//  2. Sur Netlify : la fonction netlify/functions/contenu.mjs (mot de passe PDG).
//  3. Sinon : le navigateur de cet appareil seulement.
(function () {
  const ADRESSE = "/.netlify/functions/contenu";
  const CLE_LOCALE = "morata-contenu";
  const CLE_MDP_LOCAL = "morata-pdg-mdp";
  const CLE_SESSION = "morata-pdg-code";
  const MDP_LOCAL_DEFAUT = "morata";

  // Copie du contenu d'origine, pour pouvoir revenir en arrière.
  const copie = v => JSON.parse(JSON.stringify(v));
  const ORIGINAUX = {
    livre: copie(window.LIVRES || []),
    chapitres: copie(window.LIVRES_CHAPITRES || {}),
    serie: copie(window.SERIES || []),
    histoire: copie(window.HISTOIRES || []),
    theme: copie(window.THEMES || [])
  };
  window.LIVRES = window.LIVRES || [];
  window.LIVRES_CHAPITRES = window.LIVRES_CHAPITRES || {};
  window.SERIES = window.SERIES || [];
  window.HISTOIRES = window.HISTOIRES || [];
  window.THEMES = window.THEMES || [];
  window.IMAGES = {};
  window.SITE = {};

  const TABLEAUX = { livre: "LIVRES", serie: "SERIES", histoire: "HISTOIRES", theme: "THEMES" };

  let entrees = {}; // "type:id" -> { data, supprime, le }

  // Réapplique toutes les modifications sur une copie fraîche du contenu d'origine.
  // Les tableaux sont modifiés sur place : app.js garde ses références.
  function appliquer() {
    for (const [type, nom] of Object.entries(TABLEAUX)) {
      const liste = copie(ORIGINAUX[type]);
      for (const [cle, e] of Object.entries(entrees)) {
        const [t, id] = separer(cle);
        if (t !== type) continue;
        const i = liste.findIndex(x => x.id === id);
        if (e.supprime) { if (i >= 0) liste.splice(i, 1); continue; }
        if (!e.data) continue;
        const objet = { ...e.data, id };
        if (i >= 0) liste[i] = objet; else liste.push(objet);
      }
      window[nom].splice(0, window[nom].length, ...liste);
    }
    const chapitres = window.LIVRES_CHAPITRES;
    Object.keys(chapitres).forEach(k => delete chapitres[k]);
    Object.assign(chapitres, copie(ORIGINAUX.chapitres));
    const images = window.IMAGES;
    Object.keys(images).forEach(k => delete images[k]);
    const site = window.SITE;
    Object.keys(site).forEach(k => delete site[k]);
    for (const [cle, e] of Object.entries(entrees)) {
      const [t, id] = separer(cle);
      if (t === "chapitres") {
        if (e.supprime) delete chapitres[id];
        else if (e.data) chapitres[id] = { chapitres: e.data.chapitres || [] };
      } else if (t === "image" && !e.supprime && e.data && imageValide(e.data.src)) {
        images[id] = e.data.src;
      } else if (t === "site" && !e.supprime && e.data) {
        site[id] = e.data;
      }
    }
  }

  function separer(cle) {
    const i = cle.indexOf(":");
    return [cle.slice(0, i), cle.slice(i + 1)];
  }
  function imageValide(src) {
    return typeof src === "string" && (/^data:image\/(png|jpe?g|webp|gif);base64,/.test(src) || /^https:\/\/[^\s"'<>]+$/.test(src));
  }

  // ---------- Les trois façons de stocker ----------

  // Dans la base de l'artefact, ":" est remplacé par "__" dans les identifiants de documents.
  const versDoc = cle => cle.replace(":", "__");
  const depuisDoc = id => id.replace("__", ":");

  const stockageClaude = {
    nom: "claude",
    async init() {
      if (!(window.claude && typeof window.claude.use === "function")) return false;
      this.db = await window.claude.use("db").catch(() => null);
      if (!this.db) return false;
      this.user = await window.claude.use("user").catch(() => null);
      return true;
    },
    async lire() {
      const snap = await this.db.collection("contenu").get();
      const r = {};
      snap.docs.forEach(d => { r[depuisDoc(d.id)] = d.data(); });
      return r;
    },
    async ecrire(cle, valeur) { await this.db.collection("contenu").doc(versDoc(cle)).set(valeur); },
    async effacer(cle) { await this.db.collection("contenu").doc(versDoc(cle)).delete(); },
    estAdmin() { return this.user ? this.user.canEdit() : false; },
    async connexion() { return this.estAdmin(); }
  };

  const stockageNetlify = {
    nom: "netlify",
    async init() {
      try {
        const r = await fetch(ADRESSE);
        if (!r.ok) return false;
        const d = await r.json();
        if (!d || typeof d.entrees !== "object") return false;
        this.premier = d.entrees;
        return true;
      } catch { return false; }
    },
    async lire() {
      if (this.premier) { const p = this.premier; this.premier = null; return p; }
      const r = await fetch(ADRESSE);
      return (await r.json()).entrees || {};
    },
    async envoyer(corps) {
      const r = await fetch(ADRESSE, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: lireSession(), ...corps })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.erreur || "L'enregistrement a échoué.");
      return d;
    },
    ecrire(cle, valeur) { return this.envoyer({ action: "enregistrer", cle, valeur }); },
    effacer(cle) { return this.envoyer({ action: "effacer", cle }); },
    estAdmin() { return !!lireSession(); },
    async connexion(code) {
      const r = await fetch(ADRESSE, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verifier", code })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.erreur || "Mot de passe incorrect.");
      ecrireSession(code);
      return true;
    },
    async changerMotDePasse(ancien, nouveau) {
      await this.envoyer({ action: "motdepasse", code: ancien, nouveau });
      ecrireSession(nouveau);
    }
  };

  const stockageLocal = {
    nom: "local",
    async init() { return true; },
    async lire() {
      try { return JSON.parse(localStorage.getItem(CLE_LOCALE)) || {}; } catch { return {}; }
    },
    sauver(tout) {
      try { localStorage.setItem(CLE_LOCALE, JSON.stringify(tout)); }
      catch { throw new Error("Impossible d'enregistrer sur cet appareil (mémoire pleine ou bloquée). Essayez une image plus petite."); }
    },
    async ecrire(cle, valeur) { const t = await this.lire(); t[cle] = valeur; this.sauver(t); },
    async effacer(cle) { const t = await this.lire(); delete t[cle]; this.sauver(t); },
    estAdmin() { return !!lireSession(); },
    async empreinte(texte) {
      if (window.crypto && crypto.subtle) {
        const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("morata|" + texte));
        return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, "0")).join("");
      }
      return "brut:" + texte;
    },
    async motDePasseAttendu() {
      let enregistre = null;
      try { enregistre = localStorage.getItem(CLE_MDP_LOCAL); } catch { /* aucun */ }
      return enregistre || this.empreinte(MDP_LOCAL_DEFAUT);
    },
    async connexion(code) {
      if ((await this.empreinte(code)) !== (await this.motDePasseAttendu())) throw new Error("Mot de passe incorrect.");
      ecrireSession(code);
      return true;
    },
    async changerMotDePasse(ancien, nouveau) {
      if ((await this.empreinte(ancien)) !== (await this.motDePasseAttendu())) throw new Error("Mot de passe actuel incorrect.");
      try { localStorage.setItem(CLE_MDP_LOCAL, await this.empreinte(nouveau)); }
      catch { throw new Error("Impossible d'enregistrer le mot de passe sur cet appareil."); }
      ecrireSession(nouveau);
    }
  };

  function lireSession() {
    try { return sessionStorage.getItem(CLE_SESSION) || ""; } catch { return ""; }
  }
  function ecrireSession(code) {
    try { if (code) sessionStorage.setItem(CLE_SESSION, code); else sessionStorage.removeItem(CLE_SESSION); } catch { /* session non gardée */ }
  }

  let stockage = null;
  async function choisirStockage() {
    for (const s of [stockageClaude, stockageNetlify, stockageLocal]) {
      if (await s.init()) return s;
    }
    return stockageLocal;
  }

  // Chargement au démarrage : resolve(true) si des modifications ont été appliquées.
  const pret = (async () => {
    try {
      stockage = await choisirStockage();
      entrees = (await stockage.lire()) || {};
    } catch {
      stockage = stockage || stockageLocal;
      entrees = {};
    }
    appliquer();
    return Object.keys(entrees).length > 0;
  })();

  // ---------- Ce que l'espace PDG utilise ----------

  async function enregistrer(type, id, data) {
    await pret;
    const cle = `${type}:${id}`;
    const valeur = { data, le: new Date().toISOString() };
    await stockage.ecrire(cle, valeur);
    entrees[cle] = valeur;
    appliquer();
  }

  // Supprimer : un élément d'origine est masqué ; un élément ajouté est effacé.
  async function supprimer(type, id) {
    await pret;
    const cle = `${type}:${id}`;
    if (estOriginal(type, id)) {
      const valeur = { supprime: true, le: new Date().toISOString() };
      await stockage.ecrire(cle, valeur);
      entrees[cle] = valeur;
    } else if (entrees[cle]) {
      await stockage.effacer(cle);
      delete entrees[cle];
    }
    appliquer();
  }

  // Revenir au contenu d'origine (efface la modification).
  async function reinitialiser(type, id) {
    await pret;
    const cle = `${type}:${id}`;
    if (!entrees[cle]) return;
    await stockage.effacer(cle);
    delete entrees[cle];
    appliquer();
  }

  function estOriginal(type, id) {
    if (type === "chapitres") return !!ORIGINAUX.chapitres[id];
    const liste = ORIGINAUX[type];
    return Array.isArray(liste) && liste.some(x => x.id === id);
  }
  function etat(type, id) {
    const e = entrees[`${type}:${id}`];
    if (!e) return estOriginal(type, id) ? "original" : "absent";
    if (e.supprime) return "supprime";
    return estOriginal(type, id) ? "modifie" : "ajoute";
  }
  function original(type, id) {
    if (type === "chapitres") return ORIGINAUX.chapitres[id] ? copie(ORIGINAUX.chapitres[id]) : null;
    const x = (ORIGINAUX[type] || []).find(o => o.id === id);
    return x ? copie(x) : null;
  }
  function historique() {
    return Object.entries(entrees)
      .map(([cle, e]) => ({ cle, type: separer(cle)[0], id: separer(cle)[1], le: e.le, supprime: !!e.supprime }))
      .sort((a, b) => String(b.le).localeCompare(String(a.le)));
  }
  function supprimes(type) {
    return Object.entries(entrees)
      .filter(([cle, e]) => e.supprime && separer(cle)[0] === type)
      .map(([cle]) => original(type, separer(cle)[1]))
      .filter(Boolean);
  }

  function sauvegarde() {
    return JSON.stringify({ format: "morata-contenu", exporteLe: new Date().toISOString(), entrees }, null, 2);
  }

  window.CONTENU = {
    pret,
    enregistrer, supprimer, reinitialiser,
    etat, original, historique, supprimes, sauvegarde, imageValide,
    mode: () => (stockage ? stockage.nom : "local"),
    estAdmin: () => !!(stockage && stockage.estAdmin()),
    connexion: async code => { await pret; return stockage.connexion(code); },
    deconnexion: () => ecrireSession(""),
    peutChangerMotDePasse: () => !!(stockage && stockage.changerMotDePasse),
    changerMotDePasse: (ancien, nouveau) => stockage.changerMotDePasse(ancien, nouveau),
    code: lireSession,
    motDePasseLocalParDefaut: MDP_LOCAL_DEFAUT
  };
})();
