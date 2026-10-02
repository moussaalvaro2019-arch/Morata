# Morata · Livres & Histoires

Site web statique en français :

- **Livres** : les idées clés des grands livres de développement personnel.
- **Histoires** : des histoires courtes classées par thème (amour, philosophie, développement personnel, finance, résilience, amitié, spiritualité…).

Recherche (sans tenir compte des accents) et filtres par catégorie ou par thème.

## Lancer le site

Aucune installation n'est nécessaire : ouvrez simplement `index.html` dans un navigateur.

Ou, avec un petit serveur local :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Ajouter du contenu

- Un livre : ajoutez un bloc dans `data/livres.js` (titre, auteur, catégorie, idées clés, phrase « à retenir »).
- Une histoire : ajoutez un bloc dans `data/histoires.js` (titre, thème, résumé, texte, morale).
- Un nouveau thème : ajoutez-le dans la liste `THEMES` de `data/histoires.js`.

Chaque `id` doit être unique, en minuscules, avec des tirets à la place des espaces.

## Fichiers

- `index.html` : la page principale
- `css/style.css` : l'apparence (clair et sombre automatiques)
- `js/app.js` : navigation, recherche et filtres
- `data/` : le contenu
- `doc.html` : ancienne page vitrine BTP, non modifiée
