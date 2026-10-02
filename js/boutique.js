// Boutique : livres mis en vente par le propriétaire du site.
// Où sont gardées les annonces (essayé dans l'ordre) :
//  1. Dans Claude (aperçu publié) : la base de données de l'artefact.
//  2. Sur Netlify : la fonction netlify/functions/boutique.mjs (mot de passe PDG).
// Les lecteurs voient les annonces ; ajouter ou retirer un livre se fait dans l'espace PDG.
//  3. Sinon : le navigateur de cet appareil seulement.
(function () {
  const CLE_LOCALE = "morata-boutique";
  const ADRESSE = "/.netlify/functions/boutique";

  function echapper(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function formatPrix(prix) {
    const n = Number(prix);
    return Number.isFinite(n) && n > 0 ? n.toLocaleString("fr-FR") + " FCFA" : "Prix sur demande";
  }

  function lienWhatsapp(livre) {
    const numero = String(livre.whatsapp || "").replace(/\D/g, "");
    if (!numero) return "";
    const texte = `Bonjour, je souhaite commander « ${livre.titre} » (${formatPrix(livre.prix)}) vu sur Morata.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;
  }

  // ---------- Les trois façons de stocker ----------

  const stockageClaude = {
    nom: "claude",
    async init() {
      if (!(window.claude && typeof window.claude.use === "function")) return false;
      this.db = await window.claude.use("db").catch(() => null);
      if (!this.db) return false;
      const user = await window.claude.use("user").catch(() => null);
      this.peutAjouter = user ? user.canEdit() : true;
      return true;
    },
    async lister() {
      const snap = await this.db.collection("boutique").orderBy("creeLe", "desc").get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    async ajouter(livre) { await this.db.collection("boutique").add(livre); },
    async supprimer(id) { await this.db.collection("boutique").doc(id).delete(); }
  };

  const stockageNetlify = {
    nom: "netlify",
    peutAjouter: true,
    demandeCode: true,
    async init() {
      try {
        const r = await fetch(ADRESSE);
        if (!r.ok) return false;
        const d = await r.json();
        this.cache = Array.isArray(d.livres) ? d.livres : [];
        return true;
      } catch { return false; }
    },
    async lister() {
      const r = await fetch(ADRESSE);
      const d = await r.json();
      return Array.isArray(d.livres) ? d.livres : [];
    },
    async envoyer(methode, corps) {
      const r = await fetch(ADRESSE, { method: methode, headers: { "Content-Type": "application/json" }, body: JSON.stringify(corps) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.erreur || "L'enregistrement a échoué.");
    },
    ajouter(livre, code) { return this.envoyer("POST", { code, livre }); },
    supprimer(id, code) { return this.envoyer("DELETE", { code, id }); }
  };

  const stockageLocal = {
    nom: "local",
    peutAjouter: true,
    async init() { return true; },
    lire() {
      try { return JSON.parse(localStorage.getItem(CLE_LOCALE)) || []; } catch { return []; }
    },
    ecrire(liste) {
      try { localStorage.setItem(CLE_LOCALE, JSON.stringify(liste)); }
      catch { throw new Error("Impossible d'enregistrer sur cet appareil (mémoire pleine ou bloquée)."); }
    },
    async lister() { return this.lire(); },
    async ajouter(livre) { const l = this.lire(); l.unshift({ id: "l" + Date.now(), ...livre }); this.ecrire(l); },
    async supprimer(id) { this.ecrire(this.lire().filter(l => l.id !== id)); }
  };

  let stockage;
  async function obtenirStockage() {
    if (!stockage) {
      stockage = (async () => {
        for (const s of [stockageClaude, stockageNetlify, stockageLocal]) {
          if (await s.init()) return s;
        }
        return stockageLocal;
      })();
    }
    return stockage;
  }

  // Photo réduite à 480 px pour rester légère.
  function reduirePhoto(fichier) {
    return new Promise((resolve, reject) => {
      const lecteur = new FileReader();
      lecteur.onerror = () => reject(new Error("Photo illisible."));
      lecteur.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error("Ce fichier n'est pas une image."));
        img.onload = () => {
          const echelle = Math.min(1, 480 / Math.max(img.width, img.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * echelle);
          canvas.height = Math.round(img.height * echelle);
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.75));
        };
        img.src = lecteur.result;
      };
      lecteur.readAsDataURL(fichier);
    });
  }

  function couvertureAnnonce(livre) {
    return `
      <div class="couverture" style="--c1:#7a3b12;--c2:#3d1d08">
        ${livre.photo && String(livre.photo).startsWith("data:image/") ? `<img src="${echapper(livre.photo)}" alt="">` : ""}
        ${livre.photo ? "" : `<span class="couverture__titre">${echapper(livre.titre)}</span><span class="couverture__auteur">${echapper(livre.auteur)}</span>`}
      </div>`;
  }

  function carteAnnonce(livre, peutSupprimer) {
    const wa = lienWhatsapp(livre);
    return `
      <article class="carte annonce">
        ${couvertureAnnonce(livre)}
        <div class="meta"><span class="etiquette etiquette--accent">${echapper(livre.format || "Livre")}</span></div>
        <h3>${echapper(livre.titre)}</h3>
        <div class="meta">${echapper(livre.auteur)}</div>
        <div class="prix">${formatPrix(livre.prix)}</div>
        ${livre.description ? `<p>${echapper(livre.description)}</p>` : ""}
        ${wa ? `<a class="bouton bouton--whatsapp" href="${wa}" target="_blank" rel="noopener">Commander sur WhatsApp</a>` : ""}
        ${peutSupprimer ? `<button class="bouton bouton--contour bouton--petit" data-supprimer="${echapper(livre.id)}" type="button">Retirer de la vente</button>` : ""}
      </article>`;
  }

  // Page des lecteurs : les annonces, sans bouton d'ajout ni de retrait.
  async function pageBoutique(app, sous) {
    if (sous === "vendre") { location.hash = "#/pdg/boutique/nouveau"; return; }
    app.innerHTML = `
      <h1 class="page-titre">Boutique</h1>
      <p class="page-sous-titre">Les livres de l'auteur, disponibles à la commande sur WhatsApp.</p>
      <div class="grille grille--large" id="annonces"><p class="vide">Chargement…</p></div>`;
    await remplirAnnonces(app.querySelector("#annonces"), false);
  }

  // Liste des annonces ; avec gestion = true, chaque annonce a un bouton « Retirer » (espace PDG).
  async function remplirAnnonces(zone, gestion, apresRetrait) {
    const s = await obtenirStockage();
    let liste = [];
    try { liste = await s.lister(); }
    catch { zone.innerHTML = `<p class="vide">Impossible de charger la boutique pour le moment.</p>`; return 0; }
    if (!document.body.contains(zone)) return liste.length;
    zone.innerHTML = liste.length
      ? liste.map(l => carteAnnonce(l, gestion)).join("")
      : `<div class="carte vide" style="grid-column:1/-1">
           <h3>Aucun livre en vente pour le moment</h3>
           <p>${gestion ? "Ajoutez votre premier livre : titre, prix, photo de couverture et numéro WhatsApp pour recevoir les commandes." : "Revenez bientôt : de nouveaux livres arrivent."}</p>
         </div>`;
    zone.querySelectorAll("[data-supprimer]").forEach(b => b.addEventListener("click", async () => {
      if (b.dataset.confirme !== "1") { b.dataset.confirme = "1"; b.textContent = "Confirmer le retrait"; return; }
      b.disabled = true;
      try { await s.supprimer(b.dataset.supprimer, codePDG()); if (apresRetrait) apresRetrait(); }
      catch (e) { b.disabled = false; b.textContent = e.message || "Échec du retrait"; }
    }));
    return liste.length;
  }

  const codePDG = () => (window.CONTENU ? window.CONTENU.code() : "");

  // Formulaire d'ajout, affiché dans l'espace PDG.
  async function formulaireVente(app, retour) {
    const s = await obtenirStockage();
    app.innerHTML = `
      <h1 class="page-titre">Mettre un livre en vente</h1>
      <p class="page-sous-titre">L'annonce apparaîtra dans la boutique. Les acheteurs vous contactent sur WhatsApp.</p>
      ${s.peutAjouter === false ? `<p class="message message--erreur">Seul le propriétaire du site peut ajouter des livres.</p>` : `
      <form class="formulaire" id="form-vente" novalidate>
        <label class="champ" for="v-titre">Titre du livre
          <input id="v-titre" name="titre" required maxlength="120" placeholder="Ex. : Le courage d'avancer">
        </label>
        <label class="champ" for="v-auteur">Auteur
          <input id="v-auteur" name="auteur" required maxlength="80" placeholder="Votre nom">
        </label>
        <div class="deux-colonnes">
          <label class="champ" for="v-prix">Prix (FCFA)
            <input id="v-prix" name="prix" type="number" min="0" step="100" inputmode="numeric" placeholder="5000">
          </label>
          <label class="champ" for="v-format">Format
            <select id="v-format" name="format">
              <option>Papier</option><option>PDF</option><option>Papier et PDF</option>
            </select>
          </label>
        </div>
        <label class="champ" for="v-description">Description
          <textarea id="v-description" name="description" rows="4" maxlength="800" placeholder="De quoi parle le livre, à qui il s'adresse, nombre de pages…"></textarea>
        </label>
        <label class="champ" for="v-whatsapp">Numéro WhatsApp
          <input id="v-whatsapp" name="whatsapp" required inputmode="tel" placeholder="+225 07 00 00 00 00">
          <small>Avec l'indicatif du pays. Les commandes arrivent sur ce numéro.</small>
        </label>
        <label class="champ" for="v-photo">Photo de couverture (facultatif)
          <input id="v-photo" name="photo" type="file" accept="image/*">
        </label>
        <img class="apercu-photo" id="v-apercu" alt="" hidden>
        <div id="v-message" aria-live="polite"></div>
        <button class="bouton bouton--accent" type="submit" id="v-envoyer">Publier l'annonce</button>
      </form>`}`;

    const form = app.querySelector("#form-vente");
    if (!form) return;
    let photo = "";
    const champPhoto = form.querySelector("#v-photo");
    const apercu = form.querySelector("#v-apercu");
    const message = form.querySelector("#v-message");
    const afficher = (texte, erreur) => { message.innerHTML = `<p class="message${erreur ? " message--erreur" : ""}">${echapper(texte)}</p>`; };

    champPhoto.addEventListener("change", async () => {
      photo = "";
      apercu.hidden = true;
      const f = champPhoto.files && champPhoto.files[0];
      if (!f) return;
      try { photo = await reduirePhoto(f); apercu.src = photo; apercu.hidden = false; }
      catch (e) { afficher(e.message, true); }
    });

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const d = new FormData(form);
      const livre = {
        titre: String(d.get("titre") || "").trim(),
        auteur: String(d.get("auteur") || "").trim(),
        prix: Number(d.get("prix")) || 0,
        format: String(d.get("format") || "Papier"),
        description: String(d.get("description") || "").trim(),
        whatsapp: String(d.get("whatsapp") || "").trim(),
        photo,
        creeLe: new Date().toISOString()
      };
      if (!livre.titre || !livre.auteur) return afficher("Indiquez le titre et l'auteur.", true);
      if (String(livre.whatsapp).replace(/\D/g, "").length < 8) return afficher("Indiquez un numéro WhatsApp complet, avec l'indicatif du pays.", true);
      const bouton = form.querySelector("#v-envoyer");
      bouton.disabled = true;
      bouton.textContent = "Publication…";
      try {
        await s.ajouter(livre, codePDG());
        location.hash = retour;
      } catch (e) {
        afficher(e && e.code === "invalid_argument" ? "Vous n'avez pas le droit d'ajouter des livres ici." : (e.message || "La publication a échoué."), true);
        bouton.disabled = false;
        bouton.textContent = "Publier l'annonce";
      }
    });
  }

  window.pageBoutique = pageBoutique;
  window.BOUTIQUE = { remplirAnnonces, formulaireVente, stockage: obtenirStockage };
})();
