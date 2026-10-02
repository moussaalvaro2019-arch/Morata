# Morata · Académie du bâtiment

Plateforme d'apprentissage des métiers du bâtiment et du génie civil, avec espace apprenant, espace PDG séparé et assistant IA.

## Ce que contient la plateforme

- **18 matières en 3 niveaux, 162 chapitres, 651 questions de quiz** : mathématiques, outils mathématiques, sciences physiques, recherche opérationnelle, physique du bâtiment, thermique, acoustique, mécanique des fluides, mécanique des milieux continus, géotechnique, topographie, matériaux, technologie de construction, RDM, béton armé, organisation et gestion de chantier, économie du bâtiment, métré. Chaque matière propose les niveaux **Débutant → Intermédiaire → Avancé** (3 chapitres minimum par niveau) : l'apprenant voit les trois, choisit le sien, progresse dans l'ordre et reçoit une attestation par niveau terminé.
- **Construction de A à Z** : 14 étapes du chantier (du terrain à la réception), 10 éléments d'ouvrage avec calculateurs, et **4 projets types** (maison économique, villa moyen standing, villa haut standing R+1, immeuble R+4). Pour chaque projet :
  - plans de **tous les niveaux** (RDC, R+1… R+4, terrasse/édicule), plans de structure par niveau, plan de fondations, plan de toiture, électricité, plomberie, façades ;
  - **coupes A-A et B-B propres au projet** (hauteurs, dalles, toiture, fondations calculées) ;
  - **note de calcul** (descente de charges, BAEL 91) : chaque poteau, poutre, dalle, semelle, longrine et escalier a son repère, ses coordonnées d'axes, ses charges, ses dimensions et son ferraillage, avec une fiche détaillée cliquable depuis le plan ou la liste ;
  - **les 18 matières appliquées au projet** : une fenêtre par matière (topographie, RDM, béton armé, thermique, métré…) avec les calculs faits sur ce projet ;
  - **maquette 3D** modifiable (niveaux, coupe, modes de rendu, soleil et ombres, couleurs et matériaux de chaque partie) ;
  - métré et devis automatiques, budget et planning.
- **Atelier de dessin 2D et 3D** (DAO dans le navigateur) : murs, portes, fenêtres, pièces, cotations, textes, calques, niveaux, commandes au clavier comme AutoCAD (`MUR`, `LIGNE`, `PO`, `COT`, `@4,0`, `@3<90`…) ; vue 3D, vue partagée 2D/3D, commandes 3D (`BOITE`, `CYLINDRE`, `DALLE`, `TOIT`, `EXTRUSION`, `ELEVATION`, `COPIERNIVEAU`…), matériaux, couleurs et rendus ; import d'un projet type complet en 3D ; export PNG/SVG, métré automatique du plan.
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
  js/plans.js            dessin des plans des projets (tous niveaux, structure, coupes) + métré automatique
  js/projet.js           modèle structurel des projets types : note de calcul et fiches des éléments
  js/appli.js            les 18 matières appliquées à chaque projet
  js/v3d.js              maquettes 3D (three.js) et rendu modifiable
  js/figures.js          figures techniques des cours
  js/cad.js              atelier de dessin 2D / 3D
  js/metre.js            outil de métré
  js/ia.js               assistant IA (côté navigateur)
  js/admin.js            espace PDG
  data/matieres/*.js     contenus des cours (une matière par fichier)
  data/niveaux/*.js      chapitres complémentaires pour les 3 niveaux
  vendor/three.min.js    moteur 3D three.js (licence MIT)
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
