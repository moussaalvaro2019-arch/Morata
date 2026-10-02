A.addMatiere({
 id:'mmc', titre:'Mécanique des milieux continus', court:'MMC', groupe:'struct', icone:'cube', couleur:'#5B6B7F', niveau:'Avancé', heures:20, ordre:1, prerequis:['om','sp'],
 resume:"Contraintes, déformations, loi de Hooke, cercle de Mohr et critères de résistance : la base théorique de la RDM, du béton armé et de la géotechnique.",
 objectifs:["Comprendre les hypothèses du milieu continu","Décrire l'état de contrainte en un point et ses contraintes principales","Relier contraintes et déformations par la loi de Hooke généralisée","Utiliser le cercle de Mohr et les critères de Tresca, von Mises et Mohr-Coulomb"],
 applications:["Justification des formules de RDM","Résistance des sols (Mohr-Coulomb)","Vérification d'une pièce métallique sous efforts combinés","Lecture des résultats d'un logiciel aux éléments finis"],
 chapitres:[
{id:'mmc-1', titre:'Hypothèses et notion de milieu continu', duree:20, contenu:`## Le milieu continu
La matière est en réalité faite de grains, de cristaux et de vides. À l'échelle d'une poutre ou d'un mur, on la modélise comme un **milieu continu** : les grandeurs (déplacements, contraintes) varient de façon continue d'un point à l'autre.

## Les hypothèses usuelles
1. **Continuité** : pas de fissure ni de vide à l'échelle de l'étude.
2. **Homogénéité** : mêmes propriétés en tout point (approximation pour le béton, très bonne pour l'acier).
3. **Isotropie** : mêmes propriétés dans toutes les directions (faux pour le bois, dont la résistance dépend du sens des fibres).
4. **Petites perturbations (HPP)** : les déplacements et déformations sont petits ; on écrit l'équilibre sur la géométrie initiale.
5. **Élasticité linéaire** : déformations proportionnelles aux contraintes et réversibles.

## Les grandeurs étudiées
- les **efforts** extérieurs (forces de volume comme le poids, forces de surface comme une pression) ;
- les **contraintes** (efforts intérieurs par unité de surface) ;
- les **déformations** (variation relative des longueurs et des angles) ;
- les **déplacements**.

> [!retenir]
> La RDM est une simplification de la MMC pour les éléments élancés (poutres, poteaux) : on remplace l'état de contrainte complet par des efforts internes N, V, M.

## Domaine de validité
Les hypothèses tombent quand le béton fissure (non-linéarité), quand l'acier plastifie, ou pour les grands déplacements (câbles, flambement) : on utilise alors des méthodes plus avancées (calcul à la rupture, non-linéaire).`,
 quiz:[
  {q:"Un matériau isotrope a :", o:["Les mêmes propriétés dans toutes les directions","Des fibres","Des vides","Une forme carrée"], r:0, e:"Le bois, au contraire, est anisotrope."},
  {q:"L'hypothèse HPP signifie :", o:["Hautes pressions","Petites perturbations : déplacements petits","Pas de poids","Plasticité parfaite"], r:1, e:"On écrit l'équilibre sur la géométrie non déformée."},
  {q:"Quel matériau est nettement anisotrope ?", o:["L'acier","Le verre","Le bois","L'eau"], r:2, e:"Sa résistance dépend du sens des fibres."},
  {q:"La RDM est :", o:["Sans rapport avec la MMC","Une simplification de la MMC pour les éléments élancés","Plus générale que la MMC","Une branche de la chimie"], r:1, e:"Elle travaille avec les efforts N, V, M."}
 ]},
{id:'mmc-2', titre:'Les contraintes', duree:30, contenu:`## Vecteur contrainte
Sur une petite facette de normale n, la force intérieure par unité de surface est le **vecteur contrainte** T. On le décompose en :
- **contrainte normale σ** (perpendiculaire à la facette) : traction si σ > 0, compression si σ < 0 ;
- **contrainte tangentielle τ** (cisaillement), dans le plan de la facette.

## Le tenseur des contraintes
En un point, l'état de contrainte est entièrement décrit par **6 composantes** indépendantes : σx, σy, σz, τxy, τyz, τxz (le tenseur est symétrique : τxy = τyx).

## État plan de contraintes
Dans une plaque mince ou une poutre, on se limite souvent à σx, σy, τxy. Sur une facette inclinée d'un angle θ :
$$ σθ = (σx + σy)/2 + (σx − σy)/2 × cos 2θ + τxy sin 2θ

## Contraintes principales
Il existe deux directions perpendiculaires où τ = 0 : les **directions principales**. Les contraintes y sont extrêmes :
$$ σ1,2 = (σx + σy)/2 ± √( ((σx − σy)/2)² + τxy² )
$$ τmax = (σ1 − σ2) / 2

> [!exemple]
> σx = 80 MPa, σy = 20 MPa, τxy = 40 MPa : centre = 50, rayon = √(30² + 40²) = 50.
> **σ1 = 100 MPa**, **σ2 = 0**, τmax = **50 MPa**.

## Le cercle de Mohr
Toutes les facettes passant par un point sont représentées par un **cercle** dans le plan (σ, τ), de centre (σx + σy)/2 et de rayon √(((σx − σy)/2)² + τxy²). Il permet de lire graphiquement les contraintes principales et le cisaillement maximal.

> [!astuce]
> Dans une poutre en béton, les fissures d'effort tranchant sont inclinées à 45° près des appuis : elles suivent les directions où la traction principale est maximale. C'est pourquoi on place des cadres (ou des barres relevées).`,
 quiz:[
  {q:"Combien de composantes indépendantes compte le tenseur des contraintes ?", o:["3","6","9","2"], r:1, e:"Il est symétrique : 3 normales + 3 tangentielles."},
  {q:"Sur une facette principale, la contrainte tangentielle vaut :", o:["Le maximum","Zéro","σ1","La moitié de σ1"], r:1, e:"Par définition des directions principales."},
  {q:"σx = 60, σy = 0, τ = 0 : la contrainte de cisaillement maximale vaut :", o:["60 MPa","30 MPa","0","120 MPa"], r:1, e:"τmax = (σ1 − σ2)/2 = 30 MPa."},
  {q:"Les fissures d'effort tranchant près des appuis sont inclinées d'environ :", o:["0°","45°","90°","10°"], r:1, e:"Elles suivent les directions de traction principale."}
 ]},
{id:'mmc-3', titre:'Les déformations', duree:25, contenu:`## Déformation linéique
$$ ε = ΔL / L₀   (sans unité, souvent en ‰ ou en µm/m)
Une barre de 5 m qui s'allonge de 1 mm : ε = 0,001/5 = 2 × 10⁻⁴ = **0,2 ‰**.

## Distorsion
La **distorsion γ** est la variation d'un angle initialement droit (en radians) : elle traduit le cisaillement.

## Le tenseur des déformations
Comme pour les contraintes : εx, εy, εz (allongements) et γxy, γyz, γxz (distorsions). Il possède aussi des **directions principales**.

## Dilatation volumique
$$ ΔV / V ≈ εx + εy + εz

## Déformations d'origine thermique et différée
- **Dilatation thermique** : ε = α ΔT. Béton et acier ont des coefficients très proches (≈ 10 à 12 × 10⁻⁶ /°C) : c'est ce qui permet au **béton armé** de fonctionner sans que les deux matériaux se séparent.
- **Retrait** du béton : il se raccourcit en séchant (≈ 0,2 à 0,4 ‰) → joints de retrait, ferraillage minimal.
- **Fluage** : sous charge permanente, le béton continue de se déformer pendant des années (la flèche à long terme peut atteindre 2 à 3 fois la flèche instantanée).

> [!exemple] Dilatation d'une dalle de toiture
> Dalle de 30 m exposée au soleil : écart de 30 °C entre jour et nuit. ΔL = 10 × 10⁻⁶ × 30 × 30 000 mm = **9 mm**. Sans joint de dilatation, cette variation fissure les acrotères et les murs : on prévoit un joint tous les 25 à 40 m environ.

## Mesurer les déformations
Les **jauges de déformation** collées sur l'acier ou le béton mesurent ε : on en déduit la contrainte par la loi de Hooke (essais de chargement de ponts, auscultation).`,
 quiz:[
  {q:"Une barre de 2 m s'allonge de 1 mm. Sa déformation vaut :", o:["0,5 ‰","2 ‰","0,05 ‰","5 ‰"], r:0, e:"ε = 1/2 000 = 0,0005 = 0,5 ‰."},
  {q:"Le béton armé fonctionne car le béton et l'acier ont :", o:["La même couleur","Des coefficients de dilatation proches","La même résistance","La même masse"], r:1, e:"Ils se dilatent ensemble avec la température."},
  {q:"Le fluage est :", o:["Une déformation instantanée","Une déformation différée sous charge permanente","Une fissure","Un défaut de coulage"], r:1, e:"La flèche augmente avec le temps."},
  {q:"La distorsion mesure :", o:["Un allongement","La variation d'un angle droit","Un volume","Une température"], r:1, e:"Elle traduit le cisaillement."}
 ]},
{id:'mmc-4', titre:'Loi de comportement élastique (Hooke)', duree:30, contenu:`## Loi de Hooke en traction simple
$$ σ = E × ε
E est le **module d'Young** (MPa) : il mesure la rigidité du matériau.

| Matériau | E (MPa) | Coefficient de Poisson ν |
|---|---|---|
| Acier | 200 000 à 210 000 | 0,3 |
| Béton (instantané) | 30 000 à 35 000 | 0,2 |
| Bois (dans le sens des fibres) | 10 000 à 12 000 | — |
| Aluminium | 70 000 | 0,33 |
| Sol (argile molle à sable dense) | 5 à 100 | 0,3 à 0,45 |

## Effet Poisson
Une barre tendue s'allonge dans sa direction et se **contracte** transversalement : εtransversale = − ν × εlongitudinale.

## Loi de Hooke généralisée
$$ εx = [σx − ν (σy + σz)] / E
(et de même pour εy, εz), et pour le cisaillement : **τ = G γ** avec
$$ G = E / (2 (1 + ν))

> [!exemple] Allongement d'un tirant
> Barre HA16 (A = 2,01 cm²) de 4 m tendue à 60 kN : σ = 60 000 / 201 = 298 MPa ; ε = 298 / 200 000 = 1,49 × 10⁻³ ; ΔL = 1,49 × 10⁻³ × 4 000 = **6 mm**.

> [!exemple] Module de cisaillement de l'acier
> G = 210 000 / (2 × 1,3) ≈ **80 800 MPa**.

## Limite d'élasticité
Au-delà de la **limite élastique** fe, l'acier se déforme de façon permanente (plastification). Les aciers HA courants ont fe = **400 ou 500 MPa**. Le béton, lui, n'a pas de domaine élastique net : on utilise des lois simplifiées (parabole-rectangle).

!fig:traction|Lois de comportement de l'acier et du béton`,
 quiz:[
  {q:"Le module d'Young de l'acier vaut environ :", o:["2 000 MPa","20 000 MPa","200 000 MPa","2 000 000 MPa"], r:2, e:"E ≈ 200 000 MPa."},
  {q:"Si σ = 100 MPa et E = 200 000 MPa, la déformation vaut :", o:["0,5 ‰","5 ‰","0,05 ‰","2 ‰"], r:0, e:"ε = 100/200 000 = 0,0005."},
  {q:"Le coefficient de Poisson du béton vaut environ :", o:["0,5","0,2","1","0"], r:1, e:"ν ≈ 0,2 pour le béton."},
  {q:"G s'exprime en fonction de E et ν par :", o:["E/(1+ν)","E/(2(1+ν))","2E(1+ν)","E ν"], r:1, e:"G = E / (2(1 + ν))."}
 ]},
{id:'mmc-5', titre:'Critères de résistance', duree:25, contenu:`## Pourquoi un critère ?
Dans un essai de traction simple, on connaît la limite fe. Mais dans une pièce réelle, plusieurs contraintes agissent en même temps. Un **critère** permet de comparer cet état complexe à la limite connue.

## Critère de Tresca (matériaux ductiles)
La plastification commence quand le **cisaillement maximal** atteint la moitié de la limite élastique :
$$ σ1 − σ3 ≤ fe

## Critère de von Mises (aciers)
Basé sur l'énergie de distorsion. En état plan :
$$ σeq = √(σ1² − σ1 σ2 + σ2²) ≤ fe
Pour une poutre (σ normal, τ cisaillement) : **σeq = √(σ² + 3 τ²)**.

> [!exemple] Pièce métallique
> σ = 150 MPa et τ = 80 MPa dans un acier S235 : σeq = √(150² + 3 × 80²) = √(22 500 + 19 200) = √41 700 ≈ **204 MPa** < 235 MPa : vérifié.

## Critère de Mohr-Coulomb (sols, bétons, roches)
Les matériaux granulaires résistent par **cohésion** et **frottement** :
$$ τ = c + σ tan φ
c : cohésion, φ : angle de frottement interne. La rupture se produit quand le cercle de Mohr touche la droite intrinsèque.

!fig:mohr|Cercle de Mohr à la rupture et droite de Coulomb

> [!retenir]
> Acier : von Mises. Sols et matériaux granulaires : Mohr-Coulomb. On applique toujours des **coefficients de sécurité** pour rester loin de la rupture.`,
 quiz:[
  {q:"Le critère de von Mises s'applique surtout :", o:["Aux sols","Aux aciers","Au bois","À l'eau"], r:1, e:"Matériaux ductiles métalliques."},
  {q:"Dans le critère de Mohr-Coulomb, c représente :", o:["La compression","La cohésion","La contrainte critique","Le coefficient de sécurité"], r:1, e:"τ = c + σ tan φ."},
  {q:"σ = 100 MPa, τ = 0 : la contrainte équivalente de von Mises vaut :", o:["100 MPa","173 MPa","50 MPa","0"], r:0, e:"σeq = √(100²) = 100 MPa."},
  {q:"Un sable sec sans cohésion résiste grâce :", o:["À sa cohésion","À son frottement interne φ","À l'eau","Au ciment"], r:1, e:"c ≈ 0, la résistance vient de σ tan φ."}
 ]}
]});
