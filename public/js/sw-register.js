// application installable (téléphone, ordinateur) ; pas sur le serveur de test local
// (fichier séparé : la politique de sécurité du site interdit les scripts écrits dans la page)
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => console.warn("Service worker :", error));
  });
}
