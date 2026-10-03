/* =====================================================================
   Physique du bâtiment — cours complet (3 niveaux)
   Débutant : climat, soleil, confort, éclairage, l'eau et le bâtiment
   Intermédiaire : humidité, protections solaires, ventilation et qualité
              de l'air, éclairage artificiel, sécurité incendie
   Avancé : air humide et condensation, migration de vapeur (Glaser),
            ventilation naturelle, conception bioclimatique, résistance
            au feu des structures, photovoltaïque
   ===================================================================== */
A.addMatiere({
 id:"pb",
 titre:"Physique du bâtiment",
 court:"Physique bât.",
 groupe:"phys",
 icone:"sun",
 couleur:"#D9921B",
 niveau:"Intermédiaire",
 heures:55,
 ordre:1,
 prerequis:["sp"],
 resume:"Concevoir des bâtiments sains, frais, lumineux et sûrs en climat tropical : climats de Côte d'Ivoire, course du soleil et protections solaires, confort, éclairage naturel et artificiel, eau et humidité, air humide et condensation, ventilation naturelle et qualité de l'air, sécurité et résistance au feu, énergie solaire photovoltaïque.",
 objectifs:[
  "Lire les données climatiques et adapter le bâtiment au climat",
  "Calculer la hauteur du soleil, les ombres et la profondeur d'un débord",
  "Évaluer le confort thermique, visuel et la qualité de l'air",
  "Dimensionner les ouvertures, l'éclairage artificiel et la ventilation",
  "Prévenir remontées capillaires, condensation et moisissures",
  "Appliquer les principes de sécurité incendie (dégagements, résistance au feu)",
  "Dimensionner une installation photovoltaïque autonome"
 ],
 applications:[
  "Orientation, débords de toiture et brise-soleil",
  "Arases étanches, drainage et traitement de l'humidité",
  "Taille des fenêtres et nombre de luminaires",
  "Débits de ventilation des logements, classes et bureaux",
  "Dégagements et compartimentage des immeubles",
  "Kit solaire d'un logement ou d'un dispensaire"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"pb-1", niv:1, titre:"Le bâtiment et son climat", duree:40, contenu:`## Pourquoi étudier le climat ?
Un bâtiment est un **abri contre le climat** : soleil, chaleur, pluie, humidité, vent. Un bâtiment bien adapté reste frais et sain avec peu d'énergie ; un bâtiment mal conçu devient une étuve qu'il faut climatiser à grands frais. La physique du bâtiment commence donc par la lecture des **données climatiques** du site.

## Les climats de la Côte d'Ivoire
| Zone | Villes | Températures | Humidité relative | Pluie annuelle | Caractères |
|---|---|---|---|---|---|
| Sud (subéquatorial) | Abidjan, San-Pédro, Aboisso | 23 à 32 °C | 70 à 90 % | 1 500 à 2 000 mm | Chaud et humide toute l'année, deux saisons des pluies, faible écart jour-nuit |
| Centre (transition) | Yamoussoukro, Bouaké, Daloa | 21 à 34 °C | 50 à 85 % | 1 100 à 1 300 mm | Saisons plus marquées |
| Nord (soudanien) | Korhogo, Odienné, Ferkessédougou | 17 à 37 °C | 20 à 70 % | 1 100 à 1 300 mm | Saison sèche avec harmattan, fort écart jour-nuit |

- Le **sud** est **chaud et humide** : l'écart de température entre le jour et la nuit ne dépasse guère 6 à 8 °C ; l'air est presque toujours humide ; la priorité est la **ventilation** et la **protection solaire**.
- Le **nord** est **chaud et sec** une partie de l'année : de décembre à février, l'**harmattan** apporte un air sec et poussiéreux ; les nuits sont fraîches (écart jour-nuit de 12 à 15 °C) ; l'**inertie thermique** (murs lourds) et la **ventilation nocturne** deviennent efficaces.

## Les données climatiques utiles au projet
- **Températures** moyennes, maximales et minimales par mois ;
- **Humidité relative** de l'air ;
- **Précipitations** : hauteur annuelle et intensité des orages (dimensionnement des gouttières et caniveaux) ;
- **Ensoleillement** : 2 000 à 2 800 heures par an ; rayonnement de 4,5 à 5,5 kWh/m² par jour ;
- **Vents dominants** : en zone côtière, la mousson de sud-ouest ; leur direction guide l'orientation des ouvertures.

> [!exemple] Lire un relevé
> À Abidjan, en mars : maximum 32 °C, minimum 25 °C, humidité 80 %. L'écart jour-nuit n'est que de 7 °C : la nuit ne rafraîchit pas assez des murs lourds. On privilégie alors une construction **ventilée**, **protégée du soleil**, avec une toiture isolée.
> À Korhogo, en février : maximum 36 °C, minimum 19 °C, humidité 25 %. L'écart de 17 °C permet de stocker la fraîcheur de la nuit dans des murs épais (terre, pierre, béton) et de la restituer le jour.

## Le microclimat
Autour du bâtiment, le climat local est modifié par l'environnement :
- la **végétation** ombrage le sol et rafraîchit l'air par évapotranspiration (2 à 3 °C de moins sous les arbres) ;
- les **sols minéraux** (bitume, béton, tôle) stockent la chaleur et la restituent la nuit : c'est l'**îlot de chaleur urbain** ;
- les plans d'**eau** et la lagune tempèrent les variations ;
- les bâtiments voisins font **écran** au vent ou au soleil.

## Les grands principes qui en découlent
1. Se **protéger du soleil** (toiture, façades est et ouest) ;
2. **Ventiler** pour évacuer la chaleur et l'humidité ;
3. Se **protéger de la pluie** et de l'humidité du sol ;
4. Adapter l'**inertie** au climat (légère et ventilée au sud, lourde au nord) ;
5. Utiliser la **lumière naturelle** sans faire entrer la chaleur.

> [!retenir]
> - Sud : chaud et humide, faible écart jour-nuit → ventiler, protéger du soleil.
> - Nord : chaud et sec en saison sèche, fort écart jour-nuit → inertie et ventilation nocturne.
> - Données : températures, humidité, pluie, ensoleillement, vents dominants.
> - Le microclimat (végétation, sols, voisins) compte autant que le climat régional.`,
 sujet:{titre:"Lire le climat de deux villes ivoiriennes et en déduire des stratégies de construction", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un architecte conçoit le même modèle d'école pour **Abidjan** (littoral) et **Korhogo** (nord, savane). Vous analysez les deux climats.

**Données (mois le plus chaud)**

| Ville | T max (°C) | T min (°C) | Humidité moyenne | Pluie annuelle | Vent dominant |
|---|---|---|---|---|---|
| Abidjan (mars) | 32 | 25 | 80 % | 1 800 mm | sud-ouest (mer) |
| Korhogo (février) | 36 | 19 | 25 % | 1 200 mm | nord-est (harmattan, poussiéreux) |

### Partie A — Lecture des données (6 points)
1. Calculer l'amplitude jour-nuit et la température moyenne de chaque ville. (3 pts)
2. Caractériser chaque climat (chaud-humide, chaud-sec ou tropical à saisons contrastées). (3 pts)

### Partie B — Stratégies (10 points)
3. Pourquoi l'**inertie thermique** (murs lourds) est-elle efficace à Korhogo et peu utile à Abidjan ? (3 pts)
4. Proposer pour Abidjan quatre dispositions constructives adaptées (ventilation, protections, toiture, humidité). (4 pts)
5. Proposer pour Korhogo trois dispositions adaptées (inertie, protection contre l'harmattan, fraîcheur nocturne). (3 pts)

### Partie C — Pluie (4 points)
6. Pour une toiture de **300 m²**, calculer le volume d'eau de pluie annuel dans chaque ville. (2 pts)
7. Quelles conséquences sur les gouttières, les débords et les fondations ? (2 pts)`,
  corrige:`### Partie A — Lecture (6 pts)
1. Abidjan : amplitude **7 °C**, moyenne (32 + 25) / 2 = **28,5 °C** ; Korhogo : amplitude **17 °C**, moyenne **27,5 °C**. *(3 pts)*
2. Abidjan : climat **chaud et humide** (faible amplitude, humidité élevée toute l'année) ; Korhogo : climat **tropical sec à saisons contrastées** (forte amplitude en saison sèche, harmattan). *(3 pts)*

### Partie B — Stratégies (10 pts)
3. À Korhogo, les nuits fraîches (19 °C) refroidissent les murs lourds, qui restituent cette fraîcheur le jour (déphasage). À Abidjan, la nuit reste chaude (25 °C) : les murs lourds ne se refroidissent pas et restituent la chaleur la nuit. *(3 pts)*
4. **Ventilation traversante** (bâtiments étroits, ouvertures face au vent de mer) ; **protections solaires** (débords, brise-soleil, façades est-ouest réduites) ; **toiture isolée et ventilée**, couleur claire ; constructions **légères ou ventilées** ; **protection contre l'humidité** (soubassements, drainage, matériaux qui sèchent). *(4 pts)*
5. **Murs épais** (BTC, terre, béton) et **ventilation nocturne** ; ouvertures réduites et protégées côté **nord-est** (harmattan, poussière) ; patios ombragés, végétation, toitures isolées. *(3 pts)*

### Partie C — Pluie (4 pts)
6. Abidjan : 300 × 1,8 = **540 m³/an** ; Korhogo : 300 × 1,2 = **360 m³/an** (à multiplier par ≈ 0,8 pour l'eau récupérable). *(2 pts)*
7. Gouttières et descentes plus généreuses sur le littoral (averses violentes) ; **débords** larges pour protéger les murs ; **drainage** autour des fondations et pentes de terrain éloignant l'eau du bâtiment. *(2 pts)*

> [!attention] Erreurs à éviter
> - Appliquer partout le même modèle de bâtiment.
> - Construire lourd et fermé en climat chaud et humide.
> - Oublier l'harmattan et la poussière dans le nord.`},
 exercices:[
  {t:"Lire des données climatiques", d:1, e:`Relevés moyens d'un mois de saison sèche : Abidjan : 31 °C / 24 °C, HR 82 % ; Korhogo : 35 °C / 18 °C, HR 30 %.
a) Calculer l'écart jour-nuit de chaque ville.
b) Pour quelle ville des murs lourds sont-ils le plus utiles ? Pourquoi ?`, c:`a) Abidjan : 31 − 24 = **7 °C** ; Korhogo : 35 − 18 = **17 °C**.
b) **Korhogo** : les murs lourds se refroidissent pendant la nuit fraîche et absorbent la chaleur le jour. À Abidjan, la nuit reste chaude et humide : des murs lourds restituent la chaleur la nuit sans s'être vraiment rafraîchis ; on préfère la ventilation.`},
  {t:"Eau de pluie sur une toiture", d:1, e:`Une toiture de 120 m² (projection horizontale) reçoit 1 800 mm de pluie par an à Abidjan.
Quel volume d'eau tombe sur la toiture en un an ? Combien de citernes de 10 m³ pourrait-on remplir (en supposant 80 % d'eau récupérable) ?`, c:`V = 1,8 m × 120 m² = **216 m³** par an.
Récupérable : 0,8 × 216 = **173 m³** → plus de **17 citernes** de 10 m³ : une ressource précieuse pour l'arrosage, les WC ou le lavage.`},
  {t:"Choisir les priorités", d:1, e:`Classer, pour une maison à San-Pédro, les dispositions suivantes de la plus utile à la moins utile : murs très épais en pierre ; débords de toiture larges ; fenêtres sur deux façades opposées ; toiture isolée ; petites fenêtres.`, c:`Climat chaud et humide, écart jour-nuit faible :
1. **Toiture isolée** (la toiture reçoit le plus de soleil) ;
2. **Fenêtres sur deux façades opposées** (ventilation traversante) ;
3. **Débords de toiture larges** (ombre et protection contre la pluie) ;
4. Petites fenêtres : peu utiles, elles gênent la ventilation ;
5. Murs très épais : peu utiles au sud (la nuit ne les rafraîchit pas).`},
  {t:"Effet de la végétation", d:2, e:`Une cour bétonnée de 200 m² est exposée au soleil. On propose de remplacer 120 m² de béton par du gazon et trois arbres.
Citer deux effets sur le microclimat et un effet sur les eaux pluviales.`, c:`Microclimat : les arbres **ombragent** le sol et les façades ; la végétation **rafraîchit l'air** par évapotranspiration (2 à 3 °C) ; le gazon stocke beaucoup moins de chaleur que le béton (moins de rayonnement la nuit).
Eaux pluviales : le gazon **infiltre** une partie de la pluie → moins de ruissellement, caniveaux moins sollicités.`},
  {t:"Construire au nord ou au sud ?", d:2, e:`Un même plan de maison doit être construit à Abidjan et à Korhogo. Proposer deux adaptations différentes pour chaque ville.`, c:`**Abidjan** : maximiser la **ventilation traversante** (grandes ouvertures protégées, plan peu profond, maison surélevée ou ouverte au vent) ; **toiture légère, isolée et ventilée**, débords généreux contre le soleil et la pluie battante.
**Korhogo** : **murs lourds** (blocs de terre comprimée, béton) et toiture à forte inertie ou bien isolée ; **ventilation nocturne** (ouvrir la nuit, fermer le jour) ; protection contre la **poussière** de l'harmattan (menuiseries étanches), cours ombragées.`}
 ],
 quiz:[
  {q:"Le climat d'Abidjan est surtout :", o:["Chaud et humide","Chaud et sec","Froid et humide","Tempéré"], r:0, e:"Climat subéquatorial."},
  {q:"L'harmattan est :", o:["Un vent sec et poussiéreux de saison sèche","Une pluie d'orage","Un vent marin humide","Une saison froide"], r:0, e:"Il souffle de décembre à février au nord."},
  {q:"Les murs lourds sont surtout efficaces quand :", o:["L'écart jour-nuit est grand","L'air est très humide","Il pleut beaucoup","Il n'y a pas de soleil"], r:0, e:"Ils stockent la fraîcheur nocturne."},
  {q:"L'îlot de chaleur urbain est dû :", o:["Aux surfaces minérales qui stockent la chaleur","Aux arbres","À la lagune","À la pluie"], r:0, e:"Bitume, béton, tôle."},
  {q:"En climat chaud et humide, la priorité est :", o:["Ventiler et se protéger du soleil","Chauffer","Fermer toutes les ouvertures","Construire très lourd"], r:0, e:"Évacuer chaleur et humidité."}
 ]},

{id:"pb-10", niv:1, titre:"Le soleil et le bâtiment : course, orientation et ombres", duree:45, contenu:`## La course apparente du soleil
Vu de la Terre, le soleil se lève à l'est, culmine à **midi solaire** et se couche à l'ouest. Sa hauteur à midi varie au cours de l'année à cause de l'inclinaison de l'axe de la Terre. On la repère par la **déclinaison** δ :
- δ = + 23,45° au **solstice de juin** (21 juin) ;
- δ = 0° aux **équinoxes** (21 mars et 23 septembre) ;
- δ = − 23,45° au **solstice de décembre** (21 décembre).

## La hauteur du soleil à midi
Pour un lieu de latitude φ (positive au nord de l'équateur) :
$$ h(midi) = 90° − | φ − δ |
Le soleil est au **sud** à midi quand δ < φ, au **nord** quand δ > φ.

| Ville (latitude) | 21 juin | Équinoxes | 21 décembre |
|---|---|---|---|
| Abidjan (5,3° N) | 72° au nord | 85° au sud | 61° au sud |
| Yamoussoukro (6,8° N) | 73° au nord | 83° au sud | 60° au sud |
| Korhogo (9,5° N) | 76° au nord | 81° au sud | 57° au sud |

!fig:soleil|Hauteur du soleil à midi à Abidjan selon la saison

Conséquences pour la Côte d'Ivoire, proche de l'équateur :
- à midi, le soleil est **presque à la verticale** toute l'année : c'est la **toiture** qui reçoit le plus d'énergie ;
- les façades **nord et sud** reçoivent un soleil **haut**, facile à arrêter avec un débord ; la façade nord est ensoleillée environ de mai à août ;
- les façades **est et ouest** reçoivent le soleil **bas** du matin et de l'après-midi, qui pénètre profondément dans les pièces : ce sont les plus difficiles à protéger, et la façade **ouest** reçoit ce soleil au moment le plus chaud de la journée ;
- la durée du jour varie peu : environ **12 h ± 20 min** à Abidjan, ± 35 min à Korhogo.

## Orienter le bâtiment
- Allonger le bâtiment selon l'axe **est-ouest**, pour placer les grandes façades au **nord et au sud** ;
- Réduire et protéger les ouvertures à l'**est** et surtout à l'**ouest** ; y placer de préférence les locaux de service (garage, buanderie, escalier, WC) ;
- Concilier avec la direction des **vents dominants** pour la ventilation : un écart de 30 à 45° entre l'axe du vent et la façade reste efficace.

## Les ombres portées
Un obstacle de hauteur H éclairé par un soleil de hauteur h projette une ombre de longueur :
$$ L = H / tan h
> [!exemple] Immeuble de 15 m
> Soleil à 40° (milieu de matinée ou d'après-midi) : L = 15/tan 40° = **17,9 m**.
> À midi aux équinoxes à Abidjan (h = 84,7°) : L = 15/tan 84,7° = **1,4 m** seulement.
> Les ombres utiles pour rafraîchir une cour ou une façade sont donc surtout celles du matin et du soir, ou celles des **arbres** et des **auvents**.

## L'énergie reçue
Par ciel clair, le rayonnement solaire atteint environ **1 000 W/m²** sur une surface perpendiculaire aux rayons. Sur une journée, une surface horizontale reçoit en Côte d'Ivoire de **4,5 à 5,5 kWh/m²**. Une toiture de 100 m² reçoit donc chaque jour l'équivalent de 500 kWh, dont une partie traverse vers les pièces si elle n'est pas isolée et ventilée.

> [!retenir]
> - h(midi) = 90° − |φ − δ| ; δ varie de − 23,45° à + 23,45°.
> - Près de l'équateur : soleil presque vertical à midi → protéger d'abord la toiture.
> - Façades nord/sud faciles à protéger ; est et surtout ouest à limiter.
> - Ombre portée L = H/tan h.`,
 sujet:{titre:"La course du soleil à Bouaké : hauteur à midi, ombres et orientation", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un lotissement est projeté à **Bouaké (latitude φ = 7,7° N)**. Vous étudiez l'ensoleillement pour orienter les bâtiments.

**Données**
- Déclinaison : δ = + 23,45° (21 juin) ; 0° (équinoxes) ; − 23,45° (21 décembre) ;
- Hauteur du soleil à midi : h = 90° − | φ − δ | ;
- Longueur d'ombre d'un objet de hauteur H : L = H / tan h ;
- Immeuble R+3 de **12 m** de haut.

### Partie A — Hauteur du soleil à midi (6 points)
1. Calculer h à midi le 21 juin, aux équinoxes et le 21 décembre. (4 pts)
2. Le 21 juin, le soleil est-il au nord ou au sud à midi ? Conséquence pour une façade nord ? (2 pts)

### Partie B — Ombres (8 points)
3. Calculer la longueur de l'ombre de l'immeuble à midi aux trois dates. (4 pts)
4. Calculer l'ombre en milieu de matinée (h = 35°). (2 pts)
5. Quel espacement minimal entre deux immeubles pour ne pas priver de soleil une cour à midi le 21 décembre ? (2 pts)

### Partie C — Orientation (6 points)
6. Quelles façades reçoivent le plus de rayonnement sous ces latitudes ? Pourquoi ? (3 pts)
7. Proposer l'orientation des grandes façades et des pièces de vie. (3 pts)`,
  corrige:`### Partie A — Hauteur (6 pts)
1. *(4 pts)*
   - 21 juin : 90 − |7,7 − 23,45| = 90 − 15,75 = **74,3°** ;
   - équinoxes : 90 − 7,7 = **82,3°** ;
   - 21 décembre : 90 − |7,7 + 23,45| = **58,9°**.
2. δ (23,45°) > φ (7,7°) : le soleil passe **au nord** à midi. La façade nord reçoit donc du soleil direct en juin-juillet (à protéger aussi, par de petits débords). *(2 pts)*

### Partie B — Ombres (8 pts)
3. 21 juin : 12 / tan 74,3° = **3,4 m** (vers le sud) ; équinoxes : 12 / tan 82,3° = **1,6 m** ; 21 décembre : 12 / tan 58,9° = **7,3 m** (vers le nord). *(4 pts)*
4. 12 / tan 35° = **17,1 m**. *(2 pts)*
5. Au moins **7,3 m** entre l'immeuble et la cour au nord (davantage pour ensoleiller aussi les façades). *(2 pts)*

### Partie C — Orientation (6 pts)
6. La **toiture** (soleil presque vertical à midi) puis les façades **est et ouest** (soleil bas, rayons presque perpendiculaires le matin et l'après-midi, l'ouest aux heures les plus chaudes). Les façades nord et sud reçoivent peu, et un petit débord les protège. *(3 pts)*
7. Grandes façades et ouvertures **au nord et au sud** ; pignons courts, pièces de service (escaliers, sanitaires, rangements) ou murs pleins à **l'est et à l'ouest** ; tenir compte des vents dominants pour la ventilation. *(3 pts)*

> [!attention] Erreurs à éviter
> - Croire que le soleil est toujours au sud à midi sous les tropiques.
> - Protéger le sud et oublier l'ouest.
> - Calculer tan avec une calculatrice en radians.`},
 exercices:[
  {t:"Hauteur du soleil à Korhogo", d:1, e:`Korhogo est à la latitude 9,5° N. Calculer la hauteur du soleil à midi le 21 juin, aux équinoxes et le 21 décembre, et préciser s'il est au nord ou au sud.`, c:`21 juin : 90 − |9,5 − 23,45| = 90 − 13,95 = **76,0°, au nord** (δ > φ).
Équinoxes : 90 − 9,5 = **80,5°, au sud**.
21 décembre : 90 − |9,5 + 23,45| = 90 − 32,95 = **57,0°, au sud**.`},
  {t:"Longueur d'une ombre", d:1, e:`Un mur de clôture de 2,40 m est éclairé par un soleil de hauteur 30°, puis 60°.
Calculer la longueur de l'ombre portée au sol (perpendiculairement au mur, soleil face au mur).`, c:`h = 30° : L = 2,40/tan 30° = 2,40/0,577 = **4,16 m**.
h = 60° : L = 2,40/1,732 = **1,39 m**.`},
  {t:"Quelle façade est ensoleillée ?", d:2, e:`À Abidjan, le 15 juillet (δ ≈ + 21,5°), le soleil est-il au nord ou au sud à midi ? Quelle est sa hauteur ? Quelle façade d'une maison reçoit donc le soleil à midi ?`, c:`δ = 21,5° > φ = 5,3° : le soleil est **au nord**.
h = 90 − |5,3 − 21,5| = 90 − 16,2 = **73,8°**.
C'est la **façade nord** qui est ensoleillée à midi en juillet : elle doit, elle aussi, être protégée par un débord.`},
  {t:"Orienter un bâtiment scolaire", d:2, e:`Une école de 6 classes alignées (45 m × 9 m) doit être implantée sur un terrain dégagé à Bouaké. Les vents dominants viennent du sud-ouest.
Proposer une orientation et justifier.`, c:`Grand axe **est-ouest** : les longues façades (45 m), qui portent les fenêtres des classes, sont au **nord et au sud**, faciles à protéger par des débords. Les pignons (9 m), à l'est et à l'ouest, sont aveugles ou très peu percés.
Vent du sud-ouest : il arrive avec un angle d'environ 45° sur la façade sud, ce qui reste favorable à une **ventilation traversante** sud → nord des classes.`},
  {t:"Énergie reçue par une toiture", d:2, e:`Une toiture de 150 m² reçoit 5 kWh/m² par jour. Une toiture en tôle non isolée en transmet environ 8 % vers l'intérieur, une toiture isolée et ventilée environ 1,5 %.
Calculer l'énergie qui pénètre chaque jour dans chaque cas, et la comparer à la production de froid d'un climatiseur de 3,5 kW fonctionnant 8 h.`, c:`Énergie reçue : 150 × 5 = **750 kWh/jour**.
Tôle nue : 0,08 × 750 = **60 kWh/jour** ; toiture isolée : 0,015 × 750 = **11,3 kWh/jour**.
Un climatiseur de 3,5 kW pendant 8 h extrait **28 kWh** : il ne compense même pas la moitié des apports d'une tôle nue, mais il suffit largement avec une toiture isolée.`}
 ],
 quiz:[
  {q:"Hauteur du soleil à midi aux équinoxes à Abidjan (5,3° N) :", o:["84,7°","45°","61,3°","90°"], r:0, e:"90 − 5,3."},
  {q:"En juin, à Abidjan, le soleil de midi est :", o:["Au nord","Au sud","À l'est","À l'ouest"], r:0, e:"δ = 23,45° > φ."},
  {q:"La paroi la plus exposée au soleil sous les tropiques est :", o:["La toiture","La façade nord","La façade sud","Le plancher"], r:0, e:"Soleil presque vertical."},
  {q:"Les façades les plus difficiles à protéger sont :", o:["Est et ouest","Nord et sud","Toutes de la même façon","Aucune"], r:0, e:"Soleil bas."},
  {q:"Longueur de l'ombre d'un poteau de 3 m avec un soleil à 45° :", o:["3 m","1,5 m","6 m","4,2 m"], r:0, e:"tan 45° = 1."}
 ]},

{id:"pb-6", niv:1, titre:"Le confort de l'occupant : chaleur, humidité, air et lumière", duree:45, contenu:`## Qu'est-ce que le confort ?
Le confort est la sensation de **bien-être** : ni trop chaud ni trop froid, un air sain, une lumière suffisante sans éblouissement, peu de bruit. Un bâtiment confortable améliore la santé, le sommeil, la concentration des élèves et la productivité des travailleurs.

## Le confort thermique : six paramètres
**Liés à l'ambiance :**
1. La **température de l'air** ;
2. La **température des parois** (rayonnement des murs, de la toiture, des vitrages) ;
3. L'**humidité relative** de l'air ;
4. La **vitesse de l'air**.
**Liés à l'occupant :**
5. L'**activité** (métabolisme : repos, travail de bureau, travail physique) ;
6. L'**habillement**.

## La température ressentie : la température opérative
Le corps échange de la chaleur avec l'air (convection) et avec les parois (rayonnement). On définit approximativement :
$$ T(opérative) ≈ (T(air) + T(parois)) / 2
> [!exemple] Sous une toiture en tôle
> Air à 30 °C ; sous-face de la tôle non isolée à 45 °C, autres parois à 32 °C → température moyenne des parois ≈ 38 °C.
> T(opérative) ≈ (30 + 38)/2 = **34 °C** : on a très chaud alors que l'air n'est « qu'à » 30 °C.
> Avec un faux plafond isolé, les parois descendent vers 31 °C : T(opérative) ≈ (30 + 31)/2 = **30,5 °C**, soit 3,5 °C de mieux sans aucun climatiseur.

## Le rôle de l'humidité et de la vitesse de l'air
- Le corps se refroidit surtout par **évaporation de la sueur**. Quand l'air est très humide (80 à 90 %), la sueur s'évapore mal : la chaleur est plus pénible.
- Un **mouvement d'air** favorise l'évaporation et les échanges : une vitesse de **1 m/s** procure une sensation de fraîcheur équivalente à une baisse de **3 à 4 °C**. C'est le principe du **ventilateur de plafond** (consommation de 50 à 75 W, contre 1 000 à 2 000 W pour un climatiseur).
- Au-delà de 1,5 à 2 m/s à l'intérieur, les papiers s'envolent : c'est la limite pratique.

## La zone de confort en climat tropical
Les personnes habituées au climat chaud acceptent des températures plus élevées (confort **adaptatif**). En ventilation naturelle, on vise environ :
- température opérative de **24 à 29 °C** ;
- humidité relative de **30 à 70 %** (au-delà, sensation de moiteur, moisissures) ;
- vitesse d'air de **0,5 à 1,5 m/s** quand il fait chaud.
En climatisation, une consigne de **25 à 26 °C** suffit et économise beaucoup d'énergie (chaque degré de moins augmente la consommation d'environ 6 à 8 %).

## Les autres conforts
- **Visuel** : éclairement suffisant (300 à 500 lux pour lire ou travailler), absence d'éblouissement, vue vers l'extérieur ;
- **Respiratoire** : air renouvelé, sans odeurs, sans fumée de cuisson, teneur en CO₂ de préférence sous 1 000 ppm ;
- **Acoustique** : protection contre les bruits de la rue, des voisins, des équipements (voir le cours d'acoustique).

> [!retenir]
> - Six paramètres : air, parois, humidité, vitesse d'air, activité, habillement.
> - T(opérative) ≈ moyenne de l'air et des parois : des parois chaudes rendent la chaleur insupportable.
> - Un courant d'air de 1 m/s équivaut à 3 à 4 °C de moins.
> - Confort en ventilation naturelle : 24 à 29 °C, HR 30 à 70 %, air en mouvement.`,
 sujet:{titre:"Le confort thermique sous une toiture en tôle : température opérative, air et humidité", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Des enseignants d'une école de Divo se plaignent de la chaleur dans les classes couvertes en tôle sans faux plafond.

**Données**
- Air intérieur : **31 °C** ; humidité relative **70 %** ;
- Température moyenne des parois sans faux plafond : **35 °C** (sous-face de la tôle à 46 °C) ;
- Avec faux plafond isolé et ventilé : température moyenne des parois **32 °C** ;
- T(opérative) ≈ (T(air) + T(parois)) / 2 ;
- Un mouvement d'air de **1 m/s** abaisse la température ressentie d'environ **3 à 4 °C** ;
- Zone de confort indicative en climat tropical : température opérative **≤ 28 à 29 °C** avec un peu de mouvement d'air.

### Partie A — Les facteurs du confort (5 points)
1. Citer les six paramètres du confort thermique (4 liés à l'ambiance, 2 à l'occupant). (3 pts)
2. Comment le corps perd-il sa chaleur ? Lequel de ces modes devient difficile quand l'air est humide ? (2 pts)

### Partie B — Température opérative (8 points)
3. Calculer la température opérative actuelle. (2 pts)
4. Calculer la température opérative avec le faux plafond isolé. Gain ? (3 pts)
5. Avec en plus des ventilateurs de plafond (1 m/s), quelle température ressentie ? Le confort est-il atteint ? (3 pts)

### Partie C — Solutions (7 points)
6. Proposer quatre solutions pour améliorer le confort sans climatisation. (4 pts)
7. Pourquoi la climatisation n'est-elle pas la première solution à proposer ? (3 pts)`,
  corrige:`### Partie A — Facteurs (5 pts)
1. Ambiance : **température de l'air**, **température des parois** (rayonnement), **vitesse de l'air**, **humidité** ; occupant : **activité** (métabolisme) et **vêtement**. *(3 pts)*
2. Convection, rayonnement, conduction et **évaporation** de la sueur ; l'évaporation devient difficile quand l'air est **humide** (l'air est déjà chargé de vapeur). *(2 pts)*

### Partie B — Température opérative (8 pts)
3. (31 + 35) / 2 = **33 °C** : on se sent à 33 °C. *(2 pts)*
4. (31 + 32) / 2 = **31,5 °C** → gain de **1,5 °C** de température ressentie (et beaucoup moins de rayonnement chaud sur la tête). *(3 pts)*
5. 31,5 − 3 à 4 ≈ **28 °C** ressentis : on approche de la zone de confort. *(3 pts)*

### Partie C — Solutions (7 pts)
6. **Faux plafond isolé** et ventilation des combles ; **tôle claire** ou peinture réfléchissante ; **ventilateurs** de plafond ; **ventilation traversante** (fenêtres face à face, impostes hautes) ; **protections solaires** (débords, arbres) ; ombrager la cour. *(4 pts)*
7. Coût d'installation et d'**électricité** (souvent indisponible ou cher), entretien, bruit, nécessité de fermer les fenêtres ; elle traite les symptômes : on commence par réduire les apports de chaleur (conception) avant de climatiser. *(3 pts)*

> [!attention] Erreurs à éviter
> - Ne regarder que la température de l'air.
> - Oublier le rayonnement d'une tôle chaude au-dessus des têtes.
> - Climatiser un bâtiment mal conçu : facture énorme pour un confort médiocre.`},
 exercices:[
  {t:"Température opérative", d:1, e:`Dans une classe, l'air est à 29 °C. Calculer la température opérative : a) si les parois sont à 35 °C (toiture non isolée) ; b) si elles sont à 30 °C (toiture isolée).`, c:`a) (29 + 35)/2 = **32 °C**.
b) (29 + 30)/2 = **29,5 °C**, soit 2,5 °C de mieux : l'isolation de la toiture améliore directement le confort.`},
  {t:"Ventilateur ou climatiseur ?", d:1, e:`Un ventilateur de plafond de 60 W donne une sensation de fraîcheur équivalente à 3 °C de moins. Un climatiseur de 1 200 W abaisse réellement la température de la pièce.
Comparer leur consommation pour 10 h par jour pendant 30 jours.`, c:`Ventilateur : 0,06 × 10 × 30 = **18 kWh**.
Climatiseur : 1,2 × 10 × 30 = **360 kWh**, soit **20 fois plus**.
Le ventilateur suffit souvent dans un bâtiment bien protégé du soleil ; le climatiseur n'est utile que si la température opérative dépasse nettement la zone de confort.`},
  {t:"Consigne de climatisation", d:2, e:`Un bureau climatisé à 21 °C consomme 300 kWh par mois. On relève la consigne à 25 °C.
Estimer la nouvelle consommation (7 % d'économie par degré).`, c:`4 degrés × 7 % ≈ 28 % d'économie (en première approximation).
Nouvelle consommation ≈ 300 × (1 − 0,28) = **216 kWh** par mois, soit **84 kWh** économisés, sans perte de confort pour des occupants habillés légèrement.`},
  {t:"Diagnostiquer l'inconfort", d:2, e:`Dans un logement à Abidjan, les occupants se plaignent de chaleur moite le soir. Mesures : air 30 °C, humidité 85 %, air immobile, plafond en dalle béton à 34 °C (toiture-terrasse non isolée).
Identifier les causes et proposer trois actions.`, c:`Causes : **parois chaudes** (dalle de toiture à 34 °C qui rayonne), **humidité très élevée** (la sueur s'évapore mal), **air immobile**.
Actions : isoler la toiture-terrasse (isolant + protection claire) ; créer une **ventilation traversante** (ouvertures opposées, grilles hautes) ; installer un **ventilateur de plafond** ; extraire la vapeur de la cuisine et des douches.`},
  {t:"Qualité de l'air et lumière", d:2, e:`Une salle de réunion fermée accueille 12 personnes pendant 2 h ; on mesure 1 800 ppm de CO₂ et 120 lux sur la table.
Ces valeurs sont-elles satisfaisantes ? Que proposer ?`, c:`CO₂ : 1 800 ppm > 1 000 ppm → air **insuffisamment renouvelé** (fatigue, maux de tête) : ouvrir des fenêtres hautes ou installer une ventilation mécanique (de l'ordre de 25 m³/h par personne, voir chapitre Ventilation).
Éclairement : 120 lux < 300 à 500 lux recommandés pour lire → **insuffisant** : ouvrir les occultations ou compléter l'éclairage.`}
 ],
 quiz:[
  {q:"La température opérative tient compte :", o:["De l'air et des parois","De l'air seulement","De l'humidité seulement","Du vent extérieur"], r:0, e:"Convection et rayonnement."},
  {q:"Un courant d'air de 1 m/s procure une sensation de fraîcheur d'environ :", o:["3 à 4 °C","0,1 °C","10 °C","20 °C"], r:0, e:"Effet du ventilateur."},
  {q:"Une humidité très élevée gêne surtout :", o:["L'évaporation de la sueur","La vision","L'audition","La digestion"], r:0, e:"Le corps se refroidit mal."},
  {q:"Teneur en CO₂ conseillée dans une salle occupée :", o:["Moins de 1 000 ppm","Plus de 5 000 ppm","Exactement 0","Plus de 2 000 ppm"], r:0, e:"Indicateur de renouvellement d'air."},
  {q:"Consigne de climatisation raisonnable en climat tropical :", o:["25 à 26 °C","16 °C","20 °C","30 °C"], r:0, e:"Économies importantes."}
 ]},

{id:"pb-3", niv:1, titre:"Éclairage naturel et artificiel : les bases", duree:45, contenu:`## Les grandeurs de la lumière
| Grandeur | Symbole | Unité | Ce qu'elle mesure |
|---|---|---|---|
| Flux lumineux | Φ | lumen (lm) | Quantité de lumière émise par une source |
| Éclairement | E | lux (lx) = lm/m² | Lumière reçue par une surface |
| Luminance | L | cd/m² | Brillance d'une surface vue par l'œil (éblouissement) |
| Efficacité lumineuse | η | lm/W | Lumière produite par watt consommé |

Si un flux Φ tombe uniformément sur une surface S : **E = Φ / S**. Par ciel clair en Côte d'Ivoire, l'éclairement extérieur dépasse 50 000 à 100 000 lux en plein soleil, et reste de 10 000 à 20 000 lux à l'ombre ou par ciel couvert : la lumière naturelle est abondante, le défi est de la faire entrer **sans la chaleur**.

## Combien de lumière faut-il ?
| Local ou activité | Éclairement recommandé |
|---|---|
| Circulations, escaliers | 100 lux |
| Séjour, chambre (ambiance) | 150 à 300 lux |
| Cuisine (plan de travail) | 300 lux |
| Salle de classe | 300 à 500 lux |
| Bureau, lecture, écran | 500 lux |
| Atelier de précision, dessin | 750 lux et plus |

## Les sources artificielles
| Source | Efficacité lumineuse | Durée de vie |
|---|---|---|
| Lampe à incandescence | 10 à 15 lm/W | 1 000 h |
| Tube fluorescent, lampe fluocompacte | 50 à 90 lm/W | 8 000 à 15 000 h |
| LED | 100 à 150 lm/W | 25 000 à 50 000 h |
Une lampe à incandescence transforme 95 % de son énergie en **chaleur** : sous les tropiques, elle chauffe la pièce et augmente la climatisation. La LED est aujourd'hui le meilleur choix.

## L'éclairage naturel
On mesure la qualité de l'éclairage naturel par le **facteur de lumière du jour** (FLJ) :
$$ FLJ = E(intérieur) / E(extérieur, ciel couvert) × 100     (%)
| FLJ | Impression |
|---|---|
| < 1 % | Sombre : lumière artificielle nécessaire |
| 1,5 à 2 % | Correct pour un logement, minimum pour une classe ou un bureau |
| 2 à 5 % | Bien éclairé |
| > 5 % | Très clair, risque d'éblouissement et de chaleur |

> [!exemple] Classe de 9 × 7 m
> Avec un FLJ de 2 % et 15 000 lux dehors : E = 0,02 × 15 000 = **300 lux** sur les tables.
> Règle simple de prédimensionnement : surface vitrée ≥ **1/6** de la surface du plancher pour une classe → 63/6 = **10,5 m²** de fenêtres (1/8 à 1/10 suffit pour un logement).

## Règles pratiques pour bien éclairer naturellement
- La lumière pénètre utilement jusqu'à environ **2 à 2,5 fois la hauteur du linteau** : avec un linteau à 2,20 m, la zone bien éclairée a 4,5 à 5,5 m de profondeur. Une pièce plus profonde demande un éclairage **bilatéral** (fenêtres sur deux côtés) ou des ouvertures hautes.
- Placer les fenêtres **haut** (la lumière du ciel descend plus loin) ;
- Utiliser des **couleurs claires** au plafond et sur les murs (réflexion) ;
- **Protéger du soleil direct** (débords, brise-soleil) : la lumière du ciel et des sols suffit, le rayon direct apporte surtout de la chaleur et de l'éblouissement ;
- Éviter de placer les tableaux et les écrans face aux fenêtres.

> [!retenir]
> - E = Φ/S (lux) ; LED ≈ 100 lm/W, incandescence ≈ 12 lm/W.
> - 300 à 500 lux pour lire et travailler.
> - FLJ ≥ 2 % pour une classe ; fenêtres ≥ 1/6 du plancher.
> - Profondeur éclairée ≈ 2 à 2,5 fois la hauteur du linteau ; lumière sans soleil direct.`,
 sujet:{titre:"Éclairage naturel d'une salle de classe : surface vitrée et facteur de lumière du jour", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une salle de classe de **8,00 × 7,00 m** est prévue dans un collège à Man. On veut un éclairage naturel suffisant pour lire et écrire.

**Données**
- Éclairement extérieur par ciel couvert : **12 000 lux** ;
- FLJ = E(intérieur) / E(extérieur) × 100 ; besoin sur les tables : **300 lux** ;
- Règle de prédimensionnement : surface vitrée ≥ **1/6** de la surface du plancher pour une classe ;
- Fenêtres standard : **1,20 × 1,20 m**.

### Partie A — Notions (5 points)
1. Définir l'éclairement (lux) et le flux lumineux (lumen). (2 pts)
2. Pourquoi utilise-t-on le ciel couvert pour dimensionner l'éclairage naturel ? (1 pt)
3. Pourquoi faut-il éviter le soleil direct sur les tables et le tableau ? (2 pts)

### Partie B — Dimensionnement (9 points)
4. Calculer la surface vitrée minimale et le nombre de fenêtres. (3 pts)
5. Calculer le FLJ nécessaire pour obtenir 300 lux. (2 pts)
6. Avec un FLJ mesuré de 2,5 % au fond de la classe, l'éclairement est-il suffisant ? (2 pts)
7. Comment répartir les fenêtres (un ou deux côtés, hauteur des allèges) ? (2 pts)

### Partie C — Confort visuel (6 points)
8. Citer trois causes d'éblouissement et une solution pour chacune. (3 pts)
9. Pourquoi les parois et le plafond clairs améliorent-ils l'éclairage ? (1 pt)
10. Quelle orientation de fenêtres privilégier en Côte d'Ivoire ? (2 pts)`,
  corrige:`### Partie A — Notions (5 pts)
1. **Éclairement** : flux reçu par unité de surface (lux = lm/m²) ; **flux lumineux** : quantité de lumière émise par une source (lumen). *(2 pts)*
2. C'est la situation la plus défavorable courante : si l'éclairage suffit par ciel couvert, il suffira presque toujours. *(1 pt)*
3. Le soleil direct crée des **taches très lumineuses**, de l'**éblouissement**, des reflets sur le tableau et de la **chaleur**. *(2 pts)*

### Partie B — Dimensionnement (9 pts)
4. 56 / 6 = **9,33 m²** ; une fenêtre fait 1,44 m² → 9,33 / 1,44 = 6,5 → **7 fenêtres** (10,1 m²). *(3 pts)*
5. FLJ = 300 / 12 000 = **2,5 %**. *(2 pts)*
6. E = 0,025 × 12 000 = **300 lux** ✔ (juste suffisant au point le plus défavorable). *(2 pts)*
7. Fenêtres sur **les deux longs côtés** (éclairage bilatéral et ventilation traversante), allèges vers 1,00 m, linteaux hauts (la lumière pénètre plus loin) ; lumière principale venant de la gauche des élèves droitiers. *(2 pts)*

### Partie C — Confort visuel (6 pts)
8. Soleil direct → **débords, brise-soleil** ; ciel lumineux vu en face → orienter les tables parallèlement aux fenêtres ; reflets sur le tableau → tableau mat, éclairage latéral ; contrastes trop forts → parois claires. *(3 pts)*
9. Elles **réfléchissent** la lumière et la répartissent dans la pièce (fond de classe moins sombre). *(1 pt)*
10. Fenêtres au **nord et au sud** (faciles à protéger du soleil par des débords) ; éviter l'est et l'ouest. *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre lux et lumens.
> - Ajouter des fenêtres à l'ouest : éblouissement et chaleur.
> - Oublier que le fond de la classe est le point le plus sombre.`},
 exercices:[
  {t:"Éclairement d'une surface", d:1, e:`Une lampe LED de 1 800 lm éclaire uniformément un plan de travail de 6 m² (on néglige les pertes).
Calculer l'éclairement. Est-il suffisant pour une cuisine ?`, c:`E = 1 800/6 = **300 lux** : c'est la valeur recommandée pour un plan de travail de cuisine.`},
  {t:"Passer aux LED", d:1, e:`Une école utilise 10 lampes à incandescence de 60 W (720 lm chacune), allumées 5 h par jour, 365 jours par an. On les remplace par des LED de 8 W (800 lm).
Calculer la puissance économisée et l'énergie économisée par an.`, c:`Avant : 10 × 60 = **600 W** ; après : 10 × 8 = **80 W** → économie 520 W (avec un peu plus de lumière).
Énergie : 0,52 × 5 × 365 = **949 kWh par an**, sans compter la chaleur en moins dans les salles.`},
  {t:"Facteur de lumière du jour", d:2, e:`Dans un bureau, on mesure 240 lux sur le plan de travail quand l'éclairement extérieur à l'ombre est de 16 000 lux.
a) Calculer le FLJ.
b) Quel FLJ faudrait-il pour obtenir 500 lux avec le même éclairement extérieur ?`, c:`a) FLJ = 240/16 000 × 100 = **1,5 %** : correct mais juste pour un bureau.
b) FLJ = 500/16 000 × 100 = **3,1 %** : il faudrait agrandir ou rehausser les fenêtres, ou éclaircir les parois.`},
  {t:"Dimensionner les fenêtres", d:1, e:`Une villa comprend une chambre de 12 m², un séjour de 30 m² et une classe d'école de quartier de 56 m².
Calculer la surface vitrée minimale de chacun (1/8 pour les pièces d'habitation, 1/6 pour la classe).`, c:`Chambre : 12/8 = **1,5 m²** ; séjour : 30/8 = **3,75 m²** ; classe : 56/6 = **9,3 m²**.
Ce sont des minimums de lumière ; pour la ventilation, on prévoit souvent davantage d'ouvrants (persiennes, impostes).`},
  {t:"Profondeur d'une salle", d:2, e:`Une salle de classe a 9 m de profondeur et des fenêtres d'un seul côté, avec un linteau à 2,40 m.
La partie du fond sera-t-elle bien éclairée ? Proposer une solution.`, c:`Zone bien éclairée : 2 à 2,5 × 2,40 = **4,8 à 6 m** < 9 m : le fond de la classe sera **sombre**.
Solutions : fenêtres sur les **deux façades** (éclairage bilatéral, qui sert aussi la ventilation traversante), ou **impostes hautes** et lanterneau, plafond et murs clairs.`}
 ],
 quiz:[
  {q:"L'éclairement se mesure en :", o:["Lux","Lumens","Candelas","Watts"], r:0, e:"1 lux = 1 lm/m²."},
  {q:"L'efficacité lumineuse d'une LED est d'environ :", o:["100 à 150 lm/W","12 lm/W","1 lm/W","1 000 lm/W"], r:0, e:"Huit à dix fois l'incandescence."},
  {q:"Éclairement recommandé pour un bureau :", o:["500 lux","50 lux","5 000 lux","100 lux"], r:0, e:"Lecture et écran."},
  {q:"La lumière naturelle pénètre utilement jusqu'à environ :", o:["2 à 2,5 fois la hauteur du linteau","10 fois la hauteur","1 m","La moitié de la hauteur"], r:0, e:"D'où l'éclairage bilatéral des pièces profondes."},
  {q:"Sous les tropiques, le rayon de soleil direct dans une pièce apporte surtout :", o:["De la chaleur et de l'éblouissement","Du confort","De l'humidité","Rien"], r:0, e:"On préfère la lumière du ciel."}
 ]},

{id:"pb-11", niv:1, titre:"L'eau et le bâtiment : pluie, sol et remontées capillaires", duree:45, contenu:`## Les ennemis liquides
L'eau est la première cause de dégradation des bâtiments. Elle arrive par :
- la **pluie**, surtout la **pluie battante** poussée par le vent sur les façades ;
- le **ruissellement** des eaux de surface vers les pieds de murs ;
- les **remontées capillaires** depuis le sol humide ;
- les **fuites** de réseaux (plomberie, évacuations) ;
- la **condensation** de la vapeur d'eau (niveau avancé) ;
- l'**eau de construction** (béton, enduits) qui doit sécher.

## Les remontées capillaires
Dans les pores fins d'un matériau (mortier, brique, parpaing, terre), l'eau monte spontanément, comme dans une mèche. La hauteur théorique est d'autant plus grande que les pores sont fins (loi de Jurin) :
$$ h = 2 σ cos θ / (ρ g r)     σ = 0,073 N/m pour l'eau
| Rayon des pores | Hauteur théorique |
|---|---|
| 0,1 mm | 0,15 m |
| 10 µm | 1,5 m |
| 1 µm | 15 m |
En pratique, l'évaporation à la surface du mur limite la remontée à **1 à 1,5 m**. Signes : bande humide en pied de mur, **salpêtre** (efflorescences blanches de sels), enduit et peinture qui cloquent et se décollent, odeur de moisi.

## Les protections à la construction
1. **Arase étanche** : couche de mortier hydrofuge (ou feutre bitumineux) à la base des murs, au-dessus du sol fini, pour couper la remontée capillaire ;
2. **Dallage sur hérisson** (pierres concassées qui coupent la capillarité) avec film polyane sous la dalle ;
3. **Soubassement** en matériau peu poreux, avec enduit hydrofuge sur 30 à 50 cm ;
4. **Pente du terrain** de 2 à 5 % sur au moins 2 à 3 m autour du bâtiment, trottoir périphérique ;
5. **Drainage** périphérique quand le terrain est humide ou en pente vers la maison ;
6. **Gouttières**, descentes et caniveaux qui éloignent l'eau des fondations.

## Se protéger de la pluie battante
- **Débords de toiture** généreux : 60 cm à 1 m sous les tropiques ; ils protègent aussi du soleil ;
- **Appuis de fenêtres** saillants avec **goutte d'eau** (rainure sous l'appui qui empêche l'eau de revenir vers le mur) ;
- **Enduits** extérieurs de qualité (deux à trois couches), peintures microporeuses qui laissent sortir la vapeur ;
- **Couvertines** sur les acrotères des toitures-terrasses.

> [!exemple] Hauteur de mur protégée par un débord
> Un débord de 0,80 m arrête une pluie qui tombe en faisant 30° avec la verticale sur une hauteur de mur de 0,80/tan 30° = **1,39 m** sous la toiture. Pour une pluie à 45°, la protection se réduit à 0,80 m.

## Les eaux d'orage
Les averses tropicales sont violentes : 80 à 120 mm/h pendant quelques minutes. Une toiture de 100 m² reçoit alors 100 × 0,1 = 10 m³/h, soit près de 3 L/s : gouttières et descentes doivent être dimensionnées en conséquence (voir cours de mécanique des fluides).

> [!retenir]
> - Capillarité : plus les pores sont fins, plus l'eau monte ; en pratique 1 à 1,5 m.
> - Arase étanche, hérisson et film, soubassement hydrofuge, pente du terrain, drainage.
> - Débords de 60 cm à 1 m, gouttes d'eau sous les appuis.
> - Les averses tropicales atteignent 100 mm/h.`,
 sujet:{titre:"Protéger le bâtiment de l'eau : pluie battante, débords et remontées capillaires", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une maison à Grand-Bassam présente des murs humides en pied et des traces d'eau en haut des façades exposées aux pluies.

**Données**
- Débord de toiture : **0,60 m** ; pluie tombant à **30°** puis **45°** de la verticale (vent) ;
- Hauteur capillaire : h = 2 σ cos θ / (ρ g r), σ = **0,073 N/m**, ρ = **1 000 kg/m³**, g = **9,81 m/s²**, θ ≈ 0 ;
- Rayons de pores : **0,1 mm** (sable), **10 µm** (mortier), **1 µm** (enduit fin, argile).

### Partie A — La pluie (7 points)
1. Calculer la hauteur de mur protégée par le débord pour une pluie à 30° puis à 45°. (4 pts)
2. Quels sont les points faibles d'une façade face à la pluie battante ? (3 pts)

### Partie B — Remontées capillaires (8 points)
3. Calculer la hauteur capillaire théorique pour chaque rayon de pore. (4 pts)
4. Pourquoi les remontées réelles ne dépassent-elles en général pas 1 à 1,5 m ? (2 pts)
5. Décrire les signes de remontées capillaires sur un mur. (2 pts)

### Partie C — Solutions (5 points)
6. Proposer des solutions pour une construction neuve. (3 pts)
7. Proposer des solutions pour la maison existante. (2 pts)`,
  corrige:`### Partie A — Pluie (7 pts)
1. h = 0,60 / tan 30° = **1,04 m** ; h = 0,60 / tan 45° = **0,60 m**. Plus la pluie est inclinée, moins le débord protège. *(4 pts)*
2. Appuis de fenêtres sans **rejingot** ni **larmier**, joints menuiserie-maçonnerie, **fissures** d'enduit, têtes de murs et acrotères sans couvertine, pied de façade éclaboussé (rebond de la pluie). *(3 pts)*

### Partie B — Capillarité (8 pts)
3. *(4 pts)*
   - r = 0,1 mm : h = 2 × 0,073 / (1 000 × 9,81 × 10⁻⁴) = **0,15 m** ;
   - r = 10 µm : **1,49 m** ;
   - r = 1 µm : **14,9 m** (théorique).
4. L'eau **s'évapore** par les faces du mur au fur et à mesure qu'elle monte : il s'établit un équilibre entre remontée et évaporation (souvent 1 à 1,5 m) ; les pores ne sont pas des tubes continus. *(2 pts)*
5. Bande humide en **pied de mur**, plus marquée après la saison des pluies, **salpêtre** (sels blancs), enduits et peintures qui cloquent et s'effritent, odeur de moisi. *(2 pts)*

### Partie C — Solutions (5 pts)
6. **Arase étanche** (chape hydrofuge ou film) entre fondation et maçonnerie ; soubassement en matériaux peu capillaires ; **drainage** périphérique ; trottoir avec pente vers l'extérieur ; débords suffisants. *(3 pts)*
7. **Injection** d'une barrière chimique hydrofuge dans le mur ; drainage périphérique ; remplacer les enduits ciment étanches par des enduits **respirants** (chaux) qui laissent sécher ; supprimer les terres contre le mur. *(2 pts)*

> [!attention] Erreurs à éviter
> - Couvrir un mur humide d'un enduit ou d'une peinture étanche : l'eau monte plus haut.
> - Confondre remontées capillaires, infiltrations et condensation.
> - Négliger l'entretien des gouttières.`},
 exercices:[
  {t:"Hauteurs de remontée capillaire", d:1, e:`Calculer la hauteur théorique de remontée de l'eau dans des pores de rayon 50 µm et 5 µm (σ = 0,073 N/m, mouillage parfait cos θ = 1).`, c:`50 µm : h = 2 × 0,073/(1 000 × 9,81 × 50 × 10⁻⁶) = **0,30 m**.
5 µm : h = 2 × 0,073/(1 000 × 9,81 × 5 × 10⁻⁶) = **2,98 m**.
Les matériaux à pores fins (mortiers, briques de terre) sont les plus sensibles.`},
  {t:"Pente du terrain", d:1, e:`Autour d'une maison, on veut une pente de 3 % sur 2,50 m. De combien le terrain doit-il descendre entre le pied du mur et la limite de cette bande ?`, c:`Dénivelé = 0,03 × 2,50 = **0,075 m = 7,5 cm**.`},
  {t:"Débord et pluie battante", d:2, e:`Un débord de toiture de 0,60 m protège un mur de 2,80 m de haut (de l'égout au sol).
Quelle hauteur de mur est protégée pour une pluie inclinée de 30° sur la verticale ? Quelle longueur de débord protégerait tout le mur ?`, c:`Hauteur protégée : 0,60/tan 30° = 0,60/0,577 = **1,04 m** sous l'égout.
Pour 2,80 m : d = 2,80 × tan 30° = **1,62 m**, peu réaliste : on complète par un **enduit hydrofuge** et un soubassement résistant, ou par une galerie couverte.`},
  {t:"Débit d'orage d'une toiture", d:2, e:`Une toiture de 150 m² reçoit une averse de 100 mm/h.
Calculer le débit à évacuer en m³/h et en L/s. Combien de descentes faut-il si chacune évacue 1,5 L/s ?`, c:`Q = 150 × 0,100 = **15 m³/h** = 15 000/3 600 = **4,2 L/s**.
Descentes : 4,2/1,5 = 2,8 → **3 descentes** (réparties pour limiter la longueur des gouttières).`},
  {t:"Diagnostic d'un pied de mur", d:3, e:`Dans une maison de 10 ans, les murs du rez-de-chaussée présentent sur 80 cm de hauteur une bande humide, des sels blancs et une peinture qui cloque, sur toutes les façades et même sur les cloisons intérieures. Le dallage est posé directement sur la terre.
Identifier la cause probable et proposer un traitement.`, c:`Bande humide régulière, sels (salpêtre), présence aussi sur les cloisons intérieures : **remontées capillaires** (absence d'arase étanche et de coupure capillaire sous le dallage).
Traitement : supprimer les enduits ciment étanches en pied de mur ; réaliser une **barrière étanche** par **injection** de résine hydrophobe à la base des murs ; assurer un **drainage** et une **pente** du terrain extérieur ; refaire des enduits **respirants** (chaux) ou un enduit d'assainissement ; laisser sécher plusieurs mois avant de repeindre.`}
 ],
 quiz:[
  {q:"Plus les pores d'un matériau sont fins, l'eau remonte :", o:["Plus haut","Moins haut","De la même hauteur","Pas du tout"], r:0, e:"h est inversement proportionnelle au rayon."},
  {q:"Le salpêtre est un signe de :", o:["Remontées capillaires","Condensation sur les vitres","Fissures structurelles","Termites"], r:0, e:"Sels transportés par l'eau du sol."},
  {q:"L'arase étanche se place :", o:["À la base des murs, au-dessus du sol","Sous la toiture","Dans les fondations profondes","Sur les fenêtres"], r:0, e:"Elle coupe la remontée capillaire."},
  {q:"La goutte d'eau sous un appui de fenêtre sert à :", o:["Empêcher l'eau de revenir vers le mur","Décorer","Ventiler","Évacuer la condensation intérieure"], r:0, e:"L'eau tombe au lieu de ruisseler sur la façade."},
  {q:"Débit d'une averse de 100 mm/h sur 100 m² :", o:["10 m³/h","1 m³/h","100 m³/h","1 000 m³/h"], r:0, e:"100 × 0,1."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"pb-2", niv:2, titre:"L'humidité dans le bâtiment : diagnostic et traitements", duree:50, contenu:`## L'eau dans les matériaux
Les matériaux poreux contiennent toujours un peu d'eau. On mesure leur **teneur en eau** :
$$ w = (m(humide) − m(sèche)) / m(sèche) × 100     (%)
La masse sèche s'obtient en séchant l'échantillon à l'étuve (105 °C) jusqu'à masse constante. Sur chantier, on utilise un **humidimètre** électrique (indicatif) ou la méthode à la **bombe à carbure** (précise, pour les chapes avant revêtement).

Un matériau placé longtemps dans un air donné atteint une **humidité d'équilibre** : le bois, dans l'air humide du littoral ivoirien, se stabilise vers 15 à 18 %. Il doit être mis en œuvre à une humidité proche de celle qu'il aura en service, sinon il **travaille** (retrait, gonflement, fentes, menuiseries qui coincent).

## L'eau de construction
Un bâtiment neuf contient beaucoup d'eau : un béton contient environ 180 L d'eau par m³, dont la moitié environ n'est pas fixée par le ciment et doit **sécher** ; les enduits et les mortiers aussi. Ce séchage prend des **mois**. Poser trop tôt un revêtement étanche (carrelage collé sur chape humide, peinture glycéro, parquet) provoque cloques, décollements et moisissures.

## Les sources d'humidité intérieure
Une famille de 4 personnes produit chaque jour environ **10 à 12 kg de vapeur d'eau** : respiration et transpiration, cuisine (surtout la cuisson à l'eau), douches, lessive et linge qui sèche, plantes. Sans ventilation suffisante, cette vapeur se retrouve sur les parois froides ou dans les placards.

## Les désordres dus à l'humidité
| Désordre | Cause probable |
|---|---|
| Bande humide et salpêtre en pied de mur | Remontées capillaires |
| Tache localisée qui s'agrandit après la pluie | Infiltration (toiture, fissure, menuiserie) |
| Tache sous une salle d'eau ou le long d'un tuyau | Fuite de réseau |
| Moisissures noires dans les angles, derrière les meubles, dans les placards | Condensation et manque de ventilation |
| Peinture qui cloque sur un mur neuf | Eau de construction non séchée |
| Gouttes sur les gaines de climatisation, les tuyaux d'eau froide | Condensation sur parois froides |

Les **moisissures** se développent quand l'humidité relative au contact d'une surface dépasse environ **80 %** pendant plusieurs jours. Elles dégradent les finitions et sont mauvaises pour la santé (allergies, asthme).

## Diagnostiquer avant de traiter
1. Observer la **forme** et la **position** des taches, leur évolution après la pluie ou selon les saisons ;
2. **Mesurer** l'humidité à différentes hauteurs et profondeurs ;
3. Vérifier les **réseaux** (compteur d'eau fermé : l'index tourne-t-il ?) ;
4. Contrôler toiture, gouttières, joints de menuiseries, pentes extérieures ;
5. Mesurer l'humidité de l'air intérieur (hygromètre).

## Les traitements
- **Remontées capillaires** : injection de résine hydrophobe (barrière chimique), drainage, enduits respirants à la chaux ;
- **Infiltrations** : réparer la cause (étanchéité, couvertine, fissure), puis laisser sécher ;
- **Ouvrages enterrés** : cuvelage ou étanchéité extérieure, drainage ;
- **Condensation, moisissures** : ventiler (extraction en cuisine et salle d'eau), supprimer les parois froides, nettoyer avec un fongicide ;
- Ne **jamais** enfermer l'humidité derrière un revêtement étanche : elle ressort ailleurs, souvent plus haut.

> [!retenir]
> - w = (mh − ms)/ms ; humidité d'équilibre du bois : 15 à 18 % sur le littoral.
> - Un bâtiment neuf doit sécher plusieurs mois avant les revêtements étanches.
> - Une famille produit 10 à 12 kg de vapeur par jour : ventiler.
> - Diagnostiquer la cause (capillarité, infiltration, fuite, condensation) avant de traiter.`,
 sujet:{titre:"Diagnostiquer l'humidité dans un logement : mesures, causes et traitements", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une famille de 4 personnes à Yopougon se plaint de taches noires et de peintures qui se décollent dans son appartement.

**Constats**
- T1 : taches noires derrière une armoire contre un mur extérieur ombragé, dans une chambre climatisée la nuit ;
- T2 : bande humide de 0,80 m en pied de mur de la salle de séjour, au rez-de-chaussée ;
- T3 : auréole brune au plafond de la salle de bains, sous la terrasse ;
- Mesure sur un échantillon de mortier prélevé en T2 : masse humide **152,4 g**, masse sèche **140,0 g** ;
- La famille produit environ **12 kg de vapeur d'eau par jour** ; l'air extérieur contient **21,5 g d'eau/kg d'air** ; on accepte que l'air intérieur en contienne **2 g/kg** de plus ; masse volumique de l'air **1,16 kg/m³**.

### Partie A — Diagnostic (9 points)
1. Pour chaque constat, proposer la cause la plus probable (condensation, remontée capillaire, infiltration, fuite). Justifier. (6 pts)
2. Citer les étapes d'une démarche de diagnostic de l'humidité. (3 pts)

### Partie B — Mesures (6 points)
3. Calculer la teneur en eau du mortier. Est-elle normale (un mortier sec contient 1 à 3 %) ? (2 pts)
4. Calculer le débit d'air de ventilation nécessaire pour évacuer la vapeur produite par la famille (en kg/h puis en m³/h). (4 pts)

### Partie C — Traitements (5 points)
5. Proposer un traitement pour chacun des trois désordres. (3 pts)
6. Pourquoi faut-il traiter la cause avant de refaire les peintures ? (2 pts)`,
  corrige:`### Partie A — Diagnostic (9 pts)
1. *(6 pts)*
   - **T1** : **condensation** et moisissures — mur froid (chambre climatisée, mur ombragé), air immobile derrière l'armoire, humidité relative élevée au contact ;
   - **T2** : **remontées capillaires** — bande régulière en pied de mur, au rez-de-chaussée ;
   - **T3** : **infiltration** par la terrasse (étanchéité, relevés ou évacuation) ou **fuite** d'une canalisation de l'étage.
2. Observer la forme, la position et l'évolution des taches (selon la pluie, les saisons) ; mesurer l'humidité à différentes hauteurs ; vérifier les réseaux (compteur d'eau fermé : l'index tourne-t-il ?) ; contrôler toiture, gouttières, joints ; mesurer l'humidité de l'air intérieur. *(3 pts)*

### Partie B — Mesures (6 pts)
3. w = (152,4 − 140,0) / 140,0 = **8,9 %** : bien supérieur à 1 – 3 % → mortier **humide**. *(2 pts)*
4. 12 kg/jour = **0,5 kg/h** ; débit d'air = 0,5 / 0,002 = **250 kg/h** → 250 / 1,16 = **≈ 215 m³/h** d'air renouvelé. *(4 pts)*

### Partie C — Traitements (5 pts)
5. T1 : décoller l'armoire du mur, **ventiler** (aérations, extracteurs), éviter le surclimatisation, isoler le mur ; traiter la moisissure (eau de Javel diluée). T2 : drainage, barrière anti-capillaire par injection, enduit respirant. T3 : réparer l'**étanchéité** de la terrasse (relevés, évacuations) ou la fuite. *(3 pts)*
6. Sinon l'humidité revient et la nouvelle peinture se décolle à nouveau : on perd l'argent des finitions. *(2 pts)*

> [!attention] Erreurs à éviter
> - Traiter toutes les taches d'humidité de la même façon.
> - Boucher les aérations pour « garder la fraîcheur » de la climatisation.
> - Repeindre sans laisser sécher le mur.`},
 exercices:[
  {t:"Teneur en eau d'un échantillon", d:1, e:`Un morceau de brique prélevé dans un mur pèse 2 450 g ; après séchage à l'étuve, il pèse 2 280 g.
Calculer sa teneur en eau.`, c:`w = (2 450 − 2 280)/2 280 × 100 = 170/2 280 × 100 = **7,5 %** : brique nettement humide (une brique sèche en contient moins de 2 %).`},
  {t:"Humidité d'une planche", d:1, e:`Une planche destinée à une porte intérieure pèse 4,2 kg ; sèche, elle pèserait 3,5 kg.
Calculer sa teneur en eau. Peut-on la mettre en œuvre en menuiserie intérieure (objectif 12 à 15 %) ?`, c:`w = (4,2 − 3,5)/3,5 × 100 = **20 %** > 15 % : **non**, le bois va sécher et se rétracter (jeu, fentes). Il faut le laisser sécher sous abri ventilé avant usinage.`},
  {t:"Eau à évacuer d'une construction neuve", d:2, e:`Une maison neuve comprend 15 m³ de béton (dalles, poutres, poteaux) et 6 m³ de mortiers d'enduits et de pose. On admet que 90 L d'eau par m³ de béton et 150 L par m³ de mortier doivent s'évaporer.
Quelle quantité d'eau doit sécher ?`, c:`Béton : 15 × 90 = **1 350 L** ; mortiers : 6 × 150 = **900 L**.
Total : **2 250 L**, soit plus de 2 tonnes d'eau. Il faut aérer largement le bâtiment pendant plusieurs mois avant de poser des revêtements étanches.`},
  {t:"Identifier les causes", d:2, e:`Associer chaque observation à sa cause probable :
a) taches noires dans l'angle plafond-mur d'une chambre climatisée, derrière l'armoire ;
b) auréole qui s'agrandit au plafond du dernier étage après chaque orage ;
c) mur humide sous l'évier, même en saison sèche ;
d) bande humide de 1 m de haut sur tous les murs du rez-de-chaussée.`, c:`a) **Condensation** + manque de circulation d'air (moisissures) ;
b) **Infiltration** par la toiture-terrasse (étanchéité, relevé, évacuation bouchée) ;
c) **Fuite** du réseau d'eau ou d'évacuation ;
d) **Remontées capillaires**.`},
  {t:"Vapeur produite et ventilation", d:3, e:`Une famille produit 10 kg de vapeur par jour. L'air extérieur (30 °C, 80 %) contient 21,5 g d'eau par kg d'air sec ; on accepte à l'intérieur 23,5 g/kg.
Quel débit d'air extérieur faut-il pour évacuer cette vapeur ? (1 kg d'air ≈ 0,87 m³ à 30 °C)`, c:`Chaque kg d'air entrant peut emporter 23,5 − 21,5 = **2 g** d'eau.
Masse d'air : 10 000 g/2 g/kg = **5 000 kg** par jour → volume : 5 000 × 0,87 = **4 350 m³ par jour**, soit **≈ 180 m³/h** en continu.
En climat humide, l'air extérieur est déjà chargé d'eau : il faut beaucoup d'air pour évacuer peu de vapeur, d'où l'importance d'extraire la vapeur **à la source** (hotte, extraction des salles d'eau).`}
 ],
 quiz:[
  {q:"La teneur en eau se calcule par rapport à :", o:["La masse sèche","La masse humide","Le volume","La surface"], r:0, e:"w = (mh − ms)/ms."},
  {q:"Une famille de 4 personnes produit chaque jour environ :", o:["10 à 12 kg de vapeur","100 g","100 kg","1 tonne"], r:0, e:"Respiration, cuisine, douches, linge."},
  {q:"Les moisissures apparaissent quand l'humidité au contact d'une surface dépasse environ :", o:["80 %","20 %","40 %","100 % seulement"], r:0, e:"Pendant plusieurs jours."},
  {q:"Une tache qui s'agrandit après chaque pluie indique plutôt :", o:["Une infiltration","Une remontée capillaire","Une condensation","Un défaut d'éclairage"], r:0, e:"Lien direct avec la pluie."},
  {q:"Sur un mur humide, il faut éviter :", o:["Un revêtement étanche qui enferme l'eau","Un enduit à la chaux","Le drainage","La ventilation"], r:0, e:"L'humidité ressort ailleurs."}
 ]},

{id:"pb-12", niv:2, titre:"Dimensionner les protections solaires : débords, brise-soleil et masques", duree:50, contenu:`## La position du soleil à toute heure
La hauteur h du soleil dépend de la latitude φ, de la déclinaison δ et de l'**angle horaire** ω = 15° × (heure solaire − 12) :
$$ sin h = sin φ × sin δ + cos φ × cos δ × cos ω
> [!exemple] Abidjan (φ = 5,3°)
> | | 8 h | 9 h | 10 h | 12 h |
> |---|---|---|---|---|
> | Équinoxes | 30° (presque plein est) | 45° | 60° | 85° |
> | 21 décembre | 25° | 37,5° | 49° | 61° (sud) |
> L'après-midi est symétrique : à 16 h, le soleil est de nouveau à 30° aux équinoxes, presque plein ouest.

## L'angle utile : la hauteur de profil
Pour une façade, ce qui compte est l'angle du rayon **dans le plan perpendiculaire à la façade** : la **hauteur de profil** hp. Si le soleil est en face de la façade, hp = h ; s'il est de biais (écart horizontal γ entre la direction du soleil et la perpendiculaire à la façade) :
$$ tan hp = tan h / cos γ
Un soleil très de biais donne un hp proche de 90° : il ne pénètre presque pas.

## Le débord horizontal
!fig:debord|Débord au-dessus d'une baie

Une baie de hauteur H (mesurée du bas de la baie à la sous-face du débord) est entièrement à l'ombre si la profondeur du débord vérifie :
$$ d ≥ H / tan hp
> [!exemple] Fenêtre au sud, Abidjan, H = 1,50 m
> À midi le 21 décembre (hp = 61°) : d = 1,50/tan 61° = **0,82 m**.
> Pour protéger de 9 h à 15 h ce même jour, le cas le plus défavorable est 9 h : h = 37,5°, soleil décalé de 55° vers l'est → tan hp = tan 37,5°/cos 55° → hp = 53° → d = 1,50/tan 53° = **1,12 m**.
> Aux équinoxes, le soleil passe presque à la verticale de la façade sud : quelques centimètres suffisent.

Pour une façade **nord**, le calcul se fait avec le soleil de juin (hp = 72° à midi) : d = 1,50/tan 72° ≈ 0,49 m à midi.

## Les façades est et ouest : le débord ne suffit pas
> [!exemple] Fenêtre à l'ouest, 16 h aux équinoxes
> Le soleil est presque en face (γ ≈ 0) à h = 30° : d = 1,50/tan 30° = **2,60 m** : irréaliste.
Solutions pour l'est et l'ouest :
- **réduire** les ouvertures et y placer les locaux de service ;
- **brise-soleil verticaux** ou orientables, lames inclinées, **claustras** et moucharabiehs ;
- **volets** et persiennes extérieures, stores extérieurs ;
- **galerie** ou véranda profonde ;
- **végétation** : arbres à feuillage dense, pergolas plantées, qui filtrent aussi la lumière.

## Extérieur ou intérieur ?
La part du rayonnement qui traverse une fenêtre est donnée par son **facteur solaire** g (fraction de l'énergie solaire incidente qui entre dans la pièce) :
| Configuration | g (ordre de grandeur) |
|---|---|
| Simple vitrage clair seul | 0,85 |
| Vitrage clair + store ou rideau intérieur clair | 0,5 à 0,6 |
| Vitrage clair + protection extérieure (volet, brise-soleil, store extérieur) | 0,1 à 0,2 |
Une protection **extérieure** arrête le soleil **avant** le vitrage : elle est 3 à 5 fois plus efficace qu'un rideau intérieur, qui laisse la chaleur entrer puis la garde dans la pièce.

## Les masques
Les bâtiments voisins, les reliefs et la végétation forment des **masques** qui ombragent le projet à certaines heures. On les relève sur un **diagramme solaire** (courses du soleil pour chaque mois) pour savoir quand une façade est réellement ensoleillée. Ils peuvent être un atout (ombre gratuite) ou une contrainte (panneaux solaires).

> [!retenir]
> - sin h = sin φ sin δ + cos φ cos δ cos ω ; tan hp = tan h/cos γ.
> - Débord : d ≥ H/tan hp ; efficace au nord et au sud.
> - Est et ouest : brise-soleil verticaux, claustras, volets, végétation.
> - Protection extérieure (g ≈ 0,15) bien meilleure qu'intérieure (g ≈ 0,55).`,
 sujet:{titre:"Dimensionner des protections solaires : débord au sud et brise-soleil à l'est", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un immeuble de bureaux est construit à **Abidjan (φ = 5,3° N)**. On dimensionne les protections des fenêtres de **1,20 m** de haut.

**Données**
- Hauteur du soleil à Abidjan (21 décembre) : **25°** à 8 h ; **37,5°** à 9 h ; **49°** à 10 h ; **61°** à midi (sud) ; aux équinoxes : 30° à 8 h, presque plein est ;
- À 9 h le 21 décembre, l'azimut du soleil fait un angle **γ = 55°** avec la normale à la façade sud ;
- Hauteur apparente : tan hp = tan h / cos γ ; débord nécessaire : d ≥ H / tan hp ;
- Hauteur du soleil : sin h = sin φ sin δ + cos φ cos δ cos ω (ω : angle horaire, 15° par heure, négatif le matin) ;
- Pour Korhogo : φ = **9,5°**, δ = **− 23,45°** (21 décembre).

### Partie A — Façade sud (8 points)
1. Calculer le débord nécessaire pour protéger la fenêtre à midi le 21 décembre. (2 pts)
2. Calculer la hauteur apparente à 9 h et le débord nécessaire pour protéger de 9 h à 15 h. (4 pts)
3. Aux équinoxes, quel débord est nécessaire à midi ? Conclure sur la façade sud. (2 pts)

### Partie B — Façade est (6 points)
4. À 8 h aux équinoxes (h = 30°, soleil en face), quel débord horizontal faudrait-il ? Est-ce réaliste ? (3 pts)
5. Proposer une protection adaptée et expliquer son principe. (3 pts)

### Partie C — Calcul de la hauteur du soleil (6 points)
6. Calculer la hauteur du soleil à Korhogo le 21 décembre à midi (ω = 0) et à 9 h (ω = − 45°). (4 pts)
7. Pourquoi les protections doivent-elles être un peu plus importantes dans le nord en décembre ? (2 pts)`,
  corrige:`### Partie A — Sud (8 pts)
1. d = 1,20 / tan 61° = **0,67 m**. *(2 pts)*
2. tan hp = tan 37,5° / cos 55° = 0,767 / 0,574 = 1,338 → **hp = 53,2°** ; d = 1,20 / 1,338 = **0,90 m**. *(4 pts)*
3. Soleil presque vertical (85°) : **quelques centimètres** suffisent. Un débord de 0,90 m protège la façade sud presque toute l'année : c'est la façade la **plus facile** à protéger. *(2 pts)*

### Partie B — Est (6 pts)
4. d = 1,20 / tan 30° = **2,08 m** : irréaliste (et le soleil plus bas, à 7 h, passerait encore dessous). *(3 pts)*
5. Des **protections verticales** ou orientables : lames verticales inclinées, volets persiennés, claustras, brise-soleil à lames, écran végétal ; elles arrêtent le soleil bas et rasant du matin tout en laissant passer la lumière diffuse et l'air. *(3 pts)*

### Partie C — Hauteur (6 pts)
6. *(4 pts)*
   - midi : h = 90 − |9,5 + 23,45| = **57,1°** (ou par la formule : sin h = 0,839) ;
   - 9 h : sin h = sin 9,5° × sin(− 23,45°) + cos 9,5° × cos 23,45° × cos 45° = − 0,0657 + 0,6398 = 0,5741 → **h = 35,0°**.
7. Le soleil d'hiver y est **plus bas** (57° à midi contre 61° à Abidjan) : il pénètre plus profondément sous les débords des façades sud. *(2 pts)*

> [!attention] Erreurs à éviter
> - Utiliser la hauteur réelle au lieu de la hauteur apparente quand le soleil est de biais.
> - Vouloir protéger l'est et l'ouest avec des débords horizontaux.
> - Oublier le signe de la déclinaison en décembre.`},
 exercices:[
  {t:"Débord d'une fenêtre au sud", d:1, e:`Une fenêtre au sud, à Yamoussoukro (h à midi le 21 décembre = 60°), a une hauteur H = 1,20 m sous le débord.
Quelle profondeur de débord assure l'ombre à midi ce jour-là ?`, c:`d = 1,20/tan 60° = 1,20/1,732 = **0,69 m** : un débord de 70 cm suffit à midi (on prend un peu plus pour couvrir la fin de matinée et le début d'après-midi).`},
  {t:"Débord au nord", d:1, e:`À Abidjan, le soleil de midi du 21 juin est à 72° au nord. Une fenêtre au nord mesure H = 1,50 m sous le débord.
Calculer la profondeur de débord nécessaire à midi.`, c:`d = 1,50/tan 72° = 1,50/3,08 = **0,49 m** ≈ 50 cm.`},
  {t:"Hauteur du soleil à 10 h", d:2, e:`Calculer la hauteur du soleil à Abidjan (φ = 5,3°) le 21 décembre (δ = − 23,45°) à 10 h solaire.`, c:`ω = 15 × (10 − 12) = **− 30°**.
sin h = sin 5,3° × sin(− 23,45°) + cos 5,3° × cos 23,45° × cos 30° = 0,0924 × (− 0,398) + 0,9957 × 0,917 × 0,866 = − 0,0368 + 0,7909 = 0,754.
**h = 49°**.`},
  {t:"Protection extérieure ou rideau ?", d:2, e:`Une baie de 2 m² au sud-ouest reçoit 600 W/m² de soleil l'après-midi.
Calculer la puissance solaire qui entre dans la pièce avec : a) le vitrage seul (g = 0,85) ; b) un rideau intérieur (g = 0,6) ; c) un store extérieur (g = 0,15). Comparer à un climatiseur de 1 kW de froid.`, c:`a) 2 × 600 × 0,85 = **1 020 W** ; b) 2 × 600 × 0,6 = **720 W** ; c) 2 × 600 × 0,15 = **180 W**.
Sans protection extérieure, cette seule fenêtre apporte autant de chaleur que ce qu'un climatiseur de 1 kW peut extraire. Le store extérieur divise l'apport par plus de 5.`},
  {t:"Façade ouest d'un bureau", d:3, e:`La façade ouest d'un immeuble de bureaux à Abidjan comporte de grandes baies de 1,80 m de haut. L'architecte propose un débord de 1 m.
a) Jusqu'à quelle heure environ ce débord protège-t-il la baie aux équinoxes (soleil presque plein ouest l'après-midi ; h = 45° à 15 h ; 30° à 16 h) ?
b) Proposer une meilleure solution.`, c:`a) Le débord protège tant que 1,0 ≥ 1,80/tan h, soit tan h ≥ 1,8 → **h ≥ 61°**, ce qui correspond à environ **14 h**. Dès 14 h, le soleil entre ; à 16 h (h = 30°), il faudrait 3,1 m de débord.
b) Brise-soleil **verticaux orientables** ou **lames horizontales rapprochées** devant les baies, claustras, stores extérieurs à lames, ou réduction des baies à l'ouest ; à défaut, vitrages à contrôle solaire.`}
 ],
 quiz:[
  {q:"Profondeur de débord qui ombrage entièrement une baie :", o:["d ≥ H/tan hp","d ≥ H × tan hp","d = H","d ≥ H/2"], r:0, e:"Géométrie du rayon limite."},
  {q:"Un débord horizontal est surtout efficace sur les façades :", o:["Nord et sud","Est et ouest","Toutes","Aucune"], r:0, e:"Soleil haut."},
  {q:"Facteur solaire d'un vitrage avec une protection extérieure :", o:["0,1 à 0,2","0,85","1","0,6"], r:0, e:"Le soleil est arrêté avant la vitre."},
  {q:"Un rideau intérieur est moins efficace qu'un store extérieur car :", o:["La chaleur est déjà entrée dans la pièce","Il est plus foncé","Il ventile","Il n'arrête pas la lumière"], r:0, e:"Effet de serre derrière la vitre."},
  {q:"L'angle horaire à 9 h solaire vaut :", o:["− 45°","9°","45°","− 9°"], r:0, e:"15° × (9 − 12)."}
 ]},

{id:"pb-4", niv:2, titre:"Ventilation et qualité de l'air intérieur", duree:50, contenu:`## Pourquoi renouveler l'air ?
Ventiler sert à la fois à :
- **évacuer les polluants** : CO₂ et odeurs des occupants, vapeur d'eau, fumées de cuisson (bois, charbon, gaz), composés organiques volatils des peintures et des meubles, poussières ;
- **évacuer la chaleur** et donner du **mouvement d'air** (confort, voir chapitre Confort) ;
- **assurer la combustion** des appareils à gaz et éviter le monoxyde de carbone (mortel).

## Les grandeurs
- **Débit d'air** Q (m³/h) ;
- **Taux de renouvellement** : n = Q/V (volumes par heure), V volume du local ;
- **Concentration** d'un polluant (ppm pour le CO₂ : 400 ppm dehors).

## Le bilan de CO₂
En régime établi, la concentration intérieure vaut :
$$ C = C(ext) + G / Q
G : production de CO₂ (≈ 0,018 m³/h pour un adulte assis, 0,012 à 0,015 m³/h pour un enfant) ; Q : débit d'air neuf.
> [!exemple] Bureau de 4 personnes
> Avec 25 m³/h par personne : C = 400 + 0,018/25 × 10⁶ = 400 + 720 = **1 120 ppm**.
> On voit pourquoi on retient environ **25 m³/h par personne** pour un bureau : la concentration reste proche de 1 000 ppm.

## Les débits de référence
| Local | Débit d'air neuf (ordre de grandeur) |
|---|---|
| Bureau | 25 m³/h par occupant |
| Salle de classe (primaire) | 15 m³/h par élève |
| Salle de classe (secondaire) | 18 m³/h par élève |
| Logement : cuisine | 45 à 135 m³/h extraits (selon la taille et le mode cuisson) |
| Logement : salle de bains | 15 à 30 m³/h extraits |
| Logement : WC | 15 m³/h extraits |
Dans un logement, l'air neuf entre par les pièces principales (séjour, chambres) et ressort par les pièces humides (cuisine, salle d'eau, WC) : c'est le **balayage**.

## Les modes de ventilation
- **Ventilation naturelle traversante** : ouvertures sur deux façades opposées ; c'est la plus efficace en climat chaud et humide (débits très élevés grâce au vent, voir niveau avancé) ;
- **Ventilation mono-façade** : ouvertures d'un seul côté ; efficace sur 2 à 2,5 fois la hauteur sous plafond seulement ;
- **Tirage thermique** : l'air chaud monte et sort par le haut (lanterneaux, cheminées, cages d'escalier) ;
- **Ventilation mécanique contrôlée** (VMC) : ventilateur d'extraction raccordé aux bouches des pièces humides ; indispensable dans les bâtiments climatisés et fermés ;
- **Climatisation** : un split recycle l'air de la pièce mais n'apporte **pas d'air neuf** : il faut prévoir une ventilation séparée.

## Concevoir pour la ventilation naturelle
- Ouvertures **opposées** ou en angle, face aux vents dominants ;
- **Porosité** de façade suffisante (surface des ouvrants de l'ordre de 20 à 30 % de la façade dans les pièces à ventiler fortement) ;
- **Cloisons** et portes intérieures qui n'arrêtent pas le flux (impostes, portes à persiennes) ;
- Ouvrants **réglables** et sécurisés (grilles, persiennes) pour ventiler la nuit et en l'absence des occupants ;
- Sortie d'air **en hauteur** pour profiter du tirage thermique.

> [!attention] Cuisson au bois ou au charbon
> La fumée contient du monoxyde de carbone et des particules fines, très nocives. Une cuisine à combustible solide doit être très ventilée, avec une évacuation des fumées (hotte, cheminée), et jamais dans une pièce fermée.

> [!retenir]
> - n = Q/V ; C = C(ext) + G/Q.
> - Bureau : 25 m³/h par personne ; classe : 15 à 18 m³/h par élève.
> - Logement : entrée d'air par les pièces principales, extraction par les pièces humides.
> - Un climatiseur split n'apporte pas d'air neuf.`,
 sujet:{titre:"Ventilation et qualité de l'air : salle de classe et logement", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On vérifie le renouvellement d'air d'une salle de classe d'un lycée à Daloa et d'un appartement.

**Données**
- Classe de **40 élèves** (secondaire) ; production de CO₂ : **0,015 m³/h** par élève ; air extérieur à **400 ppm** ;
- Débit réglementaire indicatif : **18 m³/h par élève** ; C = C(ext) + G / Q (G en m³/h, Q en m³/h, C en ppm × 10⁻⁶) ;
- Appartement de **120 m³** : extraction cuisine **90 m³/h**, salle de bains **30 m³/h**, WC **15 m³/h**.

### Partie A — Polluants (5 points)
1. Citer cinq polluants de l'air intérieur et leur origine. (3 pts)
2. Pourquoi le CO₂ sert-il d'indicateur de la qualité de l'air ? (2 pts)

### Partie B — Salle de classe (9 points)
3. Calculer la production totale de CO₂ et le débit réglementaire. (2 pts)
4. Calculer la concentration de CO₂ en régime établi. (3 pts)
5. Quel débit faudrait-il pour ne pas dépasser 1 000 ppm ? (2 pts)
6. Les fenêtres sont fermées pour le bruit de la route : quelles conséquences et quelles solutions ? (2 pts)

### Partie C — Logement (6 points)
7. Calculer le débit total extrait et le taux de renouvellement horaire. (3 pts)
8. Expliquer le principe de la ventilation par balayage (entrées d'air dans les pièces sèches, extraction dans les pièces humides). (3 pts)`,
  corrige:`### Partie A — Polluants (5 pts)
1. **CO₂** (respiration), **vapeur d'eau** (cuisine, douches), **COV** (peintures, colles, meubles), **fumées et particules** (cuisson au charbon, encens, tabac), **monoxyde de carbone** (combustion), **moisissures**, poussières, odeurs. *(3 pts)*
2. Il est produit par les occupants, facile à mesurer, et sa concentration suit celle des autres polluants liés à l'occupation : au-delà de 1 000 – 1 500 ppm, l'air est confiné (fatigue, maux de tête, baisse de l'attention). *(2 pts)*

### Partie B — Classe (9 pts)
3. G = 40 × 0,015 = **0,6 m³/h** ; Q = 40 × 18 = **720 m³/h**. *(2 pts)*
4. C = 400 + 0,6 / 720 × 10⁶ = 400 + 833 = **1 233 ppm**. *(3 pts)*
5. 400 + 0,6 / Q × 10⁶ ≤ 1 000 → Q ≥ 0,6 × 10⁶ / 600 = **1 000 m³/h** (25 m³/h par élève). *(2 pts)*
6. L'air devient vite **confiné** (CO₂ > 2 000 ppm), chaleur et humidité augmentent. Solutions : **impostes** hautes ou grilles acoustiques, ventilation par le côté calme, ventilateur d'extraction, aérer entre les cours, planter une haie et éloigner la route. *(2 pts)*

### Partie C — Logement (6 pts)
7. 90 + 30 + 15 = **135 m³/h** → 135 / 120 = **1,1 volume par heure**. *(3 pts)*
8. L'air neuf **entre** par les pièces de vie (séjour, chambres) et **traverse** le logement pour être **extrait** dans les pièces humides et polluées (cuisine, salle de bains, WC) : les odeurs et la vapeur ne passent pas dans les pièces sèches. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier de convertir la concentration en ppm (× 10⁶).
> - Boucher les entrées d'air pour garder la fraîcheur de la climatisation.
> - Faire entrer l'air par la cuisine.`},
 exercices:[
  {t:"Taux de renouvellement", d:1, e:`Une chambre de 4 × 3,5 × 2,8 m est ventilée par un débit de 60 m³/h.
Calculer le taux de renouvellement.`, c:`V = 4 × 3,5 × 2,8 = **39,2 m³** → n = 60/39,2 = **1,5 volume par heure**.`},
  {t:"Débit d'une salle de classe", d:2, e:`Une classe de 60 m² et 3 m sous plafond accueille 35 élèves (0,015 m³/h de CO₂ chacun).
a) Quel débit d'air neuf faut-il pour ne pas dépasser 1 000 ppm (extérieur : 400 ppm) ?
b) Quelle concentration obtient-on avec le débit de référence de 15 m³/h par élève ?
c) Quel taux de renouvellement correspond au débit du a) ?`, c:`a) Q = G/(C − Cext) = 35 × 0,015/(600 × 10⁻⁶) = **875 m³/h**.
b) Q = 35 × 15 = 525 m³/h → C = 400 + 0,525/525 × 10⁶ = **1 400 ppm**.
c) V = 180 m³ → n = 875/180 = **4,9 vol/h** : en ventilation naturelle traversante, c'est facilement atteint fenêtres ouvertes, beaucoup moins si l'on ferme pour climatiser.`},
  {t:"Ventilation d'un appartement", d:1, e:`Un appartement comprend une cuisine, une salle de bains et un WC. Avec les débits de référence minimaux (cuisine 45, SdB 15, WC 15 m³/h), quel débit total faut-il extraire ? Par où l'air neuf doit-il entrer ?`, c:`Q = 45 + 15 + 15 = **75 m³/h** extraits en continu (davantage en cuisine pendant la cuisson).
L'air neuf entre par des **entrées d'air** dans les pièces principales (séjour, chambres) et circule vers les pièces humides (détalonnage des portes) : balayage.`},
  {t:"Concentration de CO₂ dans un bureau climatisé", d:2, e:`Un bureau fermé et climatisé de 5 personnes n'a qu'un split, sans air neuf. Les infiltrations apportent 30 m³/h.
Calculer la concentration en CO₂ en régime établi. Que proposer ?`, c:`C = 400 + 5 × 0,018/30 × 10⁶ = 400 + 3 000 = **3 400 ppm** : air très confiné (fatigue, maux de tête).
Il faut un apport d'air neuf d'au moins 5 × 25 = **125 m³/h** (ventilation mécanique, idéalement avec récupération de fraîcheur), ce qui ramène C vers 1 100 ppm.`},
  {t:"Porosité de façade", d:2, e:`Une salle de 8 × 6 m a deux façades opposées de 8 m de long et 3 m de haut. On veut 20 % de surface ouvrante sur chacune.
Quelle surface d'ouvrants faut-il par façade ? Proposer une répartition.`, c:`Façade : 8 × 3 = 24 m² → 0,20 × 24 = **4,8 m²** d'ouvrants par façade.
Par exemple : 3 fenêtres de 1,20 × 1,10 m (3,96 m²) + des impostes hautes à persiennes de 3 × 0,30 m² ; les impostes hautes favorisent aussi l'évacuation de l'air chaud.`}
 ],
 quiz:[
  {q:"Taux de renouvellement d'air :", o:["n = Q/V","n = V/Q","n = Q × V","n = Q − V"], r:0, e:"En volumes par heure."},
  {q:"Débit d'air neuf conseillé par occupant d'un bureau :", o:["25 m³/h","2,5 m³/h","250 m³/h","0,25 m³/h"], r:0, e:"Concentration en CO₂ voisine de 1 000 ppm."},
  {q:"Dans un logement, on extrait l'air :", o:["Dans les pièces humides","Dans les chambres","Au séjour","Nulle part"], r:0, e:"Cuisine, salle de bains, WC."},
  {q:"Un climatiseur split :", o:["N'apporte pas d'air neuf","Renouvelle tout l'air","Supprime le CO₂","Remplace la VMC"], r:0, e:"Il recycle l'air de la pièce."},
  {q:"La ventilation la plus efficace en climat chaud et humide est :", o:["La ventilation naturelle traversante","La mono-façade","L'absence d'ouverture","Le tirage seul"], r:0, e:"Le vent assure de grands débits."}
 ]},

{id:"pb-13", niv:2, titre:"Éclairage artificiel : la méthode des flux", duree:45, contenu:`## Le problème
Combien de luminaires faut-il dans un bureau, une classe, un atelier pour obtenir l'éclairement voulu ? La **méthode des flux** (ou des facteurs d'utilisation) répond à cette question pour un éclairage général uniforme.

## Le flux total nécessaire
Une partie seulement du flux des lampes atteint le plan de travail (le reste est absorbé par les parois et le luminaire), et le flux diminue avec le temps (vieillissement, poussière) :
$$ Φ(total) = E × S / (U × M)
- **E** : éclairement moyen voulu sur le plan utile (lux) ;
- **S** : surface du local (m²) ;
- **U** : **facteur d'utilisation** (0,4 à 0,7) ; il est d'autant plus grand que le local est vaste, bas de plafond et clair ;
- **M** : **facteur de maintenance** (0,7 à 0,8) : perte de flux due au vieillissement et à l'encrassement (plus faible dans les ateliers poussiéreux).

## Le nombre de luminaires
$$ N = Φ(total) / Φ(luminaire)
On arrondit au nombre supérieur, puis on choisit une **disposition régulière** (rangées) compatible avec la forme du local.

> [!exemple] Bureau de 6 × 5 m
> E = 500 lux ; S = 30 m² ; U = 0,6 ; M = 0,8.
> Φ(total) = 500 × 30/(0,6 × 0,8) = **31 250 lm**.
> Dalles LED de 3 600 lm (36 W) : N = 31 250/3 600 = 8,7 → **9 dalles**, en 3 rangées de 3.
> Puissance installée : 9 × 36 = 324 W, soit **10,8 W/m²**.

## La disposition
- Espacer les luminaires de façon régulière : espacement maximal de l'ordre de **1,5 fois la hauteur** entre le luminaire et le plan de travail, pour une bonne **uniformité** ;
- Placer la moitié de l'espacement entre la dernière rangée et le mur ;
- Orienter les luminaires allongés parallèlement aux fenêtres et allumer **par rangées** pour profiter de la lumière naturelle près des fenêtres.

## La puissance surfacique et l'énergie
La **puissance installée par m²** permet de comparer les solutions : avec des LED, un bureau à 500 lux demande environ 8 à 12 W/m² ; avec des tubes fluorescents anciens, 15 à 20 W/m². Les détecteurs de présence et la gradation selon la lumière du jour réduisent encore la consommation.

## Le confort visuel
- **Éblouissement** : éviter les sources nues visibles ; choisir des luminaires à grille ou diffuseur ;
- **Température de couleur** : blanc chaud (3 000 K) pour les logements, blanc neutre (4 000 K) pour les bureaux et les classes ;
- **Rendu des couleurs** (IRC ≥ 80) pour les lieux de travail.

> [!retenir]
> - Φ(total) = E × S/(U × M) ; N = Φ(total)/Φ(luminaire), arrondi au-dessus.
> - U : 0,4 à 0,7 ; M : 0,7 à 0,8.
> - Espacement ≤ 1,5 × hauteur au-dessus du plan de travail.
> - LED : 8 à 12 W/m² pour 500 lux.`,
 sujet:{titre:"Éclairage artificiel d'une salle de classe par la méthode des flux", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On équipe une salle de classe de **9,00 × 7,00 m** d'un lycée à Abengourou pour les cours du soir.

**Données**
- Éclairement à maintenir : **300 lux** ; facteur d'utilance **U = 0,55** ; facteur de maintenance **M = 0,8** ;
- Φ(total) = E × S / (U × M) ; N = Φ(total) / Φ(luminaire) ;
- Réglettes LED : **2 200 lm**, **18 W** ;
- Utilisation : **6 h/jour**, **200 jours/an** ; électricité : **90 F/kWh** ;
- Ancien éclairage : tubes fluorescents de **36 W** (avec ballast **45 W**) donnant **2 500 lm**, même nombre de points lumineux.

### Partie A — Notions (4 points)
1. Que représentent U et M ? Pourquoi M < 1 ? (2 pts)
2. Pourquoi l'éclairement nécessaire dépend-il de l'activité (circulation, classe, atelier de dessin) ? (2 pts)

### Partie B — Dimensionnement (9 points)
3. Calculer la surface et le flux total nécessaire. (3 pts)
4. Calculer le nombre de réglettes et proposer une disposition régulière. (3 pts)
5. Calculer la puissance installée et la puissance surfacique (W/m²). (3 pts)

### Partie C — Économie (7 points)
6. Calculer la consommation annuelle et son coût avec les LED. (3 pts)
7. Calculer la consommation des anciens tubes (même nombre de points) et l'économie annuelle. (4 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. **U** : part du flux des lampes qui arrive réellement sur le plan de travail (dépend du luminaire, des dimensions et des couleurs du local) ; **M** : tient compte du vieillissement des lampes et de l'encrassement — il est < 1 car l'éclairement baisse avec le temps. *(2 pts)*
2. Les tâches visuelles fines (écriture, dessin) demandent plus de lumière que la circulation : environ 100 lux (couloir), 300 lux (classe), 500 lux (dessin, bureaux). *(2 pts)*

### Partie B — Dimensionnement (9 pts)
3. S = **63 m²** ; Φ = 300 × 63 / (0,55 × 0,8) = **42 955 lm**. *(3 pts)*
4. 42 955 / 2 200 = 19,5 → **20 réglettes**, par exemple **4 rangées de 5**, parallèles aux fenêtres. *(3 pts)*
5. 20 × 18 = **360 W** → 360 / 63 = **5,7 W/m²**. *(3 pts)*

### Partie C — Économie (7 pts)
6. 0,360 × 6 × 200 = **432 kWh/an** → **38 880 F/an**. *(3 pts)*
7. Tubes : 20 × 45 = 900 W → 0,9 × 1 200 h = **1 080 kWh/an** → 97 200 F ; économie : **648 kWh** et **58 320 F/an** (60 %), plus une durée de vie bien plus longue des LED. *(4 pts)*

> [!attention] Erreurs à éviter
> - Oublier les facteurs U et M (on sous-dimensionne de moitié).
> - Compter la puissance des tubes sans leur ballast.
> - Disposer les luminaires au hasard : l'éclairement doit être uniforme.`},
 exercices:[
  {t:"Éclairer une salle de classe", d:2, e:`Une classe de 9 × 7 m doit recevoir 300 lux. U = 0,55 ; M = 0,8. On utilise des luminaires LED de 4 000 lm (36 W).
Calculer le nombre de luminaires, proposer une disposition et calculer la puissance par m².`, c:`Φ(total) = 300 × 63/(0,55 × 0,8) = **42 955 lm** → N = 42 955/4 000 = 10,7 → **11**, que l'on porte à **12** pour une disposition régulière en **3 rangées de 4**.
Puissance : 12 × 36 = **432 W** → 432/63 = **6,9 W/m²**.`},
  {t:"Éclairement obtenu", d:1, e:`Un atelier de 12 × 10 m est équipé de 16 luminaires de 6 000 lm. U = 0,5 ; M = 0,7.
Quel éclairement moyen obtient-on ?`, c:`E = N × Φ × U × M/S = 16 × 6 000 × 0,5 × 0,7/120 = **280 lux** : insuffisant pour un atelier de précision (500 à 750 lux), correct pour un stockage.`},
  {t:"Effet de la couleur des parois", d:2, e:`Dans le bureau de l'exemple du cours, les murs sont repeints en couleur foncée : U passe de 0,6 à 0,45.
Combien faut-il de dalles de 3 600 lm pour garder 500 lux ?`, c:`Φ(total) = 500 × 30/(0,45 × 0,8) = **41 667 lm** → N = 11,6 → **12 dalles** au lieu de 9 : les couleurs sombres coûtent 33 % d'éclairage en plus.`},
  {t:"Comparer deux technologies", d:2, e:`Pour un bureau de 30 m² à 500 lux, la solution LED demande 324 W et la solution à tubes fluorescents 540 W. L'éclairage fonctionne 2 500 h par an.
Calculer l'économie annuelle d'énergie et de chaleur à évacuer par la climatisation.`, c:`Écart de puissance : 540 − 324 = **216 W**.
Énergie économisée : 0,216 × 2 500 = **540 kWh/an** d'éclairage, et autant de chaleur en moins dans le bureau : la climatisation consomme aussi moins (environ 540/3 = 180 kWh de plus économisés avec un climatiseur de rendement 3).`},
  {t:"Disposition et espacement", d:3, e:`Des luminaires sont suspendus à 2,20 m au-dessus du plan de travail dans une salle de 12 m de long. On souhaite une rangée de luminaires dans la longueur.
Quel espacement maximal respecter ? Combien de luminaires au minimum dans la rangée, et à quelle distance des murs ?`, c:`Espacement maximal : 1,5 × 2,20 = **3,30 m**.
Avec n luminaires espacés de e et une demi-distance aux extrémités : n × e = 12 → e = 12/n ≤ 3,30 → n ≥ 3,6 → **4 luminaires**, espacés de **3,0 m**, à **1,5 m** des murs.`}
 ],
 quiz:[
  {q:"Flux total à installer :", o:["E × S/(U × M)","E × U × M/S","E/S","S/(E × U)"], r:0, e:"Méthode des flux."},
  {q:"Le facteur de maintenance tient compte :", o:["Du vieillissement et de l'encrassement","De la couleur des murs","Du prix","De la tension"], r:0, e:"0,7 à 0,8."},
  {q:"Des murs clairs :", o:["Augmentent le facteur d'utilisation","Le diminuent","N'ont pas d'effet","Augmentent l'éblouissement"], r:0, e:"Ils réfléchissent la lumière."},
  {q:"Puissance installée typique en LED pour un bureau à 500 lux :", o:["8 à 12 W/m²","100 W/m²","1 W/m²","50 W/m²"], r:0, e:"Bien moins qu'avec les anciennes technologies."},
  {q:"Température de couleur conseillée pour un bureau :", o:["4 000 K","1 500 K","10 000 K","2 000 K"], r:0, e:"Blanc neutre."}
 ]},

{id:"pb-5", niv:2, titre:"Sécurité incendie : réaction au feu, compartimentage et évacuation", duree:55, contenu:`## Comment naît et se développe un incendie
Le feu a besoin de trois éléments : un **combustible**, un **comburant** (l'oxygène de l'air) et une **source d'énergie** (étincelle, court-circuit, flamme, surchauffe) : c'est le **triangle du feu**. Supprimer un élément éteint le feu.

Phases d'un incendie dans un local :
1. **Éclosion** : un objet s'enflamme ;
2. **Croissance** : les fumées chaudes s'accumulent sous le plafond ;
3. **Embrasement généralisé** (flashover) : en quelques secondes, tout le local s'enflamme ;
4. **Feu développé**, puis **déclin**.

> [!attention] Les fumées tuent avant les flammes
> La majorité des victimes d'incendie meurent **intoxiquées par les fumées** (monoxyde de carbone, gaz toxiques), souvent avant d'avoir vu les flammes. Évacuer les fumées et évacuer les personnes vite sont les deux priorités.

## Les objectifs de la sécurité incendie
1. **Éviter** l'éclosion (installations électriques conformes, stockage des produits inflammables) ;
2. **Limiter** la propagation (matériaux peu combustibles, compartimentage) ;
3. **Évacuer** rapidement les occupants (dégagements, éclairage de sécurité, alarme) ;
4. **Faciliter** l'intervention des secours (accès des engins, colonnes sèches, poteaux d'incendie) ;
5. **Préserver la stabilité** de la structure pendant le temps nécessaire.

## Réaction au feu des matériaux
La **réaction au feu** indique comment un matériau **contribue** au feu. Classement européen (Euroclasses) :
| Classe | Comportement | Exemples |
|---|---|---|
| A1 | Incombustible | Béton, pierre, terre cuite, acier, plâtre nu |
| A2 | Quasi incombustible | Plaques de plâtre, laine de roche |
| B | Très peu combustible | Bois ignifugé, certains panneaux |
| C, D | Combustible | Bois massif (D), panneaux de particules |
| E, F | Très combustible ou non classé | Certains plastiques et isolants alvéolaires nus |
On y ajoute la production de **fumée** (s1 à s3) et de **gouttelettes enflammées** (d0 à d2).

## Résistance au feu des éléments
La **résistance au feu** est la **durée** pendant laquelle un élément conserve ses fonctions dans un feu normalisé :
- **R** : stabilité mécanique (porter les charges) ;
- **E** : étanchéité aux flammes et aux gaz chauds ;
- **I** : isolation thermique (la face non exposée reste sous 140 °C en moyenne).
Exemples : un poteau **R 60** ; un plancher **REI 90** ; une porte coupe-feu **EI 30**. Les exigences augmentent avec la **hauteur** du bâtiment et l'**effectif** accueilli.

## Le compartimentage
On découpe le bâtiment en **compartiments** séparés par des parois et des planchers coupe-feu, avec des portes coupe-feu à fermeture automatique, pour **confiner** le feu et les fumées. Les gaines techniques, trémies et passages de câbles doivent être rebouchés (calfeutrements coupe-feu).

## L'évacuation : les dégagements
Dans les établissements recevant du public, on retient les principes suivants (règlement français souvent pris comme référence) :
- La largeur des dégagements se compte en **unités de passage** (UP) : **1 UP = 0,90 m** ; **2 UP = 1,40 m** ; à partir de 3 UP, **n × 0,60 m** ;
- Nombre de dégagements selon l'effectif :
| Effectif | Dégagements minimaux |
|---|---|
| Moins de 20 personnes | 1 dégagement de 0,90 m |
| 20 à 50 personnes | 2 dégagements, ou 1 de 0,90 m + 1 dégagement accessoire |
| 51 à 100 personnes | 2 dégagements de 1 UP, ou 1 de 2 UP + 1 accessoire |
| 101 à 500 personnes | 2 dégagements ; au total 1 UP par tranche de 100 personnes |
- Les sorties doivent être **éloignées** l'une de l'autre, les portes s'ouvrir dans le sens de la sortie, les **distances à parcourir** limitées (de l'ordre de 30 à 40 m jusqu'à une sortie ou un escalier protégé) ;
- **Balisage** et **éclairage de sécurité**, **alarme** sonore.

> [!exemple] Salle polyvalente de 300 personnes
> 2 dégagements au minimum ; 300/100 = **3 UP** au total → par exemple une porte de 2 UP (1,40 m) et une porte de 1 UP (0,90 m), placées aux deux extrémités de la salle.

## Les moyens de secours
- **Extincteurs** : en général 1 extincteur à eau pulvérisée de 6 L pour 200 m² (au moins un par niveau), plus des extincteurs à CO₂ près des tableaux électriques ;
- Robinets d'incendie armés, colonnes sèches dans les immeubles, détection automatique, **désenfumage** (ouvrants en partie haute des escaliers et des circulations) ;
- **Accès** des engins des sapeurs-pompiers (en Côte d'Ivoire, le GSPM en zone urbaine) et points d'eau.

> [!retenir]
> - Triangle du feu ; les fumées sont la première cause de décès.
> - Réaction au feu (A1 à F) : contribution au feu ; résistance au feu (R, E, I + durée) : tenue des éléments.
> - Compartimenter, calfeutrer les traversées.
> - Dégagements en UP : 0,90 / 1,40 / n × 0,60 m ; 1 UP par 100 personnes au-delà de 100.`,
 sujet:{titre:"Sécurité incendie d'une salle polyvalente : dégagements, classements et extincteurs", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une salle polyvalente de **450 places** est construite à Yamoussoukro, avec des bureaux à l'étage (bâtiment de **1 200 m²** sur 2 niveaux).

**Données**
- Unités de passage : **1 UP = 0,90 m** ; **2 UP = 1,40 m** ; au-delà, n × 0,60 m ;
- De 101 à 500 personnes : **2 dégagements** au moins et **1 UP par tranche de 100 personnes** ;
- Extincteurs : **1 pour 200 m²**, au moins 1 par niveau ;
- Classements : réaction au feu (A1, A2, B… s1, d0) ; résistance au feu (R, E, I + durée).

### Partie A — Le feu (5 points)
1. Décrire les phases d'un incendie dans un local. Qu'est-ce que l'embrasement généralisé ? (3 pts)
2. Pourquoi les fumées sont-elles la première cause de décès ? (2 pts)

### Partie B — Évacuation (8 points)
3. Calculer le nombre d'unités de passage nécessaires et proposer les portes (nombre, largeurs). (4 pts)
4. Citer quatre règles concernant les sorties (emplacement, sens d'ouverture, distances, balisage). (4 pts)

### Partie C — Matériaux et structure (4 points)
5. Que signifient A1, A2-s1,d0 ? Classer : béton, plaque de plâtre, laine de roche, moquette, lambris bois. (2 pts)
6. Que signifient R 60, REI 90 et EI 30 ? Donner un exemple d'élément pour chacun. (2 pts)

### Partie D — Moyens de secours (3 points)
7. Calculer le nombre minimal d'extincteurs à eau. Où placer les extincteurs à CO₂ ? (3 pts)`,
  corrige:`### Partie A — Le feu (5 pts)
1. **Éclosion** → **croissance** (fumées chaudes sous le plafond) → **embrasement généralisé** (flashover : tout le local s'enflamme en quelques secondes quand les gaz chauds atteignent ≈ 600 °C) → **feu développé** → **déclin**. *(3 pts)*
2. Elles sont **toxiques** (CO, gaz irritants), **chaudes** et **opaques** (on ne trouve plus la sortie) ; elles se propagent plus vite que les flammes. *(2 pts)*

### Partie B — Évacuation (8 pts)
3. 450 personnes → **5 UP** (tranches de 100, arrondies au-dessus) et au moins 2 dégagements ; par exemple **2 portes de 2 UP (1,40 m)** et **1 porte de 1 UP (0,90 m)**, ou une porte de 3 UP (1,80 m) et une de 2 UP, **éloignées** l'une de l'autre. *(4 pts)*
4. Sorties **opposées** et éloignées ; portes **s'ouvrant vers l'extérieur** (sens de la sortie), sans clé ; **distances** à parcourir limitées (30 à 40 m) ; **éclairage de sécurité** et **balisage** lumineux ; dégagements toujours libres. *(4 pts)*

### Partie C — Matériaux (4 pts)
5. **A1** : incombustible (béton) ; **A2** : quasi incombustible (plaque de plâtre, laine de roche) ; s1 : peu de fumée, d0 : pas de gouttes enflammées. Moquette et lambris bois : classes B à E (combustibles), à limiter dans les dégagements. *(2 pts)*
6. **R 60** : stabilité 60 min (poteau) ; **REI 90** : stabilité, étanchéité aux flammes et isolation 90 min (plancher séparatif) ; **EI 30** : étanchéité et isolation 30 min (porte coupe-feu). *(2 pts)*

### Partie D — Secours (3 pts)
7. 600 m² par niveau / 200 = **3 extincteurs par niveau**, soit **6** au total, répartis près des sorties ; extincteurs à **CO₂** près des **tableaux électriques** et des locaux techniques. *(3 pts)*

> [!attention] Erreurs à éviter
> - Mettre les deux sorties côte à côte.
> - Fermer les sorties à clé pendant les manifestations.
> - Confondre réaction au feu (matériau) et résistance au feu (élément de construction).`},
 exercices:[
  {t:"Largeurs de dégagements", d:1, e:`Donner la largeur minimale d'un dégagement de 1 UP, 2 UP, 3 UP et 5 UP.`, c:`1 UP : **0,90 m** ; 2 UP : **1,40 m** ; 3 UP : 3 × 0,60 = **1,80 m** ; 5 UP : 5 × 0,60 = **3,00 m**.`},
  {t:"Salle de réunion", d:1, e:`Une salle de réunion accueille 80 personnes. Proposer des dégagements conformes.`, c:`Effectif de 51 à 100 : **2 dégagements de 1 UP** (2 portes de 0,90 m, éloignées l'une de l'autre), ou 1 dégagement de 2 UP (1,40 m) + 1 dégagement accessoire.`},
  {t:"Lire un classement", d:2, e:`Expliquer les classements suivants : a) plancher REI 60 ; b) poteau R 120 ; c) porte EI 30 ; d) revêtement mural B-s1,d0.`, c:`a) Le plancher reste **porteur**, **étanche** aux flammes et **isolant** pendant **60 min**.
b) Le poteau reste **porteur** pendant **2 h** (il n'a pas de fonction séparative).
c) La porte reste **étanche** et **isolante** pendant **30 min**.
d) Matériau **très peu combustible** (B), produisant **peu de fumée** (s1) et **sans gouttelettes** enflammées (d0).`},
  {t:"Extincteurs d'un immeuble", d:2, e:`Un immeuble de bureaux R+3 a des plateaux de 450 m². Combien d'extincteurs à eau pulvérisée faut-il au minimum par niveau et au total ? Quels extincteurs ajouter ?`, c:`Par niveau : 450/200 = 2,25 → **3 extincteurs** à eau pulvérisée.
Total : 4 niveaux × 3 = **12 extincteurs**, plus des extincteurs à **CO₂** près des tableaux électriques et de la salle des serveurs.`},
  {t:"Salle de spectacle", d:3, e:`Une salle de spectacle accueille 450 personnes. Une seule porte de 2,40 m est prévue, au fond de la salle, à côté de la scène.
Ce projet est-il acceptable ? Proposer une correction.`, c:`Effectif de 101 à 500 : **2 dégagements au moins**, et **1 UP par 100 personnes** → 450 → **5 UP** au total.
Une seule porte (même de 2,40 m = 4 UP) ne suffit pas : nombre de dégagements insuffisant, unités de passage insuffisantes, et un seul point de sortie peut être bloqué par le feu.
Correction : par exemple **deux portes de 1,80 m (3 UP)**, ou une de 3 UP et une de 2 UP, **à deux extrémités opposées** de la salle, ouvrant vers l'extérieur, avec balisage, éclairage de sécurité et désenfumage.`}
 ],
 quiz:[
  {q:"Le triangle du feu associe :", o:["Combustible, comburant, énergie","Eau, air, terre","Chaleur, lumière, son","Bois, papier, tissu"], r:0, e:"Supprimer un élément éteint le feu."},
  {q:"La première cause de décès dans un incendie est :", o:["L'intoxication par les fumées","Les brûlures","L'effondrement","La panique seule"], r:0, e:"Monoxyde de carbone et gaz toxiques."},
  {q:"Le béton est classé en réaction au feu :", o:["A1","F","D","E"], r:0, e:"Incombustible."},
  {q:"Dans « REI 60 », la lettre I signifie :", o:["Isolation thermique","Incombustible","Intérieur","Ignifugé"], r:0, e:"La face non exposée reste froide."},
  {q:"Largeur d'un dégagement de 2 UP :", o:["1,40 m","1,80 m","1,20 m","0,90 m"], r:0, e:"Valeur réglementaire."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"pb-7", niv:3, titre:"Air humide, point de rosée et condensation", duree:55, contenu:`## L'air contient de la vapeur d'eau
L'air est un mélange d'air sec et de **vapeur d'eau**. La quantité de vapeur se caractérise par :
- la **pression partielle de vapeur** pv (Pa) ;
- l'**humidité absolue** (ou teneur en eau) : x = 0,622 × pv/(p − pv), en kg d'eau par kg d'air sec (p ≈ 101 325 Pa) ;
- l'**humidité relative** : HR = pv/ps(T), rapport entre la vapeur présente et le maximum possible à cette température.

## La pression de vapeur saturante
L'air ne peut contenir qu'une quantité limitée de vapeur, qui **augmente fortement avec la température** : c'est la pression de vapeur saturante ps(T).
| T (°C) | 10 | 13 | 15 | 20 | 22 | 24 | 26 | 28 | 30 | 32 |
|---|---|---|---|---|---|---|---|---|---|---|
| ps (Pa) | 1 226 | 1 495 | 1 702 | 2 333 | 2 639 | 2 978 | 3 355 | 3 774 | 4 237 | 4 749 |
Un air tropical à 30 °C et 80 % contient pv = 0,8 × 4 237 = **3 390 Pa**, soit x ≈ **21,5 g d'eau par kg d'air** : deux à trois fois plus qu'un air tempéré.

## Le point de rosée
Si l'on refroidit un air sans changer sa quantité de vapeur, son humidité relative augmente jusqu'à 100 % : la température atteinte est le **point de rosée** Td, défini par **ps(Td) = pv**. En dessous, la vapeur **se condense** en eau liquide.
> [!exemple] Air extérieur à 30 °C et 80 %
> pv = 3 390 Pa ; dans le tableau, ps = 3 390 Pa correspond à **Td ≈ 26,2 °C**.
> Toute surface à moins de 26 °C en contact avec cet air **se couvre d'eau** : tuyau d'eau froide, gaine de climatisation, mur d'un local climatisé vu de l'extérieur, bouteille sortie du réfrigérateur.

## La condensation superficielle sous les tropiques
Dans les pays tempérés, la condensation se produit l'hiver sur la face **intérieure** des parois froides. Sous les tropiques, le risque principal est **inversé** : l'air chaud et humide condense sur les surfaces **refroidies par la climatisation** :
- gaines de soufflage et tuyauteries d'eau glacée **non isolées** dans les faux plafonds → gouttes, taches et effondrement des faux plafonds ;
- conduites d'eau froide dans les locaux non climatisés ;
- dalles et murs de locaux surclimatisés en contact avec un air extérieur humide (faces extérieures, vides sanitaires).
Remède : **isoler** les surfaces froides avec un isolant revêtu d'un **pare-vapeur continu**, pour que la surface extérieure de l'isolant reste au-dessus du point de rosée.

## La déshumidification par la climatisation
La batterie froide d'un climatiseur refroidit l'air en dessous de son point de rosée : la vapeur condense et s'écoule par le **tuyau de condensats**.
> [!exemple] Climatiseur traitant 500 m³/h d'air extérieur
> Air entrant : 30 °C, 80 % → x = 21,5 g/kg ; air sortant de la batterie : 13 °C saturé → x = 9,3 g/kg.
> Eau retirée : 21,5 − 9,3 = 12,2 g par kg d'air ; débit d'air : 500 × 1,16 = 580 kg/h → **7,1 litres d'eau par heure** à évacuer. Les évacuations de condensats doivent être prévues dès la conception (pente, siphon, raccordement).

## Vérifier un risque de condensation
1. Calculer pv de l'air (HR × ps) puis son **point de rosée** Td ;
2. Calculer la **température de la surface** à vérifier ;
3. Il y a condensation si **T(surface) < Td**.
On garde une marge de 1 à 2 °C.

> [!retenir]
> - HR = pv/ps(T) ; x = 0,622 pv/(p − pv).
> - Point de rosée : ps(Td) = pv ; à 30 °C et 80 %, Td ≈ 26 °C.
> - Sous les tropiques : condensation sur les surfaces refroidies (gaines, tuyaux, locaux climatisés).
> - Isoler les surfaces froides avec un pare-vapeur continu ; prévoir l'évacuation des condensats.`,
 sujet:{titre:"Air humide et condensation : point de rosée, tuyaux froids et climatiseur", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Dans un immeuble de bureaux climatisé à San-Pédro, des gouttes apparaissent sur les tuyaux d'eau froide et sous les gaines ; on veut aussi dimensionner l'évacuation des condensats.

**Données**
- Air extérieur : **28 °C**, humidité relative **75 %** ; p = **101 325 Pa** ;
- Pression de vapeur saturante :

| T (°C) | 10 | 13 | 15 | 20 | 22 | 24 | 26 | 28 | 30 |
|---|---|---|---|---|---|---|---|---|---|
| ps (Pa) | 1 226 | 1 495 | 1 702 | 2 333 | 2 639 | 2 978 | 3 355 | 3 774 | 4 237 |

- Humidité absolue : x = 0,622 × pv / (p − pv) (kg d'eau / kg d'air sec) ;
- Tuyau d'eau glacée à **12 °C** ; gaine de soufflage à **18 °C** en surface ;
- Climatiseur traitant **400 m³/h** d'air extérieur, sortie de batterie à **13 °C** saturé ; masse volumique de l'air **1,16 kg/m³**.

### Partie A — Air humide (6 points)
1. Définir humidité relative, pression de vapeur et point de rosée. (3 pts)
2. Calculer pv et l'humidité absolue x de l'air extérieur. (3 pts)

### Partie B — Point de rosée (7 points)
3. Calculer le point de rosée par interpolation dans le tableau. (3 pts)
4. Les surfaces du tuyau (12 °C) et de la gaine (18 °C) se couvrent-elles d'eau dans un local qui reçoit cet air ? (2 pts)
5. Proposer une solution. (2 pts)

### Partie C — Condensats (7 points)
6. Calculer l'humidité absolue de l'air à la sortie de la batterie. (2 pts)
7. Calculer la quantité d'eau retirée par heure. (3 pts)
8. Quelles dispositions prévoir pour les évacuations de condensats ? (2 pts)`,
  corrige:`### Partie A — Air humide (6 pts)
1. **pv** : pression partielle de la vapeur d'eau dans l'air ; **HR** = pv / ps(T) (part de la vapeur maximale que l'air peut contenir à cette température) ; **point de rosée** Td : température à laquelle il faut refroidir l'air pour qu'il devienne saturé (ps(Td) = pv). *(3 pts)*
2. pv = 0,75 × 3 774 = **2 831 Pa** ; x = 0,622 × 2 831 / (101 325 − 2 831) = **0,0179 kg/kg = 17,9 g/kg**. *(3 pts)*

### Partie B — Point de rosée (7 pts)
3. 2 831 Pa est entre ps(22) = 2 639 et ps(24) = 2 978 : $$ Td = 22 + 2 × (2 831 − 2 639) / (2 978 − 2 639) = 23,1 °C
   *(3 pts)*
4. 12 °C et 18 °C sont **inférieurs à 23,1 °C** : les deux surfaces **condensent** (le tuyau ruisselle). *(2 pts)*
5. **Calorifuger** les tuyaux et gaines avec un isolant à cellules fermées et un **pare-vapeur** continu (sinon l'humidité condense dans l'isolant) ; limiter l'entrée d'air humide non traité. *(2 pts)*

### Partie C — Condensats (7 pts)
6. ps(13) = 1 495 Pa (saturé) → x = 0,622 × 1 495 / (101 325 − 1 495) = **9,3 g/kg**. *(2 pts)*
7. Δx = 17,9 − 9,3 = 8,6 g/kg ; débit d'air : 400 × 1,16 = 464 kg/h → **≈ 4,0 L d'eau par heure** (≈ 40 L par journée de 10 h). *(3 pts)*
8. Bac et tuyau d'évacuation avec **pente** continue, **siphon**, raccordement au réseau d'eaux usées (pas de rejet sur la façade ou le trottoir), accès pour l'entretien, éventuellement pompe de relevage. *(2 pts)*

> [!attention] Erreurs à éviter
> - Comparer la température de surface à la température de l'air au lieu du point de rosée.
> - Interpoler sur la mauvaise colonne du tableau.
> - Oublier l'évacuation des condensats : dégâts des eaux garantis.`},
 exercices:[
  {t:"Humidité relative et point de rosée", d:1, e:`Un local à 26 °C contient de l'air dont la pression de vapeur vaut 2 000 Pa.
a) Calculer l'humidité relative (ps(26 °C) = 3 355 Pa).
b) Estimer son point de rosée à l'aide du tableau du cours.`, c:`a) HR = 2 000/3 355 = **60 %**.
b) ps = 2 000 Pa est entre 15 °C (1 702 Pa) et 20 °C (2 333 Pa) : par interpolation, Td ≈ 15 + 5 × (2 000 − 1 702)/(2 333 − 1 702) = **17,4 °C** (valeur exacte 17,6 °C).`},
  {t:"Tuyau d'eau froide", d:1, e:`Un tuyau d'eau à 18 °C traverse un local non climatisé à 30 °C et 70 % d'humidité (Td ≈ 23,9 °C).
Le tuyau va-t-il « suer » ? Même question dans une chambre climatisée à 24 °C et 50 % (Td ≈ 12,9 °C).`, c:`Local non climatisé : 18 °C < 23,9 °C → **oui, condensation** (gouttes sous le tuyau, taches).
Chambre climatisée : 18 °C > 12,9 °C → **pas de condensation**.`},
  {t:"Gaine de climatisation dans un faux plafond", d:2, e:`Une gaine en tôle transporte de l'air à 14 °C dans un faux plafond non climatisé où l'air est à 30 °C et 70 % (Td ≈ 23,9 °C). La tôle est à 15 °C.
a) Que se passe-t-il ?
b) Quelle doit être au minimum la température de la face extérieure de l'isolant qui l'entoure ?`, c:`a) 15 °C < 23,9 °C → la vapeur **condense** sur la gaine ; l'eau goutte sur le faux plafond, le tache et peut le faire tomber.
b) La surface de l'isolant doit rester au-dessus de **≈ 24 °C**, avec une marge : **25 à 26 °C**. L'isolant doit être protégé par un **pare-vapeur continu** (joints scotchés), sinon la vapeur traverse l'isolant et condense sur la tôle.`},
  {t:"Eau de condensation d'un climatiseur", d:2, e:`Un climatiseur reçoit 400 m³/h d'air à 28 °C et 85 % (x = 20,2 g/kg) et le refroidit jusqu'à 12 °C saturé (x = 8,8 g/kg). Masse volumique de l'air : 1,17 kg/m³.
Quelle quantité d'eau faut-il évacuer par heure, puis sur une journée de 10 h ?`, c:`Eau retirée : 20,2 − 8,8 = **11,4 g/kg** ; débit d'air : 400 × 1,17 = **468 kg/h**.
Eau : 468 × 11,4 = 5 335 g ≈ **5,3 L/h**, soit **53 L** en 10 h : il faut une évacuation raccordée, pas un simple tuyau qui coule sur la façade.`},
  {t:"Épaisseur d'isolant d'une conduite froide", d:3, e:`Une conduite d'eau glacée à 7 °C traverse un local à 30 °C et 80 % (Td ≈ 26,2 °C). On l'isole avec un isolant de λ = 0,035 W/(m·K). Coefficient d'échange superficiel extérieur : he = 8 W/(m²·K). On veut une température de surface d'au moins 27 °C.
Estimer l'épaisseur d'isolant (calcul plan, on néglige la résistance du tube).`, c:`Le flux traverse l'isolant puis la couche superficielle : (Ta − Ts)/(Ta − Tf) = (1/he)/(e/λ + 1/he).
(30 − 27)/(30 − 7) = 0,130 → e/λ + 0,125 = 0,125/0,130 = 0,958 → e/λ = 0,833 m²·K/W.
e = 0,833 × 0,035 = 0,029 m → **≈ 30 mm** (on retient 32 mm, épaisseur commerciale), avec pare-vapeur extérieur continu.`}
 ],
 quiz:[
  {q:"L'humidité relative est :", o:["pv/ps(T)","ps/pv","pv × ps","x/0,622"], r:0, e:"Rapport à la saturation."},
  {q:"Quand la température d'un air augmente sans ajout d'eau, son humidité relative :", o:["Diminue","Augmente","Reste égale","Devient 100 %"], r:0, e:"ps augmente."},
  {q:"Il y a condensation sur une surface si sa température est :", o:["Inférieure au point de rosée de l'air","Supérieure au point de rosée","Égale à celle de l'air","Supérieure à 30 °C"], r:0, e:"La vapeur se liquéfie."},
  {q:"Sous les tropiques, la condensation menace surtout :", o:["Les surfaces refroidies par la climatisation","Les toitures en plein soleil","Les murs chauds","Les fenêtres ouvertes"], r:0, e:"Gaines, tuyaux, locaux climatisés."},
  {q:"Point de rosée d'un air à 30 °C et 80 % :", o:["Environ 26 °C","Environ 10 °C","30 °C","40 °C"], r:0, e:"pv ≈ 3 390 Pa."}
 ]},

{id:"pb-15", niv:3, titre:"Migration de vapeur dans les parois : la méthode de Glaser", duree:55, contenu:`## La vapeur traverse les parois
Quand les pressions de vapeur sont différentes de part et d'autre d'une paroi, la vapeur la **traverse par diffusion**, du côté où pv est **élevée** vers le côté où pv est **faible**.
- Dans un bâtiment **climatisé** sous les tropiques, l'air extérieur (30 °C, 80 % : pv ≈ 3 400 Pa) est bien plus chargé que l'air intérieur (22 °C, 50 % : pv ≈ 1 300 Pa) : la vapeur migre **de l'extérieur vers l'intérieur**, à l'inverse des pays froids.
- Si, en chemin, elle rencontre une zone dont la température est sous son point de rosée, elle **condense dans la paroi** : isolant mouillé, moisissures cachées, revêtements qui se décollent.

## La résistance des matériaux à la vapeur
Chaque matériau est caractérisé par son **facteur de résistance à la diffusion** µ (sans unité : combien de fois il freine la vapeur plus qu'une couche d'air de même épaisseur). On utilise l'**épaisseur d'air équivalente** :
$$ Sd = µ × e     (m)
| Matériau | µ | Exemple d'épaisseur | Sd |
|---|---|---|---|
| Laine minérale | 1 | 5 cm | 0,05 m |
| Plaque de plâtre | 8 | 1,3 cm | 0,10 m |
| Enduit ciment | 15 | 2 cm | 0,30 m |
| Béton | 80 à 130 | 20 cm | 16 à 26 m |
| Polystyrène expansé | 30 à 70 | 4 cm | 1,2 à 2,8 m |
| Papier peint vinyle, peinture glycéro | — | — | 2 à 5 m |
| Film polyéthylène (pare-vapeur) | — | 0,2 mm | 20 à 100 m |

## La méthode de Glaser
1. Calculer le **profil de température** dans la paroi (comme en thermique : la chute de température de chaque couche est proportionnelle à sa résistance thermique R) ;
2. En déduire, à chaque interface, la **pression de vapeur saturante** ps(T) ;
3. Calculer le **profil de pression de vapeur** pv : la chute de pv dans chaque couche est proportionnelle à son **Sd** ;
4. **Comparer** : si pv dépasse ps à un endroit, il y a **condensation** à cet endroit.

> [!exemple] Chambre climatisée avec papier peint vinyle
> Paroi (de l'extérieur vers l'intérieur) : enduit ciment 2 cm ; parpaing creux 15 cm ; laine minérale 5 cm ; plaque de plâtre 1,3 cm ; papier peint vinyle (Sd = 2 m).
> Extérieur : 30 °C, 85 % (pv = 3 600 Pa) ; intérieur surclimatisé : 20 °C, 50 % (pv = 1 170 Pa).
> | Interface | T (°C) | ps (Pa) | pv (Pa) | Diagnostic |
> |---|---|---|---|---|
> | Enduit / parpaing | 29,7 | 4 160 | 3 380 | sec |
> | Parpaing / laine | 28,9 | 3 970 | 2 730 | sec |
> | Laine / plâtre | 21,0 | 2 490 | 2 690 | **condensation** |
> | Plâtre / vinyle | 20,7 | 2 440 | 2 620 | **condensation** |
> La vapeur traverse facilement l'enduit, le parpaing et la laine, puis bute sur le vinyle (presque étanche) du côté **froid** : elle condense derrière le papier peint et dans le plâtre. C'est la cause classique des **moisissures derrière les revêtements vinyles** des hôtels et bureaux climatisés sous les tropiques.

## La règle du pare-vapeur sous les tropiques
Le **pare-vapeur** (ou le matériau le plus fermé à la vapeur) doit être placé du côté **chaud et humide**, c'est-à-dire, en bâtiment climatisé tropical, **côté extérieur** de l'isolant ; le côté intérieur (froid) doit rester **ouvert à la vapeur** (peintures microporeuses, pas de vinyle).
> [!exemple] Correction
> Avec un pare-vapeur (Sd = 20 m) sous l'enduit extérieur, la pression de vapeur chute dès l'extérieur : à l'interface laine/plâtre, pv ≈ 1 390 Pa ≪ ps = 2 490 Pa → **plus de condensation**.
> Autre solution : supprimer le vinyle (peinture perméable), limiter la surclimatisation (consigne 25 °C) et bien réaliser l'étanchéité à l'air.

> [!retenir]
> - La vapeur migre des fortes vers les faibles pv : de l'extérieur vers l'intérieur dans un bâtiment climatisé tropical.
> - Sd = µ × e ; chutes de température ∝ R, chutes de pv ∝ Sd.
> - Condensation si pv > ps à une interface.
> - Pare-vapeur du côté chaud et humide (extérieur sous les tropiques) ; intérieur ouvert à la vapeur.`,
 sujet:{titre:"Méthode de Glaser : condensation dans le mur d'une chambre climatisée", duree:120, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Dans un hôtel à Assinie, des moisissures apparaissent derrière la peinture des chambres très climatisées. On analyse la paroi par la méthode de Glaser.

**Paroi (de l'extérieur vers l'intérieur)**

| Couche | R (m²·K/W) | Sd (m) |
|---|---|---|
| Enduit ciment 2 cm | 0,017 | 0,30 |
| Brique creuse 15 cm | 0,375 | 1,50 |
| Polystyrène 4 cm | 1,053 | 1,60 |
| Plaque de plâtre 1,3 cm | 0,052 | 0,10 |
| Peinture glycéro (intérieur) | ≈ 0 | 4,0 |

Rse = **0,04** ; Rsi = **0,13** m²·K/W.
**Conditions** : extérieur **30 °C, 85 %** (pv = 3 601 Pa) ; chambre **19 °C, 55 %** (pv = 1 209 Pa).
Pression de vapeur saturante : ps(20,2 °C) = **2 367 Pa** ; ps(19,9 °C) = **2 318 Pa** ; ps(27,1 °C) = **3 596 Pa** ; ps(29,6 °C) = **4 152 Pa**.

### Partie A — Principe (4 points)
1. Dans quel sens migre la vapeur dans cette paroi ? Pourquoi est-ce l'inverse d'un pays froid ? (2 pts)
2. Qu'est-ce que l'épaisseur d'air équivalente Sd ? (2 pts)

### Partie B — Profils (10 points)
3. Calculer la résistance totale et le flux de chaleur (ΔT = 11 °C). (2 pts)
4. Calculer la température à chaque interface. (4 pts)
5. Calculer la pression de vapeur à chaque interface (chute proportionnelle aux Sd). (4 pts)

### Partie C — Diagnostic et solutions (6 points)
6. Comparer pv et ps à chaque interface. Où y a-t-il condensation ? (2 pts)
7. Vérifier que la condensation disparaît si l'on remplace la peinture glycéro par une peinture acrylique (Sd = 0,2 m). (2 pts)
8. Où faudrait-il placer un pare-vapeur dans un bâtiment climatisé en climat tropical ? Pourquoi ? (2 pts)`,
  corrige:`### Partie A — Principe (4 pts)
1. La vapeur va du côté où pv est le plus élevé vers le plus faible : **de l'extérieur (3 601 Pa) vers l'intérieur climatisé (1 209 Pa)**. En pays froid, l'intérieur chauffé est plus humide : la vapeur sort. *(2 pts)*
2. **Sd = µ × e** : épaisseur d'air qui opposerait la même résistance à la vapeur que la couche (plus Sd est grand, plus la couche est étanche à la vapeur). *(2 pts)*

### Partie B — Profils (10 pts)
3. RT = 0,04 + 0,017 + 0,375 + 1,053 + 0,052 + 0,13 = **1,667 m²·K/W** ; φ = 11 / 1,667 = **6,6 W/m²**. *(2 pts)*
4. Chute de température proportionnelle à R (ΔT × R / RT) : *(4 pts)*
   - surface extérieure : 30 − 11 × 0,04 / 1,667 = **29,7 °C** ;
   - enduit / brique : **29,6 °C** ;
   - brique / polystyrène : **27,1 °C** ;
   - polystyrène / plâtre : **20,2 °C** ;
   - plâtre / peinture : **19,9 °C**.
5. ΣSd = 7,50 m ; chute totale 2 392 Pa : *(4 pts)*
   - enduit / brique : 3 601 − 2 392 × 0,30 / 7,50 = **3 506 Pa** ;
   - brique / polystyrène : **3 028 Pa** ;
   - polystyrène / plâtre : **2 517 Pa** ;
   - plâtre / peinture : **2 484 Pa** ; puis 1 209 Pa dans la chambre.

### Partie C — Diagnostic (6 pts)
6. *(2 pts)*

| Interface | T (°C) | ps (Pa) | pv (Pa) | Diagnostic |
|---|---|---|---|---|
| Enduit / brique | 29,6 | 4 152 | 3 506 | sec |
| Brique / polystyrène | 27,1 | 3 596 | 3 028 | sec |
| Polystyrène / plâtre | 20,2 | 2 367 | 2 517 | **condensation** |
| Plâtre / peinture | 19,9 | 2 318 | 2 484 | **condensation** |

La vapeur bute sur la peinture glycéro (côté **froid**) : elle condense dans le plâtre et derrière la peinture → moisissures.
7. ΣSd = 3,70 m : pv(polystyrène / plâtre) = 3 601 − 2 392 × 3,40 / 3,70 = **1 403 Pa** < 2 367 ; pv(plâtre / peinture) = **1 336 Pa** < 2 318 → **plus de condensation**. *(2 pts)*
8. Côté **extérieur** (côté chaud et humide) de l'isolant, ou bien utiliser des finitions intérieures **perméables** à la vapeur ; et ne pas surclimatiser (19 °C est inutilement froid). *(2 pts)*

> [!attention] Erreurs à éviter
> - Placer le pare-vapeur côté intérieur comme en Europe.
> - Répartir la chute de pression de vapeur selon les résistances thermiques au lieu des Sd.
> - Poser des revêtements étanches (vinyle, glycéro) dans des pièces très climatisées.`},
 exercices:[
  {t:"Épaisseurs d'air équivalentes", d:1, e:`Calculer Sd pour : a) 20 cm de béton (µ = 100) ; b) 6 cm de polystyrène (µ = 50) ; c) 10 cm de laine minérale (µ = 1).
Classer ces couches de la plus ouverte à la plus fermée à la vapeur.`, c:`a) Sd = 100 × 0,20 = **20 m** ; b) 50 × 0,06 = **3 m** ; c) 1 × 0,10 = **0,10 m**.
Classement : laine minérale (très ouverte) → polystyrène → béton (très fermé).`},
  {t:"Sens de migration", d:1, e:`Dans quel sens migre la vapeur à travers les murs : a) d'une chambre climatisée à 24 °C et 50 % à Abidjan (extérieur 30 °C, 80 %) ? b) d'une maison chauffée à 20 °C en hiver en Europe (extérieur 0 °C, 90 %) ?
(ps : 24 °C : 2 978 Pa ; 30 °C : 4 237 Pa ; 20 °C : 2 333 Pa ; 0 °C : 611 Pa)`, c:`a) pv extérieur = 0,8 × 4 237 = 3 390 Pa ; intérieur = 0,5 × 2 978 = 1 489 Pa → de l'**extérieur vers l'intérieur**.
b) pv intérieur = 0,5 × 2 333 = 1 167 Pa (si HR 50 %) ; extérieur = 0,9 × 611 = 550 Pa → de l'**intérieur vers l'extérieur**.
Les règles de pose des pare-vapeur d'Europe ne s'appliquent donc pas telles quelles sous les tropiques.`},
  {t:"Profil de température", d:2, e:`Une paroi a une résistance thermique totale (avec les résistances superficielles) de 1,82 m²·K/W. Entre l'extérieur (30 °C) et l'interface laine/plâtre, la résistance cumulée vaut 1,62 m²·K/W. L'intérieur est à 20 °C.
Calculer la température à cette interface.`, c:`T = 30 − (30 − 20) × 1,62/1,82 = 30 − 8,9 = **21,1 °C** (ps ≈ 2 500 Pa).`},
  {t:"Profil de pression de vapeur", d:2, e:`Une paroi a un Sd total de 3,35 m (vinyle intérieur de 2 m compris). Extérieur : pv = 3 600 Pa ; intérieur : pv = 1 170 Pa. Entre l'extérieur et l'interface laine/plâtre, le Sd cumulé vaut 1,25 m.
Calculer pv à cette interface et conclure sachant que ps y vaut 2 490 Pa.`, c:`pv = 3 600 − (3 600 − 1 170) × 1,25/3,35 = 3 600 − 907 = **2 693 Pa**.
2 693 > 2 490 Pa → **condensation** à l'interface laine/plâtre.`},
  {t:"Choisir la bonne paroi", d:3, e:`Pour la chambre climatisée de l'exemple, on compare : a) laine minérale + plâtre + vinyle ; b) laine minérale + plâtre + peinture microporeuse (Sd ≈ 0,1 m) ; c) pare-vapeur extérieur sous l'enduit + laine + plâtre + vinyle.
Lesquelles risquent la condensation ? Justifier qualitativement.`, c:`a) **Risque** : la vapeur entre facilement par l'extérieur et bute côté froid (vinyle) → condensation derrière le revêtement.
b) **Pas de risque** important : la paroi reste ouverte côté intérieur, la vapeur traverse et est reprise par la climatisation (qui la condense dans sa batterie) ; les pv restent sous ps.
c) **Pas de condensation** : le pare-vapeur placé du côté chaud et humide fait chuter pv dès l'extérieur (≈ 1 390 Pa à l'interface laine/plâtre ≪ 2 490 Pa).
Solutions b) ou c), et dans tous les cas éviter la surclimatisation.`}
 ],
 quiz:[
  {q:"La vapeur d'eau diffuse à travers une paroi :", o:["Des fortes vers les faibles pressions de vapeur","Toujours de l'intérieur vers l'extérieur","Des faibles vers les fortes pressions","Jamais"], r:0, e:"Diffusion."},
  {q:"L'épaisseur d'air équivalente d'une couche vaut :", o:["Sd = µ × e","Sd = e/µ","Sd = λ × e","Sd = R/µ"], r:0, e:"Résistance à la vapeur."},
  {q:"Dans la méthode de Glaser, on conclut à une condensation quand :", o:["pv > ps à une interface","T > Td partout","pv < ps partout","Sd = 0"], r:0, e:"La vapeur dépasse la saturation."},
  {q:"Sous les tropiques, dans un bâtiment climatisé, le pare-vapeur se place :", o:["Côté extérieur (chaud et humide)","Côté intérieur","Au milieu de l'isolant","Nulle part"], r:0, e:"Toujours du côté chaud."},
  {q:"Un papier peint vinyle dans une chambre climatisée tropicale peut provoquer :", o:["Des moisissures derrière le revêtement","Un meilleur confort acoustique","Une baisse d'humidité","Rien"], r:0, e:"Il bloque la vapeur du côté froid."}
 ]},

{id:"pb-16", niv:3, titre:"Ventilation naturelle : effet du vent et tirage thermique", duree:50, contenu:`## Les deux moteurs de la ventilation naturelle
L'air se déplace à travers un bâtiment sous l'effet d'une **différence de pression** entre ses ouvertures. Deux phénomènes la créent :
1. **Le vent** : surpression sur la façade exposée, dépression sur la façade abritée et sur la toiture ;
2. **Le tirage thermique** (effet cheminée) : l'air intérieur plus chaud, donc plus léger, monte et sort par le haut, aspirant de l'air frais par le bas.

## La pression due au vent
$$ p = ½ × ρ × v² × Cp
ρ ≈ 1,2 kg/m³ ; v : vitesse du vent ; Cp : **coefficient de pression** (+ 0,5 à + 0,8 face au vent ; − 0,3 à − 0,5 sur la façade arrière). La différence de pression entre deux façades vaut Δp = ½ ρ v² ΔCp.

## Le débit à travers des ouvertures
$$ Q = Cd × A × √(2 Δp / ρ)     (m³/s)
Cd ≈ 0,6 (coefficient de débit d'une ouverture). Quand l'air traverse **deux ouvertures en série** (entrée et sortie), on utilise une surface équivalente :
$$ 1/A(éq)² = 1/A₁² + 1/A₂²
C'est la **plus petite** ouverture qui limite le débit : agrandir seulement l'entrée ne sert presque à rien.

> [!exemple] Pièce traversante, vent de 2 m/s
> ΔCp = 1,0 → Δp = 0,5 × 1,2 × 2² × 1,0 = **2,4 Pa**.
> Deux fenêtres de 1 m² : A(éq) = 1/√(1 + 1) = **0,71 m²**.
> Q = 0,6 × 0,71 × √(2 × 2,4/1,2) = 0,42 × 2 = **0,85 m³/s ≈ 3 050 m³/h**.
> Pour une pièce de 50 m³ : n ≈ **61 volumes par heure** ! Un vent même faible renouvelle énormément l'air d'une pièce traversante.

## Le tirage thermique
$$ Δp ≈ ρ × g × h × ΔT / T(K)
h : hauteur entre l'entrée basse et la sortie haute ; ΔT : écart entre l'air intérieur et l'air extérieur ; T en kelvins (≈ 303 K à 30 °C).
> [!exemple] Pièce de 3 m de haut, intérieur 3 °C plus chaud
> Δp = 1,2 × 9,81 × 3 × 3/303 = **0,35 Pa** ; avec les mêmes fenêtres (A(éq) = 0,71 m²) : Q = 0,6 × 0,71 × √(2 × 0,35/1,2) = 0,32 m³/s ≈ **1 170 m³/h**.
> Avec une cheminée solaire ou une cage d'escalier de 8 m : Δp = 0,93 Pa et Q ≈ 1 900 m³/h.
Sous les tropiques, les écarts de température intérieur-extérieur sont faibles : le tirage thermique est utile **la nuit** et **quand il n'y a pas de vent**, mais le vent reste le moteur principal. On augmente le tirage en **surélevant les sorties** (lanterneaux, cheminées de ventilation, patios) et en chauffant l'air de sortie au soleil (cheminée solaire).

## Concevoir pour le vent
- **Orienter** les ouvertures face aux vents dominants (jusqu'à 45° d'écart) ;
- Prévoir des **sorties d'air** sur les façades en dépression (arrière, toiture) aussi grandes que les entrées ;
- Placer les entrées **à hauteur des occupants** (0,5 à 1,5 m) pour qu'ils sentent le courant d'air, les sorties **en hauteur** pour évacuer l'air chaud ;
- Éviter les **obstacles** intérieurs ; utiliser impostes, portes à persiennes, cloisons basses ;
- Respecter des **distances** entre bâtiments : l'ombre de vent d'un bâtiment s'étend sur 3 à 6 fois sa hauteur ;
- Plans **étroits** (une seule épaisseur de pièce), bâtiments **surélevés** sur pilotis pour capter le vent au-dessus des obstacles.

> [!retenir]
> - Vent : Δp = ½ ρ v² ΔCp ; tirage : Δp ≈ ρ g h ΔT/T.
> - Q = Cd A √(2Δp/ρ) ; ouvertures en série : 1/A(éq)² = Σ 1/Aᵢ² (la plus petite domine).
> - Le vent est le moteur principal sous les tropiques ; le tirage aide la nuit et par temps calme.
> - Entrées à hauteur d'homme face au vent, sorties hautes et aussi grandes.`,
 sujet:{titre:"Ventilation naturelle : effet du vent et tirage thermique d'une cage d'escalier", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** On veut rafraîchir sans climatisation une salle de réunion de **60 m³** d'un centre culturel à Grand-Lahou.

**Données**
- Vent : **3 m/s** ; différence de coefficients de pression entre les deux façades **ΔCp = 0,9** ; ρ(air) = **1,2 kg/m³** ;
- Ouvertures : **1,2 m²** au vent, **0,8 m²** sous le vent ; coefficient de débit **Cd = 0,6** ;
- Δp = ½ ρ v² ΔCp ; Q = Cd × A(éq) × √(2 Δp / ρ) ; 1 / A(éq)² = 1 / A1² + 1 / A2² ;
- Tirage thermique : Δp ≈ ρ g h ΔT / T(K) ; cage d'escalier de **6 m** de haut, intérieur **2 °C** plus chaud que l'extérieur (T int ≈ **305 K**) ; g = 9,81 m/s².

### Partie A — Effet du vent (9 points)
1. Calculer la différence de pression due au vent. (2 pts)
2. Calculer la surface équivalente des deux ouvertures. (2 pts)
3. Calculer le débit d'air (m³/s et m³/h) et le nombre de renouvellements par heure. (3 pts)
4. Que se passerait-il si l'ouverture sous le vent était fermée ? (2 pts)

### Partie B — Tirage thermique (7 points)
5. Calculer la différence de pression motrice dans la cage d'escalier. (2 pts)
6. Calculer le débit avec la même surface équivalente. (3 pts)
7. Comparer les deux effets et dire quand le tirage thermique est utile. (2 pts)

### Partie C — Conception (4 points)
8. Proposer quatre règles de conception pour une bonne ventilation naturelle. (4 pts)`,
  corrige:`### Partie A — Vent (9 pts)
1. Δp = 0,5 × 1,2 × 3² × 0,9 = **4,86 Pa**. *(2 pts)*
2. 1 / A(éq)² = 1 / 1,44 + 1 / 0,64 = 0,694 + 1,563 = 2,257 → **A(éq) = 0,67 m²** (la plus petite ouverture limite le débit). *(2 pts)*
3. $$ Q = 0,6 × 0,67 × √(2 × 4,86 / 1,2) = 0,40 × 2,85 = 1,14 m³/s ≈ 4 090 m³/h
   soit 4 090 / 60 ≈ **68 renouvellements par heure**. *(3 pts)*
4. L'air ne peut plus **traverser** : il n'y a plus qu'une faible ventilation par turbulence (mono-façade), le débit chute fortement. *(2 pts)*

### Partie B — Tirage (7 pts)
5. Δp = 1,2 × 9,81 × 6 × 2 / 305 = **0,46 Pa**. *(2 pts)*
6. Q = 0,6 × 0,67 × √(2 × 0,46 / 1,2) = 0,40 × 0,88 = **0,35 m³/s ≈ 1 260 m³/h** (21 vol/h). *(3 pts)*
7. Le vent est **3 fois plus efficace** quand il souffle, mais il est irrégulier ; le tirage thermique fonctionne **sans vent** (nuits calmes, sites abrités) : il assure un débit de base, d'autant plus fort que la hauteur est grande (cheminée solaire, cage d'escalier ouverte en haut). *(2 pts)*

### Partie C — Conception (4 pts)
8. Bâtiments **étroits** (≤ 2,5 fois la hauteur pour une façade, plus avec ventilation traversante) ; ouvertures sur des **façades opposées**, face aux vents dominants (± 30 à 45°) ; **porosité** suffisante (20 à 30 % des façades), impostes et cloisons ajourées ; sorties **hautes** (lanterneaux, cheminées) ; protéger les ouvertures de la pluie et des intrusions (persiennes, grilles). *(4 pts)*

> [!attention] Erreurs à éviter
> - Additionner les surfaces d'ouverture en série au lieu de calculer A(éq).
> - Oublier la conversion de la température en kelvins.
> - Croire qu'une seule grande fenêtre suffit à ventiler.`},
 exercices:[
  {t:"Pression du vent", d:1, e:`Un vent de 3 m/s souffle perpendiculairement à une maison (Cp = + 0,6 face au vent ; − 0,3 à l'arrière).
Calculer la pression sur chaque façade et la différence de pression.`, c:`½ ρ v² = 0,5 × 1,2 × 9 = **5,4 Pa**.
Face au vent : + 0,6 × 5,4 = **+ 3,24 Pa** ; arrière : − 0,3 × 5,4 = **− 1,62 Pa** ; Δp = **4,86 Pa**.`},
  {t:"Débit d'une salle traversante", d:2, e:`Avec Δp = 4,86 Pa (exercice précédent), une salle de 6 × 5 × 3 m a deux fenêtres opposées de 1,5 m² chacune.
Calculer le débit et le taux de renouvellement (Cd = 0,6).`, c:`A(éq) = 1/√(1/1,5² + 1/1,5²) = 1,5/√2 = **1,06 m²**.
Q = 0,6 × 1,06 × √(2 × 4,86/1,2) = 0,636 × 2,85 = **1,81 m³/s ≈ 6 520 m³/h**.
V = 90 m³ → n ≈ **72 vol/h** : bien au-delà des besoins d'hygiène ; ce débit sert surtout au confort (mouvement d'air).`},
  {t:"Entrée et sortie de tailles différentes", d:2, e:`Une pièce a une fenêtre d'entrée de 1 m² et une sortie de 3 m². Une autre a deux ouvertures de 2 m². Une troisième a 0,5 m² et 1,5 m².
Calculer A(éq) dans chaque cas et conclure.`, c:`1 et 3 m² : A(éq) = 1/√(1 + 1/9) = **0,95 m²**.
2 et 2 m² : A(éq) = 2/√2 = **1,41 m²**.
0,5 et 1,5 m² : A(éq) = 1/√(4 + 0,444) = **0,47 m²**.
Avec la même surface totale (4 m² ou 2 m²), mieux vaut des ouvertures **égales** ; la plus petite ouverture limite toujours le débit.`},
  {t:"Tirage thermique d'une cage d'escalier", d:2, e:`Une cage d'escalier de 6 m de haut a une entrée d'air basse et une sortie haute de 0,5 m² chacune. L'air intérieur est 4 °C plus chaud qu'à l'extérieur (30 °C).
Calculer Δp et le débit.`, c:`Δp = 1,2 × 9,81 × 6 × 4/303 = **0,93 Pa**.
A(éq) = 0,5/√2 = 0,354 m² → Q = 0,6 × 0,354 × √(2 × 0,93/1,2) = 0,212 × 1,245 = 0,264 m³/s ≈ **950 m³/h**.`},
  {t:"Dimensionner des ouvertures", d:3, e:`On veut au moins 1 000 m³/h dans une pièce traversante quand le vent ne crée que Δp = 2,4 Pa.
Quelle surface équivalente faut-il ? Quelle surface pour chacune des deux fenêtres (égales) ?`, c:`Q = 1 000/3 600 = 0,278 m³/s → A(éq) = Q/(Cd √(2Δp/ρ)) = 0,278/(0,6 × 2) = **0,23 m²**.
Deux ouvertures égales : A = A(éq) × √2 = **0,33 m²** chacune (surface libre, après déduction des cadres, grilles et moustiquaires, qui peuvent réduire de moitié le passage : prévoir environ 0,6 à 0,7 m² de fenêtre).`}
 ],
 quiz:[
  {q:"Pression due au vent :", o:["½ ρ v² Cp","ρ g h","ρ v","v²/2g"], r:0, e:"Pression dynamique × coefficient."},
  {q:"Dans deux ouvertures en série, le débit est surtout limité par :", o:["La plus petite","La plus grande","La moyenne","Aucune"], r:0, e:"1/A(éq)² = Σ 1/Aᵢ²."},
  {q:"Le tirage thermique augmente avec :", o:["La hauteur et l'écart de température","La largeur des pièces","L'humidité","La couleur des murs"], r:0, e:"Δp ≈ ρ g h ΔT/T."},
  {q:"Sous les tropiques, le moteur principal de la ventilation naturelle est :", o:["Le vent","Le tirage thermique","La climatisation","Le soleil sur les vitres"], r:0, e:"Les écarts de température sont faibles."},
  {q:"Pour que les occupants sentent le courant d'air, les entrées doivent être :", o:["À hauteur des occupants","Au ras du plafond","Sous le plancher","Fermées"], r:0, e:"Les sorties, elles, sont hautes."}
 ]},

{id:"pb-8", niv:3, titre:"Conception bioclimatique en climat tropical : méthode et vérifications", duree:55, contenu:`## Le principe
La conception **bioclimatique** utilise le climat au lieu de le combattre : se protéger du soleil, profiter du vent, de la lumière du ciel et de la fraîcheur nocturne, pour obtenir le confort avec **peu ou pas de climatisation**. Elle se décide dès l'esquisse : orientation, forme, enveloppe. Corriger après coup coûte beaucoup plus cher.

## 1. Le plan masse
- Grand axe **est-ouest**, façades principales au nord et au sud ;
- Bâtiments **espacés** pour laisser passer le vent (3 à 6 fois la hauteur dans l'ombre de vent) ;
- **Végétation** : arbres d'ombrage à l'est et à l'ouest, sols perméables et plantés plutôt que bitumés ;
- Locaux de service (escaliers, sanitaires, rangements) en **tampon** sur les façades est et ouest.

## 2. La forme du bâtiment
- **Plan étroit** : une seule épaisseur de pièces (ou 2 avec ventilation traversante), profondeur de 8 à 12 m ;
- Pièces **traversantes**, ouvertures opposées ;
- **Galeries** et vérandas qui ombragent les façades et servent d'espace de vie ;
- Bâtiment éventuellement **surélevé** (vide sanitaire ventilé, pilotis) en zone humide.

## 3. La toiture : la priorité
La toiture reçoit le plus d'énergie solaire. Le soleil chauffe sa surface à la **température d'air-soleil** :
$$ T(air-soleil) = T(air) + α × I / he
α : coefficient d'absorption de la surface ; I : rayonnement solaire (W/m²) ; he ≈ 20 W/(m²·K).
> [!exemple] Toiture sous 900 W/m², air à 30 °C
> | Surface | α | Flux absorbé | T(air-soleil) |
> |---|---|---|---|
> | Tôle ou étanchéité sombre | 0,9 | 810 W/m² | **70,5 °C** |
> | Couleur moyenne | 0,6 | 540 W/m² | 57 °C |
> | Blanc ou très clair | 0,3 | 270 W/m² | **43,5 °C** |
> Une simple peinture blanche réfléchissante divise par trois le flux absorbé.
Bonnes pratiques : surface **claire**, **double toiture** ou comble **ventilé** qui évacue la chaleur avant qu'elle n'atteigne le plafond, **isolant** (résistance thermique de 1,5 à 2,5 m²·K/W), débords de 0,8 à 1 m.

## 4. Les façades et les ouvertures
- Ouvertures **protégées du soleil direct** : débords au nord et au sud, brise-soleil, claustras ou volets à l'est et à l'ouest (voir chapitre Protections solaires) ;
- **Porosité** de 20 à 30 % des façades des pièces de vie, ouvrants réglables (persiennes, jalousies) ;
- Murs est et ouest **peu percés**, ombragés ou doublés ;
- **Couleurs claires** en façade.

## 5. Matériaux et inertie
- Au **sud** humide : construction plutôt **légère et ventilée**, ou inertie protégée du soleil et refroidie par la ventilation nocturne ;
- Au **nord** sec : **forte inertie** (terre, BTC, pierre, béton), ventilation la nuit, fermeture le jour ;
- Matériaux **locaux** (latérite, BTC, bois) : moins d'énergie grise, bon comportement hygrothermique.

## 6. Les équipements d'appoint
**Ventilateurs de plafond** dans toutes les pièces de vie, éclairage LED, eau chaude solaire, climatisation réservée aux locaux qui en ont vraiment besoin (salles informatiques, chambres en période chaude), avec consigne à 25-26 °C et locaux bien fermés.

## Vérifier un projet : grille d'évaluation
| Critère | Objectif |
|---|---|
| Orientation des façades principales | Nord et sud (± 20°) |
| Ouvertures à l'est et à l'ouest | Réduites et protégées |
| Profondeur des pièces / ventilation | Pièces traversantes, porosité ≥ 20 % |
| Protection solaire des baies | Facteur solaire g ≤ 0,2 aux heures d'ensoleillement |
| Toiture | Claire (α ≤ 0,4), ventilée et/ou isolée |
| Lumière naturelle | FLJ ≥ 2 % dans les pièces de travail |
| Végétation | Ombrage est/ouest, sols perméables |

> [!retenir]
> - Décider dès l'esquisse : orientation, forme étroite, toiture, protections.
> - T(air-soleil) = T + α I/he : une toiture claire et ventilée est la mesure la plus rentable.
> - Porosité 20 à 30 %, protections extérieures, végétation.
> - Inertie adaptée au climat ; ventilateurs avant climatiseurs.`,
 sujet:{titre:"Conception bioclimatique : toiture, couleurs, isolation et liste de vérifications", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un promoteur veut des logements économes à Yamoussoukro. Vous étudiez l'effet de la toiture et proposez une méthode de vérification.

**Données**
- Rayonnement sur la toiture : **950 W/m²** ; air extérieur **30 °C** ; coefficient d'échange extérieur **he = 20 W/(m²·K)** ;
- T(air-soleil) = T(air) + α × I / he ; coefficients d'absorption : tôle sombre **0,9** ; couleur moyenne **0,6** ; blanc **0,3** ;
- Toiture tôle + faux plafond sans isolant : **U = 2,5 W/(m²·K)** ; avec **8 cm** de laine minérale : **U = 0,45** ;
- Température intérieure visée : **28 °C** ; surface de toiture **100 m²**.

### Partie A — Température air-soleil (5 points)
1. Calculer T(air-soleil) pour les trois couleurs. (3 pts)
2. Expliquer pourquoi une toiture sombre peut atteindre plus de 70 °C. (2 pts)

### Partie B — Flux de chaleur (8 points)
3. Calculer le flux par m² et pour 100 m² pour : (a) tôle sombre sans isolant ; (b) tôle blanche avec 8 cm d'isolant. (6 pts)
4. Combien de climatiseurs de **2,5 kW** de froid faudrait-il pour compenser le seul apport de la toiture (a) ? (2 pts)

### Partie C — Méthode bioclimatique (7 points)
5. Établir une liste de huit vérifications bioclimatiques pour un projet de logement (site, orientation, toiture, façades, ventilation, matériaux, végétation, eau). (5 pts)
6. Pourquoi faut-il commencer par réduire les apports solaires avant de penser à la climatisation ? (2 pts)`,
  corrige:`### Partie A — Air-soleil (5 pts)
1. Sombre : 30 + 0,9 × 950 / 20 = **72,8 °C** ; moyenne : **58,5 °C** ; blanc : **44,3 °C**. *(3 pts)*
2. La tôle sombre absorbe 90 % du rayonnement et le transforme en chaleur ; elle est mince et ne peut l'évacuer que par convection et rayonnement : sa surface s'échauffe fortement. *(2 pts)*

### Partie B — Flux (8 pts)
3. *(6 pts)*
   - (a) 2,5 × (72,8 − 28) = **112 W/m²** → **11,2 kW** pour 100 m² ;
   - (b) 0,45 × (44,3 − 28) = **7,3 W/m²** → **0,73 kW** : **15 fois moins**.
4. 11,2 / 2,5 = 4,5 → **5 climatiseurs** juste pour la toiture (a) ; un seul suffit presque pour (b). *(2 pts)*

### Partie C — Méthode (7 pts)
5. *(5 pts)*
   - **Site** : vents dominants, masques, végétation existante ;
   - **orientation** : grandes façades nord-sud ;
   - **toiture** : couleur claire, isolée, ventilée, débords larges ;
   - **façades est-ouest** : réduites, opaques ou protégées ;
   - **protections solaires** dimensionnées pour toutes les baies ;
   - **ventilation traversante** (bâtiment étroit, ouvertures opposées, porosité) ;
   - **matériaux** adaptés (inertie si climat à forte amplitude, légèreté ventilée sinon) ;
   - **végétation** et sols perméables autour ; **eau** : récupération des pluies, gestion du ruissellement.
6. Chaque watt de chaleur évité n'a pas à être retiré par un climatiseur : on réduit l'investissement, la facture et les émissions ; un bâtiment bien conçu reste confortable même en cas de coupure d'électricité. *(2 pts)*

> [!attention] Erreurs à éviter
> - Peindre une toiture en couleur sombre pour « faire joli ».
> - Isoler le faux plafond sans ventiler les combles.
> - Dimensionner la climatisation avant d'avoir optimisé l'enveloppe.`},
 exercices:[
  {t:"Température d'air-soleil", d:1, e:`Une toiture-terrasse reçoit 850 W/m² ; l'air est à 32 °C ; he = 20 W/(m²·K).
Calculer la température d'air-soleil pour une étanchéité noire (α = 0,95) et pour une protection en gravillons clairs (α = 0,5).`, c:`Noire : 32 + 0,95 × 850/20 = 32 + 40,4 = **72,4 °C**.
Gravillons clairs : 32 + 0,5 × 850/20 = 32 + 21,3 = **53,3 °C** : 19 °C de moins à la surface, donc beaucoup moins de chaleur transmise.`},
  {t:"Porosité de façade", d:1, e:`Un séjour a une façade de 6 m × 3 m comportant une baie de 2,4 m × 2,2 m dont seule la moitié s'ouvre, et une imposte de 1,2 m × 0,4 m ouvrante.
Calculer la porosité (surface ouvrante/surface de façade). Atteint-elle 20 % ?`, c:`Ouvrants : 0,5 × 2,4 × 2,2 + 1,2 × 0,4 = 2,64 + 0,48 = **3,12 m²** ; façade : **18 m²**.
Porosité : 3,12/18 = **17 %** < 20 % → insuffisant ; remplacer la baie par des ouvrants à 100 % (coulissants à galandage, persiennes) ou ajouter une imposte.`},
  {t:"Évaluer un projet de villa", d:2, e:`Projet à Abidjan : façade principale vitrée à l'ouest, toiture-terrasse grise sans isolant, chambres mono-orientées vers l'ouest, climatiseurs prévus dans toutes les pièces, aucun arbre.
Relever les défauts et proposer cinq corrections.`, c:`Défauts : façade vitrée à l'**ouest** (soleil bas l'après-midi), toiture sombre et **non isolée**, chambres **non traversantes**, recours systématique à la climatisation, aucun ombrage végétal.
Corrections : 1) **réorienter** ou réduire les vitrages à l'ouest, avec brise-soleil ou galerie ; 2) toiture **claire + isolant** (ou double toiture ventilée) ; 3) ouvertures **opposées** dans les chambres (impostes sur couloir, fenêtres hautes) ; 4) **ventilateurs de plafond**, climatisation limitée aux chambres ; 5) **arbres** d'ombrage à l'ouest et sols plantés.`},
  {t:"Gain d'une toiture blanche", d:2, e:`Une toiture de 200 m² reçoit en moyenne 600 W/m² pendant 8 h. On compare α = 0,85 (sombre) et α = 0,3 (blanche). On admet que 5 % de l'énergie absorbée traverse vers les locaux (toiture non isolée).
Calculer l'énergie entrant chaque jour dans les deux cas et l'économie de climatisation (rendement du climatiseur : 3 kWh de froid par kWh électrique).`, c:`Énergie reçue : 200 × 0,6 kW × 8 h = **960 kWh/jour**.
Sombre : 0,85 × 960 × 0,05 = **40,8 kWh** ; blanche : 0,3 × 960 × 0,05 = **14,4 kWh**.
Économie de froid : 26,4 kWh/jour → électricité : 26,4/3 = **8,8 kWh/jour**, soit environ 3 200 kWh par an pour un simple coût de peinture.`},
  {t:"Abidjan ou Korhogo ?", d:3, e:`Un même dispensaire doit être construit à Abidjan et à Korhogo. Pour chaque site, préciser : le type de murs, la stratégie de ventilation, et le traitement de la toiture.`, c:`**Abidjan** (chaud-humide, faible écart jour-nuit) : murs plutôt **légers** ou lourds mais **ombragés**, ventilation **traversante permanente** (jour et nuit), toiture **claire, ventilée et isolée**, larges débords contre le soleil et la pluie.
**Korhogo** (chaud-sec en saison sèche, fort écart jour-nuit) : murs **lourds** (BTC, terre, béton) pour l'inertie, ventilation **nocturne** (ouvrir la nuit, fermer et occulter le jour), toiture **lourde ou très isolée**, protections contre la poussière de l'harmattan, cours plantées.`}
 ],
 quiz:[
  {q:"La température d'air-soleil augmente avec :", o:["Le coefficient d'absorption de la surface","La couleur claire","Le vent seulement","La pluie"], r:0, e:"T + α I/he."},
  {q:"La mesure bioclimatique la plus rentable sous les tropiques est souvent :", o:["Une toiture claire, ventilée et isolée","Des murs épais au sud","Un double vitrage","Un chauffage"], r:0, e:"La toiture reçoit le plus d'énergie."},
  {q:"Porosité de façade conseillée pour une bonne ventilation :", o:["20 à 30 %","1 %","80 %","5 %"], r:0, e:"Surface ouvrante sur surface de façade."},
  {q:"Au nord sec de la Côte d'Ivoire, on privilégie :", o:["L'inertie et la ventilation nocturne","Des parois très légères","Aucune ventilation","Des toitures sombres"], r:0, e:"Fort écart jour-nuit."},
  {q:"Les locaux de service se placent de préférence :", o:["Sur les façades est et ouest","Au centre du bâtiment","Sur la façade nord uniquement","N'importe où"], r:0, e:"Ils servent de tampon."}
 ]},

{id:"pb-17", niv:3, titre:"Résistance au feu des structures : béton, acier et bois", duree:50, contenu:`## Le feu normalisé
Pour comparer les éléments de construction, on les essaie en four sous un **feu conventionnel** (courbe ISO 834) :
$$ θ = 20 + 345 × log₁₀(8 t + 1)     (θ en °C, t en minutes)
| t (min) | 5 | 15 | 30 | 60 | 90 | 120 |
|---|---|---|---|---|---|---|
| θ (°C) | 576 | 739 | 842 | 945 | 1 006 | 1 049 |
La température monte très vite : plus de 800 °C en 30 minutes.

## La charge calorifique
L'énergie qu'un incendie peut libérer dépend de la quantité de matières combustibles :
$$ q = Σ (m × H) / S     (MJ/m²)
H : pouvoir calorifique (bois ≈ 17,5 MJ/kg ; papier ≈ 16 ; plastiques ≈ 40 MJ/kg). Valeurs moyennes données par l'Eurocode 1 (partie 1-2) : logement ≈ **780 MJ/m²**, bureau ≈ **420 MJ/m²**, salle de classe ≈ **285 MJ/m²**. Les entrepôts peuvent dépasser plusieurs milliers de MJ/m².

## Le béton armé : un bon comportement, si l'enrobage suffit
- Le béton est **incombustible** (A1) et conduit mal la chaleur : l'intérieur des éléments reste longtemps froid ;
- Il perd progressivement sa résistance au-delà de 300 °C ;
- Le danger vient de l'**échauffement des armatures** : c'est l'**enrobage** (plus exactement la **distance a** de l'axe des barres à la face exposée) qui les protège ;
- Risque d'**écaillage** (éclatement de surface) pour les bétons très compacts ou humides.

> [!exemple] Dalles portant dans un seul sens (valeurs indicatives de l'Eurocode 2, partie 1-2)
> | Résistance au feu | Épaisseur minimale h | Distance minimale a |
> |---|---|---|
> | REI 30 | 60 mm | 10 mm |
> | REI 60 | 80 mm | 20 mm |
> | REI 90 | 100 mm | 30 mm |
> | REI 120 | 120 mm | 40 mm |
> Une dalle de 16 cm avec des aciers HA 10 et un enrobage de 25 mm a a = 25 + 5 = 30 mm : elle satisfait **REI 90**.

## L'acier : une perte rapide de résistance
L'acier est incombustible mais **conduit très bien la chaleur** et perd vite sa résistance :
| Température | 400 °C | 500 °C | 600 °C | 700 °C | 800 °C |
|---|---|---|---|---|---|
| Part de la limite élastique conservée | 100 % | 78 % | 47 % | 23 % | 11 % |
Une poutre métallique non protégée atteint sa **température critique** (souvent 500 à 600 °C) en 10 à 20 minutes de feu normalisé. Protections : **peinture intumescente** (qui gonfle à la chaleur), **flocage** (projection de fibres ou de plâtre), **encoffrement** en plaques de plâtre, enrobage béton.

## Le bois : il brûle… mais lentement et de façon prévisible
Une pièce de bois massif se recouvre d'une couche de **charbon** qui isole le cœur : elle se consume à une vitesse d'environ **0,65 mm/min** (résineux et lamellé-collé), 0,5 mm/min pour les feuillus denses. On calcule la **section résiduelle** après la durée exigée (en ajoutant quelques millimètres de bois affaibli sous le charbon).
> [!exemple] Poutre en bois 15 × 30 cm exposée sur 3 faces pendant 30 min
> Carbonisation : 0,65 × 30 ≈ 20 mm par face → section restante ≈ 11 × 28 cm. Son module de flexion (b h²/6) n'est plus que 65 % du module initial : la poutre doit avoir été dimensionnée avec cette réserve.

> [!retenir]
> - Feu ISO : θ = 20 + 345 log₁₀(8t + 1) ; 842 °C à 30 min.
> - Charge calorifique q = Σ m H/S (logement ≈ 780 MJ/m²).
> - Béton : la distance a des armatures fixe la durée (REI 60 : dalle de 80 mm, a ≥ 20 mm).
> - Acier : 47 % de sa résistance à 600 °C → protection nécessaire ; bois : 0,65 mm/min de carbonisation.`,
 sujet:{titre:"Résistance au feu des structures : courbe ISO, dalle en béton, poutre en bois et charge calorifique", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Le bureau de contrôle vérifie la stabilité au feu d'un immeuble de bureaux à Treichville.

**Données**
- Courbe ISO 834 : θ = 20 + 345 log₁₀(8 t + 1) (θ en °C, t en minutes) ;
- Dalle portant dans un sens : REI 60 → h ≥ 80 mm et a ≥ 20 mm ; REI 90 → h ≥ 100 mm et a ≥ 30 mm (a : distance de l'axe des aciers à la face exposée = enrobage + Ø/2) ;
- Dalle de **16 cm**, aciers **HA12**, enrobage **20 mm** ;
- Poutre en bois **20 × 40 cm** exposée sur 3 faces (dessous et côtés) ; vitesse de carbonisation **0,65 mm/min** ; durée visée **60 min** ;
- Acier de charpente : perd environ la moitié de sa résistance vers **550 °C** ;
- Bureau de **25 m²** : **300 kg** de papier et bois (17 MJ/kg) et **50 kg** de plastiques (35 MJ/kg) ; q = Σ (m × H) / S.

### Partie A — Courbe ISO (4 points)
1. Calculer la température des gaz à 30, 60, 90 et 120 min. (4 pts)

### Partie B — Dalle en béton (5 points)
2. Calculer la distance a. Quelle résistance au feu la dalle atteint-elle ? (3 pts)
3. Que faudrait-il changer pour atteindre REI 90 ? (2 pts)

### Partie C — Bois et acier (7 points)
4. Calculer l'épaisseur carbonisée et la section résiduelle de la poutre en bois au bout de 60 min. (3 pts)
5. Calculer le rapport des modules de flexion (b h² / 6) avant et après. Conclure. (2 pts)
6. Pourquoi une poutre en acier non protégée s'effondre-t-elle souvent en 15 à 20 min ? Comment la protéger ? (2 pts)

### Partie D — Charge calorifique (4 points)
7. Calculer la charge calorifique du bureau en MJ/m². (2 pts)
8. Pourquoi cette valeur intéresse-t-elle les pompiers et l'ingénieur ? (2 pts)`,
  corrige:`### Partie A — ISO (4 pts)
1. 30 min : **842 °C** ; 60 min : **945 °C** ; 90 min : **1 006 °C** ; 120 min : **1 049 °C**. *(4 pts)*

### Partie B — Dalle (5 pts)
2. a = 20 + 12 / 2 = **26 mm** ; h = 160 mm ≥ 100 mais a = 26 < 30 → **REI 60** (a ≥ 20 ✔), pas REI 90. *(3 pts)*
3. Porter l'**enrobage à 25 mm** (a = 31 mm ≥ 30), ou ajouter un **enduit** ou un plafond protecteur en sous-face. *(2 pts)*

### Partie C — Bois et acier (7 pts)
4. 0,65 × 60 = **39 mm** par face exposée → b = 200 − 2 × 39 = **122 mm** ; h = 400 − 39 = **361 mm**. *(3 pts)*
5. (122 × 361²) / (200 × 400²) = **0,50** : la poutre a perdu la **moitié** de sa résistance en flexion ; elle tient si elle a été dimensionnée avec cette réserve (le bois carbonisé protège le cœur). *(2 pts)*
6. L'acier, mince et très conducteur, atteint **550 °C** en quelques minutes sous la courbe ISO (842 °C à 30 min) et perd la moitié de sa résistance. Protections : **peinture intumescente**, **flocage**, **plaques** de plâtre coupe-feu, enrobage béton. *(2 pts)*

### Partie D — Charge calorifique (4 pts)
7. q = (300 × 17 + 50 × 35) / 25 = (5 100 + 1 750) / 25 = **274 MJ/m²**. *(2 pts)*
8. Elle mesure l'**énergie** que peut libérer l'incendie : plus elle est élevée, plus le feu sera long et intense ; elle sert à fixer les **durées de résistance** au feu exigées et les moyens de lutte. *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre enrobage et distance a (il faut ajouter Ø/2).
> - Croire que le bois brûle « plus vite » que l'acier ne cède : une grosse section bois résiste souvent mieux.
> - Oublier la face supérieure non exposée dans la carbonisation (3 faces seulement).`},
 exercices:[
  {t:"Courbe ISO 834", d:1, e:`Calculer la température du feu normalisé après 10 minutes et après 45 minutes.`, c:`10 min : θ = 20 + 345 × log₁₀(81) = 20 + 345 × 1,908 = **678 °C**.
45 min : θ = 20 + 345 × log₁₀(361) = 20 + 345 × 2,558 = **902 °C**.`},
  {t:"Résistance au feu d'une dalle", d:1, e:`Une dalle portant dans un sens a 12 cm d'épaisseur ; ses aciers HA 8 ont un enrobage de 20 mm.
Quelle résistance au feu atteint-elle d'après le tableau du cours ?`, c:`a = 20 + 8/2 = **24 mm** ; h = 120 mm.
REI 60 exige h ≥ 80 et a ≥ 20 ✓ ; REI 90 exige a ≥ 30 ✗ → **REI 60**. Pour REI 90, il faudrait un enrobage d'au moins 26 mm (a = 30 mm).`},
  {t:"Poutre métallique dans le feu", d:2, e:`Une poutre en acier S235 (limite élastique 235 MPa) est sollicitée à 110 MPa en situation d'incendie.
À partir de quelle température environ ne la supporte-t-elle plus ? Combien de temps faut-il au feu ISO pour atteindre cette température dans les fumées ?`, c:`Résistance à 600 °C : 0,47 × 235 = **110 MPa** → la poutre cède vers **600 °C**.
Le feu ISO atteint 600 °C dès **6 minutes** environ (576 °C à 5 min) ; l'acier non protégé suit avec un peu de retard (10 à 20 min). Il faut donc une **protection** (peinture intumescente, flocage, encoffrement) pour tenir 30 ou 60 minutes.`},
  {t:"Section résiduelle d'une poutre en bois", d:2, e:`Une poutre en lamellé-collé de 15 × 30 cm est exposée au feu sur 3 faces (dessous et côtés) pendant 60 minutes (0,65 mm/min).
Calculer la section résiduelle et le rapport des modules de flexion.`, c:`Carbonisation : 0,65 × 60 = **39 mm** par face exposée.
Section résiduelle : largeur 150 − 2 × 39 = **72 mm** ; hauteur 300 − 39 = **261 mm**.
Rapport des modules : (72 × 261²)/(150 × 300²) = **0,36** : la poutre ne garde que 36 % de sa capacité en flexion ; pour R 60, il faut une section plus forte ou une protection (plaques de plâtre).`},
  {t:"Charge calorifique d'un local", d:3, e:`Un magasin de 100 m² contient 2 000 kg de bois et de cartons (17,5 MJ/kg) et 500 kg de plastiques (40 MJ/kg).
a) Calculer sa charge calorifique.
b) La comparer à celle d'un bureau (≈ 420 MJ/m²) et conclure.`, c:`a) q = (2 000 × 17,5 + 500 × 40)/100 = (35 000 + 20 000)/100 = **550 MJ/m²**.
b) Supérieure à celle d'un bureau (+ 30 %) : le feu y sera plus long et plus violent ; on renforce le compartimentage (parois et portes coupe-feu), la détection et les moyens d'extinction, et l'on éloigne les stocks des sources d'ignition (tableaux électriques).`}
 ],
 quiz:[
  {q:"Température du feu normalisé après 30 minutes :", o:["Environ 840 °C","Environ 300 °C","Environ 1 500 °C","Environ 100 °C"], r:0, e:"θ = 20 + 345 log₁₀(241)."},
  {q:"Dans un élément en béton armé, la résistance au feu dépend surtout :", o:["De la distance a des armatures à la face exposée","De la couleur du béton","Du type de coffrage","Du ciment seulement"], r:0, e:"L'enrobage protège les aciers."},
  {q:"À 600 °C, l'acier conserve environ :", o:["La moitié de sa résistance","Toute sa résistance","10 fois sa résistance","Rien"], r:0, e:"47 %."},
  {q:"Vitesse de carbonisation d'un bois résineux :", o:["Environ 0,65 mm/min","10 mm/min","0,01 mm/min","1 cm/s"], r:0, e:"Le charbon isole le cœur."},
  {q:"La peinture intumescente protège l'acier en :", o:["Gonflant à la chaleur pour former un isolant","Refroidissant l'acier à l'eau","Le rendant combustible","Augmentant sa masse"], r:0, e:"Couche isolante expansée."}
 ]},

{id:"pb-9", niv:3, titre:"Énergie solaire photovoltaïque : dimensionner une installation", duree:55, contenu:`## Le principe
Une **cellule photovoltaïque** (en silicium) transforme directement la lumière en courant **continu**. Les cellules sont assemblées en **modules** (panneaux) caractérisés par leur **puissance crête** Pc, en watts-crête (Wc) : la puissance fournie dans les conditions standard (1 000 W/m², 25 °C). Un module courant de 1,7 m² fournit 300 à 400 Wc (rendement 18 à 22 %).

## Ce que produit un module sous le soleil ivoirien
$$ E(jour) = Pc × H × PR
- **H** : irradiation journalière dans le plan des modules, en kWh/m²/jour (ou « heures de plein soleil ») : **4,5 à 5,5** en Côte d'Ivoire ;
- **PR** : **ratio de performance** (0,7 à 0,8) qui regroupe les pertes : échauffement des modules (− 0,4 % par °C au-dessus de 25 °C : un module à 60 °C perd 14 %), poussière, câbles, onduleur, batteries.
> [!exemple] 1 kWc à Abidjan
> E = 1 × 4,5 × 0,75 ≈ **3,4 kWh/jour**, soit environ **1 230 kWh par an** (jusqu'à 1 500 kWh/an dans le nord, plus ensoleillé).

## Les types d'installations
- **Autonome** (site isolé) : modules + régulateur + **batteries** + onduleur ; l'énergie du jour est stockée pour la nuit ;
- **Raccordée au réseau** : l'onduleur injecte dans l'installation du bâtiment ; pas (ou peu) de batteries ;
- **Hybride** : réseau ou groupe électrogène + solaire + batteries, pour pallier les coupures.

## Dimensionner une installation autonome
**1. Bilan des besoins** (Wh/jour) : pour chaque appareil, puissance × durée d'utilisation ; on privilégie les appareils sobres (LED, réfrigérateur classe A, ventilateurs).

**2. Puissance crête** :
$$ Pc = E(besoins) / (H × PR)     (avec H du mois le moins ensoleillé)

**3. Batteries** :
$$ C (Ah) = E(besoins) × N(jours d'autonomie) / (U × DoD)
U : tension du parc (12, 24 ou 48 V) ; DoD : profondeur de décharge admissible (**50 %** pour le plomb, **80 à 90 %** pour le lithium) ; N : 2 à 3 jours en saison des pluies.

**4. Régulateur** (de préférence MPPT) : courant ≥ 1,25 × Pc/U.

**5. Onduleur** : puissance ≥ somme des puissances pouvant fonctionner ensemble, avec une marge pour les **démarrages** (réfrigérateurs, pompes : 3 à 5 fois leur puissance pendant quelques secondes).

**6. Câbles** en courant continu : sections fortes, car les courants sont élevés à basse tension ; chute de tension **≤ 3 %**.

> [!exemple] Petit dispensaire rural
> | Appareil | Puissance | Durée | Énergie |
> |---|---|---|---|
> | Réfrigérateur à vaccins | 60 W | 12 h (cycles) | 720 Wh |
> | 10 lampes LED | 80 W | 6 h | 480 Wh |
> | 3 ventilateurs | 150 W | 8 h | 1 200 Wh |
> | Ordinateur | 60 W | 5 h | 300 Wh |
> | Charge de téléphones | 40 W | 3 h | 120 Wh |
> | **Total** | | | **2 820 Wh/jour** |
> Pc = 2 820/(4,5 × 0,7) = 895 Wc → **3 modules de 330 Wc** (990 Wc).
> Batteries 24 V, 3 jours, plomb (DoD 50 %) : C = 2 820 × 3/(24 × 0,5) = **705 Ah** ; en lithium (DoD 80 %) : 440 Ah.
> Régulateur : 1,25 × 990/24 = **52 A** → modèle MPPT de 60 A. Onduleur : 390 W en simultané + démarrage du réfrigérateur → **1 000 VA**.

## Installer et entretenir
- Orientation **plein sud**, inclinaison de **10 à 15°** (la latitude est faible, mais un minimum de 10° permet à la pluie de nettoyer les modules) ;
- **Aucun ombrage** (arbres, acrotères, antennes) : une seule cellule ombrée réduit la production de tout le module ;
- **Ventilation** sous les modules pour limiter leur échauffement ;
- **Nettoyage** régulier, surtout pendant l'harmattan ;
- Batteries dans un local **ventilé, frais et sec** ; protections (fusibles, sectionneurs, parafoudre, mise à la terre).

> [!retenir]
> - E = Pc × H × PR ; H = 4,5 à 5,5 kWh/m²/jour ; PR ≈ 0,7 à 0,8.
> - Pc = besoins/(H × PR) ; C = besoins × N/(U × DoD).
> - Régulateur ≥ 1,25 Pc/U ; onduleur dimensionné pour les démarrages.
> - Plein sud, 10 à 15°, sans ombre, nettoyé ; chute de tension DC ≤ 3 %.`,
 sujet:{titre:"Dimensionner une installation solaire photovoltaïque autonome pour une maison", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Une maison isolée près de Dabakala, sans réseau électrique, doit être équipée d'une installation solaire autonome en **24 V**.

**Besoins quotidiens**

| Appareil | Puissance | Durée par jour |
|---|---|---|
| 6 lampes LED | 9 W chacune | 6 h |
| Réfrigérateur | 100 W | 10 h (cycles) |
| Téléviseur | 80 W | 5 h |
| 2 ventilateurs | 50 W chacun | 8 h |
| Ordinateur | 60 W | 4 h |

**Données**
- Ensoleillement du mois le plus défavorable : **H = 4,5 kWh/m²/jour** (heures équivalentes) ; ratio de performance **PR = 0,7** ;
- Pc = E / (H × PR) ; modules de **300 Wc** ;
- Batteries plomb, profondeur de décharge **DoD = 50 %**, autonomie **2 jours** : C = E × N / (U × DoD) ;
- Régulateur : courant ≥ 1,25 × Pc / U.

### Partie A — Bilan (5 points)
1. Calculer l'énergie journalière de chaque appareil et le total. (4 pts)
2. Quel appareil consomme le plus ? Proposer une économie. (1 pt)

### Partie B — Champ photovoltaïque (6 points)
3. Calculer la puissance crête nécessaire et le nombre de modules. (3 pts)
4. Pourquoi dimensionne-t-on sur le mois le moins ensoleillé ? Comment orienter les modules en Côte d'Ivoire ? (3 pts)

### Partie C — Stockage et électronique (7 points)
5. Calculer la capacité des batteries en Ah. (3 pts)
6. Calculer le courant du régulateur et choisir un calibre (30, 40, 50, 60 A). (2 pts)
7. Calculer la puissance des appareils pouvant fonctionner en même temps et choisir l'onduleur. (2 pts)

### Partie D — Entretien (2 points)
8. Citer quatre opérations d'entretien. (2 pts)`,
  corrige:`### Partie A — Bilan (5 pts)
1. *(4 pts)*

| Appareil | Énergie (Wh/jour) |
|---|---|
| Lampes : 6 × 9 × 6 | 324 |
| Réfrigérateur : 100 × 10 | 1 000 |
| Téléviseur : 80 × 5 | 400 |
| Ventilateurs : 2 × 50 × 8 | 800 |
| Ordinateur : 60 × 4 | 240 |
| **Total** | **2 764 Wh/jour** |

2. Le **réfrigérateur** (36 %) : choisir un modèle très économe (classe A+++, ou réfrigérateur solaire 12/24 V), bien ventilé, loin des sources de chaleur. *(1 pt)*

### Partie B — Champ (6 pts)
3. Pc = 2 764 / (4,5 × 0,7) = **877 Wc** → 877 / 300 = 2,9 → **3 modules de 300 Wc** (900 Wc). *(3 pts)*
4. Pour que les besoins soient couverts **toute l'année**, y compris en saison des pluies (ciel couvert). Modules orientés **plein sud** avec une **faible inclinaison** (10 à 15°, assez pour que la pluie les nettoie), sans ombre. *(3 pts)*

### Partie C — Stockage (7 pts)
5. C = 2 764 × 2 / (24 × 0,5) = **461 Ah** (par exemple 2 × 2 batteries de 12 V / 250 Ah). *(3 pts)*
6. 1,25 × 900 / 24 = 46,9 A → régulateur de **50 A** (MPPT de préférence). *(2 pts)*
7. 6 × 9 + 100 + 80 + 2 × 50 + 60 = **394 W** (+ le pic de démarrage du réfrigérateur) → onduleur **800 à 1 000 VA**, pur sinus. *(2 pts)*

### Partie D — Entretien (2 pts)
8. **Nettoyer** les modules (poussière, harmattan) ; vérifier les **connexions** et les câbles ; contrôler le **niveau d'électrolyte** et la tension des batteries (plomb ouvert) ; surveiller les ombres (arbres) ; ne pas dépasser la décharge maximale. *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre puissance (W) et énergie (Wh).
> - Dimensionner sur l'ensoleillement moyen annuel.
> - Décharger les batteries plomb au-delà de 50 % : leur durée de vie s'effondre.`},
 exercices:[
  {t:"Production d'un module", d:1, e:`Un module de 400 Wc est installé à Korhogo (H = 5,5 kWh/m²/jour) avec PR = 0,75.
Calculer sa production journalière et annuelle.`, c:`E = 0,4 × 5,5 × 0,75 = **1,65 kWh/jour** ; par an : 1,65 × 365 = **602 kWh**.`},
  {t:"Pertes par échauffement", d:1, e:`En plein soleil, un module atteint 60 °C. Sa puissance diminue de 0,4 % par °C au-dessus de 25 °C.
Quelle puissance fournit un module de 330 Wc dans ces conditions (à 1 000 W/m²) ?`, c:`Perte : 0,4 % × (60 − 25) = **14 %** → P = 330 × 0,86 = **284 W**. D'où l'intérêt de ventiler l'arrière des modules.`},
  {t:"Kit solaire d'un logement", d:2, e:`Un logement isolé consomme : 6 lampes LED de 9 W pendant 5 h ; un téléviseur de 60 W pendant 4 h ; un ventilateur de 50 W pendant 8 h ; un réfrigérateur de 80 W fonctionnant 10 h par jour.
Calculer les besoins, la puissance crête (H = 4,5 ; PR = 0,7) et la capacité de batteries 12 V pour 2 jours d'autonomie (plomb, DoD 50 %).`, c:`Besoins : 270 + 240 + 400 + 800 = **1 710 Wh/jour**.
Pc = 1 710/(4,5 × 0,7) = **543 Wc** → 2 modules de 300 Wc.
C = 1 710 × 2/(12 × 0,5) = **570 Ah** à 12 V (en pratique, on passe en 24 V : 285 Ah, des courants deux fois plus faibles).`},
  {t:"Section des câbles en courant continu", d:2, e:`Les modules d'une installation en 24 V débitent 20 A vers le régulateur situé à 10 m (aller-retour : 20 m de câble ; ρ = 0,0225 Ω·mm²/m).
Calculer la chute de tension en 6, 10 et 16 mm². Quelle section retenir (limite 3 %) ?`, c:`ΔU = 2 × 0,0225 × 10 × 20/S = 9/S.
6 mm² : **1,50 V** (6,3 %) ; 10 mm² : **0,90 V** (3,75 %) ; 16 mm² : **0,56 V** (2,3 %).
On retient **16 mm²** : en basse tension continue, les sections sont grosses ; d'où l'intérêt de systèmes en 48 V.`},
  {t:"Dimensionner une école", d:3, e:`Une école rurale a besoin de 6 kWh par jour (éclairage, ventilateurs, ordinateurs), surtout en journée. H = 4,8 kWh/m²/jour ; PR = 0,75. Les batteries (48 V, lithium, DoD 80 %) doivent assurer 1 jour d'autonomie.
Calculer la puissance crête, le nombre de modules de 400 Wc, la surface de toiture nécessaire (1,9 m² par module) et la capacité des batteries.`, c:`Pc = 6 000/(4,8 × 0,75) = **1 667 Wc** → 1 667/400 = 4,2 → **5 modules** (2 000 Wc).
Surface : 5 × 1,9 = **9,5 m²** de toiture bien orientée et sans ombre.
Batteries : C = 6 000 × 1/(48 × 0,8) = **156 Ah** à 48 V (≈ 7,5 kWh de capacité nominale). Comme la consommation est surtout diurne, une partie de l'énergie est utilisée directement, ce qui ménage les batteries.`}
 ],
 quiz:[
  {q:"Le watt-crête est la puissance d'un module :", o:["Sous 1 000 W/m² et 25 °C","À midi en Côte d'Ivoire","La nuit","Sous 100 W/m²"], r:0, e:"Conditions standard."},
  {q:"Production journalière d'un kWc avec H = 5 et PR = 0,75 :", o:["3,75 kWh","5 kWh","1 kWh","0,75 kWh"], r:0, e:"1 × 5 × 0,75."},
  {q:"Profondeur de décharge admissible d'une batterie au plomb :", o:["Environ 50 %","100 %","5 %","90 %"], r:0, e:"Pour préserver sa durée de vie."},
  {q:"Inclinaison conseillée des modules en Côte d'Ivoire :", o:["10 à 15° vers le sud","Verticale","60°","0° exactement"], r:0, e:"Autonettoyage par la pluie."},
  {q:"Une ombre sur une seule cellule :", o:["Réduit la production de tout le module","N'a aucun effet","Augmente la production","Ne concerne que cette cellule"], r:0, e:"Cellules en série."}
 ]}
]});
