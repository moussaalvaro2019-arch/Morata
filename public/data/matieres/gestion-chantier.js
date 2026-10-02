A.addMatiere({
 id:'chant', titre:'Organisation et gestion de chantier', court:'Gestion chantier', groupe:'gest', icone:'clip', couleur:'#B8700A', niveau:'Intermédiaire', heures:24, ordre:1, prerequis:['tech'],
 resume:"Documents du marché, installation de chantier, planification, rendements, gestion des ressources et approvisionnements, qualité, sécurité, environnement et suivi financier.",
 objectifs:["Connaître les pièces d'un marché et les documents de chantier","Organiser l'installation de chantier","Établir un planning à partir des quantités et des rendements","Gérer main-d'œuvre, matériel et approvisionnements","Appliquer les règles de qualité, de sécurité et de suivi financier"],
 applications:["Préparer l'ouverture d'un chantier","Planifier une maison ou un petit immeuble","Tenir le journal et les réunions de chantier","Établir une situation de travaux"],
 chapitres:[
{id:'chant-1', titre:'Les documents du marché et du chantier', duree:25, contenu:`## Les pièces du marché
| Document | Contenu |
|---|---|
| **Acte d'engagement** | L'engagement de l'entreprise : montant, délai |
| **CCAP** (clauses administratives particulières) | Règles administratives et financières : pénalités, paiements, retenue de garantie, révision des prix |
| **CCTP** (clauses techniques particulières) | Description technique des ouvrages : matériaux, dosages, normes, mise en œuvre |
| **BPU** (bordereau des prix unitaires) | Prix de chaque ouvrage élémentaire |
| **DQE** (devis quantitatif et estimatif) | Quantités × prix unitaires = montant du marché |
| **Plans** | Architecture, structure, réseaux |
| **Planning contractuel** | Délais et jalons |

## Les documents de chantier
- **Ordre de service (OS)** : décision écrite du maître d'œuvre (démarrage, travaux modificatifs, arrêt).
- **Compte rendu de réunion** hebdomadaire : décisions, avancement, actions à mener, responsables, délais.
- **Journal de chantier** : effectifs, météo, livraisons, incidents, essais.
- **Attachements** : relevés contradictoires des quantités réellement exécutées (surtout pour les ouvrages enterrés ou cachés).
- **Procès-verbaux** (PV) : réception des fonds de fouille, des ferraillages, essais, réception des travaux.
- **Plan d'installation de chantier** et **PPSPS** (plan de sécurité).

> [!retenir]
> « Les écrits restent » : toute modification, toute réserve, tout incident doit faire l'objet d'un écrit daté et signé. C'est la base de tout règlement amiable des litiges.

> [!astuce]
> Photographiez chaque étape cachée (ferraillage avant coulage, fourreaux, étanchéités) et classez les photos par date : c'est une preuve précieuse et une mémoire pour l'entretien.`,
 quiz:[
  {q:"Le document qui décrit techniquement les ouvrages est :", o:["Le CCAP","Le CCTP","L'acte d'engagement","Le journal"], r:1, e:"Clauses techniques particulières."},
  {q:"Un ordre de service est :", o:["Une facture","Une décision écrite du maître d'œuvre","Un plan","Un essai"], r:1, e:"Il ordonne le démarrage, des modifications, etc."},
  {q:"Les attachements servent à :", o:["Fixer les aciers","Constater contradictoirement les quantités exécutées","Payer les ouvriers","Commander le béton"], r:1, e:"Surtout pour les ouvrages qui seront cachés."},
  {q:"Le DQE contient :", o:["Les quantités et les prix","Les pénalités","Les plans","Le planning"], r:0, e:"Devis quantitatif et estimatif."}
 ]},
{id:'chant-2', titre:'L\'installation de chantier', duree:25, contenu:`## Le plan d'installation de chantier (PIC)
Il positionne sur le plan de masse :
- les **accès** et la circulation des camions (entrée, sortie, aire de retournement) ;
- la **clôture** et le gardiennage ;
- les **cantonnements** : bureau, vestiaires, sanitaires, réfectoire ;
- le **magasin** (ciment, outillage) et les **aires de stockage** (sable, gravier, aciers, agglos, coffrages) ;
- l'**aire de fabrication** (bétonnière, atelier de ferraillage, fabrication des agglos) ;
- l'**engin de levage** (grue, monte-charge) et son rayon d'action ;
- les **branchements** provisoires d'eau et d'électricité ;
- la zone de **tri des déchets**.

## Principes d'organisation
1. Rapprocher les stocks de leur lieu d'utilisation, **sans gêner** l'avancement du gros œuvre.
2. Séparer les circulations des engins et des piétons.
3. Stocker le ciment **au sec**, sur palettes, et l'utiliser dans l'ordre d'arrivée.
4. Prévoir l'évacuation des eaux de pluie du chantier (le chantier devient vite boueux en saison des pluies).

> [!exemple] Petite maison
> Clôture en tôles, un magasin en tôles de 3 × 4 m fermant à clé, une bâche à eau de 2 m³, sable et gravier côté rue (accès des camions), atelier de ferraillage sous un abri près des fondations, toilettes de chantier. Coût indicatif : 2 à 4 % du montant des travaux.

> [!attention]
> Une installation mal pensée fait perdre des heures chaque jour (manutentions inutiles, camions bloqués) et augmente les vols. C'est le premier investissement rentable d'un chantier.`,
 quiz:[
  {q:"Le PIC indique notamment :", o:["Les dosages du béton","L'emplacement des stocks, accès et cantonnements","Les prix","Les salaires"], r:1, e:"Plan d'installation de chantier."},
  {q:"Le ciment doit être stocké :", o:["Dehors au soleil","Au sec, sur palettes","Dans la fouille","Sous la pluie"], r:1, e:"L'humidité le fait durcir."},
  {q:"Les stocks doivent être placés :", o:["Le plus loin possible","Près de leur utilisation sans gêner les travaux","Sur la voie publique","N'importe où"], r:1, e:"Pour limiter les manutentions."},
  {q:"Le coût d'installation d'un petit chantier représente environ :", o:["0,1 %","2 à 4 %","30 %","50 %"], r:1, e:"Ordre de grandeur courant."}
 ]},
{id:'chant-3', titre:'Planification : rendements et durées', duree:30, contenu:`## De la quantité à la durée
$$ Durée (jours) = Quantité / (Rendement d'une équipe × Nombre d'équipes)

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

> [!exemple] Élévation d'une villa
> 260 m² d'agglos de 15 ; 3 binômes maçon + manœuvre à 10 m²/jour : 260 / 30 ≈ **9 jours** de maçonnerie, à intercaler avec le coulage des poteaux et chaînages.

## Construire le planning
1. Lister les tâches (décomposition par lots et par zones).
2. Calculer les durées (quantités et rendements).
3. Définir les **liens** (ce qui doit être fini avant de commencer) et les **délais techniques** (décoffrage, séchage des enduits avant peinture : 2 à 3 semaines).
4. Tracer le **Gantt** et repérer le **chemin critique**.
5. Ajouter une **marge** pour les aléas (pluies, ruptures d'approvisionnement) : 10 à 15 %.

!fig:gantt|Planning de type Gantt

## Le suivi
Chaque semaine : comparer **réalisé / prévu**, identifier les retards sur le chemin critique, décider des actions (renfort d'équipe, travail en parallèle).

> [!retenir]
> Un planning réaliste se construit à partir des **quantités du métré** et de **rendements mesurés** sur vos propres chantiers.`,
 quiz:[
  {q:"Durée pour 120 m² d'enduit avec 2 équipes à 15 m²/j :", o:["2 jours","4 jours","8 jours","16 jours"], r:1, e:"120 / (15 × 2) = 4 jours."},
  {q:"Rendement courant d'un binôme en maçonnerie d'agglos de 15 :", o:["1 m²/j","8 à 12 m²/j","50 m²/j","100 m²/j"], r:1, e:"Ordre de grandeur courant."},
  {q:"Un délai technique typique avant de peindre un enduit neuf :", o:["1 heure","1 jour","2 à 3 semaines","1 an"], r:2, e:"L'enduit doit sécher et se carbonater."},
  {q:"La marge pour aléas d'un planning est souvent de :", o:["0 %","10 à 15 %","50 %","100 %"], r:1, e:"Pluies, retards de livraison…"}
 ]},
{id:'chant-4', titre:'Gestion des ressources et approvisionnements', duree:25, contenu:`## La main-d'œuvre
- Constituer des équipes **équilibrées** (un maçon pour un ou deux manœuvres).
- Éviter les pics d'effectif : **lisser** les tâches qui ont de la marge.
- Tenir la feuille de présence quotidienne et suivre les rendements réels.
- Distinguer travail en **régie** (payé à la journée) et **tâcheronnage** (payé à la tâche, au m² ou au forfait) : le tâcheronnage motive mais exige un contrôle qualité serré.

## Le matériel
| Matériel | Usage |
|---|---|
| Bétonnière (250 à 500 L) | Béton et mortier |
| Aiguille vibrante | Compactage du béton |
| Étais, coffrages, banches | Poteaux, poutres, dalles |
| Échafaudages | Travail en hauteur |
| Plaque vibrante / dame | Compactage des remblais |
| Groupe électrogène, pompe | Énergie, épuisement des fouilles |
Location ou achat : on loue le matériel utilisé peu de temps, on achète celui utilisé en continu.

## Les approvisionnements
1. Extraire les **quantités** du métré (sous-détail des matériaux).
2. Établir un **planning des approvisionnements** calé sur le planning des travaux (date de besoin − délai de livraison).
3. Comparer les fournisseurs (prix, qualité, délais, fiabilité).
4. **Réceptionner** : quantité, qualité (granulats propres, diamètres des aciers, date du ciment), bon de livraison signé.
5. Suivre les stocks (entrées, sorties, inventaire hebdomadaire).

> [!exemple] Besoins d'une maison de 70 m²
> Environ 230 sacs de ciment, 20 m³ de sable, 19 m³ de gravier, 1,3 t d'acier et 2 800 agglos (dont 530 pleins pour le soubassement) (voir le projet économique dans Construction A→Z). Commander le ciment par lots de 50 à 100 sacs selon l'avancement plutôt qu'en une seule fois.

> [!attention]
> Les pertes et vols de matériaux peuvent atteindre 5 à 10 % sur un chantier mal tenu : magasin fermé, inventaires, bons de sortie signés.`,
 quiz:[
  {q:"Le tâcheronnage consiste à payer :", o:["À la journée","À la tâche ou au m²","Au mois","Rien"], r:1, e:"Paiement selon le travail réalisé."},
  {q:"On loue plutôt qu'acheter un matériel :", o:["Utilisé en continu","Utilisé peu de temps","Très bon marché","Jamais"], r:1, e:"La location est rentable pour un usage court."},
  {q:"À la réception d'une livraison d'aciers, on vérifie :", o:["La couleur","Les diamètres et les quantités","Le poids du camion","La météo"], r:1, e:"Un diamètre insuffisant réduit la section d'acier."},
  {q:"La date de commande se calcule par :", o:["Date de besoin − délai de livraison","Date de besoin + 1 mois","Au hasard","Date de fin du chantier"], r:0, e:"On anticipe le délai fournisseur."}
 ]},
{id:'chant-5', titre:'Qualité, sécurité et environnement', duree:30, contenu:`## La qualité
Un chantier de qualité suit un **plan de contrôle** : pour chaque étape, ce qu'on vérifie, comment, par qui, et la trace écrite.
| Étape | Point de contrôle |
|---|---|
| Implantation | Cotes, diagonales, niveau ±0,00 |
| Fond de fouille | Bon sol atteint, propreté, profondeur |
| Ferraillage | Nombre, diamètres, cadres, enrobage, recouvrements |
| Coulage | Dosage, consistance (cône), vibration, éprouvettes |
| Maçonnerie | Aplomb, alignement, joints, chaînages |
| Réseaux | Essais de pression, continuité électrique |
| Finitions | Planéité, aspect, fonctionnement |

## La sécurité
Les principaux risques : **chutes de hauteur** (première cause d'accidents graves), effondrement de fouilles ou d'étaiements, électrocution, chutes d'objets, blessures par les aciers en attente, bruit et poussières.
Mesures :
- **EPI** obligatoires : casque, chaussures de sécurité, gants, gilet, harnais en hauteur, lunettes, protections auditives ;
- **protections collectives** : garde-corps sur les dalles et trémies, échafaudages conformes, filets ;
- fouilles de plus de 1,30 m **talutées ou blindées** ;
- bouchons sur les **aciers en attente** ;
- installations électriques de chantier protégées par **différentiel 30 mA** ;
- **accueil sécurité** de chaque nouvel ouvrier et causeries régulières.

> [!attention]
> Les protections collectives (garde-corps) passent **avant** les équipements individuels : elles protègent tout le monde, tout le temps.

## L'environnement
- **Tri des déchets** (gravats, ferrailles, bois, emballages) et évacuation vers des filières autorisées.
- Limitation du **bruit** (horaires) et de la **poussière** (arrosage).
- Pas de rejet de laitance de ciment ou d'huile de décoffrage dans les caniveaux.
- Économie d'eau et réemploi des terres de déblai en remblai quand c'est possible.

> [!retenir]
> Qualité = contrôler et tracer. Sécurité = protections collectives d'abord. Environnement = trier et ne rien rejeter.`,
 quiz:[
  {q:"Première cause d'accidents graves sur les chantiers :", o:["Les chutes de hauteur","Le bruit","Les coupures","La chaleur"], r:0, e:"D'où l'importance des garde-corps et harnais."},
  {q:"Les aciers en attente doivent être :", o:["Peints","Protégés par des bouchons","Pliés à 90° au sol","Laissés tels quels"], r:1, e:"Pour éviter les blessures graves."},
  {q:"Une fouille profonde de plus de 1,30 m doit être :", o:["Remplie d'eau","Talutée ou blindée","Couverte d'une bâche","Laissée ouverte sans précaution"], r:1, e:"Risque d'éboulement."},
  {q:"Quelles protections sont prioritaires ?", o:["Individuelles","Collectives","Aucune","Seulement les gants"], r:1, e:"Elles protègent tout le monde en permanence."}
 ]},
{id:'chant-6', titre:'Suivi financier et réception des travaux', duree:25, contenu:`## Les situations de travaux
Chaque mois (ou à chaque étape), l'entreprise établit une **situation** : quantités réalisées × prix unitaires, cumulées depuis le début, moins les situations déjà payées.

> [!exemple]
> Marché : 45 000 000 F HT. À fin mars, travaux réalisés cumulés : 18 400 000 F. Situations précédentes payées : 11 200 000 F.
> Situation de mars : 18 400 000 − 11 200 000 = **7 200 000 F HT**, moins la **retenue de garantie** de 5 % (360 000 F) → 6 840 000 F HT à payer, plus TVA.

## Les avances et retenues
- **Avance de démarrage** (souvent 10 à 30 %), remboursée progressivement sur les situations.
- **Retenue de garantie** (souvent 5 %), libérée après la période de parfait achèvement (1 an), ou remplacée par une caution bancaire.
- **Pénalités de retard** prévues au CCAP (par jour de retard, plafonnées).

## Les travaux modificatifs
Toute modification demandée par le maître d'ouvrage doit faire l'objet d'un **devis**, d'un **ordre de service** ou d'un **avenant** **avant** exécution. Sans écrit, les « travaux supplémentaires » sont la première cause de conflit.

## Le suivi du budget
Comparer pour chaque lot : **budget prévu**, **engagé** (commandes et marchés signés), **réalisé** (facturé) et **reste à faire**. Un écart doit être expliqué et traité dès qu'il apparaît.

## La réception
1. Pré-réception (visite de l'entreprise et du maître d'œuvre).
2. **Réception** contradictoire avec le maître d'ouvrage : PV avec ou sans **réserves**.
3. **Levée des réserves** dans le délai fixé.
4. Remise du **DOE** (dossier des ouvrages exécutés) et des notices.
5. Début des **garanties** : parfait achèvement (1 an), bon fonctionnement (2 ans), décennale (10 ans).

> [!retenir]
> Situations mensuelles, retenue de garantie, avenants écrits avant travaux, réception avec PV : les quatre piliers du suivi financier.`,
 quiz:[
  {q:"La retenue de garantie représente souvent :", o:["1 %","5 %","25 %","50 %"], r:1, e:"Elle est libérée après l'année de parfait achèvement."},
  {q:"Situation du mois = cumul réalisé :", o:["+ situations précédentes","− situations précédentes","× 1,18","÷ 12"], r:1, e:"On ne paie que ce qui n'a pas déjà été payé."},
  {q:"Un travail supplémentaire doit être :", o:["Exécuté puis discuté","Validé par écrit avant exécution","Gratuit","Refusé"], r:1, e:"Devis + ordre de service ou avenant."},
  {q:"La garantie décennale couvre :", o:["Les peintures","La solidité de l'ouvrage pendant 10 ans","Les robinets","Les ampoules"], r:1, e:"Désordres compromettant la solidité."}
 ]}
]});
