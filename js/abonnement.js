// Comptes lecteurs et abonnement mensuel.
// Le lecteur lit les premiers chapitres gratuitement, puis s'inscrit et paie l'abonnement
// (Wave, Djamo… : moyens réglés par le PDG dans Paramètres > Abonnement & paiements).
// Le paiement est déclaré par le lecteur puis validé par le PDG dans l'espace PDG > Abonnés.
// Où sont gardés les comptes (même ordre que js/contenu.js) :
//  1. Dans Claude : base de l'artefact (abonnes/<id> écrit par le lecteur, statuts/<id> par le PDG seul).
//  2. Sur Netlify : la fonction netlify/functions/abonnes.mjs.
//  3. Sinon : le navigateur de cet appareil (démonstration).
(function () {
  const JOUR = 86400000;
  const ADRESSE = "/.netlify/functions/abonnes";
  const CLE_JETON = "kalan-jeton";
  const CLE_COMPTE = "kalan-compte";
  const CLE_LISTE = "kalan-abonnes";

  // Réglages par défaut (modifiables dans l'espace PDG). Le numéro de compte Djamo
  // n'est pas écrit ici : le PDG le saisit lui-même s'il veut l'afficher aux lecteurs.
  const PAIEMENT_DEFAUT = window.PAIEMENT_DEFAUT = {
    prixEuro: "0,99",
    prixFcfa: "650",
    chapitresGratuits: 1,
    obligatoire: "oui",
    heuresProvisoires: 48,
    moyens: [
      { nom: "Wave", numero: "0544176359", details: "Envoyez le montant par Wave à ce numéro, puis indiquez ci-dessous le numéro qui a payé.", lien: "" },
      { nom: "Djamo", numero: "", details: "Virement ou carte Djamo vers ce compte, puis indiquez ci-dessous la référence du paiement.", lien: "" }
    ]
  };

  const lireLocal = (cle, defaut) => { try { return JSON.parse(localStorage.getItem(cle)) || defaut; } catch { return defaut; } };
  const ecrireLocal = (cle, v) => { try { if (v == null) localStorage.removeItem(cle); else localStorage.setItem(cle, JSON.stringify(v)); } catch { /* non gardé */ } };
  const chiffres = v => String(v || "").replace(/\D/g, "");
  const maintenant = () => new Date().toISOString();
  const nouvelId = () => Math.random().toString(16).slice(2, 10) + Date.now().toString(16).slice(-6);

  function reglages() {
    const r = { ...PAIEMENT_DEFAUT, ...((window.SITE || {}).paiement || {}) };
    r.chapitresGratuits = Math.max(0, parseInt(r.chapitresGratuits, 10) || 0);
    r.heuresProvisoires = Math.max(0, Number(r.heuresProvisoires) || 0);
    r.moyens = Array.isArray(r.moyens) ? r.moyens : [];
    return r;
  }
  // Les moyens affichés aux lecteurs : seulement ceux qui ont un numéro ou un lien.
  const moyensVisibles = () => reglages().moyens.filter(m => m && m.nom && (chiffres(m.numero) || /^https:\/\//.test(m.lien || "")));

  // ---------- Les trois façons de garder les comptes ----------

  const viaClaude = {
    nom: "claude",
    motDePasse: false,
    async init() {
      if (!(window.claude && typeof window.claude.use === "function")) return false;
      this.db = await window.claude.use("db").catch(() => null);
      this.user = await window.claude.use("user").catch(() => null);
      if (!this.db || !this.user) return false;
      this.uid = await this.user.id().catch(() => null);
      return true;
    },
    async moi() {
      if (!this.uid) return null;
      const [a, s] = await Promise.all([
        this.db.collection("abonnes").doc(this.uid).get(),
        this.db.collection("statuts").doc(this.uid).get()
      ]);
      return a.exists ? { id: this.uid, ...a.data(), ...(s.exists ? s.data() : {}) } : null;
    },
    async inscrire({ nom, telephone }) {
      if (!this.uid) throw new Error("Connectez-vous à Claude pour vous inscrire.");
      await this.db.collection("abonnes").doc(this.uid).set({ nom, telephone, creeLe: maintenant() });
      return this.moi();
    },
    async connecter() { return this.moi(); },
    async deconnecter() { /* l'identité vient du compte Claude */ },
    async payer(paiement) {
      await this.db.collection("abonnes").doc(this.uid).update({ paiement });
      return this.moi();
    },
    async lister() {
      const [a, s] = await Promise.all([this.db.collection("abonnes").get(), this.db.collection("statuts").get()]);
      const st = {};
      s.docs.forEach(d => { st[d.id] = d.data(); });
      return a.docs.map(d => ({ id: d.id, ...d.data(), ...(st[d.id] || {}) }));
    },
    async traiter(id, statut, jusqua) {
      await this.db.collection("statuts").doc(id).set({ statut, jusqua: jusqua || null, traiteLe: maintenant() });
    },
    async supprimer(id) {
      await this.db.collection("abonnes").doc(id).delete();
      await this.db.collection("statuts").doc(id).delete().catch(() => {});
    }
  };

  const viaNetlify = {
    nom: "netlify",
    motDePasse: true,
    async init() { return window.CONTENU && window.CONTENU.mode() === "netlify"; },
    async appel(corps) {
      const r = await fetch(ADRESSE, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corps) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) { const e = new Error(d.erreur || "Le serveur ne répond pas."); e.status = r.status; throw e; }
      return d;
    },
    async session(d) { ecrireLocal(CLE_JETON, d.jeton); return d.compte; },
    async moi() {
      const jeton = lireLocal(CLE_JETON, "");
      if (!jeton) return null;
      try { return (await this.appel({ action: "moi", jeton })).compte; }
      catch (e) { if (e.status === 401) ecrireLocal(CLE_JETON, null); return null; }
    },
    async inscrire(x) { return this.session(await this.appel({ action: "inscrire", ...x })); },
    async connecter(x) { return this.session(await this.appel({ action: "connecter", ...x })); },
    async deconnecter() {
      const jeton = lireLocal(CLE_JETON, "");
      ecrireLocal(CLE_JETON, null);
      if (jeton) await this.appel({ action: "deconnecter", jeton }).catch(() => {});
    },
    async payer(p) { return (await this.appel({ action: "payer", jeton: lireLocal(CLE_JETON, ""), moyen: p.moyen, reference: p.reference })).compte; },
    async lister() { return (await this.appel({ action: "lister", code: window.CONTENU.code() })).comptes; },
    async traiter(id, statut) {
      await this.appel({ action: statut === "actif" ? "valider" : "refuser", id, jours: 30, code: window.CONTENU.code() });
    },
    async supprimer(id) { await this.appel({ action: "supprimer", id, code: window.CONTENU.code() }); }
  };

  // Sans serveur : le compte reste sur cet appareil (utile pour essayer le parcours).
  const viaLocal = {
    nom: "local",
    motDePasse: false,
    async init() { return true; },
    liste() { return lireLocal(CLE_LISTE, []); },
    garder(u) {
      const l = this.liste().filter(x => x.id !== u.id);
      ecrireLocal(CLE_LISTE, [u, ...l]);
      return u;
    },
    async moi() {
      const c = lireLocal(CLE_COMPTE, null);
      return c && (this.liste().find(x => x.id === c.id) || null);
    },
    async inscrire({ nom, telephone }) {
      const tel = chiffres(telephone);
      const u = this.liste().find(x => x.telephone === tel) || this.garder({ id: nouvelId(), nom, telephone: tel, creeLe: maintenant() });
      ecrireLocal(CLE_COMPTE, { id: u.id });
      return u;
    },
    async connecter({ telephone }) {
      const u = this.liste().find(x => x.telephone === chiffres(telephone));
      if (!u) throw new Error("Aucun compte avec ce numéro sur cet appareil.");
      ecrireLocal(CLE_COMPTE, { id: u.id });
      return u;
    },
    async deconnecter() { ecrireLocal(CLE_COMPTE, null); },
    async payer(paiement) {
      const u = await this.moi();
      return this.garder({ ...u, paiement });
    },
    async lister() { return this.liste(); },
    async traiter(id, statut, jusqua) {
      const u = this.liste().find(x => x.id === id);
      if (u) this.garder({ ...u, statut, jusqua: jusqua || u.jusqua || null, traiteLe: maintenant() });
    },
    async supprimer(id) { ecrireLocal(CLE_LISTE, this.liste().filter(x => x.id !== id)); }
  };

  let stockage = viaLocal;
  let compte = null;
  const auChangement = [];
  const prevenir = () => auChangement.forEach(f => { try { f(compte); } catch { /* rien */ } });

  const pret = (async () => {
    if (window.CONTENU) await window.CONTENU.pret.catch(() => {});
    for (const s of [viaClaude, viaNetlify, viaLocal]) {
      try { if (await s.init()) { stockage = s; break; } } catch { /* suivant */ }
    }
    try { compte = await stockage.moi(); } catch { compte = null; }
    return compte;
  })();

  // ---------- Statut d'un compte ----------

  const t = v => Date.parse(v || "") || 0;
  function enAttente(c) { return !!(c && c.paiement && t(c.paiement.le) > t(c.traiteLe)); }
  function actif(c) { return !!(c && c.statut === "actif" && t(c.jusqua) > Date.now()); }
  function provisoire(c) {
    const h = reglages().heuresProvisoires;
    return enAttente(c) && c.statut !== "refuse" && Date.now() - t(c.paiement.le) < h * 3600000;
  }
  // Étiquette lisible pour le lecteur et le PDG.
  function etat(c) {
    if (!c) return { code: "anonyme", texte: "Pas de compte", pastille: "p-mute" };
    if (actif(c)) return { code: "actif", texte: "Abonné", pastille: "p-ok" };
    if (enAttente(c)) return { code: "attente", texte: "Paiement à vérifier", pastille: "p-gold" };
    if (c.statut === "refuse") return { code: "refuse", texte: "Paiement refusé", pastille: "p-bad" };
    if (c.statut === "actif") return { code: "expire", texte: "Abonnement expiré", pastille: "p-bad" };
    return { code: "inscrit", texte: "Inscrit, sans abonnement", pastille: "p-mute" };
  }

  // Le lecteur peut-il lire au-delà des chapitres gratuits ?
  function acces() {
    if (window.CONTENU && window.CONTENU.estAdmin()) return { ok: true, raison: "pdg" };
    if (!compte) return { ok: false, raison: "anonyme" };
    if (reglages().obligatoire !== "oui") return { ok: true, raison: "libre" };
    if (actif(compte)) return { ok: true, raison: "actif" };
    if (provisoire(compte)) return { ok: true, raison: "provisoire" };
    return { ok: false, raison: etat(compte).code };
  }
  const chapitreLibre = n => n <= reglages().chapitresGratuits || acces().ok;

  async function changer(promesse) {
    compte = await promesse;
    prevenir();
    return compte;
  }

  window.ABO = {
    pret,
    mode: () => stockage.nom,
    demandeMotDePasse: () => stockage.motDePasse,
    compte: () => compte,
    reglages, moyensVisibles, etat, acces, chapitreLibre, enAttente, actif,
    surChangement: f => auChangement.push(f),
    async inscrire({ nom, telephone, motdepasse }) {
      nom = String(nom || "").trim();
      if (!nom || chiffres(telephone).length < 8) throw new Error("Indiquez votre nom et un numéro de téléphone complet.");
      if (stockage.motDePasse && String(motdepasse || "").length < 6) throw new Error("Le mot de passe doit faire au moins 6 caractères.");
      return changer(stockage.inscrire({ nom: nom.slice(0, 80), telephone: chiffres(telephone).slice(0, 15), motdepasse }));
    },
    connecter: x => changer(stockage.connecter(x)),
    async deconnecter() { await stockage.deconnecter(); compte = null; prevenir(); },
    async declarerPaiement({ moyen, reference }) {
      reference = String(reference || "").trim().slice(0, 80);
      if (!reference) throw new Error("Indiquez le numéro qui a payé ou la référence du paiement.");
      return changer(stockage.payer({ moyen: String(moyen || "").slice(0, 40), reference, le: maintenant() }));
    },
    // Espace PDG
    lister: () => stockage.lister(),
    async valider(c, jours = 30) {
      const depart = Math.max(Date.now(), t(c.jusqua));
      await stockage.traiter(c.id, "actif", new Date(depart + jours * JOUR).toISOString());
    },
    refuser: c => stockage.traiter(c.id, "refuse", c.jusqua),
    supprimer: c => stockage.supprimer(c.id)
  };
})();
