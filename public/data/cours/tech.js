/* =====================================================================
   Technologie de construction — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"tech",
 titre:"Technologie de construction",
 court:"Technologie",
 groupe:"constr",
 icone:"hammer",
 couleur:"#E8752A",
 niveau:"Débutant",
 heures:26,
 ordre:2,
 resume:"Les acteurs d'un projet, les systèmes constructifs, fondations, maçonnerie, planchers, escaliers, toitures et second œuvre : comment se construit un bâtiment.",
 objectifs:[
  "Identifier les intervenants et les étapes d'un projet",
  "Distinguer les systèmes constructifs",
  "Connaître les ouvrages de gros œuvre et leur rôle",
  "Connaître les corps d'état du second œuvre"
 ],
 applications:[
  "Lire un descriptif de travaux",
  "Comprendre un plan d'exécution",
  "Organiser l'ordre d'intervention des corps d'état",
  "Dialoguer avec architectes, bureaux d'études et artisans"
 ],
 chapitres:[
{id:"tech-1", niv:1, titre:"Les acteurs et les étapes d'un projet", duree:25, contenu:`## Les intervenants
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
> Le MOA paie et décide, le MOE conçoit et contrôle, l'entreprise construit, le bureau de contrôle vérifie la sécurité.`, quiz:[
  {q:"Le maître d'ouvrage est :", o:["L'architecte", "Le client qui finance", "L'entreprise", "Le géomètre"], r:1, e:"C'est le propriétaire du projet."},
  {q:"Qui calcule le ferraillage des poteaux et des poutres ?", o:["Le peintre", "Le bureau d'études structure", "Le notaire", "Le maître d'ouvrage"], r:1, e:"Le BET structure."},
  {q:"La toiture fait partie :", o:["Du second œuvre", "Du gros œuvre", "Des VRD", "Des finitions"], r:1, e:"Elle assure le clos-couvert."},
  {q:"Le géomètre intervient pour :", o:["Peindre", "Le bornage, les levés et l'implantation", "Le ferraillage", "L'électricité"], r:1, e:"Il mesure le terrain."}
 ]},

{id:"tech-2", niv:1, titre:"Les systèmes constructifs", duree:25, contenu:`## Murs porteurs
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
> Dans un système poteaux-poutres, ne jamais supprimer un poteau ou couper une poutre pour agrandir une pièce sans l'avis d'un bureau d'études.`, quiz:[
  {q:"Dans une ossature poteaux-poutres, les murs en agglos sont :", o:["Porteurs", "De remplissage", "Inutiles", "En acier"], r:1, e:"La structure en béton armé porte les charges."},
  {q:"Le contreventement sert à résister :", o:["Aux charges verticales", "Aux efforts horizontaux (vent, séisme)", "À la pluie", "À la chaleur"], r:1, e:"Il assure la stabilité latérale."},
  {q:"Pour un entrepôt de grande portée, on choisit souvent :", o:["Des murs porteurs en BTC", "Une charpente métallique", "Des voiles béton", "Du bambou"], r:1, e:"Le métal franchit facilement de grandes portées."},
  {q:"Un voile est :", o:["Un rideau", "Un mur en béton armé", "Une poutre", "Une fondation"], r:1, e:"Très rigide, il contrevente le bâtiment."}
 ]},

{id:"tech-4", niv:1, titre:"Maçonnerie et murs", duree:25, contenu:`## Les matériaux de maçonnerie
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
> Les saignées pour gaines électriques doivent être **verticales** de préférence ; une saignée horizontale profonde affaiblit le mur.`, quiz:[
  {q:"Pour les cloisons intérieures, on utilise généralement :", o:["Agglos de 10", "Agglos pleins de 20", "Béton armé", "Pierres"], r:0, e:"L'agglo de 10 suffit pour une cloison."},
  {q:"La partie au-dessus d'une baie s'appelle :", o:["L'appui", "Le tableau", "Le linteau", "L'allège"], r:2, e:"Le linteau franchit l'ouverture."},
  {q:"Les joints verticaux d'une maçonnerie doivent être :", o:["Alignés", "Décalés", "Absents", "De 5 cm"], r:1, e:"Appareillage en quinconce."},
  {q:"Les saignées électriques doivent être de préférence :", o:["Horizontales", "Verticales", "Diagonales", "Dans les poteaux"], r:1, e:"Elles affaiblissent moins le mur."}
 ]},

{id:"tech-3", niv:2, titre:"Fondations et infrastructure", duree:25, contenu:`## Rôle
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
> Les fondations ne se voient plus une fois la maison finie, mais toutes les erreurs y coûtent le plus cher à réparer.`, quiz:[
  {q:"Sous un poteau isolé, on réalise en général :", o:["Une semelle filante", "Une semelle isolée", "Un dallage", "Un linteau"], r:1, e:"La semelle isolée reçoit la charge du poteau."},
  {q:"Le béton de propreté sert à :", o:["Décorer", "Isoler les aciers du sol et donner une surface plane", "Remplacer la semelle", "Faire le dallage"], r:1, e:"Il est dosé à environ 150 kg/m³."},
  {q:"Quel ouvrage relie les semelles entre elles ?", o:["Le linteau", "La longrine", "La poutre de toiture", "Le chaînage vertical"], r:1, e:"Les longrines relient les semelles et portent le soubassement."},
  {q:"Les fourreaux doivent être posés :", o:["Après le carrelage", "Avant de couler les longrines et le dallage", "Jamais", "Après la peinture"], r:1, e:"Sinon il faut casser le béton."}
 ]},

{id:"tech-5", niv:2, titre:"Planchers, escaliers et toitures", duree:30, contenu:`## Les planchers
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
Membranes bitumineuses (multicouche), résines liquides, membranes synthétiques. Points sensibles : relevés, angles, évacuations, joints de dilatation.`, quiz:[
  {q:"La hauteur minimale d'un garde-corps d'escalier est :", o:["0,50 m", "0,80 m", "1,00 m", "1,50 m"], r:2, e:"1,00 m en règle générale."},
  {q:"Pente minimale d'une couverture en tuiles :", o:["2 %", "10 %", "30 à 40 %", "100 %"], r:2, e:"Les tuiles demandent une forte pente."},
  {q:"La pente d'une toiture-terrasse est d'environ :", o:["0 %", "1,5 à 2 %", "15 %", "30 %"], r:1, e:"Forme de pente vers les évacuations."},
  {q:"Les acrotères servent notamment à :", o:["Porter la charpente", "Relever l'étanchéité en rive", "Éclairer", "Ventiler"], r:1, e:"Ils permettent les relevés d'étanchéité."}
 ]},

{id:"tech-6", niv:2, titre:"Le second œuvre", duree:25, contenu:`## Les corps d'état secondaires
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
Tolérances courantes : planéité des enduits 5 mm sous la règle de 2 m ; carrelage : joints alignés, pas de carreau qui « sonne creux » ; peinture uniforme sans traces de reprise. Les finitions représentent souvent **plus du tiers** du coût d'une maison.`, quiz:[
  {q:"Le bâtiment est « hors d'eau » quand :", o:["La toiture est posée", "La peinture est finie", "Les fondations sont coulées", "L'eau est branchée"], r:0, e:"La pluie ne peut plus entrer par le haut."},
  {q:"Les gaines électriques encastrées se posent :", o:["Après la peinture", "Avant les enduits", "Après le carrelage", "Jamais"], r:1, e:"Sinon il faut refaire les enduits."},
  {q:"Avant de carreler, on teste les canalisations :", o:["Par mise en pression", "À l'œil", "En les peignant", "Ce n'est pas nécessaire"], r:0, e:"Pour détecter les fuites avant de les recouvrir."},
  {q:"La dernière intervention est en général :", o:["Le carrelage", "La peinture de finition et le nettoyage", "Les enduits", "La plomberie"], r:1, e:"La peinture se fait quand les autres corps d'état ont fini."}
 ]},

{id:"tech-7", niv:3, titre:"L'étanchéité : terrasses, salles d'eau et sous-sols", duree:30, contenu:`## La toiture-terrasse
Composition de bas en haut :
1. **Dalle** support (béton armé ou plancher à corps creux) ;
2. **Forme de pente** de 1,5 à 2 % vers les évacuations ;
3. **Isolant** (recommandé en climat chaud, voir Thermique) ;
4. **Revêtement d'étanchéité** : bicouche bitume élastomère SBS, membrane synthétique (PVC, EPDM) ou système liquide ;
5. **Protection** : gravillons (terrasse inaccessible), dallettes sur plots ou carrelage scellé (terrasse accessible).

## Les points singuliers (là où naissent les fuites)
- **Relevés** d'étanchéité d'au moins **15 cm** au-dessus de la protection, protégés en tête par une bande de solin ou une engravure dans l'acrotère ;
- **Évacuations** d'eaux pluviales : au moins **deux** par terrasse (une peut se boucher) + un **trop-plein** ;
- **Traversées** (gaines, pieds de supports de climatiseurs) avec platines et manchons ;
- **Joints de dilatation** traités par des profils adaptés.

> [!norme] Essai à l'eau
> Avant de poser la protection, on obstrue les évacuations et on met **5 cm d'eau pendant 48 heures** : aucune trace d'humidité ne doit apparaître en sous-face.

## Les salles d'eau
- Sol et murs de douche protégés par une **étanchéité sous carrelage** (SPEC : résine ou natte), remontée de 10 cm sur les murs et jusqu'à la hauteur de la douche ;
- **Pente de 1 à 2 %** vers le siphon de sol, joints de carrelage soignés, silicone aux angles ;
- Traversées de tuyaux étanchées avant carrelage.

## Les ouvrages enterrés
Cuves, fosses, sous-sols, piscines : béton compact et bien vibré, **joints de reprise** avec bandes d'arrêt d'eau (waterstop), **enduit hydrofuge** ou membrane côté eau, drainage autour.

> [!attention]
> Plus de la moitié des sinistres de toitures-terrasses viennent des relevés et des évacuations, pas de la partie courante.`, quiz:[
  {q:"La forme de pente d'une toiture-terrasse est d'au moins :", o:["1,5 à 2 %", "0 %", "10 %", "30 %"], r:0, e:"Pour que l'eau ne stagne pas."},
  {q:"La hauteur minimale d'un relevé d'étanchéité au-dessus de la protection est :", o:["15 cm", "2 cm", "50 cm", "1 m"], r:0, e:"Pour éviter les infiltrations en cas de stagnation."},
  {q:"L'essai d'étanchéité d'une terrasse consiste à :", o:["Mettre 5 cm d'eau pendant 48 h", "Arroser 5 minutes", "Mesurer la température", "Peindre la dalle"], r:0, e:"Avant la pose de la protection."},
  {q:"Les sinistres de terrasses viennent le plus souvent :", o:["Des relevés et des évacuations", "De la partie courante", "De la couleur des gravillons", "Du dallage"], r:0, e:"Ce sont les points singuliers."}
 ]},

{id:"tech-8", niv:3, titre:"Construire en hauteur : immeubles et organisation technique", duree:35, contenu:`## La structure d'un immeuble
- **Portiques** (poteaux-poutres) pour les charges verticales ;
- **Voiles en béton armé** (cage d'escalier, cage d'ascenseur, pignons) pour le **contreventement** contre le vent et les séismes ;
- **Descente de charges cumulée** : les poteaux du rez-de-chaussée portent tous les étages (voir le projet Immeuble R+4) ;
- **Joints de dilatation** tous les 25 à 30 m de longueur.

## Le cycle d'étage
Chaque niveau répète la même séquence : implantation des axes → poteaux et voiles → coffrage et étaiement du plancher → ferraillage et réservations → **coulage** → cure → décoffrage.
> [!exemple]
> Avec un cycle de **10 jours par niveau**, la structure d'un R+4 (5 niveaux) demande environ 50 jours, plus les fondations. Les étais restent en place sur 2 ou 3 niveaux (étaiement de reprise).

## Les coffrages et le levage
- **Banches** métalliques pour les voiles, **coffrages-tables** ou poutrelles et contreplaqué pour les planchers ;
- **Grue à tour** : attention à la **charge en bout de flèche**, bien plus faible qu'au pied du mât ;
- **Pompe à béton** pour couler vite et en hauteur ; monte-matériaux pour les agglos.

## Les réseaux verticaux
**Gaines techniques** superposées d'un niveau à l'autre : colonnes d'eau, chutes d'eaux usées ventilées, colonne montante électrique, télécoms. Un **ascenseur** devient indispensable au-delà de 4 ou 5 niveaux habités.

## Sécurité
- Garde-corps périphériques à chaque plancher, filets, trémies protégées ;
- **Escalier encloisonné** et désenfumé en exploitation, extincteurs, éclairage de sécurité ;
- Plan d'installation de chantier avec zones de levage interdites au public.`, quiz:[
  {q:"Les voiles de la cage d'escalier servent surtout à :", o:["Contreventer l'immeuble", "Décorer les façades", "Isoler du bruit", "Porter les cloisons"], r:0, e:"Ils reprennent les efforts horizontaux."},
  {q:"Avec un cycle de 8 jours par niveau, 5 niveaux de structure prennent environ :", o:["40 jours", "8 jours", "13 jours", "400 jours"], r:0, e:"5 × 8 = 40 jours."},
  {q:"La charge qu'une grue peut lever est la plus faible :", o:["En bout de flèche", "Au pied du mât", "Toujours identique", "La nuit"], r:0, e:"Le moment de renversement augmente avec la portée."},
  {q:"Les joints de dilatation d'un bâtiment se placent environ tous les :", o:["25 à 30 m", "2 m", "100 m", "5 m"], r:0, e:"Pour absorber les variations de longueur."}
 ]},

{id:"tech-9", niv:3, titre:"Pathologies, diagnostic et réhabilitation", duree:35, contenu:`## Lire une fissure
La forme et l'orientation d'une fissure renseignent sur sa cause :
| Fissure | Cause probable |
|---|---|
| En **escalier** dans la maçonnerie, près d'un angle | Tassement différentiel des fondations |
| **Verticale** en bas, au milieu d'une poutre | Flexion excessive (aciers insuffisants) |
| **Oblique** à 45° près d'un appui | Effort tranchant (cadres insuffisants) |
| **Le long des aciers**, avec rouille | Corrosion (enrobage trop faible) |
| Fin **réseau** de surface | Retrait (cure insuffisante) |

## Le diagnostic
1. **Relevé** : plans, photos, largeur des fissures (moins de 0,2 mm : esthétique ; plus de 2 mm : souvent structurel) ;
2. **Suivi** : témoins (plâtre, jauges) datés pour savoir si la fissure **évolue** ;
3. **Investigations** : sondages des fondations, carottes, détection des aciers, étude de sol ;
4. **Recalcul** de la structure avec les charges réelles.

## Les techniques de réparation
- **Reprise en sous-œuvre** : élargissement des semelles, micropieux ;
- **Renforcement** : chemisage de poteaux en béton armé, plats ou tissus de **fibre de carbone** collés, profilés métalliques ;
- **Injection** des fissures stabilisées à la résine époxy ;
- Traitement de la corrosion, hydrofuge, barrière anti-termites.

## Surélever une maison existante
> [!exemple] Ajouter un étage sur une maison de plain-pied
> Une semelle de 0,80 × 0,80 m portait 60 kN. L'étage ajoute environ 70 kN : N = 130 kN.
> Pression sur le sol : 130 / 0,64 = **203 kN/m²**, supérieure aux 150 kN/m² admissibles.
> Il faut élargir la semelle à √(130 × 1,08 / 150) ≈ **1,00 m** et vérifier les poteaux (souvent trop faibles : 4 HA10 ne suffisent plus).

> [!attention]
> Ne jamais surélever sans **note de calcul** : c'est l'une des premières causes d'effondrement de bâtiments.`, quiz:[
  {q:"Une fissure en escalier dans un mur près d'un angle indique souvent :", o:["Un tassement différentiel", "Un excès de peinture", "Une flexion de dalle", "Un retrait du carrelage"], r:0, e:"Une partie des fondations s'enfonce plus que l'autre."},
  {q:"Une fissure oblique à 45° près de l'appui d'une poutre indique :", o:["Un effort tranchant mal repris", "Un manque de peinture", "Une dilatation", "Un défaut d'enduit"], r:0, e:"Les cadres sont insuffisants."},
  {q:"Pour savoir si une fissure évolue, on pose :", o:["Des témoins datés", "Du carrelage", "Un drain", "Un climatiseur"], r:0, e:"Plâtre ou jauges graduées."},
  {q:"Avant de surélever une maison, il faut :", o:["Une note de calcul des fondations et des poteaux", "Seulement l'accord du voisin", "Plus de ciment dans le mortier", "Rien"], r:0, e:"Les charges augmentent fortement."}
 ]}
]});
