// Application Kalan : navigation par adresse (#/livres, #/serie/premier-pas/3, ...),
// recherche, filtres, lecture par chapitres et suivi de lecture.
// Le contenu vient des fichiers du dossier data/.
(function () {
  const app = document.getElementById("app");
  const LIVRES = window.LIVRES || [];
  const CHAPITRES = window.LIVRES_CHAPITRES || {};
  const HISTOIRES = window.HISTOIRES || [];
  const SERIES = window.SERIES || [];
  const THEMES = window.THEMES || [];

  const COULEURS = {
    "Succès": ["#c0601d", "#6b2c0a"], "Finance": ["#0f6b4f", "#073d2d"], "Stratégie": ["#3b2f6b", "#1d173a"],
    "Spiritualité": ["#136c84", "#0a3a47"], "Relations": ["#a3324d", "#5a1729"], "Habitudes": ["#2d5f9a", "#163357"],
    "Efficacité": ["#5b6b14", "#323b0a"], "Communication": ["#8a4bb0", "#4a2560"], "Sagesse": ["#7b5a1e", "#43300d"],
    "amour": ["#b0304f", "#5e1428"], "philosophie": ["#3b2f6b", "#1d173a"], "developpement-personnel": ["#0f6b4f", "#073d2d"],
    "finance": ["#8a6a10", "#4a3806"], "resilience": ["#c0601d", "#6b2c0a"], "sagesse": ["#7b5a1e", "#43300d"],
    "amitie": ["#2d5f9a", "#163357"], "spiritualite": ["#136c84", "#0a3a47"]
  };

  // Textes de l'accueil par défaut (modifiables dans l'espace PDG > Page d'accueil).
  const ACCUEIL_DEFAUT = window.ACCUEIL_DEFAUT = {
    nomApp: "Kalan",
    slogan: "Livres & histoires",
    reseaux: [],
    titre: "Les grands livres et les belles histoires,",
    accent: "chapitre par chapitre.",
    texte: "Des résumés détaillés avec des exemples de chez nous, des histoires en série à suivre chaque jour, et un coach IA pour aller plus loin.",
    whatsapp: "",
    nomPDG: "Moussa Doumbia",
    boutiqueTitre: "Achetez les livres de l'auteur",
    boutiqueTexte: "Commandez directement sur WhatsApp, livraison ou PDF selon le livre."
  };

  // Filtres mémorisés pendant la visite.
  const etat = {
    livres: { recherche: "", filtre: "tous" },
    histoires: { recherche: "", filtre: "tous" },
    ongletLivre: "chapitres"
  };

  // ---------- Outils ----------

  function echapper(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  function paragraphes(texte) {
    return String(texte || "").split(/\n\s*\n/).map(p => `<p>${echapper(p.trim())}</p>`).join("");
  }
  const ic = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  function toast(message, icone = "check") {
    const t = document.getElementById("toast");
    if (!t) return;
    t.innerHTML = ic(icone) + echapper(message);
    t.classList.add("on");
    clearTimeout(t._minuteur);
    t._minuteur = setTimeout(() => t.classList.remove("on"), 2600);
  }
  window.TOAST = toast;
  const accueilActuel = () => ({ ...ACCUEIL_DEFAUT, ...((window.SITE || {}).accueil || {}) });
  // Nom de l'application (modifiable dans Paramètres) : « Ka<em>lan</em> » dans le logo.
  const nomApp = () => accueilActuel().nomApp || ACCUEIL_DEFAUT.nomApp;
  function motMarque(nom) {
    const n = String(nom || ""), coupe = Math.floor(n.length / 2);
    return `${echapper(n.slice(0, coupe))}<em>${echapper(n.slice(coupe))}</em>`;
  }
  const marque = sousTitre => `<svg class="logo"><use href="#logo"/></svg><span class="wm"><span>${motMarque(nomApp())}</span><small>${echapper(sousTitre == null ? accueilActuel().slogan : sousTitre)}</small></span>`;
  window.MARQUE = { nom: nomApp, html: marque };
  const lienWhatsapp = numero => { const n = String(numero || "").replace(/\D/g, ""); return n ? "https://wa.me/" + n : ""; };

  function normaliser(texte) {
    return String(texte).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function theme(id) {
    return THEMES.find(t => t.id === id) || { id, nom: id, emoji: "" };
  }
  function chapitresLivre(id) {
    return (CHAPITRES[id] && CHAPITRES[id].chapitres) || [];
  }
  function minutes(nbMots) {
    return Math.max(1, Math.round(nbMots / 200));
  }
  function motsDe(...textes) {
    return textes.join(" ").split(/\s+/).filter(Boolean).length;
  }

  // ---------- Suivi de lecture (sur cet appareil) ----------

  function lireStockage(cle, defaut) {
    try { return JSON.parse(localStorage.getItem(cle)) || defaut; } catch { return defaut; }
  }
  function ecrireStockage(cle, valeur) {
    try { localStorage.setItem(cle, JSON.stringify(valeur)); } catch { /* lecture sans suivi */ }
  }
  const lus = () => lireStockage("morata-lus", {});
  function marquerLu(cle, n, titre, lien) {
    const l = lus();
    l[cle] = Array.from(new Set([...(l[cle] || []), n]));
    ecrireStockage("morata-lus", l);
    ecrireStockage("morata-dernier", { cle, n, titre, lien });
  }
  function nbLus(cle) { return (lus()[cle] || []).length; }
  function estLu(cle, n) { return (lus()[cle] || []).includes(n); }

  // ---------- Éléments réutilisables ----------

  // Image choisie par le PDG (window.IMAGES, voir js/contenu.js) ou, à défaut, illustration dessinée.
  function image(cle) {
    const src = (window.IMAGES || {})[cle];
    return src ? `<img src="${echapper(src)}" alt="" loading="lazy">` : "";
  }
  function dessin(...cles) {
    if (!window.ILLUSTRATION) return "";
    for (const c of cles) { const svg = c && window.ILLUSTRATION(c); if (svg) return svg; }
    return "";
  }

  // Couverture dessinée ; pour un livre, data-couverture permet d'afficher la vraie couverture (js/couvertures.js).
  function couverture(titre, sousTitre, cleCouleur, livreId) {
    const [c1, c2] = COULEURS[cleCouleur] || ["#0f5c4d", "#0a3f35"];
    const photo = livreId ? image("livre-" + livreId) : "";
    if (photo) return `<div class="couverture couverture--photo" aria-hidden="true">${photo}<span class="couverture__titre">${echapper(titre)}</span></div>`;
    return `<div class="couverture" style="--c1:${c1};--c2:${c2}" aria-hidden="true"${livreId ? ` data-couverture="${echapper(livreId)}"` : ""}>
      <span class="couverture__titre">${echapper(titre)}</span>
      <span class="couverture__auteur">${echapper(sousTitre)}</span>
    </div>`;
  }

  // Couverture illustrée (séries et thèmes) : un dessin avec le titre par-dessus.
  function couvertureIllustree(titre, sousTitre, cleImage, ...clesDessin) {
    return `<div class="couverture couverture--illustree" aria-hidden="true">
      ${image(cleImage) || dessin(...clesDessin)}
      <span class="couverture__titre">${echapper(titre)}</span>
      <span class="couverture__auteur">${echapper(sousTitre)}</span>
    </div>`;
  }
  function bandeau(clesImage, ...clesDessin) {
    const svg = clesImage.map(image).find(Boolean) || dessin(...clesDessin);
    return svg ? `<div class="bandeau" aria-hidden="true">${svg}</div>` : "";
  }

  function carteLivre(l) {
    const nb = chapitresLivre(l.id).length;
    return `
      <a class="prod" href="#/livres/${echapper(l.id)}">
        <span class="ph" aria-hidden="true">${couverture(l.titre, l.auteur, l.categorie, l.id)}</span>
        <span class="pb"><span class="sub">${echapper(l.categorie)}</span><b>${echapper(l.titre)}</b><span class="sub">${echapper(l.auteur)}</span></span>
        <span class="pf"><span class="prix-chap num">${nb ? `${nb} <small>chapitres</small>` : `${echapper(l.tempsLecture)} <small>min · express</small>`}</span><span class="addb">${ic("arrow")}</span></span>
      </a>`;
  }

  function carteSerie(s) {
    const t = theme(s.theme);
    const nb = (s.chapitres || []).length;
    const faits = nbLus("serie:" + s.id);
    return `
      <a class="carte carte--serie" href="#/serie/${echapper(s.id)}">
        ${couvertureIllustree(s.titre, t.nom, "serie-" + s.id, s.id, s.theme)}
        <span class="carte--serie__corps">
          <span class="meta"><span class="etiquette">${t.emoji} ${echapper(t.nom)}</span><span>${nb} chapitres</span></span>
          <h3>${echapper(s.titre)}</h3>
          <p>${echapper(s.resume)}</p>
          ${faits ? `<span class="progression" aria-label="${faits} chapitres lus sur ${nb}"><span style="width:${Math.round(faits / nb * 100)}%"></span></span>` : ""}
        </span>
      </a>`;
  }

  function carteHistoire(h) {
    const t = theme(h.theme);
    return `
      <a class="carte carte--histoire" href="#/histoires/${echapper(h.id)}">
        <span class="vignette" aria-hidden="true">${image("histoire-" + h.id) || image("theme-" + h.theme) || dessin(h.theme)}</span>
        <span class="meta"><span class="etiquette">${t.emoji} ${echapper(t.nom)}</span><span>${h.tempsLecture} min</span></span>
        <h3>${echapper(h.titre)}</h3>
        <p>${echapper(h.resume)}</p>
      </a>`;
  }

  // ---------- Accueil ----------

  function pageAccueil() {
    const dernier = lireStockage("morata-dernier", null);
    const livresChapitres = LIVRES.filter(l => chapitresLivre(l.id).length);
    const autresLivres = LIVRES.filter(l => !chapitresLivre(l.id).length);
    const accueil = accueilActuel();
    const fond = (window.IMAGES || {}).banniere;
    const tuiles = [...SERIES.map(x => ({ cle: "serie-" + x.id, dessin: [x.id, x.theme], titre: x.titre, lien: `#/serie/${x.id}` })),
      ...THEMES.map(t => ({ cle: "theme-" + t.id, dessin: [t.id], titre: t.nom, lien: `#/histoires/theme/${t.id}` }))]
      .filter(x => image(x.cle) || dessin(...x.dessin)).slice(0, 4);
    const nbHistoires = id => HISTOIRES.filter(h => h.theme === id).length + SERIES.filter(x => x.theme === id).length;
    const wa = lienWhatsapp(accueil.whatsapp);
    app.innerHTML = `
      <section class="hero motif">
        ${fond ? `<span class="hero__fond" style="background-image:url('${echapper(fond)}')"></span>` : ""}
        <div class="wrap hero-g">
          <div class="hero-tx">
            <span class="kick">${ic("book")}Résumés · Histoires · Coach IA</span>
            <h1>${echapper(accueil.titre)} <em>${echapper(accueil.accent)}</em></h1>
            <p class="lead">${echapper(accueil.texte)}</p>
            <form class="hsearch" id="recherche-accueil">
              <label><span>Quoi</span><select id="ra-quoi"><option value="livres">Livres</option><option value="histoires">Histoires</option></select></label>
              <label><span>Thème</span><select id="ra-theme"></select></label>
              <label><span>Mot-clé</span><input id="ra-mot" placeholder="Auteur, titre, idée…"></label>
              <button class="btn b-gold" type="submit">${ic("search")}Rechercher</button>
            </form>
            <div class="trust"><span>${ic("layers")}Résumés en chapitres</span><span>${ic("story")}Séries de 20 chapitres</span><span>${ic("spark")}Coach IA</span></div>
          </div>
          <div class="mosaic">
            ${tuiles.map((x, k) => `<a class="m m${k}" href="${echapper(x.lien)}">${image(x.cle) || dessin(...x.dessin)}<span>${echapper(x.titre)}</span></a>`).join("")}
            <div class="mbadge"><b class="num">${LIVRES.length}</b><span>livres<br>résumés</span></div>
          </div>
        </div>
      </section>

      ${dernier ? `
        <div class="wrap" style="margin-top:24px">
          <a class="ord" href="${echapper(dernier.lien)}"><span><span class="kick2">Reprendre la lecture</span><b>${echapper(dernier.titre)}</b></span><span class="pill p-gold">Chapitre ${echapper(dernier.n)}</span></a>
        </div>` : ""}

      <section class="wrap sect">
        <div class="sech"><div><span class="kick2">Bibliothèque</span><h2>Résumés en chapitres</h2></div><a class="btn b-line b-sm" href="#/livres">Tous les livres ${ic("arrow")}</a></div>
        <div class="pgrid">${(livresChapitres.length ? livresChapitres : LIVRES).slice(0, 8).map(carteLivre).join("")}</div>
      </section>

      <section class="wrap sect">
        <div class="sech"><div><span class="kick2">Histoires</span><h2>Explorez par thème</h2></div><a class="btn b-line b-sm" href="#/histoires">Toutes les histoires ${ic("arrow")}</a></div>
        <div class="catph">${THEMES.map(t => {
          const visuel = image("theme-" + t.id) || dessin(t.id);
          const n = nbHistoires(t.id);
          return `<a class="cph" href="#/histoires/theme/${echapper(t.id)}"><span class="bg" style="background:linear-gradient(140deg,${(COULEURS[t.id] || ["#7A2E1F", "#1B1210"]).join(",")})">${visuel}</span>${visuel ? "" : `<span class="ci2">${echapper(t.emoji)}</span>`}<span class="lab"><b>${echapper(t.nom)}</b><small>${n} histoire${n > 1 ? "s" : ""}</small></span></a>`;
        }).join("")}</div>
      </section>

      ${SERIES.length ? `
        <section class="occ"><div class="wrap sect">
          <div class="sech"><div><span class="kick2">À suivre</span><h2>Histoires en série</h2></div></div>
          <p class="lead">Des romans courts à lire chapitre après chapitre, avec une leçon à la fin de chaque chapitre.</p>
          <div class="occg">${SERIES.map(x => {
            const t = theme(x.theme);
            return `<a class="oc" href="#/serie/${echapper(x.id)}"><span class="bg">${image("serie-" + x.id) || dessin(x.id, x.theme)}</span><span class="lab"><b>${echapper(x.titre)}</b><small>${(x.chapitres || []).length} chapitres · ${echapper(t.nom)}</small></span></a>`;
          }).join("")}</div>
        </div></section>` : ""}

      <section class="wrap sect">
        <div class="sech"><div><span class="kick2">Simple et utile</span><h2>Comment ça marche</h2></div></div>
        <ol class="how">
          <li><span>1</span><b>Choisissez</b><p>Un livre ou une histoire, selon votre besoin du moment.</p></li>
          <li><span>2</span><b>Lisez</b><p>Chapitre par chapitre, avec des exemples concrets de chez nous.</p></li>
          <li><span>3</span><b>Réfléchissez</b><p>Répondez aux questions ou parlez-en avec le coach IA.</p></li>
          <li><span>4</span><b>Agissez</b><p>Chaque résumé se termine par une action simple à faire aujourd'hui.</p></li>
        </ol>
      </section>

      ${blocQuestionDuJour()}

      <section class="wrap sect">
        <div class="band"><div><h2>${echapper(accueil.boutiqueTitre)}</h2><p>${echapper(accueil.boutiqueTexte)}</p></div>
          <div class="acts"><a class="btn b-gold" href="#/boutique">${ic("cart")}Voir la boutique</a>${wa ? `<a class="btn b-sm" style="background:rgba(255,255,255,.12);color:#fff" href="${wa}" target="_blank" rel="noopener">${ic("chat")}WhatsApp</a>` : ""}</div>
        </div>
      </section>

      ${autresLivres.length ? `
        <section class="wrap sect">
          <div class="sech"><div><span class="kick2">En 5 minutes</span><h2>Résumés express</h2></div></div>
          <div class="pgrid">${autresLivres.map(carteLivre).join("")}</div>
        </section>` : ""}`;

    // Recherche de l'accueil : ouvre la liste filtrée.
    const quoi = app.querySelector("#ra-quoi");
    const choixTheme = app.querySelector("#ra-theme");
    const remplirThemes = () => {
      const options = quoi.value === "livres"
        ? [...new Set(LIVRES.map(l => l.categorie))].sort((a, b) => a.localeCompare(b, "fr")).map(c => [c, c])
        : THEMES.map(t => [t.id, t.nom]);
      choixTheme.innerHTML = `<option value="tous">Tous</option>` + options.map(([v, t]) => `<option value="${echapper(v)}">${echapper(t)}</option>`).join("");
    };
    quoi.addEventListener("change", remplirThemes);
    remplirThemes();
    app.querySelector("#recherche-accueil").addEventListener("submit", ev => {
      ev.preventDefault();
      const cle = quoi.value;
      etat[cle].filtre = choixTheme.value;
      etat[cle].recherche = app.querySelector("#ra-mot").value;
      location.hash = "#/" + cle;
    });
  }

  // Une question différente chaque jour, tirée des livres.
  function blocQuestionDuJour() {
    const toutes = [];
    LIVRES.forEach(l => (l.questions || []).forEach(q => toutes.push({ q, l })));
    if (!toutes.length) return "";
    const jour = Math.floor(Date.now() / 86400000);
    const { q, l } = toutes[jour % toutes.length];
    return `
      <section class="wrap sect">
        <div class="carte-question">
          <span class="kick2">Question du jour · ${echapper(l.titre)}</span>
          <p>${echapper(q)}</p>
          <a class="btn b-pri" href="#/coach/livre/${echapper(l.id)}">${ic("spark")}En parler avec le coach IA</a>
        </div>
      </section>`;
  }

  // ---------- Listes avec recherche et filtres ----------

  function pageListe(config) {
    const e = etat[config.cle];
    app.innerHTML = `
      <section class="pageh"><span class="kick">${config.kick}</span><h1>${config.titre}</h1><p>${config.sousTitre}</p></section>
      <div class="toolbar"><label class="search">${ic("search")}<input class="recherche" id="recherche-${config.cle}" type="search" placeholder="${config.placeholder}" aria-label="Rechercher" value="${echapper(e.recherche)}"></label></div>
      <div class="chips" role="group" aria-label="Filtrer">
        ${[{ id: "tous", nom: "Tout" }].concat(config.filtres).map(f =>
          `<button class="chip puce" aria-pressed="${f.id === e.filtre}" data-filtre="${echapper(f.id)}" type="button">${echapper(f.nom)}</button>`
        ).join("")}
      </div>
      <div id="resultats"></div>`;

    const resultats = app.querySelector("#resultats");
    const champ = app.querySelector(".recherche");
    function afficher() {
      const q = normaliser(e.recherche.trim());
      resultats.innerHTML = config.rendre(el =>
        (e.filtre === "tous" || config.valeurFiltre(el) === e.filtre) &&
        (!q || normaliser(config.texteRecherche(el)).includes(q))
      ) || `<div class="empty">${ic("search")}Aucun résultat. Essayez un autre mot ou un autre filtre.</div>`;
      if (window.COUVERTURES) window.COUVERTURES.appliquer(resultats);
    }
    champ.addEventListener("input", () => { e.recherche = champ.value; afficher(); });
    app.querySelectorAll(".puce").forEach(b => b.addEventListener("click", () => {
      e.filtre = b.dataset.filtre;
      app.querySelectorAll(".puce").forEach(x => x.setAttribute("aria-pressed", x === b));
      afficher();
    }));
    afficher();
  }

  function pageLivres() {
    const categories = [...new Set(LIVRES.map(l => l.categorie))].sort((a, b) => a.localeCompare(b, "fr"));
    pageListe({
      cle: "livres",
      kick: "Bibliothèque",
      titre: "Les grands livres, <em>résumés</em>",
      sousTitre: "Les grands livres de développement personnel, résumés chapitre par chapitre avec des exemples.",
      placeholder: "Rechercher un titre, un auteur, une idée…",
      filtres: categories.map(c => ({ id: c, nom: c })),
      valeurFiltre: l => l.categorie,
      texteRecherche: l => [l.titre, l.auteur, l.categorie, l.accroche, ...(l.idees || []).map(i => i.titre + " " + i.texte),
        ...chapitresLivre(l.id).map(c => c.titre)].join(" "),
      rendre: garder => {
        const liste = LIVRES.filter(garder);
        return liste.length ? `<div class="pgrid">${liste.map(carteLivre).join("")}</div>` : "";
      }
    });
  }

  function pageHistoires(themeDemande) {
    if (themeDemande) etat.histoires.filtre = themeDemande;
    const utilises = new Set([...HISTOIRES.map(h => h.theme), ...SERIES.map(s => s.theme)]);
    pageListe({
      cle: "histoires",
      kick: "Histoires",
      titre: "Des histoires qui font <em>réfléchir</em>",
      sousTitre: "Des séries à suivre chapitre après chapitre, et des histoires courtes qui font réfléchir.",
      placeholder: "Rechercher une histoire, un personnage, une morale…",
      filtres: THEMES.filter(t => utilises.has(t.id)).map(t => ({ id: t.id, nom: `${t.emoji} ${t.nom}` })),
      valeurFiltre: x => x.theme,
      texteRecherche: x => x.chapitres
        ? [x.titre, x.resume, theme(x.theme).nom, ...x.chapitres.map(c => c.titre)].join(" ")
        : [x.titre, theme(x.theme).nom, x.resume, x.texte, x.morale].join(" "),
      rendre: garder => {
        const series = SERIES.filter(garder);
        const courtes = HISTOIRES.filter(garder);
        if (!series.length && !courtes.length) return "";
        return `
          ${series.length ? `<div class="section-titre"><h2>Séries à suivre</h2></div><div class="grille grille--large">${series.map(carteSerie).join("")}</div>` : ""}
          ${courtes.length ? `<div class="section-titre"><h2>Histoires courtes</h2></div><div class="grille grille--large">${courtes.map(carteHistoire).join("")}</div>` : ""}`;
      }
    });
  }

  // ---------- Livre ----------

  function pageLivre(id) {
    const l = LIVRES.find(x => x.id === id);
    if (!l) return pageIntrouvable();
    const chapitres = chapitresLivre(id);
    const cle = "livre:" + id;
    const nbSections = chapitres.reduce((n, c) => n + c.sections.length, 0);
    const mots = chapitres.reduce((n, c) => n + c.sections.reduce((m, s) => m + motsDe(s.texte, s.exemple), 0), 0);
    if (!chapitres.length) etat.ongletLivre = "essentiel";
    document.title = `${l.titre} · ${nomApp()}`;

    app.innerHTML = `
      <a class="retour" href="#/livres">← Livres</a>
      <article class="fiche">
        <div class="fiche__tete">
          ${couverture(l.titre, l.auteur, l.categorie, l.id)}
          <div>
            <span class="etiquette">${echapper(l.categorie)}</span>
            <h1>${echapper(l.titre)}</h1>
            <p class="fiche__auteur">${echapper(l.auteur)}${l.annee ? " · " + echapper(l.annee) : ""}</p>
          </div>
        </div>
        <p class="fiche__accroche">${echapper(l.accroche)}</p>
        ${chapitres.length ? `
          <div class="chiffres">
            <div class="chiffre"><strong>${chapitres.length}</strong><span>chapitres</span></div>
            <div class="chiffre"><strong>${nbSections}</strong><span>sections</span></div>
            <div class="chiffre"><strong>${minutes(mots)} min</strong><span>de lecture</span></div>
          </div>
          <a class="bouton bouton--accent" href="#/livres/${echapper(id)}/${Math.min(chapitres.length, nbLus(cle) + 1)}">
            ${nbLus(cle) ? "Continuer la lecture" : "Commencer la lecture"}
          </a>
          <div class="onglets" role="tablist">
            <button type="button" role="tab" data-onglet="chapitres">Chapitres</button>
            <button type="button" role="tab" data-onglet="essentiel">L'essentiel en 5 min</button>
          </div>` : ""}
        <div id="contenu-onglet"></div>
        <a class="bouton bouton--contour" href="#/coach/livre/${echapper(l.id)}">Approfondir ce livre avec le coach IA</a>
      </article>`;

    const zone = app.querySelector("#contenu-onglet");
    function afficherOnglet() {
      app.querySelectorAll("[data-onglet]").forEach(b => {
        b.classList.toggle("actif", b.dataset.onglet === etat.ongletLivre);
        b.setAttribute("aria-selected", b.dataset.onglet === etat.ongletLivre);
      });
      if (etat.ongletLivre === "chapitres" && chapitres.length) {
        zone.innerHTML = `<ol class="sommaire">${chapitres.map((c, i) => `
          <li><a href="#/livres/${echapper(id)}/${i + 1}">
            <span class="sommaire__num">${i + 1}</span>
            <span class="sommaire__titre">${echapper(c.titre)}<span class="sommaire__sous">${c.sections.length} sections</span></span>
            <span class="sommaire__etat${estLu(cle, i + 1) ? "" : " sommaire__etat--non"}">${estLu(cle, i + 1) ? "Lu" : ""}</span>
          </a></li>`).join("")}</ol>`;
      } else {
        zone.innerHTML = `
          ${(l.idees || []).map(i => `<section class="idee"><h3>${echapper(i.titre)}</h3><p>${echapper(i.texte)}</p></section>`).join("")}
          ${l.aRetenir ? `<div class="encadre"><strong>À retenir</strong><p>${echapper(l.aRetenir)}</p></div>` : ""}
          ${l.questions && l.questions.length ? `
            <section class="reflexion"><h3>Pour réfléchir</h3><ol>${l.questions.map(q => `<li>${echapper(q)}</li>`).join("")}</ol></section>` : ""}
          ${l.action ? `<div class="encadre encadre--accent"><strong>Passer à l'action</strong><p>${echapper(l.action)}</p></div>` : ""}`;
      }
    }
    app.querySelectorAll("[data-onglet]").forEach(b => b.addEventListener("click", () => {
      etat.ongletLivre = b.dataset.onglet;
      afficherOnglet();
    }));
    afficherOnglet();
  }

  // Chapitres réservés aux abonnés au-delà des chapitres gratuits (js/abonnement.js).
  const chapitreLibre = n => !window.ABO || window.ABO.chapitreLibre(n);

  function navigationChapitres(base, n, total, titres) {
    const verrou = !chapitreLibre(n + 1);
    return `
      ${n < total && verrou ? appelAbonnement(n) : ""}
      <nav class="navigation-chapitres" aria-label="Chapitres">
        ${n > 1 ? `<a href="${base}/${n - 1}"><small>← Précédent</small><span>${echapper(titres[n - 2])}</span></a>` : ""}
        ${n < total ? `<a class="suivant" href="${base}/${n + 1}"><small>${verrou ? `${ic("lock")} Réservé aux abonnés →` : "Suivant →"}</small><span>${echapper(titres[n])}</span></a>`
          : `<a class="suivant" href="${base}"><small>Terminé</small><span>Retour au sommaire</span></a>`}
      </nav>`;
  }

  function pageChapitreLivre(id, n) {
    const l = LIVRES.find(x => x.id === id);
    const chapitres = chapitresLivre(id);
    const c = chapitres[n - 1];
    if (!l || !c) return pageIntrouvable();
    document.title = `${c.titre} · ${l.titre}`;
    if (!chapitreLibre(n)) return pageVerrou(`#/livres/${echapper(id)}`, l.titre, n, chapitres.length, c.titre, c.intro || ((c.sections || [])[0] || {}).texte);
    app.innerHTML = `
      <article class="lecteur">
        <a class="retour" href="#/livres/${echapper(id)}">← ${echapper(l.titre)}</a>
        <div class="progression" aria-label="Chapitre ${n} sur ${chapitres.length}"><span style="width:${Math.round(n / chapitres.length * 100)}%"></span></div>
        <p class="lecteur__surtitre">Chapitre ${n} sur ${chapitres.length}</p>
        <h1>${echapper(c.titre)}</h1>
        ${c.intro ? `<p class="lecteur__intro">${echapper(c.intro)}</p>` : ""}
        ${c.sections.map((s, i) => `
          <section class="section-lecture">
            <h2><span>${n}.${i + 1}</span>${echapper(s.titre)}</h2>
            ${paragraphes(s.texte)}
            ${s.exemple ? `<div class="exemple"><strong>Exemple</strong>${paragraphes(s.exemple)}</div>` : ""}
          </section>`).join("")}
        ${c.aRetenir ? `<div class="encadre"><strong>À retenir</strong><p>${echapper(c.aRetenir)}</p></div>` : ""}
        ${navigationChapitres(`#/livres/${echapper(id)}`, n, chapitres.length, chapitres.map(x => x.titre))}
      </article>`;
    marquerLu("livre:" + id, n, `${l.titre} · ${c.titre}`, `#/livres/${id}/${n}`);
  }

  // ---------- Séries d'histoires ----------

  function pageSerie(id) {
    const s = SERIES.find(x => x.id === id);
    if (!s) return pageIntrouvable();
    const t = theme(s.theme);
    const cle = "serie:" + id;
    s.chapitres = s.chapitres || [];
    const mots = s.chapitres.reduce((n, c) => n + (c.sections || []).reduce((m, x) => m + motsDe(x.texte), 0), 0);
    document.title = `${s.titre} · ${nomApp()}`;
    app.innerHTML = `
      <a class="retour" href="#/histoires">← Histoires</a>
      <article class="fiche">
        <div class="fiche__tete">
          ${couvertureIllustree(s.titre, t.nom, "serie-" + s.id, s.id, s.theme)}
          <div>
            <span class="etiquette">${t.emoji} ${echapper(t.nom)}</span>
            <h1>${echapper(s.titre)}</h1>
            <p class="fiche__auteur">Une série ${echapper(nomApp())}</p>
          </div>
        </div>
        <p class="fiche__accroche">${echapper(s.resume)}</p>
        <div class="chiffres">
          <div class="chiffre"><strong>${s.chapitres.length}</strong><span>chapitres</span></div>
          <div class="chiffre"><strong>${nbLus(cle)}</strong><span>lus</span></div>
          <div class="chiffre"><strong>${Math.round(minutes(mots) / 60 * 10) / 10} h</strong><span>de lecture</span></div>
        </div>
        <a class="bouton bouton--accent" href="#/serie/${echapper(id)}/${Math.min(s.chapitres.length, nbLus(cle) + 1)}">
          ${nbLus(cle) ? "Continuer l'histoire" : "Commencer l'histoire"}
        </a>
        ${s.personnages ? `<div class="encadre"><strong>Les personnages</strong><p>${echapper(s.personnages)}</p></div>` : ""}
        <ol class="sommaire">${s.chapitres.map((c, i) => `
          <li><a href="#/serie/${echapper(id)}/${i + 1}">
            <span class="sommaire__num">${i + 1}</span>
            <span class="sommaire__titre">${echapper(c.titre)}<span class="sommaire__sous">${c.sections.length} parties</span></span>
            <span class="sommaire__etat${estLu(cle, i + 1) ? "" : " sommaire__etat--non"}">${estLu(cle, i + 1) ? "Lu" : ""}</span>
          </a></li>`).join("")}</ol>
        <a class="bouton bouton--contour" href="#/coach/histoire/${echapper(s.theme)}">Inventer une autre histoire « ${echapper(t.nom)} » avec l'IA</a>
      </article>`;
  }

  function pageChapitreSerie(id, n) {
    const s = SERIES.find(x => x.id === id);
    const c = s && s.chapitres[n - 1];
    if (!c) return pageIntrouvable();
    document.title = `${c.titre} · ${s.titre}`;
    if (!chapitreLibre(n)) return pageVerrou(`#/serie/${echapper(id)}`, s.titre, n, s.chapitres.length, c.titre, ((c.sections || [])[0] || {}).texte);
    app.innerHTML = `
      <article class="lecteur">
        <a class="retour" href="#/serie/${echapper(id)}">← ${echapper(s.titre)}</a>
        ${n === 1 ? bandeau(["serie-" + s.id], s.id, s.theme) : ""}
        <div class="progression" aria-label="Chapitre ${n} sur ${s.chapitres.length}"><span style="width:${Math.round(n / s.chapitres.length * 100)}%"></span></div>
        <p class="lecteur__surtitre">Chapitre ${n} sur ${s.chapitres.length}</p>
        <h1>${echapper(c.titre)}</h1>
        ${c.sections.map((x, i) => `
          <section class="section-lecture">
            <h2><span>${i + 1}</span>${echapper(x.titre)}</h2>
            ${paragraphes(x.texte)}
          </section>`).join("")}
        ${c.lecon && c.lecon.texte ? `
          <div class="encadre"><strong>La leçon du chapitre</strong>${paragraphes(c.lecon.texte)}</div>
          ${c.lecon.exemple ? `<div class="exemple"><strong>Dans votre vie</strong>${paragraphes(c.lecon.exemple)}</div>` : ""}` : ""}
        ${navigationChapitres(`#/serie/${echapper(id)}`, n, s.chapitres.length, s.chapitres.map(x => x.titre))}
      </article>`;
    marquerLu("serie:" + id, n, `${s.titre} · ${c.titre}`, `#/serie/${id}/${n}`);
  }

  function pageHistoire(id) {
    const h = HISTOIRES.find(x => x.id === id);
    if (!h) return pageIntrouvable();
    const t = theme(h.theme);
    document.title = `${h.titre} · ${nomApp()}`;
    app.innerHTML = `
      <article class="lecteur">
        <a class="retour" href="#/histoires">← Histoires</a>
        ${bandeau(["histoire-" + h.id, "theme-" + h.theme], h.theme)}
        <div class="meta"><span class="etiquette">${t.emoji} ${echapper(t.nom)}</span><span>${h.tempsLecture} min de lecture</span></div>
        <h1>${echapper(h.titre)}</h1>
        <div class="texte-histoire">${paragraphes(h.texte)}</div>
        ${h.morale ? `<div class="encadre"><strong>Morale</strong><p>${echapper(h.morale)}</p></div>` : ""}
        <a class="bouton bouton--contour bouton--large" href="#/coach/histoire/${echapper(h.theme)}">Inventer une nouvelle histoire « ${echapper(t.nom)} » avec l'IA</a>
      </article>`;
  }

  // ---------- Inscription et abonnement ----------

  const prixTexte = r => `${echapper(r.prixEuro)} € par mois${r.prixFcfa ? ` <small>(${echapper(r.prixFcfa)} F CFA)</small>` : ""}`;
  const dateCourte = v => v ? new Date(v).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";
  function memoriserRetour(lien) { try { sessionStorage.setItem("kalan-retour", lien); } catch { /* rien */ } }
  function lireRetour() { try { return sessionStorage.getItem("kalan-retour") || ""; } catch { return ""; } }

  // Encadré à la fin du dernier chapitre gratuit.
  function appelAbonnement(n) {
    const A = window.ABO, r = A.reglages(), c = A.compte();
    memoriserRetour(location.hash.replace(/\/\d+$/, "/" + (n + 1)));
    return `<div class="abo-appel">
      <span class="ic">${ic("lock")}</span>
      <div><b>${c ? "La suite est réservée aux abonnés" : "Vous avez aimé ce chapitre ?"}</b>
        <p>${c ? `Activez votre abonnement pour lire tous les chapitres : ${prixTexte(r)}.` : `Créez votre compte en 30 secondes pour continuer la lecture, puis abonnez-vous : ${prixTexte(r)}.`}</p></div>
      <a class="btn b-gold" href="#/abonnement">${c ? "Je m'abonne" : "Je m'inscris"} ${ic("arrow")}</a>
    </div>`;
  }

  // Chapitre verrouillé : début du texte flouté, puis inscription et paiement sur place.
  function pageVerrou(base, ouvrage, n, total, titre, extrait) {
    memoriserRetour(`${base}/${n}`);
    app.innerHTML = `
      <article class="lecteur">
        <a class="retour" href="${base}">← ${echapper(ouvrage)}</a>
        <p class="lecteur__surtitre">Chapitre ${n} sur ${total}</p>
        <h1>${echapper(titre)}</h1>
        ${extrait ? `<div class="abo-extrait" aria-hidden="true">${paragraphes(String(extrait).slice(0, 420))}</div>` : ""}
        <div id="zone-abo"></div>
      </article>`;
    rendreAbonnement(app.querySelector("#zone-abo"), `${base}/${n}`);
  }

  function pageAbonnement(compte) {
    const r = window.ABO.reglages();
    app.innerHTML = `
      <section class="pageh"><span class="kick">${ic(compte ? "user" : "crown")}${compte ? "Mon compte" : "Abonnement"}</span>
        <h1>${compte ? "Mon <em>compte</em>" : "Tout lire, <em>sans limite</em>"}</h1>
        <p>Tous les chapitres des résumés et des séries pour ${prixTexte(r)}. Le premier chapitre reste gratuit.</p></section>
      <div id="zone-abo"></div>`;
    rendreAbonnement(app.querySelector("#zone-abo"), lireRetour());
  }

  function rendreAbonnement(zone, retour) {
    const A = window.ABO;
    if (!A) { zone.innerHTML = ""; return; }
    const r = A.reglages(), c = A.compte(), acc = A.acces(), e = A.etat(c);
    const etape = !c ? 1 : (acc.ok && acc.raison !== "provisoire") ? 3 : 2;
    const moyens = A.moyensVisibles();
    const wa = lienWhatsapp(accueilActuel().whatsapp);
    const etapes = `<ol class="abo-etapes">${["Mon compte", "Paiement", "Lecture"].map((x, i) =>
      `<li class="${i + 1 < etape ? "fait" : i + 1 === etape ? "en-cours" : ""}"><span>${i + 1 < etape ? ic("check") : i + 1}</span>${x}</li>`).join("")}</ol>`;
    const continuer = retour ? `<a class="btn b-gold" href="${echapper(retour)}">Continuer la lecture ${ic("arrow")}</a>` : `<a class="btn b-gold" href="#/livres">Lire les résumés ${ic("arrow")}</a>`;
    let corps = "";
    if (etape === 1) {
      const connexion = A.mode() !== "claude";
      corps = `
        <div class="abo-carte">
          ${connexion ? `<div class="stabs" role="tablist"><button class="stab" type="button" role="tab" data-abo-onglet="inscription" aria-selected="true">Créer mon compte</button><button class="stab" type="button" role="tab" data-abo-onglet="connexion" aria-selected="false">J'ai déjà un compte</button></div>` : ""}
          <form class="formulaire" id="abo-form" data-type="inscription" novalidate>
            <label class="champ" data-seul="inscription" for="abo-nom">Votre nom<input id="abo-nom" autocomplete="name" placeholder="Prénom et nom"></label>
            <label class="champ" for="abo-tel">Numéro de téléphone<input id="abo-tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="07 00 00 00 00"></label>
            ${A.demandeMotDePasse() ? `<label class="champ" for="abo-mdp">Mot de passe (6 caractères minimum)<input id="abo-mdp" type="password" autocomplete="new-password"></label>` : ""}
            <p class="ed-erreur" id="abo-erreur" hidden></p>
            <button class="btn b-pri" type="submit">${ic("user")}<span>Créer mon compte</span></button>
          </form>
          <p class="sub">Votre numéro sert à retrouver votre compte et à vérifier votre paiement. Il n'est jamais affiché.</p>
        </div>`;
    } else if (etape === 2) {
      const attente = A.enAttente(c);
      corps = `
        ${attente ? `<div class="note ok">${ic("bell")}<span>Paiement déclaré le ${dateCourte(c.paiement.le)} (${echapper(c.paiement.moyen)}, ${echapper(c.paiement.reference)}). Il est en cours de vérification.${acc.ok ? " Vous pouvez lire en attendant." : ""}</span></div>
          ${acc.ok ? `<div class="acts">${continuer}</div>` : ""}` : ""}
        ${e.code === "refuse" ? `<div class="note">${ic("bell")}<span>Votre dernier paiement n'a pas été retrouvé. Vérifiez la référence ou contactez-nous.</span></div>` : ""}
        ${e.code === "expire" ? `<div class="note">${ic("bell")}<span>Votre abonnement a pris fin le ${dateCourte(c.jusqua)}. Renouvelez-le pour continuer.</span></div>` : ""}
        <div class="abo-carte">
          <div class="abo-prix"><b class="num">${echapper(r.prixEuro)} €</b><span>par mois${r.prixFcfa ? ` · ${echapper(r.prixFcfa)} F CFA` : ""}</span></div>
          ${moyens.length ? `<p class="sub">1. Payez avec l'un de ces moyens :</p>
          <div class="abo-moyens">${moyens.map(m => `
            <div class="abo-moyen">
              <b>${echapper(m.nom)}</b>
              ${m.numero ? `<span class="num abo-numero">${echapper(m.numero)}</span>
                <button class="btn b-line b-sm" type="button" data-copier="${echapper(m.numero)}">${ic("doc")}Copier le numéro</button>` : ""}
              ${m.details ? `<small>${echapper(m.details)}</small>` : ""}
              ${/^https:\/\//.test(m.lien || "") ? `<a class="btn b-gold b-sm" href="${echapper(m.lien)}" target="_blank" rel="noopener">Payer avec ${echapper(m.nom)} ${ic("arrow")}</a>` : ""}
            </div>`).join("")}</div>
          <p class="sub">2. Dites-nous que c'est fait :</p>
          <form class="formulaire" id="abo-paiement" novalidate>
            <label class="champ" for="abo-moyen">Moyen utilisé<select id="abo-moyen">${moyens.map(m => `<option>${echapper(m.nom)}</option>`).join("")}</select></label>
            <label class="champ" for="abo-ref">Numéro qui a payé ou référence de la transaction<input id="abo-ref" placeholder="Ex. 07 00 00 00 00 ou référence"></label>
            <p class="ed-erreur" id="abo-erreur" hidden></p>
            <button class="btn b-pri" type="submit">${ic("check")}J'ai payé</button>
          </form>
          ${r.heuresProvisoires && r.obligatoire === "oui" ? `<p class="sub">Vous pouvez lire pendant ${r.heuresProvisoires} h, le temps que le paiement soit vérifié.</p>` : ""}`
          : `<div class="note">${ic("bell")}<span>Les moyens de paiement seront bientôt affichés ici.${wa ? " Écrivez-nous sur WhatsApp pour vous abonner dès maintenant." : ""}</span></div>`}
          ${wa ? `<a class="btn b-line b-sm" href="${wa}?text=${encodeURIComponent(`Bonjour, je viens de payer mon abonnement ${nomApp()} (${c.nom}, ${c.telephone}).`)}" target="_blank" rel="noopener">${ic("chat")}Envoyer la capture sur WhatsApp</a>` : ""}
        </div>`;
    } else {
      corps = `
        <div class="abo-carte abo-ok">
          <span class="ic">${ic("check")}</span>
          <b>${acc.raison === "pdg" ? "Vous êtes le PDG : tout est ouvert." : acc.raison === "libre" ? "Votre compte est prêt : bonne lecture !" : `Abonnement actif jusqu'au ${dateCourte(c.jusqua)}`}</b>
          <div class="acts">${continuer}</div>
        </div>`;
    }
    const enTete = c ? `<div class="abo-compte"><span class="av">${echapper(String(c.nom || "?").charAt(0).toUpperCase())}</span><div><b>${echapper(c.nom)}</b><small>${echapper(c.telephone || "")}</small></div><span class="pill ${e.pastille}">${e.texte}</span>
      ${A.mode() !== "claude" ? `<button class="btn b-line b-sm" type="button" id="abo-sortir">${ic("logout")}Se déconnecter</button>` : ""}</div>` : "";
    zone.innerHTML = `<div class="abo">${etapes}${enTete}${corps}</div>`;

    // Sur un chapitre verrouillé, le chapitre s'affiche dès que l'accès est ouvert.
    const refaire = () => {
      if (retour && location.hash === retour && A.acces().ok) { router(); return; }
      rendreAbonnement(zone, retour); afficherCompte();
    };
    const erreur = m => { const p = zone.querySelector("#abo-erreur"); if (p) { p.textContent = m; p.hidden = !m; } };
    zone.querySelectorAll("[data-abo-onglet]").forEach(b => b.addEventListener("click", () => {
      const type = b.dataset.aboOnglet, form = zone.querySelector("#abo-form");
      form.dataset.type = type;
      zone.querySelectorAll("[data-abo-onglet]").forEach(x => x.setAttribute("aria-selected", x === b));
      form.querySelectorAll("[data-seul]").forEach(x => { x.hidden = x.dataset.seul !== type; });
      form.querySelector("button[type=submit] span").textContent = type === "connexion" ? "Me connecter" : "Créer mon compte";
      const mdp = form.querySelector("#abo-mdp");
      if (mdp) mdp.autocomplete = type === "connexion" ? "current-password" : "new-password";
      erreur("");
    }));
    const form = zone.querySelector("#abo-form");
    if (form) form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const bouton = form.querySelector("button[type=submit]");
      const donnees = { nom: form.querySelector("#abo-nom").value, telephone: form.querySelector("#abo-tel").value, motdepasse: (form.querySelector("#abo-mdp") || {}).value };
      bouton.disabled = true;
      try {
        if (form.dataset.type === "connexion") await A.connecter(donnees); else await A.inscrire(donnees);
        toast(form.dataset.type === "connexion" ? "Vous êtes connecté" : "Compte créé", "user");
        refaire();
      } catch (e) { erreur(e.message || "Échec, réessayez."); bouton.disabled = false; }
    });
    const paiement = zone.querySelector("#abo-paiement");
    if (paiement) paiement.addEventListener("submit", async ev => {
      ev.preventDefault();
      const bouton = paiement.querySelector("button[type=submit]");
      bouton.disabled = true;
      try {
        await A.declarerPaiement({ moyen: paiement.querySelector("#abo-moyen").value, reference: paiement.querySelector("#abo-ref").value });
        toast("Paiement envoyé pour vérification", "bell");
        refaire();
      } catch (e) { erreur(e.message || "Échec, réessayez."); bouton.disabled = false; }
    });
    zone.querySelectorAll("[data-copier]").forEach(b => b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(b.dataset.copier); toast("Numéro copié", "doc"); }
      catch { toast("Numéro : " + b.dataset.copier, "doc"); }
    }));
    const sortir = zone.querySelector("#abo-sortir");
    if (sortir) sortir.addEventListener("click", async () => { await A.deconnecter(); toast("Vous êtes déconnecté", "logout"); refaire(); });
  }

  // Icône du compte dans l'en-tête : pastille dorée pour les abonnés.
  function afficherCompte() {
    const lien = document.getElementById("lien-compte");
    if (!lien || !window.ABO) return;
    const c = window.ABO.compte();
    lien.classList.toggle("connecte", !!c);
    lien.setAttribute("aria-label", c ? `Mon compte (${c.nom})` : "M'inscrire ou me connecter");
  }

  // Nom et slogan de l'application dans l'en-tête et l'onglet.
  function afficherMarque() {
    const lock = document.querySelector(".chead .lock");
    if (lock) { lock.innerHTML = marque(); lock.setAttribute("aria-label", `${nomApp()}, accueil`); }
  }

  function pageIntrouvable() {
    app.innerHTML = `<div class="vide"><h1>Page introuvable</h1><p><a href="#/">Retour à l'accueil</a></p></div>`;
  }

  // ---------- Navigation ----------

  function router() {
    const parties = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const [section, id, arg] = parties;
    const n = parseInt(arg, 10);
    document.title = `${nomApp()} · ${accueilActuel().slogan}`;
    const routeActive = section === "serie" ? "histoires" : (section || "accueil");
    document.body.classList.toggle("mode-pdg", section === "pdg");
    document.body.classList.toggle("page-accueil", !section);
    fermerMenu();
    if (section !== "pdg") { afficherPied(); afficherLienPDG(); afficherMarque(); afficherCompte(); }
    document.querySelectorAll("[data-route]").forEach(a => a.classList.toggle("actif", a.dataset.route === routeActive));

    if (!section) pageAccueil();
    else if (section === "livres") !id ? pageLivres() : n ? pageChapitreLivre(id, n) : pageLivre(id);
    else if (section === "histoires") !id ? pageHistoires() : id === "theme" ? pageHistoires(arg) : pageHistoire(id);
    else if (section === "serie") n ? pageChapitreSerie(id, n) : pageSerie(id);
    else if (section === "boutique") window.pageBoutique(app, id);
    else if (section === "coach") window.pageCoach(app, id, arg);
    else if (section === "abonnement" || section === "compte") pageAbonnement(section === "compte");
    else if (section === "pdg") window.pagePDG(app, id, arg, parties[3]);
    else pageIntrouvable();

    if (window.COUVERTURES) window.COUVERTURES.appliquer(app);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", router);

  // ---------- Menu (téléphone), pied de page, accès PDG ----------

  const MENU = [
    ["#/", "Accueil", "home", "Les nouveautés et la question du jour"],
    ["#/livres", "Livres", "book", "Résumés en chapitres et en 5 minutes"],
    ["#/histoires", "Histoires", "story", "Séries et histoires courtes par thème"],
    ["#/boutique", "Boutique", "cart", "Les livres de l'auteur, sur WhatsApp"],
    ["#/coach", "Coach IA", "spark", "Réfléchir avec l'intelligence artificielle"],
    ["#/compte", "Mon compte", "user", "Inscription et abonnement"]
  ];
  const zoneMenu = document.getElementById("menu");
  function ouvrirMenu() {
    const wa = lienWhatsapp(accueilActuel().whatsapp);
    zoneMenu.innerHTML = `
      <div class="mdrop" data-menu-close><aside class="mdraw" role="dialog" aria-modal="true" aria-label="Menu">
        <div class="mhead"><span class="lock">${marque()}</span><button class="x" type="button" data-menu-close aria-label="Fermer le menu">${ic("x")}</button></div>
        <nav class="mlinks">${MENU.map(m => `<a href="${m[0]}"><span class="mi">${ic(m[2])}</span><span><b>${m[1]}</b><small>${m[3]}</small></span>${ic("arrow")}</a>`).join("")}</nav>
        <div class="mfoot">
          ${wa ? `<a class="btn b-gold b-full" href="${wa}" target="_blank" rel="noopener">${ic("chat")}Écrire sur WhatsApp</a>` : ""}
          <a class="btn b-ghost b-full" href="#/pdg">${ic("lock")}Espace PDG</a>
        </div>
      </aside></div>`;
    const fermer = zoneMenu.querySelector(".x");
    if (fermer) fermer.focus();
  }
  function fermerMenu() { if (zoneMenu) zoneMenu.innerHTML = ""; }
  document.addEventListener("click", ev => {
    if (ev.target.closest("[data-menu-open]")) { ouvrirMenu(); return; }
    const c = ev.target.closest("[data-menu-close]");
    if (c && (ev.target === c || c.tagName === "BUTTON")) fermerMenu();
  });
  document.addEventListener("keydown", ev => { if (ev.key === "Escape") fermerMenu(); });

  function afficherPied() {
    const pied = document.getElementById("pied");
    if (!pied) return;
    const accueil = accueilActuel();
    const wa = lienWhatsapp(accueil.whatsapp);
    pied.innerHTML = `<div class="conteneur"><div class="fg">
      <div><a href="#/" class="lock">${marque()}</a>
        <p>Les grands livres résumés chapitre par chapitre, des histoires qui font réfléchir et un coach IA. Lire moins, retenir plus.</p></div>
      <div><h4>Menu</h4>${MENU.slice(1).map(m => `<a href="${m[0]}">${m[1]}</a>`).join("")}</div>
      <div><h4>Thèmes</h4>${THEMES.slice(0, 6).map(t => `<a href="#/histoires/theme/${echapper(t.id)}">${echapper(t.nom)}</a>`).join("")}</div>
      <div><h4>Contact</h4>${wa ? `<a href="${wa}" target="_blank" rel="noopener">WhatsApp : <b class="num">${echapper(accueil.whatsapp)}</b></a>` : ""}${(accueil.reseaux || []).filter(x => x && x.nom && /^https:\/\//.test(x.lien || "")).map(x => `<a href="${echapper(x.lien)}" target="_blank" rel="noopener">${echapper(x.nom)}</a>`).join("")}<span>Abidjan, Côte d'Ivoire</span>
        <span>Couvertures : <a href="https://openlibrary.org" target="_blank" rel="noopener">Open Library</a></span></div>
    </div>
    <div class="fbot"><span>© ${new Date().getFullYear()} ${echapper(nomApp())} · ${echapper(accueil.nomPDG)}</span><a href="#/pdg">${ic("lock")}Espace PDG</a></div></div>`;
  }

  // Le bouton doré « Espace PDG » n'apparaît que pour le propriétaire (comme dans EventLoc).
  function afficherLienPDG() {
    const lien = document.getElementById("lien-pdg");
    if (lien) lien.hidden = !(window.CONTENU && window.CONTENU.estAdmin());
  }

  // Premier affichage : on attend un peu les modifications du PDG pour éviter un changement visible.
  // Si elles arrivent plus tard, la page lecteur est simplement réaffichée.
  let premierAffichage = false;
  const afficherUneFois = () => { if (!premierAffichage) { premierAffichage = true; router(); } };
  const pret = Promise.all([
    window.CONTENU ? window.CONTENU.pret : Promise.resolve(false),
    window.ABO ? window.ABO.pret.catch(() => null) : null
  ]).then(([change, compte]) => change || !!compte);
  pret.then(change => {
    if (!premierAffichage) afficherUneFois();
    else if (change && !location.hash.startsWith("#/pdg")) router();
  });
  setTimeout(afficherUneFois, 1500);
})();
