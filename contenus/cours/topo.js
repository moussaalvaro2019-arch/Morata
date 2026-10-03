/* =====================================================================
   Topographie — cours complet (3 niveaux)
   Débutant : notions, instruments, distances, plans, courbes de niveau
   Intermédiaire : nivellement, angles, gisements et coordonnées, surfaces, implantation, profils
   Avancé : polygonation, tachéométrie, intersection, GNSS, tracé routier, cubatures, erreurs
   ===================================================================== */
A.addMatiere({
 id:"topo",
 titre:"Topographie",
 court:"Topographie",
 groupe:"sol",
 icone:"map",
 couleur:"#1E9B5E",
 niveau:"Intermédiaire",
 heures:80,
 ordre:2,
 prerequis:["math"],
 resume:"Mesurer, calculer et implanter : unités et échelles, instruments, distances, nivellement, angles, gisements et coordonnées, surfaces, implantation des bâtiments, profils, polygonation, station totale, GNSS, tracé routier et cubatures, avec applications et exercices corrigés.",
 objectifs:[
  "Utiliser les unités d'angles (grades, degrés) et les échelles des plans",
  "Mettre en station et utiliser niveau, théodolite, station totale et GNSS",
  "Mesurer des distances et appliquer les corrections",
  "Réaliser, calculer et compenser un nivellement",
  "Calculer gisements, distances, coordonnées et surfaces",
  "Implanter un bâtiment et contrôler l'implantation",
  "Calculer et compenser une polygonale",
  "Établir des profils et calculer des cubatures de terrassement",
  "Implanter une courbe circulaire de route"
 ],
 applications:["Levé et plan topographique d'une parcelle", "Report du niveau ±0,00 et des niveaux de plateforme", "Implantation des axes et des poteaux d'un bâtiment", "Profils de route et de canalisation", "Volumes de déblais et de remblais", "Lotissement et bornage"],
 chapitres:[
{id:"topo-1", niv:1, titre:"Notions de base : unités, échelles et coordonnées", duree:55, contenu:`## Qu'est-ce que la topographie ?
La **topographie** est la science qui permet de **mesurer** le terrain, de le **représenter** sur un plan et d'**implanter** (placer sur le terrain) les ouvrages projetés. Elle comprend :
- la **planimétrie** : la position des points en plan (coordonnées X et Y) ;
- l'**altimétrie** : la hauteur des points (altitude Z) ;
- l'**implantation** : l'opération inverse du levé, qui reporte sur le terrain les points d'un projet.
Sur un chantier de bâtiment, la topographie intervient du début (levé du terrain, bornage) à la fin (contrôle des niveaux, récolement), en passant par l'implantation des axes, des fondations et des poteaux.

## Les unités de longueur
On mesure en **mètres** avec trois décimales (le **millimètre**) : 48,375 m. Les surfaces s'expriment en **m²**, en **ares** (1 a = 100 m²) et en **hectares** (1 ha = 10 000 m²).

## Les unités d'angles
| Unité | Un tour | Angle droit | Subdivisions |
|---|---|---|---|
| Grade (gon) | 400 gon | 100 gon | 1 gon = 100 cgon = 1 000 mgon |
| Degré sexagésimal | 360° | 90° | 1° = 60' ; 1' = 60" |
| Radian | 2π rad | π/2 rad | — |
Les appareils topographiques utilisés en Afrique francophone travaillent le plus souvent en **grades** (gon), plus pratiques car décimaux.
$$ degrés = grades × 0,9      grades = degrés / 0,9      radians = grades × π / 200

> [!exemple] Conversions
> 63,4567 gon × 0,9 = 57,1110° = **57° 06' 40"** (0,1110° × 60 = 6,66' ; 0,66' × 60 = 40").
> 47° = 47 / 0,9 = **52,2222 gon** ; 35 gon = **31,5°**.
> Un angle de 1 mgon (0,001 gon) correspond à un écart de **1,6 mm à 100 m** : c'est la précision d'un bon théodolite.

## Les échelles
L'**échelle** E d'un plan est le rapport entre une longueur sur le plan et la longueur réelle correspondante : 1/500 signifie que 1 cm sur le plan représente 500 cm = 5 m sur le terrain.
$$ longueur réelle = longueur sur le plan × dénominateur de l'échelle
$$ surface réelle = surface sur le plan × (dénominateur)²
| Échelle | 1 cm représente | Usage |
|---|---|---|
| 1/50 | 0,50 m | détails, coffrages |
| 1/100 | 1 m | plans d'exécution de bâtiment |
| 1/200 | 2 m | plans de masse, petits levés |
| 1/500 | 5 m | plans topographiques de parcelle, lotissements |
| 1/1 000 | 10 m | plans de quartier, VRD |
| 1/2 000 – 1/5 000 | 20 – 50 m | plans de ville, cadastre |
| 1/50 000 | 500 m | cartes topographiques (IGN, CCT) |

> [!exemple] Lire un plan au 1/500
> Une façade de parcelle mesure 7,4 cm sur le plan : 7,4 × 500 = 3 700 cm = **37,0 m**.
> Une parcelle occupe 12 cm² sur un plan au 1/1 000 : 12 × 1 000² cm² = 12 000 000 cm² = **1 200 m²**.

## Les coordonnées rectangulaires
On repère un point par ses **coordonnées** dans un repère orthonormé :
- **X** (ou E) : abscisse, vers l'**Est** ;
- **Y** (ou N) : ordonnée, vers le **Nord** ;
- **Z** (ou H) : **altitude**, au-dessus d'une surface de référence (niveau moyen de la mer).
Les coordonnées officielles en Côte d'Ivoire sont exprimées dans une projection **UTM** (zones 29 et 30) sur l'ellipsoïde WGS 84 ; sur un chantier, on travaille souvent dans un **repère local** (par exemple X et Y comptés depuis une borne).
La **distance** entre deux points A et B vaut :
$$ DAB = √((XB − XA)² + (YB − YA)²)

## La pente
La **pente** entre deux points est le rapport de la **dénivelée** Δh à la **distance horizontale** Dh :
$$ p = Δh / Dh      (en % ou en ‰)      angle de pente : i = arctan(p)
Exemples : une rampe de garage de 15 % monte de 15 cm par mètre ; une canalisation d'eaux usées à 2 % descend de 2 cm par mètre.

> [!retenir]
> - 400 gon = 360° ; degrés = grades × 0,9.
> - Longueur réelle = longueur plan × échelle ; surface : × échelle².
> - X vers l'Est, Y vers le Nord, Z altitude ; D = √(ΔX² + ΔY²).
> - Pente = Δh / Dh.`,
 sujet:{titre:"Unités d'angle, échelles et coordonnées d'un terrain à bâtir", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un géomètre vous transmet le plan d'un terrain à Anyama. Avant de l'exploiter, vous devez maîtriser les unités d'angle, les échelles et les coordonnées rectangulaires.

**Données**
- Angles relevés : **125,4370 gon** ; angle à convertir : **48°30'** ;
- Sur un plan au **1/2 000**, une limite mesure **6,35 cm** ; sur un plan au **1/500**, une parcelle couvre **12,4 cm²** ;
- On doit dessiner un terrain de **240 m** de long sur une feuille A3 (zone utile **38 cm**) ;
- Bornes (en m) : **A (1 250,00 ; 840,00)**, **B (1 310,00 ; 920,00)**, **C (1 330,00 ; 850,00)** (X vers l'Est, Y vers le Nord) ;
- Altitudes : **ZA = 52,30 m** ; **ZB = 54,80 m**.

### Partie A — Unités d'angle (5 points)
1. Rappeler les correspondances entre gon, degrés et radians pour un tour complet. (1 pt)
2. Convertir 125,4370 gon en degrés décimaux puis en degrés-minutes-secondes. (2 pts)
3. Convertir 48°30' en gon, et 100 gon en radians. (2 pts)

### Partie B — Échelles (6 points)
4. Calculer la longueur réelle de la limite et la surface réelle de la parcelle. (3 pts)
5. Choisir l'échelle normalisée permettant de dessiner le terrain sur l'A3 (1/500, 1/1 000 ou 1/2 000). (2 pts)
6. Quelle est la précision graphique (0,1 mm sur le papier) au 1/500 et au 1/2 000 ? (1 pt)

### Partie C — Coordonnées (9 points)
7. Calculer les distances AB, AC et BC. (3 pts)
8. Calculer les gisements GAB et GAC. (2 pts)
9. Calculer la surface du triangle ABC par la formule des coordonnées. (2 pts)
10. Calculer la pente de A vers B en %. (2 pts)`,
  corrige:`### Partie A — Unités (5 pts)
1. 1 tour = **400 gon = 360° = 2π rad** ; 1 gon = 0,9°. *(1 pt)*
2. 125,4370 × 0,9 = **112,8933°** = 112° + 0,8933 × 60 = 53,60' → **112°53'36"**. *(2 pts)*
3. 48°30' = 48,5° / 0,9 = **53,8889 gon** ; 100 gon = **π/2 = 1,5708 rad**. *(2 pts)*

### Partie B — Échelles (6 pts)
4. 6,35 cm × 2 000 = 12 700 cm = **127,00 m** ; 1 cm² au 1/500 = 5 m × 5 m = 25 m² → 12,4 × 25 = **310 m²**. *(3 pts)*
5. 240 m / 0,38 m = 632 → l'échelle doit être plus petite que 1/632 : **1/1 000** (24 cm sur le papier) ; le 1/500 donnerait 48 cm, trop grand. *(2 pts)*
6. 0,1 mm × 500 = **5 cm** ; 0,1 mm × 2 000 = **20 cm**. *(1 pt)*

### Partie C — Coordonnées (9 pts)
7. *(3 pts)*
   - AB : ΔX = 60,00, ΔY = 80,00 → **100,00 m** ;
   - AC : ΔX = 80,00, ΔY = 10,00 → √6 500 = **80,62 m** ;
   - BC : ΔX = 20,00, ΔY = − 70,00 → √5 300 = **72,80 m**.
8. GAB = arctan(60 / 80) = **40,9666 gon** (quadrant I) ; GAC = arctan(80 / 10) = **92,0833 gon**. *(2 pts)*
9. $$ 2S = |XA (YB − YC) + XB (YC − YA) + XC (YA − YB)|
   = |1 250 × 70 + 1 310 × 10 + 1 330 × (− 80)| = |87 500 + 13 100 − 106 400| = 5 800 → **S = 2 900 m²**. *(2 pts)*
10. (54,80 − 52,30) / 100,00 = **2,5 %** (montée). *(2 pts)*

> [!attention] Erreurs à éviter
> - Multiplier par l'échelle une seule fois pour une surface (il faut l'échelle au carré).
> - Calculer le gisement avec arctan(ΔY / ΔX) : en topographie, il part du Nord, donc arctan(ΔX / ΔY).
> - Calculatrice réglée en degrés quand on travaille en gon.`},
 exercices:[
  {t:"Conversions d'angles", d:1, e:`1. Convertir en degrés, minutes, secondes : 128,75 gon.
2. Convertir en grades : 30° 15' 20".
3. Combien vaut un angle droit en grades ? un demi-tour ?`, c:`1. 128,75 × 0,9 = 115,875° = **115° 52' 30"** (0,875 × 60 = 52,5').
2. 30° 15' 20" = 30 + 15/60 + 20/3 600 = 30,2556° → 30,2556 / 0,9 = **33,6173 gon**.
3. Angle droit : **100 gon** ; demi-tour : **200 gon**.`},
  {t:"Échelles", d:1, e:`1. Sur un plan au 1/200, un mur mesure 6,35 cm. Quelle est sa longueur réelle ?
2. Une route de 85 m doit être dessinée au 1/1 000. Quelle longueur sur le plan ?
3. Un lot de 600 m² est dessiné au 1/500. Quelle surface occupe-t-il sur le plan ?`, c:`1. 6,35 × 200 = 1 270 cm = **12,70 m**.
2. 85 m = 8 500 cm ; 8 500 / 1 000 = **8,5 cm**.
3. 600 m² = 6 000 000 cm² ; 6 000 000 / 500² = 6 000 000 / 250 000 = **24 cm²** (par exemple 4 × 6 cm).`},
  {t:"Distance entre deux points", d:1, e:`Les bornes A et B d'une parcelle ont pour coordonnées A (412,350 ; 728,600) et B (448,710 ; 751,180). Calculer la distance AB.`, c:`ΔX = 448,710 − 412,350 = 36,360 m ; ΔY = 751,180 − 728,600 = 22,580 m.
**DAB = √(36,360² + 22,580²) = √(1 322,05 + 509,86) = √1 831,91 = 42,801 m.**`},
  {t:"Pentes", d:2, e:`1. Deux points distants de 45 m ont des altitudes de 102,35 m et 103,70 m. Calculer la pente en %.
2. Une canalisation d'eaux usées de 32 m doit avoir une pente de 1,5 %. Quelle est la dénivelée entre ses deux extrémités ?
3. Une rampe d'accès doit monter de 1,20 m avec une pente de 12 % au plus. Quelle longueur horizontale minimale faut-il ?`, c:`1. p = (103,70 − 102,35) / 45 = 1,35 / 45 = **0,030 = 3,0 %**.
2. Δh = 0,015 × 32 = **0,48 m**.
3. Dh = 1,20 / 0,12 = **10,0 m**.`},
  {t:"Surfaces en ares et hectares", d:1, e:`Un terrain rectangulaire mesure 125 m × 84 m. Exprimer sa surface en m², ares et hectares. Combien de lots de 500 m² pourrait-on y découper (sans compter les voies) ?`, c:`S = 125 × 84 = **10 500 m² = 105 a = 1,05 ha**.
Nombre de lots : 10 500 / 500 = **21 lots**. En pratique, les voies et espaces publics occupent 25 à 35 % d'un lotissement : on en obtiendrait plutôt 14 à 16.`}
 ],
 quiz:[
  {q:"Un tour complet vaut :", o:["360 gon","400 gon","200 gon","100 gon"], r:1, e:"400 gon = 360°."},
  {q:"50 gon valent :", o:["50°","45°","55,6°","90°"], r:1, e:"50 × 0,9 = 45°."},
  {q:"Au 1/500, 4 cm sur le plan représentent :", o:["2 m","20 m","200 m","0,2 m"], r:1, e:"4 × 500 = 2 000 cm = 20 m."},
  {q:"Dans un repère topographique, l'axe Y est dirigé vers :", o:["L'Est","Le Nord","Le haut","L'Ouest"], r:1, e:"X vers l'Est, Y vers le Nord."},
  {q:"Une pente de 2 % sur 50 m correspond à une dénivelée de :", o:["0,1 m","1 m","2 m","10 m"], r:1, e:"0,02 × 50 = 1 m."}
 ]},

{id:"topo-10", niv:1, titre:"Les instruments du topographe et la mise en station", duree:50, contenu:`## Les instruments de base
| Instrument | Usage | Précision courante |
|---|---|---|
| Ruban d'acier (20, 30, 50 m) | mesure directe des distances | 2 à 10 mm sur 50 m |
| Jalons, fiches | matérialiser les alignements et les portées | — |
| Fil à plomb | reporter un point à la verticale | mm |
| Équerre optique, équerre à prisme | tracer des angles droits | quelques cm à 50 m |
| Niveau de chantier (automatique) + mire | mesurer des dénivelées | 1 à 3 mm/km |
| Niveau laser rotatif | niveaux de plateformes, dallages, faux plafonds | ± 1 à 3 mm à 30 m |
| Théodolite | mesurer les angles horizontaux et verticaux | 1 à 10 mgon |
| Station totale | angles + distances électroniques + calcul de coordonnées | 1 mgon ; 2 mm + 2 ppm |
| Récepteur GNSS (GPS) | coordonnées par satellites | 1 à 3 cm en RTK |
| Drone et scanner laser | levés de grandes surfaces, modèles 3D | quelques cm |

## Le niveau et la mire
Le **niveau** fournit une **ligne de visée horizontale**. On lit sur une **mire** graduée (en cm, lecture estimée au mm) tenue verticalement sur le point. Les niveaux automatiques ont un **compensateur** qui rend la visée horizontale dès que la nivelle sphérique est calée.
Dans la lunette, le **réticule** comporte un fil horizontal (lecture principale) et deux **fils stadimétriques** qui permettent de mesurer la distance :
$$ D = K × (Ls − Li)      avec K = 100 (constante stadimétrique)

> [!exemple] Distance par stadimétrie
> Lectures sur la mire : fil supérieur 1,632 m ; fil inférieur 1,388 m.
> D = 100 × (1,632 − 1,388) = **24,4 m**. Contrôle : la lecture du fil milieu doit être proche de la moyenne (1,510 m).

## Le théodolite et la station totale
Le **théodolite** mesure :
- les **angles horizontaux** sur un cercle gradué horizontal (lecture Hz) ;
- les **angles verticaux**, en général l'**angle zénithal** V (0 gon au zénith, 100 gon à l'horizontale).
La **station totale** est un théodolite électronique équipé d'un **distancemètre** (mesure de la distance par onde infrarouge ou laser sur un prisme ou sans réflecteur) et d'un calculateur : elle donne directement distances horizontales, dénivelées et coordonnées, qu'elle enregistre.

## La mise en station
C'est la première opération, à faire avec soin car toute erreur se retrouve dans les mesures :
1. **Installer le trépied** au-dessus du point, plateau à peu près horizontal, pieds bien enfoncés ;
2. **centrer** l'appareil sur le point (plomb optique ou laser) en jouant sur les vis calantes ;
3. **caler** grossièrement la nivelle sphérique en allongeant ou raccourcissant les pieds ;
4. **caler finement** la nivelle torique (ou électronique) avec les vis calantes, dans deux directions perpendiculaires ;
5. **vérifier le centrage**, le reprendre si besoin en faisant glisser l'appareil sur le plateau, puis recaler ;
6. mesurer la **hauteur d'instrument** (hi) si l'on fait de l'altimétrie à la station totale.
Pour un niveau, il n'y a **pas de centrage** : on se place n'importe où, de préférence à égale distance des deux mires.

## Les erreurs instrumentales et les bonnes pratiques
- **Erreur de collimation** du niveau (la visée n'est pas tout à fait horizontale) : elle s'élimine en plaçant le niveau à **égale distance** des points visés (portées égales).
- **Erreur d'index** du cercle vertical et **erreur de collimation horizontale** du théodolite : on les élimine par le **double retournement** (mesure en cercle gauche puis cercle droit) et on fait la moyenne.
- Mire **verticale** (nivelle de mire) et **talon** propre ; ruban **tendu** et **horizontal**.
- Appareils **vérifiés** régulièrement et protégés du soleil (dilatation, réfraction) et de la pluie.

> [!exemple] Effet d'une erreur de collimation
> Un niveau a une visée inclinée de 0,005 gon (soit 0,08 mm par mètre). Avec une portée arrière de 50 m et une portée avant de 10 m, l'erreur sur la dénivelée vaut 0,08 × (50 − 10) = **3,2 mm**. Avec des portées égales de 30 m, elle s'annule.

> [!retenir]
> - Niveau + mire = dénivelées ; théodolite = angles ; station totale = angles + distances + coordonnées ; GNSS = coordonnées par satellites.
> - Stadimétrie : D = 100 × (Ls − Li).
> - Mise en station : trépied, centrage, calage grossier puis fin, vérification.
> - Portées égales pour le niveau, double retournement pour le théodolite.`,
 sujet:{titre:"Mise en station, double retournement et contrôle d'un niveau", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Avant le levé d'un lotissement à Songon, le chef de brigade contrôle votre maîtrise du matériel : mise en station du théodolite, mesures en cercle gauche et cercle droit, réglage du niveau.

**Données — théodolite (station S, hauteur d'instrument hi = 1,55 m)**
- Visée sur le prisme P (hp = 1,80 m) : Hz CG = **125,4320 gon** ; Hz CD = **325,4380 gon** ;
- Angle zénithal : V CG = **96,4560 gon** ; V CD = **303,5480 gon** ;
- Distance inclinée : **Di = 85,420 m**.

**Données — niveau**
- A et B distants de **60 m**. Niveau au milieu : lectures **LA = 1,532** et **LB = 1,218** ;
- Niveau à **5 m de A** (55 m de B) : lectures **LA = 1,486** et **LB = 1,181**.

### Partie A — Mise en station (5 points)
1. Décrire dans l'ordre les étapes de la mise en station d'un théodolite sur un point au sol. (3 pts)
2. À quoi servent la nivelle sphérique, la nivelle torique et le plomb optique (ou laser) ? (2 pts)

### Partie B — Double retournement (8 points)
3. Calculer la lecture horizontale moyenne et l'erreur de collimation horizontale. (3 pts)
4. Vérifier la somme V CG + V CD, calculer l'erreur d'index et l'angle zénithal corrigé. (3 pts)
5. Quelles erreurs le double retournement élimine-t-il ? (2 pts)

### Partie C — Distances et dénivelée (3 points)
6. Calculer la distance horizontale et la dénivelée S → P (sol à sol). (3 pts)

### Partie D — Contrôle du niveau (4 points)
7. Calculer la dénivelée vraie entre A et B. (1 pt)
8. Calculer la lecture correcte sur B depuis la deuxième station, l'erreur et la pente de la ligne de visée (mm/m). Conclure. (3 pts)`,
  corrige:`### Partie A — Mise en station (5 pts)
1. Trépied ouvert, plateau à peu près horizontal au-dessus du point ; fixer l'appareil ; centrer grossièrement au plomb en déplaçant le trépied ; caler la **nivelle sphérique** avec les jambes du trépied ; caler la **nivelle torique** avec les vis calantes (deux positions à 100 gon) ; **centrage fin** en faisant glisser l'appareil sur le plateau ; recontrôler la nivelle ; mesurer **hi**. *(3 pts)*
2. Sphérique : calage approché ; torique : calage précis de l'axe principal vertical ; plomb : centrage de l'axe sur le point au sol. *(2 pts)*

### Partie B — Double retournement (8 pts)
3. Moyenne : (125,4320 + 325,4380 − 200) / 2 = **125,4350 gon** ; collimation : (125,4320 − 125,4380) / 2 = **− 3 mgon** (la moyenne CG/CD l'élimine). *(3 pts)*
4. V CG + V CD = 400,0040 gon au lieu de 400 → erreur d'index **i = + 2 mgon** ; V = (96,4560 − 303,5480 + 400) / 2 = **96,4540 gon**. *(3 pts)*
5. Collimation horizontale, erreur d'index vertical, défaut de perpendicularité des tourillons et excentricité des cercles. *(2 pts)*

### Partie C — Distances (3 pts)
6. Dh = 85,420 × sin(96,4540) = **85,288 m** ; Di cos V = 85,420 × cos(96,4540) = 4,755 m → ΔZ = 4,755 + 1,55 − 1,80 = **+ 4,505 m**. *(3 pts)*

### Partie D — Niveau (4 pts)
7. Au milieu, les portées égales éliminent l'erreur : Δh = 1,532 − 1,218 = **+ 0,314 m** (B plus haut). *(1 pt)*
8. Près de A, la lecture sur A (5 m) est quasi exacte : LB correcte = 1,486 − 0,314 = **1,172** ; lue 1,181 → **9 mm** de trop pour 50 m de différence de portée → visée montante de **0,18 mm/m** (≈ 11 mgon). C'est hors tolérance (≈ 0,05 mm/m) : faire régler le niveau ; en attendant, toujours niveler à **portées égales**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier les hauteurs d'instrument et de prisme dans la dénivelée.
> - Faire la moyenne CG/CD sans retrancher 200 gon à la lecture CD.
> - Croire qu'un niveau mal réglé donne une dénivelée fausse quand les portées sont égales.`},
 exercices:[
  {t:"Distance stadimétrique", d:1, e:`Les lectures sur la mire sont : fil supérieur 2,148 ; fil milieu 1,962 ; fil inférieur 1,776.
1. Vérifier la cohérence des lectures.
2. Calculer la distance.`, c:`1. Moyenne des fils extrêmes : (2,148 + 1,776) / 2 = 1,962 = lecture du fil milieu ✔.
2. **D = 100 × (2,148 − 1,776) = 37,2 m.**`},
  {t:"Choisir l'instrument", d:1, e:`Quel instrument utiliser pour :
1. contrôler la planéité d'un dallage de 400 m² ;
2. implanter les poteaux d'un immeuble à partir de coordonnées ;
3. rattacher un chantier isolé aux coordonnées officielles ;
4. mesurer la dénivelée entre deux regards d'égout distants de 60 m ;
5. tracer un angle droit pour une petite clôture.`, c:`1. **Niveau laser rotatif** (ou niveau de chantier) avec une cellule ou une mire.
2. **Station totale** (implantation par coordonnées).
3. **Récepteur GNSS** (rattachement en coordonnées UTM).
4. **Niveau de chantier** et mire (nivellement direct).
5. **Équerre optique** ou méthode du triangle 3-4-5 au ruban.`},
  {t:"Erreur de collimation", d:2, e:`Un niveau présente une erreur de collimation de 2 mm pour 50 m. On mesure une dénivelée avec une portée arrière de 45 m et une portée avant de 15 m.
1. Quelle est l'erreur commise sur la dénivelée ?
2. Comment l'éviter ?`, c:`1. Erreur par mètre : 2 / 50 = 0,04 mm/m. Erreur sur la lecture arrière : 0,04 × 45 = 1,8 mm ; sur la lecture avant : 0,04 × 15 = 0,6 mm. Erreur sur la dénivelée : 1,8 − 0,6 = **1,2 mm**.
2. Placer le niveau à **égale distance** des deux mires : les erreurs sur les deux lectures sont alors égales et s'annulent dans la différence.`},
  {t:"Ordre de la mise en station", d:1, e:`Remettre dans l'ordre les opérations de mise en station d'une station totale : caler la nivelle torique ; installer le trépied ; vérifier le centrage ; caler la nivelle sphérique avec les pieds ; centrer avec le plomb laser ; mesurer la hauteur d'instrument.`, c:`1. **Installer le trépied** au-dessus du point ;
2. **centrer** avec le plomb laser (vis calantes) ;
3. **caler la nivelle sphérique** avec les pieds ;
4. **caler la nivelle torique** avec les vis calantes ;
5. **vérifier le centrage** (et recommencer 4 si on a déplacé l'appareil) ;
6. **mesurer la hauteur d'instrument**.`}
 ],
 quiz:[
  {q:"La constante stadimétrique d'un niveau courant vaut :", o:["10","50","100","1 000"], r:2, e:"D = 100 × (Ls − Li)."},
  {q:"Pour éliminer l'erreur de collimation d'un niveau, on :", o:["Mesure deux fois","Place le niveau à égale distance des mires","Utilise un ruban","Mesure de nuit"], r:1, e:"Les erreurs égales s'annulent dans la différence."},
  {q:"L'angle zénithal d'une visée horizontale vaut :", o:["0 gon","100 gon","200 gon","400 gon"], r:1, e:"0 gon au zénith, 100 gon à l'horizontale."},
  {q:"La station totale mesure :", o:["Seulement les angles","Les angles et les distances","Seulement les altitudes","La température"], r:1, e:"Théodolite + distancemètre + calculateur."},
  {q:"Le double retournement sert à :", o:["Gagner du temps","Éliminer certaines erreurs instrumentales du théodolite","Mesurer les distances","Caler le niveau"], r:1, e:"Moyenne des lectures en cercle gauche et cercle droit."}
 ]},

{id:"topo-2", niv:1, titre:"Mesure des distances et corrections", duree:55, contenu:`## Distance inclinée et distance horizontale
Sur un plan, toutes les distances sont des **distances horizontales** Dh. Sur un terrain en pente, on mesure souvent une **distance inclinée** Di (suivant la pente). Il faut la **réduire à l'horizontale** :
$$ Dh = √(Di² − Δh²)      ou      Dh = Di × cos i      (i : angle de pente)
Avec une station totale qui mesure l'angle **zénithal** V : Dh = Di × sin V et Δh = Di × cos V.

> [!exemple] Réduction à l'horizontale
> Distance inclinée mesurée au ruban : Di = 48,720 m ; dénivelée entre les deux points : Δh = 3,150 m.
> Dh = √(48,720² − 3,150²) = √(2 373,64 − 9,92) = **48,618 m**. L'écart (10 cm) n'est pas négligeable.

## Le mesurage au ruban
- **Alignement** : on jalonne la ligne pour que le ruban suive une droite.
- **Ruban horizontal et tendu** (tension d'étalonnage, souvent 50 N), sans flèche excessive.
- **Terrain en pente** : on mesure par **ressauts horizontaux** (cultellation) en reportant les points au fil à plomb, ou on mesure la pente et on réduit.
- **Contrôle** : on mesure toujours **aller et retour** ; l'écart doit rester dans la tolérance (par exemple 1 à 2 cm pour 100 m en terrain facile).

## Les corrections du mesurage au ruban
| Correction | Formule | Signe |
|---|---|---|
| Étalonnage | (longueur réelle du ruban − longueur nominale) × nombre de portées | + si le ruban est trop long |
| Température | α × (t − t0) × L, avec α = 11,5 × 10⁻⁶ /°C (acier) | + si t > t0 (ruban dilaté) |
| Pente | Dh = √(Di² − Δh²) | toujours − |
| Tension, chaînette | selon la tension et le poids du ruban | faible si le ruban est posé au sol |

> [!exemple] Correction de température
> Ruban de 50 m étalonné à 20 °C, utilisé à 35 °C (chantier ensoleillé) : correction = 11,5 × 10⁻⁶ × 15 × 50 = **+ 8,6 mm** par portée de 50 m. Le ruban dilaté est plus long que sa graduation : la distance lue est trop courte, on ajoute la correction.

> [!exemple] Correction d'étalonnage
> Un ruban de 30 m mesure en réalité 30,006 m (comparé à une base d'étalonnage). On a mesuré 87,420 m (soit 2,914 portées) : correction = 0,006 × 87,420 / 30 = **+ 17 mm** → 87,437 m.

## Les distancemètres électroniques
La station totale mesure la distance en envoyant une onde (infrarouge ou laser) qui se réfléchit sur un **prisme** (ou directement sur la surface visée en mode « sans réflecteur »). Précision courante : **± (2 mm + 2 ppm)**, soit ± 2,2 mm à 100 m. L'appareil applique automatiquement la réduction à l'horizontale et peut corriger la température et la pression atmosphérique.
Les **lasermètres** de poche (télémètres) mesurent jusqu'à 50 à 100 m à ± 2 mm : très pratiques pour les métrés intérieurs, mais pas pour les mesures topographiques précises en extérieur.

## La mesure indirecte : la stadimétrie
Avec un niveau ou un théodolite : D = 100 × (Ls − Li) pour une visée horizontale ; pour une visée inclinée d'angle zénithal V : Dh = 100 × (Ls − Li) × sin² V. Précision : quelques décimètres à 100 m, suffisante pour un levé rapide.

> [!retenir]
> - Toujours ramener à l'horizontale : Dh = √(Di² − Δh²) = Di cos i = Di sin V.
> - Corrections au ruban : étalonnage, température (11,5 × 10⁻⁶ /°C), pente.
> - Mesurer aller et retour.
> - Station totale : ± (2 mm + 2 ppm).`,
 sujet:{titre:"Mesurer une distance au ruban et à la station totale : corrections et contrôles", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour vérifier une limite de parcelle à Bonoua, vous mesurez la distance AB au ruban, sur un terrain en pente, par une journée chaude. Vous la recoupez ensuite à la station totale.

**Données**
- Ruban acier nominal **50 m**, étalonné à **20 °C** ; sa longueur réelle est **50,008 m** ;
- Distance inclinée mesurée (aller) : **137,465 m** ; retour : **137,481 m** ; température **32 °C** ;
- Dénivelée entre A et B : **4,250 m** ;
- Coefficient de dilatation de l'acier : **11,5 × 10⁻⁶ /°C** ;
- Tolérance aller-retour : **2 cm pour 100 m** ;
- Station totale sur un autre côté : **Di = 64,318 m**, **V = 92,6540 gon**.

### Partie A — Contrôle aller-retour (4 points)
1. Calculer l'écart aller-retour et la tolérance pour cette longueur. La mesure est-elle acceptable ? (2 pts)
2. Pourquoi mesure-t-on toujours en aller et retour ? (2 pts)

### Partie B — Corrections (10 points)
3. Calculer la correction d'étalonnage (sur la mesure aller). Quel est son signe ? (3 pts)
4. Calculer la correction de température. Expliquer son signe. (3 pts)
5. Calculer la distance inclinée corrigée puis la distance horizontale. (3 pts)
6. Quelle erreur aurait-on commise en reportant la distance inclinée sur le plan ? (1 pt)

### Partie C — Station totale (4 points)
7. Calculer la distance horizontale et la dénivelée (Di cos V) pour la visée à la station totale. (4 pts)

### Partie D — Méthodes (2 points)
8. Qu'est-ce que la cultellation (mesure par ressauts) ? Quand l'utilise-t-on ? (2 pts)`,
  corrige:`### Partie A — Aller-retour (4 pts)
1. Écart : 137,481 − 137,465 = **16 mm** ; tolérance : 2 × 1,37 = **27 mm** → acceptable. *(2 pts)*
2. Pour détecter les **fautes** (portée oubliée, mauvaise lecture) et améliorer la précision par la moyenne. *(2 pts)*

### Partie B — Corrections (10 pts)
3. 0,008 × 137,465 / 50 = **+ 0,022 m** : le ruban est trop long, chaque « 50 m » lu vaut 50,008 m → on **ajoute**. *(3 pts)*
4. 11,5 × 10⁻⁶ × (32 − 20) × 137,465 = **+ 0,019 m** : le ruban dilaté s'allonge, la distance lue est trop courte → on ajoute. *(3 pts)*
5. Di = 137,465 + 0,022 + 0,019 = **137,506 m** ; $$ Dh = √(137,506² − 4,250²) = 137,440 m
   *(3 pts)*
6. 137,506 − 137,440 = **6,6 cm** de trop : inacceptable pour une limite de propriété. *(1 pt)*

### Partie C — Station totale (4 pts)
7. Dh = 64,318 × sin(92,6540) = **63,890 m** ; Di cos V = 64,318 × cos(92,6540) = **+ 7,405 m** (visée montante, V < 100 gon). *(4 pts)*

### Partie D — Méthodes (2 pts)
8. On mesure par portées **horizontales** courtes (ruban tenu horizontal, extrémité reportée au sol au fil à plomb) : sur les terrains en forte pente, quand on ne connaît pas la dénivelée. *(2 pts)*

> [!attention] Erreurs à éviter
> - Se tromper de signe : ruban trop long ou dilaté → distance lue trop courte → correction positive.
> - Réduire à l'horizontale avant d'appliquer les corrections d'étalonnage et de température.
> - Calculatrice en degrés pour V exprimé en gon.`},
 exercices:[
  {t:"Réduction à l'horizontale", d:1, e:`Entre deux bornes, on mesure une distance inclinée de 62,415 m ; la dénivelée vaut 5,320 m. Calculer la distance horizontale et l'angle de pente en grades.`, c:`**Dh = √(62,415² − 5,320²) = √(3 895,63 − 28,30) = √3 867,33 = 62,188 m.**
sin i = 5,320 / 62,415 = 0,0852 → i = 4,889° = **5,43 gon**.`},
  {t:"Mesure à la station totale", d:1, e:`Une station totale mesure une distance inclinée de 125,432 m avec un angle zénithal V = 96,8540 gon. Calculer Dh et la dénivelée entre l'axe de l'appareil et le prisme.`, c:`**Dh = 125,432 × sin(96,8540 gon) = 125,279 m.**
**Δh = 125,432 × cos(96,8540 gon) = + 6,196 m** (V < 100 gon : on vise vers le haut).`},
  {t:"Corrections multiples", d:2, e:`On mesure au ruban d'acier de 50 m une distance de 143,280 m (distance inclinée) à 32 °C. Le ruban, étalonné à 20 °C, mesure en réalité 49,996 m. La dénivelée vaut 2,40 m. Calculer la distance horizontale corrigée.`, c:`Étalonnage : le ruban est trop court de 4 mm par 50 m → correction = −0,004 × 143,280 / 50 = **−0,0115 m**.
Température : +11,5 × 10⁻⁶ × 12 × 143,280 = **+0,0198 m**.
Distance inclinée corrigée : 143,280 − 0,0115 + 0,0198 = **143,288 m**.
Pente : **Dh = √(143,288² − 2,40²) = 143,268 m**.`},
  {t:"Mesure aller et retour", d:1, e:`Un côté de parcelle est mesuré au ruban : aller 74,318 m, retour 74,342 m. La tolérance est de 1 cm pour 50 m. La mesure est-elle acceptable ? Quelle valeur retenir ?`, c:`Écart : 74,342 − 74,318 = **24 mm**. Tolérance pour 74 m : 1 × 74 / 50 = **14,8 mm**.
24 > 14,8 : **mesure rejetée**, il faut recommencer (une faute de lecture ou un mauvais alignement est probable). Si l'écart avait été acceptable, on aurait retenu la moyenne.`}
 ],
 quiz:[
  {q:"La distance représentée sur un plan est :", o:["La distance inclinée","La distance horizontale","La distance suivant le terrain","La distance au nord"], r:1, e:"Les plans sont des projections horizontales."},
  {q:"Dh à partir de Di et de l'angle zénithal V vaut :", o:["Di cos V","Di sin V","Di tan V","Di / V"], r:1, e:"V = 100 gon à l'horizontale."},
  {q:"Un ruban d'acier utilisé par forte chaleur :", o:["Raccourcit, la mesure est trop longue","S'allonge, la mesure lue est trop courte","Ne change pas","Casse"], r:1, e:"On ajoute la correction de température."},
  {q:"La précision d'un distancemètre courant est :", o:["± 2 cm + 2 ppm","± 2 mm + 2 ppm","± 20 cm","± 1 m"], r:1, e:"Environ 2 mm à 100 m."},
  {q:"On mesure une distance aller et retour pour :", o:["Faire deux fois plus de travail","Contrôler l'absence de faute","Corriger la température","Changer de ruban"], r:1, e:"Tout résultat topographique doit être contrôlé."}
 ]},

{id:"topo-6", niv:1, titre:"Lire un plan topographique, un plan de lotissement et un dossier foncier", duree:50, contenu:`## Les différents plans
| Document | Échelle courante | Contenu |
|---|---|---|
| Plan de situation | 1/5 000 à 1/50 000 | localisation du terrain dans la ville ou la région |
| Plan topographique (levé) | 1/200 à 1/1 000 | limites, bâtiments existants, arbres, réseaux, altitudes, courbes de niveau |
| Plan de lotissement | 1/500 à 1/2 000 | îlots, lots numérotés, voies, espaces publics, bornes |
| Plan de masse (projet) | 1/200 à 1/500 | implantation du bâtiment projeté, accès, niveaux, raccordements |
| Plan de bornage | 1/200 à 1/500 | limites officielles d'une parcelle et coordonnées des bornes |

## Les informations à repérer sur un plan
1. Le **cartouche** : titre, maître d'ouvrage, échelle, date, auteur (géomètre), référence du système de coordonnées ;
2. le **nord** (flèche) et le **quadrillage** des coordonnées ;
3. la **légende** des symboles : bornes, poteaux électriques, regards, arbres, clôtures, murs, talus ;
4. les **cotes** : longueurs des limites, angles, coordonnées des bornes ;
5. l'**altimétrie** : points cotés (altitudes) et courbes de niveau ;
6. les **voies** et leurs largeurs, les **servitudes** (passage de réseaux, recul).

## Le foncier en Côte d'Ivoire
- En zone urbaine, un terrain loti porte un numéro d'**îlot** et de **lot** issu d'un **plan de lotissement approuvé**. La propriété est sécurisée par l'**Arrêté de Concession Définitive (ACD)** puis l'immatriculation au livre foncier (**titre foncier**).
- En zone rurale, le **certificat foncier** constate les droits coutumiers, puis peut conduire au titre foncier.
- Le **bornage contradictoire**, réalisé par un **géomètre-expert** agréé en présence des voisins, fixe les limites et pose les **bornes** (repères en béton) dont les coordonnées figurent au plan.
Avant toute construction, on vérifie que le bâtiment projeté est **dans les limites** du lot et respecte les **reculs** imposés par l'urbanisme.

## Les règles d'urbanisme courantes
- **Emprise au sol** (CES : coefficient d'emprise au sol) = surface bâtie au sol / surface du terrain ;
- **COS** (coefficient d'occupation du sol) = surface de plancher totale / surface du terrain ;
- **reculs** par rapport à la voie et aux limites séparatives, **hauteur maximale**.

> [!exemple] Lecture d'un lot
> Sur un plan de lotissement au 1/1 000, le lot 12 de l'îlot 45 mesure 2,0 cm de façade et 2,5 cm de profondeur.
> Façade : 2,0 × 1 000 = 20 m ; profondeur : 25 m → surface **500 m²**.
> Une maison de 12 × 10 m (120 m² au sol) avec un étage (240 m² de plancher) donne CES = 120 / 500 = **0,24** et COS = 240 / 500 = **0,48**.

## Les points cotés et le niveau ±0,00
Sur un plan topographique, chaque point levé porte son **altitude** (par exemple 54,37). Pour un projet, l'architecte fixe le **niveau ±0,00** (en général le niveau fini du rez-de-chaussée) par rapport à une altitude de référence : par exemple ±0,00 = 54,90 NGCI. Toutes les cotes de niveau du projet (+3,06 ; −0,40) sont données par rapport à ce zéro.

> [!retenir]
> - Toujours repérer : échelle, nord, légende, système de coordonnées, altitudes.
> - Lot = îlot + numéro ; sécurisation par ACD et titre foncier ; bornage contradictoire par un géomètre agréé.
> - CES = emprise / terrain ; COS = plancher / terrain.
> - Niveau ±0,00 = référence du projet, rattaché à une altitude.`,
 sujet:{titre:"Exploiter un dossier foncier et un plan de lotissement avant de construire", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un client a acheté le **lot 125** d'un lotissement approuvé à Bingerville. Il vous apporte son dossier et veut savoir ce qu'il peut construire.

**Données**
- Coordonnées des bornes (système local du lotissement, m) : **B1 (120,00 ; 340,00)** ; **B2 (140,00 ; 340,00)** ; **B3 (141,20 ; 365,50)** ; **B4 (119,40 ; 364,80)** ; le côté B1B2 donne sur la voie ;
- Surface inscrite au dossier : **525 m²** ;
- Règlement du lotissement : recul de **5 m** sur voie, **3 m** en fond de lot, **2 m** sur les limites latérales ; **CES 50 %** ; **COS 1,0**.

### Partie A — Documents (5 points)
1. Citer quatre documents d'un dossier foncier sérieux en Côte d'Ivoire et le rôle de chacun. (3 pts)
2. Quels éléments lit-on sur un plan de lotissement ? (2 pts)

### Partie B — Vérifications sur les bornes (8 points)
3. Calculer les longueurs des quatre côtés. (3 pts)
4. Calculer la surface du lot par la formule des coordonnées et la comparer à la surface du dossier. (4 pts)
5. Que faire si une borne a disparu sur le terrain ? (1 pt)

### Partie C — Constructibilité (7 points)
6. Expliquer CES et COS. (2 pts)
7. En assimilant le lot à un rectangle de 20 × 25 m, calculer la zone constructible après reculs. (2 pts)
8. Calculer l'emprise maximale autorisée par le CES et la surface de plancher maximale autorisée par le COS. Proposer un parti (niveaux). (3 pts)`,
  corrige:`### Partie A — Documents (5 pts)
1. *(3 pts)*
   - **Arrêté de concession définitive (ACD)** ou titre foncier : preuve de propriété ;
   - **Plan du lot / extrait topographique** avec les coordonnées des bornes ;
   - **Arrêté d'approbation du lotissement** : le lotissement est légal ;
   - **Certificat de mutation / attestation d'attribution**, **reçus** de paiement ; et pour construire, le **permis de construire**.
2. Numéros et dimensions des lots, voies (largeurs), réserves (équipements, espaces verts), bornes, orientation, échelle, règlement d'urbanisme. *(2 pts)*

### Partie B — Bornes (8 pts)
3. B1B2 = **20,00 m** ; B2B3 = √(1,20² + 25,50²) = **25,53 m** ; B3B4 = √(21,80² + 0,70²) = **21,81 m** ; B4B1 = √(0,60² + 24,80²) = **24,81 m**. *(3 pts)*
4. $$ 2S = |Σ (Xi × Yi+1 − Xi+1 × Yi)| = 1 051,06 → S = 525,53 m²
   Écart avec le dossier : **0,53 m²**, soit 0,1 % : conforme (les tolérances sont de l'ordre du m² pour un lot urbain). *(4 pts)*
5. Ne jamais la replacer « à l'œil » : faire rétablir la borne par un **géomètre-expert agréé** à partir des coordonnées, de préférence en présence des voisins. *(1 pt)*

### Partie C — Constructibilité (7 pts)
6. **CES** = emprise au sol du bâtiment / surface du terrain ; **COS** = surface de plancher totale / surface du terrain. *(2 pts)*
7. (20 − 2 × 2) × (25 − 5 − 3) = 16 × 17 = **272 m²**. *(2 pts)*
8. CES : 0,50 × 525 = **262 m²** d'emprise (plus restrictif que les 272 m² de reculs) ; COS : 1,0 × 525 = **525 m²** de plancher → par exemple un **R+1** de 2 × 260 m² environ. *(3 pts)*

> [!attention] Erreurs à éviter
> - Construire sur la foi d'une simple attestation villageoise sans vérifier le lotissement.
> - Calculer la surface à partir de longueurs seules sur un quadrilatère quelconque.
> - Oublier les reculs ou confondre CES et COS.`},
 exercices:[
  {t:"Dimensions d'un lot", d:1, e:`Sur un plan de lotissement au 1/500, un lot mesure 4,0 cm × 5,6 cm.
1. Calculer ses dimensions réelles et sa surface.
2. Le règlement impose un recul de 5 m sur la voie (côté 4,0 cm) et de 3 m sur les autres limites. Quelle est la surface constructible maximale au sol ?`, c:`1. 4,0 × 500 = **20 m** ; 5,6 × 500 = **28 m** → **S = 560 m²**.
2. Dimensions constructibles : largeur 20 − 3 − 3 = 14 m ; profondeur 28 − 5 − 3 = 20 m → **280 m²** au maximum (sous réserve du CES).`},
  {t:"CES et COS", d:1, e:`Un terrain de 600 m² reçoit un immeuble R+2 dont chaque niveau fait 180 m². Calculer le CES et le COS. Le règlement autorise CES ≤ 0,40 et COS ≤ 1,2 : le projet est-il conforme ?`, c:`**CES = 180 / 600 = 0,30 ≤ 0,40** ✔.
Surface de plancher : 3 × 180 = 540 m² → **COS = 540 / 600 = 0,90 ≤ 1,2** ✔. Le projet est conforme ; on pourrait ajouter un niveau (COS 1,2 au maximum, soit 720 m² de plancher).`},
  {t:"Altitudes et niveau ±0,00", d:2, e:`Le niveau ±0,00 d'une maison est fixé à l'altitude 54,90 m. Donner les altitudes de :
1. la dalle de l'étage à +3,06 ;
2. le fond des fouilles à −1,20 ;
3. le terrain naturel au droit de la maison (altitude 54,35) : quelle hauteur de remblai faut-il sous le dallage (épaisseur dallage + forme : 25 cm) ?`, c:`1. 54,90 + 3,06 = **57,96 m**.
2. 54,90 − 1,20 = **53,70 m**.
3. Dessous de la forme du dallage : 54,90 − 0,25 = 54,65 m ; terrain naturel : 54,35 m → **remblai de 0,30 m** (compacté par couches).`},
  {t:"Vérifier une implantation sur plan", d:2, e:`Un lot a pour bornes A (0 ; 0), B (20 ; 0), C (20 ; 25), D (0 ; 25) (coordonnées locales en m, AB sur la voie). Le projet place l'angle du bâtiment le plus proche de la voie à (4,0 ; 3,5) et l'angle opposé à (16,0 ; 15,5). Le règlement impose 5 m de recul sur la voie et 3 m sur les limites latérales. Le projet est-il conforme ?`, c:`Recul sur la voie (AB, y = 0) : y min du bâtiment = 3,5 m < **5 m** ✘.
Reculs latéraux : x min = 4,0 m ≥ 3 ✔ ; x max = 16,0 → 20 − 16 = 4,0 m ≥ 3 ✔.
Fond : 25 − 15,5 = 9,5 m ✔.
Le projet **n'est pas conforme** sur la voie : il faut le décaler de 1,5 m vers le fond (y de 5,0 à 17,0), ce qui reste possible.`}
 ],
 quiz:[
  {q:"Le document qui sécurise la propriété d'un lot urbain en Côte d'Ivoire avant le titre foncier est :", o:["Le permis de construire","L'Arrêté de Concession Définitive (ACD)","Le plan de masse","Le devis"], r:1, e:"L'ACD précède l'immatriculation au livre foncier."},
  {q:"Le bornage contradictoire est réalisé par :", o:["Le maçon","Un géomètre-expert agréé, en présence des voisins","Le notaire seul","L'architecte"], r:1, e:"Il fixe officiellement les limites."},
  {q:"Le COS est le rapport :", o:["Surface bâtie au sol / terrain","Surface de plancher totale / terrain","Hauteur / largeur","Terrain / plancher"], r:1, e:"Coefficient d'occupation du sol."},
  {q:"Le niveau ±0,00 d'un projet correspond en général :", o:["Au fond des fouilles","Au niveau fini du rez-de-chaussée","Au niveau de la mer","Au toit"], r:1, e:"Toutes les cotes du projet s'y réfèrent."},
  {q:"Sur un plan, la flèche du nord sert à :", o:["Décorer","Orienter le plan","Indiquer la pente","Donner l'échelle"], r:1, e:"Elle permet de placer le plan sur le terrain."}
 ]},

{id:"topo-11", niv:1, titre:"Courbes de niveau, relief et profil en long simple", duree:50, contenu:`## Représenter le relief
Sur un plan, on représente le relief par :
- des **points cotés** (altitudes écrites à côté des points levés) ;
- des **courbes de niveau** : lignes qui joignent les points de **même altitude** (comme le rivage d'un lac dont le niveau monterait mètre par mètre).
L'**équidistance** e est la différence d'altitude entre deux courbes voisines : 0,25 à 0,5 m sur un plan de parcelle, 1 m au 1/1 000, 5 à 10 m sur les cartes. Une courbe sur cinq (**courbe maîtresse**) est dessinée plus épaisse et porte son altitude.

!fig:triangle|Interpolation d'altitude entre deux courbes de niveau

## Lire le relief
- Courbes **serrées** : pente **forte** ; courbes **espacées** : pente **faible** ; terrain plat : pas de courbe.
- **Crête** (ou croupe) : les courbes forment des « V » ou des « U » dont la pointe est tournée vers le **bas** (vers les altitudes décroissantes).
- **Talweg** (fond de vallée, ligne où l'eau se rassemble) : les courbes forment des « V » dont la pointe est tournée vers l'**amont** (les altitudes croissantes). Attention aux constructions dans les talwegs : ruissellement et inondations.
- **Sommet** (mamelon) et **cuvette** : courbes fermées (l'altitude augmente vers le centre pour un sommet).
- **Col** : point bas entre deux sommets, point haut entre deux talwegs.
- La **ligne de plus grande pente** est perpendiculaire aux courbes de niveau : c'est le chemin de l'eau.

## Calculer l'altitude d'un point (interpolation)
Un point P est situé entre les courbes d'altitudes Z1 et Z2 = Z1 + e. Si d1 est sa distance à la courbe Z1 et d2 sa distance à la courbe Z2, mesurées sur la ligne de plus grande pente :
$$ ZP = Z1 + e × d1 / (d1 + d2)

> [!exemple] Interpolation
> Le point P est entre les courbes 105 et 106 (e = 1 m), à 3,2 mm de la courbe 105 et à 4,8 mm de la courbe 106 sur le plan.
> ZP = 105 + 1 × 3,2 / (3,2 + 4,8) = 105 + 0,40 = **105,40 m**.

## Calculer une pente entre deux courbes
$$ p = e / distance horizontale réelle entre les courbes
> [!exemple] Pente d'un terrain
> Plan au 1/500, courbes de 1 m espacées de 8 mm : distance réelle 8 × 500 = 4 000 mm = 4 m → p = 1 / 4 = **25 %** : terrain très pentu (talus, terrassements importants).

## Le profil en long
Un **profil en long** est la coupe verticale du terrain suivant un axe (route, canalisation, mur). Pour le construire à partir d'un plan :
1. tracer l'axe sur le plan et repérer les points où il coupe les courbes de niveau et les points cotés ;
2. mesurer leurs **distances cumulées** depuis l'origine de l'axe ;
3. reporter en abscisses les distances (à l'échelle du plan) et en ordonnées les altitudes, avec une échelle des hauteurs en général **10 fois plus grande** (pour rendre le relief lisible) ;
4. joindre les points : c'est la **ligne du terrain naturel** (TN), sur laquelle on dessinera ensuite la **ligne du projet**.

> [!exemple] Profil d'un chemin d'accès
> Le long d'un axe AB, on relève : A (0 m ; 54,20), courbe 55 à 18 m, courbe 56 à 31 m, courbe 57 à 40 m, B (52 m ; 57,60).
> Pentes successives : 0,80/18 = 4,4 % ; 1/13 = 7,7 % ; 1/9 = 11,1 % ; 0,60/12 = 5,0 %. Pente moyenne : 3,40 / 52 = **6,5 %**. Si l'accès doit rester sous 10 %, le tronçon de 31 à 40 m devra être adouci (déblai en haut, remblai en bas, ou tracé en lacet).

> [!retenir]
> - Courbes de niveau : même altitude ; équidistance e ; serrées = pente forte.
> - Talweg : pointes des « V » vers l'amont ; crête : pointes vers l'aval.
> - ZP = Z1 + e × d1 / (d1 + d2) ; pente = e / distance réelle.
> - Profil en long : distances en abscisses, altitudes en ordonnées (échelle des hauteurs × 10).`,
 sujet:{titre:"Courbes de niveau et profil en long d'une voie d'accès", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le plan topographique au **1/1 000** d'un terrain à Dabou (équidistance **1 m**), vous préparez l'étude d'une voie d'accès.

**Données**
- Un point P se trouve entre les courbes 54 et 55 : sur le plan, il est à **6,5 mm** de la courbe 54, les deux courbes étant distantes de **15 mm** suivant la ligne de plus grande pente passant par P ;
- Entre la courbe 52 (point A) et la courbe 57 (point B), on mesure **8,4 cm** sur le plan ;
- Profil en long de l'axe de la voie :

| Profil | Distance cumulée (m) | TN (m) |
|---|---|---|
| P0 | 0 | 50,20 |
| P1 | 25 | 51,05 |
| P2 | 50 | 52,40 |
| P3 | 75 | 52,10 |
| P4 | 100 | 53,30 |

- Ligne de projet : départ à **50,50 m** en P0, pente constante **+ 2,5 %**.

### Partie A — Lecture des courbes (6 points)
1. Calculer l'altitude de P par interpolation. (2 pts)
2. Calculer la pente moyenne entre A et B. (2 pts)
3. Comment reconnaît-on sur un plan une zone raide, un talweg, une croupe ? (2 pts)

### Partie B — Profil du terrain (3 points)
4. Calculer la pente du terrain naturel entre chaque profil. (3 pts)

### Partie C — Ligne de projet (8 points)
5. Calculer les altitudes projet et les hauteurs de déblai (D) ou de remblai (R) à chaque profil. (4 pts)
6. Calculer la position des points de passage. (4 pts)

### Partie D — Dessin (3 points)
7. On dessine le profil avec une échelle des longueurs au 1/1 000 et des hauteurs au 1/100. Pourquoi ces deux échelles ? Quelle est la hauteur sur le papier d'un remblai de 0,30 m ? (3 pts)`,
  corrige:`### Partie A — Courbes (6 pts)
1. ZP = 54 + 1 × 6,5 / 15 = **54,43 m**. *(2 pts)*
2. Distance réelle : 8,4 cm × 1 000 = 84 m ; dénivelée 5 m → p = 5 / 84 = **5,95 %**. *(2 pts)*
3. Zone raide : courbes **serrées** ; talweg (vallon) : courbes en V pointant vers l'**amont** ; croupe (crête) : courbes en V pointant vers l'**aval**. *(2 pts)*

### Partie B — Terrain (3 pts)
4. P0-P1 : 0,85 / 25 = **+ 3,4 %** ; P1-P2 : **+ 5,4 %** ; P2-P3 : **− 1,2 %** ; P3-P4 : **+ 4,8 %**. *(3 pts)*

### Partie C — Projet (8 pts)
5. *(4 pts)*

| Profil | TN | Projet | h = TN − projet |
|---|---|---|---|
| P0 | 50,20 | 50,500 | R 0,300 |
| P1 | 51,05 | 51,125 | R 0,075 |
| P2 | 52,40 | 51,750 | D 0,650 |
| P3 | 52,10 | 52,375 | R 0,275 |
| P4 | 53,30 | 53,000 | D 0,300 |

6. x = L × |h1| / (|h1| + |h2|) : *(4 pts)*
   - entre P1 et P2 : 25 × 0,075 / 0,725 = 2,59 → **27,59 m** ;
   - entre P2 et P3 : 25 × 0,650 / 0,925 = 17,57 → **67,57 m** ;
   - entre P3 et P4 : 25 × 0,275 / 0,575 = 11,96 → **86,96 m**.

### Partie D — Dessin (3 pts)
7. Les dénivelées sont petites devant les longueurs : on les **exagère** (×10) pour les rendre lisibles. Un remblai de 0,30 m au 1/100 mesure **3 mm**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Inverser le signe : h = TN − projet, positif en déblai.
> - Mesurer la distance d'interpolation hors de la ligne de plus grande pente.
> - Compter la position du point de passage depuis l'origine sans ajouter la distance cumulée du profil précédent.`},
 exercices:[
  {t:"Interpoler une altitude", d:1, e:`Sur un plan au 1/1 000 (équidistance 1 m), un point M se trouve entre les courbes 212 et 213, à 6 mm de la courbe 212 et à 9 mm de la courbe 213. Calculer son altitude.`, c:`ZM = 212 + 1 × 6 / (6 + 9) = 212 + 0,40 = **212,40 m**.`},
  {t:"Pente entre deux courbes", d:1, e:`Sur un plan au 1/500, deux courbes de niveau d'équidistance 0,5 m sont distantes de 12 mm. Calculer la pente du terrain. Une route peut-elle monter directement selon la ligne de plus grande pente si sa pente maximale est de 8 % ?`, c:`Distance réelle : 12 × 500 = 6 000 mm = 6 m. **p = 0,5 / 6 = 8,3 %**.
8,3 % > 8 % : la route ne peut pas suivre exactement la ligne de plus grande pente ; on la place en **biais** par rapport aux courbes (son tracé plus long réduit la pente).`},
  {t:"Reconnaître les formes du relief", d:1, e:`Sur un plan, les courbes de niveau 40, 41 et 42 forment des « V » dont les pointes sont dirigées vers la courbe 42. S'agit-il d'une crête ou d'un talweg ? Quelle précaution prendre pour construire à cet endroit ?`, c:`Les pointes sont dirigées vers les altitudes **croissantes** (vers l'amont) : c'est un **talweg** (fond de vallon). L'eau de ruissellement s'y concentre : éviter d'y construire, ou prévoir des ouvrages d'évacuation (caniveau, buse, fossé de garde), surélever le niveau ±0,00 et protéger les fondations.`},
  {t:"Profil d'une canalisation", d:2, e:`Une canalisation gravitaire doit relier un regard A (altitude du terrain 28,60 ; fil d'eau à 27,40) à un regard B situé 75 m plus loin (terrain 27,10). La pente minimale est de 1 %.
1. Quelle est l'altitude du fil d'eau en B ?
2. Quelle est la profondeur de la canalisation en B ?
3. Le terrain intermédiaire, à 40 m de A, est à l'altitude 27,90 : quelle y est la profondeur ?`, c:`1. Fil d'eau en B : 27,40 − 0,01 × 75 = **26,65 m**.
2. Profondeur en B : 27,10 − 26,65 = **0,45 m** (faible : il faudra vérifier la couverture minimale, souvent 0,80 m sous chaussée, ou approfondir A).
3. À 40 m : fil d'eau 27,40 − 0,40 = 27,00 m → profondeur **0,90 m**.`}
 ],
 quiz:[
  {q:"Une courbe de niveau relie :", o:["Les points de même pente","Les points de même altitude","Les bornes","Les arbres"], r:1, e:"Définition de la courbe de niveau."},
  {q:"Des courbes très serrées indiquent :", o:["Un terrain plat","Une forte pente","Un talweg","Une erreur"], r:1, e:"La dénivelée e se fait sur peu de distance."},
  {q:"Dans un talweg, les pointes des « V » formés par les courbes sont dirigées vers :", o:["L'aval","L'amont","Le nord","La mer"], r:1, e:"Le fond de vallée remonte vers l'amont."},
  {q:"Point à 2 mm de la courbe 50 et 6 mm de la courbe 51 : son altitude vaut :", o:["50,25","50,33","50,75","51"], r:0, e:"50 + 2/8 = 50,25."},
  {q:"Dans un profil en long, l'échelle des hauteurs est en général :", o:["Égale à celle des longueurs","10 fois plus grande","10 fois plus petite","Sans importance"], r:1, e:"Pour rendre le relief lisible."}
 ]},

{id:"topo-3", niv:2, titre:"Le nivellement direct : principe, cheminement et compensation", duree:70, contenu:`## Le principe
Le **nivellement direct** (ou géométrique) mesure la **dénivelée** entre deux points avec un niveau et une mire. Le niveau, placé entre A et B, donne une visée horizontale. On lit la mire posée sur A (**lecture arrière**, LAR) puis sur B (**lecture avant**, LAV) :
$$ ΔhAB = LAR − LAV      ZB = ZA + ΔhAB

!fig:nivellement|Nivellement direct : lecture arrière sur A, lecture avant sur B

> [!exemple] Une seule station
> ZA = 54,200 m (repère connu). LAR (sur A) = 1,850 ; LAV (sur B) = 0,920.
> Δh = 1,850 − 0,920 = **+ 0,930 m** → ZB = 54,200 + 0,930 = **55,130 m**. B est plus haut que A : on lit moins haut sur la mire en B.

## Le cheminement
Quand A et B sont éloignés ou avec une grande dénivelée, on enchaîne plusieurs **stations** en passant par des **points de changement** (points intermédiaires, sur lesquels on pose la mire sur un crapaud ou un point dur). Chaque point de changement reçoit une lecture avant (depuis une station) puis une lecture arrière (depuis la station suivante).
$$ ΔhAB = Σ LAR − Σ LAV
Règles : portées **égales** à chaque station (élimine la collimation et l'effet de la courbure), portées de 30 à 50 m maximum, mire verticale, lectures au **millimètre**.

## Contrôler : cheminement fermé ou encadré
Un nivellement doit toujours être **contrôlé** :
- **cheminement fermé** : on revient au point de départ → la somme des dénivelées doit être nulle ;
- **cheminement encadré** : on part d'un repère connu et on arrive sur un autre repère connu → la somme des dénivelées doit être égale à la différence de leurs altitudes.
L'écart obtenu est la **fermeture** f. On la compare à une **tolérance**, par exemple pour un nivellement de chantier :
$$ T = ± 3 mm × √n   (n : nombre de stations)      ou   T = ± 12 mm × √L   (L en km)
Si |f| ≤ T, on **compense** : on répartit −f, par parts égales entre les stations (ou proportionnellement aux longueurs). Sinon, on recommence.

## Le carnet de nivellement (méthode des dénivelées)
> [!exemple] Cheminement fermé sur le repère R (Z = 100,000)
> | Station | Point | LAR | LAV | Δh brute | Compensation | Δh compensée | Altitude |
> |---|---|---|---|---|---|---|---|
> | 1 | R → A | 1,523 | 0,876 | + 0,647 | − 0,001 | + 0,646 | A : 100,646 |
> | 2 | A → B | 1,240 | 2,105 | − 0,865 | − 0,001 | − 0,866 | B : 99,780 |
> | 3 | B → C | 0,958 | 1,412 | − 0,454 | − 0,001 | − 0,455 | C : 99,325 |
> | 4 | C → R | 1,774 | 1,098 | + 0,676 | − 0,001 | + 0,675 | R : 100,000 ✔ |
> | Σ | | 5,495 | 5,491 | + 0,004 | − 0,004 | 0 | |
> Fermeture : f = + 4 mm (Σ LAR − Σ LAV = 5,495 − 5,491 ✔). Tolérance : 3 × √4 = 6 mm → acceptée, compensée de − 1 mm par station.

## La méthode de l'altitude du plan de visée
À chaque station, on calcule l'**altitude du plan de visée** (hauteur de l'instrument) :
$$ Hv = Zconnu + LAR      puis   Zpoint = Hv − Lpoint
Cette méthode est très pratique quand on vise **beaucoup de points** depuis une même station (levé d'une plateforme, contrôle d'un dallage) : c'est le **nivellement par rayonnement**.

> [!retenir]
> - Δh = LAR − LAV ; Z = Zprécédent + Δh ; sur un cheminement Δh = Σ LAR − Σ LAV.
> - Portées égales, mire verticale, lectures au mm.
> - Toujours fermer (retour au départ ou arrivée sur un repère) ; comparer f à la tolérance ; compenser.
> - Plan de visée : Hv = Z + LAR ; Z = Hv − L.`,
 sujet:{titre:"Cheminement de nivellement encadré entre deux repères", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Pour donner des altitudes aux points de changement d'un futur réseau d'assainissement à Gagnoa, vous effectuez un nivellement direct entre deux repères de nivellement connus.

**Données**
- Repère de départ **RN1 : Z = 25,412 m** ; repère d'arrivée **RN2 : Z = 27,836 m** ;
- Carnet de terrain :

| Station | Point | Lecture arrière | Lecture avant |
|---|---|---|---|
| S1 | RN1 | 1,625 | |
| S1 | PC1 | | 0,842 |
| S2 | PC1 | 1,914 | |
| S2 | PC2 | | 1,203 |
| S3 | PC2 | 0,987 | |
| S3 | PC3 | | 1,452 |
| S4 | PC3 | 2,315 | |
| S4 | RN2 | | 0,915 |

- Depuis S2, on a aussi visé un point de détail **P** (fond d'un regard existant) : lecture **1,560** ;
- Tolérance de fermeture : **T = ± 3 mm × √n** (n : nombre de stations).

### Partie A — Principe (4 points)
1. Expliquer le principe du nivellement direct et la formule Δh = LAR − LAV. (2 pts)
2. Pourquoi place-t-on le niveau à égale distance des deux mires ? (2 pts)

### Partie B — Calcul du cheminement (10 points)
3. Calculer les dénivelées de chaque station et leur somme. Contrôler avec Σ LAR − Σ LAV. (3 pts)
4. Calculer la fermeture et la tolérance. Conclure. (3 pts)
5. Compenser et calculer les altitudes de PC1, PC2 et PC3. (4 pts)

### Partie C — Point de détail (3 points)
6. Calculer l'altitude du plan de visée de S2 puis l'altitude de P. Pourquoi P n'est-il pas contrôlé ? (3 pts)

### Partie D — Exploitation (3 points)
7. Le fil d'eau du futur regard doit être à **1,10 m** sous PC2. Calculer son altitude et la lecture sur mire à obtenir depuis S2 pour régler le fond de fouille (fond de fouille = fil d'eau − 0,15 m). (3 pts)`,
  corrige:`### Partie A — Principe (4 pts)
1. Le niveau donne une visée **horizontale** ; la mire mesure la hauteur de cette visée au-dessus de chaque point. Le point le plus haut donne la lecture la plus faible : Δh = LAR − LAV. *(2 pts)*
2. Les portées égales éliminent l'**erreur de collimation** du niveau et l'effet de la sphéricité et de la réfraction. *(2 pts)*

### Partie B — Cheminement (10 pts)
3. S1 : + 0,783 ; S2 : + 0,711 ; S3 : − 0,465 ; S4 : + 1,400 → **Σ = + 2,429 m**. Contrôle : 6,841 − 4,412 = **2,429** ✔. *(3 pts)*
4. Théorique : 27,836 − 25,412 = 2,424 → **f = + 5 mm** ; T = 3 × √4 = **6 mm** → |f| ≤ T : accepté. *(3 pts)*
5. Correction − 5 mm répartie (− 1 ; − 1 ; − 2 ; − 1 mm) : *(4 pts)*

| Point | Δh compensée | Z (m) |
|---|---|---|
| RN1 | | 25,412 |
| PC1 | + 0,782 | **26,194** |
| PC2 | + 0,710 | **26,904** |
| PC3 | − 0,467 | **26,437** |
| RN2 | + 1,399 | 27,836 ✔ |

### Partie C — Point de détail (3 pts)
6. Plan de visée S2 = 26,194 + 1,914 = **28,108 m** ; ZP = 28,108 − 1,560 = **26,548 m**. P est un point **rayonné** : il ne fait pas partie du cheminement, une faute de lecture sur P ne serait pas détectée (le relire ou le viser depuis une autre station). *(3 pts)*

### Partie D — Exploitation (3 pts)
7. Fil d'eau : 26,904 − 1,10 = **25,804 m** ; fond de fouille : **25,654 m** ; lecture à obtenir : 28,108 − 25,654 = **2,454 m**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Compenser une fermeture hors tolérance au lieu de recommencer.
> - Oublier que le dernier point (RN2) doit retrouver exactement son altitude connue.
> - Utiliser l'altitude non compensée de PC1 pour le plan de visée de S2.`},
 exercices:[
  {t:"Altitude d'un point", d:1, e:`Le repère R a pour altitude 37,452 m. Lecture arrière sur R : 0,968 ; lecture avant sur P : 2,314. Calculer l'altitude de P. P est-il plus haut ou plus bas que R ?`, c:`Δh = 0,968 − 2,314 = **− 1,346 m** → **ZP = 37,452 − 1,346 = 36,106 m**. P est **plus bas** que R (on lit plus haut sur la mire en P).`},
  {t:"Cheminement encadré", d:2, e:`On nivelle de R1 (Z = 25,300) à R2 (Z = 26,018) en passant par les points 1 et 2 :
- station 1 : LAR sur R1 = 1,642 ; LAV sur 1 = 0,815 ;
- station 2 : LAR sur 1 = 1,903 ; LAV sur 2 = 1,227 ;
- station 3 : LAR sur 2 = 0,744 ; LAV sur R2 = 1,522.
1. Calculer les dénivelées et la fermeture.
2. Tolérance 3 mm √n : compenser et calculer les altitudes de 1 et 2.`, c:`1. Δh : + 0,827 ; + 0,676 ; − 0,778. Σ = + 0,725 m. Dénivelée théorique : 26,018 − 25,300 = + 0,718 m.
**Fermeture f = 0,725 − 0,718 = + 7 mm.** Tolérance : 3 × √3 = **5,2 mm** → 7 > 5,2 : **le cheminement doit être refait** (faute probable).
2. (Si l'on avait obtenu par exemple f = + 3 mm, on aurait compensé de − 1 mm par station.)`},
  {t:"Compensation d'un cheminement fermé", d:2, e:`Cheminement fermé sur le repère R (Z = 12,500) : dénivelées mesurées R→A : + 1,236 ; A→B : − 0,482 ; B→C : − 1,105 ; C→R : + 0,345. Calculer la fermeture, vérifier la tolérance (3 mm √n), compenser et donner les altitudes.`, c:`Σ Δh = 1,236 − 0,482 − 1,105 + 0,345 = **− 0,006 m** → f = − 6 mm. Tolérance : 3 × √4 = **6 mm** → acceptée (limite).
Compensation : + 1,5 mm par station (on arrondit : + 2, + 1, + 2, + 1 mm).
ZA = 12,500 + 1,238 = **13,738** ; ZB = 13,738 − 0,481 = **13,257** ; ZC = 13,257 − 1,103 = **12,154** ; contrôle : 12,154 + 0,346 = 12,500 ✔.`},
  {t:"Nivellement par rayonnement", d:1, e:`Depuis une station, la lecture arrière sur le repère R (Z = 48,620) vaut 1,385. On vise ensuite les points 1, 2, 3 avec les lectures 0,955 ; 1,620 ; 2,104. Calculer l'altitude du plan de visée et celles des points.`, c:`**Hv = 48,620 + 1,385 = 50,005 m.**
**Z1 = 50,005 − 0,955 = 49,050** ; **Z2 = 50,005 − 1,620 = 48,385** ; **Z3 = 50,005 − 2,104 = 47,901 m**.`}
 ],
 quiz:[
  {q:"La dénivelée entre A (arrière) et B (avant) vaut :", o:["LAV − LAR","LAR − LAV","LAR + LAV","LAR × LAV"], r:1, e:"Si on lit plus bas sur B, B est plus haut."},
  {q:"Sur un cheminement fermé, la somme des dénivelées doit être :", o:["Positive","Nulle","Égale à la distance","Égale à la première lecture"], r:1, e:"On revient au point de départ."},
  {q:"L'altitude du plan de visée vaut :", o:["Z − LAR","Z + LAR","LAR − LAV","Z × LAR"], r:1, e:"Hv = Zconnu + lecture arrière."},
  {q:"Si la fermeture dépasse la tolérance, il faut :", o:["Compenser quand même","Recommencer le nivellement","Changer de repère","Diviser par deux"], r:1, e:"Une faute est probable."},
  {q:"On place le niveau à égale distance des deux mires pour :", o:["Aller plus vite","Éliminer l'erreur de collimation","Voir mieux","Éviter le soleil"], r:1, e:"Les erreurs égales s'annulent."}
 ]},

{id:"topo-12", niv:2, titre:"Le nivellement sur le chantier : repères, plateformes et pentes", duree:55, contenu:`## Les repères de nivellement
Avant tout travail, on crée sur le chantier un ou plusieurs **repères de nivellement** (clou dans un massif béton, borne, marque sur un ouvrage stable) dont l'altitude est connue, rattachés si possible au réseau officiel (NGCI) ou à une altitude donnée par le géomètre. Ils doivent être **hors de la zone des travaux**, protégés et **contrôlés** régulièrement (un repère qui bouge fausse tout le chantier).

## Reporter le niveau ±0,00
Le niveau ±0,00 du projet (par exemple 54,90 m) se reporte sur les **chaises d'implantation** et sur des piquets :
$$ lecture à faire sur la mire = Hv − Zprojet
On fait descendre ou monter la mire (ou on cloue une latte) jusqu'à lire cette valeur : le pied de la mire est alors au niveau voulu.

> [!exemple] Report du ±0,00
> Repère R : Z = 54,200. Lecture arrière sur R : 1,385 → Hv = 55,585.
> Pour marquer le niveau ±0,00 = 54,900 sur une chaise : lecture à obtenir = 55,585 − 54,900 = **0,685 m**. On trace un trait sur le piquet au pied de la mire quand on lit 0,685.
> Pour le fond de fouille à −1,20 (Z = 53,700) : lecture = 55,585 − 53,700 = **1,885 m**.

## Le nivellement d'une plateforme
Pour terrasser une plateforme au niveau projet, on nivelle le terrain naturel sur un **quadrillage** (par exemple tous les 5 m), puis on calcule en chaque point la **hauteur de déblai ou de remblai** :
$$ h = Zterrain − Zprojet   (h > 0 : déblai ; h < 0 : remblai)
Ces hauteurs servent au calcul des cubatures et à l'implantation des **piquets de terrassement** (on écrit sur chaque piquet « D 0,35 » ou « R 0,20 »).

> [!exemple] Plateforme à 54,40 m
> Hv = 55,585. Lectures sur trois points du quadrillage : 0,950 ; 1,620 ; 2,100.
> Altitudes : 54,635 ; 53,965 ; 53,485 → hauteurs : **D 0,235** ; **R 0,435** ; **R 0,915**.

## Implanter une pente (canalisation, caniveau, dallage)
Pour poser une canalisation à pente constante p depuis un point de départ de fil d'eau Z0 :
$$ Zprojet(x) = Z0 − p × x      lecture théorique = Hv − Zprojet(x)
On installe des **nivelettes** (planches horizontales sur piquets) au-dessus de la tranchée, à une hauteur constante h au-dessus du fil d'eau ; une **mire-nivelette** de longueur h permet ensuite aux ouvriers de contrôler la pente « à vue » en alignant trois nivelettes.

> [!exemple] Caniveau à 0,5 %
> Fil d'eau de départ : Z0 = 53,800 ; pente 0,5 % ; points tous les 10 m. Hv = 55,585.
> x = 0 : Z = 53,800 → lecture 1,785 ; x = 10 : Z = 53,750 → lecture **1,835** ; x = 20 : Z = 53,700 → lecture **1,885** ; x = 30 : Z = 53,650 → lecture 1,935.

## Le niveau laser
Le **niveau laser rotatif** matérialise un **plan horizontal** (ou incliné à une pente réglée) par un faisceau qui tourne. Une **cellule de détection** fixée sur une mire « bipe » quand elle coupe le faisceau. Avantages : une seule personne suffit, on peut guider les engins de terrassement (récepteur sur la lame), contrôler un dallage ou un faux plafond en continu. Le principe de calcul reste le même : lecture = Hlaser − Zprojet.

## Contrôler les ouvrages
On contrôle par nivellement : les **niveaux des fonds de fouille** et des **semelles**, l'**arase** des longrines et des murs, le **niveau des planchers** avant coulage (coffrages et étaiement), la **planéité** des dallages (écarts admissibles de l'ordre de ± 5 mm sous une règle de 2 m pour un dallage courant), les **pentes** des réseaux avant remblaiement.

> [!retenir]
> - Repères stables, protégés, rattachés et contrôlés.
> - Lecture à faire = Hv − Zprojet.
> - h = Zterrain − Zprojet : positif = déblai, négatif = remblai.
> - Pente : Zprojet(x) = Z0 − p x ; nivelettes et mire-nivelette ; laser rotatif.`,
 sujet:{titre:"Le niveau sur le chantier : traits de niveau, fond de fouille, plate-forme et pentes", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Chantier d'un entrepôt à Yopougon. Le repère de chantier **R** a pour altitude **12,450 m**. Le niveau ± 0,00 (dessus du dallage fini) est fixé à **12,80 m**.

**Données**
- Station du niveau : lecture sur R = **1,325** ;
- Fond de fouille des semelles à **− 1,20** (par rapport au ± 0,00) ;
- Plate-forme de **120 m²** : six points nivelés depuis la même station, lectures **1,605 – 1,740 – 1,485 – 1,910 – 1,815 – 1,560** ; dessus du remblai (arase sous hérisson et dallage) à **− 0,25** ;
- Canalisation : regard R1 fil d'eau **11,20 m**, pente **2 %**, longueur jusqu'à R2 **18 m** ;
- Dallage d'une aire de lavage : pente **1,5 %** vers un siphon situé à **4,00 m** du bord.

### Partie A — Plan de visée et traits de niveau (6 points)
1. Calculer l'altitude du plan de visée. (1 pt)
2. Calculer l'altitude du fond de fouille et la lecture à obtenir sur la mire. (2 pts)
3. On veut tracer sur les poteaux un trait « + 1,00 ». Est-ce possible depuis cette station ? Proposer une solution avec un trait « + 0,50 » et donner la lecture. (3 pts)

### Partie B — Plate-forme (7 points)
4. Calculer les altitudes des six points et l'altitude moyenne. (3 pts)
5. Calculer l'altitude de l'arase et la hauteur de remblai à chaque point. (2 pts)
6. Estimer le volume de remblai compacté. (2 pts)

### Partie C — Pentes (5 points)
7. Calculer le fil d'eau en R2 et la lecture à obtenir sur la mire posée au fond de R2. (3 pts)
8. Calculer la différence de niveau entre le bord de l'aire de lavage et le siphon. (2 pts)

### Partie D — Bonnes pratiques (2 points)
9. Pourquoi faut-il deux repères de chantier, protégés et contrôlés régulièrement ? (2 pts)`,
  corrige:`### Partie A — Traits de niveau (6 pts)
1. Plan de visée : 12,450 + 1,325 = **13,775 m**. *(1 pt)*
2. Fond de fouille : 12,80 − 1,20 = **11,60 m** ; lecture : 13,775 − 11,60 = **2,175 m**. *(2 pts)*
3. Trait + 1,00 = 13,80 m, au-dessus du plan de visée (13,775) : lecture négative (− 0,025), **impossible**. Trait + 0,50 = 13,30 m → lecture **0,475 m** ; on en déduira le + 1,00 au mètre (+ 0,50 au-dessus). *(3 pts)*

### Partie B — Plate-forme (7 pts)
4. Z = 13,775 − L : **12,170 – 12,035 – 12,290 – 11,865 – 11,960 – 12,215** ; moyenne **12,089 m**. *(3 pts)*
5. Arase : 12,80 − 0,25 = **12,55 m** ; hauteurs : **0,380 – 0,515 – 0,260 – 0,685 – 0,590 – 0,335 m**. *(2 pts)*
6. Hauteur moyenne 0,461 m → V ≈ 120 × 0,461 = **55 m³** de remblai compacté (estimation : les points ont tous le même poids). *(2 pts)*

### Partie C — Pentes (5 pts)
7. R2 : 11,20 − 0,02 × 18 = **10,84 m** ; lecture : 13,775 − 10,84 = **2,935 m**. *(3 pts)*
8. 4,00 × 0,015 = **0,06 m** : le siphon est 6 cm plus bas que le bord. *(2 pts)*

### Partie D — Pratiques (2 pts)
9. Un repère peut être heurté ou déplacé par les engins : avec deux repères, on contrôle l'un par l'autre, et on peut toujours en retrouver un. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer les altitudes avec Z = plan de visée + lecture.
> - Oublier de convertir les niveaux relatifs (± 0,00) en altitudes.
> - Régler les fonds de fouille sans contrôle de fermeture sur le repère.`},
 exercices:[
  {t:"Marquer des niveaux", d:1, e:`Hv = 32,476 m. Quelle lecture faut-il faire pour marquer :
1. le niveau ±0,00 = 31,800 ;
2. l'arase des longrines à −0,20 ;
3. le fond de fouille à −0,90 ?`, c:`1. 32,476 − 31,800 = **0,676 m**.
2. Z = 31,600 → lecture **0,876 m**.
3. Z = 30,900 → lecture **1,576 m**.`},
  {t:"Déblais et remblais d'une plateforme", d:2, e:`Une plateforme doit être réglée à 18,25 m. Depuis une station (Hv = 19,842), on lit sur les quatre angles : 1,402 ; 1,955 ; 1,188 ; 1,760. Calculer les altitudes du terrain et les hauteurs à terrasser.`, c:`Altitudes : 18,440 ; 17,887 ; 18,654 ; 18,082.
Hauteurs : **D 0,190** ; **R 0,363** ; **D 0,404** ; **R 0,168**.
La plateforme est en déblai sur deux angles et en remblai sur les deux autres : on cherchera à équilibrer déblais et remblais en ajustant légèrement le niveau projet (voir les cubatures).`},
  {t:"Implanter une canalisation", d:2, e:`Une canalisation d'eaux pluviales part d'un regard dont le fil d'eau est à 25,640 m, avec une pente de 1,2 %. Hv = 27,318 m. Calculer les lectures théoriques à 0, 15, 30 et 45 m.`, c:`Fil d'eau : 25,640 ; 25,460 ; 25,280 ; 25,100.
Lectures : 27,318 − Z → **1,678 ; 1,858 ; 2,038 ; 2,218 m**.`},
  {t:"Nivelettes", d:3, e:`On veut poser une canalisation à 2 % entre A (fil d'eau 30,000) et B à 40 m. On installe des nivelettes en A et en B à 1,50 m au-dessus du fil d'eau.
1. Quelles sont les altitudes des nivelettes en A et en B ?
2. Comment l'ouvrier contrôle-t-il la pente au milieu de la tranchée ?`, c:`1. Fil d'eau en B : 30,000 − 0,02 × 40 = 29,200. Nivelettes : **31,500 en A** et **30,700 en B**.
2. Il pose sur le fond de tranchée (ou sur le tuyau) une **mire-nivelette** de 1,50 m de haut et vise depuis la nivelette A vers la nivelette B : quand le haut de la mire-nivelette est **aligné** avec les deux nivelettes, le fond est à la bonne altitude. Plus haut : il faut creuser ; plus bas : il faut remblayer.`}
 ],
 quiz:[
  {q:"Pour marquer un niveau projet, on cherche la lecture :", o:["Zprojet − Hv","Hv − Zprojet","Hv + Zprojet","Zprojet"], r:1, e:"La mire indique la distance sous le plan de visée."},
  {q:"Un point dont l'altitude du terrain est supérieure au niveau projet est en :", o:["Remblai","Déblai","Équilibre","Erreur"], r:1, e:"Il faut enlever de la terre."},
  {q:"Un niveau laser rotatif permet :", o:["De mesurer des angles","De matérialiser un plan horizontal ou incliné","De mesurer des distances au mm","De remplacer les repères"], r:1, e:"Une cellule détecte le faisceau."},
  {q:"Les repères de nivellement doivent être :", o:["Dans les fouilles","Stables, protégés, hors de la zone des travaux","Sur les engins","Sur des piquets déplaçables"], r:1, e:"Un repère qui bouge fausse tout le chantier."},
  {q:"Une canalisation à 1 % sur 30 m descend de :", o:["3 cm","30 cm","3 m","1 cm"], r:1, e:"0,01 × 30 = 0,30 m."}
 ]},

{id:"topo-13", niv:2, titre:"Mesure des angles au théodolite", duree:55, contenu:`## Angles horizontaux et angles verticaux
Le **théodolite** (ou la station totale) mesure :
- l'**angle horizontal** entre deux directions, sur le cercle horizontal (lectures Hz, en gon, croissant dans le sens des aiguilles d'une montre) ;
- l'**angle zénithal** V d'une visée, sur le cercle vertical : 0 gon au zénith, 100 gon à l'horizontale, 200 gon au nadir. L'**angle de site** (pente de la visée) vaut i = 100 − V.

## Mesurer un angle horizontal
On se met en station sur le sommet S de l'angle, on vise A puis B et on lit :
$$ angle ASB = LB − LA      (+ 400 gon si le résultat est négatif)

> [!exemple] Calcul d'un angle
> LA = 352,8460 gon ; LB = 48,1225 gon → LB − LA = − 304,7235 → + 400 = **95,2765 gon**.

## Le double retournement
Pour éliminer les erreurs instrumentales (collimation horizontale, tourillonnement, index), on mesure en **cercle gauche** (CG, position normale) puis on fait tourner la lunette de 200 gon et l'alidade de 200 gon pour viser en **cercle droit** (CD). En CD, les lectures horizontales diffèrent de 200 gon (aux erreurs près) ; on fait la **moyenne**.

> [!exemple] Angle mesuré en CG et CD
> CG : LA = 12,4520 ; LB = 87,9310 → 75,4790 gon.
> CD : LA = 212,4540 ; LB = 287,9300 → 75,4760 gon.
> **Angle = (75,4790 + 75,4760) / 2 = 75,4775 gon** (écart CG/CD de 3 mgon, acceptable).

## Le tour d'horizon
Pour mesurer plusieurs directions depuis une station, on fait un **tour d'horizon** : on vise successivement A, B, C, D puis on **revient sur A** (fermeture). La différence entre la première et la dernière lecture sur A (fermeture du tour) doit être faible (quelques mgon) ; on la répartit sur les directions. On réalise en général deux séquences (CG et CD).

## Mesurer un angle vertical
$$ erreur d'index : e = (VCG + VCD − 400) / 2      V corrigé = VCG − e
> [!exemple] Angle zénithal
> VCG = 94,3215 ; VCD = 305,6801 → somme 400,0016 → e = 0,0008 gon → **V = 94,3207 gon** ; angle de site i = 100 − 94,3207 = **5,6793 gon** (visée montante).

## Précision et bonnes pratiques
- Viser le **bas** des jalons (ou un prisme sur canne verticale) pour éviter l'erreur due à un jalon incliné ;
- **centrage** soigné : une erreur de centrage de 5 mm donne une erreur angulaire de 5 / 50 000 rad ≈ 6 mgon sur une visée de 50 m ;
- éviter les visées **trop courtes** (une petite erreur de centrage devient une grande erreur d'angle) ;
- mesurer **plusieurs séquences** pour les travaux précis (polygonales).

> [!retenir]
> - Angle horizontal = LB − LA (+400 si négatif), lectures croissant dans le sens horaire.
> - Double retournement : CG et CD, on prend la moyenne.
> - V : 0 au zénith, 100 à l'horizontale ; e = (VCG + VCD − 400)/2.
> - Tour d'horizon fermé sur la première direction.`,
 sujet:{titre:"Tour d'horizon au théodolite en deux positions de cercle", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Depuis une station S d'un canevas de lotissement, vous mesurez les directions vers quatre points A, B, C, D par un tour d'horizon en cercle gauche (CG) puis en cercle droit (CD), avec fermeture sur A.

**Lectures horizontales (gon)**

| Point | CG | CD |
|---|---|---|
| A | 0,0120 | 200,0110 |
| B | 68,4530 | 268,4544 |
| C | 152,7810 | 352,7788 |
| D | 287,3360 | 87,3384 |
| A (fermeture) | 0,0135 | 200,0125 |

Tolérance de fermeture d'un tour : **3 mgon**.

### Partie A — Méthode (4 points)
1. Pourquoi refermer le tour sur le point de départ ? (1 pt)
2. Pourquoi mesurer en CG et en CD ? Qu'est-ce que la réitération ? (3 pts)

### Partie B — Fermetures (6 points)
3. Calculer les fermetures du tour en CG et en CD et les comparer à la tolérance. (2 pts)
4. Répartir les fermetures proportionnellement au rang de la visée et donner les lectures corrigées. (4 pts)

### Partie C — Directions moyennes et angles (8 points)
5. Calculer les directions moyennes CG/CD. (3 pts)
6. Réduire les directions à zéro sur A. (2 pts)
7. Calculer les angles ASB, BSC, CSD et DSA, et vérifier leur somme. (3 pts)

### Partie D — Conversion (2 points)
8. Convertir l'angle BSC en degrés-minutes-secondes. (2 pts)`,
  corrige:`### Partie A — Méthode (4 pts)
1. La fermeture contrôle que l'appareil n'a pas bougé (trépied, embase) pendant le tour. *(1 pt)*
2. La moyenne CG/CD élimine la **collimation**, le défaut des **tourillons** et l'**excentricité** ; la **réitération** consiste à recommencer le tour en décalant l'origine du cercle pour répartir les erreurs de graduation. *(3 pts)*

### Partie B — Fermetures (6 pts)
3. CG : 0,0135 − 0,0120 = **1,5 mgon** ; CD : 200,0125 − 200,0110 = **1,5 mgon** ; ≤ 3 mgon : acceptées. *(2 pts)*
4. Corrections : A 0 ; B − 0,4 ; C − 0,8 ; D − 1,1 mgon (et − 1,5 sur la fermeture). *(4 pts)*

| Point | CG corrigé | CD corrigé |
|---|---|---|
| A | 0,0120 | 200,0110 |
| B | 68,4526 | 268,4540 |
| C | 152,7802 | 352,7780 |
| D | 287,3349 | 87,3373 |

### Partie C — Angles (8 pts)
5. Moyenne = (CG + CD ∓ 200) / 2 : A **0,0115** ; B **68,4533** ; C **152,7791** ; D **287,3361**. *(3 pts)*
6. Réduites (− 0,0115) : A **0** ; B **68,4418** ; C **152,7676** ; D **287,3246**. *(2 pts)*
7. ASB = **68,4418** ; BSC = **84,3258** ; CSD = **134,5570** ; DSA = 400 − 287,3246 = **112,6754** → somme **400,0000 gon** ✔. *(3 pts)*

### Partie D — Conversion (2 pts)
8. 84,3258 × 0,9 = 75,8932° → **75°53'36"**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Faire la moyenne CG/CD sans enlever 200 gon (ou en les enlevant du mauvais côté de 400).
> - Répartir la fermeture uniformément sur toutes les visées au lieu de la faire croître avec le rang.
> - Calculer DSA sans boucler à 400 gon.`},
 exercices:[
  {t:"Angle horizontal", d:1, e:`Depuis S, on lit LA = 285,6230 gon et LB = 18,4410 gon. Calculer l'angle ASB.`, c:`LB − LA = 18,4410 − 285,6230 = − 267,1820 → + 400 = **132,8180 gon**.`},
  {t:"Double retournement", d:2, e:`Mesures CG : LA = 105,2215 ; LB = 230,8760. Mesures CD : LA = 305,2195 ; LB = 30,8790.
Calculer l'angle en CG, en CD, et l'angle retenu.`, c:`CG : 230,8760 − 105,2215 = **125,6545 gon**.
CD : 30,8790 − 305,2195 = − 274,3405 + 400 = **125,6595 gon**.
**Angle retenu : (125,6545 + 125,6595) / 2 = 125,6570 gon** (écart 5 mgon : acceptable pour un chantier ; une mesure de précision exigerait une nouvelle séquence).`},
  {t:"Erreur d'index et angle de site", d:2, e:`On vise un point en CG : V = 102,1470 gon ; en CD : V = 297,8562 gon. Calculer l'erreur d'index, l'angle zénithal corrigé et l'angle de site. La visée monte-t-elle ou descend-elle ?`, c:`Somme = 400,0032 → **e = 0,0016 gon**. **V = 102,1470 − 0,0016 = 102,1454 gon**.
**i = 100 − 102,1454 = − 2,1454 gon** : la visée **descend**.`},
  {t:"Influence du centrage", d:3, e:`Un opérateur se met en station avec une erreur de centrage de 1 cm perpendiculairement à une visée.
1. Quelle erreur angulaire cela produit-il pour une visée de 20 m ? de 200 m ? (en mgon)
2. Que conclure pour l'implantation des bâtiments ?`, c:`1. Erreur ≈ e / D (en radians) : 0,01 / 20 = 5 × 10⁻⁴ rad = 5 × 10⁻⁴ × 200/π = **31,8 mgon** à 20 m ; 0,01 / 200 = 5 × 10⁻⁵ rad = **3,2 mgon** à 200 m.
2. Les **visées courtes** sont très sensibles au centrage : pour implanter un bâtiment, on soigne le centrage (plomb laser), on oriente l'appareil sur un repère **éloigné**, et on contrôle les implantations par des mesures de distances (diagonales).`}
 ],
 quiz:[
  {q:"Un angle zénithal de 100 gon correspond à une visée :", o:["Verticale vers le haut","Horizontale","Verticale vers le bas","Inclinée à 45°"], r:1, e:"0 au zénith, 100 à l'horizontale."},
  {q:"LA = 390 gon, LB = 30 gon : l'angle ASB vaut :", o:["360 gon","40 gon","420 gon","−360 gon"], r:1, e:"30 − 390 + 400 = 40 gon."},
  {q:"En cercle droit, les lectures horizontales diffèrent de celles du cercle gauche d'environ :", o:["100 gon","200 gon","400 gon","0"], r:1, e:"On retourne l'alidade de 200 gon."},
  {q:"Le tour d'horizon se termine :", o:["Sur la dernière direction","En revenant sur la première direction","Sur le nord","Sur la station"], r:1, e:"Pour contrôler la stabilité de l'appareil."},
  {q:"Une erreur de centrage pèse le plus sur :", o:["Les visées longues","Les visées courtes","Les angles verticaux","Les distances"], r:1, e:"L'erreur angulaire vaut e / D."}
 ]},

{id:"topo-4", niv:2, titre:"Gisements, distances et coordonnées", duree:70, contenu:`## Le gisement
Le **gisement** GAB d'une direction AB est l'angle, compté de **0 à 400 gon** dans le sens des aiguilles d'une montre, entre la direction du **Nord** (axe des Y) et la direction AB.
!fig:gisement|Gisement : angle depuis le Nord (axe Y), sens horaire
- Le **gisement réciproque** vaut : **GBA = GAB ± 200 gon**.
- Gisements particuliers : vers le Nord 0, vers l'Est 100, vers le Sud 200, vers l'Ouest 300 gon.

## Calculer un gisement à partir de coordonnées
Avec ΔX = XB − XA et ΔY = YB − YA, on calcule l'angle aigu g = arctan (|ΔX| / |ΔY|) puis on place le résultat dans le bon **quadrant** :
| Signe de ΔX | Signe de ΔY | Quadrant | GAB |
|---|---|---|---|
| + | + | I (Nord-Est) | g |
| + | − | II (Sud-Est) | 200 − g |
| − | − | III (Sud-Ouest) | 200 + g |
| − | + | IV (Nord-Ouest) | 400 − g |
(Si ΔY = 0 : G = 100 gon si ΔX > 0, 300 gon si ΔX < 0.) La distance vaut DAB = √(ΔX² + ΔY²).

> [!exemple] Gisement et distance entre deux bornes
> A (412,350 ; 728,600) ; B (448,710 ; 751,180). ΔX = + 36,360 ; ΔY = + 22,580 (quadrant I).
> g = arctan(36,360 / 22,580) = arctan(1,6103) = **64,6214 gon** = GAB ; GBA = **264,6214 gon** ; DAB = **42,801 m**.

> [!exemple] Les autres quadrants
> ΔX = + 25,30 ; ΔY = − 14,20 → g = 67,4400 → G = 200 − 67,44 = **132,5600 gon**.
> ΔX = − 18,40 ; ΔY = − 30,10 → g = 34,9303 → G = **234,9303 gon**.
> ΔX = − 12,00 ; ΔY = + 40,00 → g = 18,5547 → G = **381,4453 gon**.

## Calculer des coordonnées par rayonnement
Depuis une station A de coordonnées connues, un point P est visé avec un gisement GAP et une distance horizontale D :
$$ XP = XA + D × sin GAP      YP = YA + D × cos GAP
Le gisement de la visée s'obtient en ajoutant à un gisement connu (orientation) l'angle mesuré : **GAP = GAB + angle BAP**.

> [!exemple] Point levé depuis A
> Station en A, orientation sur B (GAB = 64,6214), angle mesuré de B vers P : 35,2410 gon → GAP = **99,8624 gon** ; distance horizontale 28,415 m.
> XP = 412,350 + 28,415 × sin(99,8624) = **440,765** ; YP = 728,600 + 28,415 × cos(99,8624) = **728,661**.

## La transmission des gisements
Le long d'un cheminement A, B, C…, si l'on mesure en B l'angle **ABC** (de la direction BA vers la direction BC, sens horaire) :
$$ GBC = GAB + angle ABC − 200   (± 400 pour rester entre 0 et 400)
C'est la base du calcul des **polygonales** (niveau avancé).

> [!exemple] Transmission
> GAB = 64,6214 gon, angle mesuré en B : 142,3560 gon → GBC = 64,6214 + 142,3560 − 200 = **6,9774 gon**.

## Les calculatrices et logiciels
Les calculatrices topographiques et les stations totales font ces calculs automatiquement (fonctions « inverse » et « rayonnement »). Il faut néanmoins savoir les refaire à la main pour **contrôler** et pour comprendre les erreurs fréquentes : calculatrice réglée en **degrés** au lieu de grades, inversion de X et Y, oubli du quadrant.

> [!retenir]
> - G : de 0 à 400 gon, depuis le Nord, sens horaire ; GBA = GAB ± 200.
> - g = arctan(|ΔX|/|ΔY|), puis quadrant : g ; 200 − g ; 200 + g ; 400 − g.
> - Rayonnement : X = XA + D sin G ; Y = YA + D cos G.
> - Transmission : GBC = GAB + angle − 200.`,
 sujet:{titre:"Gisements, rayonnement et transmission des gisements sur un chantier", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un collège à Abengourou, deux bornes A et B du canevas sont connues. Vous calculez des points nouveaux par rayonnement et par transmission de gisement.

**Données** (X vers l'Est, Y vers le Nord, en m ; angles en gon)
- **A (512,340 ; 1 208,770)** ; **B (585,910 ; 1 165,320)** ;
- En station sur A, orienté sur B : angle horaire de B vers C = **72,4500 gon** ; distance horizontale AC = **64,250 m** ;
- En station sur B : angle horaire de A vers D = **135,2200 gon** ; distance horizontale BD = **50,000 m**.

### Partie A — Gisement et distance (6 points)
1. Calculer ΔX et ΔY de A vers B et indiquer le quadrant. (2 pts)
2. Calculer le gisement GAB, le gisement réciproque GBA et la distance AB. (4 pts)

### Partie B — Rayonnement depuis A (6 points)
3. Calculer le gisement GAC. (2 pts)
4. Calculer les coordonnées de C. (4 pts)

### Partie C — Transmission en B (6 points)
5. Calculer le gisement GBD par la formule de transmission. (2 pts)
6. Calculer les coordonnées de D. (4 pts)

### Partie D — Contrôle (2 points)
7. Calculer la distance CD et le gisement GCD. Pourquoi est-il utile de mesurer CD sur le terrain ? (2 pts)`,
  corrige:`### Partie A — Gisement et distance (6 pts)
1. ΔX = **+ 73,570** ; ΔY = **− 43,450** → **quadrant II** (Sud-Est). *(2 pts)*
2. g = arctan(73,570 / 43,450) = 66,0380 gon → **GAB = 200 − 66,0380 = 133,9620 gon** ; **GBA = 333,9620 gon** ; AB = √(73,570² + 43,450²) = **85,443 m**. *(4 pts)*

### Partie B — Rayonnement (6 pts)
3. GAC = 133,9620 + 72,4500 = **206,4120 gon**. *(2 pts)*
4. $$ XC = 512,340 + 64,250 × sin 206,4120 = 512,340 − 6,460 = 505,880
   $$ YC = 1 208,770 + 64,250 × cos 206,4120 = 1 208,770 − 63,924 = 1 144,846
   → **C (505,880 ; 1 144,846)**. *(4 pts)*

### Partie C — Transmission (6 pts)
5. GBD = GAB + angle − 200 = 133,9620 + 135,2200 − 200 = **69,1820 gon**. *(2 pts)*
6. XD = 585,910 + 50,000 × sin 69,1820 = 585,910 + 44,255 = **630,165** ; YD = 1 165,320 + 50,000 × cos 69,1820 = 1 165,320 + 23,270 = **1 188,590**. *(4 pts)*

### Partie D — Contrôle (2 pts)
7. ΔX = 124,285 ; ΔY = 43,744 → **CD = 131,759 m** ; **GCD = 78,4552 gon**. La mesure de CD sur le terrain contrôle d'un coup les deux rayonnements : une faute d'angle ou de distance apparaîtrait. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le quadrant : arctan donne toujours un angle entre 0 et 100 gon.
> - Ajouter l'angle dans le mauvais sens (les angles sont horaires, comme les gisements).
> - Ne pas ramener un gisement entre 0 et 400 gon.`},
 exercices:[
  {t:"Gisement et distance", d:1, e:`Calculer GAB, GBA et DAB pour A (1 250,000 ; 3 480,000) et B (1 287,450 ; 3 452,120).`, c:`ΔX = + 37,450 ; ΔY = − 27,880 → quadrant II.
g = arctan(37,450 / 27,880) = arctan(1,3433) = 59,2598 gon → **GAB = 200 − 59,2598 = 140,7402 gon** ; **GBA = 340,7402 gon**.
**DAB = √(37,450² + 27,880²) = √(1 402,50 + 777,29) = 46,688 m**.`},
  {t:"Coordonnées par rayonnement", d:2, e:`Une station S (500,000 ; 500,000) est orientée sur la borne R (500,000 ; 620,000). Depuis S, on vise trois angles d'une maison existante (angles mesurés depuis R, sens horaire, et distances horizontales) :
- P1 : 42,1500 gon ; 25,120 m ;
- P2 : 61,8000 gon ; 31,640 m ;
- P3 : 330,4000 gon ; 18,300 m.
Calculer leurs coordonnées.`, c:`GSR = 0 (R est au nord de S) → les gisements sont égaux aux angles mesurés.
P1 : X = 500 + 25,120 × sin 42,15 = **515,443** ; Y = 500 + 25,120 × cos 42,15 = **519,812**.
P2 : X = 500 + 31,640 × sin 61,80 = **526,113** ; Y = 500 + 31,640 × cos 61,80 = **517,866**.
P3 : X = 500 + 18,300 × sin 330,40 = **483,747** ; Y = 500 + 18,300 × cos 330,40 = **508,410**.
(sin 330,40 gon est négatif : le point est au nord-ouest de S.)`},
  {t:"Transmission de gisement", d:2, e:`Sur un cheminement A → B → C → D, GAB = 312,4500 gon. Angles mesurés (sens horaire, de la direction arrière vers la direction avant) : en B 165,2310 gon ; en C 98,7640 gon. Calculer GBC et GCD.`, c:`GBC = 312,4500 + 165,2310 − 200 = **277,6810 gon**.
GCD = 277,6810 + 98,7640 − 200 = **176,4450 gon**.`},
  {t:"Retrouver une borne disparue", d:3, e:`Une borne B a disparu. Ses coordonnées figurent sur le plan : B (1 263,410 ; 2 845,770). On se met en station sur la borne A (1 240,000 ; 2 830,000), orientée sur la borne C (1 240,000 ; 2 900,000).
1. Calculer le gisement et la distance de A vers B.
2. Quel angle faut-il ouvrir depuis la direction AC, et quelle distance reporter ?`, c:`1. ΔX = + 23,410 ; ΔY = + 15,770 → quadrant I : **GAB = arctan(23,410 / 15,770) = 62,2601 gon** ; **DAB = √(548,03 + 248,69) = 28,226 m**.
2. GAC = 0 gon (C au nord de A) → angle à ouvrir = GAB − GAC = **62,2601 gon** (sens horaire) ; on reporte **28,226 m** et on implante la borne, puis on **contrôle** par une mesure de distance depuis une autre borne connue.`}
 ],
 quiz:[
  {q:"Le gisement est compté à partir :", o:["De l'Est, sens trigonométrique","Du Nord, sens horaire","Du Sud","De la station précédente"], r:1, e:"De 0 à 400 gon depuis l'axe des Y."},
  {q:"Si GAB = 150 gon, GBA vaut :", o:["150 gon","350 gon","250 gon","50 gon"], r:1, e:"GBA = GAB ± 200."},
  {q:"Avec ΔX < 0 et ΔY > 0, le gisement vaut :", o:["g","200 − g","200 + g","400 − g"], r:3, e:"Quadrant nord-ouest."},
  {q:"Les coordonnées d'un point rayonné valent :", o:["X = XA + D cos G","X = XA + D sin G","X = XA + D tan G","X = XA − D"], r:1, e:"X ↔ sin G, Y ↔ cos G (G compté depuis le Nord)."},
  {q:"Erreur fréquente avec la calculatrice :", o:["Être en mode grades","Être en mode degrés au lieu de grades","Utiliser des mètres","Utiliser des coordonnées"], r:1, e:"Toujours vérifier le mode angulaire."}
 ]},

{id:"topo-14", niv:2, titre:"Calcul des surfaces et division des parcelles", duree:55, contenu:`## Pourquoi calculer des surfaces ?
Les surfaces servent à établir les **titres de propriété** (surface du lot), à vérifier les règles d'**urbanisme** (CES, COS), à estimer des **quantités** (gazon, dallage, décapage) et à **diviser** un terrain entre héritiers ou acquéreurs. La surface topographique est toujours la surface **en projection horizontale**.

## Les figures simples
| Figure | Surface |
|---|---|
| Rectangle | a × b |
| Triangle | base × hauteur / 2 |
| Triangle (trois côtés a, b, c) | √(p (p − a)(p − b)(p − c)), p = (a + b + c)/2 (formule de Héron) |
| Trapèze | (grande base + petite base) / 2 × hauteur |
| Cercle | π r² |
Une parcelle irrégulière mesurée au ruban se **décompose en triangles** dont on mesure les trois côtés.

> [!exemple] Triangle mesuré au ruban
> Côtés : 25,40 ; 31,80 ; 19,60 m. p = (25,40 + 31,80 + 19,60) / 2 = 38,40 m.
> S = √(38,40 × 13,00 × 6,60 × 18,80) = √61 940 = **248,9 m²**.

## La surface par les coordonnées (méthode de Gauss ou des trapèzes)
Pour un polygone dont les sommets 1, 2, …, n sont numérotés dans l'ordre (sens horaire ou trigonométrique) :
$$ 2S = Σ Xi × (Yi+1 − Yi−1)      (ou   2S = Σ (Xi × Yi+1 − Xi+1 × Yi))
On prend la **valeur absolue** du résultat. C'est la méthode utilisée par les géomètres et les logiciels : elle est exacte dès que les coordonnées sont connues.

> [!exemple] Parcelle à cinq sommets
> Sommets (X ; Y) : 1 (0 ; 0), 2 (42,50 ; 3,20), 3 (47,80 ; 35,60), 4 (18,30 ; 41,90), 5 (−4,20 ; 22,70).
> | i | Xi | Yi | Xi × Yi+1 | Xi+1 × Yi |
> |---|---|---|---|---|
> | 1 | 0 | 0 | 0 × 3,20 = 0 | 42,50 × 0 = 0 |
> | 2 | 42,50 | 3,20 | 42,50 × 35,60 = 1 513,00 | 47,80 × 3,20 = 152,96 |
> | 3 | 47,80 | 35,60 | 47,80 × 41,90 = 2 002,82 | 18,30 × 35,60 = 651,48 |
> | 4 | 18,30 | 41,90 | 18,30 × 22,70 = 415,41 | −4,20 × 41,90 = −175,98 |
> | 5 | −4,20 | 22,70 | −4,20 × 0 = 0 | 0 × 22,70 = 0 |
> | Σ | | | 3 931,23 | 628,46 |
> 2S = 3 931,23 − 628,46 = 3 302,77 → **S = 1 651,39 m²**.

## Les surfaces sur plan
Sur un plan, on peut mesurer les distances à l'échelle et décomposer en triangles, ou utiliser un **planimètre** (instrument qui suit le contour) ou un logiciel de DAO après numérisation. Penser à multiplier par le **carré** du dénominateur de l'échelle.

## Diviser une parcelle
Problèmes fréquents :
- **partager un rectangle** en lots de surface donnée : on coupe parallèlement à un côté, la longueur se calcule directement (S / largeur) ;
- **partager un triangle** par une parallèle à la base : les surfaces sont proportionnelles au **carré** des dimensions (triangles semblables) : pour retrancher, au sommet, un triangle de surface s d'un triangle de surface S et de hauteur h, la nouvelle hauteur vaut h' = h √(s / S) ;
- **partager un trapèze** ou un polygone quelconque : on procède par essais successifs ou par calcul analytique (logiciel).

> [!exemple] Couper un triangle
> Triangle de base 60 m et de hauteur 40 m (S = 1 200 m²). On veut détacher, côté sommet, un lot de 400 m² par une parallèle à la base.
> h' = 40 × √(400 / 1 200) = 40 × 0,577 = **23,09 m** depuis le sommet ; la ligne de partage mesure 60 × 0,577 = **34,64 m**.

> [!retenir]
> - Héron pour un triangle mesuré au ruban ; décomposition en triangles.
> - Coordonnées : 2S = Σ (Xi Yi+1 − Xi+1 Yi), en valeur absolue.
> - Échelle : surface réelle = surface plan × (dénominateur)².
> - Triangles semblables : surfaces proportionnelles au carré des longueurs.`,
 sujet:{titre:"Surface d'une parcelle et division en deux lots de même surface", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une famille de Daoukro veut partager un terrain entre deux héritiers et connaître précisément la surface d'une autre parcelle.

**Données**
- Parcelle 1, pentagone de sommets (m) : **P1 (1 452,30 ; 2 310,50)** ; **P2 (1 498,70 ; 2 322,10)** ; **P3 (1 505,40 ; 2 280,60)** ; **P4 (1 470,20 ; 2 255,30)** ; **P5 (1 440,80 ; 2 275,40)** ;
- Parcelle 2, trapèze **A (1 200,00 ; 800,00)** ; **B (1 260,00 ; 800,00)** ; **C (1 250,00 ; 840,00)** ; **D (1 200,00 ; 840,00)** ; AB et DC sont parallèles (côté AB sur la voie) ;
- Le partage doit se faire par une droite **EF parallèle à AB**, E sur AD et F sur BC, en deux lots de **même surface** (chacun ayant ainsi un accès : le lot ABFE sur la voie, le lot EFCD par une servitude).

### Partie A — Surface par les coordonnées (7 points)
1. Écrire la formule de Gauss (coordonnées). (1 pt)
2. Calculer la surface de la parcelle 1. (4 pts)
3. Exprimer cette surface en hectares, ares et centiares. (2 pts)

### Partie B — Division du trapèze (10 points)
4. Calculer la surface du trapèze ABCD. (2 pts)
5. Exprimer la largeur du trapèze à la distance y de AB. (2 pts)
6. Écrire l'équation donnant y pour que le lot ABFE fasse la moitié de la surface, et la résoudre. (4 pts)
7. Calculer les coordonnées de E et F et vérifier la surface du lot ABFE. (2 pts)

### Partie C — Pratique (3 points)
8. Pourquoi implante-t-on les nouvelles bornes E et F à partir de leurs coordonnées plutôt qu'au ruban depuis A et B ? Quel professionnel doit le faire ? (3 pts)`,
  corrige:`### Partie A — Gauss (7 pts)
1. $$ 2S = |Σ (Xi × Yi+1 − Xi+1 × Yi)|   (sommets pris dans l'ordre, le dernier relié au premier)
   *(1 pt)*
2. En calculant sur les coordonnées (on peut retrancher 1 400 et 2 200 pour alléger) : 2S = 5 662,32 → **S = 2 831,16 m²**. *(4 pts)*
3. **0 ha 28 a 31 ca** (et 16 dm²), soit 0,2831 ha. *(2 pts)*

### Partie B — Division (10 pts)
4. S = (60,00 + 50,00) / 2 × 40,00 = **2 200 m²**. *(2 pts)*
5. La largeur diminue de 10 m sur 40 m : **b(y) = 60 − 0,25 y**. *(2 pts)*
6. $$ (60 + 60 − 0,25 y) / 2 × y = 1 100   →   0,125 y² − 60 y + 1 100 = 0
   y = (60 − √(3 600 − 550)) / 0,25 = (60 − 55,227) / 0,25 = **19,093 m** (l'autre racine, 461 m, est hors du terrain). *(4 pts)*
7. **E (1 200,000 ; 819,093)** ; **F (1 255,227 ; 819,093)** ; lot ABFE : (60,000 + 55,227) / 2 × 19,093 = **1 100,0 m²** ✔. *(2 pts)*

### Partie C — Pratique (3 pts)
8. Les coordonnées permettent l'implantation depuis n'importe quel point du canevas, avec contrôle ; le ruban cumule les erreurs et les côtés ne sont pas perpendiculaires. Le bornage d'un partage est l'affaire d'un **géomètre-expert agréé**, avec procès-verbal signé par les parties. *(3 pts)*

> [!attention] Erreurs à éviter
> - Couper en deux la hauteur du trapèze (y = 20 m donne deux lots inégaux).
> - Prendre les sommets dans le désordre dans la formule de Gauss.
> - Oublier la valeur absolue (le signe dépend du sens de parcours).`},
 exercices:[
  {t:"Surface d'un triangle par Héron", d:1, e:`Calculer la surface d'un triangle de côtés 30 m, 40 m et 50 m. Vérifier avec la formule base × hauteur / 2 (le triangle est rectangle).`, c:`p = 60 m. S = √(60 × 30 × 20 × 10) = √360 000 = **600 m²**.
Triangle rectangle (30² + 40² = 50²) : S = 30 × 40 / 2 = **600 m²** ✔.`},
  {t:"Surface par les coordonnées", d:2, e:`Calculer la surface du quadrilatère A (100,00 ; 100,00), B (135,42 ; 104,18), C (131,06 ; 142,77), D (96,33 ; 138,50).`, c:`Σ Xi Yi+1 = 100 × 104,18 + 135,42 × 142,77 + 131,06 × 138,50 + 96,33 × 100 = 10 418,00 + 19 333,91 + 18 151,81 + 9 633,00 = 57 536,72.
Σ Xi+1 Yi = 135,42 × 100 + 131,06 × 104,18 + 96,33 × 142,77 + 100 × 138,50 = 13 542,00 + 13 653,83 + 13 753,03 + 13 850,00 = 54 798,86.
2S = 57 536,72 − 54 798,86 = 2 737,86 → **S = 1 368,93 m²** (≈ 13,7 ares). On garde toutes les décimales pendant le calcul : les produits sont grands et un petit arrondi fausse vite le résultat.`},
  {t:"Partage d'un rectangle", d:1, e:`Un terrain rectangulaire de 30 m de façade sur 45 m de profondeur doit être partagé en deux lots de même surface, chacun ayant accès à la voie (côté 30 m).
1. Où placer la limite ?
2. Et si l'on voulait trois lots ayant chacun accès à la voie ?`, c:`1. La limite doit être **perpendiculaire à la voie**, au milieu de la façade : deux lots de **15 × 45 m = 675 m²**.
2. Trois lots de 10 m de façade sur 45 m = **450 m²** chacun (si le règlement autorise 10 m de façade).`},
  {t:"Partage d'un triangle", d:3, e:`Un terrain triangulaire ABC a pour base BC = 80 m et pour hauteur 50 m (depuis A). On veut détacher, du côté de A, un lot de 1 000 m² par une limite parallèle à BC.
1. Calculer la surface totale.
2. À quelle distance de A placer la limite ? Quelle sera sa longueur ?`, c:`1. **S = 80 × 50 / 2 = 2 000 m²**.
2. Rapport des surfaces : 1 000 / 2 000 = 0,5 → rapport des longueurs : √0,5 = 0,707.
**Distance depuis A : 50 × 0,707 = 35,36 m** ; **longueur de la limite : 80 × 0,707 = 56,57 m**.`}
 ],
 quiz:[
  {q:"La surface topographique est mesurée :", o:["Suivant la pente","En projection horizontale","En volume","Sur la façade"], r:1, e:"Comme sur un plan."},
  {q:"La formule de Héron donne la surface d'un triangle à partir :", o:["D'un côté et d'un angle","Des trois côtés","Des coordonnées","De la hauteur seule"], r:1, e:"S = √(p(p−a)(p−b)(p−c))."},
  {q:"Pour des triangles semblables, si les longueurs sont divisées par 2, les surfaces sont divisées par :", o:["2","4","8","√2"], r:1, e:"Les surfaces varient comme le carré des longueurs."},
  {q:"Une surface de 6 cm² sur un plan au 1/500 représente :", o:["150 m²","300 m²","3 000 m²","30 m²"], r:0, e:"6 × 500² = 1 500 000 cm² = 150 m²."},
  {q:"Dans la méthode des coordonnées, on prend la surface :", o:["Toujours positive (valeur absolue)","Négative","Divisée par 4","Multipliée par 2"], r:0, e:"Le signe dépend seulement du sens de parcours."}
 ]},

{id:"topo-5", niv:2, titre:"Implantation d'un bâtiment", duree:70, contenu:`## Implanter : reporter le projet sur le terrain
L'**implantation** consiste à matérialiser sur le terrain la position exacte du bâtiment projeté : ses **axes** (axes des poteaux et des murs), ses angles, ses niveaux. C'est une opération **contractuelle** : une erreur d'implantation peut faire empiéter sur le voisin ou sur la voie, ou rendre le bâtiment non conforme au permis. Elle est réalisée par un géomètre ou par le chef de chantier à partir du **plan d'implantation** (coordonnées ou cotes par rapport aux limites).

## Les étapes
1. **Vérifier les bornes** de la parcelle (présentes, conformes au plan, non déplacées).
2. **Implanter un axe principal** (ou deux angles) à partir des bornes ou des coordonnées.
3. **Construire l'angle droit** et les autres axes.
4. **Contrôler** (diagonales, distances aux limites).
5. Reporter les axes sur des **chaises** placées hors de l'emprise des fouilles.
6. Reporter le **niveau ±0,00** sur les chaises et sur des repères.

!fig:implantation|Chaises d'implantation et cordeaux matérialisant les axes du bâtiment

## Les chaises d'implantation
Une **chaise** est une planche horizontale fixée sur deux piquets, placée à **1 à 2 m** à l'extérieur des futures fouilles. On y marque les axes par des **clous** ou des traits de scie ; des **cordeaux** tendus entre deux chaises opposées matérialisent les axes, et l'on reporte leurs intersections au sol au **fil à plomb**. Les chaises restent en place pendant les fondations (les cordeaux sont retirés pendant le terrassement et remis pour le coffrage). On cale souvent le dessus des chaises au **niveau ±0,00** (ou à un niveau rond).

## Construire un angle droit
- **Méthode 3-4-5** au ruban : un triangle de côtés 3, 4 et 5 m (ou 6, 8, 10 m) est rectangle (3² + 4² = 5²) ;
- **équerre optique** ou équerre à prisme ;
- **théodolite / station totale** : on ouvre un angle de **100 gon**.

## Contrôler par les diagonales
Un rectangle de côtés a et b a des diagonales égales à √(a² + b²). Si les deux diagonales mesurées sont **égales** et égales à la valeur théorique, l'implantation est correcte.

> [!exemple] Bâtiment de 12 × 10 m
> Diagonale théorique : √(12² + 10²) = √244 = **15,620 m**. On mesure 15,628 m et 15,611 m : écart de 17 mm entre les diagonales → l'angle n'est pas droit : on corrige en déplaçant un angle d'environ 8 mm, puis on remesure.

## Implanter par coordonnées à la station totale
Méthode moderne : on se met en station sur un point connu (ou en **station libre** sur plusieurs bornes), on s'oriente, et l'appareil calcule pour chaque point à implanter le **gisement** et la **distance** (calcul « inverse »). On tourne de l'angle voulu, un aide déplace le prisme jusqu'à la bonne distance, et on plante un piquet. Les distances et angles se calculent comme au chapitre sur les gisements.

> [!exemple] Implantation polaire des angles d'un bâtiment
> Station S (100,000 ; 100,000) orientée sur la borne R (100,000 ; 150,000), donc GSR = 0. Angles du bâtiment de 12 × 10 m : P1 (112,5 ; 108,2), P2 (124,5 ; 108,2), P3 (124,5 ; 118,2), P4 (112,5 ; 118,2).
> | Point | Angle à ouvrir depuis R (gon) | Distance horizontale (m) |
> |---|---|---|
> | P1 | 63,0390 | 14,950 |
> | P2 | 79,4388 | 25,836 |
> | P3 | 59,3255 | 30,520 |
> | P4 | 38,3131 | 22,079 |
> Contrôle : P1P2 = 12,000 m, P1P4 = 10,000 m, diagonales P1P3 et P2P4 = 15,620 m.

## Les tolérances
Pour un bâtiment courant, on vise une précision de **± 1 cm** sur les axes et de **± 1 cm** sur les niveaux de fondation. Les **reculs** par rapport aux limites et à la voie doivent être contrôlés avant de couler (une fois coulé, c'est trop tard).

## Reporter les axes en étage
Pour les poteaux et voiles des étages, on remonte les axes par **plomb laser** (à travers des réservations) ou on les reporte à partir de repères sur les façades, et on contrôle les niveaux de chaque plancher par nivellement depuis le repère de base.

> [!retenir]
> - Vérifier les bornes avant d'implanter.
> - Angle droit : 3-4-5, équerre optique, 100 gon au théodolite.
> - Contrôle par les diagonales : √(a² + b²).
> - Chaises à 1–2 m des fouilles, axes cloués, cordeaux, fil à plomb, niveau ±0,00.
> - Station totale : calcul inverse (G, D) et implantation polaire.`,
 sujet:{titre:"Implanter un bâtiment rectangulaire par coordonnées depuis une station", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un bâtiment administratif de **15,00 × 10,00 m** doit être implanté à Bondoukou. L'architecte a fixé l'angle A et l'orientation de la façade AB dans le système du chantier.

**Données** (X vers l'Est, Y vers le Nord, angles en gon)
- **A (100,000 ; 200,000)** ; façade AB de **15,00 m** au gisement **80,0000 gon** ; le bâtiment est à droite de AB (côté AD au gisement 180,0000 gon), largeur **10,00 m** ;
- Station **S (90,000 ; 185,000)**, référence **R (150,000 ; 185,000)** ;
- Les chaises d'implantation sont placées à **1,50 m** à l'extérieur des axes.

### Partie A — Coordonnées des angles (7 points)
1. Calculer les coordonnées de B. (2 pts)
2. Calculer les coordonnées de D puis de C. (3 pts)
3. Calculer la longueur théorique des diagonales. (2 pts)

### Partie B — Éléments d'implantation (8 points)
4. Calculer le gisement GSR. (1 pt)
5. Pour chaque angle (A, B, C, D), calculer le gisement depuis S, la distance horizontale et l'angle horaire à ouvrir depuis R. (7 pts)

### Partie C — Contrôles et chaises (5 points)
6. Quels contrôles faire après l'implantation des quatre angles ? Quelle tolérance retenir ? (3 pts)
7. Pourquoi reporte-t-on les axes sur des chaises (ou des repères déportés) ? (2 pts)`,
  corrige:`### Partie A — Coordonnées (7 pts)
1. XB = 100 + 15 × sin 80 = **114,266** ; YB = 200 + 15 × cos 80 = **204,635**. *(2 pts)*
2. D : XD = 100 + 10 × sin 180 = **103,090** ; YD = 200 + 10 × cos 180 = **190,489** ; C = B + même vecteur : **C (117,356 ; 195,125)**. *(3 pts)*
3. $$ diagonale = √(15² + 10²) = 18,028 m
   *(2 pts)*

### Partie B — Implantation (8 pts)
4. ΔX = 60, ΔY = 0 → **GSR = 100,0000 gon**. *(1 pt)*
5. Angle à ouvrir depuis R = G − GSR (± 400). *(7 pts)*

| Point | Gisement depuis S | Distance (m) | Angle depuis R |
|---|---|---|---|
| A | 37,4334 | 18,028 | 337,4334 |
| B | 56,6908 | 31,215 | 356,6908 |
| C | 77,4328 | 29,170 | 377,4328 |
| D | 74,7226 | 14,194 | 374,7226 |

### Partie C — Contrôles (5 pts)
6. Mesurer les **quatre côtés** (15,00 et 10,00) et les **deux diagonales** (18,03 m chacune), éventuellement depuis une seconde station ; tolérance courante en bâtiment : **± 1 à 2 cm**. *(3 pts)*
7. Les piquets d'angle disparaissent au terrassement : les chaises, hors de l'emprise des fouilles, conservent les axes (cordeaux tendus) pendant toute la construction des fondations. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer D avec le gisement 380 au lieu de 180 (bâtiment du mauvais côté de AB).
> - Implanter sans contrôle des diagonales : un rectangle « en parallélogramme » passe inaperçu.
> - Placer les chaises trop près des fouilles.`},
 exercices:[
  {t:"Angle droit au ruban", d:1, e:`On veut tracer un angle droit avec un ruban en utilisant des multiples de 3-4-5. Donner deux triangles possibles et expliquer la méthode.`, c:`Triangles : **6 – 8 – 10 m** ou **9 – 12 – 15 m** (plus grands = plus précis).
Méthode : depuis l'angle A sur l'axe connu, on mesure 6 m le long de l'axe (point B). Avec deux rubans, on cherche le point C situé à 8 m de A et à 10 m de B : l'angle BAC est droit. On prolonge AC par jalonnement.`},
  {t:"Contrôle par les diagonales", d:1, e:`Un bâtiment rectangulaire de 15,40 × 9,60 m est implanté. Les diagonales mesurées valent 18,152 et 18,141 m. Calculer la diagonale théorique et conclure.`, c:`**Diagonale théorique : √(15,40² + 9,60²) = √(237,16 + 92,16) = √329,32 = 18,147 m**.
Mesures : 18,152 (+ 5 mm) et 18,141 (− 6 mm) → écart entre diagonales de 11 mm : l'implantation est **légèrement en losange**. Pour un bâtiment courant (tolérance ± 1 cm), on corrige en déplaçant les deux angles d'environ 5 mm puis on recontrôle.`},
  {t:"Implantation polaire", d:2, e:`Station S (250,000 ; 400,000), orientée sur la borne B (250,000 ; 460,000). Calculer l'angle à ouvrir (depuis B, sens horaire) et la distance pour implanter les points P (262,000 ; 415,000) et Q (238,500 ; 412,300).`, c:`GSB = 0 gon (B au nord de S).
P : ΔX = + 12,000 ; ΔY = + 15,000 → **G = arctan(12/15) = 42,9553 gon** ; **D = √(144 + 225) = 19,209 m**.
Q : ΔX = − 11,500 ; ΔY = + 12,300 → g = arctan(11,5/12,3) = 47,8609 gon → **G = 400 − 47,8609 = 352,1391 gon** ; **D = √(132,25 + 151,29) = 16,839 m**.
On ouvre ces angles depuis la direction SB et on reporte les distances.`},
  {t:"Chaises et niveau", d:2, e:`Les chaises d'un bâtiment doivent avoir leur dessus au niveau ±0,00 = 32,150 m. Le niveau est en station, la lecture arrière sur le repère R (31,480) vaut 1,520. Quelle lecture faut-il obtenir sur la mire posée sur la planche ? La planche d'une chaise donne une lecture de 0,885 : faut-il la monter ou la descendre, et de combien ?`, c:`Hv = 31,480 + 1,520 = **33,000 m**. Lecture à obtenir : 33,000 − 32,150 = **0,850 m**.
On lit 0,885 : la planche est 0,885 − 0,850 = **35 mm trop basse** → il faut la **monter de 3,5 cm**.`}
 ],
 quiz:[
  {q:"Le triangle 3-4-5 sert à :", o:["Mesurer une pente","Tracer un angle droit","Calculer une surface","Niveler"], r:1, e:"3² + 4² = 5²."},
  {q:"Les chaises d'implantation se placent :", o:["Dans les fouilles","À 1 à 2 m à l'extérieur des fouilles","Sur la voie publique","Sur le toit"], r:1, e:"Elles doivent survivre au terrassement."},
  {q:"Un rectangle bien implanté a :", o:["Des côtés égaux","Des diagonales égales","Des angles de 50 gon","Une seule diagonale"], r:1, e:"Diagonales égales = angles droits."},
  {q:"Au théodolite, un angle droit vaut :", o:["90 gon","100 gon","200 gon","400 gon"], r:1, e:"100 gon = 90°."},
  {q:"Avant d'implanter, la première vérification est :", o:["La couleur du béton","La présence et la conformité des bornes","Le prix des aciers","La météo"], r:1, e:"Toute l'implantation s'appuie sur les bornes."}
 ]},

{id:"topo-15", niv:2, titre:"Profils en long, profils en travers et lignes de projet", duree:60, contenu:`## Le profil en long d'un projet
Pour une route, une voie de lotissement, une canalisation ou un mur, on dessine le **profil en long** : coupe verticale suivant l'axe, avec :
- la **ligne du terrain naturel** (TN), obtenue par nivellement des points de l'axe ;
- la **ligne rouge** (ou ligne de projet), formée de **déclivités** (pentes en %) raccordées ;
- un **cartouche** en dessous, avec pour chaque point (profil) : son numéro, sa distance partielle et cumulée, l'altitude du TN, l'altitude projet, la **hauteur de déblai ou de remblai**, et les pentes.

## Calculer la ligne rouge
Depuis un point de départ d'altitude Z0, avec une pente p (positive en montée) :
$$ Zprojet(x) = Z0 + p × x      h = ZTN − Zprojet   (h > 0 : déblai ; h < 0 : remblai)

> [!exemple] Profil d'une voie de lotissement
> Profils tous les 20 m. Projet : départ à 52,60 m avec une pente de + 1,0 %.
> | Profil | Distance (m) | TN | Projet | h |
> |---|---|---|---|---|
> | P0 | 0 | 52,40 | 52,60 | R 0,20 |
> | P1 | 20 | 52,85 | 52,80 | D 0,05 |
> | P2 | 40 | 53,60 | 53,00 | D 0,60 |
> | P3 | 60 | 53,10 | 53,20 | R 0,10 |
> | P4 | 80 | 52,20 | 53,40 | R 1,20 |

## Les points de passage
Un **point de passage** est le point où la ligne rouge coupe le terrain naturel (h = 0) : on passe du déblai au remblai. Entre deux profils distants de L, où h passe de h1 à h2 (de signes contraires) :
$$ x = L × |h1| / (|h1| + |h2|)   (compté depuis le premier profil)
> [!exemple] Points de passage de l'exemple
> Entre P0 (R 0,20) et P1 (D 0,05) : x = 20 × 0,20 / 0,25 = **16 m** (à 16 m du départ).
> Entre P2 (D 0,60) et P3 (R 0,10) : x = 20 × 0,60 / 0,70 = 17,14 m → **57,14 m** du départ.

## Les raccordements entre déclivités
Deux pentes successives se raccordent par un **arc de parabole** (en pratique assimilé à un cercle de grand rayon) pour assurer le confort et la **visibilité** : raccordement **saillant** (en sommet de côte, rayon de 1 500 à plusieurs milliers de mètres sur route) et **rentrant** (en fond de vallée, où il faut aussi évacuer l'eau).

## Les profils en travers
Le **profil en travers** est une coupe **perpendiculaire** à l'axe, à chaque profil. On y dessine le TN et le **gabarit** du projet : chaussée (avec son dévers de 2,5 % pour l'écoulement de l'eau), accotements, fossés, et **talus** de déblai ou de remblai (pentes courantes : 1/1 en déblai, 3/2 — soit 3 horizontal pour 2 vertical — en remblai).
On en tire les **surfaces de déblai et de remblai** de chaque profil, qui serviront au calcul des cubatures.

> [!exemple] Surface d'un profil en remblai sur terrain plat
> Plateforme de 7 m, remblai de hauteur h = 1,20 m, talus 3/2 (1,5 m horizontal pour 1 m de hauteur).
> Largeur en pied : 7 + 2 × 1,5 × 1,20 = 10,60 m. Surface : (7 + 10,60) / 2 × 1,20 = **10,56 m²**.

## Les profils des réseaux
Pour une canalisation, le profil en long indique en plus le **fil d'eau**, les **regards** (avec leurs cotes tampon et radier), le **diamètre** et la **pente** de chaque tronçon, et la **couverture** (hauteur de terre au-dessus du tuyau, au moins 0,80 m sous chaussée en général).

> [!retenir]
> - Zprojet = Z0 + p x ; h = ZTN − Zprojet (D si positif, R si négatif).
> - Point de passage : x = L |h1| / (|h1| + |h2|).
> - Raccordements paraboliques saillants et rentrants.
> - Profils en travers : chaussée, dévers, talus (1/1 déblai, 3/2 remblai) → surfaces pour les cubatures.`,
 sujet:{titre:"Ligne rouge d'une voie : déclivités, points de passage, raccordement et profils en travers", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Voie de desserte d'un lotissement à Sikensi. Profils tous les **20 m**.

**Données**

| Profil | P0 | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|---|
| Distance (m) | 0 | 20 | 40 | 60 | 80 | 100 |
| TN (m) | 48,20 | 48,95 | 49,60 | 49,10 | 48,40 | 48,05 |

- Projet : départ à **48,60** en P0, pente **+ 1,0 %** jusqu'à P3, puis **− 1,5 %** jusqu'à P5 ;
- Raccordement parabolique saillant en P3 de rayon **R = 2 000 m** ;
- Profils en travers (terrain horizontal en travers) : plate-forme de **8,00 m** ; talus de déblai à **1/1** ; talus de remblai à **3/2**.

### Partie A — Ligne rouge (8 points)
1. Calculer les altitudes projet (sans raccordement) et les hauteurs de déblai ou de remblai. (5 pts)
2. Calculer la position des points de passage. (3 pts)

### Partie B — Raccordement (5 points)
3. Calculer le changement de déclivité, la longueur du raccordement et sa demi-longueur (tangente). (3 pts)
4. Calculer la flèche au sommet et l'altitude projet corrigée en P3. Qu'est-ce que cela change pour P3 ? (2 pts)

### Partie C — Profils en travers (5 points)
5. Calculer la surface de déblai en P2. (2 pts)
6. Calculer la surface de remblai en P4. (2 pts)
7. Pourquoi les talus de remblai sont-ils plus doux que ceux de déblai ? (1 pt)

### Partie D — Synthèse (2 points)
8. Proposer une modification de la ligne rouge pour mieux équilibrer déblais et remblais. (2 pts)`,
  corrige:`### Partie A — Ligne rouge (8 pts)
1. *(5 pts)*

| Profil | TN | Projet | h |
|---|---|---|---|
| P0 | 48,20 | 48,60 | R 0,40 |
| P1 | 48,95 | 48,80 | D 0,15 |
| P2 | 49,60 | 49,00 | D 0,60 |
| P3 | 49,10 | 49,20 | R 0,10 |
| P4 | 48,40 | 48,90 | R 0,50 |
| P5 | 48,05 | 48,60 | R 0,55 |

2. Entre P0 et P1 : 20 × 0,40 / 0,55 = **14,55 m** ; entre P2 et P3 : 40 + 20 × 0,60 / 0,70 = **57,14 m**. *(3 pts)*

### Partie B — Raccordement (5 pts)
3. Δp = 1,0 − (− 1,5) = **2,5 %** ; longueur L = R × Δp = 2 000 × 0,025 = **50 m** ; tangente T = **25 m** (de 35 à 85 m). *(3 pts)*
4. $$ f = T² / (2 R) = 25² / 4 000 = 0,156 m
   Projet en P3 : 49,20 − 0,156 = **49,044 m** → P3 passe de R 0,10 à **D 0,056** : le point de passage se déplace et le volume de remblai diminue. *(2 pts)*

### Partie C — Profils en travers (5 pts)
5. S = (l + n h) h = (8,00 + 1 × 0,60) × 0,60 = **5,16 m²**. *(2 pts)*
6. S = (8,00 + 1,5 × 0,50) × 0,50 = **4,38 m²**. *(2 pts)*
7. Un remblai rapporté est moins compact et moins cohérent que le terrain en place : il lui faut une pente plus faible pour rester stable. *(1 pt)*

### Partie D — Synthèse (2 pts)
8. Le projet est surtout en remblai en fin de tracé : abaisser la seconde déclivité (par exemple − 2 % après P3) ou abaisser légèrement le départ réduirait les remblais en utilisant les déblais de P1-P2 (tout en gardant une pente minimale de 0,5 % pour l'écoulement des eaux). *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer l'altitude projet après P3 depuis P0 avec la seconde pente.
> - Oublier le raccordement : les altitudes en sommet de côte sont fausses de plusieurs centimètres.
> - Utiliser la pente du talus de déblai pour le remblai.`},
 exercices:[
  {t:"Compléter un profil en long", d:2, e:`Une voie part du profil P0 (projet 30,00 m) avec une pente de − 1,5 %. Profils tous les 25 m. TN : P0 30,35 ; P1 29,90 ; P2 29,10 ; P3 28,95. Calculer les cotes projet et les hauteurs de déblai ou remblai.`, c:`Projet : P0 30,000 ; P1 29,625 ; P2 29,250 ; P3 28,875.
Hauteurs : **P0 D 0,35** ; **P1 D 0,275** ; **P2 R 0,15** ; **P3 D 0,075**.`},
  {t:"Points de passage", d:2, e:`Pour l'exercice précédent, calculer la position des points de passage.`, c:`Entre P1 (D 0,275) et P2 (R 0,15) : x = 25 × 0,275 / 0,425 = 16,18 m → **41,18 m** du départ.
Entre P2 (R 0,15) et P3 (D 0,075) : x = 25 × 0,15 / 0,225 = 16,67 m → **66,67 m** du départ.`},
  {t:"Surface d'un profil en déblai", d:2, e:`Un profil en travers est en déblai : plateforme de 9 m, profondeur de déblai 0,80 m (terrain plat), talus à 1/1. Calculer la surface de déblai.`, c:`Largeur en tête : 9 + 2 × 0,80 = 10,60 m. **S = (9 + 10,60) / 2 × 0,80 = 7,84 m²**.`},
  {t:"Choisir une pente de projet", d:3, e:`Une voie doit relier A (TN 45,20) à B (TN 47,80) distants de 120 m. On souhaite rester au plus près du terrain naturel, avec une pente unique et des cotes projet égales au TN en A et en B.
1. Calculer la pente.
2. Le TN à 60 m vaut 47,10 m : quelle est la hauteur de déblai ou de remblai en ce point ?
3. Que proposer si l'on veut limiter les terrassements ?`, c:`1. **p = (47,80 − 45,20) / 120 = 2,17 %**.
2. Projet à 60 m : 45,20 + 0,0217 × 60 = **46,50 m** → h = 47,10 − 46,50 = **D 0,60 m**.
3. Le terrain présente une bosse : on peut introduire **deux déclivités** (par exemple + 3 % puis + 1,3 %) raccordées par un arc saillant, pour suivre le relief et réduire le déblai, en restant dans les pentes et rayons admissibles.`}
 ],
 quiz:[
  {q:"La ligne rouge d'un profil en long représente :", o:["Le terrain naturel","Le projet","Les réseaux existants","La nappe"], r:1, e:"La ligne de projet."},
  {q:"Si ZTN > Zprojet, le point est en :", o:["Remblai","Déblai","Passage","Talus"], r:1, e:"Il faut enlever de la terre."},
  {q:"Le dévers transversal courant d'une chaussée vaut :", o:["0 %","2,5 %","10 %","25 %"], r:1, e:"Pour évacuer l'eau de pluie."},
  {q:"Les talus de remblai sont souvent réglés à :", o:["1/1","3/2","1/10","Vertical"], r:1, e:"3 horizontal pour 2 vertical."},
  {q:"Un point de passage est le point où :", o:["La pente change","La ligne rouge coupe le terrain naturel","Un regard est placé","Le profil commence"], r:1, e:"Passage du déblai au remblai."}
 ]},

{id:"topo-9", niv:3, titre:"Polygonation : cheminement, fermetures et compensation", duree:80, contenu:`## À quoi sert une polygonale ?
Une **polygonale** (ou cheminement planimétrique) est une suite de stations A, B, C… reliées par des visées dont on mesure les **angles** et les **distances**. Elle sert à créer un **canevas** de points de coordonnées connues sur un chantier ou un lotissement, à partir desquels on lève les détails et on implante les ouvrages.
- **Cheminement fermé** : il revient à son point de départ (contrôle interne) ;
- **cheminement encadré** : il part d'un point connu et arrive sur un autre point connu, avec des orientations connues aux deux bouts (meilleur contrôle) ;
- **cheminement ouvert** : sans contrôle, à éviter.

## Étape 1 : la fermeture angulaire
Pour un polygone fermé de n sommets parcouru de façon à mesurer les angles **intérieurs** :
$$ Σ angles intérieurs théorique = (n − 2) × 200 gon      fermeture fa = Σ mesurée − Σ théorique
(Si l'on mesure les angles extérieurs : (n + 2) × 200 gon.) On compare fa à la tolérance (par exemple T = 2,7 × σ × √n, avec σ ≈ 1,5 mgon pour un théodolite de chantier) ; si elle est acceptée, on répartit **− fa / n** sur chaque angle.

## Étape 2 : les gisements
À partir du gisement de départ, on transmet de station en station :
$$ Gsuivant = Gprécédent + angle compensé − 200   (± 400)
Contrôle : en revenant au départ, on doit retrouver exactement le gisement initial.

## Étape 3 : les projections et la fermeture planimétrique
Pour chaque côté de longueur D et de gisement G : **ΔX = D sin G** et **ΔY = D cos G**. Pour un cheminement fermé, on doit avoir ΣΔX = 0 et ΣΔY = 0. Les écarts fx et fy donnent la **fermeture linéaire** :
$$ f = √(fx² + fy²)      précision relative = f / L   (L : longueur totale)
Tolérance courante : 1/5 000 à 1/10 000 pour un canevas de chantier.

## Étape 4 : la compensation (proportionnelle aux longueurs)
On répartit les écarts proportionnellement à la longueur des côtés (méthode de Bowditch) :
$$ cX = − fx × D / L      cY = − fy × D / L
puis on calcule les coordonnées de proche en proche.

> [!exemple] Polygonale fermée ABCD
> Départ : A (1 000,000 ; 1 000,000), gisement de départ GAB = 148,7024 gon (orientation connue).
> | Station | Angle mesuré | Angle compensé | Côté | Gisement | Distance |
> |---|---|---|---|---|---|
> | A | 92,2355 | 92,2345 | AB | 148,7024 | 100,273 |
> | B | 109,9569 | 109,9559 | BC | 58,6583 | 98,508 |
> | C | 93,4153 | 93,4143 | CD | 352,0726 | 103,150 |
> | D | 104,3963 | 104,3953 | DA | 256,4679 | 103,536 |
> | Σ | 400,0040 | 400,0000 | | | 405,467 |
> fa = + 4,0 mgon ; tolérance 2,7 × 1,5 × √4 = 8,1 mgon ✔ ; correction − 1,0 mgon par angle. Contrôle : GDA + angle A − 200 = 256,4679 + 92,2345 − 200 = 148,7024 = GAB ✔.
> | Côté | ΔX | ΔY | cX | cY |
> |---|---|---|---|---|
> | AB | + 72,334 | − 69,444 | − 0,002 | + 0,003 |
> | BC | + 78,457 | + 59,568 | − 0,002 | + 0,002 |
> | CD | − 70,525 | + 75,274 | − 0,002 | + 0,003 |
> | DA | − 80,259 | − 65,408 | − 0,002 | + 0,003 |
> | Σ | fx = + 0,007 | fy = − 0,010 | | |
> f = √(0,007² + 0,010²) = **12 mm** pour 405 m, soit **1/32 700** ✔.
> Coordonnées compensées : **B (1 072,332 ; 930,559)**, **C (1 150,787 ; 990,129)**, **D (1 080,261 ; 1 065,406)**, retour sur A (1 000,000 ; 1 000,000) ✔.

> [!retenir]
> - Σ angles intérieurs = (n − 2) × 200 gon ; compenser − fa / n.
> - Transmission : G = Gprécédent + angle − 200 ; contrôle sur le gisement de départ.
> - ΔX = D sin G, ΔY = D cos G ; f = √(fx² + fy²) ; précision f / L.
> - Compensation proportionnelle aux longueurs : cX = − fx D / L.`,
 sujet:{titre:"Polygonale fermée d'un canevas : fermetures, compensation et coordonnées", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Pour lever et implanter une cité universitaire à Korhogo, vous créez un canevas de quatre stations A, B, C, D par une polygonale fermée.

**Données**
- **A (1 000,000 ; 1 000,000)** ; gisement de départ connu **GAB = 126,4191 gon** ;
- Angles intérieurs mesurés (gon) : **A = 103,0902** ; **B = 92,8098** ; **C = 101,3863** ; **D = 102,7165** ;
- Distances horizontales : **AB = 93,254 m** ; **BC = 92,564 m** ; **CD = 87,239 m** ; **DA = 84,110 m** ;
- Tolérance angulaire : **T = 2,7 × 1,5 mgon × √n** ; tolérance planimétrique : **1/5 000**.

### Partie A — Fermeture angulaire (5 points)
1. Calculer la somme théorique et la fermeture angulaire. (2 pts)
2. Comparer à la tolérance et compenser les angles. (3 pts)

### Partie B — Gisements (4 points)
3. Calculer les gisements GBC, GCD et GDA, et contrôler en revenant à GAB. (4 pts)

### Partie C — Fermeture planimétrique (6 points)
4. Calculer les projections ΔX et ΔY de chaque côté. (4 pts)
5. Calculer fx, fy, la fermeture linéaire f et la précision relative. Conclure. (2 pts)

### Partie D — Compensation et coordonnées (5 points)
6. Répartir les écarts proportionnellement aux longueurs (Bowditch). (3 pts)
7. Calculer les coordonnées compensées de B, C et D et vérifier le retour sur A. (2 pts)`,
  corrige:`### Partie A — Fermeture angulaire (5 pts)
1. Théorique : (4 − 2) × 200 = **400 gon** ; mesurée : **400,0028** → **fa = + 2,8 mgon**. *(2 pts)*
2. T = 2,7 × 1,5 × √4 = **8,1 mgon** → acceptée ; correction **− 0,7 mgon** par angle : A **103,0895** ; B **92,8091** ; C **101,3856** ; D **102,7158** (somme 400,0000). *(3 pts)*

### Partie B — Gisements (4 pts)
3. G suivant = G précédent + angle − 200 : *(4 pts)*
   - GBC = 126,4191 + 92,8091 − 200 = **19,2282** ;
   - GCD = 19,2282 + 101,3856 − 200 + 400 = **320,6138** ;
   - GDA = 320,6138 + 102,7158 − 200 = **223,3296** ;
   - contrôle : 223,3296 + 103,0895 − 200 = **126,4191** = GAB ✔.

### Partie C — Fermeture planimétrique (6 pts)
4. ΔX = D sin G ; ΔY = D cos G : *(4 pts)*

| Côté | ΔX | ΔY |
|---|---|---|
| AB | + 85,339 | − 37,598 |
| BC | + 27,535 | + 88,374 |
| CD | − 82,705 | + 27,757 |
| DA | − 30,138 | − 78,525 |
| **Σ** | **+ 0,031** | **+ 0,008** |

5. f = √(0,031² + 0,008²) = **0,032 m** pour L = 357,167 m → **1 / 11 160**, meilleur que 1/5 000 : accepté. *(2 pts)*

### Partie D — Compensation (5 pts)
6. cX = − 0,031 × D / L ; cY = − 0,008 × D / L → AB : − 8 / − 2 mm ; BC : − 8 / − 2 ; CD : − 8 / − 2 ; DA : − 7 / − 2 mm. *(3 pts)*
7. **B (1 085,331 ; 962,400)** ; **C (1 112,858 ; 1 050,772)** ; **D (1 030,145 ; 1 078,527)** ; retour **A (1 000,000 ; 1 000,000)** ✔. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer les gisements avec les angles non compensés : le gisement final ne referme pas.
> - Répartir fx et fy à parts égales sans tenir compte des longueurs.
> - Compenser une fermeture hors tolérance au lieu de chercher la faute.`},
 exercices:[
  {t:"Fermeture angulaire", d:1, e:`Une polygonale fermée de 5 sommets donne des angles intérieurs : 108,4520 ; 121,3360 ; 96,7845 ; 110,2215 ; 163,2100 gon. Calculer la fermeture angulaire et la correction à appliquer à chaque angle (tolérance : 10 mgon).`, c:`Σ théorique = (5 − 2) × 200 = **600 gon**. Σ mesurée = 108,4520 + 121,3360 + 96,7845 + 110,2215 + 163,2100 = **600,0040 gon**.
**fa = + 4,0 mgon ≤ 10 mgon** ✔ → correction **− 0,8 mgon** par angle.`},
  {t:"Transmission des gisements", d:2, e:`Polygonale A, B, C, D, E (fermée). GAB = 72,1500 gon. Angles compensés : B = 132,4600 ; C = 95,2200 ; D = 118,6100 ; E = 105,4400 ; A = 148,2700 gon. Calculer les gisements successifs et vérifier le retour sur GAB.`, c:`GBC = 72,1500 + 132,4600 − 200 = **4,6100** ; GCD = 4,6100 + 95,2200 − 200 = − 100,1700 + 400 = **299,8300** ; GDE = 299,8300 + 118,6100 − 200 = **218,4400** ; GEA = 218,4400 + 105,4400 − 200 = **123,8800** ; contrôle : GAB = 123,8800 + 148,2700 − 200 = **72,1500** ✔ (Σ des angles = 600 gon).`},
  {t:"Fermeture planimétrique", d:2, e:`Sur une polygonale fermée de 640 m, on obtient ΣΔX = + 0,048 m et ΣΔY = − 0,036 m.
1. Calculer la fermeture linéaire et la précision relative.
2. La tolérance est de 1/10 000 : la polygonale est-elle acceptée ?
3. Calculer les corrections du côté AB de 152 m.`, c:`1. **f = √(0,048² + 0,036²) = 0,060 m** ; précision : 0,060 / 640 = **1/10 667**.
2. 1/10 667 est meilleur que 1/10 000 → **acceptée**.
3. cX = − 0,048 × 152 / 640 = **− 0,0114 m** ; cY = + 0,036 × 152 / 640 = **+ 0,0086 m**.`},
  {t:"Coordonnées d'un cheminement", d:3, e:`Depuis A (500,000 ; 500,000), on parcourt AB : G = 85,4000 gon, D = 64,210 m ; puis BC : G = 152,8000 gon, D = 48,730 m. Calculer les coordonnées de B et C (sans compensation).`, c:`AB : ΔX = 64,210 × sin(85,4) = **+ 62,529** ; ΔY = 64,210 × cos(85,4) = **+ 14,597** → **B (562,529 ; 514,597)**.
BC : ΔX = 48,730 × sin(152,8) = **+ 32,909** ; ΔY = 48,730 × cos(152,8) = **− 35,939** → **C (595,438 ; 478,658)**.`}
 ],
 quiz:[
  {q:"La somme des angles intérieurs d'un polygone de 6 sommets vaut :", o:["600 gon","800 gon","1 200 gon","400 gon"], r:1, e:"(6 − 2) × 200 = 800 gon."},
  {q:"La fermeture angulaire se répartit :", o:["Sur le premier angle","Également sur tous les angles","Proportionnellement aux distances","On l'ignore"], r:1, e:"− fa / n sur chaque angle."},
  {q:"La fermeture planimétrique se compense :", o:["Également sur chaque côté","Proportionnellement aux longueurs des côtés","Sur le dernier côté","Sur les angles"], r:1, e:"Méthode de Bowditch."},
  {q:"Une précision de 1/20 000 sur 400 m correspond à une fermeture de :", o:["2 cm","2 mm","20 cm","4 cm"], r:0, e:"400 / 20 000 = 0,02 m."},
  {q:"Le cheminement offrant le meilleur contrôle est :", o:["Ouvert","Encadré","Rayonné","Aucun"], r:1, e:"Il part et arrive sur des points et orientations connus."}
 ]},

{id:"topo-16", niv:3, titre:"Tachéométrie et levé de détails à la station totale", duree:60, contenu:`## Le levé de détails
Une fois le canevas établi (polygonale, bornes), on **lève** tous les détails utiles : limites, bâtiments, murs, arbres, poteaux, regards, bordures, talus, points du terrain pour les courbes de niveau. La méthode la plus courante est le **rayonnement** depuis une station de coordonnées connues : c'est la **tachéométrie**.

## Les mesures et les formules
Pour chaque point visé, la station totale enregistre : la lecture horizontale Hz (transformée en gisement grâce à l'orientation), la **distance inclinée** Di et l'**angle zénithal** V. On note hi la hauteur de l'instrument et hp la hauteur du prisme.
$$ Dh = Di × sin V      ΔZ = Di × cos V + hi − hp
$$ XP = XS + Dh × sin G      YP = YS + Dh × cos G      ZP = ZS + ΔZ

> [!exemple] Trois points levés
> Station S (500,000 ; 800,000 ; Z = 45,320), hi = 1,560 m, orientée de façon que Hz = gisement.
> | Point | Hz (gon) | Di (m) | V (gon) | hp | Dh | ΔZ | X | Y | Z |
> |---|---|---|---|---|---|---|---|---|---|
> | 1 | 75,4320 | 42,385 | 98,2150 | 1,800 | 42,368 | + 0,948 | 539,252 | 815,948 | 46,268 |
> | 2 | 132,0870 | 65,920 | 101,4560 | 1,800 | 65,903 | − 1,748 | 557,708 | 768,172 | 43,572 |
> | 3 | 310,2500 | 28,140 | 96,8800 | 1,500 | 28,106 | + 1,439 | 472,257 | 804,506 | 46,759 |

## L'organisation sur le terrain
- **Croquis de levé** soigné et **codification** des points (B = bâtiment, AR = arbre, RG = regard…) pour que le dessin se fasse automatiquement dans le logiciel ;
- densité de points adaptée au relief (plus serrée sur les talus et les ruptures de pente) ;
- **contrôle** : visées de fermeture sur un point connu en fin de station, points communs entre deux stations ;
- prisme sur canne **verticale** (nivelle de canne), hauteur de prisme bien notée à chaque changement.

## La station libre
Quand aucun point connu n'est accessible pour s'y mettre en station, on se place **n'importe où** et l'on vise au moins **deux ou trois points connus** : l'appareil calcule sa position et son orientation (calcul de « relèvement » avec distances), avec un résidu qui sert de contrôle. C'est la méthode courante sur les chantiers urbains.

## Du levé au plan
Les points sont transférés dans un logiciel de topographie ou de DAO : tracé des détails à partir des codes, **modèle numérique de terrain** (triangulation des points), génération automatique des **courbes de niveau**, profils et calculs de volumes.

> [!retenir]
> - Dh = Di sin V ; ΔZ = Di cos V + hi − hp.
> - Rayonnement : X = XS + Dh sin G ; Y = YS + Dh cos G.
> - Croquis + codification + contrôles sur points connus.
> - Station libre : position calculée depuis plusieurs points connus.`,
 sujet:{titre:"Levé de détails à la station totale : coordonnées et altitudes de quatre points", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Levé de l'existant d'une parcelle à Riviera avant un projet d'immeuble. Vous dépouillez les mesures d'une station totale.

**Données**
- Station **S (500,000 ; 300,000)**, **ZS = 25,430 m**, hauteur d'instrument **hi = 1,560 m** ;
- Référence **R (565,000 ; 345,000)** : l'appareil est orienté de façon que les lectures Hz soient des **gisements** ;
- Fermeture en fin de station sur R : écart **1,5 mgon** ;
- Observations :

| Point | Code | Hz (gon) | Di (m) | V (gon) | hp (m) |
|---|---|---|---|---|---|
| 1 | angle de bâtiment | 42,3150 | 38,612 | 97,8540 | 1,500 |
| 2 | regard | 118,7620 | 52,374 | 101,2380 | 1,800 |
| 3 | arbre | 245,0310 | 27,905 | 99,1200 | 1,500 |
| 4 | borne | 352,6480 | 61,240 | 98,6650 | 2,000 |

### Partie A — Orientation (4 points)
1. Calculer le gisement GSR qu'on affiche sur R pour orienter l'appareil. (2 pts)
2. Que signifie l'écart de fermeture de 1,5 mgon et comment l'interpréter ? (2 pts)

### Partie B — Calculs (12 points)
3. Calculer pour chaque point la distance horizontale et la dénivelée (avec hi et hp). (6 pts)
4. Calculer les coordonnées X, Y et l'altitude Z de chaque point. (6 pts)

### Partie C — Organisation (4 points)
5. À quoi servent le croquis et la codification des points ? (2 pts)
6. Pour le point 3, le porte-prisme a en réalité allongé la canne à 2,000 m, mais la hauteur saisie est restée 1,500 m. Quelle erreur sur Z3 ? Comment l'éviter ? (2 pts)`,
  corrige:`### Partie A — Orientation (4 pts)
1. ΔX = 65, ΔY = 45 → **GSR = arctan(65 / 45) = 61,4498 gon**. *(2 pts)*
2. L'appareil a très peu tourné pendant la station (embase, trépied au soleil) : 1,5 mgon est négligeable pour des visées de 60 m (1,4 mm) ; un écart important obligerait à refaire la station. *(2 pts)*

### Partie B — Calculs (12 pts)
3. et 4. Dh = Di sin V ; ΔZ = Di cos V + hi − hp ; X = XS + Dh sin Hz ; Y = YS + Dh cos Hz. *(12 pts)*

| Point | Dh | Di cos V | ΔZ | X | Y | Z |
|---|---|---|---|---|---|---|
| 1 | 38,590 | + 1,301 | + 1,361 | 523,803 | 330,375 | 26,791 |
| 2 | 52,364 | − 1,018 | − 1,258 | 550,106 | 284,790 | 24,172 |
| 3 | 27,902 | + 0,386 | + 0,446 | 481,869 | 278,792 | 25,876 |
| 4 | 61,227 | + 1,284 | + 0,844 | 458,544 | 345,057 | 26,274 |

### Partie C — Organisation (4 pts)
5. Le croquis indique la nature et les liaisons des points (qui est relié à qui) ; le code permet au logiciel de dessiner automatiquement (calques, symboles) et évite les confusions. *(2 pts)*
6. Le calcul retranche 1,500 au lieu de 2,000 : Z3 calculé est **trop haut de 0,50 m** (vrai Z3 = 25,376 m). Annoncer et saisir chaque changement de hauteur de prisme, et viser régulièrement un point de contrôle. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier hi − hp dans la dénivelée.
> - Utiliser la distance inclinée dans le calcul des coordonnées.
> - Inverser sin et cos (X avec le sinus du gisement, Y avec le cosinus).`},
 exercices:[
  {t:"Calculer un point levé", d:2, e:`Station S (1 200,000 ; 2 300,000 ; 18,450), hi = 1,520. Point P : gisement 245,6800 gon, Di = 54,320 m, V = 103,2100 gon, hp = 1,700. Calculer les coordonnées et l'altitude de P.`, c:`Dh = 54,320 × sin(103,2100) = **54,251 m** ; Di cos V = **− 2,738 m** ; ΔZ = − 2,738 + 1,520 − 1,700 = **− 2,918 m**.
XP = 1 200,000 + 54,251 × sin(245,68) = **1 164,328** ; YP = 2 300,000 + 54,251 × cos(245,68) = **2 259,126** ; **ZP = 15,532 m**.`},
  {t:"Hauteur de prisme oubliée", d:1, e:`Un aide a relevé la canne du prisme de 1,50 m à 2,50 m pour viser au-dessus d'une haie, sans prévenir l'opérateur, qui a laissé hp = 1,50 dans l'appareil. Quelle erreur commet-on sur l'altitude des points levés ensuite ? Sur leur position en plan ?`, c:`ΔZ = Di cos V + hi − hp : l'appareil soustrait 1,50 au lieu de 2,50 → les altitudes sont **trop hautes de 1,00 m**. La position en plan n'est presque pas affectée (Dh change très peu). C'est une **faute** grave pour les courbes de niveau et les cubatures : il faut toujours annoncer et noter chaque changement de hauteur de prisme.`},
  {t:"Contrôle de station", d:2, e:`Après avoir levé 80 points, l'opérateur vise à nouveau la borne d'orientation R (gisement théorique 0,0000 gon) et lit Hz = 0,0085 gon. La plus longue visée mesurait 120 m. Quelle erreur maximale cela peut-il représenter sur les points levés ? Que faire ?`, c:`L'appareil a tourné de 8,5 mgon pendant la station. Erreur transversale à 120 m : 120 × 0,0085 × π/200 = **0,016 m = 1,6 cm**.
Pour un levé à petite échelle (1/500), c'est acceptable ; pour une implantation ou un levé de précision, il faut **refaire l'orientation** et lever à nouveau les points mesurés après le dernier contrôle, et vérifier la stabilité du trépied (soleil, sol meuble).`}
 ],
 quiz:[
  {q:"La dénivelée entre le sol de la station et le point visé vaut :", o:["Di cos V","Di cos V + hi − hp","Di sin V","hi − hp"], r:1, e:"On tient compte des hauteurs d'instrument et de prisme."},
  {q:"La station libre consiste à :", o:["Se mettre sur un point connu","Se placer n'importe où et viser plusieurs points connus","Ne pas orienter l'appareil","Lever sans prisme"], r:1, e:"L'appareil calcule sa position."},
  {q:"La codification des points sert à :", o:["Décorer le croquis","Dessiner automatiquement les détails dans le logiciel","Calculer les distances","Remplacer les mesures"], r:1, e:"Chaque code correspond à un type de détail."},
  {q:"En tachéométrie, on vérifie en fin de station :", o:["La batterie seulement","L'orientation sur un point connu","La météo","Le nombre de points"], r:1, e:"Pour détecter un mouvement de l'appareil."},
  {q:"Un modèle numérique de terrain permet de :", o:["Calculer les salaires","Générer courbes de niveau, profils et volumes","Implanter les poteaux","Remplacer le nivellement"], r:1, e:"Triangulation des points levés."}
 ]},

{id:"topo-17", niv:3, titre:"Intersection, relèvement et densification du canevas", duree:50, contenu:`## Calculer un point sans y aller : l'intersection
On veut les coordonnées d'un point P **inaccessible** ou éloigné (sommet d'un château d'eau, antenne, borne de l'autre côté d'une rivière). Depuis deux points connus A et B, on mesure les angles vers P :
- en A, l'angle entre la direction AB et la direction AP ;
- en B, l'angle entre la direction BA et la direction BP.
On en déduit les gisements GAP et GBP, puis P comme intersection des deux droites :
$$ YP = (XB − XA + YA × tan GAP − YB × tan GBP) / (tan GAP − tan GBP)      XP = XA + (YP − YA) × tan GAP

> [!exemple] Intersection d'un repère sur un château d'eau
> A (200,000 ; 300,000), B (350,000 ; 310,000) : GAB = 95,7621 gon, GBA = 295,7621 gon.
> Angle mesuré en A (de P vers B) : 62,1439 gon → GAP = 95,7621 − 62,1439 = **33,6182 gon** (tan = 0,58333).
> Angle mesuré en B (de A vers P) : 64,2074 gon → GBP = 295,7621 + 64,2074 = **359,9695 gon** (tan = − 0,72727).
> YP = (350 − 200 + 300 × 0,58333 − 310 × (− 0,72727)) / (0,58333 + 0,72727) = 549,45 / 1,31060 = **419,998** ≈ **420,000** ; XP = 200 + 120,000 × 0,58333 = **270,000**.

## La qualité d'une intersection
L'intersection est précise si les deux visées se coupent sous un angle proche de **100 gon** ; elle est mauvaise si l'angle en P est très aigu (droites presque parallèles). On ajoute une **troisième visée** depuis un autre point connu pour contrôler (le point doit être confirmé à quelques centimètres près).

## Le relèvement
Inversement, le **relèvement** permet de calculer la position d'une **station** inconnue à partir des angles mesurés vers trois points connus (problème de Pothenot). Aujourd'hui, la station totale fait ce calcul en **station libre**, avec en plus les distances, ce qui donne une solution surabondante et contrôlée. Attention au **cercle dangereux** : si la station est sur le cercle passant par les trois points visés, le problème est indéterminé.

## La densification d'un canevas
Sur un grand chantier (lotissement, route, usine), on organise les points en un **canevas hiérarchisé** :
1. quelques points de **référence** rattachés au système officiel (par GNSS) ;
2. une **polygonale principale** compensée entre ces points ;
3. des **points secondaires** (rayonnés, intersectés, polygonales secondaires) près des ouvrages ;
4. les **repères de nivellement** associés.
Chaque point est matérialisé durablement (borne, clou, plot béton), décrit par une **fiche signalétique** (croquis de repérage, coordonnées, photo).

> [!retenir]
> - Intersection : deux gisements depuis deux points connus → point inconnu ; angle en P proche de 100 gon.
> - Relèvement / station libre : position de la station à partir de points connus.
> - Toujours une visée de contrôle supplémentaire.
> - Canevas hiérarchisé, bornes matérialisées, fiches signalétiques.`,
 sujet:{titre:"Intersection d'un point inaccessible et contrôle par une troisième visée", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Pour rattacher un chantier de pont à Tiassalé, il faut les coordonnées d'un repère P peint sur un château d'eau inaccessible. Vous l'observez depuis deux bornes connues A et B, puis depuis une troisième borne C.

**Données** (m, gon)
- **A (1 200,000 ; 2 500,000)** ; **B (1 450,000 ; 2 480,000)** ; **C (1 180,000 ; 2 760,000)** ;
- En A : angle horaire de P vers B : **α = 65,2625 gon** ;
- En B : angle horaire de A vers P : **β = 60,5137 gon** ;
- En C (appareil orienté en gisements) : lecture vers P : **GCP = 131,1917 gon**.

Formules : YP = (XB − XA + YA tan GAP − YB tan GBP) / (tan GAP − tan GBP) ; XP = XA + (YP − YA) tan GAP.

### Partie A — Gisements (6 points)
1. Calculer GAB, GBA et la distance AB. (3 pts)
2. En déduire GAP et GBP (faire un croquis). (3 pts)

### Partie B — Intersection (8 points)
3. Calculer tan GAP et tan GBP. (2 pts)
4. Calculer les coordonnées de P. (4 pts)
5. Calculer l'angle d'intersection en P. La configuration est-elle bonne ? (2 pts)

### Partie C — Contrôle (4 points)
6. Vérifier que P est sur la visée issue de C. (3 pts)
7. Pourquoi une troisième visée est-elle indispensable ? (1 pt)

### Partie D — Relèvement (2 points)
8. Expliquer la différence entre intersection et relèvement, et le piège du « cercle dangereux ». (2 pts)`,
  corrige:`### Partie A — Gisements (6 pts)
1. ΔX = 250, ΔY = − 20 → GAB = 200 − arctan(250 / 20) = **105,0821 gon** ; **GBA = 305,0821 gon** ; **AB = 250,799 m**. *(3 pts)*
2. P est au Nord de AB : GAP = GAB − α = **39,8196 gon** ; GBP = GBA + β = **365,5958 gon**. *(3 pts)*

### Partie B — Intersection (8 pts)
3. tan GAP = **0,72222** ; tan GBP = **− 0,60000**. *(2 pts)*
4. *(4 pts)*
$$ YP = (250 + 2 500 × 0,72222 − 2 480 × (− 0,60000)) / (0,72222 + 0,60000) = 3 543,56 / 1,32222 = 2 680,000
$$ XP = 1 200 + 180,000 × 0,72222 = 1 330,000
   → **P (1 330,000 ; 2 680,000)**.
5. Angle en P = 200 − α − β = 200 − 65,2625 − 60,5137 = **74,2238 gon** : visées bien sécantes (idéal vers 100 gon, à éviter sous 30 gon). *(2 pts)*

### Partie C — Contrôle (4 pts)
6. De C vers P : ΔX = 150, ΔY = − 80 → gisement = 200 − arctan(150 / 80) = **131,1917 gon** = lecture ✔ (P confirmé ; distance CP = 170,000 m). *(3 pts)*
7. Avec deux visées, une faute d'angle donne quand même un point, faux et non détecté : la troisième visée contrôle. *(1 pt)*

### Partie D — Relèvement (2 pts)
8. Intersection : on stationne sur des points **connus** pour déterminer un point **visé** ; relèvement : on stationne sur le point **inconnu** et on vise des points connus. Si la station est sur le cercle passant par les trois points visés, le relèvement est indéterminé (cercle dangereux). *(2 pts)*

> [!attention] Erreurs à éviter
> - Retrancher l'angle quand il faut l'ajouter : faire un croquis avec le Nord.
> - Garder trop peu de décimales dans les tangentes.
> - Accepter un point d'intersection sans visée de contrôle.`},
 exercices:[
  {t:"Gisements d'une intersection", d:1, e:`A (100,000 ; 100,000) et B (100,000 ; 200,000). Depuis A, on mesure l'angle BAP = 50,0000 gon (P à droite de AB, sens horaire depuis B). Depuis B, l'angle ABP = 50,0000 gon (sens trigonométrique depuis A). Calculer GAP et GBP puis les coordonnées de P.`, c:`GAB = 0 gon (B au nord de A) → **GAP = 0 + 50 = 50,0000 gon** (tan = 1).
GBA = 200 gon → P à l'est de BA : **GBP = 200 − 50 = 150,0000 gon** (tan = − 1).
YP = (100 − 100 + 100 × 1 − 200 × (− 1)) / (1 − (− 1)) = 300 / 2 = **150,000** ; XP = 100 + 50 × 1 = **150,000**.
P (150,000 ; 150,000) : triangle rectangle isocèle en P, cohérent avec les angles de 50 gon.`},
  {t:"Qualité géométrique", d:2, e:`Pour viser un point P situé à 800 m de deux points A et B distants seulement de 40 m, quel est l'angle d'intersection en P ? Cette intersection est-elle bonne ?`, c:`L'angle en P vaut environ AB / AP = 40 / 800 = 0,05 rad ≈ **3,2 gon** : les deux visées sont presque parallèles. Une petite erreur d'angle (quelques mgon) déplace P de plusieurs décimètres le long des visées : **intersection médiocre**. Il faut une base AB plus longue (idéalement du même ordre que la distance au point) pour obtenir un angle proche de 100 gon.`},
  {t:"Organiser un canevas", d:2, e:`Pour un lotissement de 40 ha en périphérie d'une ville, décrire l'organisation du canevas topographique, depuis le rattachement officiel jusqu'à l'implantation des lots.`, c:`1. **Rattachement** par GNSS (statique ou RTK) de 3 ou 4 points de référence bornés, répartis autour du site, dans le système officiel (UTM, WGS 84), avec un repère de nivellement rattaché.
2. **Polygonale principale** fermée ou encadrée entre ces points (stations totales), compensée, précision de 1/10 000 au moins.
3. **Points secondaires** près de chaque îlot (rayonnement, polygonales secondaires), bornés.
4. **Fiches signalétiques** de tous les points (coordonnées, croquis, photo).
5. **Implantation** des axes de voies et des bornes de lots par coordonnées depuis ces points, avec **contrôles** (distances entre bornes, diagonales des lots, visée sur un second point connu).`}
 ],
 quiz:[
  {q:"Une intersection permet :", o:["De mesurer une distance au ruban","De calculer un point inaccessible à partir de deux points connus","De niveler","De compenser une polygonale"], r:1, e:"Par deux gisements."},
  {q:"La meilleure intersection est obtenue quand les visées se coupent sous un angle proche de :", o:["10 gon","100 gon","200 gon","0 gon"], r:1, e:"Angle droit."},
  {q:"Le relèvement calcule :", o:["Un point visé","La position de la station","Une altitude","Une surface"], r:1, e:"À partir de points connus visés."},
  {q:"Le « cercle dangereux » concerne :", o:["Le nivellement","Le relèvement","Les courbes","Le GPS"], r:1, e:"Station sur le cercle des trois points : indéterminé."},
  {q:"Une fiche signalétique de point sert à :", o:["Retrouver et utiliser le point plus tard","Calculer la surface","Payer le géomètre","Rien"], r:0, e:"Croquis, coordonnées, photo."}
 ]},

{id:"topo-7", niv:3, titre:"GNSS (GPS) et systèmes de coordonnées", duree:55, contenu:`## Le principe du positionnement par satellites
Les **GNSS** (GPS américain, Galileo européen, GLONASS russe, BeiDou chinois) sont des constellations de satellites qui émettent en continu des signaux datés. Un récepteur mesure le **temps de parcours** des signaux de plusieurs satellites (au moins **4** : trois pour la position, un pour l'horloge du récepteur) et calcule sa position par **trilatération**.
| Mode | Matériel | Précision |
|---|---|---|
| Autonome (smartphone, GPS de randonnée) | un récepteur | 3 à 10 m |
| Différentiel (DGPS) | corrections d'une station de référence | 0,5 à 1 m |
| RTK (temps réel cinématique) | base + mobile (ou réseau de bases) avec liaison radio ou internet | 1 à 3 cm |
| Statique (post-traitement) | deux récepteurs ou plus pendant 30 min à quelques heures | quelques mm |
En topographie de chantier, on utilise le **RTK** pour lever et implanter rapidement, et le **statique** pour créer les points de référence.

## Les limites du GNSS
- Il faut un **ciel dégagé** : sous les arbres, près des immeubles ou dans les cours, la précision chute (masques, multitrajets) ;
- la composante **verticale** est environ deux fois moins précise que la position en plan ;
- l'altitude GNSS est une **hauteur ellipsoïdale** h, différente de l'**altitude** H utilisée en bâtiment : **H = h − N**, où N est l'ondulation du **géoïde** (surface proche du niveau moyen des mers), fournie par un modèle. Pour les niveaux d'un chantier, on contrôle toujours par **nivellement** depuis un repère.

## Les systèmes de coordonnées
- **WGS 84** : système mondial des GNSS (latitude, longitude, hauteur ellipsoïdale).
- **UTM** (Mercator transverse universelle) : projection qui transforme latitude et longitude en coordonnées planes **E** (Est) et **N** (Nord), en mètres. La Terre est découpée en **zones de 6°** de longitude. La Côte d'Ivoire est à cheval sur les zones **29** (méridien central 9° Ouest) et **30** (méridien central 3° Ouest) ; Abidjan est en zone **30 Nord**.
- Chaque zone a un **faux Est** de 500 000 m sur son méridien central et un **facteur d'échelle** de 0,9996 sur ce méridien.

## Distance « carte » et distance « terrain »
La projection déforme légèrement les distances. Le **facteur d'échelle** k varie avec l'éloignement du méridien central :
$$ k ≈ 0,9996 × (1 + (E − 500 000)² / (2 R²))      (R ≈ 6 381 km)
Distance sur la grille UTM = distance réelle (au niveau de l'ellipsoïde) × k.

> [!exemple] Correction d'échelle à Abidjan
> Point à E = 400 000 m : k = 0,9996 × (1 + 100 000² / (2 × 6 381 000²)) = **0,999 723**.
> Une distance réelle de 500,000 m mesure 500 × 0,999 723 = **499,861 m** sur la grille UTM : **14 cm** de différence ! Pour implanter un bâtiment, on travaille donc dans un **système local** (ou on applique le facteur d'échelle), sinon les distances implantées seraient fausses.

## Le RTK sur le chantier
- On installe une **base** sur un point connu (ou on se connecte à un **réseau de stations permanentes**) ; le **mobile** reçoit les corrections et donne sa position en temps réel ;
- on vérifie la solution (« **fixée** », et non « flottante ») et les indicateurs de précision ;
- on **contrôle** sur un point connu en début et en fin de séance ;
- on définit la **calibration** locale (passage du WGS 84 au système du chantier) sur plusieurs points connus.

> [!retenir]
> - Au moins 4 satellites ; RTK = 1 à 3 cm ; statique = mm.
> - Ciel dégagé nécessaire ; vertical moins précis ; H = h − N.
> - UTM zones 29 et 30 pour la Côte d'Ivoire ; faux Est 500 000 m ; k = 0,9996 au méridien central.
> - Distances UTM ≠ distances terrain : facteur d'échelle ou système local.`,
 sujet:{titre:"Lever au GNSS en RTK : zones UTM, facteur d'échelle et altitudes", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un bureau d'études lève au GNSS (RTK) une zone industrielle près d'Abidjan, puis un site à Man. On vous demande d'exploiter correctement les coordonnées.

**Données**
- Site 1 : longitude **4°01' Ouest** ; Est UTM moyen **E = 385 000 m** ;
- Site 2 (Man) : longitude **7°33' Ouest** ;
- Facteur d'échelle : k ≈ 0,9996 × (1 + (E − 500 000)² / (2 R²)), R = **6 381 km** ;
- Distance mesurée sur le terrain (ramenée à l'ellipsoïde) entre deux bornes du site 1 : **750,000 m** ;
- Point M : hauteur ellipsoïdale **h = 38,742 m** ; ondulation du géoïde fournie par le modèle : **N = 21,460 m** (valeur d'exercice) ;
- Le nivellement depuis un repère donne pour M : **H = 17,315 m**.

### Partie A — Principe (5 points)
1. Combien de satellites faut-il au minimum et pourquoi ? (2 pts)
2. Comparer les précisions des modes autonome, différentiel, RTK et statique, et dire lequel utiliser pour (a) lever un terrain, (b) créer les points de référence d'un grand chantier. (3 pts)

### Partie B — Projection UTM (7 points)
3. Déterminer la zone UTM et le méridien central de chaque site. (2 pts)
4. Calculer le facteur d'échelle au site 1. (2 pts)
5. Calculer la distance « grille » correspondant aux 750,000 m et l'écart. Conséquence pour l'implantation d'un bâtiment de 150 m ? (3 pts)

### Partie C — Altitudes (5 points)
6. Calculer l'altitude H de M à partir du GNSS. (2 pts)
7. Comparer avec le nivellement et conclure sur l'usage du GNSS pour les niveaux d'un bâtiment. (3 pts)

### Partie D — Bonnes pratiques RTK (3 points)
8. Citer trois vérifications à faire pendant une séance RTK. (3 pts)`,
  corrige:`### Partie A — Principe (5 pts)
1. **4 satellites** : trois inconnues de position (X, Y, Z) et une inconnue d'horloge du récepteur. *(2 pts)*
2. Autonome 3 à 10 m ; différentiel 0,5 à 1 m ; **RTK 1 à 3 cm** ; **statique** quelques mm. (a) lever : RTK ; (b) points de référence : statique (post-traitement). *(3 pts)*

### Partie B — UTM (7 pts)
3. Zones de 6° depuis 180° Ouest : 4°01' W est entre 6° W et 0° → **zone 30**, méridien central **3° W** ; 7°33' W est entre 12° W et 6° W → **zone 29**, méridien central **9° W**. *(2 pts)*
4. $$ k = 0,9996 × (1 + 115 000² / (2 × 6 381 000²)) = 0,999 762
   *(2 pts)*
5. 750,000 × 0,999 762 = **749,822 m** : **17,8 cm** d'écart. Sur 150 m : 150 × (1 − 0,999 762) = **3,6 cm** → inacceptable pour un bâtiment : on travaille en système local ou on corrige les distances du facteur d'échelle. *(3 pts)*

### Partie C — Altitudes (5 pts)
6. H = h − N = 38,742 − 21,460 = **17,282 m**. *(2 pts)*
7. Écart avec le nivellement : 17,315 − 17,282 = **3,3 cm** : normal pour la composante verticale RTK (2 à 5 cm) et l'incertitude du modèle de géoïde, mais trop grand pour les niveaux d'un bâtiment (tolérance de l'ordre du cm) : les niveaux se font **au niveau depuis un repère**. *(3 pts)*

### Partie D — RTK (3 pts)
8. Solution **fixée** (pas flottante) ; indicateurs de précision (PDOP, précision H et V affichées) ; contrôle sur un point connu en **début et fin** de séance ; hauteur de canne correcte ; calibration locale sur plusieurs points connus. *(3 pts)*

> [!attention] Erreurs à éviter
> - Implanter avec des distances UTM sans facteur d'échelle.
> - Confondre hauteur ellipsoïdale et altitude.
> - Travailler en solution flottante ou sous couvert d'arbres sans contrôle.`},
 exercices:[
  {t:"Choisir le mode GNSS", d:1, e:`Quel mode GNSS utiliser pour :
1. repérer approximativement un terrain à acheter ;
2. lever 300 points d'un terrain de 5 ha pour un plan au 1/500 ;
3. créer 4 points de référence pour un lotissement ;
4. implanter les poteaux d'un immeuble en centre-ville entre des bâtiments élevés ?`, c:`1. **Autonome** (smartphone) : quelques mètres suffisent.
2. **RTK** (1 à 3 cm, rapide).
3. **Statique** avec post-traitement (précision millimétrique).
4. Le GNSS est **mal adapté** (masques, multitrajets) : on préfère une **station totale** en station libre, rattachée à des points connus.`},
  {t:"Facteur d'échelle", d:2, e:`Un chantier se trouve à E = 620 000 m (UTM). Calculer le facteur d'échelle et la différence entre une distance réelle de 250 m et la même distance sur la grille.`, c:`k = 0,9996 × (1 + 120 000² / (2 × 6 381 000²)) = 0,9996 × 1,000 177 = **0,999 777**.
Distance grille : 250 × 0,999 777 = **249,944 m** → différence de **5,6 cm**. À implanter avec un facteur d'échelle ou dans un système local.`},
  {t:"Altitude GNSS et altitude de chantier", d:2, e:`Un récepteur GNSS donne au repère R une hauteur ellipsoïdale h = 63,215 m. Le modèle de géoïde donne N = 24,80 m à cet endroit. Quelle est l'altitude H du repère ? Pourquoi contrôler cette valeur par nivellement depuis un repère officiel ?`, c:`**H = h − N = 63,215 − 24,80 = 38,415 m** (à quelques centimètres près, précision du modèle de géoïde).
Le GNSS est moins précis en vertical (2 à 5 cm en RTK) et le modèle de géoïde ajoute son incertitude : pour des pentes de canalisation ou des niveaux de plancher, on reste sur des **repères nivelés** et le nivellement direct.`}
 ],
 quiz:[
  {q:"Combien de satellites faut-il au minimum pour une position 3D ?", o:["2","3","4","10"], r:2, e:"Trois pour la position, un pour l'horloge du récepteur."},
  {q:"La précision du GNSS en RTK est de l'ordre de :", o:["10 m","1 m","1 à 3 cm","0,1 mm"], r:2, e:"Avec une base ou un réseau de corrections."},
  {q:"La Côte d'Ivoire est située dans les zones UTM :", o:["31 et 32","29 et 30","1 et 2","20 et 21"], r:1, e:"Abidjan est en zone 30 Nord."},
  {q:"Le faux Est d'une zone UTM vaut :", o:["0 m","100 000 m","500 000 m","1 000 000 m"], r:2, e:"Sur le méridien central."},
  {q:"L'altitude utilisée en bâtiment s'obtient à partir de la hauteur GNSS par :", o:["H = h + N","H = h − N","H = h","H = N − h"], r:1, e:"N : ondulation du géoïde."}
 ]},

{id:"topo-8", niv:3, titre:"Tracé routier : courbes circulaires et implantation", duree:70, contenu:`## Le tracé en plan d'une route
Le tracé en plan d'une route (ou d'une voie de lotissement, d'une voie ferrée, d'un canal) est composé d'**alignements droits** raccordés par des **courbes circulaires** (et, sur les routes rapides, par des **raccordements progressifs** ou clothoïdes qui introduisent la courbure et le dévers progressivement). On repère les points par leur **abscisse curviligne** (ou chaînage, kilométrage : 1 + 245,60 signifie 1 245,60 m depuis l'origine).

## Les éléments d'une courbe circulaire
Deux alignements se coupent au **sommet** S (PI) avec un **angle de déviation** Δ. Le cercle de rayon R tangent aux deux alignements les touche en **TC** (tangente-courbe) et **CT** (courbe-tangente).
| Élément | Formule |
|---|---|
| Tangente (S–TC = S–CT) | T = R × tan(Δ/2) |
| Développement de l'arc | D = R × Δ (Δ en radians = Δgon × π / 200) |
| Corde TC–CT | C = 2 R sin(Δ/2) |
| Flèche (milieu de l'arc → milieu de la corde) | f = R (1 − cos(Δ/2)) |
| Bissectrice (S → milieu de l'arc) | B = R (1/cos(Δ/2) − 1) |

> [!exemple] Courbe de rayon 150 m
> R = 150 m, Δ = 45 gon (Δ/2 = 22,5 gon).
> T = 150 × tan(22,5 gon) = **55,338 m** ; D = 150 × 45 × π / 200 = **106,029 m** ; C = **103,835 m** ; f = **9,271 m** ; B = **9,882 m**.
> Si le sommet est au chaînage 0 + 325,40 : **TC = 325,40 − 55,34 = 0 + 270,06** et **CT = 270,06 + 106,03 = 0 + 376,09** (on ajoute le développement, pas la tangente).

## Implanter la courbe
### Par abscisses et ordonnées sur la tangente
Depuis TC, pour un point de l'arc situé à la distance s (le long de l'arc), avec θ = s / R (en radians) :
$$ x = R sin θ   (le long de la tangente)      y = R (1 − cos θ)   (perpendiculairement, vers le centre)
### Par angles de déflexion (au théodolite)
En station sur TC, orienté sur S, on ouvre pour chaque point l'angle **θ/2** et on reporte la **corde** 2 R sin(θ/2) depuis TC (ou des cordes successives de point en point).

> [!exemple] Points tous les 20 m (R = 150 m)
> | s (m) | x (m) | y (m) | Déflexion θ/2 (gon) | Corde depuis TC (m) |
> |---|---|---|---|---|
> | 20 | 19,941 | 1,331 | 4,2441 | 19,985 |
> | 40 | 39,528 | 5,302 | 8,4883 | 39,882 |
> | 60 | 58,413 | 11,841 | 12,7324 | 59,601 |
> | 80 | 76,261 | 20,832 | 16,9765 | 79,055 |
> | 100 | 92,755 | 32,117 | 21,2207 | 98,158 |
> En pratique, on implante plutôt les points aux **chaînages ronds** (0 + 280, 0 + 300…) : le premier point est alors à s = 280 − 270,06 = 9,94 m de TC.

## Rayon minimal et dévers
En courbe, un véhicule est soumis à la force centrifuge ; on incline la chaussée vers l'intérieur (**dévers** d, jusqu'à 7 %) et on compte sur le frottement transversal f des pneus. Le rayon minimal pour une vitesse V (km/h) vaut environ :
$$ Rmin = V² / (127 × (d + f))
Exemple : V = 60 km/h, d = 7 %, f = 0,15 → Rmin = 3 600 / (127 × 0,22) ≈ **129 m**.

## Implantation moderne
Avec une station totale ou un GNSS RTK, on calcule les **coordonnées** de tous les points de l'axe (et des bords de chaussée) à partir du tracé, puis on les implante par coordonnées. Les formules ci-dessus restent indispensables pour **contrôler** les calculs et pour les petites courbes de lotissement implantées au ruban.

> [!retenir]
> - T = R tan(Δ/2) ; D = R Δ(rad) ; f = R(1 − cos Δ/2) ; C = 2R sin(Δ/2).
> - CT = TC + D (et non TC + 2T).
> - Abscisses-ordonnées : x = R sin θ, y = R(1 − cos θ), θ = s/R ; déflexion θ/2.
> - Rmin = V² / (127 (d + f)).`,
 sujet:{titre:"Courbe circulaire d'une route : éléments, chaînages et carnet d'implantation", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Sur la route d'accès à une carrière près de Bouaflé, deux alignements droits se coupent au sommet S, au chaînage **1 + 120,50**. On les raccorde par une courbe circulaire.

**Données**
- Rayon **R = 200 m** ; angle de déviation **Δ = 38,4000 gon** ;
- Points d'implantation aux chaînages ronds multiples de **20 m** ;
- Implantation par **angles de déflexion** depuis TC (station sur TC, orientation sur S) et cordes depuis TC.

### Partie A — Éléments de la courbe (7 points)
1. Calculer la tangente T, le développement D et la corde C. (4 pts)
2. Calculer la flèche f et la bissectrice B. (3 pts)

### Partie B — Chaînages (4 points)
3. Calculer les chaînages de TC et de CT. Pourquoi CT ≠ S + T ? (4 pts)

### Partie C — Carnet d'implantation (7 points)
4. Pour les points aux chaînages 1 + 060 à 1 + 160, calculer l'abscisse curviligne s depuis TC, l'angle de déflexion θ/2 (gon) et la corde depuis TC. (5 pts)
5. Calculer la déflexion et la corde pour CT ; quelle vérification permettent-elles ? (2 pts)

### Partie D — Méthode alternative (2 points)
6. Calculer les coordonnées x (sur la tangente) et y (perpendiculaire) du point 1 + 100 pour une implantation par abscisses et ordonnées. (2 pts)`,
  corrige:`### Partie A — Éléments (7 pts)
1. Δ/2 = 19,2 gon. *(4 pts)*
   - T = 200 × tan(19,2 gon) = **62,216 m** ;
   - D = 200 × 38,4 × π / 200 = **120,637 m** ;
   - C = 2 × 200 × sin(19,2 gon) = **118,817 m**.
2. f = 200 × (1 − cos 19,2) = **9,027 m** ; B = 200 × (1 / cos 19,2 − 1) = **9,454 m**. *(3 pts)*

### Partie B — Chaînages (4 pts)
3. **TC = 1 120,50 − 62,22 = 1 + 058,28** ; **CT = 1 058,28 + 120,64 = 1 + 178,92**. On roule sur l'arc, pas sur les deux tangentes : le chaînage se calcule avec le développement (CT est avant S + T = 1 + 182,72). *(4 pts)*

### Partie C — Carnet (7 pts)
4. θ = s / R ; déflexion θ/2 ; corde = 2 R sin(θ/2) : *(5 pts)*

| Chaînage | s (m) | θ/2 (gon) | Corde depuis TC (m) |
|---|---|---|---|
| 1 + 060 | 1,716 | 0,2732 | 1,716 |
| 1 + 080 | 21,716 | 3,4563 | 21,706 |
| 1 + 100 | 41,716 | 6,6394 | 41,641 |
| 1 + 120 | 61,716 | 9,8225 | 61,472 |
| 1 + 140 | 81,716 | 13,0056 | 81,149 |
| 1 + 160 | 101,716 | 16,1887 | 100,624 |

5. CT : s = 120,637 → θ/2 = **19,2000 gon** = Δ/2 et corde = **118,817 m** = C : le point implanté doit tomber exactement sur l'alignement de sortie (contrôle de tout le calcul). *(2 pts)*

### Partie D — Abscisses et ordonnées (2 pts)
6. θ = 41,716 / 200 = 0,20858 rad → x = 200 sin θ = **41,415 m** ; y = 200 (1 − cos θ) = **4,335 m**. *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer CT en ajoutant la tangente au lieu du développement.
> - Ouvrir l'angle θ au lieu de θ/2 depuis la tangente.
> - Calculatrice en degrés : Δ est en gon, le développement demande Δ en radians.`},
 exercices:[
  {t:"Éléments d'une courbe", d:1, e:`Courbe de rayon 200 m, angle de déviation 30 gon. Calculer T, D, C, f et B.`, c:`Δ/2 = 15 gon.
**T = 200 × tan(15 gon) = 48,016 m** ; **D = 200 × 30 × π/200 = 94,248 m** ; **C = 2 × 200 × sin(15 gon) = 93,378 m** ; **f = 200 × (1 − cos 15 gon) = 5,526 m** ; **B = 5,683 m**.`},
  {t:"Chaînage des points de tangence", d:1, e:`Pour la courbe de l'exercice précédent, le sommet est au chaînage 1 + 245,60. Calculer les chaînages de TC et CT.`, c:`**TC = 1 245,60 − 48,02 = 1 + 197,58** ; **CT = 1 197,58 + 94,25 = 1 + 291,83**.`},
  {t:"Implanter des points de la courbe", d:2, e:`Toujours avec R = 200 m, calculer les abscisses et ordonnées sur la tangente, depuis TC, des points situés à 20 m et 40 m de TC (le long de l'arc), ainsi que les angles de déflexion.`, c:`s = 20 : θ = 0,1 rad → **x = 19,967 m ; y = 0,999 m** ; déflexion **3,1831 gon**.
s = 40 : θ = 0,2 rad → **x = 39,734 m ; y = 3,987 m** ; déflexion **6,3662 gon**.`},
  {t:"Rayon minimal", d:2, e:`Une route doit être parcourue à 80 km/h. Avec un dévers maximal de 7 % et un coefficient de frottement transversal de 0,15, quel rayon minimal adopter ? Que faire si le site impose un rayon de 150 m ?`, c:`Rmin = 80² / (127 × 0,22) = 6 400 / 27,94 = **229 m**.
Avec 150 m, la vitesse sûre est V = √(127 × 0,22 × 150) ≈ **65 km/h** : il faut **limiter la vitesse** (signalisation) dans la courbe, ou modifier le tracé.`}
 ],
 quiz:[
  {q:"La longueur de tangente d'une courbe vaut :", o:["R tan Δ","R tan(Δ/2)","R Δ","2R sin Δ"], r:1, e:"Distance du sommet au point de tangence."},
  {q:"Le chaînage du point CT vaut :", o:["TC + 2T","TC + D (développement)","S + T","TC + C"], r:1, e:"On avance le long de l'arc."},
  {q:"L'angle de déflexion pour implanter un point à l'arc s vaut :", o:["s/R","s/(2R)","2s/R","R/s"], r:1, e:"La moitié de l'angle au centre."},
  {q:"Le dévers d'une chaussée en courbe sert à :", o:["Évacuer seulement l'eau","Compenser en partie la force centrifuge","Décorer","Réduire la largeur"], r:1, e:"La chaussée est inclinée vers l'intérieur."},
  {q:"Rmin augmente quand la vitesse :", o:["Diminue","Augmente","Ne change pas","Est nulle"], r:1, e:"Rmin = V² / (127 (d + f))."}
 ]},

{id:"topo-18", niv:3, titre:"Cubatures et mouvements des terres", duree:70, contenu:`## Pourquoi calculer les cubatures ?
Les **cubatures** (volumes de terrassement) déterminent le coût des terrassements, le nombre de camions, la durée des travaux et l'équilibre entre **déblais** et **remblais**. On les calcule à partir des profils en travers (ouvrages linéaires : routes, canaux) ou d'un **quadrillage** (plateformes, parkings).

## Méthode des profils en travers (moyenne des aires)
Entre deux profils de surfaces S1 et S2 (déblai ou remblai), distants de L :
$$ V = L × (S1 + S2) / 2
Le volume total est la somme des tranches. Quand on passe du déblai au remblai entre deux profils, on considère le **point de passage** (surface nulle) pour séparer les volumes. La formule du **prismatoïde** (Simpson) V = L/6 × (S1 + 4 Sm + S2) est plus exacte quand on connaît la section médiane Sm.

> [!exemple] Route en déblai et remblai
> Profils tous les 20 m : surfaces de déblai 4,2 ; 6,8 ; 2,1 ; 0 ; 0 m² et de remblai 0 ; 0 ; 1,5 ; 5,4 ; 7,9 m² (le profil P2 est mixte).
> Vdéblai = 20 × ((4,2 + 6,8)/2 + (6,8 + 2,1)/2 + (2,1 + 0)/2) = 20 × (5,5 + 4,45 + 1,05) = **220 m³**.
> Vremblai = 20 × ((0 + 1,5)/2 + (1,5 + 5,4)/2 + (5,4 + 7,9)/2) = 20 × (0,75 + 3,45 + 6,65) = **217 m³**.

## Méthode du quadrillage (plateformes)
On divise la surface en **carrés** de côté a (5, 10 ou 20 m) et on mesure aux nœuds la hauteur h à terrasser (h = ZTN − Zprojet). Un nœud est commun à 1, 2 ou 4 carrés : il compte 1, 2 ou 4 fois.
$$ V = (a² / 4) × (Σ h1 + 2 Σ h2 + 4 Σ h4)
(h1 : nœuds d'angle ; h2 : nœuds de bord ; h4 : nœuds intérieurs ; on fait le calcul séparément pour les déblais et les remblais, ou avec des hauteurs signées.)

> [!exemple] Plateforme de 30 × 20 m en déblai
> Carrés de 10 m (3 × 2 carrés, 12 nœuds). Hauteurs de déblai (m) :
> | | col. 1 | col. 2 | col. 3 | col. 4 |
> |---|---|---|---|---|
> | ligne 1 | 0,85 | 1,10 | 1,32 | 1,05 |
> | ligne 2 | 0,60 | 0,95 | 1,20 | 0,90 |
> | ligne 3 | 0,40 | 0,70 | 0,88 | 0,55 |
> Angles (×1) : 0,85 + 1,05 + 0,40 + 0,55 = 2,85 ; bords (×2) : 1,10 + 1,32 + 0,60 + 0,90 + 0,70 + 0,88 = 5,50 ; intérieurs (×4) : 0,95 + 1,20 = 2,15.
> V = (100 / 4) × (2,85 + 2 × 5,50 + 4 × 2,15) = 25 × 22,45 = **561 m³** (soit une hauteur moyenne de 0,94 m sur 600 m²).

## Niveau d'équilibre d'une plateforme
Pour que les déblais compensent les remblais (sans apport ni évacuation), on choisit un niveau projet égal à la **moyenne pondérée** des altitudes du terrain aux nœuds :
$$ Zéquilibre = Σ (w × ZTN) / Σ w      (w = 1, 2 ou 4)
(On l'ajuste ensuite pour tenir compte du foisonnement et du compactage.)

## Foisonnement et compactage
Un m³ de terre **en place** n'occupe pas le même volume une fois extrait (il « foisonne ») puis compacté :
| État | Volume relatif (terre ordinaire) |
|---|---|
| En place (déblai mesuré) | 1,00 |
| Foisonné (dans le camion) | 1,15 à 1,35 (latérite ≈ 1,25 ; roche jusqu'à 1,6) |
| Compacté en remblai | 0,85 à 0,95 |
> [!exemple] Suite de l'exemple de route
> 220 m³ de déblai en place donnent, avec un coefficient de compactage de 0,92, environ 220 × 0,92 = **202 m³** de remblai compacté : il manque 217 − 202 = **15 m³** à apporter. Le transport porte sur 220 × 1,25 = **275 m³ foisonnés**, soit 28 rotations de camions de 10 m³.

## Les mouvements des terres
Sur un chantier linéaire, on organise le transport des déblais vers les remblais voisins en minimisant les **distances de transport** (épure de Lalanne ou courbe des volumes cumulés) ; les excédents vont en **décharge**, les manques sont comblés par des **emprunts**.

> [!retenir]
> - Profils : V = L (S1 + S2)/2, tranche par tranche, en séparant déblais et remblais.
> - Quadrillage : V = a²/4 × (Σh1 + 2Σh2 + 4Σh4).
> - Niveau d'équilibre = moyenne pondérée des altitudes.
> - Foisonnement (≈ 1,25) pour le transport ; compactage (≈ 0,9) pour les remblais.`,
 sujet:{titre:"Cubatures d'une route : surface d'un profil, volumes et mouvement des terres", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Route d'accès à une usine à Bonoua. On calcule la surface d'un profil en travers, les volumes d'un tronçon en déblai, puis on organise le mouvement des terres.

**Données — profil P2** (repère local : x horizontal en travers, z vertical, plate-forme à z = 0)
- Plate-forme de **8,00 m** (x de − 4,00 à + 4,00) ; talus de déblai à **1/1** ;
- Terrain naturel en travers : **z = 1,20 + 0,05 x** (pente transversale de 5 %).

**Données — tronçon**
- Surfaces de déblai : P1 = **7,85 m²**, P2 = valeur calculée (arrondie à 11,11 m²), P3 = **6,40 m²** ; distances P1-P2 = P2-P3 = **25 m** ;
- Section médiane entre P1 et P2 (levée) : **Sm = 9,62 m²**.

**Données — mouvement des terres**
- Déblais de la section A (0 à 150 m) : **1 450 m³** en place ; remblais de la section B (300 à 450 m) : **1 200 m³** compactés ;
- 1 m³ de remblai compacté demande **1,10 m³** de déblai en place ; foisonnement **1,25** ;
- Prix : transport **500 F/m³ par 100 m** (hectomètre) de distance moyenne ; évacuation en décharge **3 500 F/m³** foisonné.

### Partie A — Surface du profil (7 points)
1. Calculer les points d'intersection des talus avec le terrain naturel. (4 pts)
2. Calculer la surface de déblai par la formule de Gauss. (3 pts)

### Partie B — Volumes (6 points)
3. Calculer le volume entre P1 et P2 par la moyenne des aires et par le prismatoïde ; comparer. (4 pts)
4. Calculer le volume entre P2 et P3 et le volume du tronçon (moyenne des aires). (2 pts)

### Partie C — Mouvement des terres (7 points)
5. Calculer le déblai réutilisé en remblai et l'excédent. (2 pts)
6. Calculer la distance moyenne de transport entre les sections A et B et le coût de ce transport. (3 pts)
7. Calculer le coût d'évacuation de l'excédent. Pourquoi cherche-t-on à équilibrer déblais et remblais ? (2 pts)`,
  corrige:`### Partie A — Surface (7 pts)
1. *(4 pts)*
   - Talus droit depuis (4 ; 0) : z = x − 4 ; avec le TN : x − 4 = 1,20 + 0,05 x → x = 5,2 / 0,95 = **5,474** ; z = **1,474** ;
   - Talus gauche depuis (− 4 ; 0) : z = − x − 4 ; − x − 4 = 1,20 + 0,05 x → x = − 5,2 / 1,05 = **− 4,952** ; z = **0,952**.
2. Polygone (− 4 ; 0), (4 ; 0), (5,474 ; 1,474), (− 4,952 ; 0,952) : *(3 pts)*
$$ 2S = |Σ (xi zi+1 − xi+1 zi)| = |0 + 5,895 + 12,511 + 3,810| = 22,216 → S = 11,11 m²

### Partie B — Volumes (6 pts)
3. Moyenne des aires : 25 × (7,85 + 11,11) / 2 = **237,0 m³** ; prismatoïde : 25 / 6 × (7,85 + 4 × 9,62 + 11,11) = **239,3 m³** ; écart **1 %** : la moyenne des aires suffit pour un avant-projet. *(4 pts)*
4. P2-P3 : 25 × (11,11 + 6,40) / 2 = **218,9 m³** → tronçon : **455,9 m³**. *(2 pts)*

### Partie C — Mouvement des terres (7 pts)
5. Réutilisé : 1 200 × 1,10 = **1 320 m³** en place ; excédent : 1 450 − 1 320 = **130 m³** en place. *(2 pts)*
6. Centres de gravité à 75 m et 375 m → distance moyenne **300 m = 3 hm** ; coût : 1 320 × 3 × 500 = **1 980 000 F**. *(3 pts)*
7. 130 × 1,25 = 162,5 m³ foisonnés × 3 500 = **568 750 F**. Réutiliser les déblais évite à la fois l'achat de matériaux d'apport et la mise en décharge : c'est la principale source d'économie des terrassements. *(2 pts)*

> [!attention] Erreurs à éviter
> - Prendre le terrain horizontal alors qu'il est en pente en travers.
> - Oublier de fermer le polygone dans la formule de Gauss.
> - Comparer des volumes en place et des volumes foisonnés ou compactés.`},
 exercices:[
  {t:"Volume par les profils", d:1, e:`Trois profils en travers de déblai distants de 25 m ont des surfaces de 12,4 ; 18,6 et 9,8 m². Calculer le volume de déblai.`, c:`V = 25 × ((12,4 + 18,6)/2 + (18,6 + 9,8)/2) = 25 × (15,5 + 14,2) = **742,5 m³**.`},
  {t:"Volume par quadrillage", d:2, e:`Une plateforme de 20 × 20 m est divisée en 4 carrés de 10 m. Hauteurs de déblai aux 9 nœuds (ligne par ligne) : 1,20 ; 0,90 ; 0,65 / 1,05 ; 0,80 ; 0,50 / 0,85 ; 0,55 ; 0,30. Calculer le volume.`, c:`Angles (×1) : 1,20 + 0,65 + 0,85 + 0,30 = 3,00 ; bords (×2) : 0,90 + 1,05 + 0,50 + 0,55 = 3,00 → 6,00 ; centre (×4) : 0,80 → 3,20.
**V = (100/4) × (3,00 + 6,00 + 3,20) = 25 × 12,20 = 305 m³**.`},
  {t:"Transport des déblais", d:1, e:`Le volume de 742,5 m³ de l'exercice 1 est en latérite (foisonnement 1,25). Combien de rotations de camions de 10 m³ faut-il pour l'évacuer ?`, c:`Volume foisonné : 742,5 × 1,25 = **928 m³** → 928 / 10 = 92,8 → **93 rotations**.`},
  {t:"Niveau d'équilibre", d:3, e:`Une plateforme carrée de 20 × 20 m (4 carrés de 10 m) a pour altitudes du terrain naturel aux nœuds : 52,40 ; 52,10 ; 51,85 / 52,25 ; 51,95 ; 51,70 / 52,05 ; 51,80 ; 51,50. Calculer le niveau qui équilibre déblais et remblais (sans foisonnement).`, c:`Poids : angles 1, bords 2, centre 4 (Σ w = 4 + 8 + 4 = 16).
Σ w Z = (52,40 + 51,85 + 52,05 + 51,50) + 2 × (52,10 + 52,25 + 51,70 + 51,80) + 4 × 51,95 = 207,80 + 415,70 + 207,80 = 831,30.
**Zéquilibre = 831,30 / 16 = 51,956 m** → on retient environ **51,95 m** (puis on ajuste selon le compactage).`}
 ],
 quiz:[
  {q:"La méthode de la moyenne des aires donne V =", o:["L × S1 × S2","L × (S1 + S2) / 2","(S1 + S2) / L","L / (S1 + S2)"], r:1, e:"Moyenne des deux surfaces × distance."},
  {q:"Dans un quadrillage, un nœud intérieur compte :", o:["1 fois","2 fois","4 fois","0 fois"], r:2, e:"Il appartient à 4 carrés."},
  {q:"Le foisonnement signifie que la terre extraite :", o:["Occupe moins de volume","Occupe plus de volume","Ne change pas","Disparaît"], r:1, e:"Coefficient de 1,15 à 1,35 environ."},
  {q:"Le niveau d'équilibre d'une plateforme s'obtient par :", o:["L'altitude la plus haute","La moyenne pondérée des altitudes aux nœuds","L'altitude la plus basse","Le niveau ±0,00"], r:1, e:"Avec les poids 1, 2, 4."},
  {q:"Les terres manquantes pour un remblai proviennent :", o:["D'une décharge","D'un emprunt","Du béton","De l'eau"], r:1, e:"Zone d'emprunt de matériaux."}
 ]},

{id:"topo-19", niv:3, titre:"Erreurs, précision et tolérances des mesures", duree:55, contenu:`## Aucune mesure n'est exacte
Toute mesure est entachée d'erreurs. Le topographe doit les connaître pour choisir ses méthodes, contrôler ses résultats et annoncer leur **précision**. On distingue :
- les **fautes** : erreurs grossières (lecture de 1,850 au lieu de 1,580, mauvais point visé, hauteur de prisme oubliée). On les détecte par les **contrôles** (mesures doubles, fermetures) et on les élimine en recommençant ;
- les **erreurs systématiques** : toujours dans le même sens (ruban trop court, collimation du niveau, température). On les élimine par l'**étalonnage**, les **corrections** et des **méthodes** adaptées (portées égales, double retournement) ;
- les **erreurs accidentelles** (aléatoires) : petites, de signe variable, inévitables. On les réduit en **répétant** les mesures et en faisant la moyenne ; on les caractérise par l'**écart-type**.

## Moyenne et écart-type
Pour n mesures x1, …, xn d'une même grandeur :
$$ moyenne x̄ = Σ xi / n      résidus vi = xi − x̄      écart-type σ = √(Σ vi² / (n − 1))
L'écart-type de la **moyenne** est plus petit : **σx̄ = σ / √n**. La **tolérance** (écart maximal acceptable) est en général prise égale à **2,7 σ** (parfois 3 σ) : un écart supérieur signale probablement une faute.

> [!exemple] Six mesures d'une distance
> 125,432 ; 125,428 ; 125,437 ; 125,425 ; 125,431 ; 125,435 m.
> x̄ = **125,4313 m** ; résidus (mm) : + 0,7 ; − 3,3 ; + 5,7 ; − 6,3 ; − 0,3 ; + 3,7.
> σ = **4,4 mm** ; σx̄ = 4,4 / √6 = **1,8 mm** ; tolérance sur une mesure : 2,7 × 4,4 = **11,9 mm**. Aucun résidu ne dépasse la tolérance : pas de faute détectée. Résultat : **125,431 m ± 1,8 mm**.

## La propagation des erreurs
Quand un résultat est obtenu en combinant plusieurs mesures indépendantes, leurs écarts-types se combinent **quadratiquement** :
$$ pour une somme ou une différence : σ = √(σ1² + σ2² + …)
Conséquences :
- une distance mesurée en n portées de même précision σ0 a une précision σ0 √n ;
- un **nivellement** de n stations (σ0 par station) a une précision σ0 √n : c'est pourquoi les **tolérances** de nivellement sont en √n ou en √L ;
- la fermeture angulaire d'une polygonale de n angles a pour écart-type σangle √n.

> [!exemple] Tolérance d'un nivellement
> Écart-type d'une dénivelée par station : 1 mm. Cheminement de 9 stations : σ = 1 × √9 = 3 mm → **tolérance = 2,7 × 3 ≈ 8 mm**.

## Pondération
Quand des mesures n'ont pas la même précision, on les combine par une **moyenne pondérée**, avec des poids inversement proportionnels aux **variances** (p = 1/σ²) : une mesure deux fois plus précise compte quatre fois plus.

## Spécifier une précision sur un chantier
Les cahiers des charges imposent des **tolérances** d'exécution : par exemple ± 1 cm sur l'implantation des axes, ± 1 cm sur les niveaux de fondation, ± 5 mm sous la règle de 2 m pour un dallage. La méthode de mesure (instrument, nombre de répétitions, contrôles) doit être choisie pour que son **erreur** soit nettement plus petite que la **tolérance** d'exécution (au moins 3 à 4 fois plus petite).

> [!retenir]
> - Fautes (à éliminer), erreurs systématiques (à corriger), erreurs accidentelles (à réduire).
> - σ = √(Σ v² / (n − 1)) ; σx̄ = σ / √n ; tolérance = 2,7 σ.
> - Propagation : σ = √(Σ σi²) ; n éléments égaux : σ0 √n.
> - Pondération : poids p = 1 / σ².`,
 sujet:{titre:"Précision des mesures : moyenne, écart-type, faute et propagation des erreurs", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Vous êtes chargé du contrôle qualité des mesures d'un cabinet de géomètres. On vous soumet plusieurs séries de mesures.

**Données**
- Huit mesures d'un même angle (gon) : **54,2318 – 54,2325 – 54,2312 – 54,2321 – 54,2365 – 54,2316 – 54,2323 – 54,2319** ;
- Nivellement de **16 stations**, écart-type par station **σ0 = 0,8 mm** ; fermeture obtenue : **7 mm** ;
- Distance mesurée en **4 portées** de ruban, écart-type par portée **3 mm** ;
- Terrain rectangulaire : **a = 40,00 m ± 0,01 m** ; **b = 25,00 m ± 0,01 m** (écarts-types).

### Partie A — Types d'erreurs (4 points)
1. Définir faute, erreur systématique et erreur accidentelle, avec un exemple de chacune en topographie. (3 pts)
2. Comment élimine-t-on ou réduit-on chacune ? (1 pt)

### Partie B — Série d'angles (9 points)
3. Calculer la moyenne et l'écart-type des huit mesures, puis la tolérance 2,7 σ. La valeur 54,2365 est-elle rejetée ? (3 pts)
4. Recalculer moyenne et écart-type sans 54,2365. Cette valeur est-elle une faute ? (4 pts)
5. Donner le résultat final avec son écart-type. (2 pts)

### Partie C — Propagation (7 points)
6. Calculer l'écart-type et la tolérance du nivellement ; la fermeture est-elle acceptable ? (3 pts)
7. Calculer l'écart-type de la distance mesurée au ruban. (1 pt)
8. Calculer la surface du terrain et son écart-type. (3 pts)`,
  corrige:`### Partie A — Erreurs (4 pts)
1. *(3 pts)*
   - **Faute** : erreur grossière (lecture 1,850 au lieu de 1,580, hauteur de prisme oubliée) ;
   - **Systématique** : toujours dans le même sens (ruban trop long, collimation du niveau, dilatation) ;
   - **Accidentelle** : petite, de signe variable, inévitable (pointé, lecture, vibrations).
2. Fautes : contrôles et mesures doubles, puis on recommence ; systématiques : étalonnage, corrections, méthodes (portées égales, CG/CD) ; accidentelles : répétition et moyenne. *(1 pt)*

### Partie B — Série d'angles (9 pts)
3. Moyenne **54,23249** ; σ = **1,67 mgon** ; tolérance 2,7 σ = **4,5 mgon** ; résidu de 54,2365 : **+ 4,0 mgon** < 4,5 → il n'est pas rejeté par ce test… parce que la valeur suspecte gonfle elle-même σ. *(3 pts)*
4. Sans elle : moyenne **54,23191** ; σ = **0,44 mgon** ; tolérance **1,2 mgon** ; écart de 54,2365 à la moyenne : **4,6 mgon**, soit plus de 10 σ → c'est une **faute** (pointé sur un autre point, mauvaise lecture) : on l'élimine. *(4 pts)*
5. σ de la moyenne : 0,44 / √7 = **0,17 mgon** → **54,2319 gon ± 0,2 mgon**. *(2 pts)*

### Partie C — Propagation (7 pts)
6. σ = 0,8 × √16 = **3,2 mm** ; tolérance 2,7 × 3,2 = **8,6 mm** ; fermeture 7 mm ≤ 8,6 : **acceptable**. *(3 pts)*
7. σ = 3 × √4 = **6 mm**. *(1 pt)*
8. S = 40,00 × 25,00 = **1 000,00 m²** ; $$ σS = √((b σa)² + (a σb)²) = √(0,25² + 0,40²) = 0,47 m²
   → **1 000,0 m² ± 0,5 m²**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Tester une valeur suspecte avec un écart-type calculé en l'incluant.
> - Additionner les écarts-types au lieu de les combiner quadratiquement.
> - Confondre l'écart-type d'une mesure et celui de la moyenne (divisé par √n).`},
 exercices:[
  {t:"Moyenne et écart-type d'un angle", d:2, e:`Un angle a été mesuré 5 fois : 63,4521 ; 63,4528 ; 63,4517 ; 63,4525 ; 63,4524 gon. Calculer la moyenne, l'écart-type d'une mesure et celui de la moyenne.`, c:`x̄ = **63,4523 gon**. Résidus (mgon) : − 0,2 ; + 0,5 ; − 0,6 ; + 0,2 ; + 0,1.
Σ v² = 0,04 + 0,25 + 0,36 + 0,04 + 0,01 = 0,70 mgon² → **σ = √(0,70 / 4) = 0,42 mgon** ; **σx̄ = 0,42 / √5 = 0,19 mgon**.`},
  {t:"Propagation sur une distance", d:1, e:`Une distance de 120 m est mesurée en 4 portées de ruban, chacune avec un écart-type de 3 mm. Quel est l'écart-type de la distance totale ? Et si on la mesurait en 6 portées de 20 m (écart-type 2 mm chacune) ?`, c:`4 portées : σ = 3 × √4 = **6 mm**.
6 portées : σ = 2 × √6 = **4,9 mm**.`},
  {t:"Faute ou erreur ?", d:1, e:`Classer : 1) lecture 2,315 notée 2,135 ; 2) ruban de 30 m qui mesure 30,005 m ; 3) petites variations de lecture d'une mire à cause du vent ; 4) niveau dont la visée est légèrement inclinée ; 5) point de changement déplacé entre deux lectures.`, c:`1. **Faute** (inversion de chiffres).
2. **Erreur systématique** (étalonnage → correction).
3. **Erreur accidentelle** (on la réduit par répétition).
4. **Erreur systématique** (collimation → portées égales).
5. **Faute** (le contrôle de fermeture la révélera).`},
  {t:"Choisir une méthode adaptée à une tolérance", d:3, e:`On doit implanter des platines de poteaux métalliques avec une tolérance de ± 3 mm. Une station totale donne une précision de position d'environ ± 2 mm à 50 m. La méthode convient-elle ? Que proposer ?`, c:`L'erreur de mesure (± 2 mm) doit être 3 à 4 fois plus petite que la tolérance (± 3 mm), soit ± 1 mm environ : **la méthode seule est insuffisante**.
Propositions : visées **courtes** (station au centre), mesures **répétées** (2 séquences, σ divisé par √2), points de référence très précis à proximité, **contrôle des entraxes** entre platines au ruban étalonné ou au gabarit, et réglage final des platines sur des repères précis.`}
 ],
 quiz:[
  {q:"Une erreur de signe constant (ruban trop court) est :", o:["Une faute","Une erreur systématique","Une erreur accidentelle","Négligeable"], r:1, e:"On la corrige par étalonnage."},
  {q:"L'écart-type de la moyenne de n mesures vaut :", o:["σ × n","σ / n","σ / √n","σ √n"], r:2, e:"La moyenne est plus précise."},
  {q:"La tolérance usuelle vaut :", o:["σ","2,7 σ","10 σ","σ / 2"], r:1, e:"Au-delà, une faute est probable."},
  {q:"Pour une somme de mesures indépendantes, les écarts-types :", o:["S'additionnent","Se combinent quadratiquement","Se multiplient","S'annulent"], r:1, e:"σ = √(Σ σi²)."},
  {q:"Une mesure deux fois plus précise a un poids :", o:["Deux fois plus grand","Quatre fois plus grand","Égal","Deux fois plus petit"], r:1, e:"p = 1 / σ²."}
 ]}
]});
