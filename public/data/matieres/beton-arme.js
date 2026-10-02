A.addMatiere({
 id:'ba', titre:'Béton armé', court:'Béton armé', groupe:'struct', icone:'column', couleur:'#14202E', niveau:'Intermédiaire', heures:36, ordre:3, prerequis:['rdm','mat'],
 resume:"Principes du béton armé, actions et descente de charges, dispositions constructives, poteaux, poutres, dalles et semelles selon le BAEL 91 et l'Eurocode 2.",
 objectifs:["Comprendre le rôle respectif du béton et de l'acier","Faire une descente de charges et appliquer les combinaisons ELU / ELS","Respecter enrobages, ancrages, recouvrements et espacements","Dimensionner un poteau, une poutre, une dalle et une semelle"],
 applications:["Ferraillage des poteaux et poutres d'une maison R+1","Plans de ferraillage et nomenclatures d'aciers","Contrôle du ferraillage avant coulage","Lecture d'une note de calcul de bureau d'études"],
 chapitres:[
{id:'ba-1', titre:'Principe du béton armé et matériaux', duree:30, contenu:`## Pourquoi armer le béton ?
Le béton résiste très bien à la **compression** (25 MPa et plus) mais mal à la **traction** (environ 2 MPa) : une poutre en béton seul casse dès qu'elle fléchit. On place donc des **aciers dans les zones tendues** : le béton reprend la compression, l'acier la traction.

!fig:poutre-coupe|Zone comprimée (béton) et zone tendue (aciers)

## Pourquoi ça marche ?
1. **Adhérence** : grâce aux nervures des aciers HA, le béton et l'acier se déforment ensemble.
2. **Dilatation** thermique presque identique (≈ 10 × 10⁻⁶ /°C).
3. **Protection** : le béton (pH 13) protège l'acier de la corrosion, à condition d'un enrobage suffisant.

## Les caractéristiques du béton (BAEL)
- **fc28** : résistance caractéristique à la compression à 28 jours. Courant : **25 MPa**.
- **ft28 = 0,6 + 0,06 fc28** : résistance à la traction → 2,1 MPa pour fc28 = 25.
- **fbu = 0,85 fc28 / (θ γb)** : résistance de calcul à l'ELU, avec γb = 1,5 → **14,17 MPa** pour fc28 = 25.

## Les caractéristiques de l'acier
- **fe** = 400 MPa (Fe E400) ou 500 MPa (Fe E500).
- **fsu = fe / γs** avec γs = 1,15 → **348 MPa** (FeE400) ou **435 MPa** (FeE500).
- Es = 200 000 MPa.

## Les états limites
- **ELU** (état limite ultime) : on vérifie que la structure **ne se rompt pas**, avec des charges majorées et des résistances minorées.
- **ELS** (état limite de service) : on vérifie qu'elle reste **utilisable** (fissures limitées, flèches acceptables, durabilité).

> [!norme] BAEL ou Eurocode 2 ?
> Le **BAEL 91 révisé 99** reste très utilisé dans les bureaux d'études d'Afrique de l'Ouest. L'**Eurocode 2** (NF EN 1992) est la norme européenne actuelle. Les principes sont les mêmes ; les coefficients et les formules diffèrent légèrement. Ce cours utilise le BAEL et signale les équivalences.`,
 quiz:[
  {q:"Dans une poutre en béton armé, les aciers reprennent surtout :", o:["La compression","La traction","Le poids","La chaleur"], r:1, e:"Le béton résiste mal à la traction."},
  {q:"fbu pour un béton fc28 = 25 MPa (γb = 1,5) vaut :", o:["25 MPa","16,7 MPa","14,17 MPa","2,1 MPa"], r:2, e:"0,85 × 25 / 1,5 = 14,17 MPa."},
  {q:"fsu pour un acier Fe E500 vaut :", o:["500 MPa","435 MPa","348 MPa","200 MPa"], r:1, e:"500 / 1,15 = 435 MPa."},
  {q:"L'ELS vérifie :", o:["La rupture","L'aptitude au service (fissures, flèches)","Le prix","La couleur du béton"], r:1, e:"État limite de service."}
 ]},
{id:'ba-2', titre:'Actions, combinaisons et descente de charges', duree:35, contenu:`## Les actions
**Charges permanentes G** (poids propres) :
| Élément | Charge |
|---|---|
| Béton armé | 25 kN/m³ |
| Dalle pleine 15 cm | 3,75 kN/m² |
| Plancher corps creux 16+4 | ≈ 2,85 kN/m² |
| Chape + carrelage | ≈ 1,0 kN/m² |
| Cloisons légères (répartition forfaitaire) | ≈ 1,0 kN/m² |
| Enduit sous plafond | ≈ 0,2 kN/m² |
| Toiture-terrasse (forme de pente, étanchéité, protection) | ≈ 2,5 kN/m² |
| Mur en agglos de 15 enduit | ≈ 2,1 kN/m² de mur |

**Charges d'exploitation Q** :
| Usage | Q |
|---|---|
| Terrasse non accessible | 1,0 kN/m² |
| Logement, terrasse accessible privée | 1,5 kN/m² |
| Bureaux, escaliers | 2,5 kN/m² |
| Salles de réunion, classes | 2,5 à 4 kN/m² |
| Commerces, salles de spectacle | 5 kN/m² |

## Les combinaisons
$$ ELU : Pu = 1,35 G + 1,5 Q
$$ ELS : Pser = G + Q

## La descente de charges
On suit le chemin des charges : **dalle → poutres → poteaux → fondations → sol**. Chaque poteau reprend la charge de sa **surface d'influence** (on partage les portées à mi-distance entre poteaux).

> [!exemple] Poteau central d'une maison R+1 à toiture-terrasse
> Surface d'influence : 4,00 × 4,50 = **18 m²**. Plancher en corps creux 16+4.
> **Terrasse** : G = 2,85 + 2,5 + 0,2 = 5,55 kN/m² → 99,9 kN ; Q = 1,0 → 18 kN.
> **Plancher d'étage** : G = 2,85 + 1,0 + 1,0 + 0,2 = 5,05 kN/m² → 90,9 kN ; Q = 1,5 → 27 kN.
> **Poutres** (retombée 25 × 25 sous la dalle, 8,5 m par niveau) : 0,25 × 0,25 × 25 × 8,5 × 2 = 26,6 kN.
> **Poteau** 25 × 25 sur 2 niveaux de 3 m : 0,25² × 25 × 6 = 9,4 kN.
> **Total** : G = 226,8 kN ; Q = 45 kN.
> **Nu = 1,35 × 226,8 + 1,5 × 45 = 373,7 kN** ; **Nser = 271,8 kN**.

> [!astuce]
> Pour un pré-dimensionnement rapide d'un bâtiment courant, on compte environ **10 à 12 kN/m²** de plancher (charges totales ELS) : 18 m² × 2 niveaux × 12 ≈ 430 kN. On retrouve un ordre de grandeur cohérent (ici un peu pessimiste).`,
 quiz:[
  {q:"La combinaison ELU fondamentale est :", o:["G + Q","1,35 G + 1,5 Q","1,5 G + 1,35 Q","G + 2Q"], r:1, e:"Charges permanentes × 1,35, exploitation × 1,5."},
  {q:"Charge d'exploitation d'un logement :", o:["0,5 kN/m²","1,5 kN/m²","5 kN/m²","10 kN/m²"], r:1, e:"1,5 kN/m² en habitation."},
  {q:"La surface d'influence d'un poteau sert à :", o:["Calculer sa hauteur","Calculer la charge qu'il reprend","Choisir son coffrage","Calculer le prix"], r:1, e:"On multiplie les charges au m² par cette surface."},
  {q:"Pu pour G = 100 kN et Q = 20 kN :", o:["120 kN","165 kN","135 kN","150 kN"], r:1, e:"1,35 × 100 + 1,5 × 20 = 165 kN."}
 ]},
{id:'ba-3', titre:'Dispositions constructives : enrobage, ancrage, espacements', duree:30, contenu:`## L'enrobage
Distance entre la surface de l'acier (cadres compris) et le parement le plus proche. Il protège de la corrosion et du feu et permet l'adhérence.
!fig:enrobage|Enrobages usuels
- BAEL : **1 cm** (locaux couverts et clos non exposés), **3 cm** (parois exposées aux intempéries ou à la condensation), **5 cm** (mer, atmosphère agressive).
- Pratique courante sur les chantiers : dalles **2 cm**, poteaux et poutres **2,5 à 3 cm**, fondations **4 à 5 cm**.
- On le garantit avec des **cales** (béton, plastique) fixées sur les armatures.

## L'ancrage et le recouvrement
Une barre doit être prolongée suffisamment pour transmettre son effort au béton : **longueur de scellement droit ls**.
$$ ls = φ × fe / (4 τsu)    avec τsu = 0,6 × ψs² × ft28 (ψs = 1,5 pour les HA)
Pour fc28 = 25 MPa : τsu = 2,84 MPa → **ls ≈ 35 φ** (Fe E400) et **≈ 44 φ** (Fe E500).
Valeurs forfaitaires courantes : **40 φ** (FeE400) et **50 φ** (FeE500). Exemple : recouvrement de HA12 en FeE500 → 50 × 1,2 = **60 cm**.
Avec un **crochet normal** en bout de barre, la longueur droite nécessaire est réduite (environ 0,6 ls).

## Les espacements
- Entre barres : au moins le diamètre de la barre et **1,5 fois la taille du plus gros granulat** (pour que le béton passe).
- Cadres de poteaux : **st ≤ min(15 φ longitudinal ; 40 cm ; a + 10 cm)**, resserrés près des nœuds.
- Cadres de poutres : st ≤ min(0,9 d ; 40 cm) et selon le calcul d'effort tranchant.

## Sections minimales
- Poutres : **As ≥ 0,23 b d ft28 / fe** (condition de non-fragilité).
- Poteaux : **A ≥ max(4 cm² par mètre de périmètre ; 0,2 % de la section)** et A ≤ 5 % de la section.

> [!attention] Contrôle avant coulage
> Nombre et diamètre des barres, cadres fermés et bien espacés, cales en place, recouvrements suffisants, attentes pour l'étage, propreté du coffrage. **On ne coule jamais sans cette vérification.**`,
 quiz:[
  {q:"Enrobage courant pour une semelle de fondation :", o:["1 cm","2 cm","4 à 5 cm","10 cm"], r:2, e:"Le béton est en contact avec le sol."},
  {q:"Longueur de recouvrement forfaitaire pour du HA10 en Fe E500 :", o:["10 cm","25 cm","50 cm","1 m"], r:2, e:"50 φ = 50 × 1,0 = 50 cm."},
  {q:"L'espacement entre barres doit permettre :", o:["D'économiser du béton","Au béton et aux granulats de passer","De plier les barres","De mettre des gaines"], r:1, e:"Au moins 1,5 fois le plus gros granulat."},
  {q:"Section minimale d'acier d'un poteau 20 × 20 (périmètre 0,8 m) :", o:["0,8 cm²","3,2 cm²","8 cm²","20 cm²"], r:1, e:"4 cm²/m × 0,8 m = 3,2 cm² (> 0,2 % × 400 = 0,8 cm²)."}
 ]},
{id:'ba-4', titre:'Poteaux en compression centrée', duree:35, contenu:`## La formule du BAEL
$$ Nu ≤ α × [ Br × fc28 / (0,9 γb) + A × fe / γs ]
- **Br** : section réduite = (a − 2 cm) × (b − 2 cm) ;
- **A** : section des aciers longitudinaux ;
- **α** : coefficient qui tient compte du flambement :
$$ λ = Lf × √12 / a
$$ α = 0,85 / (1 + 0,2 (λ/35)²)   si λ ≤ 50
$$ α = 0,60 × (50/λ)²             si 50 < λ ≤ 70
- **Lf** : longueur de flambement, souvent **0,7 L₀** pour un poteau de bâtiment encastré dans la fondation et relié à des poutres, sinon L₀.

!fig:poteau-coupe|Section d'un poteau

## Exemple complet
> [!exemple] Poteau central de la maison R+1 (Nu = 373,7 kN)
> Section proposée 25 × 25, hauteur libre L₀ = 3,00 m → Lf = 0,7 × 3 = 2,10 m.
> λ = 2,10 × 3,464 / 0,25 = **29,1** → α = 0,85 / (1 + 0,2 × (29,1/35)²) = 0,85 / 1,138 = **0,747**.
> Br = 0,23 × 0,23 = 0,0529 m² → Br fc28 / (0,9 × 1,5) = 0,0529 × 25 / 1,35 = 0,980 MN = **980 kN**.
> Le béton seul supporte déjà α × 980 = **732 kN** > 373,7 kN : les aciers sont fixés par le **minimum**.
> Amin = max(4 cm²/m × 1,0 m ; 0,2 % × 625 cm²) = max(4 ; 1,25) = **4 cm²** → **4 HA12** (4,52 cm²).
> Cadres HA6 : st ≤ min(15 × 1,2 = 18 cm ; 40 ; 35) → **cadres HA6 tous les 15 cm**, 10 cm près des nœuds.

## Quand faut-il calculer les aciers ?
Si α × Br fc28/(0,9 γb) < Nu, on calcule : **A ≥ (Nu/α − Br fc28/(0,9 γb)) × γs / fe**.

> [!exemple] Poteau de RDC d'un immeuble
> Nu = 1 900 kN, section 35 × 35, Lf = 2,1 m : λ = 20,8, α = 0,795. Br = 0,33² = 0,1089 m² → Br fc28/1,35 = 2 017 kN.
> Nu/α = 2 390 kN → A ≥ (2 390 − 2 017) × 1,15 / 500 × 10 = **8,6 cm²** → 8 HA12 (9,05 cm²) ; vérifier aussi Amin = 4 × 1,4 = 5,6 cm² ✔.

> [!retenir]
> Section réduite Br, coefficient α (élancement), aciers minimums : le poteau d'une maison est souvent gouverné par les minimums, celui d'un immeuble par le calcul.`,
 quiz:[
  {q:"La section réduite Br d'un poteau 30 × 30 vaut :", o:["900 cm²","784 cm²","841 cm²","600 cm²"], r:1, e:"(30 − 2) × (30 − 2) = 784 cm²."},
  {q:"Quand l'élancement λ augmente, α :", o:["Augmente","Diminue","Reste égal à 1","Devient négatif"], r:1, e:"Le risque de flambement réduit la capacité."},
  {q:"Dans l'exemple de la maison, le ferraillage du poteau est déterminé par :", o:["Le calcul de résistance","Les sections minimales","Le prix","L'architecte"], r:1, e:"Le béton seul suffit : on met le minimum."},
  {q:"On limite de préférence l'élancement des poteaux en béton armé à :", o:["10","50","150","500"], r:1, e:"Au-delà, le flambement devient prépondérant."}
 ]},
{id:'ba-5', titre:'Poutres en flexion simple', duree:40, contenu:`## Démarche à l'ELU (section rectangulaire)
1. Moment ultime **Mu** (par exemple qu L²/8).
2. Moment réduit :
$$ µ = Mu / (b × d² × fbu)
3. Si µ ≤ µl (≈ 0,37 pour Fe E500, 0,39 pour Fe E400) : pas d'aciers comprimés nécessaires.
4. Position de l'axe neutre et bras de levier :
$$ α = 1,25 × (1 − √(1 − 2µ))        z = d × (1 − 0,4 α)
5. Section d'acier :
$$ As = Mu / (z × fsu)
6. Vérifier la condition de non-fragilité : As ≥ 0,23 b d ft28 / fe.

## Exemple complet
> [!exemple] Poutre de 4,50 m sur deux appuis, section 20 × 40 cm, d = 36 cm
> Charges : G = 12 kN/m, Q = 5 kN/m → qu = 1,35 × 12 + 1,5 × 5 = **23,7 kN/m**.
> Mu = 23,7 × 4,5² / 8 = **60,0 kN·m**.
> µ = 0,060 / (0,20 × 0,36² × 14,17) = 0,060 / 0,3673 = **0,163** < 0,37 ✔.
> α = 1,25 × (1 − √(1 − 0,327)) = **0,224** ; z = 0,36 × (1 − 0,090) = **0,328 m**.
> As = 0,060 / (0,328 × 435) = 4,21 × 10⁻⁴ m² = **4,21 cm²** → **3 HA14** (4,62 cm²).
> Non-fragilité : 0,23 × 20 × 36 × 2,1 / 500 = 0,70 cm² ✔.

## L'effort tranchant
$$ τu = Vu / (b × d)    ≤ τlim = min(0,2 fc28/γb ; 5 MPa) = 3,33 MPa (fissuration peu préjudiciable)
> [!exemple] Suite
> Vu = 23,7 × 4,5 / 2 = 53,3 kN → τu = 0,0533 / (0,20 × 0,36) = **0,74 MPa** ✔.
> Cadres : At / (b st) ≥ (τu − 0,3 ft28) / (0,9 fe/γs) = (0,74 − 0,63) / 391,5 → At/st ≥ 0,56 cm²/m. Un cadre HA6 (2 brins = 0,57 cm²) suffirait à 1 m, mais l'espacement maximal st ≤ min(0,9 d ; 40 cm) = 32 cm s'impose : **cadres HA6 tous les 25 cm en travée, 15 cm près des appuis**.

!fig:poutre-elevation|Ferraillage d'une poutre : aciers inférieurs, chapeaux, cadres

## Dispositions pratiques
- Au moins **2 barres de montage** en partie haute (HA10 ou HA12) pour tenir les cadres.
- Poutres continues : **chapeaux** sur les appuis intermédiaires (moment négatif), longueur environ 1/4 à 1/5 de la portée de part et d'autre.
- Arrêt des barres inférieures : on prolonge au moins la moitié des barres jusqu'aux appuis, avec ancrage.

> [!retenir]
> µ → α → z → As = Mu / (z fsu). Puis effort tranchant et cadres.`,
 quiz:[
  {q:"Le moment réduit µ vaut :", o:["Mu / (b d fbu)","Mu / (b d² fbu)","Mu × b × d","b d² / Mu"], r:1, e:"µ = Mu / (b d² fbu)."},
  {q:"As = Mu / (z × fsu) : z représente :", o:["La hauteur totale","Le bras de levier","L'enrobage","La largeur"], r:1, e:"Distance entre la résultante de compression et les aciers."},
  {q:"Pour 4,21 cm² nécessaires, on choisit :", o:["2 HA10","3 HA14","2 HA8","1 HA20"], r:1, e:"3 HA14 = 4,62 cm²."},
  {q:"Près des appuis, les cadres doivent être :", o:["Plus espacés","Plus serrés","Supprimés","Remplacés par des chapeaux"], r:1, e:"L'effort tranchant y est maximal."}
 ]},
{id:'ba-6', titre:'Les dalles', duree:35, contenu:`## Sens de portée
On note **lx** la petite portée et **ly** la grande, et **α = lx / ly**.
- **α < 0,4** : la dalle porte dans **un seul sens** (le sens de lx) ; on la calcule comme une poutre de 1 m de large : M₀ = p lx² / 8.
- **α ≥ 0,4** : la dalle porte dans **les deux sens**.

## Dalle portant dans deux sens (méthode BAEL)
$$ Mx = µx × p × lx²        My = µy × Mx
| α | µx (ELU) | µy (ELU) |
|---|---|---|
| 0,5 | 0,097 | 0,25 |
| 0,6 | 0,082 | 0,29 |
| 0,7 | 0,068 | 0,43 |
| 0,8 | 0,056 | 0,60 |
| 0,9 | 0,046 | 0,78 |
| 1,0 | 0,037 | 1,00 |
(valeurs indicatives pour un panneau simplement appuyé sur ses 4 côtés)

**Continuité** : pour un panneau continu, on prend en travée 0,75 à 0,85 M₀ et sur appuis 0,3 à 0,5 M₀ (chapeaux).

## Exemple
> [!exemple] Dalle de séjour 4,00 × 5,00 m, épaisseur 15 cm
> G = 3,75 + 1,0 (revêtement) + 0,2 (enduit) = 4,95 kN/m² ; Q = 1,5 kN/m².
> pu = 1,35 × 4,95 + 1,5 × 1,5 = **8,93 kN/m²** ; α = 0,8 → deux sens.
> Mx₀ = 0,056 × 8,93 × 4² = **8,0 kN·m/m** ; My₀ = 0,60 × 8,0 = 4,8 kN·m/m.
> En travée (continuité) : Mtx = 0,85 × 8,0 = 6,8 kN·m/m ; d ≈ 12 cm :
> µ = 0,0068 / (1 × 0,12² × 14,17) = 0,033 → z ≈ 0,118 m → As = 0,0068 / (0,118 × 435) = **1,32 cm²/m**.
> On retient le ferraillage minimal pratique : **HA8 tous les 20 cm** dans les deux sens (2,51 cm²/m), chapeaux HA8 / 20 sur appuis.

## Épaisseur et ferraillage minimal
- e ≥ lx / 30 à lx / 40 (dalle continue), **12 cm** minimum courant (15 cm pour l'acoustique).
- Espacement des barres ≤ 3 h et ≤ 33 cm dans le sens porteur.

!fig:dalle-coupe|Coupe d'une dalle : nappe inférieure et chapeaux

> [!retenir]
> lx/ly < 0,4 : un sens. Sinon deux sens avec les coefficients µx, µy. Ne jamais oublier les chapeaux sur appuis.`,
 quiz:[
  {q:"Une dalle de 3 × 9 m (α = 0,33) porte :", o:["Dans un seul sens","Dans les deux sens","Sans appuis","En console"], r:0, e:"α < 0,4."},
  {q:"Dans une dalle portant dans deux sens, le moment le plus fort est :", o:["Selon la grande portée","Selon la petite portée","Identique dans les deux sens","Nul"], r:1, e:"Mx (sens lx) est le plus grand."},
  {q:"Épaisseur minimale courante d'une dalle pleine :", o:["5 cm","8 cm","12 cm","30 cm"], r:2, e:"12 cm, plutôt 15 cm pour l'acoustique."},
  {q:"Les chapeaux d'une dalle se placent :", o:["En nappe inférieure en travée","En partie haute au droit des appuis","Dans les poteaux","Dans les fondations"], r:1, e:"Ils reprennent les moments négatifs sur appuis."}
 ]},
{id:'ba-7', titre:'Fondations superficielles : semelles', duree:35, contenu:`## Dimensions de la semelle isolée
1. **Surface** : A × B ≥ Nser / σsol (on ajoute environ 5 % pour le poids propre de la semelle et des terres).
2. Semelle **homothétique** du poteau : A / B = a / b (carrée sous un poteau carré).
3. **Hauteur utile** (méthode des bielles) : (A − a) / 4 ≤ d ≤ A − a. Hauteur totale h = d + 5 cm.

## Les aciers (méthode des bielles)
$$ Ax = Nu × (A − a) / (8 × d × fsu)    (même formule dans l'autre sens avec B et b)

## Exemple complet
> [!exemple] Semelle du poteau central (Nser = 271,8 kN, Nu = 373,7 kN, poteau 25 × 25)
> Sol : σsol = 1,5 bar = 0,15 MPa. Surface : 1,05 × 0,2718 / 0,15 = 1,90 m² → **A = B = 1,40 m** (1,96 m²).
> d ≥ (1,40 − 0,25) / 4 = 0,29 m → **d = 0,30 m, h = 0,35 m**.
> Ax = 0,3737 × (1,40 − 0,25) / (8 × 0,30 × 435) = 0,430 / 1 044 = 4,12 × 10⁻⁴ m² = **4,12 cm²** par direction.
> Choix : **7 HA10** dans chaque sens (5,50 cm²), espacement ≈ 20 cm, avec crochets ou retours en extrémités.

!fig:semelle|Coupe de la semelle et de son amorce de poteau

## Semelle filante sous mur
B ≥ pser / σsol (par mètre linéaire) ; aciers transversaux As = pu (B − b) / (8 d fsu) par mètre ; aciers longitudinaux de répartition (au moins 3 à 4 HA10).

## Longrines
Elles relient les semelles, reprennent les efforts de liaison et portent le soubassement : 20 × 30 à 25 × 50, 4 à 6 HA12, cadres HA6 / 15.

> [!attention]
> Les semelles d'un même bâtiment doivent reposer sur le **même bon sol**. Si le sol varie fortement d'un poteau à l'autre (ancien remblai, poche d'argile), demander l'avis d'un géotechnicien : le risque est le tassement différentiel.

> [!retenir]
> Surface par le sol (ELS), hauteur par les bielles (d ≥ (A − a)/4), aciers par Nu (A − a)/(8 d fsu).`,
 quiz:[
  {q:"La surface d'une semelle se calcule avec :", o:["Nu et fbu","Nser et σsol","Mu et z","La hauteur du poteau"], r:1, e:"On vérifie la contrainte sur le sol à l'ELS."},
  {q:"La hauteur utile d'une semelle doit vérifier :", o:["d ≥ (A − a)/4","d = 5 cm","d ≥ A","d ≤ (A − a)/10"], r:0, e:"Condition de la méthode des bielles."},
  {q:"Formule des aciers d'une semelle (bielles) :", o:["Nu (A − a)/(8 d fsu)","Nu / σsol","Mu / (z fsu)","0,2 % B"], r:0, e:"Méthode des bielles."},
  {q:"Pour 260 kN (ELS) sur un sol à 2 bars, la surface minimale de semelle est :", o:["0,13 m²","1,3 m²","13 m²","2,6 m²"], r:1, e:"0,26 MN / 0,2 MPa = 1,3 m²."}
 ]}
]});
