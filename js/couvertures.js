// Vraies couvertures des livres, chargées depuis Open Library (openlibrary.org, gratuit).
// Le navigateur cherche le livre par titre et auteur, puis affiche la couverture trouvée.
// Si rien n'est trouvé (ou hors connexion), la couverture dessinée reste affichée.
(function () {
  const CLE = "morata-couvertures";
  const UN_JOUR = 86400000;
  const enCours = {};

  // Dans l'aperçu Claude, les images externes sont bloquées : on garde les couvertures dessinées.
  const actif = !(window.claude && typeof window.claude.use === "function");

  function lireCache() {
    try { return JSON.parse(localStorage.getItem(CLE)) || {}; } catch { return {}; }
  }
  function ecrireCache(cache) {
    try { localStorage.setItem(CLE, JSON.stringify(cache)); } catch { /* sans cache */ }
  }

  async function chercher(titre, auteur) {
    const params = new URLSearchParams({ title: titre, author: auteur, limit: "10", fields: "cover_i,edition_count" });
    const r = await fetch("https://openlibrary.org/search.json?" + params);
    if (!r.ok) throw new Error("Open Library indisponible");
    const d = await r.json();
    const docs = (d.docs || []).filter(x => x.cover_i);
    // L'œuvre la plus éditée est en général la bonne.
    docs.sort((a, b) => (b.edition_count || 0) - (a.edition_count || 0));
    return docs.length ? `https://covers.openlibrary.org/b/id/${docs[0].cover_i}-L.jpg` : null;
  }

  function urlPour(livre) {
    const cache = lireCache();
    const connu = cache[livre.id];
    if (connu && (connu.url || Date.now() - connu.le < UN_JOUR)) return Promise.resolve(connu.url);
    if (!enCours[livre.id]) {
      enCours[livre.id] = (async () => {
        let url = null;
        try {
          if (livre.original) url = await chercher(livre.original.titre, livre.original.auteur);
          if (!url) url = await chercher(livre.titre, livre.auteur);
        } catch { return null; }
        const c = lireCache();
        c[livre.id] = { url, le: Date.now() };
        ecrireCache(c);
        return url;
      })();
    }
    return enCours[livre.id];
  }

  // Remplace les couvertures dessinées marquées data-couverture="<id du livre>".
  function appliquer(racine) {
    if (!actif) return;
    const livres = window.LIVRES || [];
    racine.querySelectorAll("[data-couverture]").forEach(async el => {
      const livre = livres.find(l => l.id === el.dataset.couverture);
      if (!livre) return;
      const url = await urlPour(livre);
      if (!url || !el.isConnected || el.querySelector("img")) return;
      const img = new Image();
      img.alt = "";
      img.loading = "lazy";
      img.onload = () => { if (img.naturalWidth > 10) { el.prepend(img); el.classList.add("couverture--photo"); } };
      img.src = url;
    });
  }

  window.COUVERTURES = { appliquer };
})();
