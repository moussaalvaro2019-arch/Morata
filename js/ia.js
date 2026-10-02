// Connexion à l'IA (Claude) pour le coach de réflexion.
// Trois chemins, essayés dans l'ordre :
//  1. Dans Claude (aperçu publié sur claude.ai) : l'IA de Claude du visiteur.
//  2. Sur Netlify : la fonction serveur netlify/functions/coach.mjs (clé API gardée côté serveur).
//  3. Sinon : un lien qui ouvre la question directement dans Claude.
(function () {
  const ADRESSE_FONCTION = "/.netlify/functions/coach";
  let sampleVisiteur; // promesse résolue une seule fois

  function obtenirSample() {
    if (sampleVisiteur === undefined) {
      sampleVisiteur = window.claude && typeof window.claude.use === "function"
        ? window.claude.use("sample").catch(() => null)
        : Promise.resolve(null);
    }
    return sampleVisiteur;
  }

  // consignes : texte des règles du coach. tours : [{role: "user"|"assistant", content}]
  async function demander(consignes, tours, { onText, signal } = {}) {
    const sample = await obtenirSample();
    if (sample) {
      const { text } = await sample([{ role: "user", content: consignes }, ...tours], {
        cache: false, signal, onText
      });
      return text;
    }

    let reponse;
    try {
      reponse = await fetch(ADRESSE_FONCTION, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consignes, messages: tours }),
        signal
      });
    } catch (e) {
      if (signal && signal.aborted) throw { code: "cancelled" };
      throw { code: "indisponible" };
    }
    const donnees = await reponse.json().catch(() => ({}));
    // Pas de fonction serveur ici (site ouvert en local ou hébergé ailleurs).
    if (!reponse.ok && !donnees.erreur) throw { code: "indisponible" };
    if (!donnees.text) throw { code: "erreur", message: donnees.erreur };
    if (onText) onText({ text: donnees.text, delta: donnees.text });
    return donnees.text;
  }

  // Lien de secours : ouvre la conversation dans Claude avec la question déjà écrite.
  function lienClaude(consignes, tours) {
    const dernier = tours.filter(t => t.role === "user").pop();
    const texte = consignes + "\n\n" + (dernier ? dernier.content : "");
    return "https://claude.ai/new?q=" + encodeURIComponent(texte.slice(0, 6000));
  }

  window.IA = { demander, lienClaude };
})();
