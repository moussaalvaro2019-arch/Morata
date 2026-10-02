/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Sols et terrain
   Géotechnique · Topographie
   ===================================================================== */

/* ---------- GÉOTECHNIQUE ---------- */
A.addChapitres('geo', [
{id:'geo-6', niv:1, titre:'Reconnaître les sols et les essais simples sur le terrain', duree:25, contenu:`## Les sols que l'on rencontre en Côte d'Ivoire
- **Latérites** (sols rouges, souvent graveleux) : bonne portance une fois compactées, très utilisées en remblai et en couche de chaussée.
- **Argiles** : collantes et plastiques, elles **gonflent** à l'humidité et se **rétractent** en saison sèche (fissures des murs).
- **Sables** : fréquents sur le littoral (Abidjan, Grand-Bassam) ; bons s'ils sont denses, instables s'ils sont lâches et saturés.
- **Vases et tourbes** : en bordure de lagune et dans les bas-fonds, **très compressibles** : interdites sans étude.
- **Arènes granitiques** (roche altérée) : portance correcte à bonne.

## Observer avant de construire
Creusez une **fouille de reconnaissance** de 1,50 à 2 m à l'emplacement du bâtiment :
- **Couleur et odeur** : un sol noir qui sent le moisi contient de la matière organique (à éviter) ;
- **Toucher** : le sable gratte, l'argile est savonneuse et colle aux doigts ;
- **Test du boudin** : un sol qui se roule en boudin fin sans casser est argileux et plastique ;
- **Présence d'eau** : notez la profondeur de la nappe.

## Le pénétromètre dynamique
On enfonce une tige en frappant avec un mouton et on compte les **coups pour 10 cm** d'enfoncement. Beaucoup de coups = sol dense ; un enfoncement « sous le poids du mouton » = sol mou.

## Ordres de grandeur de portance
| Sol | Contrainte admissible indicative |
|---|---|
| Vase, tourbe, remblai récent | moins de 0,5 bar (à éviter) |
| Argile molle | 0,5 à 1 bar |
| Argile ferme | 1 à 2 bars |
| Latérite compacte, sable dense | 1,5 à 3 bars |
| Roche saine | plus de 5 bars |

> [!attention]
> Ces valeurs servent seulement à un premier avis pour une petite maison. Pour un R+1 et plus, ou au moindre doute (remblai, ordures, bas-fond), une **étude géotechnique** est indispensable.`,
 quiz:[
  {q:"Un sol savonneux qui se roule en boudin fin est plutôt :", o:["Argileux","Sableux","Graveleux","Rocheux"], r:0, e:"C'est le signe d'un sol plastique."},
  {q:"Les vases de bord de lagune sont :", o:["Très compressibles","Excellentes pour fonder","Comparables à la roche","Sans eau"], r:0, e:"Elles tassent fortement sous charge."},
  {q:"Au pénétromètre dynamique, un grand nombre de coups pour 10 cm indique :", o:["Un sol dense","Un sol mou","La présence d'eau","Une erreur de mesure"], r:0, e:"Le sol résiste à l'enfoncement."},
  {q:"La portance indicative d'une latérite compacte est d'environ :", o:["1,5 à 3 bars","0,2 bar","10 bars","50 bars"], r:0, e:"À confirmer par une étude de sol."}
 ]},
{id:'geo-7', niv:1, titre:'L\'eau dans le sol : nappe, perméabilité et drainage', duree:25, contenu:`## La nappe phréatique
L'eau remplit les vides du sol sous un certain niveau : c'est la **nappe**. Son niveau **varie selon les saisons** ; près des lagunes et dans les bas-fonds, elle peut être à moins d'un mètre de la surface.

## La perméabilité
Elle mesure la facilité avec laquelle l'eau traverse le sol (coefficient k en m/s) :
| Sol | k (m/s) |
|---|---|
| Gravier | 10⁻² |
| Sable | 10⁻⁴ |
| Limon | 10⁻⁶ |
| Argile | moins de 10⁻⁹ |

Loi de Darcy : **Q = k × i × A** (i : gradient hydraulique, A : surface traversée).
> [!exemple] Un puisard dans du sable
> k = 10⁻⁴ m/s, gradient 1, surface d'infiltration 4 m² : Q = 10⁻⁴ × 1 × 4 = 4 × 10⁻⁴ m³/s, soit **1 440 litres par heure**. Dans une argile, le même puisard n'infiltrerait presque rien.

## Les effets de l'eau sur les ouvrages
- **Diminution de la portance** du sol saturé ;
- **Gonflement et retrait** des argiles (fissures en escalier dans les murs) ;
- **Remontées capillaires** dans les murs (salpêtre, peinture qui cloque) ;
- **Boulance** : un sable fin saturé « coule » dans une fouille où l'on pompe trop fort.

## Les solutions
- **Drain périphérique** (tuyau perforé entouré de gravier et de géotextile) autour des fondations ;
- **Pentes** du terrain qui éloignent les eaux de pluie de la maison, gouttières raccordées ;
- **Hérisson** et film polyane sous le dallage ;
- Pour une fouille sous la nappe : **pompage** (puisards, pointes filtrantes) et béton de propreté renforcé.

> [!retenir]
> Ne jamais couler de béton dans une fouille pleine d'eau : on pompe, on nettoie, puis on coule rapidement.`,
 quiz:[
  {q:"Le sol le plus perméable est :", o:["Le gravier","L'argile","Le limon","La vase"], r:0, e:"k ≈ 10⁻² m/s."},
  {q:"La loi de Darcy s'écrit :", o:["Q = k i A","Q = m c ΔT","Q = ρ g h","Q = σ / E"], r:0, e:"Débit à travers un sol."},
  {q:"Des fissures en escalier dans les murs peuvent venir :", o:["Du retrait-gonflement d'un sol argileux","D'un excès de peinture","D'un sable dense","D'une toiture claire"], r:0, e:"Les argiles changent de volume avec l'eau."},
  {q:"Un drain périphérique sert à :", o:["Éloigner l'eau des fondations","Augmenter la nappe","Ventiler les pièces","Remplacer les gouttières"], r:0, e:"Il collecte l'eau et l'évacue plus loin."}
 ]},
{id:'geo-8', niv:3, titre:'Les fondations profondes : pieux', duree:35, contenu:`## Quand faut-il des pieux ?
- Le bon sol est **profond** (vases lagunaires de plusieurs mètres sur une partie d'Abidjan, remblais épais) ;
- Les charges sont **fortes** (immeubles élevés, ponts, réservoirs) ;
- Les tassements doivent rester très faibles.

!fig:fondations-types|Semelles, radier et pieux

## Les types de pieux
- **Forés** (tarière, forage tubé ou sous boue bentonitique), puis armés et bétonnés en place ;
- **Battus** (préfabriqués en béton ou profilés en acier) enfoncés au mouton ;
- **Micropieux** (petit diamètre, injectés), utiles en reprise en sous-œuvre.
Les pieux d'un même poteau sont reliés par une **semelle de liaison** (chevêtre).

## La capacité portante d'un pieu
Elle vient de la **pointe** et du **frottement latéral** :
$$ Qu = qp × Ap + Σ qs × P × hi
> [!exemple] Pieu foré Ø 0,60 m, 15 m de long
> Les 3 premiers mètres sont dans la vase (frottement négligé), les 12 suivants dans un sable moyennement dense (qs = 50 kPa), pointe dans ce sable (qp = 3 000 kPa).
> Ap = π × 0,30² = 0,283 m² → pointe : 3 000 × 0,283 = **848 kN**.
> Périmètre P = π × 0,60 = 1,885 m → frottement : 50 × 1,885 × 12 = **1 131 kN**.
> Qu = 1 979 kN ; avec un coefficient de sécurité de 2,5 : **charge admissible ≈ 790 kN** par pieu.

## Le frottement négatif
Quand une couche molle (vase, remblai récent) tasse autour du pieu, elle « s'accroche » à lui et **ajoute une charge** au lieu de le porter. On en tient compte dans le calcul.

## Les contrôles
- **Essai de chargement statique** sur pieu d'essai ;
- **Contrôle d'intégrité** (essai sonique, carottage) pour détecter les défauts de bétonnage ;
- Relevé précis de chaque pieu : profondeur atteinte, volume de béton coulé (comparé au volume théorique).`,
 quiz:[
  {q:"La capacité d'un pieu provient :", o:["De la pointe et du frottement latéral","Seulement de son poids","Uniquement de la semelle de liaison","Du vent"], r:0, e:"Qu = Qp + Qs."},
  {q:"Pieu de 0,60 m de diamètre : la section de pointe vaut environ :", o:["0,28 m²","0,60 m²","1,13 m²","0,09 m²"], r:0, e:"π × 0,30² = 0,283 m²."},
  {q:"Le frottement négatif :", o:["Ajoute une charge au pieu","Augmente sa capacité","N'existe pas dans les vases","Concerne seulement les toitures"], r:0, e:"La couche molle qui tasse entraîne le pieu vers le bas."},
  {q:"Les pieux d'un même poteau sont reliés par :", o:["Une semelle de liaison (chevêtre)","Une poutre de toiture","Un dallage","Rien"], r:0, e:"Elle répartit la charge du poteau entre les pieux."}
 ]},
{id:'geo-9', niv:3, titre:'Murs de soutènement et poussée des terres', duree:35, contenu:`## La poussée des terres
Un terrain retenu par un mur exerce une **poussée** horizontale. En poussée active (le mur peut légèrement se déplacer) :
$$ Ka = tan²(45° − φ/2)      σh = Ka × γ × z      Pa = ½ × Ka × γ × H²
Pa s'applique au **tiers inférieur** de la hauteur.

> [!exemple] Mur de 3 m retenant un remblai sableux
> γ = 18 kN/m³, φ = 30° → Ka = tan² 30° = 1/3.
> Pa = 0,5 × 1/3 × 18 × 3² = **27 kN par mètre de mur**, à 1 m au-dessus de la base → moment de renversement 27 kN·m/m.
> Une surcharge de 10 kN/m² en tête (véhicules) ajoute Ka × q × H = 10 kN/m à mi-hauteur (moment 15 kN·m/m).

## Les types de murs
- **Murs poids** (maçonnerie, béton cyclopéen, gabions) : c'est leur masse qui résiste ;
- **Murs en béton armé en L ou en T renversé** : le poids des terres sur le talon participe à la stabilité ;
- **Terre armée**, parois clouées, rideaux de palplanches pour les grandes hauteurs.

## Les vérifications
1. **Renversement** autour de l'arête avant : moment stabilisant / moment renversant ≥ 1,5 ;
2. **Glissement** sur la base : frottement mobilisable / poussée ≥ 1,5 ;
3. **Portance** du sol sous la semelle ;
4. **Stabilité générale** du talus (grand glissement circulaire).

> [!exemple] Suite : mur en T renversé
> Poids du mur et des terres sur le talon W = 120 kN/m, bras de levier 1,20 m → M stabilisant = 144 kN·m/m.
> Renversement : 144 / (27 + 15) = **3,4** ✔. Glissement (coefficient 0,5) : 0,5 × 120 / (27 + 10) = **1,6** ✔.

## Le drainage : indispensable
Si l'eau s'accumule derrière le mur, elle ajoute sa propre poussée **½ × γw × H²** = 0,5 × 10 × 9 = **45 kN/m** : plus que la poussée des terres ! On prévoit un **massif drainant** (graviers + géotextile) et des **barbacanes** tous les 2 à 3 m.`,
 quiz:[
  {q:"Pour φ = 30°, le coefficient de poussée active Ka vaut :", o:["1/3","1","3","0,5"], r:0, e:"tan²(45° − 15°) = tan² 30° = 1/3."},
  {q:"La poussée active des terres s'applique :", o:["Au tiers inférieur de la hauteur","En tête du mur","À mi-hauteur","À la base exactement"], r:0, e:"Le diagramme de pression est triangulaire."},
  {q:"Les barbacanes servent à :", o:["Évacuer l'eau derrière le mur","Décorer le mur","Ancrer les aciers","Ventiler les caves"], r:0, e:"Sans drainage, la poussée de l'eau peut dépasser celle des terres."},
  {q:"Le coefficient de sécurité au renversement visé est d'au moins :", o:["1,5","0,5","10","1,0"], r:0, e:"Moment stabilisant / moment renversant ≥ 1,5."}
 ]}
]);

/* ---------- TOPOGRAPHIE ---------- */
A.addChapitres('topo', [
{id:'topo-6', niv:1, titre:'Lire un plan topographique et un plan de lotissement', duree:25, contenu:`## Les documents du terrain
- **Plan de lotissement** : îlots, numéros de lots, voies, réserves, servitudes ;
- **Plan de bornage** : limites exactes du lot, **bornes** numérotées (B1, B2…), longueurs des côtés et superficie ;
- **Documents de propriété** : l'**ACD** (Arrêté de Concession Définitive) ou le titre foncier, indispensables pour le permis de construire.

## Le plan topographique
Il représente le relief et ce qui existe sur le terrain : **courbes de niveau**, points cotés, arbres, clôtures, poteaux CIE, regards SODECI, caniveaux.

## Les courbes de niveau
Une courbe relie les points de même altitude ; l'écart d'altitude entre deux courbes est l'**équidistance**.
> [!exemple] Calculer une pente
> Courbes 52 m et 53 m séparées de 1,6 cm sur un plan au 1/500 : distance réelle = 1,6 × 500 = 800 cm = 8 m. Pente = 1 / 8 = **12,5 %**.

Des courbes serrées indiquent une **forte pente** ; des courbes espacées, un terrain plat.

## Les règles d'urbanisme du lot
- **Reculs** par rapport à la voie et aux limites (souvent 3 à 5 m sur rue) ;
- **CES** (coefficient d'emprise au sol) et **COS** (coefficient d'occupation du sol).
> [!exemple]
> Lot de 600 m², CES = 60 %, COS = 1,2 → emprise au sol maximale 360 m² et **720 m² de planchers** au total (par exemple un R+1 de 360 m² par niveau).

> [!attention]
> Avant de construire, faites **retrouver et contrôler les bornes** par un géomètre expert agréé : construire sur la parcelle voisine est une erreur coûteuse et fréquente.`,
 quiz:[
  {q:"L'équidistance est :", o:["L'écart d'altitude entre deux courbes de niveau","La distance entre deux bornes","La largeur de la voie","L'échelle du plan"], r:0, e:"Par exemple 1 m entre la courbe 52 et la courbe 53."},
  {q:"Courbes 1 m plus bas sur 10 m de distance : la pente vaut :", o:["10 %","1 %","100 %","0,1 %"], r:0, e:"1 / 10 = 10 %."},
  {q:"Lot de 500 m² avec un COS de 1 : surface de planchers maximale :", o:["500 m²","1 000 m²","250 m²","50 m²"], r:0, e:"COS × surface du terrain."},
  {q:"Le document qui délimite exactement le lot avec ses bornes est :", o:["Le plan de bornage","Le plan électrique","La façade","Le planning"], r:0, e:"Il est établi par un géomètre."}
 ]},
{id:'topo-7', niv:3, titre:'GNSS (GPS) et systèmes de coordonnées', duree:30, contenu:`## Les systèmes satellitaires
Le **GNSS** regroupe le GPS (américain), Galileo (européen), GLONASS (russe) et BeiDou (chinois). La précision dépend du matériel et de la méthode :
| Méthode | Précision |
|---|---|
| Téléphone | 3 à 5 m |
| GPS de randonnée | 2 à 3 m |
| GNSS différentiel / **RTK** (base + mobile) | 1 à 3 cm |

## Les coordonnées géographiques et projetées
- **WGS84** : latitude, longitude (en degrés) et hauteur sur l'ellipsoïde.
- **UTM** : projection plane en mètres. Abidjan (longitude ≈ −4°) se trouve dans le **fuseau 30 Nord** ; l'ouest du pays est dans le fuseau 29 Nord. Les coordonnées s'écrivent **E** (est, avec une origine fictive de 500 000 m au méridien central) et **N** (nord).

## Calculer une distance et un gisement à partir de coordonnées
> [!exemple] Deux bornes relevées au GNSS (UTM 30N)
> A (E = 385 120,45 ; N = 588 430,10) et B (E = 385 160,80 ; N = 588 455,95).
> ΔE = 40,35 m ; ΔN = 25,85 m → distance AB = √(40,35² + 25,85²) = **47,92 m**.
> Gisement (depuis le nord, sens horaire) : arctan(ΔE / ΔN) = 57,35° = **63,72 grades**.

## Altitudes
Le GNSS donne une hauteur sur l'**ellipsoïde**, différente de l'**altitude** du nivellement national (rapportée au niveau moyen de la mer). On applique la **correction du géoïde** ou on se cale sur un repère de nivellement connu.

## Usages sur les chantiers
- Lever rapidement une grande parcelle ou un tracé de route ;
- Implanter des axes de bâtiment ou des pieux au centimètre (RTK) ;
- Guider les engins de terrassement.

> [!astuce]
> Sous les arbres, près des grands bâtiments ou des lignes électriques, la réception des satellites se dégrade : on complète alors à la station totale.`,
 quiz:[
  {q:"Pour une précision centimétrique, on utilise :", o:["Le GNSS en mode RTK","Un téléphone","Une boussole","Une carte papier"], r:0, e:"Une base et un mobile corrigent les erreurs en temps réel."},
  {q:"Abidjan se situe dans le fuseau UTM :", o:["30 Nord","10 Nord","30 Sud","1 Nord"], r:0, e:"Longitude d'environ −4°."},
  {q:"ΔE = 30 m et ΔN = 40 m : la distance vaut :", o:["50 m","70 m","10 m","35 m"], r:0, e:"√(30² + 40²) = 50 m."},
  {q:"Le GNSS fournit directement une hauteur :", o:["Sur l'ellipsoïde, à corriger pour obtenir l'altitude","Égale à l'altitude NGCI","En grades","Nulle"], r:0, e:"Il faut appliquer la correction du géoïde."}
 ]},
{id:'topo-8', niv:3, titre:'Tracé routier : courbes et profils', duree:35, contenu:`## Le tracé en plan
Une route est une suite d'**alignements droits** et de **courbes circulaires**, souvent reliés par des raccordements progressifs (clothoïdes) pour le confort.

## Les éléments d'une courbe circulaire
Pour un rayon R et un angle de déviation Δ entre les deux alignements :
$$ Tangente :  T = R × tan(Δ/2)
$$ Développement :  D = R × Δ (Δ en radians)
$$ Flèche :  f = R × (1 − cos(Δ/2))

> [!exemple] Courbe de rayon 150 m, déviation 40°
> T = 150 × tan 20° = **54,60 m** (distance du sommet aux points de tangence).
> D = 150 × 0,698 = **104,72 m** de chaussée courbe.
> f = 150 × (1 − cos 20°) = **9,05 m** entre le milieu de la courbe et le milieu de la corde.

## Le profil en long
Il représente l'altitude du terrain naturel et celle du **projet** le long de l'axe. On y lit :
- les **déclivités** (pentes et rampes, en %),
- les **raccordements verticaux** (en creux et en bosse) pour la visibilité,
- les zones de **déblai** (projet sous le terrain) et de **remblai** (projet au-dessus).

## Les profils en travers
Tous les 10 à 25 m, on dessine une coupe perpendiculaire à l'axe : chaussée avec **dévers** (pente transversale de 2,5 % pour évacuer l'eau), accotements, fossés, talus. La surface de déblai et de remblai de chaque profil sert à calculer les **cubatures** (méthode des trapèzes ou de Simpson).

> [!retenir]
> Un bon tracé équilibre déblais et remblais pour limiter les transports de terre, garantit l'écoulement des eaux et respecte des pentes acceptables par les véhicules (en général moins de 7 à 8 %).`,
 quiz:[
  {q:"La tangente d'une courbe de rayon R et de déviation Δ vaut :", o:["R × tan(Δ/2)","R × Δ","R / Δ","2R"], r:0, e:"Distance du sommet aux points de tangence."},
  {q:"Rayon 100 m, déviation 90° (π/2 rad) : le développement vaut environ :", o:["157 m","100 m","90 m","314 m"], r:0, e:"100 × 1,571 = 157 m."},
  {q:"Le dévers courant d'une chaussée en alignement droit est d'environ :", o:["2,5 %","25 %","0 %","10 %"], r:0, e:"Il permet l'écoulement de l'eau de pluie."},
  {q:"Sur le profil en long, la zone où le projet est sous le terrain naturel est :", o:["Un déblai","Un remblai","Un raccordement","Un alignement"], r:0, e:"On enlève de la terre."}
 ]},
{id:'topo-9', niv:3, titre:'Polygonation et compensation des erreurs', duree:35, contenu:`## Le cheminement polygonal
Pour lever un grand terrain ou créer un canevas d'implantation, on enchaîne des **stations** reliées par des côtés dont on mesure les **angles** et les **distances**. Le cheminement est **fermé** (on revient au point de départ) ou **encadré** (entre deux points connus).

## Fermeture angulaire
Dans un polygone fermé de n sommets, la somme des angles intérieurs vaut **(n − 2) × 200 grades**.
> [!exemple] Polygone de 5 stations
> Somme théorique : 3 × 200 = 600 gr. Somme mesurée : 600,0150 gr → erreur **fa = +0,0150 gr**.
> Si elle est inférieure à la tolérance, on la répartit également : **−0,0030 gr** sur chaque angle.

## Fermeture planimétrique
À partir des gisements corrigés et des distances, on calcule les ΔE et ΔN de chaque côté. Pour un polygone fermé, leurs sommes doivent être nulles ; les écarts fE et fN donnent la **fermeture linéaire** :
$$ f = √(fE² + fN²)      précision relative = f / longueur totale
> [!exemple]
> Périmètre 480 m, fE = +0,06 m, fN = −0,08 m → f = 0,10 m, soit **1 / 4 800** : acceptable pour un chantier de bâtiment (on vise mieux que 1 / 3 000).

## Compensation proportionnelle aux longueurs
On corrige chaque côté proportionnellement à sa longueur :
$$ correction de ΔE = −fE × Li / ΣL      correction de ΔN = −fN × Li / ΣL
> Pour un côté de 120 m : −0,06 × 120 / 480 = **−0,015 m** sur ΔE et +0,08 × 120 / 480 = **+0,020 m** sur ΔN.

## Bonnes pratiques
- Bien **centrer** l'appareil et les réflecteurs ;
- Mesurer les angles en **cercle gauche et cercle droit** et les distances **aller-retour** ;
- Rattacher le cheminement à des **points connus** (bornes, repères GNSS) ;
- Ne jamais compenser une erreur trop grande : chercher la faute et refaire la mesure.`,
 quiz:[
  {q:"La somme des angles intérieurs d'un polygone de 6 sommets vaut :", o:["800 gr","600 gr","1 200 gr","400 gr"], r:0, e:"(6 − 2) × 200 = 800 gr."},
  {q:"fE = 0,03 m et fN = 0,04 m : la fermeture linéaire vaut :", o:["0,05 m","0,07 m","0,01 m","0,12 m"], r:0, e:"√(0,03² + 0,04²) = 0,05 m."},
  {q:"Dans la compensation proportionnelle, un côté long reçoit :", o:["Une correction plus grande","Une correction plus petite","Aucune correction","Toute l'erreur"], r:0, e:"La correction est proportionnelle à la longueur."},
  {q:"Si l'erreur de fermeture dépasse la tolérance, il faut :", o:["Chercher la faute et refaire la mesure","La répartir quand même","L'ignorer","Changer d'échelle"], r:0, e:"Une compensation ne corrige que de petites erreurs aléatoires."}
 ]}
]);
