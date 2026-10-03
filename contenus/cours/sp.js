/* =====================================================================
   Sciences physiques — cours complet (3 niveaux)
   Débutant : grandeurs et unités, masse et poids, mouvements, forces et
              équilibre, machines simples, courant continu
   Intermédiaire : lois de Newton, énergie et puissance, courant
              alternatif, réactions chimiques, acides et bases, chimie
              des liants
   Avancé : oxydoréduction et corrosion, triphasé et sections de câbles,
            chaleur et dilatation, ondes, magnétisme et machines
            électriques
   ===================================================================== */
A.addMatiere({
 id:"sp",
 titre:"Sciences physiques",
 court:"Physique-chimie",
 groupe:"fond",
 icone:"atom",
 couleur:"#0E8C95",
 niveau:"Débutant",
 heures:60,
 ordre:3,
 resume:"La physique et la chimie utiles au technicien du bâtiment : unités, masse et poids, mouvements, forces et équilibre, machines simples, dynamique, énergie et puissance, électricité continue, alternative et triphasée, réactions chimiques, pH, chimie du ciment, de la chaux et du plâtre, corrosion des armatures, chaleur et dilatation, ondes, moteurs et transformateurs.",
 objectifs:[
  "Utiliser correctement les unités du système international et les conversions",
  "Calculer poids propres, masses volumiques et poussée d'Archimède",
  "Décrire un mouvement (vitesse, accélération, chute, freinage)",
  "Écrire l'équilibre d'un solide et utiliser leviers, poulies et plans inclinés",
  "Appliquer les lois de Newton au levage et au transport des charges",
  "Calculer travail, énergie, puissance et rendement d'un engin ou d'une pompe",
  "Dimensionner un circuit électrique simple, monophasé ou triphasé",
  "Écrire et exploiter une réaction chimique (chaux, ciment, plâtre, combustion)",
  "Expliquer le pH, l'agressivité des eaux et la corrosion des armatures",
  "Calculer quantités de chaleur, dilatations et contraintes thermiques"
 ],
 applications:[
  "Poids propre des éléments (béton, acier, agglos) et soulèvement des cuves enterrées",
  "Sécurité du levage : élingues, palans, coefficients dynamiques",
  "Puissance d'un monte-charge, d'une pompe d'épuisement ou d'une grue",
  "Bilan de puissance d'un logement et choix des sections de câbles",
  "Choix d'une eau de gâchage et d'un béton en milieu agressif",
  "Enrobage et durabilité des armatures, joints de dilatation, bétonnage par temps chaud"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"sp-1", niv:1, titre:"Grandeurs physiques, unités SI et conversions", duree:45, contenu:`## Grandeur, mesure et unité
Une **grandeur physique** est une propriété que l'on peut mesurer : longueur, masse, durée, force, température… Une mesure s'exprime toujours par **un nombre et une unité** : « 25 » ne veut rien dire, « 25 MPa » est une résistance de béton.

Le **Système international (SI)** repose sur 7 unités de base :
| Grandeur | Unité | Symbole |
|---|---|---|
| Longueur | mètre | m |
| Masse | kilogramme | kg |
| Temps | seconde | s |
| Intensité électrique | ampère | A |
| Température | kelvin | K |
| Quantité de matière | mole | mol |
| Intensité lumineuse | candela | cd |

## Les unités dérivées du bâtiment
| Grandeur | Unité | Définition |
|---|---|---|
| Force, poids | newton (N) | 1 N = 1 kg·m/s² |
| Pression, contrainte | pascal (Pa) | 1 Pa = 1 N/m² |
| Énergie, travail | joule (J) | 1 J = 1 N·m |
| Puissance | watt (W) | 1 W = 1 J/s |
| Tension électrique | volt (V) | 1 V = 1 W/A |
| Résistance | ohm (Ω) | 1 Ω = 1 V/A |
| Fréquence | hertz (Hz) | 1 Hz = 1 /s |

## Les préfixes et la notation scientifique
| Préfixe | Symbole | Facteur |
|---|---|---|
| giga | G | 10⁹ |
| méga | M | 10⁶ |
| kilo | k | 10³ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |

En **notation scientifique**, on écrit un nombre sous la forme a × 10ⁿ avec 1 ≤ a < 10 : 210 000 MPa = 2,1 × 10⁵ MPa ; 0,000 012 = 1,2 × 10⁻⁵.

## Les conversions à connaître
- **Surfaces** : 1 m² = 10 000 cm² = 10⁶ mm² ; 1 ha = 10 000 m².
- **Volumes** : 1 m³ = 1 000 L ; 1 L = 1 dm³.
- **Masses** : 1 t = 1 000 kg ; un sac de ciment = 50 kg.
- **Contraintes** : 1 MPa = 1 N/mm² = 10⁶ Pa = 1 000 kN/m² ; 1 bar = 10⁵ Pa.
- **Vitesses** : 1 m/s = 3,6 km/h (on divise les km/h par 3,6 pour obtenir des m/s).
- **Énergie** : 1 kWh = 3 600 000 J = 3,6 MJ.

> [!exemple] Que signifie « béton de 25 MPa » ?
> 25 MPa = 25 N/mm² : chaque millimètre carré supporte 25 N.
> Sur la face d'un cube de 15 × 15 cm (22 500 mm²) : F = 25 × 22 500 = 562 500 N = **562,5 kN**, soit le poids d'environ 57 tonnes.

> [!attention] Les surfaces et volumes ne se convertissent pas comme les longueurs
> 1 m = 100 cm mais 1 m² = 100² = 10 000 cm² et 1 m³ = 100³ = 1 000 000 cm³. Oublier le carré ou le cube est l'erreur la plus fréquente.

## Vérifier l'homogénéité d'une formule
Les deux membres d'une égalité doivent avoir la **même unité**. Exemple : σ = N/A → N/m² = Pa ✓. Une formule non homogène est forcément fausse : c'est un contrôle gratuit à faire à chaque calcul.

## Chiffres significatifs
Un résultat ne doit pas paraître plus précis que les données : 3,2 m × 4,15 m = 13,28 m² que l'on arrondit à 13,3 m². On garde les décimales pendant le calcul et on arrondit **à la fin**.

> [!retenir]
> - Toujours un nombre **et** une unité.
> - N, Pa, J, W : les unités dérivées du bâtiment ; 1 MPa = 1 N/mm².
> - m² : × 10 000 pour passer en cm² ; m³ : × 1 000 pour passer en litres.
> - km/h ÷ 3,6 = m/s ; 1 kWh = 3,6 MJ.`,
 sujet:{titre:"Grandeurs, unités SI et conversions : pression, débit, puissance et contraintes", duree:60, niveau:"BT / CAP", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un château d'eau à Bouna, les grandeurs physiques s'expriment dans des unités variées. Vous les convertissez dans le système international.

**Données**
- Résistance du béton : **25 MPa** ; puissance d'une pompe : **3,5 kW** ; débit : **120 L/min** ;
- Section d'un conducteur : **4 mm²** ; vitesse d'un camion : **54 km/h** ;
- Profondeur d'eau dans la cuve : **4 m** ; ρ(eau) = **1 000 kg/m³** ; g = **9,81 N/kg** ; 1 bar = **10⁵ Pa**.

### Partie A — Le système international (5 points)
1. Citer les sept unités de base du SI et la grandeur correspondante de quatre d'entre elles. (3 pts)
2. Exprimer le newton et le pascal en unités de base. (2 pts)

### Partie B — Conversions (8 points)
3. Convertir 25 MPa en Pa et en N/mm². (2 pts)
4. Convertir 3,5 kW en W et 120 L/min en m³/s. (2 pts)
5. Convertir 4 mm² en m² (notation scientifique). (2 pts)
6. Convertir 54 km/h en m/s. (2 pts)

### Partie C — Pression de l'eau (7 points)
7. Calculer la pression de l'eau au fond de la cuve (p = ρ g h) en Pa, en kPa et en bar. (4 pts)
8. Calculer la force exercée sur une trappe de visite de **0,60 × 0,60 m** au fond de la cuve. (3 pts)`,
  corrige:`### Partie A — SI (5 pts)
1. **Mètre** (longueur), **kilogramme** (masse), **seconde** (temps), **ampère** (intensité électrique), **kelvin** (température), **mole** (quantité de matière), **candela** (intensité lumineuse). *(3 pts)*
2. 1 N = 1 kg·m/s² ; 1 Pa = 1 N/m² = 1 kg/(m·s²). *(2 pts)*

### Partie B — Conversions (8 pts)
3. 25 MPa = **25 × 10⁶ Pa** = **25 N/mm²** (1 MPa = 1 N/mm²). *(2 pts)*
4. 3,5 kW = **3 500 W** ; 120 L/min = 0,120 m³ / 60 s = **0,002 m³/s** (2 × 10⁻³). *(2 pts)*
5. 4 mm² = 4 × (10⁻³ m)² = **4 × 10⁻⁶ m²** (1 mm² = 10⁻⁶ m²). *(2 pts)*
6. 54 / 3,6 = **15 m/s**. *(2 pts)*

### Partie C — Pression (7 pts)
7. p = 1 000 × 9,81 × 4 = **39 240 Pa = 39,2 kPa = 0,39 bar**. *(4 pts)*
8. F = p × S = 39 240 × 0,36 = **14 126 N ≈ 14,1 kN** (≈ 1,4 tonne-force) : la trappe et ses fixations doivent être solides. *(3 pts)*

> [!attention] Erreurs à éviter
> - Convertir les mm² en m² en divisant par 1 000 au lieu de 10⁶.
> - Confondre MPa et kPa.
> - Oublier que la pression ne dépend que de la hauteur d'eau, pas de la forme de la cuve.`},
 exercices:[
  {t:"Conversions de base", d:1, e:`Convertir : a) 2,5 km en m ; b) 350 cm² en m² ; c) 0,75 m³ en litres ; d) 72 km/h en m/s ; e) 4 500 W en kW ; f) 3,2 t en kg.`, c:`a) 2,5 × 1 000 = **2 500 m**.
b) 350/10 000 = **0,035 m²**.
c) 0,75 × 1 000 = **750 L**.
d) 72/3,6 = **20 m/s**.
e) 4 500/1 000 = **4,5 kW**.
f) 3,2 × 1 000 = **3 200 kg**.`},
  {t:"Notation scientifique", d:1, e:`Écrire en notation scientifique : a) l'allongement 0,000 012 m ; b) le module de l'acier 210 000 MPa exprimé en Pa ; c) un moment de 45 000 000 N·mm, puis l'exprimer en kN·m.`, c:`a) 0,000 012 = **1,2 × 10⁻⁵ m**.
b) 210 000 MPa = 2,1 × 10⁵ × 10⁶ Pa = **2,1 × 10¹¹ Pa**.
c) 45 000 000 N·mm = **4,5 × 10⁷ N·mm** ; 1 kN·m = 10³ N × 10³ mm = 10⁶ N·mm → **45 kN·m**.`},
  {t:"Contrainte et force", d:2, e:`Un béton a une résistance de 30 MPa.
a) Exprimer cette valeur en N/mm² puis en kN/m².
b) Quelle force faut-il pour écraser une éprouvette cylindrique de diamètre 16 cm ?`, c:`a) 30 MPa = **30 N/mm²** = 30 × 1 000 = **30 000 kN/m²**.
b) A = π × 160²/4 = **20 106 mm²** → F = 30 × 20 106 = 603 180 N ≈ **603 kN**.`},
  {t:"Homogénéité des formules", d:2, e:`a) Vérifier que l'énergie cinétique E = ½ m v² s'exprime en joules.
b) Vérifier que la pression p = ρ g h s'exprime en pascals.
c) Dans la relation F = k × x (ressort), quelle est l'unité de k ?`, c:`a) kg × (m/s)² = kg·m²/s² = (kg·m/s²) × m = N·m = **J** ✓.
b) kg/m³ × m/s² × m = kg/(m·s²) = (kg·m/s²)/m² = N/m² = **Pa** ✓.
c) k = F/x → **N/m** (ou kN/m, N/mm pour les raideurs de structures).`},
  {t:"Consommation électrique", d:1, e:`Un chantier consomme 150 kWh dans la journée.
a) Exprimer cette énergie en joules puis en mégajoules.
b) Quel est le coût de cette énergie à 90 F CFA le kWh (valeur indicative) ?`, c:`a) 150 × 3,6 × 10⁶ = **5,4 × 10⁸ J** = **540 MJ**.
b) 150 × 90 = **13 500 F CFA**.`}
 ],
 quiz:[
  {q:"1 MPa est égal à :", o:["1 N/mm²","1 kN/m²","1 N/m²","10 N/mm²"], r:0, e:"10⁶ N/m² = 1 N/mm²."},
  {q:"1 m² vaut :", o:["10 000 cm²","100 cm²","1 000 cm²","1 000 000 cm²"], r:0, e:"100 × 100."},
  {q:"90 km/h correspond à :", o:["25 m/s","90 m/s","324 m/s","9 m/s"], r:0, e:"90/3,6."},
  {q:"L'unité SI de la puissance est :", o:["Le watt","Le joule","Le newton","Le pascal"], r:0, e:"1 W = 1 J/s."},
  {q:"1 kWh vaut :", o:["3,6 MJ","1 000 J","3 600 J","1 MJ"], r:0, e:"1 000 W × 3 600 s."}
 ]},

{id:"sp-2", niv:1, titre:"Masse, poids, masse volumique et poussée d'Archimède", duree:45, contenu:`## Masse et poids : deux notions différentes
- La **masse** m mesure la quantité de matière ; elle s'exprime en **kg** et ne dépend pas du lieu.
- Le **poids** P est la force d'attraction exercée par la Terre ; il s'exprime en **newtons** :
$$ P = m × g     avec g = 9,81 N/kg (souvent arrondi à 10 N/kg)
Un sac de ciment de 50 kg pèse donc 50 × 9,81 = 490 N ≈ 0,5 kN. En calcul de structures, on raisonne en **kN** : une masse d'une tonne pèse environ **10 kN**.

## Masse volumique, poids volumique et densité
$$ ρ = m / V   (kg/m³)        γ = ρ × g   (kN/m³)        d = ρ / ρ(eau)
| Matériau | ρ (kg/m³) | γ (kN/m³) |
|---|---|---|
| Eau | 1 000 | 10 |
| Béton armé | 2 500 | 25 |
| Béton non armé | 2 300 à 2 400 | 23 à 24 |
| Acier | 7 850 | 78,5 |
| Mortier, chape | 2 000 à 2 200 | 20 à 22 |
| Bois dur (iroko, teck) | 650 à 800 | 6,5 à 8 |
| Sable sec (en vrac) | 1 500 à 1 700 | 15 à 17 |

> [!astuce] Masse volumique absolue ou apparente ?
> Pour un matériau en grains (sable, gravier, ciment), la masse volumique **apparente** inclut les vides entre les grains, l'**absolue** ne compte que la matière. Sable : absolue ≈ 2 650 kg/m³, apparente ≈ 1 600 kg/m³ ; la différence correspond à environ 40 % de vides.

## Calculer le poids propre d'un élément
> [!exemple] Poutre, dalle et armatures
> - Poutre 20 × 40 cm de 5 m : V = 0,20 × 0,40 × 5 = 0,40 m³ → P = 0,40 × 25 = **10 kN** (soit 2 kN/m).
> - Dalle pleine de 15 cm : 0,15 × 25 = **3,75 kN/m²**.
> - Barre HA 12 : masse linéique = 7 850 × π × 0,012²/4 = **0,888 kg/m**.

La masse linéique des aciers HA se calcule par ρ × π d²/4 (ou approximativement d²/162 en kg/m avec d en mm) :
| Diamètre | 8 | 10 | 12 | 14 | 16 | 20 | 25 |
|---|---|---|---|---|---|---|---|
| kg/m | 0,395 | 0,617 | 0,888 | 1,208 | 1,578 | 2,466 | 3,853 |

## La poussée d'Archimède
Tout corps plongé dans un liquide subit une force verticale vers le haut égale au **poids du volume de liquide déplacé** :
$$ F(A) = ρ(liquide) × g × V(immergé)
- Si le poids du corps est supérieur à la poussée, il coule ; sinon il flotte.
- En bâtiment, la poussée d'Archimède menace les **ouvrages enterrés vides** (cuves, bâches à eau, fosses, sous-sols) quand la **nappe phréatique** monte : en saison des pluies, une cuve vide peut être **soulevée** et sortir du sol.

> [!exemple] Bâche à eau enterrée
> Bâche de 3 × 2 × 2 m (extérieur) pesant 15 t, nappe au niveau du terrain (bâche totalement immergée).
> Poussée : 1 000 × 9,81 × 12 = 117 700 N = **117,7 kN** ; poids : 15 × 9,81 = **147,2 kN** > 117,7 kN : la bâche vide reste en place (rapport 1,25).

> [!retenir]
> - P = m g ; 1 t ≈ 10 kN ; béton armé 25 kN/m³ ; acier 78,5 kN/m³.
> - ρ = m/V ; apparente (avec vides) ≠ absolue.
> - Poussée d'Archimède = poids du liquide déplacé : vérifier le soulèvement des ouvrages enterrés vides.`,
 sujet:{titre:"Masse, poids, masse volumique et poussée d'Archimède : poser une buse sous l'eau", duree:60, niveau:"BT / CAP", bareme:20,
  enonce:`**Contexte.** Une entreprise pose des buses en béton dans le lit d'une rivière à Bouaflé et utilise des flotteurs pour un batardeau.

**Données**
- Buse en béton : volume de béton **0,80 m³** ; ρ(béton) = **2 400 kg/m³** ; ρ(eau) = **1 000 kg/m³** ; g = **9,81 N/kg** ;
- Sac de ciment : **50 kg** ;
- Bloc de polystyrène de **1,00 × 0,50 × 0,60 m**, ρ = **15 kg/m³** ;
- Densité du gravier : **2,65**.

### Partie A — Masse et poids (5 points)
1. Distinguer masse et poids (unités, instrument de mesure). (2 pts)
2. Calculer le poids d'un sac de ciment. (1 pt)
3. Calculer la masse et le poids de la buse. (2 pts)

### Partie B — Masse volumique (4 points)
4. Calculer le poids volumique du béton en kN/m³. (2 pts)
5. Quelle est la masse volumique des grains de gravier ? Coulent-ils dans l'eau ? (2 pts)

### Partie C — Poussée d'Archimède (11 points)
6. Énoncer le principe d'Archimède. (2 pts)
7. Calculer la poussée sur la buse entièrement immergée et son poids apparent. Quelle force la grue doit-elle fournir sous l'eau ? (4 pts)
8. Calculer le poids du bloc de polystyrène et la poussée s'il est totalement immergé. (3 pts)
9. Quelle charge maximale (en kg) peut-on poser sur ce flotteur sans qu'il coule ? (2 pts)`,
  corrige:`### Partie A — Masse et poids (5 pts)
1. **Masse** : quantité de matière, en **kg**, mesurée à la balance, invariable ; **poids** : force d'attraction de la Terre, en **N**, mesurée au dynamomètre, P = m g. *(2 pts)*
2. P = 50 × 9,81 = **490,5 N**. *(1 pt)*
3. m = 2 400 × 0,80 = **1 920 kg** ; P = 1 920 × 9,81 = **18 835 N ≈ 18,8 kN**. *(2 pts)*

### Partie B — Masse volumique (4 pts)
4. γ = 2 400 × 9,81 = 23 544 N/m³ ≈ **23,5 kN/m³** (on prend souvent 24 ou 25 kN/m³ pour le béton armé). *(2 pts)*
5. ρ = 2,65 × 1 000 = **2 650 kg/m³** > 1 000 : ils **coulent**. *(2 pts)*

### Partie C — Archimède (11 pts)
6. Tout corps plongé dans un liquide subit une force verticale, dirigée vers le **haut**, égale au **poids du liquide déplacé** : FA = ρliquide × g × Vimmergé. *(2 pts)*
7. FA = 1 000 × 9,81 × 0,80 = **7 848 N** ; poids apparent : 18 835 − 7 848 = **10 987 N ≈ 11,0 kN** : la grue fournit **≈ 11 kN** sous l'eau (mais 18,8 kN hors de l'eau, au moment où la buse sort). *(4 pts)*
8. V = 0,30 m³ ; P = 15 × 0,30 × 9,81 = **44 N** ; FA = 1 000 × 9,81 × 0,30 = **2 943 N**. *(3 pts)*
9. Charge max : 2 943 − 44 = 2 899 N → **≈ 295 kg** (à réduire par sécurité). *(2 pts)*

> [!attention] Erreurs à éviter
> - Exprimer un poids en kg.
> - Oublier que la grue doit lever la buse entière à la sortie de l'eau.
> - Prendre le volume total d'un corps qui flotte au lieu du volume immergé.`},
 exercices:[
  {t:"Poids propre d'une poutre", d:1, e:`Une poutre en béton armé mesure 25 × 50 cm et 6 m de long.
Calculer son volume, son poids total et son poids par mètre linéaire.`, c:`V = 0,25 × 0,50 × 6 = **0,75 m³**.
P = 0,75 × 25 = **18,75 kN** (environ 1,9 t).
Par mètre : 0,25 × 0,50 × 25 = **3,125 kN/m** : c'est la charge permanente due au poids propre dans le calcul de la poutre.`},
  {t:"Commande d'aciers", d:1, e:`Un ferrailleur doit commander 12 barres HA 16 de 12 m et 30 barres HA 8 de 12 m.
Calculer la masse totale d'acier (ρ = 7 850 kg/m³).`, c:`HA 16 : 7 850 × π × 0,016²/4 = 1,578 kg/m → 12 × 12 × 1,578 = **227,2 kg**.
HA 8 : 0,395 kg/m → 30 × 12 × 0,395 = **142,2 kg**.
Total : **369,4 kg** ≈ 0,37 t.`},
  {t:"Vides d'un sable", d:2, e:`Un récipient de 1 L rempli de sable sec (sans tasser) pèse 1,58 kg net. La masse volumique absolue des grains est 2 650 kg/m³.
a) Calculer la masse volumique apparente.
b) En déduire le pourcentage de vides.`, c:`a) ρ apparente = 1,58 kg/1 L = **1 580 kg/m³**.
b) Volume réel des grains dans 1 m³ en vrac : 1 580/2 650 = 0,596 m³ → vides = 1 − 0,596 = **40,4 %**.
Ces vides devront être remplis par la pâte de ciment dans le béton.`},
  {t:"Charges permanentes d'un plancher", d:2, e:`Un plancher comprend : dalle pleine de 16 cm (25 kN/m³), chape de 4 cm (22 kN/m³) et carrelage collé (0,5 kN/m²).
Calculer la charge permanente G en kN/m², puis le poids d'une pièce de 4 × 5 m.`, c:`Dalle : 0,16 × 25 = 4,00 kN/m² ; chape : 0,04 × 22 = 0,88 kN/m² ; carrelage : 0,50 kN/m².
**G = 5,38 kN/m²**.
Pièce de 20 m² : 20 × 5,38 = **107,6 kN** (environ 11 t).`},
  {t:"Soulèvement d'une cuve enterrée", d:3, e:`Une cuve enterrée de 4 × 3 × 2,5 m (dimensions extérieures) pèse 20 t. En saison des pluies, la nappe monte jusqu'au niveau du terrain naturel.
a) Calculer la poussée d'Archimède quand la cuve est vide.
b) La cuve risque-t-elle de se soulever ?
c) Quel lest supplémentaire (en tonnes) faut-il pour obtenir un rapport poids/poussée de 1,1 ?`, c:`a) V immergé = 4 × 3 × 2,5 = 30 m³ → F = 1 000 × 9,81 × 30 = **294,3 kN**.
b) Poids : 20 × 9,81 = **196,2 kN** < 294,3 kN → la cuve vide **se soulève**.
c) Poids nécessaire : 1,1 × 294,3 = 323,7 kN → lest = 323,7 − 196,2 = 127,5 kN ≈ **13 t** (béton de lestage, débords de radier chargés par les terres, ou ancrages).`}
 ],
 quiz:[
  {q:"Le poids d'une masse de 2 t est d'environ :", o:["20 kN","2 kN","200 kN","2 N"], r:0, e:"2 000 × 9,81 ≈ 19 620 N."},
  {q:"Poids volumique du béton armé :", o:["25 kN/m³","10 kN/m³","78,5 kN/m³","2,5 kN/m³"], r:0, e:"ρ = 2 500 kg/m³."},
  {q:"La masse volumique apparente d'un sable :", o:["Inclut les vides entre les grains","Ne concerne que les grains","Est toujours égale à 2 650 kg/m³","Est en kN"], r:0, e:"Matériau en vrac."},
  {q:"La poussée d'Archimède est égale :", o:["Au poids du liquide déplacé","Au poids du corps","À la masse du corps","À la pression atmosphérique"], r:0, e:"ρ g V immergé."},
  {q:"Masse linéique d'un HA 10 :", o:["0,617 kg/m","0,395 kg/m","1,578 kg/m","6,17 kg/m"], r:0, e:"7 850 × π × 0,01²/4."}
 ]},

{id:"sp-10", niv:1, titre:"Mouvements : vitesse et accélération", duree:45, contenu:`## Décrire un mouvement
Pour décrire un mouvement, il faut un **référentiel** (le sol du chantier, le camion…), une **trajectoire** (droite, cercle, courbe) et l'évolution de la **position** au cours du temps.

## La vitesse
$$ vitesse moyenne : v = d / t     (m/s ou km/h)
**Mouvement rectiligne uniforme** (vitesse constante) : la distance parcourue est proportionnelle au temps : **d = v × t**.

> [!exemple] Camion toupie
> Une centrale à béton est à 30 km du chantier ; la toupie roule à 45 km/h de moyenne.
> t = d/v = 30/45 = 0,667 h = **40 min**. Le béton doit être mis en place dans un délai limité après sa fabrication (souvent de l'ordre de 1 h 30 en climat chaud) : le temps de trajet en consomme près de la moitié.

## L'accélération
L'accélération mesure la variation de la vitesse :
$$ a = Δv / Δt     (m/s²)
a > 0 : le mobile accélère ; a < 0 : il freine (on parle de décélération).

**Mouvement rectiligne uniformément varié** (a constante), en partant de la vitesse v₀ :
$$ v = v₀ + a t      ;      d = v₀ t + ½ a t²      ;      v² = v₀² + 2 a d

## La chute libre
Sans frottement de l'air, tout objet lâché tombe avec l'accélération **g = 9,81 m/s²**, quelle que soit sa masse :
$$ durée de chute : t = √(2h/g)      ;      vitesse à l'arrivée : v = √(2 g h)
> [!exemple] Chute d'un outil depuis un échafaudage de 20 m
> t = √(2 × 20/9,81) = **2,0 s** ; v = √(2 × 9,81 × 20) = 19,8 m/s = **71 km/h**.
> Un marteau de 1 kg arrivant à cette vitesse est mortel : d'où le port du casque, les plinthes d'échafaudage, les filets et le balisage des zones sous les travaux en hauteur.

## La distance d'arrêt d'un engin
Distance d'arrêt = distance parcourue pendant le **temps de réaction** (à vitesse constante) + **distance de freinage** (décélération a) :
$$ d(arrêt) = v × t(réaction) + v² / (2 a)
> [!exemple] Camion à 54 km/h
> v = 54/3,6 = 15 m/s ; réaction 1 s → 15 m ; freinage à 5 m/s² : 15²/(2 × 5) = 22,5 m.
> Distance d'arrêt : **37,5 m**. À vitesse double, la distance de freinage est **quadruplée** : la vitesse des engins doit être limitée sur les pistes de chantier.

## Le mouvement circulaire
Pour un objet qui tourne (tambour de bétonnière, flèche de grue, disque de scie) :
- vitesse angulaire **ω** en rad/s ; N tours par minute donnent ω = 2π N/60 ;
- vitesse d'un point situé à la distance r de l'axe : **v = ω × r**.

> [!exemple] Bétonnière
> Tambour de rayon 0,60 m tournant à 30 tr/min : ω = 2π × 30/60 = π = **3,14 rad/s** ; v = 3,14 × 0,60 = **1,88 m/s** à la périphérie.

> [!retenir]
> - v = d/t ; km/h ÷ 3,6 = m/s.
> - a = Δv/Δt ; v = v₀ + a t ; d = v₀ t + ½ a t² ; v² = v₀² + 2 a d.
> - Chute libre : t = √(2h/g) ; v = √(2gh).
> - Distance d'arrêt = v t(réaction) + v²/2a ; rotation : ω = 2πN/60 ; v = ω r.`,
 sujet:{titre:"Mouvements : freinage d'un camion, chute d'un outil et levage", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** La sécurité sur un chantier d'immeuble à Abidjan demande de comprendre les mouvements.

**Données** (g = 9,81 m/s²)
- Camion à **54 km/h** ; temps de réaction du conducteur **1 s** ; décélération au freinage **5 m/s²** ;
- Un marteau tombe du **4e étage**, à **12 m** de hauteur ;
- Une charge levée par la grue passe de **0** à **0,8 m/s** en **2 s**, puis monte à vitesse constante pendant **25 s**.

### Partie A — Vitesse (4 points)
1. Convertir la vitesse du camion en m/s. (1 pt)
2. Quelle distance parcourt-il pendant le temps de réaction ? (1 pt)
3. Définir vitesse moyenne et vitesse instantanée. (2 pts)

### Partie B — Freinage (6 points)
4. Calculer la distance de freinage et la distance d'arrêt. (4 pts)
5. Un ouvrier traverse à 30 m devant le camion : est-il en danger ? Quelle règle de chantier en déduire ? (2 pts)

### Partie C — Chute libre (5 points)
6. Calculer la durée de chute du marteau et sa vitesse à l'arrivée (en m/s et km/h). (4 pts)
7. Pourquoi le casque et le balisage sous les zones de travail sont-ils indispensables ? (1 pt)

### Partie D — Levage (5 points)
8. Calculer l'accélération de la charge pendant le démarrage. (2 pts)
9. Calculer la hauteur totale atteinte au bout de 27 s. (3 pts)`,
  corrige:`### Partie A — Vitesse (4 pts)
1. 54 / 3,6 = **15 m/s**. *(1 pt)*
2. 15 × 1 = **15 m**. *(1 pt)*
3. **Moyenne** : distance totale / durée totale ; **instantanée** : vitesse à un instant donné (lue au compteur). *(2 pts)*

### Partie B — Freinage (6 pts)
4. Freinage : v² / (2a) = 225 / 10 = **22,5 m** ; arrêt : 15 + 22,5 = **37,5 m**. *(4 pts)*
5. 30 m < 37,5 m : le camion **ne peut pas s'arrêter** à temps → danger. Règle : **vitesse limitée** sur le chantier (10 à 20 km/h), séparation des circulations piétons et engins, guide pour les manœuvres. *(2 pts)*

### Partie C — Chute (5 pts)
6. $$ t = √(2h / g) = √(24 / 9,81) = 1,56 s      v = √(2 g h) = 15,3 m/s ≈ 55 km/h
   *(4 pts)*
7. Un objet de quelques centaines de grammes arrivant à 55 km/h peut tuer : casque obligatoire, plinthes sur les planchers, zones balisées sous les postes en hauteur. *(1 pt)*

### Partie D — Levage (5 pts)
8. a = Δv / Δt = 0,8 / 2 = **0,4 m/s²**. *(2 pts)*
9. Démarrage : ½ × 0,4 × 2² = 0,8 m ; vitesse constante : 0,8 × 25 = 20 m → **20,8 m**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier le temps de réaction dans la distance d'arrêt.
> - Calculer avec des km/h dans des formules en m/s.
> - Sous-estimer la vitesse d'un objet qui tombe de quelques étages.`},
 exercices:[
  {t:"Livraison de béton", d:1, e:`Une toupie quitte la centrale à 7 h 50. Le chantier est à 25 km et la vitesse moyenne est de 40 km/h.
À quelle heure arrive-t-elle ?`, c:`t = 25/40 = 0,625 h = 0,625 × 60 = **37,5 min**.
Arrivée : 7 h 50 + 37 min 30 s = **8 h 27 min 30 s**.`},
  {t:"Chute d'un objet", d:1, e:`Une clé tombe d'une plateforme située à 12 m de hauteur.
Calculer la durée de la chute et la vitesse d'arrivée au sol (en m/s et en km/h).`, c:`t = √(2 × 12/9,81) = √2,446 = **1,56 s**.
v = √(2 × 9,81 × 12) = **15,3 m/s** = 15,3 × 3,6 = **55 km/h**.`},
  {t:"Distance d'arrêt d'un chargeur", d:2, e:`Un chargeur roule à 36 km/h sur une piste de chantier. Le temps de réaction du conducteur est 0,8 s et la décélération de freinage 4 m/s².
Calculer la distance d'arrêt.`, c:`v = 36/3,6 = **10 m/s**.
Réaction : 10 × 0,8 = **8 m** ; freinage : 10²/(2 × 4) = **12,5 m**.
Distance d'arrêt : **20,5 m**.`},
  {t:"Levage d'une benne", d:2, e:`Une grue soulève une benne depuis l'arrêt avec une accélération de 0,5 m/s² pendant 4 s, puis continue à vitesse constante.
a) Quelle vitesse atteint-elle et quelle hauteur a-t-elle parcourue au bout des 4 s ?
b) Combien de temps faut-il au total pour monter à 30 m ?`, c:`a) v = 0,5 × 4 = **2 m/s** ; h₁ = ½ × 0,5 × 4² = **4 m**.
b) Reste 30 − 4 = 26 m à 2 m/s → 13 s. Durée totale : 4 + 13 = **17 s**.`},
  {t:"Tambour de bétonnière", d:2, e:`Le tambour d'une bétonnière a un diamètre de 1,20 m et tourne à 25 tr/min.
a) Calculer la vitesse angulaire et la vitesse d'un point de la périphérie.
b) Combien de tours effectue-t-il pendant un malaxage de 2 min ?`, c:`a) ω = 2π × 25/60 = **2,62 rad/s** ; r = 0,60 m → v = 2,62 × 0,60 = **1,57 m/s**.
b) 25 × 2 = **50 tours**.`}
 ],
 quiz:[
  {q:"Un camion parcourt 60 km en 1 h 30. Sa vitesse moyenne est :", o:["40 km/h","90 km/h","60 km/h","45 km/h"], r:0, e:"60/1,5."},
  {q:"L'accélération s'exprime en :", o:["m/s²","m/s","km/h","N"], r:0, e:"Variation de vitesse par seconde."},
  {q:"En chute libre, un objet lourd tombe :", o:["Aussi vite qu'un objet léger (sans frottement)","Plus vite","Plus lentement","À vitesse constante"], r:0, e:"a = g pour tous."},
  {q:"Si la vitesse double, la distance de freinage est :", o:["Multipliée par 4","Multipliée par 2","Inchangée","Divisée par 2"], r:0, e:"Elle varie comme v²."},
  {q:"Vitesse angulaire d'un tambour à 60 tr/min :", o:["2π rad/s","60 rad/s","1 rad/s","π rad/s"], r:0, e:"2π × 60/60."}
 ]},

{id:"sp-3", niv:1, titre:"Forces et équilibre d'un solide", duree:50, contenu:`## Qu'est-ce qu'une force ?
Une force est une action mécanique capable de **déformer** un objet ou de **modifier son mouvement**. On la représente par un **vecteur** caractérisé par :
- son **point d'application** ;
- sa **direction** (sa droite d'action) ;
- son **sens** ;
- son **intensité**, en newtons (N) ou kilonewtons (kN), mesurée avec un dynamomètre.

## Les actions mécaniques du bâtiment
- **Actions à distance** : le poids (attraction terrestre) ;
- **Actions de contact** : réaction d'un appui, poussée des terres ou de l'eau, tension d'un câble ou d'une élingue, frottement, pression du vent.

**Principe des actions réciproques** : si un corps A exerce une force sur B, alors B exerce sur A une force de même intensité et de sens opposé. Le poteau appuie sur la semelle ; la semelle repousse le poteau avec la même force.

## Décomposer une force
Une force F inclinée d'un angle α sur l'horizontale se décompose en :
$$ Fx = F × cos α      ;      Fy = F × sin α
Inversement, deux composantes Fx et Fy se recomposent en F = √(Fx² + Fy²).

!fig:forces|Composition et décomposition des forces

## Le moment d'une force
Le moment mesure l'**effet de rotation** d'une force autour d'un point :
$$ M = F × d     (kN·m)
d est le **bras de levier** : la distance perpendiculaire du point à la droite d'action de la force. Une force dont la droite d'action passe par le point a un moment nul.

## Les conditions d'équilibre
Un solide est en équilibre si :
1. la **somme des forces** est nulle : Σ Fx = 0 et Σ Fy = 0 ;
2. la **somme des moments** par rapport à n'importe quel point est nulle : Σ M = 0.

Cas particuliers utiles :
- **Deux forces** : elles sont égales, opposées et sur la même droite d'action ;
- **Trois forces non parallèles** : elles sont concourantes en un même point et leur triangle des forces est fermé.

> [!exemple] Réactions d'une poutre
> Poutre de 5 m sur appuis A et B ; charge de 30 kN à 2 m de A.
> Moments en A : RB × 5 = 30 × 2 → **RB = 12 kN** ; forces : RA = 30 − 12 = **18 kN**.
> L'appui le plus proche de la charge reprend la plus grande part.

## Application sécurité : l'élingage à deux brins
Une charge P est levée par deux brins inclinés d'un angle β sur l'horizontale. Par symétrie, chaque brin reprend :
$$ T = P / (2 × sin β)
> [!exemple] Charge de 20 kN
> | Angle des brins sur l'horizontale | 90° | 60° | 45° | 30° |
> |---|---|---|---|---|
> | Tension dans chaque brin | 10 kN | 11,5 kN | 14,1 kN | 20 kN |
> Plus les brins sont **ouverts**, plus la tension augmente : à 30°, chaque brin porte autant que la charge entière. On limite l'angle au sommet de l'élingue à 90° (brins à 45° minimum).

> [!retenir]
> - Une force : point d'application, direction, sens, intensité (N, kN).
> - Fx = F cos α ; Fy = F sin α ; M = F × d.
> - Équilibre : Σ F = 0 et Σ M = 0 → calcul des réactions d'appui.
> - Élingue : T = P/(2 sin β) ; ne pas trop ouvrir les brins.`,
 sujet:{titre:"Forces et équilibre : élinguer une charge et trouver les réactions d'une poutre", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous préparez le levage de poutrelles préfabriquées et vérifiez l'équilibre d'une poutre sur deux appuis.

**Données**
- Charge levée : **P = 20 kN** suspendue par deux brins d'élingue symétriques ; β = angle de chaque brin avec l'**horizontale** ; T = P / (2 sin β) ;
- Élingue de capacité **12 kN** par brin ;
- Poutre de **5 m** sur deux appuis A (x = 0) et B (x = 5 m), charges **12 kN** à **1,5 m** de A et **8 kN** à **3,5 m** de A (poids propre négligé).

### Partie A — Forces (4 points)
1. Quelles sont les quatre caractéristiques d'une force ? (2 pts)
2. Représenter la charge et les tensions des deux brins (schéma). (2 pts)

### Partie B — Élingage (8 points)
3. Calculer la tension de chaque brin pour β = 60° puis β = 30°. (4 pts)
4. Quel angle respecter avec cette élingue ? Conclure sur la règle de chantier. (2 pts)
5. Que vaut la tension si les brins sont verticaux (β = 90°) ? Si β tend vers 0 ? (2 pts)

### Partie C — Équilibre de la poutre (8 points)
6. Énoncer les conditions d'équilibre d'un solide (principe fondamental de la statique). (2 pts)
7. Calculer les réactions RA et RB. (4 pts)
8. Vérifier l'équilibre vertical. (2 pts)`,
  corrige:`### Partie A — Forces (4 pts)
1. **Point d'application**, **direction** (droite d'action), **sens**, **intensité** (en N). *(2 pts)*
2. P vertical vers le bas ; deux tensions dirigées le long des brins vers le crochet ; leurs composantes verticales équilibrent P. *(2 pts)*

### Partie B — Élingage (8 pts)
3. β = 60° : T = 20 / (2 × 0,866) = **11,5 kN** ; β = 30° : T = 20 / (2 × 0,5) = **20 kN**. *(4 pts)*
4. À 60°, 11,5 kN ≤ 12 kN ✔ ; à 30°, 20 kN > 12 kN ✘ (rupture possible). Règle : **angle des brins ≥ 60° avec l'horizontale** (≤ 30° de part et d'autre de la verticale, ou 120° maximum entre brins). *(2 pts)*
5. β = 90° : T = P/2 = **10 kN** (minimum) ; si β → 0, T → **l'infini** : un élingage très « à plat » est dangereux. *(2 pts)*

### Partie C — Poutre (8 pts)
6. La somme des forces est nulle (ΣFx = 0, ΣFy = 0) et la somme des moments par rapport à n'importe quel point est nulle (ΣM = 0). *(2 pts)*
7. Moments en A : RB × 5 = 12 × 1,5 + 8 × 3,5 = 18 + 28 = 46 → **RB = 9,2 kN** ; RA = 20 − 9,2 = **10,8 kN**. *(4 pts)*
8. RA + RB = 10,8 + 9,2 = 20 kN = 12 + 8 ✔. *(2 pts)*

> [!attention] Erreurs à éviter
> - Croire que chaque brin porte la moitié de la charge quel que soit l'angle.
> - Oublier une charge dans l'équation des moments.
> - Prendre l'angle avec la verticale au lieu de l'horizontale dans la formule.`},
 exercices:[
  {t:"Composantes d'une force", d:1, e:`Un tirant exerce une force de 50 kN inclinée de 30° sur l'horizontale.
Calculer ses composantes horizontale et verticale.`, c:`Fx = 50 × cos 30° = 50 × 0,866 = **43,3 kN**.
Fy = 50 × sin 30° = 50 × 0,5 = **25 kN**.
Vérification : √(43,3² + 25²) = 50 kN ✓.`},
  {t:"Réactions d'une poutre à deux charges", d:1, e:`Une poutre de 6 m sur appuis A et B porte 12 kN à 1,50 m de A et 18 kN à 4,50 m de A.
Calculer RA et RB.`, c:`Moments en A : 6 RB = 12 × 1,5 + 18 × 4,5 = 18 + 81 = 99 → **RB = 16,5 kN**.
Forces : RA = 12 + 18 − 16,5 = **13,5 kN**.`},
  {t:"Élingage d'un panneau", d:2, e:`Un panneau préfabriqué de 30 kN est levé par une élingue à deux brins.
Calculer la tension dans chaque brin si les brins font 45°, puis 60° avec l'horizontale. Une élingue de capacité 2 t par brin convient-elle ?`, c:`À 45° : T = 30/(2 × 0,707) = **21,2 kN** ; à 60° : T = 30/(2 × 0,866) = **17,3 kN**.
Capacité d'un brin : 2 t × 9,81 = **19,6 kN**.
À 45°, 21,2 > 19,6 kN : **non** ; à 60°, 17,3 < 19,6 kN : **oui**. Il faut des brins plus longs pour fermer l'angle.`},
  {t:"Charge suspendue à deux câbles inégaux", d:2, e:`Un projecteur de 10 kN est suspendu à deux câbles faisant 30° et 60° avec l'horizontale.
Calculer la tension dans chaque câble.`, c:`Horizontalement : T₁ cos 30° = T₂ cos 60° → T₂ = T₁ × 0,866/0,5 = 1,732 T₁.
Verticalement : T₁ sin 30° + T₂ sin 60° = 10 → 0,5 T₁ + 1,732 × 0,866 T₁ = 10 → 2 T₁ = 10.
**T₁ = 5 kN** (câble à 30°) ; **T₂ = 8,66 kN** (câble à 60°) : le câble le plus vertical porte le plus.`},
  {t:"Auvent suspendu par un tirant", d:3, e:`Un auvent est modélisé par une poutre horizontale AB de 2 m, articulée au mur en A. En B, un tirant BC fixé plus haut sur le mur fait 30° avec la poutre. Une charge de 6 kN s'applique en B (poids propre négligé).
Calculer l'effort dans le tirant et la réaction de l'articulation A.`, c:`Moments en A : la composante verticale du tirant T sin 30° a un bras de levier de 2 m :
T × sin 30° × 2 = 6 × 2 → **T = 12 kN**.
Réaction en A : horizontalement, H = T cos 30° = **10,4 kN** (la poutre est comprimée contre le mur) ; verticalement, V = 6 − T sin 30° = 6 − 6 = **0 kN**.
Le tirant doit donc reprendre deux fois la charge suspendue.`}
 ],
 quiz:[
  {q:"Une force est caractérisée par :", o:["Point d'application, direction, sens, intensité","Sa masse seulement","Sa vitesse","Sa couleur"], r:0, e:"C'est un vecteur."},
  {q:"Composante verticale d'une force de 40 kN inclinée de 30° sur l'horizontale :", o:["20 kN","34,6 kN","40 kN","10 kN"], r:0, e:"40 × sin 30°."},
  {q:"Les conditions d'équilibre d'un solide sont :", o:["Σ F = 0 et Σ M = 0","Σ F = 0 seulement","Σ M = 0 seulement","F = m g"], r:0, e:"Forces et moments."},
  {q:"Quand on ouvre les brins d'une élingue, la tension dans chaque brin :", o:["Augmente","Diminue","Reste égale","S'annule"], r:0, e:"T = P/(2 sin β)."},
  {q:"Le moment d'une force dont la droite d'action passe par le point considéré est :", o:["Nul","Maximal","Égal à F","Négatif"], r:0, e:"Bras de levier nul."}
 ]},

{id:"sp-11", niv:1, titre:"Machines simples : leviers, poulies, plan incliné et frottement", duree:45, contenu:`## Le principe des machines simples
Une machine simple permet de **déplacer une charge lourde avec un effort plus faible**. Mais rien n'est gratuit : sans frottement, le **travail** (force × déplacement) reste le même. Ce que l'on gagne en force, on le perd en déplacement.

## Le levier
Un levier est une barre rigide qui tourne autour d'un point d'appui O. À l'équilibre, les moments s'équilibrent :
$$ F × dF = R × dR
F : effort moteur, dF son bras de levier ; R : charge résistante, dR son bras de levier.

Trois genres de leviers :
- **Inter-appui** (appui entre l'effort et la charge) : pied-de-biche, tenaille ;
- **Inter-résistant** (charge au milieu) : **brouette**, diable ;
- **Inter-moteur** (effort au milieu) : pince, avant-bras.

> [!exemple] La brouette
> Charge de 80 kg (785 N) dont le centre de gravité est à 0,40 m de l'axe de la roue ; les mains sont à 1,40 m de l'axe.
> F × 1,40 = 785 × 0,40 → **F = 224 N** : on soulève l'équivalent de 23 kg au lieu de 80 kg.

## Les poulies et les palans
- **Poulie fixe** : elle change seulement la direction de l'effort : F = P.
- **Poulie mobile** : la charge est portée par 2 brins : F = P/2, mais il faut tirer 2 fois plus de corde.
- **Palan à n brins** porteurs : F = P/n (sans frottement). Avec un rendement η : **F = P/(n × η)**. Longueur de corde à tirer = n × hauteur de levage.

## Le treuil
Une manivelle de rayon R entraîne un tambour de rayon r autour duquel s'enroule le câble :
$$ F × R = P × r
Avec R = 0,40 m et r = 0,08 m, un effort de 150 N équilibre 750 N (sans frottement).

## Le plan incliné
Pour faire monter une charge de poids P sur une rampe inclinée de α, sans frottement, il suffit d'une force parallèle à la pente :
$$ F = P × sin α
Une pente de 20 % (α = 11,3°) réduit l'effort à environ 20 % du poids, mais la distance à parcourir est 5 fois plus grande que la hauteur.

## Le frottement
Lorsqu'un objet glisse (ou tend à glisser) sur un autre, une force de frottement s'oppose au mouvement :
$$ F(frottement) ≤ μ × N
N : force normale (perpendiculaire au contact) ; μ : **coefficient de frottement**, sans unité.

| Contact | μ (ordre de grandeur) |
|---|---|
| Bois sur bois | 0,3 à 0,5 |
| Acier sur acier | 0,15 à 0,2 |
| Béton sur sol frottant | 0,5 à 0,6 |
| Pneu sur piste sèche | 0,6 à 0,8 |

Sur un plan incliné avec frottement, pour faire monter la charge : **F = P (sin α + μ cos α)**.

> [!exemple] Glissement d'un mur de soutènement
> La poussée des terres (horizontale) tend à faire glisser le mur. Elle est retenue par le frottement de la semelle sur le sol : H ≤ μ × V (V : charges verticales). On exige en général un coefficient de sécurité d'au moins 1,5.

> [!retenir]
> - Levier : F × dF = R × dR ; on gagne en force ce qu'on perd en déplacement.
> - Palan à n brins : F = P/(n η) ; treuil : F R = P r.
> - Plan incliné : F = P sin α (+ μ P cos α avec frottement).
> - Frottement : F ≤ μ N.`,
 sujet:{titre:"Machines simples sur le chantier : brouette, treuil, palan et plan incliné", duree:60, niveau:"BT / CAP", bareme:20,
  enonce:`**Contexte.** Sur un petit chantier à Sakassou, sans engins, on utilise des machines simples pour déplacer les charges.

**Données** (g = 9,81 N/kg)
- Brouette : charge de **800 N** à **0,40 m** de l'axe de la roue ; poignées à **1,40 m** de l'axe ;
- Palan à **4 brins** porteurs ; charge **1 200 N** ;
- Treuil : manivelle de rayon **0,40 m**, tambour de rayon **0,10 m**, charge **1 200 N** ;
- Plan incliné (madriers) à **15°** ; caisse de **500 kg** ; coefficient de frottement **μ = 0,3**.

### Partie A — Leviers (5 points)
1. Énoncer la loi d'équilibre d'un levier. (1 pt)
2. Calculer la force à exercer sur les poignées de la brouette. (2 pts)
3. Comment répartir la charge dans la brouette pour forcer le moins ? (2 pts)

### Partie B — Palan et treuil (6 points)
4. Calculer la force à exercer sur le palan (sans frottements). Quelle longueur de corde tirer pour monter la charge de 3 m ? (3 pts)
5. Calculer la force sur la manivelle du treuil. (2 pts)
6. Que « gagne-t-on » et que « perd-on » avec une machine simple ? (1 pt)

### Partie C — Plan incliné (9 points)
7. Calculer le poids de la caisse et ses composantes parallèle et perpendiculaire au plan. (3 pts)
8. Calculer la force de frottement maximale. (2 pts)
9. Quelle force parallèle au plan faut-il pour faire monter la caisse à vitesse constante ? (2 pts)
10. La caisse posée sur le plan glisse-t-elle seule vers le bas ? (2 pts)`,
  corrige:`### Partie A — Leviers (5 pts)
1. **F × dF = R × dR** (moments égaux par rapport au point d'appui). *(1 pt)*
2. F × 1,40 = 800 × 0,40 → **F = 229 N**. *(2 pts)*
3. Charger **près de la roue** (dR plus petit) : la force aux poignées diminue. *(2 pts)*

### Partie B — Palan et treuil (6 pts)
4. F = 1 200 / 4 = **300 N** ; il faut tirer **4 × 3 = 12 m** de corde. *(3 pts)*
5. F × 0,40 = 1 200 × 0,10 → **F = 300 N**. *(2 pts)*
6. On gagne en **force** mais on perd en **déplacement** : le travail fourni est le même (et même un peu plus avec les frottements). *(1 pt)*

### Partie C — Plan incliné (9 pts)
7. P = 500 × 9,81 = **4 905 N** ; parallèle : P sin 15° = **1 270 N** ; perpendiculaire : P cos 15° = **4 738 N**. *(3 pts)*
8. Ff = μ × N = 0,3 × 4 738 = **1 421 N**. *(2 pts)*
9. F = 1 270 + 1 421 = **2 691 N** (le frottement s'oppose à la montée). *(2 pts)*
10. La composante motrice (1 270 N) est **inférieure** au frottement maximal (1 421 N) : la caisse **ne glisse pas** seule (tan 15° = 0,27 < μ = 0,3). *(2 pts)*

> [!attention] Erreurs à éviter
> - Mesurer les bras de levier depuis la mauvaise extrémité.
> - Oublier le frottement dans l'effort de montée.
> - Croire qu'une machine simple diminue le travail à fournir.`},
 exercices:[
  {t:"Pied-de-biche", d:1, e:`On arrache un clou avec un pied-de-biche : on pousse avec 200 N à 0,90 m de l'appui ; le clou est à 5 cm de l'appui.
Quelle force s'exerce sur le clou ?`, c:`R × 0,05 = 200 × 0,90 → R = 180/0,05 = **3 600 N** : la force est multipliée par 18 (rapport des bras de levier 0,90/0,05).`},
  {t:"Palan à chaîne", d:1, e:`On soulève une charge de 600 kg avec un palan à 4 brins porteurs de rendement 0,85.
a) Quel effort faut-il exercer ?
b) Quelle longueur de chaîne faut-il tirer pour monter la charge de 3 m ?`, c:`a) P = 600 × 9,81 = 5 886 N → F = 5 886/(4 × 0,85) = **1 731 N** (environ 176 kg « ressentis »).
b) Longueur tirée = 4 × 3 = **12 m**.`},
  {t:"Monter une charge sur une rampe", d:2, e:`On pousse un bloc de 150 kg sur une rampe inclinée de 15°. Le coefficient de frottement vaut 0,3.
Calculer l'effort parallèle à la pente, avec et sans frottement.`, c:`P = 150 × 9,81 = **1 471,5 N**.
Sans frottement : F = 1 471,5 × sin 15° = 1 471,5 × 0,259 = **381 N**.
Avec frottement : F = 1 471,5 × (0,259 + 0,3 × 0,966) = 1 471,5 × 0,549 = **807 N** : le frottement double ici l'effort.`},
  {t:"Treuil manuel", d:2, e:`Un treuil a une manivelle de 40 cm et un tambour de 16 cm de diamètre. L'opérateur exerce 150 N ; le rendement est 0,8.
Quelle masse peut-il soulever ?`, c:`r = 0,08 m → P = F × R/r × η = 150 × 0,40/0,08 × 0,8 = 750 × 0,8 = **600 N**.
Masse : 600/9,81 = **61 kg**.`},
  {t:"Stabilité au glissement d'un mur", d:3, e:`Un mur de soutènement pèse, avec les terres sur sa semelle, V = 120 kN par mètre de mur. La poussée des terres vaut H = 45 kN/m. Le coefficient de frottement semelle-sol est μ = 0,55.
a) Calculer la force de frottement mobilisable et le coefficient de sécurité au glissement.
b) Conclure (sécurité exigée : 1,5).`, c:`a) Frottement maximal : 0,55 × 120 = **66 kN/m** ; coefficient : 66/45 = **1,47**.
b) 1,47 < 1,5 : **insuffisant**. Solutions : bêche sous la semelle (butée des terres), semelle plus large (plus de terres portées, V augmente) ou drainage pour réduire la poussée.`}
 ],
 quiz:[
  {q:"La brouette est un levier :", o:["Inter-résistant","Inter-appui","Inter-moteur","Ce n'est pas un levier"], r:0, e:"La charge est entre la roue et les mains."},
  {q:"Avec un palan à 4 brins sans frottement, l'effort vaut :", o:["P/4","P × 4","P","P/2"], r:0, e:"La charge est répartie sur 4 brins."},
  {q:"Une poulie fixe permet :", o:["De changer la direction de l'effort","De diviser l'effort par 2","De multiplier la vitesse","De supprimer le frottement"], r:0, e:"F = P."},
  {q:"Sur un plan incliné sans frottement, F = :", o:["P sin α","P cos α","P tan α","P"], r:0, e:"Composante du poids parallèle à la pente."},
  {q:"La force de frottement maximale vaut :", o:["μ × N","N/μ","μ + N","μ × P × sin α toujours"], r:0, e:"N : réaction normale."}
 ]},

{id:"sp-12", niv:1, titre:"Électricité : circuits en courant continu", duree:50, contenu:`## Courant, tension et résistance
- Le **courant électrique** est un déplacement de charges (électrons dans les métaux). Son **intensité I** se mesure en **ampères (A)** avec un ampèremètre branché **en série**.
- La **tension U** (ou différence de potentiel) est la « pression » qui fait circuler le courant. Elle se mesure en **volts (V)** avec un voltmètre branché **en dérivation** (en parallèle).
- La **résistance R** d'un récepteur s'oppose au passage du courant ; elle s'exprime en **ohms (Ω)**.

Un **générateur** (pile, batterie, panneau solaire, groupe électrogène) fournit l'énergie ; un **récepteur** (lampe, moteur, résistance chauffante) la consomme.

## La loi d'Ohm
$$ U = R × I
> [!exemple] Résistance chauffante
> Une résistance de 46 Ω est branchée sous 230 V : I = 230/46 = **5 A**.

## Résistance d'un conducteur
Un fil de longueur L (m), de section S (mm²) et de résistivité ρ (Ω·mm²/m) a pour résistance :
$$ R = ρ × L / S     cuivre : ρ ≈ 0,017 Ω·mm²/m (à 20 °C)
Plus le câble est **long** et **fin**, plus sa résistance est grande : il chauffe et provoque une **chute de tension**.

## Associations de résistances
| | En série | En parallèle (dérivation) |
|---|---|---|
| Courant | Le même dans toutes | Se partage : I = I₁ + I₂ |
| Tension | Se partage : U = U₁ + U₂ | La même pour toutes |
| Résistance équivalente | R = R₁ + R₂ | 1/R = 1/R₁ + 1/R₂ |

Dans une installation de bâtiment, les appareils sont branchés **en parallèle** : chacun reçoit 230 V et fonctionne indépendamment des autres.

**Loi des nœuds** : la somme des courants qui arrivent en un nœud est égale à la somme des courants qui en partent. **Loi des mailles** : dans une boucle fermée, la somme algébrique des tensions est nulle.

## Puissance et énergie électriques
$$ P = U × I = R × I² = U²/R     (W)
$$ W = P × t     (J ou Wh ; 1 kWh = 1 000 W pendant 1 h)
L'**effet Joule** (échauffement d'un conducteur parcouru par un courant) est utile dans un chauffe-eau, mais dangereux dans un câble sous-dimensionné : risque d'incendie.

> [!exemple] Éclairage de chantier sur batterie
> Batterie 12 V – 100 Ah : énergie stockée = 12 × 100 = 1 200 Wh = **1,2 kWh**.
> 6 projecteurs LED de 20 W : P = 120 W → I = 120/12 = **10 A**.
> Autonomie théorique : 1 200/120 = 10 h ; en ne déchargeant la batterie qu'à 50 % pour la préserver : **5 h**.

## Sécurité électrique
- Le danger vient du **courant qui traverse le corps** : à partir d'environ 30 mA, il peut provoquer la mort (fibrillation cardiaque).
- Les tensions supérieures à **50 V en alternatif** (120 V en continu) sont dangereuses dans les locaux secs ; sur les chantiers humides, on utilise de la très basse tension de sécurité (12 V, 24 V) pour les baladeuses.
- Le **disjoncteur différentiel 30 mA** coupe le courant dès qu'une fuite vers la terre dépasse 30 mA.

> [!retenir]
> - U = R I ; R = ρ L/S ; P = U I ; W = P t (kWh).
> - Série : R s'additionnent, même courant ; parallèle : même tension, courants qui s'additionnent.
> - Appareils domestiques en parallèle ; protection par différentiel 30 mA.`,
 sujet:{titre:"Circuits en courant continu : résistances, câble d'alimentation et installation solaire", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une case de santé isolée près de Touba est équipée d'une petite installation solaire en courant continu **12 V**.

**Données**
- Lampes LED de **10 W / 12 V** ;
- Deux résistances chauffantes **R1 = 6 Ω** et **R2 = 3 Ω** en parallèle, puis en série avec **R3 = 4 Ω**, sous **12 V** ;
- Câble cuivre de **25 m** (aller), donc **50 m** de conducteur, section **2,5 mm²** ; ρ = **0,017 Ω·mm²/m** ; courant **16 A** (circuit d'une autre installation) ;
- Consommation : **5 lampes** allumées **6 h** par jour.

### Partie A — Lois de base (6 points)
1. Énoncer la loi d'Ohm et les formules de la puissance électrique. (2 pts)
2. Calculer l'intensité dans une lampe. (1 pt)
3. Calculer la résistance équivalente du montage R1 // R2 + R3 et l'intensité débitée. (3 pts)

### Partie B — Câble (7 points)
4. Calculer la résistance du câble. (2 pts)
5. Calculer la chute de tension et la puissance perdue sous 16 A. (3 pts)
6. Que faire si la chute de tension est trop forte ? (2 pts)

### Partie C — Énergie (7 points)
7. Calculer l'énergie consommée par jour par les lampes (en Wh). (2 pts)
8. Calculer la capacité de batterie nécessaire (en Ah, à 12 V) pour une journée, puis pour 2 jours d'autonomie avec une décharge maximale de **50 %**. (5 pts)`,
  corrige:`### Partie A — Lois (6 pts)
1. **U = R × I** ; **P = U × I = R I² = U² / R**. *(2 pts)*
2. I = P / U = 10 / 12 = **0,83 A**. *(1 pt)*
3. R1 // R2 = 6 × 3 / (6 + 3) = **2 Ω** ; + R3 = **6 Ω** ; I = 12 / 6 = **2 A**. *(3 pts)*

### Partie B — Câble (7 pts)
4. R = 0,017 × 50 / 2,5 = **0,34 Ω**. *(2 pts)*
5. ΔU = 0,34 × 16 = **5,44 V** ; P = 0,34 × 16² = **87 W** perdus en chaleur. *(3 pts)*
6. **Augmenter la section** (4 ou 6 mm²), raccourcir la ligne, ou élever la tension (24 V au lieu de 12 V divise le courant par 2). *(2 pts)*

### Partie C — Énergie (7 pts)
7. 5 × 10 × 6 = **300 Wh/jour**. *(2 pts)*
8. Une journée : 300 / 12 = **25 Ah** ; 2 jours : 50 Ah ; avec 50 % de décharge maximale : **100 Ah** de batterie. *(5 pts)*

> [!attention] Erreurs à éviter
> - Additionner des résistances en parallèle.
> - Compter une seule longueur de câble (il y a l'aller et le retour).
> - Décharger complètement une batterie au plomb : elle s'abîme vite.`},
 exercices:[
  {t:"Loi d'Ohm et puissance", d:1, e:`Un radiateur de résistance 46 Ω est alimenté sous 230 V.
Calculer le courant, la puissance et l'énergie consommée en 3 h.`, c:`I = 230/46 = **5 A** ; P = 230 × 5 = **1 150 W**.
W = 1,15 kW × 3 h = **3,45 kWh**.`},
  {t:"Circuit mixte", d:2, e:`Une résistance R₁ = 6 Ω est en série avec un groupe de deux résistances en parallèle, R₂ = 12 Ω et R₃ = 6 Ω. L'ensemble est alimenté sous 24 V.
Calculer la résistance équivalente, le courant total, les tensions et les courants dans R₂ et R₃.`, c:`R₂ // R₃ : 1/R = 1/12 + 1/6 = 3/12 → **R₂₃ = 4 Ω** ; Req = 6 + 4 = **10 Ω**.
I = 24/10 = **2,4 A** ; U₁ = 6 × 2,4 = **14,4 V** ; U₂₃ = 4 × 2,4 = **9,6 V**.
I₂ = 9,6/12 = **0,8 A** ; I₃ = 9,6/6 = **1,6 A** (loi des nœuds : 0,8 + 1,6 = 2,4 A ✓).`},
  {t:"Résistance d'une rallonge", d:2, e:`Une rallonge de chantier de 50 m comporte deux conducteurs en cuivre de 2,5 mm² (aller et retour). ρ = 0,017 Ω·mm²/m.
a) Calculer sa résistance.
b) Quelle chute de tension provoque un courant de 10 A ? Quelle puissance est perdue en chaleur ?`, c:`a) Longueur parcourue par le courant : 2 × 50 = 100 m → R = 0,017 × 100/2,5 = **0,68 Ω**.
b) ΔU = 0,68 × 10 = **6,8 V** (3 % de 230 V) ; pertes P = R I² = 0,68 × 100 = **68 W** dissipés dans le câble.`},
  {t:"Autonomie d'une batterie", d:2, e:`Une batterie de 24 V – 150 Ah alimente des lampes LED totalisant 180 W et une petite pompe de 120 W.
Calculer le courant débité et l'autonomie si l'on ne décharge la batterie qu'à 50 %.`, c:`P = 180 + 120 = **300 W** → I = 300/24 = **12,5 A**.
Énergie utilisable : 24 × 150 × 0,5 = **1 800 Wh** → autonomie = 1 800/300 = **6 h**.`},
  {t:"Consommation d'un climatiseur", d:1, e:`Un climatiseur absorbe 1,2 kW et fonctionne 8 h par jour pendant 30 jours.
Calculer l'énergie consommée et son coût à 90 F CFA le kWh (valeur indicative).`, c:`W = 1,2 × 8 × 30 = **288 kWh**.
Coût : 288 × 90 = **25 920 F CFA** par mois. Isoler la toiture et protéger les vitrages du soleil réduit fortement cette dépense.`}
 ],
 quiz:[
  {q:"Un ampèremètre se branche :", o:["En série","En parallèle","Entre phase et terre","N'importe comment"], r:0, e:"Le courant doit le traverser."},
  {q:"Loi d'Ohm :", o:["U = R × I","P = R × I","I = U × R","U = P × I"], r:0, e:"Tension = résistance × intensité."},
  {q:"Deux résistances de 10 Ω en parallèle équivalent à :", o:["5 Ω","20 Ω","10 Ω","100 Ω"], r:0, e:"1/R = 1/10 + 1/10."},
  {q:"Un appareil de 2 000 W fonctionnant 3 h consomme :", o:["6 kWh","600 Wh","2 kWh","6 000 kWh"], r:0, e:"2 kW × 3 h."},
  {q:"Les appareils d'un logement sont branchés :", o:["En parallèle","En série","En étoile","Sans protection"], r:0, e:"Chacun reçoit 230 V."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"sp-13", niv:2, titre:"Lois de Newton : dynamique du levage et des engins", duree:50, contenu:`## Les trois lois de Newton
1. **Principe d'inertie** : un corps soumis à des forces qui se compensent reste immobile ou se déplace en ligne droite à vitesse constante.
2. **Principe fondamental de la dynamique** : si les forces ne se compensent pas, le corps accélère dans le sens de la force résultante :
$$ Σ F = m × a     (N = kg × m/s²)
3. **Principe des actions réciproques** : les actions entre deux corps sont égales et opposées.

La statique (chapitre « Forces et équilibre ») est le cas particulier a = 0.

## Levage d'une charge : l'effet dynamique
Une charge de masse m est suspendue au câble d'une grue. Deux forces : la tension T (vers le haut) et le poids P = m g (vers le bas).
$$ T − m g = m a   ⇒   T = m × (g + a)
- Charge **immobile** ou à **vitesse constante** : T = m g.
- **Démarrage vers le haut** (a > 0) : T > m g.
- **Freinage en montée** ou **démarrage en descente** : T < m g.
- **Freinage brutal en descente** : T peut largement dépasser m g.

> [!exemple] Levage d'une charge de 2 t
> À l'arrêt : T = 2 000 × 9,81 = **19,6 kN**.
> Démarrage à 0,5 m/s² : T = 2 000 × (9,81 + 0,5) = **20,6 kN**, soit + 5 %.
> C'est pourquoi les règles de calcul des appareils de levage appliquent un **coefficient dynamique** aux charges, et pourquoi les manœuvres doivent être progressives (pas d'à-coups).

## Mettre en mouvement ou arrêter un engin
Pour faire passer un véhicule de masse m de 0 à v en t secondes, il faut une force motrice moyenne F = m × v/t (en plus des résistances au roulement). Pour l'arrêter, les freins doivent fournir F = m × a.
> [!exemple] Camion de 20 t
> Démarrage de 0 à 36 km/h (10 m/s) en 20 s : a = 0,5 m/s² → F = 20 000 × 0,5 = **10 kN**.

## Plan incliné et frottement en mouvement
Pour un objet qui glisse vers le bas d'une pente α avec un coefficient de frottement μ :
$$ a = g × (sin α − μ cos α)
Si sin α > μ cos α (soit tan α > μ), l'objet accélère tout seul : un wagonnet ou une benne sur une rampe doit être retenu ou freiné.

## Le virage : force centripète
Pour suivre une trajectoire circulaire de rayon r à la vitesse v, un véhicule doit recevoir une force dirigée vers le centre :
$$ F = m × v² / r
Elle est fournie par l'**adhérence** des pneus (F ≤ μ m g). Si la vitesse est trop grande, le véhicule dérape ou se renverse. Vitesse maximale sans glissement : **v = √(μ g r)**.

## La quantité de mouvement
p = m × v (kg·m/s). Lors d'un choc, la force est d'autant plus grande que la durée du choc est courte : F ≈ Δp/Δt. Un casque, un filet de sécurité ou un amortisseur **allongent la durée du choc** pour réduire la force.

> [!retenir]
> - Σ F = m a ; la statique correspond à a = 0.
> - Levage : T = m (g + a) ; éviter les à-coups.
> - Freinage, démarrage : F = m a ; pente : a = g (sin α − μ cos α).
> - Virage : F = m v²/r ≤ μ m g → v max = √(μ g r).`,
 sujet:{titre:"Lois de Newton : tension du câble de grue, glissement d'une charge et camion en virage", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** On étudie la dynamique du levage et du transport sur le chantier d'un immeuble à Cocody.

**Données** (g = 9,81 m/s²)
- Charge de **1 500 kg** levée par la grue ; accélération au démarrage **0,5 m/s²** ; câble de charge de rupture **50 kN** ;
- Une palette posée sur le plateau d'un camion arrêté en pente de **10°** ; coefficient de frottement palette/plateau **μ = 0,4** ;
- Camion de **20 t** dans un virage de rayon **30 m** à **36 km/h**.

### Partie A — Principe fondamental (4 points)
1. Énoncer les trois lois de Newton. (3 pts)
2. Que vaut la somme des forces sur une charge qui monte à vitesse constante ? (1 pt)

### Partie B — Levage (8 points)
3. Calculer la tension du câble à vitesse constante, à la montée avec accélération, et au freinage de la descente avec la même décélération. (5 pts)
4. Quelle accélération maximale le câble supporterait-il ? Pourquoi impose-t-on quand même des démarrages progressifs ? (3 pts)

### Partie C — Palette (4 points)
5. La palette glisse-t-elle ? Utiliser a = g (sin α − μ cos α). (2 pts)
6. Que se passerait-il au freinage brusque du camion ? Quelle précaution prendre ? (2 pts)

### Partie D — Virage (4 points)
7. Calculer la force centripète nécessaire (F = m v² / r). (2 pts)
8. Pourquoi les charges hautes mal arrimées sont-elles dangereuses en virage ? (2 pts)`,
  corrige:`### Partie A — Newton (4 pts)
1. **1re loi** (inertie) : un corps soumis à des forces qui se compensent est immobile ou en mouvement rectiligne uniforme ; **2e loi** : ΣF = m a ; **3e loi** (actions réciproques) : A exerce sur B une force égale et opposée à celle de B sur A. *(3 pts)*
2. **Zéro** (mouvement uniforme) : la tension égale le poids. *(1 pt)*

### Partie B — Levage (8 pts)
3. *(5 pts)*
   - Vitesse constante : T = m g = 1 500 × 9,81 = **14 715 N** ;
   - Montée accélérée : T = m (g + a) = 1 500 × 10,31 = **15 465 N** ;
   - Freinage en descente (accélération vers le haut) : T = m (g + a) = **15 465 N** également ; en descente accélérée, T = m (g − a) = 13 965 N.
4. 50 000 = 1 500 (9,81 + a) → a = **23,5 m/s²**. Mais les à-coups créent des surtensions brutales (choc), font balancer la charge et fatiguent le câble : on reste très loin de cette limite. *(3 pts)*

### Partie C — Palette (4 pts)
5. a = 9,81 × (sin 10° − 0,4 cos 10°) = 9,81 × (0,174 − 0,394) < 0 → **elle ne glisse pas** (tan 10° = 0,18 < μ). *(2 pts)*
6. Par inertie, la palette continue d'avancer et peut glisser vers l'avant (le frottement ne suffit plus à une forte décélération) : **arrimer** avec des sangles. *(2 pts)*

### Partie D — Virage (4 pts)
7. v = 10 m/s → F = 20 000 × 100 / 30 = **66 667 N ≈ 67 kN**. *(2 pts)*
8. La force centrifuge (effet d'inertie) agit au centre de gravité : plus il est haut, plus le moment de renversement est grand ; une charge qui se déplace peut faire **basculer** le camion. *(2 pts)*

> [!attention] Erreurs à éviter
> - Croire que la tension du câble est toujours égale au poids.
> - Oublier de convertir les km/h en m/s (v au carré amplifie l'erreur).
> - Confondre masse (kg) et poids (N) dans ΣF = m a.`},
 exercices:[
  {t:"Tension du câble d'une grue", d:1, e:`Une benne à béton pleine a une masse de 1,5 t.
Calculer la tension du câble : a) à vitesse constante ; b) au démarrage en montée avec a = 0,8 m/s² ; c) au freinage en montée avec a = − 0,8 m/s².`, c:`a) T = 1 500 × 9,81 = **14,7 kN**.
b) T = 1 500 × (9,81 + 0,8) = **15,9 kN**.
c) T = 1 500 × (9,81 − 0,8) = **13,5 kN**.`},
  {t:"Démarrage d'un camion", d:1, e:`Un camion de 20 t passe de 0 à 36 km/h en 20 s sur une piste horizontale.
Calculer l'accélération et la force motrice nécessaire (résistances négligées).`, c:`v = 36/3,6 = **10 m/s** → a = 10/20 = **0,5 m/s²**.
F = 20 000 × 0,5 = **10 000 N = 10 kN**.`},
  {t:"Élingue en surcharge dynamique", d:2, e:`Une élingue a une charge maximale d'utilisation (CMU) de 2 t. On lève une charge de 1,8 t avec un démarrage brusque (a = 1,5 m/s²).
L'élingue est-elle en surcharge ?`, c:`Effort autorisé : 2 000 × 9,81 = **19,6 kN**.
Effort réel : T = 1 800 × (9,81 + 1,5) = 1 800 × 11,31 = **20,4 kN** > 19,6 kN.
**Oui** : une charge pourtant inférieure à la CMU met l'élingue en surcharge à cause de l'à-coup. D'où l'obligation de manœuvres progressives.`},
  {t:"Wagonnet sur une rampe", d:3, e:`Un wagonnet de 500 kg est lâché sans frein sur une rampe de 10° ; coefficient de frottement μ = 0,1.
a) Va-t-il descendre tout seul ? Calculer son accélération.
b) Quelle vitesse atteint-il après 20 m ?`, c:`a) tan 10° = 0,176 > 0,1 → **oui**.
a = 9,81 × (sin 10° − 0,1 × cos 10°) = 9,81 × (0,174 − 0,098) = **0,74 m/s²**.
b) v = √(2 × 0,74 × 20) = **5,4 m/s** (19,5 km/h) : vitesse dangereuse au bas de la rampe, il faut un frein ou un câble de retenue.`},
  {t:"Camion dans un virage", d:2, e:`Un camion de 15 t aborde un virage de 50 m de rayon à 36 km/h. Le coefficient d'adhérence de la piste est 0,5.
a) Calculer la force centripète nécessaire et l'adhérence disponible.
b) Quelle est la vitesse maximale sans dérapage ?`, c:`a) v = 10 m/s → F = 15 000 × 10²/50 = **30 kN** ; adhérence : 0,5 × 15 000 × 9,81 = **73,6 kN** → pas de dérapage.
b) v max = √(0,5 × 9,81 × 50) = **15,7 m/s = 56 km/h** (sans tenir compte du risque de renversement, souvent plus limitant pour un camion chargé haut).`}
 ],
 quiz:[
  {q:"Le principe fondamental de la dynamique s'écrit :", o:["Σ F = m a","F = m v","P = m g seulement","Σ F = 0 toujours"], r:0, e:"2ᵉ loi de Newton."},
  {q:"Au démarrage d'un levage vers le haut, la tension du câble est :", o:["Supérieure au poids","Égale au poids","Inférieure au poids","Nulle"], r:0, e:"T = m (g + a)."},
  {q:"Pour arrêter un véhicule plus lourd à la même décélération, il faut :", o:["Une force de freinage plus grande","La même force","Une force plus petite","Aucune force"], r:0, e:"F = m a."},
  {q:"Force centripète dans un virage :", o:["m v²/r","m g r","m v r","m/v²"], r:0, e:"Dirigée vers le centre."},
  {q:"Un casque protège parce qu'il :", o:["Allonge la durée du choc","Augmente la masse","Augmente la vitesse","Supprime la gravité"], r:0, e:"F ≈ Δp/Δt."}
 ]},

{id:"sp-4", niv:2, titre:"Travail, énergie, puissance et rendement", duree:50, contenu:`## Le travail d'une force
Une force F qui déplace son point d'application d'une distance d effectue un **travail** :
$$ W = F × d × cos α     (joules, J)
α est l'angle entre la force et le déplacement. Une force perpendiculaire au déplacement ne travaille pas (cos 90° = 0) : porter une charge horizontalement à vitesse constante ne demande, en théorie, aucun travail contre le poids.

## Les formes d'énergie mécanique
- **Énergie potentielle de pesanteur** (liée à la hauteur) : **Ep = m g h** ;
- **Énergie cinétique** (liée à la vitesse) : **Ec = ½ m v²**.

**Conservation** : sans frottement, Ep + Ec reste constante. Une charge qui tombe transforme son énergie potentielle en énergie cinétique : ½ m v² = m g h → v = √(2 g h).

**Théorème de l'énergie cinétique** : la variation de Ec est égale à la somme des travaux des forces : ΔEc = Σ W. Il permet de calculer une distance de freinage ou la force moyenne d'un choc.

> [!exemple] Mouton de battage de pieux
> Masse de 2 t lâchée de 1,5 m : énergie à l'impact Ep = 2 000 × 9,81 × 1,5 = **29,4 kJ**.
> Si le pieu s'enfonce de 1 cm par coup, la force moyenne de pénétration vaut environ 29 400/0,01 = 2,9 MN (en négligeant les pertes) : c'est le principe des formules de battage.

## La puissance
La puissance est la **vitesse** à laquelle un travail est fourni :
$$ P = W / t = F × v     (watts, W)
1 ch (cheval-vapeur) ≈ 736 W. Une puissance plus grande permet de faire le même travail **plus vite**, pas de faire plus de travail.

## Le rendement
Toute machine perd une partie de l'énergie (frottements, échauffement) :
$$ η = P(utile) / P(absorbée)     (toujours < 1)
Quand plusieurs organes se suivent (moteur, réducteur, treuil), les rendements se **multiplient** : 0,9 × 0,8 = 0,72.

> [!exemple] Monte-charge de chantier
> On monte 500 kg à 12 m en 20 s ; rendement global 0,7.
> Travail utile : W = 500 × 9,81 × 12 = **58 860 J** ; puissance utile : 58 860/20 = **2 943 W**.
> Puissance du moteur : 2 943/0,7 = **4,2 kW**.

## La puissance hydraulique d'une pompe
Pour élever un débit Q (m³/s) d'un liquide de masse volumique ρ sur une hauteur H (m) :
$$ P(hydraulique) = ρ × g × Q × H
> [!exemple] Pompe d'alimentation
> Q = 10 m³/h = 10/3 600 = 0,00278 m³/s ; H = 25 m.
> P = 1 000 × 9,81 × 0,00278 × 25 = **681 W** ; avec un rendement de 0,6, le moteur absorbe **1,14 kW**.

## Énergie consommée et coût
Énergie (kWh) = puissance (kW) × durée (h). Pour un groupe électrogène, on compte environ **0,3 L de gazole par kWh** produit (ordre de grandeur).

> [!retenir]
> - W = F d cos α ; Ep = m g h ; Ec = ½ m v².
> - P = W/t = F v ; η = P utile/P absorbée ; rendements en série : produit.
> - Pompe : P = ρ g Q H ; énergie (kWh) = P (kW) × t (h).`,
 sujet:{titre:"Travail, énergie, puissance et rendement : monte-charge et pompe de chantier", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur un chantier d'immeuble à Yopougon, on utilise un monte-charge électrique et une pompe d'alimentation en eau.

**Données** (g = 9,81 m/s²)
- Monte-charge : élève **400 kg** à **12 m** en **20 s** ; rendement global **η = 0,75** ;
- Pompe : débit **5 m³/h**, hauteur manométrique **25 m** ; rendement **0,6** ; fonctionnement **3 h/jour**, **30 jours/mois** ; prix de l'électricité **90 F/kWh** ;
- P(hydraulique) = ρ g Q H.

### Partie A — Travail et énergie (6 points)
1. Définir le travail d'une force et son unité. (2 pts)
2. Calculer le travail du poids lors de la montée de la charge et l'énergie potentielle gagnée. (4 pts)

### Partie B — Monte-charge (6 points)
3. Calculer la puissance utile. (2 pts)
4. Calculer la puissance absorbée par le moteur et les pertes. (3 pts)
5. Où passent les pertes ? (1 pt)

### Partie C — Pompe (8 points)
6. Calculer la puissance hydraulique et la puissance électrique absorbée. (4 pts)
7. Calculer l'énergie consommée par mois en kWh et son coût. (3 pts)
8. Proposer une solution pour réduire cette consommation. (1 pt)`,
  corrige:`### Partie A — Travail (6 pts)
1. Travail d'une force constante sur un déplacement : **W = F × d × cos α**, en **joules** (J). *(2 pts)*
2. Poids : 400 × 9,81 = 3 924 N ; travail du poids à la montée : − 3 924 × 12 = **− 47 088 J** (résistant) ; énergie potentielle gagnée : **+ 47 088 J ≈ 47 kJ**. *(4 pts)*

### Partie B — Monte-charge (6 pts)
3. Pu = 47 088 / 20 = **2 354 W**. *(2 pts)*
4. Pa = 2 354 / 0,75 = **3 139 W** ; pertes : **785 W**. *(3 pts)*
5. Frottements mécaniques (réducteur, poulies, guides), échauffement du moteur (effet Joule), pertes magnétiques. *(1 pt)*

### Partie C — Pompe (8 pts)
6. Q = 5 / 3 600 = 1,39 × 10⁻³ m³/s → Ph = 1 000 × 9,81 × 1,39 × 10⁻³ × 25 = **341 W** ; Pa = 341 / 0,6 = **568 W**. *(4 pts)*
7. 0,568 kW × 3 h × 30 = **51,1 kWh/mois** → **≈ 4 600 F/mois**. *(3 pts)*
8. Pompe à meilleur rendement, réservoir en hauteur rempli aux heures creuses, réduction des pertes de charge (tuyaux plus gros, moins de coudes), récupération d'eau de pluie. *(1 pt)*

> [!attention] Erreurs à éviter
> - Confondre énergie (J, kWh) et puissance (W).
> - Diviser par le rendement au lieu de multiplier (ou l'inverse) : la puissance absorbée est toujours la plus grande.
> - Oublier de convertir les m³/h en m³/s.`},
 exercices:[
  {t:"Monter un seau de mortier", d:1, e:`Un manœuvre monte un seau de mortier de 30 kg au 3ᵉ étage (9 m) à l'aide d'une poulie.
Calculer le travail fourni contre la pesanteur. Combien de seaux faut-il monter pour atteindre 1 kWh ?`, c:`W = 30 × 9,81 × 9 = **2 649 J**.
1 kWh = 3 600 000 J → 3 600 000/2 649 ≈ **1 359 seaux** : une machine électrique fait ce travail pour quelques dizaines de francs.`},
  {t:"Puissance d'un monte-charge", d:2, e:`Un monte-charge élève 800 kg de matériaux à 15 m en 30 s. Son rendement global est 0,75.
Calculer le travail utile, la puissance utile et la puissance absorbée par le moteur.`, c:`W = 800 × 9,81 × 15 = **117 720 J**.
P utile = 117 720/30 = **3 924 W**.
P absorbée = 3 924/0,75 = **5 232 W** ≈ 5,2 kW.`},
  {t:"Épuisement d'une fouille", d:2, e:`Une fouille contient 40 m³ d'eau qu'il faut relever de 6 m. La pompe absorbe 1 kW avec un rendement de 0,5.
Combien de temps faut-il pour vider la fouille ?`, c:`Énergie utile : E = ρ g V H = 1 000 × 9,81 × 40 × 6 = **2 354 400 J**.
Puissance utile : 1 000 × 0,5 = **500 W**.
t = 2 354 400/500 = 4 709 s ≈ **78 min** (1 h 18 min), sans compter les venues d'eau pendant le pompage.`},
  {t:"Battage d'un pieu", d:2, e:`Un mouton de 3 t tombe de 1,2 m sur la tête d'un pieu.
a) Calculer l'énergie et la vitesse à l'impact.
b) Le pieu s'enfonce de 2 cm par coup : estimer la force moyenne de résistance du sol (pertes négligées).`, c:`a) E = 3 000 × 9,81 × 1,2 = **35 316 J** ≈ 35,3 kJ ; v = √(2 × 9,81 × 1,2) = **4,85 m/s**.
b) F × 0,02 = 35 316 → F ≈ **1,77 MN** (1 770 kN). En réalité une partie de l'énergie est perdue (rebond, chaleur), d'où les coefficients des formules de battage.`},
  {t:"Groupe électrogène d'une bétonnière", d:1, e:`Une bétonnière de 2,2 kW fonctionne 6 h par jour pendant 22 jours, alimentée par un groupe électrogène qui consomme 0,3 L de gazole par kWh.
Calculer l'énergie consommée et le volume de gazole.`, c:`E = 2,2 × 6 × 22 = **290,4 kWh**.
Gazole : 290,4 × 0,3 ≈ **87 L** pour le mois.`}
 ],
 quiz:[
  {q:"L'énergie potentielle d'une masse m à la hauteur h vaut :", o:["m g h","½ m v²","m v","m h"], r:0, e:"Énergie de position."},
  {q:"Une force perpendiculaire au déplacement :", o:["Ne travaille pas","Travaille au maximum","Travaille négativement","Double le travail"], r:0, e:"cos 90° = 0."},
  {q:"La puissance s'exprime en :", o:["Watts","Joules","Newtons","kWh"], r:0, e:"1 W = 1 J/s."},
  {q:"Deux organes de rendements 0,9 et 0,8 en série ont un rendement global de :", o:["0,72","1,7","0,85","0,1"], r:0, e:"Les rendements se multiplient."},
  {q:"Puissance hydraulique d'une pompe :", o:["ρ g Q H","ρ Q","g H","Q/H"], r:0, e:"Débit × poids volumique × hauteur."}
 ]},

{id:"sp-5", niv:2, titre:"Courant alternatif monophasé et installation électrique d'un logement", duree:55, contenu:`## Le courant alternatif sinusoïdal
Le réseau électrique fournit une tension **alternative sinusoïdale** : u(t) = Û sin(ω t).
- Fréquence **f = 50 Hz** (période T = 1/50 = 20 ms) ; ω = 2π f = 314 rad/s.
- **Valeur efficace** : c'est elle que l'on annonce (230 V) et qu'affiche un voltmètre. U = Û/√2 → la tension crête vaut 230 × √2 ≈ **325 V**.
- La valeur efficace produit le même échauffement qu'une tension continue de même valeur.

## Récepteurs et déphasage
- **Résistif** (radiateur, chauffe-eau, lampe à incandescence) : le courant est en phase avec la tension.
- **Inductif** (moteurs, climatiseurs, pompes, tubes fluorescents à ballast) : le courant est **en retard** sur la tension d'un angle φ.
- **Capacitif** (condensateurs) : le courant est en avance.
Le **facteur de puissance** cos φ vaut 1 pour un récepteur résistif et 0,7 à 0,9 pour un moteur.

## Les trois puissances
$$ puissance active : P = U × I × cos φ     (W)
$$ puissance réactive : Q = U × I × sin φ     (var)
$$ puissance apparente : S = U × I     (VA)     avec S² = P² + Q²
La puissance **active** est celle qui produit du travail ou de la chaleur et que facture le distributeur ; la puissance **apparente** dimensionne les câbles et les protections (le courant circule même pour la part réactive).

> [!exemple] Moteur de pompe
> Sous 230 V, il absorbe 8 A avec cos φ = 0,8.
> S = 230 × 8 = **1 840 VA** ; P = 1 840 × 0,8 = **1 472 W** ; Q = 1 840 × 0,6 = **1 104 var**.

## L'installation électrique d'un logement
La norme NF C 15-100, utilisée comme référence en Côte d'Ivoire, organise l'installation :
1. **Branchement** et compteur du distributeur, puis **disjoncteur de branchement** (calibré selon la puissance souscrite) ;
2. **Tableau de répartition** avec des **interrupteurs différentiels 30 mA** (protection des personnes) ;
3. **Circuits spécialisés**, chacun protégé par un disjoncteur adapté à la section de ses conducteurs ;
4. **Prise de terre** et liaison équipotentielle reliant toutes les masses métalliques.

| Circuit | Section cuivre | Disjoncteur |
|---|---|---|
| Éclairage | 1,5 mm² | 16 A |
| Prises de courant | 2,5 mm² | 20 A |
| Chauffe-eau, climatiseur | 2,5 mm² | 20 A |
| Cuisinière, plaque de cuisson | 6 mm² | 32 A |

## Le bilan de puissance
On additionne les puissances des appareils, puis on applique un **coefficient de simultanéité** (tous les appareils ne fonctionnent pas en même temps : 0,5 à 0,8 pour un logement). Le résultat donne le courant d'emploi et la **puissance à souscrire**.

> [!exemple] Petit logement
> Éclairage 10 × 15 W = 150 W ; 2 climatiseurs de 1 200 W ; réfrigérateur 150 W ; téléviseur 100 W ; fer à repasser 1 000 W ; prises diverses 500 W.
> Puissance installée : **4 300 W** ; avec une simultanéité de 0,6 : 2 580 W → I = 2 580/230 = **11,2 A** : un abonnement de 15 A convient.

## Améliorer le facteur de puissance
Un mauvais cos φ augmente le courant pour une même puissance active : câbles plus gros, pertes plus élevées, pénalités pour les gros consommateurs. On installe des **condensateurs** qui fournissent la puissance réactive des moteurs : Q(condensateurs) = P × (tan φ₁ − tan φ₂).

> [!retenir]
> - 230 V efficace, 325 V crête, 50 Hz.
> - P = U I cos φ (W) ; Q = U I sin φ (var) ; S = U I (VA).
> - Logement : différentiel 30 mA, circuits spécialisés, terre ; 1,5 mm²/16 A éclairage, 2,5 mm²/20 A prises.
> - Bilan : somme des puissances × simultanéité → courant et abonnement.`,
 sujet:{titre:"Courant alternatif monophasé : puissances d'un climatiseur et installation d'un logement", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous vérifiez l'installation électrique d'un appartement à Marcory (réseau **230 V – 50 Hz**).

**Données**
- Climatiseur : puissance active **1 500 W**, facteur de puissance **cos φ = 0,85** ;
- Autres appareils (cos φ ≈ 1) : chauffe-eau **1 500 W**, éclairage **400 W**, réfrigérateur et prises **1 200 W** ;
- Consommation mensuelle relevée : **250 kWh** ; prix moyen **90 F/kWh**.

### Partie A — Le courant alternatif (5 points)
1. Que signifient 230 V et 50 Hz ? Calculer la période. (3 pts)
2. Quelle est la valeur maximale de la tension (Umax = U √2) ? (2 pts)

### Partie B — Puissances du climatiseur (8 points)
3. Calculer l'intensité absorbée par le climatiseur. (2 pts)
4. Calculer la puissance apparente et la puissance réactive. (4 pts)
5. Pourquoi un mauvais facteur de puissance coûte-t-il cher aux installations ? (2 pts)

### Partie C — Le logement (7 points)
6. Calculer la puissance active totale et l'intensité totale (en prenant cos φ ≈ 1 pour le total, par simplification). (3 pts)
7. Choisir un calibre de disjoncteur de branchement (10, 15, 20 ou 30 A). (2 pts)
8. Calculer le montant de la facture mensuelle. (2 pts)`,
  corrige:`### Partie A — Alternatif (5 pts)
1. **230 V** : tension **efficace** (celle qui produit le même échauffement qu'une tension continue de 230 V) ; **50 Hz** : 50 alternances complètes par seconde ; période T = 1 / 50 = **0,02 s = 20 ms**. *(3 pts)*
2. Umax = 230 × √2 = **325 V**. *(2 pts)*

### Partie B — Climatiseur (8 pts)
3. I = P / (U cos φ) = 1 500 / (230 × 0,85) = **7,67 A**. *(2 pts)*
4. S = U × I = 230 × 7,67 = **1 765 VA** ; Q = √(S² − P²) = S sin φ = **930 var**. *(4 pts)*
5. Pour une même puissance utile, le courant est plus fort : câbles plus gros, pertes par effet Joule et chutes de tension plus importantes ; les distributeurs pénalisent les gros consommateurs. *(2 pts)*

### Partie C — Logement (7 pts)
6. P = 1 500 + 1 500 + 400 + 1 200 = **4 600 W** → I ≈ 4 600 / 230 = **20 A** (un peu plus avec le cos φ du climatiseur). *(3 pts)*
7. Tous les appareils ne fonctionnent pas en même temps (simultanéité ≈ 0,7 → 14 A) : **20 A** convient ; **30 A** si l'on ajoute un second climatiseur. *(2 pts)*
8. 250 × 90 = **22 500 F** (hors taxes et abonnement). *(2 pts)*

> [!attention] Erreurs à éviter
> - Calculer l'intensité d'un moteur sans le facteur de puissance.
> - Confondre W, VA et var.
> - Dimensionner le disjoncteur sur la somme brute des puissances sans réfléchir à la simultanéité.`},
 exercices:[
  {t:"Valeur efficace et période", d:1, e:`Un oscilloscope montre une tension sinusoïdale de valeur maximale 325 V et de fréquence 50 Hz.
Calculer la valeur efficace et la période.`, c:`U = 325/√2 = **230 V** ; T = 1/50 = 0,02 s = **20 ms**.`},
  {t:"Puissances d'un moteur", d:2, e:`Un moteur monophasé absorbe 8 A sous 230 V avec un facteur de puissance de 0,8.
Calculer S, P et Q. Quelle serait l'intensité pour la même puissance active avec cos φ = 1 ?`, c:`S = 230 × 8 = **1 840 VA** ; P = 1 840 × 0,8 = **1 472 W** ; sin φ = √(1 − 0,64) = 0,6 → Q = **1 104 var**.
Avec cos φ = 1 : I = 1 472/230 = **6,4 A** au lieu de 8 A.`},
  {t:"Bilan de puissance d'une villa", d:2, e:`Une villa comprend : éclairage 20 × 12 W ; 3 climatiseurs de 1 500 W ; un congélateur de 200 W ; un réfrigérateur de 150 W ; une machine à laver de 2 000 W ; un chauffe-eau de 1 500 W ; prises diverses 800 W.
Calculer la puissance installée, la puissance appelée (simultanéité 0,6) et le courant correspondant sous 230 V.`, c:`Installée : 240 + 4 500 + 200 + 150 + 2 000 + 1 500 + 800 = **9 390 W**.
Appelée : 9 390 × 0,6 = **5 634 W** → I = 5 634/230 = **24,5 A** : abonnement de l'ordre de 25 à 30 A, ou passage en triphasé si d'autres usages s'ajoutent.`},
  {t:"Consommation mensuelle", d:1, e:`Dans le logement de l'exemple du cours, on estime : climatiseurs 2 × 1,2 kW pendant 8 h/jour ; réfrigérateur 150 W fonctionnant la moitié du temps ; téléviseur 100 W pendant 5 h/jour.
Calculer la consommation sur 30 jours.`, c:`Climatiseurs : 2 × 1,2 × 8 × 30 = **576 kWh**.
Réfrigérateur : 0,15 × 24 × 0,5 × 30 = **54 kWh**.
Téléviseur : 0,1 × 5 × 30 = **15 kWh**.
Total : **645 kWh** par mois ; la climatisation en représente près de 90 %.`},
  {t:"Relever le facteur de puissance d'un atelier", d:3, e:`Un atelier monophasé 230 V absorbe P = 10 kW avec cos φ = 0,7.
a) Calculer le courant.
b) Quelle puissance réactive doivent fournir des condensateurs pour relever cos φ à 0,93 ? Quel est alors le courant ?`, c:`a) I = 10 000/(230 × 0,7) = **62,1 A**.
b) tan φ₁ = 1,020 ; tan φ₂ = 0,395 → Q = 10 × (1,020 − 0,395) = **6,25 kvar**.
Nouveau courant : 10 000/(230 × 0,93) = **46,8 A** (− 25 %) : câbles moins chargés et pertes réduites.`}
 ],
 quiz:[
  {q:"La tension crête du réseau 230 V vaut environ :", o:["325 V","230 V","400 V","163 V"], r:0, e:"230 × √2."},
  {q:"La puissance active s'exprime en :", o:["W","VA","var","A"], r:0, e:"P = U I cos φ."},
  {q:"Un circuit de prises de courant se câble généralement en :", o:["2,5 mm² protégé par 20 A","1,5 mm² protégé par 32 A","0,75 mm²","6 mm² protégé par 10 A"], r:0, e:"Section et calibre sont liés."},
  {q:"Le différentiel 30 mA protège :", o:["Les personnes","Uniquement les câbles","Le compteur","Les moteurs"], r:0, e:"Il détecte les fuites de courant."},
  {q:"Un mauvais cos φ entraîne :", o:["Un courant plus élevé pour la même puissance active","Une baisse de tension réseau","Moins de pertes","Aucun effet"], r:0, e:"I = P/(U cos φ)."}
 ]},

{id:"sp-14", niv:2, titre:"Atomes, molécules et réactions chimiques : la chimie de la chaux", duree:50, contenu:`## L'atome et les éléments
Toute matière est faite d'**atomes**. Un atome comprend un **noyau** (protons chargés +, neutrons neutres) entouré d'**électrons** (chargés −). Le nombre de protons Z définit l'**élément chimique**.

Éléments les plus présents dans les matériaux de construction :
| Élément | Symbole | Masse molaire (g/mol) | Où le trouve-t-on ? |
|---|---|---|---|
| Hydrogène | H | 1 | Eau |
| Carbone | C | 12 | Calcaire, bois, CO₂ |
| Oxygène | O | 16 | Presque partout |
| Sodium | Na | 23 | Sel marin |
| Aluminium | Al | 27 | Argiles, ciment |
| Silicium | Si | 28 | Sable (quartz), ciment |
| Soufre | S | 32 | Gypse, sulfates |
| Chlore | Cl | 35,5 | Eau de mer, chlorures |
| Calcium | Ca | 40 | Calcaire, chaux, ciment |
| Fer | Fe | 56 | Acier, rouille |

## Molécules, ions et formules
Les atomes s'assemblent en **molécules** (H₂O, CO₂) ou en cristaux d'**ions** (Na⁺ Cl⁻). La formule indique la composition :
| Formule | Nom | Rôle |
|---|---|---|
| CaCO₃ | carbonate de calcium | calcaire, marbre |
| CaO | oxyde de calcium | chaux vive |
| Ca(OH)₂ | hydroxyde de calcium | chaux éteinte, portlandite du béton |
| SiO₂ | silice | sable, quartz |
| CaSO₄·2H₂O | sulfate de calcium dihydraté | gypse |
| Fe₂O₃ | oxyde de fer | rouille |

## La mole et la masse molaire
La **mole** est un « paquet » de 6,02 × 10²³ entités. La **masse molaire** M d'une molécule est la somme des masses molaires de ses atomes :
- CaCO₃ : 40 + 12 + 3 × 16 = **100 g/mol** ;
- CaO : 40 + 16 = **56 g/mol** ; CO₂ : 12 + 32 = **44 g/mol** ;
- Ca(OH)₂ : 40 + 2 × (16 + 1) = **74 g/mol** ; H₂O : **18 g/mol**.
Nombre de moles : **n = m/M**.

## L'équation chimique
Une réaction chimique transforme des **réactifs** en **produits**. Rien ne se perd, rien ne se crée (Lavoisier) : on **équilibre** l'équation pour avoir le même nombre d'atomes de chaque élément de part et d'autre.
Exemple, combustion du butane (gaz des chalumeaux) : **2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O**.

## Le cycle de la chaux
1. **Calcination** du calcaire vers 900 °C : CaCO₃ → CaO + CO₂
2. **Extinction** de la chaux vive (réaction très exothermique, dangereuse pour les yeux et la peau) : CaO + H₂O → Ca(OH)₂
3. **Carbonatation** de la chaux aérienne dans le mortier, au contact de l'air : Ca(OH)₂ + CO₂ → CaCO₃ + H₂O
On revient au calcaire de départ : c'est pourquoi un enduit à la chaux durcit lentement « à l'air ».

> [!exemple] Bilan de matière de la calcination
> 100 g de CaCO₃ (1 mol) donnent 56 g de CaO et 44 g de CO₂.
> Pour 1 t de calcaire pur : **560 kg de chaux vive** et **440 kg de CO₂** rejetés.

## Application : le CO₂ du ciment
Le clinker contient environ 65 % de CaO, qui provient de la décarbonatation du calcaire. Pour 1 t de clinker : 650 × 44/56 ≈ **510 kg de CO₂** issus de la seule réaction chimique, auxquels s'ajoutent les émissions du combustible du four. Remplacer une partie du clinker par du calcaire broyé, des cendres volantes ou du laitier (ciments CEM II, CEM III) réduit l'empreinte carbone du béton.

> [!retenir]
> - n = m/M ; CaCO₃ = 100 ; CaO = 56 ; CO₂ = 44 ; Ca(OH)₂ = 74 ; H₂O = 18 g/mol.
> - On équilibre les équations (conservation des atomes et de la masse).
> - Cycle de la chaux : calcination → extinction → carbonatation.
> - 1 t de calcaire → 560 kg CaO + 440 kg CO₂.`,
 sujet:{titre:"Atomes, molécules et réactions : le cycle de la chaux, de la carrière au mortier", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une petite unité de production de chaux est envisagée près d'une carrière de calcaire. Vous étudiez la chimie du cycle de la chaux.

**Données**
- Masses molaires (g/mol) : Ca = **40** ; C = **12** ; O = **16** ; H = **1** ;
- Calcination : CaCO₃ → CaO + CO₂ ;
- Extinction : CaO + H₂O → Ca(OH)₂ ;
- Carbonatation : Ca(OH)₂ + CO₂ → CaCO₃ + H₂O ;
- Numéro atomique du calcium : **Z = 20**.

### Partie A — Atomes et molécules (5 points)
1. Combien de protons et d'électrons possède un atome de calcium ? Quel ion forme-t-il facilement ? (3 pts)
2. Calculer les masses molaires de CaCO₃, CaO, CO₂, H₂O et Ca(OH)₂. (2 pts)

### Partie B — Calcination (6 points)
3. Vérifier que l'équation de calcination est équilibrée. (1 pt)
4. Calculer la masse de chaux vive et de CO₂ obtenues à partir de **1 t** de calcaire pur. (4 pts)
5. Pourquoi la fabrication de la chaux (et du ciment) émet-elle beaucoup de CO₂ ? (1 pt)

### Partie C — Extinction et carbonatation (9 points)
6. Calculer la masse d'eau nécessaire pour éteindre la chaux vive obtenue et la masse de chaux éteinte. (4 pts)
7. Pourquoi l'extinction est-elle dangereuse ? Précautions. (2 pts)
8. Expliquer le durcissement d'un mortier de chaux à l'air. Pourquoi est-il lent ? (3 pts)`,
  corrige:`### Partie A — Atomes (5 pts)
1. Z = 20 : **20 protons** et **20 électrons** ; il perd facilement 2 électrons → ion **Ca²⁺**. *(3 pts)*
2. CaCO₃ = 40 + 12 + 48 = **100** ; CaO = **56** ; CO₂ = **44** ; H₂O = **18** ; Ca(OH)₂ = 40 + 2 × 17 = **74 g/mol**. *(2 pts)*

### Partie B — Calcination (6 pts)
3. À gauche : 1 Ca, 1 C, 3 O ; à droite : 1 Ca + 1 C + 1 O + 2 O = 3 O ✔. *(1 pt)*
4. 1 t = 10⁶ g / 100 = 10 000 mol → CaO : 10 000 × 56 = **560 kg** ; CO₂ : 10 000 × 44 = **440 kg** (conservation : 560 + 440 = 1 000 ✔). *(4 pts)*
5. La **décomposition** du calcaire libère elle-même du CO₂ (44 % de la masse), en plus du CO₂ du combustible de cuisson. *(1 pt)*

### Partie C — Extinction et carbonatation (9 pts)
6. 10 000 mol de CaO réagissent avec 10 000 mol d'eau = **180 kg** → Ca(OH)₂ : **740 kg** (560 + 180). *(4 pts)*
7. La réaction est très **exothermique** (l'eau peut bouillir et projeter de la chaux caustique) : lunettes, gants, manches longues, ajouter la chaux à l'eau progressivement, rincer abondamment en cas de projection. *(2 pts)*
8. La chaux éteinte réagit avec le **CO₂ de l'air** et redevient du calcaire (carbonatation) ; la réaction progresse lentement depuis la surface, car le CO₂ doit diffuser dans le mortier (des semaines à des mois). *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier les coefficients et les indices dans le calcul des masses molaires.
> - Croire que la masse « disparaît » à la cuisson : elle part en CO₂.
> - Manipuler la chaux vive sans protection.`},
 exercices:[
  {t:"Masses molaires", d:1, e:`Calculer les masses molaires de : a) Ca(OH)₂ ; b) CaSO₄·2H₂O (gypse) ; c) Fe₂O₃ ; d) SiO₂.`, c:`a) 40 + 2 × 17 = **74 g/mol**.
b) 40 + 32 + 4 × 16 + 2 × 18 = **172 g/mol**.
c) 2 × 56 + 3 × 16 = **160 g/mol**.
d) 28 + 2 × 16 = **60 g/mol**.`},
  {t:"Équilibrer des équations", d:1, e:`Équilibrer : a) Fe + O₂ → Fe₂O₃ ; b) Al + O₂ → Al₂O₃ ; c) CH₄ + O₂ → CO₂ + H₂O.`, c:`a) **4 Fe + 3 O₂ → 2 Fe₂O₃** (4 Fe et 6 O de chaque côté).
b) **4 Al + 3 O₂ → 2 Al₂O₃**.
c) **CH₄ + 2 O₂ → CO₂ + 2 H₂O** (1 C, 4 H, 4 O de chaque côté).`},
  {t:"Production de chaux vive", d:2, e:`Un four à chaux calcine 5 t de calcaire pur par jour.
Quelle masse de chaux vive produit-il ? Quelle masse de CO₂ rejette-t-il ?`, c:`n(CaCO₃) = 5 × 10⁶/100 = 5 × 10⁴ mol → même nombre de moles de CaO et de CO₂.
CaO : 5 × 10⁴ × 56 = 2,8 × 10⁶ g = **2,8 t** ; CO₂ : 5 × 10⁴ × 44 = **2,2 t**.
Vérification : 2,8 + 2,2 = 5 t ✓ (conservation de la masse).`},
  {t:"Extinction de la chaux", d:2, e:`On éteint 1 t de chaux vive CaO.
a) Quelle masse d'eau est consommée par la réaction ?
b) Quelle masse de chaux éteinte obtient-on ?
c) Quelle masse de CO₂ cette chaux absorbera-t-elle en se carbonatant entièrement dans un enduit ?`, c:`a) 56 g de CaO réagissent avec 18 g d'eau → 1 000 × 18/56 = **321 kg** d'eau (en pratique on en met plus car la réaction en vaporise une partie).
b) 1 000 + 321 = **1 321 kg** de Ca(OH)₂.
c) 74 g de Ca(OH)₂ absorbent 44 g de CO₂ → 1 321 × 44/74 = **786 kg** de CO₂ (soit 1 000 × 44/56 : on récupère exactement le CO₂ émis à la calcination).`},
  {t:"CO₂ de décarbonatation d'un sac de ciment", d:3, e:`Un ciment CEM II contient 80 % de clinker, lui-même composé à 65 % de CaO.
Calculer le CO₂ issu de la décarbonatation pour un sac de 50 kg, puis pour 1 m³ de béton dosé à 350 kg/m³.`, c:`Clinker dans le sac : 50 × 0,80 = 40 kg → CaO : 40 × 0,65 = **26 kg**.
CO₂ : 26 × 44/56 = **20,4 kg** par sac.
Pour 350 kg de ciment (7 sacs) : 7 × 20,4 = **143 kg** de CO₂ par m³, sans compter le combustible du four ni le transport.`}
 ],
 quiz:[
  {q:"Masse molaire de CaCO₃ :", o:["100 g/mol","56 g/mol","44 g/mol","74 g/mol"], r:0, e:"40 + 12 + 48."},
  {q:"La calcination du calcaire produit :", o:["CaO + CO₂","Ca(OH)₂","CaSO₄","CaCO₃ + H₂O"], r:0, e:"Vers 900 °C."},
  {q:"La chaux éteinte a pour formule :", o:["Ca(OH)₂","CaO","CaCO₃","CaCl₂"], r:0, e:"Hydroxyde de calcium."},
  {q:"Un enduit à la chaux aérienne durcit par :", o:["Carbonatation au contact de l'air","Hydratation sous l'eau","Cuisson","Évaporation seule"], r:0, e:"Ca(OH)₂ + CO₂ → CaCO₃ + H₂O."},
  {q:"Loi de Lavoisier :", o:["La masse se conserve dans une réaction","La masse double","Les atomes disparaissent","Le volume se conserve toujours"], r:0, e:"Rien ne se perd, rien ne se crée."}
 ]},

{id:"sp-15", niv:2, titre:"Acides, bases et pH : eaux et sols agressifs pour le béton", duree:45, contenu:`## Solutions acides, basiques et neutres
L'eau contient toujours un peu d'ions H₃O⁺ (acides) et HO⁻ (basiques). Le **pH** mesure l'acidité :
$$ pH = − log [H₃O⁺]     ([H₃O⁺] en mol/L)
- pH < 7 : solution **acide** ; pH = 7 : **neutre** (à 25 °C) ; pH > 7 : **basique**.
- Une unité de pH correspond à un **facteur 10** : une eau de pH 4 est 100 fois plus acide qu'une eau de pH 6.
- Diluer 10 fois un acide fait monter son pH d'environ une unité.

| Milieu | pH |
|---|---|
| Acide de batterie | 0 à 1 |
| Pluie (CO₂ dissous) | 5,5 à 6 |
| Eau potable | 6,5 à 8,5 |
| Eau de mer | ≈ 8,2 |
| Béton carbonaté | ≈ 9 |
| Solution interstitielle d'un béton sain | 12,5 à 13,5 |
| Chaux, soude | 12 à 14 |

## Le béton, un milieu très basique
L'hydratation du ciment produit de la **portlandite** Ca(OH)₂ : la solution des pores du béton a un pH d'environ 13. Ce milieu basique **protège les armatures** (formation d'un film passif). Mais il rend aussi le béton **sensible aux acides**, qui dissolvent la pâte de ciment :
$$ Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O
C'est pourquoi on ne nettoie un parement ou un carrelage à l'acide chlorhydrique que très dilué, après avoir mouillé le support et en rinçant abondamment.

## La neutralisation
Un acide et une base réagissent pour donner un **sel** et de l'**eau** : HCl + NaOH → NaCl + H₂O. À l'équivalence, les quantités d'ions H₃O⁺ et HO⁻ sont égales.

## Les eaux et sols agressifs
Certains milieux attaquent le béton :
- **Eaux acides** : eaux de marais, de lagune, de tourbières, eaux chargées en CO₂ agressif, effluents industriels ;
- **Sulfates** (sols gypseux, eaux de mer, eaux usées) : ils réagissent avec les aluminates du ciment et forment de l'**ettringite secondaire**, expansive, qui fait gonfler et éclater le béton ;
- **Chlorures** (eau de mer, embruns sur le littoral) : peu agressifs pour la pâte, mais ils détruisent la protection des armatures.

La norme NF EN 206 classe les attaques chimiques en trois classes d'exposition :
| Classe | pH de l'eau | Sulfates dans l'eau (mg/L) | Exigences minimales du béton |
|---|---|---|---|
| XA1 (faible) | 6,5 à 5,5 | 200 à 600 | E/C ≤ 0,55 ; C30/37 ; 300 kg/m³ |
| XA2 (modérée) | 5,5 à 4,5 | 600 à 3 000 | E/C ≤ 0,50 ; C30/37 ; 320 kg/m³ ; ciment résistant aux sulfates |
| XA3 (forte) | 4,5 à 4,0 | 3 000 à 6 000 | E/C ≤ 0,45 ; C35/45 ; 360 kg/m³ ; ciment résistant aux sulfates |
La classe retenue est la plus sévère des critères mesurés. On utilise des ciments « PM » (prise mer) ou « ES » (eaux sulfatées) en milieu marin ou sulfaté.

## L'eau de gâchage
L'eau de gâchage doit être propre. La norme NF EN 1008 fixe notamment : **pH ≥ 4**, sulfates ≤ 2 000 mg/L, chlorures ≤ 1 000 mg/L pour le béton armé (≤ 500 mg/L pour le précontraint, ≤ 4 500 mg/L pour le béton non armé). L'eau du réseau public convient sans essai ; l'**eau de mer est interdite** pour le béton armé.

## Mesurer le pH sur chantier
- **Papier pH** : rapide, précision d'une unité ;
- **pH-mètre** : précis, à étalonner ;
- **Phénolphtaléine** : pulvérisée sur une cassure fraîche de béton, elle devient **rose** si pH > 9 (béton sain) et reste incolore sur la zone carbonatée.

> [!retenir]
> - pH = − log[H₃O⁺] ; 1 unité = facteur 10 ; béton sain pH ≈ 13.
> - Les acides dissolvent la pâte ; les sulfates la font gonfler ; les chlorures attaquent les aciers.
> - Classes XA1 à XA3 : E/C plus faible, plus de ciment, ciment résistant aux sulfates.
> - Eau de gâchage : pH ≥ 4 ; chlorures ≤ 1 000 mg/L pour le BA ; pas d'eau de mer.`,
 sujet:{titre:"Acides, bases et pH : eaux agressives et protection du béton", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une station de pompage doit être construite en zone de mangrove à Port-Bouët. L'analyse de l'eau de la nappe révèle une eau agressive.

**Données**
- pH de l'eau de nappe : **5,5** ; pH d'un béton sain : **≈ 13** ; pH = − log [H₃O⁺] ;
- Teneur en sulfates de l'eau : élevée ;
- Neutralisation : Ca(OH)₂ + 2 HCl → CaCl₂ + 2 H₂O ; M(Ca(OH)₂) = **74 g/mol** ;
- Un effluent industriel contient **10⁻³ mol/L** d'ions H₃O⁺.

### Partie A — pH (7 points)
1. Définir acide, base et pH ; situer l'eau pure, l'eau de nappe et le béton sur l'échelle. (3 pts)
2. Calculer la concentration en ions H₃O⁺ de l'eau de nappe. (2 pts)
3. Combien de fois une eau de pH 4 est-elle plus acide qu'une eau de pH 6 ? (2 pts)

### Partie B — Agressivité (7 points)
4. Pourquoi une eau acide attaque-t-elle le béton ? Quel composé est dissous en premier ? (3 pts)
5. Expliquer l'action des sulfates sur le béton. (2 pts)
6. Pourquoi le pH élevé du béton protège-t-il les armatures ? (2 pts)

### Partie C — Neutralisation et protection (6 points)
7. Calculer la masse de chaux éteinte nécessaire pour neutraliser 1 m³ de l'effluent (10⁻³ mol/L d'acide fort). (3 pts)
8. Proposer trois dispositions pour construire durablement en eau agressive. (3 pts)`,
  corrige:`### Partie A — pH (7 pts)
1. **Acide** : espèce qui libère des ions H⁺ (H₃O⁺) ; **base** : espèce qui les capte (libère OH⁻) ; **pH** mesure l'acidité, de 0 à 14 : eau pure **7** (neutre) ; nappe **5,5** (acide) ; béton **13** (très basique). *(3 pts)*
2. [H₃O⁺] = 10^(−5,5) = **3,2 × 10⁻⁶ mol/L**. *(2 pts)*
3. 10⁻⁴ / 10⁻⁶ = **100 fois** plus acide (échelle logarithmique). *(2 pts)*

### Partie B — Agressivité (7 pts)
4. L'acide réagit avec les composés basiques du ciment hydraté, d'abord la **portlandite Ca(OH)₂**, puis les C-S-H : la pâte se dissout, la surface devient sableuse et poreuse. *(3 pts)*
5. Les sulfates réagissent avec les aluminates du ciment et forment de l'**ettringite** expansive : gonflement, fissuration et éclatement du béton. *(2 pts)*
6. En milieu très basique, une fine couche d'oxyde protège l'acier (**passivation**) ; si le pH baisse (carbonatation, acides), l'acier se corrode. *(2 pts)*

### Partie C — Neutralisation (6 pts)
7. 1 m³ contient 10⁻³ × 1 000 = **1 mol** de H₃O⁺ → 0,5 mol de Ca(OH)₂ → 0,5 × 74 = **37 g**. *(3 pts)*
8. **Ciment résistant** aux sulfates et aux eaux agressives (CEM III au laitier, ciment PM-ES) ; béton **compact** (dosage ≥ 350 – 400 kg/m³, E/C ≤ 0,45) ; **enrobage** de 5 cm ; **revêtement** protecteur (bitume, résine) ; drainage pour éloigner l'eau. *(3 pts)*

> [!attention] Erreurs à éviter
> - Lire le pH comme une échelle linéaire.
> - Utiliser un ciment ordinaire en milieu sulfaté.
> - Oublier que 2 HCl réagissent avec 1 Ca(OH)₂.`},
 exercices:[
  {t:"pH et concentration", d:1, e:`a) Quel est le pH d'une eau où [H₃O⁺] = 10⁻⁴ mol/L ?
b) Combien de fois une eau de pH 4 est-elle plus acide qu'une eau de pH 6 ?
c) Une solution de pH 2 est diluée 100 fois avec de l'eau pure : quel est son nouveau pH ?`, c:`a) pH = − log(10⁻⁴) = **4**.
b) 10^(6 − 4) = **100 fois**.
c) [H₃O⁺] passe de 10⁻² à 10⁻⁴ mol/L → **pH = 4**.`},
  {t:"Classer une eau souterraine", d:2, e:`Une analyse de la nappe au droit d'une station de pompage donne : pH = 5,0 ; sulfates = 800 mg/L.
Déterminer la classe d'exposition et les exigences minimales du béton des ouvrages enterrés.`, c:`pH 5,0 → entre 5,5 et 4,5 : **XA2** ; sulfates 800 mg/L → entre 600 et 3 000 : **XA2**.
Classe retenue : **XA2** → E/C ≤ 0,50 ; classe ≥ C30/37 ; ciment ≥ 320 kg/m³ ; **ciment résistant aux sulfates** ; on soigne aussi l'enrobage et la cure.`},
  {t:"Eau de gâchage d'un puits", d:1, e:`On envisage d'utiliser l'eau d'un puits proche de la côte : pH = 6,8 ; chlorures = 1 300 mg/L ; sulfates = 450 mg/L.
Peut-on l'utiliser pour un béton armé ? Pour un béton de propreté non armé ?`, c:`pH ≥ 4 ✓ ; sulfates ≤ 2 000 mg/L ✓ ; chlorures 1 300 mg/L > 1 000 mg/L → **refusée pour le béton armé** (risque de corrosion des aciers).
Pour un béton **non armé** (limite 4 500 mg/L) : **acceptable**.`},
  {t:"Neutraliser un acide de nettoyage", d:2, e:`Après un nettoyage, il reste 2 L d'acide chlorhydrique à 0,5 mol/L. On le neutralise avec de la chaux éteinte : 2 HCl + Ca(OH)₂ → CaCl₂ + 2 H₂O.
Quelle masse de chaux faut-il ?`, c:`n(HCl) = 2 × 0,5 = **1 mol** → n(Ca(OH)₂) = 1/2 = **0,5 mol**.
m = 0,5 × 74 = **37 g** de chaux éteinte (on en met un peu plus et on vérifie au papier pH).`},
  {t:"Choisir un ciment en zone lagunaire", d:3, e:`Une fondation sera exposée à une eau de lagune saumâtre de pH 6,0 contenant 1 800 mg/L de sulfates et des chlorures.
a) Déterminer la classe d'exposition chimique.
b) Quelles dispositions prendre pour le béton et les armatures ?`, c:`a) pH 6,0 → XA1 ; sulfates 1 800 mg/L → XA2. On retient la plus sévère : **XA2**.
b) Béton : E/C ≤ 0,50 ; C30/37 minimum ; ≥ 320 kg/m³ de **ciment résistant aux sulfates** (type PM-ES) ; vibration et cure soignées pour un béton compact.
Armatures : les chlorures imposent aussi une classe d'exposition **XS** (milieu marin) avec un **enrobage renforcé** (de l'ordre de 40 à 50 mm selon la classe structurale).`}
 ],
 quiz:[
  {q:"Une eau de pH 5 est :", o:["Acide","Neutre","Basique","Saline"], r:0, e:"pH < 7."},
  {q:"Le pH de la solution des pores d'un béton sain est d'environ :", o:["13","7","4","9"], r:0, e:"Grâce à la portlandite."},
  {q:"Les sulfates attaquent le béton en provoquant :", o:["Un gonflement (ettringite secondaire)","Une dissolution du sable","Un durcissement","Une carbonatation"], r:0, e:"Formation d'un produit expansif."},
  {q:"L'eau de mer pour gâcher un béton armé est :", o:["Interdite","Recommandée","Obligatoire","Sans effet"], r:0, e:"Chlorures → corrosion des aciers."},
  {q:"La phénolphtaléine devient rose sur un béton :", o:["Non carbonaté (pH > 9)","Carbonaté","Sec","Fissuré"], r:0, e:"Indicateur coloré."}
 ]},

{id:"sp-6", niv:2, titre:"Chimie des liants : plâtre, chaux et ciment", duree:55, contenu:`## Liants aériens et hydrauliques
Un **liant** est une matière qui, mélangée à l'eau, forme une pâte qui **durcit** et colle les grains entre eux.
- **Liant aérien** : durcit seulement à l'air (plâtre, chaux aérienne) ; craint l'eau.
- **Liant hydraulique** : durcit par réaction avec l'eau, même immergé (ciment, chaux hydraulique).

## Le plâtre
Le gypse naturel est cuit vers 150 °C : il perd une partie de son eau.
$$ CaSO₄·2H₂O → CaSO₄·½H₂O + 1,5 H₂O
Au gâchage, la réaction s'inverse : le plâtre reprend son eau et cristallise en aiguilles enchevêtrées. Prise **rapide** (10 à 20 min), léger gonflement, bon régulateur d'humidité, mais **sensible à l'eau** : on le réserve aux locaux secs.

## La chaux
- **Chaux aérienne** (calcaire pur) : durcit par carbonatation (voir chapitre précédent) ; enduits souples et respirants.
- **Chaux hydraulique** (calcaire argileux) : contient des silicates de calcium qui durcissent avec l'eau ; mortiers de maçonnerie et d'enduit.

## Le ciment Portland
**Fabrication** : un cru de 80 % de calcaire et 20 % d'argile est cuit à **1 450 °C** ; on obtient le **clinker**, broyé finement avec environ 5 % de gypse (régulateur de prise).

Les cimentiers notent les oxydes par une lettre : **C** = CaO, **S** = SiO₂, **A** = Al₂O₃, **F** = Fe₂O₃, **H** = H₂O.
| Constituant du clinker | Proportion | Rôle |
|---|---|---|
| C₃S (alite) | 50 à 70 % | Résistance à court terme, chaleur importante |
| C₂S (bélite) | 15 à 30 % | Résistance à long terme |
| C₃A (aluminate) | 5 à 10 % | Prise rapide, sensible aux sulfates |
| C₄AF (ferrite) | 5 à 15 % | Couleur grise, peu de résistance |

## L'hydratation du ciment
Au contact de l'eau, les silicates donnent :
$$ 2 C₃S + 6 H → C₃S₂H₃ (C-S-H) + 3 CH (portlandite)
- Les **C-S-H** (silicates de calcium hydratés) forment un gel qui enrobe les grains et donne la **résistance** ;
- La **portlandite** Ca(OH)₂ assure le **pH élevé** (≈ 13) qui protège les armatures ;
- La réaction est **exothermique** : environ 250 à 500 J par gramme de ciment selon le type.

**Prise et durcissement** : la prise (passage de pâte à solide) commence après 1 à 3 h ; le durcissement se poursuit des semaines. On caractérise le ciment par sa résistance à 28 jours : classes **32,5 – 42,5 – 52,5 MPa**, suivies de N (normal) ou R (rapide).

## Le rapport eau/ciment
La réaction chimique ne consomme qu'environ **0,25 kg d'eau par kg de ciment** ; il en faut environ 0,4 pour une hydratation complète. On met souvent davantage pour la maniabilité, mais l'eau en excès s'évapore et laisse des **pores** : le béton est moins résistant et moins durable. La formule de **Bolomey** relie résistance et dosage :
$$ fc28 = G × fce × (C/E − 0,5)
G ≈ 0,5 (granulats courants) ; fce : classe vraie du ciment ; C et E : dosages en ciment et en eau (kg/m³).

> [!exemple] Effet de l'eau ajoutée
> C = 350 kg ; ciment 42,5 ; G = 0,5.
> E = 190 L → C/E = 1,84 → fc = 0,5 × 42,5 × 1,34 = **28,5 MPa**.
> E = 210 L (20 L ajoutés « pour que ça coule mieux ») → C/E = 1,67 → fc = **24,8 MPa** : − 13 %.

## Bétonner en climat chaud
La chaleur accélère la prise et l'évaporation : risque de fissures de retrait et de béton « brûlé ». Bonnes pratiques : bétonner tôt le matin, protéger du soleil et du vent, **cure humide pendant au moins 7 jours** (arrosage, bâches, produit de cure), éviter de rajouter de l'eau sur chantier.

> [!retenir]
> - Plâtre : déshydratation puis réhydratation, prise rapide, locaux secs.
> - Clinker : C₃S, C₂S, C₃A, C₄AF ; + gypse pour régler la prise.
> - Hydratation : C-S-H (résistance) + portlandite (pH ≈ 13) + chaleur.
> - Trop d'eau = pores = béton faible : fc = G fce (C/E − 0,5).`,
 sujet:{titre:"Chimie des liants : plâtre, chaux, ciment et rôle de l'eau", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous expliquez à une équipe de chantier pourquoi les liants durcissent et pourquoi l'eau en excès est l'ennemie du béton.

**Données**
- Cuisson du gypse : CaSO₄·2H₂O → CaSO₄·½H₂O + 1,5 H₂O ; M(CaSO₄·2H₂O) = **172 g/mol** ; M(CaSO₄·½H₂O) = **145 g/mol** ;
- Hydratation du ciment : 2 C₃S + 6 H → C-S-H + 3 CH (portlandite) ;
- Le ciment n'a besoin que d'environ **25 %** de son poids d'eau pour s'hydrater ;
- Bolomey : fc28 = G × fce × (C/E − 0,5), avec G = **0,5** et fce = **45 MPa** ;
- Béton : C = **350 kg**, E = **175 L** ; variante E = **210 L**.

### Partie A — Le plâtre (5 points)
1. Calculer la masse de plâtre obtenue à partir de **1 t** de gypse et la masse d'eau évaporée. (3 pts)
2. Pourquoi le plâtre est-il réservé à l'intérieur ? (2 pts)

### Partie B — Le ciment (7 points)
3. Que sont les C-S-H et la portlandite ? Quel est leur rôle ? (3 pts)
4. Distinguer liant aérien et liant hydraulique ; classer plâtre, chaux aérienne, ciment. (2 pts)
5. Pourquoi la prise du ciment dégage-t-elle de la chaleur ? Conséquence pour les grandes masses de béton ? (2 pts)

### Partie C — L'eau (8 points)
6. Calculer l'eau strictement nécessaire à l'hydratation de 350 kg de ciment. À quoi sert le reste de l'eau ? (3 pts)
7. Calculer fc28 avec 175 L puis avec 210 L d'eau. Conclure. (4 pts)
8. Pourquoi la cure (garder le béton humide) est-elle indispensable ? (1 pt)`,
  corrige:`### Partie A — Plâtre (5 pts)
1. 1 t = 10⁶ / 172 = 5 814 mol → plâtre : 5 814 × 145 = **843 kg** ; eau évaporée : **157 kg** (15,7 %). *(3 pts)*
2. Le plâtre durci est **soluble** dans l'eau et perd sa résistance à l'humidité : intérieur sec uniquement (plaques hydrofuges dans les salles d'eau). *(2 pts)*

### Partie B — Ciment (7 pts)
3. **C-S-H** (silicates de calcium hydratés) : gel qui colle les grains, responsable de la **résistance** ; **portlandite** Ca(OH)₂ : donne au béton son **pH élevé** (protection des aciers) mais est la première attaquée par les eaux agressives. *(3 pts)*
4. **Aérien** : durcit à l'air (plâtre, chaux aérienne par carbonatation) ; **hydraulique** : durcit avec l'eau, même immergé (ciment, chaux hydraulique). *(2 pts)*
5. L'hydratation est une réaction **exothermique** : au cœur d'un grand massif, la température monte fortement → dilatation puis retrait différentiel → fissures (on bétonne par levées, on utilise des ciments à faible chaleur, on refroidit). *(2 pts)*

### Partie C — L'eau (8 pts)
6. 0,25 × 350 = **≈ 88 L** ; le reste (≈ 87 L) sert à la **maniabilité** puis s'évapore en laissant des **pores**. *(3 pts)*
7. 175 L : C/E = 2,00 → fc28 = 22,5 × 1,50 = **33,8 MPa** ; 210 L : C/E = 1,67 → fc28 = 22,5 × 1,17 = **26,3 MPa** : **− 22 %** de résistance pour 35 L d'eau en plus. *(4 pts)*
8. Le ciment a besoin d'eau pendant des jours pour s'hydrater ; un béton qui sèche trop vite reste faible en surface et **fissure** (retrait). *(1 pt)*

> [!attention] Erreurs à éviter
> - Croire que plus d'eau donne un béton plus « fort » parce qu'il est plus facile à mettre en place.
> - Utiliser du plâtre en extérieur.
> - Négliger la chaleur d'hydratation des grands volumes.`},
 exercices:[
  {t:"Cuisson du gypse", d:1, e:`On cuit 1 t de gypse pur (CaSO₄·2H₂O, M = 172 g/mol) pour obtenir du plâtre (CaSO₄·½H₂O, M = 145 g/mol).
Quelle masse de plâtre obtient-on et quelle masse d'eau est évaporée ?`, c:`Une mole de gypse donne une mole de plâtre : m = 1 000 × 145/172 = **843 kg** de plâtre.
Eau évaporée : 1 000 − 843 = **157 kg**.`},
  {t:"Eau de gâchage et porosité", d:2, e:`Un béton est dosé à 350 kg/m³ de ciment avec E/C = 0,55.
a) Quel volume d'eau de gâchage contient-il ?
b) Quelle quantité est fixée chimiquement par le ciment (0,25 kg/kg) ? Que devient le reste ?`, c:`a) E = 0,55 × 350 = **192,5 L** par m³.
b) Eau fixée : 0,25 × 350 = **87,5 L** ; reste 105 L qui s'évaporent ou restent dans les pores : autant de vides qui réduisent résistance et durabilité.`},
  {t:"Formule de Bolomey", d:2, e:`Un béton est dosé à 350 kg/m³ de ciment 42,5 (G = 0,5).
a) Calculer fc28 avec 185 L d'eau.
b) Quel rapport C/E faut-il pour obtenir 30 MPa ? Quel dosage en ciment pour 185 L d'eau ?`, c:`a) C/E = 350/185 = 1,89 → fc = 0,5 × 42,5 × (1,89 − 0,5) = **29,6 MPa**.
b) 30 = 21,25 × (C/E − 0,5) → C/E = **1,91** → C = 1,91 × 185 = **354 kg/m³**.`},
  {t:"Portlandite produite", d:2, e:`L'hydratation de l'alite s'écrit : 2 C₃S + 6 H → C₃S₂H₃ + 3 CH (C = CaO = 56 g/mol ; S = SiO₂ = 60 g/mol ; CH = Ca(OH)₂ = 74 g/mol).
Quelle masse de portlandite produit l'hydratation de 100 kg de C₃S ?`, c:`M(C₃S) = 3 × 56 + 60 = **228 g/mol**.
2 moles de C₃S (456 g) donnent 3 moles de CH (222 g) → 100 × 222/456 = **48,7 kg** de Ca(OH)₂.
C'est cette réserve basique qui protège les armatures… et que consomme la carbonatation.`},
  {t:"Échauffement d'un massif", d:3, e:`Un massif de fondation est dosé à 350 kg/m³ d'un ciment dégageant 350 J/g. Le béton a une masse volumique de 2 400 kg/m³ et une capacité thermique de 1 000 J/(kg·°C).
Estimer l'élévation de température si aucune chaleur ne s'échappe (cœur d'un gros massif). Conclure.`, c:`Chaleur par m³ : 350 000 g × 350 J/g = **122,5 MJ**.
ΔT = Q/(m c) = 122,5 × 10⁶/(2 400 × 1 000) = **51 °C**.
Avec un béton coulé à 30 °C, le cœur peut dépasser 70 °C ; l'écart avec la surface provoque des fissures. On choisit un ciment à faible chaleur d'hydratation, on refroidit les constituants et on coule par couches.`}
 ],
 quiz:[
  {q:"Le plâtre s'obtient en :", o:["Cuisant le gypse vers 150 °C","Cuisant le calcaire à 1 450 °C","Broyant du sable","Mélangeant chaux et eau"], r:0, e:"Déshydratation partielle."},
  {q:"Le constituant principal du clinker est :", o:["C₃S (alite)","C₄AF","Le gypse","Le sable"], r:0, e:"50 à 70 %."},
  {q:"Le gypse est ajouté au clinker pour :", o:["Régler la prise","Colorer le ciment","Augmenter la chaleur","Remplacer le sable"], r:0, e:"Sans lui, le C₃A ferait prendre le ciment trop vite."},
  {q:"Les C-S-H apportent :", o:["La résistance","La couleur","Le pH élevé","La prise rapide"], r:0, e:"Gel liant."},
  {q:"Ajouter de l'eau au béton sur chantier :", o:["Diminue sa résistance","Augmente sa résistance","N'a aucun effet","Accélère la prise"], r:0, e:"C/E diminue."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"sp-16", niv:3, titre:"Oxydoréduction et corrosion des armatures", duree:55, contenu:`## Oxydation et réduction
Une réaction d'**oxydoréduction** est un échange d'électrons :
- **Oxydation** = perte d'électrons : Fe → Fe²⁺ + 2 e⁻ (le fer est attaqué) ;
- **Réduction** = gain d'électrons : O₂ + 2 H₂O + 4 e⁻ → 4 HO⁻ (l'oxygène est consommé).
Le **réducteur** cède des électrons (Fe, Zn, Al) ; l'**oxydant** en capte (O₂, Cl₂, ions H⁺). Chaque couple est noté oxydant/réducteur : Fe²⁺/Fe, Zn²⁺/Zn, Cu²⁺/Cu.

## La pile électrochimique
Deux métaux différents reliés électriquement dans un électrolyte (eau salée, béton humide, sol) forment une **pile** : le métal le plus réducteur (potentiel le plus bas) s'oxyde, c'est l'**anode** ; l'autre est la **cathode**, protégée.
| Couple | Potentiel standard (V) |
|---|---|
| Mg²⁺/Mg | − 2,37 |
| Al³⁺/Al | − 1,66 |
| Zn²⁺/Zn | − 0,76 |
| Fe²⁺/Fe | − 0,44 |
| Cu²⁺/Cu | + 0,34 |
La force électromotrice d'une pile zinc-cuivre vaut 0,34 − (− 0,76) = **1,10 V**.

> [!attention] Corrosion galvanique
> Un tube en acier galvanisé raccordé directement à un tube en cuivre se corrode rapidement au raccord : l'acier zingué devient l'anode. On interpose un raccord isolant (diélectrique).

## La corrosion du fer dans le béton
Sur une armature qui rouille, des zones anodiques et cathodiques se forment :
- **Anode** : Fe → Fe²⁺ + 2 e⁻ ;
- **Cathode** : O₂ + 2 H₂O + 4 e⁻ → 4 HO⁻ ;
- Les ions se combinent en Fe(OH)₂, puis en **rouille** (Fe₂O₃·nH₂O).
La rouille occupe **2 à 6 fois le volume** de l'acier consommé : elle pousse le béton d'enrobage, qui **fissure puis éclate** (épaufrures), laissant l'acier à nu. La section d'acier diminue : la résistance de l'élément baisse.

## Pourquoi les aciers ne rouillent pas dans un béton sain
Dans un milieu de pH > 12,5, l'acier se couvre d'un **film passif** très mince qui bloque la corrosion. Deux phénomènes détruisent ce film :
1. **La carbonatation** : le CO₂ de l'air pénètre et neutralise la portlandite : Ca(OH)₂ + CO₂ → CaCO₃ + H₂O. Le pH tombe vers 9 ; quand le front de carbonatation atteint les aciers, ils se dépassivent. La profondeur carbonatée croît comme la racine du temps :
$$ x = K × √t     (K ≈ 2 à 6 mm/√an selon la qualité du béton)
2. **Les chlorures** (eau de mer, embruns, sable de mer mal lavé, eau saumâtre) : au-delà d'environ **0,4 % de la masse de ciment** au niveau des aciers, ils percent le film passif localement et provoquent une **corrosion par piqûres**, rapide et dangereuse.

> [!exemple] Enrobage et durée de vie
> Béton de qualité moyenne : K = 4 mm/√an.
> Enrobage 15 mm → le front atteint les aciers après (15/4)² ≈ **14 ans** ; enrobage 25 mm → (25/4)² ≈ **39 ans**.
> Pour 50 ans, il faut x = 4 × √50 ≈ **28 mm** d'enrobage (plus la tolérance d'exécution).

## La loi de Faraday : combien de métal est consommé ?
Une corrosion débitant un courant I pendant un temps t consomme la masse :
$$ m = M × I × t / (n × F)     (F = 96 500 C/mol ; n = 2 pour le fer)
Un courant de corrosion de 1 mA pendant 1 an consomme 56 × 0,001 × 31 536 000/(2 × 96 500) ≈ **9,2 g** de fer.

## Se protéger de la corrosion
- **Enrobage suffisant** et **béton compact** (E/C faible, bonne vibration, cure) : c'est la protection principale ;
- Limiter l'**ouverture des fissures** (calcul aux états limites de service) ;
- **Galvanisation** (zinc sacrificiel), peintures, aciers inoxydables pour les ambiances très agressives ;
- **Protection cathodique** : anodes sacrificielles en zinc ou en magnésium, ou courant imposé, qui rendent l'acier cathodique ;
- **Réparation** : dégager les aciers, les nettoyer, passiver, reconstituer l'enrobage avec un mortier adapté.

> [!retenir]
> - Oxydation = perte d'électrons ; le métal au potentiel le plus bas est l'anode et se corrode.
> - Béton sain (pH > 12,5) → acier passif ; carbonatation (x = K√t) et chlorures → corrosion.
> - La rouille gonfle : fissures, éclatement de l'enrobage, perte de section.
> - Protection : enrobage, béton compact, galvanisation, protection cathodique.`,
 sujet:{titre:"Oxydoréduction et corrosion des armatures : mécanismes, vitesse et protections", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Des poutres d'un marché couvert à Treichville (30 ans, ambiance humide et saline) présentent des aciers rouillés et du béton éclaté.

**Données**
- Demi-équations : Fe → Fe²⁺ + 2 e⁻ ; O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ ;
- Carbonatation : x = K √t, avec **K = 4 mm/√an** ; enrobage mesuré : **25 mm** ;
- Loi de Faraday : m = M × I × t / (n × F), avec M(Fe) = **55,85 g/mol**, n = **2**, F = **96 500 C/mol** ;
- Courant de corrosion mesuré sur une barre : **0,5 mA** ; 1 an ≈ **3,156 × 10⁷ s**.

### Partie A — Oxydoréduction (6 points)
1. Définir oxydation, réduction, oxydant, réducteur. (2 pts)
2. Identifier l'oxydation et la réduction dans les demi-équations ; écrire l'équation bilan de la corrosion du fer. (3 pts)
3. Pourquoi faut-il à la fois de l'eau et de l'oxygène pour que l'acier rouille ? (1 pt)

### Partie B — Pourquoi l'acier rouille dans ce béton (6 points)
4. Calculer la profondeur de carbonatation à 30 ans. Conclure. (3 pts)
5. Quel est le rôle des chlorures de l'air marin ? (2 pts)
6. Pourquoi la rouille fait-elle éclater le béton ? (1 pt)

### Partie C — Vitesse de corrosion (4 points)
7. Calculer la masse de fer perdue en 10 ans par la barre. (3 pts)
8. Pour une barre HA12 de 1 m (0,888 kg), quelle perte de masse en % ? (1 pt)

### Partie D — Protections (4 points)
9. Expliquer la galvanisation et la protection cathodique par anode sacrificielle (pourquoi le zinc protège-t-il le fer ?). (2 pts)
10. Citer trois dispositions de conception pour éviter ces désordres sur un ouvrage neuf. (2 pts)`,
  corrige:`### Partie A — Oxydoréduction (6 pts)
1. **Oxydation** : perte d'électrons ; **réduction** : gain d'électrons ; **oxydant** : espèce qui capte des électrons ; **réducteur** : espèce qui en cède. *(2 pts)*
2. Fe → Fe²⁺ + 2 e⁻ : **oxydation** du fer (réducteur) ; O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ : **réduction** du dioxygène (oxydant). Bilan : **2 Fe + O₂ + 2 H₂O → 2 Fe²⁺ + 4 OH⁻** (→ 2 Fe(OH)₂, puis rouille). *(3 pts)*
3. L'**eau** sert d'électrolyte (transport des ions) et participe à la réaction ; l'**oxygène** est l'oxydant qui capte les électrons : sans l'un ou l'autre, la réaction s'arrête. *(1 pt)*

### Partie B — Ce béton (6 pts)
4. x = 4 × √30 = **21,9 mm** : presque tout l'enrobage de 25 mm est carbonaté ; localement (enrobages plus faibles), les aciers ne sont plus protégés. *(3 pts)*
5. Les **chlorures** détruisent la couche passive même à pH élevé : corrosion par **piqûres**, rapide et localisée. *(2 pts)*
6. La rouille occupe un volume **2 à 6 fois** supérieur au fer : elle pousse le béton d'enrobage qui fissure puis éclate. *(1 pt)*

### Partie C — Vitesse (4 pts)
7. t = 10 × 3,156 × 10⁷ = 3,156 × 10⁸ s → $$ m = 55,85 × 0,0005 × 3,156 × 10⁸ / (2 × 96 500) = 45,7 g
   *(3 pts)*
8. 45,7 / 888 = **5,1 %** de la masse d'un mètre de HA12 (concentrée sur une petite zone, la perte de section locale peut être bien plus forte). *(1 pt)*

### Partie D — Protections (4 pts)
9. **Galvanisation** : revêtement de **zinc** qui isole l'acier ; le zinc, **plus réducteur** que le fer, s'oxyde à sa place (il se « sacrifie ») même si le revêtement est rayé ; même principe pour les anodes sacrificielles en zinc ou magnésium reliées aux armatures. *(2 pts)*
10. **Enrobage** suffisant (40 à 50 mm en milieu marin) bien assuré par des cales ; béton **compact** (E/C faible, dosage élevé, bonne vibration et cure) ; ciment adapté (laitier) ; limiter les fissures ; revêtements protecteurs ; sable lavé (sans sel). *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre oxydant et réducteur.
> - Oublier la conversion des mA en A et des années en secondes.
> - Réparer en rebouchant sans traiter les aciers et la cause.`},
 exercices:[
  {t:"Demi-équations", d:1, e:`a) Écrire la demi-équation d'oxydation du zinc et celle du fer.
b) Écrire la réduction du dioxygène en milieu humide.
c) Dans un couple zinc-acier, lequel s'oxyde ?`, c:`a) Zn → Zn²⁺ + 2 e⁻ ; Fe → Fe²⁺ + 2 e⁻.
b) O₂ + 2 H₂O + 4 e⁻ → 4 HO⁻.
c) Le **zinc** (− 0,76 V < − 0,44 V) : il est l'anode et protège l'acier. C'est le principe de la galvanisation.`},
  {t:"Profondeur de carbonatation", d:2, e:`Un béton a un coefficient de carbonatation K = 4 mm/√an.
a) Au bout de combien de temps les aciers sont-ils atteints avec un enrobage de 15 mm ? De 25 mm ?
b) Quel enrobage faut-il pour une durée de vie de 100 ans ?`, c:`a) t = (x/K)² : (15/4)² = **14 ans** ; (25/4)² = **39 ans**.
b) x = 4 × √100 = **40 mm** (à majorer de la tolérance d'exécution de 10 mm, ou réduire K par un béton plus compact).`},
  {t:"Masse d'acier corrodée", d:2, e:`Une armature HA 10 est le siège d'un courant de corrosion de 0,5 mA pendant 10 ans.
a) Quelle masse de fer est consommée (M = 56 g/mol ; n = 2 ; F = 96 500 C/mol) ?
b) À quelle longueur de barre cela correspond-il (0,617 kg/m) ?`, c:`a) t = 10 × 365 × 24 × 3 600 = 3,15 × 10⁸ s → m = 56 × 0,0005 × 3,15 × 10⁸/(2 × 96 500) = **45,8 g**.
b) 45,8/617 = 0,074 m soit **7,4 cm** de barre entièrement dissous… mais concentrés sur une piqûre, ils peuvent couper la barre.`},
  {t:"Associer des métaux", d:2, e:`Pour chaque assemblage en milieu humide, indiquer quel métal se corrode et la force électromotrice de la pile : a) acier et cuivre ; b) acier et zinc ; c) aluminium et cuivre.`, c:`a) Acier (− 0,44 V) anode, cuivre cathode : E = 0,34 − (− 0,44) = **0,78 V** → l'acier se corrode.
b) Zinc (− 0,76 V) anode : E = − 0,44 − (− 0,76) = **0,32 V** → le zinc se sacrifie, l'acier est protégé.
c) Aluminium anode : E = 0,34 − (− 1,66) = **2,00 V** → corrosion rapide de l'aluminium (fixations de menuiseries à surveiller).`},
  {t:"Perte de section d'une armature", d:3, e:`Une barre HA 16 a perdu 0,2 mm sur son rayon par corrosion uniforme.
a) Calculer la perte de section en %.
b) Quel volume d'acier a disparu par mètre, et quel volume de rouille s'est formé si elle occupe 3 fois le volume de l'acier ? Conclure.`, c:`a) Rayon : 8 → 7,8 mm ; perte = (8² − 7,8²)/8² = 3,16/64 = **4,9 %** de section (et de résistance).
b) Volume perdu : π × 3,16 × 1 000 = **9 930 mm³** ≈ 9,9 cm³ par mètre ; rouille : 3 × 9,9 = **29,8 cm³**, soit environ 20 cm³ de volume supplémentaire par mètre de barre : cette expansion suffit à fissurer l'enrobage, ce qui accélère encore la corrosion.`}
 ],
 quiz:[
  {q:"Une oxydation est :", o:["Une perte d'électrons","Un gain d'électrons","Un gain de protons","Une fusion"], r:0, e:"Le réducteur s'oxyde."},
  {q:"Dans un béton sain, l'acier est protégé par :", o:["Un film passif dû au pH élevé","La peinture","Le sable","Le froid"], r:0, e:"pH > 12,5."},
  {q:"La profondeur de carbonatation croît comme :", o:["√t","t","t²","1/t"], r:0, e:"x = K √t."},
  {q:"La rouille occupe un volume :", o:["2 à 6 fois plus grand que l'acier","Égal","Plus petit","Nul"], r:0, e:"D'où l'éclatement du béton."},
  {q:"La galvanisation protège l'acier parce que le zinc :", o:["S'oxyde à sa place","Est plus noble","Est isolant","Durcit l'acier"], r:0, e:"Anode sacrificielle."}
 ]},

{id:"sp-7", niv:3, titre:"Électricité avancée : triphasé, moteurs, chute de tension et protections", duree:55, contenu:`## Le réseau triphasé
Le triphasé utilise **3 phases** (L1, L2, L3) dont les tensions sont décalées de 120°, et souvent un **neutre** N.
- **Tension simple** V (entre une phase et le neutre) : **230 V** ;
- **Tension composée** U (entre deux phases) : **U = √3 × V = 400 V**.
On l'utilise pour les immeubles, ateliers, centrales à béton, grues, pompes et ascenseurs : à puissance égale, le courant par conducteur est plus faible qu'en monophasé.

## La puissance en triphasé
$$ P = √3 × U × I × cos φ     (W)      ;      S = √3 × U × I     (VA)
> [!exemple] Immeuble de 30 kW (cos φ = 0,9)
> En triphasé 400 V : I = 30 000/(1,732 × 400 × 0,9) = **48 A** par phase.
> En monophasé, il faudrait I = 30 000/(230 × 0,9) = 145 A : des câbles beaucoup plus gros.

**Équilibrage** : dans un immeuble alimenté en triphasé, on répartit les logements et les circuits sur les trois phases pour que les courants soient voisins.

## Les moteurs triphasés
- Le **couplage** dépend de la plaque signalétique : un moteur 230/400 V branché sur un réseau 400 V se couple en **étoile** (chaque enroulement reçoit 230 V).
- Rendement η = P utile (mécanique)/P absorbée (électrique) ; 0,8 à 0,95.
- Au **démarrage**, le courant atteint **5 à 7 fois** le courant nominal : les protections doivent le tolérer (disjoncteurs courbe D, démarreurs progressifs).

## La chute de tension
Le courant qui traverse un câble provoque une chute de tension. Calcul simplifié (cuivre en service, ρ = 0,0225 Ω·mm²/m) :
$$ monophasé : ΔU = 2 × ρ × L × I × cos φ / S
$$ triphasé : ΔU = √3 × ρ × L × I × cos φ / S
Limites usuelles (installation alimentée par le réseau public basse tension) : **3 % pour l'éclairage**, **5 % pour les autres usages**.

> [!exemple] Circuit de prises de 25 m en 2,5 mm² sous 20 A
> ΔU = 2 × 0,0225 × 25 × 20/2,5 = **9,0 V** soit 3,9 % : acceptable pour des prises, pas pour un circuit d'éclairage.

## Choisir la section d'un câble
Trois conditions doivent être vérifiées :
1. **Échauffement** : le courant d'emploi Ib doit rester inférieur au courant admissible Iz du câble (qui dépend du mode de pose et de la température ambiante) ;
2. **Protection** : le calibre In du disjoncteur est tel que **Ib ≤ In ≤ Iz** ;
3. **Chute de tension** : ΔU inférieure à la limite.
On calcule la section minimale pour chaque condition et on retient la plus grande **section normalisée** : 1,5 – 2,5 – 4 – 6 – 10 – 16 – 25 – 35 – 50 mm²…

## La protection des personnes et des biens
- **Disjoncteur** : protège les câbles contre les **surcharges** et les **courts-circuits**.
- **Dispositif différentiel** : compare le courant aller et retour ; il coupe en cas de **fuite à la terre** : 30 mA pour les personnes, 300 mA contre l'incendie.
- **Prise de terre** : la tension que peut prendre une masse en défaut ne doit pas dépasser 50 V : **R(terre) × IΔn ≤ 50 V**. Avec un différentiel de 500 mA, R ≤ 100 Ω ; avec 30 mA, R ≤ 1 667 Ω (on vise toujours une valeur faible).
- **Chantier** : coffret de chantier avec différentiels 30 mA, câbles souples renforcés (type H07RN-F), prises protégées, pas de rallonges enroulées sous charge.

> [!retenir]
> - U = √3 V = 400 V ; P = √3 U I cos φ.
> - Démarrage moteur : 5 à 7 In.
> - ΔU mono = 2 ρ L I cos φ/S ; tri = √3 ρ L I cos φ/S ; limites 3 % (éclairage) et 5 %.
> - Ib ≤ In ≤ Iz ; différentiel 30 mA ; R(terre) × IΔn ≤ 50 V.`,
 sujet:{titre:"Électricité avancée : moteur triphasé, chute de tension et protections", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Un chantier de bâtiment à Abobo alimente une centrale à béton (moteur triphasé) et un local de vie.

**Données**
- Réseau triphasé **400 V** entre phases (230 V phase-neutre), 50 Hz ;
- Moteur de malaxeur : puissance utile **7,5 kW**, rendement **0,88**, cos φ = **0,85** ;
- Câble du moteur : cuivre, **60 m**, section **4 mm²**, ρ = **0,017 Ω·mm²/m** ; ΔU triphasé = √3 ρ L I cos φ / S ;
- Chauffe-eau du local de vie : **3 kW** en monophasé 230 V, cos φ = 1, à **35 m** du tableau, câble de **2,5 mm²** ; ΔU monophasé = 2 ρ L I cos φ / S ;
- Chute de tension admissible : **5 %** pour les moteurs, **3 %** pour le reste (valeurs d'exercice).

### Partie A — Triphasé (4 points)
1. Quels avantages présente le triphasé pour les machines de chantier ? (2 pts)
2. Quelle relation entre la tension composée (400 V) et la tension simple (230 V) ? (2 pts)

### Partie B — Moteur (6 points)
3. Calculer la puissance absorbée. (2 pts)
4. Calculer l'intensité en ligne : P = √3 U I cos φ. (2 pts)
5. Choisir un disjoncteur moteur (calibres 10, 16, 20, 25 A) et justifier. (2 pts)

### Partie C — Chutes de tension (6 points)
6. Calculer la chute de tension dans le câble du moteur et son pourcentage. Conclure. (3 pts)
7. Calculer la chute de tension du circuit du chauffe-eau et son pourcentage. Conclure. (3 pts)

### Partie D — Protection des personnes (4 points)
8. Quel est le rôle de la mise à la terre et du différentiel 30 mA sur un chantier ? (2 pts)
9. Pourquoi utilise-t-on la très basse tension (TBTS, 12 ou 24 V) pour l'éclairage en milieu humide (fouilles, cuves) ? (2 pts)`,
  corrige:`### Partie A — Triphasé (4 pts)
1. Pour une même puissance, **courant plus faible** par conducteur (câbles plus fins), moteurs plus simples, plus robustes et à démarrage direct, puissance plus régulière. *(2 pts)*
2. **U = √3 × V** : 400 = √3 × 230. *(2 pts)*

### Partie B — Moteur (6 pts)
3. Pa = 7 500 / 0,88 = **8 523 W**. *(2 pts)*
4. I = 8 523 / (√3 × 400 × 0,85) = **14,5 A**. *(2 pts)*
5. Calibre immédiatement supérieur au courant d'emploi : **16 A** (disjoncteur moteur adapté aux pointes de démarrage). *(2 pts)*

### Partie C — Chutes de tension (6 pts)
6. $$ ΔU = √3 × 0,017 × 60 × 14,5 × 0,85 / 4 = 5,4 V
   soit 5,4 / 400 = **1,4 %** ≤ 5 % ✔. *(3 pts)*
7. I = 3 000 / 230 = **13,0 A** ; ΔU = 2 × 0,017 × 35 × 13,0 / 2,5 = **6,2 V** soit **2,7 %** ≤ 3 % ✔ (de justesse : en 4 mm², 1,7 %). *(3 pts)*

### Partie D — Protection (4 pts)
8. La **terre** évacue le courant de défaut quand une masse métallique est mise sous tension ; le **différentiel 30 mA** détecte cette fuite et coupe en quelques dizaines de millisecondes, avant qu'elle ne soit mortelle pour une personne. *(2 pts)*
9. En milieu humide, la résistance du corps chute : une tension de 230 V devient mortelle ; sous **12 ou 24 V**, le courant traversant le corps reste inoffensif. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le facteur √3 en triphasé.
> - Oublier le rendement : le moteur absorbe plus que sa puissance utile.
> - Oublier l'aller et le retour (facteur 2) en monophasé.`},
 exercices:[
  {t:"Puissance d'un moteur triphasé", d:1, e:`Un moteur de bétonnière triphasée absorbe 15 A sous 400 V avec cos φ = 0,85 ; son rendement est 0,88.
Calculer la puissance absorbée et la puissance mécanique utile.`, c:`P absorbée = 1,732 × 400 × 15 × 0,85 = **8 833 W** ≈ 8,8 kW.
P utile = 8 833 × 0,88 = **7 773 W** ≈ 7,8 kW.`},
  {t:"Alimentation d'une grue", d:2, e:`Une grue à tour absorbe 30 kW sous 400 V triphasé avec cos φ = 0,8.
a) Calculer le courant nominal.
b) Estimer le courant de démarrage (6 In) et choisir un calibre de disjoncteur standard.`, c:`a) I = 30 000/(1,732 × 400 × 0,8) = **54,1 A**.
b) Démarrage : 6 × 54,1 ≈ **325 A** pendant quelques secondes.
Calibre : **63 A** (calibre normalisé immédiatement supérieur à 54 A), en courbe D pour supporter le démarrage, avec un câble dont Iz ≥ 63 A.`},
  {t:"Chute de tension d'un circuit monophasé", d:2, e:`Un circuit monophasé 230 V de 40 m alimente des appareils résistifs absorbant 16 A (cos φ = 1).
Calculer la chute de tension en 2,5 mm², puis en 4 mm² et en 6 mm². Quelle section retenir pour un circuit de prises ? Pour un circuit d'éclairage ?`, c:`2,5 mm² : ΔU = 2 × 0,0225 × 40 × 16/2,5 = **11,5 V** soit **5,0 %**.
4 mm² : **7,2 V** soit **3,1 %** ; 6 mm² : **4,8 V** soit **2,1 %**.
Prises (limite 5 %) : **4 mm²** pour avoir une marge ; éclairage (3 %) : **6 mm²**. Sur une grande longueur, c'est la chute de tension qui impose la section.`},
  {t:"Câble d'un coffret de chantier", d:3, e:`Un coffret de chantier, situé à 80 m du tableau général, absorbe 50 A en triphasé 400 V (cos φ = 0,8). La chute de tension ne doit pas dépasser 5 %.
Déterminer la section minimale du câble en cuivre, puis la section normalisée à retenir.`, c:`ΔU max = 0,05 × 400 = **20 V**.
S ≥ √3 × 0,0225 × 80 × 50 × 0,8/20 = 124,7/20 = **6,2 mm²**.
Section normalisée : **10 mm²** (ΔU = 12,5 V soit 3,1 %) ; on vérifie aussi que Iz du câble 10 mm² dans son mode de pose est supérieur au calibre de protection (≥ 50 A).`},
  {t:"Prise de terre et différentiel", d:2, e:`a) Quelle résistance de terre maximale faut-il avec un différentiel de 30 mA ? De 500 mA ?
b) Une masse métallique en défaut laisse passer 0,5 A vers une terre de 80 Ω. Quelle tension prend-elle ? Est-ce dangereux ?`, c:`a) R ≤ 50/0,03 = **1 667 Ω** ; R ≤ 50/0,5 = **100 Ω**.
b) U = 80 × 0,5 = **40 V** < 50 V : pas dangereux en local sec, et le différentiel 30 mA a de toute façon coupé l'alimentation (0,5 A ≫ 30 mA).`}
 ],
 quiz:[
  {q:"En triphasé 230/400 V, la tension entre deux phases est :", o:["400 V","230 V","690 V","110 V"], r:0, e:"U = √3 × 230."},
  {q:"La puissance active en triphasé vaut :", o:["√3 U I cos φ","U I","3 U I","U I cos φ/√3"], r:0, e:"Formule du triphasé équilibré."},
  {q:"Le courant de démarrage d'un moteur atteint environ :", o:["5 à 7 fois In","In","0,5 In","100 fois In"], r:0, e:"Il faut des protections adaptées."},
  {q:"La chute de tension maximale conseillée pour l'éclairage est :", o:["3 %","10 %","1 %","20 %"], r:0, e:"5 % pour les autres usages."},
  {q:"Condition de protection d'un câble :", o:["Ib ≤ In ≤ Iz","In ≤ Ib ≤ Iz","Iz ≤ In","In = 2 Iz"], r:0, e:"Courant d'emploi, calibre, courant admissible."}
 ]},

{id:"sp-8", niv:3, titre:"Chaleur, changements d'état et dilatation", duree:50, contenu:`## Température et chaleur
- La **température** (°C ou K) mesure l'agitation des particules : T(K) = T(°C) + 273. Un écart de 1 °C est égal à un écart de 1 K.
- La **chaleur** Q (J) est l'énergie qui passe d'un corps chaud vers un corps froid. Les modes de transfert (conduction, convection, rayonnement) sont étudiés dans le cours de thermique.

## Chaleur et élévation de température
Pour élever de ΔT la température d'une masse m :
$$ Q = m × c × ΔT
c est la **capacité thermique massique** (J/(kg·°C)) :
| Matériau | c (J/(kg·°C)) |
|---|---|
| Eau | 4 180 |
| Air | 1 000 |
| Béton, pierre | 880 à 1 000 |
| Bois | 1 600 à 2 000 |
| Acier | 460 |
L'eau stocke beaucoup de chaleur : c'est pourquoi on l'utilise pour refroidir le béton frais ou dans les chauffe-eau solaires.

## Équilibre thermique
Quand on mélange des corps à des températures différentes (sans pertes), la chaleur cédée par les chauds est égale à la chaleur reçue par les froids : **Σ m c (T(finale) − T(initiale)) = 0**. On l'utilise pour prévoir la température d'un béton frais à partir de celles de ses constituants.

## Les changements d'état
Fusion (solide → liquide), vaporisation (liquide → gaz), et les transformations inverses se font **à température constante** et demandent une **chaleur latente** :
$$ Q = m × L
| Changement d'état | L |
|---|---|
| Fusion de la glace (0 °C) | 334 kJ/kg |
| Vaporisation de l'eau (100 °C) | 2 257 kJ/kg |
| Évaporation de l'eau vers 30 °C | ≈ 2 430 kJ/kg |

> [!exemple] Pourquoi un béton frais au soleil sèche si vite
> Un rayonnement solaire de 800 W/m² apporte 800 × 3 600 = 2,88 MJ par m² et par heure.
> S'il servait entièrement à évaporer de l'eau : 2,88/2,43 ≈ **1,2 kg d'eau par m² et par heure**.
> La surface perd son eau avant que le ciment ait pu s'hydrater : retrait plastique, fissures, surface farineuse. D'où la **cure** (bâches, arrosage, produit de cure) dès la fin du talochage.

> [!astuce] La glace pour bétonner par temps chaud
> Remplacer une partie de l'eau de gâchage par de la glace pilée est très efficace : chaque kilogramme de glace absorbe 334 kJ en fondant, soit autant que 80 kg d'eau réchauffés de 1 °C.

## La dilatation thermique
Une pièce de longueur L dont la température varie de ΔT s'allonge ou se raccourcit de :
$$ ΔL = α × L × ΔT
| Matériau | α (par °C) |
|---|---|
| Béton | 10 × 10⁻⁶ |
| Acier | 12 × 10⁻⁶ |
| Aluminium | 23 × 10⁻⁶ |
| PVC | 70 à 80 × 10⁻⁶ |
| Verre | 9 × 10⁻⁶ |
Le béton et l'acier ont presque le même coefficient : c'est ce qui permet au béton armé de fonctionner sans que les aciers se décollent.

> [!exemple] Bâtiment de 60 m de long
> Écart de température entre saisons et entre jour et nuit pour une structure exposée : ΔT ≈ 25 °C.
> ΔL = 10 × 10⁻⁶ × 60 000 mm × 25 = **15 mm**. Pour éviter les fissures, on coupe la structure par des **joints de dilatation**, en général tous les 25 à 50 m selon le climat et l'exposition.

## La dilatation empêchée crée des contraintes
Si la pièce ne peut pas se dilater librement (encastrée, frottant sur le sol), il apparaît une contrainte :
$$ σ = E × α × ΔT
Pour un béton (E = 30 000 MPa) refroidi de 15 °C et bloqué : σ = 30 000 × 10⁻⁵ × 15 = **4,5 MPa** en traction, bien plus que sa résistance à la traction (≈ 2 à 3 MPa) : il fissure. Les **joints de retrait** sciés dans les dallages tous les 4 à 5 m créent des fissures « organisées » et rectilignes.

> [!retenir]
> - Q = m c ΔT ; eau : c = 4 180 J/(kg·°C).
> - Changement d'état : Q = m L ; fusion de la glace 334 kJ/kg ; évaporation ≈ 2 430 kJ/kg.
> - ΔL = α L ΔT ; béton 10 × 10⁻⁶, acier 12 × 10⁻⁶ ; joints de dilatation.
> - Dilatation empêchée : σ = E α ΔT → fissuration → joints de retrait.`,
 sujet:{titre:"Chaleur et dilatation : chauffe-eau, séchage du béton et dalle de terrasse", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous étudiez les échanges de chaleur et les dilatations dans un immeuble à Yamoussoukro.

**Données**
- Eau : c = **4 185 J/(kg·°C)** ; chaleur latente de vaporisation L = **2 257 kJ/kg** ;
- Chauffe-eau de **200 L** porté de **25 °C** à **60 °C** ; résistance de **2 kW** ;
- Après coulage, **50 L** d'eau s'évaporent d'un m³ de béton ;
- Dalle de terrasse de **25 m** de long ; α(béton) = **10 × 10⁻⁶ /°C** ; écart de température entre la nuit et le plein soleil : **35 °C** ; E(béton) = **30 000 MPa** ; résistance en traction du béton : **≈ 2,5 MPa**.

### Partie A — Chauffe-eau (7 points)
1. Calculer l'énergie nécessaire pour chauffer l'eau (en J et en kWh). (3 pts)
2. Calculer la durée de chauffe. (2 pts)
3. Quel serait le coût de cette chauffe à **90 F/kWh** ? Quelle alternative en climat ivoirien ? (2 pts)

### Partie B — Changement d'état (4 points)
4. Calculer l'énergie absorbée par l'évaporation de l'eau d'un m³ de béton. D'où vient cette énergie ? (3 pts)
5. Pourquoi le vent et le soleil accélèrent-ils le séchage et la fissuration du béton frais ? (1 pt)

### Partie C — Dilatation (9 points)
6. Calculer la variation de longueur de la dalle. (2 pts)
7. Si la dalle était bloquée à ses extrémités, quelle contrainte apparaîtrait (σ = E α ΔT) ? Conclure. (4 pts)
8. Proposer trois dispositions pour éviter les désordres. (3 pts)`,
  corrige:`### Partie A — Chauffe-eau (7 pts)
1. Q = m c ΔT = 200 × 4 185 × 35 = **29,3 MJ** = 29,3 / 3,6 = **8,14 kWh**. *(3 pts)*
2. t = 8,14 / 2 = **4,1 h** (sans pertes). *(2 pts)*
3. 8,14 × 90 = **≈ 730 F** par chauffe ; alternative : **chauffe-eau solaire** (ensoleillement abondant). *(2 pts)*

### Partie B — Changement d'état (4 pts)
4. Q = m L = 50 × 2 257 = **112 850 kJ ≈ 113 MJ** ; elle est prise au béton et à l'air ambiant (soleil, vent) : l'évaporation **refroidit** la surface mais surtout la **dessèche**. *(3 pts)*
5. Ils augmentent l'évaporation : la surface perd son eau avant que le ciment ait durci → **retrait plastique** et fissures. D'où la **cure**. *(1 pt)*

### Partie C — Dilatation (9 pts)
6. ΔL = 10 × 10⁻⁶ × 25 000 mm × 35 = **8,75 mm**. *(2 pts)*
7. σ = 30 000 × 10 × 10⁻⁶ × 35 = **10,5 MPa** : en compression le béton résiste, mais au refroidissement c'est une **traction** de 10,5 MPa, 4 fois plus que sa résistance (2,5 MPa) → **fissures** et poussée sur les acrotères et murs. *(4 pts)*
8. **Joints de dilatation** (tous les 20 à 30 m), **isolation** et protection de la terrasse (réduisent ΔT), **désolidarisation** de l'acrotère et des murs, teinte claire, armatures de répartition. *(3 pts)*

> [!attention] Erreurs à éviter
> - Confondre chaleur massique (échauffement) et chaleur latente (changement d'état).
> - Oublier de convertir les mètres en millimètres.
> - Négliger la dilatation des terrasses exposées au soleil.`},
 exercices:[
  {t:"Chauffe-eau électrique", d:1, e:`Un chauffe-eau de 200 L porte l'eau de 25 °C à 60 °C. Sa résistance a une puissance de 1,5 kW.
Calculer l'énergie nécessaire (en J et en kWh) et la durée de chauffe (pertes négligées).`, c:`Q = 200 × 4 180 × 35 = **29,26 × 10⁶ J** = 29,26/3,6 = **8,13 kWh**.
t = 8,13/1,5 = **5,4 h**. Un chauffe-eau solaire fournit gratuitement cette énergie sous le soleil ivoirien.`},
  {t:"Dilatation de menuiseries et de tubes", d:1, e:`a) Un garde-corps en aluminium de 12 m subit un écart de 40 °C. Calculer sa variation de longueur.
b) Même question pour une descente d'eaux pluviales en PVC de 6 m (α = 70 × 10⁻⁶) avec un écart de 30 °C.`, c:`a) ΔL = 23 × 10⁻⁶ × 12 000 × 40 = **11 mm** : il faut des fixations à trous oblongs ou des manchons de dilatation.
b) ΔL = 70 × 10⁻⁶ × 6 000 × 30 = **12,6 mm** : d'où les manchons de dilatation à chaque étage sur les descentes en PVC.`},
  {t:"Joint de dilatation", d:2, e:`Un bâtiment en béton armé mesure 45 m de long. On retient un écart de température de 25 °C.
a) Calculer la variation de longueur.
b) On le coupe en deux blocs par un joint au milieu : quelle variation pour chaque bloc ? Quelle largeur minimale donner au joint ?`, c:`a) ΔL = 10 × 10⁻⁶ × 45 000 × 25 = **11,25 mm**.
b) Chaque bloc de 22,5 m : **5,6 mm** ; les deux blocs peuvent se rapprocher de 5,6 mm chacun, soit 11,25 mm au total. On retient un joint d'au moins **2 cm**, rempli d'un matériau compressible.`},
  {t:"Fissuration d'un dallage", d:2, e:`Un dallage en béton (E = 30 000 MPa ; α = 10 × 10⁻⁶ /°C ; résistance en traction 2,4 MPa) se refroidit de 15 °C entre le jour et la nuit, mais son frottement sur le sol l'empêche de se raccourcir.
Calculer la contrainte créée et conclure.`, c:`σ = 30 000 × 10 × 10⁻⁶ × 15 = **4,5 MPa** en traction.
4,5 > 2,4 MPa : le dallage **fissure**. On scie des **joints de retrait** (sur un tiers de l'épaisseur) en panneaux de 4 à 5 m de côté pour localiser les fissures.`},
  {t:"Refroidir un béton avec de la glace", d:3, e:`Pour 1 m³ de béton, on mélange 2 200 kg de ciment et granulats à 35 °C (c = 0,8 kJ/(kg·°C)) et 180 kg d'eau à 30 °C (c = 4,18 kJ/(kg·°C)).
a) Calculer la température du béton frais.
b) On remplace 60 kg d'eau par 60 kg de glace à 0 °C (L = 334 kJ/kg). Nouvelle température ?`, c:`a) T = (0,8 × 2 200 × 35 + 4,18 × 180 × 30)/(0,8 × 2 200 + 4,18 × 180) = (61 600 + 22 572)/(1 760 + 752,4) = **33,5 °C**.
b) La glace absorbe d'abord 60 × 334 = 20 040 kJ pour fondre :
T = (61 600 + 4,18 × 120 × 30 − 20 040)/(1 760 + 4,18 × 180) = (61 600 + 15 048 − 20 040)/2 512,4 = **22,5 °C**.
On gagne 11 °C : prise moins rapide, moins d'évaporation, moins de fissures.`}
 ],
 quiz:[
  {q:"Quantité de chaleur pour échauffer une masse m de ΔT :", o:["m c ΔT","m L","m g h","c ΔT/m"], r:0, e:"c : capacité thermique massique."},
  {q:"Pendant la fusion de la glace, la température :", o:["Reste constante à 0 °C","Augmente","Diminue","Varie au hasard"], r:0, e:"La chaleur sert au changement d'état."},
  {q:"Coefficient de dilatation du béton :", o:["10 × 10⁻⁶ /°C","10⁻³ /°C","70 × 10⁻⁶ /°C","1 /°C"], r:0, e:"Proche de celui de l'acier."},
  {q:"Un élément dont la dilatation est empêchée subit une contrainte :", o:["σ = E α ΔT","σ = α L ΔT","σ = m c ΔT","σ = 0"], r:0, e:"Loi de Hooke appliquée à la déformation thermique."},
  {q:"Les joints de dilatation d'un bâtiment sont espacés en général de :", o:["25 à 50 m","2 à 3 m","200 m","1 m"], r:0, e:"Selon climat et exposition."}
 ]},

{id:"sp-9", niv:3, titre:"Ondes : son, ultrasons et lumière", duree:45, contenu:`## Qu'est-ce qu'une onde ?
Une onde est la **propagation d'une perturbation** qui transporte de l'**énergie** sans transporter de matière (un bouchon sur l'eau monte et descend sans avancer).
- **Ondes mécaniques** : elles ont besoin d'un milieu matériel (son, vibrations, ondes sismiques) ;
- **Ondes électromagnétiques** : elles se propagent aussi dans le vide (lumière, infrarouge, ultraviolet, ondes radio, GPS, téléphonie).

## Les grandeurs d'une onde périodique
- **Période** T (s) et **fréquence** f = 1/T (Hz) ;
- **Célérité** c (m/s) : vitesse de propagation ;
- **Longueur d'onde** λ (m) : distance parcourue pendant une période.
$$ λ = c × T = c / f

## Le son
Le son est une onde de pression. L'oreille humaine perçoit les fréquences de **20 Hz** (graves) à **20 000 Hz** (aigus) ; en dessous ce sont les infrasons, au-dessus les **ultrasons**.

| Milieu | Célérité du son |
|---|---|
| Air (20 °C) | 340 m/s |
| Eau | 1 500 m/s |
| Bois (dans le sens des fibres) | 3 500 à 5 000 m/s |
| Béton | 3 500 à 4 500 m/s |
| Acier | 5 000 à 6 000 m/s |

Dans l'air, un son grave de 50 Hz a une longueur d'onde de 340/50 = 6,8 m ; un son aigu de 4 000 Hz, de 8,5 cm. Les sons graves contournent facilement les obstacles et traversent mieux les parois légères : ils sont les plus difficiles à isoler (voir cours d'acoustique, où l'on étudie aussi les décibels).

## Application : l'auscultation sonique du béton
On mesure le temps t que met une impulsion ultrasonore pour traverser un élément d'épaisseur d : **v = d/t**. Plus le béton est compact et résistant, plus la vitesse est élevée ; une zone de vides ou de fissures ralentit l'onde.
| Vitesse (m/s) | Qualité indicative du béton |
|---|---|
| > 4 500 | Excellente |
| 3 500 à 4 500 | Bonne |
| 3 000 à 3 500 | Moyenne, douteuse |
| < 3 000 | Médiocre |
> [!exemple] Mesure sur un poteau de 30 cm
> Temps de traversée : 75 µs → v = 0,30/75 × 10⁻⁶ = **4 000 m/s** : béton de bonne qualité.

Les ondes **sismiques** (ondes P de compression, plus rapides, puis ondes S de cisaillement, plus destructrices) obéissent aux mêmes lois. La Côte d'Ivoire est une zone de faible sismicité, mais les règles parasismiques s'appliquent dans d'autres pays de la région.

## La lumière et le rayonnement
La lumière se propage à **c = 3 × 10⁸ m/s** dans le vide (et presque autant dans l'air).
| Domaine | Longueur d'onde | Effets dans le bâtiment |
|---|---|---|
| Ultraviolet (UV) | < 400 nm | Dégradation des peintures, plastiques, étanchéités |
| Visible | 400 à 800 nm | Éclairage naturel |
| Infrarouge (IR) | > 800 nm | Chaleur rayonnée, apports solaires |
Un **vitrage à contrôle solaire** laisse passer le visible mais renvoie une grande partie de l'infrarouge : la pièce reste lumineuse sans surchauffer.

## Réflexion et réfraction
- **Réflexion** : l'angle de réflexion est égal à l'angle d'incidence. Une toiture ou une façade **claire** réfléchit le rayonnement et chauffe moins.
- **Réfraction** : en changeant de milieu, la lumière est déviée selon la loi de Descartes : **n₁ sin i₁ = n₂ sin i₂** (indice de l'air ≈ 1 ; du verre ≈ 1,5). Au-delà d'un angle limite, la lumière est totalement réfléchie : c'est le principe de la **fibre optique**.

## Les ondes au service de la mesure
- **Télémètre laser** : il mesure le temps aller-retour t d'une impulsion : d = c × t/2.
- **Niveau laser** rotatif : un plan lumineux matérialise un niveau sur tout le chantier.
- **GPS** : le récepteur calcule sa position à partir des temps de trajet des signaux de plusieurs satellites.

> [!retenir]
> - λ = c/f = c T ; son dans l'air : 340 m/s ; lumière : 3 × 10⁸ m/s.
> - Son audible 20 Hz – 20 kHz ; graves = grandes longueurs d'onde, difficiles à isoler.
> - Auscultation ultrasonore : v = d/t, plus de 3 500 m/s pour un bon béton.
> - UV (vieillissement), visible (éclairage), IR (chaleur) ; n₁ sin i₁ = n₂ sin i₂ ; télémètre : d = c t/2.`,
 sujet:{titre:"Ondes : écho, auscultation du béton aux ultrasons et télémètre laser", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Plusieurs appareils de chantier utilisent des ondes : sonar de puits, appareil à ultrasons, télémètre laser.

**Données**
- Vitesse du son dans l'air : **340 m/s** ; dans l'eau : **1 480 m/s** ;
- Lumière : c = **3 × 10⁸ m/s** ;
- Puits : l'écho d'un claquement revient en **0,8 s** (son dans l'air) ;
- Auscultation : impulsion ultrasonore à travers un poteau de **30 cm** en **75 µs** ; classement : > 4 000 m/s excellent ; 3 500 à 4 000 bon ; 3 000 à 3 500 douteux ; < 3 000 médiocre ;
- Télémètre : aller-retour de l'impulsion laser en **66,7 ns** ;
- Fréquences audibles : **20 Hz à 20 kHz**.

### Partie A — Généralités (5 points)
1. Distinguer onde mécanique et onde électromagnétique. Le son se propage-t-il dans le vide ? (3 pts)
2. Relier longueur d'onde, célérité, période et fréquence. Calculer λ d'un son de **1 000 Hz** dans l'air. (2 pts)

### Partie B — Écho (4 points)
3. Calculer la profondeur du puits (jusqu'à la surface de l'eau). (2 pts)
4. Pourquoi les sonars de forage utilisent-ils des ultrasons plutôt que des sons audibles ? (2 pts)

### Partie C — Ultrasons dans le béton (6 points)
5. Calculer la vitesse de propagation dans le poteau et classer le béton. (3 pts)
6. Sur un autre poteau, l'impulsion met **110 µs** pour 30 cm. Interpréter. (2 pts)
7. Pourquoi cet essai est-il dit « non destructif » ? (1 pt)

### Partie D — Laser (5 points)
8. Calculer la distance mesurée par le télémètre. (3 pts)
9. Quelle précision de temps faut-il pour mesurer au millimètre ? (2 pts)`,
  corrige:`### Partie A — Généralités (5 pts)
1. **Mécanique** : vibration d'un milieu matériel (son, ultrasons, ondes sismiques) — **pas de propagation dans le vide** ; **électromagnétique** : lumière, ondes radio, laser — se propagent aussi dans le vide. *(3 pts)*
2. **λ = c × T = c / f** ; λ = 340 / 1 000 = **0,34 m**. *(2 pts)*

### Partie B — Écho (4 pts)
3. Aller-retour : d = 340 × 0,8 / 2 = **136 m**. *(2 pts)*
4. Leur longueur d'onde courte donne une **meilleure précision** et un faisceau plus directif ; ils ne gênent pas les personnes. *(2 pts)*

### Partie C — Ultrasons (6 pts)
5. v = 0,30 / 75 × 10⁻⁶ = **4 000 m/s** → **bon à excellent**. *(3 pts)*
6. v = 0,30 / 110 × 10⁻⁶ = **2 730 m/s** → **médiocre** : vides, nids de cailloux, fissures ou béton faible ; faire des carottages pour confirmer. *(2 pts)*
7. On mesure sans casser ni prélever : l'ouvrage reste intact et on peut multiplier les points. *(1 pt)*

### Partie D — Laser (5 pts)
8. d = 3 × 10⁸ × 66,7 × 10⁻⁹ / 2 = **10,0 m**. *(3 pts)*
9. 1 mm aller-retour = 2 mm → Δt = 0,002 / 3 × 10⁸ = **6,7 × 10⁻¹² s** (6,7 picosecondes) : on mesure en pratique un déphasage plutôt qu'un temps. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier de diviser par 2 pour un aller-retour (écho).
> - Confondre µs (10⁻⁶) et ns (10⁻⁹).
> - Conclure sur un seul point d'auscultation.`},
 exercices:[
  {t:"Longueurs d'onde sonores", d:1, e:`Calculer dans l'air (340 m/s) la longueur d'onde d'un son de 50 Hz (groupe électrogène), 1 000 Hz (voix) et 4 000 Hz (sifflement). Lequel franchit le plus facilement un mur antibruit de chantier ?`, c:`50 Hz : 340/50 = **6,8 m** ; 1 000 Hz : **0,34 m** ; 4 000 Hz : **8,5 cm**.
Le son de **50 Hz**, dont la longueur d'onde dépasse la hauteur du mur, le contourne facilement : un écran est surtout efficace contre les aigus.`},
  {t:"Auscultation d'un voile", d:2, e:`Sur un voile de 30 cm d'épaisseur, on mesure les temps de traversée suivants : zone A : 75 µs ; zone B : 100 µs ; zone C : 140 µs.
Calculer les vitesses et interpréter.`, c:`A : 0,30/75 × 10⁻⁶ = **4 000 m/s** → bon béton.
B : 0,30/100 × 10⁻⁶ = **3 000 m/s** → qualité douteuse.
C : 0,30/140 × 10⁻⁶ = **2 140 m/s** → médiocre : probable nid de cailloux ou vide ; on complète par un carottage.`},
  {t:"Télémètre laser", d:1, e:`Un télémètre mesure un temps aller-retour de 166,7 ns.
a) Quelle est la distance ?
b) Quelle erreur de distance correspond à une erreur de 1 ns sur le temps ?`, c:`a) d = 3 × 10⁸ × 166,7 × 10⁻⁹/2 = **25,0 m**.
b) 3 × 10⁸ × 10⁻⁹/2 = **0,15 m** : les appareils mesurent en réalité un déphasage, bien plus précis qu'un simple chronométrage.`},
  {t:"Tir de mine en carrière", d:1, e:`Un ouvrier voit l'explosion d'un tir de mine dans une carrière et entend la détonation 2,5 s plus tard.
À quelle distance se trouve-t-il ? Pourquoi peut-il sentir la vibration du sol avant d'entendre le bruit ?`, c:`La lumière arrive quasi instantanément : d = 340 × 2,5 = **850 m**.
L'onde sismique se propage dans le rocher à plusieurs milliers de m/s : elle arrive avant le son transmis par l'air.`},
  {t:"Réfraction et fibre optique", d:3, e:`Un rayon lumineux passe de l'air (n = 1) dans un verre d'indice 1,5 sous une incidence de 30°.
a) Calculer l'angle de réfraction.
b) Calculer l'angle limite au-delà duquel un rayon allant du verre vers l'air est totalement réfléchi. Quelle application ?`, c:`a) sin r = 1 × sin 30°/1,5 = 0,5/1,5 = 0,333 → **r = 19,5°** (le rayon se rapproche de la normale).
b) sin i(lim) = 1/1,5 = 0,667 → **i(lim) = 41,8°**. Au-delà, la lumière reste piégée dans le verre : c'est le guidage dans les **fibres optiques** des réseaux de communication des bâtiments.`}
 ],
 quiz:[
  {q:"Relation entre longueur d'onde, célérité et fréquence :", o:["λ = c/f","λ = c × f","λ = f/c","λ = c + f"], r:0, e:"Distance parcourue pendant une période."},
  {q:"Le son se propage plus vite dans :", o:["L'acier","L'air","Le vide","Il ne se propage pas dans les solides"], r:0, e:"5 000 à 6 000 m/s."},
  {q:"Le son ne se propage pas dans :", o:["Le vide","L'eau","Le béton","L'air"], r:0, e:"Onde mécanique."},
  {q:"Les UV dans le bâtiment :", o:["Dégradent peintures et plastiques","Chauffent les pièces surtout","Sont visibles","N'existent pas"], r:0, e:"Rayonnement de courte longueur d'onde."},
  {q:"Une vitesse ultrasonore de 2 500 m/s dans un béton indique :", o:["Un béton médiocre ou des défauts","Un excellent béton","Un béton armé","Un béton sec"], r:0, e:"Bon béton : plus de 3 500 m/s."}
 ]},

{id:"sp-17", niv:3, titre:"Magnétisme, transformateurs et moteurs électriques", duree:50, contenu:`## Aimants et champ magnétique
Un aimant crée autour de lui un **champ magnétique** B, mesuré en **teslas (T)**, orienté du pôle nord vers le pôle sud à l'extérieur de l'aimant. La Terre elle-même est un grand aimant : la boussole s'oriente dans son champ (≈ 5 × 10⁻⁵ T).

## Le courant crée un champ magnétique
Un fil parcouru par un courant crée un champ magnétique ; une **bobine** (solénoïde) en crée un beaucoup plus intense, surtout autour d'un noyau de fer : c'est un **électroaimant**.
Applications : relais et **contacteurs** (commande des moteurs à distance), gâches électriques, **déclencheur magnétique** des disjoncteurs (coupure instantanée en cas de court-circuit), sonnettes, électrovannes d'arrosage.

## La force de Laplace : principe du moteur
Un conducteur de longueur L parcouru par un courant I dans un champ B perpendiculaire subit une force :
$$ F = B × I × L
Dans un moteur, des conducteurs placés sur un rotor subissent ces forces qui créent un **couple** : le rotor tourne.

## L'induction : principe de l'alternateur et du transformateur
Quand le champ magnétique traversant une bobine **varie**, il apparaît une tension à ses bornes : c'est l'**induction électromagnétique**. Elle est utilisée dans :
- l'**alternateur** (centrales, groupes électrogènes) : un rotor aimanté tourne devant des bobines ;
- le **transformateur** : une tension alternative crée un champ variable qui induit une tension dans une seconde bobine.

## Le transformateur
Deux bobines de N₁ et N₂ spires sur un même circuit de fer :
$$ U₂ / U₁ = N₂ / N₁      et, pour un transformateur parfait,      I₁ / I₂ = N₂ / N₁
La puissance se conserve presque (rendement 95 à 99 %) : **U₁ I₁ ≈ U₂ I₂**. On élève la tension pour transporter l'énergie sur de longues distances avec peu de pertes (les pertes varient comme I²), puis on l'abaisse près des utilisateurs.
- **Poste de transformation** HTA/BT : il abaisse la moyenne tension du réseau (par exemple 15 000 V) à 230/400 V ; sa taille s'exprime en **kVA**.
- **Transformateur de sécurité** 230/24 V ou 230/12 V : alimentation des baladeuses et de l'éclairage dans les lieux humides (fouilles, cuves).

> [!exemple] Poste de 250 kVA, 15 000/410 V (triphasé)
> Côté HTA : I₁ = 250 000/(1,732 × 15 000) = **9,6 A** ; côté BT : I₂ = 250 000/(1,732 × 410) = **352 A**.
> Le câble BT doit transporter 37 fois plus de courant que le câble HTA.

## Le moteur asynchrone triphasé
C'est le moteur le plus répandu (pompes, bétonnières, ventilateurs, compresseurs). Les trois bobines du stator créent un **champ tournant** ; le rotor tourne un peu moins vite que ce champ.
$$ vitesse de synchronisme : ns = 60 × f / p     (tr/min ; p : nombre de paires de pôles)
$$ glissement : g = (ns − n) / ns     (2 à 6 %)
$$ couple utile : C = P(utile) / ω     avec ω = 2π n/60
À 50 Hz : p = 1 → 3 000 tr/min ; p = 2 → 1 500 tr/min ; p = 3 → 1 000 tr/min.

> [!exemple] Moteur de pompe de 7,5 kW à 1 450 tr/min
> ω = 2π × 1 450/60 = 151,8 rad/s → C = 7 500/151,8 = **49,4 N·m** ; ns = 1 500 tr/min → g = 50/1 500 = **3,3 %**.

## Le groupe électrogène
Un moteur thermique entraîne un alternateur : f = p × n/60 (4 pôles à 1 500 tr/min → 50 Hz). On le choisit en **kVA** : on additionne les puissances actives et réactives des appareils, on calcule S = √(P² + Q²), puis on prend une marge (20 à 30 %) pour les démarrages des moteurs.

> [!retenir]
> - B en teslas ; électroaimant = bobine + noyau de fer (contacteurs, disjoncteurs).
> - Force de Laplace F = B I L (moteurs) ; induction (alternateurs, transformateurs).
> - Transformateur : U₂/U₁ = N₂/N₁ ; U₁ I₁ ≈ U₂ I₂.
> - Moteur asynchrone : ns = 60 f/p ; g = (ns − n)/ns ; C = P/ω.`,
 sujet:{titre:"Magnétisme, transformateur de sécurité et moteur asynchrone", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur un chantier de réhabilitation à Grand-Bassam, on utilise un transformateur de sécurité pour l'éclairage des cuves et un moteur asynchrone pour un monte-matériaux.

**Données**
- Transformateur **230 V / 12 V** ; enroulement primaire de **920 spires** ; courant secondaire **10 A** ;
- Moteur asynchrone triphasé 50 Hz, **4 pôles** (p = 2 paires), vitesse nominale **1 440 tr/min**, puissance utile **4 kW** ;
- Force de Laplace : F = B × I × L ; conducteur de **0,20 m** parcouru par **10 A** dans un champ de **0,8 T** ;
- ns = 60 f / p ; g = (ns − n) / ns ; C = Pu / ω avec ω = 2π n / 60.

### Partie A — Magnétisme (5 points)
1. Citer deux sources de champ magnétique. Quelle est l'unité du champ ? (2 pts)
2. Calculer la force de Laplace sur le conducteur. Quel est le principe des moteurs électriques ? (3 pts)

### Partie B — Transformateur (7 points)
3. Calculer le nombre de spires du secondaire. (2 pts)
4. Calculer le courant primaire (transformateur parfait). (2 pts)
5. Pourquoi un transformateur ne fonctionne-t-il pas en courant continu ? (1 pt)
6. Pourquoi l'éclairage dans une cuve métallique se fait-il en 12 V par transformateur de sécurité ? (2 pts)

### Partie C — Moteur asynchrone (8 points)
7. Calculer la vitesse de synchronisme et le glissement. (3 pts)
8. Calculer la vitesse angulaire et le couple utile. (3 pts)
9. Comment inverser le sens de rotation d'un moteur triphasé ? Utilité pour le monte-matériaux ? (2 pts)`,
  corrige:`### Partie A — Magnétisme (5 pts)
1. **Aimants** permanents et **courants électriques** (bobines, électroaimants) ; unité : le **tesla (T)**. *(2 pts)*
2. F = 0,8 × 10 × 0,20 = **1,6 N**. Un conducteur parcouru par un courant dans un champ magnétique subit une force : dans un moteur, ces forces sur les conducteurs du rotor créent un **couple** qui le fait tourner. *(3 pts)*

### Partie B — Transformateur (7 pts)
3. N2 = N1 × U2 / U1 = 920 × 12 / 230 = **48 spires**. *(2 pts)*
4. I1 = I2 × N2 / N1 = 10 × 48 / 920 = **0,52 A** (puissance conservée : 230 × 0,52 ≈ 12 × 10 = 120 VA). *(2 pts)*
5. Il fonctionne par **induction** : il faut un flux magnétique **variable**, que seul le courant alternatif produit. *(1 pt)*
6. Dans une enceinte métallique conductrice et souvent humide, un défaut de la lampe sous 230 V serait mortel ; le transformateur de sécurité **isole** le circuit du réseau et la **très basse tension** (12 V) est inoffensive. *(2 pts)*

### Partie C — Moteur (8 pts)
7. ns = 60 × 50 / 2 = **1 500 tr/min** ; g = (1 500 − 1 440) / 1 500 = **4 %**. *(3 pts)*
8. ω = 2π × 1 440 / 60 = **150,8 rad/s** ; C = 4 000 / 150,8 = **26,5 N·m**. *(3 pts)*
9. En **permutant deux phases** d'alimentation (inverseur à contacteurs) : on monte et on descend la plate-forme avec le même moteur, avec des verrouillages et fins de course de sécurité. *(2 pts)*

> [!attention] Erreurs à éviter
> - Inverser le rapport des spires et le rapport des courants.
> - Confondre paires de pôles et nombre de pôles.
> - Calculer le couple avec n en tr/min au lieu de ω en rad/s.`},
 exercices:[
  {t:"Force de Laplace", d:1, e:`Un conducteur de 30 cm, parcouru par 20 A, est placé perpendiculairement à un champ de 0,5 T.
Calculer la force qu'il subit. Que se passe-t-il si l'on inverse le sens du courant ?`, c:`F = 0,5 × 20 × 0,30 = **3 N**.
Si l'on inverse le courant, la force change de **sens** : c'est ainsi qu'on inverse le sens de rotation d'un moteur à courant continu.`},
  {t:"Transformateur de sécurité", d:1, e:`Un transformateur 230 V/24 V a 920 spires au primaire.
a) Combien de spires au secondaire ?
b) Il alimente une baladeuse de 24 V – 60 W. Calculer les courants secondaire et primaire (transformateur parfait).`, c:`a) N₂ = 920 × 24/230 = **96 spires**.
b) I₂ = 60/24 = **2,5 A** ; I₁ = 60/230 = **0,26 A**.`},
  {t:"Poste de transformation", d:2, e:`Un poste de 250 kVA (15 000/410 V triphasé) alimente un immeuble qui appelle 180 kW avec cos φ = 0,85.
a) Calculer les courants nominaux primaire et secondaire.
b) Calculer la puissance apparente appelée et le taux de charge du transformateur.`, c:`a) I₁ = 250 000/(1,732 × 15 000) = **9,6 A** ; I₂ = 250 000/(1,732 × 410) = **352 A**.
b) S = 180/0,85 = **211,8 kVA** → taux de charge 211,8/250 = **85 %** : correct, avec une petite réserve pour des extensions.`},
  {t:"Moteur asynchrone", d:2, e:`Un moteur à 4 pôles (p = 2), alimenté en 50 Hz, tourne à 1 440 tr/min et fournit 5,5 kW.
Calculer la vitesse de synchronisme, le glissement et le couple utile.`, c:`ns = 60 × 50/2 = **1 500 tr/min** ; g = (1 500 − 1 440)/1 500 = **4 %**.
ω = 2π × 1 440/60 = **150,8 rad/s** → C = 5 500/150,8 = **36,5 N·m**.`},
  {t:"Choisir un groupe électrogène", d:3, e:`Un chantier isolé doit alimenter : bétonnière 2,2 kW (cos φ = 0,8) ; éclairage 1 kW (cos φ = 1) ; pompe 1,5 kW (cos φ = 0,8) ; outillage 2 kW (cos φ = 0,9).
Calculer P, Q et S, puis choisir la puissance du groupe avec une marge de 25 %.`, c:`P = 2,2 + 1 + 1,5 + 2 = **6,7 kW**.
Q = 2,2 × 0,75 + 0 + 1,5 × 0,75 + 2 × 0,484 = 1,65 + 1,125 + 0,97 = **3,74 kvar** (tan φ = 0,75 pour cos φ = 0,8 ; 0,484 pour 0,9).
S = √(6,7² + 3,74²) = **7,7 kVA** → avec 25 % : 9,6 kVA → groupe de **10 kVA** (ou plus si plusieurs moteurs démarrent ensemble).`}
 ],
 quiz:[
  {q:"Le champ magnétique s'exprime en :", o:["Teslas","Webers par seconde","Volts","Henrys"], r:0, e:"Symbole T."},
  {q:"Force de Laplace :", o:["F = B I L","F = m a","F = U I","F = B/I"], r:0, e:"Conducteur dans un champ."},
  {q:"Un transformateur parfait 230/24 V qui débite 5 A au secondaire absorbe au primaire environ :", o:["0,52 A","5 A","48 A","24 A"], r:0, e:"5 × 24/230."},
  {q:"Vitesse de synchronisme d'un moteur à 2 paires de pôles en 50 Hz :", o:["1 500 tr/min","3 000 tr/min","1 000 tr/min","750 tr/min"], r:0, e:"60 × 50/2."},
  {q:"On transporte l'électricité en haute tension pour :", o:["Réduire le courant et donc les pertes","Augmenter le courant","Économiser le cuivre des prises","Changer la fréquence"], r:0, e:"Pertes en R I²."}
 ]}
]});
