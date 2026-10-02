A.addMatiere({
 id:'math', titre:'Mathématiques', court:'Maths', groupe:'fond', icone:'sigma', couleur:'#2F6FDB', niveau:'Débutant', heures:24, ordre:1,
 resume:"Calcul numérique, unités, géométrie, trigonométrie, volumes, équations et proportionnalité : les outils de calcul de tous les jours sur un chantier.",
 objectifs:["Maîtriser les puissances de 10, les unités et les conversions","Calculer aires, périmètres et volumes d'ouvrages","Utiliser Pythagore et la trigonométrie (pentes, toitures, escaliers)","Résoudre des équations et lire une échelle de plan"],
 applications:["Surfaces de carrelage et de peinture","Volumes de béton et de fouilles","Pente d'une toiture, d'une rampe ou d'une canalisation","Lecture des plans au 1/50 et au 1/100"],
 chapitres:[
{id:'math-1', niv:1, titre:'Calcul numérique, unités et conversions', duree:25, contenu:`## Les puissances de 10
Les ingénieurs manipulent des nombres très grands (charges en newtons) et très petits (déformations). On les écrit avec des **puissances de 10** :
- 10³ = 1 000 ; 10⁶ = 1 000 000 ; 10⁻³ = 0,001.
- **Notation scientifique** : 25 000 000 = 2,5 × 10⁷ ; 0,000 45 = 4,5 × 10⁻⁴.
- Règles : 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ ; 10ᵃ / 10ᵇ = 10ᵃ⁻ᵇ ; (10ᵃ)ᵇ = 10ᵃᵇ.

## Les préfixes
| Préfixe | Symbole | Valeur |
|---|---|---|
| méga | M | 10⁶ |
| kilo | k | 10³ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |

## Conversions indispensables sur un chantier
- **Longueurs** : 1 m = 100 cm = 1 000 mm.
- **Surfaces** : 1 m² = 10 000 cm² (car 100 × 100). 1 hectare = 10 000 m².
- **Volumes** : 1 m³ = 1 000 litres = 1 000 000 cm³ ; 1 litre = 1 dm³.
- **Masses** : 1 tonne = 1 000 kg.
- **Forces** : un poids de 1 kg exerce environ **10 N** (9,81 N exactement). 1 kN = 1 000 N ≈ 100 kg ; 1 t ≈ 10 kN.
- **Contraintes et pressions** : 1 MPa = 1 N/mm² = 1 000 kPa = 10 bars ; 1 bar ≈ 1 kg/cm² ≈ 10 t/m².

> [!attention]
> L'erreur la plus fréquente est de convertir les **m²** et les **m³** comme des mètres. 1 m² ne vaut pas 100 cm² mais **10 000 cm²** ; 1 m³ vaut **1 000 000 cm³**.

> [!exemple] Section d'acier
> Une barre HA12 a un diamètre de 12 mm. Sa section vaut π × 12² / 4 = 113 mm² = **1,13 cm²** (on divise par 100 pour passer des mm² aux cm²).

## Pourcentages et arrondis
- Prendre 15 % d'une quantité : multiplier par 0,15. Augmenter de 10 % : multiplier par **1,10**.
- On arrondit les quantités à commander **par excès** : 6,2 sacs → 7 sacs.
- On garde 2 ou 3 chiffres significatifs pour un résultat de calcul : 4,4932 cm² → 4,49 cm².

> [!retenir]
> 1 t ≈ 10 kN · 1 MPa = 1 N/mm² = 10 bars · 1 m³ = 1 000 L · 1 m² = 10 000 cm².`,
 quiz:[
  {q:"Combien de cm² y a-t-il dans 1 m² ?", o:["100","1 000","10 000","1 000 000"], r:2, e:"1 m² = 100 cm × 100 cm = 10 000 cm²."},
  {q:"Une contrainte de 25 MPa correspond à :", o:["25 N/mm²","25 kN/m²","2,5 bars","250 N/mm²"], r:0, e:"1 MPa = 1 N/mm², donc 25 MPa = 25 N/mm² (= 250 bars)."},
  {q:"Une charge de 3,5 tonnes vaut environ :", o:["3,5 kN","35 kN","350 kN","0,35 kN"], r:1, e:"1 t ≈ 10 kN, donc 3,5 t ≈ 35 kN."},
  {q:"Combien de litres dans 0,45 m³ de sable ?", o:["45 L","450 L","4 500 L","4,5 L"], r:1, e:"1 m³ = 1 000 L, donc 0,45 m³ = 450 L."},
  {q:"Pour commander 6,2 sacs de ciment calculés, on commande :", o:["6 sacs","6,2 sacs","7 sacs","5 sacs"], r:2, e:"Les quantités à commander s'arrondissent toujours par excès."}
 ]},
{id:'math-2', niv:1, titre:'Géométrie plane : aires et périmètres', duree:25, contenu:`## Les formules de base
| Figure | Aire | Périmètre |
|---|---|---|
| Carré de côté a | a² | 4a |
| Rectangle L × l | L × l | 2(L + l) |
| Triangle (base b, hauteur h) | b × h / 2 | somme des côtés |
| Trapèze (bases B et b, hauteur h) | (B + b) × h / 2 | somme des côtés |
| Disque de rayon r | π r² | 2 π r |
| Parallélogramme | b × h | 2(a + b) |

## Décomposer les formes complexes
Une pièce en L, un terrain irrégulier ou une façade avec pignon se calculent en **découpant** en figures simples, puis en additionnant (ou en soustrayant).

> [!exemple] Façade avec pignon
> Façade de 9,00 m de large, murs de 3,00 m de haut, pignon triangulaire de 1,50 m de haut.
> Rectangle : 9,00 × 3,00 = 27,00 m². Triangle : 9,00 × 1,50 / 2 = 6,75 m².
> Total brut : **33,75 m²**. On retire ensuite les ouvertures : porte 1,00 × 2,20 = 2,20 m² et deux fenêtres 1,20 × 1,20 = 2,88 m². Surface nette : 33,75 − 5,08 = **28,67 m²** à enduire.

## Surface d'un terrain par triangulation
Un terrain quelconque se découpe en triangles. Si l'on connaît les trois côtés a, b, c d'un triangle, la **formule de Héron** donne l'aire :
$$ p = (a + b + c) / 2
$$ S = √( p (p − a)(p − b)(p − c) )

> [!exemple]
> Triangle de côtés 20 m, 25 m et 30 m : p = 37,5 ; S = √(37,5 × 17,5 × 12,5 × 7,5) = √61 523 ≈ **248 m²**.

## Applications courantes
- **Carrelage** : surface du sol + 5 à 10 % de chutes.
- **Plinthes** : périmètre de la pièce moins les largeurs de portes.
- **Peinture** : surface des murs (périmètre × hauteur) moins les ouvertures, plus le plafond.

> [!astuce]
> Vérifiez toujours l'ordre de grandeur : une chambre fait 9 à 16 m², un séjour 20 à 35 m². Un résultat de 120 m² pour une chambre signale une erreur d'unité.`,
 quiz:[
  {q:"Aire d'un trapèze de bases 6 m et 4 m et de hauteur 3 m :", o:["15 m²","30 m²","12 m²","18 m²"], r:0, e:"(6 + 4) × 3 / 2 = 15 m²."},
  {q:"Périmètre d'une pièce de 4,00 m × 3,50 m :", o:["14,00 m","15,00 m","7,50 m","14,50 m"], r:1, e:"2 × (4,00 + 3,50) = 15,00 m."},
  {q:"Aire d'un disque de 2 m de diamètre :", o:["6,28 m²","3,14 m²","12,57 m²","1,57 m²"], r:1, e:"Rayon = 1 m, aire = π × 1² ≈ 3,14 m²."},
  {q:"Pour calculer les plinthes d'une pièce, on prend :", o:["La surface du sol","Le périmètre moins les portes","Le périmètre plus les portes","La hauteur des murs"], r:1, e:"Les plinthes se posent le long des murs, sauf au droit des portes."}
 ]},
{id:'math-3', niv:2, titre:'Pythagore et trigonométrie', duree:30, contenu:`## Le théorème de Pythagore
Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.
!fig:triangle|Triangle rectangle : côtés et angle

$$ c² = a² + b²

**Application : l'angle droit au cordeau (3-4-5).** Un triangle de côtés 3, 4 et 5 est rectangle car 3² + 4² = 9 + 16 = 25 = 5². Sur le chantier on utilise 3 m, 4 m, 5 m ou leurs multiples (6-8-10).

## Les rapports trigonométriques
$$ cos α = adjacent / hypoténuse
$$ sin α = opposé / hypoténuse
$$ tan α = opposé / adjacent

Pour retrouver l'angle : α = arctan(opposé / adjacent) (touche tan⁻¹ de la calculatrice, en mode **degrés**).

## Pente en pourcentage
La pente est le rapport **dénivelé / distance horizontale**, exprimé en % :
$$ p (%) = 100 × h / L = 100 × tan α

- Pente de 100 % = 45°. Pente de 15 % ≈ 8,5°.
- Canalisation d'eaux usées : pente de **1 à 3 %**, soit 1 à 3 cm par mètre.

> [!exemple] Toiture en tôle
> Bâtiment de 9,00 m de large, toiture à deux versants avec une pente de 15 %. Demi-portée : 4,50 m.
> Hauteur du faîtage au-dessus des murs : h = 0,15 × 4,50 = **0,675 m**.
> Longueur du rampant : √(4,50² + 0,675²) = √(20,25 + 0,456) = **4,55 m** (avant débord). Angle : arctan(0,15) ≈ **8,5°**.

> [!exemple] Contrôle d'une diagonale
> Une pièce de 5,00 × 3,60 m doit avoir une diagonale de √(25 + 12,96) = √37,96 = **6,16 m**. Si on mesure 6,20 m, les murs ne sont pas d'équerre.

## Le cercle trigonométrique
!fig:cercle-trigo|Cercle trigonométrique de rayon 1
Valeurs à connaître : sin 30° = 0,5 ; cos 60° = 0,5 ; sin 45° = cos 45° ≈ 0,707 ; tan 45° = 1.

> [!retenir]
> Pythagore pour les longueurs, la trigonométrie pour les angles, la pente en % = 100 × h / L.`,
 quiz:[
  {q:"Un triangle de côtés 6 m, 8 m et 10 m est-il rectangle ?", o:["Oui","Non","Seulement si l'angle est de 60°","On ne peut pas savoir"], r:0, e:"6² + 8² = 36 + 64 = 100 = 10² : il est rectangle."},
  {q:"Une rampe monte de 0,50 m sur 10 m horizontaux. Sa pente vaut :", o:["0,5 %","5 %","50 %","20 %"], r:1, e:"100 × 0,50 / 10 = 5 %."},
  {q:"Quelle est la diagonale d'un rectangle de 4 m × 3 m ?", o:["7 m","5 m","6 m","12 m"], r:1, e:"√(16 + 9) = √25 = 5 m."},
  {q:"tan α est égal à :", o:["opposé / hypoténuse","adjacent / hypoténuse","opposé / adjacent","adjacent / opposé"], r:2, e:"La tangente est le rapport du côté opposé sur le côté adjacent."},
  {q:"Une pente de 100 % correspond à un angle de :", o:["90°","100°","45°","60°"], r:2, e:"100 % signifie h = L, donc tan α = 1 et α = 45°."}
 ]},
{id:'math-4', niv:2, titre:'Volumes : béton, fouilles et déblais', duree:30, contenu:`## Formules des volumes
| Solide | Volume |
|---|---|
| Parallélépipède (L × l × h) | L × l × h |
| Prisme (aire de base S, hauteur h) | S × h |
| Cylindre (rayon r, hauteur h) | π r² h |
| Pyramide ou cône (base S, hauteur h) | S × h / 3 |
| Tronc de pyramide (bases S₁, S₂) | h/3 × (S₁ + S₂ + √(S₁ S₂)) |

## Applications au béton
> [!exemple] Poteaux
> 12 poteaux de 20 × 20 cm et de 3,00 m de haut : 12 × 0,20 × 0,20 × 3,00 = **1,44 m³**.

> [!exemple] Semelles et longrines
> 16 semelles de 1,00 × 1,00 × 0,30 m : 16 × 0,30 = **4,80 m³**.
> 62 m de longrines 20 × 30 : 62 × 0,20 × 0,30 = **3,72 m³**.

> [!exemple] Poteau circulaire
> Diamètre 30 cm, hauteur 3,50 m : π × 0,15² × 3,50 = **0,247 m³**.

## Fouilles et déblais
- Volume de **fouilles en place** : dimensions de la fouille (souvent plus grandes que l'ouvrage pour pouvoir travailler).
- Les terres extraites **foisonnent** : elles occupent plus de place une fois remuées. Volume à évacuer = volume en place × **coefficient de foisonnement** (1,2 à 1,4).

> [!exemple]
> 20 m³ de fouilles dans une argile (foisonnement 1,30) : 20 × 1,30 = **26 m³** à évacuer, soit environ 4 camions de 7 m³.

## Talus et tronc de pyramide
Une fouille aux parois inclinées (talutée) est un **tronc de pyramide**. Fond 2 × 2 m (S₂ = 4 m²), haut 3 × 3 m (S₁ = 9 m²), profondeur 1,50 m :
$$ V = 1,50 / 3 × (9 + 4 + √36) = 0,5 × 19 = 9,5 m³

> [!retenir]
> Toujours mettre toutes les dimensions dans la **même unité** (le mètre) avant de multiplier. 20 cm = 0,20 m.`,
 quiz:[
  {q:"Volume de 10 poteaux 20 × 20 cm de 3 m de haut :", o:["1,2 m³","12 m³","0,12 m³","120 m³"], r:0, e:"10 × 0,2 × 0,2 × 3 = 1,2 m³."},
  {q:"Volume d'un cône de base 3 m² et de hauteur 2 m :", o:["6 m³","2 m³","3 m³","1,5 m³"], r:1, e:"S × h / 3 = 3 × 2 / 3 = 2 m³."},
  {q:"Le foisonnement signifie que :", o:["La terre se tasse","Le volume augmente une fois la terre remuée","Le béton gonfle en séchant","L'eau s'évapore"], r:1, e:"Une terre extraite occupe un volume plus grand qu'en place."},
  {q:"30 m de longrines 20 × 30 cm représentent :", o:["1,8 m³","18 m³","0,18 m³","6 m³"], r:0, e:"30 × 0,20 × 0,30 = 1,8 m³."}
 ]},
{id:'math-5', niv:2, titre:'Équations, fonctions et systèmes', duree:30, contenu:`## Équations du premier degré
Résoudre a x + b = c : on isole x en effectuant la même opération des deux côtés : x = (c − b) / a.

> [!exemple]
> Un devis comprend un forfait d'installation de 450 000 F et 9 500 F par m² de maçonnerie. Pour un budget de 1 400 000 F : 450 000 + 9 500 x = 1 400 000 → x = 950 000 / 9 500 = **100 m²**.

## Fonctions affines
Une fonction affine s'écrit **f(x) = a x + b** : a est la **pente** (coefficient directeur), b l'**ordonnée à l'origine**. Sa représentation est une droite. Exemple : coût total = coût variable × quantité + coût fixe.

## Équation du second degré
a x² + b x + c = 0. On calcule le discriminant **Δ = b² − 4ac** :
- Δ > 0 : deux solutions x = (−b ± √Δ) / (2a) ;
- Δ = 0 : une solution x = −b / (2a) ;
- Δ < 0 : pas de solution réelle.

> [!exemple] Terrain rectangulaire
> Un terrain de 600 m² a une longueur supérieure de 10 m à sa largeur : x (x + 10) = 600, soit x² + 10x − 600 = 0.
> Δ = 100 + 2 400 = 2 500, √Δ = 50 → x = (−10 + 50)/2 = **20 m**. Le terrain fait **20 × 30 m**.

## Systèmes de deux équations
> [!exemple] Composition d'une commande
> On achète des sacs de ciment (5 500 F) et des barres HA10 (4 200 F) : 30 articles pour 152 000 F.
> x + y = 30 et 5 500 x + 4 200 y = 152 000.
> En remplaçant y = 30 − x : 5 500 x + 126 000 − 4 200 x = 152 000 → 1 300 x = 26 000 → **x = 20 sacs** et **y = 10 barres**.
> Si le calcul ne tombe pas sur des nombres entiers, la facture contient une erreur : l'équation permet de la détecter tout de suite.

## Fonctions utiles en génie civil
- **Linéaire** : allongement d'une barre proportionnel à la force (loi de Hooke).
- **Second degré** : moment fléchissant d'une poutre sous charge uniforme (parabole).
- **Exponentielle** : refroidissement, consolidation des sols.

> [!retenir]
> Mettre le problème en équation : nommer l'inconnue, écrire la relation, résoudre, puis **vérifier** le résultat dans l'énoncé.`,
 quiz:[
  {q:"Solution de 3x + 6 = 21 :", o:["x = 9","x = 5","x = 7","x = 3"], r:1, e:"3x = 15, donc x = 5."},
  {q:"Pour x² − 5x + 6 = 0, Δ vaut :", o:["1","49","−1","25"], r:0, e:"Δ = 25 − 24 = 1, solutions 2 et 3."},
  {q:"Dans f(x) = 9 500 x + 450 000, le nombre 450 000 représente :", o:["La pente","Le coût fixe","Le coût par m²","La quantité"], r:1, e:"C'est l'ordonnée à l'origine : le coût quand x = 0."},
  {q:"Si Δ < 0, l'équation du second degré :", o:["A deux solutions","A une solution double","N'a pas de solution réelle","Est fausse"], r:2, e:"Un discriminant négatif signifie aucune racine réelle."}
 ]},
{id:'math-6', niv:1, titre:'Proportionnalité, échelles et statistiques', duree:25, contenu:`## La règle de trois
Si 1 m³ de béton dosé à 350 kg demande 7 sacs de ciment, alors 4,6 m³ demandent 4,6 × 7 = **32,2 sacs**, arrondis à 33.

## Les échelles de plans
L'échelle est le rapport **dimension sur le plan / dimension réelle**.
| Échelle | 1 cm sur le plan = | Usage |
|---|---|---|
| 1/500 | 5 m | plan de masse |
| 1/200 | 2 m | plan de situation, lotissement |
| 1/100 | 1 m | plans de niveaux (APS, permis) |
| 1/50 | 0,50 m | plans d'exécution |
| 1/20 – 1/10 | 20 – 10 cm | détails, ferraillage |

> [!exemple]
> Sur un plan au 1/50, un mur mesure 9,2 cm : longueur réelle = 9,2 × 50 = 460 cm = **4,60 m**. Une pièce de 3,50 m se dessine au 1/100 avec 3,5 cm.

> [!attention]
> Ne mesurez jamais une cote au réglet sur un plan photocopié : la copie peut être agrandie ou réduite. **La cote écrite fait foi.**

## Moyenne et écart-type
Contrôle de la résistance du béton : 6 éprouvettes donnent 27, 25, 29, 24, 28 et 26 MPa.
- **Moyenne** : (27 + 25 + 29 + 24 + 28 + 26) / 6 = **26,5 MPa**.
- **Écart-type** : on fait la moyenne des carrés des écarts puis la racine : écarts 0,5 ; −1,5 ; 2,5 ; −2,5 ; 1,5 ; −0,5 → carrés 0,25 ; 2,25 ; 6,25 ; 6,25 ; 2,25 ; 0,25 → somme 17,5 → variance (n − 1 = 5) 3,5 → **s ≈ 1,87 MPa**.

Un béton est conforme lorsque sa moyenne dépasse la résistance demandée d'une marge liée à la dispersion (par exemple fcm ≥ fck + 4 MPa pour de petits lots selon la norme béton). Ici, pour un C25/30 (fck = 25 MPa), 26,5 < 29 : **non conforme**, il faut investiguer.

> [!retenir]
> Proportionnalité pour les dosages, échelle pour lire les plans, moyenne et écart-type pour contrôler la qualité.`,
 quiz:[
  {q:"Au 1/100, 1 cm sur le plan représente :", o:["10 cm","1 m","10 m","100 m"], r:1, e:"1 cm × 100 = 100 cm = 1 m."},
  {q:"Sur un plan au 1/50, un mur mesure 8 cm. Sa longueur réelle :", o:["4 m","40 cm","16 m","8 m"], r:0, e:"8 × 50 = 400 cm = 4 m."},
  {q:"Moyenne de 20, 24 et 28 MPa :", o:["22","24","26","72"], r:1, e:"(20 + 24 + 28) / 3 = 24 MPa."},
  {q:"Si 1 m³ de béton demande 7 sacs, combien pour 3 m³ ?", o:["14","21","10","7"], r:1, e:"3 × 7 = 21 sacs."}
 ]}
]});
