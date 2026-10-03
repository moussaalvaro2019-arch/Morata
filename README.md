# BâtiPro Académie · Académie du bâtiment

Plateforme d'apprentissage des métiers du bâtiment et du génie civil, avec espace apprenant, espace PDG séparé et assistant IA.

## Ce que contient la plateforme

- **18 matières en 3 niveaux, 316 chapitres** : mathématiques, outils mathématiques, sciences physiques, recherche opérationnelle, physique du bâtiment, thermique, acoustique, mécanique des fluides, mécanique des milieux continus, géotechnique, topographie, matériaux, technologie de construction, RDM, béton armé, organisation et gestion de chantier, économie du bâtiment, métré. Chaque matière propose les niveaux **Débutant → Intermédiaire → Avancé** : l'apprenant voit les trois, choisit le sien, progresse dans l'ordre et reçoit une attestation par niveau terminé.
- **Dans chaque chapitre** : le cours avec applications chiffrées, méthodes et erreurs fréquentes, **5 exercices corrigés** (1 532 au total), **5 questions de quiz** (1 580 au total) et un **sujet type examen** noté sur 20 avec son **corrigé détaillé** et son barème (**316 sujets**, contextes ivoiriens, en 3 ou 4 parties, avec « Erreurs à éviter »). Le sujet s'ouvre aussi en **mode examen** chronométré (corrigé caché jusqu'à la fin, impression possible).
- **Accès payant** : le **premier chapitre de chaque matière est gratuit** (réglable) ; pour continuer, l'apprenant s'inscrit et paie **4 000 FCFA** (inscription unique, ou abonnement mensuel plus tard) par **Wave** ou **MTN Mobile Money**, déclare son paiement, et le PDG **valide en un clic**. Le PDG peut à tout moment **activer ou désactiver** un apprenant, prolonger d'un mois, changer le prix, la formule et les numéros de paiement, ou rendre toute la plateforme gratuite. Le contenu des chapitres payants n'est jamais envoyé à un navigateur sans accès actif (fonction serveur `/api/cours`).
- **Construction de A à Z** : 14 étapes du chantier (du terrain à la réception), 10 éléments d'ouvrage avec calculateurs, et **4 projets types** (maison économique, villa moyen standing, villa haut standing R+1, immeuble R+4). Pour chaque projet :
  - plans de **tous les niveaux** (RDC, R+1… R+4, terrasse/édicule), plans de structure par niveau, plan de fondations, plan de toiture, électricité, plomberie, façades ;
  - **coupes A-A et B-B propres au projet** (hauteurs, dalles, toiture, fondations calculées) ;
  - **note de calcul** (descente de charges, BAEL 91) : chaque poteau, poutre, dalle, semelle, longrine et escalier a son repère, ses coordonnées d'axes, ses charges, ses dimensions et son ferraillage, avec une fiche détaillée cliquable depuis le plan ou la liste ;
  - **les 18 matières appliquées au projet** : une fenêtre par matière (topographie, RDM, béton armé, thermique, métré…) avec les calculs faits sur ce projet ;
  - **maquette 3D** modifiable (niveaux, coupe, modes de rendu, soleil et ombres, couleurs et matériaux de chaque partie) ;
  - métré et devis automatiques, budget et planning.
- **Atelier de dessin 2D et 3D** (DAO dans le navigateur) : murs, portes, fenêtres, pièces, cotations, textes, calques, niveaux, commandes au clavier comme AutoCAD (`MUR`, `LIGNE`, `PO`, `COT`, `@4,0`, `@3<90`…) ; vue 3D, vue partagée 2D/3D, commandes 3D (`BOITE`, `CYLINDRE`, `DALLE`, `TOIT`, `EXTRUSION`, `ELEVATION`, `COPIERNIVEAU`…), matériaux, couleurs et rendus ; import d'un projet type complet en 3D ; **toiture adaptée à la forme du bâtiment** (commande `TOIT` : contour automatique des murs du niveau, pièces sélectionnées ou contour point par point ; toiture-terrasse, 1 pan, 2 pans ou 4 pans exacts sur les plans en L, en T, en U ou en croix, avec noues, arêtiers, pignons, débord et pente réglables) ; export PNG/SVG, métré automatique du plan.
- **Résoudre en photo** : l'apprenant photographie un exercice (ou le tape) ; l'IA lit l'énoncé et propose quatre modes : résolution complète pas à pas, guidage par indices sans donner la réponse, vérification de sa réponse, explication de l'énoncé. Questions de suivi, historique dans « Mes travaux », et renvoi vers le solveur guidé correspondant quand l'exercice est un exercice type.
- **53 solveurs guidés** couvrant les 18 matières : l'apprenant entre ses données (ou dessine sa poutre), la plateforme lui fait trouver chaque étape, vérifie ses réponses, donne des indices et génère de nouveaux exercices à volonté. Le solveur de poutre va de l'isostatique à l'hyperstatique (théorème des trois moments) : réactions, équations V(x) et M(x) par tronçon, diagrammes, flèche, puis aciers en travée et sur appuis, choix et disposition des barres, ELS, cadres (Caquot), plan de ferraillage, nomenclature et façonnage. Il s'ouvre aussi depuis une poutre d'un projet type et depuis l'atelier de dessin (commande `RDM`).
- **Exercices & annales** : 123 exercices corrigés type BTS et Licence, 16 épreuves d'entraînement chronométrées, et un espace **annales officielles** où le PDG importe les sujets (PDF ou photos, par examen, année 2010 → aujourd'hui, matière) — un par un ou **toute une rubrique d'un site autorisé** (par exemple la rubrique BTS Génie Civil option bâtiment de Fomesoutra) —, fait transcrire l'énoncé et rédiger un corrigé par l'IA, le relit puis le publie.
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
  js/boot.js             chargement des cours par matière (via /api/cours)
  js/md.js               mise en forme des cours, exercices et sujets
  js/site.js             pages publiques, inscription, connexion, espace direction
  js/learn.js            espace apprenant, lecteur de cours, sujets d'examen, quiz, profil, attestation
  js/abo.js              accès payant : « Mon abonnement » (apprenant) et « Abonnements & paiements » (PDG)
  js/az.js               module Construction de A à Z
  js/plans.js            dessin des plans des projets (tous niveaux, structure, coupes) + métré automatique
  js/projet.js           modèle structurel des projets types : note de calcul et fiches des éléments
  js/appli.js            les 18 matières appliquées à chaque projet
  js/v3d.js              maquettes 3D (three.js) et rendu modifiable
  js/figures.js          figures techniques des cours
  js/cad.js              atelier de dessin 2D / 3D (dont la toiture adaptée au plan)
  js/sol.js              moteur des solveurs guidés (étapes, réponses vérifiées, indices)
  js/sol-poutre.js       solveur de poutre : RDM complète et ferraillage béton armé
  js/exos.js             exercices, épreuves d'entraînement, annales (apprenants et PDG)
  js/photo.js            résolution d'exercices en photo par l'IA
  js/metre.js            outil de métré
  js/ia.js               assistant IA (côté navigateur)
  js/admin.js            espace PDG
  data/catalogue.js      liste des matières et chapitres (générée par outils/catalogue.mjs)
  data/solveurs/*.js     solveurs guidés des 18 matières
  data/exercices/*.js    banque d'exercices corrigés et épreuves d'entraînement
  data/construction.js   étapes, éléments et projets types
  vendor/three.min.js    moteur 3D three.js (licence MIT)
  vendor/pdfjs/          lecteur PDF pdf.js (licence Apache 2.0) : PDF → pages
contenus/cours/*.js      cours complets, NON publiés directement : une matière par fichier
                         (chapitres des 3 niveaux, quiz, exercices corrigés, sujets d'examen)
netlify/functions/cours.mjs       cours protégés (GET /api/cours) : contenu complet seulement si l'accès est actif
netlify/edge-functions/ia.js      fonction serveur de l'IA (POST /api/ia)
netlify/edge-functions/source.js  import des sujets d'un site autorisé (POST /api/source, PDG)
outils/catalogue.mjs     régénère public/data/catalogue.js et vérifie les cours
outils/serveur-local.mjs serveur de test local (site + cours protégés)
supabase.sql             base de données, sécurité par ligne, fonctions (dont accès payant)
GUIDE-INSTALLATION.md    mise en ligne pas à pas
```

## Tester en local

```
node outils/serveur-local.mjs
```
Puis ouvrir http://localhost:8080 (mode démonstration : tout est accessible ; l'IA ne fonctionne qu'une fois déployée sur Netlify avec la clé API). Node.js 18 ou plus récent suffit, sans installation de paquets.

## Modifier un cours dans les fichiers

Chaque matière est dans `contenus/cours/<matière>.js` : chapitres (`niv` 1 = Débutant, 2 = Intermédiaire, 3 = Avancé), contenu, quiz, exercices corrigés (`exercices: [{t: titre, d: difficulté 1 à 3, e: énoncé, c: corrigé}]`) et sujet d'examen (`sujet: {titre, duree, niveau, bareme, enonce, corrigé}`, en Markdown : parties `###`, formules sur des lignes `$$`, tableaux, encadrés `> [!attention]`). Après une modification, régénérez le catalogue :

```
node outils/catalogue.mjs
```
Le script vérifie aussi les fichiers (identifiants en double, quiz mal formés, exercices incomplets). Les modifications faites depuis l'Espace PDG n'ont pas besoin de cette étape.

Mise en ligne : voir **GUIDE-INSTALLATION.md**.
