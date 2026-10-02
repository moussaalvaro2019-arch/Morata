// Espace PDG (#/pdg) : tableau de bord réservé au propriétaire, séparé de l'espace lecteurs.
// On y modifie tout le contenu : livres et leurs chapitres, séries, histoires, thèmes,
// images, abonnés, nom de l'application, textes de l'accueil, paiements, boutique et mot de passe.
(function () {
  const C = () => window.CONTENU;

  function echapper(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  const ic = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const toast = (m, i) => window.TOAST && window.TOAST(m, i);
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
          <button class="btn b-line b-sm" type="button" data-ajouter style="justify-self:start">${ic("plus")}${echapper(c.nouveau || "Ajouter")}</button>
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

  function champImage(cle, aide, apercuParDefaut, p = "img-") {
    const actuelle = (window.IMAGES || {})[cle] || "";
    let valeur = actuelle;
    const html = `
      <div class="ed-image">
        <div class="ed-image__apercu" id="${p}apercu">${actuelle ? `<img src="${echapper(actuelle)}" alt="">` : apercuParDefaut}</div>
        <div class="ed-image__actions">
          <strong>Photo</strong>
          <small>${echapper(aide)}</small>
          <label class="btn b-line b-sm ed-fichier">${ic("camera")}Choisir une photo<input type="file" accept="image/*" id="${p}fichier"></label>
          <label class="champ" for="${p}lien">ou coller le lien d'une image (https://…)
            <input id="${p}lien" inputmode="url" placeholder="https://…" value="${actuelle.startsWith("https:") ? echapper(actuelle) : ""}">
          </label>
          <button class="ed-lien-discret" type="button" id="${p}retirer"${actuelle ? "" : " hidden"}>Revenir à l'illustration dessinée</button>
          <p class="ed-erreur" id="${p}erreur" hidden></p>
        </div>
      </div>`;
    function brancher(racine, auChangement) {
      const apercu = racine.querySelector("#" + p + "apercu");
      const retirer = racine.querySelector("#" + p + "retirer");
      const erreur = racine.querySelector("#" + p + "erreur");
      const lien = racine.querySelector("#" + p + "lien");
      const montrer = src => {
        valeur = src;
        apercu.innerHTML = src ? `<img src="${echapper(src)}" alt="">` : apercuParDefaut;
        retirer.hidden = !src;
        erreur.hidden = true;
        auChangement();
      };
      racine.querySelector("#" + p + "fichier").addEventListener("change", async e => {
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


  // Visuel d'un élément : image choisie, sinon couverture ou illustration dessinée.
  function visuel(type, x) {
    const src = (window.IMAGES || {})[TYPES[type].image(x.id)];
    if (src) return `<img src="${echapper(src)}" alt="">`;
    const dessin = window.ILLUSTRATION ? (window.ILLUSTRATION(x.id) || window.ILLUSTRATION(x.theme || "")) : "";
    if (dessin) return dessin;
    if (type === "livre") return `<span class="couverture" style="--c1:#7A2E1F;--c2:#3A1710" data-couverture="${echapper(x.id)}"><span class="couverture__titre">${echapper(x.titre)}</span><span class="couverture__auteur">${echapper(x.auteur)}</span></span>`;
    return `<span class="noimg">${echapper(x.emoji || (x.titre || x.nom || "?").charAt(0))}</span>`;
  }

  const PASTILLES = {
    original: `<span class="pill p-mute">D'origine</span>`, modifie: `<span class="pill p-gold">Modifié</span>`,
    ajoute: `<span class="pill p-ok">Ajouté</span>`, supprime: `<span class="pill p-bad">Supprimé</span>`
  };

  // ---------- Coquille de l'espace PDG (comme EventLoc) ----------

  const ANAV = [
    ["", "Tableau de bord", "grid"], ["livres", "Livres", "book"], ["series", "Séries", "layers"],
    ["histoires", "Histoires", "story"], ["themes", "Thèmes", "tag"], ["boutique", "Boutique", "cart"],
    ["abonnes", "Abonnés", "users"], ["parametres", "Paramètres", "cog"]
  ];
  const RUBRIQUE_TYPE = { livres: "livre", series: "serie", histoires: "histoire", themes: "theme" };
  const ANCIENNES = { accueil: "parametres", reglages: "parametres" };
  const accueil = () => ({ ...(window.ACCUEIL_DEFAUT || {}), ...((window.SITE || {}).accueil || {}) });
  const initiales = nom => String(nom || "PDG").split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0].toUpperCase()).join("");

  let attente = 0; // paiements déclarés, pas encore vérifiés
  function coquille(sous, titre, action, corps) {
    const a = accueil();
    const photo = (window.IMAGES || {}).pdg;
    const sortir = C().mode() !== "claude";
    const lien = r => `#/pdg${r ? "/" + r : ""}`;
    const courant = r => (r === sous ? ' aria-current="page"' : "");
    const marque = window.MARQUE.html("Espace PDG");
    return `
      <div class="shell">
        <aside class="side">
          <div class="brand">${marque}</div>
          <span class="sec">Gestion</span>
          ${ANAV.map(([r, nom, i]) => `<a class="nav" href="${lien(r)}"${courant(r)}>${ic(i)}${nom}${r === "abonnes" && attente ? `<span class="cnt">${attente}</span>` : ""}</a>`).join("")}
          <div class="foot">
            <div class="me">${photo ? `<img src="${echapper(photo)}" alt="">` : `<span class="av">${echapper(initiales(a.nomPDG))}</span>`}<div><b>${echapper(a.nomPDG)}</b><small>Administrateur · PDG</small></div></div>
            <a class="nav" href="#/">${ic("home")}Voir le site lecteurs</a>
            ${sortir ? `<button class="nav" type="button" data-deconnexion>${ic("logout")}Se déconnecter</button>` : ""}
          </div>
        </aside>
        <div class="principal">
          <div class="mtop">${marque}<a class="btn b-sm" style="margin-left:auto;background:var(--sombre-2);color:#fff" href="#/" aria-label="Voir le site">${ic("eye")}</a>${sortir ? `<button class="btn b-sm" type="button" style="background:var(--sombre-2);color:#fff" data-deconnexion aria-label="Se déconnecter">${ic("logout")}</button>` : ""}</div>
          <div class="top"><h1><span class="crumb">Administration</span>${titre}</h1>${action || ""}</div>
          <div class="page" id="pdg-page">${corps}</div>
          <nav class="bnav" aria-label="Menu PDG">${ANAV.map(([r, nom, i]) => `<a href="${lien(r)}"${courant(r)}>${ic(i)}${nom.split(" ")[0]}</a>`).join("")}</nav>
        </div>
      </div>`;
  }

  document.addEventListener("click", ev => {
    if (!ev.target.closest("[data-deconnexion]")) return;
    C().deconnexion();
    location.hash = "#/";
  });

  async function pagePDG(app, sous, id, arg) {
    app.innerHTML = `<div class="pro"><p>Chargement de l'espace PDG…</p></div>`;
    await C().pret;
    if (!C().estAdmin()) return pageConnexion(app);
    sous = ANCIENNES[sous] || sous || "";
    const fermer = document.getElementById("ed-ov");
    if (fermer) fermer.remove();

    if (RUBRIQUE_TYPE[sous]) return catalogue(app, sous, id);
    if (sous === "boutique") return boutique(app, id);
    if (sous === "abonnes") return abonnes(app, id);
    if (sous === "parametres") return parametres(app, id);
    return tableauDeBord(app);
  }

  // ---------- Connexion : « Espace professionnel » ----------

  function pageConnexion(app) {
    const claude = C().mode() === "claude";
    app.innerHTML = `
      <div class="pro"><div class="pro-in">
        <a class="btn b-sm" style="justify-self:start;background:rgba(255,255,255,.08);color:#E9DDD3" href="#/">${ic("back")}Retour au site</a>
        <span class="lock">${window.MARQUE.html("Espace professionnel")}</span>
        <div><h1>Espace de travail</h1><p style="color:#BBA89B;margin-top:8px">Réservé à la direction de ${echapper(window.MARQUE.nom())}. Les lecteurs n'ont pas accès à cette partie.</p></div>
        <div class="pro-cards">
          <div class="pcard"><span class="ic" style="background:linear-gradient(140deg,#F1D08A,#B98522);color:#2A1406">${ic("crown")}</span><b>Direction</b>
            <p>Livres, chapitres, histoires, séries, thèmes, images, abonnés, boutique et paramètres.</p>
            ${claude ? `<p>Cet espace est réservé au propriétaire de l'application.</p>` : `
            <form id="form-connexion" style="display:grid;gap:10px">
              <input class="inp" id="mdp" type="password" placeholder="Mot de passe" aria-label="Mot de passe" autocomplete="current-password" required>
              ${C().mode() === "local" ? `<small>Version sans serveur : mot de passe de départ « ${echapper(C().motDePasseLocalParDefaut)} », à changer dans Paramètres.</small>` : ""}
              <p class="ed-erreur" id="connexion-erreur" hidden></p>
              <button class="btn b-gold" type="submit">Se connecter ${ic("arrow")}</button>
            </form>`}
          </div>
          <div class="pcard"><span class="ic" style="background:#2F4A2C;color:#CDE7C6">${ic("book")}</span><b>Lecteurs</b>
            <p>Le premier chapitre est gratuit. Ensuite, les lecteurs créent leur compte et s'abonnent depuis le site.</p>
            <a class="btn b-pri" style="justify-self:start" href="#/livres">Lire les résumés ${ic("arrow")}</a>
          </div>
        </div>
      </div></div>`;
    const form = app.querySelector("#form-connexion");
    if (!form) return;
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
    claude: ["ok", "Vos modifications sont enregistrées dans l'aperçu Claude et visibles par tous ceux qui l'ouvrent. Vous seul pouvez modifier."],
    netlify: ["ok", "Vos modifications sont enregistrées sur le serveur et visibles immédiatement par tous les lecteurs."],
    local: ["", "Version sans serveur : vos modifications restent sur cet appareil. Publiez le site sur Netlify (avec ADMIN_CODE) pour que les lecteurs les voient."]
  };
  const noteMode = () => { const [c, t] = MODES[C().mode()]; return `<div class="note ${c}">${ic(c ? "shield" : "bell")}<span>${t}</span></div>`; };

  // ---------- Tableau de bord ----------

  function tableauDeBord(app) {
    const nbChapLivres = Object.values(window.LIVRES_CHAPITRES || {}).reduce((n, x) => n + (x.chapitres || []).length, 0);
    const nbChapSeries = (window.SERIES || []).reduce((n, s) => n + (s.chapitres || []).length, 0);
    const livresChap = window.LIVRES.filter(l => ((window.LIVRES_CHAPITRES[l.id] || {}).chapitres || []).length).length;
    const parTheme = window.THEMES.map(t => ({ t, n: window.HISTOIRES.filter(h => h.theme === t.id).length + window.SERIES.filter(s => s.theme === t.id).length }));
    const max = Math.max(1, ...parTheme.map(x => x.n));
    const histo = C().historique().slice(0, 7);
    const NOMS = { livre: "Livre", chapitres: "Chapitres", serie: "Série", histoire: "Histoire", theme: "Thème", image: "Image", site: "Paramètres" };
    const lienHisto = h => {
      const rub = { livre: "livres", chapitres: "livres", serie: "series", histoire: "histoires", theme: "themes" }[h.type];
      if (rub) return `#/pdg/${rub}/${h.id}`;
      const [t, ...reste] = h.id.split("-");
      const r = { livre: "livres", serie: "series", histoire: "histoires", theme: "themes" }[t];
      return r ? `#/pdg/${r}/${reste.join("-")}` : "#/pdg/parametres";
    };
    const corps = `
      <div class="kpis">
        <a class="kpi hl" href="#/pdg/livres"><small>${ic("book")}Livres résumés</small><b class="num">${window.LIVRES.length}</b><em>${livresChap} en chapitres · ${nbChapLivres} chapitres</em></a>
        <a class="kpi" href="#/pdg/series"><small>${ic("layers")}Séries</small><b class="num">${window.SERIES.length}</b><em>${nbChapSeries} chapitres au total</em></a>
        <a class="kpi" href="#/pdg/histoires"><small>${ic("story")}Histoires courtes</small><b class="num">${window.HISTOIRES.length}</b><em>${window.THEMES.length} thèmes</em></a>
        <a class="kpi" href="#/pdg/boutique"><small>${ic("cart")}Livres en vente</small><b class="num" id="nb-annonces">…</b><em>boutique WhatsApp</em></a>
      </div>
      ${noteMode()}
      <div id="alerte-abonnes"></div>
      <div class="cols">
        <div class="card"><h3>Dernières modifications <small>les plus récentes d'abord</small></h3>
          ${histo.length ? `<div class="tw"><table class="t"><thead><tr><th>Élément</th><th>Type</th><th>Date</th></tr></thead><tbody>
            ${histo.map(h => `<tr class="click" data-lien="${lienHisto(h)}"><td><b>${echapper(h.id)}</b>${h.supprime ? ` <span class="pill p-bad">Supprimé</span>` : ""}</td><td>${NOMS[h.type] || h.type}</td><td class="sub">${h.le ? new Date(h.le).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }) : ""}</td></tr>`).join("")}
          </tbody></table></div>` : `<div class="empty">${ic("edit")}Aucune modification pour l'instant. Le site affiche le contenu d'origine.<a class="btn b-line b-sm" href="#/pdg/livres">Modifier un livre</a></div>`}
        </div>
        <div class="card"><h3>Contenu par thème <small>histoires et séries</small></h3>
          <div class="bars">${parTheme.map(x => `<div class="brow"><span>${echapper(x.t.emoji)} ${echapper(x.t.nom)}</span><b class="num">${x.n}</b><div class="bar"><i style="width:${Math.round(x.n / max * 100)}%"></i></div></div>`).join("")}</div>
        </div>
      </div>
      <div class="card"><h3>Raccourcis</h3>
        <div class="acts">
          <a class="btn b-line" href="#/pdg/livres/nouveau">${ic("plus")}Livre</a>
          <a class="btn b-line" href="#/pdg/series/nouveau">${ic("plus")}Série</a>
          <a class="btn b-line" href="#/pdg/histoires/nouveau">${ic("plus")}Histoire</a>
          <a class="btn b-line" href="#/pdg/boutique/nouveau">${ic("cart")}Livre à vendre</a>
          <a class="btn b-line" href="#/pdg/abonnes">${ic("users")}Abonnés</a>
          <a class="btn b-line" href="#/pdg/parametres">${ic("camera")}Photo de l'accueil</a>
        </div>
      </div>`;
    app.innerHTML = coquille("", "Tableau de bord", `<a class="btn b-gold" href="#/pdg/livres/nouveau">${ic("plus")}Nouveau livre</a>`, corps);
    app.querySelectorAll("[data-lien]").forEach(tr => tr.addEventListener("click", () => { location.hash = tr.dataset.lien; }));
    chargerAbonnes().then(liste => {
      const zone = app.querySelector("#alerte-abonnes");
      if (!zone || !liste) return;
      const n = attente;
      if (n) zone.innerHTML = `<a class="note ok" href="#/pdg/abonnes" style="text-decoration:none">${ic("bell")}<span><b>${n} paiement${n > 1 ? "s" : ""} à vérifier.</b> Comparez avec votre relevé Wave ou Djamo, puis validez l'abonnement.</span></a>`;
      const lien = app.querySelector('.side a[href="#/pdg/abonnes"]');
      if (lien && n && !lien.querySelector(".cnt")) lien.insertAdjacentHTML("beforeend", `<span class="cnt">${n}</span>`);
    });
    window.BOUTIQUE.stockage().then(s => s.lister()).then(l => {
      const el = app.querySelector("#nb-annonces");
      if (el) el.textContent = l.length;
    }).catch(() => { const el = app.querySelector("#nb-annonces"); if (el) el.textContent = "–"; });
  }

  // ---------- Catalogue : livres, séries, histoires, thèmes ----------

  const filtres = {};
  const recherches = {};

  function catalogue(app, rubrique, idOuvert) {
    const type = RUBRIQUE_TYPE[rubrique];
    const T = TYPES[type];
    const tous = window[T.tableau];
    const supprimes = C().supprimes(type);
    const cleFiltre = type === "livre" ? (x => x.categorie) : (type === "theme" ? null : (x => x.theme));
    const options = !cleFiltre ? [] : type === "livre"
      ? [...new Set(tous.map(x => x.categorie).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr")).map(c => [c, c])
      : window.THEMES.map(t => [t.id, `${t.emoji} ${t.nom}`]);
    const filtre = filtres[rubrique] || "tous";
    const q = (recherches[rubrique] || "").toLowerCase();
    const visibles = tous.filter(x => (filtre === "tous" || !cleFiltre || cleFiltre(x) === filtre) &&
      (!q || ((x[T.champTitre] || "") + " " + T.sousTitre(x)).toLowerCase().includes(q)));
    const sansImage = tous.filter(x => !(window.IMAGES || {})[T.image(x.id)]).length;
    const sansChapitres = type === "livre" ? tous.filter(l => !((window.LIVRES_CHAPITRES[l.id] || {}).chapitres || []).length).length : 0;
    const info = x => {
      if (type === "livre") { const n = ((window.LIVRES_CHAPITRES[x.id] || {}).chapitres || []).length; return n ? `${n} <small>chapitres</small>` : `<small>express seulement</small>`; }
      if (type === "serie") return `${(x.chapitres || []).length} <small>chapitres</small>`;
      if (type === "histoire") return `${x.tempsLecture || "?"} <small>min</small>`;
      return `${window.HISTOIRES.filter(h => h.theme === x.id).length + window.SERIES.filter(s => s.theme === x.id).length} <small>histoires</small>`;
    };
    const corps = `
      ${type === "livre" && sansChapitres ? `<div class="note">${ic("doc")}<span>${sansChapitres} livre(s) n'ont que le résumé express. Ouvrez un livre pour ajouter ses chapitres, ses sections et ses exemples.</span></div>` : ""}
      ${sansImage ? `<div class="note ok">${ic("camera")}<span>${sansImage} élément(s) utilisent l'image automatique. Touchez un élément pour mettre votre propre photo.</span></div>` : ""}
      <div class="toolbar"><label class="search">${ic("search")}<input id="cat-recherche" placeholder="Chercher…" value="${echapper(recherches[rubrique] || "")}"></label></div>
      ${options.length ? `<div class="chips" style="margin:0"><button class="chip" type="button" data-filtre="tous" aria-pressed="${filtre === "tous"}">Tout</button>${options.map(([v, t]) => `<button class="chip" type="button" data-filtre="${echapper(v)}" aria-pressed="${filtre === v}">${echapper(t)}</button>`).join("")}</div>` : ""}
      ${visibles.length ? `<div class="pgrid">${visibles.map(x => `
        <a class="prod" href="#/pdg/${rubrique}/${echapper(x.id)}">
          <span class="ph">${visuel(type, x)}</span>
          <span class="pb"><span class="sub">${echapper(T.sousTitre(x))}</span><b>${echapper(x[T.champTitre])}</b></span>
          <span class="pf"><span class="prix-chap num">${info(x)}</span>${PASTILLES[C().etat(type, x.id)] || ""}</span>
        </a>`).join("")}</div>` : `<div class="empty">${ic("search")}Aucun élément ici.<a class="btn b-line b-sm" href="#/pdg/${rubrique}/nouveau">${T.nouveau}</a></div>`}
      ${supprimes.length ? `
        <div class="card"><h3>Supprimés <small>restaurez-les en un clic</small></h3>
          <div class="tw"><table class="t"><tbody>${supprimes.map(x => `<tr><td><b>${echapper(x[T.champTitre])}</b></td><td style="text-align:right"><button class="btn b-line b-sm" type="button" data-restaurer="${echapper(x.id)}">${ic("undo")}Restaurer</button></td></tr>`).join("")}</tbody></table></div>
        </div>` : ""}`;
    app.innerHTML = coquille(rubrique, T.titre, `<a class="btn b-gold" href="#/pdg/${rubrique}/nouveau">${ic("plus")}${T.nouveau}</a>`, corps);
    if (window.COUVERTURES) window.COUVERTURES.appliquer(app);

    const champ = app.querySelector("#cat-recherche");
    champ.addEventListener("input", () => {
      recherches[rubrique] = champ.value;
      const pos = champ.selectionStart;
      catalogue(app, rubrique);
      const nouveau = app.querySelector("#cat-recherche");
      nouveau.focus();
      nouveau.setSelectionRange(pos, pos);
    });
    app.querySelectorAll("[data-filtre]").forEach(b => b.addEventListener("click", () => { filtres[rubrique] = b.dataset.filtre; catalogue(app, rubrique); }));
    app.querySelectorAll("[data-restaurer]").forEach(b => b.addEventListener("click", async () => {
      b.disabled = true;
      try { await C().reinitialiser(type, b.dataset.restaurer); toast("Élément restauré"); catalogue(app, rubrique); }
      catch (e) { b.disabled = false; toast(messageErreur(e), "x"); }
    }));
    if (idOuvert) editeur(rubrique, type, idOuvert);
  }

  // Fenêtre d'édition qui glisse depuis la droite (comme la fiche produit d'EventLoc).
  function fenetre(titre, sousTitre, corps, pied, retour) {
    const ancienne = document.getElementById("ed-ov");
    if (ancienne) ancienne.remove();
    document.body.insertAdjacentHTML("beforeend", `
      <div class="ov" id="ed-ov"><div class="win" role="dialog" aria-modal="true" aria-label="${echapper(titre)}">
        <div class="win-h"><h2>${echapper(titre)}${sousTitre ? ` <span class="sub" style="font-family:var(--police-texte);font-weight:500">${sousTitre}</span>` : ""}</h2><button class="x" type="button" data-fermer aria-label="Fermer">${ic("x")}</button></div>
        <div class="win-b">${corps}</div>
        <div class="win-f">${pied}</div>
      </div></div>`);
    const ov = document.getElementById("ed-ov");
    const fermer = () => { ov.remove(); document.removeEventListener("keydown", echap); if (location.hash !== retour) location.hash = retour; };
    const echap = e => { if (e.key === "Escape") fermer(); };
    document.addEventListener("keydown", echap);
    ov.addEventListener("click", e => { if (e.target === ov || e.target.closest("[data-fermer]")) fermer(); });
    window.addEventListener("hashchange", () => ov.remove(), { once: true });
    return ov;
  }

  function editeur(rubrique, type, id) {
    const T = TYPES[type];
    const retour = `#/pdg/${rubrique}`;
    const nouveau = id === "nouveau";
    const existant = nouveau ? null : window[T.tableau].find(x => x.id === id);
    if (!nouveau && !existant) { toast("Élément introuvable", "x"); return; }
    const valeur = copie(existant) || (type === "histoire" || type === "serie" ? { theme: (window.THEMES[0] || {}).id } : {});
    if (type === "livre" && existant) valeur.chapitres = copie(((window.LIVRES_CHAPITRES[id] || {}).chapitres) || []);
    const schema = T.schema();
    const dessin = existant && window.ILLUSTRATION ? (window.ILLUSTRATION(id) || window.ILLUSTRATION(existant.theme || "")) : "";
    const image = champImage(T.image(nouveau ? "nouveau" : id), T.imageAide,
      dessin || `<span class="ed-image__defaut">${type === "livre" ? "Couverture dessinée ou trouvée automatiquement" : "Illustration automatique"}</span>`);
    const etatActuel = nouveau ? "absent" : C().etat(type, id);
    const chapitresModifies = type === "livre" && !nouveau && ["modifie", "ajoute"].includes(C().etat("chapitres", id));

    const ov = fenetre(nouveau ? T.nouveau : existant[T.champTitre], nouveau ? "" : (PASTILLES[etatActuel] || ""), `
      <form class="formulaire ed-formulaire" id="ed-form" novalidate>
        ${image.html}
        ${rendreObjet(schema, valeur)}
      </form>`, `
      <span class="ed-message" id="ed-message" aria-live="polite"></span>
      ${nouveau ? "" : `<button class="btn b-bad b-sm" type="button" id="ed-supprimer">${ic("trash")}Supprimer</button>`}
      ${etatActuel === "modifie" || chapitresModifies ? `<button class="btn b-line b-sm" type="button" id="ed-original">${ic("undo")}Texte d'origine</button>` : ""}
      ${nouveau ? "" : `<a class="btn b-line b-sm" href="${T.lien(id)}" target="_blank" rel="noopener">${ic("eye")}Voir</a>`}
      <button class="btn b-pri" type="submit" form="ed-form" id="ed-enregistrer">${ic("check")}Enregistrer</button>`, retour);

    const form = ov.querySelector("#ed-form");
    const message = ov.querySelector("#ed-message");
    const dire = (texte, erreur) => { message.textContent = texte; message.classList.toggle("ed-erreur", !!erreur); };
    let modifie = false;
    const changement = () => { if (!modifie) { modifie = true; dire("Non enregistré"); } };
    brancherFormulaire(form, changement);
    image.brancher(form, changement);
    const premier = form.querySelector("input:not([type=file]), textarea");
    if (premier && nouveau) premier.focus();

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const data = lireObjet(form.querySelector(":scope > .ed-objet"), schema);
      if (!data[T.champTitre]) { dire(`Indiquez ${T.champTitre === "nom" ? "le nom" : "le titre"}.`, true); return; }
      const bouton = ov.querySelector("#ed-enregistrer");
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
        toast(nouveau ? "Ajouté au site" : "Enregistré");
        if (nouveau) { location.hash = `#/pdg/${rubrique}/${cible}`; return; }
        dire("Enregistré ✓");
        bouton.disabled = false;
      } catch (e) {
        dire(messageErreur(e), true);
        bouton.disabled = false;
      }
    });

    const original = ov.querySelector("#ed-original");
    if (original) original.addEventListener("click", async () => {
      if (original.dataset.confirme !== "1") { original.dataset.confirme = "1"; original.innerHTML = `${ic("undo")}Confirmer`; return; }
      original.disabled = true;
      try {
        await C().reinitialiser(type, id);
        if (type === "livre") await C().reinitialiser("chapitres", id);
        toast("Texte d'origine rétabli");
        editeur(rubrique, type, id);
      } catch (e) { original.disabled = false; dire(messageErreur(e), true); }
    });
    const supprimer = ov.querySelector("#ed-supprimer");
    if (supprimer) supprimer.addEventListener("click", async () => {
      if (supprimer.dataset.confirme !== "1") { supprimer.dataset.confirme = "1"; supprimer.innerHTML = `${ic("trash")}Confirmer la suppression`; return; }
      supprimer.disabled = true;
      try {
        await C().supprimer(type, id);
        if (type === "livre") await C().supprimer("chapitres", id);
        toast("Supprimé", "trash");
        location.hash = retour;
      } catch (e) { supprimer.disabled = false; dire(messageErreur(e), true); }
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


  // ---------- Boutique ----------

  async function boutique(app, id) {
    app.innerHTML = coquille("boutique", "Boutique", `<a class="btn b-gold" href="#/pdg/boutique/nouveau">${ic("plus")}Mettre un livre en vente</a>`, `
      <div class="note ok">${ic("chat")}<span>Les lecteurs voient ces livres dans la boutique et commandent directement sur WhatsApp.</span></div>
      <div class="pgrid" id="annonces"><p class="sub">Chargement…</p></div>`);
    if (id === "nouveau") {
      const ov = fenetre("Mettre un livre en vente", "", `<div id="zone-vente"></div>`, `<span class="sub" style="margin-right:auto">Le livre apparaît aussitôt dans la boutique.</span><button class="btn b-line" type="button" data-fermer>Annuler</button>`, "#/pdg/boutique");
      await window.BOUTIQUE.formulaireVente(ov.querySelector("#zone-vente"), "#/pdg/boutique");
      const titre = ov.querySelector("#zone-vente .page-titre");
      if (titre) titre.remove();
    }
    await window.BOUTIQUE.remplirAnnonces(app.querySelector("#annonces"), true, () => { toast("Retiré de la vente", "trash"); boutique(app); });
  }

  // ---------- Abonnés : comptes lecteurs et paiements à vérifier ----------

  async function chargerAbonnes() {
    try {
      const liste = await window.ABO.lister();
      attente = liste.filter(c => window.ABO.enAttente(c)).length;
      return liste;
    } catch { return null; }
  }
  const dateCourte = v => v ? new Date(v).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }) : "";
  const lienWa = tel => { const n = String(tel || "").replace(/\D/g, ""); return n ? "https://wa.me/" + (n.length === 10 ? "225" + n : n) : ""; };
  let filtreAbonnes = "tous";

  async function abonnes(app) {
    const A = window.ABO;
    app.innerHTML = coquille("abonnes", "Abonnés", "", `<p class="sub">Chargement des comptes…</p>`);
    let liste;
    try { liste = await A.lister(); }
    catch (e) {
      app.querySelector("#pdg-page").innerHTML = `<div class="note">${ic("bell")}<span>Impossible de lire les comptes : ${echapper(messageErreur(e))}</span></div>`;
      return;
    }
    liste.sort((a, b) => Number(A.enAttente(b)) - Number(A.enAttente(a)) || String(b.creeLe).localeCompare(String(a.creeLe)));
    attente = liste.filter(c => A.enAttente(c)).length;
    const r = A.reglages();
    const actifs = liste.filter(c => A.actif(c));
    const fcfa = parseInt(String(r.prixFcfa).replace(/\D/g, ""), 10) || 0;
    const groupes = { tous: () => true, attente: c => A.enAttente(c), actifs: c => A.actif(c), autres: c => !A.actif(c) && !A.enAttente(c) };
    const visibles = liste.filter(groupes[filtreAbonnes] || groupes.tous);
    const actions = c => {
      const b = [];
      if (A.enAttente(c)) b.push(`<button class="btn b-pri b-sm" type="button" data-action="valider" data-id="${echapper(c.id)}">${ic("check")}Valider 30 j</button>`,
        `<button class="btn b-line b-sm" type="button" data-action="refuser" data-id="${echapper(c.id)}">${ic("x")}Refuser</button>`);
      else b.push(`<button class="btn b-line b-sm" type="button" data-action="valider" data-id="${echapper(c.id)}">${ic("plus")}${A.actif(c) ? "Prolonger" : "Offrir"} 30 j</button>`);
      if (lienWa(c.telephone)) b.push(`<a class="btn b-line b-sm" href="${lienWa(c.telephone)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ic("chat")}</a>`);
      b.push(`<button class="btn b-bad b-sm" type="button" data-action="supprimer" data-id="${echapper(c.id)}" aria-label="Supprimer le compte">${ic("trash")}</button>`);
      return b.join("");
    };
    const corps = `
      <div class="kpis">
        <button class="kpi" type="button" data-groupe="tous"><small>${ic("users")}Inscrits</small><b class="num">${liste.length}</b><em>comptes lecteurs</em></button>
        <button class="kpi" type="button" data-groupe="actifs"><small>${ic("crown")}Abonnés actifs</small><b class="num">${actifs.length}</b><em>${echapper(r.prixEuro)} € / mois chacun</em></button>
        <button class="kpi${attente ? " hl" : ""}" type="button" data-groupe="attente"><small>${ic("bell")}À vérifier</small><b class="num">${attente}</b><em>paiements déclarés</em></button>
        <div class="kpi"><small>${ic("tag")}Revenu du mois</small><b class="num">${(actifs.length * fcfa).toLocaleString("fr-FR")}</b><em>F CFA estimés</em></div>
      </div>
      <div class="note ok">${ic("shield")}<span>Quand un lecteur déclare un paiement, retrouvez-le dans votre application Wave ou Djamo (montant et numéro), puis touchez <b>Valider</b> : l'abonnement s'ouvre pour 30 jours.${r.heuresProvisoires ? ` En attendant, il peut lire pendant ${r.heuresProvisoires} h.` : ""}</span></div>
      ${A.moyensVisibles().length ? "" : `<a class="note" href="#/pdg/parametres/abonnement" style="text-decoration:none">${ic("bell")}<span>Aucun moyen de paiement n'est affiché aux lecteurs. Ajoutez un numéro dans Paramètres › Abonnement.</span></a>`}
      ${r.obligatoire !== "oui" ? `<div class="note">${ic("bell")}<span>L'abonnement est désactivé : une simple inscription suffit pour tout lire.</span></div>` : ""}
      <div class="chips" style="margin:0">${[["tous", "Tous"], ["attente", "À vérifier"], ["actifs", "Actifs"], ["autres", "Sans abonnement"]].map(([v, t]) =>
        `<button class="chip" type="button" data-groupe="${v}" aria-pressed="${filtreAbonnes === v}">${t}</button>`).join("")}</div>
      ${visibles.length ? `<div class="card"><div class="tw"><table class="t"><thead><tr><th>Lecteur</th><th>Paiement déclaré</th><th>Statut</th><th></th></tr></thead><tbody>
        ${visibles.map(c => { const e = A.etat(c); return `<tr>
          <td><b>${echapper(c.nom)}</b><br><span class="sub num">${echapper(c.telephone || "")}</span><br><span class="sub">inscrit le ${dateCourte(c.creeLe)}</span></td>
          <td>${c.paiement ? `<b>${echapper(c.paiement.moyen)}</b> · <span class="num">${echapper(c.paiement.reference)}</span><br><span class="sub">le ${dateCourte(c.paiement.le)}</span>` : `<span class="sub">Aucun</span>`}</td>
          <td><span class="pill ${e.pastille}">${e.texte}</span>${c.jusqua && c.statut === "actif" ? `<br><span class="sub">jusqu'au ${dateCourte(c.jusqua)}</span>` : ""}</td>
          <td><div class="acts" style="justify-content:flex-end;flex-wrap:nowrap">${actions(c)}</div></td></tr>`; }).join("")}
      </tbody></table></div></div>` : `<div class="empty">${ic("users")}${liste.length ? "Aucun compte dans ce filtre." : "Aucun lecteur inscrit pour l'instant. Ils s'inscrivent après le chapitre gratuit."}</div>`}`;
    app.innerHTML = coquille("abonnes", "Abonnés", `<a class="btn b-line" href="#/pdg/parametres/abonnement">${ic("cog")}Prix et paiements</a>`, corps);
    app.querySelectorAll("[data-groupe]").forEach(b => b.addEventListener("click", () => { filtreAbonnes = b.dataset.groupe; abonnes(app); }));
    app.querySelectorAll("[data-action]").forEach(b => b.addEventListener("click", async () => {
      const c = liste.find(x => x.id === b.dataset.id);
      if (!c) return;
      const action = b.dataset.action;
      if (action === "supprimer" && b.dataset.confirme !== "1") { b.dataset.confirme = "1"; b.innerHTML = `${ic("trash")}Supprimer ?`; return; }
      b.disabled = true;
      try {
        if (action === "valider") await A.valider(c, 30);
        else if (action === "refuser") await A.refuser(c);
        else await A.supprimer(c);
        toast({ valider: `Abonnement de ${c.nom} ouvert pour 30 jours`, refuser: "Paiement refusé", supprimer: "Compte supprimé" }[action], { valider: "check", refuser: "x", supprimer: "trash" }[action]);
        abonnes(app);
      } catch (e) { b.disabled = false; toast(messageErreur(e), "x"); }
    }));
  }

  // ---------- Paramètres : identité, accueil, abonnement et paiements, accès, sauvegarde ----------

  const STABS = [
    ["identite", "Identité", "crown"], ["accueil", "Page d'accueil", "home"], ["abonnement", "Abonnement & paiements", "tag"],
    ["acces", "Accès PDG", "lock"], ["sauvegarde", "Sauvegarde", "download"]
  ];
  const BLOCS = {
    identite: [
      { titre: "Nom de l'application", petit: "affiché dans le logo, l'onglet et les messages", schema: [
        { nom: "nomApp", label: "Nom", type: "texte", demi: true, requis: true },
        { nom: "slogan", label: "Slogan sous le nom", type: "texte", demi: true }
      ] },
      { titre: "Contact", petit: "en bas du site et dans le menu", schema: [
        { nom: "nomPDG", label: "Nom du PDG", type: "texte", demi: true },
        { nom: "whatsapp", label: "Numéro WhatsApp (avec l'indicatif, ex. 225…)", type: "texte", demi: true }
      ] },
      { titre: "Réseaux sociaux", petit: "liens affichés en bas du site", schema: [
        { nom: "reseaux", label: "Liens", type: "liste", nouveau: "Ajouter un réseau", nomItem: "Réseau", sous: [
          { nom: "nom", label: "Nom (Facebook, TikTok, Instagram…)", type: "texte", demi: true },
          { nom: "lien", label: "Adresse (https://…)", type: "texte", demi: true }
        ] }
      ] }
    ],
    accueil: [
      { titre: "Textes de l'accueil", schema: [
        { nom: "titre", label: "Grand titre", type: "texte" },
        { nom: "accent", label: "Fin du titre, en doré", type: "texte" },
        { nom: "texte", label: "Texte sous le titre", type: "zone", lignes: 3 },
        { nom: "boutiqueTitre", label: "Bandeau boutique : titre", type: "texte" },
        { nom: "boutiqueTexte", label: "Bandeau boutique : texte", type: "zone", lignes: 2 }
      ] }
    ],
    abonnement: [
      { titre: "Abonnement", petit: "ce que paient les lecteurs", schema: [
        { nom: "obligatoire", label: "Abonnement payant", type: "choix", options: [{ v: "oui", t: "Oui : payer pour lire la suite" }, { v: "non", t: "Non : l'inscription gratuite suffit" }] },
        { nom: "prixEuro", label: "Prix par mois (€)", type: "texte", demi: true },
        { nom: "prixFcfa", label: "Prix par mois (F CFA)", type: "texte", demi: true },
        { nom: "chapitresGratuits", label: "Chapitres gratuits par livre ou série", type: "nombre", demi: true },
        { nom: "heuresProvisoires", label: "Heures de lecture en attendant votre validation (0 = aucune)", type: "nombre", demi: true }
      ] },
      { titre: "Moyens de paiement", petit: "seuls ceux qui ont un numéro ou un lien sont affichés", schema: [
        { nom: "moyens", label: "Moyens", type: "liste", nouveau: "Ajouter un moyen de paiement", nomItem: "Moyen", sous: [
          { nom: "nom", label: "Nom (Wave, Djamo, Orange Money…)", type: "texte", demi: true },
          { nom: "numero", label: "Numéro ou compte affiché aux lecteurs", type: "texte", demi: true },
          { nom: "details", label: "Consigne pour le lecteur", type: "zone", lignes: 2 },
          { nom: "lien", label: "Lien de paiement (facultatif, https://…), ex. lien Wave Business", type: "texte" }
        ] }
      ] }
    ]
  };
  const valeursOnglet = onglet => onglet === "abonnement" ? window.ABO.reglages() : accueil();

  function parametres(app, onglet) {
    onglet = STABS.some(t => t[0] === onglet) ? onglet : "identite";
    let corps = "";
    if (BLOCS[onglet]) {
      const v = valeursOnglet(onglet);
      const djamoVide = onglet === "abonnement" && v.moyens.some(m => /djamo/i.test(m.nom || "") && !String(m.numero || "").trim());
      corps = `<form class="formulaire ed-formulaire" id="ed-form" novalidate>
        ${onglet === "identite" ? `<div class="card"><h3>Votre photo <small>affichée dans l'espace PDG</small></h3><div id="img-pdg"></div></div>` : ""}
        ${onglet === "accueil" ? `<div class="card"><h3>Photo de fond de l'accueil <small>un voile sombre garde le texte lisible</small></h3><div id="img-banniere"></div></div>` : ""}
        ${onglet === "abonnement" ? `<div class="note ok">${ic("shield")}<span>Le lecteur paie avec l'un de ces moyens puis déclare son paiement ; vous le validez dans Abonnés. Pour un encaissement automatique, collez un lien de paiement (Wave Business, CinetPay…) dans « Lien de paiement ».</span></div>` : ""}
        ${djamoVide ? `<div class="note">${ic("bell")}<span>Le numéro de compte Djamo n'est pas rempli : Djamo n'est pas encore proposé aux lecteurs. Saisissez-le ci-dessous si vous voulez l'afficher.</span></div>` : ""}
        ${BLOCS[onglet].map((b, i) => `<div class="card" data-bloc="${i}"><h3>${b.titre}${b.petit ? ` <small>${b.petit}</small>` : ""}</h3>${rendreObjet(b.schema, v)}</div>`).join("")}
        <div class="acts" style="justify-content:flex-end"><span class="ed-message" id="ed-message" aria-live="polite" style="margin-right:auto"></span><button class="btn b-pri" type="submit">${ic("check")}Enregistrer</button></div>
      </form>`;
    } else if (onglet === "acces") {
      corps = `<div class="card">
        <h3>Mot de passe de l'espace PDG</h3>
        ${C().peutChangerMotDePasse() ? `
          <form class="formulaire" id="form-mdp" novalidate>
            <label class="champ" for="mdp-ancien">Mot de passe actuel<input id="mdp-ancien" type="password" autocomplete="current-password"></label>
            <label class="champ" for="mdp-nouveau">Nouveau mot de passe (6 caractères minimum)<input id="mdp-nouveau" type="password" autocomplete="new-password"></label>
            <p class="ed-message" id="mdp-message" aria-live="polite"></p>
            <button class="btn b-pri" type="submit" style="justify-self:start">${ic("lock")}Changer le mot de passe</button>
          </form>` : `<p class="sub">Dans l'aperçu Claude, seul le propriétaire du compte peut modifier : aucun mot de passe n'est nécessaire.</p>`}
      </div>${noteMode()}`;
    } else {
      corps = C().mode() === "claude"
        ? `<div class="card"><h3>Sauvegarde</h3><p class="sub">Dans l'aperçu Claude, vos modifications sont déjà gardées en ligne. La sauvegarde en fichier est disponible sur le site Netlify.</p></div>`
        : `<div class="card"><h3>Sauvegarde <small>toutes vos modifications dans un fichier</small></h3>
            <p class="sub" style="margin:0 0 12px">À garder en lieu sûr, ou à intégrer plus tard au dossier data/ du site.</p>
            <button class="btn b-line" type="button" id="sauvegarde">${ic("download")}Télécharger la sauvegarde</button></div>`;
    }
    app.innerHTML = coquille("parametres", "Paramètres", "", `
      <div class="stabs" role="tablist">${STABS.map(([id, nom, i]) => `<a class="stab" role="tab" href="#/pdg/parametres/${id}" aria-selected="${id === onglet}">${ic(i)}${nom}</a>`).join("")}</div>
      ${corps}`);

    if (BLOCS[onglet]) {
      const form = app.querySelector("#ed-form");
      const message = app.querySelector("#ed-message");
      const changement = () => { message.textContent = "Non enregistré"; message.classList.remove("ed-erreur"); };
      const images = [];
      if (onglet === "identite") images.push(["#img-pdg", champImage("pdg", "Votre portrait, en carré de préférence.", `<span class="ed-image__defaut">${echapper(initiales(accueil().nomPDG))}</span>`, "imgp-")]);
      if (onglet === "accueil") images.push(["#img-banniere", champImage("banniere", "Photo de fond de la bannière d'accueil.", `<span class="ed-image__defaut">Fond sombre à motif bogolan</span>`)]);
      images.forEach(([sel, champ]) => { const z = app.querySelector(sel); z.innerHTML = champ.html; champ.brancher(z, changement); });
      brancherFormulaire(form, changement);
      form.addEventListener("submit", async ev => {
        ev.preventDefault();
        const bouton = form.querySelector("button[type=submit]");
        const lu = {};
        BLOCS[onglet].forEach((b, i) => Object.assign(lu, lireObjet(form.querySelector(`[data-bloc="${i}"] > .ed-objet`), b.schema)));
        if (onglet === "identite" && !lu.nomApp) { message.textContent = "Le nom de l'application est obligatoire."; message.classList.add("ed-erreur"); return; }
        if (lu.reseaux) lu.reseaux = lu.reseaux.filter(x => x.nom || x.lien);
        if (lu.moyens) lu.moyens = lu.moyens.filter(x => x.nom || x.numero || x.lien);
        const mauvaisLien = [...(lu.reseaux || []), ...(lu.moyens || [])].find(x => x.lien && !/^https:\/\/\S+$/.test(x.lien));
        if (mauvaisLien) { message.textContent = `Le lien de « ${mauvaisLien.nom || "?"} » doit commencer par https://`; message.classList.add("ed-erreur"); return; }
        bouton.disabled = true;
        message.textContent = "Enregistrement…";
        try {
          const site = window.SITE || {};
          if (onglet === "abonnement") await C().enregistrer("site", "paiement", { ...(site.paiement || {}), ...lu });
          else await C().enregistrer("site", "accueil", { ...(site.accueil || {}), ...lu });
          for (const [, champ] of images) await champ.enregistrer();
          toast("Paramètres enregistrés");
          parametres(app, onglet);
        } catch (e) { message.textContent = messageErreur(e); message.classList.add("ed-erreur"); bouton.disabled = false; }
      });
    }
    const form = app.querySelector("#form-mdp");
    if (form) form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const msg = form.querySelector("#mdp-message");
      const nouveau = form.querySelector("#mdp-nouveau").value;
      if (nouveau.length < 6) { msg.textContent = "Le nouveau mot de passe doit faire au moins 6 caractères."; msg.classList.add("ed-erreur"); return; }
      try {
        await C().changerMotDePasse(form.querySelector("#mdp-ancien").value, nouveau);
        msg.textContent = "Mot de passe changé ✓"; msg.classList.remove("ed-erreur"); form.reset();
        toast("Mot de passe changé", "lock");
      } catch (e) { msg.textContent = e.message || "Échec du changement."; msg.classList.add("ed-erreur"); }
    });
    const sauvegarde = app.querySelector("#sauvegarde");
    if (sauvegarde) sauvegarde.addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([C().sauvegarde()], { type: "application/json" }));
      a.download = `${window.MARQUE.nom().toLowerCase().replace(/[^a-z0-9]+/g, "-")}-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
  }

  window.pagePDG = pagePDG;
})();
