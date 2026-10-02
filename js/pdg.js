// Espace PDG (#/pdg) : tableau de bord réservé au propriétaire, séparé de l'espace lecteurs.
// On y modifie tout le contenu : livres et leurs chapitres, séries, histoires, thèmes,
// images, textes de la page d'accueil, boutique et mot de passe.
(function () {
  const C = () => window.CONTENU;

  function echapper(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  const copie = v => JSON.parse(JSON.stringify(v == null ? null : v));

  function identifiant(texte, existants) {
    const base = String(texte || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "element";
    let id = base, n = 2;
    while (existants.includes(id)) id = `${base}-${n++}`;
    return id;
  }

  // ---------- Ce que l'on peut modifier ----------

  const optionsThemes = () => (window.THEMES || []).map(t => ({ v: t.id, t: `${t.emoji} ${t.nom}` }));

  const SECTIONS_LIVRE = [
    { nom: "titre", label: "Titre de la section", type: "texte" },
    { nom: "texte", label: "Explication", type: "zone", lignes: 7 },
    { nom: "exemple", label: "Exemple", type: "zone", lignes: 4 }
  ];
  const CHAPITRE_LIVRE = [
    { nom: "titre", label: "Titre du chapitre", type: "texte" },
    { nom: "intro", label: "Introduction", type: "zone", lignes: 3 },
    { nom: "sections", label: "Sections", type: "liste", sous: SECTIONS_LIVRE, nouveau: "Ajouter une section", nomItem: "Section" },
    { nom: "aRetenir", label: "À retenir", type: "zone", lignes: 2 }
  ];
  const CHAPITRE_SERIE = [
    { nom: "titre", label: "Titre du chapitre", type: "texte" },
    { nom: "sections", label: "Sections", type: "liste", sous: [
      { nom: "titre", label: "Titre de la section", type: "texte" },
      { nom: "texte", label: "Texte", type: "zone", lignes: 9 }
    ], nouveau: "Ajouter une section", nomItem: "Section" },
    { nom: "lecon", label: "Leçon du chapitre", type: "objet", sous: [
      { nom: "texte", label: "La leçon", type: "zone", lignes: 3 },
      { nom: "exemple", label: "Dans votre vie (exemple)", type: "zone", lignes: 3 }
    ] }
  ];

  const TYPES = {
    livre: {
      tableau: "LIVRES", titre: "Livres", un: "le livre", nouveau: "Ajouter un livre", champTitre: "titre",
      lien: id => `#/livres/${id}`, image: id => "livre-" + id, imageAide: "La couverture du livre (photo ou lien d'image).",
      sousTitre: x => `${x.auteur || ""}${x.categorie ? " · " + x.categorie : ""}`,
      schema: () => [
        { nom: "titre", label: "Titre", type: "texte", requis: true },
        { nom: "auteur", label: "Auteur", type: "texte" },
        { nom: "categorie", label: "Catégorie", type: "texte", suggestions: [...new Set((window.LIVRES || []).map(l => l.categorie).filter(Boolean))] },
        { nom: "annee", label: "Année", type: "nombre", demi: true },
        { nom: "tempsLecture", label: "Lecture express (minutes)", type: "nombre", demi: true },
        { nom: "accroche", label: "Accroche", type: "zone", lignes: 2 },
        { nom: "original", label: "Titre original (sert à trouver la vraie couverture)", type: "objet", sous: [
          { nom: "titre", label: "Titre original", type: "texte" },
          { nom: "auteur", label: "Auteur", type: "texte" }
        ] },
        { nom: "idees", label: "L'essentiel en 5 min : idées clés", type: "liste", sous: [
          { nom: "titre", label: "Idée", type: "texte" },
          { nom: "texte", label: "Explication", type: "zone", lignes: 3 }
        ], nouveau: "Ajouter une idée", nomItem: "Idée" },
        { nom: "aRetenir", label: "À retenir", type: "zone", lignes: 2 },
        { nom: "questions", label: "Questions pour réfléchir (une par ligne)", type: "lignes" },
        { nom: "action", label: "Passer à l'action", type: "zone", lignes: 2 },
        { nom: "chapitres", label: "Résumé en chapitres", type: "liste", sous: CHAPITRE_LIVRE, nouveau: "Ajouter un chapitre", nomItem: "Chapitre" }
      ]
    },
    serie: {
      tableau: "SERIES", titre: "Séries", un: "la série", nouveau: "Ajouter une série", champTitre: "titre",
      lien: id => `#/serie/${id}`, image: id => "serie-" + id, imageAide: "L'image de la série (couverture et haut du chapitre 1).",
      sousTitre: x => `${(x.chapitres || []).length} chapitres · ${nomTheme(x.theme)}`,
      schema: () => [
        { nom: "titre", label: "Titre", type: "texte", requis: true },
        { nom: "theme", label: "Thème", type: "choix", options: optionsThemes() },
        { nom: "resume", label: "Résumé", type: "zone", lignes: 3 },
        { nom: "personnages", label: "Personnages", type: "zone", lignes: 3 },
        { nom: "chapitres", label: "Chapitres", type: "liste", sous: CHAPITRE_SERIE, nouveau: "Ajouter un chapitre", nomItem: "Chapitre" }
      ]
    },
    histoire: {
      tableau: "HISTOIRES", titre: "Histoires courtes", un: "l'histoire", nouveau: "Ajouter une histoire", champTitre: "titre",
      lien: id => `#/histoires/${id}`, image: id => "histoire-" + id, imageAide: "L'image de l'histoire (carte et haut de page).",
      sousTitre: x => `${nomTheme(x.theme)} · ${x.tempsLecture || "?"} min`,
      schema: () => [
        { nom: "titre", label: "Titre", type: "texte", requis: true },
        { nom: "theme", label: "Thème", type: "choix", options: optionsThemes(), demi: true },
        { nom: "tempsLecture", label: "Lecture (minutes)", type: "nombre", demi: true },
        { nom: "resume", label: "Résumé", type: "zone", lignes: 2 },
        { nom: "texte", label: "Texte de l'histoire (laisser une ligne vide entre les paragraphes)", type: "zone", lignes: 16 },
        { nom: "morale", label: "Morale", type: "zone", lignes: 2 }
      ]
    },
    theme: {
      tableau: "THEMES", titre: "Thèmes", un: "le thème", nouveau: "Ajouter un thème", champTitre: "nom",
      lien: id => `#/histoires/theme/${id}`, image: id => "theme-" + id, imageAide: "L'image du thème (tuile d'accueil et histoires sans image).",
      sousTitre: x => x.emoji || "",
      schema: () => [
        { nom: "nom", label: "Nom", type: "texte", requis: true },
        { nom: "emoji", label: "Emoji", type: "texte", demi: true }
      ]
    }
  };

  function nomTheme(id) {
    const t = (window.THEMES || []).find(x => x.id === id);
    return t ? `${t.emoji} ${t.nom}` : (id || "Sans thème");
  }

  // ---------- Formulaires construits à partir des descriptions ci-dessus ----------

  const schemas = [];
  const numeroSchema = s => { let i = schemas.indexOf(s); if (i < 0) { schemas.push(s); i = schemas.length - 1; } return i; };
  let compteurChamp = 0;

  function rendreObjet(schema, valeur) {
    return `<div class="ed-objet">${schema.map(c => rendreChamp(c, valeur ? valeur[c.nom] : undefined)).join("")}</div>`;
  }

  function rendreChamp(c, v) {
    const id = "ed-" + (++compteurChamp);
    const classe = `champ ed-champ${c.demi ? " ed-champ--demi" : ""}`;
    switch (c.type) {
      case "zone":
        return `<label class="${classe}" data-champ="${c.nom}" for="${id}">${echapper(c.label)}
          <textarea id="${id}" rows="${c.lignes || 4}">${echapper(v)}</textarea></label>`;
      case "lignes":
        return `<label class="${classe}" data-champ="${c.nom}" for="${id}">${echapper(c.label)}
          <textarea id="${id}" rows="4">${echapper((v || []).join("\n"))}</textarea></label>`;
      case "nombre":
        return `<label class="${classe}" data-champ="${c.nom}" for="${id}">${echapper(c.label)}
          <input id="${id}" type="number" inputmode="numeric" value="${echapper(v)}"></label>`;
      case "choix": {
        const options = (c.options || []).slice();
        if (v && !options.some(o => o.v === v)) options.push({ v, t: v });
        return `<label class="${classe}" data-champ="${c.nom}" for="${id}">${echapper(c.label)}
          <select id="${id}">${options.map(o => `<option value="${echapper(o.v)}"${o.v === v ? " selected" : ""}>${echapper(o.t)}</option>`).join("")}</select></label>`;
      }
      case "objet":
        return `<fieldset class="ed-champ ed-groupe" data-champ="${c.nom}"><legend>${echapper(c.label)}</legend>${rendreObjet(c.sous, v || {})}</fieldset>`;
      case "liste": {
        const items = Array.isArray(v) ? v : [];
        return `<div class="ed-champ ed-liste" data-champ="${c.nom}" data-schema="${numeroSchema(c)}">
          <div class="ed-liste__tete"><strong>${echapper(c.label)}</strong><span class="ed-compte">${items.length}</span></div>
          <div class="ed-items">${items.map((x, i) => rendreItem(c, x, i, false)).join("")}</div>
          <button class="bouton bouton--contour bouton--petit" type="button" data-ajouter>+ ${echapper(c.nouveau || "Ajouter")}</button>
        </div>`;
      }
      default: {
        const liste = c.suggestions ? `<datalist id="${id}-l">${c.suggestions.map(s => `<option value="${echapper(s)}">`).join("")}</datalist>` : "";
        return `<label class="${classe}" data-champ="${c.nom}" for="${id}">${echapper(c.label)}
          <input id="${id}" value="${echapper(v)}"${c.requis ? " required" : ""}${c.suggestions ? ` list="${id}-l"` : ""}>${liste}</label>`;
      }
    }
  }

  function rendreItem(c, valeur, i, ouvert) {
    const titre = valeur && (valeur.titre || valeur.nom);
    return `<details class="ed-item"${ouvert ? " open" : ""}>
      <summary>
        <span class="ed-item__titre"><span class="ed-item__num">${echapper(c.nomItem || "")} ${i + 1}</span> ${echapper(titre || "")}</span>
        <span class="ed-item__actions">
          <button type="button" data-monter aria-label="Monter">↑</button>
          <button type="button" data-descendre aria-label="Descendre">↓</button>
          <button type="button" data-retirer aria-label="Retirer">✕</button>
        </span>
      </summary>
      ${rendreObjet(c.sous, valeur || {})}
    </details>`;
  }

  function lireObjet(el, schema) {
    const r = {};
    schema.forEach(c => {
      const champ = el.querySelector(`:scope > [data-champ="${c.nom}"]`);
      if (!champ) return;
      if (c.type === "objet") r[c.nom] = lireObjet(champ.querySelector(":scope > .ed-objet"), c.sous);
      else if (c.type === "liste") r[c.nom] = [...champ.querySelectorAll(":scope > .ed-items > .ed-item")]
        .map(item => lireObjet(item.querySelector(":scope > .ed-objet"), c.sous));
      else {
        const v = champ.querySelector("input, textarea, select").value;
        if (c.type === "nombre") r[c.nom] = v === "" ? "" : Number(v);
        else if (c.type === "lignes") r[c.nom] = v.split("\n").map(x => x.trim()).filter(Boolean);
        else r[c.nom] = c.type === "zone" ? v.replace(/\r/g, "").trim() : v.trim();
      }
    });
    return r;
  }

  function renumeroter(liste) {
    const items = liste.querySelectorAll(":scope > .ed-items > .ed-item");
    const c = schemas[liste.dataset.schema];
    items.forEach((item, i) => { item.querySelector(".ed-item__num").textContent = `${c.nomItem || ""} ${i + 1}`; });
    liste.querySelector(":scope > .ed-liste__tete .ed-compte").textContent = items.length;
  }

  // Boutons des listes (ajouter, monter, descendre, retirer) et titres qui suivent la saisie.
  function brancherFormulaire(form, auChangement) {
    form.addEventListener("click", ev => {
      const b = ev.target.closest("button");
      if (!b || !form.contains(b)) return;
      if (b.hasAttribute("data-ajouter")) {
        const liste = b.closest(".ed-liste");
        const c = schemas[liste.dataset.schema];
        const zone = liste.querySelector(":scope > .ed-items");
        zone.insertAdjacentHTML("beforeend", rendreItem(c, {}, zone.children.length, true));
        renumeroter(liste);
        const champ = zone.lastElementChild.querySelector("input, textarea");
        if (champ) champ.focus();
        auChangement();
        return;
      }
      const item = b.closest(".ed-item");
      if (!item) return;
      const liste = item.closest(".ed-liste");
      if (b.hasAttribute("data-monter") || b.hasAttribute("data-descendre") || b.hasAttribute("data-retirer")) ev.preventDefault();
      if (b.hasAttribute("data-monter") && item.previousElementSibling) item.parentNode.insertBefore(item, item.previousElementSibling);
      else if (b.hasAttribute("data-descendre") && item.nextElementSibling) item.parentNode.insertBefore(item.nextElementSibling, item);
      else if (b.hasAttribute("data-retirer")) {
        if (b.dataset.confirme !== "1") { b.dataset.confirme = "1"; b.textContent = "Retirer ?"; b.classList.add("ed-danger"); return; }
        item.remove();
      } else return;
      renumeroter(liste);
      auChangement();
    });
    form.addEventListener("input", ev => {
      auChangement();
      const champ = ev.target.closest(".ed-champ");
      const item = ev.target.closest(".ed-item");
      if (!item || !champ || !["titre", "nom"].includes(champ.dataset.champ)) return;
      if (champ.parentElement !== item.querySelector(":scope > .ed-objet")) return;
      const t = item.querySelector(":scope > summary .ed-item__titre");
      const num = t.querySelector(".ed-item__num").outerHTML;
      t.innerHTML = `${num} ${echapper(ev.target.value)}`;
    });
  }

  // ---------- Images (couvertures, séries, histoires, thèmes, bannière) ----------

  function reduireImage(fichier, max) {
    return new Promise((resolve, reject) => {
      const lecteur = new FileReader();
      lecteur.onerror = () => reject(new Error("Image illisible."));
      lecteur.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error("Ce fichier n'est pas une image."));
        img.onload = () => {
          const echelle = Math.min(1, max / Math.max(img.width, img.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * echelle);
          canvas.height = Math.round(img.height * echelle);
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.78));
        };
        img.src = lecteur.result;
      };
      lecteur.readAsDataURL(fichier);
    });
  }

  function champImage(cle, aide, apercuParDefaut) {
    const actuelle = (window.IMAGES || {})[cle] || "";
    let valeur = actuelle;
    const html = `
      <div class="ed-image">
        <div class="ed-image__apercu" id="img-apercu">${actuelle ? `<img src="${echapper(actuelle)}" alt="">` : apercuParDefaut}</div>
        <div class="ed-image__actions">
          <strong>Image</strong>
          <small>${echapper(aide)}</small>
          <label class="bouton bouton--contour bouton--petit ed-fichier">Choisir une photo<input type="file" accept="image/*" id="img-fichier"></label>
          <label class="champ" for="img-lien">ou coller le lien d'une image (https://…)
            <input id="img-lien" inputmode="url" placeholder="https://…" value="${actuelle.startsWith("https:") ? echapper(actuelle) : ""}">
          </label>
          <button class="bouton bouton--petit ed-lien-discret" type="button" id="img-retirer"${actuelle ? "" : " hidden"}>Revenir à l'illustration dessinée</button>
          <p class="ed-erreur" id="img-erreur" hidden></p>
        </div>
      </div>`;
    function brancher(racine, auChangement) {
      const apercu = racine.querySelector("#img-apercu");
      const retirer = racine.querySelector("#img-retirer");
      const erreur = racine.querySelector("#img-erreur");
      const lien = racine.querySelector("#img-lien");
      const montrer = src => {
        valeur = src;
        apercu.innerHTML = src ? `<img src="${echapper(src)}" alt="">` : apercuParDefaut;
        retirer.hidden = !src;
        erreur.hidden = true;
        auChangement();
      };
      racine.querySelector("#img-fichier").addEventListener("change", async e => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        try { montrer(await reduireImage(f, 900)); lien.value = ""; }
        catch (err) { erreur.textContent = err.message; erreur.hidden = false; }
      });
      lien.addEventListener("change", () => {
        const v = lien.value.trim();
        if (!v) return;
        if (!C().imageValide(v)) { erreur.textContent = "Le lien doit commencer par https:// et mener à une image."; erreur.hidden = false; return; }
        montrer(v);
      });
      retirer.addEventListener("click", () => { lien.value = ""; montrer(""); });
    }
    return {
      html, brancher,
      // cible : pour un nouvel élément, la clé définitive connue seulement à l'enregistrement.
      async enregistrer(cible) {
        cible = cible || cle;
        if (cible === cle && valeur === actuelle) return;
        if (valeur) await C().enregistrer("image", cible, { src: valeur });
        else if (cible === cle) await C().reinitialiser("image", cible);
      }
    };
  }

  function vignette(type, x) {
    const src = (window.IMAGES || {})[TYPES[type].image(x.id)];
    if (src) return `<span class="pdg-vignette"><img src="${echapper(src)}" alt=""></span>`;
    const dessin = window.ILLUSTRATION ? (window.ILLUSTRATION(x.id) || window.ILLUSTRATION(x.theme || "")) : "";
    return `<span class="pdg-vignette">${dessin || `<span class="pdg-vignette__lettre">${echapper(x.emoji || (x.titre || x.nom || "?").charAt(0))}</span>`}</span>`;
  }

  const ETIQUETTES = {
    original: "", modifie: `<span class="pastille pastille--modifie">Modifié</span>`,
    ajoute: `<span class="pastille pastille--ajoute">Ajouté</span>`, supprime: `<span class="pastille">Supprimé</span>`
  };

  // ---------- Coquille de l'espace PDG ----------

  const MENU = [
    ["", "Tableau de bord"], ["livres", "Livres"], ["series", "Séries"], ["histoires", "Histoires"],
    ["themes", "Thèmes"], ["boutique", "Boutique"], ["accueil", "Page d'accueil"], ["reglages", "Réglages"]
  ];
  const RUBRIQUE_TYPE = { livres: "livre", series: "serie", histoires: "histoire", themes: "theme" };

  async function pagePDG(app, sous, id, arg) {
    app.innerHTML = `<p class="vide">Chargement de l'espace PDG…</p>`;
    await C().pret;
    if (!C().estAdmin()) return pageConnexion(app);

    app.innerHTML = `
      <div class="pdg">
        <nav class="pdg__menu" aria-label="Espace PDG">
          ${MENU.map(([r, nom]) => `<a href="#/pdg${r ? "/" + r : ""}" class="${(sous || "") === r ? "actif" : ""}">${nom}</a>`).join("")}
        </nav>
        <section class="pdg__contenu" id="pdg-zone"></section>
      </div>`;
    const zone = app.querySelector("#pdg-zone");
    const actif = app.querySelector(".pdg__menu .actif");
    if (actif) actif.scrollIntoView({ block: "nearest", inline: "center" });

    if (!sous) return tableauDeBord(zone);
    if (RUBRIQUE_TYPE[sous]) return id ? editeur(zone, RUBRIQUE_TYPE[sous], id) : liste(zone, RUBRIQUE_TYPE[sous]);
    if (sous === "boutique") return id === "nouveau" ? window.BOUTIQUE.formulaireVente(zone, "#/pdg/boutique") : boutique(zone);
    if (sous === "accueil") return pageAccueilPDG(zone);
    if (sous === "reglages") return reglages(zone);
    zone.innerHTML = `<p class="vide">Rubrique introuvable.</p>`;
  }

  function pageConnexion(app) {
    if (C().mode() === "claude") {
      app.innerHTML = `
        <div class="connexion carte">
          <span class="logo__marque" aria-hidden="true">M</span>
          <h1>Espace PDG</h1>
          <p>Cet espace est réservé au propriétaire de Morata. Vous pouvez continuer à lire les livres et les histoires.</p>
          <a class="bouton bouton--accent" href="#/">Retour au site</a>
        </div>`;
      return;
    }
    app.innerHTML = `
      <form class="connexion carte" id="form-connexion">
        <span class="logo__marque" aria-hidden="true">M</span>
        <h1>Espace PDG</h1>
        <p>Connectez-vous pour gérer les livres, les histoires, les images et la boutique.</p>
        <label class="champ" for="mdp">Mot de passe
          <input id="mdp" type="password" autocomplete="current-password" required>
        </label>
        ${C().mode() === "local" ? `<small>Version sans serveur : mot de passe de départ « ${echapper(C().motDePasseLocalParDefaut)} », à changer dans Réglages.</small>` : ""}
        <p class="ed-erreur" id="connexion-erreur" hidden></p>
        <button class="bouton bouton--accent" type="submit">Se connecter</button>
        <a class="ed-lien-discret" href="#/">Retour au site</a>
      </form>`;
    const form = app.querySelector("#form-connexion");
    form.querySelector("#mdp").focus();
    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const erreur = form.querySelector("#connexion-erreur");
      const bouton = form.querySelector("button");
      bouton.disabled = true;
      try { await C().connexion(form.querySelector("#mdp").value); window.dispatchEvent(new HashChangeEvent("hashchange")); }
      catch (e) { erreur.textContent = e.message || "Connexion impossible."; erreur.hidden = false; bouton.disabled = false; }
    });
  }

  const MODES = {
    claude: "Vos modifications sont enregistrées dans l'aperçu Claude et visibles par tous ceux qui l'ouvrent. Vous seul pouvez modifier.",
    netlify: "Vos modifications sont enregistrées sur le serveur Netlify et visibles immédiatement par tous les lecteurs.",
    local: "Version sans serveur : vos modifications restent sur cet appareil. Publiez le site sur Netlify (avec ADMIN_CODE) pour que les lecteurs les voient."
  };

  function tableauDeBord(zone) {
    const nbChapLivres = Object.values(window.LIVRES_CHAPITRES || {}).reduce((n, x) => n + (x.chapitres || []).length, 0);
    const nbChapSeries = (window.SERIES || []).reduce((n, s) => n + (s.chapitres || []).length, 0);
    const histo = C().historique().slice(0, 8);
    const lienHisto = h => {
      const rub = { livre: "livres", chapitres: "livres", serie: "series", histoire: "histoires", theme: "themes" }[h.type];
      if (rub) return `#/pdg/${rub}/${h.id}`;
      if (h.type === "site") return "#/pdg/accueil";
      const [t, ...reste] = h.id.split("-");
      const r = { livre: "livres", serie: "series", histoire: "histoires", theme: "themes" }[t];
      return r ? `#/pdg/${r}/${reste.join("-")}` : "#/pdg/accueil";
    };
    const NOMS = { livre: "Livre", chapitres: "Chapitres", serie: "Série", histoire: "Histoire", theme: "Thème", image: "Image", site: "Page d'accueil" };
    zone.innerHTML = `
      <h1 class="page-titre">Bonjour, PDG</h1>
      <p class="page-sous-titre">Tout le contenu de Morata se gère ici. Les lecteurs ne voient pas cet espace.</p>
      <div class="pdg-stats">
        <a class="pdg-stat" href="#/pdg/livres"><strong>${window.LIVRES.length}</strong><span>livres</span><small>${nbChapLivres} chapitres</small></a>
        <a class="pdg-stat" href="#/pdg/series"><strong>${window.SERIES.length}</strong><span>séries</span><small>${nbChapSeries} chapitres</small></a>
        <a class="pdg-stat" href="#/pdg/histoires"><strong>${window.HISTOIRES.length}</strong><span>histoires</span><small>${window.THEMES.length} thèmes</small></a>
        <a class="pdg-stat" href="#/pdg/boutique"><strong id="nb-annonces">…</strong><span>en vente</span><small>boutique</small></a>
      </div>
      <div class="section-titre"><h2>Actions rapides</h2></div>
      <div class="pdg-actions">
        <a class="bouton bouton--accent" href="#/pdg/livres/nouveau">+ Livre</a>
        <a class="bouton bouton--contour" href="#/pdg/series/nouveau">+ Série</a>
        <a class="bouton bouton--contour" href="#/pdg/histoires/nouveau">+ Histoire</a>
        <a class="bouton bouton--contour" href="#/pdg/boutique/nouveau">+ Livre à vendre</a>
      </div>
      <p class="note">${MODES[C().mode()]}</p>
      <div class="section-titre"><h2>Dernières modifications</h2></div>
      ${histo.length ? `<ul class="pdg-lignes">${histo.map(h => `
        <li><a href="${lienHisto(h)}"><span><strong>${NOMS[h.type] || h.type}</strong> · ${echapper(h.id)}${h.supprime ? " (supprimé)" : ""}</span>
        <small>${h.le ? new Date(h.le).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }) : ""}</small></a></li>`).join("")}</ul>`
        : `<p class="vide">Aucune modification pour l'instant. Le site affiche le contenu d'origine.</p>`}`;
    window.BOUTIQUE.stockage().then(s => s.lister()).then(l => {
      const el = zone.querySelector("#nb-annonces");
      if (el) el.textContent = l.length;
    }).catch(() => { const el = zone.querySelector("#nb-annonces"); if (el) el.textContent = "–"; });
  }

  function liste(zone, type) {
    const T = TYPES[type];
    const rubrique = Object.keys(RUBRIQUE_TYPE).find(k => RUBRIQUE_TYPE[k] === type);
    const elements = window[T.tableau];
    const supprimes = C().supprimes(type);
    zone.innerHTML = `
      <div class="pdg-entete">
        <div><h1 class="page-titre">${T.titre}</h1><p class="page-sous-titre">${elements.length} au total. Touchez un élément pour le modifier.</p></div>
        <a class="bouton bouton--accent" href="#/pdg/${rubrique}/nouveau">+ ${T.nouveau}</a>
      </div>
      <input class="recherche" type="search" placeholder="Rechercher…" aria-label="Rechercher" id="pdg-recherche">
      <ul class="pdg-lignes pdg-lignes--elements" id="pdg-liste">
        ${elements.map(x => `
          <li data-texte="${echapper(((x[T.champTitre] || "") + " " + T.sousTitre(x)).toLowerCase())}">
            <a href="#/pdg/${rubrique}/${echapper(x.id)}">
              ${vignette(type, x)}
              <span class="pdg-lignes__corps"><strong>${echapper(x[T.champTitre])}</strong><small>${echapper(T.sousTitre(x))}</small></span>
              ${ETIQUETTES[C().etat(type, x.id)] || ""}
            </a>
          </li>`).join("")}
      </ul>
      ${supprimes.length ? `
        <div class="section-titre"><h2>Supprimés</h2></div>
        <ul class="pdg-lignes">${supprimes.map(x => `
          <li><span class="pdg-lignes__ligne"><span class="pdg-lignes__corps"><strong>${echapper(x[T.champTitre])}</strong></span>
          <button class="bouton bouton--contour bouton--petit" type="button" data-restaurer="${echapper(x.id)}">Restaurer</button></span></li>`).join("")}</ul>` : ""}`;
    const champ = zone.querySelector("#pdg-recherche");
    champ.addEventListener("input", () => {
      const q = champ.value.trim().toLowerCase();
      zone.querySelectorAll("#pdg-liste li").forEach(li => { li.hidden = q && !li.dataset.texte.includes(q); });
    });
    zone.querySelectorAll("[data-restaurer]").forEach(b => b.addEventListener("click", async () => {
      b.disabled = true;
      try { await C().reinitialiser(type, b.dataset.restaurer); liste(zone, type); }
      catch (e) { b.disabled = false; b.textContent = e.message || "Échec"; }
    }));
  }

  function editeur(zone, type, id) {
    const T = TYPES[type];
    const rubrique = Object.keys(RUBRIQUE_TYPE).find(k => RUBRIQUE_TYPE[k] === type);
    const nouveau = id === "nouveau";
    const existant = nouveau ? null : window[T.tableau].find(x => x.id === id);
    if (!nouveau && !existant) { zone.innerHTML = `<p class="vide">Élément introuvable. <a href="#/pdg/${rubrique}">Retour à la liste</a></p>`; return; }
    const valeur = copie(existant) || (type === "histoire" || type === "serie" ? { theme: (window.THEMES[0] || {}).id } : {});
    if (type === "livre" && existant) valeur.chapitres = copie(((window.LIVRES_CHAPITRES[id] || {}).chapitres) || []);
    const schema = T.schema();
    const dessin = existant && window.ILLUSTRATION ? (window.ILLUSTRATION(id) || window.ILLUSTRATION(existant.theme || "")) : "";
    const image = champImage(T.image(nouveau ? "nouveau" : id), T.imageAide,
      dessin || `<span class="ed-image__defaut">${type === "livre" ? "Couverture dessinée ou trouvée automatiquement" : "Illustration automatique"}</span>`);
    const etatActuel = nouveau ? "absent" : C().etat(type, id);
    const chapitresModifies = type === "livre" && !nouveau && ["modifie", "ajoute"].includes(C().etat("chapitres", id));

    zone.innerHTML = `
      <a class="retour" href="#/pdg/${rubrique}">← ${T.titre}</a>
      <div class="pdg-entete">
        <div>
          <h1 class="page-titre">${nouveau ? T.nouveau : echapper(existant[T.champTitre])}</h1>
          <p class="page-sous-titre">${nouveau ? "Remplissez les champs puis enregistrez." : `${ETIQUETTES[etatActuel] || ""} Les changements apparaissent sur le site dès l'enregistrement.`}</p>
        </div>
        ${nouveau ? "" : `<a class="bouton bouton--contour bouton--petit" href="${T.lien(id)}" target="_blank" rel="noopener">Voir sur le site</a>`}
      </div>
      <form class="formulaire ed-formulaire" id="ed-form" novalidate>
        ${image.html}
        ${rendreObjet(schema, valeur)}
        <div class="ed-barre">
          <span class="ed-message" id="ed-message" aria-live="polite"></span>
          <button class="bouton bouton--accent" type="submit" id="ed-enregistrer">Enregistrer</button>
        </div>
      </form>
      ${nouveau ? "" : `
        <div class="pdg-zone-danger">
          ${etatActuel === "modifie" || chapitresModifies ? `<button class="bouton bouton--contour bouton--petit" type="button" id="ed-original">Revenir au texte d'origine</button>` : ""}
          <button class="bouton bouton--contour bouton--petit ed-danger" type="button" id="ed-supprimer">Supprimer ${T.un}</button>
        </div>`}`;

    const form = zone.querySelector("#ed-form");
    const message = zone.querySelector("#ed-message");
    const dire = (texte, erreur) => { message.textContent = texte; message.classList.toggle("ed-erreur", !!erreur); };
    let modifie = false;
    const changement = () => { if (!modifie) { modifie = true; dire("Modifications non enregistrées"); } };
    brancherFormulaire(form, changement);
    image.brancher(form, changement);

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const data = lireObjet(form.querySelector(":scope > .ed-objet"), schema);
      if (!data[T.champTitre]) { dire(`Indiquez ${T.champTitre === "nom" ? "le nom" : "le titre"}.`, true); return; }
      const bouton = form.querySelector("#ed-enregistrer");
      bouton.disabled = true;
      dire("Enregistrement…");
      try {
        const cible = nouveau ? identifiant(data[T.champTitre], window[T.tableau].map(x => x.id).concat(C().supprimes(type).map(x => x.id))) : id;
        let chapitres = null;
        if (type === "livre") { chapitres = data.chapitres; delete data.chapitres; }
        if (type === "livre" && existant && existant.original && !data.original.titre) delete data.original;
        const avant = existant ? copie(existant) : null;
        if (avant) delete avant.id;
        if (JSON.stringify(nettoyer(avant)) !== JSON.stringify(nettoyer(data))) await C().enregistrer(type, cible, data);
        if (chapitres) {
          const anciens = ((window.LIVRES_CHAPITRES[cible] || {}).chapitres) || [];
          if (JSON.stringify(anciens) !== JSON.stringify(chapitres)) {
            if (chapitres.length || C().etat("chapitres", cible) === "original") await C().enregistrer("chapitres", cible, { chapitres });
            else await C().reinitialiser("chapitres", cible);
          }
        }
        await image.enregistrer(T.image(cible));
        modifie = false;
        if (nouveau) { location.hash = `#/pdg/${rubrique}/${cible}`; return; }
        dire("Enregistré ✓");
        bouton.disabled = false;
      } catch (e) {
        dire(messageErreur(e), true);
        bouton.disabled = false;
      }
    });

    const original = zone.querySelector("#ed-original");
    if (original) original.addEventListener("click", async () => {
      if (original.dataset.confirme !== "1") { original.dataset.confirme = "1"; original.textContent = "Confirmer : effacer mes changements de texte"; return; }
      original.disabled = true;
      try {
        await C().reinitialiser(type, id);
        if (type === "livre") await C().reinitialiser("chapitres", id);
        editeur(zone, type, id);
      } catch (e) { original.disabled = false; original.textContent = messageErreur(e); }
    });
    const supprimer = zone.querySelector("#ed-supprimer");
    if (supprimer) supprimer.addEventListener("click", async () => {
      if (supprimer.dataset.confirme !== "1") { supprimer.dataset.confirme = "1"; supprimer.textContent = `Confirmer la suppression`; return; }
      supprimer.disabled = true;
      try {
        await C().supprimer(type, id);
        if (type === "livre") await C().supprimer("chapitres", id);
        location.hash = `#/pdg/${rubrique}`;
      } catch (e) { supprimer.disabled = false; supprimer.textContent = messageErreur(e); }
    });
  }

  // Compare sans tenir compte des champs vides ajoutés par le formulaire.
  function nettoyer(o) {
    if (Array.isArray(o)) return o.map(nettoyer);
    if (o && typeof o === "object") {
      const r = {};
      Object.keys(o).sort().forEach(k => {
        const v = nettoyer(o[k]);
        const vide = v === "" || v == null || (Array.isArray(v) && !v.length) || (typeof v === "object" && !Array.isArray(v) && !Object.keys(v).length);
        if (!vide) r[k] = v;
      });
      return r;
    }
    return o;
  }

  function messageErreur(e) {
    if (e && e.code === "invalid_argument") return "Élément trop volumineux ou refusé (image trop lourde ?).";
    if (e && e.code === "unavailable") return "Enregistrement impossible pour le moment. Réessayez.";
    return (e && e.message) || "L'enregistrement a échoué.";
  }

  async function boutique(zone) {
    zone.innerHTML = `
      <div class="pdg-entete">
        <div><h1 class="page-titre">Boutique</h1><p class="page-sous-titre">Vos livres en vente. Les lecteurs commandent sur WhatsApp.</p></div>
        <a class="bouton bouton--accent" href="#/pdg/boutique/nouveau">+ Mettre un livre en vente</a>
      </div>
      <div class="grille grille--large" id="annonces"><p class="vide">Chargement…</p></div>`;
    await window.BOUTIQUE.remplirAnnonces(zone.querySelector("#annonces"), true, () => boutique(zone));
  }

  const ACCUEIL = [
    { nom: "titre", label: "Grand titre de la bannière", type: "texte" },
    { nom: "texte", label: "Texte sous le titre", type: "zone", lignes: 3 },
    { nom: "boutiqueTitre", label: "Carte boutique : titre", type: "texte" },
    { nom: "boutiqueTexte", label: "Carte boutique : texte", type: "zone", lignes: 2 }
  ];

  function pageAccueilPDG(zone) {
    const valeur = { ...window.ACCUEIL_DEFAUT, ...((window.SITE || {}).accueil || {}) };
    const image = champImage("banniere", "Photo de fond de la bannière d'accueil (un voile vert est ajouté pour garder le texte lisible).", `<span class="ed-image__defaut">Fond vert à motif bogolan</span>`);
    zone.innerHTML = `
      <h1 class="page-titre">Page d'accueil</h1>
      <p class="page-sous-titre">Les textes et l'image que les lecteurs voient en arrivant.</p>
      <form class="formulaire ed-formulaire" id="ed-form" novalidate>
        ${image.html}
        ${rendreObjet(ACCUEIL, valeur)}
        <div class="ed-barre">
          <span class="ed-message" id="ed-message" aria-live="polite"></span>
          <button class="bouton bouton--accent" type="submit">Enregistrer</button>
        </div>
      </form>`;
    const form = zone.querySelector("#ed-form");
    const message = zone.querySelector("#ed-message");
    const changement = () => { message.textContent = "Modifications non enregistrées"; message.classList.remove("ed-erreur"); };
    brancherFormulaire(form, changement);
    image.brancher(form, changement);
    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const bouton = form.querySelector("button[type=submit]");
      bouton.disabled = true;
      message.textContent = "Enregistrement…";
      try {
        await C().enregistrer("site", "accueil", lireObjet(form.querySelector(":scope > .ed-objet"), ACCUEIL));
        await image.enregistrer();
        message.textContent = "Enregistré ✓";
      } catch (e) { message.textContent = messageErreur(e); message.classList.add("ed-erreur"); }
      bouton.disabled = false;
    });
  }

  function reglages(zone) {
    const mode = C().mode();
    zone.innerHTML = `
      <h1 class="page-titre">Réglages</h1>
      <p class="page-sous-titre">${MODES[mode]}</p>
      ${C().peutChangerMotDePasse() ? `
        <form class="formulaire" id="form-mdp" novalidate>
          <h2>Changer le mot de passe</h2>
          <label class="champ" for="mdp-ancien">Mot de passe actuel<input id="mdp-ancien" type="password" autocomplete="current-password"></label>
          <label class="champ" for="mdp-nouveau">Nouveau mot de passe (6 caractères minimum)<input id="mdp-nouveau" type="password" autocomplete="new-password"></label>
          <p class="ed-message" id="mdp-message" aria-live="polite"></p>
          <button class="bouton bouton--accent" type="submit">Changer le mot de passe</button>
        </form>` : `<p class="note">Dans l'aperçu Claude, seul le propriétaire du compte peut modifier : aucun mot de passe n'est nécessaire.</p>`}
      ${mode === "claude" ? "" : `
        <div class="formulaire">
          <h2>Sauvegarde</h2>
          <p>Téléchargez toutes vos modifications dans un fichier, pour les garder ou les intégrer au dossier data/.</p>
          <button class="bouton bouton--contour" type="button" id="sauvegarde">Télécharger la sauvegarde</button>
        </div>
        <button class="bouton bouton--contour" type="button" id="deconnexion">Se déconnecter</button>`}`;
    const form = zone.querySelector("#form-mdp");
    if (form) form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const msg = form.querySelector("#mdp-message");
      const nouveau = form.querySelector("#mdp-nouveau").value;
      if (nouveau.length < 6) { msg.textContent = "Le nouveau mot de passe doit faire au moins 6 caractères."; msg.classList.add("ed-erreur"); return; }
      try {
        await C().changerMotDePasse(form.querySelector("#mdp-ancien").value, nouveau);
        msg.textContent = "Mot de passe changé ✓"; msg.classList.remove("ed-erreur"); form.reset();
      } catch (e) { msg.textContent = e.message || "Échec du changement."; msg.classList.add("ed-erreur"); }
    });
    const sauvegarde = zone.querySelector("#sauvegarde");
    if (sauvegarde) sauvegarde.addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([C().sauvegarde()], { type: "application/json" }));
      a.download = `morata-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    const deconnexion = zone.querySelector("#deconnexion");
    if (deconnexion) deconnexion.addEventListener("click", () => { C().deconnexion(); location.hash = "#/"; });
  }

  window.pagePDG = pagePDG;
})();
