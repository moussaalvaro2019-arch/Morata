# Morata · Livres, histoires et coach IA

Site web en français :

- **Livres** : les grands livres de développement personnel résumés en chapitres, chaque section expliquée avec un exemple concret, plus « l'essentiel en 5 minutes », des questions et un exercice.
- **Histoires** : des séries de 20 chapitres (5 parties et une leçon par chapitre) et des histoires courtes, classées par thème (amour, philosophie, développement personnel, finance, résilience, amitié, spiritualité…). La lecture est suivie sur l'appareil (« Reprendre la lecture »).
- **Boutique** : les livres de l'auteur (titre, prix en FCFA, photo, description) ; les lecteurs commandent sur WhatsApp.
- **Espace PDG** (`#/pdg`, lien discret en bas de page) : un tableau de bord séparé, protégé par mot de passe, pour modifier tout le contenu sans toucher au code : livres et leurs chapitres, séries, histoires, thèmes, images (couvertures, illustrations, bannière), textes de l'accueil, boutique et mot de passe. Les lecteurs ne voient ni cet espace ni les boutons de gestion.
- **Coach IA** : une conversation avec Claude pour réfléchir à une situation, approfondir un livre, inventer une histoire ou relever un défi de réflexion.
- **Question du jour** sur la page d'accueil.

Recherche (sans tenir compte des accents) et filtres par catégorie ou par thème.

## Lancer le site

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

En local, le coach IA propose un bouton « Ouvrir dans Claude » à la place des réponses intégrées.

## Brancher l'IA sur Netlify

1. Déployez le dossier sur Netlify (glisser-déposer ou lien GitHub). `netlify.toml` indique déjà où se trouve la fonction.
2. Créez une clé API sur https://platform.claude.com, puis dans Netlify : *Site configuration > Environment variables*, ajoutez `ANTHROPIC_API_KEY`.
3. Redéployez. Le coach répond alors directement dans le site via `netlify/functions/coach.mjs`.

La clé reste sur le serveur et n'est jamais envoyée au navigateur. Chaque réponse est facturée sur votre compte API : fixez une limite de dépense dans la console Anthropic.

## Activer l'espace PDG et la boutique sur Netlify

1. Dans Netlify : *Site configuration > Environment variables*, ajoutez `ADMIN_CODE` (le mot de passe de départ de l'espace PDG, à garder secret). L'ancien nom `BOUTIQUE_CODE` fonctionne aussi.
2. Redéployez, puis ouvrez `votre-site.netlify.app/#/pdg` et connectez-vous.
3. Changez le mot de passe dans *Réglages* : le nouveau est gardé (haché) dans Netlify Blobs et remplace `ADMIN_CODE`.

Les modifications sont gardées dans Netlify Blobs (`netlify/functions/contenu.mjs`, annonces dans `netlify/functions/boutique.mjs`) et appliquées par-dessus le contenu du dossier `data/` : tous les lecteurs les voient aussitôt. *Revenir au texte d'origine* efface une modification ; un élément d'origine supprimé peut être restauré depuis sa liste.

Sans Netlify (site ouvert en local ou hébergé ailleurs), l'espace PDG fonctionne mais les modifications restent dans le navigateur de l'appareil ; le mot de passe de départ est alors `morata`.

## Ajouter du contenu

Le plus simple : l'espace PDG. Pour modifier les fichiers directement :

- Un livre : ajoutez un bloc dans `data/livres.js` (titre, auteur, catégorie, idées clés, « à retenir », questions, action).
- Les chapitres d'un livre : `data/chapitres-livres.js`, sous l'`id` du livre.
- Une série : ajoutez un bloc dans `data/series.js` (titre, thème, résumé, chapitres avec 5 sections et une leçon).
- Une histoire courte : ajoutez un bloc dans `data/histoires.js` (titre, thème, résumé, texte, morale).
- Un nouveau thème : ajoutez-le dans la liste `THEMES` de `data/histoires.js`.

Chaque `id` doit être unique, en minuscules, avec des tirets à la place des espaces.

## Fichiers

- `index.html` : la page principale
- `css/style.css` : l'apparence (clair et sombre automatiques)
- `js/app.js` : navigation, recherche et filtres
- `js/coach.js` et `js/ia.js` : le coach IA
- `js/boutique.js` : la boutique
- `js/contenu.js` : enregistrement des modifications du PDG et application au contenu
- `js/pdg.js` : l'espace PDG (tableau de bord et formulaires)
- `netlify/functions/coach.mjs` : la connexion à Claude côté serveur
- `netlify/functions/boutique.mjs` : l'enregistrement des annonces
- `netlify/functions/contenu.mjs` et `netlify/lib/acces.mjs` : modifications du PDG et mot de passe
- `data/` : le contenu
- `doc.html` : ancienne page vitrine BTP, non modifiée
