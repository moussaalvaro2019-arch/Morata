A.addMatiere({
 id:'tech', titre:'Technologie de construction', court:'Technologie', groupe:'constr', icone:'hammer', couleur:'#E8752A', niveau:'Débutant', heures:26, ordre:2,
 resume:"Les acteurs d'un projet, les systèmes constructifs, fondations, maçonnerie, planchers, escaliers, toitures et second œuvre : comment se construit un bâtiment.",
 objectifs:["Identifier les intervenants et les étapes d'un projet","Distinguer les systèmes constructifs","Connaître les ouvrages de gros œuvre et leur rôle","Connaître les corps d'état du second œuvre"],
 applications:["Lire un descriptif de travaux","Comprendre un plan d'exécution","Organiser l'ordre d'intervention des corps d'état","Dialoguer avec architectes, bureaux d'études et artisans"],
 chapitres:[
{id:'tech-1', titre:'Les acteurs et les étapes d\'un projet', duree:25, contenu:`## Les intervenants
| Acteur | Rôle |
|---|---|
| **Maître d'ouvrage** (MOA) | Le client : il finance, définit le besoin et reçoit l'ouvrage |
| **Maître d'œuvre** (MOE) | Souvent l'architecte : conçoit le projet, établit les plans, dirige et contrôle les travaux |
| **Bureau d'études techniques** (BET) | Calcule la structure (béton armé), les fluides (électricité, plomberie, climatisation) |
| **Bureau de contrôle** | Vérifie, pour le compte du MOA, la solidité et la sécurité (obligatoire pour certains ouvrages) |
| **Géotechnicien** | Étudie le sol et recommande les fondations |
| **Géomètre** | Borne le terrain, fait les levés et l'implantation |
| **Entreprise** (générale ou par lots) | Réalise les travaux avec ses ouvriers et sous-traitants |
| **Coordonnateur sécurité** | Prévient les risques sur les chantiers importants |

## Les étapes d'un projet
1. **Programme** et faisabilité (budget, terrain).
2. **Études de conception** : esquisse, APS, APD, permis de construire.
3. **Dossier de consultation des entreprises (DCE)** : plans, CCTP, cadre de devis.
4. **Choix des entreprises** et signature des marchés.
5. **Préparation** puis **exécution** des travaux.
6. **Réception**, levée des réserves, garanties.

## Gros œuvre et second œuvre
- **Gros œuvre** : ce qui assure la stabilité et le clos-couvert : fondations, structure, murs, planchers, toiture.
- **Second œuvre** (corps d'état secondaires) : menuiseries, électricité, plomberie, revêtements, peinture, faux plafonds…

> [!retenir]
> Le MOA paie et décide, le MOE conçoit et contrôle, l'entreprise construit, le bureau de contrôle vérifie la sécurité.`,
 quiz:[
  {q:"Le maître d'ouvrage est :", o:["L'architecte","Le client qui finance","L'entreprise","Le géomètre"], r:1, e:"C'est le propriétaire du projet."},
  {q:"Qui calcule le ferraillage des poteaux et des poutres ?", o:["Le peintre","Le bureau d'études structure","Le notaire","Le maître d'ouvrage"], r:1, e:"Le BET structure."},
  {q:"La toiture fait partie :", o:["Du second œuvre","Du gros œuvre","Des VRD","Des finitions"], r:1, e:"Elle assure le clos-couvert."},
  {q:"Le géomètre intervient pour :", o:["Peindre","Le bornage, les levés et l'implantation","Le ferraillage","L'électricité"], r:1, e:"Il mesure le terrain."}
 ]},
{id:'tech-2', titre:'Les systèmes constructifs', duree:25, contenu:`## Murs porteurs
Les murs (maçonnerie de pierres, briques, agglos pleins ou BTC) **portent** les planchers et la toiture. Économique pour les petits bâtiments, mais peu d'ouvertures et des plans rigides. Chaînages obligatoires.

## Ossature poteaux-poutres (portiques)
Le système le plus répandu en Afrique de l'Ouest : des **poteaux** et des **poutres** en béton armé forment une ossature ; les murs en agglos ne font que **remplir** (maçonnerie de remplissage). Avantages : grandes ouvertures, plans libres, étages possibles.

## Voiles en béton armé
Murs en béton armé coulés en place (ou préfabriqués) : très rigides, excellents contre le vent et les séismes, utilisés pour les immeubles, cages d'escaliers et d'ascenseurs.

## Ossatures métalliques et bois
- **Métal** : hangars, entrepôts, grandes portées, montage rapide.
- **Bois** : maisons légères, charpentes, en développement pour les constructions durables.

## Le contreventement
Toute structure doit résister aux **efforts horizontaux** (vent, séisme). On utilise : voiles, palées triangulées (croix de Saint-André), portiques à nœuds rigides, et les planchers qui jouent le rôle de **diaphragme**.

> [!exemple] Choisir un système
> Maison R+1 à Yopougon avec de grandes baies : **portiques béton armé + remplissage en agglos de 15**. Entrepôt de 30 m de portée : **charpente métallique**. Immeuble R+8 : **portiques + voiles** de contreventement.

> [!attention]
> Dans un système poteaux-poutres, ne jamais supprimer un poteau ou couper une poutre pour agrandir une pièce sans l'avis d'un bureau d'études.`,
 quiz:[
  {q:"Dans une ossature poteaux-poutres, les murs en agglos sont :", o:["Porteurs","De remplissage","Inutiles","En acier"], r:1, e:"La structure en béton armé porte les charges."},
  {q:"Le contreventement sert à résister :", o:["Aux charges verticales","Aux efforts horizontaux (vent, séisme)","À la pluie","À la chaleur"], r:1, e:"Il assure la stabilité latérale."},
  {q:"Pour un entrepôt de grande portée, on choisit souvent :", o:["Des murs porteurs en BTC","Une charpente métallique","Des voiles béton","Du bambou"], r:1, e:"Le métal franchit facilement de grandes portées."},
  {q:"Un voile est :", o:["Un rideau","Un mur en béton armé","Une poutre","Une fondation"], r:1, e:"Très rigide, il contrevente le bâtiment."}
 ]},
{id:'tech-3', titre:'Fondations et infrastructure', duree:25, contenu:`## Rôle
Transmettre les charges au **bon sol**, sans dépasser sa résistance ni provoquer de tassements nuisibles.

## Les familles de fondations
!fig:fondations-types|Fondations superficielles et profondes
- **Superficielles** : semelles isolées (sous poteaux), semelles filantes (sous murs), radiers.
- **Semi-profondes** : puits en béton descendus jusqu'au bon sol.
- **Profondes** : pieux forés ou battus, quand le bon sol est à grande profondeur.

## L'infrastructure d'une maison courante
De bas en haut : **béton de propreté → semelles → amorces de poteaux → longrines → soubassement (agglos pleins) → remblai compacté → hérisson → dallage**.
!fig:coupe-type|Coupe verticale type

## Points clés
- Fond de fouille **propre et sur le bon sol**.
- **Enrobage de 5 cm** dans les fondations.
- **Traitement anti-termites** avant le remblai.
- **Réservations** (fourreaux) pour l'eau, l'électricité et les évacuations avant de couler.
- **Arase étanche** pour bloquer les remontées capillaires.

## Les ouvrages enterrés
Sous-sols, citernes, fosses : murs en béton armé calculés pour la **poussée des terres** et de l'eau, étanchéité extérieure, drainage périphérique.

> [!retenir]
> Les fondations ne se voient plus une fois la maison finie, mais toutes les erreurs y coûtent le plus cher à réparer.`,
 quiz:[
  {q:"Sous un poteau isolé, on réalise en général :", o:["Une semelle filante","Une semelle isolée","Un dallage","Un linteau"], r:1, e:"La semelle isolée reçoit la charge du poteau."},
  {q:"Le béton de propreté sert à :", o:["Décorer","Isoler les aciers du sol et donner une surface plane","Remplacer la semelle","Faire le dallage"], r:1, e:"Il est dosé à environ 150 kg/m³."},
  {q:"Quel ouvrage relie les semelles entre elles ?", o:["Le linteau","La longrine","La poutre de toiture","Le chaînage vertical"], r:1, e:"Les longrines relient les semelles et portent le soubassement."},
  {q:"Les fourreaux doivent être posés :", o:["Après le carrelage","Avant de couler les longrines et le dallage","Jamais","Après la peinture"], r:1, e:"Sinon il faut casser le béton."}
 ]},
{id:'tech-4', titre:'Maçonnerie et murs', duree:25, contenu:`## Les matériaux de maçonnerie
| Élément | Usage |
|---|---|
| Agglos creux de 10 | Cloisons intérieures |
| Agglos creux de 15 | Murs extérieurs (remplissage) |
| Agglos creux de 20 | Murs extérieurs épais, clôtures hautes |
| Agglos pleins de 15 / 20 | Soubassements, murs très chargés |
| BTC, briques de terre cuite | Murs porteurs ou de remplissage, bon confort |

## Les règles de l'art
1. **Appareillage** en quinconce : joints verticaux décalés.
2. **Joints** de 1 à 1,5 cm, pleins.
3. **Aplomb, alignement, niveau** contrôlés à chaque rang.
4. **Harpage** ou liaison avec les poteaux (fers de liaison tous les 2 à 3 rangs).
5. **Chaînages** horizontaux en tête et verticaux aux angles.
6. **Linteaux** au-dessus des baies, appuis en béton sous les fenêtres.
!fig:chainage|Chaînage en tête de mur

## Les ouvertures
- Porte intérieure : baie de 0,80 × 2,10 m (passage) ; porte d'entrée : 0,90 à 1,00 m.
- Fenêtre : hauteur d'allège ≈ 1,00 m, hauteur de baie 1,20 à 1,50 m.
- **Tableau** (côtés), **linteau** (dessus), **appui** (dessous) de la baie.

## Les murs de clôture
Fondation filante, poteaux raidisseurs tous les 3 à 4 m, chaînage haut, joints de dilatation tous les 15 à 20 m. Un mur de clôture de 2,50 m non chaîné est dangereux en cas de vent fort.

> [!attention]
> Les saignées pour gaines électriques doivent être **verticales** de préférence ; une saignée horizontale profonde affaiblit le mur.`,
 quiz:[
  {q:"Pour les cloisons intérieures, on utilise généralement :", o:["Agglos de 10","Agglos pleins de 20","Béton armé","Pierres"], r:0, e:"L'agglo de 10 suffit pour une cloison."},
  {q:"La partie au-dessus d'une baie s'appelle :", o:["L'appui","Le tableau","Le linteau","L'allège"], r:2, e:"Le linteau franchit l'ouverture."},
  {q:"Les joints verticaux d'une maçonnerie doivent être :", o:["Alignés","Décalés","Absents","De 5 cm"], r:1, e:"Appareillage en quinconce."},
  {q:"Les saignées électriques doivent être de préférence :", o:["Horizontales","Verticales","Diagonales","Dans les poteaux"], r:1, e:"Elles affaiblissent moins le mur."}
 ]},
{id:'tech-5', titre:'Planchers, escaliers et toitures', duree:30, contenu:`## Les planchers
- **Dalle pleine** en béton armé (12 à 20 cm).
- **Plancher à corps creux** (hourdis + poutrelles + dalle de compression), le plus courant : 16+4, 20+4.
- **Plancher-dalle** (sans poutres) pour les grands bâtiments.
!fig:hourdis|Plancher à corps creux

## Les escaliers
Escalier droit, à quart tournant, hélicoïdal… Il doit respecter la **formule de Blondel** : 60 ≤ 2h + g ≤ 64 cm, une hauteur sous plafond suffisante au-dessus des marches (échappée ≥ 2,00 m) et un garde-corps de **1,00 m** minimum.
!fig:escalier|Escalier : giron, hauteur, paillasse

## Les toitures
**Toiture en pente** : charpente + couverture.
| Couverture | Pente minimale indicative |
|---|---|
| Tôle bac aluminium | 10 à 15 % |
| Tôle ondulée | 15 à 20 % |
| Tuiles mécaniques | 30 à 40 % |

Éléments : fermes ou portiques, pannes, chevrons, liteaux, faîtière, rives, gouttières, descentes.

**Toiture-terrasse** : dalle + forme de pente (1,5 à 2 %) + étanchéité + protection ; acrotères de 50 cm environ ; relevés d'étanchéité ; trop-pleins.

> [!attention]
> Les tôles doivent être fixées sur chaque panne avec des vis ou crochets adaptés : les toitures arrachées lors des orages sont presque toujours mal fixées ou mal ancrées dans le chaînage.

## L'étanchéité
Membranes bitumineuses (multicouche), résines liquides, membranes synthétiques. Points sensibles : relevés, angles, évacuations, joints de dilatation.`,
 quiz:[
  {q:"La hauteur minimale d'un garde-corps d'escalier est :", o:["0,50 m","0,80 m","1,00 m","1,50 m"], r:2, e:"1,00 m en règle générale."},
  {q:"Pente minimale d'une couverture en tuiles :", o:["2 %","10 %","30 à 40 %","100 %"], r:2, e:"Les tuiles demandent une forte pente."},
  {q:"La pente d'une toiture-terrasse est d'environ :", o:["0 %","1,5 à 2 %","15 %","30 %"], r:1, e:"Forme de pente vers les évacuations."},
  {q:"Les acrotères servent notamment à :", o:["Porter la charpente","Relever l'étanchéité en rive","Éclairer","Ventiler"], r:1, e:"Ils permettent les relevés d'étanchéité."}
 ]},
{id:'tech-6', titre:'Le second œuvre', duree:25, contenu:`## Les corps d'état secondaires
| Corps d'état | Travaux |
|---|---|
| Menuiserie | Portes, fenêtres, placards (bois, aluminium, PVC, métal) |
| Électricité | Gaines, câbles, appareillage, tableau, terre, courants faibles |
| Plomberie sanitaire | Alimentation, évacuations, appareils, fosse |
| Climatisation / ventilation | Splits, gaines, VMC |
| Plâtrerie / staff | Faux plafonds, corniches |
| Revêtements | Carrelage, faïence, parquet, marbre |
| Peinture | Préparation, impression, finition |
| Vitrerie, ferronnerie | Vitrages, grilles, garde-corps |

## L'ordre d'intervention (logement)
1. Gros œuvre terminé, toiture posée (**hors d'eau**), menuiseries extérieures posées (**hors d'air**).
2. **Réseaux encastrés** : électricité et plomberie (saignées, gaines, attentes).
3. **Enduits** intérieurs et extérieurs.
4. **Faux plafonds**, chapes.
5. **Carrelage**, faïence.
6. **Menuiseries intérieures**, appareillage électrique, appareils sanitaires.
7. **Peinture** (impression puis finitions) et nettoyage.

> [!astuce]
> Faire tester les réseaux **avant** de les recouvrir : mise en pression des canalisations d'eau (24 h), contrôle de continuité électrique. Une fuite découverte après le carrelage coûte très cher.

## La qualité des finitions
Tolérances courantes : planéité des enduits 5 mm sous la règle de 2 m ; carrelage : joints alignés, pas de carreau qui « sonne creux » ; peinture uniforme sans traces de reprise. Les finitions représentent souvent **plus du tiers** du coût d'une maison.`,
 quiz:[
  {q:"Le bâtiment est « hors d'eau » quand :", o:["La toiture est posée","La peinture est finie","Les fondations sont coulées","L'eau est branchée"], r:0, e:"La pluie ne peut plus entrer par le haut."},
  {q:"Les gaines électriques encastrées se posent :", o:["Après la peinture","Avant les enduits","Après le carrelage","Jamais"], r:1, e:"Sinon il faut refaire les enduits."},
  {q:"Avant de carreler, on teste les canalisations :", o:["Par mise en pression","À l'œil","En les peignant","Ce n'est pas nécessaire"], r:0, e:"Pour détecter les fuites avant de les recouvrir."},
  {q:"La dernière intervention est en général :", o:["Le carrelage","La peinture de finition et le nettoyage","Les enduits","La plomberie"], r:1, e:"La peinture se fait quand les autres corps d'état ont fini."}
 ]}
]});
