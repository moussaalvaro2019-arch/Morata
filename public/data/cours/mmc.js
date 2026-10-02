/* =====================================================================
   Mécanique des milieux continus — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"mmc",
 titre:"Mécanique des milieux continus",
 court:"MMC",
 groupe:"struct",
 icone:"cube",
 couleur:"#5B6B7F",
 niveau:"Avancé",
 heures:20,
 ordre:1,
 prerequis:["om", "sp"],
 resume:"Contraintes, déformations, loi de Hooke, cercle de Mohr et critères de résistance : la base théorique de la RDM, du béton armé et de la géotechnique.",
 objectifs:[
  "Comprendre les hypothèses du milieu continu",
  "Décrire l'état de contrainte en un point et ses contraintes principales",
  "Relier contraintes et déformations par la loi de Hooke généralisée",
  "Utiliser le cercle de Mohr et les critères de Tresca, von Mises et Mohr-Coulomb"
 ],
 applications:[
  "Justification des formules de RDM",
  "Résistance des sols (Mohr-Coulomb)",
  "Vérification d'une pièce métallique sous efforts combinés",
  "Lecture des résultats d'un logiciel aux éléments finis"
 ],
 chapitres:[
{id:"mmc-1", niv:1, titre:"Hypothèses et notion de milieu continu", duree:20, contenu:`## Le milieu continu
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
Les hypothèses tombent quand le béton fissure (non-linéarité), quand l'acier plastifie, ou pour les grands déplacements (câbles, flambement) : on utilise alors des méthodes plus avancées (calcul à la rupture, non-linéaire).`, quiz:[
  {q:"Un matériau isotrope a :", o:["Les mêmes propriétés dans toutes les directions", "Des fibres", "Des vides", "Une forme carrée"], r:0, e:"Le bois, au contraire, est anisotrope."},
  {q:"L'hypothèse HPP signifie :", o:["Hautes pressions", "Petites perturbations : déplacements petits", "Pas de poids", "Plasticité parfaite"], r:1, e:"On écrit l'équilibre sur la géométrie non déformée."},
  {q:"Quel matériau est nettement anisotrope ?", o:["L'acier", "Le verre", "Le bois", "L'eau"], r:2, e:"Sa résistance dépend du sens des fibres."},
  {q:"La RDM est :", o:["Sans rapport avec la MMC", "Une simplification de la MMC pour les éléments élancés", "Plus générale que la MMC", "Une branche de la chimie"], r:1, e:"Elle travaille avec les efforts N, V, M."}
 ]},

{id:"mmc-6", niv:1, titre:"Forces, contraintes et déformations en traction simple", duree:25, contenu:`## De la force à la contrainte
Une même force n'a pas le même effet sur une barre fine et sur une barre épaisse. On compare donc la force à la **section** qui la reçoit :
$$ σ = N / A    (en MPa, 1 MPa = 1 N/mm²)

> [!exemple] Un tirant en acier
> Une barre HA12 (section 113 mm²) tirée par 20 kN : σ = 20 000 / 113 = **177 MPa**.

## La déformation
Sous l'effort, la barre s'allonge de ΔL. La **déformation** est l'allongement relatif :
$$ ε = ΔL / L   (sans unité, souvent en ‰)

## La loi de Hooke
Tant que l'effort reste modéré, la déformation est **proportionnelle** à la contrainte :
$$ σ = E × ε
| Matériau | Module d'élasticité E |
|---|---|
| Acier | 200 000 MPa |
| Béton | environ 30 000 MPa |
| Bois (dans le sens du fil) | environ 11 000 MPa |

> [!exemple] Suite du tirant
> ε = 177 / 200 000 = 0,000 885 = 0,885 ‰. Sur 6 m de longueur, la barre s'allonge de 6 000 × 0,000 885 = **5,3 mm**.

## Élastique ou plastique ?
- **Élastique** : quand on relâche l'effort, la pièce reprend sa forme.
- **Plastique** : au-delà de la limite d'élasticité, la déformation devient permanente (barre tordue, fer plié).

> [!retenir]
> Les calculs de structure gardent les matériaux dans le domaine **élastique** en service, avec une marge de sécurité.`, quiz:[
  {q:"La contrainte normale vaut :", o:["N / A", "N × A", "A / N", "N × L"], r:0, e:"Force divisée par la section."},
  {q:"Une barre de 2 m qui s'allonge de 1 mm a une déformation de :", o:["0,5 ‰", "2 ‰", "0,05 ‰", "5 ‰"], r:0, e:"1 / 2 000 = 0,0005 = 0,5 ‰."},
  {q:"Le module d'élasticité de l'acier vaut environ :", o:["200 000 MPa", "30 000 MPa", "2 000 MPa", "500 MPa"], r:0, e:"Environ 7 fois celui du béton."},
  {q:"Dans le domaine élastique :", o:["La pièce reprend sa forme quand on la décharge", "La déformation est permanente", "La pièce est rompue", "La contrainte est nulle"], r:0, e:"Au-delà, on entre dans le domaine plastique."}
 ]},

{id:"mmc-7", niv:1, titre:"Comportement des matériaux : essais de traction et de compression", duree:25, contenu:`## L'essai de traction sur l'acier
On tire une barre jusqu'à la rupture en mesurant la force et l'allongement. La courbe contrainte-déformation montre :
1. une **droite élastique** (loi de Hooke) ;
2. la **limite d'élasticité fe** (500 MPa pour un acier Fe E500) ;
3. un **palier plastique** puis un **écrouissage** ;
4. la **résistance à la rupture** (550 à 650 MPa) après un allongement de plus de 5 %.

!fig:traction|Essai de traction : domaines élastique et plastique

L'acier est **ductile** : il se déforme beaucoup avant de rompre, ce qui prévient du danger.

## L'essai de compression sur le béton
On écrase des **éprouvettes cylindriques 16 × 32 cm** à 7 et 28 jours.
$$ fc = force de rupture / section
> [!exemple]
> Une éprouvette se rompt sous 520 kN : section = π × 80² = 20 106 mm² → fc = 520 000 / 20 106 = **25,9 MPa**.

Le béton est **fragile** : il casse brutalement, après une faible déformation (environ 3,5 ‰). Sa résistance à la **traction** est faible : ft28 = 0,6 + 0,06 fc28 ≈ 2,1 MPa pour un béton de 25 MPa.

## Le bois
Matériau **anisotrope** : très résistant dans le sens du fil, beaucoup moins en travers ; sensible à l'humidité et aux termites.

## Pourquoi le béton armé ?
Le béton résiste bien en compression mais mal en traction ; l'acier résiste très bien en traction et apporte la **ductilité**. Associés, ils forment un matériau résistant et qui prévient avant de rompre.`, quiz:[
  {q:"La limite d'élasticité d'un acier Fe E500 vaut :", o:["500 MPa", "25 MPa", "200 000 MPa", "2,1 MPa"], r:0, e:"C'est le « 500 » de la désignation."},
  {q:"Une éprouvette 16 × 32 rompt sous 400 kN : sa résistance vaut environ :", o:["20 MPa", "40 MPa", "10 MPa", "4 MPa"], r:0, e:"400 000 / 20 106 ≈ 19,9 MPa."},
  {q:"Un matériau ductile :", o:["Se déforme beaucoup avant de rompre", "Casse sans prévenir", "Ne se déforme pas", "Résiste seulement en compression"], r:0, e:"C'est le cas de l'acier."},
  {q:"La résistance en traction d'un béton de 25 MPa vaut environ :", o:["2,1 MPa", "25 MPa", "12,5 MPa", "0,2 MPa"], r:0, e:"ft28 = 0,6 + 0,06 × 25 = 2,1 MPa."}
 ]},

{id:"mmc-2", niv:2, titre:"Les contraintes", duree:30, contenu:`## Vecteur contrainte
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
> Dans une poutre en béton, les fissures d'effort tranchant sont inclinées à 45° près des appuis : elles suivent les directions où la traction principale est maximale. C'est pourquoi on place des cadres (ou des barres relevées).`, quiz:[
  {q:"Combien de composantes indépendantes compte le tenseur des contraintes ?", o:["3", "6", "9", "2"], r:1, e:"Il est symétrique : 3 normales + 3 tangentielles."},
  {q:"Sur une facette principale, la contrainte tangentielle vaut :", o:["Le maximum", "Zéro", "σ1", "La moitié de σ1"], r:1, e:"Par définition des directions principales."},
  {q:"σx = 60, σy = 0, τ = 0 : la contrainte de cisaillement maximale vaut :", o:["60 MPa", "30 MPa", "0", "120 MPa"], r:1, e:"τmax = (σ1 − σ2)/2 = 30 MPa."},
  {q:"Les fissures d'effort tranchant près des appuis sont inclinées d'environ :", o:["0°", "45°", "90°", "10°"], r:1, e:"Elles suivent les directions de traction principale."}
 ]},

{id:"mmc-3", niv:2, titre:"Les déformations", duree:25, contenu:`## Déformation linéique
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
Les **jauges de déformation** collées sur l'acier ou le béton mesurent ε : on en déduit la contrainte par la loi de Hooke (essais de chargement de ponts, auscultation).`, quiz:[
  {q:"Une barre de 2 m s'allonge de 1 mm. Sa déformation vaut :", o:["0,5 ‰", "2 ‰", "0,05 ‰", "5 ‰"], r:0, e:"ε = 1/2 000 = 0,0005 = 0,5 ‰."},
  {q:"Le béton armé fonctionne car le béton et l'acier ont :", o:["La même couleur", "Des coefficients de dilatation proches", "La même résistance", "La même masse"], r:1, e:"Ils se dilatent ensemble avec la température."},
  {q:"Le fluage est :", o:["Une déformation instantanée", "Une déformation différée sous charge permanente", "Une fissure", "Un défaut de coulage"], r:1, e:"La flèche augmente avec le temps."},
  {q:"La distorsion mesure :", o:["Un allongement", "La variation d'un angle droit", "Un volume", "Une température"], r:1, e:"Elle traduit le cisaillement."}
 ]},

{id:"mmc-4", niv:2, titre:"Loi de comportement élastique (Hooke)", duree:30, contenu:`## Loi de Hooke en traction simple
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

!fig:traction|Lois de comportement de l'acier et du béton`, quiz:[
  {q:"Le module d'Young de l'acier vaut environ :", o:["2 000 MPa", "20 000 MPa", "200 000 MPa", "2 000 000 MPa"], r:2, e:"E ≈ 200 000 MPa."},
  {q:"Si σ = 100 MPa et E = 200 000 MPa, la déformation vaut :", o:["0,5 ‰", "5 ‰", "0,05 ‰", "2 ‰"], r:0, e:"ε = 100/200 000 = 0,0005."},
  {q:"Le coefficient de Poisson du béton vaut environ :", o:["0,5", "0,2", "1", "0"], r:1, e:"ν ≈ 0,2 pour le béton."},
  {q:"G s'exprime en fonction de E et ν par :", o:["E/(1+ν)", "E/(2(1+ν))", "2E(1+ν)", "E ν"], r:1, e:"G = E / (2(1 + ν))."}
 ]},

{id:"mmc-5", niv:3, titre:"Critères de résistance", duree:25, contenu:`## Pourquoi un critère ?
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
> Acier : von Mises. Sols et matériaux granulaires : Mohr-Coulomb. On applique toujours des **coefficients de sécurité** pour rester loin de la rupture.`, quiz:[
  {q:"Le critère de von Mises s'applique surtout :", o:["Aux sols", "Aux aciers", "Au bois", "À l'eau"], r:1, e:"Matériaux ductiles métalliques."},
  {q:"Dans le critère de Mohr-Coulomb, c représente :", o:["La compression", "La cohésion", "La contrainte critique", "Le coefficient de sécurité"], r:1, e:"τ = c + σ tan φ."},
  {q:"σ = 100 MPa, τ = 0 : la contrainte équivalente de von Mises vaut :", o:["100 MPa", "173 MPa", "50 MPa", "0"], r:0, e:"σeq = √(100²) = 100 MPa."},
  {q:"Un sable sec sans cohésion résiste grâce :", o:["À sa cohésion", "À son frottement interne φ", "À l'eau", "Au ciment"], r:1, e:"c ≈ 0, la résistance vient de σ tan φ."}
 ]},

{id:"mmc-8", niv:3, titre:"Contraintes planes et cercle de Mohr appliqué", duree:35, contenu:`## L'état plan de contraintes
Dans une paroi mince (âme de poutre, voile, dalle), on décrit l'état de contrainte en un point par **σx, σy et τxy**. Selon l'orientation de la facette, ces valeurs changent.

## Les contraintes principales
Il existe deux directions où le cisaillement est nul : ce sont les **directions principales**.
$$ σ1,2 = (σx + σy)/2 ± √( ((σx − σy)/2)² + τxy² )
$$ tan 2θ = 2 τxy / (σx − σy)

> [!exemple] Âme d'une poutre près d'un appui
> σx = 4 MPa (traction de flexion), σy = 0, τxy = 3 MPa.
> Centre du cercle de Mohr : 2 MPa ; rayon : √(2² + 3²) = 3,61 MPa.
> **σ1 = 5,61 MPa** (traction), σ2 = −1,61 MPa (compression), tan 2θ = 1,5 → **θ ≈ 28°**.
> La traction principale dépasse ft28 = 2,1 MPa et elle est **inclinée** : c'est l'origine des **fissures obliques d'effort tranchant** près des appuis, que reprennent les cadres.

!fig:mohr|Cercle de Mohr : contraintes principales et cisaillement maximal

## Lecture du cercle de Mohr
- Le centre est en (σx + σy)/2 ; le rayon donne le **cisaillement maximal**.
- Tourner une facette de θ revient à tourner de **2θ** sur le cercle.

## La loi de Hooke en deux dimensions
$$ εx = (σx − ν σy) / E      εy = (σy − ν σx) / E      γxy = τxy / G
avec ν le coefficient de Poisson (0,2 pour le béton, 0,3 pour l'acier) et G = E / (2(1 + ν)).

## Mesurer sur un ouvrage
Une **rosette de jauges** (trois jauges à 0°, 45°, 90°) collée sur une pièce donne εx, εy et γxy : on en déduit les contraintes réelles lors des essais de chargement ou de la surveillance d'ouvrages.`, quiz:[
  {q:"Les contraintes principales sont celles pour lesquelles :", o:["Le cisaillement est nul", "La contrainte normale est nulle", "Les deux contraintes sont égales", "Le matériau est rompu"], r:0, e:"Ce sont les directions propres du tenseur des contraintes."},
  {q:"σx = 4, σy = 0, τ = 3 MPa : le rayon du cercle de Mohr vaut :", o:["3,61 MPa", "5 MPa", "2 MPa", "7 MPa"], r:0, e:"√(2² + 3²) = 3,61 MPa."},
  {q:"Sur le cercle de Mohr, tourner une facette de θ correspond à une rotation de :", o:["2θ", "θ", "θ/2", "4θ"], r:0, e:"C'est une propriété fondamentale de la construction."},
  {q:"Les fissures obliques près des appuis d'une poutre sont dues :", o:["À la traction principale inclinée (effort tranchant)", "Au retrait seul", "À la compression du béton", "À la dilatation thermique"], r:0, e:"On les reprend par des cadres."}
 ]},

{id:"mmc-9", niv:3, titre:"Introduction aux éléments finis", duree:30, contenu:`## Le principe
La méthode des éléments finis découpe un ouvrage continu en petits **éléments** (barres, poutres, coques, volumes) reliés par des **nœuds**. Dans chaque élément, le déplacement est approché par des fonctions simples ; on assemble la **matrice de rigidité** globale et on résout [K][u] = [F] (voir Outils mathématiques).

## Les types d'éléments
| Élément | Usage |
|---|---|
| Barre | Treillis, tirants |
| Poutre | Poteaux, poutres, portiques |
| Coque (plaque) | Dalles, voiles, radiers, réservoirs |
| Volume | Massifs, sols, pièces épaisses |

## Le maillage
- Plus il est **fin**, plus le résultat est précis, mais plus le calcul est long.
- On le **raffine** là où les contraintes varient vite : angles de trémies, appuis, charges concentrées.
- On vérifie la **convergence** : en raffinant, le résultat ne doit plus beaucoup changer.

## Lire les résultats avec un œil critique
- Des **pics de contrainte** apparaissent aux points d'appui ponctuels ou aux angles rentrants : ce sont souvent des **singularités** numériques, à lisser ou à interpréter.
- Vérifier les **unités**, les **conditions d'appui** et l'**équilibre** (réactions = charges).

> [!exemple] Contrôle d'une dalle par un calcul manuel
> Dalle de 5 × 6 m sur appuis simples, qu = 10 kN/m². Avec les tables du BAEL (α = 5/6 = 0,83), μx ≈ 0,053 :
> Mx ≈ 0,053 × 10 × 5² = **13,2 kN·m/m**. Le modèle aux éléments finis doit donner une valeur voisine au centre de la dalle ; un écart de plus de 20 % signale une erreur de modélisation.

> [!retenir]
> Le logiciel calcule ; l'ingénieur modélise et vérifie. Un résultat non contrôlé n'est pas un résultat.`, quiz:[
  {q:"Pour modéliser une dalle, on utilise des éléments :", o:["Coques (plaques)", "Barres", "Ressorts seuls", "Points"], r:0, e:"Ils reprennent la flexion dans deux directions."},
  {q:"On raffine le maillage :", o:["Là où les contraintes varient rapidement", "Partout de la même façon", "Seulement aux bords libres", "Jamais"], r:0, e:"Angles, appuis, charges concentrées."},
  {q:"Un pic de contrainte très élevé sous un appui ponctuel est souvent :", o:["Une singularité numérique", "Une erreur de matériau", "Un résultat à ferrailler tel quel", "Un défaut du béton"], r:0, e:"Il dépend de la finesse du maillage."},
  {q:"Le meilleur contrôle d'un calcul aux éléments finis est :", o:["Un calcul manuel simplifié et la vérification de l'équilibre", "Un maillage plus grossier", "Augmenter les charges", "Changer de couleur d'affichage"], r:0, e:"Comparer avec un ordre de grandeur connu."}
 ]}
]});
