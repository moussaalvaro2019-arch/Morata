/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Structures
   Mécanique des milieux continus · Résistance des matériaux · Béton armé
   ===================================================================== */

/* ---------- MÉCANIQUE DES MILIEUX CONTINUS ---------- */
A.addChapitres('mmc', [
{id:'mmc-6', niv:1, titre:'Forces, contraintes et déformations en traction simple', duree:25, contenu:`## De la force à la contrainte
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
> Les calculs de structure gardent les matériaux dans le domaine **élastique** en service, avec une marge de sécurité.`,
 quiz:[
  {q:"La contrainte normale vaut :", o:["N / A","N × A","A / N","N × L"], r:0, e:"Force divisée par la section."},
  {q:"Une barre de 2 m qui s'allonge de 1 mm a une déformation de :", o:["0,5 ‰","2 ‰","0,05 ‰","5 ‰"], r:0, e:"1 / 2 000 = 0,0005 = 0,5 ‰."},
  {q:"Le module d'élasticité de l'acier vaut environ :", o:["200 000 MPa","30 000 MPa","2 000 MPa","500 MPa"], r:0, e:"Environ 7 fois celui du béton."},
  {q:"Dans le domaine élastique :", o:["La pièce reprend sa forme quand on la décharge","La déformation est permanente","La pièce est rompue","La contrainte est nulle"], r:0, e:"Au-delà, on entre dans le domaine plastique."}
 ]},
{id:'mmc-7', niv:1, titre:'Comportement des matériaux : essais de traction et de compression', duree:25, contenu:`## L'essai de traction sur l'acier
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
Le béton résiste bien en compression mais mal en traction ; l'acier résiste très bien en traction et apporte la **ductilité**. Associés, ils forment un matériau résistant et qui prévient avant de rompre.`,
 quiz:[
  {q:"La limite d'élasticité d'un acier Fe E500 vaut :", o:["500 MPa","25 MPa","200 000 MPa","2,1 MPa"], r:0, e:"C'est le « 500 » de la désignation."},
  {q:"Une éprouvette 16 × 32 rompt sous 400 kN : sa résistance vaut environ :", o:["20 MPa","40 MPa","10 MPa","4 MPa"], r:0, e:"400 000 / 20 106 ≈ 19,9 MPa."},
  {q:"Un matériau ductile :", o:["Se déforme beaucoup avant de rompre","Casse sans prévenir","Ne se déforme pas","Résiste seulement en compression"], r:0, e:"C'est le cas de l'acier."},
  {q:"La résistance en traction d'un béton de 25 MPa vaut environ :", o:["2,1 MPa","25 MPa","12,5 MPa","0,2 MPa"], r:0, e:"ft28 = 0,6 + 0,06 × 25 = 2,1 MPa."}
 ]},
{id:'mmc-8', niv:3, titre:'Contraintes planes et cercle de Mohr appliqué', duree:35, contenu:`## L'état plan de contraintes
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
Une **rosette de jauges** (trois jauges à 0°, 45°, 90°) collée sur une pièce donne εx, εy et γxy : on en déduit les contraintes réelles lors des essais de chargement ou de la surveillance d'ouvrages.`,
 quiz:[
  {q:"Les contraintes principales sont celles pour lesquelles :", o:["Le cisaillement est nul","La contrainte normale est nulle","Les deux contraintes sont égales","Le matériau est rompu"], r:0, e:"Ce sont les directions propres du tenseur des contraintes."},
  {q:"σx = 4, σy = 0, τ = 3 MPa : le rayon du cercle de Mohr vaut :", o:["3,61 MPa","5 MPa","2 MPa","7 MPa"], r:0, e:"√(2² + 3²) = 3,61 MPa."},
  {q:"Sur le cercle de Mohr, tourner une facette de θ correspond à une rotation de :", o:["2θ","θ","θ/2","4θ"], r:0, e:"C'est une propriété fondamentale de la construction."},
  {q:"Les fissures obliques près des appuis d'une poutre sont dues :", o:["À la traction principale inclinée (effort tranchant)","Au retrait seul","À la compression du béton","À la dilatation thermique"], r:0, e:"On les reprend par des cadres."}
 ]},
{id:'mmc-9', niv:3, titre:'Introduction aux éléments finis', duree:30, contenu:`## Le principe
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
> Le logiciel calcule ; l'ingénieur modélise et vérifie. Un résultat non contrôlé n'est pas un résultat.`,
 quiz:[
  {q:"Pour modéliser une dalle, on utilise des éléments :", o:["Coques (plaques)","Barres","Ressorts seuls","Points"], r:0, e:"Ils reprennent la flexion dans deux directions."},
  {q:"On raffine le maillage :", o:["Là où les contraintes varient rapidement","Partout de la même façon","Seulement aux bords libres","Jamais"], r:0, e:"Angles, appuis, charges concentrées."},
  {q:"Un pic de contrainte très élevé sous un appui ponctuel est souvent :", o:["Une singularité numérique","Une erreur de matériau","Un résultat à ferrailler tel quel","Un défaut du béton"], r:0, e:"Il dépend de la finesse du maillage."},
  {q:"Le meilleur contrôle d'un calcul aux éléments finis est :", o:["Un calcul manuel simplifié et la vérification de l'équilibre","Un maillage plus grossier","Augmenter les charges","Changer de couleur d'affichage"], r:0, e:"Comparer avec un ordre de grandeur connu."}
 ]}
]);

/* ---------- RÉSISTANCE DES MATÉRIAUX ---------- */
A.addChapitres('rdm', [
{id:'rdm-7', niv:1, titre:'Les bases : forces, charges et notion de contrainte', duree:25, contenu:`## Les unités
- La force se mesure en **newtons (N)** ; en bâtiment on utilise le **kilonewton (kN)** : 1 kN ≈ le poids de 100 kg.
- Une **contrainte** (force par surface) se mesure en **MPa** (1 MPa = 1 N/mm² = 1 000 kN/m²).

## Les types de charges
| Type | Unité | Exemple |
|---|---|---|
| Ponctuelle | kN | Réaction d'une poutre sur un poteau |
| Linéique (répartie) | kN/m | Mur posé sur une poutre |
| Surfacique | kN/m² | Poids d'une dalle, personnes et meubles |
| Volumique | kN/m³ | Béton armé : 25 kN/m³ |

## Charges permanentes et d'exploitation
- **G (permanentes)** : poids propre des éléments, revêtements, cloisons. Dalle pleine de 15 cm : 25 × 0,15 = 3,75 kN/m².
- **Q (exploitation)** : personnes, mobilier. Logement : **1,5 kN/m²** ; bureaux : 2,5 kN/m² ; escaliers : 2,5 kN/m².

## Passer d'une charge surfacique à une charge linéique
Une poutre reprend une **bande de dalle** (largeur de reprise).
> [!exemple]
> Dalle de 15 cm (3,75 kN/m²) + carrelage (1 kN/m²) + exploitation 1,5 kN/m², avec une largeur reprise de 4 m :
> q = (3,75 + 1 + 1,5) × 4 = **25 kN/m** sur la poutre.

## Comparer une contrainte à une résistance
> [!exemple]
> Un poteau de 20 × 20 cm (40 000 mm²) porte 400 kN : σ = 400 000 / 40 000 = **10 MPa**, inférieur à la résistance d'un béton de 25 MPa. Les règlements imposent en plus des **coefficients de sécurité** (sur les charges et sur les matériaux).`,
 quiz:[
  {q:"1 kN correspond environ au poids de :", o:["100 kg","1 kg","1 000 kg","10 kg"], r:0, e:"1 kN = 1 000 N ≈ 102 kg."},
  {q:"Le poids volumique du béton armé est :", o:["25 kN/m³","2,5 kN/m³","250 kN/m³","10 kN/m³"], r:0, e:"Environ 2 500 kg/m³."},
  {q:"La charge d'exploitation d'un logement vaut :", o:["1,5 kN/m²","15 kN/m²","0,15 kN/m²","5 kN/m²"], r:0, e:"Valeur réglementaire courante."},
  {q:"Charge de 6 kN/m² reprise sur 3 m de largeur : la poutre reçoit :", o:["18 kN/m","2 kN/m","9 kN/m","6 kN/m"], r:0, e:"6 × 3 = 18 kN/m."}
 ]},
{id:'rdm-8', niv:3, titre:'Poutres continues : le théorème des trois moments', duree:35, contenu:`## Une poutre hyperstatique
Une poutre qui repose sur plus de deux appuis est **continue** : les moments sur les appuis intermédiaires sont inconnus et la statique seule ne suffit plus.

## Le théorème des trois moments (Clapeyron)
Pour deux travées voisines de longueurs Li et L(i+1), à inertie constante, sous charges uniformes qi et q(i+1) :
$$ M(i−1) × Li + 2 Mi × (Li + L(i+1)) + M(i+1) × L(i+1) = −( qi × Li³ / 4 + q(i+1) × L(i+1)³ / 4 )

> [!exemple] Poutre sur trois appuis, deux travées de 5 m, q = 20 kN/m
> Appuis de rive : M0 = M2 = 0.
> 2 M1 × (5 + 5) = −(20 × 125/4 + 20 × 125/4) = −1 250 → **M1 = −62,5 kN·m** (soit −qL²/8, traction en haut).
> Réactions : rives RA = qL/2 + M1/L = 50 − 12,5 = **37,5 kN** ; appui central RB = 2 × 50 + 2 × 12,5 = **125 kN**.
> Moment maximal en travée, à x = RA / q = 1,875 m : M = 37,5 × 1,875 − 20 × 1,875²/2 = **35,2 kN·m**.

## Ce que change la continuité
- En travée, le moment passe de qL²/8 = 62,5 kN·m (poutre isolée) à **35,2 kN·m** ;
- Sur l'appui central apparaît un **moment négatif** de 62,5 kN·m : il faut des **chapeaux** (aciers en partie haute) ;
- L'appui central reçoit **25 % de plus** que deux travées indépendantes (125 kN au lieu de 100 kN) : à prendre en compte pour le poteau et sa semelle.

## Méthodes simplifiées du BAEL
Pour les planchers courants, la **méthode forfaitaire** donne directement des coefficients (moments en travée 0,75 à 0,85 M0, sur appuis 0,5 à 0,6 M0) ; la méthode de **Caquot** traite les cas où les charges d'exploitation sont élevées.`,
 quiz:[
  {q:"Pour deux travées égales sous charge uniforme, le moment sur l'appui central vaut :", o:["−qL²/8","−qL²/12","−qL²/24","0"], r:0, e:"Résultat du théorème des trois moments."},
  {q:"La réaction de l'appui central (2 travées de L, charge q) vaut :", o:["5qL/4","qL","qL/2","2qL"], r:0, e:"125 kN pour q = 20 kN/m et L = 5 m."},
  {q:"Sur les appuis intermédiaires d'une poutre continue, il faut des aciers :", o:["En partie haute (chapeaux)","Uniquement en partie basse","Aucun","Verticaux seulement"], r:0, e:"Le moment y est négatif : la fibre supérieure est tendue."},
  {q:"Par rapport à une poutre isolée, la continuité :", o:["Diminue le moment en travée","Augmente le moment en travée","Supprime l'effort tranchant","Ne change rien"], r:0, e:"Une partie du moment passe sur les appuis."}
 ]},
{id:'rdm-9', niv:3, titre:'Treillis et portiques', duree:35, contenu:`## Les treillis
Un treillis est formé de **barres articulées** aux nœuds, chargées aux nœuds : chaque barre n'est soumise qu'à un **effort normal** (traction ou compression). Il est isostatique si **b = 2n − 3** (b barres, n nœuds).

!fig:treillis|Ferme en treillis : barres tendues et comprimées

## Méthode des nœuds
On isole chaque nœud et on écrit ΣFx = 0 et ΣFy = 0.
> [!exemple] Ferme triangulaire : portée 6 m, hauteur 1,50 m, charge P = 12 kN au faîtage
> Réactions : 6 kN à chaque appui. sin α = 1,5 / √(3² + 1,5²) = 0,447 ; cos α = 0,894.
> Nœud d'appui : N(arbalétrier) × sin α = 6 → **N = 13,4 kN en compression**.
> Entrait : T = N × cos α = **12,0 kN en traction**.
> Plus la ferme est plate, plus ces efforts augmentent : une pente trop faible coûte cher en sections.

## Méthode des sections (Ritter)
Pour trouver l'effort dans une barre précise d'un grand treillis, on coupe la ferme par une section traversant au plus trois barres et on écrit l'**équilibre des moments** autour du point où se croisent deux d'entre elles.

## Les portiques
Poteaux et traverses sont reliés par des **nœuds rigides** : les éléments travaillent en **flexion** et les nœuds transmettent des moments. Les portiques assurent la **stabilité horizontale** (vent, séisme).
> [!exemple] Portique à deux poteaux encastrés en pied, traverse très rigide
> Effort horizontal H = 20 kN au niveau de la traverse, hauteur h = 3 m.
> Chaque poteau reprend H/2 = 10 kN ; le point de moment nul est à mi-hauteur, d'où un moment en pied et en tête de **10 × 1,5 = 15 kN·m**.

> [!retenir]
> Treillis : efforts normaux, assemblages simples, grandes portées légères. Portiques : flexion, nœuds rigides, contreventement.`,
 quiz:[
  {q:"Dans un treillis chargé aux nœuds, les barres subissent :", o:["Uniquement des efforts normaux","De la flexion","De la torsion","Aucun effort"], r:0, e:"Les nœuds sont considérés comme articulés."},
  {q:"Un treillis plan est isostatique si :", o:["b = 2n − 3","b = n","b = 3n","b = n − 1"], r:0, e:"b barres, n nœuds."},
  {q:"Dans l'exemple de la ferme, l'entrait est :", o:["Tendu","Comprimé","Fléchi","Sans effort"], r:0, e:"T = N cos α = 12 kN en traction."},
  {q:"Les portiques servent notamment à :", o:["Reprendre les efforts horizontaux (vent, séisme)","Supprimer les fondations","Isoler du bruit","Évacuer les eaux"], r:0, e:"Grâce à leurs nœuds rigides."}
 ]}
]);

/* ---------- BÉTON ARMÉ ---------- */
A.addChapitres('ba', [
{id:'ba-8', niv:1, titre:'Lire un plan de ferraillage et façonner les aciers', duree:30, contenu:`## Le plan de ferraillage
Il montre chaque élément (poteau, poutre, dalle, semelle) avec ses **aciers repérés** et une **nomenclature** :
| Repère | Nombre | Ø | Longueur | Forme | Poids |
|---|---|---|---|---|---|
| 1 | 4 | HA12 | 3,60 m | Barre droite | 12,8 kg |
| 2 | 21 | HA6 | 0,72 m | Cadre 15 × 15 | 3,4 kg |

> [!exemple] Poteau 20 × 20 de 3 m de haut
> - Repère 1 : 4 HA12 de 3,00 m + 0,60 m d'attente pour le recouvrement avec l'étage = 3,60 m. Poids : 4 × 3,60 × 0,888 = **12,8 kg**.
> - Repère 2 : cadres HA6 tous les 15 cm → 3,00 / 0,15 + 1 = 21 cadres. Côté du cadre = 20 − 2 × 2,5 (enrobage) = 15 cm. Longueur développée : 4 × 0,15 + 2 crochets de 6 cm = **0,72 m**. Poids : 21 × 0,72 × 0,222 = 3,4 kg.

## Le poids des barres
**Poids (kg/m) = Ø² / 162** (Ø en mm) : HA6 → 0,222 ; HA8 → 0,395 ; HA10 → 0,617 ; HA12 → 0,888 ; HA14 → 1,21 ; HA16 → 1,58.

## Couper sans gaspiller
Les barres sont livrées en **12 m**. Dans une barre de 12 m, on coupe 3 longueurs de 3,60 m (10,80 m) : il reste 1,20 m de chute, réutilisable pour des attentes ou des épingles. Préparez une **liste de coupe** avant de commencer.

## Façonner
- Plier à la **cintreuse** autour d'un mandrin (diamètre de cintrage d'au moins **4 fois le diamètre** de la barre pour les cadres), jamais à chaud ;
- Fermer les cadres par des **crochets à 135°** qui s'ancrent dans le béton ;
- Ligaturer au **fil recuit** à chaque croisement important ;
- Poser des **cales** d'enrobage avant le coulage.

> [!attention]
> Ne jamais redresser une barre déjà pliée, ni chauffer l'acier pour le plier : il perd sa résistance et sa ductilité.`,
 quiz:[
  {q:"Le poids d'une barre HA12 est d'environ :", o:["0,888 kg/m","0,222 kg/m","1,58 kg/m","12 kg/m"], r:0, e:"Ø²/162 = 144/162 ≈ 0,888 kg/m."},
  {q:"Pour un poteau de 3 m avec des cadres tous les 15 cm, il faut :", o:["21 cadres","15 cadres","30 cadres","10 cadres"], r:0, e:"3,00 / 0,15 + 1 = 21."},
  {q:"Les cadres se ferment par des crochets à :", o:["135°","45°","180° vers l'extérieur","0°"], r:0, e:"Ils s'ancrent dans le noyau de béton."},
  {q:"Plier une barre en la chauffant :", o:["Est interdit : l'acier perd ses qualités","Est recommandé","Améliore l'adhérence","Est obligatoire pour les gros diamètres"], r:0, e:"Le façonnage se fait à froid, à la cintreuse."}
 ]},
{id:'ba-9', niv:3, titre:'Effort tranchant, ancrages et vérifications à l\'ELS', duree:40, contenu:`## Effort tranchant (BAEL)
Contrainte tangente conventionnelle :
$$ τu = Vu / (b0 × d)
En fissuration peu préjudiciable avec des cadres droits : τu ≤ **min(0,2 fc28 / γb ; 5 MPa) = 3,33 MPa** pour un béton de 25 MPa.

Armatures transversales :
$$ At / (b0 × st) ≥ (τu − 0,3 ft28) / (0,9 fe / γs)

> [!exemple] Poutre 25 × 50 (d = 0,45 m), Vu = 150 kN
> τu = 0,150 / (0,25 × 0,45) = **1,33 MPa** ≤ 3,33 ✔.
> Cadres HA8 à 2 brins (At = 1,01 cm²) : st ≤ 1,01 × 10⁻⁴ × 0,9 × 435 / (0,25 × (1,33 − 0,63)) = **0,22 m** → cadres HA8 **tous les 20 cm**, resserrés près des appuis (et st ≤ min(0,9 d ; 40 cm)).

## Ancrage des barres
La **longueur de scellement droit** est la longueur nécessaire pour que l'adhérence équilibre l'effort de la barre :
$$ ls = Ø × fe / (4 × τs)      τs = 0,6 × ψs² × ft28 = 0,6 × 1,5² × 2,1 = 2,84 MPa
Pour un acier Fe E500 : ls ≈ **44 Ø**, soit 53 cm pour du HA12. En pratique on retient **40 Ø (Fe E400) à 50 Ø (Fe E500)**, ou des crochets normalisés.

## États limites de service (ELS)
- **Compression du béton** : σbc ≤ 0,6 fc28 = 15 MPa.
- **Ouverture des fissures** : selon l'environnement.
| Fissuration | Limite de contrainte dans l'acier | Exemple |
|---|---|---|
| Peu préjudiciable | pas de limite particulière | Locaux fermés et secs |
| Préjudiciable | σs ≤ min(2/3 fe ; 110 √(η ft28)) ≈ 202 MPa | Façades exposées, réservoirs |
| Très préjudiciable | 0,8 × la valeur précédente | Bord de mer, milieu agressif |

À Abidjan, les ouvrages **proches de la lagune ou de la mer** relèvent souvent de la fissuration préjudiciable : plus d'acier, enrobages de 4 à 5 cm.

## Dispense de calcul de flèche (poutres)
On peut ne pas calculer la flèche si : **h / L ≥ 1/16**, h / L ≥ Mt / (10 M0) et A / (b0 d) ≤ 4,2 / fe.`,
 quiz:[
  {q:"Pour un béton de 25 MPa (fissuration peu préjudiciable), τu limite vaut :", o:["3,33 MPa","25 MPa","1 MPa","10 MPa"], r:0, e:"min(0,2 × 25 / 1,5 ; 5) = 3,33 MPa."},
  {q:"La longueur de scellement droit d'un HA12 en Fe E500 est d'environ :", o:["53 cm","12 cm","1,20 m","20 cm"], r:0, e:"≈ 44 Ø = 53 cm."},
  {q:"En fissuration préjudiciable, la contrainte dans l'acier est limitée à environ :", o:["202 MPa","500 MPa","435 MPa","50 MPa"], r:0, e:"min(2/3 × 500 ; 110 √(1,6 × 2,1)) ≈ 202 MPa."},
  {q:"La flèche d'une poutre peut ne pas être calculée notamment si :", o:["h / L ≥ 1/16","h / L ≤ 1/30","La poutre est en acier","Elle est en façade"], r:0, e:"Avec deux autres conditions sur les moments et les aciers."}
 ]}
]);
