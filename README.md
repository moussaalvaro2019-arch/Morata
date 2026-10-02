# Morata · Académie du bâtiment

Plateforme d'apprentissage des métiers du bâtiment et du génie civil, avec espace apprenant, espace PDG séparé et assistant IA.

## Ce que contient la plateforme

- **18 matières, 99 chapitres, 399 questions de quiz** : mathématiques, outils mathématiques, sciences physiques, recherche opérationnelle, physique du bâtiment, thermique, acoustique, mécanique des fluides, mécanique des milieux continus, géotechnique, topographie, matériaux, technologie de construction, RDM, béton armé, organisation et gestion de chantier, économie du bâtiment, métré.
- **Construction de A à Z** : 14 étapes du chantier (du terrain à la réception), 10 éléments d'ouvrage (poteau, poutre, dalle, semelle, enrobage, aciers…) avec calculateurs, et **4 projets types** (maison économique, villa moyen standing, villa haut standing R+1, immeuble R+4) avec plans architecturaux, plans de fondations, de structure, d'électricité, de plomberie, façade, coupe, métré et devis automatiques, budget et planning.
- **Atelier de dessin** (DAO dans le navigateur) : murs, portes, fenêtres, pièces, cotations, textes, calques, commandes au clavier comme AutoCAD (`MUR`, `LIGNE`, `PO`, `COT`, `@4,0`, `@3<90`…), export PNG/SVG, métré automatique du plan.
- **Métré & devis** : avant-métré par lots, bibliothèque d'ouvrages, DQE en FCFA avec TVA, sous-détail des matériaux, export CSV, calculateurs rapides.
- **Assistant IA** (API Claude) : chat, aide contextuelle dans les cours, quiz générés, rédaction de chapitres par le PDG.
- **Espace PDG** : tableau de bord, connexions et présence en ligne, fiches apprenants, progression, contenus, annonces, réglages IA, travaux, paramètres, administrateurs.

## Structure

```
public/                  site statique (Netlify publie ce dossier)
  index.html             point d'entrée
  config.js              configuration Supabase (vide = mode démonstration)
  css/app.css            styles
  js/core.js             données (Supabase ou démo locale), routeur, gabarits
  js/site.js             pages publiques, inscription, connexion, espace direction
  js/learn.js            espace apprenant, lecteur de cours, quiz, profil, attestation
  js/az.js               module Construction de A à Z
  js/plans.js            dessin des plans des projets + métré automatique
  js/figures.js          figures techniques des cours
  js/cad.js              atelier de dessin
  js/metre.js            outil de métré
  js/ia.js               assistant IA (côté navigateur)
  js/admin.js            espace PDG
  data/matieres/*.js     contenus des cours (une matière par fichier)
  data/construction.js   étapes, éléments et projets types
netlify/edge-functions/ia.js   fonction serveur de l'IA (POST /api/ia)
supabase.sql             base de données, sécurité par ligne, fonctions
GUIDE-INSTALLATION.md    mise en ligne pas à pas
```

## Tester en local

```
cd public
python3 -m http.server 8080
```
Puis ouvrir http://localhost:8080 (mode démonstration ; l'IA ne fonctionne qu'une fois déployée sur Netlify avec la clé API).

Mise en ligne : voir **GUIDE-INSTALLATION.md**.
