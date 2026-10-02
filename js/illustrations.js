// Illustrations dessinées en SVG (aucune image externe) pour les thèmes et les séries.
// Elles s'affichent partout, même hors ligne. Format paysage 300 x 200.
(function () {
  const S = (contenu, fond) => `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${fond}${contenu}</svg>`;
  const degrade = (id, haut, bas) =>
    `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${haut}"/><stop offset="1" stop-color="${bas}"/></linearGradient></defs><rect width="300" height="200" fill="url(#${id})"/>`;

  // Silhouette de ville (Plateau d'Abidjan) réutilisée.
  const ville = couleur => `<path fill="${couleur}" d="M0 200V150h18v-22h14v22h10v-40h20v40h8v-60l14-10 14 10v60h10v-30h16v30h12v-48h22v48h8v-26h14v26h10v-70h6v-8h8v8h6v70h12v-36h18v36h10v-20h16v20h14v-44h20v44h16v50z"/>`;
  const fenetres = (couleur) => {
    let f = "";
    [[22, 132], [66, 120], [84, 100], [112, 128], [154, 112], [196, 150], [232, 96], [258, 140], [280, 118]].forEach(([x, y]) => {
      for (let i = 0; i < 3; i++) f += `<rect x="${x + (i % 2) * 6}" y="${y + i * 9}" width="3" height="4" fill="${couleur}" opacity=".85"/>`;
    });
    return f;
  };

  const ILLUSTRATIONS = {
    // Nuit à Cocody : lune, ville, croix verte de pharmacie.
    "premier-pas": () => S(
      `<circle cx="236" cy="48" r="22" fill="#fde7c4"/><circle cx="244" cy="42" r="20" fill="#2a1335"/>
       ${[[30, 30], [70, 18], [120, 40], [160, 22], [200, 60], [270, 90], [100, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff" opacity=".8"/>`).join("")}
       ${ville("#1b0d24")}${fenetres("#ffd38a")}
       <g transform="translate(132 150)"><rect x="-14" y="-14" width="28" height="28" rx="4" fill="#0e3b26"/><path d="M-4-10h8v6h6v8h-6v6h-8v-6h-6v-8h6z" fill="#3ee08f"/></g>
       <path d="M110 186c6-8 14-8 20 0M150 186c6-8 14-8 20 0" stroke="#e36b8a" stroke-width="3" fill="none" stroke-linecap="round"/>`,
      degrade("pp", "#5b1f4a", "#2a1335")),

    // Route de Bouaké vers le soleil levant, bambous.
    "chemin-de-kone": () => S(
      `<circle cx="150" cy="118" r="46" fill="#ffd27a"/>
       <path d="M0 130h300v70H0z" fill="#2f6b3e"/><path d="M0 150c60-14 120-16 300-6v56H0z" fill="#245732"/>
       <path d="M135 200l12-70h6l12 70z" fill="#c98b4a"/><path d="M149 200l1-70" stroke="#fff3d6" stroke-width="2" stroke-dasharray="6 6"/>
       ${[20, 38, 262, 280].map(x => `<path d="M${x} 200V40" stroke="#5f9e4c" stroke-width="5"/>${[60, 90, 120, 150].map(y => `<path d="M${x - 3} ${y}h6" stroke="#3f7a33" stroke-width="2"/><path d="M${x} ${y}c10-8 18-8 24-6" stroke="#7fbf5f" stroke-width="2.5" fill="none"/>`).join("")}`).join("")}`,
      degrade("ck", "#f59e57", "#fbd9a7")),

    amour: () => S(
      `<circle cx="150" cy="120" r="54" fill="#ffb37e" opacity=".9"/>
       <path d="M0 150c50-10 100-10 150 0s100 10 150 0v50H0z" fill="#7a1f3d"/>
       <path d="M150 104c-10-16-34-8-26 10 6 12 26 24 26 24s20-12 26-24c8-18-16-26-26-10z" fill="#fff1ea"/>
       <path d="M60 60q10-8 20 0q10-8 20 0" stroke="#5e1428" stroke-width="2.5" fill="none"/><path d="M200 44q8-6 16 0q8-6 16 0" stroke="#5e1428" stroke-width="2.5" fill="none"/>`,
      degrade("am", "#f2687f", "#fcc6a8")),

    philosophie: () => S(
      `<path d="M0 0h300v200H0z" fill="#1d173a"/>
       <path d="M60 200c0-90 40-150 90-150s90 60 90 150z" fill="#f6e7b5"/>
       <path d="M80 200c0-70 30-122 70-122s70 52 70 122z" fill="#fbd27a"/>
       <circle cx="150" cy="120" r="18" fill="#fff8e1"/>
       ${[95, 120, 180, 205].map(x => `<rect x="${x}" y="158" width="6" height="42" fill="#1d173a" opacity=".8"/>`).join("")}`,
      ""),

    "developpement-personnel": () => S(
      `<circle cx="230" cy="54" r="26" fill="#ffe08a"/>
       <path d="M40 200v-30h50v-30h50v-30h50v-30h50v120z" fill="#0b4d39"/>
       <path d="M243 80v-26" stroke="#6fcf8f" stroke-width="4"/><path d="M243 66c-14-2-20-12-18-20 12 0 18 8 18 20zM243 60c12-2 18-12 16-20-12 0-16 8-16 20z" fill="#6fcf8f"/>
       <path d="M0 196h300" stroke="#073d2d" stroke-width="8"/>`,
      degrade("dp", "#bfe8d3", "#e9f7ef")),

    finance: () => S(
      `<circle cx="70" cy="60" r="28" fill="#ffd36b"/>
       ${[0, 1, 2, 3].map(i => [0, 1, 2, 3, 4, 5].slice(0, i + 3).map(j => `<ellipse cx="${120 + i * 44}" cy="${182 - j * 12}" rx="18" ry="6" fill="${j % 2 ? "#d9a520" : "#f2c14e"}" stroke="#8a6a10" stroke-width="1.5"/>`).join("")).join("")}
       <path d="M30 170l60-40 40 20 70-60 60-20" stroke="#4a3806" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M252 62l12 8-14 6z" fill="#4a3806"/>`,
      degrade("fi", "#fff2c8", "#f7d98a")),

    resilience: () => S(
      `<path d="M150 40c26 40 54 60 54 100a54 54 0 0 1-108 0c0-26 20-36 22-60 12 16 20 18 24 30 8-20 8-46 8-70z" fill="#ffb347"/>
       <path d="M150 96c14 22 28 32 28 52a28 28 0 0 1-56 0c0-14 10-20 12-32 6 8 10 10 12 16 4-10 4-22 4-36z" fill="#ffe08a"/>
       <path d="M80 196c30-16 110-16 140 0" stroke="#3b1607" stroke-width="10" stroke-linecap="round"/>`,
      degrade("re", "#3b1607", "#8c3a12")),

    sagesse: () => S(
      `<circle cx="210" cy="64" r="30" fill="#ffd27a"/>
       <path d="M0 176h300v24H0z" fill="#7b5a1e"/>
       <path d="M132 176c4-34 6-56 2-80h32c-4 24-2 46 2 80z" fill="#5a3f12"/>
       <path d="M150 100c-30-4-60-14-74-32 22 0 40 8 52 16-8-14-10-30-6-44 14 10 22 26 24 42 4-18 14-32 30-40 2 16-4 32-12 44 14-10 34-16 54-14-14 18-40 26-70 28z" fill="#3f6b2a"/>`,
      degrade("sa", "#f7c873", "#fbe7bf")),

    amitie: () => S(
      `<circle cx="150" cy="70" r="30" fill="#ffe2a8"/>
       <path d="M0 160h300v40H0z" fill="#163357"/>
       <circle cx="118" cy="118" r="12" fill="#163357"/><path d="M100 160c0-22 8-30 18-30s18 8 18 30z" fill="#163357"/>
       <circle cx="182" cy="118" r="12" fill="#163357"/><path d="M164 160c0-22 8-30 18-30s18 8 18 30z" fill="#163357"/>
       <path d="M134 142c10 6 22 6 32 0" stroke="#163357" stroke-width="6" stroke-linecap="round" fill="none"/>`,
      degrade("ami", "#8fb8e8", "#dbe9fa")),

    spiritualite: () => S(
      `${[[40, 40], [80, 24], [130, 50], [250, 30], [270, 70], [200, 20], [20, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#fff"/>`).join("")}
       <path d="M210 40a30 30 0 1 0 22 50 24 24 0 1 1-22-50z" fill="#fff4d6"/>
       <path d="M150 180c-30 0-50-14-56-30 20 4 38 12 56 30zM150 180c30 0 50-14 56-30-20 4-38 12-56 30zM150 180c-14-16-18-36-12-54 10 14 14 34 12 54zM150 180c14-16 18-36 12-54-10 14-14 34-12 54z" fill="#f0a8c8"/>
       <path d="M150 180c-6-20-4-46 0-62 4 16 6 42 0 62z" fill="#ffd6e7"/>`,
      degrade("sp", "#0a3a47", "#136c84"))
  };

  let compteur = 0;
  function illustration(cle) {
    const f = ILLUSTRATIONS[cle];
    if (!f) return "";
    // Identifiants de dégradé uniques : la même illustration peut apparaître plusieurs fois dans la page.
    const n = ++compteur;
    return f().replace(/id="(\w+)"/g, `id="$1-${n}"`).replace(/url\(#(\w+)\)/g, `url(#$1-${n})`);
  }

  window.ILLUSTRATION = illustration;
})();
