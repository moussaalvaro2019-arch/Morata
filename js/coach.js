// Page « Coach IA » : une conversation avec l'IA pour mieux réfléchir.
// Modes : réfléchir à une situation, approfondir un livre, écrire une histoire, défi de réflexion.
(function () {
  const LIVRES = window.LIVRES || [];
  const THEMES = window.THEMES || [];
  const HISTOIRES = window.HISTOIRES || [];

  const MODES = [
    { id: "reflechir", nom: "💭 Réfléchir à une situation" },
    { id: "livre", nom: "📚 Approfondir un livre" },
    { id: "histoire", nom: "✨ Écrire une histoire" },
    { id: "defi", nom: "🧠 Défi de réflexion" }
  ];

  const SUGGESTIONS = {
    reflechir: [
      "J'ai du mal à me motiver le matin. Aide-moi à comprendre pourquoi.",
      "Je dois prendre une décision importante et j'hésite. Pose-moi des questions.",
      "Comment mieux gérer mon argent avec un petit salaire ?",
      "Je me dispute souvent avec la personne que j'aime. Aide-moi à y voir clair."
    ],
    livre: [
      "Résume-moi les 3 idées les plus utiles de ce livre pour ma vie.",
      "Comment appliquer ce livre concrètement cette semaine ?",
      "Pose-moi des questions pour vérifier que j'ai bien compris ce livre.",
      "Quelles sont les critiques ou les limites de ce livre ?"
    ],
    histoire: [
      "Écris-moi une histoire courte et touchante sur ce thème.",
      "Écris une histoire qui se passe en Afrique de l'Ouest aujourd'hui.",
      "Écris une histoire avec une fin surprenante.",
      "Écris une histoire pour enfants sur ce thème."
    ],
    defi: [
      "Lance-moi un défi de réflexion.",
      "Donne-moi un dilemme moral et aide-moi à raisonner.",
      "Donne-moi une énigme de logique.",
      "Teste mon esprit critique avec une affirmation douteuse."
    ]
  };

  // Conversation gardée pendant la visite.
  const etat = { cle: "", tours: [], enCours: null };

  function echapper(texte) {
    return String(texte).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function consignes(mode, livre, theme) {
    const catalogue = LIVRES.map(l => `- ${l.titre} (${l.auteur})`).join("\n");
    const histoires = HISTOIRES.map(h => `- ${h.titre}`).join("\n");
    let texte = `Tu es le coach de réflexion de Morata, une application qui résume les grands livres de développement personnel et propose des histoires inspirantes.
Règles :
- Réponds toujours en français, avec des mots simples et un ton chaleureux.
- Sois bref : moins de 180 mots, sauf quand on te demande une histoire.
- Ton but est d'aider la personne à mieux réfléchir par elle-même : reformule, pose une seule question à la fois, propose une petite action concrète.
- Pour l'argent et la santé, reste éducatif et général ; conseille un professionnel pour une décision personnelle importante.
- Quand c'est utile, recommande un livre ou une histoire du catalogue Morata ci-dessous (cite le titre exact).

Livres du catalogue :
${catalogue}

Histoires du catalogue :
${histoires}
`;
    if (mode === "livre" && livre) {
      texte += `
Mode : approfondir le livre « ${livre.titre} » de ${livre.auteur}.
Résumé dans l'application :
${livre.accroche}
${livre.idees.map((i, n) => `${n + 1}. ${i.titre} : ${i.texte}`).join("\n")}
À retenir : ${livre.aRetenir || ""}
Aide la personne à comprendre ce livre et à l'appliquer à sa propre vie. Si tu ajoutes des idées qui ne sont pas dans le résumé, reste fidèle au livre.`;
    } else if (mode === "histoire") {
      texte += `
Mode : écrire une histoire originale sur le thème « ${theme ? theme.nom : "libre"} ».
Écris une histoire courte (300 à 500 mots) avec un titre, des personnages attachants et des dialogues, puis termine par une ligne « Morale : » en une phrase.`;
    } else if (mode === "defi") {
      texte += `
Mode : défi de réflexion. Propose un défi (dilemme, énigme, question ouverte ou affirmation à critiquer), puis attends la réponse.
Quand la personne répond : souligne ce qui est bien raisonné, signale avec bienveillance un biais ou une faille possible, et pose une question pour aller plus loin. Donne la solution d'une énigme seulement si on te la demande.`;
    } else {
      texte += `
Mode : réfléchir à une situation personnelle. Écoute, reformule, aide à voir les options et propose une petite étape.`;
    }
    return texte;
  }

  function pageCoach(app, modeDemande, arg) {
    const mode = MODES.some(m => m.id === modeDemande) ? modeDemande : "reflechir";
    const livre = mode === "livre" ? (LIVRES.find(l => l.id === arg) || LIVRES[0]) : null;
    const theme = mode === "histoire" ? (THEMES.find(t => t.id === arg) || THEMES[0]) : null;

    // Nouvelle conversation quand on change de mode, de livre ou de thème.
    const cle = [mode, livre && livre.id, theme && theme.id].join("|");
    if (cle !== etat.cle) {
      if (etat.enCours) etat.enCours.abort();
      etat.cle = cle;
      etat.tours = [];
    }

    app.innerHTML = `
      <h1 class="page-titre">Coach IA</h1>
      <p class="page-sous-titre">Un partenaire pour réfléchir, approfondir un livre ou inventer une histoire.</p>
      <div class="filtres" role="group" aria-label="Mode">
        ${MODES.map(m => `<a class="puce${m.id === mode ? " actif" : ""}" href="#/coach/${m.id}">${m.nom}</a>`).join("")}
      </div>
      ${mode === "livre" ? `
        <label class="choix-ligne">Livre :
          <select id="choix-livre">${LIVRES.map(l => `<option value="${echapper(l.id)}"${l === livre ? " selected" : ""}>${echapper(l.titre)}</option>`).join("")}</select>
        </label>` : ""}
      ${mode === "histoire" ? `
        <label class="choix-ligne">Thème :
          <select id="choix-theme">${THEMES.map(t => `<option value="${echapper(t.id)}"${t === theme ? " selected" : ""}>${t.emoji} ${echapper(t.nom)}</option>`).join("")}</select>
        </label>` : ""}
      <div class="chat" id="chat" aria-live="polite"></div>
      <div class="suggestions" id="suggestions">
        ${SUGGESTIONS[mode].map(s => `<button class="suggestion" type="button">${echapper(s)}</button>`).join("")}
      </div>
      <form class="saisie" id="saisie">
        <textarea id="message" rows="2" placeholder="Écrivez votre message…" aria-label="Votre message"></textarea>
        <button class="bouton" type="submit" id="envoyer">Envoyer</button>
      </form>
      <p class="note">Les réponses sont générées par une IA : elles peuvent contenir des erreurs. Gardez votre esprit critique.</p>`;

    const chat = app.querySelector("#chat");
    const form = app.querySelector("#saisie");
    const champ = app.querySelector("#message");
    const bouton = app.querySelector("#envoyer");
    const regles = consignes(mode, livre, theme);

    const choixLivre = app.querySelector("#choix-livre");
    if (choixLivre) choixLivre.addEventListener("change", () => { location.hash = "#/coach/livre/" + choixLivre.value; });
    const choixTheme = app.querySelector("#choix-theme");
    if (choixTheme) choixTheme.addEventListener("change", () => { location.hash = "#/coach/histoire/" + choixTheme.value; });

    function bulle(role, texte) {
      const div = document.createElement("div");
      div.className = "bulle bulle--" + (role === "user" ? "moi" : "ia");
      div.textContent = texte;
      chat.appendChild(div);
      return div;
    }

    function afficherHistorique() {
      chat.innerHTML = "";
      if (!etat.tours.length) {
        const intro = mode === "livre" ? `Posez une question sur « ${livre.titre} », ou choisissez une suggestion.`
          : mode === "histoire" ? `Je peux écrire une histoire originale sur le thème « ${theme.nom} ». Donnez-moi une idée ou choisissez une suggestion.`
          : mode === "defi" ? "Prêt à faire travailler votre réflexion ? Demandez-moi un défi."
          : "Racontez-moi ce qui vous préoccupe. Je vous aide à y voir plus clair.";
        bulle("assistant", intro).classList.add("bulle--intro");
      }
      etat.tours.forEach(t => bulle(t.role, t.content));
    }

    function messageErreur(e, conteneur) {
      conteneur.classList.add("bulle--erreur");
      if (e && e.code === "indisponible") {
        conteneur.innerHTML = `L'IA n'est pas encore branchée sur cette version du site. Vous pouvez poser la même question directement dans Claude :
          <a class="bouton bouton--petit" target="_blank" rel="noopener" href="${window.IA.lienClaude(regles, etat.tours)}">Ouvrir dans Claude</a>`;
      } else if (e && e.code === "not_granted") {
        conteneur.textContent = "L'IA n'a pas été autorisée pour cette page.";
      } else if (e && e.code === "rate_limited") {
        conteneur.textContent = "Trop de demandes pour le moment. Réessayez un peu plus tard.";
      } else if (e && e.code === "refused") {
        conteneur.textContent = "L'IA a préféré ne pas répondre à cette demande. Essayez de la formuler autrement.";
      } else {
        conteneur.textContent = (e && e.message) || "Une erreur est survenue. Réessayez.";
      }
    }

    async function envoyer(texte) {
      texte = texte.trim();
      if (!texte || etat.enCours) return;
      etat.tours.push({ role: "user", content: texte });
      // On garde les 20 derniers messages pour rester léger.
      if (etat.tours.length > 20) etat.tours = etat.tours.slice(-20);
      if (etat.tours[0].role !== "user") etat.tours.shift();
      afficherHistorique();
      champ.value = "";
      app.querySelector("#suggestions").hidden = true;

      const reponse = bulle("assistant", "Réflexion en cours…");
      reponse.classList.add("bulle--attente");
      const ctl = new AbortController();
      etat.enCours = ctl;
      bouton.textContent = "Arrêter";

      try {
        const texteFinal = await window.IA.demander(regles, etat.tours, {
          signal: ctl.signal,
          onText: ({ text }) => {
            reponse.classList.remove("bulle--attente");
            reponse.textContent = text;
            reponse.scrollIntoView({ block: "nearest" });
          }
        });
        reponse.classList.remove("bulle--attente");
        reponse.textContent = texteFinal;
        etat.tours.push({ role: "assistant", content: texteFinal });
      } catch (e) {
        reponse.classList.remove("bulle--attente");
        if (e && e.code === "cancelled") {
          if (e.text) { reponse.textContent = e.text; etat.tours.push({ role: "assistant", content: e.text }); }
          else reponse.remove();
        } else {
          // La question reste affichée, mais ne compte pas dans la conversation envoyée à l'IA.
          if (etat.tours.length && etat.tours[etat.tours.length - 1].role === "user") etat.tours.pop();
          messageErreur(e, reponse);
        }
      } finally {
        if (etat.enCours === ctl) etat.enCours = null;
        bouton.textContent = "Envoyer";
      }
    }

    form.addEventListener("submit", ev => {
      ev.preventDefault();
      if (etat.enCours) etat.enCours.abort();
      else envoyer(champ.value);
    });
    champ.addEventListener("keydown", ev => {
      if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); form.requestSubmit(); }
    });
    app.querySelectorAll(".suggestion").forEach(b => b.addEventListener("click", () => envoyer(b.textContent)));

    afficherHistorique();
    if (etat.tours.length) app.querySelector("#suggestions").hidden = true;
  }

  window.pageCoach = pageCoach;
})();
