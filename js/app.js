// Application Morata : navigation par adresse (#/livres, #/serie/premier-pas/3, ...),
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
    titre: "Les grands livres et les belles histoires, chapitre par chapitre.",
    texte: "Des résumés détaillés avec des exemples de chez nous, des histoires en série à suivre chaque jour, et un coach IA pour aller plus loin.",
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
      <a class="livre-carte" href="#/livres/${echapper(l.id)}">
        ${couverture(l.titre, l.auteur, l.categorie, l.id)}
        <span class="livre-carte__infos">
          <span class="livre-carte__titre">${echapper(l.titre)}</span>
          <span class="livre-carte__meta">${nb ? `${nb} chapitres` : `${l.tempsLecture} min`} · ${echapper(l.categorie)}</span>
        </span>
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
    const accueil = { ...ACCUEIL_DEFAUT, ...((window.SITE || {}).accueil || {}) };
    app.innerHTML = `
      <section class="banniere motif${image("banniere") ? " banniere--photo" : ""}">
        ${image("banniere")}
        <h1>${echapper(accueil.titre)}</h1>
        <p>${echapper(accueil.texte)}</p>
        <div class="banniere__actions">
          <a class="bouton bouton--clair" href="#/livres">Lire un résumé</a>
          <a class="bouton bouton--accent" href="#/histoires">Suivre une histoire</a>
        </div>
      </section>

      ${dernier ? `
        <div class="section-titre"><h2>Reprendre la lecture</h2></div>
        <a class="carte" href="${echapper(dernier.lien)}">
          <span class="meta"><span class="etiquette etiquette--accent">Chapitre ${echapper(dernier.n)}</span></span>
          <h3>${echapper(dernier.titre)}</h3>
          <p>Continuer là où vous vous êtes arrêté.</p>
        </a>` : ""}

      <div class="section-titre"><h2>Thèmes</h2><a href="#/histoires">Tout voir</a></div>
      <div class="categories">
        ${THEMES.map(t => `
          <a class="categorie" href="#/histoires/theme/${echapper(t.id)}">
            <span class="categorie__icone" aria-hidden="true">${image("theme-" + t.id) || dessin(t.id) || echapper(t.emoji)}</span>${echapper(t.nom)}
          </a>`).join("")}
      </div>

      ${SERIES.length ? `
        <div class="section-titre"><h2>Histoires en série</h2><a href="#/histoires">Tout voir</a></div>
        <div class="grille grille--large">${SERIES.map(carteSerie).join("")}</div>` : ""}

      <div class="section-titre"><h2>Résumés en chapitres</h2><a href="#/livres">Tout voir</a></div>
      <div class="rangee">${(livresChapitres.length ? livresChapitres : LIVRES).map(carteLivre).join("")}</div>

      ${blocQuestionDuJour()}

      <div class="section-titre"><h2>Boutique</h2><a href="#/boutique">Voir</a></div>
      <a class="carte" href="#/boutique">
        <h3>${echapper(accueil.boutiqueTitre)}</h3>
        <p>${echapper(accueil.boutiqueTexte)}</p>
      </a>

      ${autresLivres.length ? `
        <div class="section-titre"><h2>Résumés express</h2><a href="#/livres">Tout voir</a></div>
        <div class="rangee">${autresLivres.map(carteLivre).join("")}</div>` : ""}`;
  }

  // Une question différente chaque jour, tirée des livres.
  function blocQuestionDuJour() {
    const toutes = [];
    LIVRES.forEach(l => (l.questions || []).forEach(q => toutes.push({ q, l })));
    if (!toutes.length) return "";
    const jour = Math.floor(Date.now() / 86400000);
    const { q, l } = toutes[jour % toutes.length];
    return `
      <div class="section-titre"><h2>Question du jour</h2></div>
      <section class="encadre encadre--accent">
        <strong>Inspirée de ${echapper(l.titre)}</strong>
        <p style="font-family:var(--police-titre);font-size:1.25rem;line-height:1.3;margin:4px 0 12px">${echapper(q)}</p>
        <a class="bouton bouton--accent bouton--petit" href="#/coach/livre/${echapper(l.id)}">En parler avec le coach IA</a>
      </section>`;
  }

  // ---------- Listes avec recherche et filtres ----------

  function pageListe(config) {
    const e = etat[config.cle];
    app.innerHTML = `
      <h1 class="page-titre">${config.titre}</h1>
      <p class="page-sous-titre">${config.sousTitre}</p>
      <input class="recherche" id="recherche-${config.cle}" type="search" placeholder="${config.placeholder}" aria-label="Rechercher" value="${echapper(e.recherche)}">
      <div class="filtres" role="group" aria-label="Filtrer">
        ${[{ id: "tous", nom: "Tous" }].concat(config.filtres).map(f =>
          `<button class="puce${f.id === e.filtre ? " actif" : ""}" data-filtre="${echapper(f.id)}" type="button">${echapper(f.nom)}</button>`
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
      ) || `<p class="vide">Aucun résultat. Essayez un autre mot ou un autre filtre.</p>`;
      if (window.COUVERTURES) window.COUVERTURES.appliquer(resultats);
    }
    champ.addEventListener("input", () => { e.recherche = champ.value; afficher(); });
    app.querySelectorAll(".puce").forEach(b => b.addEventListener("click", () => {
      e.filtre = b.dataset.filtre;
      app.querySelectorAll(".puce").forEach(x => x.classList.toggle("actif", x === b));
      afficher();
    }));
    afficher();
  }

  function pageLivres() {
    const categories = [...new Set(LIVRES.map(l => l.categorie))].sort((a, b) => a.localeCompare(b, "fr"));
    pageListe({
      cle: "livres",
      titre: "Livres",
      sousTitre: "Les grands livres de développement personnel, résumés chapitre par chapitre avec des exemples.",
      placeholder: "Rechercher un titre, un auteur, une idée…",
      filtres: categories.map(c => ({ id: c, nom: c })),
      valeurFiltre: l => l.categorie,
      texteRecherche: l => [l.titre, l.auteur, l.categorie, l.accroche, ...(l.idees || []).map(i => i.titre + " " + i.texte),
        ...chapitresLivre(l.id).map(c => c.titre)].join(" "),
      rendre: garder => {
        const liste = LIVRES.filter(garder);
        return liste.length ? `<div class="grille">${liste.map(carteLivre).join("")}</div>` : "";
      }
    });
  }

  function pageHistoires(themeDemande) {
    if (themeDemande) etat.histoires.filtre = themeDemande;
    const utilises = new Set([...HISTOIRES.map(h => h.theme), ...SERIES.map(s => s.theme)]);
    pageListe({
      cle: "histoires",
      titre: "Histoires",
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
          ${series.length ? `<div class="section-titre"><h2>Séries</h2></div><div class="grille grille--large">${series.map(carteSerie).join("")}</div>` : ""}
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
    document.title = `${l.titre} · Morata`;

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

  function navigationChapitres(base, n, total, titres) {
    return `
      <nav class="navigation-chapitres" aria-label="Chapitres">
        ${n > 1 ? `<a href="${base}/${n - 1}"><small>← Précédent</small><span>${echapper(titres[n - 2])}</span></a>` : ""}
        ${n < total ? `<a class="suivant" href="${base}/${n + 1}"><small>Suivant →</small><span>${echapper(titres[n])}</span></a>`
          : `<a class="suivant" href="${base}"><small>Terminé</small><span>Retour au sommaire</span></a>`}
      </nav>`;
  }

  function pageChapitreLivre(id, n) {
    const l = LIVRES.find(x => x.id === id);
    const chapitres = chapitresLivre(id);
    const c = chapitres[n - 1];
    if (!l || !c) return pageIntrouvable();
    document.title = `${c.titre} · ${l.titre}`;
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
    document.title = `${s.titre} · Morata`;
    app.innerHTML = `
      <a class="retour" href="#/histoires">← Histoires</a>
      <article class="fiche">
        <div class="fiche__tete">
          ${couvertureIllustree(s.titre, t.nom, "serie-" + s.id, s.id, s.theme)}
          <div>
            <span class="etiquette">${t.emoji} ${echapper(t.nom)}</span>
            <h1>${echapper(s.titre)}</h1>
            <p class="fiche__auteur">Une série Morata</p>
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
    document.title = `${h.titre} · Morata`;
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

  function pageIntrouvable() {
    app.innerHTML = `<div class="vide"><h1>Page introuvable</h1><p><a href="#/">Retour à l'accueil</a></p></div>`;
  }

  // ---------- Navigation ----------

  function router() {
    const parties = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const [section, id, arg] = parties;
    const n = parseInt(arg, 10);
    document.title = "Morata · Livres & Histoires";
    const routeActive = section === "serie" ? "histoires" : (section || "accueil");
    document.body.classList.toggle("mode-pdg", section === "pdg");
    document.querySelectorAll("[data-route]").forEach(a => a.classList.toggle("actif", a.dataset.route === routeActive));

    if (!section) pageAccueil();
    else if (section === "livres") !id ? pageLivres() : n ? pageChapitreLivre(id, n) : pageLivre(id);
    else if (section === "histoires") !id ? pageHistoires() : id === "theme" ? pageHistoires(arg) : pageHistoire(id);
    else if (section === "serie") n ? pageChapitreSerie(id, n) : pageSerie(id);
    else if (section === "boutique") window.pageBoutique(app, id);
    else if (section === "coach") window.pageCoach(app, id, arg);
    else if (section === "pdg") window.pagePDG(app, id, arg, parties[3]);
    else pageIntrouvable();

    if (window.COUVERTURES) window.COUVERTURES.appliquer(app);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", router);

  // Premier affichage : on attend un peu les modifications du PDG pour éviter un changement visible.
  // Si elles arrivent plus tard, la page lecteur est simplement réaffichée.
  let premierAffichage = false;
  const afficherUneFois = () => { if (!premierAffichage) { premierAffichage = true; router(); } };
  const pret = window.CONTENU ? window.CONTENU.pret : Promise.resolve(false);
  pret.then(change => {
    if (!premierAffichage) afficherUneFois();
    else if (change && !location.hash.startsWith("#/pdg")) router();
  });
  setTimeout(afficherUneFois, 1500);
})();
