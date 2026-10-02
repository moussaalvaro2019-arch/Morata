# Morata · Livres, histoires et coach IA

Site web en français :

- **Livres** : les idées clés des grands livres de développement personnel, avec des questions pour réfléchir et un exercice concret.
- **Histoires** : des histoires courtes classées par thème (amour, philosophie, développement personnel, finance, résilience, amitié, spiritualité…).
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

## Ajouter du contenu

- Un livre : ajoutez un bloc dans `data/livres.js` (titre, auteur, catégorie, idées clés, « à retenir », questions, action).
- Une histoire : ajoutez un bloc dans `data/histoires.js` (titre, thème, résumé, texte, morale).
- Un nouveau thème : ajoutez-le dans la liste `THEMES` de `data/histoires.js`.

Chaque `id` doit être unique, en minuscules, avec des tirets à la place des espaces.

## Fichiers

- `index.html` : la page principale
- `css/style.css` : l'apparence (clair et sombre automatiques)
- `js/app.js` : navigation, recherche et filtres
- `js/coach.js` et `js/ia.js` : le coach IA
- `netlify/functions/coach.mjs` : la connexion à Claude côté serveur
- `data/` : le contenu
- `doc.html` : ancienne page vitrine BTP, non modifiée
