/* =====================================================================
   Organisation et gestion de chantier — cours complet (3 niveaux)
   Débutant : documents, intervenants, installation, qualité-sécurité-
              environnement, préparation de chantier
   Intermédiaire : rendements, planning, ressources et approvisionnements,
              matériel et engins, grandes opérations, suivi financier,
              suivi quotidien
   Avancé : management, méthodes et cadences, HSE et sinistres,
            valeur acquise, étude de cas complète
   ===================================================================== */
A.addMatiere({
 id:"chant",
 titre:"Organisation et gestion de chantier",
 court:"Gestion chantier",
 groupe:"gest",
 icone:"clip",
 couleur:"#B8700A",
 niveau:"Intermédiaire",
 heures:65,
 ordre:1,
 prerequis:["tech"],
 resume:"Préparer, organiser et piloter un chantier : documents du marché, intervenants, installation, qualité, sécurité et environnement, préparation, rendements et planning, ressources, approvisionnements, matériel et engins, terrassements et bétonnages, suivi financier et quotidien, management, cadences, HSE, valeur acquise, avec applications et exercices corrigés.",
 objectifs:[
  "Connaître les pièces d'un marché, les documents et les intervenants du chantier",
  "Préparer un chantier et organiser son installation",
  "Établir un planning à partir des quantités et des rendements",
  "Dimensionner les équipes, le matériel, les engins et les approvisionnements",
  "Appliquer les règles de qualité, de sécurité et d'environnement",
  "Suivre l'avancement, les coûts et la trésorerie d'un chantier"
 ],
 applications:[
  "Préparer l'ouverture d'un chantier de villa ou d'immeuble",
  "Planifier et suivre l'avancement chaque semaine",
  "Organiser un bétonnage ou un terrassement important",
  "Tenir les réunions, le journal et les tableaux de bord",
  "Établir une situation et analyser les écarts de coût"
 ],
 chapitres:[
{id:"chant-1", niv:1, titre:"Les documents du marché et du chantier", duree:45, contenu:`## Les pièces du marché
| Document | Contenu |
|---|---|
| **Acte d'engagement** | L'engagement de l'entreprise : montant, délai, signatures |
| **CCAP** (clauses administratives particulières) | Règles administratives et financières : délais, pénalités, paiements, avance, retenue de garantie, révision des prix |
| **CCTP** (clauses techniques particulières) | Description technique des ouvrages : matériaux, dosages, normes, mise en œuvre, essais |
| **BPU** (bordereau des prix unitaires) | Prix de chaque ouvrage élémentaire |
| **DQE** (devis quantitatif et estimatif) | Quantités × prix unitaires = montant du marché |
| **Plans** | Architecture, structure, réseaux, VRD |
| **Planning contractuel** | Délai global, jalons |
En cas de contradiction, l'ordre de priorité des pièces est fixé par le CCAP (en général : acte d'engagement, CCAP, CCTP, BPU, plans…).

## Les documents de chantier
- **Ordre de service (OS)** : décision écrite du maître d'œuvre (démarrage, travaux modificatifs, arrêt) ; la date de l'OS de démarrage fait courir le **délai** ;
- **Compte rendu de réunion** hebdomadaire : décisions, avancement, actions, responsables, échéances ;
- **Journal de chantier** : effectifs, météo, livraisons, matériel, incidents, essais, visites ;
- **Attachements** : relevés contradictoires des quantités exécutées (ouvrages enterrés ou cachés) ;
- **Procès-verbaux** (PV) : réception des fonds de fouille, des ferraillages, essais, réception des travaux ;
- **Plans d'exécution** visés, **plan d'installation de chantier**, **PPSPS** (plan de sécurité), **PAQ** (plan d'assurance qualité) ;
- **Situations** de travaux et **décompte** final.

## Le délai
> [!exemple] Calculer la date de fin contractuelle
> OS de démarrage notifié le 3 février ; délai contractuel : 6 mois. Fin contractuelle : **3 août**. Chaque jour de retard non justifié (hors intempéries reconnues ou ordres du maître d'œuvre) peut entraîner des **pénalités**.

> [!retenir]
> « Les écrits restent » : toute modification, réserve ou incident doit faire l'objet d'un écrit daté et signé (OS, compte rendu, PV, journal). C'est la base du règlement amiable des litiges.

> [!astuce]
> Photographiez chaque étape cachée (ferraillage avant coulage, fourreaux, étanchéités) et classez les photos par date : preuve précieuse et mémoire pour l'entretien.`,
 exercices:[
  {t:"Où trouver l'information ?", d:1, e:`Dans quelle pièce du marché trouver : a) le dosage du béton des poteaux ; b) le montant des pénalités de retard ; c) le prix du m² d'enduit ; d) le délai d'exécution ; e) le taux de la retenue de garantie ; f) la quantité de carrelage prévue ?`, c:`a) **CCTP** ; b) **CCAP** ; c) **BPU** ; d) **acte d'engagement** (et planning contractuel) ; e) **CCAP** ; f) **DQE**.`},
  {t:"Date de fin d'un marché", d:1, e:`L'OS de démarrage d'un marché de 8 mois est notifié le 15 mars. Pendant le chantier, le maître d'œuvre accorde par OS une prolongation de 20 jours pour travaux supplémentaires. Quelle est la date de fin contractuelle ?`, c:`Délai initial : 15 mars + 8 mois = **15 novembre**. Prolongation de 20 jours : **5 décembre**.`},
  {t:"Quel document établir ?", d:2, e:`Dire quel document établir : a) le client demande un placard supplémentaire ; b) on va remblayer des fondations ; c) une pluie violente arrête le chantier deux jours ; d) un ouvrier se blesse légèrement ; e) les aciers d'une dalle sont prêts à être coulés.`, c:`a) **Devis** puis **OS** ou **avenant** avant exécution ; b) **attachement** des fondations (quantités) et **PV** de réception des fonds de fouille/ferraillage déjà faits ; c) mention au **journal de chantier** (et demande de reconnaissance des intempéries) ; d) **déclaration d'accident** + journal ; e) **PV de réception du ferraillage** (bon pour coulage).`},
  {t:"Contradiction entre pièces", d:2, e:`Le CCTP prévoit un béton dosé à 350 kg/m³ pour les poteaux, mais le libellé du BPU indique « béton dosé à 300 kg/m³ ». Que faire ?`, c:`Ne pas trancher seul : appliquer l'**ordre de priorité** des pièces fixé par le CCAP (souvent le CCTP prime sur le BPU pour la technique) et **demander par écrit** au maître d'œuvre de confirmer. Si le dosage de 350 kg est confirmé alors que le prix correspond à 300, l'entreprise peut demander un **prix nouveau** ou un avenant, mais avant d'exécuter.`},
  {t:"Rédiger une entrée de journal", d:1, e:`Rédiger l'entrée du journal de chantier du mardi : 9 ouvriers ; pluie de 10 h à 12 h ; livraison de 150 sacs de ciment et 12 m³ de sable ; coulage des poteaux du RDC (3,2 m³) ; prélèvement de 3 éprouvettes ; visite du bureau de contrôle.`, c:`Mardi [date] — Effectif : 9 (1 chef, 4 maçons, 4 manœuvres). Météo : pluie de 10 h à 12 h (arrêt des travaux extérieurs 2 h). Livraisons : 150 sacs de ciment CEM II 42,5 (BL n° …), 12 m³ de sable 0/4 (BL n° …), conformes. Travaux : coulage des poteaux du RDC, 3,2 m³, béton dosé à 350 kg/m³, vibré ; 3 éprouvettes 16 × 32 prélevées (série n° …). Visite : bureau de contrôle (M. …), observations : RAS. Signature du chef de chantier.`}
 ],
 quiz:[
  {q:"Le document qui décrit techniquement les ouvrages est :", o:["Le CCTP","Le CCAP","L'acte d'engagement","Le BPU"], r:0, e:"Clauses techniques."},
  {q:"Les pénalités de retard figurent dans :", o:["Le CCAP","Le CCTP","Les plans","Le journal"], r:0, e:"Clauses administratives."},
  {q:"L'ordre de service de démarrage :", o:["Fait courir le délai","Annule le marché","Fixe les prix","Est facultatif"], r:0, e:"Date de départ."},
  {q:"Un attachement concerne surtout :", o:["Les ouvrages cachés","La peinture","Le mobilier","Les plantations"], r:0, e:"Quantités contradictoires."},
  {q:"Le journal de chantier contient :", o:["Effectifs, météo, livraisons, incidents","Seulement les prix","Les plans d'architecte","Rien d'utile"], r:0, e:"Mémoire du chantier."}
 ]},
{id:"chant-10", niv:1, titre:"Les intervenants du chantier et l'organisation de l'équipe", duree:45, contenu:`## Du côté du maître d'ouvrage et de la maîtrise d'œuvre
Maître d'ouvrage (client), maître d'œuvre (architecte, BET), bureau de contrôle, coordonnateur sécurité, géotechnicien, éventuellement **OPC** (ordonnancement, pilotage, coordination) sur les gros projets.

## Du côté de l'entreprise
| Fonction | Rôle |
|---|---|
| **Directeur de travaux** | Responsable de plusieurs chantiers, relation avec le client, résultat financier |
| **Conducteur de travaux** | Prépare, planifie, commande, suit les coûts et la qualité d'un ou plusieurs chantiers |
| **Chef de chantier** | Organise le travail quotidien sur place, encadre les équipes, contrôle l'exécution |
| **Chef d'équipe** | Dirige une équipe (maçons, coffreurs, ferrailleurs) et travaille avec elle |
| **Ouvriers qualifiés** | Maçons, coffreurs, ferrailleurs, carreleurs, électriciens, plombiers, peintres |
| **Manœuvres** | Aide, manutention, fabrication du mortier et du béton |
| **Magasinier, gardien** | Stock, entrées et sorties, sécurité du site |
| **Sous-traitants, tâcherons** | Réalisent un lot ou une tâche à prix convenu |

## Régie ou tâcheronnage
- **Régie** : l'ouvrier est payé à la journée ; l'entreprise organise et contrôle ; rendement à surveiller ;
- **Tâcheronnage** : un tâcheron et son équipe sont payés à la tâche (m², m³, forfait) ; motivant et rapide, mais exige un **contrôle qualité serré** et un contrat écrit (prix, délais, qualité, sécurité, déclarations sociales).

## Composer une équipe
- Un maçon pour **1 à 2 manœuvres** selon la tâche (agglos, enduits, béton) ;
- Un chef d'équipe pour 6 à 10 ouvriers ;
- Des équipes **stables** et **polyvalentes**, formées à la sécurité.
> [!exemple] Coût journalier d'une équipe de gros œuvre (salaires chargés fictifs d'exercice)
> 1 chef d'équipe à 12 000 F + 4 maçons à 8 000 F + 6 manœuvres à 4 500 F = **71 000 F par jour**, soit **1 846 000 F** pour 26 jours de travail.

## La journée type du chef de chantier
Accueil et répartition des tâches → contrôle des approvisionnements → suivi de l'exécution et de la sécurité → réception des livraisons → mise à jour du journal → point avec le conducteur de travaux → préparation du lendemain.

> [!retenir]
> - Conducteur de travaux : prépare, planifie, gère ; chef de chantier : organise sur place ; chef d'équipe : dirige et travaille avec l'équipe.
> - Régie (à la journée) ou tâcheronnage (à la tâche, contrôle serré).
> - Un maçon pour 1 à 2 manœuvres ; un chef pour 6 à 10 ouvriers.`,
 exercices:[
  {t:"Qui s'en charge ?", d:1, e:`Attribuer la tâche à la bonne fonction : a) commander les aciers du mois ; b) répartir les ouvriers le matin ; c) négocier un avenant avec le client ; d) poser les agglos ; e) tenir le stock de ciment ; f) contrôler l'aplomb des poteaux avant coulage.`, c:`a) **Conducteur de travaux** ; b) **chef de chantier** ; c) **directeur ou conducteur de travaux** ; d) **maçon** ; e) **magasinier** ; f) **chef de chantier** (ou chef d'équipe), avec contrôle du conducteur.`},
  {t:"Coût d'une équipe", d:1, e:`Une équipe comprend 1 chef d'équipe (12 000 F/j), 3 maçons (8 000 F/j) et 5 manœuvres (4 500 F/j). Calculer son coût journalier et son coût pour 22 jours.`, c:`Par jour : 12 000 + 3 × 8 000 + 5 × 4 500 = **58 500 F** ; 22 jours : **1 287 000 F**.`},
  {t:"Régie ou tâche ?", d:2, e:`Pour 300 m² de maçonnerie, un tâcheron propose 1 600 F/m² (main-d'œuvre). En régie, un binôme maçon (8 000 F) + manœuvre (4 500 F) pose 10 m² par jour. Comparer les coûts et citer les points à prévoir dans le contrat du tâcheron.`, c:`Régie : 12 500 F / 10 m² = **1 250 F/m²** → 375 000 F (si le rendement de 10 m²/j est tenu ; à 7 m²/j, on monte à 1 786 F/m²).
Tâcheron : 300 × 1 600 = **480 000 F**, rendement garanti par le prix.
Contrat : prix et métré contradictoire, délai, qualité (aplomb, joints, chaînages), sécurité et EPI, déclaration des ouvriers, retenue ou paiement à l'avancement après contrôle.`},
  {t:"Composer les équipes", d:2, e:`On doit monter 240 m² d'agglos en 8 jours ; un binôme (1 maçon + 1 manœuvre) pose 10 m²/j, et il faut un manœuvre supplémentaire pour 2 binômes (mortier, approvisionnement). Combien de maçons et de manœuvres ?`, c:`Besoin : 240 / 8 = 30 m²/j → **3 binômes** → 3 maçons + 3 manœuvres, + 1 manœuvre pour l'approvisionnement de 2 binômes (on arrondit à **2** pour 3 binômes) → **3 maçons et 5 manœuvres**.`},
  {t:"Organigramme", d:1, e:`Dessiner (ou décrire) l'organigramme d'un chantier d'immeuble R+4 conduit par une entreprise générale, avec un sous-traitant pour l'électricité.`, c:`Directeur de travaux → **conducteur de travaux** → **chef de chantier** → chefs d'équipe (gros œuvre : maçons, coffreurs-ferrailleurs ; finitions) → ouvriers et manœuvres ; à côté : magasinier, gardiens, responsable sécurité ; le **sous-traitant électricité** (chef d'équipe et électriciens) est coordonné par le chef de chantier et rend compte au conducteur de travaux.`}
 ],
 quiz:[
  {q:"Qui organise le travail quotidien sur le chantier ?", o:["Le chef de chantier","Le maître d'ouvrage","Le notaire","Le fournisseur"], r:0, e:"Il encadre les équipes."},
  {q:"Le tâcheronnage consiste à payer :", o:["À la tâche (m², m³, forfait)","À la journée","Au mois","Rien"], r:0, e:"Selon le travail réalisé."},
  {q:"Un maçon travaille généralement avec :", o:["1 à 2 manœuvres","10 manœuvres","Aucun","Un architecte"], r:0, e:"Selon la tâche."},
  {q:"Le conducteur de travaux :", o:["Prépare, planifie, commande et suit les coûts","Pose les agglos","Garde le chantier la nuit","Signe le permis de construire"], r:0, e:"Gestion du chantier."},
  {q:"L'OPC intervient pour :", o:["Ordonnancer, piloter et coordonner","Peindre","Calculer les aciers","Vendre le terrain"], r:0, e:"Gros projets multi-lots."}
 ]},
{id:"chant-2", niv:1, titre:"L'installation de chantier", duree:45, contenu:`## Le plan d'installation de chantier (PIC)
Il positionne sur le plan de masse :
- les **accès** et la circulation des camions (entrée, sortie, aire de retournement) ;
- la **clôture**, le portail et le gardiennage ;
- les **cantonnements** : bureau, vestiaires, sanitaires, réfectoire, point d'eau potable ;
- le **magasin** (ciment, outillage) et les **aires de stockage** (sable, gravier, aciers, agglos, coffrages) ;
- l'**aire de fabrication** (bétonnière, atelier de ferraillage et de coffrage, fabrication des agglos) ;
- l'**engin de levage** (grue, monte-charge) et son rayon d'action ;
- les **branchements** provisoires d'eau et d'électricité (coffret avec différentiel 30 mA) ;
- la zone de **tri des déchets** et l'évacuation des eaux de pluie.

## Principes d'organisation
1. Rapprocher les stocks de leur lieu d'utilisation **sans gêner** l'avancement ni les fouilles ;
2. Séparer les circulations des engins et des piétons ;
3. Stocker le ciment **au sec**, sur palettes, et l'utiliser dans l'ordre d'arrivée ;
4. Placer la bétonnière entre les granulats, l'eau et l'ouvrage (trajets courts) ;
5. Prévoir l'**évacuation des eaux** (le chantier devient vite boueux en saison des pluies).

## Dimensionner les aires de stockage
> [!exemple] Agglos et ciment d'une villa
> 2 800 agglos empilés sur 6 rangs : 2 800 / 6 ≈ 467 piles × 0,06 m² (0,40 × 0,15) = **28 m²**, + 30 % pour les allées → **≈ 36 m²**.
> Ciment : 100 sacs en piles de 10 → 10 piles d'environ 0,32 m² → ≈ 3,2 m², + circulation → magasin de **3 × 4 m** suffisant.

## Le coût de l'installation
L'installation et le repli de chantier représentent couramment **2 à 4 %** du montant d'une maison, plus pour un immeuble (grue, cantonnements). Ce poste figure dans le devis (forfait) et se paie souvent au démarrage.

> [!exemple] Petite maison
> Clôture en tôles, magasin de 3 × 4 m fermant à clé, bâche à eau de 2 m³, sable et gravier côté rue (accès des camions), atelier de ferraillage sous abri près des fondations, toilettes de chantier.

> [!attention]
> Une installation mal pensée fait perdre des heures chaque jour (manutentions inutiles, camions bloqués) et augmente les vols. C'est le premier investissement rentable d'un chantier.

> [!retenir]
> - PIC : accès, clôture, cantonnements, magasin, stocks, fabrication, levage, réseaux, déchets.
> - Stocks près de leur usage sans gêner ; ciment au sec ; circulations séparées.
> - Coût : 2 à 4 % d'une maison.`,
 exercices:[
  {t:"Placer les installations", d:1, e:`Terrain de 20 × 30 m, rue sur le côté de 20 m ; maison de 12 × 9 m au centre. Proposer l'emplacement : portail, sable et gravier, magasin, bétonnière, aciers, agglos, toilettes, déchets.`, c:`- **Portail** côté rue, largeur ≥ 4 m pour les camions ;
- **Sable et gravier** près du portail (livraison directe), entre la rue et la maison ;
- **Bétonnière** juste à côté des granulats, avec la **bâche à eau** ;
- **Magasin** fermé près de l'entrée (surveillance), au sec ;
- **Aciers** et atelier de ferraillage sur le côté, sous abri ;
- **Agglos** le long de la maison, sans gêner les fouilles ;
- **Toilettes** et **déchets** en fond de parcelle, accessibles pour l'évacuation.`},
  {t:"Surface de stockage d'agglos", d:2, e:`3 600 agglos de 15 sont livrés en une fois et empilés sur 6 rangs (emprise d'un agglo : 0,40 × 0,15 m). Calculer la surface nécessaire avec 30 % d'allées.`, c:`Piles : 3 600 / 6 = **600** ; emprise : 600 × 0,06 = **36 m²** ; avec allées : 36 × 1,3 = **46,8 m²** (≈ 7 × 7 m).`},
  {t:"Budget d'installation", d:1, e:`Une maison est estimée à 25 M F HT. Avec une installation de chantier à 3 %, quel montant prévoir ? Citer cinq dépenses incluses.`, c:`3 % × 25 M = **750 000 F HT**.
Dépenses : clôture et portail, magasin, branchements provisoires d'eau et d'électricité (et consommations), toilettes, panneau de chantier, gardiennage, repli et nettoyage final.`},
  {t:"Chantier en saison des pluies", d:2, e:`Le chantier démarre en mai (saison des pluies à Abidjan). Quelles dispositions d'installation prendre ?`, c:`Accès et aires de stockage **empierrés** (latérite compactée), **fossés** et pente pour évacuer l'eau, ciment stocké **surélevé et bâché** dans un magasin étanche, aciers sur **cales**, protection des fouilles (évacuation ou pompe), bâches pour protéger les bétons frais, planning tenant compte de jours d'arrêt.`},
  {t:"Rayon de la grue", d:2, e:`Une grue à tour a une flèche de 30 m. Le bâtiment mesure 40 × 15 m. Où placer la grue pour couvrir tout le bâtiment et l'aire de stockage ?`, c:`Placer la grue **au milieu du grand côté**, à environ 3 m de la façade : la distance au coin le plus éloigné vaut √(20² + 18²) = **26,9 m** < 30 m ✔. L'aire de stockage et de chargement des bennes doit être dans le rayon, du côté de l'accès, en évitant de faire survoler la voie publique et les voisins par les charges.`}
 ],
 quiz:[
  {q:"Le PIC est :", o:["Le plan d'installation de chantier","Un engin","Un document fiscal","Un essai"], r:0, e:"Organisation du site."},
  {q:"Le ciment se stocke :", o:["Au sec, sur palettes","Au soleil sur le sol","Sous la pluie","Dans les fouilles"], r:0, e:"Il craint l'humidité."},
  {q:"Coût courant d'installation pour une maison :", o:["2 à 4 % du montant","50 %","0 %","20 %"], r:0, e:"Forfait du devis."},
  {q:"La bétonnière se place :", o:["Près des granulats, de l'eau et de l'ouvrage","Au fond du terrain","Sur la voie publique","Dans le magasin"], r:0, e:"Trajets courts."},
  {q:"Le coffret électrique de chantier doit avoir :", o:["Un différentiel 30 mA","Rien","Une prise unique","Un compteur d'eau"], r:0, e:"Protection des personnes."}
 ]},
{id:"chant-5", niv:1, titre:"Qualité, sécurité et environnement", duree:50, contenu:`## La qualité
Un chantier de qualité suit un **plan de contrôle** : pour chaque étape, **ce qu'on vérifie**, **comment**, **par qui**, et la **trace écrite**.
| Étape | Point de contrôle |
|---|---|
| Implantation | Cotes, diagonales, niveau ±0,00 |
| Fond de fouille | Bon sol atteint, propreté, profondeur |
| Ferraillage | Nombre, diamètres, cadres, enrobage, recouvrements |
| Coulage | Dosage, consistance (cône), vibration, éprouvettes |
| Maçonnerie | Aplomb, alignement, joints, chaînages |
| Réseaux | Essais de pression, continuité électrique |
| Finitions | Planéité, aspect, fonctionnement |
Une **non-conformité** (écart par rapport au CCTP ou aux plans) fait l'objet d'une **fiche** : description, cause, traitement (réparer, démolir, accepter avec accord), action pour que cela ne se reproduise pas.

## La sécurité
Principaux risques : **chutes de hauteur** (première cause d'accidents graves), effondrement de fouilles ou d'étaiements, électrocution, chutes d'objets, blessures par les aciers en attente, engins, bruit, poussières, chaleur.
Mesures :
- **Protections collectives** d'abord : garde-corps sur les planchers et trémies, échafaudages conformes, filets, blindage des fouilles de plus de 1,30 m, balisage ;
- **EPI** obligatoires : casque, chaussures de sécurité, gants, gilet, harnais en hauteur, lunettes, protections auditives ;
- **Bouchons** sur les aciers en attente ; coffrets électriques avec **différentiel 30 mA** ;
- **Accueil sécurité** de chaque nouvel ouvrier, causeries régulières, eau potable et pauses par forte chaleur.

## L'environnement
- **Tri des déchets** (gravats, ferrailles, bois, emballages) et évacuation vers des filières autorisées ;
- Limitation du **bruit** (horaires) et de la **poussière** (arrosage) ;
- Pas de rejet de **laitance** de ciment ou d'huile de décoffrage dans les caniveaux (bac de lavage des bétonnières) ;
- Stockage des carburants et huiles sur **rétention** ;
- Économie d'eau, réemploi des terres de déblai, propreté de la voirie.

> [!exemple] Budget EPI d'une équipe de 12 ouvriers (prix fictifs d'exercice)
> Par ouvrier et par an : casque 5 000 F, chaussures 15 000 F, 4 paires de gants à 1 500 F, gilet 3 000 F → **29 000 F** ; pour 12 ouvriers : **348 000 F**, bien moins que le coût d'un seul accident grave.

> [!retenir]
> - Qualité : contrôler à chaque étape et tracer ; fiche de non-conformité.
> - Sécurité : protections collectives d'abord, EPI ensuite, accueil et causeries.
> - Environnement : trier, ne rien rejeter, limiter bruit et poussière.`,
 exercices:[
  {t:"Plan de contrôle d'une semelle", d:1, e:`Établir le plan de contrôle d'une semelle isolée (quoi, comment, qui, trace).`, c:`| Quoi | Comment | Qui | Trace |
|---|---|---|---|
| Fond de fouille, bon sol | Visuel, pénétromètre, cote | Chef de chantier + MOE | PV de fond de fouille |
| Position et dimensions | Cordeaux, mètre | Chef de chantier | Fiche de contrôle |
| Ferraillage (Ø, espacements, enrobage) | Comparaison au plan, mètre, cales | Chef de chantier + MOE/BC | PV de ferraillage, photos |
| Béton (dosage, consistance) | Comptage des sacs, cône d'Abrams | Chef d'équipe | Journal, éprouvettes |
| Cure | Arrosage 7 jours | Chef d'équipe | Journal |`},
  {t:"Risques et parades", d:1, e:`Pour chaque situation, citer le risque et la parade : a) dalle d'étage coulée sans garde-corps ; b) tranchée de 2 m en sable ; c) rallonges électriques posées dans les flaques ; d) attentes de poteaux à hauteur du visage ; e) travail en plein soleil à 14 h.`, c:`a) **Chute de hauteur** → garde-corps périphériques et sur les trémies ;
b) **Ensevelissement** → talutage ou blindage, pas de stockage en bord de fouille ;
c) **Électrocution** → câbles suspendus et en bon état, coffret avec différentiel 30 mA ;
d) **Blessure grave** → bouchons de protection sur les aciers ;
e) **Coup de chaleur** → eau potable, pauses à l'ombre, horaires décalés.`},
  {t:"Budget EPI", d:1, e:`Un chantier emploie 20 ouvriers pendant 8 mois. Par ouvrier et par an : casque 5 000 F, chaussures 15 000 F, 4 paires de gants à 1 500 F, gilet 3 000 F, et 2 harnais à 45 000 F pour le chantier. Calculer le budget.`, c:`Par ouvrier et par an : 29 000 F → pour 8 mois (on fournit casque, chaussures et gilet en entier, gants au prorata : 3 paires) : 5 000 + 15 000 + 4 500 + 3 000 = 27 500 F → 20 × 27 500 = **550 000 F** ; harnais : **90 000 F** → total **640 000 F**.`},
  {t:"Fiche de non-conformité", d:2, e:`Au décoffrage d'un poteau, on découvre des nids de cailloux sur 30 cm en pied et un acier apparent. Rédiger la fiche de non-conformité.`, c:`- **Description** : poteau P12 (RDC), nids de cailloux sur 30 cm en pied, un acier apparent ; photo jointe.
- **Cause probable** : béton lâché de trop haut sans goulotte, vibration insuffisante en pied, fuite de laitance (coffrage non étanche).
- **Traitement** (après avis du MOE/BET) : purge du béton non compact, nettoyage, mortier de réparation à retrait compensé, contrôle.
- **Action corrective** : couler par couches avec goulotte, vibrer chaque couche, rendre les coffrages étanches, sensibiliser l'équipe ; contrôle renforcé des poteaux suivants.`},
  {t:"Gestion des déchets", d:1, e:`Classer et proposer une destination : gravats de béton, chutes d'acier, sacs de ciment vides, bois de coffrage usé, pots de peinture, huiles de décoffrage usagées.`, c:`- Gravats : **concassage/remblai** ou décharge autorisée ;
- Chutes d'acier : **ferrailleurs/recyclage** ;
- Sacs de ciment : déchets banals (ne pas brûler) ;
- Bois usé : réemploi, bois de chauffe hors chantier ou déchetterie ;
- Pots de peinture, huiles : **déchets dangereux**, à stocker sur rétention et remettre à une filière agréée.`}
 ],
 quiz:[
  {q:"La première cause d'accidents graves sur les chantiers est :", o:["La chute de hauteur","La piqûre de moustique","Le bruit","La pluie"], r:0, e:"Garde-corps indispensables."},
  {q:"Les protections collectives passent :", o:["Avant les EPI","Après les EPI","Jamais","Seulement la nuit"], r:0, e:"Elles protègent tout le monde."},
  {q:"Une fouille de plus de 1,30 m doit être :", o:["Talutée ou blindée","Remplie d'eau","Laissée telle quelle","Couverte de bâches"], r:0, e:"Risque d'ensevelissement."},
  {q:"La laitance de lavage des bétonnières :", o:["Ne doit pas être rejetée dans les caniveaux","Peut aller au caniveau","Sert de peinture","Se boit"], r:0, e:"Bac de décantation."},
  {q:"Une fiche de non-conformité décrit :", o:["L'écart, sa cause, son traitement et l'action corrective","Les salaires","La météo","Le prix du ciment"], r:0, e:"Démarche qualité."}
 ]},
{id:"chant-11", niv:1, titre:"La préparation de chantier", duree:50, contenu:`## Pourquoi préparer ?
« Un chantier bien préparé est à moitié réalisé. » La **période de préparation** (souvent 2 à 6 semaines, parfois incluse dans le délai) sert à anticiper tout ce qui pourrait bloquer l'exécution : plans, méthodes, matériel, matériaux, main-d'œuvre, autorisations, sécurité.

## Les tâches de la préparation
1. **Étudier le dossier** : plans, CCTP, CCAP, DQE ; relever les incohérences et poser les questions par écrit ;
2. **Visiter le site** : accès, voisins, réseaux existants, nature du terrain, eau et électricité disponibles ;
3. **Études d'exécution** : plans EXE (coffrage, ferraillage), calepinages, réservations, visa du maître d'œuvre et du bureau de contrôle ;
4. **Méthodes** : choix des coffrages, des moyens de levage et de bétonnage, phasage des travaux ;
5. **Planning détaillé** et **budget d'exécution** (objectif de déboursés par lot) ;
6. **Consultations et commandes** : fournisseurs, sous-traitants, location de matériel, en tenant compte des **délais** ;
7. **Plan d'installation**, **PPSPS** (sécurité), **PAQ** (qualité) ;
8. **Autorisations** : occupation de la voie, branchements, affichage du permis ;
9. **Constat** de l'état des avoisinants (huissier) avant les travaux ;
10. **Réunion de démarrage** et OS de commencement.

## Le rétro-planning des commandes
$$ Date de commande = date de besoin − délai du fournisseur − marge de sécurité
Certains éléments ont des délais longs : menuiseries aluminium sur mesure (6 à 10 semaines), charpente métallique, ascenseurs, équipements importés.
> [!exemple] Menuiseries aluminium
> Besoin sur le chantier : **semaine 16** ; fabrication : 8 semaines ; marge : 1 semaine → commande au plus tard en **semaine 7**. Si l'on attend la prise de cotes sur la maçonnerie terminée (semaine 10), la livraison arrivera en semaine 19 : **3 semaines de retard**. Solution : commander sur les **dimensions des plans** avec des **précadres** posés pendant la maçonnerie, ou des tableaux réalisés aux cotes exactes.

## Le budget d'exécution
On transforme le prix de vente en **objectif de déboursés** : DS objectif = prix de vente / K, réparti par lots et par postes (matériaux, main-d'œuvre, matériel, sous-traitance). Il sert ensuite à suivre les coûts réels.

> [!retenir]
> - Préparer : dossier, site, plans EXE, méthodes, planning, budget, commandes, PIC, PPSPS, PAQ, autorisations, constat des avoisinants.
> - Commande = besoin − délai − marge ; anticiper les délais longs.
> - Budget d'exécution = objectif de déboursés par lot.`,
 exercices:[
  {t:"Check-list de démarrage", d:1, e:`Établir une check-list de 8 points à vérifier avant le premier coup de pioche d'une villa.`, c:`1. Permis de construire obtenu et **affiché** ; 2. Bornage et **plan d'implantation** ; 3. **Étude de sol** et plans d'exécution des fondations visés ; 4. **Branchements** provisoires eau/électricité ; 5. **Installation** (clôture, magasin, toilettes) ; 6. **Commandes** des premiers matériaux et location du matériel ; 7. **Équipe** constituée, EPI distribués, accueil sécurité ; 8. **OS de démarrage** reçu et planning communiqué.`},
  {t:"Rétro-planning des commandes", d:2, e:`Le chantier démarre en semaine 1. Calculer la semaine de commande au plus tard (marge 1 semaine) : a) aciers, besoin semaine 3, délai 1 semaine ; b) charpente métallique, besoin semaine 12, délai 6 semaines ; c) carrelage importé, besoin semaine 18, délai 10 semaines ; d) climatiseurs, besoin semaine 20, délai 3 semaines.`, c:`a) 3 − 1 − 1 = **semaine 1** (immédiatement) ;
b) 12 − 6 − 1 = **semaine 5** ;
c) 18 − 10 − 1 = **semaine 7** ;
d) 20 − 3 − 1 = **semaine 16**.
Le carrelage et la charpente doivent être choisis et validés par le client **dès la préparation**.`},
  {t:"Budget d'exécution", d:2, e:`Le marché d'une maison vaut 19 832 641 F HT ; le coefficient de vente de l'entreprise est K = 1,355. Calculer le déboursé sec objectif et le répartir : gros œuvre 52 %, second œuvre 40 %, installation et divers 8 %.`, c:`DS objectif = 19 832 641 / 1,355 ≈ **14 637 000 F**.
Gros œuvre : **7 611 000 F** ; second œuvre : **5 855 000 F** ; installation et divers : **1 171 000 F**.
Le conducteur de travaux suivra chaque mois les dépenses réelles par rapport à ces objectifs.`},
  {t:"Constat des avoisinants", d:1, e:`Pourquoi faire constater par huissier l'état des maisons voisines avant de terrasser un sous-sol en limite de propriété ?`, c:`Pour disposer d'une **preuve datée** de l'état initial (fissures existantes, dégradations). En cas de réclamation d'un voisin pendant ou après les travaux, on peut distinguer les désordres **anciens** de ceux causés par le chantier, éviter des indemnisations injustifiées… et traiter rapidement les dommages réels.`},
  {t:"Questions au maître d'œuvre", d:2, e:`En étudiant le dossier, on relève : le plan de coffrage indique une poutre de 20 × 40, le plan de ferraillage une poutre de 20 × 50 ; le CCTP demande un carrelage 60 × 60, le DQE un 40 × 40 ; aucune réservation n'est dessinée pour la climatisation. Que faire ?`, c:`Rédiger une **liste de questions** écrite (fiche de demande d'information) au maître d'œuvre, **avant** exécution : 1) section exacte de la poutre (incidence sur la hauteur sous plafond et les aciers) ; 2) format du carrelage (incidence sur le prix : prix nouveau ou avenant) ; 3) emplacements et diamètres des réservations de climatisation (à intégrer aux plans EXE). Conserver les réponses écrites dans le dossier du chantier.`}
 ],
 quiz:[
  {q:"La période de préparation sert à :", o:["Anticiper tout ce qui pourrait bloquer l'exécution","Commencer les finitions","Payer le solde","Réceptionner"], r:0, e:"Plans, méthodes, commandes…"},
  {q:"Date de commande au plus tard :", o:["Besoin − délai − marge","Besoin + délai","Fin du chantier","N'importe quand"], r:0, e:"Rétro-planning."},
  {q:"Le PPSPS concerne :", o:["La sécurité","Les prix","La peinture","La TVA"], r:0, e:"Plan particulier de sécurité."},
  {q:"Les plans EXE doivent être :", o:["Visés par le maître d'œuvre et le contrôle","Dessinés après les travaux","Facultatifs","Gardés secrets"], r:0, e:"Base d'exécution."},
  {q:"Le budget d'exécution fixe :", o:["Les déboursés objectifs par lot","Le prix de vente au client","Les impôts","Les salaires des fonctionnaires"], r:0, e:"Suivi des coûts."}
 ]},
{id:"chant-3", niv:2, titre:"Rendements, temps unitaires et durées", duree:50, contenu:`## De la quantité à la durée
$$ Durée (jours) = Quantité / (rendement d'une équipe × nombre d'équipes)
ou, avec un **temps unitaire** Tu (heures par unité d'ouvrage) :
$$ Durée (jours) = Quantité × Tu / (nombre d'ouvriers × heures par jour)
Le **rendement** (unités par jour) et le **temps unitaire** (heures par unité) sont deux façons de dire la même chose : un binôme qui pose 10 m² d'agglos en 8 h a un temps unitaire de 0,8 h/m² (pour le binôme).

## Rendements indicatifs (main-d'œuvre locale, chantier bien organisé)
| Tâche | Équipe | Rendement indicatif |
|---|---|---|
| Fouilles manuelles en terrain ordinaire | 1 manœuvre | 2 à 4 m³/jour |
| Maçonnerie d'agglos de 15 | 1 maçon + 1 manœuvre | 8 à 12 m²/jour |
| Coffrage de poteaux et poutres | 1 coffreur + 1 aide | 6 à 10 m²/jour |
| Ferraillage | 1 ferrailleur + 1 aide | 150 à 250 kg/jour |
| Béton à la bétonnière | équipe de 6 à 8 | 6 à 12 m³/jour |
| Enduit ciment | 1 maçon + 1 manœuvre | 12 à 20 m²/jour |
| Carrelage sol | 1 carreleur + 1 aide | 10 à 15 m²/jour |
| Peinture (2 couches) | 1 peintre | 30 à 50 m²/jour |

## Ce qui fait varier les rendements
La qualification et la motivation des équipes, l'organisation (approvisionnements prêts, outillage), la météo (chaleur, pluie), la complexité de l'ouvrage (petites surfaces, nombreuses ouvertures), la hauteur (échafaudages), les arrêts (attentes de matériaux, de plans). Le meilleur rendement est celui **mesuré sur vos propres chantiers** : on le note chaque jour dans le journal.

> [!exemple] Élévation d'une villa
> 260 m² d'agglos de 15 ; 3 binômes maçon + manœuvre à 10 m²/jour : 260 / 30 ≈ **9 jours** de maçonnerie, à intercaler avec le coulage des poteaux et chaînages.

## Mesurer un rendement réel
Rendement réel = quantité réalisée / (nombre d'équipes × jours). Exemple : 2 binômes posent 54 m² en 3 jours → 54 / (2 × 3) = **9 m²/jour par binôme**. Si le planning prévoyait 10, il faut corriger les durées restantes ou agir (approvisionnement, organisation).

> [!retenir]
> - Durée = quantité / (rendement × équipes) = quantité × Tu / (ouvriers × heures).
> - Rendements indicatifs à remplacer par vos rendements mesurés.
> - Arrondir les durées au jour supérieur et prévoir une marge pour les aléas.`,
 exercices:[
  {t:"Durées du gros œuvre", d:1, e:`Calculer les durées (au jour supérieur) : a) 45 m³ de fouilles manuelles, 4 manœuvres à 3 m³/j chacun ; b) 1 200 kg de ferraillage, 2 binômes à 200 kg/j ; c) 260 m² d'agglos, 3 binômes à 10 m²/j.`, c:`a) 45 / (4 × 3) = 3,75 → **4 jours** ; b) 1 200 / (2 × 200) = **3 jours** ; c) 260 / (3 × 10) = 8,7 → **9 jours**.`},
  {t:"Durées des finitions", d:1, e:`a) 420 m² d'enduits, 2 binômes à 15 m²/j ; b) 85 m² de carrelage, 1 équipe à 12 m²/j ; c) 665 m² de peinture (2 couches), 3 peintres à 40 m²/j.`, c:`a) 420 / 30 = **14 jours** ; b) 85 / 12 = 7,1 → **8 jours** ; c) 665 / 120 = 5,5 → **6 jours**.`},
  {t:"Avec un temps unitaire", d:2, e:`Le coffrage des poteaux et poutres d'un étage représente 150 m² ; temps unitaire 1,5 h/m² (coffreur + aide comptés ensemble comme 2 ouvriers, soit 0,75 h/m² par ouvrier). On dispose de 4 ouvriers travaillant 8 h par jour. Durée ?`, c:`Heures totales : 150 × 1,5 = **225 h** (pour l'ensemble des ouvriers).
Durée : 225 / (4 × 8) = 7,0 → **7 jours**.`},
  {t:"Rendement mesuré", d:2, e:`Prévu : 10 m²/j par binôme pour 300 m² avec 3 binômes. Après 4 jours, 96 m² sont posés. Calculer le rendement réel, la durée restante et le retard prévisible. Proposer deux actions.`, c:`Rendement réel : 96 / (3 × 4) = **8 m²/j** par binôme.
Reste : 204 m² → 204 / (3 × 8) = **8,5 jours** ; durée totale : 12,5 jours au lieu de 10 → **2,5 jours de retard**.
Actions : vérifier l'approvisionnement des postes (agglos et mortier prêts, manœuvre dédiée), ajouter un **quatrième binôme** (204 / 32 = 6,4 jours), éviter les heures les plus chaudes.`},
  {t:"Choisir le nombre d'équipes", d:2, e:`On doit enduire 600 m² en 10 jours. Un binôme fait 15 m²/j. Combien de binômes ? Avec combien de manœuvres en plus pour préparer le mortier (1 pour 2 binômes) ?`, c:`Besoin : 600 / 10 = 60 m²/j → 60 / 15 = **4 binômes** (4 maçons + 4 manœuvres) + **2 manœuvres** pour le mortier → 4 maçons et 6 manœuvres.`}
 ],
 quiz:[
  {q:"Durée pour 120 m² à 10 m²/j avec 3 équipes :", o:["4 jours","12 jours","36 jours","1 jour"], r:0, e:"120/30."},
  {q:"Un binôme qui pose 10 m² en 8 h a un temps unitaire de :", o:["0,8 h/m²","8 h/m²","1,25 h/m²","10 h/m²"], r:0, e:"8/10."},
  {q:"Le meilleur rendement à utiliser est :", o:["Celui mesuré sur vos chantiers","Un chiffre au hasard","Le plus élevé possible","Celui d'un autre pays"], r:0, e:"Réaliste."},
  {q:"On arrondit les durées :", o:["Au jour supérieur","Au jour inférieur","À zéro","Jamais"], r:0, e:"Prudence."},
  {q:"Un rendement plus faible que prévu entraîne :", o:["Un retard si l'on ne réagit pas","Une avance","Rien","Une baisse de prix"], r:0, e:"Agir vite."}
 ]},
{id:"chant-12", niv:2, titre:"Le planning : Gantt, liens, marges et chemin critique", duree:60, contenu:`## Construire le planning
1. **Lister les tâches** (par lots et par zones), assez détaillées pour être suivies ;
2. **Calculer les durées** (quantités du métré ÷ rendements) ;
3. Définir les **liens** : une tâche ne peut commencer que lorsque ses antécédentes sont finies (lien fin-début), avec parfois un **délai** (séchage, décoffrage) ;
4. Calculer les **dates au plus tôt**, la **durée totale**, les **marges** ;
5. Tracer le **diagramme de Gantt** (barres sur un calendrier) et repérer le **chemin critique** ;
6. Ajouter une **marge pour aléas** (10 à 15 % : pluies, ruptures d'approvisionnement).

!fig:gantt|Planning de type Gantt

## Dates, marges et chemin critique
- **Début au plus tôt** d'une tâche = la plus grande **fin au plus tôt** de ses antécédentes ;
- **Fin au plus tôt** = début au plus tôt + durée ;
- La **marge** d'une tâche est le retard qu'elle peut prendre sans retarder la fin du chantier ;
- Le **chemin critique** est la suite de tâches **sans marge** : tout retard sur elles retarde la fin.

> [!exemple] Planning d'une villa (durées en jours ouvrés)
> | Tâche | Durée | Après | Début | Fin |
> |---|---|---|---|---|
> | A Installation | 3 | — | 0 | 3 |
> | B Implantation, terrassements | 5 | A | 3 | 8 |
> | C Fondations | 12 | B | 8 | 20 |
> | D Élévation RDC | 25 | C | 20 | 45 |
> | E Dalle haute, étanchéité | 10 | D | 45 | 55 |
> | F Réseaux encastrés | 8 | D | 45 | 53 |
> | G Enduits | 14 | E, F | 55 | 69 |
> | H Menuiseries extérieures | 5 | E | 55 | 60 |
> | I Carrelage | 10 | G | 69 | 79 |
> | J Peinture, appareillages | 8 | I, H | 79 | 87 |
> | K Nettoyage, réception | 3 | J | 87 | 90 |
> Chemin critique : **A-B-C-D-E-G-I-J-K = 90 jours**. Marges : F = 55 − 53 = **2 jours** ; H = 79 − 60 = **19 jours**.

## Suivre le planning
Chaque semaine : marquer l'**avancement réel** sur le Gantt, comparer au prévu, identifier les retards **sur le chemin critique**, décider des actions (renfort, travail en parallèle, heures supplémentaires) et mettre à jour le planning.
Le planning **PERT** et la méthode des potentiels (voir Recherche opérationnelle) donnent les mêmes résultats sous forme de graphe.

> [!retenir]
> - Tâches, durées, liens → dates au plus tôt → chemin critique.
> - Marge = retard possible sans décaler la fin.
> - Suivre chaque semaine et agir sur les tâches critiques.`,
 exercices:[
  {t:"Retard sur une tâche critique", d:1, e:`Dans le planning de la villa (90 jours), les fondations (C) prennent 5 jours de retard. Quelle est la nouvelle date de fin ? Même question si c'est la menuiserie extérieure (H) qui prend 5 jours de retard.`, c:`C est **critique** : la fin passe à **95 jours**.
H a **19 jours de marge** : un retard de 5 jours ne change pas la fin (**90 jours**).`},
  {t:"Retard sur une tâche à faible marge", d:2, e:`Les réseaux encastrés (F) prennent 5 jours de retard (durée 13 jours au lieu de 8). Quelle est la nouvelle date de fin ? Quel est le nouveau chemin critique ?`, c:`F finit à 45 + 13 = **58** au lieu de 53 ; G commence au plus tôt à max(55 ; 58) = **58** → G finit à 72, I à 82, J à 90, K à **93**.
Retard de **3 jours** (5 − 2 de marge) ; le chemin critique devient **A-B-C-D-F-G-I-J-K**.`},
  {t:"Accélérer le chantier", d:2, e:`Le client veut gagner 10 jours. On propose de doubler les équipes de l'élévation (D passe de 25 à 15 jours). Nouvelle durée totale ? Vérifier que les marges de F et H ne changent pas.`, c:`D finit à 20 + 15 = 35 ; E : 35 → 45 ; F : 35 → 43 ; G : 45 → 59 ; H : 45 → 50 ; I : 59 → 69 ; J : 69 → 77 ; K : 77 → **80 jours** (gain de 10 jours).
Marges : F = 45 − 43 = **2** ; H = 69 − 50 = **19** : inchangées (tout le planning est décalé de 10 jours après D).`},
  {t:"Du planning au calendrier", d:1, e:`Le planning dure 90 jours ouvrés, avec 5,5 jours de travail par semaine. Combien de semaines ? Avec 15 % de marge pour les aléas ?`, c:`90 / 5,5 = 16,4 semaines → avec 15 % : 16,4 × 1,15 = **18,8 semaines**, soit environ **19 semaines** (4 mois et demi) à annoncer au client.`},
  {t:"Placer un délai technique", d:2, e:`On veut ajouter un délai de séchage de 21 jours entre la fin des enduits (G) et le début de la peinture (J), le carrelage (I) pouvant se faire pendant ce temps. Le planning change-t-il ?`, c:`J pourrait commencer au plus tôt à max(fin de I = 79 ; fin de G + 21 = 69 + 21 = 90 ; fin de H = 60) = **90** → J : 90 → 98 ; K : 98 → **101 jours**.
Le délai de séchage devient critique : la fin recule de **11 jours**. Pour l'éviter : enduits plus tôt par zones, peinture adaptée aux supports jeunes après accord du fabricant, ou planification des finitions par pièces.`}
 ],
 quiz:[
  {q:"Le chemin critique est formé des tâches :", o:["Sans marge","Les plus courtes","Les moins chères","Facultatives"], r:0, e:"Tout retard décale la fin."},
  {q:"Le début au plus tôt d'une tâche est :", o:["La plus grande fin au plus tôt de ses antécédentes","La plus petite","Toujours zéro","La fin du chantier"], r:0, e:"Attendre toutes les antécédentes."},
  {q:"Une tâche ayant 10 jours de marge peut prendre 4 jours de retard :", o:["Sans retarder la fin","En retardant la fin de 4 jours","En annulant le chantier","Jamais"], r:0, e:"Marge suffisante."},
  {q:"Le diagramme de Gantt représente :", o:["Les tâches en barres sur un calendrier","Les prix","Les plans","Les fondations"], r:0, e:"Planning visuel."},
  {q:"Marge conseillée pour les aléas :", o:["10 à 15 %","0 %","100 %","1 %"], r:0, e:"Pluies, approvisionnements."}
 ]},
{id:"chant-4", niv:2, titre:"Les ressources : main-d'œuvre, stocks et approvisionnements", duree:55, contenu:`## La main-d'œuvre
- Constituer des équipes **équilibrées** (un maçon pour un ou deux manœuvres) ;
- Établir l'**histogramme** des effectifs à partir du planning (nombre d'ouvriers par jour ou par semaine) ;
- **Lisser** : décaler les tâches qui ont de la **marge** pour éviter les pics et les creux (une équipe stable est plus efficace et plus facile à gérer) ;
- Tenir la feuille de présence quotidienne et suivre les rendements réels.
> [!exemple] Lissage
> Tâche X (critique) jours 1 à 6 : 6 ouvriers ; tâche Y (marge 6 jours) jours 1 à 4 : 4 ouvriers ; tâche Z (critique) jours 7 à 10 : 2 ouvriers.
> Sans lissage : 10 ouvriers les jours 1 à 4, 6 les jours 5 et 6, 2 les jours 7 à 10. En décalant Y aux jours 7 à 10 : **6 ouvriers tous les jours**.

## Les stocks
- Un stock trop faible arrête le chantier ; un stock trop fort immobilise de l'argent, prend de la place, se dégrade (ciment) et se fait voler ;
- **Point de commande** = consommation journalière × (délai de livraison + stock de sécurité en jours) ;
- Inventaire hebdomadaire, bons de sortie signés, magasin fermé.
> [!exemple] Ciment
> Consommation : 12 sacs/jour ; délai de livraison : 3 jours ; sécurité : 2 jours → on recommande dès qu'il reste **12 × 5 = 60 sacs** ; quantité commandée : 10 jours de consommation, soit **120 sacs** (si le magasin peut en contenir 150 au plus).

## Les approvisionnements
1. Extraire les **quantités** du métré (sous-détail des matériaux) ;
2. Établir le **planning des approvisionnements** calé sur le planning des travaux (date de besoin − délai de livraison) ;
3. Comparer les fournisseurs (prix, qualité, délais, fiabilité, conditions de paiement) ;
4. **Réceptionner** : quantité, qualité (granulats propres, diamètres des aciers, date du ciment), bon de livraison signé avec réserves si besoin ;
5. Suivre les stocks (entrées, sorties, inventaires).

> [!attention]
> Les pertes et vols de matériaux peuvent atteindre 5 à 10 % sur un chantier mal tenu : magasin fermé, inventaires, bons de sortie signés.

> [!retenir]
> - Histogramme des effectifs ; lisser grâce aux marges.
> - Point de commande = consommation × (délai + sécurité).
> - Approvisionner selon le planning ; réceptionner et contrôler.`,
 exercices:[
  {t:"Histogramme et lissage", d:2, e:`Tâches : M (critique) jours 1 à 8, 5 ouvriers ; P (critique) jours 9 à 12, 5 ouvriers ; N (marge 8 jours) jours 1 à 4, 3 ouvriers ; Q (marge 4 jours) jours 1 à 4, 3 ouvriers. a) Calculer l'effectif par période. b) Proposer un lissage.`, c:`a) Jours 1-4 : 5 + 3 + 3 = **11** ; jours 5-8 : **5** ; jours 9-12 : **5**.
b) Garder Q aux jours 1-4 et décaler **N aux jours 5-8** (marge de 8 jours suffisante) : jours 1-4 : 5 + 3 = **8** ; jours 5-8 : 5 + 3 = **8** ; jours 9-12 : **5**.
Le pic passe de 11 à 8 ouvriers, sans retarder la fin du chantier (N et Q restent dans leur marge).`},
  {t:"Point de commande des agglos", d:2, e:`Le chantier pose 150 agglos par jour. Le fabricant livre en 4 jours ; on veut 2 jours de sécurité. Quand recommander ? Quelle quantité commander si l'aire de stockage contient 2 000 agglos au plus ?`, c:`Point de commande : 150 × (4 + 2) = **900 agglos** restants.
À la livraison (4 jours plus tard), il reste ≈ 900 − 600 = 300 agglos : on peut recevoir **1 700 agglos** au maximum (2 000 − 300), soit environ 11 jours de pose.`},
  {t:"Planning des approvisionnements", d:1, e:`Besoins : aciers des fondations le jour 8 (délai 5 jours) ; ciment le jour 8 (délai 2 jours) ; agglos de l'élévation le jour 20 (délai 7 jours) ; carreaux le jour 69 (délai 30 jours). Calculer les jours de commande au plus tard (marge de 2 jours).`, c:`Aciers : 8 − 5 − 2 = **jour 1** ; ciment : 8 − 2 − 2 = **jour 4** ; agglos : 20 − 7 − 2 = **jour 11** ; carreaux : 69 − 30 − 2 = **jour 37**.`},
  {t:"Réception d'une livraison", d:1, e:`Un camion livre « 200 sacs CEM II 42,5 » ; on compte 194 sacs, dont 5 déchirés et 3 contenant des grumeaux durs. Que faire ?`, c:`Accepter **186 sacs** conformes ; noter sur le bon de livraison les réserves : **6 sacs manquants**, **5 déchirés**, **3 éventés** refusés (à reprendre ou à créditer) ; faire signer le chauffeur ; informer le conducteur de travaux pour la facture.`},
  {t:"Pertes de matériaux", d:2, e:`D'après le métré, il fallait 230 sacs de ciment pour le gros œuvre ; on en a acheté 262 et il en reste 8 en stock. Calculer la consommation réelle et le taux de pertes. Proposer trois mesures.`, c:`Consommation : 262 − 8 = **254 sacs** → pertes : 254 − 230 = **24 sacs**, soit **10,4 %** (au-delà des 3 à 5 % normaux).
Mesures : magasin fermé et **bons de sortie** signés ; **dosage contrôlé** à la bétonnière (sacs par gâchée) ; **inventaire** hebdomadaire et rapprochement avec l'avancement.`}
 ],
 quiz:[
  {q:"Lisser les effectifs consiste à :", o:["Décaler les tâches à marge pour éviter les pics","Licencier","Travailler la nuit","Supprimer des tâches"], r:0, e:"Effectif stable."},
  {q:"Point de commande pour 10 sacs/j, délai 3 j, sécurité 2 j :", o:["50 sacs","30 sacs","20 sacs","100 sacs"], r:0, e:"10 × (3 + 2)."},
  {q:"Un stock trop important :", o:["Immobilise de l'argent et se dégrade","Est toujours une bonne chose","Est obligatoire","Réduit les vols"], r:0, e:"Juste nécessaire."},
  {q:"À la réception d'aciers, on vérifie :", o:["Les diamètres et les quantités","La couleur du camion","La météo","Rien"], r:0, e:"Section d'acier."},
  {q:"Taux de pertes de ciment acceptable sur un chantier bien tenu :", o:["3 à 5 %","30 %","50 %","0 % impossible à dépasser"], r:0, e:"Au-delà, enquêter."}
 ]},
{id:"chant-13", niv:2, titre:"Le matériel et les engins de chantier", duree:55, contenu:`## Le petit et moyen matériel
| Matériel | Usage |
|---|---|
| Bétonnière (250 à 500 L) | Béton et mortier |
| Aiguille vibrante | Compactage du béton |
| Étais, coffrages, banches | Poteaux, poutres, dalles, voiles |
| Échafaudages | Travail en hauteur |
| Plaque vibrante, pilonneuse | Compactage des remblais, tranchées |
| Groupe électrogène, pompe d'épuisement | Énergie, fouilles noyées |
| Scie, cintreuse, meuleuse | Façonnage des aciers et coupes |

## Les engins
| Engin | Usage |
|---|---|
| **Pelle hydraulique** | Fouilles, chargement des camions |
| **Chargeuse** | Chargement, reprise de stocks |
| **Bulldozer** | Décapage, poussage des terres |
| **Niveleuse** | Réglage des plates-formes et des chaussées |
| **Compacteurs** (vibrant lisse, pieds de mouton, pneus) | Compactage des remblais et couches de chaussée |
| **Camions-bennes** | Transport des déblais et matériaux |
| **Grue à tour, grue mobile** | Levage |
| **Toupie et pompe à béton** | Béton prêt à l'emploi |

## Le rendement d'une pelle
$$ Q (m³/h foisonnés) = q × k × 3 600 / T
q : capacité du godet (m³) ; k : coefficient de remplissage (0,8 à 1,0) ; T : durée d'un cycle (s). On divise par le **foisonnement** pour avoir des m³ en place, et on applique un **coefficient d'efficacité** (≈ 0,75 : 45 minutes utiles par heure).
> [!exemple] Pelle de 1 m³
> k = 0,9, cycle de 20 s : Q = 1 × 0,9 × 3 600 / 20 = 162 m³/h foisonnés → 162 / 1,25 = 129,6 m³/h en place → × 0,75 = **≈ 97 m³/h** réels.

## Le nombre de camions
Un camion doit être prêt sous la pelle quand le précédent part :
$$ nombre de camions = durée du cycle d'un camion / durée de chargement d'un camion
> [!exemple] Suite
> Camions de 10 m³ foisonnés : chargement 10 / 162 h = **3,7 min** ; cycle : 3,7 (charge) + 12 (aller) + 3 (vidage) + 10 (retour) = **28,7 min** → 28,7 / 3,7 = 7,8 → **8 camions** (avec 7, la pelle attendrait ; avec 9, les camions attendraient).

## Le coût du matériel
- **Coût horaire** d'un engin = amortissement + carburant + entretien + conducteur (+ assurance, transport) ;
- **Location ou achat** : on loue le matériel utilisé peu de temps, on achète celui utilisé en continu.
> [!exemple] Coût horaire d'une pelle (chiffres d'exercice)
> Achat 60 M F, revente 10 %, durée de vie 10 000 h → amortissement 60 × 0,9 / 10 000 = 5 400 F/h ; carburant 15 L/h × 700 F = 10 500 F/h ; entretien 3 000 F/h ; conducteur 1 500 F/h → **≈ 20 400 F/h**.

> [!retenir]
> - Pelle : Q = q k 3 600 / T, puis ÷ foisonnement × efficacité.
> - Camions = cycle camion / temps de chargement.
> - Coût horaire = amortissement + carburant + entretien + conducteur ; louer pour un usage court.`,
 exercices:[
  {t:"Rendement d'une pelle", d:2, e:`Pelle de 0,8 m³, coefficient de remplissage 0,85, cycle de 18 s, foisonnement 1,25, efficacité 0,75. Calculer le rendement en m³ en place par heure et la durée pour 1 500 m³ de déblais.`, c:`Q = 0,8 × 0,85 × 3 600 / 18 = **136 m³/h** foisonnés → 136 / 1,25 = 108,8 m³/h en place → × 0,75 = **81,6 m³/h**.
Durée : 1 500 / 81,6 = **18,4 h**, soit environ **2,3 journées** de 8 h.`},
  {t:"Nombre de camions", d:2, e:`Avec la pelle de l'exercice 1 (136 m³/h foisonnés) et des camions de 8 m³, la décharge est à 15 min aller, 12 min retour, 3 min de vidage. Combien de camions ?`, c:`Chargement : 8 / 136 h = **3,5 min** ; cycle : 3,5 + 15 + 3 + 12 = **33,5 min** → 33,5 / 3,5 = 9,6 → **10 camions** (ou 9 en acceptant de petites attentes de la pelle).`},
  {t:"Louer ou acheter une bétonnière", d:2, e:`Une bétonnière coûte 1 200 000 F à l'achat (durée de vie 3 ans, sans valeur de revente) et 100 000 F d'entretien par an ; la location coûte 15 000 F par jour. Comparer pour 60 jours et 20 jours d'utilisation par an.`, c:`Achat : 1 200 000 / 3 + 100 000 = **500 000 F/an**.
60 jours : location 60 × 15 000 = **900 000 F** → **acheter**.
20 jours : location **300 000 F** → **louer**.
Seuil : 500 000 / 15 000 ≈ **33 jours** d'utilisation par an.`},
  {t:"Coût horaire d'un compacteur", d:2, e:`Compacteur acheté 40 M F, revente 15 %, durée de vie 8 000 h ; consommation 10 L/h à 700 F ; entretien 2 000 F/h ; conducteur 1 500 F/h. Calculer le coût horaire.`, c:`Amortissement : 40 000 000 × 0,85 / 8 000 = **4 250 F/h** ; carburant : **7 000 F/h** ; entretien **2 000** ; conducteur **1 500** → **14 750 F/h**.`},
  {t:"Choisir les engins", d:1, e:`Choisir les engins pour : a) décaper 1 ha de terrain ; b) creuser les tranchées d'un réseau d'assainissement ; c) compacter un remblai argileux ; d) régler une plate-forme au centimètre ; e) couler une dalle de 80 m³ en une journée.`, c:`a) **Bulldozer** (ou chargeuse) ; b) **pelle** (mini-pelle en ville) ; c) compacteur à **pieds de mouton** ; d) **niveleuse** (guidage laser ou GPS) ; e) **béton prêt à l'emploi** en toupies + **pompe à béton**.`}
 ],
 quiz:[
  {q:"Pour compacter un remblai argileux, on utilise de préférence :", o:["Un compacteur à pieds de mouton","Une bétonnière","Une niveleuse seule","Une grue"], r:0, e:"Il pétrit le sol fin."},
  {q:"Rendement d'une pelle de 1 m³, k = 1, cycle 20 s :", o:["180 m³/h foisonnés","20 m³/h","3 600 m³/h","1 m³/h"], r:0, e:"1 × 1 × 3 600/20."},
  {q:"Nombre de camions = ", o:["Cycle d'un camion / temps de chargement","Volume / 10","Pelle × 2","Toujours 1"], r:0, e:"Pas d'attente de la pelle."},
  {q:"On loue plutôt qu'acheter un matériel :", o:["Utilisé peu de temps","Utilisé en continu","Très bon marché","Jamais"], r:0, e:"Seuil de rentabilité."},
  {q:"Le coût horaire d'un engin comprend :", o:["Amortissement, carburant, entretien, conducteur","Seulement le carburant","Seulement le prix d'achat","La TVA du client"], r:0, e:"Tous les postes."}
 ]},
{id:"chant-14", niv:2, titre:"Organiser les grandes opérations : terrassements et bétonnages", duree:55, contenu:`## Le terrassement d'une plate-forme
1. **Préparer** : levé topographique, calcul des cubatures (déblais, remblais, mouvement des terres), piquetage ;
2. **Décaper** la terre végétale et la stocker ;
3. **Terrasser** : pelle + camions (équilibrer la chaîne : voir chapitre précédent), ou bulldozer pour les faibles distances ;
4. **Remblayer** par couches de 20 à 30 cm, **arroser** à la teneur en eau optimale, **compacter** (nombre de passes défini par une planche d'essai) ;
5. **Contrôler** : densité en place, essai de plaque, nivellement.
Le **rendement d'un compacteur** : Q = V × l × e × η / n (V : vitesse en m/h, l : largeur utile, e : épaisseur de la couche, n : nombre de passes, η : efficacité).
> [!exemple] Compacteur vibrant
> V = 3 km/h, largeur utile 1,6 m, couches de 0,25 m, 6 passes, efficacité 0,75 : Q = 3 000 × 1,6 × 0,25 × 0,75 / 6 = **150 m³/h** : il peut suivre une pelle de 100 m³/h. La chaîne est limitée par l'engin le plus lent.

## Le bétonnage d'une dalle importante
1. **Volume** et **cadence** : choisir entre bétonnière (≈ 2,5 m³/h) et **béton prêt à l'emploi + pompe** (20 à 40 m³/h) ;
2. **Réservation** de la centrale et de la pompe, nombre de **toupies** ;
3. **Préparation** : coffrages et étaiements réceptionnés, ferraillage et réservations contrôlés (PV), éclairage si coulage tardif, équipe et vibreurs (+ un de secours), matériel de cure ;
4. **Coulage** continu, sans reprise non prévue ; prélèvement d'**éprouvettes** ; contrôle de chaque bon de livraison ;
5. **Cure** dès la fin du talochage.
Nombre de toupies : il faut une toupie toutes les (volume d'une toupie / cadence de la pompe) minutes ; nombre = cycle d'une toupie / cet intervalle.

> [!exemple] Dalle de 85 m³ en béton prêt à l'emploi
> Pompe : 20 m³/h effectifs → durée de coulage : 85 / 20 = **4 h 15**. Toupies de 7 m³ : 85 / 7 = 12,1 → **13 livraisons**, une toutes les 7 / 20 h = **21 min**.
> Cycle d'une toupie (centrale à 40 min) : 40 aller + 15 déchargement + 40 retour = **95 min** → 95 / 21 = 4,5 → **5 toupies** en rotation.
> À la bétonnière (2,5 m³/h), il faudrait 34 heures : impossible sans reprises de bétonnage.

## Bétonner par forte chaleur
Couler tôt le matin ou en fin de journée, mouiller les coffrages, protéger le béton du soleil et du vent, utiliser un retardateur pour les longs transports, démarrer la cure immédiatement.

> [!retenir]
> - Terrassement : décaper, terrasser, remblayer par couches, compacter, contrôler ; la chaîne va au rythme de l'engin le plus lent.
> - Compacteur : Q = V l e η / n.
> - Grande dalle : BPE + pompe ; toupies = cycle / intervalle ; coulage continu, éprouvettes, cure.`,
 exercices:[
  {t:"Chaîne de terrassement", d:2, e:`Plate-forme : 2 000 m³ de déblai réutilisé en remblai compacté sur place. Pelle : 97 m³/h réels ; compacteur : 150 m³/h. Combien de journées de 8 h ? Quel engin limite ?`, c:`La **pelle** (97 m³/h) est la plus lente : 2 000 / 97 = **20,6 h**, soit **2,6 journées** (3 jours). Le compacteur (150 m³/h) suit sans difficulté ; il peut même être partagé avec un autre chantier.`},
  {t:"Rendement d'un compacteur", d:2, e:`Un compacteur roule à 2,5 km/h, largeur utile 1,8 m, couches de 0,20 m, 8 passes, efficacité 0,75. Calculer son rendement. Suit-il une pelle de 80 m³/h ?`, c:`Q = 2 500 × 1,8 × 0,20 × 0,75 / 8 = **84 m³/h** ≥ 80 → oui, de justesse : aucune marge en cas de panne ou d'arrosage insuffisant ; prévoir un second compacteur léger en appoint.`},
  {t:"Toupies pour une dalle", d:2, e:`Dalle de 120 m³ ; pompe à 25 m³/h effectifs ; toupies de 8 m³ ; centrale à 30 min ; déchargement 15 min. Calculer la durée du coulage, le nombre de livraisons et le nombre de toupies en rotation.`, c:`Durée : 120 / 25 = **4,8 h** (4 h 48). Livraisons : 120 / 8 = **15**. Intervalle : 8 / 25 h = **19,2 min**. Cycle : 30 + 15 + 30 = **75 min** → 75 / 19,2 = 3,9 → **4 toupies**.`},
  {t:"Préparer un coulage", d:1, e:`Établir la liste des vérifications la veille du coulage d'une dalle de 60 m³ en béton prêt à l'emploi.`, c:`Coffrages, étaiements et rives **réceptionnés** ; ferraillage, chapeaux, réservations et fourreaux **contrôlés** (PV signé) ; commande du BPE et de la **pompe** confirmée (heure, classe, consistance) ; accès des toupies dégagé ; équipe (pompiste, vibreurs, régleurs, talocheurs) et **2 vibreurs** + un de secours ; moules à éprouvettes et cône ; matériel de **cure** ; éclairage ; météo vérifiée ; consignes de sécurité.`},
  {t:"Reprise imprévue", d:2, e:`Pendant le coulage d'une dalle, la pompe tombe en panne après 30 m³ sur 60. Que faire ?`, c:`Arrêter proprement le coulage sur une **ligne de reprise** choisie (perpendiculaire à la portée, dans une zone de faible effort tranchant, en accord avec le BET si possible), réaliser un **arrêt net** (planche, grillage), vibrer et protéger le béton coulé ; refuser les toupies qui attendent trop longtemps ; à la reprise : **piquer et humidifier** la surface, éventuellement appliquer une barbotine ou un produit de reprise, puis couler. Noter l'incident au journal et dans le PV.`}
 ],
 quiz:[
  {q:"Dans une chaîne pelle-camions-compacteur, le rythme est fixé par :", o:["L'engin le plus lent","L'engin le plus rapide","Le plus cher","Le conducteur"], r:0, e:"Goulot d'étranglement."},
  {q:"Durée de coulage de 60 m³ avec une pompe à 20 m³/h :", o:["3 h","20 h","1 h","60 h"], r:0, e:"60/20."},
  {q:"On compacte un remblai par couches de :", o:["20 à 30 cm","1 m","5 m","2 cm"], r:0, e:"Efficacité du compactage."},
  {q:"Avant un coulage, le ferraillage doit être :", o:["Contrôlé et réceptionné (PV)","Recouvert de boue","Peint","Démonté"], r:0, e:"Point d'arrêt."},
  {q:"Par forte chaleur, on coule de préférence :", o:["Tôt le matin ou en fin de journée","À 14 h","Sans cure","Avec plus d'eau"], r:0, e:"Évaporation moindre."}
 ]},
{id:"chant-6", niv:2, titre:"Le suivi financier du chantier : budget, coûts et trésorerie", duree:55, contenu:`## Les situations de travaux
Chaque mois (ou à chaque étape), l'entreprise établit une **situation** : travaux réalisés cumulés (quantités × prix unitaires), moins les situations précédentes, moins la **retenue de garantie**, moins le remboursement de l'**avance**, plus TVA (voir le chapitre Situations du cours de Métré).
> [!exemple]
> Marché : 45 M F HT. Cumul à fin mars : 18,4 M ; situations précédentes : 11,2 M → travaux du mois **7,2 M** ; retenue 5 % (0,36 M) → **6,84 M HT** à payer, plus TVA.

## Le suivi des coûts
Pour chaque lot, on compare :
| Budget (objectif) | Engagé (commandes, contrats signés) | Réalisé (dépensé) | Avancement physique | Prévision à terminaison |
La **prévision à terminaison** (PAT) estime le coût final : PAT ≈ dépenses réelles / avancement (si les rendements restent les mêmes), ou dépenses réelles + reste à faire réestimé.
> [!exemple] Lot gros œuvre
> Budget : 25 M F ; avancement : 60 % ; dépenses : 16,5 M → PAT = 16,5 / 0,60 = **27,5 M** → dépassement prévisible de **2,5 M (10 %)**. Il faut en chercher les causes (rendements, pertes de matériaux, prix d'achat, reprises) et agir sur les 40 % restants.

## La marge
**Marge brute** = chiffre d'affaires (travaux facturés) − déboursés. Elle doit couvrir les frais de chantier, les frais généraux et le bénéfice. Un chantier « qui avance bien » peut perdre de l'argent : seul le suivi mensuel des coûts le révèle à temps.

## La trésorerie
L'entreprise paie les salaires et les fournisseurs **avant** d'être payée par le client (délais de paiement des situations). La **trésorerie** est la différence cumulée entre encaissements et décaissements :
> [!exemple] Plan de trésorerie (en millions F)
> Avance encaissée au démarrage : 6. Dépenses mensuelles : 8 ; 12 ; 14 ; 12. Situations facturées : 10 ; 15 ; 17 ; 15, payées **le mois suivant** à 85 % (retenue 5 % et avance 10 % déduites).
> Trésorerie fin de mois : M1 : 6 − 8 = **− 2** ; M2 : − 2 − 12 + 8,5 = **− 5,5** ; M3 : − 5,5 − 14 + 12,75 = **− 6,75** ; M4 : − 6,75 − 12 + 14,45 = **− 4,3**.
> L'entreprise doit financer jusqu'à **6,75 M** (découvert, fonds propres) : à prévoir dès la préparation.

## Les travaux modificatifs
Toute modification demandée par le maître d'ouvrage fait l'objet d'un **devis**, puis d'un **OS** ou d'un **avenant** **avant** exécution. Sans écrit, les « travaux supplémentaires » sont la première cause de conflit et de perte d'argent.

> [!retenir]
> - Situations mensuelles ; retenue de garantie ; avance remboursée.
> - Budget / engagé / réalisé / avancement → PAT ; agir dès qu'un écart apparaît.
> - Trésorerie : on dépense avant d'encaisser ; la prévoir.
> - Pas de travaux supplémentaires sans écrit.`,
 exercices:[
  {t:"Prévision à terminaison", d:2, e:`Lot second œuvre : budget 12 M F ; avancement 40 % ; dépenses 5,2 M. Calculer la PAT et l'écart. Même calcul pour le lot VRD : budget 3 M, avancement 75 %, dépenses 2,1 M.`, c:`Second œuvre : PAT = 5,2 / 0,40 = **13 M** → dépassement **1 M (8,3 %)**.
VRD : PAT = 2,1 / 0,75 = **2,8 M** → économie **0,2 M**.
Au total : dépassement net de 0,8 M ; il faut analyser le second œuvre (prix des carreaux ? reprises ?).`},
  {t:"Situation mensuelle", d:1, e:`Marché 60 M HT ; cumul fin juin 27 M ; situations précédentes 19,5 M ; retenue 5 % ; avance remboursée à 10 % des travaux du mois ; TVA 18 %. Calculer le net à payer TTC.`, c:`Travaux du mois : 27 − 19,5 = **7,5 M** ; retenue : 0,375 M ; avance : 0,75 M → net HT : **6,375 M** ; TVA : 1,1475 M → **7,5225 M TTC**.`},
  {t:"Plan de trésorerie", d:3, e:`Avance : 5 M au démarrage. Dépenses : 7 ; 10 ; 11 ; 9 M. Situations : 9 ; 13 ; 14 ; 12 M, payées le mois suivant à 85 %. Calculer la trésorerie de fin de mois et le besoin de financement maximal.`, c:`M1 : 5 − 7 = **− 2** ; M2 : − 2 − 10 + 7,65 = **− 4,35** ; M3 : − 4,35 − 11 + 11,05 = **− 4,30** ; M4 : − 4,30 − 9 + 11,90 = **− 1,40**.
Besoin maximal : **4,35 M F** (au mois 2) : à couvrir par un découvert négocié avec la banque ou des fonds propres.`},
  {t:"Marge d'un chantier", d:2, e:`Un chantier facturé 40 M F HT a coûté 31 M de déboursés. Les frais de chantier représentent 3,2 M et la quote-part de frais généraux 4 M. Calculer la marge brute et le résultat. Commenter.`, c:`Marge brute : 40 − 31 = **9 M** (22,5 %).
Résultat : 9 − 3,2 − 4 = **1,8 M** (4,5 % du chiffre d'affaires) : positif mais faible ; une petite dérive (pertes de matériaux, reprises, retard et pénalités) l'aurait annulé.`},
  {t:"Travaux supplémentaires", d:1, e:`Le client demande oralement au chef de chantier d'ajouter un mur de clôture de 20 m. Que doit faire l'entreprise avant d'exécuter ?`, c:`Établir un **devis** (quantités × prix du bordereau ou prix nouveaux), le faire **accepter par écrit** (ordre de service du maître d'œuvre ou avenant signé par le maître d'ouvrage), intégrer l'incidence sur le **délai**, puis seulement exécuter. Sans cela, le paiement et le délai supplémentaires pourront être contestés.`}
 ],
 quiz:[
  {q:"PAT d'un lot avec 9 M dépensés pour 60 % d'avancement :", o:["15 M","9 M","5,4 M","60 M"], r:0, e:"9/0,6."},
  {q:"La marge brute est :", o:["Chiffre d'affaires − déboursés","Le bénéfice net","La TVA","Le prix du ciment"], r:0, e:"Couvre frais et bénéfice."},
  {q:"La trésorerie d'un chantier est souvent négative au début car :", o:["On dépense avant d'être payé","Le client paie trop tôt","Il n'y a pas de dépenses","La TVA est nulle"], r:0, e:"Décalage de paiement."},
  {q:"Les travaux supplémentaires doivent être :", o:["Acceptés par écrit avant exécution","Exécutés puis discutés","Gratuits","Interdits"], r:0, e:"Devis + OS ou avenant."},
  {q:"La retenue de garantie courante est de :", o:["5 %","50 %","0,5 %","18 %"], r:0, e:"Libérée après la garantie de parfait achèvement."}
 ]},
{id:"chant-15", niv:2, titre:"Le suivi quotidien : réunions, comptes rendus et tableaux de bord", duree:45, contenu:`## La réunion de chantier hebdomadaire
- Participants : maître d'œuvre (qui la dirige), entreprises, parfois maître d'ouvrage et bureau de contrôle ;
- Ordre du jour fixe : **avancement** et planning, **qualité** (non-conformités, réserves), **sécurité**, points techniques (plans, choix de matériaux), approvisionnements, questions administratives ;
- **Compte rendu** diffusé sous 48 heures : pour chaque point, la **décision**, **qui** fait, **pour quand** ; il vaut accord s'il n'est pas contesté dans le délai prévu.

## Le compte rendu type
| N° | Sujet | Décision / action | Responsable | Échéance |
|---|---|---|---|---|
| 1 | Plans de ferraillage du R+1 | À transmettre visés | BET | Mardi |
| 2 | Retard des menuiseries | Relance du fournisseur, date ferme | Entreprise | Jeudi |
| 3 | Garde-corps de la trémie d'escalier | À poser avant toute intervention à l'étage | Chef de chantier | Immédiat |

## Mesurer l'avancement
L'avancement global se calcule en **pondérant** l'avancement de chaque lot par son poids dans le marché :
$$ avancement global = Σ (poids du lot × avancement du lot)
> [!exemple]
> Gros œuvre (40 % du marché) avancé à 80 % ; toiture (30 %) à 50 % ; finitions (20 %) à 10 % ; VRD (10 %) à 0 % → 0,4 × 80 + 0,3 × 50 + 0,2 × 10 + 0,1 × 0 = **49 %**.

## Les intempéries
Les jours de pluie qui empêchent réellement le travail (selon les seuils du marché : par exemple plus de 10 mm de pluie ou arrêt constaté) sont notés au **journal** et font l'objet d'une demande de **prolongation de délai** auprès du maître d'œuvre. Sans relevé contemporain, ils ne sont pas reconnus.

## Le tableau de bord du conducteur de travaux
| Domaine | Indicateurs |
|---|---|
| Délais | Avancement réel / prévu ; tâches critiques en retard ; jours d'intempéries |
| Coûts | Dépenses / budget ; prévision à terminaison ; travaux supplémentaires acceptés |
| Qualité | Non-conformités ouvertes et levées ; résultats d'essais |
| Sécurité | Accidents, presque-accidents, visites, causeries |
| Approvisionnements | Commandes en attente, ruptures |

## La communication
Avec le client (informer tôt des difficultés et des choix à faire), les voisins (nuisances, horaires), les équipes (objectifs de la semaine), l'administration. **Photos datées** et classées : mémoire et preuve.

> [!retenir]
> - Réunion hebdomadaire et compte rendu : décision, responsable, échéance.
> - Avancement global = Σ poids × avancement de chaque lot.
> - Intempéries notées au journal pour justifier une prolongation.
> - Tableau de bord : délais, coûts, qualité, sécurité, approvisionnements.`,
 exercices:[
  {t:"Avancement global", d:1, e:`Poids et avancements : terrassements et fondations 20 % (100 %) ; élévation 35 % (60 %) ; toiture 15 % (0 %) ; second œuvre 30 % (5 %). Calculer l'avancement global. Le planning prévoyait 55 % : conclure.`, c:`0,20 × 100 + 0,35 × 60 + 0,15 × 0 + 0,30 × 5 = 20 + 21 + 0 + 1,5 = **42,5 %**.
Retard de **12,5 points** par rapport au prévu (55 %) : analyser le chemin critique (élévation), renforcer les équipes et préparer la toiture.`},
  {t:"Rédiger un compte rendu", d:2, e:`Lors de la réunion : le BET doit envoyer les plans de la dalle haute ; l'électricien n'a pas posé les fourreaux du séjour ; le client hésite entre deux carrelages ; un ouvrier travaillait sans casque. Rédiger le tableau des décisions.`, c:`| N° | Sujet | Décision / action | Responsable | Échéance |
|---|---|---|---|---|
| 1 | Plans de la dalle haute | Transmettre les plans visés | BET | Lundi prochain |
| 2 | Fourreaux du séjour | Poser avant coulage, contrôle par le chef de chantier | Électricien | Avant jeudi |
| 3 | Choix du carrelage | Choisir sur échantillons (délai de commande 10 semaines) | Maître d'ouvrage | Vendredi |
| 4 | Port du casque | Rappel en causerie, sanction si récidive | Chef de chantier | Immédiat |`},
  {t:"Jours d'intempéries", d:1, e:`Le marché reconnaît comme jour d'intempérie une journée avec plus de 10 mm de pluie entraînant l'arrêt. En juin, le journal note 9 jours de pluie, dont 6 au-dessus de 10 mm avec arrêt constaté. Quelle prolongation demander ?`, c:`**6 jours** (ceux qui remplissent les deux conditions), justifiés par le journal de chantier et, si possible, les relevés météorologiques ; les 3 autres jours de pluie faible ne sont pas reconnus.`},
  {t:"Lire un tableau de bord", d:2, e:`Tableau de bord du mois : avancement réel 38 % / prévu 45 % ; dépenses 14 M / budget à date 12,6 M ; 4 non-conformités ouvertes ; 1 accident avec arrêt ; 2 commandes en retard (aciers, menuiseries). Quelles priorités pour le conducteur de travaux ?`, c:`1. **Sécurité** : analyse de l'accident et mesures immédiates ;
2. **Approvisionnements** : débloquer les aciers (chemin critique) et relancer les menuiseries ;
3. **Délais** : plan de rattrapage (renfort d'équipes sur les tâches critiques) ;
4. **Coûts** : dépenses supérieures de 11 % au budget à date alors que l'avancement est en retard : rechercher les causes (rendements, pertes, prix) ;
5. **Qualité** : lever les 4 non-conformités avant qu'elles ne soient cachées.`},
  {t:"Informer le client", d:1, e:`Le fournisseur de menuiseries annonce trois semaines de retard. Rédiger en quelques lignes le message à adresser au maître d'œuvre et au client.`, c:`« Le fournisseur des menuiseries aluminium nous informe d'un retard de livraison de 3 semaines (nouvelle date : … ). Pour limiter l'impact, nous avançons les enduits intérieurs et les réseaux, et nous poserons des protections provisoires aux baies. L'incidence sur la date de fin est estimée à … jours ; nous vous proposons de faire le point à la prochaine réunion. » — Message écrit, daté, avec les solutions proposées.`}
 ],
 quiz:[
  {q:"Un compte rendu de réunion doit préciser pour chaque action :", o:["Le responsable et l'échéance","La couleur du stylo","Le prix du ciment","Rien"], r:0, e:"Qui fait quoi pour quand."},
  {q:"Avancement global avec un lot de 50 % du marché à 40 % et un lot de 50 % à 80 % :", o:["60 %","120 %","40 %","80 %"], r:0, e:"0,5 × 40 + 0,5 × 80."},
  {q:"Les jours d'intempéries doivent être :", o:["Notés au journal au moment où ils surviennent","Inventés à la fin","Ignorés","Payés double"], r:0, e:"Preuve contemporaine."},
  {q:"Le tableau de bord sert à :", o:["Suivre délais, coûts, qualité et sécurité","Dessiner les plans","Fixer la TVA","Commander le repas"], r:0, e:"Piloter le chantier."},
  {q:"Les photos datées du chantier servent de :", o:["Mémoire et de preuve","Décoration","Publicité seulement","Rien"], r:0, e:"Traçabilité."}
 ]},
{id:"chant-7", niv:3, titre:"Management de projet : équipes, réunions et litiges", duree:50, contenu:`## Qui fait quoi ?
- **Maître d'ouvrage** : le client, qui finance et décide ;
- **Maître d'œuvre** : architecte et bureaux d'études, qui conçoivent et contrôlent l'exécution ;
- **Entreprise** générale et ses **sous-traitants** ;
- **Bureau de contrôle** : vérifie la solidité et la sécurité ;
- **OPC** (ordonnancement, pilotage, coordination) sur les gros projets multi-lots.

## Manager les équipes
- **Fixer des objectifs** clairs et mesurables (« 30 m² d'agglos par jour pour l'équipe A ») ;
- **Déléguer** au bon niveau (le chef d'équipe organise sa tâche) et **contrôler** les résultats ;
- **Communiquer** : briefing du matin, explications des plans, retours sur la qualité ;
- **Motiver** : reconnaissance, primes de rendement liées à la qualité, conditions de travail correctes (eau, ombre, paie régulière) ;
- **Former** : accueil sécurité, compagnonnage des jeunes ;
- **Gérer les conflits** tôt, en écoutant les deux parties et en s'appuyant sur les faits.

## Le tableau de bord du chef de projet
| Domaine | Indicateur |
|---|---|
| Délais | Avancement réel / prévu, tâches critiques en retard |
| Coûts | Dépenses engagées / budget, prévision à terminaison |
| Qualité | Non-conformités ouvertes et levées |
| Sécurité | Accidents, presque-accidents, visites |

## Prévenir les litiges
La **traçabilité** évite la plupart des conflits : journal de chantier, photos datées, procès-verbaux, échanges écrits. Toute modification passe par un **ordre de service** ou un **avenant** **avant** exécution.
> [!exemple] Pénalités de retard
> Marché de 180 millions F, pénalité de 1/1 000 du marché par jour calendaire : **180 000 F par jour**. 20 jours de retard coûtent **3,6 millions F** (dans la limite du plafond, souvent 5 à 10 % du marché).

## Régler un différend
Discussion technique → **mise en demeure** écrite → conciliation ou **expertise** → arbitrage ou tribunal. Plus le dossier est documenté, plus vite il se règle ; une solution négociée est presque toujours moins coûteuse qu'un procès.

> [!retenir]
> - Objectifs clairs, délégation, contrôle, communication, motivation, formation.
> - Traçabilité écrite : OS, avenants, PV, journal, photos.
> - Pénalités = taux × montant × jours (plafonnées).
> - Litige : discussion, mise en demeure, conciliation, expertise, arbitrage ou tribunal.`,
 exercices:[
  {t:"Calcul de pénalités", d:1, e:`Marché de 95 M F ; pénalité de 1/2 000 du montant par jour calendaire, plafonnée à 5 %. Retard : 35 jours. Calculer la pénalité. Et pour 120 jours ?`, c:`Par jour : 95 000 000 / 2 000 = **47 500 F** ; 35 jours : **1 662 500 F**.
120 jours : 5 700 000 F, mais plafond 5 % × 95 M = **4 750 000 F** → pénalité plafonnée à **4,75 M F**.`},
  {t:"Fixer des objectifs", d:1, e:`Transformer en objectifs mesurables : a) « il faut aller plus vite sur la maçonnerie » ; b) « soyez plus prudents » ; c) « faites attention au ciment ».`, c:`a) « L'équipe A pose **30 m²** d'agglos par jour cette semaine, joints décalés et aplomb contrôlé » ;
b) « **100 %** des ouvriers en hauteur avec harnais attaché ; garde-corps posés sur toutes les trémies avant vendredi » ;
c) « **7 sacs par m³** de béton, comptés à chaque gâchée ; inventaire du ciment chaque samedi, pertes < 5 % ».`},
  {t:"Gérer un conflit d'équipe", d:2, e:`Deux chefs d'équipe se disputent la bétonnière chaque matin ; le coulage des poteaux prend du retard. Que faire ?`, c:`Écouter les deux chefs, constater le **problème d'organisation** (une ressource partagée sans règle), puis **planifier** l'utilisation de la bétonnière (créneaux horaires selon le planning, priorité aux tâches critiques), éventuellement **louer une seconde bétonnière** si le besoin est réel ; afficher le planning de la semaine et le rappeler au briefing du matin.`},
  {t:"Dossier en cas de litige", d:2, e:`Le maître d'ouvrage refuse de payer 2,4 M F de travaux supplémentaires (un mur de soutènement ajouté). Quelles pièces l'entreprise doit-elle réunir ?`, c:`L'**ordre de service** ou l'avenant signé (s'il existe), le **devis** accepté, les **comptes rendus** de réunion mentionnant la demande, les **attachements** et métrés contradictoires, le **journal** de chantier, les **photos datées**, les échanges écrits (courriels, lettres). Sans écrit préalable, la position de l'entreprise est fragile : d'où la règle « pas de travaux sans OS ».`},
  {t:"Motiver sans dégrader la qualité", d:2, e:`Une entreprise veut payer une prime de rendement à ses maçons. Quel risque ? Comment construire la prime ?`, c:`Risque : vitesse au détriment de la **qualité** (aplomb, joints, chaînages) et de la **sécurité**.
Construction : prime liée au rendement **et** à des critères de qualité contrôlés (aucune reprise, contrôles conformes) et de sécurité (EPI portés, aucun accident), versée après **réception** de la tâche par le chef de chantier.`}
 ],
 quiz:[
  {q:"Un bon objectif d'équipe est :", o:["Clair et mesurable","Vague","Secret","Impossible à atteindre"], r:0, e:"30 m²/jour, etc."},
  {q:"Pénalité de 1/1 000 sur un marché de 50 M pour 10 jours :", o:["500 000 F","50 000 F","5 000 000 F","5 000 F"], r:0, e:"50 000 × 10."},
  {q:"La meilleure prévention des litiges est :", o:["La traçabilité écrite","La discussion orale seule","L'oubli","Le silence"], r:0, e:"Écrits datés et signés."},
  {q:"Avant le tribunal, on passe généralement par :", o:["La mise en demeure et la conciliation","La démolition","La grève","Rien"], r:0, e:"Règlement amiable."},
  {q:"L'OPC sert à :", o:["Coordonner les entreprises d'un gros projet","Peindre","Calculer les aciers","Vendre les logements"], r:0, e:"Ordonnancement, pilotage, coordination."}
 ]},
{id:"chant-8", niv:3, titre:"Méthodes de construction : coffrages, rotations et cadences", duree:50, contenu:`## Choisir ses coffrages
| Coffrage | Nombre de réemplois | Usage |
|---|---|---|
| Bois et contreplaqué | 3 à 8 | Maisons, formes variées |
| Coffrages modulaires métalliques | 50 à 100 et plus | Poteaux, voiles, ouvrages répétitifs |
| Banches et tables | plusieurs centaines | Immeubles à étages identiques |
Plus un ouvrage est **répétitif**, plus un coffrage industriel devient rentable : on compare le **coût par utilisation** (prix / nombre de réemplois + entretien + main-d'œuvre de mise en place).
> [!exemple] Coût par utilisation
> Contreplaqué à 3 000 F/m², 5 réemplois → **600 F/m²** par utilisation ; panneau métallique à 45 000 F/m², 100 réemplois + 100 F d'entretien → **550 F/m²**, et une main-d'œuvre plus rapide : rentable sur un immeuble, pas sur une maison.

## Les rotations d'étais
Les étais d'un plancher restent en place **21 à 28 jours**. Si l'on coule un plancher tous les 10 jours, il faut des étais pour environ **3 niveaux** à la fois (étaiement de reprise), plus un jeu en préparation.

## Calculer une cadence
> [!exemple] Structure d'un étage d'immeuble
> 12 m³ de béton armé de poteaux et poutres à **25 heures de main-d'œuvre par m³** (coffrage, ferraillage, coulage, décoffrage) : 300 heures.
> Équipe de 6 ouvriers × 8 h = 48 h par jour → 300 / 48 = **6,25 jours** pour les poteaux et les poutres de l'étage, auxquels s'ajoute le plancher.

## Le bétonnage
- **Bétonnière** de 350 L : environ 2,5 m³ par heure de béton effectivement coulé ;
- **Béton prêt à l'emploi + pompe** : 20 à 40 m³ par heure, idéal pour couler une dalle d'un seul tenant.

## Accélérer sans risque
- **Préfabriquer** ce qui peut l'être : poutrelles, linteaux, cages d'armatures montées au sol, escaliers ;
- Faire travailler les équipes **en parallèle** sur des zones différentes (**travail à la chaîne** : coffreurs, ferrailleurs, bétonneurs se succèdent de zone en zone) ;
- Ne jamais réduire les délais de **décoffrage** et de **cure** pour gagner du temps.

> [!retenir]
> - Coffrage : comparer le coût par utilisation ; industriel si répétitif.
> - Étais : 21 à 28 jours → plusieurs jeux en rotation.
> - Cadence = heures nécessaires / heures disponibles par jour.
> - Préfabriquer, paralléliser, mais respecter décoffrage et cure.`,
 exercices:[
  {t:"Jeux d'étais", d:2, e:`On coule un plancher tous les 8 jours ; les étais doivent rester 24 jours sous chaque plancher ; il faut en plus un jeu en préparation. Combien de jeux d'étais (d'un plancher) faut-il ?`, c:`Planchers simultanément étayés : 24 / 8 = **3** ; + 1 jeu en préparation → **4 jeux** d'étais.`},
  {t:"Cadence d'un étage", d:2, e:`Un étage comprend 15 m³ de poteaux, poutres et voiles (28 h de main-d'œuvre par m³) et 180 m² de plancher (1,2 h/m²). L'équipe compte 8 ouvriers travaillant 8 h par jour. Calculer la durée d'un étage.`, c:`Heures : 15 × 28 + 180 × 1,2 = 420 + 216 = **636 h** ; capacité : 8 × 8 = 64 h/j → 636 / 64 = **9,9 jours** → cycle d'étage d'environ **10 jours**.`},
  {t:"Choisir un coffrage", d:2, e:`Pour 40 poteaux identiques par étage sur 8 étages, comparer : coffrage bois (4 000 F/m², 6 réemplois) et coffrage métallique (60 000 F/m², 120 réemplois, entretien 150 F/m² par utilisation). Coût par m² et par utilisation ?`, c:`Bois : 4 000 / 6 = **667 F/m²** par utilisation (et il faudra le renouveler ~ 53 fois sur 320 utilisations).
Métal : 60 000 / 120 + 150 = **650 F/m²**, avec des parements plus lisses et une pose plus rapide → **métal** préférable pour 320 utilisations.`},
  {t:"Travail à la chaîne", d:3, e:`Trois équipes (coffrage 3 jours, ferraillage 2 jours, coulage 1 jour) traitent successivement 4 zones identiques d'un plancher. Calculer la durée totale si chaque équipe passe à la zone suivante dès qu'elle a fini (sans attendre), en respectant l'ordre des tâches dans chaque zone.`, c:`Coffrage (goulot à 3 jours) : zones finies aux jours 3, 6, 9, 12.
Ferraillage : zone 1 : jours 4-5 ; zone 2 : 7-8 ; zone 3 : 10-11 ; zone 4 : 13-14.
Coulage : zone 1 : jour 6 ; zone 2 : 9 ; zone 3 : 12 ; zone 4 : **15**.
Durée totale : **15 jours**, au lieu de 4 × (3 + 2 + 1) = 24 jours en travaillant zone par zone.`},
  {t:"Préfabriquer les linteaux", d:1, e:`Un chantier de 20 logements comporte 260 linteaux identiques. Quels avantages à les préfabriquer au sol ?`, c:`Coffrages simples et réutilisés au sol, **qualité** régulière (vibration, enrobage contrôlés), **gain de temps** (pose directe sur la maçonnerie, pas d'étaiement), travail en sécurité au sol, possibilité de les fabriquer à l'avance pendant les fondations.`}
 ],
 quiz:[
  {q:"Un coffrage métallique est rentable :", o:["Pour des ouvrages répétitifs","Pour un ouvrage unique","Jamais","Seulement pour les fondations"], r:0, e:"Nombreux réemplois."},
  {q:"Durée pour 300 h de travail avec 6 ouvriers à 8 h/j :", o:["6,25 jours","50 jours","3 jours","1 jour"], r:0, e:"300/48."},
  {q:"Les étais d'un plancher restent en général :", o:["21 à 28 jours","1 jour","1 an","Ils sont inutiles"], r:0, e:"Résistance du béton."},
  {q:"Pour accélérer sans risque, on peut :", o:["Préfabriquer et travailler en parallèle","Réduire la cure","Décoffrer plus tôt","Ajouter de l'eau au béton"], r:0, e:"Sans toucher aux délais techniques."},
  {q:"Coût par utilisation d'un coffrage de 3 000 F/m² réemployé 5 fois :", o:["600 F/m²","15 000 F/m²","3 000 F/m²","60 F/m²"], r:0, e:"3 000/5."}
 ]},
{id:"chant-9", niv:3, titre:"Gestion des risques, HSE et sinistres", duree:50, contenu:`## Les risques majeurs du chantier
1. **Chutes de hauteur** (planchers sans garde-corps, échafaudages, toitures) : première cause d'accidents graves ;
2. **Effondrement** de fouilles de plus de 1,30 m non blindées, d'étaiements ou de murs ;
3. **Électrocution** (câbles abîmés, coffrets sans différentiel, lignes aériennes) ;
4. **Engins et charges suspendues** (grue, camions, pelles en marche arrière) ;
5. Coupures, chutes d'objets, poussières (silice), bruit, **chaleur**, produits chimiques (ciment : brûlures et eczéma).

## Évaluer les risques
On classe chaque risque selon sa **probabilité** (P, de 1 à 4) et sa **gravité** (G, de 1 à 4) : **criticité C = P × G**. On traite en priorité les risques les plus critiques, en suivant l'ordre des mesures : **supprimer** le risque → **protéger collectivement** → **organiser** (procédures, formation) → **protéger individuellement** (EPI).

## Organiser la prévention
- **Plan de sécurité** propre au chantier (PPSPS) et plan d'installation ;
- **Accueil sécurité** de chaque nouvel ouvrier, causeries régulières (« quart d'heure sécurité »), secouristes formés, trousse de secours ;
- **Vérifications** des échafaudages, engins, appareils de levage, installations électriques ;
- **Analyse** de chaque accident et presque-accident (arbre des causes) pour éviter qu'il se reproduise.

## Mesurer : taux de fréquence et de gravité
$$ TF = nombre d'accidents avec arrêt × 1 000 000 / heures travaillées
$$ TG = jours perdus × 1 000 / heures travaillées
> [!exemple]
> 3 accidents avec arrêt, 42 jours perdus, 120 000 heures travaillées : **TF = 25** ; **TG = 0,35**.

## L'environnement
Tri des déchets (gravats, bois, métaux, emballages), arrosage contre la poussière, bacs de lavage des bétonnières (pas de laitance dans les caniveaux), stockage des huiles et carburants sur rétention, respect des horaires pour le bruit.

## Assurances et sinistres
- **Tous risques chantier (TRC)** : dommages à l'ouvrage pendant les travaux (effondrement, incendie, inondation, vol selon contrat) ;
- **Responsabilité civile** de l'entreprise : dommages causés aux tiers (voisins, passants) ;
- **Garantie décennale** après réception pour les désordres graves.
En cas de sinistre : **sécuriser**, porter secours, photographier, faire constater, **déclarer dans le délai** prévu au contrat.

> [!attention] Plan d'urgence
> Afficher les numéros d'urgence (en Côte d'Ivoire : **180** pompiers, **185** SAMU), l'itinéraire vers le centre de santé le plus proche et le nom des secouristes.

> [!retenir]
> - Criticité = probabilité × gravité ; supprimer, protéger collectivement, organiser, puis EPI.
> - TF = accidents × 10⁶ / heures ; TG = jours perdus × 10³ / heures.
> - TRC, responsabilité civile, décennale ; déclarer les sinistres dans les délais.`,
 exercices:[
  {t:"Taux de fréquence et de gravité", d:1, e:`Un chantier a totalisé 85 000 heures de travail, avec 2 accidents avec arrêt et 15 jours perdus. Calculer TF et TG. Comparer avec un chantier à TF = 25 et TG = 0,35.`, c:`TF = 2 × 1 000 000 / 85 000 = **23,5** ; TG = 15 × 1 000 / 85 000 = **0,18**.
Fréquence voisine du second chantier, mais accidents **moins graves** (TG deux fois plus faible).`},
  {t:"Matrice des risques", d:2, e:`Évaluer (P et G de 1 à 4) et classer : a) chute depuis une dalle sans garde-corps (P 3, G 4) ; b) coupure à la main en façonnant les aciers (P 4, G 1) ; c) effondrement d'une tranchée de 2 m non blindée (P 2, G 4) ; d) électrocution par rallonge dénudée (P 2, G 4) ; e) mal de dos en portant les sacs (P 4, G 2). Quelles priorités ?`, c:`Criticités : a) **12** ; b) 4 ; c) **8** ; d) **8** ; e) 8.
Priorité 1 : **garde-corps** sur toutes les rives et trémies (a). Ensuite : **blindage/talutage** (c), **remplacement des rallonges et différentiel 30 mA** (d), **manutention** (sacs à deux, brouettes, palettes au plus près) (e). Puis gants pour le façonnage (b).`},
  {t:"Arbre des causes", d:2, e:`Un manœuvre est tombé d'un échafaudage en bois monté sur des fûts, sans garde-corps, en portant un seau de mortier. Identifier au moins quatre causes et une mesure pour chacune.`, c:`- Échafaudage **non conforme** (fûts instables) → échafaudage métallique ou tréteaux conformes, vérifiés ;
- **Absence de garde-corps** → garde-corps et plinthes sur les plateaux > 1 m ;
- **Port de charge** en montant → poulie ou monte-charge, approvisionnement par un autre ouvrier ;
- **Absence de formation/contrôle** → accueil sécurité, vérification par le chef de chantier avant usage.`},
  {t:"Déclarer un sinistre", d:1, e:`Une nuit, un orage fait s'effondrer un mur de clôture en cours de construction sur la voiture d'un voisin. Quelles démarches ? Quelles assurances sont concernées ?`, c:`Sécuriser le site (balisage, étaiement), **photographier**, prévenir le voisin, faire **constater** (constat amiable ou huissier), **déclarer** le sinistre à l'assureur dans le délai contractuel.
Assurances : **TRC** pour le mur (dommage à l'ouvrage) et **responsabilité civile** de l'entreprise pour la voiture du voisin (dommage à un tiers).`},
  {t:"Chaleur et santé", d:2, e:`Par 35 °C, un ouvrier présente des vertiges et des maux de tête vers 14 h. Que faire immédiatement ? Quelles mesures pour l'organisation du travail ?`, c:`Immédiatement : le mettre **à l'ombre**, le faire boire de l'eau fraîche par petites gorgées, le rafraîchir, appeler les secours (**185**) si son état ne s'améliore pas rapidement ou s'il est confus.
Organisation : **eau potable** en quantité, **pauses** à l'ombre, travaux pénibles **tôt le matin**, rotation des tâches exposées, casques ventilés, attention aux nouveaux arrivants.`}
 ],
 quiz:[
  {q:"La criticité d'un risque se calcule par :", o:["Probabilité × gravité","Probabilité + coût","Gravité / durée","Le nombre d'ouvriers"], r:0, e:"Classement des priorités."},
  {q:"TF pour 2 accidents et 100 000 heures :", o:["20","2","200","0,2"], r:0, e:"2 × 10⁶ / 10⁵."},
  {q:"L'ordre des mesures de prévention commence par :", o:["Supprimer le risque","Distribuer des EPI","Afficher une consigne","Rien"], r:0, e:"Puis protection collective."},
  {q:"L'assurance qui couvre les dommages à l'ouvrage pendant les travaux est :", o:["La TRC","La décennale","L'assurance-vie","Aucune"], r:0, e:"Tous risques chantier."},
  {q:"Numéro des pompiers en Côte d'Ivoire :", o:["180","112","17","911"], r:0, e:"185 pour le SAMU."}
 ]},
{id:"chant-16", niv:3, titre:"Piloter par la valeur acquise : délais et coûts", duree:50, contenu:`## Pourquoi la valeur acquise ?
Comparer seulement les dépenses au budget ne suffit pas : un chantier qui a dépensé moins que prévu peut être… simplement en retard. La méthode de la **valeur acquise** croise **trois courbes** pour savoir à la fois où l'on en est en **délai** et en **coût**.

## Les trois grandeurs (à une date donnée)
| Grandeur | Définition |
|---|---|
| **Valeur planifiée** (VP) | Budget des travaux qui **devaient** être faits à cette date |
| **Valeur acquise** (VA) | Budget des travaux **réellement** faits (avancement × budget) |
| **Coût réel** (CR) | Ce que ces travaux ont **réellement coûté** |
Le budget total à l'achèvement est noté **BAC**.

## Les écarts et les indices
- Écart de délai : **ED = VA − VP** (négatif = retard) ; indice **SPI = VA / VP** ;
- Écart de coût : **EC = VA − CR** (négatif = dépassement) ; indice **CPI = VA / CR** ;
- **Estimation à l'achèvement** : **EAA ≈ BAC / CPI** (si l'efficacité reste la même) ;
- Durée estimée ≈ durée prévue / SPI.

> [!exemple] Chantier de 60 M F prévu en 10 mois, fin du mois 4
> VP = 24 M ; VA = 20 M ; CR = 22 M.
> ED = 20 − 24 = **− 4 M** (retard) ; SPI = 20 / 24 = **0,83**.
> EC = 20 − 22 = **− 2 M** (dépassement) ; CPI = 20 / 22 = **0,91**.
> EAA = 60 / 0,91 ≈ **66 M** (6 M de dépassement prévisible) ; durée ≈ 10 / 0,83 = **12 mois**.
> Le chantier est **en retard et trop cher** : il faut agir (organisation, rendements, approvisionnements) avant que les écarts ne s'aggravent.

## La courbe en S
En traçant VP, VA et CR cumulés en fonction du temps, on obtient des courbes en **S** (démarrage lent, accélération, ralentissement des finitions). L'écart vertical entre VA et VP montre le retard ou l'avance, celui entre VA et CR le dépassement ou l'économie.

## Les bonnes pratiques
- Mesurer l'avancement **physiquement** (métrés, pourcentages par lot) et non d'après les dépenses ;
- Mettre à jour chaque mois, analyser les causes des écarts, décider d'actions et suivre leurs effets ;
- Présenter les résultats simplement au maître d'ouvrage et à la direction (indices et courbes).

> [!retenir]
> - VP (prévu), VA (fait, au prix du budget), CR (coût réel).
> - SPI = VA/VP (délai) ; CPI = VA/CR (coût) ; < 1 = défavorable.
> - EAA ≈ BAC / CPI ; durée ≈ durée prévue / SPI.`,
 exercices:[
  {t:"Indices d'un chantier", d:2, e:`Budget 60 M F sur 10 mois. Fin du mois 6 : VP = 36 M ; VA = 33 M ; CR = 31 M. Calculer ED, EC, SPI, CPI et l'estimation à l'achèvement. Interpréter.`, c:`ED = 33 − 36 = **− 3 M** ; SPI = 33 / 36 = **0,92** → **retard** (≈ 8 %).
EC = 33 − 31 = **+ 2 M** ; CPI = 33 / 31 = **1,06** → **économie** : les travaux réalisés coûtent moins que prévu.
EAA = 60 / 1,06 ≈ **56,4 M**. Le chantier est rentable mais en retard : on peut investir une partie de l'économie dans un renfort d'équipes pour rattraper le délai.`},
  {t:"Calculer la valeur acquise", d:1, e:`Lots et budgets : gros œuvre 30 M (avancement 70 %) ; toiture 8 M (25 %) ; second œuvre 22 M (0 %). Calculer la valeur acquise.`, c:`VA = 30 × 0,70 + 8 × 0,25 + 22 × 0 = 21 + 2 = **23 M F**.`},
  {t:"Durée prévisible", d:1, e:`Un chantier prévu en 14 mois présente un SPI de 0,875 au mois 6. Estimer la durée totale si rien ne change.`, c:`Durée ≈ 14 / 0,875 = **16 mois** (2 mois de retard).`},
  {t:"Lire les indices", d:2, e:`Interpréter chaque situation : a) SPI = 1,05 ; CPI = 0,90 ; b) SPI = 0,85 ; CPI = 1,10 ; c) SPI = 0,80 ; CPI = 0,85.`, c:`a) **En avance mais trop cher** (on accélère peut-être à coup d'heures supplémentaires coûteuses) ;
b) **En retard mais économique** (peut-être des équipes insuffisantes) ;
c) **En retard et trop cher** : situation critique, plan d'action urgent (organisation, rendements, approvisionnements, reprises).`},
  {t:"Le piège des dépenses", d:2, e:`Un conducteur de travaux se réjouit : « au mois 5, nous avons dépensé 18 M pour un budget prévu à date de 25 M ». L'avancement réel est de 30 % d'un budget total de 60 M. Qu'en penser ?`, c:`VA = 0,30 × 60 = **18 M** ; VP = 25 M ; CR = 18 M.
SPI = 18 / 25 = **0,72** → fort **retard** ; CPI = 18 / 18 = **1,00** → coûts conformes.
La « sous-consommation » du budget ne traduit pas une économie mais un **retard de 28 %** : il faut agir sur l'avancement.`}
 ],
 quiz:[
  {q:"La valeur acquise est :", o:["Le budget des travaux réellement faits","Ce qu'on a dépensé","Ce qu'on devait faire","Le bénéfice"], r:0, e:"Avancement × budget."},
  {q:"Un SPI inférieur à 1 indique :", o:["Un retard","Une avance","Une économie","Un bénéfice"], r:0, e:"VA < VP."},
  {q:"CPI = 0,8 signifie :", o:["Les travaux coûtent plus que prévu","Les travaux coûtent moins que prévu","Le chantier est en avance","Rien"], r:0, e:"VA < CR."},
  {q:"Estimation à l'achèvement pour BAC = 50 M et CPI = 0,9 :", o:["≈ 55,6 M","45 M","50 M","90 M"], r:0, e:"50 / 0,9."},
  {q:"L'avancement doit être mesuré :", o:["Physiquement (métrés, pourcentages)","D'après les dépenses","Au hasard","Seulement à la fin"], r:0, e:"Sinon on confond retard et économie."}
 ]},
{id:"chant-17", niv:3, titre:"Étude de cas : préparer et piloter le chantier d'une villa", duree:70, contenu:`## Le projet
La villa de plain-pied à toiture-terrasse étudiée en Métré (11,30 × 8,30 m) : marché de **19 832 641 F HT** (23,4 M F TTC), délai contractuel de **5 mois**, démarrage en début de saison sèche. L'entreprise applique un coefficient de vente K = 1,355 → **déboursé sec objectif ≈ 14,64 M F**.

## 1. Le planning
Le planning du chapitre « Planning » (11 tâches) donne **90 jours ouvrés** ; avec 5,5 jours de travail par semaine et 15 % d'aléas : ≈ **19 semaines**, compatibles avec les 5 mois du marché. Chemin critique : installation → terrassements → fondations → élévation → dalle et étanchéité → enduits → carrelage → peinture → réception.
Chiffre d'affaires moyen : 19 832 641 / 90 ≈ **220 000 F HT par jour ouvré** : chaque jour de retard coûte aussi en frais fixes de chantier.

## 2. Les équipes
Élévation (tâche D) : 17,58 m³ de béton armé à 25 h/m³ = 440 h ; 140,72 m² de maçonnerie à 1,6 h/m² (binôme) = 225 h → **≈ 665 heures**. Avec 8 ouvriers (64 h/jour), 665 / 64 ≈ **10,4 jours** : la durée de 25 jours du planning laisse une marge confortable, qu'on peut utiliser pour **réduire l'effectif** ou **raccourcir** le chantier.

## 3. Les approvisionnements
Ciment : **324 sacs** répartis en trois phases (93 / 141 / 89 sacs, voir Métré) ; sable 31,5 m³ ; gravier 27,7 m³ ; aciers 2,1 t ; 2 173 agglos ; carrelage, menuiseries et équipements commandés dès la préparation (délais longs).

## 4. La trésorerie
Avance de démarrage 10 % (1,98 M), situations mensuelles payées le mois suivant à 85 % (retenue 5 % et remboursement de l'avance 10 %), déboursés = montant facturé / 1,355 :
| Mois | Travaux (M F HT) | Déboursés | Encaissements | Trésorerie fin de mois |
|---|---|---|---|---|
| 0 (avance) | — | — | 1,98 | 1,98 |
| 1 : installation, terrassements, fondations | 4,17 | 3,08 | 0 | **− 1,09** |
| 2 : élévation, maçonnerie | 6,13 | 4,53 | 3,54 | **− 2,08** |
| 3 : toiture-terrasse, enduits, revêtements | 5,10 | 3,77 | 5,21 | **− 0,63** |
| 4 : menuiseries, électricité, plomberie, peinture | 4,43 | 3,27 | 4,34 | **+ 0,44** |
| 5 : encaissement de la dernière situation | — | — | 3,76 | **+ 4,20** |
Besoin de financement maximal : **≈ 2,1 M F** au mois 2 ; la retenue de garantie (≈ 1 M) sera récupérée un an après la réception.

## 5. Les risques principaux et leurs parades
| Risque | Parade |
|---|---|
| Retard des menuiseries aluminium | Commande sur plans en préparation, précadres |
| Pluies précoces | Démarrage en saison sèche, toiture-terrasse prioritaire, bâches |
| Mauvais sol découvert en fouille | Réception des fonds de fouille, attachement, avis du géotechnicien |
| Pertes et vols de ciment | Magasin fermé, inventaires hebdomadaires |
| Chute de hauteur au coulage de la dalle | Garde-corps périphériques, trémies protégées |

> [!retenir]
> Préparer (planning, équipes, approvisionnements, trésorerie, risques), puis piloter chaque semaine (avancement, coûts, qualité, sécurité) : c'est le métier du conducteur de travaux.`,
 exercices:[
  {t:"Vérifier la durée de l'élévation", d:2, e:`L'élévation représente 17,58 m³ de béton armé (25 h/m³) et 140,72 m² de maçonnerie (1,6 h/m² pour le binôme). Combien de jours avec 6 ouvriers ? avec 10 ouvriers ? (8 h par jour)`, c:`Heures : 17,58 × 25 + 140,72 × 1,6 = 439,5 + 225,2 = **664,7 h**.
6 ouvriers (48 h/j) : 664,7 / 48 = **13,8 → 14 jours** ; 10 ouvriers (80 h/j) : **8,3 → 9 jours** (à condition que les approvisionnements et le matériel suivent).`},
  {t:"Gagner trois semaines", d:2, e:`Le client voudrait emménager 3 semaines (≈ 16 jours ouvrés) plus tôt. Proposer des actions sur le chemin critique, à partir du planning (90 jours) et de l'exercice précédent.`, c:`- **Élévation** : passer de 25 à 14 jours avec 6 ouvriers (− 11 jours) ;
- **Enduits** : ajouter un binôme (14 → 10 jours, − 4 jours) ;
- **Carrelage** : deux équipes par zones (10 → 6 jours, − 4 jours), en vérifiant le séchage ;
Gain ≈ 19 jours > 16 jours visés, sans toucher aux délais techniques (décoffrage, cure, séchage). On vérifie que F (réseaux) et H (menuiseries) ne deviennent pas critiques.`},
  {t:"Trésorerie sans avance", d:3, e:`Reprendre le tableau de trésorerie sans avance de démarrage : il n'y a alors plus de remboursement d'avance, et les situations sont encaissées à 95 % (retenue de garantie de 5 % seulement). Calculer la trésorerie de fin de mois et le besoin de financement maximal.`, c:`| Mois | Déboursés | Encaissements (95 % du mois précédent) | Trésorerie |
|---|---|---|---|
| 1 | 3,08 | 0 | **− 3,08** |
| 2 | 4,53 | 3,96 | **− 3,64** |
| 3 | 3,77 | 5,83 | **− 1,58** |
| 4 | 3,27 | 4,85 | **0,00** |
| 5 | 0 | 4,21 | **+ 4,20** |
Besoin maximal : **≈ 3,6 M F** au mois 2, contre 2,1 M avec l'avance : l'avance de démarrage est précieuse pour une petite entreprise ; à défaut, il faut négocier un découvert bancaire.`},
  {t:"Point mensuel", d:2, e:`Fin du mois 2 : travaux prévus cumulés (VP) 10,30 M ; avancement réel valorisé (VA) 9,10 M ; déboursés réels 7,20 M, alors que le déboursé objectif de ces travaux était 9,10 / 1,355 = 6,72 M. Commenter le délai et le coût.`, c:`Délai : SPI = 9,10 / 10,30 = **0,88** → retard d'environ 12 %.
Coût : déboursés réels 7,20 M pour un objectif de 6,72 M → **dépassement de 0,48 M (7 %)** : la marge prévue se réduit.
Actions : analyser les rendements et les pertes de matériaux de l'élévation, renforcer les équipes sur le chemin critique, surveiller la consommation de ciment et d'aciers.`},
  {t:"Préparer la réception", d:1, e:`À deux semaines de la fin, lister les actions du conducteur de travaux pour une réception réussie.`, c:`Faire une **pré-réception** interne (liste des défauts) et les corriger ; réaliser les **essais** (étanchéité, pression des réseaux, électricité, fonctionnement des équipements) ; nettoyer le chantier et replier l'installation ; préparer le **DOE** (plans conformes, notices, PV d'essais) ; organiser la visite de réception avec le maître d'œuvre et le client, puis lever rapidement les **réserves**.`}
 ],
 quiz:[
  {q:"Le déboursé sec objectif d'un marché de 20 M avec K = 1,25 vaut :", o:["16 M","25 M","20 M","1,25 M"], r:0, e:"20 / 1,25."},
  {q:"Pour raccourcir un chantier, on agit sur :", o:["Les tâches du chemin critique","Les tâches à grande marge","La cure du béton","Le délai de séchage"], r:0, e:"Seules elles décident de la fin."},
  {q:"Le besoin de financement est maximal en général :", o:["Au cœur du chantier, quand les dépenses sont fortes","Le premier jour","Après la réception","Jamais"], r:0, e:"Décalage des paiements."},
  {q:"Le DOE est remis :", o:["À la réception","Au démarrage","Jamais","Avant le permis"], r:0, e:"Dossier des ouvrages exécutés."},
  {q:"Une marge de 15 % pour aléas sur 90 jours ouvrés donne environ :", o:["104 jours","90 jours","75 jours","150 jours"], r:0, e:"90 × 1,15."}
 ]}
]});
