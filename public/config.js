// =====================================================================
// Configuration de la plateforme (voir GUIDE-INSTALLATION.md, étape 2)
// Le plus simple : laissez ce fichier tel quel et ajoutez SUPABASE_URL et SUPABASE_ANON_KEY
// dans les variables d'environnement de Netlify (la plateforme les lit via /api/config).
// Vide ici et dans Netlify = mode démonstration (données gardées dans le navigateur).
// La clé « anon public » / « publishable » est prévue pour être visible : aucun risque.
// N'utilisez JAMAIS la clé « service_role » ici.
// =====================================================================
window.MRT_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: ""
};
