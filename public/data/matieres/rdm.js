A.addMatiere({
 id:'rdm', titre:'Résistance des matériaux', court:'RDM', groupe:'struct', icone:'beam', couleur:'#2F6FDB', niveau:'Intermédiaire', heures:30, ordre:2, prerequis:['math','sp','om'],
 resume:"Réactions d'appuis, efforts internes N, V, M, caractéristiques des sections, traction, flexion, flèches et flambement : dimensionner poutres et poteaux.",
 objectifs:["Calculer les réactions d'appuis d'une structure isostatique","Tracer les diagrammes d'effort tranchant et de moment fléchissant","Calculer aire, centre de gravité, moment quadratique et module de flexion","Vérifier une pièce en traction, compression, flexion et cisaillement","Calculer une flèche et vérifier le flambement"],
 applications:["Choix d'un profilé métallique","Vérification d'un linteau ou d'une poutre en bois","Préalable au calcul du béton armé","Contrôle des résultats d'un logiciel"],
 chapitres:[
{id:'rdm-1', niv:1, titre:'Statique : appuis et réactions', duree:30, contenu:`## Les liaisons (appuis)
| Appui | Symbole | Inconnues de réaction |
|---|---|---|
| Appui simple (rouleau) | cercle | 1 (perpendiculaire à l'appui) |
| Articulation (rotule) | triangle | 2 (horizontale et verticale) |
| Encastrement | hachures | 3 (H, V et moment) |

## Isostatique ou hyperstatique ?
Dans le plan, on dispose de **3 équations d'équilibre** : ΣFx = 0, ΣFy = 0, ΣM = 0.
- Nombre d'inconnues = 3 : structure **isostatique** (résoluble par la statique seule).
- Plus de 3 : **hyperstatique** (il faut aussi les déformations : poutres continues, portiques encastrés).
- Moins de 3 : **mécanisme** (instable !).

## Méthode de calcul des réactions
1. Dessiner la structure, les charges et les inconnues de réaction.
2. Remplacer chaque charge répartie par sa **résultante** (q × longueur), placée en son centre.
3. Écrire **ΣM = 0 en un appui** (pour éliminer ses inconnues), puis ΣFy = 0, puis ΣFx = 0.
4. Vérifier avec une équation de moments en l'autre appui.

> [!exemple] Poutre sur deux appuis
> Portée 6 m, charge répartie 5 kN/m sur toute la longueur et charge ponctuelle de 20 kN à 2 m de A.
> Résultante de la charge répartie : 5 × 6 = 30 kN à 3 m de A.
> ΣM/A = 0 : 6 RB − 20 × 2 − 30 × 3 = 0 → RB = 130 / 6 = **21,67 kN**.
> ΣFy = 0 : RA = 20 + 30 − 21,67 = **28,33 kN**.
> Vérification ΣM/B : 6 RA − 20 × 4 − 30 × 3 = 170 − 80 − 90 = 0 ✔.

> [!exemple] Console (encastrement)
> Console de 2,5 m avec 4 kN/m et 10 kN en bout : V = 4 × 2,5 + 10 = **20 kN** ; M = 4 × 2,5²/2 + 10 × 2,5 = 12,5 + 25 = **37,5 kN·m** à l'encastrement.

> [!retenir]
> Toujours vérifier ses réactions par une seconde équation de moments : c'est rapide et évite beaucoup d'erreurs.`,
 quiz:[
  {q:"Un encastrement plan a combien d'inconnues de réaction ?", o:["1","2","3","4"], r:2, e:"H, V et un moment."},
  {q:"Une poutre sur deux appuis simples + une articulation est :", o:["Isostatique","Hyperstatique","Un mécanisme","Impossible"], r:0, e:"2 + 1 = 3 inconnues, 3 équations."},
  {q:"Poutre de 4 m sur deux appuis, charge uniforme 10 kN/m : chaque réaction vaut :", o:["10 kN","20 kN","40 kN","5 kN"], r:1, e:"Total 40 kN réparti également : 20 kN."},
  {q:"Moment à l'encastrement d'une console de 3 m avec 5 kN en bout :", o:["5 kN·m","15 kN·m","8 kN·m","1,67 kN·m"], r:1, e:"M = 5 × 3 = 15 kN·m."}
 ]},
{id:'rdm-2', niv:2, titre:'Efforts internes : N, V et M', duree:35, contenu:`## La méthode des coupures
On coupe la poutre à l'abscisse x et on écrit l'équilibre d'un des deux tronçons. On obtient les **efforts internes** :
- **N** : effort normal (traction ou compression le long de l'axe) ;
- **V** : effort tranchant (perpendiculaire à l'axe) ;
- **M** : moment fléchissant.

## Relations fondamentales
$$ dV/dx = − q(x)        dM/dx = V(x)
- Là où il n'y a pas de charge, V est constant et M varie linéairement.
- Sous une charge uniforme, V est linéaire et M parabolique.
- **M est maximal là où V s'annule**.
- Une charge ponctuelle crée un « saut » de V.

!fig:moments|Diagrammes de V et M d'une poutre sur deux appuis

## Les formules à connaître
| Cas | Réactions | V max | M max | Flèche max |
|---|---|---|---|---|
| Appuis simples, charge q uniforme | qL/2 | qL/2 | **qL²/8** | 5qL⁴/(384EI) |
| Appuis simples, P au milieu | P/2 | P/2 | **PL/4** | PL³/(48EI) |
| Console, q uniforme | qL | qL | **qL²/2** | qL⁴/(8EI) |
| Console, P en bout | P | P | **PL** | PL³/(3EI) |
| Bi-encastrée, q uniforme | qL/2 | qL/2 | qL²/12 (appuis) ; qL²/24 (travée) | qL⁴/(384EI) |

!fig:console|Console : moment maximal à l'encastrement

> [!exemple]
> Linteau de 2,0 m de portée entre appuis portant un mur : q = 12 kN/m. M = 12 × 2² / 8 = **6 kN·m** ; V = 12 × 2 / 2 = **12 kN**.

> [!exemple] Moment sous la charge ponctuelle
> Reprenons la poutre du chapitre précédent (RA = 28,33 kN). Sous la charge de 20 kN (x = 2 m) : M = 28,33 × 2 − 5 × 2²/2 = 56,67 − 10 = **46,67 kN·m**. V juste à droite de la charge : 28,33 − 10 − 20 = −1,67 kN → V s'annule tout près de x = 2 m : c'est bien le moment maximal.

> [!retenir]
> qL²/8, PL/4, qL²/2 et PL : ces quatre formules couvrent la majorité des vérifications rapides.`,
 quiz:[
  {q:"Moment maximal d'une poutre sur deux appuis avec P au milieu :", o:["PL/2","PL/4","PL/8","PL"], r:1, e:"M = PL/4."},
  {q:"Sous une charge uniforme, le diagramme des moments est :", o:["Constant","Linéaire","Parabolique","En escalier"], r:2, e:"M varie en x²."},
  {q:"Le moment est maximal là où :", o:["La charge est maximale","L'effort tranchant s'annule","L'appui se trouve","x = 0"], r:1, e:"Car dM/dx = V."},
  {q:"M max d'une console de 2 m sous 10 kN/m :", o:["10 kN·m","20 kN·m","40 kN·m","5 kN·m"], r:1, e:"qL²/2 = 10 × 4 / 2 = 20 kN·m."}
 ]},
{id:'rdm-3', niv:2, titre:'Caractéristiques géométriques des sections', duree:30, contenu:`## Aire et centre de gravité
Pour une section composée de rectangles : yG = Σ(Aᵢ yᵢ) / Σ Aᵢ.

## Moment quadratique (inertie) I
Il mesure la capacité d'une section à résister à la **flexion** autour d'un axe.
| Section | I (axe central) |
|---|---|
| Rectangle b × h (flexion autour de l'axe parallèle à b) | b h³ / 12 |
| Carré a × a | a⁴ / 12 |
| Disque de diamètre d | π d⁴ / 64 |
| Tube (D, d) | π (D⁴ − d⁴) / 64 |
Théorème de **Huygens** : I(Δ) = I(G) + A d².

## Module de flexion W
$$ W = I / v    (v : distance de la fibre la plus éloignée)
Rectangle : **W = b h² / 6**.

## Rayon de giration
$$ i = √(I / A)     (rectangle : i = h / √12 ≈ 0,289 h)
Il intervient dans le calcul du **flambement**.

> [!exemple] Poutre 20 × 40 cm
> A = 800 cm² ; I = 20 × 40³ / 12 = **106 667 cm⁴** ; W = 20 × 40² / 6 = **5 333 cm³** ; i = 40 / √12 = 11,5 cm.
> La même poutre posée « à plat » (40 × 20) : I = 40 × 20³ / 12 = 26 667 cm⁴, **4 fois moins** !

## Les profilés métalliques
Les catalogues donnent directement A, I, W et i. Exemples :
| Profilé | Iy (cm⁴) | Wy (cm³) | Iz (cm⁴) |
|---|---|---|---|
| IPE 160 | 869 | 109 | 68 |
| IPE 200 | 1 943 | 194 | 142 |
| IPE 240 | 3 892 | 324 | 284 |
| HEA 200 | 3 692 | 389 | 1 336 |
La forme en **I** place la matière loin de l'axe : grande inertie pour peu de poids.

> [!retenir]
> I = bh³/12 et W = bh²/6 : la hauteur d'une section compte bien plus que sa largeur.`,
 quiz:[
  {q:"Moment quadratique d'un rectangle 10 × 30 cm (flexion verticale) :", o:["22 500 cm⁴","2 250 cm⁴","9 000 cm⁴","45 000 cm⁴"], r:0, e:"10 × 30³ / 12 = 22 500 cm⁴."},
  {q:"Module de flexion d'un rectangle b × h :", o:["bh³/12","bh²/6","bh/2","b²h/6"], r:1, e:"W = I / (h/2) = bh²/6."},
  {q:"Une poutre posée sur sa grande hauteur plutôt qu'à plat est :", o:["Moins résistante","Plus résistante en flexion","Identique","Plus lourde"], r:1, e:"I dépend de h³."},
  {q:"Le théorème de Huygens sert à :", o:["Calculer une flèche","Transporter un moment quadratique d'un axe à un axe parallèle","Calculer une réaction","Mesurer une pente"], r:1, e:"I(Δ) = I(G) + A d²."}
 ]},
{id:'rdm-4', niv:1, titre:'Traction, compression et cisaillement', duree:25, contenu:`## Traction et compression simples
$$ σ = N / A
Condition de résistance : **σ ≤ σadmissible** (ou fy/γ en calcul aux états limites).
Allongement (loi de Hooke) :
$$ ΔL = N L / (E A)

> [!exemple] Tirant de charpente
> Tirant en acier rond de 16 mm (A = 201 mm²), effort de 35 kN : σ = 35 000 / 201 = **174 MPa** < 235 MPa (acier S235) : vérifié.
> Longueur 6 m : ΔL = 35 000 × 6 000 / (210 000 × 201) = **5 mm**.

> [!exemple] Contrainte dans un poteau en béton
> Poteau 20 × 20 cm, charge de service 200 kN : σ = 200 000 / 40 000 = **5 MPa**, très inférieure à la résistance du béton (25 MPa) ; c'est pourquoi les poteaux de maisons sont souvent dimensionnés par les dispositions minimales.

## Cisaillement
$$ τ = V / A    (valeur moyenne)
Utilisé pour les **boulons**, **goujons**, axes, soudures.
> [!exemple] Boulon
> Boulon de 16 mm (A = 201 mm²) cisaillé par 25 kN dans une section : τ = 25 000 / 201 = **124 MPa** ; on compare à la résistance au cisaillement du boulon (classe 8.8 : environ 300 MPa à l'ELU).

## Pression de contact (matage)
σ = F / (d × e) entre un boulon de diamètre d et une tôle d'épaisseur e.

## Coefficients de sécurité
On ne travaille jamais à la limite de rupture : on **majore les charges** (× 1,35 et × 1,5 à l'ELU) et on **minore les résistances** (÷ 1,15 pour l'acier de béton armé, ÷ 1,5 pour le béton).

> [!retenir]
> σ = N/A, ΔL = NL/(EA), τ = V/A : les trois formules de base de la RDM.`,
 quiz:[
  {q:"Contrainte dans une barre de 100 mm² tendue à 20 kN :", o:["20 MPa","200 MPa","2 000 MPa","0,2 MPa"], r:1, e:"20 000 / 100 = 200 MPa."},
  {q:"L'allongement d'une barre est proportionnel à :", o:["Sa section","Sa longueur et à l'effort","Son module E","Sa couleur"], r:1, e:"ΔL = NL/(EA)."},
  {q:"Un boulon travaille principalement en :", o:["Flexion","Cisaillement","Torsion","Flambement"], r:1, e:"Il empêche le glissement des pièces assemblées."},
  {q:"À l'ELU, on majore les charges d'exploitation par :", o:["1,0","1,35","1,5","2"], r:2, e:"1,35 G + 1,5 Q."}
 ]},
{id:'rdm-5', niv:2, titre:'Flexion simple et flèches', duree:35, contenu:`## Contraintes de flexion (formule de Navier)
$$ σ = M × y / I        σmax = M / W
La fibre supérieure est **comprimée**, la fibre inférieure **tendue** (poutre sur deux appuis) ; l'**axe neutre** n'est pas sollicité.

## Dimensionner une poutre métallique
Condition : M ≤ W × fy / γM₀ → **W nécessaire = M / (fy / γM₀)**.
> [!exemple] Poutre de plancher en acier
> Portée 5 m, charge ELU 12,8 kN/m : M = 12,8 × 5² / 8 = **40 kN·m**. Acier S235 (γM₀ = 1) :
> W ≥ 40 × 10⁶ / 235 = 170 213 mm³ = **170 cm³** → **IPE 200** (W = 194 cm³).

## Vérifier la flèche
Une poutre résistante peut être trop **souple** (fissuration des cloisons et carrelages, sensation de vibration). Limites courantes : **L/300** pour un plancher courant, **L/500** sous des cloisons fragiles, **L/200** pour une toiture.
> [!exemple] Suite : IPE 200 sous charge de service 8 kN/m
> f = 5 q L⁴ / (384 E I) = 5 × 8 × 5⁴ / (384 × 210 × 10⁶ × 1 943 × 10⁻⁸) = 25 000 / 1 566 835 = **0,016 m = 16 mm**.
> Limite L/300 = 16,7 mm : **vérifié** (juste).

## Bois
Pour une poutre en bois, la même démarche s'applique avec les résistances du bois (souvent 10 à 20 MPa en flexion selon l'essence et la classe) et E ≈ 10 000 MPa. Les poutres en bois sont souvent dimensionnées par la **flèche**.

## Effort tranchant
La contrainte de cisaillement est maximale au niveau de l'axe neutre : pour un rectangle, **τmax = 1,5 V / (b h)**.

> [!retenir]
> σmax = M/W pour la résistance ; f = 5qL⁴/(384EI) pour la déformation. Les deux doivent être vérifiées.`,
 quiz:[
  {q:"Dans une poutre sur deux appuis, la fibre inférieure est :", o:["Comprimée","Tendue","Neutre","Cisaillée uniquement"], r:1, e:"Le bas s'allonge sous la flexion."},
  {q:"W nécessaire pour M = 23,5 kN·m et fy = 235 MPa :", o:["10 cm³","100 cm³","1 000 cm³","235 cm³"], r:1, e:"23,5 × 10⁶ / 235 = 100 000 mm³ = 100 cm³."},
  {q:"Limite de flèche courante pour un plancher :", o:["L/50","L/100","L/300","L/5 000"], r:2, e:"L/300 en général."},
  {q:"Si on double la portée, la flèche sous charge uniforme est multipliée par :", o:["2","4","8","16"], r:3, e:"f est proportionnelle à L⁴."}
 ]},
{id:'rdm-6', niv:3, titre:'Le flambement des éléments comprimés', duree:30, contenu:`## Le phénomène
Un élément **élancé** et comprimé peut se dérober latéralement bien avant que le matériau ne s'écrase : c'est le **flambement**. Il est brutal et dangereux (étais, poteaux métalliques, poteaux fins).

## Charge critique d'Euler
$$ Ncr = π² E I / Lf²
Lf est la **longueur de flambement**, qui dépend des liaisons aux extrémités :
!fig:flambement|Longueurs de flambement selon les liaisons

| Liaisons | Lf |
|---|---|
| Articulé – articulé | L |
| Encastré – libre (mât) | 2 L |
| Encastré – articulé | 0,7 L |
| Encastré – encastré | 0,5 L |

## L'élancement
$$ λ = Lf / i      (i : rayon de giration)
Pour un rectangle de petit côté a : **λ = Lf √12 / a**. Plus λ est grand, plus le risque de flambement est élevé. Le flambement se produit autour de l'axe de **plus faible inertie**.

> [!exemple] Profilé métallique
> IPE 200 articulé aux deux extrémités, L = 3 m, flambement autour de l'axe faible (Iz = 142 cm⁴) :
> Ncr = π² × 210 000 × 142 × 10⁴ / 3 000² = 9,87 × 2,98 × 10¹¹ / 9 × 10⁶ ≈ **327 kN** (charge critique théorique, à réduire par les coefficients réglementaires).

> [!exemple] Poteau en béton armé
> Poteau 20 × 20 cm, hauteur libre 3,00 m, encastré en pied et relié à des poutres rigides en tête : Lf ≈ 0,7 × 3,00 = 2,10 m.
> λ = 2,10 × 3,464 / 0,20 = **36**. En béton armé (BAEL) on reste de préférence sous λ = 50 ; au-delà, augmenter la section.

> [!attention]
> Les **étais** de coffrage sont des éléments très élancés : il faut respecter leur charge admissible pour leur hauteur de déploiement et les contreventer. Un effondrement de dalle en cours de coulage est presque toujours un problème d'étaiement.`,
 quiz:[
  {q:"La charge critique d'Euler est proportionnelle à :", o:["Lf","1/Lf²","Lf²","1/Lf"], r:1, e:"Ncr = π²EI/Lf²."},
  {q:"Longueur de flambement d'un poteau encastré en pied et libre en tête :", o:["0,5 L","0,7 L","L","2 L"], r:3, e:"C'est le cas le plus défavorable."},
  {q:"Le flambement se produit autour de l'axe :", o:["De plus forte inertie","De plus faible inertie","Vertical","Neutre"], r:1, e:"La pièce fléchit du côté où elle est la plus souple."},
  {q:"Élancement d'un poteau 25 × 25 avec Lf = 2,5 m :", o:["≈ 10","≈ 35","≈ 100","≈ 3,5"], r:1, e:"λ = 2,5 × 3,464 / 0,25 ≈ 34,6."}
 ]}
]});
