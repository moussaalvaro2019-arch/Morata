/* =====================================================================
   Béton armé — cours complet (3 niveaux), règles BAEL 91 révisées 99
   avec les équivalences Eurocode 2 utiles
   ===================================================================== */
A.addMatiere({
 id:"ba",
 titre:"Béton armé",
 court:"Béton armé",
 groupe:"struct",
 icone:"column",
 couleur:"#14202E",
 niveau:"Intermédiaire",
 heures:100,
 ordre:3,
 prerequis:["rdm", "mat"],
 resume:"Du principe du béton armé au plan de ferraillage : matériaux, états limites, descente de charges, dispositions constructives, tirants, poteaux, poutres (ELU, ELS, sections en T, effort tranchant), dalles, fondations, poutres continues, escaliers, voiles, flexion composée et étude complète d'un bâtiment, selon le BAEL 91 et l'Eurocode 2.",
 objectifs:[
  "Connaître les caractéristiques de calcul du béton et des aciers",
  "Établir les combinaisons d'actions et faire la descente de charges d'un bâtiment",
  "Respecter enrobages, ancrages, recouvrements et espacements",
  "Dimensionner tirants, poteaux, poutres rectangulaires et en T à l'ELU et vérifier l'ELS",
  "Calculer les armatures d'effort tranchant et leur répartition",
  "Dimensionner dalles, semelles, longrines, escaliers et murs",
  "Calculer une poutre continue (méthode forfaitaire, Caquot) et arrêter les barres",
  "Produire un plan de ferraillage avec sa nomenclature"
 ],
 applications:[
  "Ferraillage complet d'une maison ou d'un immeuble R+2",
  "Plans de ferraillage et nomenclatures d'aciers",
  "Contrôle du ferraillage sur chantier avant coulage",
  "Lecture et vérification d'une note de calcul de bureau d'études"
 ],
 chapitres:[
{id:"ba-1", niv:1, titre:"Principe du béton armé et caractéristiques des matériaux", duree:60, contenu:`## Pourquoi armer le béton ?
Le béton est une pierre artificielle : il résiste très bien à la **compression** (25 MPa et plus) mais mal à la **traction** (environ 2 MPa, soit dix fois moins). Une poutre en béton seul se fissure et casse dès qu'elle fléchit, car sa partie basse est tendue.
L'idée du **béton armé** : placer des **barres d'acier** dans les zones tendues. Le béton reprend la compression, l'acier reprend la traction.

!fig:poutre-coupe|Coupe d'une poutre : béton comprimé en partie haute, aciers tendus en partie basse, cadres

## Pourquoi l'association fonctionne
1. **Adhérence** : grâce aux nervures des aciers **haute adhérence (HA)**, le béton et l'acier ne glissent pas l'un par rapport à l'autre et se déforment ensemble.
2. **Dilatation** : les deux matériaux ont presque le même coefficient de dilatation thermique (≈ 10 à 12 × 10⁻⁶ /°C) : pas de décollement quand la température varie.
3. **Protection** : le béton est très basique (pH ≈ 13) et protège l'acier de la rouille, à condition que l'**enrobage** soit suffisant et le béton compact.

## Le béton : résistance caractéristique
On caractérise un béton par sa **résistance caractéristique à la compression à 28 jours**, **fc28** (BAEL) ou **fck** (Eurocode 2), mesurée sur éprouvettes cylindriques 16 × 32 cm : 95 % des essais doivent la dépasser.
| Béton | Usage courant | fc28 (MPa) | Classe Eurocode |
|---|---|---|---|
| Béton de propreté | sous fondations | non structurel | C12/15 |
| Béton courant de bâtiment | poteaux, poutres, dalles | 25 | C25/30 |
| Béton de qualité | immeubles, ouvrages exposés | 30 | C30/37 |
| Béton haute résistance | tours, ouvrages d'art | 40 et plus | C40/50 |
(Dans « C25/30 », 25 est la résistance sur cylindre et 30 sur cube.)

La **résistance à la traction** se déduit de fc28 :
$$ ft28 = 0,6 + 0,06 × fc28      (fc28 = 25 MPa → ft28 = 2,1 MPa)

## Le béton : contrainte de calcul à l'ELU
On ne fait pas travailler le béton à fc28 ; on prend en compte un coefficient de sécurité **γb = 1,5** (1,15 en situation accidentelle) et l'effet des charges de longue durée (coefficient 0,85) :
$$ fbu = 0,85 × fc28 / (θ × γb)      (θ = 1 pour des charges appliquées plus de 24 h)
Pour fc28 = 25 MPa : **fbu = 0,85 × 25 / 1,5 = 14,17 MPa**. Pour fc28 = 30 MPa : fbu = 17,0 MPa.
Le diagramme contrainte-déformation de calcul est la **parabole-rectangle** : la contrainte croît jusqu'à fbu pour un raccourcissement de 2 ‰, puis reste constante jusqu'à la rupture à **3,5 ‰**. Pour les calculs à la main, on le remplace par un **rectangle simplifié** de hauteur 0,8 y (y : hauteur de la zone comprimée).

## Le béton : module de déformation
$$ Eij = 11 000 × fc28^(1/3)  (charges de courte durée)      Evj = 3 700 × fc28^(1/3)  (longue durée)
Pour fc28 = 25 MPa : Eij ≈ **32 200 MPa** et Evj ≈ **10 800 MPa**. Sous charge permanente, le béton continue à se déformer : c'est le **fluage** (déformation finale environ 3 fois la déformation instantanée). Il subit aussi le **retrait** (raccourcissement en séchant, 2 à 4 × 10⁻⁴).

## Les aciers
| Type | Nuance | fe (MPa) | Usage |
|---|---|---|---|
| Ronds lisses | FeE215, FeE235 | 215 – 235 | crochets de levage, épingles (rare) |
| Haute adhérence (HA) | FeE400 | 400 | armatures courantes |
| Haute adhérence (HA) | FeE500 (B500) | 500 | armatures courantes (Eurocode) |
| Treillis soudés (TS) | TSHA | 500 | dalles, dallages, voiles |
Diamètres courants (mm) : **6, 8, 10, 12, 14, 16, 20, 25, 32**. Module d'élasticité : **Es = 200 000 MPa**. Coefficient de sécurité : **γs = 1,15** (1,0 en accidentel).
$$ σs = fe / γs      FeE400 : σs = 348 MPa      FeE500 : σs = 435 MPa
Le diagramme de calcul de l'acier est **élasto-plastique** : droite de pente Es jusqu'à σs (atteinte pour εl = σs / Es = 1,74 ‰ pour FeE400), puis palier horizontal jusqu'à 10 ‰.
| Diamètre (mm) | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 25 | 32 |
|---|---|---|---|---|---|---|---|---|---|
| Section d'une barre (cm²) | 0,28 | 0,50 | 0,79 | 1,13 | 1,54 | 2,01 | 3,14 | 4,91 | 8,04 |
| Masse (kg/m) | 0,222 | 0,395 | 0,617 | 0,888 | 1,208 | 1,578 | 2,466 | 3,853 | 6,313 |
La masse d'une barre se retrouve par la formule **0,006 17 × φ²** (kg/m, φ en mm).

> [!exemple] Valeurs de calcul pour un projet courant
> Béton C25/30 (fc28 = 25 MPa) et aciers FeE400 :
> ft28 = 0,6 + 0,06 × 25 = **2,1 MPa** ; fbu = 0,85 × 25 / 1,5 = **14,17 MPa** ; σs = 400 / 1,15 = **347,8 MPa**.
> Eij = 11 000 × 25^(1/3) = 11 000 × 2,924 = **32 164 MPa** ; coefficient d'équivalence acier/béton : on prend conventionnellement **n = 15** à l'ELS.

## Les réglementations
- **BAEL 91 révisé 99** : règlement français, encore très utilisé en Côte d'Ivoire et en Afrique de l'Ouest ; c'est la base de ce cours.
- **Eurocode 2 (NF EN 1992)** : règlement européen qui le remplace progressivement. Les principes sont les mêmes (états limites, diagrammes, bielles) ; les coefficients et quelques formules changent. Les équivalences utiles sont signalées dans les chapitres.

> [!retenir]
> - Béton : compression ; acier : traction ; adhérence + même dilatation + protection par l'enrobage.
> - fc28 = 25 MPa → ft28 = 2,1 MPa ; fbu = 14,17 MPa.
> - FeE400 → σs = 348 MPa ; FeE500 → σs = 435 MPa ; Es = 200 000 MPa.
> - Raccourcissement ultime du béton : 3,5 ‰ ; allongement limite de l'acier : 10 ‰.`,
 sujet:{titre:"Caractéristiques du béton et de l'acier d'une villa", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour une villa à Yamoussoukro, le cahier des charges impose un béton **fc28 = 25 MPa** et des aciers **HA FeE500**. Le conducteur de travaux veut savoir quand décoffrer et comprendre les valeurs de calcul utilisées par le bureau d'études.

**Données** : BAEL 91 révisé 99 — béton fc28 = 25 MPa, aciers HA FeE500, γb = 1,5, γs = 1,15, θ = 1 ; fcj = j / (4,76 + 0,83 j) × fc28 ; ftj = 0,6 + 0,06 fcj ; Eij = 11 000 fcj^(1/3) ; Evj = 3 700 fcj^(1/3) ; Es = 200 000 MPa.

### Partie A — Le béton (9 points)
1. Calculer la résistance du béton à 7 jours et à 14 jours. (3 pts)
2. Les étais d'une dalle peuvent être retirés quand le béton atteint 70 % de fc28. Peut-on décoffrer à 14 jours ? (2 pts)
3. Calculer ft28, Ei28 et Ev. Expliquer pourquoi on utilise deux modules. (4 pts)

### Partie B — Résistances de calcul (6 points)
4. Calculer fbu (contrainte de calcul du béton) et fsu (acier). (3 pts)
5. Calculer la déformation de l'acier à la limite élastique εl = fsu / Es. (1 pt)
6. Expliquer le rôle de γb et γs. (2 pts)

### Partie C — Pourquoi armer le béton ? (5 points)
7. Calculer l'effort de traction que peuvent reprendre 4 HA12 à l'ELU. (2 pts)
8. Expliquer pourquoi les aciers sont placés dans la zone tendue d'une poutre et pourquoi on néglige la résistance du béton tendu. (3 pts)`,
  corrige:`### Partie A — Béton (9 pts)
1. j = 7 : 7 / (4,76 + 5,81) × 25 = **16,6 MPa** ; j = 14 : 14 / (4,76 + 11,62) × 25 = **21,4 MPa**. *(3 pts)*
2. 70 % de 25 = 17,5 MPa ; à 14 jours on a 21,4 MPa → **oui** (à 7 jours, 16,6 MPa : pas encore). *(2 pts)*
3. **ft28 = 0,6 + 0,06 × 25 = 2,1 MPa** ; 25^(1/3) = 2,924 → **Ei28 = 32 164 MPa**, **Ev = 10 819 MPa**. Ei sert aux charges de courte durée ; Ev (≈ Ei / 3) tient compte du **fluage** sous charges de longue durée (flèches à long terme). *(4 pts)*

### Partie B — Calcul (6 pts)
4. $$ fbu = 0,85 fc28 / (θ γb) = 0,85 × 25 / 1,5 = 14,17 MPa
$$ fsu = fe / γs = 500 / 1,15 = 434,8 MPa *(3 pts)*
5. εl = 434,8 / 200 000 = **2,17 ‰**. *(1 pt)*
6. Ce sont des **coefficients de sécurité** sur les matériaux : ils couvrent la dispersion des résistances, les défauts d'exécution et les imprécisions de calcul ; γb > γs car le béton est fabriqué sur chantier, l'acier en usine. *(2 pts)*

### Partie C — Armer (5 pts)
7. 4 HA12 : 4 × 1,131 = **4,52 cm²** → F = 452 × 434,8 = **196,7 kN** (près de 20 t). *(2 pts)*
8. Le béton résiste bien en compression (25 MPa) mais très mal en traction (2,1 MPa) et **fissure** dès que celle-ci est dépassée : on le considère donc fissuré dans la zone tendue et ce sont les aciers, placés là où les fibres s'allongent (en bas en travée, en haut sur appui), qui reprennent la traction. *(3 pts)*

> [!attention] Erreurs à éviter
> - Confondre fc28 (résistance mesurée) et fbu (valeur de calcul réduite).
> - Décoffrer « à 7 jours » par habitude sans vérifier la résistance atteinte.
> - Oublier que les aciers doivent suivre le signe du moment (en haut sur appui).`},
 exercices:[
  {t:"Caractéristiques d'un béton C30/37", d:1, e:`Un bureau d'études prescrit un béton de fc28 = 30 MPa et des aciers FeE500. Calculer ft28, fbu, σs et Eij.`, c:`ft28 = 0,6 + 0,06 × 30 = **2,4 MPa**.
fbu = 0,85 × 30 / 1,5 = **17,0 MPa**.
σs = 500 / 1,15 = **434,8 MPa**.
Eij = 11 000 × 30^(1/3) = 11 000 × 3,107 = **34 180 MPa**.`},
  {t:"Section et poids d'acier", d:1, e:`Une poutre contient en partie basse 3 HA16 et en partie haute 2 HA12. Elle mesure 5,40 m.
1. Calculer la section d'acier inférieure et supérieure (cm²).
2. Calculer la masse d'acier longitudinal de la poutre.`, c:`1. Inférieure : 3 × 2,01 = **6,03 cm²** ; supérieure : 2 × 1,13 = **2,26 cm²**.
2. HA16 : 3 × 5,40 × 1,578 = 25,56 kg ; HA12 : 2 × 5,40 × 0,888 = 9,59 kg.
**Total : 35,2 kg** (sans les crochets ni les cadres).`},
  {t:"Déformations limites", d:2, e:`Un acier FeE400 travaille à σs = 348 MPa dans une poutre.
1. Calculer son allongement relatif εl.
2. Sur une portée de 5 m, de combien s'allongerait une barre soumise à cette contrainte sur toute sa longueur ?
3. Pourquoi le règlement limite-t-il l'allongement de l'acier à 10 ‰ ?`, c:`1. εl = σs / Es = 348 / 200 000 = **1,74 ‰**.
2. ΔL = 1,74 × 10⁻³ × 5 000 = **8,7 mm**.
3. Au-delà, l'ouverture des fissures du béton tendu deviendrait excessive et la déformation de la pièce inacceptable ; 10 ‰ correspond à une ruine « ductile » avec de grandes fissures visibles, qui préviennent avant la rupture.`},
  {t:"Fluage du béton", d:2, e:`Un poteau en béton (fc28 = 25 MPa) est comprimé en permanence à 8 MPa.
1. Calculer son raccourcissement relatif instantané (Eij) et à long terme (Evj).
2. Pour un poteau de 3 m, que vaut le raccourcissement total à long terme ?`, c:`1. Instantané : ε = 8 / 32 164 = **0,25 ‰** ; à long terme : ε = 8 / 10 819 = **0,74 ‰** (environ 3 fois plus, à cause du fluage).
2. ΔL = 0,74 × 10⁻³ × 3 000 = **2,2 mm**. Dans un immeuble de 10 niveaux, ces raccourcissements s'additionnent : il faut en tenir compte pour les façades rigides et les ascenseurs.`},
  {t:"Choisir entre deux nuances d'acier", d:2, e:`Une barre doit reprendre une traction de 105 kN à l'ELU. Comparer la section nécessaire en FeE400 et en FeE500, puis choisir les barres.`, c:`FeE400 : As = 105 000 / 347,8 = 302 mm² = **3,02 cm²** → 2 HA14 (3,08 cm²).
FeE500 : As = 105 000 / 434,8 = 241 mm² = **2,41 cm²** → 2 HA14 aussi (ou 3 HA10 = 2,37 cm², insuffisant de peu → 2 HA14).
L'acier FeE500 permet d'économiser environ 20 % d'acier, mais il faut vérifier les conditions de l'ELS (fissuration) qui peuvent annuler ce gain.`}
 ],
 quiz:[
  {q:"Pour fc28 = 25 MPa, la résistance à la traction vaut :", o:["25 MPa","2,1 MPa","14,17 MPa","0,25 MPa"], r:1, e:"ft28 = 0,6 + 0,06 × 25 = 2,1 MPa."},
  {q:"La contrainte de calcul du béton à l'ELU (fc28 = 25 MPa) vaut :", o:["25 MPa","14,17 MPa","16,67 MPa","21,25 MPa"], r:1, e:"fbu = 0,85 × 25 / 1,5."},
  {q:"Pour un acier FeE400, σs à l'ELU vaut :", o:["400 MPa","348 MPa","267 MPa","235 MPa"], r:1, e:"fe / γs = 400 / 1,15."},
  {q:"La masse d'un mètre de HA12 vaut environ :", o:["0,395 kg","0,617 kg","0,888 kg","1,578 kg"], r:2, e:"0,006 17 × 12² = 0,888 kg/m."},
  {q:"Le raccourcissement ultime du béton en flexion vaut :", o:["2 ‰","3,5 ‰","10 ‰","1,74 ‰"], r:1, e:"Pivot B : 3,5 ‰."}
 ]},

{id:"ba-2", niv:1, titre:"États limites, actions et combinaisons", duree:55, contenu:`## La notion d'état limite
Un **état limite** est une situation au-delà de laquelle l'ouvrage ne remplit plus sa fonction. On en distingue deux familles :
- les **états limites ultimes (ELU)** : ruine de l'ouvrage ou d'un élément (rupture, flambement, perte d'équilibre, renversement). On les vérifie avec des **charges majorées** et des **résistances minorées** ;
- les **états limites de service (ELS)** : l'ouvrage reste debout mais devient inutilisable ou peu durable (fissures trop ouvertes, flèches excessives, compression excessive du béton). On les vérifie sous les **charges réelles**.

## Les actions
| Type | Symbole | Exemples |
|---|---|---|
| Actions permanentes | G | poids propre, revêtements, cloisons fixes, poussée des terres |
| Actions variables | Q | charges d'exploitation, vent W, neige, température |
| Actions accidentelles | FA | séisme, choc de véhicule, explosion, incendie |
Les valeurs de G se calculent avec les poids volumiques (béton armé 25 kN/m³) ; celles de Q sont données par les normes (logements 1,5 kN/m², bureaux 2,5, balcons 3,5, escaliers 2,5…).

## Les combinaisons du BAEL
### À l'ELU (combinaison fondamentale)
$$ 1,35 G + 1,5 Q1 + Σ 1,3 ψ0i Qi
- Q1 : l'action variable **de base** (la principale) ; Qi : les actions d'**accompagnement**, réduites par ψ0 (0,77 pour les charges d'exploitation des bâtiments courants).
- Cas courant (une seule action variable) : **pu = 1,35 G + 1,5 Q**.
- Avec le vent : 1,35 G + 1,5 W + 1,3 × 0,77 Q, ou 1,35 G + 1,5 Q + 1,3 × 0,77 W selon l'action de base ; on retient la plus défavorable.
- Cas où G est favorable (soulèvement, renversement) : on prend **G** (et non 1,35 G) : par exemple G + 1,5 W pour une toiture légère soulevée par le vent.

### À l'ELS
$$ G + Q1 + Σ ψ0i Qi      cas courant : pser = G + Q

### En situation accidentelle
$$ G + FA + ψ11 Q1 + Σ ψ2i Qi

> [!exemple] Charges d'une poutre de plancher
> g = 21,85 kN/m (dalle 15 cm + revêtements + poids propre) ; q = 6,0 kN/m (logement).
> ELU : pu = 1,35 × 21,85 + 1,5 × 6,0 = 29,50 + 9,00 = **38,50 kN/m**.
> ELS : pser = 21,85 + 6,0 = **27,85 kN/m**.
> Pour une poutre de 5 m sur deux appuis : Mu = 38,50 × 25 / 8 = **120,3 kN·m** ; Mser = 27,85 × 25 / 8 = **87,0 kN·m**.

## Les conditions de fissuration
Le règlement classe chaque élément selon le risque de corrosion de ses armatures, ce qui fixe les vérifications à l'ELS :
| Fissuration | Cas | Conséquence |
|---|---|---|
| Peu préjudiciable (FPN) | éléments intérieurs, locaux clos et couverts | pas de limite de σs à l'ELS |
| Préjudiciable (FP) | éléments exposés aux intempéries, condensations, eau douce | σs limitée (≈ 200 MPa en FeE400) |
| Très préjudiciable (FTP) | milieu agressif, bord de mer, réservoirs, eaux usées | σs limitée à 0,8 fois la valeur FP |
À Abidjan, Grand-Bassam ou San-Pédro, les éléments extérieurs proches de la mer sont souvent traités en fissuration **très préjudiciable**, avec un enrobage renforcé.

## Les coefficients de sécurité en résumé
| Coefficient | Valeur | Rôle |
|---|---|---|
| γG | 1,35 (défavorable) ou 1,0 (favorable) | majoration des charges permanentes |
| γQ | 1,5 | majoration des charges variables |
| γb | 1,5 (1,15 accidentel) | minoration de la résistance du béton |
| γs | 1,15 (1,0 accidentel) | minoration de la résistance de l'acier |
L'**Eurocode** utilise les mêmes coefficients de charges (1,35 G + 1,5 Q) et γc = 1,5, γs = 1,15 : les principes sont identiques.

> [!retenir]
> - ELU = sécurité (rupture) avec 1,35 G + 1,5 Q ; ELS = durabilité et confort avec G + Q.
> - On vérifie toujours les deux.
> - Quand G est favorable (soulèvement, renversement), on le prend avec le coefficient 1,0.
> - Le classement de la fissuration (FPN, FP, FTP) dépend de l'exposition de l'élément.`,
 sujet:{titre:"Combinaisons d'actions d'une poutre et soulèvement d'une toiture", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le bureau d'études prépare les combinaisons d'actions d'un bâtiment de bureaux à Abidjan.

**Données** : BAEL 91 révisé 99 — béton fc28 = 25 MPa, aciers HA FeE500, γb = 1,5, γs = 1,15, θ = 1.
- Poutre sur deux appuis, portée **5,00 m** : charge permanente **G = 20 kN/m**, charge d'exploitation **Q = 8 kN/m** ;
- Toiture légère en tôle sur pannes : poids **G = 0,30 kN/m²** ; effet du vent en dépression (soulèvement) **W = − 0,80 kN/m²** ;
- Combinaisons : ELU fondamental 1,35 G + 1,5 Q ; ELS G + Q ; vent favorable au soulèvement : G + 1,5 W (G pris à sa valeur minimale).

### Partie A — États limites (5 points)
1. Définir l'ELU et l'ELS et donner un exemple de vérification pour chacun. (3 pts)
2. Pourquoi les coefficients de pondération de G et de Q sont-ils différents ? (2 pts)

### Partie B — Poutre (10 points)
3. Calculer pu et pser. (3 pts)
4. Calculer Mu, Mser et Vu. (4 pts)
5. Avec quel moment calcule-t-on les aciers ? avec quel moment vérifie-t-on les contraintes et la fissuration ? (3 pts)

### Partie C — Toiture (5 points)
6. Calculer la charge résultante sous la combinaison G + 1,5 W. Interpréter son signe. (3 pts)
7. Quelles dispositions prendre ? (2 pts)`,
  corrige:`### Partie A — États limites (5 pts)
1. **ELU** (état limite ultime) : ruine ou perte d'équilibre ; on vérifie la résistance (ex. calcul des aciers de flexion, flambement). **ELS** (service) : confort et durabilité ; on vérifie les contraintes, l'ouverture des fissures et les flèches. *(3 pts)*
2. G est connue avec précision (poids des matériaux) : 1,35 ; Q est plus incertaine (occupation variable) : 1,5. *(2 pts)*

### Partie B — Poutre (10 pts)
3. **pu = 1,35 × 20 + 1,5 × 8 = 27 + 12 = 39 kN/m** ; **pser = 28 kN/m**. *(3 pts)*
4. **Mu = 39 × 5² / 8 = 121,9 kN·m** ; **Mser = 28 × 25 / 8 = 87,5 kN·m** ; **Vu = 39 × 5 / 2 = 97,5 kN**. *(4 pts)*
5. Les aciers se calculent à l'**ELU** avec Mu (puis Vu pour les cadres) ; les contraintes du béton et de l'acier, la fissuration et la flèche se vérifient à l'**ELS** avec Mser. *(3 pts)*

### Partie C — Toiture (5 pts)
6. 0,30 + 1,5 × (− 0,80) = 0,30 − 1,20 = **− 0,90 kN/m²** : la résultante est **dirigée vers le haut** ; le vent arrache la toiture si elle n'est pas ancrée. *(3 pts)*
7. Fixer les tôles sur les pannes (tire-fonds, crochets), ancrer les pannes et la charpente dans les chaînages (pattes scellées, tiges filetées), et prévoir un chaînage haut capable de reprendre cet arrachement. *(2 pts)*

> [!attention] Erreurs à éviter
> - Majorer le poids propre (1,35 G) dans une vérification où il est favorable (soulèvement).
> - Calculer les aciers avec Mser.
> - Oublier les combinaisons de vent pour les toitures légères (cause fréquente de sinistres).`},
 exercices:[
  {t:"Combinaisons pour un plancher", d:1, e:`Un plancher de bureaux porte G = 5,2 kN/m² et Q = 2,5 kN/m². Calculer les charges surfaciques à l'ELU et à l'ELS.`, c:`ELU : pu = 1,35 × 5,2 + 1,5 × 2,5 = 7,02 + 3,75 = **10,77 kN/m²**.
ELS : pser = 5,2 + 2,5 = **7,7 kN/m²**.
Rapport pu / pser = 1,40 : valeur typique en bâtiment.`},
  {t:"Moments ELU et ELS d'une poutre", d:1, e:`Une poutre de 4,5 m sur deux appuis porte g = 18 kN/m et q = 7 kN/m. Calculer Mu et Mser à mi-portée et Vu sur appui.`, c:`pu = 1,35 × 18 + 1,5 × 7 = 24,3 + 10,5 = **34,8 kN/m** ; pser = **25 kN/m**.
**Mu = 34,8 × 4,5² / 8 = 88,1 kN·m** ; **Mser = 25 × 4,5² / 8 = 63,3 kN·m**.
**Vu = 34,8 × 4,5 / 2 = 78,3 kN.**`},
  {t:"Toiture légère soulevée par le vent", d:2, e:`Une toiture en bacs acier pèse G = 0,25 kN/m². Le vent provoque une dépression (soulèvement) de 0,9 kN/m².
1. Quelle combinaison ELU faut-il utiliser pour vérifier les fixations au soulèvement ?
2. Calculer la charge résultante sur les fixations.`, c:`1. Le poids propre est **favorable** (il s'oppose au soulèvement) : on le prend avec γG = 1,0, et le vent avec 1,5 : **G + 1,5 W**.
2. p = 0,25 − 1,5 × 0,9 = 0,25 − 1,35 = **−1,10 kN/m²** : la toiture est soulevée de 1,10 kN/m². Les fixations (et les ancrages des pannes sur la structure) doivent reprendre cet arrachement. Prendre 1,35 G ici aurait été du côté de l'insécurité.`},
  {t:"Classer la fissuration", d:1, e:`Indiquer le type de fissuration à retenir pour :
1. une poutre intérieure d'un séjour ;
2. un balcon exposé à la pluie à Bouaké ;
3. un château d'eau ;
4. un mur de quai au port d'Abidjan ;
5. une semelle de fondation dans un sol sec.`, c:`1. **Peu préjudiciable** (local clos et couvert).
2. **Préjudiciable** (exposé aux intempéries).
3. **Très préjudiciable** (contact permanent avec l'eau, étanchéité exigée).
4. **Très préjudiciable** (eau de mer, milieu agressif).
5. **Préjudiciable** en général (contact avec le sol humide) ; on retient souvent FP pour les fondations.`},
  {t:"Combinaison avec le vent", d:3, e:`Un poteau de hangar reçoit : G = 60 kN, Q (toiture) = 20 kN, et le vent crée un effort normal de traction de W = 35 kN (soulèvement) ou de compression de W = 25 kN selon la direction. ψ0 = 0,77.
1. Calculer l'effort normal de compression maximal à l'ELU.
2. Calculer l'effort de soulèvement le plus défavorable.`, c:`1. Compression : action de base Q : 1,35 × 60 + 1,5 × 20 + 1,3 × 0,77 × 25 = 81 + 30 + 25,0 = **136,0 kN** ; action de base W : 1,35 × 60 + 1,5 × 25 + 1,3 × 0,77 × 20 = 81 + 37,5 + 20,0 = **138,5 kN** → on retient **138,5 kN**.
2. Soulèvement : G favorable (1,0), Q absente (défavorable de la négliger) : 60 − 1,5 × 35 = 60 − 52,5 = **+7,5 kN** : le poteau reste comprimé, mais de très peu. Le massif de fondation doit assurer une marge (un massif plus lourd est souvent nécessaire pour les hangars légers).`}
 ],
 quiz:[
  {q:"La combinaison ELU courante est :", o:["G + Q","1,35 G + 1,5 Q","1,5 G + 1,35 Q","G + 1,5 Q"], r:1, e:"Combinaison fondamentale avec une seule action variable."},
  {q:"L'ELS sert principalement à vérifier :", o:["La rupture","Les fissures, les flèches et la compression du béton en service","Le renversement","Le flambement"], r:1, e:"États limites de service : durabilité et confort."},
  {q:"Quand le poids propre s'oppose au soulèvement, on le prend avec le coefficient :", o:["1,35","1,5","1,0","0,77"], r:2, e:"Une action favorable n'est pas majorée."},
  {q:"Un élément exposé aux intempéries est en fissuration :", o:["Peu préjudiciable","Préjudiciable","Très préjudiciable","Sans objet"], r:1, e:"FP : intempéries, condensations."},
  {q:"γs vaut en situation durable :", o:["1,0","1,15","1,35","1,5"], r:1, e:"γs = 1,15 ; 1,0 en situation accidentelle."}
 ]},

{id:"ba-11", niv:1, titre:"Descente de charges d'un bâtiment", duree:70, contenu:`## Le principe
La **descente de charges** consiste à suivre le chemin des charges depuis la toiture jusqu'au sol, élément par élément, pour connaître l'effort que chaque poutre, poteau, mur et semelle doit reprendre :
**toiture / terrasse → planchers → poutres → poteaux ou murs → fondations → sol**.
On la fait en deux colonnes, **G** et **Q**, en cumulant niveau par niveau, puis on applique les combinaisons ELU et ELS.

## Les surfaces d'influence
Un poteau reprend la surface de plancher comprise entre les **mi-portées** des travées qui l'entourent :
- poteau **intérieur** : (l1/2 + l2/2) × (l3/2 + l4/2) ;
- poteau de **rive** : un seul côté dans une direction ;
- poteau d'**angle** : un quart de travée dans chaque direction.
Les charges linéiques (murs de façade, acrotères, poutres) se comptent sur la longueur reprise.

!fig:pl|Plancher et poutres : chaque poteau reprend une surface d'influence

## La continuité des poutres
Si les poutres sont **continues**, le poteau voisin d'un poteau de rive reprend plus que sa part « isostatique ». Le BAEL demande de **majorer** sa charge :
- de **15 %** pour une poutre continue à deux travées ;
- de **10 %** pour une poutre de plus de deux travées.
(En contrepartie, on ne minore pas les poteaux de rive.)

## Les charges permanentes à recenser
| Élément | Calcul |
|---|---|
| Plancher à corps creux 16+4 | ≈ 2,80 kN/m² |
| Plancher à corps creux 20+4 | ≈ 3,30 kN/m² |
| Dalle pleine | épaisseur × 25 kN/m³ |
| Revêtement carrelage + chape | ≈ 1,0 à 1,2 kN/m² |
| Enduit sous plafond | 0,2 à 0,3 kN/m² |
| Cloisons légères réparties | ≈ 1,0 kN/m² |
| Étanchéité multicouche + protection | ≈ 0,5 à 1,0 kN/m² |
| Forme de pente (béton maigre 8 cm moyen) | ≈ 1,8 kN/m² |
| Poids propre poutre (retombée) | b × (h − hdalle) × 25 |
| Poids propre poteau | a × b × hauteur × 25 |
| Mur en agglos de 15 enduit | ≈ 2,0 kN/m² × hauteur |
| Acrotère en agglos ou béton | selon hauteur, ≈ 2,0 kN/m |

## La dégression des charges d'exploitation
Dans un immeuble, il est peu probable que tous les étages soient chargés au maximum en même temps. Pour les bâtiments à usage d'habitation de plus de 5 niveaux, on peut réduire les charges d'exploitation cumulées (norme NF P 06-001) : sous la terrasse Q0, puis Q0 + Q1, Q0 + 0,95 (Q1 + Q2), Q0 + 0,90 (Q1 + Q2 + Q3)… jusqu'à un coefficient de (3 + n) / (2n) à partir de n ≥ 5 étages sous la terrasse. Pour une maison ou un R+2, on ne réduit pas.

> [!exemple] Descente de charges d'un poteau intérieur d'un R+1
> Poteau 20 × 20 cm, hauteur d'étage 3,0 m, surface d'influence 4,0 × 4,5 = **18 m²** à chaque niveau.
> **Terrasse** : corps creux 16+4 (2,80) + étanchéité et protection (0,80) + forme de pente (1,80) + enduit (0,25) = 5,65 kN/m² ; Q = 1,0 kN/m² (inaccessible).
> **Plancher haut du RDC** : corps creux 16+4 (2,80) + carrelage et chape (1,10) + enduit (0,25) + cloisons (1,00) = 5,15 kN/m² ; Q = 1,5 kN/m².
> Poutres 20 × 40 (retombée 20 cm) : 0,20 × 0,20 × 25 = 1,0 kN/m, sur 4,0 + 4,5 = 8,5 m par niveau = 8,5 kN.
> | Niveau | G (kN) | Q (kN) |
> |---|---|---|
> | Terrasse : 5,65 × 18 | 101,7 | 18,0 |
> | Poutres terrasse | 8,5 | — |
> | Poteau étage : 0,2 × 0,2 × 3 × 25 | 3,0 | — |
> | Plancher RDC : 5,15 × 18 | 92,7 | 27,0 |
> | Poutres plancher | 8,5 | — |
> | Poteau RDC | 3,0 | — |
> | **Cumul en pied de poteau RDC** | **217,4** | **45,0** |
> Nu = 1,35 × 217,4 + 1,5 × 45,0 = 293,5 + 67,5 = **361,0 kN** ; Nser = 217,4 + 45,0 = **262,4 kN**.
> Si ce poteau est le premier poteau intérieur d'une file continue à deux travées : Nu × 1,15 = **415,2 kN**.

## La charge sur la fondation
On ajoute en pied de poteau le poids de l'**amorce** de poteau enterré, de la **semelle** (estimée puis vérifiée) et des **terres** au-dessus de la semelle. Ces charges peuvent représenter 10 à 20 % de la charge totale pour une maison.

## Murs porteurs
Pour un mur porteur, on raisonne **par mètre linéaire** : planchers (portée reprise / 2 de chaque côté), chaînages, poids du mur sur sa hauteur, cumulés de haut en bas.

> [!retenir]
> - On cumule G et Q séparément de haut en bas, puis on combine.
> - Surface d'influence : mi-portées de chaque côté.
> - Poteau voisin de rive : + 15 % (2 travées) ou + 10 % (plus de 2 travées).
> - Ne pas oublier : poutres, poteaux, acrotères, murs, cloisons, semelles et terres.`,
 sujet:{titre:"Descente de charges sur un poteau intérieur d'un R+1", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Immeuble R+1 à toiture-terrasse. On calcule la charge transmise par un **poteau intérieur** jusqu'à sa semelle.

**Données** : BAEL 91 révisé 99 — béton fc28 = 25 MPa, aciers HA FeE500, γb = 1,5, γs = 1,15, θ = 1.
- Surface d'influence du poteau : **4,00 × 4,50 m** à chaque niveau ;
- Terrasse inaccessible : G = **6,0 kN/m²** (plancher, forme de pente, étanchéité, protection), Q = **1,0 kN/m²** ;
- Étage courant : plancher 16+4 et revêtements G = **4,8 kN/m²**, Q = **1,5 kN/m²** (habitation) ;
- Poutres 20 × 40 cm : longueur reprise par niveau **4,00 + 4,50 = 8,50 m** ;
- Poteau 25 × 25 cm, hauteur **3,00 m** par niveau (deux tronçons : RDC et étage) ;
- Poteau voisin d'un appui de rive de poutre continue : majoration **1,15** de la charge ;
- Contrainte admissible du sol : **0,20 MPa** (à l'ELS).

### Partie A — Charges permanentes (8 points)
1. Calculer la surface d'influence. (1 pt)
2. Calculer les charges G apportées par la terrasse, l'étage, les poutres et le poteau. (5 pts)
3. En déduire G en pied de poteau. (2 pts)

### Partie B — Exploitation et combinaisons (6 points)
4. Calculer Q en pied de poteau. (2 pts)
5. Calculer Nu et Nser, puis Nu majoré de 15 %. (4 pts)

### Partie C — Semelle (6 points)
6. Calculer l'aire minimale de la semelle carrée et choisir ses dimensions (au multiple de 5 cm). (4 pts)
7. Pourquoi la semelle se dimensionne-t-elle à l'ELS ? (2 pts)`,
  corrige:`### Partie A — Permanentes (8 pts)
1. S = 4,00 × 4,50 = **18,0 m²**. *(1 pt)*
2. *(5 pts)*

| Élément | Calcul | G (kN) |
|---|---|---|
| Terrasse | 6,0 × 18 | 108,0 |
| Poutres terrasse | 0,20 × 0,40 × 25 × 8,50 | 17,0 |
| Poteau étage | 0,25² × 3,00 × 25 | 4,7 |
| Étage | 4,8 × 18 | 86,4 |
| Poutres étage | idem | 17,0 |
| Poteau RDC | idem | 4,7 |

3. **G = 237,8 kN** en pied de poteau. *(2 pts)*

### Partie B — Combinaisons (6 pts)
4. Q = 1,0 × 18 + 1,5 × 18 = 18 + 27 = **45 kN**. *(2 pts)*
5. **Nu = 1,35 × 237,8 + 1,5 × 45 = 321,0 + 67,5 = 388,5 kN** ; **Nser = 282,8 kN** ; Nu majoré : 1,15 × 388,5 = **446,8 kN** (valeur pour le ferraillage du poteau). *(4 pts)*

### Partie C — Semelle (6 pts)
6. A ≥ Nser / σsol = 282,8 / 200 = **1,41 m²** (on ajoute ensuite le poids de la semelle) → côté √1,41 = 1,19 m → **1,20 × 1,20 m** (1,44 m²) ou 1,25 m pour couvrir le poids propre de la semelle. *(4 pts)*
7. La contrainte admissible du sol est une valeur de **service** (elle inclut déjà un coefficient de sécurité sur la portance et limite les tassements) : on la compare aux charges de service. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le poids des poutres et du poteau.
> - Compter deux fois la terrasse ou oublier un niveau.
> - Comparer Nu à la contrainte admissible du sol.`},
 exercices:[
  {t:"Surface d'influence", d:1, e:`Un bâtiment a des poteaux espacés de 4,20 m dans un sens et de 3,60 m et 5,00 m dans l'autre. Calculer la surface d'influence :
1. d'un poteau intérieur entre les travées de 3,60 m et 5,00 m ;
2. d'un poteau de rive du côté de la travée de 5,00 m ;
3. d'un poteau d'angle du côté de la travée de 3,60 m.`, c:`1. Intérieur : (3,60/2 + 5,00/2) × (4,20/2 + 4,20/2) = 4,30 × 4,20 = **18,06 m²**.
2. Rive (une seule travée de 5,00 m dans ce sens) : (5,00/2) × 4,20 = 2,50 × 4,20 = **10,50 m²**.
3. Angle : (3,60/2) × (4,20/2) = 1,80 × 2,10 = **3,78 m²**.`},
  {t:"Charges d'un plancher", d:1, e:`Composer la charge permanente surfacique d'un plancher à corps creux 16+4 avec carrelage et chape (1,1 kN/m²), enduit en sous-face (0,25 kN/m²) et cloisons légères (1,0 kN/m²). Donner G et Q pour un logement.`, c:`G = 2,80 + 1,10 + 0,25 + 1,00 = **5,15 kN/m²**.
Q = **1,5 kN/m²** (logement).`},
  {t:"Descente de charges d'un poteau de rive", d:2, e:`Un poteau de rive 20 × 20 cm d'une maison R+1 reprend 2,25 × 4,0 = 9 m² de plancher par niveau. Il porte aussi la façade : mur en agglos de 15 enduit (2,0 kN/m²) de 2,70 m de haut sur 4,0 m à l'étage, et un acrotère de 2,0 kN/m sur 4,0 m en terrasse. Charges de plancher : terrasse G = 5,65 kN/m², Q = 1,0 ; plancher G = 5,15 kN/m², Q = 1,5. Poutres : 8,5 kN par niveau. Hauteur d'étage 3,0 m.
Calculer Nu et Nser en pied de poteau du RDC.`, c:`| Élément | G (kN) | Q (kN) |
|---|---|---|
| Terrasse 5,65 × 9 | 50,9 | 9,0 |
| Acrotère 2,0 × 4,0 | 8,0 | — |
| Poutres terrasse | 8,5 | — |
| Poteau étage 0,2 × 0,2 × 3 × 25 | 3,0 | — |
| Mur de façade étage 2,0 × 2,70 × 4,0 | 21,6 | — |
| Plancher 5,15 × 9 | 46,4 | 13,5 |
| Poutres plancher | 8,5 | — |
| Poteau RDC | 3,0 | — |
| **Total** | **149,9** | **22,5** |
**Nu = 1,35 × 149,9 + 1,5 × 22,5 = 202,4 + 33,8 = 236,2 kN** ; **Nser = 172,4 kN**.
(Le mur de façade du RDC repose directement sur la longrine et ne charge pas le poteau.)`},
  {t:"Majoration de continuité", d:2, e:`Une file de poutres continues à trois travées de 4 m repose sur quatre poteaux A, B, C, D. La charge ELU transmise par les planchers vaut 30 kN/m le long de la file.
1. Calculer les charges des poteaux en considérant des travées isostatiques.
2. Appliquer les majorations du BAEL.`, c:`1. Isostatique : A et D reprennent 30 × 4 / 2 = **60 kN** ; B et C reprennent 30 × 4 = **120 kN**.
2. Plus de deux travées : majoration de **10 %** des poteaux voisins des poteaux de rive (B et C) : **132 kN**. A et D restent à 60 kN.
(Le calcul exact d'une poutre continue à 3 travées égales donne 1,1 qL = 132 kN : la majoration forfaitaire retrouve ce résultat.)`},
  {t:"Charge totale sur une semelle", d:3, e:`Le poteau intérieur de l'exemple du cours (Nser = 262,4 kN, Nu = 361,0 kN) se prolonge par une amorce de 20 × 20 cm sur 1,0 m jusqu'à une semelle de 1,20 × 1,20 × 0,30 m. Au-dessus de la semelle, 0,70 m de terre (18 kN/m³).
1. Calculer le poids de l'amorce, de la semelle et des terres.
2. En déduire Nser et Nu au niveau de l'assise.
3. Calculer la contrainte moyenne sur le sol à l'ELS.`, c:`1. Amorce : 0,2 × 0,2 × 1,0 × 25 = **1,0 kN** ; semelle : 1,2 × 1,2 × 0,3 × 25 = **10,8 kN** ; terres : (1,44 − 0,04) × 0,70 × 18 = **17,6 kN**.
Total G supplémentaire : 29,4 kN.
2. **Nser = 262,4 + 29,4 = 291,8 kN** ; **Nu = 361,0 + 1,35 × 29,4 = 400,7 kN**.
3. σsol = 291,8 / 1,44 = **202,6 kPa ≈ 0,20 MPa**. Il faudra comparer à la contrainte admissible du sol donnée par l'étude géotechnique et, si besoin, agrandir la semelle (ce qui augmente un peu son poids : on itère).`}
 ],
 quiz:[
  {q:"La surface d'influence d'un poteau intérieur s'obtient en prenant :", o:["Les portées entières","Les mi-portées de chaque côté","Le quart des portées","La surface du plancher entier"], r:1, e:"La charge se partage à mi-portée entre deux appuis."},
  {q:"Pour une poutre continue à deux travées, le poteau central est majoré de :", o:["5 %","10 %","15 %","25 %"], r:2, e:"15 % pour deux travées, 10 % au-delà."},
  {q:"Dans une descente de charges, on cumule :", o:["Les charges ELU de chaque niveau","G et Q séparément, puis on combine","Seulement les charges de la terrasse","Seulement Q"], r:1, e:"On combine à la fin, au niveau étudié."},
  {q:"Un plancher à corps creux 16+4 pèse environ :", o:["1,2 kN/m²","2,8 kN/m²","5,0 kN/m²","0,5 kN/m²"], r:1, e:"Valeur courante, hors revêtements."},
  {q:"Les charges des terres au-dessus d'une semelle sont :", o:["Négligées","Des charges permanentes à ajouter","Des charges d'exploitation","Favorables à la portance"], r:1, e:"Elles pèsent sur la semelle et le sol."}
 ]},

{id:"ba-3", niv:1, titre:"Dispositions constructives : enrobage, espacements, sections minimales", duree:55, contenu:`## L'enrobage : protéger les aciers
L'**enrobage** c est la distance entre la surface extérieure de l'armature la plus proche (souvent le cadre) et la face du béton. Il protège l'acier de la **corrosion** et du **feu**, et permet l'**adhérence**.

!fig:enrobage|Enrobage mesuré depuis l'armature la plus extérieure (cadre)

| Exposition (BAEL) | Enrobage minimal |
|---|---|
| Locaux couverts et clos, non exposés aux condensations | 1 cm |
| Parois exposées aux intempéries, aux condensations, en contact avec un liquide ou la terre | 3 cm (2 cm si fc28 ≥ 40 MPa) |
| Ouvrages à la mer, exposés aux embruns ou à des atmosphères très agressives | 5 cm |
De plus, l'enrobage doit être au moins égal au **diamètre** de la barre. En pratique de chantier, on adopte souvent : **2,5 cm** pour les poutres et poteaux intérieurs, **3 cm** pour les éléments extérieurs, **4 à 5 cm** pour les fondations (coulées contre un béton de propreté) et les ouvrages en bord de mer. L'Eurocode 2 impose des enrobages un peu plus forts, fonction des **classes d'exposition** (XC1 à XC4 pour la carbonatation, XS pour l'eau de mer).

> [!attention] Sur le chantier
> L'enrobage est garanti par des **cales** (en béton ou en plastique) fixées sous et sur les côtés des cages d'armatures. Des aciers posés directement sur le coffrage rouillent en quelques années : éclatement du béton, aciers apparents, réparations coûteuses. C'est l'une des pathologies les plus fréquentes.

## Les espacements entre barres
Le béton doit pouvoir passer entre les barres et les enrober complètement :
$$ espacement horizontal eh ≥ max (φ ; 1,5 cg)      espacement vertical ev ≥ max (φ ; cg)
(cg : dimension du plus gros granulat, en général 20 à 25 mm). Avec un gravier 15/25 : **eh ≥ 3,75 cm**, **ev ≥ 2,5 cm**.
Nombre maximal de barres de diamètre φ dans une largeur b, avec des cadres de diamètre φt :
$$ n ≤ (b − 2c − 2φt + eh) / (φ + eh)
Au-delà, on dispose les barres sur **deux lits** (ce qui réduit la hauteur utile d).

> [!exemple] Combien de barres dans une poutre de 20 cm ?
> c = 2,5 cm, cadres HA6, gravier 25 mm (eh = 3,75 cm).
> - 3 HA14 : largeur nécessaire = 2 × 2,5 + 2 × 0,6 + 3 × 1,4 + 2 × 3,75 = 5 + 1,2 + 4,2 + 7,5 = **17,9 cm ≤ 20** ✔.
> - 4 HA14 : 5 + 1,2 + 5,6 + 3 × 3,75 = **23,05 cm > 20** ✘ → deux lits (3 + 1) ou poutre plus large.

## La hauteur utile d
La **hauteur utile** d est la distance entre la fibre la plus comprimée et le **centre de gravité des aciers tendus** :
$$ d = h − c − φt − φ/2      (un seul lit)
Valeur courante pour une estimation : **d ≈ 0,9 h**. Pour deux lits, on prend le centre de gravité des deux lits.

## Les sections minimales et les diamètres
| Élément | Règles courantes |
|---|---|
| Poutres | largeur ≥ 15 à 20 cm ; au moins 2 barres en bas et 2 barres en haut (aciers de montage) ; φ ≥ 10 mm |
| Poteaux | section ≥ 20 × 20 cm en pratique ; au moins 4 barres (une par angle), φ ≥ 12 mm ; As ≥ 4 cm² par mètre de périmètre et ≥ 0,2 % B ; As ≤ 5 % B |
| Dalles | φ ≤ h / 10 ; espacement ≤ min (3h ; 33 cm) dans le sens porteur, min (4h ; 45 cm) dans l'autre (fissuration peu préjudiciable) |
| Cadres et étriers | φt ≥ φl / 3 ; φt ≤ min (h/35 ; b/10 ; φl) pour les poutres |
| Condition de non-fragilité (flexion) | As ≥ 0,23 × b × d × ft28 / fe |

> [!exemple] Section minimale d'une poutre
> Poutre 20 × 40 cm, d = 36 cm, fc28 = 25 MPa, FeE400 :
> Amin = 0,23 × 20 × 36 × 2,1 / 400 = **0,87 cm²** → 2 HA8 suffiraient ; en pratique on ne descend pas sous 2 HA10 en partie basse.

## Les chaînages
La **maçonnerie chaînée** (murs en agglos + chaînages en béton armé) est le système le plus courant pour les maisons :
- **chaînages horizontaux** à chaque plancher et en tête de mur (en général 4 HA10 ou 4 HA12 + cadres HA6 tous les 15 à 20 cm) ;
- **chaînages verticaux** (raidisseurs) aux angles, aux intersections de murs, de part et d'autre des grandes ouvertures et au moins tous les 4 à 5 m ;
- les aciers des chaînages doivent être **continus** (recouvrements et retours d'angle).

!fig:chainage|Chaînages horizontaux et verticaux dans une maçonnerie

## Les reprises de bétonnage
Une **reprise** (joint entre deux bétonnages) est un point faible. On la place là où les efforts sont faibles (vers le quart de portée des poutres, pas sur appui), on **pique** et on **humidifie** le béton ancien, et les aciers la traversent sans interruption.

> [!retenir]
> - Enrobage : 1 cm (intérieur) / 3 cm (intempéries, terre) / 5 cm (mer) au BAEL ; toujours ≥ φ ; cales obligatoires.
> - eh ≥ max(φ ; 1,5 cg) ; ev ≥ max(φ ; cg).
> - d ≈ 0,9 h ; deux lits si les barres ne passent pas.
> - Non-fragilité : As ≥ 0,23 b d ft28 / fe.`,
 sujet:{titre:"Enrobages, espacements et sections minimales d'une poutre et d'un poteau", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le contrôleur technique vérifie les dispositions constructives d'une poutre de façade et d'un poteau d'une maison en bord de lagune.

**Données** : BAEL 91 révisé 99 — béton fc28 = 25 MPa, aciers HA FeE500, γb = 1,5, γs = 1,15, θ = 1.
- Poutre **20 × 40 cm**, enrobage **3 cm** (ouvrage exposé aux intempéries), cadres **HA6**, aciers principaux **HA14**, gros granulat **Dmax = 20 mm** ;
- Espacement libre minimal entre barres : max (Ø ; 1,5 Dmax) ;
- Condition de non-fragilité d'une poutre : A ≥ 0,23 b d ft28 / fe ;
- Poteau **25 × 25 cm**, aciers HA12 ; section minimale : max (4 cm² par mètre de périmètre ; 0,2 % B) ; section maximale : 5 % B ; cadres : Øt ≥ Øl / 3 ; espacement ≤ min (40 cm ; a + 10 cm ; 15 Øl).

### Partie A — Enrobage et hauteur utile (5 points)
1. Pourquoi faut-il un enrobage suffisant ? Quelle valeur en milieu marin ? (2 pts)
2. Calculer la hauteur utile d de la poutre. (3 pts)

### Partie B — Placement des barres (7 points)
3. Calculer la largeur disponible entre les cadres. (2 pts)
4. Peut-on placer 3 HA14 sur un seul lit ? et 4 HA14 ? (4 pts)
5. Que faire si 4 HA14 sont nécessaires ? (1 pt)

### Partie C — Sections minimales (8 points)
6. Calculer la section minimale de non-fragilité de la poutre. (2 pts)
7. Calculer les sections minimale et maximale d'aciers du poteau ; proposer un ferraillage. (4 pts)
8. Choisir le diamètre et l'espacement des cadres du poteau. (2 pts)`,
  corrige:`### Partie A — Enrobage (5 pts)
1. L'enrobage protège les aciers de la **corrosion** (le béton est basique) et du **feu**, et assure l'**adhérence**. En milieu marin ou très agressif : **5 cm**. *(2 pts)*
2. d = h − enrobage − Øcadre − Ø/2 = 40 − 3 − 0,6 − 0,7 = **35,7 cm**. *(3 pts)*

### Partie B — Barres (7 pts)
3. Largeur libre intérieure aux cadres : 20 − 2 × 3 − 2 × 0,6 = **12,8 cm**. *(2 pts)*
4. Espacement minimal : max (1,4 ; 1,5 × 2) = **3 cm**. 3 HA14 : 12,8 − 3 × 1,4 = 8,6 cm pour 2 espaces → **4,3 cm ≥ 3** ✔. 4 HA14 : 12,8 − 5,6 = 7,2 cm pour 3 espaces → **2,4 cm < 3** ✘ : le béton passerait mal entre les barres (nids de cailloux). *(4 pts)*
5. Placer les barres sur **deux lits** (en recalculant d, plus faible), ou passer à 2 HA20 + 1 HA14, ou élargir la poutre. *(1 pt)*

### Partie C — Minimums (8 pts)
6. A min = 0,23 × 20 × 35,7 × 2,1 / 500 = **0,69 cm²**. *(2 pts)*
7. Périmètre 4 × 0,25 = 1 m → 4 cm² ; 0,2 % × 625 = 1,25 cm² → **A min = 4 cm²** ; **A max = 5 % × 625 = 31,25 cm²** → **4 HA12 = 4,52 cm²** (une barre par angle). *(4 pts)*
8. Øt ≥ 12 / 3 = 4 mm → **HA6** ; st ≤ min (40 ; 35 ; 15 × 1,2 = 18 cm) → **18 cm** au plus, on retient **15 cm** (resserré à 10 cm aux jonctions). *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer d avec la hauteur totale ou oublier le cadre.
> - Serrer les barres sans respecter l'espacement minimal : le béton ne passe plus.
> - Oublier les cadres resserrés en zones de recouvrement et aux nœuds.`},
 exercices:[
  {t:"Choisir l'enrobage", d:1, e:`Indiquer l'enrobage (BAEL) à retenir pour :
1. une poutre intérieure d'un salon ;
2. un poteau de façade ;
3. une semelle de fondation ;
4. une dalle de piscine à Assinie, en bord de mer ;
5. une poutre intérieure armée en HA32.`, c:`1. **1 cm** au minimum (on prend 2 à 2,5 cm en pratique).
2. **3 cm** (exposé aux intempéries).
3. **3 cm** minimum (contact avec la terre) ; on prend souvent 4 à 5 cm sur béton de propreté.
4. **5 cm** (embruns, eau chlorée et saline).
5. Au moins **3,2 cm**, car l'enrobage doit être au moins égal au diamètre de la barre.`},
  {t:"Hauteur utile", d:1, e:`Poutre de 50 cm de hauteur, enrobage 2,5 cm, cadres HA8, un lit de HA16. Calculer d. Que devient d si on place 2 lits de HA16 séparés de 2,5 cm (même nombre de barres par lit) ?`, c:`Un lit : d = 50 − 2,5 − 0,8 − 1,6/2 = **45,9 cm** (≈ 0,92 h).
Deux lits : centre du 1er lit à 2,5 + 0,8 + 0,8 = 4,1 cm du bas ; centre du 2e lit à 4,1 + 0,8 + 2,5 + 0,8 = 8,2 cm. Centre de gravité à (4,1 + 8,2) / 2 = 6,15 cm → **d = 50 − 6,15 = 43,85 cm**.`},
  {t:"Placer les barres dans une poutre de 25 cm", d:2, e:`Une poutre de 25 cm de large doit recevoir 5 HA16 en partie basse. Enrobage 2,5 cm, cadres HA8, gravier 25 mm.
1. Les 5 barres tiennent-elles sur un seul lit ?
2. Proposer une disposition.`, c:`eh = max(1,6 ; 1,5 × 2,5) = 3,75 cm.
1. Largeur nécessaire : 2 × 2,5 + 2 × 0,8 + 5 × 1,6 + 4 × 3,75 = 5 + 1,6 + 8 + 15 = **29,6 cm > 25** ✘.
Nombre maximal : n ≤ (25 − 5 − 1,6 + 3,75) / (1,6 + 3,75) = 22,15 / 5,35 = **4,1 → 4 barres**.
2. Disposition : **3 HA16 au premier lit** (5 + 1,6 + 4,8 + 7,5 = 18,9 cm ✔) et **2 HA16 au second lit**, ou 4 + 1. On recalcule alors d avec le centre de gravité des deux lits.`},
  {t:"Section minimale d'un poteau", d:2, e:`Un poteau de 25 × 30 cm est prévu avec 4 HA10. Vérifier les sections minimales et maximales du BAEL.`, c:`Périmètre : 2 × (0,25 + 0,30) = 1,10 m → 4 cm²/m × 1,10 = **4,40 cm²**.
0,2 % B = 0,002 × 25 × 30 = **1,50 cm²**. Amin = max(4,40 ; 1,50) = **4,40 cm²**.
Amax = 5 % B = 0,05 × 750 = **37,5 cm²**.
4 HA10 = 3,14 cm² < 4,40 cm² ✘. Il faut au moins **4 HA12** (4,52 cm²) ✔.`},
  {t:"Condition de non-fragilité", d:2, e:`Une poutre de 15 × 30 cm (d = 27 cm), fc28 = 25 MPa, FeE500. Le calcul donne As = 0,6 cm². Quelle section faut-il mettre ?`, c:`Amin = 0,23 × 15 × 27 × 2,1 / 500 = **0,39 cm²**.
As calculée (0,6 cm²) > Amin : la condition est respectée. On met néanmoins **2 HA10 (1,57 cm²)**, minimum pratique pour une poutre, qui assure aussi la tenue de la cage d'armatures.`}
 ],
 quiz:[
  {q:"L'enrobage minimal BAEL d'une poutre exposée aux intempéries est :", o:["1 cm","3 cm","5 cm","10 cm"], r:1, e:"3 cm pour les parois exposées."},
  {q:"L'espacement horizontal minimal entre barres avec un gravier de 25 mm est :", o:["2,5 cm","3,75 cm","5 cm","1,5 cm"], r:1, e:"eh ≥ 1,5 cg = 3,75 cm (et ≥ φ)."},
  {q:"La hauteur utile d est mesurée jusqu'au :", o:["Bas de la poutre","Centre de gravité des aciers tendus","Cadre inférieur","Milieu de la poutre"], r:1, e:"d ≈ 0,9 h."},
  {q:"Un poteau doit comporter au minimum :", o:["2 barres","3 barres","4 barres, une par angle","6 barres"], r:2, e:"Au moins une barre dans chaque angle."},
  {q:"Les cales d'armatures servent à :", o:["Décorer","Garantir l'enrobage","Augmenter la résistance","Remplacer les cadres"], r:1, e:"Sans cales, les aciers touchent le coffrage et rouillent."}
 ]},

{id:"ba-12", niv:1, titre:"Adhérence, ancrages et recouvrements", duree:55, contenu:`## L'adhérence acier-béton
Pour que l'acier et le béton travaillent ensemble, l'effort de la barre doit passer dans le béton par **adhérence** sur sa surface latérale. Les nervures des aciers **HA** multiplient cette adhérence. Le BAEL définit une **contrainte d'adhérence limite** pour l'ancrage :
$$ τsu = 0,6 × ψs² × ft28      (ψs = 1,5 pour les HA, 1,0 pour les ronds lisses)
Pour fc28 = 25 MPa : τsu = 0,6 × 2,25 × 2,1 = **2,835 MPa**.

## La longueur de scellement droit ls
C'est la longueur de barre droite nécessaire pour transmettre au béton l'effort maximal de la barre (As × fe) :
$$ ls = φ × fe / (4 × τsu)
| fc28 | FeE400 | FeE500 |
|---|---|---|
| 20 MPa (ft28 = 1,8) | 41 φ | 52 φ |
| 25 MPa (ft28 = 2,1) | 35 φ | 44 φ |
| 30 MPa (ft28 = 2,4) | 31 φ | 39 φ |
À défaut de calcul, le BAEL admet forfaitairement **ls = 40 φ** pour les HA FeE400 et **ls = 50 φ** pour les HA FeE500 : ce sont les valeurs utilisées couramment sur les plans.

> [!exemple] Longueurs de scellement
> HA12 en FeE400 : ls = 40 × 12 = **48 cm** ; HA16 : 40 × 16 = **64 cm** ; HA20 : **80 cm**.

## Les ancrages courbes (crochets)
Quand la place manque pour un ancrage droit (appui de rive, angle de portique), on termine la barre par un **crochet**. Le **crochet normal** est un retour à 180°, de rayon intérieur **5,5 φ** pour les HA (3 φ pour les ronds lisses), prolongé d'une partie droite de **2 φ**. On admet que l'ancrage est assuré si la longueur droite avant le crochet vaut au moins **0,4 ls** pour les HA (0,6 ls pour les ronds lisses).
On utilise aussi des **retours à 90°** (équerres), plus faciles à placer, avec un retour droit suffisant (au moins 10 à 12 φ).

> [!exemple] Ancrage d'une barre HA12 par crochet
> 0,4 × 48 = **19,2 cm** de partie droite avant le crochet, au lieu de 48 cm en ancrage droit. Dans un poteau de rive de 20 cm, on peut donc ancrer les aciers d'une poutre avec un crochet (en vérifiant l'encombrement).

## Les recouvrements (jonctions de barres)
Les barres du commerce mesurent en général **12 m**. Pour assurer la continuité d'un ferraillage plus long, on fait **chevaucher** deux barres sur une **longueur de recouvrement** lr :
- barres **tendues**, en contact ou très proches : **lr = ls** (40 φ en FeE400) ;
- si les barres sont écartées de c > 5 φ : lr = ls + c ;
- barres **comprimées** (poteaux) : **lr = 0,6 ls** (24 φ en FeE400).
Règles de bon sens : décaler les recouvrements (pas tous dans la même section), les placer dans les zones **peu sollicitées** (pas à mi-travée en bas, pas sur appui en haut), et serrer les cadres le long des recouvrements.

## L'ancrage sur appui de rive
Sur un appui simple d'extrémité, les aciers inférieurs doivent pouvoir équilibrer l'**effort tranchant** (la bielle de béton comprimé s'appuie sur eux) :
$$ As,appui ≥ Vu / σs      (barres prolongées au-delà du nu de l'appui et ancrées)

> [!exemple] Aciers à prolonger sur appui
> Vu = 80 kN, FeE400 : As ≥ 80 000 / 347,8 = 230 mm² = **2,30 cm²** à ancrer derrière le nu de l'appui. Avec 3 HA14 en travée (4,62 cm²), on prolonge au moins 2 HA14 (3,08 cm²) jusqu'à l'appui, terminés par un crochet.

## L'ancrage des cadres et étriers
Les cadres doivent être **fermés** et leurs extrémités ancrées par des **crochets à 135°** avec un retour droit d'environ **10 φ** (au moins 7 cm) qui pénètre dans le noyau de béton. En zone sismique, cette règle est impérative. Un cadre fermé par de simples retours à 90° s'ouvre sous l'effort et ne confine plus le béton.

!fig:poutre-elevation|Élévation d'une poutre : aciers filants, chapeaux sur appuis et cadres plus serrés près des appuis

> [!retenir]
> - τsu = 0,6 ψs² ft28 ; ls = φ fe / (4 τsu) ; en pratique 40 φ (FeE400) et 50 φ (FeE500).
> - Crochet normal : partie droite ≥ 0,4 ls pour les HA.
> - Recouvrement : lr = ls en traction, 0,6 ls en compression ; décaler les jonctions.
> - Sur appui de rive : ancrer As ≥ Vu / σs.
> - Cadres fermés par crochets à 135°.`,
 sujet:{titre:"Ancrages et recouvrements des aciers d'une poutre de rive", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le plan de ferraillage d'une poutre, les aciers inférieurs doivent être ancrés dans un appui de **25 cm** de large (poteau de rive). Le chef de chantier demande aussi les longueurs de recouvrement.

**Données** : BAEL 91 révisé 99 — béton fc28 = 25 MPa, aciers HA FeE500, γb = 1,5, γs = 1,15, θ = 1.
- ft28 = 2,1 MPa ; coefficient de scellement des HA : ψs = 1,5 ;
- Contrainte d'adhérence limite : τsu = 0,6 ψs² ft28 ; longueur de scellement droit : ls = Ø fe / (4 τsu) ;
- Un crochet normal (à 180°) permet de réduire la longueur d'ancrage mesurée hors crochet à **0,4 ls** ;
- Enrobage côté extérieur de l'appui : **3 cm**.

### Partie A — Adhérence (6 points)
1. Expliquer le phénomène d'adhérence et le rôle des verrous des barres HA. (2 pts)
2. Calculer τsu. (2 pts)
3. Calculer ls en fonction de Ø, puis pour un HA12 et un HA16. (2 pts)

### Partie B — Ancrage sur appui (9 points)
4. Calculer la longueur disponible dans l'appui. (1 pt)
5. Un HA16 peut-il être ancré par scellement droit ? avec un crochet ? (4 pts)
6. Même question pour un HA12. (2 pts)
7. Proposer une solution si la poutre exige des HA16. (2 pts)

### Partie C — Recouvrements (5 points)
8. Deux barres HA12 bout à bout doivent être raboutées par recouvrement : quelle longueur prévoir ? (2 pts)
9. Pourquoi décaler les recouvrements et ne pas les placer dans les zones les plus sollicitées ? (3 pts)`,
  corrige:`### Partie A — Adhérence (6 pts)
1. L'effort de l'acier passe au béton par **frottement et butée** sur la surface de la barre ; les verrous (nervures) des HA augmentent fortement cette liaison, d'où ψs = 1,5 au lieu de 1 pour les ronds lisses. *(2 pts)*
2. $$ τsu = 0,6 × 1,5² × 2,1 = 2,835 MPa *(2 pts)*
3. ls = Ø × 500 / (4 × 2,835) = **44,1 Ø** → HA12 : **52,9 cm** ; HA16 : **70,5 cm**. *(2 pts)*

### Partie B — Appui (9 pts)
4. Disponible : 25 − 3 = **22 cm**. *(1 pt)*
5. HA16 : 70,5 cm > 22 cm → droit impossible ; avec crochet : 0,4 × 70,5 = **28,2 cm > 22 cm** → **impossible** aussi. *(4 pts)*
6. HA12 : crochet 0,4 × 52,9 = **21,2 cm ≤ 22 cm** ✔ → ancrage possible avec crochet. *(2 pts)*
7. Remplacer les HA16 par un nombre équivalent de HA12 (section égale ou supérieure), élargir l'appui (poteau 30 cm), ou prolonger l'ancrage dans le poteau par un retour vertical (équerre). *(2 pts)*

### Partie C — Recouvrements (5 pts)
8. Pour des barres tendues de même diamètre, recouvrement **= ls = 52,9 cm** → on retient **55 cm** (ou 40 à 50 Ø selon les prescriptions de l'entreprise). *(2 pts)*
9. Un recouvrement crée une zone de transfert d'effort par le béton : en les **décalant** on évite que toutes les barres soient interrompues dans la même section (fissure préférentielle), et on les place là où l'effort est faible (près des points de moment nul pour les aciers inférieurs). *(3 pts)*

> [!attention] Erreurs à éviter
> - Mesurer l'ancrage depuis le nu intérieur de l'appui sans retirer l'enrobage.
> - Croire qu'un crochet suffit toujours.
> - Placer tous les recouvrements au même endroit.`},
 exercices:[
  {t:"Longueurs de scellement", d:1, e:`Calculer la longueur de scellement droit (valeur forfaitaire) pour des HA10, HA14 et HA20 en FeE400, puis pour un HA16 en FeE500.`, c:`FeE400 : ls = 40 φ → HA10 : **40 cm** ; HA14 : **56 cm** ; HA20 : **80 cm**.
FeE500 : ls = 50 φ → HA16 : **80 cm**.`},
  {t:"Calcul exact de ls", d:2, e:`Pour un béton fc28 = 25 MPa, calculer τsu puis la longueur de scellement exacte d'un HA16 FeE400. Comparer avec la valeur forfaitaire.`, c:`τsu = 0,6 × 1,5² × 2,1 = **2,835 MPa**.
ls = 16 × 400 / (4 × 2,835) = 6 400 / 11,34 = **564 mm ≈ 56 cm** (35,3 φ).
Valeur forfaitaire : 40 × 16 = **64 cm** : elle est un peu plus sécuritaire et plus simple à appliquer sur les plans.`},
  {t:"Recouvrements dans un poteau", d:1, e:`Les aciers verticaux HA14 (FeE400) d'un poteau de RDC doivent se prolonger dans le poteau de l'étage. Quelle longueur de recouvrement prévoir ? Et pour les aciers HA12 tendus d'un chaînage ?`, c:`Poteau (barres **comprimées**) : lr = 0,6 ls = 0,6 × 40 × 14 = **33,6 cm**, arrondi à **35 cm** (attentes de 35 à 40 cm).
Chaînage (barres **tendues**) : lr = ls = 40 × 12 = **48 cm**, arrondi à **50 cm**.`},
  {t:"Ancrage par crochet sur un appui de rive", d:2, e:`Une poutre aboutit sur un poteau de rive de 25 cm. Ses aciers inférieurs sont des HA16 (FeE400). Enrobage 2,5 cm.
1. Un ancrage droit est-il possible ?
2. Quelle longueur droite faut-il avant un crochet normal ?
3. Est-ce compatible avec la largeur du poteau ?`, c:`1. Longueur disponible dans le poteau : 25 − 2,5 = 22,5 cm, bien inférieure à ls = 64 cm : **ancrage droit impossible**.
2. Crochet normal : partie droite ≥ 0,4 × 64 = **25,6 cm**.
3. La partie droite (25,6 cm) dépasse la largeur disponible (22,5 cm) : il faut commencer la longueur d'ancrage **dans la poutre**, en comptant depuis la section où la barre n'est plus nécessaire, ou utiliser un retour en équerre descendant dans le poteau, ou des barres de plus petit diamètre (2 HA12 au lieu d'un HA16 : partie droite 0,4 × 48 = 19,2 cm ✔).`},
  {t:"Aciers à ancrer sur appui", d:3, e:`Une poutre de 5 m porte pu = 42 kN/m (ELU). Elle est armée de 4 HA14 en partie basse (FeE400).
1. Calculer l'effort tranchant sur appui.
2. Quelle section d'acier inférieur faut-il au minimum prolonger et ancrer sur l'appui ?
3. Combien de HA14 faut-il prolonger ?`, c:`1. **Vu = 42 × 5 / 2 = 105 kN**.
2. **As ≥ 105 000 / 347,8 = 302 mm² = 3,02 cm²**.
3. Un HA14 = 1,54 cm² → **2 HA14 (3,08 cm²)** au minimum. En pratique, on prolonge souvent toutes les barres du premier lit jusqu'aux appuis (ici 3 ou 4 HA14), ce qui simplifie le façonnage et améliore la sécurité.`}
 ],
 quiz:[
  {q:"La longueur de scellement forfaitaire d'un HA en FeE400 vaut :", o:["20 φ","30 φ","40 φ","60 φ"], r:2, e:"40 φ (50 φ en FeE500)."},
  {q:"Pour des barres comprimées d'un poteau, la longueur de recouvrement vaut :", o:["ls","0,6 ls","2 ls","0,4 ls"], r:1, e:"La compression se transmet aussi en partie par la pointe."},
  {q:"Un crochet normal permet de réduire la partie droite d'ancrage d'un HA à :", o:["0,1 ls","0,4 ls","0,8 ls","ls"], r:1, e:"0,4 ls pour les HA, 0,6 ls pour les ronds lisses."},
  {q:"Les cadres doivent être fermés par des crochets à :", o:["45°","90°","135°","180° obligatoirement"], r:2, e:"Les crochets à 135° pénètrent dans le noyau et ne s'ouvrent pas."},
  {q:"Les recouvrements de barres doivent être :", o:["Tous dans la même section","Décalés et placés dans des zones peu sollicitées","À mi-travée en partie basse","Supprimés"], r:1, e:"On évite d'affaiblir une même section."}
 ]},

{id:"ba-8", niv:1, titre:"Lire un plan de ferraillage, façonner et contrôler les aciers", duree:50, contenu:`## Les documents de ferraillage
Le bureau d'études fournit pour chaque élément (poutre, poteau, dalle, semelle) :
- une **élévation** (vue de face) qui montre la position et la longueur des barres ;
- une ou plusieurs **coupes** transversales qui montrent leur disposition dans la section ;
- les **schémas de façonnage** (forme de chaque barre, cotes) ;
- une **nomenclature** : tableau récapitulatif des barres avec leur repère, nombre, diamètre, longueur et masse.

## Lire la désignation d'une barre
Sur les plans, une barre est désignée par son **repère** et sa description, par exemple :
- **① 3 HA14 L = 5,20** : repère 1, trois barres haute adhérence de 14 mm, longueur développée 5,20 m ;
- **② cadres HA6 e = 15** : cadres de 6 mm espacés de 15 cm ;
- **③ 2 HA12 chapeaux L = 1,60** : aciers supérieurs sur appui ;
- **T** ou **TS** : treillis soudé, par exemple **ST 25C** (panneau de dalle).
Les cotes de façonnage sont des cotes **extérieures** de la barre façonnée.

!fig:poutre-coupe|Coupe type d'une poutre : aciers inférieurs, aciers de montage, cadre

## Le vocabulaire des armatures
| Terme | Rôle |
|---|---|
| Aciers principaux (filants) | reprennent la traction due au moment en travée |
| Chapeaux | aciers supérieurs sur appuis (moment négatif) |
| Aciers de montage | barres supérieures qui tiennent les cadres (2 HA10 ou 2 HA12) |
| Cadres, étriers, épingles | armatures transversales : effort tranchant, maintien des barres |
| Attentes | barres qui dépassent pour être reprises par le bétonnage suivant |
| Barres de répartition | dans les dalles, perpendiculaires aux aciers principaux |
| Renforts / suspentes | autour des trémies, sous des charges concentrées |

## Calculer les longueurs développées
- Barre droite avec deux crochets : longueur = longueur droite + 2 × (longueur d'un crochet). Un crochet normal à 180° consomme environ **6 à 7 φ** de barre (prendre 7 φ pour un façonnage courant).
- Cadre rectangulaire : **périmètre extérieur du cadre** + 2 × retour du crochet (environ 10 φ chacun). Les dimensions extérieures du cadre valent les dimensions du béton moins 2 enrobages.

> [!exemple] Cadre d'un poteau 20 × 20
> Enrobage 2,5 cm : cadre de 15 × 15 cm extérieur. Cadre HA6 : longueur = 4 × 15 + 2 × 10 × 0,6 = 60 + 12 = **72 cm**, masse 0,72 × 0,222 = **0,16 kg**.

> [!exemple] Nomenclature d'une poutre 20 × 40, portée 4,40 m entre nus
> | Repère | Désignation | Nombre | Longueur (m) | Longueur totale (m) | kg/m | Masse (kg) |
> |---|---|---|---|---|---|---|
> | ① | HA14 inférieurs avec crochets | 3 | 4,80 | 14,40 | 1,208 | 17,4 |
> | ② | HA10 de montage | 2 | 4,70 | 9,40 | 0,617 | 5,8 |
> | ③ | Cadres HA6 (15 × 35) | 27 | 1,12 | 30,24 | 0,222 | 6,7 |
> | | **Total** | | | | | **29,9 kg** |
> Cadre : 2 × (15 + 35) + 2 × 6 = 112 cm. Nombre de cadres : environ 4,40 / 0,17 ≈ 26 espacements, soit 27 cadres (espacement moyen 17 cm).
> Ratio : 29,9 kg pour 0,20 × 0,40 × 4,40 = 0,352 m³, soit **85 kg/m³**, valeur typique d'une poutre.

## Les ratios d'acier
Les ratios (kg d'acier par m³ de béton) permettent de vérifier un métré ou d'estimer un budget :
| Élément | Ratio courant (kg/m³) |
|---|---|
| Semelles isolées | 40 à 60 |
| Longrines | 70 à 90 |
| Poteaux | 90 à 140 |
| Poutres | 80 à 120 |
| Dalles pleines | 60 à 90 |
| Voiles | 40 à 70 |

## Façonnage sur chantier
- Couper les barres à la **cisaille** ou à la tronçonneuse (pas au chalumeau, qui modifie l'acier) ;
- plier **à froid** sur une **plieuse** avec le bon mandrin ; ne jamais redresser une barre déjà pliée (fissuration de l'acier) ;
- **ligaturer** les cages avec du fil recuit, en particulier aux croisements des angles ;
- stocker les aciers **sur bastaings**, à l'abri de la boue ; une légère rouille superficielle est acceptable, pas une rouille feuilletée.

## Le contrôle avant coulage
Avant chaque bétonnage, le chef de chantier (ou le contrôleur) vérifie avec le plan :
1. le **nombre** et le **diamètre** de chaque barre, les **longueurs** et les **recouvrements** ;
2. l'**espacement des cadres**, surtout près des appuis ;
3. la position des **chapeaux** (en haut !) et leur longueur ;
4. l'**enrobage** et la présence des **cales** ;
5. la **propreté** du fond de coffrage, la fixation des aciers (ils ne doivent pas bouger pendant le coulage) ;
6. les **attentes** pour les éléments suivants et les réservations (gaines, fourreaux).

> [!attention]
> L'erreur la plus grave sur un chantier : des **chapeaux** de console ou de balcon placés en partie basse, ou affaissés par les ouvriers qui marchent dessus. La console s'effondre au décoffrage. Les aciers supérieurs doivent être tenus par des **chaises** (supports) solides.

> [!retenir]
> - « 3 HA14 L = 5,20 » : nombre, type, diamètre, longueur développée.
> - Masse = 0,006 17 φ² × longueur ; un cadre = périmètre + 2 crochets.
> - Ratios de contrôle : 80 à 120 kg/m³ pour les poutres.
> - Contrôler nombre, diamètres, cadres, chapeaux, enrobage et cales avant chaque coulage.`,
 sujet:{titre:"Nomenclature et contrôle du ferraillage d'une poutre", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le chef d'équipe ferrailleur reçoit le plan d'une poutre **20 × 40 cm** de **5,20 m** de long. Vous devez établir la nomenclature, le poids d'acier et la liste des contrôles avant coulage.

**Données**
- Aciers inférieurs : **3 HA14** filants avec un retour de **15 cm** à chaque extrémité ;
- Aciers supérieurs de montage : **2 HA10** filants droits ;
- Cadres **HA6** espacés de **15 cm**, le premier à 5 cm de chaque extrémité ; longueur développée d'un cadre : **1,08 m** ;
- Enrobage 3 cm à chaque extrémité ;
- Masses linéiques : HA6 : 0,222 kg/m ; HA10 : 0,617 kg/m ; HA14 : 1,208 kg/m.

### Partie A — Lecture du plan (4 points)
1. Que signifient les repères « 3 HA14 » et « HA6 e = 15 » ? (2 pts)
2. Calculer la longueur droite des barres (longueur de poutre moins les enrobages). (2 pts)

### Partie B — Nomenclature (10 points)
3. Calculer la longueur développée d'un HA14 et la longueur totale. (2 pts)
4. Calculer la longueur totale des HA10. (1 pt)
5. Calculer le nombre de cadres et la longueur totale de HA6. (3 pts)
6. Calculer la masse de chaque diamètre et la masse totale. (3 pts)
7. Calculer le ratio d'acier en kg par m³ de béton. (1 pt)

### Partie C — Contrôle avant coulage (6 points)
8. Donner six points de contrôle du ferraillage avant de couler le béton. (6 pts)`,
  corrige:`### Partie A — Lecture (4 pts)
1. **3 HA14** : trois barres à haute adhérence de 14 mm de diamètre ; **HA6 e = 15** : cadres en HA6 espacés de 15 cm. *(2 pts)*
2. 5,20 − 2 × 0,03 = **5,14 m**. *(2 pts)*

### Partie B — Nomenclature (10 pts)
3. HA14 : 5,14 + 2 × 0,15 = **5,44 m** ; 3 barres → **16,32 m**. *(2 pts)*
4. HA10 : 2 × 5,14 = **10,28 m**. *(1 pt)*
5. Longueur à équiper : 5,20 − 2 × 0,05 = 5,10 m → n = 5,10 / 0,15 + 1 = **35 cadres** ; HA6 : 35 × 1,08 = **37,80 m**. *(3 pts)*
6. *(3 pts)*

| Diamètre | Longueur (m) | kg/m | Masse (kg) |
|---|---|---|---|
| HA14 | 16,32 | 1,208 | 19,71 |
| HA10 | 10,28 | 0,617 | 6,34 |
| HA6 | 37,80 | 0,222 | 8,39 |
| **Total** | | | **34,4 kg** |

7. Béton : 0,20 × 0,40 × 5,20 = 0,416 m³ → **82,8 kg/m³** (valeur courante pour une poutre : 80 à 120 kg/m³). *(1 pt)*

### Partie C — Contrôles (6 pts)
8. Nombre et diamètre des barres conformes au plan ; position (aciers principaux en bas en travée, chapeaux en haut sur appuis) ; espacement et fermeture des cadres ; longueurs d'ancrage et de recouvrement ; **cales d'enrobage** en place (3 cm) ; ligatures solides (la cage ne bouge pas au coulage) ; aciers propres (sans terre, huile ni rouille non adhérente). *(6 pts)*

> [!attention] Erreurs à éviter
> - Compter le nombre d'intervalles au lieu du nombre de cadres (il y a un cadre de plus).
> - Oublier les retours (crochets) dans la longueur développée.
> - Couler sans cales : l'enrobage disparaît et les aciers rouillent.`},
 exercices:[
  {t:"Lire une désignation", d:1, e:`Expliquer les désignations suivantes lues sur un plan :
1. ④ 4 HA16 L = 6,40 ;
2. ⑤ cadres HA8 e = 12 (zone d'appui) puis e = 20 ;
3. ⑥ 2 HA14 chapeaux L = 2,20 ;
4. ST 25C.`, c:`1. Repère 4 : **quatre barres HA de 16 mm**, longueur développée **6,40 m** chacune.
2. Repère 5 : **cadres en HA8**, espacés de **12 cm** près des appuis (effort tranchant fort), puis de **20 cm** vers le milieu.
3. Repère 6 : **deux HA14 placés en partie haute sur un appui**, longueur 2,20 m (ils reprennent le moment négatif).
4. **Treillis soudé** de référence ST 25C (panneau standard pour dalles, mailles et diamètres définis par le fabricant).`},
  {t:"Longueur et masse de cadres", d:1, e:`Une poutre de 25 × 50 cm a un enrobage de 3 cm. Les cadres sont en HA8 avec deux crochets de 10 φ.
1. Calculer les dimensions extérieures du cadre et sa longueur développée.
2. Calculer la masse de 40 cadres.`, c:`1. Dimensions extérieures : (25 − 6) × (50 − 6) = **19 × 44 cm**.
Longueur : 2 × (19 + 44) + 2 × 10 × 0,8 = 126 + 16 = **142 cm**.
2. Masse : 40 × 1,42 × 0,395 = **22,4 kg**.`},
  {t:"Nomenclature d'un poteau", d:2, e:`Un poteau de 25 × 25 cm et de 3,20 m (plus 0,40 m d'attentes) est armé de 4 HA14 et de cadres HA6 espacés de 20 cm (enrobage 2,5 cm, crochets 10 φ).
1. Établir la nomenclature (repères, nombres, longueurs, masses).
2. Calculer le ratio d'acier en kg/m³.`, c:`1. ① 4 HA14 : longueur 3,20 + 0,40 = **3,60 m** → 4 × 3,60 × 1,208 = **17,4 kg**.
② Cadres HA6 : cadre de 20 × 20 extérieur : 4 × 20 + 2 × 6 = 92 cm ; nombre : 3,20 / 0,20 + 1 = **17 cadres** → 17 × 0,92 × 0,222 = **3,5 kg**.
**Total : 20,9 kg.**
2. Volume de béton : 0,25 × 0,25 × 3,20 = 0,20 m³ → ratio **104 kg/m³** ✔ (dans la fourchette des poteaux).`},
  {t:"Contrôle avant coulage", d:2, e:`Lors du contrôle d'une dalle de balcon en console, vous constatez : les aciers principaux sont posés directement sur le coffrage, sans cales ; le plan indique « chapeaux HA10 e = 15 en partie supérieure ». Que faites-vous et pourquoi ?`, c:`**On arrête le coulage.** Dans un balcon en console, le moment est **négatif** : la fibre tendue est en **haut**. Les aciers principaux (chapeaux HA10 e = 15) doivent être **en partie supérieure**, avec l'enrobage prévu (≈ 3 cm sous la surface), tenus par des **chaises** rigides, et prolongés dans le plancher intérieur sur la longueur prévue au plan.
Posés en bas, ils ne servent à rien : le balcon s'effondrerait au décoffrage. On fait reprendre le ferraillage, on place les cales et chaises, puis on contrôle à nouveau.`},
  {t:"Estimer les aciers d'une maison", d:3, e:`Pour une maison, le métré donne : semelles 6,5 m³, longrines 3,2 m³, poteaux 2,8 m³, poutres 5,0 m³, dalle pleine 12,0 m³. Avec les ratios moyens du cours (semelles 50, longrines 80, poteaux 115, poutres 100, dalles 75 kg/m³), estimer la masse d'acier et le budget si l'acier coûte 750 FCFA/kg façonné et posé.`, c:`Semelles : 6,5 × 50 = 325 kg ; longrines : 3,2 × 80 = 256 kg ; poteaux : 2,8 × 115 = 322 kg ; poutres : 5,0 × 100 = 500 kg ; dalle : 12,0 × 75 = 900 kg.
**Total ≈ 2 303 kg ≈ 2,3 t.**
Budget : 2 303 × 750 = **1 727 250 FCFA ≈ 1,73 million FCFA**.
Cette estimation sert à contrôler un devis ; le métré exact se fait ensuite barre par barre à partir des plans de ferraillage.`}
 ],
 quiz:[
  {q:"« 3 HA14 L = 5,20 » signifie :", o:["3 barres de 14 cm","3 barres HA de 14 mm de 5,20 m","14 barres de 3 mm","3 cadres de 5,20 m"], r:1, e:"Nombre, type, diamètre en mm, longueur développée en m."},
  {q:"Les chapeaux se placent :", o:["En partie basse en travée","En partie haute sur les appuis","Dans les poteaux seulement","Dans les semelles"], r:1, e:"Ils reprennent le moment négatif sur appui."},
  {q:"Le ratio d'acier courant d'une poutre est d'environ :", o:["10 kg/m³","100 kg/m³","500 kg/m³","1 000 kg/m³"], r:1, e:"80 à 120 kg/m³."},
  {q:"Pour plier les aciers, on doit :", o:["Les chauffer au chalumeau","Les plier à froid sur une plieuse avec le bon mandrin","Les redresser plusieurs fois","Les marteler"], r:1, e:"Le chauffage et le redressage abîment l'acier."},
  {q:"Dans un balcon en console, les aciers principaux sont :", o:["En bas","En haut","Au milieu","Inutiles"], r:1, e:"Le moment négatif tend la fibre supérieure."}
 ]},

{id:"ba-13", niv:2, titre:"Tirants : pièces en traction simple", duree:45, contenu:`## Le tirant en béton armé
Un **tirant** est une pièce tendue : tirant d'arc ou de portique (qui reprend la poussée), suspente qui porte un plancher par le haut, tirant de ferme en béton, paroi de réservoir circulaire (cerces). En béton armé, on admet que le béton tendu est **fissuré** et ne reprend rien : **tout l'effort est repris par les aciers**. Le béton sert à les protéger, à les maintenir et à transmettre les efforts aux extrémités.

## Dimensionnement à l'ELU
$$ As ≥ Nu / σs      avec   σs = fe / γs   (348 MPa en FeE400)

## Vérification à l'ELS (fissuration)
Un tirant est presque toujours exposé à un risque de fissuration traversante : on limite la contrainte de l'acier en service :
$$ As ≥ Nser / σ̄s
| Fissuration | σ̄s (FeE400, ft28 = 2,1 MPa, η = 1,6) | σ̄s (FeE500) |
|---|---|---|
| Peu préjudiciable | pas de limite (fe) | pas de limite |
| Préjudiciable : min(2/3 fe ; max(0,5 fe ; 110 √(η ft28))) | 201,6 MPa | 250 MPa |
| Très préjudiciable : 0,8 × valeur FP | 161,3 MPa | 200 MPa |
(η = 1,6 pour les aciers HA, 1,0 pour les ronds lisses.) Dès que la fissuration est préjudiciable, c'est en général l'**ELS qui dimensionne** le tirant.

## Condition de non-fragilité
Si le béton se fissure brutalement, l'acier doit pouvoir reprendre l'effort que le béton portait juste avant la fissuration :
$$ As × fe ≥ B × ft28      (B : section de béton du tirant)
Il ne faut donc pas donner au tirant une section de béton trop grande par rapport à ses aciers.

## Dispositions constructives
- Barres **réparties** sur le pourtour, diamètres modérés et espacements faibles (mieux vaut 6 HA12 que 2 HA20 : fissures plus fines) ;
- **cadres** ou épingles pour maintenir les barres (φt ≥ 6 mm, espacement ≤ section du tirant) ;
- **recouvrements** décalés et longs (ls ou plus), ou jonctions par manchons ;
- **ancrages** soignés aux extrémités, là où l'effort passe dans les autres éléments.

> [!exemple] Tirant d'un portique en béton
> Nu = 300 kN, Nser = 215 kN, fissuration préjudiciable, FeE400, fc28 = 25 MPa.
> ELU : As ≥ 300 000 / 347,8 = 863 mm² = **8,63 cm²**.
> ELS : As ≥ 215 000 / 201,6 = 1 066 mm² = **10,66 cm²** → c'est l'ELS qui commande.
> Choix : **6 HA16 (12,06 cm²)** répartis dans une section de 25 × 25 cm.
> Non-fragilité : B ft28 / fe = 62 500 × 2,1 / 400 = 328 mm² = 3,28 cm² ≤ 12,06 ✔.

> [!retenir]
> - Le béton tendu ne compte pas : As ≥ Nu / σs et As ≥ Nser / σ̄s.
> - FP : σ̄s ≈ 202 MPa (FeE400) ; FTP : ≈ 161 MPa.
> - Non-fragilité : As fe ≥ B ft28.
> - Barres nombreuses et fines, bien ancrées, recouvrements décalés.`,
 sujet:{titre:"Tirant suspendant une passerelle : aciers à l'ELU et à l'ELS", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une passerelle légère entre deux bâtiments est suspendue à une poutre haute par des **tirants en béton armé**. Les tirants sont exposés à la pluie (**fissuration préjudiciable**).

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa ; coefficient de fissuration η = 1,6 (HA).
- Effort dans le tirant le plus chargé : **Nu = 250 kN**, **Nser = 180 kN** ;
- Contrainte limite des aciers en fissuration préjudiciable : σs = min [ 2/3 fe ; max (0,5 fe ; 110 √(η ft28)) ] ;
- Condition de non-fragilité d'un tirant : A fe ≥ B ft28 (B : section de béton) ;
- Sections : HA12 = 1,13 cm² ; HA14 = 1,54 cm² ; HA16 = 2,01 cm².

### Partie A — Principe (3 points)
1. Dans un tirant, quel matériau reprend l'effort de traction ? À quoi sert le béton ? (3 pts)

### Partie B — Aciers (11 points)
2. Calculer la section d'acier nécessaire à l'ELU. (3 pts)
3. Calculer σs en fissuration préjudiciable. (3 pts)
4. Calculer la section nécessaire à l'ELS. (2 pts)
5. Retenir la section et choisir les barres (nombre pair, disposition symétrique). (3 pts)

### Partie C — Section de béton et détails (6 points)
6. Calculer la section de béton maximale permise par la condition de non-fragilité. Une section 20 × 20 cm convient-elle ? (3 pts)
7. Comment ancrer les aciers du tirant dans la poutre haute et dans la passerelle ? (3 pts)`,
  corrige:`### Partie A — Principe (3 pts)
1. **Les aciers seuls** reprennent la traction (le béton tendu fissure). Le béton les **protège** (corrosion, feu), donne la forme, et permet l'ancrage aux extrémités. *(3 pts)*

### Partie B — Aciers (11 pts)
2. Au = Nu / fsu = 250 000 / 434,8 = **575 mm² = 5,75 cm²**. *(3 pts)*
3. 110 √(1,6 × 2,1) = 110 × 1,833 = 201,6 ; max (250 ; 201,6) = 250 ; min (333 ; 250) → **σs = 250 MPa**. *(3 pts)*
4. Aser = 180 000 / 250 = **720 mm² = 7,20 cm²**. *(2 pts)*
5. L'ELS est déterminant : A ≥ 7,20 cm² → **4 HA16 = 8,04 cm²** (une barre par angle). *(3 pts)*

### Partie C — Béton (6 pts)
6. B ≤ A fe / ft28 = 804 × 500 / 2,1 = 191 430 mm² = **1 914 cm²**. Section 20 × 20 = 400 cm² ✔ (si le béton est trop gros, il fissure en arrachant brutalement des aciers trop faibles : c'est la fragilité). *(3 pts)*
7. Ancrer chaque barre sur sa longueur de scellement (≈ 44 Ø, soit 70 cm pour un HA16) ou par crochets/retours enveloppant les aciers de la poutre haute et de la passerelle ; ajouter des cadres de confinement aux extrémités. *(3 pts)*

> [!attention] Erreurs à éviter
> - Ne vérifier que l'ELU : en fissuration préjudiciable, l'ELS gouverne souvent.
> - Compter sur la résistance du béton tendu.
> - Négliger les ancrages : un tirant lâche par ses extrémités.`},
 exercices:[
  {t:"Suspente d'un plancher", d:1, e:`Une suspente en béton armé porte une partie de plancher : Nu = 180 kN. Fissuration peu préjudiciable, FeE400. Calculer la section d'acier et choisir les barres.`, c:`As ≥ 180 000 / 347,8 = 518 mm² = **5,18 cm²**.
Choix : **4 HA14 (6,16 cm²)**, un dans chaque angle d'une section de 20 × 20 cm.
Non-fragilité : B ft28 / fe = 40 000 × 2,1 / 400 = 210 mm² = 2,10 cm² ≤ 6,16 ✔.`},
  {t:"Tirant en fissuration très préjudiciable", d:2, e:`Un tirant de réservoir porte Nu = 420 kN et Nser = 300 kN. Fissuration très préjudiciable, FeE400, fc28 = 25 MPa.
1. Calculer As à l'ELU et à l'ELS.
2. Choisir les barres.`, c:`1. ELU : As ≥ 420 000 / 347,8 = **12,08 cm²**.
ELS (FTP) : σ̄s = 0,8 × 201,6 = 161,3 MPa → As ≥ 300 000 / 161,3 = **18,60 cm²** → l'ELS commande.
2. **10 HA16 (20,11 cm²)** ou 6 HA20 (18,85 cm²) ; on préfère 10 HA16 répartis (fissures plus fines).`},
  {t:"Condition de non-fragilité", d:2, e:`Un tirant de 30 × 30 cm est armé de 4 HA10 (3,14 cm²), FeE400, fc28 = 25 MPa. La condition de non-fragilité est-elle vérifiée ? Sinon, que proposer ?`, c:`B ft28 = 90 000 × 2,1 = 189 000 N ; As fe = 314 × 400 = 125 600 N.
125 600 < 189 000 : **condition non vérifiée** : à la fissuration du béton, les aciers se plastifieraient.
Il faut As ≥ 189 000 / 400 = **4,73 cm²** → 4 HA14 (6,16 cm²), ou réduire la section de béton (25 × 25 cm : B ft28 / fe = 3,28 cm², vérifiée avec 4 HA12).`},
  {t:"Comparer FeE400 et FeE500 pour un tirant", d:3, e:`Un tirant porte Nu = 350 kN et Nser = 250 kN en fissuration préjudiciable. Comparer la section d'acier nécessaire en FeE400 et en FeE500. Conclusion ?`, c:`FeE400 : ELU 350 000 / 347,8 = 10,06 cm² ; ELS 250 000 / 201,6 = **12,40 cm²** (commande).
FeE500 : ELU 350 000 / 434,8 = 8,05 cm² ; ELS σ̄s = min(333 ; max(250 ; 201,6)) = 250 MPa → 250 000 / 250 = **10,00 cm²** (commande).
Le FeE500 permet d'économiser environ 19 % d'acier, mais l'avantage vient de la règle 0,5 fe à l'ELS ; en fissuration très préjudiciable, le gain se réduit encore. Il faut toujours faire les deux vérifications.`}
 ],
 quiz:[
  {q:"Dans un tirant en béton armé, l'effort de traction est repris par :", o:["Le béton","Les aciers seuls","Le béton et l'acier à parts égales","Les cadres"], r:1, e:"Le béton tendu est supposé fissuré."},
  {q:"En fissuration préjudiciable, σ̄s pour un FeE400 vaut environ :", o:["348 MPa","267 MPa","202 MPa","100 MPa"], r:2, e:"min(2/3 fe ; max(0,5 fe ; 110 √(η ft28))) = 201,6 MPa."},
  {q:"La condition de non-fragilité d'un tirant s'écrit :", o:["As fe ≥ B ft28","As ≥ B / 100","B ≥ As","As fe ≤ B fc28"], r:0, e:"L'acier doit reprendre l'effort libéré par la fissuration du béton."},
  {q:"Pour limiter l'ouverture des fissures, on préfère :", o:["Peu de grosses barres","Beaucoup de barres fines","Des ronds lisses","Pas de cadres"], r:1, e:"Des barres nombreuses répartissent la fissuration."},
  {q:"Quand la fissuration est préjudiciable, le tirant est en général dimensionné par :", o:["L'ELU","L'ELS","Le flambement","Le poids propre"], r:1, e:"La limitation de σs à l'ELS est plus sévère."}
 ]},

{id:"ba-4", niv:2, titre:"Poteaux en compression centrée", duree:70, contenu:`## Le rôle du poteau
Le poteau transmet les charges des planchers jusqu'aux fondations. Il est principalement **comprimé** ; le béton reprend l'essentiel de l'effort, les aciers longitudinaux renforcent la section et s'opposent au flambement, les **cadres** maintiennent les barres (qui sinon flamberaient entre deux cadres) et **confinent** le béton.

!fig:poteau-coupe|Coupe d'un poteau : barres dans les angles et cadres

## Élancement et coefficient α
Le BAEL tient compte du flambement par un coefficient réducteur α qui dépend de l'**élancement** λ = Lf / i :
- poteau rectangulaire de petit côté a : **λ = Lf × √12 / a = 3,46 Lf / a** ;
- poteau circulaire de diamètre D : **λ = 4 Lf / D**.
La longueur de flambement d'un poteau de bâtiment encastré dans sa fondation et relié à des poutres de raideur au moins égale vaut **Lf = 0,7 l0** (l0 : hauteur libre entre faces des planchers) ; sinon Lf = l0.
$$ λ ≤ 50 : α = 0,85 / (1 + 0,2 (λ / 35)²)      50 < λ ≤ 70 : α = 0,60 × (50 / λ)²
Si plus de la moitié des charges est appliquée avant 90 jours, on divise α par 1,10. On évite de dépasser **λ = 70** (et on vise λ ≤ 35 pour pouvoir compter toutes les barres).

## La formule de l'effort normal résistant
$$ Nu ≤ α × [ Br × fc28 / (0,9 × γb) + A × fe / γs ]
- **Br** : section **réduite** du béton, obtenue en retirant 1 cm sur tout le pourtour : Br = (a − 0,02) × (b − 0,02) en m² (rectangle) ; π (D − 0,02)² / 4 (cercle) ;
- **A** : section des aciers longitudinaux.
On en tire la section d'acier nécessaire :
$$ A ≥ [ Nu / α − Br × fc28 / (0,9 γb) ] × γs / fe
Si le résultat est négatif ou faible, on met le **minimum réglementaire**.

## Sections minimales et maximales
- **Amin = max (4 cm² par mètre de périmètre ; 0,2 % de B)** ;
- **Amax = 5 % de B** (hors zones de recouvrement) ;
- au moins une barre dans chaque angle, φ ≥ 12 mm en pratique ; espacement des barres ≤ min(a + 10 cm ; 40 cm).

## Les armatures transversales (cadres)
- diamètre : **φt ≥ φl,max / 3** (HA6 pour des HA12 à HA16, HA8 pour des HA20 et HA25) ;
- espacement : **st ≤ min (15 φl,min ; 40 cm ; a + 10 cm)** ;
- dans les zones de recouvrement, au moins **3 cadres** ; aux nœuds poteau-poutre, les cadres doivent continuer.

> [!exemple] Poteau intérieur d'une maison R+1
> Nu = 415 kN (avec la majoration de continuité), l0 = 3,0 m, poteau 20 × 20 cm, fc28 = 25 MPa, FeE400.
> Lf = 0,7 × 3,0 = 2,10 m ; λ = 3,46 × 2,10 / 0,20 = **36,4** → α = 0,85 / (1 + 0,2 × (36,4 / 35)²) = **0,699**.
> Br = 0,18 × 0,18 = 0,0324 m² ; Br fc28 / (0,9 γb) = 0,0324 × 25 / 1,35 = 0,600 MN = **600 kN**.
> Nu / α = 415 / 0,699 = 594 kN < 600 kN : le béton seul suffit en théorie → **minimum** :
> 4 cm²/m × 0,80 m = 3,2 cm² ; 0,2 % × 400 cm² = 0,8 cm² → Amin = 3,2 cm² → **4 HA12 (4,52 cm²)**.
> Cadres : φt ≥ 12/3 = 4 mm → **HA6** ; st ≤ min(15 × 1,2 = 18 cm ; 40 ; 30) → **HA6 tous les 15 cm**.
> Capacité réelle : Nu,max = 0,699 × (600 + 452 × 347,8 / 1 000) = 0,699 × 757 = **529 kN**.

> [!exemple] Poteau d'immeuble
> Nu = 1 500 kN, l0 = 3,0 m (Lf = 2,10 m). Essai en 30 × 30 cm :
> λ = 3,46 × 2,10 / 0,30 = 24,2 → α = **0,776** ; Br = 0,28² = 0,0784 m² → 0,0784 × 25 / 1,35 = **1 452 kN**.
> A ≥ (1 500 / 0,776 − 1 452) × 1 000 / 347,8 = (1 933 − 1 452) / 0,3478 = **1 387 mm² = 13,9 cm²** → **4 HA20 + 2 HA14 (15,65 cm²)** ou 8 HA16 (16,08 cm²), cadres HA8 tous les 20 cm.
> En 35 × 35 cm : α = 0,794, Br fc28/(0,9γb) = 2 017 kN > 1 500 / 0,794 = 1 889 kN → acier minimal (4 cm²/m × 1,40 m = 5,6 cm² → 4 HA14). Le choix dépend du coût du béton, du coffrage et de l'acier, et de l'architecture.

## Prédimensionnement rapide
Pour un premier choix de section (avant la descente de charges détaillée), on peut supposer λ ≈ 35 (α ≈ 0,71) et 1 % d'acier :
$$ Br ≥ Nu / (α × (fc28 / (0,9 γb) + 0,01 × fe / γs))      soit environ   Br (cm²) ≥ 0,64 × Nu (kN)  (fc28 = 25, FeE400)

## Équivalence Eurocode 2
L'Eurocode 2 vérifie les poteaux en **flexion composée** avec une excentricité minimale (imperfections) et une méthode de second ordre (rigidité nominale ou courbure nominale). Pour les poteaux courants de bâtiment peu élancés, les résultats sont proches de ceux du BAEL.

> [!retenir]
> - λ = 3,46 Lf / a ; Lf = 0,7 l0 en général ; α = 0,85 / (1 + 0,2 (λ/35)²) pour λ ≤ 50.
> - Nu ≤ α [Br fc28 / (0,9 γb) + A fe / γs], Br = (a − 2 cm)(b − 2 cm).
> - Amin = max(4 cm²/m de périmètre ; 0,2 % B) ; Amax = 5 % B.
> - Cadres : φt ≥ φl/3 ; st ≤ min(15 φl ; 40 cm ; a + 10 cm).`,
 sujet:{titre:"Ferraillage d'un poteau en compression centrée", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le poteau intérieur le plus chargé d'un immeuble R+2 doit être ferraillé.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Section **25 × 25 cm**, hauteur libre **3,00 m**, longueur de flambement **lf = 0,7 × 3,00 m** ;
- Effort normal ultime **Nu = 900 kN** ;
- Effort résistant : Nu ≤ α [ Br fc28 / (0,9 γb) + A fe / γs ], avec Br = (a − 2 cm)² et α = 0,85 / [1 + 0,2 (λ/35)²] pour λ ≤ 50 ;
- Sections minimales : max (4 cm² par mètre de périmètre ; 0,2 % B) ; maximum 5 % B ;
- HA12 = 1,13 cm² ; HA14 = 1,54 cm² ; HA16 = 2,01 cm².

### Partie A — Élancement (6 points)
1. Calculer lf, le rayon de giration i et l'élancement λ. (3 pts)
2. Calculer α. (3 pts)

### Partie B — Aciers longitudinaux (10 points)
3. Calculer Br et la part de l'effort reprise par le béton. (3 pts)
4. En déduire la section d'acier nécessaire. (4 pts)
5. Vérifier les sections minimale et maximale et choisir les barres. (3 pts)

### Partie C — Armatures transversales (4 points)
6. Choisir le diamètre et l'espacement des cadres (Øt ≥ Øl/3 ; st ≤ min [40 cm ; a + 10 cm ; 15 Øl]). (4 pts)`,
  corrige:`### Partie A — Élancement (6 pts)
1. lf = 2,10 m ; i = a / √12 = 0,25 / 3,464 = 0,0722 m ; **λ = 2,10 / 0,0722 = 29,1** (≤ 50 ✔). *(3 pts)*
2. $$ α = 0,85 / [1 + 0,2 × (29,1 / 35)²] = 0,85 / 1,138 = 0,747 *(3 pts)*

### Partie B — Aciers (10 pts)
3. Br = (25 − 2)² = **529 cm²** ; béton : 52 900 × 25 / (0,9 × 1,5) = **979,6 kN**. *(3 pts)*
4. 900 / 0,747 = 1 204,8 kN ; reste pour l'acier : 1 204,8 − 979,6 = 225,2 kN →
$$ A ≥ 225 200 × 1,15 / 500 = 518 mm² = 5,18 cm² *(4 pts)*
5. Minimum : max (4 × 1,00 ; 0,2 % × 625) = 4 cm² ; maximum : 31,25 cm² → **4 HA14 = 6,16 cm²** ✔ (4 HA12 = 4,52 serait insuffisant). *(3 pts)*

### Partie C — Cadres (4 pts)
6. Øt ≥ 14 / 3 = 4,7 mm → **HA6** ; st ≤ min (40 ; 35 ; 15 × 1,4 = 21 cm) → **st = 20 cm** en partie courante, resserré à 10 cm aux recouvrements et en tête/pied. *(4 pts)*

> [!attention] Erreurs à éviter
> - Utiliser B au lieu de Br (on retire 1 cm de béton sur chaque face).
> - Oublier α : sans lui, le flambement n'est pas pris en compte.
> - Prendre 4 HA12 parce que « c'est le minimum » alors que le calcul demande plus.`},
 exercices:[
  {t:"Élancement et coefficient α", d:1, e:`Un poteau de 25 × 30 cm a une hauteur libre de 3,20 m (Lf = 0,7 l0). Calculer λ et α.`, c:`Lf = 0,7 × 3,20 = 2,24 m. Le flambement se fait selon le petit côté a = 0,25 m.
**λ = 3,46 × 2,24 / 0,25 = 31,0** → **α = 0,85 / (1 + 0,2 × (31,0 / 35)²) = 0,85 / 1,157 = 0,735**.`},
  {t:"Ferrailler un poteau de rive", d:2, e:`Poteau de rive 20 × 20 cm, Nu = 236 kN, l0 = 3,0 m, fc28 = 25 MPa, FeE400. Déterminer les armatures longitudinales et transversales.`, c:`λ = 36,4 ; α = 0,699 ; Br fc28 / (0,9 γb) = 600 kN (voir cours).
Nu / α = 236 / 0,699 = 338 kN ≪ 600 kN → **acier minimal** : Amin = max(4 × 0,80 ; 0,2 % × 400) = max(3,2 ; 0,8) = 3,2 cm² → **4 HA12 (4,52 cm²)**.
Cadres **HA6 tous les 15 cm** (st ≤ min(18 ; 40 ; 30)), 3 cadres au moins dans la zone de recouvrement des attentes.`},
  {t:"Poteau fortement chargé", d:2, e:`Poteau 25 × 25 cm, Nu = 900 kN, l0 = 2,80 m (Lf = 0,7 l0), fc28 = 25 MPa, FeE400.
1. Calculer λ, α et la contribution du béton.
2. Calculer A et choisir les barres.
3. Vérifier Amax.`, c:`1. Lf = 1,96 m ; **λ = 3,46 × 1,96 / 0,25 = 27,1** → **α = 0,85 / (1 + 0,2 × 0,600) = 0,759**.
Br = 0,23 × 0,23 = 0,0529 m² → Br fc28 / (0,9 γb) = 0,0529 × 25 / 1,35 = **980 kN**.
2. Nu / α = 900 / 0,759 = 1 186 kN → A ≥ (1 186 − 980) / 347,8 × 1 000 = **592 mm² = 5,92 cm²**.
Amin = 4 × 1,0 = 4,0 cm² → on retient 5,92 cm² → **4 HA14 (6,16 cm²)**.
3. Amax = 5 % × 625 = **31,25 cm²** ✔. Cadres HA6 (14/3 = 4,7 mm) tous les 20 cm (st ≤ min(21 ; 40 ; 35)).`},
  {t:"Charge maximale d'un poteau existant", d:2, e:`Un poteau existant de 20 × 30 cm, armé de 4 HA14, a une hauteur libre de 3,5 m (Lf = 0,7 l0). Béton fc28 = 20 MPa, aciers FeE400. Quelle charge ultime peut-il porter ?`, c:`Lf = 2,45 m ; λ = 3,46 × 2,45 / 0,20 = **42,4** → α = 0,85 / (1 + 0,2 × (42,4/35)²) = 0,85 / 1,293 = **0,657**.
Br = 0,18 × 0,28 = 0,0504 m² → 0,0504 × 20 / 1,35 = 0,747 MN = **747 kN** ; aciers : 616 × 347,8 = **214 kN**.
**Nu,max = 0,657 × (747 + 214) = 631 kN.** Si une surélévation est envisagée, on compare cette valeur à la nouvelle descente de charges.`},
  {t:"Choisir la section d'un poteau", d:3, e:`On doit reprendre Nu = 1 200 kN dans un poteau carré de hauteur libre 3,0 m (Lf = 2,10 m). On veut limiter les aciers à environ 1 % de la section. fc28 = 25 MPa, FeE400.
1. Prédimensionner la section avec la formule rapide.
2. Vérifier la section choisie et calculer les aciers.`, c:`1. Br ≥ 0,64 × 1 200 = 768 cm² → a − 2 ≥ √768 = 27,7 cm → **a = 30 cm** (Br = 784 cm²).
2. λ = 24,2 → α = 0,776 ; béton : 0,0784 × 25 / 1,35 = 1 452 kN.
Nu / α = 1 200 / 0,776 = 1 546 kN → A ≥ (1 546 − 1 452) / 0,3478 = **270 mm²** → inférieur au minimum : Amin = 4 × 1,20 = **4,8 cm²** → **4 HA14 (6,16 cm²)** soit 0,68 % de la section ✔.
Cadres HA6 tous les 20 cm.`}
 ],
 quiz:[
  {q:"La section réduite Br d'un poteau de 25 × 30 cm vaut :", o:["750 cm²","644 cm²","529 cm²","690 cm²"], r:1, e:"(25 − 2) × (30 − 2) = 23 × 28 = 644 cm²."},
  {q:"L'élancement d'un poteau rectangulaire vaut :", o:["Lf / a","3,46 Lf / a","a / Lf","4 Lf / a"], r:1, e:"i = a / √12."},
  {q:"La section minimale d'acier d'un poteau de 20 × 20 cm vaut :", o:["0,8 cm²","3,2 cm²","4,52 cm²","20 cm²"], r:1, e:"max(4 cm²/m × 0,80 m ; 0,2 % × 400 cm²) = 3,2 cm²."},
  {q:"Le diamètre des cadres d'un poteau armé de HA20 doit être au moins :", o:["HA6","HA8","HA10","HA12"], r:1, e:"φt ≥ 20 / 3 = 6,7 mm → HA8."},
  {q:"Quand λ augmente, le coefficient α :", o:["Augmente","Diminue","Ne change pas","Devient négatif"], r:1, e:"Plus le poteau est élancé, plus il faut réduire sa résistance."}
 ]},

{id:"ba-5", niv:2, titre:"Flexion simple à l'ELU : section rectangulaire", duree:80, contenu:`## Le fonctionnement d'une poutre en béton armé
Sous un moment positif, la partie haute de la section est comprimée et la partie basse tendue. Le béton tendu se **fissure** : on le néglige. Le moment est équilibré par un **couple** de forces :
- la résultante de compression du béton **Fbc**, en partie haute ;
- la traction des aciers **Fs = As × σs**, en partie basse ;
- séparées par le **bras de levier z**.
$$ Mu = Fs × z = As × σs × z

!fig:poutre-coupe|Section de poutre : béton comprimé en haut, aciers tendus en bas

## Les hypothèses de calcul à l'ELU
- Les sections planes restent planes (diagramme des déformations linéaire) ;
- le béton tendu est négligé ;
- le diagramme du béton est le **rectangle simplifié** : contrainte fbu sur une hauteur 0,8 y (y : position de l'axe neutre) ;
- les déformations limites : **3,5 ‰** pour le béton comprimé (pivot B), **10 ‰** pour l'acier tendu (pivot A).

## La méthode de calcul (section rectangulaire b × h, hauteur utile d)
1. Calculer le **moment réduit** :
$$ μ = Mu / (b × d² × fbu)
2. Le comparer au **moment réduit limite** μl (au-delà, l'acier n'atteint plus σs et la rupture serait fragile) :
| Acier | εl | αl | μl |
|---|---|---|---|
| FeE400 | 1,74 ‰ | 0,668 | **0,392** |
| FeE500 | 2,17 ‰ | 0,617 | **0,372** |
3. Si **μ ≤ μl** : pas d'aciers comprimés. On calcule :
$$ α = 1,25 × (1 − √(1 − 2μ))      z = d × (1 − 0,4 α)      As = Mu / (z × σs)
4. Vérifier la **condition de non-fragilité** : As ≥ 0,23 × b × d × ft28 / fe.
5. Choisir les barres et vérifier qu'elles tiennent dans la largeur (sinon deux lits et nouveau d).
Remarque : si μ ≤ 0,186, on est au **pivot A** (acier à 10 ‰, béton peu comprimé) ; si μ > 0,186, au **pivot B** (béton à 3,5 ‰). Les deux cas se calculent avec les mêmes formules tant que μ ≤ μl.

> [!exemple] Poutre de 25 × 50 cm
> d = 45 cm, Mu = 120 kN·m, fc28 = 25 MPa (fbu = 14,17 MPa), FeE400 (σs = 347,8 MPa).
> μ = 0,120 / (0,25 × 0,45² × 14,17) = 0,120 / 0,717 = **0,167** ≤ 0,392 → pas d'aciers comprimés.
> α = 1,25 × (1 − √(1 − 0,335)) = **0,230** ; z = 0,45 × (1 − 0,092) = **0,409 m**.
> As = 0,120 / (0,409 × 347,8) = 8,45 × 10⁻⁴ m² = **8,45 cm²** → **3 HA20 (9,42 cm²)**.
> Largeur : 2 × 2,5 + 2 × 0,8 + 3 × 2,0 + 2 × 3,75 = 20,1 cm ≤ 25 ✔ ; Amin = 0,23 × 25 × 45 × 2,1 / 400 = 1,36 cm² ✔.

## Formule approchée pour contrôler
Pour les poutres courantes (μ entre 0,05 et 0,25), z ≈ **0,9 d** donne une estimation rapide : As ≈ Mu / (0,9 d σs). Exemple : 0,120 / (0,9 × 0,45 × 347,8) = 8,52 cm² (proche de 8,45).

## Quand μ > μl : les armatures comprimées
Si le moment est trop fort pour la section, on peut :
- **augmenter la hauteur** de la poutre (solution la plus économique et la plus sûre) ;
- ou ajouter des **aciers comprimés** A' en partie haute (doubles armatures). On calcule alors :
$$ Ml = μl × b × d² × fbu      A' = (Mu − Ml) / ((d − d') × σsc)      As = Ml / (zl × σs) + A' × σsc / σs
avec zl = d (1 − 0,4 αl) et σsc la contrainte des aciers comprimés (égale à σs si leur déformation dépasse εl, cas courant). Les aciers comprimés doivent être tenus par des cadres serrés (sinon ils flambent).

## Équivalence Eurocode 2
L'Eurocode 2 utilise la même démarche (diagramme rectangulaire 0,8 x, μ réduit, α, z). Le moment réduit limite est souvent pris à **μlim ≈ 0,372** (x/d ≤ 0,617 pour B500) ou plus bas pour garantir la ductilité. Les résultats sont très proches.

> [!retenir]
> - μ = Mu / (b d² fbu) ; si μ ≤ μl (0,392 en FeE400) : α = 1,25 (1 − √(1 − 2μ)), z = d (1 − 0,4α), As = Mu / (z σs).
> - Contrôle rapide : z ≈ 0,9 d.
> - Non-fragilité : As ≥ 0,23 b d ft28 / fe.
> - μ > μl : augmenter h de préférence, sinon aciers comprimés.`,
 sujet:{titre:"Flexion simple à l'ELU d'une poutre 25 × 50", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une poutre de plancher de section **25 × 50 cm** (hauteur utile **d = 45 cm**) doit être ferraillée en travée. On étudie aussi le cas d'une surcharge plus forte.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- μ = Mu / (b d² fbu) ; α = 1,25 (1 − √(1 − 2 μ)) ; z = d (1 − 0,4 α) ; A = Mu / (z fsu) ;
- Pour FeE500 : αl = 3,5 / (3,5 + 2,17) = 0,617 et **μl = 0,372** ;
- Aciers comprimés éventuels à **d' = 5 cm**, contrainte prise égale à fsu ;
- Enrobage 3 cm, cadres HA8, Dmax = 20 mm ; HA20 = 3,14 cm².

### Partie A — Moment Mu = 180 kN·m (10 points)
1. Calculer μ et le comparer à μl. Conclure. (3 pts)
2. Calculer α, z puis la section d'aciers tendus. (4 pts)
3. Choisir les barres et vérifier qu'elles tiennent sur un lit. (2 pts)
4. Vérifier la condition de non-fragilité A ≥ 0,23 b d ft28 / fe. (1 pt)

### Partie B — Moment Mu = 300 kN·m (8 points)
5. Calculer μ. Conclure. (2 pts)
6. Calculer le moment limite Ml que la section peut reprendre sans aciers comprimés. (2 pts)
7. Calculer la section d'aciers comprimés A' et la section totale d'aciers tendus. (4 pts)

### Partie C — Réflexion (2 points)
8. Quelle autre solution que les aciers comprimés ? (2 pts)`,
  corrige:`### Partie A — Mu = 180 kN·m (10 pts)
1. $$ μ = 180 × 10⁶ / (250 × 450² × 14,17) = 0,251 < μl = 0,372
   **Pas d'aciers comprimés** (section simplement armée). *(3 pts)*
2. α = 1,25 (1 − √(1 − 0,502)) = **0,368** ; z = 45 × (1 − 0,147) = **38,4 cm** ;
$$ A = 180 × 10⁶ / (384 × 434,8) = 1 079 mm² = 10,8 cm² *(4 pts)*
3. **4 HA20 = 12,57 cm²**. Largeur libre : 25 − 2 × 3 − 2 × 0,8 = 17,4 cm ; 17,4 − 4 × 2 = 9,4 cm pour 3 espaces → 3,13 cm ≥ max (2 ; 3) ✔ : un seul lit. *(2 pts)*
4. 0,23 × 25 × 45 × 2,1 / 500 = 1,09 cm² ≤ 12,57 ✔. *(1 pt)*

### Partie B — Mu = 300 kN·m (8 pts)
5. μ = 300 / (250 × 450² × 14,17 × 10⁻⁶) = **0,418 > 0,372** → le béton comprimé ne suffit pas : **aciers comprimés** nécessaires (ou section à redimensionner). *(2 pts)*
6. Ml = μl b d² fbu = 0,372 × 717,4 = **266,6 kN·m**. *(2 pts)*
7. ΔM = 300 − 266,6 = 33,4 kN·m → **A' = 33,4 × 10⁶ / ((450 − 50) × 434,8) = 192 mm² = 1,92 cm²** (2 HA12) ;
   zl = 45 (1 − 0,4 × 0,617) = 33,9 cm → A = 266,6 × 10⁶ / (339 × 434,8) + 192 = 1 809 + 192 = **2 001 mm² = 20,0 cm²** (par exemple **4 HA25 + 2 HA12 = 21,9 cm²** sur deux lits ; la solution de la partie C est plus économique). *(4 pts)*

### Partie C — Réflexion (2 pts)
8. **Augmenter la hauteur** de la poutre (d² intervient) : avec h = 60 cm (d = 55 cm), μ = 300 / (250 × 550² × 14,17 × 10⁻⁶) = 0,28 < 0,372 : plus d'aciers comprimés et moins d'acier au total. *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser h au lieu de d.
> - Oublier de comparer μ à μl avant de calculer.
> - Mélanger N·mm et kN·m dans μ (tout en N et mm).`},
 exercices:[
  {t:"Poutre de plancher", d:1, e:`Poutre de 20 × 40 cm (d = 36 cm), Mu = 60 kN·m, fc28 = 25 MPa, FeE400. Calculer As et choisir les barres.`, c:`μ = 0,060 / (0,20 × 0,36² × 14,17) = 0,060 / 0,3673 = **0,163** ≤ 0,392.
α = 1,25 × (1 − √(1 − 0,327)) = **0,224** ; z = 0,36 × (1 − 0,090) = **0,328 m**.
As = 0,060 / (0,328 × 347,8) = **5,26 cm²** → **3 HA16 (6,03 cm²)** ou 2 HA16 + 1 HA14 (5,56 cm²).
Largeur avec 3 HA16 : 5 + 1,2 + 4,8 + 7,5 = 18,5 cm ≤ 20 ✔ (cadres HA6).`},
  {t:"Poutre d'après une descente de charges", d:2, e:`Poutre sur deux appuis de 5 m, pu = 38,5 kN/m (ELU). Section 25 × 45 cm (d = 41 cm). fc28 = 25 MPa, FeE400.
1. Calculer Mu.
2. Calculer As.
3. Choisir les barres et vérifier qu'elles tiennent dans la largeur.`, c:`1. **Mu = 38,5 × 25 / 8 = 120,3 kN·m**.
2. μ = 0,1203 / (0,25 × 0,41² × 14,17) = 0,1203 / 0,5955 = **0,202** ≤ 0,392.
α = 1,25 × (1 − √(1 − 0,404)) = 1,25 × 0,228 = **0,285** ; z = 0,41 × (1 − 0,114) = **0,363 m**.
As = 0,1203 / (0,363 × 347,8) = **9,53 cm²**.
3. 3 HA20 = 9,42 cm² (juste insuffisant) → **2 HA20 + 2 HA16 (10,30 cm²)** : largeur 5 + 1,6 + 4 + 3,2 + 3 × 3,75 = 25,05 cm ≈ 25 → trop juste ; on place **3 HA20 au 1er lit + 1 HA12 au 2e lit (10,55 cm²)** et on recalcule d (≈ 40 cm, As nécessaire ≈ 9,8 cm² ✔), ou on passe à une largeur de 30 cm.`},
  {t:"Moment maximal d'une section armée", d:2, e:`Une poutre existante de 20 × 50 cm (d = 46 cm) est armée de 3 HA16 (6,03 cm²) en FeE400, béton fc28 = 25 MPa. Quel moment ultime peut-elle reprendre ?`, c:`Équilibre : 0,8 y × b × fbu = As σs → 0,8 y × 0,20 × 14,17 = 6,03 × 10⁻⁴ × 347,8 = 0,2097 MN → **y = 0,2097 / 2,267 = 0,0925 m**.
z = d − 0,4 y = 0,46 − 0,037 = **0,423 m**.
**Mu = 0,2097 × 0,423 = 0,0887 MN·m = 88,7 kN·m.**
(Vérification : α = y/d = 0,201 ≤ αl : les aciers travaillent bien à σs.)`},
  {t:"Doubles armatures", d:3, e:`Une poutre de 20 × 40 cm (d = 36 cm, d' = 4 cm) doit reprendre Mu = 150 kN·m. fc28 = 25 MPa, FeE400. La hauteur ne peut pas être augmentée.
1. Montrer qu'il faut des aciers comprimés.
2. Calculer A' et As (on admettra σsc = 347,8 MPa).
3. Que conseillez-vous ?`, c:`1. μ = 0,150 / (0,20 × 0,36² × 14,17) = 0,150 / 0,3673 = **0,408 > 0,392** → aciers comprimés nécessaires.
2. Ml = 0,392 × 0,3673 = **0,1440 MN·m** ; zl = 0,36 × (1 − 0,4 × 0,668) = **0,264 m**.
A' = (0,150 − 0,1440) / ((0,36 − 0,04) × 347,8) = 0,0060 / 111,3 = **0,54 cm²** → 2 HA10 (1,57 cm²) en partie haute.
As = 0,1440 / (0,264 × 347,8) + 0,54 = 15,69 + 0,54 = **16,2 cm²** → 4 HA20 + 1 HA16 en deux lits (14,57 + 2,01 = 16,58 cm²).
3. La section est très chargée (près de 2,3 % d'acier, mise en place difficile). Il vaut mieux **augmenter la hauteur** (20 × 50 donnerait μ ≈ 0,24 et environ 11 cm² d'acier) ou la largeur.`},
  {t:"Influence du béton et de l'acier", d:3, e:`Pour la poutre de 25 × 50 cm (d = 45 cm) avec Mu = 120 kN·m, recalculer As :
1. avec un béton fc28 = 30 MPa et FeE400 ;
2. avec un béton fc28 = 25 MPa et FeE500.
Conclure.`, c:`1. fbu = 17,0 MPa : μ = 0,120 / (0,25 × 0,2025 × 17,0) = **0,139** ; α = 0,188 ; z = 0,416 m ; **As = 0,120 / (0,416 × 347,8) = 8,29 cm²** (− 2 % seulement).
2. σs = 434,8 MPa : μ = 0,167 (inchangé) ; z = 0,409 m ; **As = 0,120 / (0,409 × 434,8) = 6,75 cm²** (− 20 %).
En flexion simple courante, améliorer le béton fait peu gagner sur l'acier (z change peu) ; changer de nuance d'acier agit directement. Le béton plus résistant sert surtout aux poteaux, aux fortes compressions et à la durabilité.`}
 ],
 quiz:[
  {q:"Le moment réduit vaut :", o:["Mu / (b d fbu)","Mu / (b d² fbu)","Mu / (As σs)","b d² / Mu"], r:1, e:"μ = Mu / (b d² fbu)."},
  {q:"Pour un FeE400, le moment réduit limite μl vaut :", o:["0,186","0,372","0,392","0,5"], r:2, e:"Au-delà, il faut des aciers comprimés."},
  {q:"Le bras de levier vaut :", o:["z = d (1 − 0,4 α)","z = 0,8 d α","z = h / 2","z = d α"], r:0, e:"Distance entre la résultante de compression et les aciers."},
  {q:"Une estimation rapide de la section d'acier est :", o:["As ≈ Mu / (0,9 d σs)","As ≈ Mu × d","As ≈ 0,9 Mu / σs","As ≈ Mu / (b fbu)"], r:0, e:"z ≈ 0,9 d pour les poutres courantes."},
  {q:"Si μ > μl, la meilleure solution est en général :", o:["Ajouter beaucoup d'acier en bas","Augmenter la hauteur de la poutre","Diminuer le béton","Supprimer les cadres"], r:1, e:"La hauteur agit au carré sur la capacité."}
 ]},

{id:"ba-14", niv:2, titre:"Flexion simple à l'ELS : contraintes et fissuration", duree:65, contenu:`## Pourquoi vérifier l'ELS ?
Une poutre calculée à l'ELU ne casse pas. Mais en service, sous les charges réelles G + Q, il faut encore vérifier que :
- le béton n'est pas trop **comprimé** (sinon fissures longitudinales et fluage excessif) ;
- les aciers ne sont pas trop **tendus** quand la fissuration est préjudiciable (sinon les fissures s'ouvrent, l'eau pénètre et les aciers rouillent) ;
- la **flèche** reste acceptable (voir le chapitre sur les flèches).

## Les contraintes limites à l'ELS (BAEL)
| Vérification | Limite |
|---|---|
| Compression du béton | σbc ≤ σ̄bc = **0,6 × fc28** (15 MPa pour fc28 = 25) |
| Acier, fissuration peu préjudiciable | pas de limite (on ne vérifie que le béton) |
| Acier, fissuration préjudiciable | σs ≤ min(2/3 fe ; max(0,5 fe ; 110 √(η ft28))) : **201,6 MPa** (FeE400) |
| Acier, fissuration très préjudiciable | 0,8 × la valeur précédente : **161,3 MPa** (FeE400) |

## Les hypothèses du calcul élastique
À l'ELS, les matériaux sont supposés **élastiques** : le diagramme des contraintes du béton comprimé est **triangulaire**, le béton tendu est négligé, et l'acier est remplacé par une section de béton **n fois** plus grande, avec le coefficient d'équivalence conventionnel **n = 15** (il tient compte du fluage).

## Calcul des contraintes d'une section rectangulaire armée
1. Position de l'**axe neutre** y1 (depuis la fibre comprimée), solution de l'équation du moment statique nul :
$$ b × y1² / 2 − n × As × (d − y1) = 0      (+ n A' (y1 − d') s'il y a des aciers comprimés)
2. **Moment quadratique** de la section homogène réduite :
$$ I = b × y1³ / 3 + n × As × (d − y1)²
3. **Contraintes** :
$$ σbc = Mser × y1 / I      σs = n × Mser × (d − y1) / I

> [!exemple] Vérification ELS de la poutre de 25 × 50 cm
> As = 3 HA20 = 9,42 cm², d = 45 cm, Mser = 86 kN·m, fc28 = 25 MPa, FeE400.
> Axe neutre : 12,5 y1² + 15 × 9,42 × y1 − 15 × 9,42 × 45 = 0 → 12,5 y1² + 141,3 y1 − 6 358,5 = 0 → **y1 = 17,6 cm**.
> I = 25 × 17,6³ / 3 + 141,3 × (45 − 17,6)² = 45 431 + 106 082 = **151 514 cm⁴**.
> σbc = 0,086 × 0,176 / 1,515 × 10⁻³ = **9,99 MPa ≤ 15 MPa** ✔.
> σs = 15 × 0,086 × 0,274 / 1,515 × 10⁻³ = **233 MPa**.
> - Fissuration peu préjudiciable : ✔ (pas de limite).
> - Fissuration préjudiciable : 233 > 201,6 ✘ → il faut **augmenter As**. Par essais successifs, As = 11,0 cm² donne y1 = 18,7 cm et σs = 201,6 MPa → **2 HA25 + 1 HA16 (11,83 cm²)**.

## Dimensionner directement à l'ELS
Quand la fissuration est préjudiciable ou très préjudiciable, c'est souvent l'ELS qui dimensionne les aciers. Une estimation rapide :
$$ As ≈ Mser / (z × σ̄s)   avec   z ≈ d × (1 − α1 / 3)   et   α1 ≈ 0,4 à 0,45 en première approche
puis on vérifie avec le calcul exact ci-dessus. Pour l'exemple : z ≈ 0,45 × (1 − 0,42/3) = 0,387 m → As ≈ 0,086 / (0,387 × 201,6) = 11,0 cm² ✔.

## Limiter la fissuration par les dispositions
En plus du calcul, on limite l'ouverture des fissures en fissuration préjudiciable :
- diamètre des barres **≥ 6 mm** ; pour les poutres de grande hauteur (h > 60 cm), des **armatures de peau** (≥ 3 cm² par mètre de parement) ;
- en fissuration très préjudiciable : **φ ≥ 8 mm**, écartement des barres limité, enrobage renforcé ;
- privilégier **plusieurs barres fines** plutôt que peu de grosses barres.

> [!retenir]
> - ELS : σbc ≤ 0,6 fc28 ; σs ≤ 201,6 MPa (FP) ou 161,3 MPa (FTP) en FeE400.
> - n = 15 ; b y1²/2 = n As (d − y1) ; I = b y1³/3 + n As (d − y1)².
> - σbc = Mser y1 / I ; σs = n Mser (d − y1) / I.
> - En FP/FTP, l'ELS commande souvent les aciers.`,
 sujet:{titre:"Vérification à l'ELS d'une poutre en fissuration préjudiciable", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** La poutre 25 × 50 (d = 45 cm) ferraillée avec **4 HA20** en travée est une poutre de façade exposée : **fissuration préjudiciable**. On vérifie les contraintes de service.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Moment de service **Mser = 128 kN·m** ; coefficient d'équivalence **n = 15** ;
- 4 HA20 : A = **12,57 cm²** ; 5 HA20 : 15,71 cm² ;
- Limites : σbc ≤ 0,6 fc28 = **15 MPa** ; σs ≤ **250 MPa** (fissuration préjudiciable) ;
- Section homogène fissurée (sans aciers comprimés) : position de l'axe neutre b y² / 2 − n A (d − y) = 0 ; I = b y³ / 3 + n A (d − y)² ; σbc = Mser y / I ; σs = n Mser (d − y) / I.

### Partie A — Section fissurée (8 points)
1. Expliquer le principe de la section homogénéisée et le rôle de n. (2 pts)
2. Calculer la position y de l'axe neutre. (3 pts)
3. Calculer le moment quadratique I de la section fissurée. (3 pts)

### Partie B — Contraintes (6 points)
4. Calculer σbc et σs. (4 pts)
5. Les vérifications sont-elles satisfaites ? (2 pts)

### Partie C — Correction (6 points)
6. Refaire le calcul avec 5 HA20 (sur deux lits, on conservera d = 45 cm pour simplifier) et conclure. (4 pts)
7. Pourquoi l'ELS gouverne-t-il en fissuration préjudiciable ? (2 pts)`,
  corrige:`### Partie A — Section fissurée (8 pts)
1. On remplace l'acier par une aire de béton fictive **n fois plus grande** (n = Es/Eb ≈ 15) pour calculer comme un seul matériau ; le béton tendu, fissuré, est négligé. *(2 pts)*
2. En cm : 12,5 y² − 15 × 12,57 × (45 − y) = 0 → 12,5 y² + 188,6 y − 8 485 = 0 → **y = 19,6 cm**. *(3 pts)*
3. I = 25 × 19,58³ / 3 + 188,6 × (45 − 19,58)² = 62 550 + 121 840 = **184 400 cm⁴**. *(3 pts)*

### Partie B — Contraintes (6 pts)
4. σbc = 128 × 10⁶ × 195,8 / (184 400 × 10⁴) = **13,6 MPa** ; σs = 15 × 128 × 10⁶ × 254,2 / (184 400 × 10⁴) = **264,7 MPa**. *(4 pts)*
5. Béton : 13,6 ≤ 15 ✔ ; acier : **264,7 > 250 MPa ✘** → ouverture de fissures excessive. *(2 pts)*

### Partie C — Correction (6 pts)
6. 5 HA20 : n A = 235,7 → y = 21,2 cm ; I = 212 900 cm⁴ ; σbc = **12,7 MPa** ✔ ; σs = 15 × 128 × 10⁶ × 238,1 / (212 900 × 10⁴) = **214,8 MPa ≤ 250** ✔. On retient **5 HA20** (ou 4 HA20 + 1 HA16 selon le calcul exact de d). *(4 pts)*
7. La contrainte limite de l'acier à l'ELS (250 MPa) est bien inférieure à fsu (435 MPa) : pour limiter l'ouverture des fissures et protéger les aciers de la corrosion, il faut souvent **plus d'acier** que l'ELU n'en demande. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le coefficient n dans le calcul de σs.
> - Prendre y comme si la section était entièrement comprimée.
> - Conclure sur le seul béton : c'est souvent l'acier qui ne passe pas.`},
 exercices:[
  {t:"Contraintes de service d'une poutre", d:2, e:`Poutre de 20 × 40 cm (d = 36 cm) armée de 3 HA14 (4,62 cm²), Mser = 40 kN·m, fc28 = 25 MPa, FeE400, n = 15.
1. Calculer la position de l'axe neutre.
2. Calculer I, σbc et σs.
3. Conclure pour une fissuration peu préjudiciable puis préjudiciable.`, c:`1. 10 y1² + 69,3 y1 − 2 494,8 = 0 → **y1 = 12,7 cm**.
2. I = 20 × 12,7³ / 3 + 69,3 × (36 − 12,7)² = 13 656 + 37 622 = **51 278 cm⁴**.
**σbc = 0,040 × 0,127 / 5,128 × 10⁻⁴ = 9,9 MPa ≤ 15** ✔.
**σs = 15 × 0,040 × 0,233 / 5,128 × 10⁻⁴ = 272,6 MPa**.
3. FPN : ✔. FP : 272,6 > 201,6 ✘ → augmenter les aciers (environ 6,4 cm² nécessaires, par exemple 2 HA16 + 1 HA14 = 5,56 cm² insuffisant → **2 HA20 + 1 HA12 = 7,41 cm²**).`},
  {t:"Compression du béton à l'ELS", d:2, e:`Une poutre de 20 × 30 cm (d = 27 cm) très armée (4 HA16 = 8,04 cm²) reprend Mser = 45 kN·m. Vérifier la compression du béton (fc28 = 25 MPa, n = 15).`, c:`Axe neutre : 10 y1² + 120,6 y1 − 3 256,2 = 0 → **y1 = 13,0 cm**.
I = 20 × 13,0³ / 3 + 120,6 × (27 − 13,0)² = 14 647 + 23 638 = **38 285 cm⁴**.
**σbc = 0,045 × 0,130 / 3,8285 × 10⁻⁴ = 15,3 MPa > 15 MPa** ✘.
La section est trop petite : le béton est trop comprimé en service. Il faut **augmenter la hauteur** (20 × 35 par exemple) ; ajouter des aciers tendus n'y changerait presque rien.`},
  {t:"Dimensionner une poutre de façade à l'ELS", d:3, e:`Poutre de façade 25 × 50 cm (d = 45 cm), fissuration préjudiciable, Mu = 95 kN·m, Mser = 68 kN·m, FeE400, fc28 = 25 MPa.
1. Calculer As à l'ELU.
2. Estimer As à l'ELS puis vérifier.
3. Conclure.`, c:`1. ELU : μ = 0,095 / (0,25 × 0,2025 × 14,17) = 0,132 ; α = 0,178 ; z = 0,418 m ; **As = 6,53 cm²**.
2. ELS : z ≈ 0,387 m → As ≈ 0,068 / (0,387 × 201,6) = **8,7 cm²**. Avec 2 HA20 + 1 HA14 (7,82 cm²) : y1 = 16,4 cm, I = 132 700 cm⁴, σs = 15 × 0,068 × 0,286 / 1,327 × 10⁻³ ≈ 220 MPa ✘. Avec **3 HA20 (9,42 cm²)** : y1 = 17,6 cm, I = 151 514 cm⁴, σs = 15 × 0,068 × 0,274 / 1,515 × 10⁻³ = **184 MPa ≤ 201,6** ✔.
3. **3 HA20** : c'est l'ELS (fissuration) qui dimensionne, avec 44 % d'acier de plus que l'ELU.`},
  {t:"Contrainte limite de l'acier", d:1, e:`Calculer la contrainte limite de l'acier à l'ELS en fissuration préjudiciable puis très préjudiciable pour un acier FeE500 HA (η = 1,6) et un béton fc28 = 30 MPa.`, c:`ft28 = 0,6 + 0,06 × 30 = 2,4 MPa ; 110 √(1,6 × 2,4) = 110 × 1,960 = 215,6 MPa ; 0,5 fe = 250 MPa ; 2/3 fe = 333 MPa.
**FP : σ̄s = min(333 ; max(250 ; 215,6)) = 250 MPa.**
**FTP : σ̄s = 0,8 × 250 = 200 MPa.**`}
 ],
 quiz:[
  {q:"La contrainte limite de compression du béton à l'ELS vaut :", o:["0,85 fc28 / 1,5","0,6 fc28","fc28","ft28"], r:1, e:"σ̄bc = 0,6 fc28 = 15 MPa pour un béton de 25 MPa."},
  {q:"Le coefficient d'équivalence acier-béton utilisé à l'ELS est :", o:["n = 6","n = 10","n = 15","n = 20"], r:2, e:"Valeur conventionnelle du BAEL (fluage inclus)."},
  {q:"En fissuration peu préjudiciable, on vérifie à l'ELS :", o:["Seulement σbc","Seulement σs","σbc et σs","Rien"], r:0, e:"Pas de limite sur l'acier en FPN."},
  {q:"Si σbc dépasse 0,6 fc28, il faut surtout :", o:["Ajouter des aciers tendus","Augmenter la hauteur ou la largeur de la section","Diminuer l'enrobage","Changer d'acier"], r:1, e:"C'est le béton comprimé qui est insuffisant."},
  {q:"Pour limiter l'ouverture des fissures, on préfère :", o:["Peu de grosses barres","Plusieurs barres de plus petit diamètre","Moins d'enrobage","Des ronds lisses"], r:1, e:"La fissuration se répartit en fissures plus fines."}
 ]},

{id:"ba-15", niv:2, titre:"Poutres en T : la dalle participe à la résistance", duree:60, contenu:`## Pourquoi des sections en T ?
Dans un plancher, la poutre est coulée **en même temps** que la dalle. Sous un moment positif (en travée), la partie haute comprimée comprend la **dalle** sur une certaine largeur : la section qui résiste a la forme d'un **T** : une **table de compression** (la dalle) et une **nervure** (la retombée de la poutre). Les poutrelles des planchers à corps creux fonctionnent de la même façon avec leur table de 4 ou 5 cm.

## La largeur de table participante
Toute la dalle ne participe pas : la largeur prise en compte de chaque côté de la nervure est limitée par le BAEL à :
$$ b1 ≤ min ( L / 10 ; l1 / 2 )      b = b0 + 2 × b1
(L : portée de la poutre ; l1 : distance entre les faces de deux nervures voisines ; b0 : largeur de la nervure). Pour une poutre de rive, on ne compte qu'un débord.

> [!exemple] Largeur participante
> Poutre de 6 m de portée, nervure de 25 cm, poutres espacées de 4 m entre axes (l1 = 3,75 m).
> b1 = min(6 / 10 ; 3,75 / 2) = min(0,60 ; 1,875) = 0,60 m → **b = 0,25 + 2 × 0,60 = 1,45 m**.

## Où se trouve l'axe neutre ?
On calcule le moment que peut équilibrer **la table seule** entièrement comprimée (hauteur h0) :
$$ Mtu = b × h0 × fbu × (d − h0 / 2)
- **Mu ≤ Mtu** : l'axe neutre est **dans la table**. Le béton tendu ne comptant pas, la section se calcule comme une section **rectangulaire de largeur b** (la largeur de la nervure n'intervient pas). C'est le cas le plus fréquent dans les bâtiments.
- **Mu > Mtu** : l'axe neutre est **dans la nervure**. On décompose la section en deux :
  1. les **débords** de table (b − b0) × h0, entièrement comprimés : Mu1 = (b − b0) × h0 × fbu × (d − h0/2), repris par As1 = Mu1 / ((d − h0/2) σs) ;
  2. une **section rectangulaire b0 × d** soumise à Mu2 = Mu − Mu1, calculée comme au chapitre précédent (As2).
  As = As1 + As2.

> [!exemple] Axe neutre dans la table
> Table b = 1,00 m, h0 = 12 cm ; nervure b0 = 25 cm ; d = 50 cm ; Mu = 300 kN·m ; fbu = 14,17 MPa, FeE400.
> Mtu = 1,00 × 0,12 × 14,17 × (0,50 − 0,06) = **0,748 MN·m = 748 kN·m ≥ 300** → calcul rectangulaire avec b = 1,00 m.
> μ = 0,300 / (1,00 × 0,50² × 14,17) = **0,085** ; α = 0,111 ; z = 0,478 m.
> As = 0,300 / (0,478 × 347,8) = **18,05 cm²** → **6 HA20 (18,85 cm²)** sur deux lits dans la nervure de 25 cm (ou 4 HA25 = 19,63 cm²).
> En comptant seulement la nervure (25 × 50), on aurait eu μ = 0,339 et As ≈ 22,0 cm² : la table fait gagner près de 20 % d'acier.

> [!exemple] Axe neutre dans la nervure
> b = 0,60 m, h0 = 10 cm, b0 = 25 cm, d = 50 cm, Mu = 420 kN·m.
> Mtu = 0,60 × 0,10 × 14,17 × 0,45 = 0,383 MN·m < 0,420 → section en T.
> Débords : Mu1 = 0,35 × 0,10 × 14,17 × 0,45 = **0,223 MN·m** → As1 = 0,223 / (0,45 × 347,8) = **14,26 cm²**.
> Nervure : Mu2 = 0,420 − 0,223 = 0,197 MN·m → μ = 0,197 / (0,25 × 0,25 × 14,17) = 0,222 ; α = 0,318 ; z = 0,436 m ; As2 = **12,97 cm²**.
> **As = 27,2 cm²** → 6 HA25 (29,45 cm²) sur deux lits.

## Le moment négatif sur appui
Sur les appuis d'une poutre continue, le moment est **négatif** : la table (en haut) est **tendue** et ne compte plus, la zone comprimée est en bas, dans la nervure. On calcule donc les **chapeaux** avec une section **rectangulaire de largeur b0**. Les chapeaux peuvent être en partie répartis dans la dalle de part et d'autre de la nervure.

## Liaison table-nervure
La table ne participe que si elle est bien **liée** à la nervure : les aciers de la dalle qui traversent la jonction (et les cadres de la poutre) servent d'**armatures de couture** contre le glissement (voir le flux de cisaillement en RDM).

> [!retenir]
> - b = b0 + 2 min(L/10 ; l1/2).
> - Mtu = b h0 fbu (d − h0/2) : si Mu ≤ Mtu, calcul rectangulaire de largeur b.
> - Sinon : débords (As1) + nervure (As2).
> - Sur appui (moment négatif) : section rectangulaire de largeur b0.`,
 sujet:{titre:"Poutre en T d'un plancher : position de l'axe neutre et aciers", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une poutre de plancher coulée avec la dalle travaille en **section en T**. On calcule ses aciers en travée.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Largeur de table participante **b = 80 cm**, épaisseur de table **h0 = 12 cm**, largeur d'âme **b0 = 20 cm**, hauteur utile **d = 45 cm** ;
- Moment ultime en travée **Mu = 250 kN·m** ;
- Moment équilibré par la table entièrement comprimée : Mt = b h0 fbu (d − h0/2) ;
- HA20 = 3,14 cm².

### Partie A — Comportement (5 points)
1. Pourquoi une partie de la dalle participe-t-elle à la résistance de la poutre ? Comment limite-t-on la largeur participante ? (3 pts)
2. Calculer Mt. (2 pts)

### Partie B — Calcul des aciers (10 points)
3. Comparer Mu et Mt : où se trouve l'axe neutre ? Comment calcule-t-on alors la section ? (3 pts)
4. Calculer μ, α, z et la section d'aciers. (5 pts)
5. Choisir les barres pour une âme de 20 cm (enrobage 3 cm, cadres HA8, espacement libre ≥ 3 cm). (2 pts)

### Partie C — Comparaison (5 points)
6. Calculer la section d'aciers d'une poutre rectangulaire 20 × 50 (d = 45 cm) soumise au même moment. Conclure. (5 pts)`,
  corrige:`### Partie A — Comportement (5 pts)
1. La dalle est coulée avec la poutre : en travée, sa partie proche de la poutre est **comprimée** avec la face supérieure de la poutre ; elle augmente beaucoup la zone de béton comprimé. La largeur participante est limitée (au dixième de la portée de part et d'autre de l'âme, et à la moitié de la distance entre poutres). *(3 pts)*
2. $$ Mt = 800 × 120 × 14,17 × (450 − 60) = 530,4 × 10⁶ N·mm = 530,4 kN·m *(2 pts)*

### Partie B — Aciers (10 pts)
3. **Mu = 250 < Mt = 530,4** : l'axe neutre est **dans la table** ; la section se calcule comme une **section rectangulaire b × d = 80 × 45** (le béton tendu sous l'axe neutre est négligé). *(3 pts)*
4. μ = 250 × 10⁶ / (800 × 450² × 14,17) = **0,109** ; α = **0,145** ; z = 45 × (1 − 0,058) = **42,4 cm** ;
$$ A = 250 × 10⁶ / (424 × 434,8) = 1 356 mm² = 13,6 cm² *(5 pts)*
5. 3 HA25 sur un lit ne passent pas (espacements de 2,45 cm < 3 cm) → **5 HA20 = 15,71 cm²** sur deux lits (3 + 2), en vérifiant que d reste voisin de 45 cm. *(2 pts)*

### Partie C — Comparaison (5 pts)
6. Rectangle 20 × 45 : μ = 250 × 10⁶ / (200 × 450² × 14,17) = **0,436 > 0,372** → aciers comprimés indispensables et section d'acier bien plus forte. La table divise μ par 4 : la section en T est **beaucoup plus efficace**. *(5 pts)*

> [!attention] Erreurs à éviter
> - Calculer avec b0 alors que l'axe neutre est dans la table.
> - Oublier de vérifier la position de l'axe neutre avant de choisir la méthode.
> - Prendre une largeur de table supérieure à la largeur participante réglementaire.`},
 exercices:[
  {t:"Largeur de table", d:1, e:`Des poutres de 5 m de portée, de 20 cm de large, sont espacées de 3,5 m entre axes. Calculer la largeur de table participante d'une poutre intermédiaire et d'une poutre de rive.`, c:`l1 = 3,50 − 0,20 = 3,30 m ; b1 = min(5/10 ; 3,30/2) = min(0,50 ; 1,65) = **0,50 m**.
Poutre intermédiaire : **b = 0,20 + 2 × 0,50 = 1,20 m**.
Poutre de rive (un seul débord) : **b = 0,20 + 0,50 = 0,70 m**.`},
  {t:"Poutre en T courante", d:2, e:`Poutre en T : b = 1,20 m, h0 = 15 cm, b0 = 20 cm, h = 45 cm (d = 41 cm). Mu = 160 kN·m. fc28 = 25 MPa, FeE400.
1. Où se trouve l'axe neutre ?
2. Calculer As.`, c:`1. Mtu = 1,20 × 0,15 × 14,17 × (0,41 − 0,075) = 2,551 × 0,335 = **0,854 MN·m ≥ 0,160** → axe neutre **dans la table**.
2. Section rectangulaire 1,20 × 0,41 : μ = 0,160 / (1,20 × 0,41² × 14,17) = 0,160 / 2,858 = **0,056** ; α = 0,072 ; z = 0,41 × 0,971 = 0,398 m.
**As = 0,160 / (0,398 × 347,8) = 11,56 cm²** → 4 HA20 (12,57 cm²) en deux lits dans la nervure de 20 cm.`},
  {t:"Poutre en T avec axe neutre dans la nervure", d:3, e:`Section en T : b = 0,80 m, h0 = 8 cm, b0 = 30 cm, d = 55 cm. Mu = 450 kN·m. fc28 = 25 MPa, FeE400. Calculer As.`, c:`Mtu = 0,80 × 0,08 × 14,17 × (0,55 − 0,04) = 0,9069 × 0,51 = **0,4625 MN·m ≥ 0,450** → l'axe neutre est encore (juste) dans la table : calcul rectangulaire de largeur 0,80 m.
μ = 0,450 / (0,80 × 0,55² × 14,17) = 0,450 / 3,429 = **0,131** ; α = 0,176 ; z = 0,55 × (1 − 0,070) = 0,511 m.
**As = 0,450 / (0,511 × 347,8) = 25,3 cm²** → 4 HA25 + 2 HA16 (19,63 + 4,02 = 23,65, insuffisant) → **4 HA25 + 2 HA20 (25,91 cm²)** sur deux lits.`},
  {t:"Chapeaux sur appui", d:2, e:`La poutre en T de l'exercice 2 (b0 = 20 cm, d = 41 cm) est continue ; sur l'appui intermédiaire, Mu = −110 kN·m. Calculer les chapeaux.`, c:`Moment négatif : table tendue, on calcule une section **rectangulaire 0,20 × 0,41** (d mesuré depuis la fibre inférieure comprimée jusqu'aux chapeaux).
μ = 0,110 / (0,20 × 0,41² × 14,17) = 0,110 / 0,4764 = **0,231** ; α = 0,333 ; z = 0,41 × 0,867 = 0,355 m.
**As = 0,110 / (0,355 × 347,8) = 8,91 cm²** → **3 HA20 (9,42 cm²)**, ou 2 HA20 dans la nervure + 2 HA12 dans la dalle de part et d'autre.`}
 ],
 quiz:[
  {q:"Dans une poutre en T en travée, la zone comprimée est :", o:["La nervure basse","La table (dalle)","Les aciers","Nulle"], r:1, e:"Le moment positif comprime la partie haute."},
  {q:"La largeur d'un débord de table est limitée à :", o:["L/2","min(L/10 ; l1/2)","h0","b0"], r:1, e:"Règle BAEL de la largeur participante."},
  {q:"Si Mu ≤ Mtu, la section se calcule comme :", o:["Une section rectangulaire de largeur b0","Une section rectangulaire de largeur b","Un tirant","Un poteau"], r:1, e:"L'axe neutre est dans la table ; le béton tendu ne compte pas."},
  {q:"Sur un appui de poutre continue, la section de calcul est :", o:["Le T complet","Un rectangle de largeur b0","Un rectangle de largeur b","La dalle seule"], r:1, e:"La table est tendue sous le moment négatif."},
  {q:"La table participe à la résistance à condition :", o:["D'être coulée séparément","D'être bien liée à la nervure par des armatures de couture","D'être plus épaisse que la poutre","D'avoir des chapeaux"], r:1, e:"Il faut empêcher le glissement entre table et nervure."}
 ]},

{id:"ba-9", niv:2, titre:"Effort tranchant : cadres, étriers et vérifications d'appui", duree:70, contenu:`## La rupture par effort tranchant
Près des appuis, là où l'effort tranchant est grand, apparaissent des **fissures inclinées à environ 45°**. Si rien ne les « coud », la poutre se rompt brutalement selon ces fissures, sans prévenir. On place donc des **armatures transversales** (cadres, étriers, épingles) qui traversent ces fissures.
On modélise la poutre fissurée comme un **treillis de Ritter-Mörsch** : des **bielles** de béton comprimées inclinées à 45°, les **aciers longitudinaux** tendus en bas, les **cadres** tendus verticaux.

## La contrainte tangentielle conventionnelle
$$ τu = Vu / (b0 × d)
On vérifie d'abord que le **béton des bielles** n'est pas écrasé :
| Fissuration | τu limite (armatures droites) |
|---|---|
| Peu préjudiciable | min (0,20 fc28 / γb ; 5 MPa) = **3,33 MPa** (fc28 = 25) |
| Préjudiciable ou très préjudiciable | min (0,15 fc28 / γb ; 4 MPa) = **2,50 MPa** (fc28 = 25) |
Si τu dépasse la limite, il faut **augmenter la section** (b0 ou d) : ajouter des cadres ne suffit pas.

## Le calcul des armatures transversales
Pour des cadres verticaux (droits), le BAEL donne :
$$ At / (b0 × st) ≥ (τu − 0,3 × ft28 × k) / (0,9 × fe / γs)
- At : section totale des brins d'un cadre (un cadre = 2 brins ; cadre + étrier = 4 brins) ;
- st : espacement des cadres ;
- k = 1 en flexion simple sans reprise de bétonnage ; k = 0 s'il y a une reprise de bétonnage ou en fissuration très préjudiciable.
Le terme 0,3 ft28 k représente la part de l'effort tranchant reprise par le béton lui-même.

## Les conditions minimales
- **Pourcentage minimal** : At × fe / (b0 × st) ≥ **0,4 MPa** ;
- **espacement maximal** : st ≤ min (0,9 d ; 40 cm) ;
- **diamètre** : φt ≤ min (h / 35 ; φl,min ; b0 / 10) ; en pratique HA6 ou HA8, HA10 pour les grosses poutres.

> [!exemple] Poutre de 25 × 50 cm
> Vu = 160 kN, d = 45 cm, fc28 = 25 MPa (ft28 = 2,1), FeE400, fissuration peu préjudiciable, k = 1.
> τu = 0,160 / (0,25 × 0,45) = **1,42 MPa ≤ 3,33 MPa** ✔ (bielles correctes).
> At / st ≥ 0,25 × (1,42 − 0,63) / (0,9 × 347,8) = **6,33 cm²/m**.
> Cadres HA8 (2 brins : At = 1,01 cm²) → st ≤ 1,01 / 6,33 = 0,16 m → **st0 = 15 cm** près de l'appui.
> Minimum : At / st ≥ 0,4 × 0,25 / 400 = 2,5 cm²/m → st ≤ 40 cm ; st ≤ min(0,9 × 45 ; 40) = 40 cm.

## La répartition des cadres : méthode de Caquot
Comme V diminue vers le milieu de la travée (charge répartie), on peut **espacer** progressivement les cadres. La méthode pratique de **Caquot** :
1. placer le premier cadre à **st0 / 2** du nu de l'appui ;
2. suivre la **suite des espacements** : **7 – 8 – 9 – 10 – 11 – 13 – 16 – 20 – 25 – 35 – 40 cm**, en partant de st0 ;
3. répéter chaque espacement **n fois**, n étant le nombre de **mètres de la demi-portée** (arrondi) ;
4. ne jamais dépasser st max ; on fait de même depuis l'autre appui.

> [!exemple] Répartition pour une portée de 5 m
> st0 = 15 cm → on commence la suite à 16 cm. Demi-portée 2,5 m → n = 3 répétitions.
> Depuis l'appui : 1 × 7,5 cm (st0/2), puis 3 × 16, 3 × 20, 3 × 25 cm… jusqu'au milieu (2,50 m) : 7,5 + 48 + 60 + 75 = 190,5 cm, puis 2 × 30 cm environ pour atteindre l'axe (en restant ≤ 40 cm).

## Les vérifications à l'appui
1. **Bielle d'about** : la bielle comprimée qui descend vers l'appui ne doit pas écraser le béton :
$$ Vu ≤ 0,267 × a × b0 × fc28      (a : longueur d'appui de la bielle, ≈ largeur de l'appui − 2 cm, et a ≤ 0,9 d)
2. **Aciers inférieurs ancrés** sur l'appui : As ≥ Vu / σs (voir le chapitre sur les ancrages).

> [!exemple] Vérification de la bielle
> Appui (poteau) de 25 cm : a = 0,23 m. Vu,lim = 0,267 × 0,23 × 0,25 × 25 = 0,384 MN = **384 kN ≥ 160 kN** ✔.

## Le cas des dalles
Dans les dalles, on évite les armatures d'effort tranchant. Elles ne sont pas nécessaires si :
$$ τu ≤ 0,07 × fc28 / γb      (1,17 MPa pour fc28 = 25)
condition presque toujours vérifiée pour les dalles de bâtiment (sauf poinçonnement sous charges concentrées).

> [!retenir]
> - τu = Vu / (b0 d) ≤ 3,33 MPa (FPN) ou 2,5 MPa (FP), sinon agrandir la section.
> - At / (b0 st) ≥ (τu − 0,3 ft28 k) / (0,9 fe / γs) ; minimum At fe / (b0 st) ≥ 0,4 MPa ; st ≤ min(0,9 d ; 40 cm).
> - Caquot : premier cadre à st0/2, puis 7, 8, 9, 10, 11, 13, 16, 20, 25, 35, 40, répétés n fois.
> - Appui : Vu ≤ 0,267 a b0 fc28 et As ancrée ≥ Vu / σs.`,
 sujet:{titre:"Armatures d'effort tranchant d'une poutre et vérifications d'appui", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** La poutre 25 × 50 cm (d = 45 cm) d'un plancher de bureaux reprend un effort tranchant ultime **Vu = 180 kN** au nu de l'appui. Fissuration peu préjudiciable, reprise de bétonnage non traitée (k = 1).

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- τu = Vu / (b0 d) ; limite : τu ≤ min (0,2 fc28 / γb ; 5 MPa) ;
- At / st ≥ b0 (τu − 0,3 ft28 k) / (0,9 fe / γs) ; st ≤ min (0,9 d ; 40 cm) ; At fe / (b0 st) ≥ 0,4 MPa ;
- Cadre HA8 + étrier HA8 : on retient **2 brins HA8 = 1,005 cm²** par nappe ;
- Bielle d'appui : Vu ≤ 0,267 a b0 fc28 (a : longueur d'appui de la bielle) ;
- Aciers inférieurs à ancrer sur l'appui : A ≥ Vu γs / fe ;
- Suite de Caquot (cm) : 7 – 8 – 9 – 10 – 11 – 13 – 16 – 20 – 25 – 35 – 40.

### Partie A — Contrainte tangente (5 points)
1. Calculer τu et la contrainte limite. Conclure. (5 pts)

### Partie B — Armatures transversales (9 points)
2. Calculer At / st puis l'espacement st0 au voisinage de l'appui. (4 pts)
3. Vérifier l'espacement maximal et le pourcentage minimal. (2 pts)
4. Expliquer la méthode de Caquot pour répartir les cadres sur une demi-portée de 3 m (on ne demande que le principe et les premiers espacements). (3 pts)

### Partie C — Appui (6 points)
5. Calculer la longueur minimale d'appui de la bielle a. (3 pts)
6. Calculer la section d'aciers inférieurs à prolonger et ancrer sur l'appui. (3 pts)`,
  corrige:`### Partie A — τu (5 pts)
1. τu = 180 000 / (250 × 450) = **1,60 MPa** ; limite = min (0,2 × 25 / 1,5 = 3,33 ; 5) = **3,33 MPa** → **1,60 ≤ 3,33** ✔ : les bielles de béton ne s'écrasent pas, des armatures droites suffisent. *(5 pts)*

### Partie B — Cadres (9 pts)
2. $$ At / st ≥ 250 × (1,60 − 0,3 × 2,1) / (0,9 × 434,8) = 250 × 0,97 / 391,3 = 0,620 mm²/mm
   st0 ≤ 100,5 / 0,620 = **162 mm** → **st0 = 15 cm**. *(4 pts)*
3. st max = min (0,9 × 45 = 40,5 ; 40) = **40 cm** ✔ ; pourcentage minimal : st ≤ 100,5 × 500 / (250 × 0,4) = 502 mm ✔. *(2 pts)*
4. Caquot : on place le **premier cadre à st0 / 2 = 7,5 cm** du nu de l'appui, puis on répète chaque espacement de la suite **autant de fois qu'il y a de mètres dans la demi-portée** (ici 3 fois), en partant de la valeur de la suite immédiatement inférieure ou égale à st0 : **3 × 13 cm, 3 × 16 cm, 3 × 20 cm, 3 × 25 cm…** jusqu'au milieu de la travée. *(3 pts)*

### Partie C — Appui (6 pts)
5. a ≥ 180 000 / (0,267 × 250 × 25) = **108 mm** → la bielle doit s'appuyer sur au moins **11 cm** (largeur du poteau moins enrobage et rayon de courbure : un poteau de 25 cm convient). *(3 pts)*
6. A ≥ 180 000 × 1,15 / 500 = **414 mm² = 4,14 cm²** à prolonger jusqu'à l'appui et ancrer (par exemple 2 HA20 = 6,28 cm² avec crochets). *(3 pts)*

> [!attention] Erreurs à éviter
> - Compter un seul brin pour un cadre (un cadre fermé travaille par ses deux branches verticales).
> - Commencer la suite de Caquot à st0 sans placer le premier cadre à st0 / 2.
> - Oublier d'ancrer les aciers inférieurs sur l'appui : la bielle d'appui doit être « retenue ».`},
 exercices:[
  {t:"Vérifier la contrainte tangentielle", d:1, e:`Une poutre de 20 × 40 cm (d = 36 cm) subit Vu = 95 kN. fc28 = 25 MPa, fissuration peu préjudiciable. Calculer τu et conclure.`, c:`**τu = 0,095 / (0,20 × 0,36) = 1,32 MPa ≤ 3,33 MPa** ✔ : la section est suffisante vis-à-vis des bielles ; il reste à calculer les cadres.`},
  {t:"Espacement des cadres", d:2, e:`Même poutre (20 × 40, d = 36 cm, Vu = 95 kN), FeE400, k = 1, cadres HA6 (2 brins).
1. Calculer At/st nécessaire.
2. En déduire st0.
3. Vérifier le minimum et l'espacement maximal.`, c:`1. At / st ≥ 0,20 × (1,32 − 0,3 × 2,1) / (0,9 × 347,8) = 0,20 × 0,69 / 313,0 = **4,41 cm²/m**.
2. HA6 2 brins : At = 0,57 cm² → st ≤ 0,57 / 4,41 = 0,129 m → **st0 = 12 cm** (ou cadres HA8 : 1,01 / 4,41 = 0,23 m → 20 cm).
3. Minimum : At/st ≥ 0,4 × 0,20 / 400 = 2,0 cm²/m → HA6 : st ≤ 28 cm ; st max = min(0,9 × 36 ; 40) = 32 cm. On retiendra **HA6, st0 = 12 cm** puis espacements croissants jusqu'à 28 cm maximum.`},
  {t:"Répartition de Caquot", d:2, e:`Poutre de 6 m de portée, st0 = 13 cm, st max = 35 cm. Donner la répartition des cadres sur une demi-portée selon Caquot.`, c:`Demi-portée 3 m → **n = 3** répétitions. On démarre la suite à 13 cm.
Depuis l'appui : 1 × 6,5 cm, puis 3 × 13, 3 × 16, 3 × 20, 3 × 25 cm, puis 35 cm jusqu'au milieu.
Cumul : 6,5 + 39 + 48 + 60 + 75 = 228,5 cm ; reste 300 − 228,5 = 71,5 cm → **2 × 35 cm** (70 cm). Soit environ 15 cadres par demi-portée.`},
  {t:"Section trop faible", d:3, e:`Une poutre de 15 × 35 cm (d = 31 cm) en façade (fissuration préjudiciable) subit Vu = 130 kN. fc28 = 25 MPa.
1. Calculer τu et vérifier.
2. Quelle largeur minimale faut-il (même hauteur) ?`, c:`1. τu = 0,130 / (0,15 × 0,31) = **2,80 MPa > 2,50 MPa** (limite en fissuration préjudiciable) ✘ : les bielles risquent de s'écraser, **des cadres supplémentaires ne suffisent pas**.
2. b0 ≥ 0,130 / (2,50 × 0,31) = 0,168 m → **b0 = 20 cm** (τu = 2,10 MPa ✔), ou augmenter la hauteur.`},
  {t:"Vérifications d'appui", d:2, e:`Poutre de 25 × 45 cm (d = 41 cm), Vu = 210 kN, reposant sur un poteau de 20 cm de large. fc28 = 25 MPa, FeE400.
1. Vérifier la bielle d'about.
2. Calculer la section d'acier inférieur à ancrer sur l'appui.`, c:`1. a = 0,20 − 0,02 = 0,18 m (≤ 0,9 d = 0,37 ✔). Vu,lim = 0,267 × 0,18 × 0,25 × 25 = 0,300 MN = **300 kN ≥ 210 kN** ✔.
2. **As ≥ 0,210 / 347,8 = 6,04 cm²** à prolonger et ancrer dans le poteau, par exemple 3 HA16 (6,03 cm², juste) → 2 HA20 (6,28 cm²) avec crochets.`}
 ],
 quiz:[
  {q:"La contrainte tangentielle conventionnelle vaut :", o:["Vu / (b0 h)","Vu / (b0 d)","Mu / (b d²)","Vu / As"], r:1, e:"τu = Vu / (b0 d)."},
  {q:"En fissuration peu préjudiciable (fc28 = 25), τu est limitée à :", o:["1,17 MPa","2,5 MPa","3,33 MPa","5 MPa"], r:2, e:"min(0,2 fc28 / γb ; 5 MPa) = 3,33 MPa."},
  {q:"Si τu dépasse la limite, il faut :", o:["Ajouter des cadres","Augmenter la section de béton","Changer d'acier","Supprimer les chapeaux"], r:1, e:"C'est le béton des bielles qui est insuffisant."},
  {q:"Dans la méthode de Caquot, le premier cadre se place à :", o:["0 cm de l'appui","st0 / 2 du nu de l'appui","st0","1 m"], r:1, e:"Puis on suit la suite d'espacements."},
  {q:"Une dalle n'a pas besoin d'armatures d'effort tranchant si τu ≤ :", o:["0,07 fc28 / γb","0,2 fc28 / γb","fc28","3,33 MPa"], r:0, e:"Soit 1,17 MPa pour un béton de 25 MPa."}
 ]},

{id:"ba-6", niv:2, titre:"Les dalles pleines : portant dans un sens ou dans deux sens", duree:75, contenu:`## Le rôle de la dalle
La **dalle pleine** est une plaque de béton armé de 12 à 25 cm d'épaisseur qui reçoit directement les charges du plancher et les transmet aux poutres ou aux murs. On note **lx** la plus petite portée et **ly** la plus grande d'un panneau, et :
$$ α = lx / ly      (0 < α ≤ 1)
- **α < 0,4** : la dalle porte pratiquement dans **un seul sens** (le petit) : on la calcule comme une poutre de 1 m de large et de portée lx ;
- **α ≥ 0,4** : la dalle porte dans les **deux sens** : les moments se calculent avec les coefficients μx et μy.

!fig:dalle-coupe|Coupe d'une dalle : aciers principaux en bas dans le sens de lx, aciers de répartition, chapeaux sur les appuis

## L'épaisseur de la dalle
Valeurs courantes (critères de flèche, d'acoustique et de résistance au feu) :
| Cas | Épaisseur h |
|---|---|
| Dalle portant dans un sens, isostatique | ≥ lx / 20 |
| Dalle portant dans un sens, continue | ≥ lx / 25 à lx / 30 |
| Dalle portant dans deux sens, isolée | ≥ lx / 30 |
| Dalle portant dans deux sens, continue | ≥ lx / 35 à lx / 40 |
| Minimum pratique (logement, acoustique et feu) | 12 cm (15 cm entre logements) |

## Dalle portant dans un sens
On étudie une bande de **1 m** : charge p (kN/m² = kN/m pour 1 m de large), moment isostatique M0 = p lx² / 8. Si la dalle est **continue** sur ses appuis, on répartit forfaitairement :
- en **travée** : Mt = **0,85 M0** (travée de rive) ou **0,75 M0** (travée intermédiaire) ;
- sur **appuis** : Ma = **0,5 M0** (appui intermédiaire) et **0,3 M0** (appui de rive, encastrement partiel dans la poutre).
On vérifie que Mt + (Mw + Me) / 2 ≥ 1,25 M0.
Les aciers sont calculés comme pour une poutre (b = 1 m, d ≈ h − 3 cm), en **cm² par mètre**.

> [!exemple] Dalle de 3,50 m portant dans un sens
> lx = 3,50 m, ly = 9,0 m (α = 0,39 < 0,4), dalle continue, travée de rive. h = 14 cm (lx / 25), d = 11,5 cm.
> G = 0,14 × 25 + 1,5 (revêtements) = 5,0 kN/m² ; Q = 1,5 kN/m² → pu = 1,35 × 5,0 + 1,5 × 1,5 = **9,0 kN/m²**.
> M0 = 9,0 × 3,5² / 8 = **13,78 kN·m/m** ; Mt = 0,85 × 13,78 = **11,71 kN·m/m** ; Ma (intermédiaire) = 0,5 × 13,78 = **6,89 kN·m/m**.
> Travée : μ = 0,01171 / (1 × 0,115² × 14,17) = 0,0625 ; z = 0,111 m ; **As = 3,03 cm²/m** → **HA10 e = 25 cm** (3,14 cm²/m).
> Appui : μ = 0,0368 ; **As = 1,76 cm²/m** → **chapeaux HA8 e = 25 cm** (2,01 cm²/m).
> Aciers de répartition (sens ly) : au moins As / 4 ≈ 0,8 cm²/m et le minimum réglementaire → **HA8 e = 30 cm**.

## Dalle portant dans deux sens (α ≥ 0,4)
Les moments isostatiques au centre du panneau (bande de 1 m) valent :
$$ Mox = μx × p × lx²      Moy = μy × Mox
Coefficients du BAEL à l'ELU (coefficient de Poisson ν = 0) :
| α = lx / ly | 0,40 | 0,50 | 0,60 | 0,70 | 0,80 | 0,90 | 1,00 |
|---|---|---|---|---|---|---|---|
| μx | 0,1101 | 0,0966 | 0,0822 | 0,0684 | 0,0561 | 0,0456 | 0,0368 |
| μy | 0,2500 | 0,2500 | 0,2948 | 0,4320 | 0,5959 | 0,7834 | 1,0000 |
Puis on applique la continuité comme ci-dessus (0,85 ou 0,75 en travée ; 0,3 ou 0,5 sur appuis, en prenant Mox pour les appuis), dans chaque direction.

> [!exemple] Panneau de 4,0 × 5,0 m
> α = 0,80 → μx = 0,0561 ; μy = 0,5959. h = 15 cm (dx = 12,5 cm, dy = 11,5 cm : les aciers du petit sens sont placés dessous).
> G = 0,15 × 25 + 1,5 = 5,25 kN/m² ; Q = 1,5 → pu = **9,34 kN/m²**.
> Mox = 0,0561 × 9,34 × 4,0² = **8,38 kN·m/m** ; Moy = 0,5959 × 8,38 = **4,99 kN·m/m**.
> Panneau intermédiaire : Mtx = 0,75 × 8,38 = 6,29 ; Mty = 0,75 × 4,99 = 3,75 ; appuis : 0,5 × 8,38 = 4,19 kN·m/m.
> Aciers : sens x en travée **1,47 cm²/m** ; sens y **0,95 cm²/m** ; appuis **0,97 cm²/m**.

## Les sections minimales
Avec ρ0 = **0,0008** (HA FeE400) ou **0,0006** (HA FeE500 et treillis soudés) :
$$ Ay ≥ ρ0 × b × h      Ax ≥ ρ0 × (3 − α) / 2 × b × h
Pour l'exemple : Ay ≥ 0,0008 × 100 × 15 = 1,20 cm²/m ; Ax ≥ 0,0008 × 1,1 × 100 × 15 = 1,32 cm²/m. On retient donc **HA8 e = 25 cm (2,01 cm²/m) dans les deux sens** en travée, et des chapeaux HA8 e = 25 cm, ou un **treillis soudé** équivalent.

## Les dispositions constructives
- diamètre **φ ≤ h / 10** ;
- espacement des aciers principaux ≤ **min (3h ; 33 cm)** et des aciers de répartition ≤ **min (4h ; 45 cm)** (fissuration peu préjudiciable) ; plus serrés en fissuration préjudiciable ;
- **chapeaux** sur appuis sur une longueur d'environ **lx / 4** (appui intermédiaire) ou **lx / 5** de part et d'autre ;
- **renforts** autour des **trémies** (escaliers, gaines) : on reporte de part et d'autre de l'ouverture les aciers interrompus ;
- en principe, **pas d'armatures d'effort tranchant** si τu ≤ 0,07 fc28 / γb (1,17 MPa). Pour l'exemple : Vx = p lx ly / (2 ly + lx) = 9,34 × 4 × 5 / 14 = 13,3 kN/m → τu = 0,0133 / 0,125 = 0,11 MPa ✔.

> [!retenir]
> - α = lx/ly < 0,4 : un sens (M0 = p lx² / 8) ; α ≥ 0,4 : deux sens (Mox = μx p lx², Moy = μy Mox).
> - Continuité : 0,85 / 0,75 M0 en travée ; 0,3 / 0,5 M0 sur appuis.
> - Minimum : ρ0 = 0,0008 (FeE400) ; espacements ≤ min(3h ; 33 cm).
> - φ ≤ h/10 ; pas d'étriers si τu ≤ 1,17 MPa.`,
 sujet:{titre:"Dalle pleine portant dans deux directions", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le séjour d'une villa est couvert par un panneau de **dalle pleine de 15 cm**, de dimensions entre nus **lx = 4,00 m** et **ly = 5,00 m**, continu sur ses quatre côtés.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Poids propre 25 × 0,15 = 3,75 kN/m², revêtements 1,25 kN/m² → **G = 5,0 kN/m²** ; **Q = 1,5 kN/m²** ;
- Coefficients (ν = 0, ELU) pour α = lx / ly = 0,80 : **μx = 0,0561 ; μy = 0,5959** ; Mx = μx pu lx² ; My = μy Mx ;
- Panneau continu : moment en travée 0,75 M ; moment sur appui 0,5 M ;
- Hauteur utile : dx = 12 cm (lit inférieur), dy = 11,2 cm ;
- Section minimale (FeE500) : Ax ≥ 0,0006 × (3 − α)/2 × b h ; espacement ≤ min (3 h ; 33 cm) ;
- HA8 = 0,503 cm² ; HA10 = 0,785 cm².

### Partie A — Comportement (4 points)
1. Calculer α. La dalle porte-t-elle dans un ou deux sens ? Justifier. (2 pts)
2. Vérifier l'épaisseur (h ≥ lx / 40 pour un panneau continu). (2 pts)

### Partie B — Moments (6 points)
3. Calculer pu. (1 pt)
4. Calculer Mx et My, puis les moments en travée et sur appui. (5 pts)

### Partie C — Aciers (10 points)
5. Calculer la section d'aciers en travée dans le sens lx (bande de 1 m). (4 pts)
6. Calculer la section minimale et choisir les barres et leur espacement. (3 pts)
7. Faire de même dans le sens ly. (3 pts)`,
  corrige:`### Partie A — Comportement (4 pts)
1. α = 4,00 / 5,00 = **0,80 > 0,4** → la dalle porte dans **les deux sens** (les deux portées sont voisines : la charge se partage). *(2 pts)*
2. lx / 40 = 400 / 40 = 10 cm ≤ 15 cm ✔. *(2 pts)*

### Partie B — Moments (6 pts)
3. pu = 1,35 × 5,0 + 1,5 × 1,5 = 6,75 + 2,25 = **9,0 kN/m²**. *(1 pt)*
4. **Mx = 0,0561 × 9,0 × 4,00² = 8,08 kN·m/m** ; **My = 0,5959 × 8,08 = 4,81 kN·m/m**. Travée : 0,75 Mx = **6,06** et 0,75 My = **3,61 kN·m/m** ; appuis : 0,5 Mx = **4,04 kN·m/m**. *(5 pts)*

### Partie C — Aciers (10 pts)
5. μ = 6,06 × 10⁶ / (1 000 × 120² × 14,17) = **0,0297** ; α = 0,038 ; z = 11,8 cm ;
$$ Ax = 6,06 × 10⁶ / (118 × 434,8) = 118 mm²/m = 1,18 cm²/m *(4 pts)*
6. A min = 0,0006 × (3 − 0,8)/2 × 1 000 × 150 = **99 mm²/m** ; espacement max = min (45 ; 33) = 33 cm → **HA8 tous les 25 cm** (2,01 cm²/m) ✔ (on évite les espacements trop grands pour la fissuration et la manutention). *(3 pts)*
7. μ = 3,61 × 10⁶ / (1 000 × 112² × 14,17) = 0,0203 → Ay = **0,75 cm²/m** ; minimum dans ce sens : 0,0006 × 1 000 × 150 = 0,90 cm²/m → **HA8 tous les 25 cm** également (2,01 cm²/m ≥ 0,90). Sur appuis : chapeaux HA8 e = 25 sur environ lx/4 = 1,00 m. *(3 pts)*

> [!attention] Erreurs à éviter
> - Calculer la dalle comme une poutre de 4 m portant dans un seul sens.
> - Oublier les chapeaux sur appuis continus (fissures au-dessus des poutres).
> - Placer les aciers du sens ly sous ceux du sens lx (le sens le plus sollicité est en dessous).`},
 exercices:[
  {t:"Un sens ou deux sens ?", d:1, e:`Pour chacun des panneaux suivants, calculer α et dire comment il porte : 3,0 × 8,0 m ; 4,0 × 6,0 m ; 4,5 × 4,5 m.`, c:`- 3,0 × 8,0 : α = 0,375 < 0,4 → **un seul sens** (portée 3,0 m).
- 4,0 × 6,0 : α = 0,667 → **deux sens**.
- 4,5 × 4,5 : α = 1,0 → **deux sens**, moments identiques dans les deux directions (μy = 1).`},
  {t:"Dalle de balcon intérieur portant dans un sens", d:2, e:`Dalle continue de 3,20 m de portée (α < 0,4), travée intermédiaire, h = 13 cm (d = 10,5 cm). G = 4,8 kN/m², Q = 1,5 kN/m². fc28 = 25 MPa, FeE400.
Calculer les aciers en travée et sur appui intermédiaire.`, c:`pu = 1,35 × 4,8 + 1,5 × 1,5 = 6,48 + 2,25 = **8,73 kN/m²** ; M0 = 8,73 × 3,2² / 8 = **11,17 kN·m/m**.
Travée intermédiaire : Mt = 0,75 × 11,17 = 8,38 → μ = 0,00838 / (0,105² × 14,17) = 0,0536 ; z = 0,1021 m ; **As = 2,36 cm²/m** → HA8 e = 20 (2,51 cm²/m).
Appui : Ma = 0,5 × 11,17 = 5,59 → μ = 0,0358 ; z = 0,1031 m ; **As = 1,56 cm²/m** → chapeaux HA8 e = 25 (2,01 cm²/m).
Contrôle : 0,75 + (0,5 + 0,5)/2 = 1,25 M0 ✔.`},
  {t:"Panneau carré portant dans deux sens", d:2, e:`Panneau de rive de 4,5 × 4,5 m, h = 16 cm (dx = 13,5 cm, dy = 12,5 cm), pu = 10,0 kN/m². Calculer les moments en travée dans les deux sens et les aciers correspondants (FeE400, fc28 = 25 MPa). Vérifier les minimums.`, c:`α = 1 → **μx = 0,0368** et **μy = 1,0**.
Mox = 0,0368 × 10 × 4,5² = **7,45 kN·m/m** = Moy.
Panneau de rive : Mt = 0,85 × 7,45 = **6,33 kN·m/m** dans chaque sens.
Sens x (dx = 13,5 cm) : μ = 0,00633 / (0,135² × 14,17) = 0,0245 → **As ≈ 1,37 cm²/m**.
Sens y (dy = 12,5 cm) : μ = 0,0286 → **As ≈ 1,48 cm²/m**.
Minimums : Ay ≥ 0,0008 × 100 × 16 = 1,28 cm²/m ; Ax ≥ 1,28 × (3 − 1)/2 = 1,28 cm²/m ✔.
Choix : **HA8 e = 25 cm (2,01 cm²/m)** dans les deux sens, espacement ≤ min(3 × 16 ; 33) = 33 cm ✔.`},
  {t:"Renfort autour d'une trémie", d:3, e:`Une trémie d'escalier de 1,00 m de large interrompt les aciers principaux d'une dalle armée de HA10 e = 20 cm (3,93 cm²/m). Quels renforts prévoir de chaque côté de la trémie ?`, c:`Aciers interrompus sur 1,00 m : 3,93 × 1,00 = **3,93 cm²**. On les reporte, moitié de chaque côté de la trémie : 1,97 cm² par côté → **2 HA12 (2,26 cm²) de chaque bord**, parallèles aux aciers interrompus, prolongés de ls (≈ 50 cm) au-delà des angles.
On ajoute des barres de renfort perpendiculaires (2 HA10) le long des deux autres bords et, aux angles, des barres à 45° (1 ou 2 HA10) qui limitent les fissures partant des coins.`},
  {t:"Vérifier l'absence d'étriers", d:1, e:`Dalle de 18 cm (d = 15,5 cm), portée lx = 5,0 m dans un sens, pu = 12 kN/m². Faut-il des armatures d'effort tranchant ? (fc28 = 25 MPa)`, c:`Vu = pu lx / 2 = 12 × 5 / 2 = **30 kN/m** (bande de 1 m).
τu = 0,030 / (1,0 × 0,155) = **0,19 MPa ≤ 1,17 MPa** → **pas d'armatures d'effort tranchant**.`}
 ],
 quiz:[
  {q:"Une dalle de 3 × 9 m porte :", o:["Dans deux sens","Dans un seul sens (le petit)","Dans le grand sens","Sans moment"], r:1, e:"α = 0,33 < 0,4."},
  {q:"Pour une dalle portant dans deux sens, Mox vaut :", o:["p lx² / 8","μx p lx²","μy p ly²","p ly² / 8"], r:1, e:"Puis Moy = μy Mox."},
  {q:"Dans une travée intermédiaire de dalle continue, on prend en travée :", o:["M0","0,85 M0","0,75 M0","0,5 M0"], r:2, e:"0,85 en rive, 0,75 en intermédiaire."},
  {q:"Le diamètre maximal des aciers d'une dalle de 15 cm vaut :", o:["10 mm","15 mm","20 mm","25 mm"], r:1, e:"φ ≤ h / 10 = 15 mm."},
  {q:"L'espacement maximal des aciers principaux (FPN) d'une dalle de 12 cm vaut :", o:["12 cm","24 cm","33 cm","36 cm"], r:2, e:"min(3h ; 33 cm) = min(36 ; 33) = 33 cm."}
 ]},

{id:"ba-7", niv:2, titre:"Fondations superficielles : semelles isolées et filantes", duree:75, contenu:`## Le rôle des semelles
Les **semelles** répartissent la charge des poteaux et des murs sur une surface de sol suffisante pour que la **contrainte** reste admissible et que les **tassements** restent faibles. On distingue :
- la **semelle isolée** sous poteau (carrée ou rectangulaire) ;
- la **semelle filante** (continue) sous mur ou sous une file de poteaux rapprochés ;
- le **radier** (dalle générale) quand le sol est très mauvais ou les charges très fortes.

!fig:fondations-types|Semelle isolée, semelle filante, radier

## Dimensions en plan
À l'ELS (ou à l'ELU avec la contrainte de calcul du sol, selon l'étude géotechnique) :
$$ A × B ≥ Nser / σ̄sol
- semelle **carrée** sous poteau carré : A = B ≥ √(Nser / σ̄sol) ;
- semelle **rectangulaire** sous poteau a × b : on garde des **débords homothétiques** : A / B = a / b ;
- semelle **filante** : B ≥ Nser / σ̄sol, avec Nser en kN par mètre de mur.
On ajoute le poids propre de la semelle et des terres (on l'estime, puis on vérifie).

## La hauteur : condition de rigidité
On utilise la **méthode des bielles** : l'effort du poteau descend dans le sol par des bielles de béton comprimées inclinées, dont la poussée horizontale est reprise par les aciers inférieurs. Pour que la méthode s'applique, la semelle doit être assez **rigide** :
$$ (A − a) / 4 ≤ d ≤ A − a
On prend en général d = (A − a)/4 arrondi au-dessus, avec un minimum de 15 à 20 cm, et h = d + 5 cm.

## Les aciers (méthode des bielles)
$$ Ax (parallèles à A) = Nu × (A − a) / (8 × d × σs)      Ay (parallèles à B) = Nu × (B − b) / (8 × d × σs)
Pour une semelle filante, par mètre de longueur : **As = Nu × (B − b) / (8 d σs)**, avec des **aciers de répartition** longitudinaux (au moins 3 HA10 ou As / 4).
Dispositions :
- aciers en **partie basse**, sur un **béton de propreté** (5 à 10 cm), enrobage 4 à 5 cm ;
- si ls > A/4, les barres se terminent par des **crochets** ; si A/8 < ls ≤ A/4, ancrage droit sur toute la longueur ;
- espacement des barres entre 10 et 25 cm, diamètre ≥ 10 mm ;
- **attentes** du poteau ancrées dans la semelle avec un retour (pieds de poteau en « L »).

!fig:semelle|Semelle isolée sous poteau : bielles et nappe d'aciers inférieurs

> [!exemple] Semelle isolée sous un poteau 20 × 20
> Nser = 291,8 kN et Nu = 400,7 kN (poids de la semelle estimé compris), σ̄sol = 0,20 MPa (200 kPa), fc28 = 25 MPa, FeE400.
> A = B ≥ √(291,8 / 200) = 1,21 m → **A = B = 1,25 m**.
> d ≥ (1,25 − 0,20) / 4 = 0,26 m → **d = 30 cm, h = 35 cm**.
> Ax = Ay = 0,4007 × (1,25 − 0,20) / (8 × 0,30 × 347,8) = 5,04 × 10⁻⁴ m² = **5,04 cm²** → **7 HA10 (5,50 cm²) dans chaque sens**, espacement (125 − 10) / 6 ≈ 19 cm.
> Vérification avec le poids réel : semelle 1,25 × 1,25 × 0,35 × 25 = 13,7 kN ; terres (1,5625 − 0,04) × 0,65 × 18 = 17,8 kN → Nser = 262,4 + 1,0 + 13,7 + 17,8 = 294,9 kN → σ = 294,9 / 1,5625 = **189 kPa ≤ 200** ✔.
> ls = 40 × 1,0 = 40 cm > A/4 = 31 cm → barres terminées par des **crochets**.

> [!exemple] Semelle filante sous mur
> Mur en agglos de 20 cm, Nser = 80 kN/m, Nu = 110 kN/m, σ̄sol = 0,15 MPa.
> B ≥ 80 / 150 = 0,53 m → **B = 0,60 m** ; d ≥ (0,60 − 0,20) / 4 = 0,10 m → on prend **h = 25 cm** (d = 20 cm).
> As = 0,110 × 0,40 / (8 × 0,20 × 347,8) = **0,79 cm²/m** → valeur faible : on met le minimum pratique **HA10 e = 20 cm** transversalement et **3 HA10 filants** de répartition.

## Le béton de propreté et le gros béton
- **Béton de propreté** (dosé à 150–200 kg/m³, 5 à 10 cm) : il protège le fond de fouille et sert de support propre aux armatures.
- **Gros béton** (béton non armé) : il permet de descendre jusqu'au bon sol quand celui-ci est plus profond que prévu, sans augmenter la semelle armée.

## Les vérifications complémentaires
- **Poinçonnement** de la semelle par le poteau (semelles minces) ;
- **tassements** et **tassements différentiels** entre semelles voisines (voir la géotechnique) ;
- **charges excentrées** (moments en pied de poteau) : voir le chapitre sur les semelles excentrées ;
- **longrines** pour relier les semelles et reprendre les murs du rez-de-chaussée.

> [!retenir]
> - A × B ≥ Nser / σ̄sol ; débords homothétiques.
> - (A − a)/4 ≤ d ≤ A − a ; h = d + 5 cm.
> - As = Nu (A − a) / (8 d σs) dans chaque direction.
> - Béton de propreté, enrobage 4–5 cm, crochets si ls > A/4.`,
 sujet:{titre:"Semelle isolée sous poteau : coffrage et ferraillage", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un poteau 30 × 30 cm transmet ses charges à une semelle isolée carrée sur un sol dont la contrainte admissible est connue par l'étude géotechnique.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- **Nu = 900 kN**, **Nser = 650 kN** ; contrainte admissible du sol **σsol = 0,25 MPa** ;
- Hauteur utile par la méthode des bielles : d ≥ (B − b) / 4 ; hauteur totale h = d + 5 cm ;
- Aciers (méthode des bielles, chaque sens) : A = Nu (B − b) / (8 d fsu) ;
- Poids volumique du béton 25 kN/m³ ; HA12 = 1,13 cm² ; HA14 = 1,54 cm².

### Partie A — Coffrage (9 points)
1. Calculer l'aire minimale et le côté B (multiple de 5 cm). (3 pts)
2. Calculer d et h. (2 pts)
3. Vérifier la contrainte sur le sol en tenant compte du poids de la semelle. (4 pts)

### Partie B — Ferraillage (7 points)
4. Expliquer le fonctionnement par bielles et tirant. (2 pts)
5. Calculer la section d'aciers dans chaque sens et choisir les barres. (5 pts)

### Partie C — Exécution (4 points)
6. Citer quatre précautions d'exécution (béton de propreté, enrobage, attentes du poteau…). (4 pts)`,
  corrige:`### Partie A — Coffrage (9 pts)
1. A ≥ 650 / 250 = **2,60 m²** → B ≥ √2,60 = 1,61 m → **B = 1,70 m** (on prévoit le poids propre). *(3 pts)*
2. d ≥ (1,70 − 0,30) / 4 = **0,35 m** → **h = 0,40 m**. *(2 pts)*
3. Poids : 1,70² × 0,40 × 25 = **28,9 kN** ; σ = (650 + 28,9) / 1,70² = 678,9 / 2,89 = **234,9 kPa ≤ 250** ✔. *(4 pts)*

### Partie B — Ferraillage (7 pts)
4. La charge descend du poteau par des **bielles de béton comprimé** inclinées vers les bords ; leurs poussées horizontales sont reprises en partie basse par la **nappe d'aciers**, qui joue le rôle de tirant. *(2 pts)*
5. $$ A = 900 000 × (1 700 − 300) / (8 × 350 × 434,8) = 1 035 mm² = 10,35 cm²
   par sens → **7 HA14 (10,78 cm²)** ou 10 HA12 (11,31 cm²) dans chaque direction, espacement ≈ 25 cm (7 HA14) avec crochets aux extrémités. *(5 pts)*

### Partie C — Exécution (4 pts)
6. Béton de propreté (5 à 10 cm) au fond de fouille propre et sec ; cales d'enrobage (5 cm en fondation) ; aciers en croix bien ligaturés, les plus longs en dessous si la semelle n'est pas carrée ; **attentes du poteau** ancrées sur la nappe inférieure et maintenues verticales ; vibration ; réception du fond de fouille par le géotechnicien. *(4 pts)*

> [!attention] Erreurs à éviter
> - Dimensionner la surface avec Nu au lieu de Nser.
> - Oublier le poids de la semelle (et des terres au-dessus) dans la vérification du sol.
> - Prendre d trop faible : les bielles deviennent trop inclinées et les aciers explosent.`},
 exercices:[
  {t:"Dimensions d'une semelle carrée", d:1, e:`Un poteau de 25 × 25 cm transmet Nser = 450 kN (poids de la semelle compris). σ̄sol = 0,25 MPa. Déterminer A, B, d et h.`, c:`A = B ≥ √(450 / 250) = √1,8 = 1,34 m → **A = B = 1,40 m**.
d ≥ (1,40 − 0,25) / 4 = 0,29 m → **d = 30 cm**, **h = 35 cm**.
Contrôle de rigidité : d ≤ A − a = 1,15 m ✔.`},
  {t:"Aciers d'une semelle isolée", d:2, e:`Pour la semelle de l'exercice précédent, Nu = 620 kN, FeE400. Calculer les aciers et choisir les barres. Faut-il des crochets ?`, c:`Ax = Ay = 0,620 × (1,40 − 0,25) / (8 × 0,30 × 347,8) = 0,713 / 834,7 = **8,54 cm²** dans chaque sens.
Choix : **8 HA12 (9,05 cm²)** dans chaque sens, espacement ≈ (140 − 10) / 7 ≈ 18,5 cm.
ls = 40 × 1,2 = 48 cm > A/4 = 35 cm → **crochets** aux extrémités.`},
  {t:"Semelle rectangulaire sous poteau rectangulaire", d:2, e:`Poteau 20 × 40 cm, Nser = 380 kN, Nu = 520 kN, σ̄sol = 0,20 MPa, FeE400. Dimensionner la semelle avec des débords homothétiques.`, c:`A / B = a / b = 20 / 40 = 0,5 et A × B ≥ 380 / 200 = 1,90 m².
A × 2A = 1,90 → A = 0,975 m → **A = 1,00 m ; B = 2,00 m** (2,0 m²).
d ≥ max((1,00 − 0,20)/4 ; (2,00 − 0,40)/4) = max(0,20 ; 0,40) = **0,40 m** → h = 45 cm.
Ax (sens A) = 0,520 × 0,80 / (8 × 0,40 × 347,8) = **3,74 cm²** → 6 HA10 (4,71 cm²) répartis sur B = 2,00 m (e ≈ 38 cm, trop large → **9 HA10**, e ≈ 24 cm).
Ay (sens B) = 0,520 × 1,60 / (8 × 0,40 × 347,8) = **7,48 cm²** → **7 HA12 (7,92 cm²)** répartis sur A = 1,00 m (e ≈ 15 cm).`},
  {t:"Semelle filante sous mur porteur", d:2, e:`Un mur porteur de 20 cm transmet Nser = 120 kN/m et Nu = 165 kN/m. σ̄sol = 0,18 MPa, FeE400. Dimensionner la semelle filante.`, c:`B ≥ 120 / 180 = 0,67 m → **B = 0,70 m**.
d ≥ (0,70 − 0,20) / 4 = 0,125 m → **d = 15 cm, h = 20 cm** (minimum pratique).
As = 0,165 × 0,50 / (8 × 0,15 × 347,8) = **1,98 cm²/m** → **HA10 e = 20 cm (3,93 cm²/m)**.
Répartition : **4 HA10 filants** (≥ As / 4 et ≥ 3 HA10).`},
  {t:"Itération sur le poids propre", d:3, e:`Un poteau 25 × 25 transmet, au niveau du sol, Nser = 520 kN (sans la semelle). La semelle sera à 1,20 m sous le terrain naturel (terres 18 kN/m³). σ̄sol = 0,22 MPa.
1. Faire un premier dimensionnement en ajoutant 10 % pour la semelle et les terres.
2. Recalculer le poids réel et vérifier la contrainte.`, c:`1. Nser estimé = 1,10 × 520 = 572 kN → A ≥ √(572 / 220) = 1,61 m → **A = B = 1,65 m** ; d ≥ (1,65 − 0,25)/4 = 0,35 m → h = 40 cm.
2. Semelle : 1,65² × 0,40 × 25 = **27,2 kN** ; terres au-dessus : (2,72 − 0,06) × 0,80 × 18 = **38,3 kN** ; amorce de poteau : 0,25² × 0,80 × 25 = 1,3 kN.
Nser = 520 + 27,2 + 38,3 + 1,3 = **586,8 kN** → σ = 586,8 / 2,7225 = **215,5 kPa ≤ 220** ✔ (juste). Si la contrainte avait dépassé, on aurait pris A = 1,70 m et recommencé.`}
 ],
 quiz:[
  {q:"La surface d'une semelle se détermine par :", o:["Nu / fbu","Nser / σ̄sol","Nu / σs","h × A"], r:1, e:"La contrainte sur le sol ne doit pas dépasser l'admissible."},
  {q:"La condition de rigidité de la méthode des bielles est :", o:["d ≥ A","(A − a)/4 ≤ d ≤ A − a","d ≤ (A − a)/8","d = A/2"], r:1, e:"La semelle doit être assez épaisse pour que les bielles se forment."},
  {q:"Les aciers d'une semelle isolée valent :", o:["Nu (A − a) / (8 d σs)","Nu / σs","Nser A / d","Nu d / (8 A)"], r:0, e:"Formule de la méthode des bielles."},
  {q:"Les aciers d'une semelle sont placés :", o:["En haut","En bas, sur béton de propreté","Au milieu","Dans le poteau"], r:1, e:"Ils reprennent la poussée des bielles en partie basse."},
  {q:"Quand ls > A/4, les barres d'une semelle :", o:["Sont coupées","Se terminent par des crochets","Sont doublées","Sont inutiles"], r:1, e:"L'ancrage droit est insuffisant."}
 ]},

{id:"ba-16", niv:2, titre:"Poutres continues : méthode forfaitaire, méthode de Caquot et arrêt des barres", duree:75, contenu:`## Pourquoi des méthodes particulières ?
Les poutres des bâtiments sont presque toujours **continues** sur plusieurs appuis. La RDM élastique (trois moments, Cross) donnerait les moments, mais le béton armé **fissuré** redistribue une partie des moments des appuis vers les travées. Le BAEL propose deux méthodes simples, adaptées à ce comportement :
- la **méthode forfaitaire** (planchers à charges d'exploitation modérées) ;
- la **méthode de Caquot** (dans les autres cas).
On note **M0** le moment de la travée supposée **isostatique** (qL²/8 sous charge uniforme), et **α = Q / (G + Q)**.

## La méthode forfaitaire
### Conditions d'application
1. Charges d'exploitation **modérées** : Q ≤ max (2G ; 5 kN/m²) ;
2. moments d'inertie des sections **identiques** dans toutes les travées ;
3. portées successives dans un rapport compris entre **0,8 et 1,25** ;
4. fissuration **peu préjudiciable**.
### Les moments sur appuis (valeurs absolues)
| Nombre de travées | Appuis intermédiaires |
|---|---|
| 2 travées | **0,6 M0** sur l'appui central |
| 3 travées et plus | **0,5 M0** sur les appuis voisins des appuis de rive ; **0,4 M0** sur les autres appuis intermédiaires |
(M0 : le plus grand des moments isostatiques des deux travées encadrant l'appui.) Sur les **appuis de rive**, on prévoit des chapeaux pour au moins **0,15 M0**.
### Les moments en travée
Le moment en travée Mt doit vérifier :
$$ Mt + (Mw + Me) / 2 ≥ max [ (1 + 0,3 α) M0 ; 1,05 M0 ]
$$ Mt ≥ (1 + 0,3 α) / 2 × M0 (travée intermédiaire)      Mt ≥ (1,2 + 0,3 α) / 2 × M0 (travée de rive)
(Mw et Me : moments sur les appuis gauche et droit de la travée, en valeur absolue.)

> [!exemple] Poutre continue à trois travées
> Portées 4,0 – 4,5 – 4,0 m ; G = 20 kN/m, Q = 8 kN/m (conditions vérifiées : Q < 2G, 4,0/4,5 = 0,89).
> α = 8 / 28 = 0,286 ; 1 + 0,3α = 1,086 ; pu = 1,35 × 20 + 1,5 × 8 = **39 kN/m**.
> M0 : travées de rive = 39 × 4² / 8 = **78,0 kN·m** ; travée centrale = 39 × 4,5² / 8 = **98,7 kN·m**.
> Appuis B et C (voisins des rives, 3 travées) : 0,5 × max(78,0 ; 98,7) = **49,4 kN·m**.
> Travée de rive : Mt ≥ 1,086 × 78,0 − (0 + 49,4)/2 = 84,7 − 24,7 = 60,0 et ≥ (1,2 + 0,086)/2 × 78,0 = 50,1 → **Mt = 60,0 kN·m**.
> Travée centrale : Mt ≥ 1,086 × 98,7 − 49,4 = 57,8 et ≥ 0,543 × 98,7 = 53,6 → **Mt = 57,8 kN·m**.

### L'effort tranchant
On prend l'effort tranchant isostatique (qL/2), **majoré de 15 %** sur le premier appui intermédiaire d'une poutre à deux travées, et de **10 %** sur les appuis voisins des rives d'une poutre à plus de deux travées.

## La méthode de Caquot
Quand la méthode forfaitaire ne s'applique pas (fortes charges, portées très différentes), on utilise la méthode de Caquot, qui ne considère que les **travées voisines** de chaque appui, avec des **portées fictives** :
- l' = l pour une travée de **rive** ; l' = **0,8 l** pour une travée **intermédiaire** ;
- pour des charges uniformes qw (travée de gauche) et qe (travée de droite) :
$$ Mappui = − (qw × l'w³ + qe × l'e³) / (8,5 × (l'w + l'e))
On étudie ensuite chaque travée isostatique soumise à ses charges et aux moments d'appui calculés, en chargeant les travées une sur deux pour les moments maximaux en travée.

> [!exemple] Caquot sur l'appui B de la poutre précédente
> l'w = 4,0 m (rive) ; l'e = 0,8 × 4,5 = 3,6 m ; q = 39 kN/m partout.
> MB = − 39 × (4,0³ + 3,6³) / (8,5 × 7,6) = − 39 × 110,66 / 64,6 = **− 66,8 kN·m** (contre 49,4 en forfaitaire : Caquot redistribue moins).

## L'arrêt des barres
Les aciers ne sont pas nécessaires partout : on peut en arrêter une partie là où le moment diminue. Règles forfaitaires courantes (charges uniformes, méthode forfaitaire) :
- **aciers inférieurs** : la moitié au moins des barres est prolongée jusqu'aux appuis et ancrée ; les autres peuvent s'arrêter à **0,1 L** du nu des appuis ;
- **chapeaux** : longueur depuis le nu de l'appui d'au moins **L/5** de la plus grande travée voisine (appui intermédiaire courant), **L/4** pour un appui voisin d'un appui de rive ; la moitié des chapeaux peut s'arrêter à la moitié de cette longueur ;
- toutes les longueurs sont au moins égales à la longueur d'ancrage ls depuis la section où la barre n'est plus nécessaire.
Pour un calcul précis, on trace la **courbe enveloppe des moments**, on la décale de 0,8 h (effet de l'effort tranchant) et on arrête chaque barre au-delà du point où elle n'est plus utile, augmenté de sa longueur d'ancrage.

!fig:poutre-elevation|Aciers inférieurs filants, chapeaux sur appuis et cadres resserrés aux appuis

> [!retenir]
> - Forfaitaire : appuis 0,6 M0 (2 travées), 0,5 / 0,4 M0 (3 travées et plus) ; Mt + (Mw + Me)/2 ≥ max((1 + 0,3α) M0 ; 1,05 M0).
> - Conditions : Q ≤ max(2G ; 5 kN/m²), portées dans un rapport 0,8–1,25, inertie constante, FPN.
> - Caquot : Ma = −(qw l'w³ + qe l'e³) / (8,5 (l'w + l'e)), l' = 0,8 l pour les travées intermédiaires.
> - Chapeaux sur au moins L/5 (L/4 près des rives) ; la moitié des aciers inférieurs filent jusqu'aux appuis.`,
 sujet:{titre:"Poutre continue à trois travées : méthode forfaitaire et chapeaux", duree:75, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une poutre continue de plancher comporte **trois travées égales de 4,50 m**. On utilise la méthode forfaitaire du BAEL.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- G = **15 kN/m**, Q = **5 kN/m** sur toutes les travées ; α = Q / (G + Q) ;
- M0 = pu L² / 8 (moment de la travée supposée isostatique) ;
- Moments sur appuis : 0,5 M0 pour un appui voisin d'un appui de rive d'une poutre à trois travées ; 0 sur les appuis de rive (on prévoit des aciers forfaitaires de 0,15 M0) ;
- Moments en travée Mt : Mt + (Mw + Me)/2 ≥ max [ (1 + 0,3 α) M0 ; 1,05 M0 ], avec Mt ≥ (1,2 + 0,3 α) M0 / 2 en travée de rive et Mt ≥ (1 + 0,3 α) M0 / 2 en travée intermédiaire ;
- Longueur des chapeaux : 1/5 de la plus grande portée adjacente (appui voisin d'un appui de rive).

### Partie A — Conditions d'application (4 points)
1. Citer les quatre conditions d'application de la méthode forfaitaire et vérifier celle sur les charges (Q ≤ max [2 G ; 5 kN/m²]). (4 pts)

### Partie B — Moments (12 points)
2. Calculer pu, M0 et α. (3 pts)
3. Calculer les moments sur les appuis intermédiaires. (2 pts)
4. Calculer le moment en travée de rive. (4 pts)
5. Calculer le moment en travée intermédiaire. (3 pts)

### Partie C — Arrêt des barres (4 points)
6. Calculer la longueur des chapeaux sur les appuis intermédiaires et indiquer où arrêter une partie des aciers inférieurs. (4 pts)`,
  corrige:`### Partie A — Conditions (4 pts)
1. Plancher à charge d'exploitation modérée (Q ≤ max [2G ; 5 kN/m²]) ; moments d'inertie identiques dans les travées ; portées successives dans un rapport compris entre 0,8 et 1,25 ; fissuration peu préjudiciable. Ici Q = 5 ≤ 2 × 15 = 30 ✔ ; portées égales ✔. *(4 pts)*

### Partie B — Moments (12 pts)
2. pu = 1,35 × 15 + 1,5 × 5 = **27,75 kN/m** ; M0 = 27,75 × 4,5² / 8 = **70,24 kN·m** ; α = 5 / 20 = **0,25**. *(3 pts)*
3. Appuis B et C : **0,5 M0 = 35,1 kN·m** (moments négatifs). *(2 pts)*
4. Travée de rive (Mw = 0, Me = 0,5 M0) : (1 + 0,075) M0 − 0,25 M0 = **0,825 M0** ; 1,05 M0 − 0,25 M0 = 0,80 M0 ; minimum 0,6375 M0 → **Mt = 0,825 × 70,24 = 57,9 kN·m**. *(4 pts)*
5. Travée intermédiaire (Mw = Me = 0,5 M0) : 1,075 M0 − 0,5 M0 = **0,575 M0** ; minimum 0,5375 M0 → **Mt = 40,4 kN·m**. *(3 pts)*

### Partie C — Arrêt des barres (4 pts)
6. Chapeaux sur B et C : 4,50 / 5 = **0,90 m** de part et d'autre de l'appui (mesuré depuis le nu), et au moins la longueur d'ancrage. Aciers inférieurs : la moitié peut être arrêtée à environ L/10 du nu des appuis, l'autre moitié est prolongée jusqu'aux appuis et ancrée. *(4 pts)*

> [!attention] Erreurs à éviter
> - Appliquer la méthode forfaitaire hors de son domaine (charges fortes, portées très différentes).
> - Oublier les aciers de chapeau forfaitaires sur les appuis de rive (0,15 M0).
> - Confondre la travée de rive et la travée intermédiaire.`},
 exercices:[
  {t:"Conditions de la méthode forfaitaire", d:1, e:`Vérifier si la méthode forfaitaire s'applique :
1. plancher de logement, G = 6 kN/m², Q = 1,5 kN/m², portées 3,8 – 4,2 – 4,0 m, même section ;
2. plancher d'entrepôt, G = 6 kN/m², Q = 15 kN/m² ;
3. portées 3,0 – 5,0 m.`, c:`1. Q = 1,5 ≤ max(12 ; 5) ✔ ; rapports 3,8/4,2 = 0,90 et 4,2/4,0 = 1,05 ✔ ; inertie constante ✔ → **forfaitaire applicable** (si FPN).
2. Q = 15 > max(12 ; 5) = 12 ✘ → **Caquot**.
3. 3,0 / 5,0 = 0,6 < 0,8 ✘ → **Caquot**.`},
  {t:"Poutre continue à deux travées", d:2, e:`Poutre continue à deux travées égales de 5 m. G = 18 kN/m, Q = 6 kN/m. Méthode forfaitaire.
1. Calculer pu, α et M0.
2. Calculer le moment sur l'appui central et en travée.
3. Calculer l'effort tranchant maximal sur l'appui central.`, c:`1. pu = 1,35 × 18 + 1,5 × 6 = **33,3 kN/m** ; α = 6 / 24 = **0,25** ; M0 = 33,3 × 25 / 8 = **104,1 kN·m**.
2. Appui central (2 travées) : **Ma = 0,6 × 104,1 = 62,5 kN·m**.
Travées de rive : Mt ≥ (1 + 0,075) × 104,1 − (0 + 62,5)/2 = 111,9 − 31,2 = 80,7 et ≥ (1,2 + 0,075)/2 × 104,1 = 66,4 → **Mt = 80,7 kN·m**.
3. V isostatique = 33,3 × 5 / 2 = 83,3 kN, majoré de 15 % sur l'appui central : **Vu = 95,7 kN**.`},
  {t:"Moments par Caquot", d:3, e:`Poutre continue à deux travées de 3,0 m et 6,0 m (méthode forfaitaire non applicable). Charge uniforme pu = 30 kN/m sur les deux travées. Calculer le moment sur l'appui central par Caquot, puis la réaction de rive de la grande travée et son moment maximal.`, c:`Deux travées de rive : l'w = 3,0 m ; l'e = 6,0 m.
**MB = − 30 × (3³ + 6³) / (8,5 × 9) = − 30 × 243 / 76,5 = − 95,3 kN·m.**
Grande travée (6 m) : RC = 30 × 6 / 2 − 95,3 / 6 = 90 − 15,9 = **74,1 kN** ; V = 0 à x = 74,1 / 30 = 2,47 m de C → **Mt = 74,1 × 2,47 − 15 × 2,47² = 91,5 kN·m**.
La petite travée est fortement soulagée : RA = 45 − 95,3/3 = 13,2 kN seulement.`},
  {t:"Longueur des chapeaux", d:2, e:`Poutre continue à 3 travées de 4,0 – 4,5 – 4,0 m. Donner la longueur minimale des chapeaux (depuis le nu de l'appui, de chaque côté) sur l'appui B, voisin de l'appui de rive. Les chapeaux sont des HA14 (ls = 56 cm).`, c:`Appui voisin d'un appui de rive : longueur ≥ **L/4** de la plus grande travée voisine = 4,5 / 4 = **1,125 m** de chaque côté du nu de l'appui (≥ ls = 0,56 m ✔).
On prend des chapeaux d'environ 2 × 1,15 m + largeur du poteau (0,25 m) ≈ **2,55 m**, la moitié des barres pouvant être arrêtée à 0,60 m du nu.`}
 ],
 quiz:[
  {q:"Dans la méthode forfaitaire, le moment sur l'appui central d'une poutre à deux travées vaut :", o:["0,4 M0","0,5 M0","0,6 M0","M0"], r:2, e:"0,6 M0 ; 0,5 et 0,4 M0 pour plus de travées."},
  {q:"La méthode forfaitaire exige que les portées successives aient un rapport compris entre :", o:["0,5 et 2","0,8 et 1,25","0,9 et 1,1","1 et 1,5"], r:1, e:"Condition de régularité."},
  {q:"Dans la méthode de Caquot, la portée fictive d'une travée intermédiaire vaut :", o:["l","0,8 l","0,5 l","1,25 l"], r:1, e:"l' = l en rive, 0,8 l en travée intermédiaire."},
  {q:"α dans la méthode forfaitaire vaut :", o:["G / Q","Q / (G + Q)","G / (G + Q)","Q / G"], r:1, e:"Rapport des charges d'exploitation au total."},
  {q:"Les chapeaux sur un appui intermédiaire courant s'étendent au moins sur :", o:["L/10","L/5","L/2","1 m"], r:1, e:"L/5 de la plus grande travée voisine (L/4 près des rives)."}
 ]},

{id:"ba-17", niv:3, titre:"Planchers à corps creux : poutrelles et dalle de compression", duree:60, contenu:`## Le plancher le plus répandu
Le **plancher à corps creux** (ou plancher à hourdis, « plancher 16+4 ») est la solution la plus courante pour les maisons et petits immeubles en Côte d'Ivoire. Il comprend :
- des **poutrelles** en béton armé (préfabriquées ou coulées sur place) espacées de **60 cm** environ entre axes ;
- des **corps creux** (hourdis en béton ou en terre cuite) posés entre les poutrelles, qui servent de coffrage perdu et allègent le plancher ;
- une **dalle de compression** de 4 à 5 cm coulée sur le tout, armée d'un **treillis soudé**.
La désignation « 16+4 » signifie : hourdis de 16 cm + dalle de compression de 4 cm (hauteur totale 20 cm).

!fig:hourdis|Coupe d'un plancher à corps creux : poutrelles, hourdis et dalle de compression

## Choisir la hauteur du plancher
Pour éviter une flèche excessive, la hauteur totale doit respecter :
$$ ht ≥ L / 22,5      (L : portée des poutrelles entre nus d'appuis)
| Hauteur | Désignation | Portée maximale courante |
|---|---|---|
| 16 cm | 12+4 | ≈ 3,6 m |
| 20 cm | 16+4 | ≈ 4,5 m |
| 24 cm | 20+4 | ≈ 5,4 m |
| 30 cm | 25+5 | ≈ 6,7 m |

## Le calcul d'une poutrelle
Chaque poutrelle reprend une bande de plancher égale à son **entraxe** (0,60 m) :
$$ q (kN/m) = p (kN/m²) × 0,60
Elle se calcule comme une **poutre en T** : table de 60 cm de large et 4 cm d'épaisseur, nervure de 12 cm environ. Les poutrelles continues se calculent par la **méthode forfaitaire**.

> [!exemple] Poutrelle d'un plancher 16+4 de 4,0 m
> G = 5,15 kN/m² (plancher, revêtements, enduit, cloisons) ; Q = 1,5 kN/m².
> pu = 1,35 × 5,15 + 1,5 × 1,5 = **9,20 kN/m²** → par poutrelle : q = 9,20 × 0,60 = **5,52 kN/m**.
> Poutrelle isostatique : M0 = 5,52 × 4,0² / 8 = **11,04 kN·m** ; Vu = 5,52 × 4,0 / 2 = **11,04 kN**.
> Section en T : b = 60 cm, h0 = 4 cm, b0 = 12 cm, h = 20 cm, d = 18 cm.
> Mtu = 0,60 × 0,04 × 14,17 × (0,18 − 0,02) = 0,0544 MN·m = 54,4 kN·m ≥ 11,04 → calcul rectangulaire avec b = 0,60 m.
> μ = 0,01104 / (0,60 × 0,18² × 14,17) = **0,040** ; z = 0,176 m ; **As = 1,80 cm²** → **1 HA12 + 1 HA10 (1,92 cm²)** ou 2 HA12.
> Effort tranchant : τu = 0,01104 / (0,12 × 0,18) = **0,51 MPa** → étriers HA6 espacés de 15 à 20 cm (ou épingles des poutrelles préfabriquées).

## La dalle de compression
Elle répartit les charges entre poutrelles et assure le **monolithisme** du plancher (diaphragme). Elle est armée d'un treillis soudé dont la section, pour un entraxe des poutrelles l compris entre 50 et 80 cm, vaut au moins :
$$ A⊥ (perpendiculaire aux poutrelles) ≥ 4 × l / fe   (cm²/m, l en cm)      A// ≥ A⊥ / 2
Pour l = 60 cm et un treillis fe = 500 MPa : A⊥ ≥ 4 × 60 / 500 = **0,48 cm²/m** → un treillis à mailles de 20 × 20 cm en fils de 5 ou 6 mm convient largement.

## Les dispositions pratiques
- Les poutrelles doivent **porter dans le sens de la plus petite portée** et reposer d'au moins 5 cm sur les poutres ou chaînages ;
- **étaiement** des poutrelles pendant le coulage (tous les 1,0 à 1,5 m selon le fabricant), avec une **contreflèche** légère ;
- **chapeaux** sur les appuis intermédiaires (aciers en haut dans la dalle de compression, au-dessus des poutrelles) : souvent oubliés, ils évitent les fissures au-dessus des poutres ;
- **nervures de chaînage** perpendiculaires aux poutrelles pour les grandes portées (> 5 m) ;
- **renforts** sous les cloisons lourdes parallèles aux poutrelles (poutrelle doublée) et autour des trémies ;
- **poutrelles de rive** et **chaînages** périphériques continus.

> [!attention]
> Les hourdis ne sont pas porteurs : on ne marche pas dessus avant le coulage sans planches de répartition, et on ne perce jamais une poutrelle pour passer une gaine.

> [!retenir]
> - 16+4 = hourdis 16 + dalle de compression 4 ; ht ≥ L / 22,5.
> - Poutrelle : q = p × 0,60 ; section en T (b = 60, h0 = 4, b0 = 12).
> - Dalle de compression : A⊥ ≥ 4 l / fe, A// ≥ A⊥/2.
> - Étaiement, chapeaux sur appuis, nervures de chaînage, renforts sous cloisons.`,
 sujet:{titre:"Plancher à corps creux 16+4 : poutrelle et dalle de compression", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le plancher de l'étage d'une villa est un plancher à **corps creux 16+4** (hourdis de 16 cm, dalle de compression de 4 cm), avec des poutrelles en béton armé coulées sur place tous les **60 cm**.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Portée des poutrelles (entre nus) **4,20 m**, appuis simples ;
- Plancher : **G = 5,0 kN/m²** (plancher + revêtements + cloisons), **Q = 1,5 kN/m²** ;
- Section en T de la poutrelle : b = **60 cm**, h0 = **4 cm**, b0 = **12 cm**, h = **20 cm**, d = **18 cm** ;
- Dalle de compression : treillis soudé avec A⊥ ≥ 4 l / fe (l : entraxe des poutrelles en cm, A en cm²/m) et A// ≥ A⊥ / 2 ;
- Condition de flèche : h / L ≥ 1 / 22,5 ; HA10 = 0,785 cm², HA12 = 1,131 cm².

### Partie A — Charges (4 points)
1. Calculer la charge ultime par poutrelle (bande de 60 cm). (2 pts)
2. Calculer Mu et Vu. (2 pts)

### Partie B — Aciers de la poutrelle (9 points)
3. Calculer le moment équilibré par la table et conclure sur la position de l'axe neutre. (3 pts)
4. Calculer les aciers inférieurs et choisir les barres. (4 pts)
5. Vérifier la contrainte tangente (limite 3,33 MPa). (2 pts)

### Partie C — Dalle de compression et flèche (7 points)
6. Calculer les sections du treillis soudé et choisir un panneau (TS 5 mm maille 20 × 20 = 0,98 cm²/m). (4 pts)
7. Vérifier la condition de flèche. (1 pt)
8. Pourquoi le treillis soudé est-il indispensable dans la dalle de compression ? (2 pts)`,
  corrige:`### Partie A — Charges (4 pts)
1. pu = (1,35 × 5,0 + 1,5 × 1,5) × 0,60 = 9,0 × 0,60 = **5,40 kN/m**. *(2 pts)*
2. **Mu = 5,40 × 4,20² / 8 = 11,91 kN·m** ; **Vu = 5,40 × 4,20 / 2 = 11,34 kN**. *(2 pts)*

### Partie B — Poutrelle (9 pts)
3. Mt = 600 × 40 × 14,17 × (180 − 20) = **54,4 kN·m > Mu** → axe neutre dans la table : calcul en section rectangulaire **60 × 18**. *(3 pts)*
4. μ = 11,91 × 10⁶ / (600 × 180² × 14,17) = **0,043** ; α = 0,055 ; z = 17,6 cm ;
$$ A = 11,91 × 10⁶ / (176 × 434,8) = 156 mm² = 1,56 cm²
   → **2 HA10 (1,57 cm²)** ou 1 HA12 + 1 HA10 (1,92 cm²). *(4 pts)*
5. τu = 11 340 / (120 × 180) = **0,53 MPa ≤ 3,33** ✔ (épingles HA6 de liaison). *(2 pts)*

### Partie C — Dalle de compression (7 pts)
6. A⊥ ≥ 4 × 60 / 500 = **0,48 cm²/m** (espacement ≤ 20 cm) ; A// ≥ **0,24 cm²/m** (espacement ≤ 33 cm) → **TS 5 mm maille 20 × 20** (0,98 cm²/m dans chaque sens) ✔. *(4 pts)*
7. 20 / 420 = **0,0476 ≥ 1 / 22,5 = 0,0444** ✔ : pas de calcul de flèche nécessaire. *(1 pt)*
8. Il répartit les charges localisées entre poutrelles, limite la fissuration de retrait de la dalle mince et lie le plancher aux chaînages (diaphragme). *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer la poutrelle comme une section rectangulaire 12 × 20 en oubliant la table.
> - Oublier que la charge d'une poutrelle est celle d'une bande égale à l'entraxe.
> - Poser les hourdis dans le mauvais sens ou sans étaiement des poutrelles pendant le coulage.`},
 exercices:[
  {t:"Choisir le plancher", d:1, e:`Les poutrelles d'un plancher franchissent 5,0 m entre nus d'appuis. Quelle hauteur de plancher choisir ? Et pour 3,8 m ?`, c:`5,0 m : ht ≥ 500 / 22,5 = **22,2 cm** → plancher **20+4** (24 cm).
3,8 m : ht ≥ 380 / 22,5 = **16,9 cm** → plancher **16+4** (20 cm).`},
  {t:"Calcul d'une poutrelle continue", d:2, e:`Poutrelles continues à deux travées de 4,2 m (plancher 16+4), G = 5,2 kN/m², Q = 1,5 kN/m², entraxe 0,60 m. Méthode forfaitaire (α = 0,224).
1. Calculer la charge par poutrelle et M0.
2. Calculer le moment sur l'appui central et en travée.
3. Calculer les aciers en travée (b = 60 cm, d = 18 cm) et les chapeaux (section rectangulaire b0 = 12 cm, d = 18 cm).`, c:`1. pu = 1,35 × 5,2 + 2,25 = 9,27 kN/m² → **q = 5,56 kN/m** ; **M0 = 5,56 × 4,2² / 8 = 12,26 kN·m**.
2. Appui : **Ma = 0,6 × 12,26 = 7,36 kN·m**. Travée de rive : Mt ≥ (1 + 0,067) × 12,26 − 7,36/2 = 13,08 − 3,68 = 9,40 et ≥ (1,2 + 0,067)/2 × 12,26 = 7,77 → **Mt = 9,40 kN·m**.
3. Travée : μ = 0,00940 / (0,60 × 0,0324 × 14,17) = 0,034 ; z ≈ 0,177 m → **As = 1,53 cm²** → 2 HA10 (1,57 cm²).
Appui (b0 = 12 cm) : μ = 0,00736 / (0,12 × 0,0324 × 14,17) = 0,134 ; α = 0,180 ; z = 0,167 m → **As = 1,27 cm²** → chapeau **1 HA14 (1,54 cm²)** dans la dalle de compression au-dessus de chaque poutrelle.`},
  {t:"Treillis de la dalle de compression", d:1, e:`Entraxe des poutrelles : 65 cm ; treillis soudé fe = 500 MPa. Calculer les sections minimales du treillis.`, c:`**A⊥ ≥ 4 × 65 / 500 = 0,52 cm²/m** ; **A// ≥ 0,26 cm²/m**.
Un treillis en fils de 5 mm à mailles de 20 × 20 cm donne 0,98 cm²/m dans chaque sens ✔.`},
  {t:"Cloison lourde sur un plancher", d:3, e:`Un mur en agglos de 15 cm (2,0 kN/m²) de 2,80 m de haut est posé sur un plancher 16+4, parallèlement aux poutrelles (portée 4,0 m). Pourquoi faut-il un renfort et lequel ?`, c:`Le mur apporte une charge linéique de 2,0 × 2,80 = **5,6 kN/m** (G), soit 7,56 kN/m à l'ELU, concentrée sur une seule poutrelle (ou entre deux poutrelles, sur les hourdis non porteurs). Une poutrelle courante ne reprend que 5,5 kN/m environ pour tout le plancher : elle serait **plus que doublement surchargée**.
Renfort : **doubler la poutrelle** sous le mur (deux poutrelles jumelées) ou créer une **nervure coulée en place** (par exemple 20 × 20 cm armée de 2 HA12 en bas, 2 HA10 en haut et étriers HA6), calculée pour la bande de plancher + le mur.`}
 ],
 quiz:[
  {q:"La désignation « 16+4 » signifie :", o:["16 poutrelles et 4 hourdis","Hourdis de 16 cm + dalle de compression de 4 cm","16 cm d'entraxe","4 m de portée"], r:1, e:"Hauteur totale 20 cm."},
  {q:"La hauteur minimale d'un plancher à corps creux vaut :", o:["L / 10","L / 22,5","L / 35","L / 50"], r:1, e:"Critère de flèche courant."},
  {q:"L'entraxe courant des poutrelles est :", o:["30 cm","60 cm","1 m","2 m"], r:1, e:"Hourdis de 50 cm + talon de poutrelle."},
  {q:"La dalle de compression est armée :", o:["De rien","D'un treillis soudé","De HA25","De cadres"], r:1, e:"A⊥ ≥ 4 l / fe."},
  {q:"Une cloison lourde parallèle aux poutrelles exige :", o:["Rien","Une poutrelle doublée ou une nervure renforcée","Un hourdis plus épais","Moins d'étais"], r:1, e:"Sa charge se concentre sur une seule poutrelle."}
 ]},

{id:"ba-18", niv:3, titre:"Semelles excentrées, longrines et radiers", duree:65, contenu:`## Semelle soumise à un moment
Un poteau de portique, un poteau qui reçoit une poutre d'un seul côté ou un mur de soutènement transmettent à leur semelle un effort **N** et un **moment M**. La pression sur le sol n'est plus uniforme : avec e = M / N et une semelle de largeur A dans le sens du moment,
$$ σmax,min = N / (A × B) × (1 ± 6 e / A)      si e ≤ A / 6
On vérifie en général la contrainte « au quart » :
$$ σ3/4 = (3 σmax + σmin) / 4 ≤ σ̄sol      et   σmax ≤ 1,33 σ̄sol
Pour les aciers, si e ≤ A / 6, on applique la méthode des bielles avec un effort fictif **N (1 + 3e / A)** dans le sens du moment.

> [!exemple] Semelle sous charge excentrée
> Semelle de 1,50 × 1,50 m ; Nser = 300 kN ; Mser = 45 kN·m → e = 0,15 m ≤ A/6 = 0,25 m.
> σmax = 300 / 2,25 × (1 + 6 × 0,15 / 1,50) = 133,3 × 1,6 = **213,3 kPa** ; σmin = 133,3 × 0,4 = **53,3 kPa**.
> σ3/4 = (3 × 213,3 + 53,3) / 4 = **173,3 kPa** ≤ 200 kPa ✔ ; σmax = 213,3 ≤ 1,33 × 200 = 266 ✔.
> Aciers dans le sens du moment : effort fictif Nu (1 + 3 × 0,15 / 1,50) = 1,3 Nu.

## Le poteau en limite de propriété : semelle excentrée et longrine de redressement
Quand un poteau est contre la limite du terrain, sa semelle ne peut pas déborder : elle est **excentrée** par rapport au poteau. La charge N, décalée de e par rapport au centre de la semelle, crée un moment N × e qui ferait basculer la semelle. Solution classique : relier cette semelle à la semelle du poteau intérieur voisin par une **longrine de redressement** (poutre de redressement) très rigide, qui reprend ce moment.
Équilibre de l'ensemble (L : distance entre le poteau de rive et le poteau intérieur ; e : excentricité de la charge du poteau de rive) :
$$ Rrive = N1 × L / (L − e)      Rintérieur = N2 − N1 × e / (L − e)
La semelle de rive reçoit **plus** que la charge de son poteau ; la semelle intérieure est **soulagée** (on ne compte en général pas ce soulagement par sécurité). La longrine est soumise à un moment maximal d'environ N1 × e au droit du poteau de rive : elle est **fortement armée en partie haute**.

> [!exemple] Poteau de rive en limite
> N1 = 300 kN au poteau de rive, excentricité de la charge e = 0,50 m, poteau intérieur à L = 5,0 m.
> Rrive = 300 × 5,0 / 4,5 = **333,3 kN** (+ 11 %) ; la semelle intérieure est soulagée de **33,3 kN**.
> Moment dans la longrine ≈ 300 × 0,50 = **150 kN·m** (Nser) : une longrine d'au moins 30 × 60 cm avec des aciers supérieurs importants.

## Les longrines courantes
Les **longrines** sont des poutres enterrées qui relient les semelles. Elles servent à :
- **porter les murs** du rez-de-chaussée (au lieu de semelles filantes) ;
- **solidariser** les fondations (tassements différentiels, séisme) : chaque longrine doit pouvoir reprendre une traction ou une compression égale à une fraction de la charge des poteaux qu'elle relie (≈ 10 % en zone sismique) ;
- **redresser** les semelles excentrées.
Dispositions courantes : section minimale 20 × 30 ou 25 × 40 cm, au moins 4 HA12 (2 en haut, 2 en bas), cadres HA6 ou HA8 tous les 15 à 20 cm, béton de propreté dessous, aciers ancrés dans les semelles ou les amorces de poteaux.

!fig:longrine|Longrine entre deux semelles, portant le mur du rez-de-chaussée

## Le radier général
Quand le sol est **médiocre** (σ̄sol faible, sol compressible) ou quand les semelles occuperaient plus de **la moitié** de la surface du bâtiment, on préfère un **radier** : une dalle générale sous tout le bâtiment, souvent nervurée sous les files de poteaux. Il fonctionne comme un **plancher renversé** : le sol pousse vers le haut avec une pression σ = ΣN / Sradier, et les poteaux sont les appuis.
Avantages : répartition des charges, tassements plus uniformes, protection contre l'eau (cuvelage). Inconvénients : volume de béton et d'acier important, terrassement général.

> [!exemple] Faut-il un radier ?
> Bâtiment de 12 × 10 m (120 m²), 12 poteaux de Nser = 450 kN en moyenne, σ̄sol = 0,10 MPa.
> Surface de semelles nécessaire : 12 × 450 / 100 = 54 m², sans compter les murs : **45 %** de l'emprise → limite. Avec les semelles filantes des murs, on dépasserait 50 % : un **radier** devient intéressant. Pression moyenne sous radier : 5 400 / 120 = **45 kPa** (+ poids du radier).

> [!retenir]
> - Semelle sous N et M : σ = N/(AB) (1 ± 6e/A) ; vérifier σ3/4 et σmax.
> - Poteau en limite : semelle excentrée + longrine de redressement ; Rrive = N L / (L − e).
> - Longrines : porter les murs, solidariser, redresser ; au moins 4 HA12.
> - Radier si sol médiocre ou semelles > 50 % de l'emprise.`,
 sujet:{titre:"Semelle excentrée en limite de propriété et choix d'un radier", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un immeuble est construit en limite de propriété : le poteau de rive ne peut pas avoir une semelle centrée. On le relie par une **longrine de redressement** à la semelle du poteau intérieur. On étudie aussi un autre bâtiment sur sol très médiocre.

**Données**
- Poteau de rive P1 (30 × 30 cm, axe à 0,15 m de la limite) : **Nser,1 = 400 kN** ; poteau intérieur P2 à **5,00 m** (entre axes) : **Nser,2 = 600 kN** ;
- Semelle de P1 : largeur **1,40 m** perpendiculairement à la limite (elle va de la limite vers l'intérieur) ;
- Contrainte admissible du sol : **0,20 MPa** ;
- Second bâtiment : emprise **12 × 10 m**, charge totale de service **5 400 kN**, sol de **60 kPa** admissibles.

### Partie A — Excentrement (5 points)
1. Calculer l'excentricité e entre l'axe du poteau P1 et le centre de sa semelle. (2 pts)
2. Expliquer pourquoi une semelle excentrée sans longrine basculerait. (3 pts)

### Partie B — Longrine de redressement (9 points)
3. En écrivant l'équilibre de la longrine (moments autour de l'axe de P2), calculer la réaction R1 sous la semelle de rive. (4 pts)
4. En déduire la réaction R2 sous la semelle intérieure. (2 pts)
5. Dimensionner la semelle de rive (longueur parallèle à la limite). (2 pts)
6. Évaluer le moment maximal dans la longrine (≈ Nser,1 × e). (1 pt)

### Partie C — Radier (6 points)
7. Calculer la surface totale de semelles isolées nécessaire pour le second bâtiment et la comparer à l'emprise. (3 pts)
8. Calculer la contrainte moyenne sous un radier général et conclure. (3 pts)`,
  corrige:`### Partie A — Excentrement (5 pts)
1. Centre de la semelle à 1,40 / 2 = 0,70 m de la limite ; axe du poteau à 0,15 m → **e = 0,55 m**. *(2 pts)*
2. La charge du poteau ne passe pas par le centre de la semelle : la réaction du sol (au centre) et la charge forment un **couple** qui fait tourner la semelle ; le sol est surchargé côté limite et le poteau s'incline. *(3 pts)*

### Partie B — Longrine (9 pts)
3. La longrine relie P1 et P2 ; R1 agit au centre de la semelle de rive, à 5,00 − 0,55 = 4,45 m de P2 :
$$ Σ M/P2 : R1 × 4,45 = N1 × 5,00 → R1 = 400 × 5,00 / 4,45 = 449,4 kN *(4 pts)*
4. Σ F : R1 + R2 = N1 + N2 → **R2 = 1 000 − 449,4 = 550,6 kN** (la semelle intérieure est soulagée de 49,4 kN). *(2 pts)*
5. A1 = 449,4 / 200 = 2,25 m² → longueur = 2,25 / 1,40 = 1,61 m → **1,40 × 1,65 m**. *(2 pts)*
6. M ≈ 400 × 0,55 = **220 kN·m** (service) : la longrine est une vraie poutre (par exemple 30 × 70 cm), avec aciers principaux en partie haute. *(1 pt)*

### Partie C — Radier (6 pts)
7. Surface de semelles : 5 400 / 60 = **90 m²**, soit **75 %** de l'emprise (120 m²) : les semelles se toucheraient presque. *(3 pts)*
8. σ = 5 400 / 120 = **45 kPa ≤ 60 kPa** ✔ : un **radier général** est la solution adaptée (règle pratique : radier dès que les semelles dépassent la moitié de l'emprise), et il réduit les tassements différentiels. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier que la longrine modifie aussi la charge de la semelle intérieure.
> - Placer les aciers principaux de la longrine en bas (le moment est négatif côté rive).
> - Choisir des semelles isolées géantes là où un radier est plus simple et plus sûr.`},
 exercices:[
  {t:"Semelle sous moment", d:2, e:`Semelle de 1,60 × 1,60 m sous un poteau de portique : Nser = 380 kN, Mser = 50 kN·m. σ̄sol = 0,20 MPa. Vérifier la semelle.`, c:`e = 50 / 380 = **0,132 m** ≤ A/6 = 0,267 m ✔.
σmoy = 380 / 2,56 = 148,4 kPa ; **σmax = 148,4 × (1 + 6 × 0,132 / 1,60) = 221,7 kPa** ; **σmin = 75,2 kPa**.
σ3/4 = (3 × 221,7 + 75,2) / 4 = **185,1 kPa ≤ 200** ✔ ; σmax ≤ 266 ✔.`},
  {t:"Semelle de rive et longrine", d:3, e:`Un poteau de rive porte N1 = 240 kN (ELS). Sa semelle, contre la limite de propriété, a une largeur de 1,20 m : le poteau (25 cm) est au bord, donc l'excentricité vaut e = 0,60 − 0,125 = 0,475 m. Le poteau intérieur est à 4,5 m.
1. Calculer la réaction sous la semelle de rive.
2. Calculer le soulagement de la semelle intérieure.
3. Estimer le moment dans la longrine.`, c:`1. **Rrive = 240 × 4,5 / (4,5 − 0,475) = 240 × 1,118 = 268,3 kN**.
2. Soulagement : 240 × 0,475 / 4,025 = **28,3 kN** (on ne le déduit pas, par sécurité).
3. **M ≈ 240 × 0,475 = 114 kN·m** (ELS) au droit du poteau de rive, soit environ 155 kN·m à l'ELU : la longrine est calculée en flexion avec ses aciers principaux **en haut**.`},
  {t:"Ferraillage minimal d'une longrine", d:1, e:`Une longrine de 25 × 40 cm porte un mur de RDC (charge ELU 28 kN/m) entre deux semelles distantes de 4,0 m. Calculer le moment et vérifier qu'un ferraillage de 3 HA12 en bas et 2 HA12 en haut suffit (d = 36 cm, FeE400, fc28 = 25 MPa).`, c:`Mu ≈ 28 × 4,0² / 8 = **56 kN·m** (calcul isostatique, prudent).
μ = 0,056 / (0,25 × 0,36² × 14,17) = 0,122 ; α = 0,163 ; z = 0,337 m → **As = 4,78 cm²**.
3 HA12 = 3,39 cm² ✘ → **3 HA14 (4,62 cm², juste) ou 2 HA14 + 1 HA16 (5,09 cm²)** en partie basse ; 2 HA12 en partie haute pour le montage et les moments sur appuis.`},
  {t:"Choisir entre semelles et radier", d:2, e:`Un immeuble R+3 de 15 × 12 m a 16 poteaux portant en moyenne Nser = 900 kN. L'étude de sol donne σ̄sol = 0,12 MPa.
1. Calculer la surface totale de semelles isolées.
2. Faut-il envisager un radier ?
3. Calculer la pression moyenne sous un radier débordant de 0,5 m autour du bâtiment (sans son poids propre).`, c:`1. Surface : 16 × 900 / 120 = **120 m²** (sans les murs).
2. Emprise : 15 × 12 = 180 m² → 120 / 180 = **67 % > 50 %** : les semelles se toucheraient presque → **radier**.
3. Radier de 16 × 13 = 208 m² : σ = 16 × 900 / 208 = **69 kPa** (+ environ 10 kPa de poids propre pour un radier de 40 cm), bien inférieur à 120 kPa : le radier répartit les charges et limite les tassements différentiels.`}
 ],
 quiz:[
  {q:"Sous une semelle chargée avec un moment, si e ≤ A/6 :", o:["Le sol est en traction","La pression est trapézoïdale","La pression est uniforme","La semelle se soulève"], r:1, e:"σ = N/(AB)(1 ± 6e/A)."},
  {q:"La contrainte de vérification « au quart » vaut :", o:["(σmax + σmin)/2","(3σmax + σmin)/4","σmax","σmin"], r:1, e:"Valeur au quart de la largeur depuis le bord le plus chargé."},
  {q:"Une longrine de redressement sert à :", o:["Décorer","Reprendre le moment d'une semelle excentrée","Remplacer les poteaux","Évacuer l'eau"], r:1, e:"Elle relie la semelle de rive à une semelle intérieure."},
  {q:"Avec une semelle excentrée, la réaction sous la semelle de rive est :", o:["Égale à N","Supérieure à N","Inférieure à N","Nulle"], r:1, e:"R = N L / (L − e) > N."},
  {q:"On envisage un radier quand les semelles occupent plus de :", o:["10 %","25 %","50 %","90 %"], r:2, e:"La moitié de l'emprise du bâtiment."}
 ]},

{id:"ba-19", niv:3, titre:"Escaliers, paliers et balcons", duree:65, contenu:`## La géométrie d'un escalier
Un escalier confortable respecte la **relation de Blondel** :
$$ 2h + g = 60 à 64 cm      (h : hauteur de marche, g : giron)
Valeurs courantes : **h = 16 à 18 cm**, **g = 25 à 30 cm**. Le nombre de marches vaut n = H / h (H : hauteur d'étage), arrondi ; l'inclinaison α de la **paillasse** (dalle inclinée qui porte les marches) vaut tan α = h / g.

!fig:escalier|Escalier droit : paillasse, marches, palier

## Le calcul de la paillasse
La paillasse est une **dalle inclinée** qui porte dans le sens de la montée, entre deux appuis (poutres palières, paliers ou murs). On la calcule comme une dalle portant dans un sens, de **portée horizontale** L (projection) :
- poids de la paillasse ramené au m² **horizontal** : 25 × e / cos α (e : épaisseur de la paillasse) ;
- poids des marches (béton) : 25 × h / 2 en moyenne ;
- revêtements (carrelage sur marches et contremarches), enduit sous la paillasse ;
- charge d'exploitation : **2,5 kN/m²** (logements), 4 kN/m² (lieux publics).
Épaisseur courante : e ≈ L / 30 à L / 25, au moins 12 à 15 cm. Moments : comme une dalle continue partiellement encastrée : **Mt = 0,85 M0** et **Ma = 0,5 M0** (ou 0,3 M0 selon la raideur des appuis).

> [!exemple] Escalier de maison
> h = 17 cm, g = 28 cm → tan α = 0,607, **α = 31,3°**, cos α = 0,855. Portée horizontale L = 3,60 m, paillasse e = 15 cm (d = 12 cm).
> G : paillasse 25 × 0,15 / 0,855 = 4,39 ; marches 25 × 0,17 / 2 = 2,13 ; revêtements 1,20 ; enduit 0,3 / 0,855 = 0,35 → **G = 8,06 kN/m²** ; Q = 2,5 kN/m².
> pu = 1,35 × 8,06 + 1,5 × 2,5 = **14,64 kN/m²** ; M0 = 14,64 × 3,6² / 8 = **23,71 kN·m/m**.
> Travée : Mt = 0,85 × 23,71 = 20,15 → μ = 0,099 ; z = 0,114 m → **As = 5,09 cm²/m** → **HA12 e = 20 cm** (5,65 cm²/m).
> Appuis : Ma = 0,5 × 23,71 = 11,86 → **As = 2,93 cm²/m** → **HA10 e = 25 cm** (3,14 cm²/m) en chapeaux.
> Répartition : HA8 e = 25 cm.

## Les détails de ferraillage
- Les aciers inférieurs **suivent la paillasse** et se prolongent dans les paliers ; au changement de direction rentrant (en bas de volée, côté intérieur de l'angle), les barres ne doivent **pas** être pliées en suivant l'angle (elles chasseraient le béton) : on les **croise** et on les ancre de part et d'autre ;
- chapeaux en partie haute aux jonctions avec les paliers et les poutres palières ;
- la **poutre palière** reçoit la paillasse d'un côté : elle est soumise à de la **torsion** (voir le chapitre de RDM) en plus de la flexion.

## Les balcons en console
Un balcon (ou un auvent) en **console** est encastré dans la dalle ou la poutre de rive. Le moment est **négatif** : aciers principaux **en haut**.
$$ Mu = pu × l² / 2 + Pu × l      (Pu : garde-corps ou charge en bout)
- épaisseur : h ≥ l / 10 (au moins 12 à 15 cm) ;
- les aciers supérieurs se prolongent dans la dalle intérieure sur une longueur au moins égale à la portée du balcon (et à ls), ou sont équilibrés par la travée voisine ;
- Q = **3,5 kN/m²** pour les balcons ;
- chaises solides pour maintenir les aciers en haut pendant le coulage ; contreflèche légère.

> [!exemple] Balcon de 1,50 m
> h = 15 cm (d = 12 cm), G = 0,15 × 25 + 1,2 = 4,95 kN/m², Q = 3,5 kN/m², garde-corps 1,0 kN/m en bout (permanent).
> pu = 1,35 × 4,95 + 1,5 × 3,5 = **11,93 kN/m²** ; Pu = 1,35 kN/m.
> Mu = 11,93 × 1,5² / 2 + 1,35 × 1,5 = 13,42 + 2,03 = **15,45 kN·m/m**.
> μ = 0,0757 ; z = 0,115 m → **As = 3,85 cm²/m** → **HA10 e = 20 cm** (3,93 cm²/m) en partie supérieure, prolongés d'au moins 1,50 m dans la dalle intérieure.

> [!retenir]
> - Blondel : 2h + g = 60 à 64 cm.
> - Paillasse : charges ramenées à l'horizontale (25 e / cos α), portée horizontale, Mt = 0,85 M0, Ma = 0,5 M0.
> - Ne pas plier les aciers inférieurs dans un angle rentrant : les croiser.
> - Balcon : moment négatif, aciers en haut, prolongés dans la dalle intérieure ; Q = 3,5 kN/m².`,
 sujet:{titre:"Escalier droit et balcon en console", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Dans une villa R+1, on étudie l'escalier droit menant à l'étage et le balcon en console de la chambre parentale.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Escalier : hauteur à monter **2,80 m** en **16 marches**, giron **28 cm**, paillasse d'épaisseur **e = 17 cm**, portée horizontale de la paillasse **4,20 m** (appuis simples), revêtement **1,0 kN/m²**, **Q = 2,5 kN/m²** ; hauteur utile d = 14 cm ;
- Balcon : console de **1,50 m**, dalle de 15 cm + revêtements : **G = 5,0 kN/m²**, **Q = 3,5 kN/m²**, garde-corps **1,0 kN/m** en bout ; hauteur utile d = 12 cm ;
- HA10 = 0,785 cm² ; HA12 = 1,131 cm².

### Partie A — Géométrie de l'escalier (4 points)
1. Calculer la hauteur de marche, vérifier la loi de Blondel (60 ≤ 2h + g ≤ 64 cm) et calculer l'inclinaison. (4 pts)

### Partie B — Paillasse (8 points)
2. Calculer la charge permanente projetée par m² (paillasse inclinée 25 e / cos α, marches 25 h / 2, revêtement). (3 pts)
3. Calculer pu et Mu pour une bande de 1 m. (2 pts)
4. Calculer les aciers et choisir les barres. (3 pts)

### Partie C — Balcon (8 points)
5. Calculer le moment d'encastrement ultime par mètre de balcon. (3 pts)
6. Calculer les aciers et préciser leur position. (3 pts)
7. Comment les ancrer et pourquoi est-ce vital ? (2 pts)`,
  corrige:`### Partie A — Géométrie (4 pts)
1. h = 280 / 16 = **17,5 cm** ; 2 × 17,5 + 28 = **63 cm** ✔ (confortable) ; α = arctan (17,5 / 28) = **32,0°**. *(4 pts)*

### Partie B — Paillasse (8 pts)
2. Paillasse : 25 × 0,17 / cos 32° = 5,01 ; marches : 25 × 0,175 / 2 = 2,19 ; revêtement 1,0 → **G = 8,2 kN/m²**. *(3 pts)*
3. pu = 1,35 × 8,2 + 1,5 × 2,5 = **14,82 kN/m** ; **Mu = 14,82 × 4,20² / 8 = 32,7 kN·m/m**. *(2 pts)*
4. μ = 32,7 × 10⁶ / (1 000 × 140² × 14,17) = **0,118** ; α = 0,157 ; z = 13,1 cm ;
$$ A = 32,7 × 10⁶ / (131 × 434,8) = 573 mm²/m = 5,73 cm²/m
   → **HA12 tous les 15 cm (7,54 cm²/m)** en nappe inférieure, aciers de répartition HA8 e = 20. *(3 pts)*

### Partie C — Balcon (8 pts)
5. pu = 1,35 × 5 + 1,5 × 3,5 = 12,0 kN/m² ; $$ Mu = 12,0 × 1,5² / 2 + 1,35 × 1,0 × 1,5 = 13,50 + 2,03 = 15,5 kN·m/m *(3 pts)*
6. μ = 15,5 × 10⁶ / (1 000 × 120² × 14,17) = 0,076 → A = **3,10 cm²/m** → **HA10 tous les 20 cm (3,93 cm²/m)**, placés en **partie supérieure** (la console est tendue en haut). *(3 pts)*
7. Les aciers supérieurs doivent pénétrer dans la dalle intérieure sur au moins la longueur de la console ou une longueur d'ancrage suffisante (≥ 1,5 m), et être maintenus en haut par des chaises : s'ils sont descendus au coulage, le balcon s'effondre. *(2 pts)*

> [!attention] Erreurs à éviter
> - Mettre les aciers d'un balcon en bas (erreur grave, cause d'effondrements).
> - Oublier le poids des marches et l'inclinaison de la paillasse.
> - Ne pas respecter la loi de Blondel (escalier inconfortable et dangereux).`},
 exercices:[
  {t:"Dessiner un escalier", d:1, e:`Hauteur d'étage : 3,06 m. On choisit des marches de 17 cm. Calculer le nombre de marches, la hauteur réelle, le giron selon Blondel (2h + g = 63 cm) et l'inclinaison.`, c:`n = 306 / 17 = 18 marches → **h = 306 / 18 = 17,0 cm**.
Giron : g = 63 − 2 × 17 = **29 cm**. Inclinaison : tan α = 17 / 29 = 0,586 → **α = 30,4°**.
Longueur horizontale d'une volée droite de 18 marches : 17 girons × 0,29 = **4,93 m** (la dernière marche est le palier).`},
  {t:"Charges d'une paillasse", d:2, e:`Paillasse de 14 cm, marches de 16 cm de haut et 30 cm de giron, revêtement 1,0 kN/m², enduit 0,3 kN/m² (mesuré le long de la paillasse). Calculer G au m² horizontal.`, c:`tan α = 16/30 = 0,533 → α = 28,1°, cos α = 0,882.
Paillasse : 25 × 0,14 / 0,882 = **3,97 kN/m²** ; marches : 25 × 0,16 / 2 = **2,00 kN/m²** ; revêtement : **1,00** ; enduit : 0,3 / 0,882 = **0,34**.
**G = 7,31 kN/m²** (horizontal).`},
  {t:"Ferraillage d'un balcon", d:2, e:`Balcon de 1,20 m, épaisseur 14 cm (d = 11 cm), G = 4,7 kN/m², Q = 3,5 kN/m², garde-corps en maçonnerie de 2,0 kN/m en bout. FeE400, fc28 = 25 MPa. Calculer les aciers.`, c:`pu = 1,35 × 4,7 + 1,5 × 3,5 = 6,35 + 5,25 = **11,60 kN/m²** ; Pu = 1,35 × 2,0 = 2,70 kN/m.
**Mu = 11,60 × 1,2² / 2 + 2,70 × 1,2 = 8,35 + 3,24 = 11,59 kN·m/m.**
μ = 0,01159 / (0,11² × 14,17) = 0,0676 ; α = 0,0876 ; z = 0,106 m → **As = 3,14 cm²/m** → **HA10 e = 25 cm** (3,14) ou HA10 e = 20 (3,93) par sécurité, en partie haute, prolongés de 1,20 m au moins dans la dalle intérieure.`},
  {t:"Erreur de ferraillage dans un escalier", d:3, e:`Sur un chantier, les aciers inférieurs d'une volée d'escalier ont été pliés pour suivre l'angle rentrant entre la paillasse et le palier inférieur. Expliquer le risque et la bonne disposition.`, c:`À l'angle rentrant, une barre tendue pliée vers l'intérieur exerce une **poussée** vers la surface du béton (comme une corde tendue sur un angle) : elle tend à **arracher l'enrobage** et à éclater le béton à l'angle, précisément là où les efforts sont importants. Bonne disposition : **arrêter** les aciers de la paillasse et les **ancrer** dans le palier en les prolongeant tout droit (ils traversent jusqu'en partie haute du palier), et faire de même avec les aciers du palier qui traversent la paillasse : les barres se **croisent** à l'angle. On ajoute des cadres ou épingles de couture.`}
 ],
 quiz:[
  {q:"La relation de Blondel s'écrit :", o:["h + g = 45 cm","2h + g = 60 à 64 cm","h + 2g = 60 cm","g = 2h"], r:1, e:"Confort de marche d'un escalier."},
  {q:"La paillasse se calcule avec la portée :", o:["Inclinée","Horizontale (projection)","Verticale","Du palier seul"], r:1, e:"Les charges sont ramenées au m² horizontal."},
  {q:"Les aciers principaux d'un balcon en console sont :", o:["En bas","En haut","Au milieu","Inutiles"], r:1, e:"Moment négatif à l'encastrement."},
  {q:"La charge d'exploitation d'un balcon vaut :", o:["1,5 kN/m²","2,5 kN/m²","3,5 kN/m²","5 kN/m²"], r:2, e:"Rassemblements possibles."},
  {q:"La poutre palière est soumise en plus de la flexion à :", o:["De la traction pure","De la torsion","Aucun autre effort","Du flambement"], r:1, e:"La paillasse ne la charge que d'un côté."}
 ]},

{id:"ba-20", niv:3, titre:"Voiles et murs de soutènement en béton armé", duree:65, contenu:`## Les voiles
Un **voile** est un mur en béton armé coulé en place, porteur et souvent de **contreventement** : il reprend les charges verticales et surtout les efforts **horizontaux** (vent, séisme) grâce à sa grande rigidité dans son plan. On en trouve dans les cages d'escalier et d'ascenseur, les pignons et les sous-sols des immeubles.
Dispositions courantes (DTU 23.1 et règles parasismiques) :
- épaisseur minimale **15 cm** (16 à 20 cm pour les immeubles), en fonction de la hauteur d'étage ;
- armatures **verticales et horizontales** en deux nappes (une par face), reliées par des **épingles** ; section minimale de l'ordre de **0,10 à 0,20 %** de la section dans chaque direction ;
- **potelets** (renforts verticaux) aux extrémités et autour des ouvertures, **linteaux** au-dessus des baies ;
- chaînages horizontaux au niveau de chaque plancher.
La compression d'un voile se vérifie comme un poteau de grande largeur (avec son élancement) ; son rôle de contreventement se vérifie en flexion composée dans son plan.

## Les murs de soutènement
Un mur de soutènement retient des terres (talus, sous-sol, rampe de parking, terrain en pente). On distingue :
- le **mur poids** (maçonnerie ou béton non armé) qui résiste par son propre poids ;
- le **mur cantilever** en béton armé, en forme de **T renversé** : un **voile** (rideau) encastré dans une **semelle** ; les terres situées sur le talon de la semelle participent à sa stabilité.

!fig:paroi|Mur de soutènement : poussée des terres triangulaire sur le voile

## La poussée des terres
Pour un remblai horizontal sans cohésion, d'angle de frottement φ et de poids volumique γ, la poussée active de Rankine est triangulaire :
$$ Ka = tan² (45° − φ/2)      σh(z) = Ka × γ × z      P = ½ × Ka × γ × H²   appliquée à H/3 de la base
Une surcharge q sur le terre-plein ajoute une poussée **uniforme** Ka × q, soit une force Ka × q × H appliquée à H/2.
| φ | 25° | 30° | 35° |
|---|---|---|---|
| Ka | 0,406 | 0,333 | 0,271 |
L'**eau** derrière un mur est très dangereuse : elle ajoute sa propre poussée (10 kN/m³ × z) : d'où les **barbacanes** (trous d'évacuation) et le **drainage** (gravier + drain) derrière le voile.

## Le calcul du voile (rideau)
Le voile est une **console** verticale encastrée dans la semelle, chargée par la poussée. Pour 1 m de mur :
$$ M (à la base) = P × H / 3 = Ka × γ × H³ / 6
Les aciers principaux sont **verticaux**, placés **côté terres** (face tendue). La poussée étant une action permanente, on la majore de 1,35 à l'ELU. Le moment diminuant rapidement vers le haut (comme z³), on peut arrêter une partie des barres à mi-hauteur.

> [!exemple] Mur cantilever de 3,0 m
> Remblai : φ = 30° (Ka = 0,333), γ = 18 kN/m³, H = 3,0 m, pas de surcharge.
> P = ½ × 0,333 × 18 × 3,0² = **27,0 kN/m**, à 1,0 m de la base ; Mser = 27,0 × 1,0 = **27,0 kN·m/m** ; Mu = 1,35 × 27,0 = **36,5 kN·m/m**.
> Voile de 20 cm (d = 16 cm) : μ = 0,0365 / (0,16² × 14,17) = 0,101 ; z = 0,152 m → **As = 6,92 cm²/m** → **HA12 e = 15 cm** (7,54 cm²/m) verticaux côté terres, la moitié arrêtée à mi-hauteur ; aciers horizontaux de répartition HA8 e = 20 cm sur les deux faces.
> En fissuration préjudiciable (contact avec la terre humide), on vérifiera aussi l'ELS.

## La stabilité d'ensemble
Le mur complet (voile + semelle + terres sur le talon) doit être stable :
1. **au renversement** autour de l'arête avant de la semelle : Ms / Mr ≥ 1,5 ;
2. **au glissement** sur le sol : (N × tan φsol) / H ≥ 1,5 (on peut ajouter une **bêche** sous la semelle) ;
3. **à la portance** : contrainte sous la semelle (trapézoïdale) ≤ admissible, résultante dans le tiers central ;
4. au **grand glissement** (rupture du talus entier), pour les grandes hauteurs.
Pré-dimensionnement courant : largeur de la semelle B ≈ 0,5 à 0,7 H, talon ≈ 2/3 de B, épaisseurs ≈ H/12.

> [!retenir]
> - Voiles : ≥ 15 cm, deux nappes reliées par des épingles, potelets aux extrémités.
> - Poussée : Ka = tan²(45° − φ/2), P = ½ Ka γ H² à H/3 ; surcharge : Ka q H à H/2.
> - Voile de soutènement = console : M = Ka γ H³ / 6 ; aciers verticaux côté terres.
> - Stabilité : renversement, glissement, portance ; drainage et barbacanes indispensables.`,
 sujet:{titre:"Mur de soutènement en T renversé : poussée, ferraillage et stabilité", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Pour aménager une cour en contrebas, on construit un mur de soutènement en béton armé retenant **3,00 m** de remblai.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Remblai : γ = **18 kN/m³**, φ = **30°** (Ka = 1/3), surface horizontale, pas de surcharge ni de nappe ;
- Voile : épaisseur **20 cm**, hauteur 3,00 m au-dessus de la semelle (d = 16 cm) ;
- Semelle : épaisseur **0,30 m**, largeur totale **2,00 m** = patin avant **0,40 m** + voile **0,20 m** + talon **1,40 m** ;
- Poussée active : Pa = ½ Ka γ H², appliquée à H/3 de la base ;
- Frottement semelle-sol : tan δ avec δ = 2φ/3 ; coefficients de sécurité exigés : **1,5** au glissement et au renversement.

### Partie A — Voile (8 points)
1. Calculer la poussée sur le voile (H = 3,00 m) et son moment à l'encastrement en pied de voile. (3 pts)
2. Calculer les aciers à l'ELU (coefficient 1,35) et préciser leur face. (5 pts)

### Partie B — Stabilité (10 points)
3. Calculer la poussée totale sur la hauteur 3,30 m (voile + semelle). (2 pts)
4. Calculer les poids stabilisants (voile, semelle, terres sur le talon). (3 pts)
5. Vérifier la stabilité au renversement autour de l'arête avant du patin. (3 pts)
6. Vérifier la stabilité au glissement. Conclure et proposer une solution. (2 pts)

### Partie C — Drainage (2 points)
7. Pourquoi prévoir barbacanes et drain derrière le mur ? (2 pts)`,
  corrige:`### Partie A — Voile (8 pts)
1. Pa = ½ × (1/3) × 18 × 3,00² = **27,0 kN/m**, à 1,00 m du pied → **Mser = 27,0 kN·m/m**. *(3 pts)*
2. Mu = 1,35 × 27,0 = 36,5 kN·m/m ; μ = 36,5 × 10⁶ / (1 000 × 160² × 14,17) = 0,100 ; z = 15,2 cm ;
$$ A = 36,5 × 10⁶ / (152 × 434,8) = 553 mm²/m → HA12 e = 20 cm (5,65 cm²/m)
   sur la face **côté terres** (tendue), avec aciers de répartition et un treillis constructif côté air. *(5 pts)*

### Partie B — Stabilité (10 pts)
3. Pa = ½ × (1/3) × 18 × 3,30² = **32,7 kN/m**, à 1,10 m de la base. *(2 pts)*
4. Voile : 0,20 × 3,00 × 25 = 15,0 kN (bras 0,50 m) ; semelle : 2,00 × 0,30 × 25 = 15,0 kN (bras 1,00 m) ; terres : 1,40 × 3,00 × 18 = 75,6 kN (bras 1,30 m) → **W = 105,6 kN/m**. *(3 pts)*
5. Ms = 15 × 0,5 + 15 × 1,0 + 75,6 × 1,3 = **120,8 kN·m/m** ; Mr = 32,7 × 1,10 = **35,9 kN·m/m** → **FS = 3,36 ≥ 1,5** ✔. *(3 pts)*
6. $$ FS = W tan 20° / Pa = 105,6 × 0,364 / 32,7 = 1,18 < 1,5 ✘
   Le mur **glisse**. Solutions : **bêche** sous la semelle (butée des terres), talon plus long, ou semelle plus large. *(2 pts)*

### Partie C — Drainage (2 pts)
7. L'eau accumulée derrière le mur ajoute la **poussée hydrostatique** (beaucoup plus forte que celle des terres) : barbacanes, couche drainante et drain évitent cette mise en charge. *(2 pts)*

> [!attention] Erreurs à éviter
> - Placer les aciers du voile côté air.
> - Oublier les terres sur le talon, qui stabilisent le mur.
> - Ne vérifier que le renversement : le glissement est souvent déterminant.`},
 exercices:[
  {t:"Poussée sur un mur", d:1, e:`Un mur retient 2,50 m de terre (φ = 30°, γ = 18 kN/m³). Calculer Ka, la poussée totale et son point d'application.`, c:`Ka = tan²(30°) = **0,333**.
P = ½ × 0,333 × 18 × 2,5² = **18,75 kN/m**, appliquée à 2,5 / 3 = **0,83 m** au-dessus de la base.`},
  {t:"Effet d'une surcharge", d:2, e:`Même mur (H = 2,50 m), mais le terre-plein reçoit une surcharge de 10 kN/m² (circulation, stockage). Calculer la poussée totale et le moment à la base du voile.`, c:`Poussée des terres : 18,75 kN/m à 0,83 m → moment 15,6 kN·m/m.
Poussée de la surcharge : Ka q H = 0,333 × 10 × 2,5 = **8,33 kN/m** à 1,25 m → moment 10,4 kN·m/m.
**P = 27,1 kN/m ; Mser = 26,0 kN·m/m** à la base du voile. La surcharge augmente le moment de 67 % : elle ne doit jamais être oubliée.`},
  {t:"Ferraillage du voile", d:2, e:`Voile de soutènement de 3,5 m (φ = 30°, γ = 19 kN/m³), épaisseur 25 cm (d = 21 cm), FeE400, fc28 = 25 MPa. Calculer le moment à la base (ELU) et les aciers verticaux.`, c:`Mser = Ka γ H³ / 6 = 0,333 × 19 × 3,5³ / 6 = 0,333 × 19 × 42,875 / 6 = **45,2 kN·m/m** ; Mu = 1,35 × 45,2 = **61,0 kN·m/m**.
μ = 0,0610 / (0,21² × 14,17) = 0,0976 ; α = 0,128 ; z = 0,199 m → **As = 8,81 cm²/m** → **HA14 e = 15 cm** (10,26 cm²/m) côté terres.`},
  {t:"Stabilité au renversement", d:3, e:`Mur cantilever de 3,0 m de hauteur de terre : semelle de 2,0 m de large et 0,30 m d'épaisseur, voile de 0,20 m placé à 0,50 m de l'arête avant ; talon de 1,30 m côté terres. Terres : γ = 18 kN/m³, Ka = 0,333. Béton : 25 kN/m³. Hauteur du voile au-dessus de la semelle : 2,70 m. (On néglige la butée devant le mur.)
Calculer le coefficient de sécurité au renversement autour de l'arête avant.`, c:`Poussée sur la hauteur totale H = 3,0 m (à l'arrière du talon) : P = ½ × 0,333 × 18 × 9 = **27,0 kN/m** à 1,0 m → **Mr = 27,0 kN·m/m**.
Moments stabilisants autour de l'arête avant :
- semelle : 2,0 × 0,30 × 25 = 15,0 kN à 1,0 m → 15,0 ;
- voile : 0,20 × 2,70 × 25 = 13,5 kN à 0,60 m → 8,1 ;
- terres sur le talon : 1,30 × 2,70 × 18 = 63,2 kN à 0,70 + 0,65 = 1,35 m → 85,3.
**Ms = 108,4 kN·m/m.** Coefficient : 108,4 / 27,0 = **4,0 ≥ 1,5** ✔ : les terres sur le talon assurent l'essentiel de la stabilité.`}
 ],
 quiz:[
  {q:"Le coefficient de poussée active pour φ = 30° vaut :", o:["0,5","0,333","1","3"], r:1, e:"Ka = tan²(45° − 15°) = tan² 30° = 1/3."},
  {q:"La poussée des terres sur un mur de hauteur H est appliquée à :", o:["H/2","H/3 de la base","2H/3 de la base","En haut"], r:1, e:"Diagramme triangulaire."},
  {q:"Dans un mur cantilever, les aciers principaux du voile sont :", o:["Horizontaux côté air","Verticaux côté terres","Verticaux côté air","Absents"], r:1, e:"La face tendue est du côté des terres."},
  {q:"Les barbacanes servent à :", o:["Décorer","Évacuer l'eau derrière le mur","Ventiler les terres","Fixer les coffrages"], r:1, e:"L'eau ajouterait une poussée importante."},
  {q:"Un voile de contreventement reprend surtout :", o:["Les efforts horizontaux (vent, séisme)","Uniquement son poids","Les charges des balcons","La torsion des poutres"], r:0, e:"Grande rigidité dans son plan."}
 ]},

{id:"ba-21", niv:3, titre:"Flexion composée : poteaux de portique et éléments excentrés", duree:70, contenu:`## Quand rencontre-t-on la flexion composée ?
Dès qu'un élément reçoit à la fois un **effort normal** N et un **moment** M : poteaux de portiques (moments transmis par les poutres, vent), poteaux de rive qui portent une poutre d'un seul côté, voiles de contreventement, murs de soutènement avec leur poids, tirants excentrés. On caractérise la sollicitation par l'**excentricité** :
$$ e = Mu / Nu      (distance du point d'application de N au centre de gravité de la section)

## Section partiellement ou entièrement comprimée
- Si N est une **compression** et e est **grand** (au-delà de h/6 environ), une partie de la section est **tendue** : la section est **partiellement comprimée** ; on la calcule « comme une flexion simple » avec des aciers tendus.
- Si e est **petit**, toute la section est comprimée : on la calcule comme un **poteau** (compression centrée) avec, au besoin, des aciers sur les deux faces.
- Si N est une **traction** et e petit, la section est **entièrement tendue** : seuls les aciers travaillent.

## Méthode pour une section partiellement comprimée (N de compression)
1. Calculer le **moment par rapport aux aciers tendus** :
$$ Mua = Mu + Nu × (d − h/2)
2. Calculer la section comme en **flexion simple** sous Mua : μ = Mua / (b d² fbu), puis α, z et une section fictive A1 = Mua / (z σs) (vérifier μ ≤ μl).
3. Retirer l'effet de la compression, qui « aide » le béton et soulage les aciers tendus :
$$ As = A1 − Nu / σs
Si As devient négatif, les aciers tendus ne sont pas nécessaires par le calcul : la section est en fait comprimée, on met le **minimum** et on vérifie en compression.

> [!exemple] Poteau de portique
> Section 30 × 40 cm (flexion dans le sens des 40 cm), d = 36 cm, Nu = 400 kN (compression), Mu = 120 kN·m. fc28 = 25 MPa, FeE400.
> e = 120 / 400 = **0,30 m** ≫ h/6 = 0,067 m → section partiellement comprimée.
> Mua = 120 + 400 × (0,36 − 0,20) = 120 + 64 = **184 kN·m**.
> μ = 0,184 / (0,30 × 0,36² × 14,17) = **0,334** ≤ 0,392 ; α = 0,530 ; z = 0,284 m.
> A1 = 0,184 / (0,284 × 347,8) = **18,65 cm²** ; As = 18,65 − 400 000 / 34 780 = 18,65 − 11,50 = **7,15 cm²**.
> Comme le moment de vent peut changer de sens, on arme **symétriquement** : **2 HA20 + 1 HA12 (7,41 cm²) sur chaque face**, cadres HA8.

## Les effets du second ordre
Un poteau élancé fléchi se déforme, ce qui **augmente l'excentricité** de N et donc le moment : c'est le **second ordre**. Le BAEL ajoute :
- une excentricité **additionnelle** ea = max (2 cm ; L / 250) qui couvre les imperfections ;
- pour les poteaux élancés (lf / h > max(15 ; 20 e1 / h)), une excentricité du second ordre e2 = 3 lf² (2 + α φ) / (10⁴ h), qui tient compte du fluage.
L'Eurocode 2 procède de même (imperfections, méthode de la courbure ou de la rigidité nominale). Pour les poteaux courants peu élancés de bâtiment, ces termes restent modestes mais ne doivent pas être oubliés.

## Section entièrement tendue
Pour un tirant soumis à une traction N appliquée entre les deux nappes d'aciers, aux distances e1 (de la nappe 1) et e2 (de la nappe 2), on écrit simplement l'équilibre des moments :
$$ A1 = Nu × e2 / ((d − d') σs)      A2 = Nu × e1 / ((d − d') σs)
Le béton ne participe pas ; on vérifie ensuite l'ELS (fissuration) avec σ̄s.

## Diagrammes d'interaction
Les bureaux d'études utilisent des **diagrammes d'interaction** (courbes N–M) qui donnent, pour une section armée donnée, tous les couples (N ; M) qu'elle peut reprendre. Un couple de sollicitations est acceptable s'il est **à l'intérieur** de la courbe. On y voit qu'une compression modérée **augmente** le moment admissible d'une section (elle retarde l'ouverture des fissures), alors qu'une compression très forte le diminue.

> [!retenir]
> - e = Mu / Nu ; e grand → partiellement comprimée ; e petit → entièrement comprimée.
> - Mua = Mu + Nu (d − h/2) ; flexion simple sous Mua → A1 ; As = A1 − Nu / σs.
> - Ajouter ea = max(2 cm ; L/250) et le second ordre pour les poteaux élancés.
> - Moments réversibles (vent, séisme) → armatures symétriques.`,
 sujet:{titre:"Poteau de portique en flexion composée", duree:75, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un poteau de rive de portique, de section **30 × 40 cm** (40 cm dans le plan de flexion), reçoit un effort normal et le moment d'encastrement de la poutre.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- **Nu = 600 kN** (compression), **Mu = 90 kN·m** (au centre de gravité de la section béton) ;
- d = **36 cm**, d' = **4 cm** ;
- Moment rapporté aux aciers tendus : Mua = Nu × e, avec e = e0 + (d − h/2) et e0 = Mu / Nu ;
- Section partiellement comprimée si : Nu (d − d') − Mua ≤ (0,337 h − 0,81 d') b h fbu ;
- Dans ce cas : on calcule A1 en flexion simple avec Mua, puis A = A1 − Nu / fsu ;
- Section minimale de non-fragilité : 0,23 b d ft28 / fe ; minimum d'un poteau : 4 cm² par mètre de périmètre.

### Partie A — Excentricités (6 points)
1. Calculer e0 et le comparer au noyau central h/6. (2 pts)
2. Calculer e et Mua. (4 pts)

### Partie B — Nature de la section (4 points)
3. Vérifier si la section est partiellement comprimée. (4 pts)

### Partie C — Aciers (10 points)
4. Calculer μ, z et A1. (4 pts)
5. En déduire la section A d'aciers tendus. Commenter. (3 pts)
6. Retenir le ferraillage du poteau en tenant compte des minimums. (3 pts)`,
  corrige:`### Partie A — Excentricités (6 pts)
1. **e0 = 90 / 600 = 0,15 m** ; h/6 = 0,40/6 = 0,067 m → e0 > h/6 : une partie de la section est tendue. *(2 pts)*
2. e = 0,15 + (0,36 − 0,20) = **0,31 m** ; **Mua = 600 × 0,31 = 186 kN·m**. *(4 pts)*

### Partie B — Nature (4 pts)
3. Gauche : 600 × 0,32 − 186 = **6,0 kN·m** ; droite : (0,337 × 0,40 − 0,81 × 0,04) × 0,30 × 0,40 × 14 170 = **174,1 kN·m** → 6,0 ≤ 174,1 : **section partiellement comprimée**. *(4 pts)*

### Partie C — Aciers (10 pts)
4. μ = 186 × 10⁶ / (300 × 360² × 14,17) = **0,338 < μl = 0,372** (pas d'aciers comprimés) ; α = 0,538 ; z = 36 (1 − 0,215) = **28,3 cm** ;
$$ A1 = 186 × 10⁶ / (283 × 434,8) = 1 514 mm² *(4 pts)*
5. A = 1 514 − 600 000 / 434,8 = 1 514 − 1 380 = **134 mm² = 1,34 cm²** : l'effort de compression **soulage** les aciers tendus ; le moment seul aurait demandé bien plus d'acier. *(3 pts)*
6. Non-fragilité : 0,23 × 30 × 36 × 2,1 / 500 = 1,04 cm² ; minimum poteau : 4 × 1,40 = 5,6 cm² au total → **6 HA12 (6,79 cm²)**, 3 par face, cadres HA6 e = 15 cm (le moment pouvant changer de signe avec le vent, on ferraille symétriquement). *(3 pts)*

> [!attention] Erreurs à éviter
> - Prendre Mu au lieu de Mua dans le calcul de flexion.
> - Oublier de retrancher Nu / fsu.
> - Ferrailler un seul côté alors que le vent inverse le moment.`},
 exercices:[
  {t:"Calculer l'excentricité", d:1, e:`Un poteau reçoit Nu = 650 kN et Mu = 26 kN·m. Section 30 × 30 cm. Calculer l'excentricité totale en ajoutant l'excentricité additionnelle (hauteur libre 3,0 m). La section est-elle partiellement comprimée ?`, c:`e1 = 26 / 650 = **0,040 m** ; ea = max(2 cm ; 300/250 = 1,2 cm) = **2 cm** → **e = 6,0 cm**.
h/6 = 5 cm : e est à peine supérieur → la section est presque entièrement comprimée ; le calcul en flexion composée donnera peu ou pas d'acier tendu : le **minimum de poteau** (et la vérification en compression) sera vraisemblablement déterminant.`},
  {t:"Poteau de rive en flexion composée", d:2, e:`Poteau 25 × 40 cm (flexion selon 40 cm, d = 36 cm), Nu = 300 kN, Mu = 90 kN·m. fc28 = 25 MPa, FeE400. Calculer les aciers tendus.`, c:`e = 0,30 m → partiellement comprimée.
Mua = 90 + 300 × (0,36 − 0,20) = **138 kN·m**.
μ = 0,138 / (0,25 × 0,36² × 14,17) = 0,138 / 0,4591 = **0,301** ; α = 0,461 ; z = 0,294 m.
A1 = 0,138 / (0,294 × 347,8) = **13,50 cm²** ; As = 13,50 − 300 / 34,78 = 13,50 − 8,63 = **4,87 cm²** → **2 HA16 + 1 HA12 (5,15 cm²)** sur la face tendue (symétrique si le moment peut s'inverser).`},
  {t:"Section entièrement comprimée", d:2, e:`Poteau 30 × 30 cm (d = 27 cm), Nu = 900 kN, Mu = 18 kN·m. Appliquer la méthode Mua et conclure.`, c:`e = 0,02 m (petite).
Mua = 18 + 900 × (0,27 − 0,15) = 18 + 108 = **126 kN·m** → μ = 0,126 / (0,30 × 0,27² × 14,17) = **0,407 > 0,392** : le modèle « section partiellement comprimée » ne convient pas. D'ailleurs, même avec un bras de levier généreux (z ≈ 0,8 d = 0,216 m), A1 ≈ 0,126 / (0,216 × 347,8) ≈ 16,8 cm², alors que Nu / σs = 25,9 cm² → **As = A1 − Nu/σs < 0**.
La section est **entièrement comprimée** : on la vérifie comme un poteau (en ajoutant l'excentricité), avec les aciers minimaux répartis (4 HA14 au moins pour 30 × 30).`},
  {t:"Tirant excentré", d:3, e:`Une suspente de 25 × 25 cm (d = 21 cm, d' = 4 cm) porte une traction Nu = 160 kN appliquée à 3 cm du centre de gravité, du côté de la nappe 1. FeE400. Calculer les deux nappes d'aciers.`, c:`Les nappes sont à 8,5 cm du centre (d − h/2 = 21 − 12,5). Distances de N : e1 = 8,5 − 3 = **5,5 cm** à la nappe 1 ; e2 = 8,5 + 3 = **11,5 cm** à la nappe 2 ; d − d' = 17 cm.
**A1 = 0,160 × 0,115 / (0,17 × 347,8) = 3,11 cm²** (nappe la plus proche de la force, la plus chargée) ;
**A2 = 0,160 × 0,055 / (0,17 × 347,8) = 1,49 cm²**.
Contrôle : A1 + A2 = 4,60 cm² = Nu / σs ✔. Choix : 2 HA14 (3,08 ≈ 3,11, prendre 2 HA16 = 4,02) côté 1 et 2 HA10 (1,57) côté 2 ; vérifier l'ELS en fissuration préjudiciable.`}
 ],
 quiz:[
  {q:"L'excentricité d'un effort normal vaut :", o:["N / M","M / N","M × N","N × h"], r:1, e:"e = Mu / Nu."},
  {q:"Pour une section partiellement comprimée, on calcule d'abord :", o:["Mua = Mu + Nu (d − h/2)","Mua = Mu − Nu","Mua = Nu × d","Mua = Mu / Nu"], r:0, e:"Moment par rapport aux aciers tendus."},
  {q:"Après le calcul en flexion simple sous Mua, la section d'acier vaut :", o:["A1 + Nu/σs","A1 − Nu/σs","A1","Nu/σs"], r:1, e:"La compression soulage les aciers tendus."},
  {q:"L'excentricité additionnelle du BAEL vaut :", o:["1 cm","max(2 cm ; L/250)","L/10","h/6"], r:1, e:"Elle couvre les imperfections d'exécution."},
  {q:"Avec un moment de vent qui peut changer de sens, on arme :", o:["Une seule face","Symétriquement","Sans cadres","Au centre"], r:1, e:"Chaque face peut devenir tendue."}
 ]},

{id:"ba-22", niv:3, titre:"Flèches et durabilité : vérifications de service", duree:60, contenu:`## Pourquoi la flèche est plus délicate en béton armé
En RDM, la flèche d'une poutre homogène se calcule avec E I. En béton armé, deux phénomènes compliquent le calcul :
- la **fissuration** : dans les zones tendues fissurées, le béton ne participe plus et l'inertie chute (de 50 % ou plus) ;
- le **fluage** : sous les charges permanentes, la déformation du béton augmente avec le temps (module différé Ev ≈ Ei / 3).
La flèche **à long terme** est donc souvent 2 à 3 fois la flèche instantanée.

## Les cas où l'on peut se dispenser du calcul (BAEL)
Pour une poutre, le calcul de la flèche n'est pas nécessaire si les **trois** conditions suivantes sont satisfaites :
$$ h / L ≥ 1/16      h / L ≥ Mt / (10 M0)      As / (b0 × d) ≤ 4,2 / fe
(Mt : moment en travée ; M0 : moment isostatique ; fe en MPa.) Pour une dalle portant dans un sens, conditions analogues : h / L ≥ Mt / (20 M0) et As / (b d) ≤ 2 / fe.

> [!exemple] Poutre de 25 × 50 cm, portée 5 m
> h / L = 0,50 / 5 = 0,100 ≥ 0,0625 ✔ ; poutre isostatique (Mt = M0) : 0,100 ≥ 0,100 ✔ (juste) ; As / (b0 d) = 9,42 / (25 × 45) = 0,0084 ≤ 4,2 / 400 = 0,0105 ✔ → **calcul de flèche non nécessaire**.

## Le calcul de la flèche selon le BAEL (méthode de l'inertie fissurée)
Pour une poutre sur deux appuis sous charge répartie :
$$ f = Mser × L² / (10 × E × If)
avec une **inertie fictive** If qui tient compte de la fissuration :
$$ Ifi = 1,1 I0 / (1 + λi μ)      Ifv = 1,1 I0 / (1 + λv μ)
- I0 : inertie de la section **totale homogénéisée** (béton + 15 As), non fissurée ;
- ρ = As / (b0 d) ; λi = 0,05 ft28 / ((2 + 3 b0/b) ρ) ; λv = 0,4 λi ;
- μ = 1 − 1,75 ft28 / (4 ρ σs + ft28) (σs : contrainte de l'acier sous la charge considérée ; μ ≥ 0).
On calcule les flèches **instantanées** (fi, avec Ei) et **différées** (fv, avec Ev) sous les charges permanentes g et totales p, puis la **flèche nuisible** (celle qui se produit après la pose des cloisons) :
$$ Δft = fgv − fji + fpi − fgi      (fji : sous les charges présentes au moment de la pose des cloisons)
On la compare à **L / 500** (L ≤ 5 m) ou à **0,5 cm + L / 1 000** (L > 5 m).

> [!exemple] Ordre de grandeur pour la même poutre
> I0 ≈ 311 200 cm⁴ ; ρ = 0,0084 ; λi = 2,51 ; λv = 1,00.
> Sous p (Mser = 68 kN·m, σs = 184 MPa) : μ = 0,56 → Ifi = 0,46 I0 → **fpi ≈ 3,7 mm**.
> Sous g (Mg = 50 kN·m, σs ≈ 136 MPa) : fgi ≈ 2,4 mm et fgv ≈ 4,9 mm.
> En prenant fji ≈ fgi (cloisons posées tôt) : Δft ≈ 4,9 − 2,4 + 3,7 = **6,2 mm ≤ L/500 = 10 mm** ✔.

## Limiter les flèches en pratique
- respecter les **élancements** h ≥ L/16 (poutres isostatiques), L/20 à L/22 (continues), L/22,5 (planchers à corps creux), L/25 à L/40 (dalles) ;
- **décoffrer** et décintrer après une résistance suffisante (au moins 7 à 14 jours pour les portées courantes, plus si l'on charge tôt) et **ré-étayer** si l'on stocke des matériaux sur un plancher jeune ;
- prévoir une **contreflèche** au coffrage pour les grandes portées ;
- **cure** soignée du béton (le retrait augmente les flèches et la fissuration).

## La durabilité
Un ouvrage en béton armé doit durer 50 ans et plus. Les principales causes de dégradation et les parades :
| Pathologie | Cause | Prévention |
|---|---|---|
| Corrosion des aciers, éclatements | enrobage insuffisant, carbonatation, chlorures (bord de mer) | enrobage respecté (cales), béton compact, E/C faible, cure |
| Fissures de retrait | séchage trop rapide (soleil, vent) | cure humide 7 jours, joints, aciers de peau |
| Fissures de flexion excessives | aciers mal placés ou insuffisants, surcharges | calcul ELS, contrôle avant coulage |
| Nids de cailloux, ségrégation | vibration insuffisante, chute de trop haut | vibration, béton plastique, hauteur de chute ≤ 1,5 m |
| Attaques chimiques | sols et eaux sulfatés, eaux usées | ciments adaptés (CEM III, prise mer), enrobage |

> [!retenir]
> - Dispense de calcul : h/L ≥ 1/16, h/L ≥ Mt/(10 M0), As/(b0 d) ≤ 4,2/fe.
> - Sinon : inerties fictives Ifi, Ifv ; f = Mser L² / (10 E If) ; Δft = fgv − fji + fpi − fgi.
> - Limites : L/500 (L ≤ 5 m) ou 0,5 cm + L/1 000.
> - Durabilité : enrobage, compacité, cure, vibration.`,
 sujet:{titre:"Flèche d'une poutre et durabilité d'un bâtiment en zone humide", duree:75, niveau:"Licence", bareme:20,
  enonce:`**Contexte.** Une poutre de **6,00 m** de portée (25 × 50 cm, d = 45 cm, **4 HA20**) supporte des cloisons en carreaux de plâtre. On vérifie sa flèche, puis on étudie la durabilité du bâtiment situé près de la lagune Ébrié.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Moment de service **Mser = 128 kN·m** (charge uniforme) ; inertie de la section fissurée homogénéisée **I = 184 400 cm⁴** ;
- Modules : **Ei = 32 164 MPa** (instantané), **Ev = 10 819 MPa** (différé) ;
- Flèche sous charge uniforme : f = 5 Mser L² / (48 E I) ;
- Flèche admissible pour L > 5 m : **0,5 cm + L/1 000** ;
- Conditions de dispense de calcul (poutre isostatique) : h/L ≥ 1/16 ; h/L ≥ Mt / (10 M0) ; A / (b0 d) ≤ 4,2 / fe.

### Partie A — Dispense de calcul (5 points)
1. Vérifier les trois conditions. Le calcul de la flèche est-il nécessaire ? (5 pts)

### Partie B — Calcul de la flèche (9 points)
2. Calculer la flèche instantanée et la flèche à long terme (en majorant, on prend tout le chargement de longue durée). (5 pts)
3. Calculer la flèche admissible et conclure. (2 pts)
4. Proposer deux solutions. (2 pts)

### Partie C — Durabilité (6 points)
5. Quel enrobage et quelle classe de fissuration retenir près de la lagune ? (2 pts)
6. Citer quatre dispositions qui améliorent la durabilité du béton armé. (4 pts)`,
  corrige:`### Partie A — Dispenses (5 pts)
1. h/L = 50/600 = **0,083 ≥ 0,0625** ✔ ; Mt / (10 M0) = 0,10 (isostatique, Mt = M0) → 0,083 < 0,10 ✘ ; A / (b0 d) = 12,57 / (25 × 45) = **0,0112 > 4,2/500 = 0,0084** ✘ → **le calcul de la flèche est nécessaire**. *(5 pts)*

### Partie B — Flèche (9 pts)
2. $$ fi = 5 × 128 × 10⁶ × 6 000² / (48 × 32 164 × 1,844 × 10⁹) = 8,1 mm
$$ fv = 5 × 128 × 10⁶ × 6 000² / (48 × 10 819 × 1,844 × 10⁹) = 24,1 mm *(5 pts)*
3. f adm = 5 + 6 000 / 1 000 = **11 mm** → la flèche à long terme (24 mm) **dépasse** l'admissible : les cloisons en carreaux de plâtre fissureront. *(2 pts)*
4. Augmenter la **hauteur** (I croît comme h³) : 25 × 60 ; ajouter des aciers (5 HA20, et des aciers comprimés qui réduisent le fluage) ; poser les cloisons le plus tard possible ; contre-flèche au coffrage. *(2 pts)*

### Partie C — Durabilité (6 pts)
5. Ambiance humide et saline : **fissuration préjudiciable** (voire très préjudiciable en bord de mer), enrobage **3 cm** minimum (5 cm pour les ouvrages en contact avec l'eau saumâtre). *(2 pts)*
6. Béton compact et bien vibré (rapport E/C faible, dosage suffisant) ; **cure** humide de 7 jours ; respect de l'enrobage avec des cales ; ciment adapté ; ouverture de fissures limitée (σs ≤ 250 MPa) ; écoulement de l'eau (pentes, gouttes d'eau). *(4 pts)*

> [!attention] Erreurs à éviter
> - Calculer la flèche avec l'inertie de la section brute non fissurée (on la sous-estime).
> - Oublier le fluage : la flèche réelle est environ trois fois la flèche instantanée.
> - Réduire l'enrobage pour « gagner » de la hauteur utile.`},
 exercices:[
  {t:"Conditions de dispense", d:1, e:`Une poutre continue de 25 × 40 cm a une portée de 5,5 m. En travée, Mt = 0,75 M0. Elle est armée de 3 HA16 (6,03 cm², d = 36 cm), FeE400. Faut-il calculer la flèche ?`, c:`h / L = 0,40 / 5,5 = **0,073** ≥ 1/16 = 0,0625 ✔.
Mt / (10 M0) = 0,75 / 10 = 0,075 → 0,073 < 0,075 ✘ (de peu).
As / (b0 d) = 6,03 / (25 × 36) = 0,0067 ≤ 0,0105 ✔.
Une condition n'est pas vérifiée : **il faut calculer la flèche** (ou passer à h = 45 cm, ce qui satisfait les trois conditions).`},
  {t:"Choisir la hauteur d'une poutre", d:1, e:`Donner la hauteur minimale conseillée (règles d'élancement) pour : une poutre isostatique de 6 m ; une poutre continue de 6 m ; un plancher à corps creux de 4,5 m ; une dalle pleine continue portant dans deux sens de lx = 4,8 m.`, c:`Poutre isostatique : 600/16 = **37,5 cm → 40 cm**.
Poutre continue : 600/20 à 600/22 ≈ **27 à 30 cm → 30 cm** (souvent 35 à 40 cm en pratique pour la résistance).
Corps creux : 450/22,5 = **20 cm → 16+4**.
Dalle continue deux sens : 480/40 à 480/35 = **12 à 14 cm → 14 cm**.`},
  {t:"Flèche admissible", d:1, e:`Calculer la flèche admissible (BAEL) pour des poutres de 4,0 m, 5,0 m et 7,0 m.`, c:`4,0 m : L/500 = **8 mm**.
5,0 m : L/500 = **10 mm**.
7,0 m : 0,5 cm + 700/1 000 = 0,5 + 0,7 = **1,2 cm = 12 mm**.`},
  {t:"Diagnostiquer une pathologie", d:2, e:`Sous un balcon construit il y a 8 ans à Abidjan, le béton s'écaille et l'on voit des aciers rouillés en sous-face. Expliquer les causes probables et la réparation.`, c:`Causes probables : **enrobage insuffisant** (aciers posés sans cales, ou aciers inférieurs de répartition trop près de la surface), béton peu compact, ambiance humide et saline : la **carbonatation** et les **chlorures** ont atteint les aciers, qui ont rouillé ; la rouille, plus volumineuse que l'acier, a fait éclater le béton.
Réparation : purger le béton dégradé, dégager les aciers sur tout leur pourtour, les brosser ou sabler, remplacer ou compléter ceux qui ont perdu plus de 10 à 20 % de section, appliquer un passivant, reconstituer l'enrobage avec un **mortier de réparation** adapté, puis protéger (peinture ou imprégnation hydrofuge). Vérifier surtout les **aciers supérieurs** du balcon, qui portent la console.`}
 ],
 quiz:[
  {q:"La flèche à long terme d'une poutre en béton armé est augmentée par :", o:["Le fluage","La vibration","Les cadres","L'enrobage"], r:0, e:"Le béton continue à se déformer sous charge permanente."},
  {q:"La flèche admissible d'une poutre de 4 m (BAEL) vaut :", o:["4 mm","8 mm","16 mm","40 mm"], r:1, e:"L/500."},
  {q:"Une des conditions de dispense du calcul de flèche est :", o:["h/L ≥ 1/16","h/L ≥ 1/50","As/(b0 d) ≥ 2 %","L ≥ 10 m"], r:0, e:"Avec h/L ≥ Mt/(10 M0) et As/(b0 d) ≤ 4,2/fe."},
  {q:"La cause principale de la corrosion des aciers est :", o:["Un excès d'acier","Un enrobage insuffisant ou un béton poreux","Trop de cadres","Un béton trop résistant"], r:1, e:"La carbonatation et les chlorures atteignent l'acier."},
  {q:"La cure du béton sert à :", o:["Le colorer","Éviter un séchage trop rapide qui provoque du retrait et des fissures","Accélérer la prise","Remplacer la vibration"], r:1, e:"On garde le béton humide plusieurs jours."}
 ]},

{id:"ba-23", niv:3, titre:"Étude complète d'un bâtiment : du plan au ferraillage (BAEL et Eurocode 2)", duree:80, contenu:`## La démarche d'un bureau d'études
L'étude de structure d'un bâtiment suit toujours le même enchaînement :
1. **Données** : plans d'architecte, usage des locaux, étude de sol (σ̄sol, profondeur d'ancrage), matériaux (fc28, fe), environnement (fissuration, enrobages), règlement (BAEL ou Eurocode).
2. **Conception structurelle** : choix du système porteur (poteaux-poutres, murs porteurs, voiles), sens de portée des planchers, positions des poteaux et des joints, contreventement.
3. **Prédimensionnement** des éléments.
4. **Descente de charges** (G, Q, puis combinaisons).
5. **Calcul des éléments** : dalles et planchers, poutres, poteaux, escaliers, fondations, éléments particuliers (balcons, acrotères, réservoirs).
6. **Plans de ferraillage** et **nomenclatures**.
7. **Note de calcul** : hypothèses, résultats, justifications, que le contrôleur technique vérifie.
8. **Suivi de chantier** : contrôle des armatures avant coulage, essais de béton.

## Le prédimensionnement
| Élément | Règle de prédimensionnement courante |
|---|---|
| Plancher à corps creux | ht ≥ L / 22,5 (16+4 jusqu'à ≈ 4,5 m) |
| Dalle pleine | L/30 à L/40 (deux sens), L/25 à L/30 (un sens) ; ≥ 12 cm |
| Poutre isostatique | h ≈ L/10 à L/12 ; b ≈ 0,3 à 0,5 h |
| Poutre continue | h ≈ L/12 à L/16 |
| Poteau | Br (cm²) ≈ 0,64 Nu (kN) ; ≥ 20 × 20 cm ; λ ≤ 35 si possible |
| Semelle isolée | A = √(Nser / σ̄sol) ; h ≈ (A − a)/4 + 5 cm |
| Voile | e ≥ 15 cm |

## Un exemple de synthèse : maison R+1 type
Les chapitres précédents ont permis de calculer, pour une maison R+1 en béton armé (fc28 = 25 MPa, FeE400, σ̄sol = 0,20 MPa) :
| Élément | Section | Ferraillage retenu |
|---|---|---|
| Dalle pleine 4,0 × 5,0 m | h = 15 cm | HA8 e = 25 cm dans les deux sens + chapeaux HA8 e = 25 |
| Poutre principale de 5 m | 25 × 50 cm | 3 HA20 en bas, 2 HA12 en haut, cadres HA8 e = 15 → 25 cm |
| Poteau intérieur | 20 × 20 cm | 4 HA12, cadres HA6 e = 15 cm |
| Semelle intérieure | 1,25 × 1,25 × 0,35 m | 7 HA10 dans chaque sens, crochets |
| Escalier | paillasse 15 cm | HA12 e = 20 cm + chapeaux HA10 e = 25 |
| Balcon 1,50 m | 15 cm | HA10 e = 20 cm en partie haute |
Le **métré** de ces éléments donne les quantités de béton, de coffrage et d'acier ; les **ratios** (kg d'acier par m³ de béton) permettent de contrôler les résultats.

## Du BAEL à l'Eurocode 2
Les deux règlements reposent sur les mêmes principes ; les principales différences de valeurs :
| Grandeur | BAEL 91 | Eurocode 2 (annexe française) |
|---|---|---|
| Béton de référence | fc28 = 25 MPa | C25/30 (fck = 25 MPa) |
| Résistance de calcul du béton | fbu = 0,85 fc28 / 1,5 = 14,17 MPa | fcd = fck / 1,5 = 16,67 MPa (puis η fcd sur 0,8 x) |
| Acier courant | FeE400 / FeE500 (σs = 348 / 435) | B500 (fyd = 435 MPa) |
| Combinaison ELU | 1,35 G + 1,5 Q | 1,35 G + 1,5 Q |
| Section minimale en flexion | 0,23 b d ft28 / fe | 0,26 b d fctm / fyk (≥ 0,0013 b d) |
| Enrobage | 1 / 3 / 5 cm selon exposition | cnom selon classes d'exposition XC, XS, XD (≈ 25 à 55 mm) |
| Effort tranchant | τu et formule des cadres | modèle de bielles d'inclinaison variable (θ de 22° à 45°) |
Pour un calcul courant, les sections d'acier obtenues sont très proches.

## Ouverture : le béton précontraint
Dans le **béton précontraint**, on comprime le béton **avant** de le charger, à l'aide de câbles ou de fils d'acier à très haute résistance (1 600 à 1 900 MPa) tendus :
- **par pré-tension** (fils tendus avant le coulage, en usine) : poutrelles de planchers, dalles alvéolées, traverses ;
- **par post-tension** (câbles tendus après durcissement dans des gaines) : ponts, grandes dalles, réservoirs.
Le béton reste entièrement **comprimé** sous les charges de service : pas de fissures, des portées plus grandes, des sections plus minces. Il faut tenir compte des **pertes de précontrainte** (frottements, retrait, fluage, relaxation).

## Les outils
Les bureaux d'études utilisent des logiciels (descente de charges, éléments finis, ferraillage automatique, plans). Le technicien doit cependant savoir **contrôler** leurs résultats par des calculs simples : ordres de grandeur des moments (qL²/8), des sections d'acier (Mu / (0,9 d σs)), des ratios. C'est l'objectif de tout ce cours.

> [!retenir]
> - Données → conception → prédimensionnement → descente de charges → calculs → plans → note de calcul → contrôle de chantier.
> - Prédimensionnement : poutres L/10 à L/16, planchers L/22,5, poteaux Br ≈ 0,64 Nu.
> - BAEL et Eurocode 2 : mêmes principes, valeurs voisines.
> - Toujours contrôler un logiciel par un calcul simple.`,
 sujet:{titre:"Mini-projet : de la dalle à la semelle d'un module de bureaux", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un module de bureaux R+1 a une trame de **4,50 m × 5,00 m**. On suit le chemin des charges d'un bout à l'autre : dalle, poutre, poteau, semelle.

**Données** : BAEL 91 révisé 99 — fc28 = 25 MPa, FeE500, fbu = 14,17 MPa, fsu = 434,8 MPa, ft28 = 2,1 MPa.
- Dalle pleine 15 cm + revêtements : **G = 5,0 kN/m²** ; bureaux : **Q = 1,5 kN/m²** (on prend cette valeur pour simplifier) ;
- Poutre principale **20 × 45 cm** (d = 40,5 cm), portée **5,00 m** (appuis simples), reprenant une bande de **4,50 m** ;
- Poteau 25 × 25 cm, lf = 2,10 m (α = 0,747), reçoit à chaque niveau **deux réactions** de poutres principales (on néglige les poutres secondaires) ; deux niveaux identiques ;
- Sol : **0,20 MPa** admissibles ; on prendra Nser ≈ Nu / 1,40 ;
- HA14 = 1,54 cm² ; HA16 = 2,01 cm² ; HA20 = 3,14 cm².

### Partie A — Poutre (9 points)
1. Calculer G et Q linéiques sur la poutre (poids propre compris), puis pu. (3 pts)
2. Calculer Mu, puis les aciers et choisir les barres. (4 pts)
3. Calculer Vu et τu. (2 pts)

### Partie B — Poteau (6 points)
4. Calculer Nu au pied du poteau (poids propre 1,35 × 4,7 kN par niveau). (3 pts)
5. Vérifier la résistance du poteau avec 4 HA12 (4,52 cm² ; Br = 529 cm²). (3 pts)

### Partie C — Semelle (5 points)
6. Calculer Nser et dimensionner la semelle carrée. (3 pts)
7. Expliquer en trois lignes le « chemin des charges » de la dalle au sol. (2 pts)`,
  corrige:`### Partie A — Poutre (9 pts)
1. G = 5,0 × 4,50 + 0,20 × 0,45 × 25 = 22,5 + 2,25 = **24,75 kN/m** ; Q = 1,5 × 4,50 = **6,75 kN/m** ; **pu = 1,35 × 24,75 + 1,5 × 6,75 = 43,54 kN/m**. *(3 pts)*
2. **Mu = 43,54 × 25 / 8 = 136,1 kN·m** ; μ = 136,1 × 10⁶ / (200 × 405² × 14,17) = **0,293** ; α = 0,445 ; z = 33,3 cm ;
$$ A = 136,1 × 10⁶ / (333 × 434,8) = 940 mm² = 9,40 cm²
   → **3 HA20 (9,42 cm²)** (un lit dans 20 cm : 20 − 6 − 1,2 − 6 = 6,8 cm pour 2 espaces = 3,4 cm ✔). *(4 pts)*
3. **Vu = 43,54 × 2,5 = 108,9 kN** ; τu = 108 900 / (200 × 405) = **1,34 MPa ≤ 3,33** ✔. *(2 pts)*

### Partie B — Poteau (6 pts)
4. Par niveau : 2 × 108,9 + 1,35 × 4,7 = 217,8 + 6,3 = 224,1 kN → deux niveaux : **Nu ≈ 448 kN**. *(3 pts)*
5. $$ Nrésistant = 0,747 × [52 900 × 25 / 1,35 + 452 × 500 / 1,15] = 0,747 × (979,6 + 196,5) kN = 878,6 kN ≥ 448 kN ✔
   Le poteau est largement suffisant ; 4 HA12 respectent le minimum de 4 cm². *(3 pts)*

### Partie C — Semelle (5 pts)
6. Nser ≈ 448 / 1,40 = **320 kN** ; A ≥ 320 / 200 = 1,60 m² → **1,30 × 1,30 m** (1,69 m²), h ≈ (1,30 − 0,25)/4 + 0,05 ≈ 0,30 m. *(3 pts)*
7. La dalle porte les charges vers les poutres ; les poutres les ramènent aux poteaux par leurs réactions d'appui ; les poteaux les cumulent niveau par niveau jusqu'aux semelles, qui les répartissent sur une surface de sol suffisante pour que la pression reste admissible. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le poids propre de la poutre et du poteau.
> - Additionner des charges ELU et ELS dans un même calcul.
> - Dimensionner la semelle avec Nu (on la dimensionne avec les charges de service).`},
 exercices:[
  {t:"Prédimensionner une ossature", d:1, e:`Un bâtiment a des poutres principales isostatiques de 6,0 m, des poutres continues de 4,5 m, un plancher à corps creux de 4,5 m de portée et des poteaux portant Nu = 700 kN. Prédimensionner chaque élément.`, c:`Poutres isostatiques de 6 m : h ≈ 600/10 à 600/12 = 50 à 60 cm → **25 × 55 cm**.
Poutres continues de 4,5 m : h ≈ 450/12 à 450/16 = 28 à 38 cm → **20 × 35 cm** (ou 25 × 40).
Plancher : 450/22,5 = 20 cm → **16+4**.
Poteaux : Br ≈ 0,64 × 700 = 448 cm² → (a − 2)² ≥ 448 → a ≥ 23,2 cm → **25 × 25 cm**.`},
  {t:"Contrôler un résultat de logiciel", d:2, e:`Un logiciel indique, pour une poutre isostatique de 25 × 50 cm (d = 45 cm) et de 6 m de portée sous pu = 30 kN/m, une section d'acier inférieur de 4,5 cm². Ce résultat est-il plausible ?`, c:`Ordre de grandeur : Mu = 30 × 36 / 8 = **135 kN·m** ; As ≈ Mu / (0,9 d σs) = 0,135 / (0,9 × 0,45 × 347,8) = **9,6 cm²**.
Le résultat du logiciel (4,5 cm²) est **deux fois trop faible** : il faut vérifier les données saisies (charge, portée, unités, appuis supposés encastrés au lieu d'articulés…). Le calcul simple permet de détecter l'erreur.`},
  {t:"Comparer BAEL et Eurocode 2", d:2, e:`Pour la poutre de 25 × 50 cm (d = 45 cm) avec Mu = 120 kN·m, on calcule As selon l'Eurocode 2 avec fcd = 16,67 MPa (diagramme rectangulaire 0,8 x, contrainte fcd) et fyd = 435 MPa (B500). Comparer avec le BAEL (FeE400 : 8,45 cm² ; FeE500 : 6,76 cm²).`, c:`μ = 0,120 / (0,25 × 0,45² × 16,67) = **0,142** ; α = 1,25 × (1 − √(1 − 0,284)) = 0,192 ; z = 0,45 × (1 − 0,077) = 0,415 m.
**As = 0,120 / (0,415 × 435) = 6,65 cm²** (B500).
Comparaison avec le BAEL en FeE500 : 6,76 cm² → écart inférieur à 2 %. Les deux règlements donnent pratiquement le même ferraillage en flexion simple.`},
  {t:"Établir l'ordre des tâches d'une étude", d:1, e:`Remettre dans l'ordre : plans de ferraillage ; descente de charges ; étude de sol ; calcul des poteaux ; prédimensionnement ; contrôle des aciers avant coulage ; calcul des semelles ; conception du système porteur.`, c:`1. **Étude de sol** (et plans d'architecte) ;
2. **conception du système porteur** ;
3. **prédimensionnement** ;
4. **descente de charges** ;
5. **calcul des poteaux** ;
6. **calcul des semelles** (elles dépendent des charges des poteaux) ;
7. **plans de ferraillage** ;
8. **contrôle des aciers avant coulage** sur le chantier.`}
 ],
 quiz:[
  {q:"La première donnée nécessaire pour calculer les fondations est :", o:["La couleur des façades","L'étude de sol (contrainte admissible)","Le prix de l'acier","Le nombre de fenêtres"], r:1, e:"σ̄sol et profondeur d'ancrage."},
  {q:"La hauteur d'une poutre isostatique se prédimensionne à environ :", o:["L/5","L/10 à L/12","L/30","L/50"], r:1, e:"Règle de prédimensionnement courante."},
  {q:"En Eurocode 2, la résistance de calcul d'un béton C25/30 vaut :", o:["14,17 MPa","16,67 MPa","25 MPa","30 MPa"], r:1, e:"fcd = 25 / 1,5 (αcc = 1 en France)."},
  {q:"Le béton précontraint permet :", o:["De supprimer les aciers","De garder le béton comprimé en service et d'augmenter les portées","De couler sans coffrage","D'éviter les fondations"], r:1, e:"Les câbles tendus compriment le béton."},
  {q:"Pour contrôler une section d'acier en flexion, on peut utiliser :", o:["As ≈ Mu / (0,9 d σs)","As ≈ Mu × d","As ≈ σs / Mu","As ≈ b × h"], r:0, e:"Ordre de grandeur rapide."}
 ]}
]});
