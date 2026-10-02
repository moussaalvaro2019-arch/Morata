// Application Morata : navigation par adresse (#/livres, #/histoires/...),
// recherche et filtres. Le contenu vient de data/livres.js et data/histoires.js.
(function () {
  const app = document.getElementById("app");
  const LIVRES = window.LIVRES || [];
  const HISTOIRES = window.HISTOIRES || [];
  const THEMES = window.THEMES || [];

  // Filtres mémorisés pendant la visite, pour les retrouver après avoir lu une fiche.
  const etat = {
    livres: { recherche: "", filtre: "tous" },
    histoires: { recherche: "", filtre: "tous" }
  };

  function echapper(texte) {
    return String(texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // Minuscules sans accents, pour que « developpement » trouve « développement ».
  function normaliser(texte) {
    return String(texte).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function theme(id) {
    return THEMES.find(t => t.id === id) || { id, nom: id, emoji: "" };
  }

  // ---------- Cartes ----------

  function carteLivre(l) {
    return `
      <a class="carte" href="#/livres/${echapper(l.id)}">
        <div class="meta"><span class="etiquette">${echapper(l.categorie)}</span><span>${l.tempsLecture} min</span></div>
        <h3>${echapper(l.titre)}</h3>
        <div class="meta">${echapper(l.auteur)}${l.annee ? " · " + l.annee : ""}</div>
        <p>${echapper(l.accroche)}</p>
      </a>`;
  }

  function carteHistoire(h) {
    const t = theme(h.theme);
    return `
      <a class="carte" href="#/histoires/${echapper(h.id)}">
        <div class="meta"><span class="etiquette">${t.emoji} ${echapper(t.nom)}</span><span>${h.tempsLecture} min</span></div>
        <h3>${echapper(h.titre)}</h3>
        <p>${echapper(h.resume)}</p>
      </a>`;
  }

  // ---------- Pages ----------

  function pageAccueil() {
    app.innerHTML = `
      <section class="hero">
        <h1>Lire moins, retenir plus.</h1>
        <p>Les idées clés des grands livres de développement personnel, et des histoires qui font réfléchir, classées par thème.</p>
      </section>
      <div class="choix">
        <a href="#/livres">
          <div class="grand">${LIVRES.length}</div>
          <h2>Livres</h2>
          <p>Résumés des idées essentielles, à lire en quelques minutes.</p>
        </a>
        <a href="#/histoires">
          <div class="grand">${HISTOIRES.length}</div>
          <h2>Histoires</h2>
          <p>Histoires sur l'amour, la philosophie, la finance et bien plus.</p>
        </a>
        <a href="#/coach">
          <div class="grand">IA</div>
          <h2>Coach IA</h2>
          <p>Réfléchir à une situation, approfondir un livre ou inventer une histoire avec l'IA.</p>
        </a>
      </div>
      ${blocExerciceDuJour()}
      <div class="section-titre"><h2>Derniers résumés</h2><a href="#/livres">Tout voir →</a></div>
      <div class="grille">${LIVRES.slice(0, 3).map(carteLivre).join("")}</div>
      <div class="section-titre"><h2>Histoires à découvrir</h2><a href="#/histoires">Tout voir →</a></div>
      <div class="grille">${["amour", "developpement-personnel", "finance"].map(t => HISTOIRES.find(h => h.theme === t)).filter(Boolean).map(carteHistoire).join("")}</div>`;
  }

  // Une question différente chaque jour, tirée des livres.
  function blocExerciceDuJour() {
    const toutes = [];
    LIVRES.forEach(l => (l.questions || []).forEach(q => toutes.push({ q, l })));
    if (!toutes.length) return "";
    const jour = Math.floor(Date.now() / 86400000);
    const { q, l } = toutes[jour % toutes.length];
    return `
      <section class="encadre jour">
        <strong>Question du jour</strong>
        <p class="jour__question">${echapper(q)}</p>
        <p class="jour__source">Inspirée de <a href="#/livres/${echapper(l.id)}">${echapper(l.titre)}</a></p>
        <a class="bouton" href="#/coach/livre/${echapper(l.id)}">En parler avec le coach IA</a>
      </section>`;
  }

  // Page liste générique (livres ou histoires) avec recherche et filtres.
  function pageListe(config) {
    const e = etat[config.cle];
    app.innerHTML = `
      <h1 class="page-titre">${config.titre}</h1>
      <p class="page-sous-titre">${config.sousTitre}</p>
      <input class="recherche" type="search" placeholder="${config.placeholder}" aria-label="Rechercher" value="${echapper(e.recherche)}">
      <div class="filtres" role="group" aria-label="Filtrer">
        ${[{ id: "tous", nom: "Tous" }].concat(config.filtres).map(f =>
          `<button class="puce${f.id === e.filtre ? " actif" : ""}" data-filtre="${echapper(f.id)}">${echapper(f.nom)}</button>`
        ).join("")}
      </div>
      <div class="grille" id="resultats"></div>`;

    const resultats = document.getElementById("resultats");
    const champ = app.querySelector(".recherche");

    function afficher() {
      const q = normaliser(e.recherche.trim());
      const liste = config.elements.filter(el =>
        (e.filtre === "tous" || config.valeurFiltre(el) === e.filtre) &&
        (!q || normaliser(config.texteRecherche(el)).includes(q))
      );
      resultats.innerHTML = liste.length
        ? liste.map(config.carte).join("")
        : `<p class="vide">Aucun résultat. Essayez un autre mot ou un autre filtre.</p>`;
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
      sousTitre: "Les idées essentielles des grands livres de développement personnel.",
      placeholder: "Rechercher un titre, un auteur, une idée…",
      elements: LIVRES,
      filtres: categories.map(c => ({ id: c, nom: c })),
      valeurFiltre: l => l.categorie,
      texteRecherche: l => [l.titre, l.auteur, l.categorie, l.accroche, ...l.idees.map(i => i.titre + " " + i.texte)].join(" "),
      carte: carteLivre
    });
  }

  function pageHistoires() {
    const utilises = new Set(HISTOIRES.map(h => h.theme));
    pageListe({
      cle: "histoires",
      titre: "Histoires",
      sousTitre: "Des histoires courtes qui inspirent et font réfléchir, classées par thème.",
      placeholder: "Rechercher une histoire, un mot, une morale…",
      elements: HISTOIRES,
      filtres: THEMES.filter(t => utilises.has(t.id)).map(t => ({ id: t.id, nom: `${t.emoji} ${t.nom}` })),
      valeurFiltre: h => h.theme,
      texteRecherche: h => [h.titre, theme(h.theme).nom, h.resume, h.texte, h.morale].join(" "),
      carte: carteHistoire
    });
  }

  function pageLivre(id) {
    const l = LIVRES.find(x => x.id === id);
    if (!l) return pageIntrouvable();
    document.title = `${l.titre} · Morata`;
    app.innerHTML = `
      <article class="lecture">
        <a class="retour" href="#/livres">← Tous les livres</a>
        <div class="meta"><span class="etiquette">${echapper(l.categorie)}</span><span>${l.tempsLecture} min de lecture</span></div>
        <h1>${echapper(l.titre)}</h1>
        <p class="auteur">${echapper(l.auteur)}${l.annee ? " · " + l.annee : ""}</p>
        <p class="accroche">${echapper(l.accroche)}</p>
        ${l.idees.map((i, n) => `
          <section class="idee">
            <h2><span>${n + 1}.</span>${echapper(i.titre)}</h2>
            <p>${echapper(i.texte)}</p>
          </section>`).join("")}
        ${l.aRetenir ? `<div class="encadre"><strong>À retenir</strong>${echapper(l.aRetenir)}</div>` : ""}
        ${l.questions && l.questions.length ? `
          <section class="reflexion">
            <h2>Pour réfléchir</h2>
            <ol>${l.questions.map(q => `<li>${echapper(q)}</li>`).join("")}</ol>
          </section>` : ""}
        ${l.action ? `<div class="encadre"><strong>Passer à l'action</strong>${echapper(l.action)}</div>` : ""}
        <a class="bouton bouton--large" href="#/coach/livre/${echapper(l.id)}">🧠 Approfondir ce livre avec le coach IA</a>
      </article>`;
  }

  function pageHistoire(id) {
    const h = HISTOIRES.find(x => x.id === id);
    if (!h) return pageIntrouvable();
    const t = theme(h.theme);
    document.title = `${h.titre} · Morata`;
    app.innerHTML = `
      <article class="lecture">
        <a class="retour" href="#/histoires">← Toutes les histoires</a>
        <div class="meta"><span class="etiquette">${t.emoji} ${echapper(t.nom)}</span><span>${h.tempsLecture} min de lecture</span></div>
        <h1>${echapper(h.titre)}</h1>
        <div class="texte-histoire">
          ${h.texte.split(/\n\s*\n/).map(p => `<p>${echapper(p)}</p>`).join("")}
        </div>
        ${h.morale ? `<div class="encadre"><strong>Morale</strong>${echapper(h.morale)}</div>` : ""}
        <a class="bouton bouton--large" href="#/coach/histoire/${echapper(h.theme)}">✨ Inventer une nouvelle histoire « ${echapper(t.nom)} » avec l'IA</a>
      </article>`;
  }

  function pageIntrouvable() {
    app.innerHTML = `
      <div class="vide">
        <h1>Page introuvable</h1>
        <p><a href="#/">Retour à l'accueil</a></p>
      </div>`;
  }

  // ---------- Navigation ----------

  function router() {
    const [section, id, arg] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    document.title = "Morata · Livres & Histoires";
    document.querySelectorAll(".nav a").forEach(a =>
      a.classList.toggle("actif", a.dataset.route === (section || "accueil"))
    );

    if (!section) pageAccueil();
    else if (section === "livres") id ? pageLivre(id) : pageLivres();
    else if (section === "histoires") id ? pageHistoire(id) : pageHistoires();
    else if (section === "coach") window.pageCoach(app, id, arg);
    else pageIntrouvable();

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", router);
  router();
})();
