/* =====================================================================
   Matériaux de construction — cours complet (3 niveaux)
   Débutant : propriétés générales, granulats, liants, mortiers et agglos,
              terre et matériaux locaux
   Intermédiaire : béton frais et durci, eau et adjuvants, contrôle du
              béton, aciers, bois, métaux et verre, matériaux de second œuvre
   Avancé : formulation Dreux-Gorisse, bétons spéciaux, durabilité,
            essais de laboratoire, matériaux écologiques
   ===================================================================== */
A.addMatiere({
 id:"mat",
 titre:"Matériaux de construction",
 court:"Matériaux",
 groupe:"constr",
 icone:"brick",
 couleur:"#B85C38",
 niveau:"Débutant",
 heures:65,
 ordre:1,
 prerequis:["sp"],
 resume:"Connaître, choisir, doser et contrôler les matériaux : propriétés physiques et mécaniques, granulats, ciments et liants, mortiers et agglos, terre et matériaux locaux, bétons frais et durcis, adjuvants, contrôle du béton, aciers, bois, métaux, verre, matériaux de second œuvre, formulation des bétons, bétons spéciaux, durabilité et essais de laboratoire, avec applications et exercices corrigés.",
 objectifs:[
  "Calculer les grandeurs physiques d'un matériau (masses volumiques, porosité, teneur en eau)",
  "Choisir et contrôler les granulats, ciments, aciers et bois",
  "Doser un béton, un mortier et un enduit, et formuler un béton",
  "Interpréter des essais de laboratoire et de chantier",
  "Prévenir les pathologies et choisir des matériaux durables"
 ],
 applications:[
  "Contrôle à la réception (sable, ciment, aciers, agglos)",
  "Composition d'un béton pour un ouvrage donné",
  "Interprétation d'un procès-verbal d'essais",
  "Fabrication des agglos et des BTC sur chantier",
  "Choix d'un bois, d'un acier ou d'un isolant"
 ],
 chapitres:[
{id:"mat-10", niv:1, titre:"Les propriétés générales des matériaux", duree:55, contenu:`## Pourquoi caractériser un matériau ?
Pour choisir le bon matériau, le doser, calculer un ouvrage ou contrôler une livraison, il faut connaître ses **propriétés physiques** (masse, porosité, eau) et **mécaniques** (résistances, déformations).

## Les masses volumiques
- **Masse volumique absolue** (ou réelle) ρs : masse de la matière **sans les vides** (grains seuls) : ρs = Ms / Vs. Granulats siliceux et granites : ≈ 2,65 t/m³ ; ciment : ≈ 3,1 t/m³ ; acier : 7,85 t/m³.
- **Masse volumique apparente** ρ : masse d'un volume **vides compris** (pores, vides entre grains) : ρ = M / V. Sable sec en vrac : ≈ 1,5 à 1,7 t/m³ ; béton : ≈ 2,3 à 2,4 t/m³ ; bois : 0,4 à 1,0 t/m³.

## Porosité et compacité
$$ porosité p = 1 − ρ / ρs      compacité c = 1 − p = ρ / ρs
> [!exemple] Sable sec
> Un litre de sable sec pèse 1,60 kg (ρ = 1,60 t/m³) ; ρs = 2,65 t/m³ → p = 1 − 1,60 / 2,65 = **0,396** : près de **40 % de vides** entre les grains, que la pâte de ciment doit remplir.

## L'eau dans les matériaux
- **Teneur en eau** : w = (Mh − Ms) / Ms (Mh : masse humide, Ms : masse sèche à l'étuve) ;
- **Absorption** : eau absorbée par un matériau saturé : Ab = (Msat − Ms) / Ms ;
- **Capillarité** : remontée de l'eau dans les pores fins (murs en pied, enduits).
Ex. : 520 g de sable humide donnant 500 g après séchage → w = 20 / 500 = **4 %**.

## Les propriétés mécaniques
- **Résistance à la compression** : σ = F / A (F : force de rupture, A : section) ;
- **Résistance à la traction**, souvent mesurée **par flexion** : sur un prisme de b × h posé sur deux appuis distants de L et chargé au milieu : σ = 3 F L / (2 b h²) ;
- **Module d'élasticité** E = σ / ε (béton ≈ 30 000 MPa, acier 210 000 MPa, bois ≈ 10 000 MPa) ;
- **Fragile** (béton, verre, pierre : rupture brutale) ou **ductile** (acier : grandes déformations avant rupture).
> [!exemple] Essais de compression et de flexion
> Cube de béton de 15 cm écrasé sous 675 kN : σ = 675 000 / 22 500 = **30 MPa**.
> Prisme de mortier 4 × 4 × 16 cm, appuis à 10 cm, rupture à 2,8 kN : σ = 3 × 2 800 × 100 / (2 × 40 × 40²) = **6,6 MPa**.

## Les propriétés thermiques
- **Dilatation** : ΔL = α × L × ΔT (béton et acier ≈ 10 à 12 × 10⁻⁶ /°C) : une dalle de 25 m soumise à 30 °C de variation varie de 25 000 × 10 × 10⁻⁶ × 30 = **7,5 mm** → joints de dilatation ;
- **Conductivité thermique** λ (W/m·K) : béton ≈ 1,75 ; agglo creux ≈ 1,0 (équivalent) ; bois ≈ 0,15 ; laine minérale ≈ 0,04 : plus λ est faible, plus le matériau est isolant.

> [!retenir]
> - ρs (sans vides) et ρ (avec vides) ; p = 1 − ρ/ρs.
> - w = (Mh − Ms)/Ms ; absorption de même forme.
> - σ = F/A ; flexion : 3FL/(2bh²) ; E = σ/ε.
> - ΔL = α L ΔT ; λ faible = isolant.`,
 sujet:{titre:"Propriétés générales des matériaux : masses volumiques, absorption, résistances, dilatation", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Le laboratoire d'une entreprise à Yamoussoukro réceptionne des matériaux pour un chantier d'école. Vous exploitez les mesures.

**Données**
- Gravier sec : **2 000 g** remplissent un récipient de **1,25 L** ; masse volumique absolue des grains **2,68 t/m³** ;
- Agglo plein : masse sèche **17,2 kg**, masse après immersion 24 h **18,4 kg** ;
- Cube de béton de **15 cm** écrasé sous **720 kN** ;
- Prisme de mortier **4 × 4 × 16 cm**, appuis à **10 cm**, rupture en flexion sous **3,1 kN** (σ = 3 F L / (2 b h²)) ;
- Dalle de béton de **20 m** de long, α = **10 × 10⁻⁶ /°C**, variation de température **30 °C**.

### Partie A — Masses volumiques et porosité (6 points)
1. Définir masse volumique apparente et masse volumique absolue. (2 pts)
2. Calculer la masse volumique apparente du gravier et la porosité (vides entre grains). (3 pts)
3. Quel rôle joue ce volume de vides dans un béton ? (1 pt)

### Partie B — Absorption (3 points)
4. Calculer le coefficient d'absorption d'eau de l'agglo. Pourquoi est-ce important ? (3 pts)

### Partie C — Résistances (7 points)
5. Calculer la résistance en compression du cube. (2 pts)
6. Calculer la résistance en flexion du prisme. (3 pts)
7. Comparer les deux et en déduire une propriété fondamentale des matériaux pierreux. (2 pts)

### Partie D — Dilatation (4 points)
8. Calculer l'allongement de la dalle. Quelle disposition constructive en déduire ? (4 pts)`,
  corrige:`### Partie A — Masses volumiques (6 pts)
1. **Apparente** : masse d'un volume de matériau **vides compris** (grains + vides entre grains) ; **absolue** (réelle) : masse du volume de **matière seule**. *(2 pts)*
2. ρ = 2,000 / 1,25 = **1,60 t/m³** ; porosité p = 1 − 1,60 / 2,68 = **0,40** (40 % de vides). *(3 pts)*
3. Les vides du gravier doivent être remplis par le sable et la pâte de ciment : ils conditionnent les dosages. *(1 pt)*

### Partie B — Absorption (3 pts)
4. Ab = (18,4 − 17,2) / 17,2 = **7,0 %**. Un matériau très absorbant boit l'eau du mortier (mauvaise adhérence) et se dégrade à l'humidité : on humidifie les agglos avant la pose. *(3 pts)*

### Partie C — Résistances (7 pts)
5. σ = 720 000 / (150 × 150) = **32 MPa**. *(2 pts)*
6. $$ σ = 3 × 3 100 × 100 / (2 × 40 × 40²) = 7,3 MPa
   *(3 pts)*
7. La résistance en traction (flexion) est environ **4 à 10 fois plus faible** qu'en compression : bétons et mortiers résistent bien à la compression, mal à la traction — d'où les **armatures** du béton armé. *(2 pts)*

### Partie D — Dilatation (4 pts)
8. ΔL = 10 × 10⁻⁶ × 30 × 20 000 = **6 mm**. Il faut des **joints de dilatation** (et de retrait) pour que la dalle puisse bouger sans fissurer ni pousser les murs. *(4 pts)*

> [!attention] Erreurs à éviter
> - Confondre masse volumique apparente et absolue.
> - Oublier de convertir les cm en mm dans le calcul des contraintes.
> - Négliger la dilatation des grandes dalles et terrasses en climat chaud.`},
 exercices:[
  {t:"Masse volumique et porosité d'une brique", d:1, e:`Une brique pleine de 22 × 10,5 × 6,5 cm pèse 2,40 kg sèche ; la masse volumique absolue de sa matière est 2,60 t/m³. Calculer sa masse volumique apparente et sa porosité. Saturée d'eau, elle pèse 2,64 kg : calculer son absorption.`, c:`V = 0,22 × 0,105 × 0,065 = **0,001 502 m³** → ρ = 2,40 / 0,001 502 = **1 598 kg/m³**.
p = 1 − 1 598 / 2 600 = **0,385** (38,5 % de vides).
Absorption : (2,64 − 2,40) / 2,40 = **10 %**.`},
  {t:"Teneur en eau d'un sable", d:1, e:`Un échantillon de sable humide pèse 1 250 g ; après séchage à l'étuve, 1 190 g. Calculer sa teneur en eau. Quelle quantité d'eau apporte 600 kg de ce sable (masse sèche) dans un m³ de béton ?`, c:`w = (1 250 − 1 190) / 1 190 = **5,0 %**.
Eau apportée : 600 × 0,05 = **30 kg ≈ 30 L**, à retirer de l'eau de gâchage.`},
  {t:"Essai de compression sur cylindre", d:1, e:`Une éprouvette cylindrique de béton de 16 cm de diamètre se rompt sous 540 kN. Calculer sa résistance.`, c:`A = π × 80² = **20 106 mm²** → σ = 540 000 / 20 106 = **26,9 MPa**.`},
  {t:"Flexion d'un prisme de mortier", d:2, e:`Un prisme de mortier 4 × 4 × 16 cm, posé sur deux appuis distants de 10 cm, se rompt sous une charge centrée de 3,2 kN. Calculer sa résistance à la flexion. Ses deux demi-prismes cassent ensuite en compression (section 4 × 4 cm) sous 72 et 76 kN : résistance moyenne en compression ?`, c:`Flexion : σ = 3 × 3 200 × 100 / (2 × 40 × 40²) = 960 000 / 128 000 = **7,5 MPa**.
Compression : (72 000 + 76 000) / 2 / 1 600 = **46,3 MPa** (classe 42,5 du ciment confirmée sur mortier normalisé).`},
  {t:"Dilatation d'une terrasse", d:2, e:`Une dalle de toiture-terrasse en béton de 30 m de long subit une variation de température de 35 °C entre la nuit et le plein soleil (α = 10 × 10⁻⁶ /°C). De combien varie sa longueur ? Que prévoir ?`, c:`ΔL = 30 000 × 10 × 10⁻⁶ × 35 = **10,5 mm**.
Cette variation fissure les acrotères et les murs qui l'empêchent : prévoir un **joint de dilatation** (bâtiment de plus de 25 m), une **isolation** et une protection claire sur la terrasse pour réduire l'écart de température.`}
 ],
 quiz:[
  {q:"La masse volumique absolue d'un granulat siliceux est d'environ :", o:["2,65 t/m³","1,6 t/m³","7,85 t/m³","0,5 t/m³"], r:0, e:"Matière sans les vides."},
  {q:"Porosité d'un sable de ρ = 1,59 t/m³ et ρs = 2,65 t/m³ :", o:["40 %","60 %","10 %","100 %"], r:0, e:"1 − 1,59/2,65."},
  {q:"Un matériau fragile :", o:["Se rompt brutalement sans grande déformation","S'allonge beaucoup avant rupture","Ne casse jamais","Est toujours métallique"], r:0, e:"Béton, verre."},
  {q:"Le module d'élasticité de l'acier vaut environ :", o:["210 000 MPa","30 000 MPa","10 MPa","2 MPa"], r:0, e:"Matériau très rigide."},
  {q:"Plus la conductivité λ est faible :", o:["Plus le matériau est isolant","Plus il est conducteur","Plus il est lourd","Plus il est résistant"], r:0, e:"Laine minérale ≈ 0,04."}
 ]},
{id:"mat-1", niv:1, titre:"Les granulats : nature, granulométrie et contrôle", duree:55, contenu:`## Définitions
Les **granulats** forment le squelette du béton (70 à 80 % de son volume) et des mortiers. On les désigne par leurs dimensions **d/D** (plus petit et plus grand diamètre, en mm).
| Granulat | Classe (d/D en mm) |
|---|---|
| Fines, fillers | < 0,063 |
| Sable | 0/4 (ou 0/5) |
| Gravillons | 4/10, 5/15, 6/10 |
| Gravier | 10/20, 15/25 |
| Cailloux, pierres cassées | 25/40 et plus |

## L'origine
- **Granulats roulés** (rivière, lagune, dunes) : grains arrondis, béton maniable ;
- **Granulats concassés** (carrières de granite, très nombreuses en Côte d'Ivoire) : grains anguleux, meilleure adhérence, béton plus résistant mais un peu moins maniable ;
- Le **sable de mer** ou de lagune non lavé contient des **sels** (chlorures) dangereux pour les aciers : à proscrire en béton armé.

## La granulométrie
On tamise un échantillon sec sur une série de tamis, du plus gros au plus fin ; on pèse le **refus** de chaque tamis et on calcule les **refus cumulés** (en %) puis les **tamisats** (100 − refus cumulés). La **courbe granulométrique** (tamisats en fonction de l'ouverture des tamis, en échelle logarithmique) doit être **continue** pour limiter les vides.
Le **module de finesse** d'un sable :
$$ Mf = Σ refus cumulés (%) sur les tamis 0,16 – 0,315 – 0,63 – 1,25 – 2,5 – 5 mm / 100
| Mf | Sable |
|---|---|
| < 2,2 | Trop fin (demande beaucoup d'eau) |
| 2,2 à 2,8 | **Bon sable à béton** |
| > 3,2 | Trop grossier (béton peu maniable) |

!fig:granulo|Courbe granulométrique

> [!exemple] Analyse d'un sable (1 000 g)
> Refus cumulés : 5 mm : 2 % ; 2,5 mm : 12 % ; 1,25 mm : 30 % ; 0,63 mm : 55 % ; 0,315 mm : 80 % ; 0,16 mm : 95 %.
> Mf = (2 + 12 + 30 + 55 + 80 + 95) / 100 = **2,74** → bon sable à béton.

## La propreté
- Test de chantier : frotter le sable dans la main humide : s'il tache, il contient de l'argile ;
- **Équivalent de sable** : ES = 100 × h2 / h1 (h1 : hauteur totale sable + floculat argileux ; h2 : hauteur du sable seul dans l'éprouvette) : **ES ≥ 75** pour un béton de qualité. Ex. : h1 = 12,5 cm, h2 = 10,2 cm → ES = **81,6** ✔.

## La résistance des gravillons
**Essai Los Angeles** (résistance aux chocs) et **Micro-Deval** (usure) : plus le coefficient est faible, plus le granulat est dur (LA ≤ 30 à 40 pour les bétons, ≤ 25 à 30 pour les couches de chaussée).

## Le foisonnement du sable
Un sable **humide** occupe plus de volume qu'un sable sec (jusqu'à **+ 20 à 30 %** vers 4 à 6 % d'eau) : un dosage au volume (brouettes) donne alors moins de sable réel que prévu. On préfère doser au poids ou tenir compte du foisonnement.

## Le stockage
Sur une aire propre (dalle ou bâche), en tas séparés par nature et par classe, à l'abri des eaux de ruissellement et de la terre.

> [!retenir]
> - d/D ; roulés ou concassés ; pas de sable salé en béton armé.
> - Granulométrie continue ; Mf de 2,2 à 2,8 pour un sable à béton.
> - ES ≥ 75 ; LA faible = granulat dur ; le sable humide foisonne.`,
 sujet:{titre:"Contrôler les granulats livrés : granulométrie, module de finesse, propreté et foisonnement", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un camion de sable de lagune et un camion de gravier concassé arrivent sur un chantier d'immeuble à Abobo. Vous contrôlez la livraison.

**Données — sable (1 000 g)** : refus cumulés : 5 mm **3 %** ; 2,5 mm **15 %** ; 1,25 mm **34 %** ; 0,63 mm **58 %** ; 0,315 mm **82 %** ; 0,16 mm **96 %**.
Module de finesse : Mf = Σ des refus cumulés (%) sur les tamis 0,16 – 0,315 – 0,63 – 1,25 – 2,5 – 5 / 100.

**Équivalent de sable** : hauteur totale (sable + floculat) **12,5 cm** ; hauteur de sable (au piston) **9,8 cm**.

**Gravier** : bon de livraison « 5/25 concassé » ; un tamisage montre **12 %** de grains > 25 mm.

**Foisonnement** : 1 m³ de sable sec pèse **1 550 kg** ; humide à 5 %, la même masse sèche occupe **1,22 m³**.

### Partie A — Granulats (4 points)
1. Définir granulat, classe d/D, sable, gravillon. Différence entre roulé et concassé ? (4 pts)

### Partie B — Sable (9 points)
2. Calculer le module de finesse et conclure (sable à béton : 2,2 à 2,8 ; idéal ≈ 2,5). (3 pts)
3. Calculer l'équivalent de sable et conclure (béton : ES ≥ 75). (2 pts)
4. Quel risque présente un sable de lagune ou de mer ? Comment le traiter ? (2 pts)
5. Calculer le foisonnement et la masse volumique apparente du sable humide. Conséquence pour un dosage « à la brouette » ? (2 pts)

### Partie C — Gravier (4 points)
6. Le gravier est-il conforme à sa classe 5/25 ? (2 pts)
7. Pourquoi limite-t-on D selon l'enrobage et l'espacement des armatures ? (2 pts)

### Partie D — Stockage (3 points)
8. Donner trois règles de stockage des granulats sur chantier. (3 pts)`,
  corrige:`### Partie A — Granulats (4 pts)
1. Grains minéraux (sables, graviers) entrant dans les mortiers et bétons. **d/D** : plus petite et plus grande dimension (en mm). **Sable** : 0/4 (ou 0/5) ; **gravillon** : d ≥ 2 et D ≤ 63 mm. **Roulé** : grains arrondis (rivière, plus maniable) ; **concassé** : anguleux (carrière, meilleure adhérence à la pâte). *(4 pts)*

### Partie B — Sable (9 pts)
2. Mf = (3 + 15 + 34 + 58 + 82 + 96) / 100 = **2,88** : un peu **grossier** (au-dessus de 2,8) → béton moins maniable ; corriger avec un peu de sable fin. *(3 pts)*
3. ES = 100 × 9,8 / 12,5 = **78** ≥ 75 → **propre**, convient pour le béton. *(2 pts)*
4. **Sels** (chlorures) qui font rouiller les armatures, et coquillages : il faut le **laver** à l'eau douce (et contrôler la teneur en chlorures) ou utiliser un sable de carrière. *(2 pts)*
5. Foisonnement : 1,22 − 1 = **22 %** ; masse volumique apparente humide : 1 550 × 1,05 / 1,22 = **1 334 kg/m³**. Mesuré humide au volume, on met **moins de sable** que prévu : il faut corriger les volumes (ou doser en masse). *(2 pts)*

### Partie C — Gravier (4 pts)
6. Pour un 5/25, on tolère environ 10 % de surclassés (> D) : **12 % > 10 %** → non conforme ; réclamer ou recribler. *(2 pts)*
7. Les gros grains doivent passer entre les barres et entre les barres et le coffrage, sinon nids de cailloux et mauvais enrobage. *(2 pts)*

### Partie D — Stockage (3 pts)
8. Sur une aire propre et dure (pas sur la terre) ; **séparer** les classes (cloisons) ; protéger de la pollution et des feuilles ; éviter la ségrégation des gros grains ; garder une humidité régulière (bâche). *(3 pts)*

> [!attention] Erreurs à éviter
> - Utiliser du sable de mer non lavé pour le béton armé.
> - Doser le sable humide au volume sans tenir compte du foisonnement.
> - Stocker le gravier sur la terre : il se salit d'argile.`},
 exercices:[
  {t:"Analyse granulométrique", d:2, e:`On tamise 1 000 g de sable sec. Refus partiels : 5 mm : 35 g ; 2,5 mm : 120 g ; 1,25 mm : 190 g ; 0,63 mm : 230 g ; 0,315 mm : 210 g ; 0,16 mm : 140 g ; fond : 75 g. Calculer les refus cumulés, les tamisats et le module de finesse. Conclure.`, c:`| Tamis (mm) | Refus cumulé (g) | Refus cumulé (%) | Tamisat (%) |
|---|---|---|---|
| 5 | 35 | 3,5 | 96,5 |
| 2,5 | 155 | 15,5 | 84,5 |
| 1,25 | 345 | 34,5 | 65,5 |
| 0,63 | 575 | 57,5 | 42,5 |
| 0,315 | 785 | 78,5 | 21,5 |
| 0,16 | 925 | 92,5 | 7,5 |
Mf = (3,5 + 15,5 + 34,5 + 57,5 + 78,5 + 92,5) / 100 = **2,82** → sable plutôt grossier, encore acceptable (limite haute) ; on peut le corriger avec un peu de sable fin.`},
  {t:"Équivalent de sable", d:1, e:`Essai d'équivalent de sable : h1 = 14,0 cm ; h2 = 8,8 cm. Calculer ES. Le sable convient-il pour un béton armé ? Que faire sinon ?`, c:`ES = 100 × 8,8 / 14,0 = **62,9** < 75 → sable **trop argileux** pour un béton de qualité (perte de résistance, retrait).
Solutions : **laver** le sable, changer de fournisseur, ou le réserver aux mortiers de pose peu exigeants après accord.`},
  {t:"Foisonnement", d:2, e:`Un béton est dosé à 400 L de sable sec par m³. Le sable livré est humide et foisonne de 25 %. Quel volume de sable humide faut-il mettre pour avoir la bonne quantité de sable ? Que se passe-t-il si on n'en tient pas compte ?`, c:`Volume humide : 400 × 1,25 = **500 L**.
Si l'on met seulement 400 L de sable humide, on n'a que 400 / 1,25 = **320 L** de sable réel : le béton manque de sable (plus de vides, moins maniable, risque de nids de cailloux), et l'eau apportée par le sable n'est pas déduite (E/C trop élevé).`},
  {t:"Choisir les granulats", d:1, e:`Pour un béton armé de poteaux très ferraillés (espacement entre barres 3 cm, enrobage 2,5 cm), quelle dimension maximale de gravier D choisir ? Règle : D ≤ 0,8 × espacement et D ≤ enrobage.`, c:`0,8 × 30 = 24 mm et D ≤ 25 mm → **D = 20 mm** (gravier 5/15 ou 10/20 selon disponibilité ; 5/15 si le ferraillage est très dense), pour que le béton passe entre les barres et enrobe bien les aciers.`},
  {t:"Réception d'une livraison", d:2, e:`Un camion livre un « gravier 5/15 » contenant visiblement des mottes de latérite et un sable qui tache fortement la main. Que faire ? Quels essais demander en cas de doute ?`, c:`Refuser (ou isoler) la livraison : la **latérite** et l'**argile** réduisent fortement la résistance et l'adhérence de la pâte de ciment (jusqu'à 30 % de perte).
Essais : **équivalent de sable**, **analyse granulométrique**, éventuellement **valeur au bleu** (argiles) ; noter la non-conformité sur le bon de livraison.`}
 ],
 quiz:[
  {q:"Un sable 0/4 contient des grains :", o:["De 0 à 4 mm","De 4 à 10 mm","De plus de 4 cm","Uniquement de 4 mm"], r:0, e:"d/D."},
  {q:"Module de finesse d'un bon sable à béton :", o:["2,2 à 2,8","0,5","5","10"], r:0, e:"Ni trop fin ni trop grossier."},
  {q:"Le sable de mer non lavé est dangereux pour le béton armé à cause :", o:["Des chlorures","De sa couleur","De sa finesse","De son prix"], r:0, e:"Corrosion des aciers."},
  {q:"L'équivalent de sable mesure :", o:["La propreté du sable","Sa granulométrie","Sa résistance","Son prix"], r:0, e:"Part d'argile."},
  {q:"Un sable humide en vrac :", o:["Foisonne","Rétrécit","Ne change pas","Devient du gravier"], r:0, e:"+ 20 à 30 % de volume."}
 ]},
{id:"mat-2", niv:1, titre:"Les liants : ciments, chaux et plâtre", duree:50, contenu:`## Qu'est-ce qu'un liant ?
Une poudre qui, mélangée à l'eau, forme une **pâte** qui durcit et **colle** les grains entre eux. Liants **hydrauliques** (ciment, chaux hydraulique : durcissent même sous l'eau) et **aériens** (chaux aérienne, plâtre : durcissent à l'air).

## La fabrication du ciment Portland
Calcaire (≈ 80 %) + argile (≈ 20 %) broyés, cuits vers **1 450 °C** → **clinker** ; broyé très finement avec un peu de **gypse** (régulateur de prise) et éventuellement des **ajouts** (calcaire, laitier, pouzzolane, cendres volantes). En Côte d'Ivoire, le clinker est en grande partie importé et broyé dans les cimenteries locales.

## Les types de ciments (NF EN 197-1)
| Type | Composition | Usage |
|---|---|---|
| CEM I | ≥ 95 % de clinker | Béton armé exigeant, préfabrication, décoffrage rapide |
| CEM II/A ou B | Clinker + 6 à 35 % d'ajouts (L : calcaire, S : laitier, P : pouzzolane, V : cendres) | Usage courant : béton armé, maçonnerie, enduits |
| CEM III | Riche en laitier | Milieux agressifs (sulfates, mer), ouvrages massifs (faible chaleur) |
| CEM IV, CEM V | Pouzzolaniques, composés | Usages particuliers |

## Les classes de résistance
Le chiffre indique la résistance **minimale à 28 jours** sur mortier normalisé : **32,5**, **42,5** ou **52,5 MPa** ; la lettre **N** (normale) ou **R** (rapide) la vitesse de montée en résistance.
> [!exemple] Lire un sac
> **CEM II/B-L 32,5 R** : ciment Portland composé, 21 à 35 % d'ajout calcaire (B, L), résistance minimale 32,5 MPa à 28 jours, à durcissement rapide.
> Le ciment le plus courant en Côte d'Ivoire est un **CEM II 32,5** ; le **42,5** est préféré pour les bétons de structure plus exigeants.

## La prise et le durcissement
- **Hydratation** : les silicates du ciment réagissent avec l'eau et forment des cristaux qui s'enchevêtrent ; la réaction **dégage de la chaleur** ;
- **Début de prise** : au moins 45 à 75 minutes selon la classe (plus court par forte chaleur) ; après, on ne doit plus remanier le béton ni rajouter d'eau ;
- **Durcissement** : la résistance augmente pendant des semaines : ≈ 65 à 70 % à 7 jours, 100 % à 28 jours (et encore un peu après) ;
- La **chaleur** et le **vent** accélèrent la prise et dessèchent le béton : d'où la cure.

## La réception et le stockage
Vérifier la **date** de fabrication, l'absence de grumeaux (ciment **éventé** par l'humidité), la **classe** imprimée et le **poids** (50 kg). Stocker sur **palettes**, sous abri sec, en piles de **10 sacs** au plus, et utiliser dans le mois (premier entré, premier sorti).

## Les autres liants
- **Chaux aérienne** (durcit avec le CO₂ de l'air) et **chaux hydraulique** : mortiers souples et respirants, enduits sur maçonneries anciennes, mortiers **bâtards** (ciment + chaux) plus maniables et moins fissurants ; **chaux vive** pour le traitement des sols ;
- **Plâtre** : gypse cuit ; prise **très rapide** (quelques minutes), intérieur seulement (craint l'eau) : staff, plaques, enduits intérieurs ;
- **Liants bitumineux** : routes, étanchéité.

> [!retenir]
> - Hydrauliques (ciment, chaux hydraulique) / aériens (chaux aérienne, plâtre).
> - CEM I à V ; classes 32,5 – 42,5 – 52,5 (N ou R).
> - Début de prise ≥ 45 – 75 min ; 65 – 70 % de la résistance à 7 jours.
> - Stocker au sec, piles de 10, utiliser dans le mois.`,
 sujet:{titre:"Choisir, réceptionner et stocker les liants d'un chantier", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes magasinier-chef d'un chantier de lycée à Odienné, loin des fournisseurs. Vous gérez les ciments et la chaux.

**Données**
- Ciments disponibles : **CEM I 52,5 R**, **CEM II/A-L 42,5 N**, **CEM II/B-L 32,5 R**, **CEM III/A 42,5 N** ;
- Consommation prévue : **25 m³** de béton dosé à 350 kg par semaine, approvisionnement toutes les **3 semaines** ;
- Une palette livrée contient des sacs durs et pleins de grumeaux, datés de **4 mois**.

### Partie A — Fabrication et composition (5 points)
1. Décrire la fabrication du ciment Portland (matières, cuisson, clinker, gypse). (3 pts)
2. Quel est le rôle du gypse ? (1 pt)
3. Que signifie « 42,5 N » ? (1 pt)

### Partie B — Choix des ciments (6 points)
4. Décoder chacun des quatre ciments (type, ajouts, classe, vitesse). (4 pts)
5. Lequel choisir pour : (a) les poteaux et dalles courants, (b) la préfabrication de poutrelles avec décoffrage rapide, (c) un ouvrage en bord de lagune, (d) les enduits et la maçonnerie ? (2 pts)

### Partie C — Prise et durcissement (3 points)
6. Distinguer prise et durcissement. Pourquoi ne faut-il jamais « rebattre » un béton qui a commencé sa prise ? (3 pts)

### Partie D — Gestion du stock (6 points)
7. Calculer le nombre de sacs par semaine et par livraison, et le nombre de piles de 10 sacs. (3 pts)
8. Que faire de la palette de sacs durcis ? Donner les règles de stockage du ciment. (3 pts)`,
  corrige:`### Partie A — Fabrication (5 pts)
1. Calcaire (≈ 80 %) et argile (≈ 20 %) broyés, cuits vers **1 450 °C** → **clinker** ; broyé très finement avec un peu de **gypse** et éventuellement des **ajouts** (calcaire, laitier, pouzzolane, cendres). *(3 pts)*
2. Le gypse **régule la prise** (sans lui, le ciment prendrait presque instantanément). *(1 pt)*
3. Résistance minimale de **42,5 MPa** à 28 jours sur mortier normalisé ; **N** : montée en résistance normale. *(1 pt)*

### Partie B — Choix (6 pts)
4. *(4 pts)*
   - **CEM I 52,5 R** : ≥ 95 % de clinker, très résistant, rapide ;
   - **CEM II/A-L 42,5 N** : clinker + 6 à 20 % de calcaire, usage courant ;
   - **CEM II/B-L 32,5 R** : 21 à 35 % de calcaire, maçonnerie et bétons peu sollicités ;
   - **CEM III/A 42,5 N** : ciment au **laitier** (36 à 65 %), chaleur faible, bonne résistance aux milieux agressifs.
5. (a) CEM II/A 42,5 ; (b) CEM I 52,5 R ; (c) CEM III/A ; (d) CEM II/B 32,5. *(2 pts)*

### Partie C — Prise (3 pts)
6. **Prise** : la pâte raidit (quelques heures) ; **durcissement** : la résistance augmente pendant des semaines (≈ 65 % à 7 j, 100 % à 28 j). Remanier ou ajouter de l'eau après le début de prise casse les cristaux en formation et affaiblit définitivement le béton. *(3 pts)*

### Partie D — Stock (6 pts)
7. 25 × 7 = **175 sacs/semaine** ; par livraison : **525 sacs** (≈ 26 t) ; **53 piles** de 10 sacs. *(3 pts)*
8. Ciment **éventé** (hydraté par l'humidité) : on le **refuse** pour les bétons de structure (au mieux pour des usages non structurels après tamisage, ou on le jette). Règles : sur **palettes**, à l'abri de la pluie et de l'humidité du sol, piles de **10 sacs** maximum, **premier entré, premier sorti**, durée de stockage limitée (≈ 1 mois sur chantier). *(3 pts)*

> [!attention] Erreurs à éviter
> - Utiliser un ciment à grumeaux pour un poteau.
> - Stocker les sacs à même la dalle ou la terre.
> - Choisir un ciment uniquement sur son prix sans regarder sa classe.`},
 exercices:[
  {t:"Lire une désignation", d:1, e:`Expliquer les désignations : a) CEM I 52,5 R ; b) CEM II/A-P 42,5 N ; c) CEM III/A 32,5 N. Lequel choisir pour des poutres préfabriquées décoffrées le lendemain ? pour un radier massif ?`, c:`a) Ciment Portland pur (≥ 95 % de clinker), classe 52,5, à durcissement **rapide** ;
b) Portland composé à 6 – 20 % de **pouzzolane**, classe 42,5, durcissement normal ;
c) Ciment de **haut fourneau** (riche en laitier), 32,5, durcissement normal.
Préfabrication décoffrée le lendemain : **CEM I 52,5 R**. Radier massif : **CEM III** (moins de chaleur d'hydratation, donc moins de fissures thermiques).`},
  {t:"Commande et stockage", d:1, e:`Un chantier coulera 30 m³ de béton dosé à 350 kg/m³ dans le mois. Calculer le nombre de sacs, le tonnage et le nombre de piles de 10 sacs à prévoir dans le magasin.`, c:`Sacs : 30 × 7 = **210 sacs** ; tonnage : 210 × 50 = **10,5 t** ; piles : 210 / 10 = **21 piles**, sur palettes, sous abri. On peut aussi fractionner les livraisons pour limiter le stock.`},
  {t:"Ciment éventé", d:2, e:`À l'ouverture de plusieurs sacs stockés 3 mois dans un local humide, le ciment contient des grumeaux durs qui ne s'écrasent pas entre les doigts. Peut-on l'utiliser pour des poteaux ? Expliquer.`, c:`Non. Les grumeaux sont du ciment déjà **hydraté** par l'humidité de l'air : il ne participera plus à la résistance. La résistance du béton serait fortement réduite. On peut au mieux utiliser ce ciment (tamisé) pour des ouvrages non structurels (béton de propreté, scellements simples) ; pour la structure, on utilise du ciment frais.`},
  {t:"Mortier bâtard", d:2, e:`Un enduit sur mur ancien est réalisé au mortier bâtard dosé à 150 kg de ciment et 150 kg de chaux hydraulique par m³ de sable. Pour 2 m³ de sable, combien de sacs de ciment (50 kg) et de sacs de chaux (25 kg) ? Pourquoi ce choix plutôt qu'un mortier de ciment pur ?`, c:`Ciment : 2 × 150 = 300 kg → **6 sacs** ; chaux : 2 × 150 = 300 kg → **12 sacs** de 25 kg.
Le mortier bâtard est plus **souple** et plus **perméable à la vapeur** : il suit les mouvements du mur ancien et laisse sortir l'humidité, au lieu de se fissurer ou de piéger l'eau comme un enduit de ciment pur trop rigide.`},
  {t:"Prise par temps chaud", d:2, e:`Un béton est fabriqué à 11 h par 34 °C. Le début de prise du ciment est de 75 min en laboratoire à 20 °C, mais la chaleur le réduit d'environ moitié. Jusqu'à quelle heure faut-il l'avoir mis en place et vibré ? Proposer deux précautions.`, c:`Début de prise estimé : ≈ 75 / 2 ≈ 40 min → mise en place et vibration **avant 11 h 40 environ**.
Précautions : bétonner **tôt le matin** ou en fin de journée ; mouiller les coffrages et les granulats, stocker l'eau à l'ombre ; utiliser un **retardateur de prise** ; ne jamais rajouter d'eau à un béton qui commence à raidir ; démarrer la **cure** dès la fin du talochage.`}
 ],
 quiz:[
  {q:"Le gypse est ajouté au clinker pour :", o:["Régler la prise","Colorer le ciment","Augmenter le poids","Rien"], r:0, e:"Régulateur de prise."},
  {q:"Dans « CEM II 42,5 R », 42,5 désigne :", o:["La résistance minimale à 28 jours en MPa","La température de cuisson","Le poids du sac","Le pourcentage d'ajouts"], r:0, e:"Sur mortier normalisé."},
  {q:"Un liant hydraulique :", o:["Durcit même sous l'eau","Ne durcit qu'à l'air","Ne durcit jamais","Est toujours du plâtre"], r:0, e:"Ciment, chaux hydraulique."},
  {q:"Le plâtre s'utilise :", o:["À l'intérieur, à l'abri de l'eau","En fondation","En bord de mer exposé","Dans les réservoirs"], r:0, e:"Il craint l'eau."},
  {q:"Hauteur maximale conseillée d'une pile de sacs de ciment :", o:["10 sacs","50 sacs","2 sacs","Illimitée"], r:0, e:"Éviter le tassement et l'éventement."}
 ]},
{id:"mat-4", niv:1, titre:"Mortiers, enduits et agglos", duree:55, contenu:`## Les mortiers
Mortier = **liant + sable + eau** (sans gravier). Ses qualités : maniabilité, adhérence, résistance adaptée au support (un mortier plus dur que les blocs qu'il lie les fait fissurer).
| Usage | Dosage (kg de ciment par m³ de sable) |
|---|---|
| Mortier de pose des agglos | 250 à 300 kg |
| Chape | 300 à 400 kg |
| Enduit : gobetis (accrochage) | 500 kg |
| Enduit : corps d'enduit | 350 à 400 kg |
| Enduit : finition | 300 à 350 kg |
| Scellements, joints | 400 à 500 kg |
En pratique, 1 m³ de sable donne environ 1 m³ de mortier (les grains de ciment remplissent une partie des vides).
> [!exemple] Mortier de pose
> 0,60 m³ de mortier dosé à 300 kg/m³ : ciment 0,60 × 300 = **180 kg = 3,6 sacs** ; sable ≈ **0,60 m³** ; eau ≈ 100 à 120 L selon l'humidité du sable.

## Les enduits extérieurs en trois couches
1. **Gobetis** : mortier riche et fluide, projeté (3 à 5 mm), il crée l'accrochage ;
2. **Corps d'enduit** : dressé à la règle (10 à 15 mm), il assure la planéité et l'imperméabilité ;
3. **Finition** : plus maigre (5 mm environ), aspect taloché, lissé, gratté ou tyrolien.
Règle : chaque couche est **moins dosée** que la précédente (pour éviter les fissures).

## Les agglos (parpaings)
Blocs en béton vibré et compressé : creux de **10, 15, 20** cm, pleins de 15 ou 20. Format courant 40 × 20 cm → **12,5 agglos par m²**.
- **Fabrication** : béton maigre « terre humide » (environ **30 à 40 agglos creux de 15 par sac**), sable propre, peu d'eau, bonne vibration ou compression ; au-delà de 45 agglos par sac, ils deviennent friables ;
- **Cure** : arroser 2 fois par jour pendant **7 jours**, à l'ombre ; utiliser après 14 à 28 jours ;
- **Contrôle** : dimensions régulières, arêtes nettes, pas d'effritement à l'ongle ; un agglo sec qui tombe à plat d'environ 1 m sur un sol dur ne doit pas casser ; en laboratoire, résistance d'au moins **4 MPa** sur la section brute (classe B40) pour une maçonnerie porteuse.
> [!exemple] Essai d'un agglo creux de 15
> Section brute : 40 × 20 cm = 80 000 mm² ; pour la classe B40, la charge de rupture doit atteindre 4 × 80 000 = **320 kN**. Un agglo qui casse à 280 kN n'offre que **3,5 MPa** : il ne convient pas pour une maçonnerie porteuse.

## La maçonnerie
Humidifier les agglos par temps chaud, joints de 1 à 1,5 cm bien garnis et décalés, monter au cordeau, contrôler aplomb et niveau, ne pas monter plus de 1,20 à 1,50 m par jour.

> [!retenir]
> - Mortier de pose 250 – 300 kg/m³ ; enduit : gobetis 500, corps 350 – 400, finition 300 – 350.
> - 12,5 agglos/m² ; 30 à 40 agglos par sac ; 7 jours d'arrosage.
> - B40 : 4 MPa sur section brute (320 kN pour un agglo de 40 × 20).`,
 sujet:{titre:"Mortiers, enduits et agglos : dosages, quantités et contrôle de résistance", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un centre de santé à Séguéla, vous préparez les mortiers, contrôlez une briqueterie locale d'agglos et commandez le ciment des enduits.

**Données**
- Mortier de pose des agglos : **0,85 m³** dosé à **300 kg/m³** ;
- Enduit trois couches sur **120 m²** : gobetis **0,004 m³/m²** dosé à **500** ; corps d'enduit **0,012 m³/m²** dosé à **400** ; finition **0,005 m³/m²** dosée à **330 kg/m³** ;
- Fabrication des agglos creux de 15 : **35 agglos par sac** ;
- Essai de 3 agglos creux de 15 (section brute **40 × 20 cm**) : ruptures à **345 kN**, **298 kN**, **336 kN** ; classe B40 exigée : **moyenne ≥ 4 MPa** et aucune valeur **< 3,5 MPa**.

### Partie A — Mortiers (6 points)
1. Donner le dosage usuel pour : pose d'agglos, chape, gobetis, corps d'enduit, scellements. (3 pts)
2. Calculer le ciment et le sable du mortier de pose. (3 pts)

### Partie B — Enduits (5 points)
3. Décrire le rôle de chaque couche de l'enduit. (2 pts)
4. Calculer le ciment nécessaire pour les 120 m² et le volume de sable. (3 pts)

### Partie C — Agglos (9 points)
5. Combien de sacs pour fabriquer 1 000 agglos ? Que risque-t-on à fabriquer 50 agglos par sac ? (3 pts)
6. Calculer la résistance de chaque agglo et la moyenne. Le lot est-il accepté en classe B40 ? (4 pts)
7. Quelle cure appliquer aux agglos et après combien de temps les utiliser ? (2 pts)`,
  corrige:`### Partie A — Mortiers (6 pts)
1. Pose d'agglos **250 à 300** ; chape **300 à 400** ; gobetis **500** ; corps d'enduit **350 à 400** ; scellements **400 à 500 kg/m³**. *(3 pts)*
2. Ciment : 0,85 × 300 = **255 kg = 5,1 sacs** (6 sacs) ; sable ≈ **0,85 m³** (1 m³ de sable donne environ 1 m³ de mortier). *(3 pts)*

### Partie B — Enduits (5 pts)
3. **Gobetis** : accrochage (mortier riche, projeté) ; **corps d'enduit** : dressage, planéité, imperméabilité ; **finition** : aspect (taloché, lissé, gratté), plus maigre pour éviter les fissures. *(2 pts)*
4. Par m² : 0,004 × 500 + 0,012 × 400 + 0,005 × 330 = 2 + 4,8 + 1,65 = **8,45 kg** → 120 m² : **1 014 kg ≈ 20,3 → 21 sacs** ; sable : 120 × 0,021 = **2,52 m³**. *(3 pts)*

### Partie C — Agglos (9 pts)
5. 1 000 / 35 = **28,6 → 29 sacs**. À 50 agglos par sac, le béton est trop maigre : agglos **friables**, faible résistance, forte absorption. *(3 pts)*
6. Section 80 000 mm² : **4,31 ; 3,73 ; 4,20 MPa** ; moyenne **4,08 MPa** ≥ 4 ✔ et minimum 3,73 ≥ 3,5 ✔ → **accepté** (de justesse : surveiller la fabrication). *(4 pts)*
7. **Arroser 2 fois par jour pendant 7 jours**, à l'ombre ; utiliser après **14 à 28 jours**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser le même mortier maigre pour tout (gobetis compris).
> - Accepter des agglos sur leur aspect sans essai pour une maçonnerie porteuse.
> - Laisser sécher les agglos au soleil dès le démoulage.`},
 exercices:[
  {t:"Ciment d'un enduit trois couches", d:2, e:`Façade de 100 m² : gobetis de 3 mm dosé à 500 kg/m³, corps d'enduit de 15 mm dosé à 350 kg/m³, finition de 5 mm dosée à 300 kg/m³. Calculer le ciment nécessaire.`, c:`Par m² : 0,003 × 500 + 0,015 × 350 + 0,005 × 300 = 1,5 + 5,25 + 1,5 = **8,25 kg**.
Pour 100 m² : **825 kg = 16,5 sacs** (17 sacs, plus les pertes).`},
  {t:"Essai d'agglos", d:2, e:`Trois agglos creux de 15 (40 × 20 cm) sont écrasés : 305 kN, 342 kN et 298 kN. Calculer les résistances et la moyenne. Les agglos sont-ils de classe B40 ?`, c:`Résistances : 305 000 / 80 000 = **3,81 MPa** ; 342 000 / 80 000 = **4,28 MPa** ; 298 000 / 80 000 = **3,73 MPa**.
Moyenne : **3,94 MPa** < 4 MPa → **non conformes** B40 (deux agglos sur trois sont sous 4 MPa). Augmenter le dosage (moins d'agglos par sac), améliorer la vibration et la cure.`},
  {t:"Fabrication d'agglos", d:1, e:`On doit fabriquer 2 000 agglos creux de 15 à raison de 35 agglos par sac. Combien de sacs ? Quelle durée de cure et à partir de quand peut-on les poser ?`, c:`Sacs : 2 000 / 35 = 57,1 → **58 sacs**.
Cure : arrosage 2 fois par jour pendant **7 jours**, à l'ombre ; pose après **14 à 28 jours** de séchage.`},
  {t:"Transport d'agglos", d:2, e:`Un agglo creux de 15 (40 × 20 × 15 cm) a 45 % de vides ; son béton a une masse volumique de 2 200 kg/m³. Calculer sa masse, puis le nombre d'agglos qu'un camion de 7 t peut transporter.`, c:`Volume extérieur : 0,40 × 0,20 × 0,15 = 0,012 m³ ; volume de matière : 0,012 × 0,55 = 0,0066 m³.
Masse : 0,0066 × 2 200 = **14,5 kg** ; camion : 7 000 / 14,5 = **482 agglos**.`},
  {t:"Mortier trop riche", d:2, e:`Un maçon monte des agglos de qualité moyenne avec un mortier dosé à 500 kg/m³ « pour que ce soit plus solide ». Est-ce une bonne idée ?`, c:`Non : un mortier **plus rigide** que les blocs concentre les déformations dans les agglos, qui se **fissurent** ; il est aussi plus cher et **retire** davantage (fissures dans les joints). Le mortier de pose doit être adapté au bloc : **250 à 300 kg/m³** suffisent ; la résistance du mur dépend surtout de la qualité des agglos et des chaînages.`}
 ],
 quiz:[
  {q:"Un mortier se compose de :", o:["Liant, sable et eau","Ciment, sable, gravier et eau","Sable seul","Gravier et eau"], r:0, e:"Pas de gravier."},
  {q:"La première couche d'un enduit est :", o:["Le gobetis","La finition","La chape","L'impression"], r:0, e:"Couche d'accrochage."},
  {q:"Charge minimale de rupture d'un agglo 40 × 20 de classe B40 :", o:["320 kN","40 kN","4 kN","3 200 kN"], r:0, e:"4 MPa × 80 000 mm²."},
  {q:"Nombre d'agglos creux de 15 par sac, environ :", o:["30 à 40","5","100","200"], r:0, e:"Béton maigre mais suffisant."},
  {q:"Dans un enduit, chaque couche est :", o:["Moins dosée que la précédente","Plus dosée","Identique","Sans ciment"], r:0, e:"Limiter les fissures."}
 ]},
{id:"mat-14", niv:1, titre:"La terre, la latérite et les matériaux locaux", duree:50, contenu:`## Des ressources abondantes
La Côte d'Ivoire dispose de matériaux locaux variés : **latérites** et **graveleux latéritiques**, **argiles**, **granites** (carrières de concassés), **sables** de rivière et de lagune, **bois** tropicaux, **bambou**. Les valoriser réduit les coûts, les importations et l'empreinte carbone.

## La latérite
Sol rouge, riche en oxydes de fer et d'aluminium, issu de l'altération des roches sous climat tropical. Selon sa composition :
- **graveleux latéritique** : excellent matériau de remblai, de couche de forme et de couche de fondation routière (après contrôle Proctor/CBR) ;
- **latérite fine** : terre à BTC ;
- **cuirasse** : roche latéritique dure, parfois taillée en blocs.
On la contrôle par la granulométrie, les limites d'Atterberg et l'essai CBR (voir Géotechnique).

## La brique de terre comprimée (BTC)
Terre tamisée, **ni trop argileuse ni trop sableuse** (on fait des essais), mélangée à **5 à 8 % de ciment** (stabilisation), humidifiée, comprimée dans une presse, puis **séchée à l'ombre** et arrosée pendant plusieurs jours.
- Résistance à sec : **2 à 6 MPa** selon la terre, le dosage et la compression ;
- Bon confort thermique et hygrométrique, bel aspect, peu de ciment ;
- Points faibles : sensible à l'eau (protéger par un **soubassement**, des **débords** de toiture et un enduit ou un traitement hydrofuge).
> [!exemple] Essai d'une BTC de 29,5 × 14 cm
> Section 29,5 × 14 = 413 cm² = 41 300 mm² ; rupture à 165 kN → σ = 165 000 / 41 300 = **4,0 MPa** : suffisant pour les murs porteurs d'une maison.

## Les autres matériaux de terre
- **Briques de terre cuite** (pleines, creuses) et **tuiles** : argile cuite vers 900 à 1 000 °C ; résistantes, durables, bons isolants (briques creuses) ;
- **Adobe** (brique de terre crue moulée) et **banco** (terre et paille) : traditionnels, très économiques, mais fragiles à l'eau.

## Les pierres
**Granite** : moellons pour soubassements et murs de soutènement, pierres cassées pour hérissons, gabions, enrochements ; **concassés** pour les bétons. Les pierres doivent être saines (sans fissures ni altération).

## Le bambou
Très résistant en traction, léger, à croissance rapide ; utilisé pour les structures légères, échafaudages, clôtures, coffrages. Il doit être **traité** (insectes, champignons) et protégé de l'humidité.

> [!retenir]
> - Graveleux latéritique : remblais et chaussées (contrôle Proctor, CBR).
> - BTC : terre + 5 à 8 % de ciment, comprimée ; 2 à 6 MPa ; à protéger de la pluie.
> - Terre cuite, pierres, bambou : matériaux locaux durables bien employés.`,
 sujet:{titre:"Terre, latérite et BTC : choisir la terre, stabiliser et contrôler les briques", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une coopérative de Katiola veut produire des **briques de terre comprimée (BTC)** pour une école. Vous l'accompagnez.

**Données**
- Test du bocal (sédimentation) sur la terre du site : graviers **15 %**, sables **50 %**, limons **17 %**, argiles **18 %** ;
- BTC de **29,5 × 14 × 9,5 cm**, masse **7,5 kg** ; stabilisation à **7 %** de ciment (en masse) ;
- Essai de compression d'une BTC : rupture à **150 kN** sur la face 29,5 × 14 cm ;
- **31 BTC par m²** de mur ; murs de l'école : **180 m²**.

### Partie A — Les matériaux en terre (5 points)
1. Citer trois matériaux de construction à base de terre et la latérite ; leurs usages. (3 pts)
2. Avantages et limites des BTC. (2 pts)

### Partie B — Choix de la terre (5 points)
3. Interpréter le test du bocal. La terre convient-elle (argile idéale ≈ 10 à 25 %) ? (3 pts)
4. Que faire d'une terre trop argileuse ? D'une terre trop sableuse ? (2 pts)

### Partie C — Production (6 points)
5. Calculer le ciment par BTC et le nombre de BTC par sac de 50 kg. (3 pts)
6. Calculer le nombre de BTC et de sacs pour les murs de l'école. (3 pts)

### Partie D — Contrôle (4 points)
7. Calculer la résistance de la BTC. Convient-elle pour des murs porteurs (≥ 2 à 4 MPa selon les charges) ? (2 pts)
8. Décrire la cure et le séchage des BTC. (2 pts)`,
  corrige:`### Partie A — Matériaux (5 pts)
1. **BTC** (murs porteurs), **adobe** (briques crues moulées), **pisé / banco** (terre damée ou modelée), **briques et tuiles cuites** ; **latérite** : graveleux pour remblais, couches de chaussée, et terre de fabrication des BTC. *(3 pts)*
2. Avantages : matériau local, **peu de ciment**, bon confort thermique (inertie), coût réduit, emplois locaux. Limites : sensibles à l'**eau** (soubassement et débords indispensables), contrôle de qualité nécessaire, résistance plus faible que le béton. *(2 pts)*

### Partie B — Terre (5 pts)
3. Argiles 18 % (dans 10 – 25 %) et beaucoup de sable : terre **sablo-argileuse**, bien adaptée aux BTC stabilisées au ciment. *(3 pts)*
4. Trop argileuse : ajouter du **sable** (et stabiliser plutôt à la chaux) — sinon retrait et fissures ; trop sableuse : ajouter de la terre argileuse, sinon les briques s'effritent. *(2 pts)*

### Partie C — Production (6 pts)
5. 7,5 × 0,07 = **0,525 kg** de ciment par BTC → 50 / 0,525 = **95 BTC par sac**. *(3 pts)*
6. 180 × 31 = **5 580 BTC** (+ 3 % de casse ≈ 5 750) → 5 750 × 0,525 = 3 019 kg → **61 sacs** environ. *(3 pts)*

### Partie D — Contrôle (4 pts)
7. Section 295 × 140 = 41 300 mm² → σ = 150 000 / 41 300 = **3,6 MPa** : convient pour les murs porteurs d'une école de plain-pied. *(2 pts)*
8. Stocker **à l'ombre**, sous bâche, humidifier pendant **7 à 14 jours** (cure du ciment), puis séchage lent ; utiliser après **28 jours**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Poser des BTC au contact du sol sans soubassement.
> - Faire sécher les briques au soleil : fissures et ciment non hydraté.
> - Choisir la terre sans essai.`},
 exercices:[
  {t:"Résistance de BTC", d:1, e:`Deux BTC de 29,5 × 14 cm se rompent à 165 kN (essai à sec) et à 99 kN (après 24 h d'immersion). Calculer les deux résistances et le rapport humide/sec. Commenter.`, c:`Section : 41 300 mm².
Sèche : 165 000 / 41 300 = **4,0 MPa** ; humide : 99 000 / 41 300 = **2,4 MPa**.
Rapport : 2,4 / 4,0 = **0,60** : la BTC perd 40 % de sa résistance mouillée : il faut la **protéger de l'eau** (soubassement, débords, enduit) et, si nécessaire, augmenter la stabilisation.`},
  {t:"Production de BTC", d:2, e:`Un mur de 120 m² est construit en BTC (31 briques par m²). La presse produit 800 briques par jour. Chaque BTC (0,00372 m³) contient une terre de 1 900 kg/m³ stabilisée à 6 % de ciment. Calculer le nombre de briques, la durée de production et le ciment nécessaire.`, c:`Briques : 120 × 31 = **3 720** (+ 3 % de casse ≈ 3 830).
Durée : 3 720 / 800 = **4,7 jours** de presse (5 jours).
Ciment : 3 720 × 0,00372 × 1 900 × 0,06 = **1 578 kg ≈ 32 sacs**.`},
  {t:"Choisir un matériau de mur", d:2, e:`Comparer, pour une maison de plain-pied en zone rurale, les agglos de ciment et les BTC selon : coût, ciment consommé, confort thermique, sensibilité à l'eau, compétence de la main-d'œuvre.`, c:`- **Coût** : BTC souvent moins chères si la terre est sur place ; agglos plus chers mais disponibles partout.
- **Ciment** : BTC ≈ 16 kg/m² de mur ; agglos de 15 ≈ 29 kg/m² (hors mortier).
- **Confort** : BTC meilleure (inertie, régulation de l'humidité).
- **Eau** : BTC plus sensible : soubassement, débords et enduit obligatoires.
- **Main-d'œuvre** : BTC demande une formation (choix de la terre, presse, cure) ; agglos connus de tous les maçons.`},
  {t:"Graveleux latéritique", d:2, e:`Pour une couche de fondation de route, on dispose d'un graveleux latéritique dont l'essai CBR donne 45 (à 95 % de l'OPM) et d'un autre à 18. Lequel convient (exigence courante : CBR ≥ 30) ? Que faire du second ?`, c:`Le premier (**CBR 45**) convient pour la couche de fondation.
Le second (CBR 18) ne convient pas en fondation : on peut l'utiliser en **couche de forme** ou en remblai, ou l'**améliorer au ciment** (2 à 4 %) après essais pour atteindre la portance demandée.`},
  {t:"Protéger un mur en terre", d:1, e:`Citer quatre dispositions constructives pour protéger un mur en BTC ou en adobe de l'eau.`, c:`1. **Soubassement** en agglos pleins, pierres ou béton (≥ 30 cm au-dessus du sol) ;
2. **Débords de toiture** généreux (≥ 50 – 60 cm) ;
3. **Enduit** compatible (chaux, terre stabilisée) ou traitement hydrofuge ;
4. **Gouttières** et évacuation des eaux loin du pied de mur, trottoir en pente.`}
 ],
 quiz:[
  {q:"La latérite doit sa couleur rouge :", o:["Aux oxydes de fer","Au ciment","Au bois","À l'eau de mer"], r:0, e:"Altération tropicale."},
  {q:"Les BTC sont stabilisées avec environ :", o:["5 à 8 % de ciment","50 % de ciment","Rien","20 % de chaux vive"], r:0, e:"Peu de ciment."},
  {q:"Le principal ennemi des murs en terre est :", o:["L'eau","Le soleil","Le vent sec","Le froid"], r:0, e:"Protection indispensable."},
  {q:"Le graveleux latéritique sert surtout :", o:["En remblais et couches de chaussée","En vitrage","En peinture","En isolant"], r:0, e:"Après contrôle CBR."},
  {q:"Le bambou est très résistant :", o:["En traction","En compression sous l'eau","Au feu","Aux termites sans traitement"], r:0, e:"Fibres longues."}
 ]},
{id:"mat-3", niv:2, titre:"Le béton : composition, béton frais et béton durci", duree:60, contenu:`## Les constituants
**Ciment + eau** (la pâte, qui colle) + **sable + gravier** (le squelette) + éventuellement **adjuvants** et **additions**. La pâte enrobe les grains et remplit les vides.

## Les dosages courants pour 1 m³
| Usage | Ciment | Sable | Gravier | Eau |
|---|---|---|---|---|
| Béton de propreté | 150 kg (3 sacs) | 400 L | 800 L | ≈ 120 L |
| Gros béton, dallage | 250 à 300 kg | 400 L | 800 L | ≈ 150 L |
| **Béton armé** courant | **350 kg (7 sacs)** | **400 L** | **800 L** | **≈ 175 L** |
| Béton armé exposé (bord de mer, réservoir) | 400 kg | 380 L | 800 L | ≈ 180 L |

## Le béton frais
- **Ouvrabilité** (maniabilité) : aptitude à être mis en place et compacté ; mesurée au **cône d'Abrams** (affaissement) :
| Classe | Affaissement | Usage |
|---|---|---|
| S1 (ferme) | 1 à 4 cm | Bétons damés, voiries |
| S2 (plastique) | 5 à 9 cm | Béton vibré courant |
| S3 (très plastique) | 10 à 15 cm | Béton pompé, très ferraillé |
| S4 (fluide) | 16 à 21 cm | Avec superplastifiant |
| S5 | ≥ 22 cm | Bétons très fluides |
- **Ségrégation** : séparation des gros grains et de la pâte (chute trop haute, béton trop fluide) → nids de cailloux ;
- **Ressuage** : remontée d'eau en surface (excès d'eau) → surface faible et poussiéreuse ;
- **Prise** : le béton raidit au bout de 1 à 3 heures (plus vite à la chaleur).

## Le béton durci
- **Résistance à la compression** fc28 à 28 jours, sur cylindres 16 × 32 cm ; classes **C20/25, C25/30, C30/37** (valeur sur cylindre / sur cube) ;
- Évolution avec l'âge (règle BAEL pour fc28 ≤ 40 MPa) :
$$ fcj = j / (4,76 + 0,83 j) × fc28
- **Résistance à la traction** : environ 10 fois plus faible : ft28 = 0,6 + 0,06 fc28 (2,1 MPa pour 25 MPa) ;
- **Retrait** : le béton se raccourcit en séchant (≈ 2 à 4 × 10⁻⁴) → fissures si on l'en empêche : joints de retrait, cure, armatures ;
- **Fluage** : déformation lente sous charge permanente (flèches qui augmentent avec le temps).

> [!exemple] Résistances au jeune âge (fc28 = 25 MPa)
> fc7 = 7 / (4,76 + 5,81) × 25 = **16,6 MPa** ; fc14 = 14 / (4,76 + 11,62) × 25 = **21,4 MPa**.

## Le rôle décisif de l'eau
Le ciment n'a besoin que d'environ **25 %** de son poids d'eau pour s'hydrater ; le reste sert à la maniabilité mais laisse des **pores** en s'évaporant. Plus **E/C** est élevé, plus le béton est **poreux**, **moins résistant** et **moins durable**. Pour le béton armé : **E/C ≈ 0,45 à 0,55**.

> [!retenir]
> - Béton armé courant : 350 kg de ciment, 400 L de sable, 800 L de gravier, ≈ 175 L d'eau.
> - Cône d'Abrams : S2 = 5 à 9 cm pour un béton vibré.
> - fcj = j/(4,76 + 0,83 j) × fc28 ; traction ≈ fc/10.
> - E/C bas = béton résistant et durable.`,
 sujet:{titre:"Le béton : dosages, consistance, résistance au jeune âge et rôle de l'eau", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un béton de classe **fc28 = 30 MPa** est prévu pour les poteaux d'un immeuble à Abidjan. Vous expliquez son comportement au chef de chantier.

**Données**
- Évolution de la résistance (BAEL) : fcj = j / (4,76 + 0,83 j) × fc28 ;
- Bolomey : fm = G × σ'c × (C/E − 0,5), avec G = **0,5**, σ'c = **45 MPa** ;
- Formule prévue : C = **350 kg**, E = **175 L** ; un ouvrier rajoute **35 L** d'eau par m³ « pour que ça coule mieux » ;
- Traction : ft28 = 0,6 + 0,06 fc28.

### Partie A — Composition (5 points)
1. Donner la composition d'un béton armé courant pour 1 m³ (ciment, sable, gravier, eau). (2 pts)
2. Quel est le rôle de chaque constituant ? (3 pts)

### Partie B — Béton frais (4 points)
3. Décrire l'essai au cône d'Abrams et donner les classes S1 à S4. Quelle classe pour un poteau vibré ? (4 pts)

### Partie C — Béton durci (7 points)
4. Calculer la résistance à 3, 7 et 14 jours. (3 pts)
5. Le coffrage d'une poutre ne peut être retiré qu'à **15 MPa** (avec étais de sécurité) : à partir de quel jour, environ ? (2 pts)
6. Calculer ft28. (2 pts)

### Partie D — L'eau (4 points)
7. Calculer la résistance moyenne prévue avec 175 L puis avec 210 L d'eau. Conclure. (4 pts)`,
  corrige:`### Partie A — Composition (5 pts)
1. **350 kg** de ciment (7 sacs), **400 L** de sable, **800 L** de gravier, **≈ 175 L** d'eau. *(2 pts)*
2. **Ciment** + eau = pâte qui durcit et colle les grains ; **sable** : remplit les vides du gravier ; **gravier** : squelette résistant et économique ; **eau** : hydrate le ciment et donne la maniabilité. *(3 pts)*

### Partie B — Béton frais (4 pts)
3. On remplit le cône en 3 couches piquées 25 fois, on le soulève et on mesure l'**affaissement**. S1 : 1 – 4 cm (ferme) ; S2 : 5 – 9 (plastique) ; S3 : 10 – 15 (très plastique) ; S4 : 16 – 21 (fluide, avec superplastifiant). Poteau vibré : **S2 à S3**. *(4 pts)*

### Partie C — Béton durci (7 pts)
4. *(3 pts)*
   - fc3 = 3 / (4,76 + 2,49) × 30 = **12,4 MPa** ;
   - fc7 = 7 / (4,76 + 5,81) × 30 = **19,9 MPa** ;
   - fc14 = 14 / (4,76 + 11,62) × 30 = **25,6 MPa**.
5. 15 MPa est atteint entre 3 et 7 jours : $$ j / (4,76 + 0,83 j) = 0,5 → j = 4,76 / (2 − 0,83) ≈ 4,1 jours
   → à partir du **5e jour** (avec étais de sécurité). *(2 pts)*
6. ft28 = 0,6 + 0,06 × 30 = **2,4 MPa** (12 fois moins qu'en compression). *(2 pts)*

### Partie D — L'eau (4 pts)
7. E = 175 L : C/E = 2,00 → fm = 0,5 × 45 × 1,50 = **33,8 MPa** ✔ ; E = 210 L : C/E = 1,67 → fm = 0,5 × 45 × 1,17 = **26,3 MPa** < 30 ✘ : **35 L d'eau en plus font perdre 7,5 MPa** et rendent le béton non conforme. On utilise un **plastifiant** si l'on veut plus de fluidité. *(4 pts)*

> [!attention] Erreurs à éviter
> - Confondre prise (quelques heures) et durcissement (semaines).
> - Rajouter de l'eau sur le chantier.
> - Décoffrer les fonds de poutres sans étais de sécurité.`},
 exercices:[
  {t:"Décoffrer au bon moment", d:2, e:`Une dalle en béton fc28 = 25 MPa peut être décoffrée quand le béton atteint 15 MPa. À partir de quel âge ? Combien vaut fc7 ?`, c:`On cherche j tel que j / (4,76 + 0,83 j) = 15 / 25 = 0,6 → j = 0,6 × 4,76 / (1 − 0,6 × 0,83) = **5,7 jours** → décoffrage possible à partir de **6 jours** (avec étais de sécurité), si la cure a été correcte.
fc7 = **16,6 MPa**.`},
  {t:"Classer des affaissements", d:1, e:`Mesures au cône : a) 3 cm ; b) 8 cm ; c) 12 cm ; d) 18 cm. Donner la classe et un usage adapté.`, c:`a) **S1** : béton ferme (voirie, béton damé) ;
b) **S2** : béton plastique vibré courant (poteaux, poutres, dalles) ;
c) **S3** : béton très plastique (pompage, zones très ferraillées) ;
d) **S4** : béton fluide, acceptable seulement s'il est obtenu par un **superplastifiant** et non par ajout d'eau.`},
  {t:"Rapport E/C", d:1, e:`Un béton contient 350 kg de ciment et 190 L d'eau totale. Calculer E/C. Est-il adapté à un béton armé ? Et si l'on ajoute 30 L d'eau sur le chantier ?`, c:`E/C = 190 / 350 = **0,54** : acceptable (0,45 à 0,55).
Avec 30 L de plus : 220 / 350 = **0,63** : béton plus poreux, nettement moins résistant (plusieurs MPa de perte) et moins durable : à proscrire.`},
  {t:"Retrait d'un dallage", d:2, e:`Un dallage de 20 m de long a un retrait de 3 × 10⁻⁴. De combien raccourcirait-il s'il était libre ? Pourquoi scie-t-on des joints de retrait tous les 4 à 5 m ?`, c:`ΔL = 20 000 × 3 × 10⁻⁴ = **6 mm**.
Empêché par le frottement sur le sol, ce raccourcissement crée des tractions qui fissurent le dallage au hasard. Les **joints sciés** tous les 4 à 5 m créent des points faibles où la fissure se produit de façon **rectiligne et cachée**.`},
  {t:"Diagnostiquer un béton frais", d:2, e:`Après coulage d'un voile, on constate une eau claire en surface (1 cm) et, au décoffrage, des nids de cailloux en pied. Causes probables et remèdes ?`, c:`Eau en surface : **ressuage** dû à un excès d'eau ou à un sable pauvre en fines. Nids de cailloux : **ségrégation** (béton lâché de trop haut dans le voile, trop fluide) et **vibration insuffisante**.
Remèdes : respecter E/C, utiliser un plastifiant, couler par couches de 30 à 50 cm avec une goulotte ou un tube (chute ≤ 1,50 m), vibrer chaque couche ; réparer les nids au mortier de réparation après purge.`}
 ],
 quiz:[
  {q:"Pour un béton armé courant, on dose le ciment à :", o:["350 kg/m³","150 kg/m³","50 kg/m³","800 kg/m³"], r:0, e:"7 sacs."},
  {q:"Un affaissement de 7 cm correspond à la classe :", o:["S2","S1","S4","S5"], r:0, e:"Béton plastique."},
  {q:"La résistance à la traction du béton est environ :", o:["10 fois plus faible qu'en compression","Égale","10 fois plus forte","Nulle"], r:0, e:"D'où les aciers."},
  {q:"Le ressuage est :", o:["Une remontée d'eau en surface","Une fissure","Un type d'acier","Un adjuvant"], r:0, e:"Excès d'eau."},
  {q:"Augmenter E/C :", o:["Diminue la résistance","Augmente la résistance","Ne change rien","Accélère la cure"], r:0, e:"Plus de porosité."}
 ]},
{id:"mat-11", niv:2, titre:"L'eau de gâchage et les adjuvants", duree:45, contenu:`## L'eau de gâchage
- **Eau potable** : toujours convenable ;
- Eau de puits, de rivière : à analyser si douteuse (matières en suspension, matières organiques, sels) ;
- **Eau de mer** : **interdite pour le béton armé** (chlorures → corrosion des aciers) ;
- Eaux usées, eaux industrielles : interdites.
Il faut aussi compter l'**eau apportée par les granulats humides** (sable surtout) et la retrancher de l'eau à verser.

## Les adjuvants (NF EN 934-2)
Produits ajoutés en faible quantité (en **% du poids de ciment**) pour modifier une propriété du béton :
| Adjuvant | Effet | Dosage courant | Usage |
|---|---|---|---|
| **Plastifiant** (réducteur d'eau) | Même ouvrabilité avec 5 à 12 % d'eau en moins | 0,2 à 0,5 % | Bétons courants de qualité |
| **Superplastifiant** (haut réducteur d'eau) | Jusqu'à 20 à 30 % d'eau en moins, ou béton très fluide | 0,6 à 2 % | Bétons pompés, très ferraillés, BHP, autoplaçants |
| **Accélérateur** de prise ou de durcissement | Décoffrage plus rapide, travaux urgents | 1 à 3 % | Préfabrication, réparations |
| **Retardateur** de prise | Prolonge la maniabilité | 0,2 à 0,8 % | Climat chaud, transports longs, grands coulages |
| **Hydrofuge** de masse | Réduit l'absorption capillaire | 0,5 à 2 % | Réservoirs, soubassements, enduits |
| **Entraîneur d'air** | Microbulles d'air | 0,05 à 0,2 % | Bétons exposés au gel (rare sous les tropiques) |
On respecte la **fiche technique** du fabricant, on l'ajoute avec l'eau de gâchage (ou en fin de malaxage pour certains superplastifiants) et on fait un **essai de convenance**.

## Pourquoi un réducteur d'eau augmente la résistance
Formule de **Bolomey** : fm = G × σ'c × (C/E − 0,5) (G ≈ 0,5 ; σ'c : classe vraie du ciment, ≈ 45 MPa pour un 42,5).
> [!exemple] Effet d'un superplastifiant (1,2 % du ciment)
> Sans adjuvant : C = 350 kg, E = 190 L → C/E = 1,84 → fm ≈ 0,5 × 45 × (1,84 − 0,5) = **30,2 MPa**.
> Avec 1,2 % de superplastifiant (350 × 0,012 = **4,2 kg/m³**, soit 3,5 L à densité 1,2) et 20 % d'eau en moins : E = 152 L → C/E = 2,30 → fm ≈ **40,6 MPa**, pour la même ouvrabilité.

## La correction d'eau
> [!exemple] Granulats humides
> Composition pour 1 m³ (granulats secs) : ciment 350 kg ; eau 190 L ; sable 680 kg ; gravier 1 150 kg. Le sable contient 6 % d'eau, le gravier 1 %.
> Eau apportée : 680 × 0,06 + 1 150 × 0,01 = 40,8 + 11,5 = **52,3 L** → eau à verser : 190 − 52,3 = **≈ 138 L** ; masses humides à peser : sable 721 kg, gravier 1 162 kg.

> [!retenir]
> - Eau potable ; jamais d'eau de mer pour le béton armé.
> - Adjuvants dosés en % du ciment : plastifiants, superplastifiants, accélérateurs, retardateurs, hydrofuges.
> - Réduire l'eau = augmenter C/E = augmenter la résistance (Bolomey).
> - Toujours retrancher l'eau apportée par les granulats.`,
 sujet:{titre:"Eau de gâchage, granulats humides et superplastifiant", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une centrale à béton de chantier à San-Pédro (climat chaud, près de la mer) prépare un béton de plancher. Vous réglez l'eau et les adjuvants.

**Composition pour 1 m³ (granulats secs)** : ciment **375 kg** ; eau **185 L** ; sable **700 kg** ; gravier **1 120 kg**.
- Humidité mesurée : sable **4 %**, gravier **1,5 %** ;
- Bolomey : fm = 0,5 × 45 × (C/E − 0,5) ;
- Superplastifiant à **1 %** du poids de ciment, permettant **18 %** d'eau en moins à ouvrabilité égale.

### Partie A — L'eau de gâchage (5 points)
1. Quelles eaux peut-on utiliser ? Pourquoi l'eau de mer est-elle interdite en béton armé ? (3 pts)
2. Quels sont les deux rôles de l'eau dans le béton ? Pourquoi un excès d'eau est-il nuisible ? (2 pts)

### Partie B — Granulats humides (6 points)
3. Calculer l'eau apportée par les granulats et l'eau à verser. (3 pts)
4. Calculer les masses de sable et de gravier humides à peser. (2 pts)
5. Que se passerait-il si on ne faisait pas cette correction ? (1 pt)

### Partie C — Adjuvants (9 points)
6. Donner le rôle des adjuvants : plastifiant, superplastifiant, retardateur, accélérateur, hydrofuge. Lequel choisir par forte chaleur pour un long transport ? (4 pts)
7. Calculer la masse de superplastifiant par m³. (1 pt)
8. Calculer la résistance moyenne sans adjuvant puis avec le superplastifiant (eau réduite). Conclure. (4 pts)`,
  corrige:`### Partie A — L'eau (5 pts)
1. Eau **potable** ou eau propre analysée (sans argile, sans matières organiques, sans sels en excès). L'eau de mer apporte des **chlorures** qui font rouiller les armatures : interdite en béton armé (tolérée seulement pour certains bétons non armés). *(3 pts)*
2. **Hydrater** le ciment (≈ 25 % de son poids suffit) et donner l'**ouvrabilité**. L'eau en excès s'évapore en laissant des **pores** : résistance plus faible, retrait et fissures, durabilité réduite. *(2 pts)*

### Partie B — Granulats humides (6 pts)
3. Eau apportée : 700 × 0,04 + 1 120 × 0,015 = 28,0 + 16,8 = **44,8 L** → eau à verser : 185 − 44,8 = **140,2 L**. *(3 pts)*
4. Sable humide : 700 × 1,04 = **728 kg** ; gravier humide : 1 120 × 1,015 = **1 137 kg**. *(2 pts)*
5. Le béton recevrait près de 45 L d'eau de trop : plus fluide, **moins résistant** (et moins de granulats secs que prévu). *(1 pt)*

### Partie C — Adjuvants (9 pts)
6. **Plastifiant** : améliore la maniabilité à eau égale (ou réduit l'eau) ; **superplastifiant** : forte réduction d'eau, bétons fluides ou à hautes performances ; **retardateur** : retarde la prise (chaleur, long transport, grandes masses) ; **accélérateur** : accélère prise et durcissement (temps froid, décoffrage rapide) ; **hydrofuge** : réduit l'absorption d'eau. Par forte chaleur et long transport : **retardateur** (ou plastifiant-retardateur). *(4 pts)*
7. 375 × 0,01 = **3,75 kg/m³**. *(1 pt)*
8. Sans adjuvant : C/E = 375 / 185 = 2,03 → fm = 22,5 × 1,53 = **34,4 MPa**. Avec : E = 185 × 0,82 = 151,7 L → C/E = 2,47 → fm = 22,5 × 1,97 = **44,4 MPa** : **+ 10 MPa** à maniabilité égale, et un béton plus compact donc plus durable en bord de mer. *(4 pts)*

> [!attention] Erreurs à éviter
> - Gâcher à l'eau de mer ou à l'eau boueuse.
> - Oublier de corriger l'eau quand le sable est mouillé par la pluie.
> - Surdoser un adjuvant (retards de prise, ségrégation).`},
 exercices:[
  {t:"Dosage d'un adjuvant", d:1, e:`Un plastifiant est dosé à 0,8 % du poids de ciment ; densité 1,18. Pour 25 m³ de béton dosé à 350 kg/m³, quelle masse et quel volume d'adjuvant prévoir ?`, c:`Par m³ : 350 × 0,008 = **2,8 kg** ; pour 25 m³ : **70 kg**.
Volume : 70 / 1,18 = **59,3 L** (environ 3 bidons de 20 L).`},
  {t:"Choisir un adjuvant", d:1, e:`Quel adjuvant pour : a) un béton transporté 1 h 30 sous 35 °C ; b) des poteaux préfabriqués à démouler le lendemain ; c) un voile très ferraillé coulé à la pompe ; d) un réservoir d'eau ?`, c:`a) **Retardateur** de prise ; b) **accélérateur** de durcissement (avec un CEM I 52,5 R) ; c) **superplastifiant** ; d) **hydrofuge de masse** (en plus d'un béton compact bien vibré et d'un E/C faible).`},
  {t:"Gain de résistance", d:2, e:`Un béton de 350 kg de ciment (σ'c = 45 MPa, G = 0,5) contient 200 L d'eau. Un plastifiant permet de retirer 10 % d'eau. Calculer fm avant et après.`, c:`Avant : C/E = 350 / 200 = 1,75 → fm = 0,5 × 45 × (1,75 − 0,5) = **28,1 MPa**.
Après : E = 180 L → C/E = 1,94 → fm = 0,5 × 45 × (1,94 − 0,5) = **32,5 MPa** (+ 16 %), à ouvrabilité égale.`},
  {t:"Correction d'eau", d:2, e:`Composition sèche : ciment 350 kg ; eau 185 L ; sable 700 kg (humidité 5 %) ; gravier 1 120 kg (humidité 1,5 %). Calculer l'eau à verser et les masses humides à peser.`, c:`Eau apportée : 700 × 0,05 + 1 120 × 0,015 = 35 + 16,8 = **51,8 L** → eau à verser : 185 − 51,8 = **133,2 L**.
Masses humides : sable 700 × 1,05 = **735 kg** ; gravier 1 120 × 1,015 = **1 136,8 kg**.`},
  {t:"Eau de lagune", d:2, e:`Faute d'eau potable, un chef de chantier veut utiliser l'eau de la lagune pour gâcher le béton des poteaux d'un immeuble en bord de lagune. Que lui répondre ?`, c:`**Refuser** : l'eau de lagune est **saumâtre** (chlorures) et souvent chargée de matières organiques ; les chlorures attaquent les armatures (corrosion par piqûres), d'autant plus que l'ouvrage est déjà en ambiance agressive. Il faut faire livrer de l'eau potable (citerne) ou une eau analysée et conforme.`}
 ],
 quiz:[
  {q:"Un superplastifiant permet :", o:["De réduire fortement l'eau à ouvrabilité égale","De remplacer le ciment","De colorer le béton","De supprimer la vibration dans tous les cas"], r:0, e:"Haut réducteur d'eau."},
  {q:"L'eau de mer est interdite pour le béton armé à cause :", o:["Des chlorures","Du sable","De la température","De la couleur"], r:0, e:"Corrosion des aciers."},
  {q:"Les adjuvants se dosent en pourcentage :", o:["Du poids de ciment","Du volume d'eau","Du poids de gravier","Du volume total"], r:0, e:"Selon la fiche technique."},
  {q:"Par forte chaleur, pour un long transport, on utilise :", o:["Un retardateur de prise","Un accélérateur","Un entraîneur d'air","Rien"], r:0, e:"Prolonge la maniabilité."},
  {q:"Selon Bolomey, la résistance augmente quand :", o:["C/E augmente","E/C augmente","On ajoute de l'eau","On réduit le ciment"], r:0, e:"fm = G σ'c (C/E − 0,5)."}
 ]},
{id:"mat-12", niv:2, titre:"Le contrôle du béton sur chantier et en laboratoire", duree:50, contenu:`## Pourquoi contrôler ?
Le béton est fabriqué en partie sur le chantier, avec des variations de dosage, d'eau et de granulats. Le contrôle vérifie que la **résistance** et la **durabilité** demandées sont atteintes, et permet de réagir vite en cas de dérive.

## Les contrôles du béton frais
- **Affaissement** au cône d'Abrams à chaque livraison ou régulièrement à la bétonnière ;
- Aspect (homogénéité, ségrégation), température par temps chaud ;
- **Bons de livraison** du béton prêt à l'emploi (BPE) : classe de résistance, classe de consistance, exposition, volume, **heure de chargement** (un béton doit être mis en place dans un délai d'environ **1 h 30** après le chargement, sauf retardateur).

## Les éprouvettes
- Prélèvement au moment du coulage, moulage en **cylindres 16 × 32 cm** (ou cubes de 15 cm) en 2 ou 3 couches piquées ou vibrées ;
- Conservation 24 h à l'abri, démoulage, puis **cure dans l'eau** jusqu'à l'essai ;
- Écrasement à **7 jours** (alerte) et **28 jours** (conformité) : σ = F / A.
Fréquence courante : au moins **une série de 3 éprouvettes par journée de bétonnage et par type d'ouvrage** (et plus pour les gros volumes).

## Juger la conformité (critère simplifié de démarrage)
Pour une série de 3 résultats sur cylindres et une classe de résistance caractéristique **fck** :
- moyenne **fcm ≥ fck + 4 MPa** ;
- chaque résultat **fci ≥ fck − 4 MPa**.
> [!exemple] Béton C25/30 (fck = 25 MPa)
> Cylindres 16 × 32 (A = 20 106 mm²) rompus à 540, 495 et 560 kN → **26,9 ; 24,6 ; 27,9 MPa**.
> Moyenne : **26,4 MPa** < 25 + 4 = 29 ✘ ; chaque valeur ≥ 21 ✔.
> Le béton **n'est pas conforme** au critère de la moyenne : on informe le BET, qui vérifie l'incidence sur l'ouvrage, et on renforce le contrôle de la fabrication (dosage, eau).

## Les autres essais
- **Fendage** (traction indirecte) : ft = 2 F / (π d L) ; ex. 150 kN sur un cylindre 16 × 32 → 2 × 150 000 / (π × 160 × 320) = **1,87 MPa** ;
- **Scléromètre** : indice de rebond en surface, estimation **rapide mais approximative** (comparaisons entre zones) ;
- **Carottage** : prélèvement dans l'ouvrage durci, écrasé en laboratoire : la référence en cas de doute ;
- **Auscultation sonique** : homogénéité, détection de vides.

> [!astuce] Les causes classiques d'un mauvais résultat
> Eau ajoutée, ciment éventé ou sous-dosé (sacs comptés « à l'œil »), sable sale, éprouvettes mal confectionnées ou laissées au soleil (un mauvais prélèvement peut aussi fausser un bon béton !).

> [!retenir]
> - Frais : affaissement, aspect, bons de livraison (délai ≈ 1 h 30).
> - Durci : éprouvettes 16 × 32, essais à 7 et 28 jours, σ = F/A.
> - Conformité simplifiée : fcm ≥ fck + 4 et fci ≥ fck − 4.
> - Fendage : 2F/(πdL) ; scléromètre indicatif ; carottes en cas de doute.`,
 sujet:{titre:"Contrôle du béton : livraison, éprouvettes et conformité des résultats", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes chargé du contrôle béton sur un chantier d'hôpital à Bouaké (béton prêt à l'emploi).

**Données**
- Bon de livraison : « C25/30 — S3 — XC2 — 8 m³ — chargé à 9 h 10 » ; arrivée sur chantier à **10 h 55** ; délai maximal de mise en place : **1 h 30** après chargement ;
- Série 1 (dalle, fck = **25 MPa**) : cylindres 16 × 32 rompus à 28 jours sous **600 kN**, **620 kN**, **575 kN** ;
- Série 2 (poteaux, fck = **30 MPa**) : **640 kN**, **690 kN**, **590 kN** ;
- Critères : moyenne **fcm ≥ fck + 4** ; chaque valeur **fci ≥ fck − 4** ;
- Essai de fendage : rupture à **165 kN** sur cylindre 16 × 32 ; ft = 2 F / (π d L).

### Partie A — À la livraison (5 points)
1. Que vérifier sur le bon de livraison ? Décoder « C25/30 — S3 — XC2 ». (3 pts)
2. Le camion doit-il être accepté ? Que faire ? (2 pts)

### Partie B — Éprouvettes (4 points)
3. Décrire la confection et la conservation des éprouvettes. Combien de séries prévoir ? (3 pts)
4. Pourquoi écrase-t-on aussi à 7 jours ? (1 pt)

### Partie C — Conformité (9 points)
5. Calculer la section d'un cylindre 16 × 32 et les résistances de la série 1. Conclure. (4 pts)
6. Même travail pour la série 2. Que faire ? (4 pts)
7. Calculer la résistance au fendage. (1 pt)

### Partie D — Essais complémentaires (2 points)
8. Citer deux essais non destructifs ou semi-destructifs pour vérifier un ouvrage déjà coulé. (2 pts)`,
  corrige:`### Partie A — Livraison (5 pts)
1. Classe de résistance, consistance, exposition, volume, **heure de chargement**, formule et adjuvants, adresse et ouvrage. **C25/30** : 25 MPa sur cylindre / 30 MPa sur cube ; **S3** : affaissement 10 à 15 cm ; **XC2** : carbonatation, environnement humide rarement sec. *(3 pts)*
2. 10 h 55 − 9 h 10 = **1 h 45 > 1 h 30** : béton trop vieux (début de prise possible) → **refuser** le camion (ou ne l'accepter que pour un usage non structurel, sans ajout d'eau), et le noter. *(2 pts)*

### Partie B — Éprouvettes (4 pts)
3. Prélèvement au déchargement ; moules 16 × 32 remplis en 2 ou 3 couches piquées ou vibrées ; arasés, identifiés ; 24 h à l'abri, démoulage, **cure dans l'eau** jusqu'à l'essai ; au moins **une série de 3 par journée et par type d'ouvrage**. *(3 pts)*
4. Résultat d'**alerte** précoce (≈ 65 % de fc28 attendus) pour réagir avant que trop d'ouvrages soient coulés. *(1 pt)*

### Partie C — Conformité (9 pts)
5. A = π × 160² / 4 = **20 106 mm²** ; σ = **29,8 ; 30,8 ; 28,6 MPa** ; moyenne **29,8 ≥ 29** ✔ ; minimum 28,6 ≥ 21 ✔ → **conforme**. *(4 pts)*
6. σ = **31,8 ; 34,3 ; 29,3 MPa** ; moyenne **31,8 < 34** ✘ (chaque valeur ≥ 26 ✔) → **non conforme** : informer le BET (vérification de la structure avec la résistance réelle), essais complémentaires (carottages, scléromètre), renforcer le contrôle de fabrication. *(4 pts)*
7. ft = 2 × 165 000 / (π × 160 × 320) = **2,05 MPa**. *(1 pt)*

### Partie D — Essais (2 pts)
8. **Scléromètre** (indice de rebond), **auscultation sonique** (ultrasons), **carottage** puis écrasement, détecteur d'armatures (enrobage). *(2 pts)*

> [!attention] Erreurs à éviter
> - Laisser les éprouvettes au soleil sur le chantier.
> - Juger sur une seule éprouvette.
> - Accepter un béton hors délai en le « rafraîchissant » à l'eau.`},
 exercices:[
  {t:"Résultats d'écrasement", d:1, e:`Trois cylindres 16 × 32 d'un béton C25/30 se rompent à 610, 655 et 590 kN. Calculer les résistances et conclure sur la conformité (critère simplifié).`, c:`A = 20 106 mm² → **30,3 ; 32,6 ; 29,3 MPa**.
Moyenne : **30,7 MPa** ≥ 29 ✔ ; chaque valeur ≥ 21 ✔ → **conforme**.`},
  {t:"Alerte à 7 jours", d:2, e:`Pour un béton visé à fc28 = 25 MPa, les éprouvettes à 7 jours donnent 12,5 MPa en moyenne. Quelle résistance attendait-on à 7 jours (fcj = j/(4,76 + 0,83 j) × fc28) ? Que faire ?`, c:`Attendu : 7 / 10,57 × 25 = **16,6 MPa**. On n'obtient que 12,5 MPa, soit 75 % de l'attendu : à 28 jours, on peut craindre ≈ 19 MPa.
Actions immédiates : vérifier la fabrication (sacs par gâchée, eau, sable), le ciment (date, éventé), la confection et la conservation des éprouvettes ; prévenir le BET ; attendre les résultats à 28 jours et, si nécessaire, faire des **carottages** avant de charger l'ouvrage.`},
  {t:"Bon de livraison", d:2, e:`Un camion de BPE arrive à 10 h 05 ; le bon indique : C25/30, S3, XC2, 8 m³, heure de chargement 8 h 20. Le béton peut-il être accepté ? Qu'aurait-il fallu ?`, c:`Délai : 10 h 05 − 8 h 20 = **1 h 45** > 1 h 30 environ : sauf **retardateur** mentionné sur le bon, le béton a commencé sa prise ; on mesure l'affaissement : s'il est trop faible, on **refuse** le camion (et surtout on interdit d'y ajouter de l'eau).
Il aurait fallu un planning de livraison adapté à la distance et au trafic, et un retardateur commandé.`},
  {t:"Traction par fendage", d:1, e:`Un cylindre 16 × 32 se rompt en fendage sous 165 kN. Calculer ft et comparer à la formule ft28 = 0,6 + 0,06 fc28 pour fc28 = 25 MPa.`, c:`ft = 2 × 165 000 / (π × 160 × 320) = **2,05 MPa**.
Formule : 0,6 + 0,06 × 25 = **2,1 MPa** → résultats cohérents.`},
  {t:"Programme de contrôle", d:2, e:`Un chantier coule des fondations (2 jours), des poteaux (5 jours répartis sur 3 semaines) et une dalle (1 jour, 40 m³). Proposer un nombre minimal de séries d'éprouvettes (règle : une série de 3 par journée de bétonnage et par type d'ouvrage).`, c:`Fondations : 2 journées → **2 séries** ; poteaux : 5 journées → **5 séries** ; dalle : 1 journée → **1 série** (2 séries conseillées pour 40 m³).
Total : **8 séries** (24 éprouvettes) au minimum, plus des éprouvettes à 7 jours pour l'alerte (souvent 2 par série).`}
 ],
 quiz:[
  {q:"Les éprouvettes de béton courantes sont des cylindres de :", o:["16 × 32 cm","5 × 5 cm","1 × 1 m","30 × 60 cm"], r:0, e:"Ou cubes de 15 cm."},
  {q:"Section d'un cylindre de 16 cm :", o:["≈ 20 106 mm²","≈ 2 000 mm²","≈ 50 000 mm²","≈ 160 mm²"], r:0, e:"π × 80²."},
  {q:"Délai courant de mise en place d'un BPE après chargement :", o:["≈ 1 h 30","10 min","6 h","2 jours"], r:0, e:"Sauf retardateur."},
  {q:"Le scléromètre donne :", o:["Une estimation rapide de la résistance de surface","La composition exacte","Le dosage en eau","La couleur"], r:0, e:"Indicatif."},
  {q:"En cas de doute sur un ouvrage durci, la référence est :", o:["Le carottage","Une photo","Le bon de livraison","Le scléromètre seul"], r:0, e:"Essai sur le béton en place."}
 ]},
{id:"mat-5", niv:2, titre:"Les aciers pour béton armé", duree:50, contenu:`## Les types d'aciers
- **Ronds lisses** (RL, Fe E235) : adhérence faible, encore utilisés pour certains crochets et épingles ;
- **Haute adhérence (HA)** : nervures qui assurent l'adhérence au béton ; nuances **Fe E400** (fe = 400 MPa) et **Fe E500 / B500** (fe = 500 MPa) ;
- **Treillis soudés** : panneaux de fils HA soudés (ex. mailles de 15 × 15 ou 20 × 20 cm) pour dallages, dalles de compression, voiles minces.

## Diamètres, sections et poids
| Diamètre | Section (cm²) | Poids (kg/m) | Usage courant |
|---|---|---|---|
| HA6 | 0,28 | 0,222 | Cadres, épingles |
| HA8 | 0,50 | 0,395 | Cadres, dalles |
| HA10 | 0,79 | 0,617 | Poteaux et chaînages de maisons, dalles |
| HA12 | 1,13 | 0,888 | Poteaux, poutres, semelles |
| HA14 | 1,54 | 1,208 | Poutres, poteaux R+1 |
| HA16 | 2,01 | 1,578 | Poutres, poteaux d'immeubles |
| HA20 | 3,14 | 2,466 | Ouvrages importants |
Formules : **section = π d² / 4** ; **poids (kg/m) = d² / 162** (d en mm). Barres de **12 m**.

## L'essai de traction
Une barre est tirée jusqu'à la rupture ; on mesure :
- la **limite d'élasticité** fe = Fe / A0 (début des déformations permanentes) ;
- la **résistance à la rupture** fu = Fm / A0 ;
- l'**allongement à la rupture** A % = (Lu − L0) / L0 (ductilité) ;
- le rapport fu / fe (≥ 1,08 pour les aciers B500B) : un acier **ductile** prévient avant de rompre.
> [!exemple] Essai sur un HA12
> A0 = π × 12² / 4 = 113,1 mm² ; Fe = 56,5 kN → **fe = 500 MPa** ; Fm = 64 kN → **fu = 566 MPa** ; L0 = 60 mm, Lu = 69 mm → **A = 15 %** ; fu/fe = 1,13 ✔.

## Réception et contrôles de chantier
- **Marquage** des nervures (nuance, usine) et certificats du fournisseur ;
- **Diamètre** au pied à coulisse et **pesée** : un « HA12 » de mauvaise qualité peut mesurer 11 mm (− 16 % de section !) ;
- Stockage sur **cales**, hors de la boue, séparé par diamètre ; une légère rouille superficielle est acceptable, pas une rouille feuilletée qui s'écaille.

## Le façonnage
- Plier **à froid** avec une cintreuse, **jamais en chauffant** (l'acier perd ses caractéristiques) ;
- Respecter les **diamètres de mandrin** (cintrage) : environ 4 Ø pour les cadres de petits diamètres, davantage pour les grosses barres et les ancrages ;
- Ne pas déplier puis replier une barre (risque de rupture) ;
- **Soudure** seulement si l'acier est déclaré soudable et avec un mode opératoire adapté.

> [!retenir]
> - HA Fe E400 / B500 ; section π d²/4 ; poids d²/162 kg/m.
> - Traction : fe, fu, allongement ; acier ductile.
> - Contrôler diamètre et poids ; plier à froid, jamais en chauffant.`,
 sujet:{titre:"Aciers pour béton armé : essai de traction, contrôle des livraisons et façonnage", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un lot de barres « HA14 FeE500 » arrive sur un chantier à Gagnoa. Vous contrôlez le lot avant usage.

**Données**
- Essai de traction sur une éprouvette HA14 : force à la limite d'élasticité **79,3 kN** ; force maximale **90,5 kN** ; longueur entre repères **L0 = 70 mm**, après rupture **Lu = 80,5 mm** ;
- Exigences B500B : fe ≥ **500 MPa**, fu/fe ≥ **1,08**, allongement ≥ **5 %** (sous charge maximale) — on prendra ici A ≥ **12 %** à rupture ;
- Pesée : **1 m** de barre pèse **1,180 kg** ; masse nominale **d² / 162** kg/m ; tolérance **± 4,5 %** ;
- Un autre fournisseur propose des « HA14 » qui mesurent **13 mm** au pied à coulisse.

### Partie A — Les aciers (4 points)
1. Distinguer ronds lisses, aciers HA et treillis soudés ; usages. (2 pts)
2. Pourquoi le béton a-t-il besoin d'armatures ? Pourquoi les nervures ? (2 pts)

### Partie B — Essai de traction (8 points)
3. Calculer la section nominale A0. (1 pt)
4. Calculer fe, fu, le rapport fu/fe et l'allongement A. (5 pts)
5. Le lot est-il conforme ? Que signifie un acier ductile ? (2 pts)

### Partie C — Contrôle de masse et de diamètre (5 points)
6. Calculer la masse nominale et l'écart de la pesée. Conforme ? (3 pts)
7. Calculer la perte de section des barres de 13 mm. Conséquence ? (2 pts)

### Partie D — Façonnage et stockage (3 points)
8. Donner trois règles de façonnage et deux règles de stockage des aciers. (3 pts)`,
  corrige:`### Partie A — Les aciers (4 pts)
1. **Ronds lisses** (Fe E235) : faible adhérence, épingles, crochets ; **HA** (Fe E400, E500) : nervures, armatures principales ; **treillis soudés** : panneaux pour dallages, dalles de compression, voiles minces. *(2 pts)*
2. Le béton résiste mal à la **traction** (≈ 10 fois moins qu'en compression) : les aciers reprennent les efforts de traction. Les **nervures** assurent l'**adhérence** acier-béton (transfert des efforts). *(2 pts)*

### Partie B — Traction (8 pts)
3. A0 = π × 14² / 4 = **153,9 mm²**. *(1 pt)*
4. *(5 pts)*
   - fe = 79 300 / 153,9 = **515 MPa** ;
   - fu = 90 500 / 153,9 = **588 MPa** ;
   - fu / fe = **1,14** ;
   - A = (80,5 − 70) / 70 = **15 %**.
5. fe ≥ 500 ✔ ; fu/fe ≥ 1,08 ✔ ; A ≥ 12 % ✔ → **conforme**. Un acier **ductile** s'allonge beaucoup avant de rompre : la structure se déforme et **prévient** avant la ruine. *(2 pts)*

### Partie C — Masse et diamètre (5 pts)
6. 14² / 162 = **1,210 kg/m** ; (1,180 − 1,210) / 1,210 = **− 2,5 %** dans la tolérance ± 4,5 % ✔. *(3 pts)*
7. (13 / 14)² = 0,862 → **− 14 % de section** : à refuser — l'ouvrage serait sous-armé de 14 %. *(2 pts)*

### Partie D — Façonnage et stockage (3 pts)
8. Façonnage : respecter les **diamètres de mandrin** (≈ 4 Ø pour les cadres), plier **à froid** (jamais chauffer), ne pas redresser une barre pliée, cotes du bordereau. Stockage : sur **cales** hors du sol, par diamètre et repère, à l'abri des salissures (terre, huile) ; la rouille superficielle adhérente est tolérée, pas la rouille feuilletée. *(3 pts)*

> [!attention] Erreurs à éviter
> - Accepter des barres sans contrôle du diamètre et de la masse.
> - Chauffer une barre pour la plier.
> - Stocker les aciers dans la boue.`},
 exercices:[
  {t:"Exploiter un essai de traction", d:2, e:`Un HA16 (L0 = 80 mm) donne : charge à la limite élastique 103 kN, charge maximale 118 kN, longueur après rupture 92 mm. Calculer fe, fu, A % et fu/fe. L'acier est-il un B500 ductile ?`, c:`A0 = π × 16² / 4 = **201,1 mm²**.
fe = 103 000 / 201,1 = **512 MPa** ; fu = 118 000 / 201,1 = **587 MPa** ; A = (92 − 80) / 80 = **15 %** ; fu/fe = **1,15**.
fe ≥ 500 MPa, fu/fe ≥ 1,08, allongement correct → **conforme B500** ductile.`},
  {t:"Vérifier une livraison par pesée", d:2, e:`Une barre « HA12 » de 12,00 m pèse 10,0 kg. Calculer le poids théorique, l'écart en %, et le diamètre équivalent réel. Conclure (tolérance ≈ ± 4,5 %).`, c:`Théorique : 12 × 0,888 = **10,66 kg** → écart : (10,0 − 10,66) / 10,66 = **− 6,2 %** (hors tolérance).
Diamètre équivalent : √(10,0 / 12 / 0,00617) = **11,6 mm** → la section réelle est 6 % plus faible que prévu : **refuser** le lot (ou faire recalculer avec la section réelle).`},
  {t:"Section d'acier", d:1, e:`Calculer la section de : a) 4 HA12 ; b) 3 HA16 ; c) 2 HA14 + 2 HA12. Combien de HA12 faut-il pour remplacer 3 HA16 ?`, c:`a) 4 × 1,131 = **4,52 cm²** ; b) 3 × 2,011 = **6,03 cm²** ; c) 2 × 1,539 + 2 × 1,131 = **5,34 cm²**.
Remplacement : 6,03 / 1,131 = 5,3 → **6 HA12** (6,79 cm²), à condition que l'espacement entre barres reste suffisant pour le béton ; la substitution doit être validée par le BET.`},
  {t:"Poids d'une commande", d:1, e:`Commande : 40 barres HA12, 25 barres HA10 et 30 barres HA6 de 12 m. Calculer le poids total.`, c:`HA12 : 40 × 12 × 0,888 = **426,2 kg** ; HA10 : 25 × 12 × 0,617 = **185,1 kg** ; HA6 : 30 × 12 × 0,222 = **79,9 kg**.
Total : **691,2 kg**.`},
  {t:"Mauvaises pratiques", d:2, e:`On observe sur un chantier : un ferrailleur chauffe les barres au chalumeau pour les plier ; des aciers stockés dans la boue ; des cadres dépliés puis repliés pour corriger une erreur. Expliquer les risques.`, c:`- **Chauffer** modifie la structure de l'acier : il perd sa limite élastique et peut devenir fragile ;
- **Boue** : elle empêche l'**adhérence** au béton et entretient la corrosion ; nettoyer avant coulage et stocker sur cales ;
- **Déplier/replier** crée des microfissures au pli : risque de **rupture** ; il faut façonner un nouveau cadre.`}
 ],
 quiz:[
  {q:"Poids d'un mètre de HA12 :", o:["0,888 kg","0,617 kg","1,578 kg","0,222 kg"], r:0, e:"12²/162."},
  {q:"fe d'un acier B500 vaut :", o:["500 MPa","235 MPa","50 MPa","5 000 MPa"], r:0, e:"Limite d'élasticité."},
  {q:"L'allongement à la rupture mesure :", o:["La ductilité","La couleur","Le poids","L'adhérence"], r:0, e:"Déformation avant rupture."},
  {q:"Pour plier une barre HA, on doit :", o:["La plier à froid à la cintreuse","La chauffer au rouge","La tordre au marteau","La couper"], r:0, e:"Jamais chauffer."},
  {q:"Section d'un HA16 :", o:["2,01 cm²","1,13 cm²","3,14 cm²","0,79 cm²"], r:0, e:"π × 1,6²/4."}
 ]},
{id:"mat-6", niv:2, titre:"Le bois : essences, humidité et protection", duree:50, contenu:`## Un matériau naturel et anisotrope
Le bois est formé de **fibres** orientées dans le sens du tronc : il est beaucoup plus résistant **dans le sens des fibres** (axial) que perpendiculairement, et il se déforme différemment selon les directions (**anisotropie**). Il est léger (densité 0,4 à 1,1), bon isolant, facile à travailler, renouvelable.

## Les essences ivoiriennes courantes
| Essence | Densité | Usage |
|---|---|---|
| **Iroko** | ≈ 0,65 | Menuiseries extérieures, charpentes, durable |
| **Framiré** | ≈ 0,55 | Menuiseries, charpentes protégées |
| **Fraké (limba)** | ≈ 0,55 | Coffrages, charpentes à l'abri, contreplaqués |
| **Samba (ayous)** | ≈ 0,38 | Léger, intérieur, contreplaqué |
| **Teck** | ≈ 0,65 | Très durable, extérieur, terrasses |
| **Azobé** | ≈ 1,05 | Très dur et durable : ponts, quais, ouvrages exposés |
Les bois doivent provenir de forêts gérées durablement (certification) ; certaines essences sont menacées.

## L'humidité du bois
$$ H = (Mh − M0) / M0      (M0 : masse anhydre, séchée à l'étuve)
- Bois vert : 50 à 100 % ; **point de saturation des fibres** ≈ 30 % ;
- En dessous de 30 %, le bois **se rétracte** en séchant (et gonfle en se réhumidifiant) : retrait tangentiel ≈ 0,25 à 0,35 % par % d'humidité, radial ≈ moitié, axial négligeable ;
- Humidité à la mise en œuvre : **< 20 %** pour les charpentes, **12 à 15 %** pour les menuiseries (sinon fentes, déformations, assemblages desserrés).

## La résistance et les classes
Les bois de structure sont classés selon leur résistance : résineux **C18, C24…**, feuillus **D30 à D70** (le chiffre est la résistance en flexion, en MPa). Les **défauts** (nœuds, fentes, fil tors, pourriture) réduisent la résistance.

## La durabilité et la protection
- Ennemis : **termites** (très actifs en Côte d'Ivoire), insectes à larves, **champignons** (pourriture) quand l'humidité dépasse 20 % ;
- **Durabilité naturelle** variable (azobé, teck, iroko : durables ; samba : non durable) ;
- **Traitement** préventif (autoclave, trempage) insecticide et fongicide pour les bois peu durables, selon la **classe d'emploi** (intérieur sec, extérieur abrité, en contact avec le sol…) ;
- Dispositions : pas de contact avec le sol ni avec une maçonnerie humide, ventilation, débords de toit, entretien des finitions.

## Les dérivés du bois
**Contreplaqué** (plis croisés : stable), **lamellé-collé** (grandes portées), **OSB**, panneaux de particules et **MDF** (intérieur sec).

> [!exemple] Humidité et retrait
> Une planche pèse 1,30 kg ; séchée à l'étuve, 1,00 kg → H = **30 %**. Si elle sèche jusqu'à 15 %, son retrait tangentiel vaut ≈ 15 × 0,3 % = 4,5 % : une planche de 200 mm de large perd **9 mm**.

> [!retenir]
> - Bois anisotrope, léger ; essences locales selon l'usage et la durabilité.
> - H = (Mh − M0)/M0 ; retrait sous 30 % ; < 20 % pour la charpente.
> - Classes C (résineux) et D (feuillus) ; traitement contre termites et champignons.`,
 sujet:{titre:"Le bois sur chantier : humidité, retrait, essences locales et protection", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous recevez du bois pour la charpente et les menuiseries d'un hôtel à Assinie (climat chaud et humide).

**Données**
- Une planche de **250 mm** de large pèse **2,10 kg** ; séchée à l'étuve, **1,60 kg** ;
- Point de saturation des fibres : **30 %** ; retrait tangentiel : **0,3 %** par % d'humidité (en dessous de 30 %) ;
- Humidité d'équilibre dans le bâtiment : **15 %** ;
- Chevrons **8 × 16 cm** de **4,00 m** en iroko (masse volumique ≈ **650 kg/m³**).

### Partie A — Le matériau (5 points)
1. Expliquer pourquoi le bois est anisotrope et ce que cela implique. (2 pts)
2. Associer à chaque usage une essence ivoirienne : menuiseries extérieures, coffrages, ouvrages très exposés (pont, quai), contreplaqué léger, terrasse extérieure. (3 pts)

### Partie B — Humidité et retrait (8 points)
3. Calculer l'humidité de la planche. Qualifier ce bois. (2 pts)
4. Calculer le retrait en largeur quand la planche sèche jusqu'à 15 %. (4 pts)
5. À quelle humidité poser une charpente et une menuiserie ? Conséquences d'un bois trop humide ? (2 pts)

### Partie C — Quantités (2 points)
6. Calculer la masse d'un chevron. (2 pts)

### Partie D — Protection (5 points)
7. Quels sont les ennemis du bois en Côte d'Ivoire ? À partir de quelle humidité les champignons se développent-ils ? (2 pts)
8. Décrire les moyens de protection (choix, traitement, conception). (3 pts)`,
  corrige:`### Partie A — Matériau (5 pts)
1. Les **fibres** sont orientées dans le sens du tronc : le bois est bien plus résistant **dans le sens des fibres** et se déforme différemment selon les directions (retrait tangentiel > radial ≫ axial). On sollicite les pièces dans le sens des fibres et on tient compte des variations de dimensions. *(2 pts)*
2. Menuiseries extérieures : **iroko** ; coffrages : **fraké** ; ouvrages très exposés : **azobé** ; contreplaqué léger : **samba (ayous)** ; terrasse : **teck**. *(3 pts)*

### Partie B — Humidité (8 pts)
3. H = (2,10 − 1,60) / 1,60 = **31 %** : au-dessus du point de saturation → bois **vert / humide**. *(2 pts)*
4. Le retrait ne commence qu'en dessous de **30 %** : de 30 % à 15 %, soit 15 points × 0,3 % = **4,5 %** → 250 × 0,045 = **11 mm** de retrait. *(4 pts)*
5. Charpente **< 20 %** ; menuiseries **12 à 15 %**. Un bois posé trop humide se **fend**, se **voile**, les assemblages se desserrent et les menuiseries ferment mal. *(2 pts)*

### Partie C — Quantités (2 pts)
6. 0,08 × 0,16 × 4,00 = 0,0512 m³ × 650 = **33 kg**. *(2 pts)*

### Partie D — Protection (5 pts)
7. **Termites** (très actifs), insectes à larves, **champignons** (pourriture) au-delà de **20 %** d'humidité. *(2 pts)*
8. **Essences durables** ; **traitement** insecticide-fongicide (autoclave de préférence) ; **conception** : éviter le contact avec le sol et l'eau stagnante, ventiler, débords de toiture, pieds de poteaux sur socles ; finitions (lasure, peinture microporeuse) entretenues. *(3 pts)*

> [!attention] Erreurs à éviter
> - Compter le retrait à partir de l'humidité initiale au lieu du point de saturation (30 %).
> - Poser des menuiseries en bois vert.
> - Laisser le bois de charpente toucher la maçonnerie humide sans protection.`},
 exercices:[
  {t:"Humidité d'un lot de bois", d:1, e:`Un échantillon de chevron pèse 845 g ; après séchage à l'étuve, 650 g. Calculer l'humidité. Peut-on le mettre en œuvre en charpente ?`, c:`H = (845 − 650) / 650 = **30 %** : bois encore humide (point de saturation).
Non : il faut attendre un séchage sous **20 %**, sinon le chevron va se rétracter, se déformer et desserrer les assemblages.`},
  {t:"Retrait d'un parquet", d:2, e:`Des lames de 120 mm de large, posées à 18 % d'humidité, sèchent à 12 % dans une pièce climatisée. Retrait tangentiel : 0,3 % par % d'humidité. Calculer le retrait par lame et sur 30 lames.`, c:`Variation : 18 − 12 = 6 % → retrait : 6 × 0,3 = **1,8 %** → 120 × 0,018 = **2,2 mm** par lame.
Sur 30 lames : **65 mm** de jours cumulés : il fallait poser des lames à **12 %** (humidité d'équilibre de la pièce).`},
  {t:"Choisir une essence", d:1, e:`Proposer une essence pour : a) une porte d'entrée extérieure ; b) des coffrages réutilisés ; c) un ponton en bord de lagune ; d) un faux plafond intérieur léger.`, c:`a) **Iroko** (ou teck) ; b) **fraké** ou contreplaqué de coffrage ; c) **azobé** (très dur et durable dans l'eau) ; d) **samba** (léger), ou contreplaqué.`},
  {t:"Volume et masse d'une charpente", d:1, e:`7 poutres de 12 × 20 cm et 4,00 m en iroko (densité 0,65). Calculer le volume de bois et la masse.`, c:`Volume : 7 × 0,12 × 0,20 × 4,00 = **0,672 m³** ; masse : 0,672 × 650 = **437 kg**.`},
  {t:"Charpente attaquée", d:2, e:`Après 5 ans, une charpente en bois non traité présente des galeries remplies de terre et des pièces qui sonnent creux près des appuis sur le mur. Diagnostic et remèdes ?`, c:`Attaque de **termites** (galeries de terre caractéristiques), favorisée par le **contact** bois/maçonnerie et l'absence de **traitement**.
Remèdes : sonder et remplacer les pièces affaiblies (bois traité ou durable), traiter les bois conservés (injection, pulvérisation), réaliser une **barrière anti-termites** au sol, isoler les appuis par une coupure étanche et vérifier régulièrement.`}
 ],
 quiz:[
  {q:"Le bois est plus résistant :", o:["Dans le sens des fibres","Perpendiculairement aux fibres","De la même façon dans tous les sens","Seulement mouillé"], r:0, e:"Anisotropie."},
  {q:"Humidité maximale du bois de charpente à la pose :", o:["20 %","60 %","90 %","0 %"], r:0, e:"Sinon retrait."},
  {q:"L'azobé est :", o:["Très dur et très durable","Très léger","Non durable","Un résineux"], r:0, e:"Densité ≈ 1,05."},
  {q:"Le principal ennemi du bois en Côte d'Ivoire est :", o:["Les termites","Le gel","La neige","Le vent sec"], r:0, e:"Traitement indispensable."},
  {q:"Le contreplaqué est stable car :", o:["Ses plis sont croisés","Il est en plastique","Il est très humide","Il est peint"], r:0, e:"Retraits compensés."}
 ]},
{id:"mat-13", niv:2, titre:"Les métaux et le verre", duree:45, contenu:`## Les aciers de construction
Les charpentes métalliques utilisent des aciers de nuance **S235, S275, S355** (le chiffre est la limite d'élasticité en MPa). Propriétés communes : masse volumique **7 850 kg/m³**, module **E = 210 000 MPa**, dilatation ≈ 12 × 10⁻⁶ /°C, comportement **ductile**. Points faibles : **corrosion** et perte de résistance au **feu** (au-delà de 500 °C environ).
- Allongement élastique d'un tirant : **ΔL = F L / (E A)** ;
- Produits : profilés laminés (IPE, HEA, UPN, cornières), tubes, tôles, profils minces formés à froid, tôles nervurées.

## Les autres métaux
| Métal | Propriétés | Usages |
|---|---|---|
| **Aluminium** | Léger (2 700 kg/m³), E = 70 000 MPa, ne rouille pas, dilatation forte (23 × 10⁻⁶ /°C) | Menuiseries, bardages, tôles bac alu |
| **Zinc** | Protège l'acier (galvanisation) | Revêtements, gouttières |
| **Cuivre** | Bon conducteur, durable | Câbles électriques, tubes de climatisation |
| **Fonte** | Moulable, résistante en compression | Tampons de regards, canalisations |

## La corrosion
L'acier rouille en présence d'**eau** et d'**oxygène**, beaucoup plus vite en atmosphère **saline** (littoral, lagune). Protections : **galvanisation** (couche de zinc qui s'use lentement à la place de l'acier), **peintures** (primaire + finition), conception évitant les rétentions d'eau. Attention au **couple galvanique** : deux métaux différents en contact humide (aluminium et cuivre, acier et cuivre) → le moins noble se corrode vite.

## Le verre
Fabriqué par fusion de sable siliceux, soude et chaux, puis étalé sur un bain d'étain (verre **float**). Masse volumique **2 500 kg/m³** : un vitrage de 6 mm pèse 15 kg/m². Matériau **fragile**, transparent, inaltérable.
| Verre | Propriété | Usage |
|---|---|---|
| Simple (float) | Économique | Fenêtres courantes |
| **Trempé** | 4 à 5 fois plus résistant, se brise en petits morceaux | Portes vitrées, douches |
| **Feuilleté** (ex. 44.2 : deux verres de 4 mm + 2 films) | Reste en place en cas de bris | Garde-corps, vitrines, sécurité |
| À contrôle solaire, réfléchissant | Limite les apports de chaleur | Façades exposées |
| Double vitrage | Isolation thermique et acoustique | Locaux climatisés |

> [!exemple] Tirant en acier ou en aluminium
> F = 50 kN, L = 4 m, A = 300 mm² : acier → ΔL = 50 000 × 4 000 / (210 000 × 300) = **3,2 mm** ; aluminium → **9,5 mm** (trois fois plus déformable).

> [!retenir]
> - Acier S235/S355 : E = 210 000 MPa, ductile, à protéger de la corrosion et du feu.
> - Aluminium léger, ne rouille pas, dilate deux fois plus que l'acier.
> - Éviter les couples galvaniques ; galvaniser en bord de mer.
> - Verre : trempé, feuilleté (sécurité), contrôle solaire ; 6 mm = 15 kg/m².`,
 sujet:{titre:"Acier, aluminium et verre : déformations, dilatation et choix des vitrages", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour le hall d'un immeuble à Plateau, l'architecte prévoit un tirant métallique, des menuiseries aluminium et une grande baie vitrée.

**Données**
- Tirant : effort **F = 80 kN**, longueur **5 m**, section **400 mm²** ; E acier = **210 000 MPa** ; E aluminium = **70 000 MPa** ; acier S235 ;
- Dilatation : acier **12 × 10⁻⁶ /°C** ; aluminium **23 × 10⁻⁶ /°C** ; écart de température **40 °C** ; montant de menuiserie de **3,00 m** ;
- Verre : masse volumique **2 500 kg/m³** ; baie de **2,40 × 2,20 m** en vitrage de **6 mm** ;
- Fixations de la menuiserie alu prévues en vis acier ordinaire.

### Partie A — Le tirant (7 points)
1. Calculer la contrainte dans le tirant et vérifier l'acier S235. (2 pts)
2. Calculer l'allongement du tirant en acier, puis s'il était en aluminium. Conclure. (5 pts)

### Partie B — Dilatation (4 points)
3. Calculer l'allongement d'un montant de 3,00 m en aluminium et en acier. Quelle disposition de pose en déduire ? (4 pts)

### Partie C — Corrosion (3 points)
4. Pourquoi faut-il éviter le contact direct aluminium – acier ordinaire en milieu humide ? Solution ? (3 pts)

### Partie D — Verre (6 points)
5. Calculer la masse du vitrage de la baie. (2 pts)
6. Distinguer verre float, trempé et feuilleté. Lequel pour : porte vitrée du hall, garde-corps de mezzanine, cabine de douche ? (4 pts)`,
  corrige:`### Partie A — Tirant (7 pts)
1. σ = 80 000 / 400 = **200 MPa** ≤ 235 MPa ✔ (sans coefficient de sécurité ; en calcul réglementaire, on vérifierait avec les coefficients). *(2 pts)*
2. ΔL = F L / (E A) : acier : 80 000 × 5 000 / (210 000 × 400) = **4,8 mm** ; aluminium : 80 000 × 5 000 / (70 000 × 400) = **14,3 mm**. L'aluminium est **3 fois plus déformable** : pour une même rigidité, il faut une section 3 fois plus grande. *(5 pts)*

### Partie B — Dilatation (4 pts)
3. Alu : 23 × 10⁻⁶ × 40 × 3 000 = **2,8 mm** ; acier : **1,4 mm**. Prévoir des **jeux de dilatation** et des fixations à trous oblongs, des joints souples (mastic) entre menuiserie et maçonnerie. *(4 pts)*

### Partie C — Corrosion (3 pts)
4. Deux métaux différents en contact avec un électrolyte (eau, air salin) forment une **pile** : le plus « faible » (aluminium) se corrode (**corrosion galvanique**). Utiliser des vis **inox** ou isoler les métaux (rondelles, bandes isolantes). *(3 pts)*

### Partie D — Verre (6 pts)
5. Masse surfacique : 2 500 × 0,006 = 15 kg/m² → 2,40 × 2,20 × 15 = **79,2 kg**. *(2 pts)*
6. **Float** : verre ordinaire, se brise en éclats coupants ; **trempé** : 4 à 5 fois plus résistant, se brise en petits morceaux peu coupants ; **feuilleté** : verres collés par des films, **reste en place** quand il casse. Porte vitrée : **trempé** ; garde-corps : **feuilleté** (anti-chute) ; douche : **trempé**. *(4 pts)*

> [!attention] Erreurs à éviter
> - Oublier les jeux de dilatation des menuiseries alu exposées au soleil.
> - Visser l'aluminium avec de l'acier ordinaire en bord de mer.
> - Utiliser du verre ordinaire dans une zone de choc.`},
 exercices:[
  {t:"Allongement d'un tirant", d:2, e:`Un tirant de charpente de 6 m, en rond d'acier de 20 mm (A = 314 mm²), reprend 40 kN. Calculer la contrainte et l'allongement. Est-ce acceptable pour un acier S235 ?`, c:`σ = 40 000 / 314 = **127 MPa** < 235 MPa ✔.
ΔL = 40 000 × 6 000 / (210 000 × 314) = **3,6 mm** : acceptable (l'allongement reste élastique ; on règle le tirant avec un tendeur).`},
  {t:"Dilatation d'une menuiserie aluminium", d:1, e:`Un profilé aluminium de façade de 6 m subit une variation de 40 °C (α = 23 × 10⁻⁶ /°C). Calculer sa dilatation et la comparer à celle d'un profilé en acier.`, c:`Aluminium : 6 000 × 23 × 10⁻⁶ × 40 = **5,5 mm** ; acier (12 × 10⁻⁶) : **2,9 mm**.
On prévoit des **jeux** et des fixations coulissantes, sinon le profilé se voile ou arrache ses fixations.`},
  {t:"Masse d'un vitrage", d:1, e:`Calculer la masse d'une baie vitrée de 2,40 × 2,20 m en : a) verre de 6 mm ; b) feuilleté 44.2 (épaisseur ≈ 8,8 mm). Pourquoi ce calcul compte-t-il pour la menuiserie ?`, c:`Surface : 5,28 m².
a) 15 kg/m² → **79 kg** ; b) 2 500 × 0,0088 ≈ 22 kg/m² → **116 kg**.
Les roulettes, rails, paumelles et fixations doivent supporter ce poids ; la manutention demande au moins deux personnes et des ventouses.`},
  {t:"Durée d'une galvanisation", d:2, e:`Une charpente est galvanisée à 85 µm de zinc. En ambiance marine, le zinc se consomme d'environ 6 µm par an. Combien de temps dure la protection ? Comment la prolonger ?`, c:`Durée : 85 / 6 ≈ **14 ans** avant que l'acier ne commence à rouiller.
Pour la prolonger : ajouter une **peinture de finition** sur la galvanisation (système duplex, qui peut doubler la durée), éviter les rétentions d'eau et entretenir (retouches).`},
  {t:"Couple galvanique", d:2, e:`Des gouttières en aluminium sont fixées avec des vis en acier ordinaire et reçoivent l'eau d'un tube de climatisation en cuivre. Quels risques ? Que faire ?`, c:`Contacts **aluminium/acier** et **aluminium/cuivre** en présence d'eau : **corrosion galvanique** de l'aluminium (le moins noble), accélérée par l'eau chargée de cuivre.
Solutions : vis en **inox** ou aluminium avec rondelles isolantes, ne pas faire couler l'eau du cuivre sur l'aluminium (raccorder les condensats ailleurs), séparer les métaux par des isolants.`}
 ],
 quiz:[
  {q:"Dans S355, 355 désigne :", o:["La limite d'élasticité en MPa","Le poids au mètre","La température de fusion","La longueur"], r:0, e:"Nuance d'acier."},
  {q:"L'aluminium est :", o:["Environ 3 fois plus léger que l'acier","Plus lourd que l'acier","Magnétique","Très sujet à la rouille"], r:0, e:"2 700 contre 7 850 kg/m³."},
  {q:"Un vitrage feuilleté :", o:["Reste en place en cas de bris","Se dissout","Est toujours coloré","Ne casse jamais"], r:0, e:"Films intercalaires."},
  {q:"La galvanisation consiste à :", o:["Recouvrir l'acier de zinc","Peindre en rouge","Chauffer l'acier","Plier l'acier"], r:0, e:"Protection sacrificielle."},
  {q:"Masse d'un vitrage de 6 mm :", o:["≈ 15 kg/m²","≈ 1,5 kg/m²","≈ 150 kg/m²","≈ 60 kg/m²"], r:0, e:"2 500 × 0,006."}
 ]},
{id:"mat-15", niv:2, titre:"Les matériaux de second œuvre : isolants, plâtres, peintures, plastiques", duree:50, contenu:`## Les isolants thermiques
Un isolant contient beaucoup d'**air immobile** : sa conductivité λ est faible. **Résistance thermique** d'une couche : **R = e / λ** (m²·K/W).
| Isolant | λ (W/m·K) | Usage |
|---|---|---|
| Laine de verre, laine de roche | 0,032 à 0,040 | Faux plafonds, combles, cloisons |
| Polystyrène expansé (PSE) | 0,032 à 0,038 | Sous dalle, toiture-terrasse (protégé) |
| Polyuréthane | 0,022 à 0,028 | Panneaux sandwich, toitures |
| Fibres végétales (coco, typha) | 0,040 à 0,060 | Isolation biosourcée |
Ex. : 5 cm de laine (λ = 0,04) → R = **1,25** ; 10 cm → **2,5** m²·K/W. Un isolant mouillé ou écrasé perd l'essentiel de son efficacité.

## Les plâtres et plaques
Plâtre (gypse cuit) : prise rapide, intérieur seulement. **Plaques de plâtre** (BA13 : 12,5 mm) sur ossature métallique pour cloisons et faux plafonds ; variantes hydrofuges (salles d'eau) et coupe-feu. **Staff** : plâtre armé de fibres pour faux plafonds et corniches moulurées.

## Les peintures
Composition : **liant** (résine acrylique, vinylique, alkyde, siloxane), **pigments** (couleur, opacité), **charges**, **solvant** (eau ou solvant organique), additifs. L'**extrait sec en volume** (ESV) est la part qui reste après séchage.
$$ rendement (m²/L) = 10 × ESV (%) / épaisseur sèche (µm)
Ex. : ESV 40 %, film sec de 40 µm → 10 × 40 / 40 = **10 m²/L** par couche. Une peinture « bon marché » peu chargée en extrait sec couvre moins et oblige à plus de couches.

## Les bitumes et membranes d'étanchéité
Bitumes (dérivés du pétrole) modifiés **SBS** (élastomère, souple) ou **APP** (plastomère) en rouleaux soudés au chalumeau ; membranes synthétiques (PVC, EPDM) ; systèmes liquides (résines). Voir le chapitre Étanchéité en technologie.

## Les plastiques
| Matériau | Usage |
|---|---|
| **PVC** rigide | Évacuations (EU, EV, EP), gaines électriques, menuiseries |
| **PPR** (polypropylène) | Alimentation eau froide et **chaude** (soudé par polyfusion) |
| **PEHD** | Réseaux d'eau enterrés, branchements, gaines |
| **PER**, multicouche | Distribution d'eau dans les logements |
| Polystyrène | Isolation, entrevous légers |
Les plastiques se dilatent beaucoup (≈ 60 à 150 × 10⁻⁶ /°C) et vieillissent aux **UV** : protéger les tubes exposés au soleil.

## Les carrelages
Classés selon leur **absorption d'eau** : **grès cérame** (≤ 0,5 %, très résistant, sols et extérieurs), grès émaillés (0,5 à 3 %), faïences (> 10 %, murs intérieurs seulement). Résistance à l'usure (classes PEI pour les émaillés), glissance pour les sols mouillés.

> [!retenir]
> - Isolant : R = e/λ ; garder l'isolant sec et non écrasé.
> - Peinture : rendement = 10 × ESV / épaisseur sèche (µm).
> - PVC pour les évacuations, PPR pour l'eau chaude, PEHD enterré ; protéger des UV.
> - Grès cérame (absorption ≤ 0,5 %) pour les sols ; faïence pour les murs intérieurs.`,
 sujet:{titre:"Matériaux de second œuvre : isolants, peintures, carrelages et plastiques", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous comparez des offres de matériaux de second œuvre pour un immeuble de bureaux à Cocody.

**Données**
- Isolants : laine de roche **8 cm** (λ = **0,040 W/(m·K)**) ; polystyrène expansé **6 cm** (λ = **0,035**) ; R = e / λ ;
- Peinture A : extrait sec en volume (ESV) **45 %**, **4 500 F/L** ; peinture B : ESV **25 %**, **2 800 F/L** ; film sec visé **35 µm** par couche ; rendement (m²/L) = 10 × ESV / épaisseur sèche ; surface **400 m²**, **2 couches** ;
- Carrelages proposés : grès cérame (absorption ≤ 0,5 %), faïence (> 10 %) ;
- Tube PVC d'évacuation de **6 m** exposé au soleil, α = **80 × 10⁻⁶ /°C**, écart de température **30 °C**.

### Partie A — Isolants (5 points)
1. Calculer la résistance thermique de chaque isolant. Lequel isole le mieux ? (3 pts)
2. Pourquoi un isolant mouillé ou écrasé perd-il son efficacité ? (2 pts)

### Partie B — Peintures (8 points)
3. Calculer le rendement de chaque peinture par couche. (2 pts)
4. Calculer les litres nécessaires et le coût total de chaque peinture. Conclure. (4 pts)
5. Décrire le système de peinture d'un mur enduit neuf. (2 pts)

### Partie C — Carrelages et plâtre (4 points)
6. Quel carrelage pour : sol d'entrée et terrasse, mur de toilettes ? Pourquoi ? (2 pts)
7. Quelle plaque de plâtre pour une salle d'eau ? Pour un local à protéger du feu ? (2 pts)

### Partie D — Plastiques (3 points)
8. Calculer l'allongement du tube PVC. Quelle disposition prendre ? (3 pts)`,
  corrige:`### Partie A — Isolants (5 pts)
1. Laine : R = 0,08 / 0,040 = **2,0 m²·K/W** ; PSE : 0,06 / 0,035 = **1,71** → la **laine de 8 cm** isole mieux (l'épaisseur compte autant que λ). *(3 pts)*
2. Un isolant isole grâce à l'**air immobile** dans ses cellules ou fibres : l'eau (bien plus conductrice) ou l'écrasement chasse cet air. *(2 pts)*

### Partie B — Peintures (8 pts)
3. A : 10 × 45 / 35 = **12,9 m²/L** ; B : 10 × 25 / 35 = **7,1 m²/L**. *(2 pts)*
4. 800 m² à couvrir (2 couches) : A : 800 / 12,9 = **62,2 L** → **280 000 F** ; B : 800 / 7,1 = **112 L** → **313 600 F**. La peinture « chère » revient **moins cher** et demande moins de main-d'œuvre : on compare au **m² peint**, pas au litre. *(4 pts)*
5. Support sec (plusieurs semaines), propre, rebouché, poncé → **impression** → **deux couches** de finition croisées, en respectant le séchage. *(2 pts)*

### Partie C — Carrelages et plâtre (4 pts)
6. Sol d'entrée et terrasse : **grès cérame** (très peu absorbant, résistant à l'usure et aux intempéries) ; mur de toilettes : **faïence** (mur intérieur, décoratif, peu sollicité). *(2 pts)*
7. Salle d'eau : plaque **hydrofuge** (H) ; protection incendie : plaque **coupe-feu** (F). *(2 pts)*

### Partie D — Plastiques (3 pts)
8. ΔL = 80 × 10⁻⁶ × 30 × 6 000 = **14,4 mm**. Prévoir des **manchons de dilatation**, des colliers permettant le glissement, et protéger le PVC des UV (peinture, gaine). *(3 pts)*

> [!attention] Erreurs à éviter
> - Comparer les peintures au prix du litre.
> - Poser une faïence au sol.
> - Bloquer un tube PVC entre deux points fixes au soleil.`},
 exercices:[
  {t:"Résistance thermique d'un faux plafond", d:1, e:`Calculer R pour : a) 8 cm de laine de verre (λ = 0,035) ; b) 4 cm de polyuréthane (λ = 0,025) ; c) 2 cm de staff (λ = 0,35). Lequel isole le mieux ?`, c:`a) 0,08 / 0,035 = **2,29** ; b) 0,04 / 0,025 = **1,60** ; c) 0,02 / 0,35 = **0,06** m²·K/W.
La laine de 8 cm isole le mieux ; le staff seul n'isole presque pas : il faut lui ajouter un isolant.`},
  {t:"Rendement d'une peinture", d:2, e:`Deux peintures : A (ESV 45 %, prix 12 000 F le litre) et B (ESV 28 %, prix 8 000 F le litre). On veut un film sec de 35 µm par couche. Calculer le rendement et le coût au m² par couche.`, c:`A : 10 × 45 / 35 = **12,9 m²/L** → 12 000 / 12,9 = **933 F/m²**.
B : 10 × 28 / 35 = **8,0 m²/L** → 8 000 / 8,0 = **1 000 F/m²**.
La peinture la moins chère au litre est la **plus chère au m²** (et souvent moins durable).`},
  {t:"Choisir les tubes", d:1, e:`Choisir le matériau : a) alimentation d'un chauffe-eau ; b) évacuation d'un WC ; c) branchement d'eau enterré de 40 m ; d) gaine électrique encastrée.`, c:`a) **PPR** (ou multicouche) ; b) **PVC** Ø 100 ; c) **PEHD** ; d) gaine **ICTA** (plastique annelé) ou tube PVC.`},
  {t:"Choisir un carrelage", d:1, e:`Choisir entre grès cérame (absorption 0,3 %), grès émaillé PEI 3 (2 %) et faïence (12 %) pour : a) terrasse extérieure ; b) murs de douche ; c) sol de chambre ; d) sol d'un commerce très fréquenté.`, c:`a) **Grès cérame** (faible absorption, antidérapant) ; b) **faïence** (mur intérieur) ou grès ; c) **grès émaillé** PEI 3 (ou grès cérame) ; d) **grès cérame** (usure intense).`},
  {t:"Tubes au soleil", d:2, e:`Des tubes PVC d'évacuation posés en façade, en plein soleil, sont devenus cassants et déformés au bout de 3 ans. Expliquer et proposer une solution.`, c:`Les **UV** dégradent le PVC (il devient cassant et se décolore) et la **chaleur** le déforme (forte dilatation, ramollissement).
Solutions : choisir des tubes **traités anti-UV**, les **peindre** (peinture adaptée au PVC) ou les **coffrer**, prévoir des colliers permettant la dilatation, ou faire passer les chutes dans une gaine technique.`}
 ],
 quiz:[
  {q:"La résistance thermique d'une couche vaut :", o:["R = e / λ","R = λ × e","R = λ / e","R = e²"], r:0, e:"m²·K/W."},
  {q:"Pour l'eau chaude, on utilise couramment :", o:["Le PPR","Le PVC d'évacuation","Le plâtre","Le bois"], r:0, e:"Polyfusion."},
  {q:"Le grès cérame a une absorption d'eau :", o:["≤ 0,5 %","> 10 %","50 %","100 %"], r:0, e:"Très compact."},
  {q:"Une peinture à fort extrait sec :", o:["Couvre davantage par litre","Couvre moins","Ne sèche pas","Est toujours plus chère au m²"], r:0, e:"Rendement = 10 × ESV / e."},
  {q:"Les plastiques exposés au soleil :", o:["Vieillissent sous les UV","Ne changent jamais","Deviennent plus solides","Rouillent"], r:0, e:"À protéger."}
 ]},
{id:"mat-7", niv:3, titre:"Formuler un béton : la méthode de Dreux-Gorisse", duree:60, contenu:`## Le but de la formulation
Trouver les quantités de ciment, d'eau, de sable et de gravier pour **1 m³** de béton qui atteint la **résistance** demandée avec l'**ouvrabilité** voulue, au moindre coût. La méthode de **Dreux-Gorisse**, très utilisée dans les pays francophones, procède par étapes, puis on vérifie par une **gâchée d'essai**.

## Les données de départ
- Résistance caractéristique visée **fc28** (ex. 25 MPa pour poteaux, poutres, dalles) ;
- Ouvrabilité (affaissement au cône) selon la mise en œuvre ;
- Granulats disponibles : granulométries, D max, masses volumiques ; ciment (classe vraie σ'c ≈ 45 MPa pour un 42,5).

## Étape 1 : résistance moyenne à viser
Pour couvrir la dispersion de fabrication : **fm ≈ 1,15 × fc28** (ex. 1,15 × 25 ≈ 29 MPa).

## Étape 2 : rapport C/E (formule de Bolomey)
$$ fm = G × σ'c × (C/E − 0,5)   →   C/E = fm / (G × σ'c) + 0,5
G : coefficient granulaire (≈ 0,5 pour des granulats de bonne qualité, 0,55 à 0,6 pour d'excellents concassés). Ex. : C/E = 29 / (0,5 × 45) + 0,5 ≈ **1,8**.

## Étape 3 : dosage en ciment et en eau
L'abaque de Dreux donne le dosage en ciment selon C/E et l'affaissement voulu (≈ **350 kg/m³** pour C/E = 1,8 et un béton plastique). Eau : E = C / (C/E) = 350 / 1,8 ≈ **194 L**. On respecte aussi les dosages minimaux de durabilité (≥ 350 kg en béton armé exposé).

## Étape 4 : la courbe granulaire de référence
On trace sur le graphique granulométrique la courbe de référence **OAB** : O à l'origine, B au point (D ; 100 %), A point de brisure (abscisse ≈ D/2 pour D ≤ 20 mm ; ordonnée Y = 50 − √D + K, K dépendant du dosage, de la vibration et de la forme des granulats). La **ligne de partage** joignant les courbes du sable et du gravier, tracée par rapport à OAB, donne les **pourcentages en volume absolu** de sable et de gravier (souvent 35 à 40 % de sable).

## Étape 5 : les volumes absolus
Un mètre cube = **1 000 L de volumes absolus** :
$$ Vgranulats = 1 000 − C/ρc − E − air      (ρc ≈ 3,1 ; air occlus ≈ 10 à 20 L)
> [!exemple] fc28 = 25 MPa, plastique, gravier concassé 5/25, sable 0/4, CEM II 42,5
> Ciment 350 kg → 350 / 3,1 = 113 L ; eau 194 L ; air 15 L → granulats : 1 000 − 113 − 194 − 15 = **678 L**.
> Ligne de partage : sable 35 % (237 L), gravier 65 % (441 L) ; masses (grains à 2,65) : **sable 629 kg, gravier 1 168 kg**.
> **Composition pour 1 m³** (granulats secs) : ciment 350 kg · eau 194 L · sable 629 kg · gravier 1 168 kg → masse volumique ≈ **2 340 kg/m³**.

## Étape 6 : corrections et gâchée d'essai
- **Humidité** des granulats : un sable à 5 % apporte 629 × 0,05 ≈ 31 L : on ne verse que 163 L d'eau et on pèse 660 kg de sable humide ;
- **Gâchée d'essai** : on mesure l'affaissement, on confectionne des éprouvettes (7 et 28 jours) ; si le béton est trop sec, on ajoute un **plastifiant** plutôt que de l'eau ;
- On ajuste et on fixe la **formule** (pesées par gâchée pour la bétonnière ou la centrale).

> [!attention]
> Chaque litre d'eau ajouté « pour faciliter le coulage » fait perdre de la résistance : 20 L d'eau en plus par m³ peuvent coûter 3 à 4 MPa.

> [!retenir]
> - fm ≈ 1,15 fc28 ; Bolomey : C/E = fm/(G σ'c) + 0,5.
> - Ciment par l'abaque (≈ 350 kg), E = C/(C/E).
> - Volumes absolus : granulats = 1 000 − C/3,1 − E − air ; partage sable/gravier par la courbe de référence.
> - Correction d'eau et gâchée d'essai.`,
 sujet:{titre:"Formuler un béton de 30 MPa par la méthode de Dreux-Gorisse", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Pour les poteaux et poutres d'un immeuble R+4 à Yamoussoukro, vous formulez un béton **fc28 = 30 MPa**, plastique, avec un gravier concassé 5/25 et un sable 0/4.

**Données**
- Ciment **CEM II 42,5** (classe vraie **σ'c = 45 MPa**, ρc = **3,1**) ; coefficient granulaire **G = 0,5** ;
- Résistance moyenne visée : **fm = 1,15 fc28** ; Bolomey : C/E = fm / (G σ'c) + 0,5 ;
- L'abaque de Dreux donne, pour ce C/E et un béton plastique : **C = 375 kg/m³** ;
- Air occlus : **15 L/m³** ; masse volumique des grains : **2,65** ;
- Ligne de partage (courbe de référence) : **sable 38 %**, **gravier 62 %** en volume absolu ;
- Humidité du sable sur chantier : **4 %** (gravier sec) ;
- Gâchée à la bétonnière : **1 sac de 50 kg**.

### Partie A — Résistance et rapport C/E (5 points)
1. Pourquoi viser une résistance moyenne supérieure à fc28 ? Calculer fm. (2 pts)
2. Calculer C/E. (2 pts)
3. Calculer le dosage en eau E. (1 pt)

### Partie B — Volumes absolus (7 points)
4. Calculer le volume absolu du ciment et le volume des granulats. (3 pts)
5. Calculer les volumes absolus puis les masses de sable et de gravier. (3 pts)
6. Calculer la masse volumique théorique du béton frais. (1 pt)

### Partie C — Corrections et gâchée (6 points)
7. Corriger l'eau et la masse de sable pour un sable à 4 %. (3 pts)
8. Calculer les quantités pour une gâchée d'un sac de ciment (formule sèche). (3 pts)

### Partie D — Validation (2 points)
9. Pourquoi faut-il une gâchée d'essai ? Que faire si le béton est trop ferme ? (2 pts)`,
  corrige:`### Partie A — C/E (5 pts)
1. La fabrication a une **dispersion** : en visant la moyenne, la moitié des gâchées serait sous 30 MPa. fm = 1,15 × 30 = **34,5 MPa**. *(2 pts)*
2. C/E = 34,5 / (0,5 × 45) + 0,5 = 1,533 + 0,5 = **2,03**. *(2 pts)*
3. E = 375 / 2,03 = **184 L**. *(1 pt)*

### Partie B — Volumes absolus (7 pts)
4. Ciment : 375 / 3,1 = **121 L** ; granulats : 1 000 − 121 − 184 − 15 = **680 L**. *(3 pts)*
5. Sable : 0,38 × 680 = 258 L → × 2,65 = **684 kg** ; gravier : 0,62 × 680 = 421 L → × 2,65 = **1 117 kg**. *(3 pts)*
6. 375 + 184 + 684 + 1 117 = **2 360 kg/m³**. *(1 pt)*

### Partie C — Corrections (6 pts)
7. Eau apportée : 684 × 0,04 = **27 L** → eau à verser : 184 − 27 = **157 L** ; sable humide à peser : 684 × 1,04 = **711 kg**. *(3 pts)*
8. Coefficient 50 / 375 = 0,133 : ciment **50 kg** ; eau **24,6 L** ; sable **91 kg** ; gravier **149 kg** (à convertir en volumes ou en seaux tarés pour le chantier). *(3 pts)*

### Partie D — Validation (2 pts)
9. La méthode est **approchée** : il faut vérifier l'affaissement réel et la résistance (éprouvettes à 7 et 28 jours). Trop ferme : ajouter un **plastifiant** (ou revoir la granulométrie), **jamais de l'eau** seule. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier l'air occlus ou le volume du ciment dans le bilan des 1 000 L.
> - Confondre pourcentages en volume absolu et en masse.
> - Négliger l'eau apportée par le sable humide.`},
 exercices:[
  {t:"Rapport C/E pour un béton de 30 MPa", d:2, e:`On veut fc28 = 30 MPa avec un ciment de classe vraie 45 MPa (G = 0,5). Calculer fm, C/E, puis l'eau si l'abaque donne C = 375 kg/m³.`, c:`fm = 1,15 × 30 = **34,5 MPa**.
C/E = 34,5 / (0,5 × 45) + 0,5 = **2,03**.
E = 375 / 2,03 = **184 L** (E/C = 0,49).`},
  {t:"Composition complète", d:3, e:`Avec C = 375 kg, E = 184 L, air 15 L, ρc = 3,1, granulats à 2,65 et une ligne de partage à 36 % de sable, calculer les volumes et masses de sable et de gravier, et la masse volumique théorique.`, c:`Ciment : 375 / 3,1 = **121 L** → granulats : 1 000 − 121 − 184 − 15 = **680 L**.
Sable : 0,36 × 680 = 244,8 L → **649 kg** ; gravier : 435,2 L → **1 153 kg**.
Masse volumique : 375 + 184 + 649 + 1 153 = **2 361 kg/m³**.`},
  {t:"Correction d'humidité", d:2, e:`Pour la composition de l'exercice 2, le sable contient 6 % d'eau et le gravier 1 %. Calculer l'eau à verser et les masses humides.`, c:`Eau apportée : 649 × 0,06 + 1 153 × 0,01 = 38,9 + 11,5 = **50,4 L** → eau à verser : 184 − 50,4 = **133,6 L**.
Masses humides : sable **688 kg** ; gravier **1 165 kg**.`},
  {t:"Gâchée de bétonnière", d:1, e:`Ramener la composition sèche de l'exercice 2 à une gâchée de 250 L (0,25 m³).`, c:`Ciment : 375 × 0,25 = **93,75 kg** (≈ 1,9 sac) ; eau : **46 L** (avant correction) ; sable : **162 kg** ; gravier : **288 kg**.
En pratique, on cale souvent la gâchée sur **2 sacs** (100 kg), soit 0,267 m³ : on multiplie alors toutes les quantités par 0,267.`},
  {t:"Le prix d'un seau d'eau en trop", d:2, e:`Le béton de l'exercice 2 reçoit 20 L d'eau supplémentaires sur le chantier. Calculer la nouvelle résistance moyenne prévue par Bolomey et la perte.`, c:`E = 204 L → C/E = 375 / 204 = 1,84 → fm = 0,5 × 45 × (1,84 − 0,5) = **30,1 MPa**, au lieu de 34,5 MPa : perte de **4,4 MPa** (− 13 %) : le béton risque de ne plus atteindre fc28 = 30 MPa.`}
 ],
 quiz:[
  {q:"La formule de Bolomey relie la résistance au rapport :", o:["C/E","S/G","E/S","C/G"], r:0, e:"fm = G σ'c (C/E − 0,5)."},
  {q:"On vise une résistance moyenne d'environ :", o:["1,15 fc28","0,5 fc28","fc28 exactement","3 fc28"], r:0, e:"Dispersion."},
  {q:"Volume absolu de 350 kg de ciment (ρ = 3,1) :", o:["113 L","350 L","1 085 L","31 L"], r:0, e:"350/3,1."},
  {q:"Si le béton d'essai est trop sec, on ajoute :", o:["Un plastifiant","De l'eau sans limite","Du sable","Du ciment seul"], r:0, e:"Sans perdre de résistance."},
  {q:"La ligne de partage sur le graphique donne :", o:["Les proportions de sable et de gravier","Le dosage en ciment","La quantité d'eau","La classe du ciment"], r:0, e:"Courbe de référence de Dreux."}
 ]},
{id:"mat-16", niv:3, titre:"Les bétons spéciaux", duree:50, contenu:`## Le béton prêt à l'emploi (BPE)
Fabriqué en **centrale**, livré en camion malaxeur : composition régulière et contrôlée, gros volumes, pompage. On le commande par sa **classe de résistance** (C25/30…), sa **consistance** (S3…), sa **classe d'exposition**, le **D max**, et on contrôle chaque bon de livraison.

## Le béton autoplaçant (BAP)
Très fluide, il se met en place **sous son seul poids**, sans vibration, même dans les zones très ferraillées. Formulé avec beaucoup de fines, un **superplastifiant** et parfois un agent de viscosité. Contrôle par l'**étalement** au cône (60 à 75 cm environ) au lieu de l'affaissement. Coffrages étanches et robustes (forte poussée).

## Le béton à hautes performances (BHP)
fc28 ≥ 50 à 60 MPa, **E/C < 0,40**, superplastifiant, souvent **fumée de silice** ; très compact et durable : immeubles de grande hauteur, ponts, ouvrages en milieu agressif.
> [!exemple] Viser 60 MPa
> Avec un CEM I 52,5 (σ'c ≈ 55 MPa) et G = 0,5 : C/E = 60 / 27,5 + 0,5 = **2,68** → pour 450 kg de ciment, E = **168 L** (E/C = 0,37) : impossible à mettre en place sans **superplastifiant**.

## Les bétons légers et lourds
- **Béton léger** (granulats légers : argile expansée, pierre ponce, polystyrène ; ou béton cellulaire) : 600 à 1 800 kg/m³, isolant, pour alléger les planchers et les remplissages ;
- **Béton lourd** (granulats de baryte, de fer) : protection contre les rayonnements (radiologie).

## Les autres bétons
| Béton | Particularité | Usage |
|---|---|---|
| **Fibré** | Fibres d'acier ou de polypropylène | Dallages industriels (moins de fissures), béton projeté |
| **Projeté** | Projeté sur la paroi par voie sèche ou humide | Tunnels, talus, réparations |
| **Cyclopéen** | 30 à 40 % de gros moellons noyés dans le béton | Murs poids, fondations massives économiques |
| **Maigre, drainant** | Peu de ciment, beaucoup de vides | Propreté, sous-couches, parkings perméables |
| **Coulé sous l'eau** | Riche, non délavable, tube plongeur | Pieux, piles en rivière |
| **De masse** | Ciment à faible chaleur (CEM III), refroidissement | Radiers épais, barrages |
| **Précontraint** | Comprimé à l'avance par des câbles tendus | Grandes portées, dalles alvéolées, ponts |

## Le béton en milieu marin
Bord de mer, lagune, ouvrages portuaires : béton **compact** (ciment ≥ 350 à 400 kg/m³, **E/C ≤ 0,45**), ciment résistant (CEM III ou à ajouts adaptés), **enrobage** 4 à 5 cm, vibration et cure soignées, granulats et eau sans chlorures.

> [!retenir]
> - BPE : commandé par classe, consistance, exposition, D max.
> - BAP : sans vibration, contrôle par l'étalement ; BHP : E/C < 0,40, superplastifiant.
> - Légers, lourds, fibrés, projetés, cyclopéens, précontraints : à chaque besoin son béton.
> - Milieu marin : compact, E/C ≤ 0,45, enrobage 4 à 5 cm.`,
 sujet:{titre:"Bétons spéciaux : BPE, béton haute performance, cyclopéen, léger et béton en milieu marin", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Plusieurs ouvrages d'un complexe portuaire et hôtelier à San-Pédro demandent des bétons particuliers.

**Données**
- Poteaux d'une tour : béton visé **fc28 = 55 MPa** ; CEM I 52,5 (σ'c ≈ **55 MPa**) ; granulats de qualité **G = 0,55** ; fm = 1,15 fc28 ; dosage retenu **C = 480 kg/m³** ;
- Mur de soutènement massif de **12 m³** en béton **cyclopéen** avec **30 %** de moellons ; béton de remplissage dosé à **250 kg/m³** ;
- Quai : béton exposé à l'eau de mer ;
- Planchers d'une extension à alléger.

### Partie A — Béton prêt à l'emploi (4 points)
1. Avantages du BPE et éléments de la commande. (2 pts)
2. Qu'est-ce qu'un béton autoplaçant ? Où l'utiliser ? (2 pts)

### Partie B — Béton haute performance (7 points)
3. Calculer fm et le rapport C/E nécessaire. (3 pts)
4. Calculer l'eau et le rapport E/C. Peut-on mettre ce béton en place sans adjuvant ? Quel autre ajout améliore la compacité ? (4 pts)

### Partie C — Béton cyclopéen (4 points)
5. Calculer le volume de béton de remplissage et le nombre de sacs. (2 pts)
6. Règles de mise en œuvre des moellons. (2 pts)

### Partie D — Milieu marin et béton léger (5 points)
7. Quelles exigences pour le béton du quai (ciment, E/C, enrobage) ? (3 pts)
8. Proposer un béton léger pour les planchers et donner son intérêt. (2 pts)`,
  corrige:`### Partie A — BPE (4 pts)
1. Fabrication en **centrale** (pesées, régularité, contrôles), gros volumes, pompage, gain de main-d'œuvre. Commande : **classe de résistance**, **consistance**, **classe d'exposition**, Dmax, volume, heure et cadence de livraison. *(2 pts)*
2. Béton très fluide qui se met en place **sous son seul poids**, sans vibration (beaucoup de fines + superplastifiant) : zones très ferraillées, formes complexes, parements soignés, réduction du bruit. *(2 pts)*

### Partie B — BHP (7 pts)
3. fm = 1,15 × 55 = **63,3 MPa** ; C/E = 63,3 / (0,55 × 55) + 0,5 = **2,59**. *(3 pts)*
4. E = 480 / 2,59 = **185 L** → E/C = **0,39** : trop ferme pour être mis en place sans **superplastifiant** ; on ajoute souvent de la **fumée de silice** (grains très fins qui comblent les vides). *(4 pts)*

### Partie C — Cyclopéen (4 pts)
5. Béton : 12 × 0,70 = **8,4 m³** → 8,4 × 250 = 2 100 kg = **42 sacs**. *(2 pts)*
6. Moellons **propres et humidifiés**, durs, non gélifs ; posés à la main (pas jetés), **sans contact** entre eux ni avec le coffrage (≥ 5 à 10 cm de béton autour), béton vibré entre les moellons. *(2 pts)*

### Partie D — Marin et léger (5 pts)
7. Béton **compact** : ciment ≥ **350 à 400 kg/m³**, **E/C ≤ 0,45**, ciment résistant aux chlorures et sulfates (**CEM III** au laitier), **enrobage 4 à 5 cm**, vibration et cure soignées, sable et eau sans sel. *(3 pts)*
8. Béton de **granulats légers** (argile expansée, pierre ponce) ou béton cellulaire : 600 à 1 800 kg/m³ → planchers et remplissages plus légers, meilleure isolation (mais résistance plus faible). *(2 pts)*

> [!attention] Erreurs à éviter
> - Fabriquer un BHP sans superplastifiant en ajoutant de l'eau.
> - Laisser les moellons se toucher dans un béton cyclopéen.
> - Utiliser un enrobage de 2 cm sur un ouvrage en bord de mer.`},
 exercices:[
  {t:"Béton cyclopéen", d:2, e:`Un mur poids de 18 m³ est réalisé en béton cyclopéen avec 40 % de moellons et un béton dosé à 350 kg/m³. Calculer le volume de béton, les sacs de ciment et l'économie par rapport à un béton plein.`, c:`Béton : 18 × 0,60 = **10,8 m³** ; moellons : **7,2 m³**.
Ciment : 10,8 × 7 = **75,6 sacs** au lieu de 18 × 7 = 126 sacs → économie de **50 sacs** (40 %), en plus d'une chaleur d'hydratation plus faible.`},
  {t:"Alléger un plancher", d:2, e:`Une chape de 15 cm en béton ordinaire (25 kN/m³) est remplacée par un béton léger de 18 kN/m³. Quelle charge permanente gagne-t-on par m² et sur 200 m² ?`, c:`Ordinaire : 0,15 × 25 = **3,75 kN/m²** ; léger : 0,15 × 18 = **2,70 kN/m²** → gain : **1,05 kN/m²**.
Sur 200 m² : **210 kN** (≈ 21 t) de moins sur la structure et les fondations.`},
  {t:"Choisir le béton", d:1, e:`Quel béton proposer pour : a) un voile très ferraillé difficile à vibrer ; b) un dallage d'entrepôt sans treillis ; c) la stabilisation d'un talus rocheux ; d) un quai portuaire ; e) un parking perméable ?`, c:`a) **Autoplaçant** (BAP) ; b) **béton fibré** (fibres métalliques) ; c) **béton projeté** (éventuellement fibré) ; d) béton **marin** compact (E/C ≤ 0,45, CEM III, enrobage 5 cm), voire BHP ; e) béton **drainant**.`},
  {t:"Contrôle d'un BAP", d:1, e:`Un BAP est spécifié avec un étalement de 65 ± 5 cm. Trois mesures donnent 58, 66 et 72 cm. Que faire de chaque camion ?`, c:`58 cm : **trop ferme** (< 60) → risque de mauvais remplissage : refuser ou faire corriger par la centrale (superplastifiant, pas d'eau) ;
66 cm : **conforme** ;
72 cm : **trop fluide** (> 70) → risque de ségrégation : vérifier la stabilité (pas de laitance en périphérie) ; refuser en cas de ségrégation.`},
  {t:"Béton à hautes performances", d:3, e:`On vise fm = 60 MPa avec un CEM I 52,5 (σ'c = 55 MPa) et des granulats concassés de grande qualité (G = 0,55). Calculer C/E et l'eau pour 450 kg de ciment. Comparer avec G = 0,5.`, c:`G = 0,55 : C/E = 60 / (0,55 × 55) + 0,5 = **2,48** → E = 450 / 2,48 = **181 L** (E/C = 0,40).
G = 0,5 : C/E = **2,68** → E = **168 L** (E/C = 0,37).
De meilleurs granulats permettent un peu plus d'eau ; dans les deux cas, un **superplastifiant** est indispensable pour mettre ce béton en place.`}
 ],
 quiz:[
  {q:"Un béton autoplaçant se contrôle par :", o:["L'étalement","L'affaissement seul","La couleur","La température"], r:0, e:"60 à 75 cm environ."},
  {q:"Un BHP a un rapport E/C :", o:["Inférieur à 0,40","Supérieur à 0,70","Égal à 1","Quelconque"], r:0, e:"Très compact."},
  {q:"Le béton cyclopéen contient :", o:["De gros moellons noyés","Des fibres d'acier","Du polystyrène","De la baryte"], r:0, e:"30 à 40 %."},
  {q:"En milieu marin, l'enrobage courant est :", o:["4 à 5 cm","1 cm","0 cm","20 cm"], r:0, e:"Protection contre les chlorures."},
  {q:"Le béton précontraint est :", o:["Comprimé à l'avance par des câbles tendus","Coulé sous l'eau","Plus léger","Sans ciment"], r:0, e:"Grandes portées."}
 ]},
{id:"mat-8", niv:3, titre:"Durabilité et pathologies des matériaux", duree:55, contenu:`## La durabilité
Un ouvrage doit conserver ses performances pendant sa **durée d'utilisation de projet** (50 ans pour un bâtiment courant) sans réparations lourdes. Les agressions viennent de l'environnement : air, eau, sels, sols, soleil, organismes vivants.

## La carbonatation du béton
Le **CO₂** de l'air pénètre progressivement dans le béton et fait baisser son pH (de 13 à 9 environ). Quand le **front de carbonatation** atteint les aciers, ceux-ci ne sont plus protégés et **rouillent**.
$$ x = K × √t      (x en mm, t en années)
K dépend de la qualité du béton (≈ 2 à 3 pour un béton compact, 5 à 8 pour un béton poreux).
> [!exemple] Enrobage et durée de vie
> Béton courant, K ≈ 5 : un enrobage de 15 mm est atteint en (15 / 5)² = **9 ans** ; un enrobage de 30 mm en (30 / 5)² = **36 ans**. Doubler l'enrobage multiplie par 4 la durée de protection.
Test : on pulvérise de la **phénolphtaléine** sur une cassure fraîche : le béton sain devient **rose**, la zone carbonatée reste **grise**.

## Les chlorures, les sulfates et les autres agressions
- **Chlorures** (bord de mer, lagune, sable ou eau salés) : corrosion rapide par **piqûres**, même dans un béton non carbonaté ;
- **Sulfates** (certains sols, eaux usées, eaux de lagune) : formation de produits **gonflants** qui désagrègent le béton → ciments résistants (CEM III) ;
- **Alcali-réaction** : certains granulats réagissent avec les alcalins du ciment → gonflement et fissures en faïençage ;
- **Retrait** et cycles d'humidité : fissures de surface ;
- **Attaques acides** (eaux usées, fosses) : dégradation de la pâte de ciment.

## Les classes d'exposition (principe)
La norme béton (NF EN 206) classe les environnements : **XC** (carbonatation : XC1 sec à XC4 alternance humide/sec), **XS** (eau de mer : XS1 air marin, XS2 immergé, XS3 marnage), **XD** (autres chlorures), **XA** (agressions chimiques). À chaque classe correspondent une **résistance minimale**, un **E/C maximal**, un **dosage minimal** en ciment et un **enrobage** minimal : plus l'exposition est sévère, plus le béton doit être compact et l'enrobage épais.

## La corrosion des aciers
La rouille occupe **plusieurs fois le volume** de l'acier : elle fait éclater le béton d'enrobage (**épaufrures**) ; la section d'acier diminue et la sécurité aussi.

## Maçonneries, enduits et bois
- **Remontées capillaires** : salpêtre, peinture qui cloque en pied de mur ;
- Enduits **faïencés** (séchage trop rapide) ou **décollés** (support poussiéreux) ;
- **Termites** et pourriture des bois : bois durables ou traités, barrière anti-termites, pas de contact avec le sol.

## Diagnostiquer et réparer
1. Relever les désordres (photos, cartographie, largeur des fissures) ;
2. Mesurer : profondeur de carbonatation, **enrobage** (détecteur d'armatures), teneur en chlorures, résistance (scléromètre, carottes) ;
3. Réparer : **purger** le béton dégradé, **brosser et passiver** les aciers, reconstituer avec un **mortier de réparation**, puis protéger (revêtement anti-carbonatation, hydrofuge).

> [!retenir]
> - Carbonatation : x = K √t ; temps pour atteindre l'enrobage e : (e/K)².
> - Chlorures (mer), sulfates (sols, eaux usées), alcali-réaction, acides.
> - Classes d'exposition XC, XS, XD, XA → résistance, E/C, ciment, enrobage.
> - Durabilité = béton compact + enrobage suffisant + bonne cure.`,
 sujet:{titre:"Durabilité du béton armé : carbonatation, chlorures, enrobage et réparation", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un immeuble de 30 ans à Treichville présente des éclatements de béton en sous-face de balcons. On vous demande d'expliquer et de prévenir ces désordres.

**Données**
- Carbonatation : x = K √t (x en mm, t en années) ; béton courant **K = 4** ; béton poreux **K = 7** ; béton compact **K = 2,5** ;
- Enrobages mesurés au détecteur : **20 mm** (balcons) ; enrobage du projet neuf : **35 mm** ;
- Pour un ouvrage neuf en bord de lagune, on vise une durée d'utilisation de **100 ans** pour les éléments principaux.

### Partie A — Mécanismes (6 points)
1. Expliquer la carbonatation et pourquoi elle fait rouiller les armatures. (3 pts)
2. Expliquer l'action des chlorures. Où les rencontre-t-on en Côte d'Ivoire ? (2 pts)
3. Pourquoi la rouille fait-elle éclater le béton ? (1 pt)

### Partie B — Calculs de carbonatation (7 points)
4. Au bout de combien d'années le front de carbonatation atteint-il les aciers des balcons (20 mm), pour un béton courant ? Pour un béton poreux ? (3 pts)
5. Même calcul avec 35 mm d'enrobage et un béton courant. Conclure sur l'effet de l'enrobage. (2 pts)
6. Quel enrobage faudrait-il, avec un béton compact, pour atteindre 100 ans ? (2 pts)

### Partie C — Classes d'exposition (3 points)
7. Expliquer XC, XS et XD et classer : poteau intérieur sec, façade exposée à la pluie, quai en zone de marnage. (3 pts)

### Partie D — Diagnostic et réparation (4 points)
8. Décrire la démarche de diagnostic et la méthode de réparation des balcons. (4 pts)`,
  corrige:`### Partie A — Mécanismes (6 pts)
1. Le **CO₂** de l'air pénètre dans le béton et réagit avec la chaux : le **pH** baisse de 13 à 9 environ. Les aciers, protégés par le milieu basique (passivation), ne le sont plus quand le front atteint l'enrobage : ils rouillent en présence d'eau et d'oxygène. *(3 pts)*
2. Les **chlorures** (sel marin, embruns) détruisent localement la couche protectrice des aciers : corrosion par piqûres, rapide. En bord de **mer** et de **lagune** (Abidjan, Grand-Bassam, San-Pédro), et avec des sables de mer non lavés. *(2 pts)*
3. La rouille occupe un volume **plusieurs fois supérieur** à l'acier : elle pousse le béton d'enrobage, qui se fissure puis éclate. *(1 pt)*

### Partie B — Carbonatation (7 pts)
4. t = (x / K)² : béton courant : (20 / 4)² = **25 ans** ; béton poreux : (20 / 7)² = **8 ans**. Les désordres observés à 30 ans sont donc normaux pour 20 mm d'enrobage. *(3 pts)*
5. (35 / 4)² = **77 ans** : 1,75 fois plus d'enrobage donne **3 fois plus** de durée (le temps varie comme le carré de l'enrobage). *(2 pts)*
6. x = 2,5 × √100 = **25 mm** de carbonatation → enrobage **≥ 30 à 35 mm** avec marge ; en ambiance chlorée, on retient **40 à 50 mm**. *(2 pts)*

### Partie C — Exposition (3 pts)
7. **XC** : carbonatation ; **XS** : eau de mer ; **XD** : chlorures d'autre origine. Poteau intérieur sec : **XC1** ; façade à la pluie : **XC4** ; quai en marnage : **XS3**. *(3 pts)*

### Partie D — Réparation (4 pts)
8. Relevé des désordres, mesure de la **profondeur de carbonatation** (phénolphtaléine), de l'**enrobage**, des **chlorures**, de la résistance. Réparation : **purger** le béton dégradé, dégager et **brosser** les aciers (remplacer ceux qui ont perdu de la section), **passiver**, reconstituer au **mortier de réparation**, puis **protéger** (revêtement anti-carbonatation, hydrofuge) et traiter les causes (gouttes d'eau, étanchéité). *(4 pts)*

> [!attention] Erreurs à éviter
> - Reboucher au mortier ordinaire sans traiter les aciers.
> - Négliger les cales d'enrobage sur le chantier : c'est là que se joue la durabilité.
> - Utiliser du sable de mer non lavé.`},
 exercices:[
  {t:"Durée de protection des aciers", d:1, e:`Pour un béton de coefficient K = 5 mm/an^½, combien d'années pour que la carbonatation atteigne un enrobage de 20 mm ? de 40 mm ?`, c:`20 mm : (20 / 5)² = **16 ans** ; 40 mm : (40 / 5)² = **64 ans**.`},
  {t:"Mesure à la phénolphtaléine", d:2, e:`Sur un poteau de 9 ans, la zone grise (carbonatée) mesure 12 mm. a) Estimer K. b) L'enrobage mesuré est de 25 mm : dans combien de temps la carbonatation l'atteindra-t-elle ?`, c:`a) K = x / √t = 12 / √9 = **4 mm/an^½**.
b) t = (25 / 4)² = **39 ans** après la construction, soit dans environ **30 ans**.`},
  {t:"Choisir la classe d'exposition", d:2, e:`Associer une classe : a) poteaux intérieurs d'un bureau sec ; b) façade exposée à la pluie à 5 km de la mer ; c) poteaux d'un hôtel à 100 m de la plage ; d) pieux d'un quai dans la zone de marnage ; e) regard d'eaux usées.`, c:`a) **XC1** ; b) **XC4** (alternance humide/sec) ; c) **XS1** (air marin) ; d) **XS3** (marnage, la plus sévère) ; e) **XA** (attaque chimique), selon l'agressivité mesurée.`},
  {t:"Lire des désordres", d:2, e:`Associer la cause : a) béton qui éclate au droit des aciers, rouille apparente, bord de lagune ; b) réseau de fissures en carte avec gel blanchâtre, granulats douteux ; c) béton friable et gonflé au contact d'un sol riche en gypse ; d) enduit faïencé fin sur un mur exposé au soleil.`, c:`a) **Corrosion par chlorures** ; b) **alcali-réaction** ; c) attaque par les **sulfates** ; d) **retrait** de l'enduit (séchage trop rapide, enduit trop riche).`},
  {t:"Programme de réparation", d:3, e:`Un balcon en béton armé de 30 ans présente des épaufrures et des aciers rouillés ; enrobage mesuré 10 mm, profondeur carbonatée 22 mm. Proposer la réparation et les mesures pour qu'elle dure.`, c:`1. **Étayer** si nécessaire ; 2. **Purger** tout le béton carbonaté et dégradé autour des aciers ; 3. **Brosser** les aciers, mesurer leur section et **compléter** si la perte est importante ; 4. Appliquer un **passivant** ; 5. Reconstituer avec un **mortier de réparation** en portant l'enrobage à **30 mm** au moins (rehausse si nécessaire) ; 6. **Revêtement anti-carbonatation** et étanchéité/évacuation des eaux du balcon (pente, goutte d'eau) ; 7. Inspection régulière.`}
 ],
 quiz:[
  {q:"La carbonatation du béton :", o:["Fait baisser son pH et dépassive les aciers","Augmente sa résistance aux chlorures","Colore le béton en rose","N'a aucun effet"], r:0, e:"pH 13 → 9."},
  {q:"Doubler l'enrobage multiplie la durée de protection par :", o:["4","2","1","8"], r:0, e:"t = (e/K)²."},
  {q:"La phénolphtaléine colore en rose :", o:["Le béton sain","Le béton carbonaté","Les aciers","La rouille"], r:0, e:"Zone basique."},
  {q:"La classe XS concerne :", o:["L'eau de mer","Le gel","Le feu","Les intérieurs secs"], r:0, e:"Chlorures marins."},
  {q:"Les sulfates provoquent dans le béton :", o:["Des gonflements et une désagrégation","Une coloration rose","Un durcissement","Rien"], r:0, e:"Produits expansifs."}
 ]},
{id:"mat-17", niv:3, titre:"Les essais de laboratoire et la lecture des procès-verbaux", duree:50, contenu:`## Pourquoi des essais ?
Les essais **qualifient** les matériaux avant leur emploi (convenance), **contrôlent** les livraisons et les fabrications, et **diagnostiquent** les ouvrages existants. Ils sont réalisés selon des **normes** (NF EN, normes ivoiriennes CODINORM) par des laboratoires (en Côte d'Ivoire, notamment le LBTP) ; leurs résultats figurent dans un **procès-verbal** (PV).

## L'échantillonnage
Un essai ne vaut que si l'échantillon est **représentatif** : prélèvements en plusieurs points du tas, **quartage** (mélanger, partager en quatre, garder deux quarts opposés, recommencer) jusqu'à la masse voulue ; étiquetage (date, origine, ouvrage).

## Les principaux essais
| Essai | Mesure | Formule ou critère |
|---|---|---|
| Teneur en eau | Eau contenue | w = (Mh − Ms)/Ms |
| Masse volumique réelle (pycnomètre) | ρs des grains | ρs = Ms / V |
| Absorption d'eau | Porosité ouverte des granulats | WA = (Msat − Ms)/Ms |
| Analyse granulométrique | Courbe, module de finesse | Refus cumulés |
| Équivalent de sable, bleu de méthylène | Propreté, argiles | ES ≥ 75 ; VBS faible |
| **Los Angeles** | Résistance aux chocs des gravillons | LA = 100 × m / M |
| **Micro-Deval** | Résistance à l'usure | MDE = 100 × m / M |
| Compression, fendage, flexion | Résistances | F/A ; 2F/(πdL) ; 3FL/(2bh²) |
| Traction des aciers | fe, fu, A % | F/A0 |
| Proctor, CBR (sols) | Compactage, portance | voir Géotechnique |
Pour LA et MDE, m est la masse passant au tamis de 1,6 mm après l'essai et M la masse initiale (5 000 g pour LA).

> [!exemple] Essai Los Angeles
> M = 5 000 g ; après l'essai, 1 350 g passent au tamis de 1,6 mm → LA = 100 × 1 350 / 5 000 = **27** : granulat convenable pour un béton (LA ≤ 30 à 40).

> [!exemple] Masse volumique réelle au pycnomètre
> Échantillon sec : 500 g ; pycnomètre plein d'eau : 1 450 g ; pycnomètre + échantillon + eau : 1 760 g.
> Volume des grains = 500 + 1 450 − 1 760 = **190 cm³** → ρs = 500 / 190 = **2,63 g/cm³**.

## Lire un procès-verbal
Un PV indique : l'identification de l'échantillon, la norme d'essai, les résultats bruts et calculés, parfois les **spécifications** et un avis de conformité. Le lecteur doit :
1. vérifier qu'il s'agit **du bon matériau** et du bon ouvrage (date, provenance) ;
2. comparer chaque résultat à la **spécification** du marché (CCTP) ;
3. repérer les résultats **hors tolérance** et leurs conséquences ;
4. décider : accepter, refuser, demander une contre-expertise ou des essais complémentaires.

> [!retenir]
> - Échantillon représentatif (quartage).
> - LA = 100 m / M (chocs) ; MDE (usure) ; pycnomètre pour ρs ; absorption WA.
> - Lire un PV : bon échantillon, comparaison aux spécifications, décision.`,
 sujet:{titre:"Essais de laboratoire sur granulats et lecture critique d'un procès-verbal", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une carrière propose ses gravillons pour un chantier routier et un immeuble à Bouaké. Vous exploitez le dossier d'essais et le procès-verbal.

**Données**
- **Los Angeles** : 5 000 g de gravillons ; après l'essai, **1 550 g** passent au tamis de 1,6 mm ; LA = 100 × m / M ;
- **Micro-Deval** : 500 g ; **72 g** passent au tamis de 1,6 mm ;
- **Pycnomètre** : échantillon sec **600 g** ; pycnomètre plein d'eau **1 480 g** ; pycnomètre + échantillon + eau **1 850 g** ;
- **Absorption** : 600 g secs → **607,2 g** après imbibition 24 h (surface sèche) ;
- **Équivalent de sable** du sable associé : h1 = **12,5 cm**, h2 = **9,8 cm** ;
- Spécifications du CCTP : béton : LA ≤ **40** ; couche de roulement : LA ≤ **25** et MDE ≤ **20** ; absorption ≤ **2,5 %** ; ES ≥ **75**.

### Partie A — Résistance des gravillons (7 points)
1. Expliquer le principe de l'essai Los Angeles et du Micro-Deval. (2 pts)
2. Calculer LA et MDE. (3 pts)
3. Le gravillon convient-il pour le béton ? Pour la couche de roulement ? (2 pts)

### Partie B — Masse volumique et absorption (6 points)
4. Calculer le volume des grains et la masse volumique réelle. (3 pts)
5. Calculer le coefficient d'absorption. Conforme ? (2 pts)
6. Pourquoi l'absorption intéresse-t-elle le formulateur du béton ? (1 pt)

### Partie C — Sable (2 points)
7. Calculer l'ES et conclure. (2 pts)

### Partie D — Lecture d'un PV (5 points)
8. Décrire la démarche de lecture critique d'un procès-verbal d'essais. (3 pts)
9. Le PV d'un lot porte une date de prélèvement antérieure à l'ouverture de la carrière exploitée. Que faire ? (2 pts)`,
  corrige:`### Partie A — Gravillons (7 pts)
1. **Los Angeles** : les gravillons tournent dans un tambour avec des boulets d'acier → résistance aux **chocs** ; **Micro-Deval** : rotation avec de l'eau et de petites billes → résistance à l'**usure** par frottement. Plus la valeur est faible, meilleur est le granulat. *(2 pts)*
2. LA = 100 × 1 550 / 5 000 = **31** ; MDE = 100 × 72 / 500 = **14,4**. *(3 pts)*
3. Béton : 31 ≤ 40 ✔ ; couche de roulement : LA 31 > 25 ✘ (MDE 14,4 ✔) → **refusé pour la couche de roulement**. *(2 pts)*

### Partie B — Masse volumique (6 pts)
4. V = 600 + 1 480 − 1 850 = **230 cm³** → ρs = 600 / 230 = **2,61 g/cm³**. *(3 pts)*
5. Ab = (607,2 − 600) / 600 = **1,2 %** ≤ 2,5 % ✔. *(2 pts)*
6. Un granulat sec absorbe une partie de l'eau de gâchage : il faut en tenir compte dans la correction d'eau (sinon béton trop sec). *(1 pt)*

### Partie C — Sable (2 pts)
7. ES = 100 × 9,8 / 12,5 = **78** ≥ 75 ✔ → sable propre. *(2 pts)*

### Partie D — PV (5 pts)
8. Vérifier qu'il s'agit **du bon matériau**, du bon lot et de la bonne provenance (dates, lieu de prélèvement, laboratoire) ; comparer **chaque résultat** à la spécification du CCTP ; repérer les valeurs **hors tolérance** et leurs conséquences ; **décider** : accepter, refuser, demander une contre-expertise ou des essais complémentaires. *(3 pts)*
9. Le PV ne peut pas concerner le matériau livré : il est **non recevable**. Demander de **nouveaux essais** sur des échantillons prélevés contradictoirement sur le stock livré. *(2 pts)*

> [!attention] Erreurs à éviter
> - Juger un granulat sur un seul critère.
> - Accepter un PV sans vérifier dates et provenance.
> - Confondre LA (chocs) et MDE (usure).`},
 exercices:[
  {t:"Los Angeles et Micro-Deval", d:1, e:`Un gravillon donne à l'essai Los Angeles 1 150 g passant à 1,6 mm (M = 5 000 g) et à l'essai Micro-Deval 260 g passant à 1,6 mm (M = 500 g). Calculer LA et MDE. Le CCTP d'une couche de roulement exige LA ≤ 25 et MDE ≤ 20 : conforme ?`, c:`LA = 100 × 1 150 / 5 000 = **23** ✔ ; MDE = 100 × 260 / 500 = **52** ✘.
Le granulat résiste bien aux chocs mais **s'use trop** : non conforme pour une couche de roulement (utilisable en béton ou en couche de base selon les spécifications).`},
  {t:"Masse volumique au pycnomètre", d:2, e:`Échantillon sec : 600 g ; pycnomètre plein d'eau : 1 520 g ; pycnomètre + échantillon + eau : 1 893 g. Calculer le volume des grains et ρs.`, c:`V = 600 + 1 520 − 1 893 = **227 cm³** → ρs = 600 / 227 = **2,64 g/cm³** (granulat siliceux courant).`},
  {t:"Absorption d'un gravillon", d:1, e:`Un gravillon pèse 2,000 kg sec et 2,030 kg saturé surface sèche. Calculer son absorption. Est-ce un bon granulat à béton (exigence courante WA ≤ 2,5 %) ?`, c:`WA = (2,030 − 2,000) / 2,000 = **1,5 %** ≤ 2,5 % ✔ : granulat peu poreux, convenable. Il faudra tenir compte de cette absorption dans l'eau de gâchage si le gravillon est sec.`},
  {t:"Lire un PV d'essais sur sable", d:2, e:`Le PV d'un sable indique : ES = 68 ; Mf = 3,4 ; teneur en chlorures 0,08 %. Spécifications du CCTP pour béton armé : ES ≥ 75 ; 2,2 ≤ Mf ≤ 2,8 ; chlorures ≤ 0,03 %. Conclure.`, c:`- ES = 68 < 75 : **trop argileux** ✘ ;
- Mf = 3,4 > 2,8 : **trop grossier** ✘ ;
- Chlorures 0,08 % > 0,03 % : **trop salé** ✘ (probablement sable de lagune non lavé).
Le sable est **refusé** pour le béton armé ; demander un sable lavé d'une autre origine et un nouveau PV.`},
  {t:"Préparer un échantillon", d:1, e:`Expliquer comment prélever un échantillon représentatif d'un tas de 20 m³ de sable pour une analyse granulométrique, puis le réduire à 2 kg.`, c:`Prélever plusieurs **sous-échantillons** (au pied, au milieu et en haut du tas, sur plusieurs faces, après avoir enlevé la couche superficielle), les **mélanger**, puis réduire par **quartage** : étaler en galette, partager en quatre, garder deux quarts opposés, remélanger, recommencer jusqu'à ≈ 2 kg ; ensacher et étiqueter (date, provenance, ouvrage).`}
 ],
 quiz:[
  {q:"L'essai Los Angeles mesure :", o:["La résistance aux chocs","La propreté","La teneur en eau","La couleur"], r:0, e:"Fragmentation."},
  {q:"Le quartage sert à :", o:["Réduire un échantillon de façon représentative","Peser le ciment","Mesurer la résistance","Calculer la TVA"], r:0, e:"Diviser en quatre."},
  {q:"LA = 30 pour M = 5 000 g signifie qu'il est passé à 1,6 mm :", o:["1 500 g","300 g","30 g","3 000 g"], r:0, e:"100 × m/M."},
  {q:"Le pycnomètre permet de mesurer :", o:["La masse volumique réelle des grains","La résistance","La granulométrie","Le pH"], r:0, e:"Volume par déplacement d'eau."},
  {q:"Face à un PV hors spécifications, on :", o:["Refuse ou demande des essais complémentaires","Ignore le résultat","Ajoute de l'eau","Change la date"], r:0, e:"Décision argumentée."}
 ]},
{id:"mat-9", niv:3, titre:"Matériaux écologiques et construction bas carbone", duree:45, contenu:`## L'énergie grise et le carbone
Fabriquer et transporter les matériaux consomme de l'énergie (**énergie grise**) et émet du CO₂. Le **ciment** est le plus gros poste : environ **0,8 à 0,9 t de CO₂ par tonne de clinker**. L'**acier** et l'**aluminium** sont aussi très émetteurs ; le bois, la terre et les matériaux locaux beaucoup moins.

## Réduire le carbone du béton
- Choisir des **ciments composés** (CEM II, CEM III) : moins de clinker, donc moins de CO₂ ;
- **Ne pas surdoser** par habitude : formuler (Dreux) et contrôler ;
- Optimiser les **sections** (calcul juste, pas de surdimensionnement), les **planchers** (corps creux plutôt que dalles pleines épaisses) ;
- Bétons à **liants alternatifs** (géopolymères, argiles calcinées), granulats **recyclés** pour les usages non structurels.
> [!exemple] Carbone d'un m³ de béton dosé à 350 kg
> CEM I (95 % de clinker) : 350 × 0,95 × 0,85 ≈ **283 kg de CO₂** ; CEM II/B-L (≈ 70 % de clinker) : 350 × 0,70 × 0,85 ≈ **208 kg** → **− 26 %**. Pour les 30 m³ d'une maison : 8,5 t contre 6,2 t de CO₂.

## La brique de terre comprimée (BTC)
Terre latéritique tamisée, stabilisée avec **6 à 8 % de ciment**, comprimée et séchée à l'ombre : résistance 4 à 6 MPa, bon confort thermique, matériau local.
> [!exemple] Ciment par m² de mur
> BTC 29,5 × 14 × 9,5 cm : ≈ 31 briques/m² à ≈ 0,5 kg de ciment → **≈ 16 kg/m²**.
> Agglos creux de 15 : 12,5 blocs/m² à ≈ 2,3 kg de ciment chacun → ≈ 29 kg/m², plus ≈ 4,5 kg de mortier → **≈ 33,5 kg/m²**.

## D'autres matériaux à valoriser
- **Bois** local issu de forêts gérées durablement ; **bambou** traité pour les structures légères ;
- **Isolants biosourcés** : fibre de coco, typha, kapok ;
- **Terre cuite** locale, **pierres** des carrières proches ;
- **Granulats recyclés** de démolition (remblais, bétons non structurels) ;
- **Réemploi** : portes, tuiles, poutres en bon état.

## Penser au cycle de vie
Un matériau « écologique » qui doit être remplacé souvent ne l'est pas : il faut considérer la **durabilité**, l'**entretien**, la **consommation d'énergie en usage** (isolation, protection solaire) et la **fin de vie** (démontage, recyclage).

> [!retenir]
> - Ciment : ≈ 0,85 t de CO₂ par tonne de clinker ; préférer les ciments composés et bien doser.
> - BTC, bois, terre cuite, matériaux locaux : moins de transport et de carbone.
> - Raisonner sur tout le cycle de vie : fabrication, usage, entretien, fin de vie.`,
 sujet:{titre:"Construire bas carbone : ciments, murs en BTC et bilan d'une maison", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un promoteur veut afficher une maison « bas carbone » à Bingerville. Vous comparez des solutions.

**Données**
- CO₂ émis par la fabrication du clinker : **0,85 kg par kg de clinker** ;
- Taux de clinker : CEM I **95 %** ; CEM II/B-L **70 %** ; CEM III/A **40 %** ;
- Maison : **40 m³** de béton dosé à **350 kg/m³** ; **180 m²** de murs ;
- Ciment par m² de mur : agglos creux de 15 (blocs + mortier) **33,5 kg/m²** ; BTC (29,5 × 14 × 9,5) **16 kg/m²** ; facteur moyen pour ces ciments : **0,6 kg de CO₂ par kg de ciment**.

### Partie A — Pourquoi bas carbone (4 points)
1. Pourquoi le ciment pèse-t-il autant dans le bilan carbone d'un bâtiment ? (2 pts)
2. Citer quatre leviers pour réduire l'empreinte carbone d'une construction. (2 pts)

### Partie B — Choix du ciment (8 points)
3. Calculer le CO₂ d'un m³ de béton avec chacun des trois ciments. (3 pts)
4. Calculer le CO₂ des 40 m³ pour chaque ciment et l'économie par rapport au CEM I. (3 pts)
5. Quelle précaution prendre avec un ciment à forte teneur en laitier (décoffrage, cure) ? (2 pts)

### Partie C — Murs (5 points)
6. Calculer le ciment des murs en agglos et en BTC, puis l'économie de CO₂. (3 pts)
7. Quels autres avantages et quelles conditions pour les BTC ? (2 pts)

### Partie D — Autres matériaux (3 points)
8. Proposer trois autres choix bas carbone pour cette maison (structure, toiture, isolation, chantier). (3 pts)`,
  corrige:`### Partie A — Enjeux (4 pts)
1. La cuisson du clinker à **1 450 °C** consomme beaucoup d'énergie et la **décarbonatation** du calcaire libère du CO₂ : le ciment est l'un des premiers émetteurs industriels, et le béton le matériau le plus utilisé. *(2 pts)*
2. Ciments à **ajouts** (moins de clinker) ; **dosages justes** (pas de surdosage) ; **matériaux locaux** (terre, BTC, bois) et moins de transport ; **conception bioclimatique** (moins de climatisation) ; réemploi et recyclage ; durabilité (ouvrages qui durent). *(2 pts)*

### Partie B — Ciment (8 pts)
3. *(3 pts)*
   - CEM I : 350 × 0,95 × 0,85 = **283 kg CO₂/m³** ;
   - CEM II/B-L : 350 × 0,70 × 0,85 = **208 kg** ;
   - CEM III/A : 350 × 0,40 × 0,85 = **119 kg**.
4. 40 m³ : CEM I **11,3 t** ; CEM II/B **8,3 t** (− 3,0 t, − 26 %) ; CEM III/A **4,8 t** (− 6,5 t, − 58 %). *(3 pts)*
5. Montée en résistance plus **lente** : délais de décoffrage plus longs, **cure humide prolongée** (plus sensible à la dessiccation au jeune âge). *(2 pts)*

### Partie C — Murs (5 pts)
6. Agglos : 180 × 33,5 = **6 030 kg** de ciment ; BTC : 180 × 16 = **2 880 kg** → 3 150 kg de ciment en moins × 0,6 = **≈ 1,9 t de CO₂** évitées. *(3 pts)*
7. Confort thermique (inertie), terre locale, emplois locaux ; conditions : terre adaptée et testée, presse et contrôle de qualité, **protection contre l'eau** (soubassement, débords). *(2 pts)*

### Partie D — Autres choix (3 pts)
8. Charpente en **bois local** certifié et traité ; isolation en **fibres végétales** (coco, typha) ; toiture claire et ventilée ; **chauffe-eau solaire** et panneaux photovoltaïques ; récupération des eaux de pluie ; tri des déchets de chantier ; approvisionnement local. *(3 pts)*

> [!attention] Erreurs à éviter
> - Croire qu'un matériau « naturel » est toujours meilleur : il faut le bilan complet (transport, durabilité).
> - Réduire le ciment au détriment de la résistance ou de la durabilité exigée.
> - Oublier la cure plus longue des ciments à ajouts.`},
 exercices:[
  {t:"Carbone du béton d'une maison", d:2, e:`Une maison utilise 30 m³ de béton dosé à 350 kg/m³. Comparer les émissions de CO₂ du ciment avec un CEM I (95 % de clinker) et un CEM II/B (70 % de clinker), à 0,85 t de CO₂ par tonne de clinker.`, c:`CEM I : 30 × 350 × 0,95 × 0,85 = **8 479 kg ≈ 8,5 t** de CO₂.
CEM II/B : 30 × 350 × 0,70 × 0,85 = **6 248 kg ≈ 6,2 t** → économie de **2,2 t** (− 26 %), pour un béton de structure courant tout à fait adapté.`},
  {t:"Murs en BTC ou en agglos", d:2, e:`Une maison compte 120 m² de murs. Comparer le ciment consommé avec des BTC (16 kg/m²) et des agglos creux de 15 (33,5 kg/m² mortier compris), puis le CO₂ correspondant (≈ 0,7 kg de CO₂ par kg de ciment composé).`, c:`BTC : 120 × 16 = **1 920 kg** de ciment → ≈ **1,3 t** de CO₂.
Agglos : 120 × 33,5 = **4 020 kg** → ≈ **2,8 t** de CO₂.
Les BTC divisent par deux le ciment et le carbone des murs.`},
  {t:"Ne pas surdoser", d:1, e:`Un entrepreneur dose « par sécurité » tous ses bétons à 400 kg/m³ au lieu de 350. Pour 50 m³, combien de sacs et de CO₂ (0,6 t de CO₂ par tonne de ciment composé) gaspille-t-il ? Quelle meilleure démarche ?`, c:`Surplus : 50 × 50 = **2 500 kg** de ciment = **50 sacs** → ≈ **1,5 t** de CO₂ en trop (et un coût inutile, plus de retrait et de fissures).
Meilleure démarche : **formuler** le béton, contrôler l'eau et la fabrication, vérifier par des **éprouvettes** : la régularité vaut mieux que le surdosage.`},
  {t:"Choisir des matériaux durables", d:2, e:`Pour un centre de santé rural, proposer des choix de matériaux réduisant le carbone et les coûts d'usage, pour : les murs, la toiture, l'isolation, les menuiseries.`, c:`- **Murs** : BTC stabilisées (terre locale), soubassement en moellons ;
- **Toiture** : charpente en bois local traité, tôle claire ou réfléchissante, larges débords ;
- **Isolation** : faux plafond avec isolant biosourcé (fibre de coco) ou laine minérale, combles ventilés ;
- **Menuiseries** : bois local durable ou aluminium recyclable, persiennes et nacos pour la ventilation naturelle (moins de climatisation).`},
  {t:"Cycle de vie", d:2, e:`Une peinture A coûte 6 000 F/m² et dure 8 ans ; une peinture B coûte 4 000 F/m² et dure 4 ans. Sur 24 ans, comparer le coût et le nombre d'interventions. Que conclure pour l'environnement ?`, c:`A : 24 / 8 = **3 applications** → 18 000 F/m² ; B : 24 / 4 = **6 applications** → 24 000 F/m².
La peinture la plus chère à l'achat est la **moins chère sur la durée**, et elle divise par deux les produits consommés, les déchets et les échafaudages : la **durabilité** est un critère écologique majeur.`}
 ],
 quiz:[
  {q:"Le poste le plus émetteur de CO₂ dans le béton est :", o:["Le ciment (clinker)","Le sable","L'eau","Le gravier"], r:0, e:"≈ 0,85 t CO₂/t de clinker."},
  {q:"Un ciment composé (CEM II) émet :", o:["Moins de CO₂ qu'un CEM I","Plus de CO₂","Autant","Aucun CO₂"], r:0, e:"Moins de clinker."},
  {q:"Les BTC consomment par m² de mur environ :", o:["Deux fois moins de ciment que les agglos","Dix fois plus","Autant","Pas du tout de terre"], r:0, e:"≈ 16 contre ≈ 33 kg."},
  {q:"L'énergie grise est :", o:["L'énergie de fabrication et de transport des matériaux","L'électricité du chantier","La lumière du jour","Un type de peinture"], r:0, e:"Énergie cachée."},
  {q:"Un matériau vraiment écologique doit aussi être :", o:["Durable","Importé de loin","Remplacé souvent","Surdosé"], r:0, e:"Cycle de vie."}
 ]}
]});
