A.addMatiere({
 id:'topo', titre:'Topographie', court:'Topographie', groupe:'sol', icone:'map', couleur:'#1E9B5E', niveau:'Intermédiaire', heures:22, ordre:2, prerequis:['math'],
 resume:"Mesures de distances, d'angles et d'altitudes, calculs de coordonnées, nivellement, implantation des bâtiments, levés et cubatures.",
 objectifs:["Utiliser les unités d'angles (degrés, grades) et les systèmes de coordonnées","Réaliser et calculer un nivellement","Calculer gisements, distances et surfaces par coordonnées","Implanter un bâtiment et contrôler l'implantation","Calculer des cubatures de terrassement"],
 applications:["Plan de bornage et levé de terrain","Niveau ±0,00 du bâtiment","Implantation des axes et des poteaux","Volumes de déblais et de remblais"],
 chapitres:[
{id:'topo-1', niv:1, titre:'Notions de base : échelles, angles et coordonnées', duree:20, contenu:`## La topographie
Elle a pour but de **représenter le terrain** (planimétrie et altimétrie) et d'**implanter** les ouvrages. Ses métiers : géomètre-expert, topographe, technicien.

## Unités d'angles
- **Degré** : un tour = 360°.
- **Grade** (ou gon) : un tour = **400 gon** ; un angle droit = 100 gon. C'est l'unité des appareils topographiques en Afrique francophone et en France.
- Conversion : 1 gon = 0,9° ; 90° = 100 gon ; 45° = 50 gon.

## Coordonnées planes
On repère les points par leurs coordonnées **X (Est)** et **Y (Nord)** dans un système de projection (en Côte d'Ivoire, on utilise des projections UTM, zones 29 et 30, sur le système WGS 84 ou des systèmes locaux). L'altitude Z est rapportée au niveau moyen de la mer.

## Le gisement
Le **gisement** G d'une direction AB est l'angle mesuré **depuis le Nord (axe Y), dans le sens des aiguilles d'une montre**, de 0 à 400 gon.
!fig:gisement|Gisement et distance entre deux points

## Échelles et précision graphique
L'œil distingue environ 0,2 mm sur un plan. À l'échelle 1/500, cela représente 10 cm sur le terrain : inutile de mesurer plus finement pour ce plan, mais **l'implantation** doit être faite au centimètre.

> [!retenir]
> Angle droit = 100 gon. Le gisement se compte depuis le Nord, dans le sens horaire.`,
 quiz:[
  {q:"Un tour complet vaut en grades :", o:["360 gon","400 gon","100 gon","200 gon"], r:1, e:"Un angle droit fait 100 gon."},
  {q:"45° correspondent à :", o:["40 gon","50 gon","45 gon","90 gon"], r:1, e:"45 / 0,9 = 50 gon."},
  {q:"Le gisement est compté à partir :", o:["De l'Est","Du Nord, dans le sens horaire","Du Sud","De la station"], r:1, e:"Par convention topographique."},
  {q:"L'axe Y d'un système de coordonnées topographiques pointe vers :", o:["L'Est","Le Nord","Le haut","L'Ouest"], r:1, e:"X vers l'Est, Y vers le Nord."}
 ]},
{id:'topo-2', niv:1, titre:'Mesure des distances et des angles', duree:25, contenu:`## Mesure des distances
- **Ruban** (décamètre, 20 à 50 m) : tendu horizontalement ; erreurs possibles : ruban non horizontal, mal tendu, mauvaise lecture. Précision de quelques mm à 1 cm.
- **Distancemètre laser** de poche : rapide pour les intérieurs.
- **Station totale** (mesure électronique des distances) : précision de quelques mm sur plusieurs centaines de mètres.

## Distance horizontale et pente
Si l'on mesure une distance inclinée Di avec un angle vertical (zénithal) V :
$$ Dh = Di × sin V    (V en zénithal : 100 gon = horizontale)
$$ ΔH = Di × cos V

## Mesure des angles
Le **théodolite** (ou la station totale) mesure :
- l'**angle horizontal** entre deux directions, en tournant l'appareil sur son axe ;
- l'**angle vertical** (zénithal) pour calculer les dénivelées et les distances horizontales.

Bonne pratique : mesurer en **double retournement** (cercle gauche et cercle droit) et faire la moyenne pour éliminer les erreurs instrumentales.

## Le GNSS (GPS)
Les récepteurs GNSS donnent directement les coordonnées. En mode **RTK** (avec une base ou un réseau de correction), la précision atteint 1 à 2 cm. Très utilisé pour les levés de grands terrains et le bornage.

> [!astuce]
> Pour une maison, un bon décamètre, un niveau laser ou à eau et la méthode 3-4-5 suffisent à implanter correctement. Pour un immeuble ou un lotissement, faites intervenir un géomètre avec une station totale.`,
 quiz:[
  {q:"La station totale mesure :", o:["Seulement les angles","Les angles et les distances","Seulement l'altitude","La température"], r:1, e:"Elle combine théodolite et distancemètre."},
  {q:"Pour éliminer les erreurs instrumentales d'un théodolite, on mesure :", o:["Une seule fois","En double retournement","De nuit","Sans trépied"], r:1, e:"Moyenne cercle gauche / cercle droit."},
  {q:"En GNSS RTK, la précision atteint environ :", o:["10 m","1 m","1 à 2 cm","1 mm"], r:2, e:"Grâce aux corrections en temps réel."},
  {q:"Une distance inclinée doit être ramenée :", o:["À l'horizontale","À la verticale","À zéro","Au nord"], r:0, e:"Les plans représentent des distances horizontales."}
 ]},
{id:'topo-3', niv:2, titre:'Le nivellement', duree:30, contenu:`## Principe du nivellement direct
Le **niveau** donne une ligne de visée **horizontale**. On lit une **mire** graduée posée sur chaque point.
!fig:nivellement|Lecture arrière, lecture avant et dénivelée

$$ ΔH(A→B) = Lecture arrière (sur A) − Lecture avant (sur B)
$$ Altitude B = Altitude A + ΔH

## Le cheminement et le carnet
Pour de longues distances, on enchaîne plusieurs stations. Le **carnet de nivellement** :

| Point | Lecture arrière | Lecture avant | ΔH | Altitude |
|---|---|---|---|---|
| Repère R (connu) | 1,425 | | | 12,000 |
| P1 | 1,870 | 0,982 | +0,443 | 12,443 |
| P2 | 0,655 | 1,312 | +0,558 | 13,001 |
| B | | 2,018 | −1,363 | 11,638 |

**Contrôle** : ΣLAR − ΣLAV = (1,425 + 1,870 + 0,655) − (0,982 + 1,312 + 2,018) = 3,950 − 4,312 = **−0,362** = Altitude B − Altitude R = 11,638 − 12,000 ✔.

## Fermeture
On revient toujours sur un point connu (cheminement fermé) : l'écart est l'**erreur de fermeture**. On la compare à une tolérance (de l'ordre de 1 à 2 cm × √L, L en km, selon la précision recherchée) puis on la **répartit** sur les dénivelées.

## Niveau à eau et niveau laser
- **Niveau à eau** (tuyau transparent rempli d'eau) : simple et précis pour reporter un niveau sur un chantier de maison.
- **Niveau laser rotatif** : trace un plan horizontal ; très pratique pour les fonds de fouilles, les dallages et les plafonds.

> [!exemple] Reporter le ±0,00
> Le repère du lotissement est à 25,30 m. Le ±0,00 de la maison est fixé à 25,75 m. Avec le niveau sur le repère : lecture 1,62 m → altitude de la visée 26,92 m. Pour marquer 25,75 m, la mire doit lire 26,92 − 25,75 = **1,17 m**.`,
 quiz:[
  {q:"La dénivelée de A vers B vaut :", o:["LAV − LAR","LAR − LAV","LAR + LAV","LAR × LAV"], r:1, e:"ΔH = lecture arrière − lecture avant."},
  {q:"LAR sur A = 1,50 ; LAV sur B = 0,80. B est :", o:["Plus haut de 0,70 m","Plus bas de 0,70 m","Au même niveau","Plus haut de 2,30 m"], r:0, e:"ΔH = 1,50 − 0,80 = +0,70 m."},
  {q:"Le contrôle d'un carnet de nivellement compare :", o:["ΣLAR − ΣLAV et l'écart d'altitude","Les distances","Les angles","La météo"], r:0, e:"Les deux doivent être égaux."},
  {q:"Un niveau laser rotatif matérialise :", o:["Une verticale","Un plan horizontal","Une distance","Un angle droit uniquement"], r:1, e:"Utile pour les fonds de fouilles et dallages."}
 ]},
{id:'topo-4', niv:2, titre:'Calculs topographiques', duree:35, contenu:`## Du terrain aux coordonnées (calcul direct)
Connaissant A (XA ; YA), le gisement G et la distance D vers B :
$$ XB = XA + D × sin G
$$ YB = YA + D × cos G

## Des coordonnées au gisement et à la distance (calcul inverse)
$$ ΔX = XB − XA     ΔY = YB − YA
$$ D = √(ΔX² + ΔY²)
$$ G = arctan(ΔX / ΔY), puis correction selon le quadrant

| Signes | Quadrant | Gisement |
|---|---|---|
| ΔX > 0, ΔY > 0 | Nord-Est | G = g |
| ΔX > 0, ΔY < 0 | Sud-Est | G = 200 − g |
| ΔX < 0, ΔY < 0 | Sud-Ouest | G = 200 + g |
| ΔX < 0, ΔY > 0 | Nord-Ouest | G = 400 − g |
(g = arctan(|ΔX| / |ΔY|) en gon)

> [!exemple]
> A (1 000,00 ; 2 000,00), B (1 030,00 ; 1 960,00) : ΔX = +30, ΔY = −40.
> D = √(900 + 1 600) = **50,00 m** ; g = arctan(30/40) = 40,97 gon ; quadrant Sud-Est → **G = 159,03 gon**.

## La polygonation
Un **cheminement polygonal** enchaîne des stations dont on mesure angles et distances. On calcule les gisements de proche en proche (G suivant = G précédent + angle mesuré ± 200 gon), puis les coordonnées, et l'on répartit les erreurs de fermeture.

## Surface par les coordonnées
Pour un polygone de sommets numérotés dans l'ordre :
$$ 2S = Σ Xi × (Yi+1 − Yi−1)

> [!exemple] Parcelle de 4 bornes
> B1 (0 ; 0), B2 (25 ; 0), B3 (27 ; 20), B4 (0 ; 22).
> 2S = 0 × (0 − 22) + 25 × (20 − 0) + 27 × (22 − 0) + 0 × (0 − 20) = 500 + 594 = 1 094 → **S = 547 m²**.

> [!retenir]
> Calcul direct : (D, G) → coordonnées. Calcul inverse : coordonnées → (D, G). Attention au quadrant du gisement.`,
 quiz:[
  {q:"Distance entre (0 ; 0) et (60 ; 80) :", o:["140 m","100 m","20 m","70 m"], r:1, e:"√(3 600 + 6 400) = 100 m."},
  {q:"Si ΔX > 0 et ΔY > 0, le gisement est compris entre :", o:["0 et 100 gon","100 et 200 gon","200 et 300 gon","300 et 400 gon"], r:0, e:"Quadrant Nord-Est."},
  {q:"XB = XA + D × sin G : pour G = 100 gon, B est situé :", o:["Au nord de A","À l'est de A","Au sud de A","À l'ouest de A"], r:1, e:"sin 100 gon = 1, cos 100 gon = 0 : plein Est."},
  {q:"La formule 2S = Σ Xi (Yi+1 − Yi−1) donne :", o:["Un périmètre","Une surface","Un gisement","Une altitude"], r:1, e:"Formule de Gauss (dite « des trapèzes »)."}
 ]},
{id:'topo-5', niv:2, titre:'Implantation, levés et cubatures', duree:30, contenu:`## Implanter un bâtiment
1. Retrouver les **bornes** et la **ligne de recul** imposée.
2. Implanter les **axes principaux** (souvent une façade) par alignement et mesure de distances.
3. Créer les angles droits (station totale, équerre optique ou méthode 3-4-5).
4. Matérialiser les axes sur des **chaises** hors des fouilles.
5. **Contrôler** : diagonales, distances entre axes, cotes cumulées depuis une même origine.
!fig:implantation|Chaises et cordeaux d'implantation

> [!attention]
> Mesurer les distances **depuis une même origine** (cotes cumulées) plutôt que d'additionner des petites longueurs : les erreurs ne s'accumulent pas.

## Le levé de terrain
On relève les points caractéristiques (angles de clôture, arbres, réseaux, bâtiments existants) et des points d'altitude pour tracer les **courbes de niveau** (équidistance de 0,50 m ou 1 m pour une parcelle).

## Les cubatures
Pour terrasser une plate-forme, on calcule les volumes de **déblais** et de **remblais** :
- **Méthode du quadrillage** : on découpe la surface en carrés de côté a ; pour chaque carré, hauteur moyenne des 4 sommets (cote terrain − cote projet) × a².
- **Méthode des profils en travers** (routes, tranchées) : volume entre deux profils = distance × moyenne des surfaces (formule des aires moyennes).

> [!exemple] Quadrillage
> Plate-forme de 20 × 20 m découpée en 4 carrés de 10 × 10 m. Hauteurs de déblai aux 9 sommets : coins 0,40 ; 0,60 ; 0,20 ; 0,30 ; milieux de côtés 0,50 ; 0,40 ; 0,30 ; 0,45 ; centre 0,45.
> Chaque sommet compte autant de fois qu'il touche de carrés : V = a²/4 × (Σ coins + 2 Σ côtés + 4 × centre) = 100/4 × (1,50 + 2 × 1,65 + 4 × 0,45) = 25 × 6,60 = **165 m³**.

> [!retenir]
> Implanter avec des cotes cumulées et contrôler les diagonales. Cuber au quadrillage pour une plate-forme, par profils pour un ouvrage linéaire.`,
 quiz:[
  {q:"Pour éviter l'accumulation des erreurs, on implante avec :", o:["Des cotes cumulées depuis une origine","Des petites longueurs additionnées","Le pas","Une seule mesure"], r:0, e:"Chaque point est mesuré depuis la même origine."},
  {q:"L'équidistance des courbes de niveau est :", o:["La distance horizontale entre courbes","La différence d'altitude entre deux courbes successives","La pente","L'échelle"], r:1, e:"Par exemple 0,50 m ou 1 m."},
  {q:"La méthode des profils en travers sert surtout pour :", o:["Une maison","Une route ou une tranchée","Un poteau","Un escalier"], r:1, e:"Ouvrages linéaires."},
  {q:"Dans la méthode du quadrillage, un sommet central commun à 4 carrés compte :", o:["1 fois","2 fois","4 fois","0 fois"], r:2, e:"Il intervient dans les 4 carrés."}
 ]}
]});
