# BâtiPro Académie · Académie du bâtiment

Plateforme d'apprentissage des métiers du bâtiment et du génie civil, avec espace apprenant, espace PDG séparé et assistant IA.

## Ce que contient la plateforme

- **19 matières en 3 niveaux, 334 chapitres** : mathématiques, outils mathématiques, sciences physiques, recherche opérationnelle, physique du bâtiment, thermique, acoustique, mécanique des fluides, mécanique des milieux continus, géotechnique, topographie, matériaux, technologie de construction, **dessin technique et architectural**, RDM, béton armé, organisation et gestion de chantier, économie du bâtiment, métré. Chaque matière propose les niveaux **Débutant → Intermédiaire → Avancé** : l'apprenant voit les trois, choisit le sien, progresse dans l'ordre et reçoit une attestation par niveau terminé.
- **Dans chaque chapitre** : le cours avec applications chiffrées, méthodes et erreurs fréquentes, **5 exercices corrigés** (1 622 au total), **5 questions de quiz** (1 670 au total) et un **sujet type examen** noté sur 20 avec son **corrigé détaillé** et son barème (**334 sujets**, contextes ivoiriens, en 3 ou 4 parties, avec « Erreurs à éviter »). Le sujet s'ouvre aussi en **mode examen** chronométré (corrigé caché jusqu'à la fin, impression possible).
- **Dessin technique et architectural** (nouvelle matière) : matériel, normes, formats et cartouche, traits, écriture et hachures, échelles et cotation, constructions géométriques, vues, coupes et sections, perspectives cavalière, isométrique et conique, plan de niveau, façades et cotes de niveau, coupe de bâtiment, escaliers, plans de coffrage et de ferraillage, réseaux (électricité, plomberie, assainissement), toitures et vraies grandeurs, plan de masse et implantation, dossier de permis de construire et d'exécution, DAO et maquette numérique ; 15 figures dessinées, 6 solveurs guidés (échelle et format, tableau des surfaces avec CES et COS, cotes de niveau, toiture à quatre pans, nomenclature des aciers, profil d'assainissement) et une fenêtre « Dessin appliqué au projet » pour chaque projet type (bordereau des plans, surfaces, niveaux, toiture, escalier).
- **Accès payant en trois formules** : le **premier chapitre de chaque matière est gratuit** (réglable). **L'inscription (4 000 FCFA)** ouvre **tout pendant 31 jours** (comme Premium). Ensuite l'apprenant reste **Inscrit** : il garde **tous les cours**, avec moins d'exercices, de quiz et de sujets, sans solveurs, sans métré complet, sans atelier de dessin ni assistant IA. **Basic** (abonnement de 31 jours) ajoute plus d'exercices, de quiz et de sujets, les solveurs, les épreuves, les annales et un nombre limité de métrés par mois ; **Premium** (31 jours) ouvre tout, dont l'atelier de dessin et l'assistant IA. Les fonctions non comprises restent **visibles** (cadenas, page « formule requise » avec les offres) ; le PDG règle les limites de chaque formule et les prix. Paiement par **Wave** ou **MTN Mobile Money** (déclaré puis **validé en un clic** par le PDG) ou en ligne par **Chariow** (accès ouvert automatiquement). Le PDG peut à tout moment **activer ou désactiver** un apprenant, offrir 31 jours de Basic ou de Premium, retirer un abonnement, changer les prix et les numéros de paiement, ou rendre toute la plateforme gratuite. Le contenu des chapitres payants n'est jamais envoyé à un navigateur sans accès actif (fonction serveur `/api/cours`).
- **Paiement en ligne international (Chariow)** : pour les apprenants hors de Côte d'Ivoire ou quand Wave / MTN ne passent pas, paiement par carte bancaire ou Mobile Money d'autres pays depuis la boutique Chariow de la direction (smart-digital.mychariow.com, lien aussi affiché dans le pied de page et la rubrique Livres). Chariow prévient la plateforme (Pulse signé, fonction `/api/chariow/webhook`) et **l'accès s'ouvre automatiquement** (inscription, abonnement Basic ou Premium, ou livre selon le produit acheté), avec un e-mail de confirmation ; un achat fait avant la création du compte est rattaché à l'inscription avec la même adresse e-mail. Le PDG garde la main : validation manuelle possible, accès offerts, activation et désactivation.
- **Parrainage** : chaque apprenant a un code et un lien d'invitation à partager sur WhatsApp ; l'ami qui s'inscrit avec le lien est rattaché automatiquement (ou saisit le code avant son premier paiement). Dès que **3 filleuls ont payé** leur inscription ou un abonnement, le parrain reçoit **31 jours de Premium**, automatiquement (fonction SQL appelée à chaque paiement validé, Mobile Money ou Chariow). Le PDG suit les parrains et leurs filleuls et règle le nombre d'amis, les jours offerts et la formule offerte.
- **Rappels et relances** : chaque heure de 7 h à 19 h, la plateforme envoie un e-mail (au plus un par personne, jamais deux fois le même) aux inscrits qui n'ont pas encore payé (1, 3 puis 7 jours après la création du compte) et aux apprenants dont l'essai ou l'abonnement se termine dans 3 jours ou vient de se terminer. Dans l'application, une fenêtre d'avertissement s'affiche (une fois par jour) dès 3 jours avant la fin. L'onglet **Relances** du PDG liste les personnes à relancer avec un bouton **E-mail** (envoi immédiat) et un bouton **WhatsApp** au message déjà écrit, l'historique des e-mails, les réglages et les **messages types modifiables** (un par situation, avec `{prenom}`, `{date}`, `{prix}`, `{lien}`… remplacés tout seuls) ; l'apprenant peut refuser les e-mails dans « Mon profil ».
- **Fiabilité** : la bibliothèque Supabase est servie par le site lui-même ; si la base est injoignable sur un appareil, un bandeau rouge l'indique et l'inscription est suspendue, au lieu de créer des comptes de démonstration gardés dans le téléphone.
- **Devises** : les prix sont fixés en FCFA ; chacun peut afficher et payer l'équivalent en franc CFA BEAC, euro, dollar américain ou canadien, livre sterling, cedi, naira, franc guinéen, leone, dollar libérien, dalasi, ouguiya ou escudo (taux modifiables par le PDG, parités fixes pour le FCFA, l'euro et l'escudo).
- **Livres de la direction** : catalogue public « Les livres de … » (couverture, résumé, présentation, prix, extrait gratuit), achat en ligne (Chariow, livre disponible tout de suite) ou par Mobile Money (validé par le PDG), rubrique « Mes livres » pour l'apprenant ; le PDG ajoute, modifie, masque, met en avant, suit les ventes et offre un livre, et peut afficher une **promotion** (prix normal barré en rouge, prix promotionnel, pourcentage de réduction, date de fin), aussi disponible pour le prix de l'inscription. Le lien du livre complet n'est remis qu'aux acheteurs.
- **Construction de A à Z** : 14 étapes du chantier (du terrain à la réception), 10 éléments d'ouvrage avec calculateurs, et **4 projets types** (maison économique, villa moyen standing, villa haut standing R+1, immeuble R+4). Pour chaque projet :
  - plans de **tous les niveaux** (RDC, R+1… R+4, terrasse/édicule), plans de structure par niveau, plan de fondations, plan de toiture, électricité, plomberie, façades ;
  - **coupes A-A et B-B propres au projet** (hauteurs, dalles, toiture, fondations calculées) ;
  - **note de calcul** (descente de charges, BAEL 91) : chaque poteau, poutre, dalle, semelle, longrine et escalier a son repère, ses coordonnées d'axes, ses charges, ses dimensions et son ferraillage, avec une fiche détaillée cliquable depuis le plan ou la liste ;
  - **les matières appliquées au projet** : une fenêtre par matière (topographie, RDM, béton armé, dessin technique, thermique, métré…) avec les calculs faits sur ce projet ;
  - **maquette 3D** modifiable (niveaux, coupe, modes de rendu, soleil et ombres, couleurs et matériaux de chaque partie) ;
  - métré et devis automatiques, budget et planning.
- **Atelier de dessin 2D et 3D** (DAO dans le navigateur) : murs, portes, fenêtres, pièces, cotations, textes, calques, niveaux, commandes au clavier comme AutoCAD (`MUR`, `LIGNE`, `PO`, `COT`, `@4,0`, `@3<90`…) ; vue 3D, vue partagée 2D/3D, commandes 3D (`BOITE`, `CYLINDRE`, `DALLE`, `TOIT`, `EXTRUSION`, `ELEVATION`, `COPIERNIVEAU`…), matériaux, couleurs et rendus ; import d'un projet type complet en 3D ; **toiture adaptée à la forme du bâtiment** (commande `TOIT` : contour automatique des murs du niveau, pièces sélectionnées ou contour point par point ; toiture-terrasse, 1 pan, 2 pans ou 4 pans exacts sur les plans en L, en T, en U ou en croix, avec noues, arêtiers, pignons, débord et pente réglables) ; export PNG/SVG, métré automatique du plan.
- **Résoudre en photo** : l'apprenant photographie un exercice (ou le tape) ; l'IA lit l'énoncé et propose quatre modes : résolution complète pas à pas, guidage par indices sans donner la réponse, vérification de sa réponse, explication de l'énoncé. Questions de suivi, historique dans « Mes travaux », et renvoi vers le solveur guidé correspondant quand l'exercice est un exercice type.
- **62 solveurs guidés** couvrant les 19 matières : l'apprenant entre ses données (ou dessine sa poutre), la plateforme lui fait trouver chaque étape, vérifie ses réponses, donne des indices et génère de nouveaux exercices à volonté. Le solveur de poutre va de l'isostatique à l'hyperstatique (théorème des trois moments) : réactions, équations V(x) et M(x) par tronçon, diagrammes, flèche, puis aciers en travée et sur appuis, choix et disposition des barres, ELS, cadres (Caquot), plan de ferraillage, nomenclature et façonnage. Il s'ouvre aussi depuis une poutre d'un projet type et depuis l'atelier de dessin (commande `RDM`).
- **Études progressives des éléments de structure**, sur le même principe que la poutre : **poteau** en béton armé (surface d'influence, descente de charges niveau par niveau avec dégression, pré-dimensionnement, flambement, aciers, cadres, ELS, plan de ferraillage, nomenclature, mise en œuvre), **dalle pleine** (fonctionnement α, épaisseur, charges couche par couche, moments en travée et sur appuis, aciers, minimums, effort tranchant, flèche, chapeaux, plan de ferraillage, nomenclature) et **fondation** en technologie (choix du type, semelle isolée ou filante, surface, hauteur, contrainte sur le sol, aciers par la méthode des bielles, attentes, plan, métré, exécution). Elles sont proposées à la fin des chapitres concernés (béton armé, technologie, RDM, géotechnique), s'enchaînent (poteau → sa fondation) et s'ouvrent depuis chaque poteau, dalle et semelle des projets types.
- **Exercices & annales** : 132 exercices corrigés type BTS et Licence, 16 épreuves d'entraînement chronométrées, et un espace **annales officielles** où le PDG importe les sujets (PDF ou photos, par examen, année 2010 → aujourd'hui, matière) — un par un ou **toute une rubrique d'un site autorisé** (par exemple la rubrique BTS Génie Civil option bâtiment de Fomesoutra) —, fait transcrire l'énoncé et rédiger un corrigé par l'IA, le relit puis le publie.
- **Métré & devis** : avant-métré par lots, bibliothèque d'ouvrages, DQE en FCFA avec TVA, sous-détail des matériaux, export CSV, calculateurs rapides.
- **Assistant IA** (API Claude) : chat, aide contextuelle dans les cours, quiz générés, rédaction de chapitres par le PDG.
- **Application installable** (PWA) : icône sur l'écran d'accueil du téléphone ou de l'ordinateur, mises à jour automatiques ; fichiers marqués d'une empreinte et gardés un an par le navigateur, pour limiter les requêtes facturées par Netlify.
- **Espace PDG** : tableau de bord, connexions et présence en ligne, fiches apprenants, abonnements et paiements (Mobile Money et en ligne), livres, progression, contenus, annonces, réglages IA, travaux, paramètres, administrateurs.

## Structure

```
public/                  site statique (Netlify publie ce dossier)
  index.html             point d'entrée
  manifest.json          application installable (nom, icônes, couleurs)
  service-worker.js      cache de l'application installable (page toujours à jour)
  config.js              configuration Supabase (vide = lue dans Netlify via /api/config, sinon mode démonstration)
  css/app.css            styles
  js/core.js             données (Supabase ou démo locale), routeur, gabarits
  js/boot.js             chargement des cours par matière (via /api/cours)
  js/md.js               mise en forme des cours, exercices et sujets
  js/site.js             pages publiques, inscription, connexion, espace direction
  js/learn.js            espace apprenant, lecteur de cours, sujets d'examen, quiz, profil, attestation
  js/abo.js              accès payant : « Mon abonnement » (apprenant), paiement en ligne Chariow, « Abonnements & paiements » (PDG)
  js/livres.js           livres de la direction : catalogue public, achat, « Mes livres », gestion par le PDG
  js/az.js               module Construction de A à Z
  js/plans.js            dessin des plans des projets (tous niveaux, structure, coupes) + métré automatique
  js/projet.js           modèle structurel des projets types : note de calcul et fiches des éléments
  js/appli.js            les matières appliquées à chaque projet
  js/v3d.js              maquettes 3D (three.js) et rendu modifiable
  js/figures.js          figures techniques des cours
  js/cad.js              atelier de dessin 2D / 3D (dont la toiture adaptée au plan)
  js/sol.js              moteur des solveurs guidés (étapes, réponses vérifiées, indices)
  js/sol-poutre.js       solveur de poutre : RDM complète et ferraillage béton armé
  js/sol-elements.js     études progressives du poteau, de la dalle pleine et de la fondation
  js/exos.js             exercices, épreuves d'entraînement, annales (apprenants et PDG)
  js/photo.js            résolution d'exercices en photo par l'IA
  js/metre.js            outil de métré
  js/ia.js               assistant IA (côté navigateur)
  js/admin.js            espace PDG
  data/catalogue.js      liste des matières et chapitres (générée par outils/catalogue.mjs)
  data/solveurs/*.js     solveurs guidés des 19 matières
  data/exercices/*.js    banque d'exercices corrigés et épreuves d'entraînement
  data/construction.js   étapes, éléments et projets types
  vendor/three.min.js    moteur 3D three.js (licence MIT)
  vendor/pdfjs/          lecteur PDF pdf.js (licence Apache 2.0) : PDF → pages
  vendor/supabase.js     bibliothèque supabase-js 2.117.3 (licence MIT), servie par le site : aucune dépendance à un CDN
contenus/cours/*.js      cours complets, NON publiés directement : une matière par fichier
                         (chapitres des 3 niveaux, quiz, exercices corrigés, sujets d'examen)
netlify/functions/cours.mjs       cours protégés (GET /api/cours) : contenu complet seulement si l'accès est actif
netlify/functions/config.mjs      adresse et clé publique Supabase lues dans les variables Netlify (GET /api/config)
netlify/functions/chariow.mjs     paiement en ligne Chariow : création du paiement (/api/chariow/checkout) et
                                  réception des ventes (/api/chariow/webhook) → accès ou livre accordé aussitôt
netlify/functions/rappels.mjs     fonction planifiée (chaque heure de 7 h à 19 h) : e-mails de rappel aux inscrits
                                  qui n'ont pas payé et aux essais / abonnements qui se terminent (Resend),
                                  à partir des messages types rédigés par la direction
netlify/functions/relance.mjs     envoi immédiat d'un message type à un apprenant (POST /api/relance, direction)
netlify/edge-functions/ia.js      fonction serveur de l'IA (POST /api/ia)
netlify/edge-functions/source.js  import des sujets d'un site autorisé (POST /api/source, PDG)
outils/catalogue.mjs     régénère public/data/catalogue.js et vérifie les cours
outils/build.mjs         lancé par Netlify : empreintes de version et cache navigateur longue durée
outils/serveur-local.mjs serveur de test local (site + cours protégés)
supabase.sql             base de données, sécurité par ligne, fonctions (formules Inscrit / Basic / Premium, paiements, livres)
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
