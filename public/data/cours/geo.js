/* =====================================================================
   Géotechnique — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"geo",
 titre:"Géotechnique",
 court:"Géotechnique",
 groupe:"sol",
 icone:"mountain",
 couleur:"#8B5A2B",
 niveau:"Intermédiaire",
 heures:24,
 ordre:1,
 prerequis:["mmc", "sp"],
 resume:"Identification et classification des sols, compactage, résistance au cisaillement, capacité portante, tassements et choix du type de fondation.",
 objectifs:[
  "Calculer les paramètres d'état d'un sol (w, γd, e, Sr)",
  "Classer un sol par sa granulométrie et ses limites d'Atterberg",
  "Contrôler un compactage (Proctor, CBR)",
  "Estimer la contrainte admissible et les tassements",
  "Choisir le type de fondation adapté"
 ],
 applications:[
  "Lecture d'un rapport d'étude de sol",
  "Contrôle des remblais sous dallage",
  "Dimensionnement des semelles",
  "Sols difficiles : argiles gonflantes, remblais, zones lagunaires"
 ],
 chapitres:[
{id:"geo-1", niv:1, titre:"Le sol : constituants et paramètres d'état", duree:30, contenu:`## Un matériau à trois phases
Un sol est formé de **grains solides**, d'**eau** et d'**air** dans les vides. Ses propriétés dépendent des proportions de ces trois phases.

## Paramètres fondamentaux
| Paramètre | Définition | Valeurs courantes |
|---|---|---|
| Teneur en eau w | masse d'eau / masse de grains secs | 5 à 40 % |
| Poids volumique humide γ | poids total / volume total | 17 à 21 kN/m³ |
| Poids volumique sec γd | poids des grains / volume total | 14 à 19 kN/m³ |
| Indice des vides e | volume des vides / volume des grains | 0,4 à 1,5 |
| Porosité n | volume des vides / volume total | 30 à 60 % |
| Degré de saturation Sr | volume d'eau / volume des vides | 0 à 100 % |

## Relations utiles
$$ γd = γ / (1 + w)
$$ n = e / (1 + e)
$$ γd = γs / (1 + e)    (γs ≈ 26,5 kN/m³ pour les grains)

> [!exemple] Échantillon de latérite
> Un échantillon pèse 1 960 g humide et 1 700 g après étuvage ; son volume est de 1 000 cm³.
> w = (1 960 − 1 700) / 1 700 = **15,3 %** ; γ = 19,6 kN/m³ ; γd = 17,0 kN/m³ ;
> e = 26,5 / 17,0 − 1 = **0,56** ; n = 0,56 / 1,56 = **36 %**.

## Les sols de Côte d'Ivoire
- **Latérites** (graveleuses, rouges) : bons sols de fondation et de remblai une fois compactés.
- **Sables** du littoral : portance correcte s'ils sont denses, sensibles à l'eau et à l'affouillement.
- **Argiles** et vases des zones lagunaires (Marcory, Koumassi, Treichville) : compressibles, tassements importants, parfois fondations profondes nécessaires.
- **Remblais** récents non contrôlés : à ne jamais utiliser comme sol de fondation sans étude.

> [!retenir]
> w, γd et e décrivent l'état du sol ; ce sont eux qui gouvernent sa résistance et sa compressibilité.`, quiz:[
  {q:"Teneur en eau d'un sol de masse humide 1 100 g et sèche 1 000 g :", o:["1 %", "10 %", "9 %", "110 %"], r:1, e:"w = 100 / 1 000 = 10 %."},
  {q:"Le poids volumique sec se calcule par :", o:["γ (1 + w)", "γ / (1 + w)", "γ w", "γ − w"], r:1, e:"γd = γ / (1 + w)."},
  {q:"Un sol saturé a un degré de saturation de :", o:["0 %", "50 %", "100 %", "w %"], r:2, e:"Tous les vides sont remplis d'eau."},
  {q:"Quel sol est le plus risqué pour fonder sans étude ?", o:["Latérite compactée", "Rocher sain", "Vase lagunaire ou remblai récent", "Sable dense"], r:2, e:"Compressibles et hétérogènes."}
 ]},

{id:"geo-6", niv:1, titre:"Reconnaître les sols et les essais simples sur le terrain", duree:25, contenu:`## Les sols que l'on rencontre en Côte d'Ivoire
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
> Ces valeurs servent seulement à un premier avis pour une petite maison. Pour un R+1 et plus, ou au moindre doute (remblai, ordures, bas-fond), une **étude géotechnique** est indispensable.`, quiz:[
  {q:"Un sol savonneux qui se roule en boudin fin est plutôt :", o:["Argileux", "Sableux", "Graveleux", "Rocheux"], r:0, e:"C'est le signe d'un sol plastique."},
  {q:"Les vases de bord de lagune sont :", o:["Très compressibles", "Excellentes pour fonder", "Comparables à la roche", "Sans eau"], r:0, e:"Elles tassent fortement sous charge."},
  {q:"Au pénétromètre dynamique, un grand nombre de coups pour 10 cm indique :", o:["Un sol dense", "Un sol mou", "La présence d'eau", "Une erreur de mesure"], r:0, e:"Le sol résiste à l'enfoncement."},
  {q:"La portance indicative d'une latérite compacte est d'environ :", o:["1,5 à 3 bars", "0,2 bar", "10 bars", "50 bars"], r:0, e:"À confirmer par une étude de sol."}
 ]},

{id:"geo-7", niv:1, titre:"L'eau dans le sol : nappe, perméabilité et drainage", duree:25, contenu:`## La nappe phréatique
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
> Ne jamais couler de béton dans une fouille pleine d'eau : on pompe, on nettoie, puis on coule rapidement.`, quiz:[
  {q:"Le sol le plus perméable est :", o:["Le gravier", "L'argile", "Le limon", "La vase"], r:0, e:"k ≈ 10⁻² m/s."},
  {q:"La loi de Darcy s'écrit :", o:["Q = k i A", "Q = m c ΔT", "Q = ρ g h", "Q = σ / E"], r:0, e:"Débit à travers un sol."},
  {q:"Des fissures en escalier dans les murs peuvent venir :", o:["Du retrait-gonflement d'un sol argileux", "D'un excès de peinture", "D'un sable dense", "D'une toiture claire"], r:0, e:"Les argiles changent de volume avec l'eau."},
  {q:"Un drain périphérique sert à :", o:["Éloigner l'eau des fondations", "Augmenter la nappe", "Ventiler les pièces", "Remplacer les gouttières"], r:0, e:"Il collecte l'eau et l'évacue plus loin."}
 ]},

{id:"geo-2", niv:2, titre:"Identification et classification", duree:30, contenu:`## La granulométrie
On fait passer le sol sur une série de **tamis** et on trace la **courbe granulométrique** (% de passant en fonction du diamètre, échelle logarithmique).
!fig:granulo|Courbes granulométriques

| Classe | Diamètre |
|---|---|
| Argile | < 2 µm |
| Limon | 2 µm à 80 µm |
| Sable | 80 µm à 2 mm |
| Gravier | 2 à 20 mm |
| Cailloux | 20 à 200 mm |

Le **coefficient d'uniformité** Cu = D60 / D10 indique si le sol est bien gradué (Cu > 4 à 6 : bonne compacité possible) ou uniforme.

## Les limites d'Atterberg (sols fins)
La consistance d'un sol fin change avec sa teneur en eau :
- **wL** (limite de liquidité) : passage de l'état plastique à l'état liquide ;
- **wP** (limite de plasticité) : passage de l'état solide à l'état plastique ;
- **Indice de plasticité IP = wL − wP**.

| IP | Plasticité |
|---|---|
| < 12 | Peu plastique |
| 12 à 25 | Moyennement plastique |
| 25 à 40 | Plastique |
| > 40 | Très plastique (argile gonflante probable) |

## L'équivalent de sable
Mesure la propreté d'un sable (proportion d'éléments fins argileux). Pour un sable à béton, on exige souvent **ES ≥ 70 à 80**.

## Les classifications
Les classifications (GTR en France, USCS internationale, HRB pour les routes) regroupent les sols selon granulométrie et plasticité : par exemple **GW** (grave bien graduée), **SP** (sable mal gradué), **CL** (argile peu plastique), **CH** (argile très plastique).

> [!attention] Argiles gonflantes
> Un IP élevé signale une argile qui **gonfle en saison des pluies et se rétracte en saison sèche** : fissures en escalier dans les murs. Fonder plus profond, rigidifier la structure (chaînages, longrines), éloigner les arbres et maîtriser les eaux autour du bâtiment.`, quiz:[
  {q:"Les limons ont un diamètre compris entre :", o:["2 et 20 mm", "80 µm et 2 mm", "2 et 80 µm", "moins de 2 µm"], r:2, e:"Entre l'argile et le sable."},
  {q:"L'indice de plasticité vaut :", o:["wL + wP", "wL − wP", "wP − wL", "wL / wP"], r:1, e:"IP = wL − wP."},
  {q:"Un IP supérieur à 40 indique :", o:["Un sable propre", "Une argile très plastique, souvent gonflante", "Un rocher", "Une grave"], r:1, e:"Risque de retrait-gonflement."},
  {q:"L'équivalent de sable mesure :", o:["La densité", "La propreté (teneur en fines argileuses)", "La couleur", "La résistance"], r:1, e:"Un sable sale donne un mauvais béton."}
 ]},

{id:"geo-3", niv:2, titre:"Le compactage : Proctor et CBR", duree:25, contenu:`## Pourquoi compacter ?
Compacter, c'est **chasser l'air** pour rapprocher les grains : le sol devient plus dense, plus résistant, moins compressible et moins perméable. Indispensable pour les remblais sous dallage, les plates-formes et les routes.

## L'essai Proctor
On compacte le sol dans un moule avec une énergie normalisée, à différentes teneurs en eau, et on mesure γd.
!fig:proctor|Courbe Proctor : optimum de teneur en eau

- Trop sec : les grains frottent, le compactage est difficile.
- Trop humide : l'eau occupe les vides et ne peut pas être chassée.
- À l'**optimum** (wOPM), on obtient **γd max**.
On distingue le Proctor **normal** (OPN) et **modifié** (OPM, énergie plus forte, routes).

## Le contrôle sur chantier
- On exige un **taux de compactage** (γd mesuré / γd max Proctor) d'au moins **95 %** (souvent 95 % OPM pour les couches de chaussée, 95 % OPN pour les remblais courants).
- Mesures au **densitomètre à membrane**, au gammadensimètre, ou essais de plaque.
- Compacter en **couches de 15 à 25 cm**, en arrosant pour se rapprocher de l'optimum.

## L'indice CBR
Le **CBR** (California Bearing Ratio) mesure la portance d'un sol compacté par poinçonnement : il sert à dimensionner les chaussées et les dallages lourds. Une latérite de bonne qualité dépasse souvent CBR 30 à 40 ; une argile peut être inférieure à 5.

> [!astuce]
> Un remblai sous dallage mal compacté se tasse dans les mois qui suivent : le dallage se décolle des murs et fissure. Exigez des couches minces bien arrosées et compactées à la plaque vibrante.`, quiz:[
  {q:"Compacter un sol, c'est :", o:["Ajouter de l'eau", "Chasser l'air des vides", "Ajouter du ciment", "Le chauffer"], r:1, e:"On rapproche les grains."},
  {q:"L'essai Proctor détermine :", o:["La résistance au cisaillement", "La teneur en eau optimale et γd max", "La granulométrie", "Le tassement"], r:1, e:"C'est la courbe γd en fonction de w."},
  {q:"Taux de compactage courant exigé :", o:["50 %", "75 %", "95 %", "120 %"], r:2, e:"95 % de l'optimum Proctor."},
  {q:"Épaisseur conseillée des couches de remblai à compacter :", o:["1 m", "15 à 25 cm", "5 cm", "50 à 80 cm"], r:1, e:"Le compacteur n'agit pas en profondeur."}
 ]},

{id:"geo-4", niv:2, titre:"Résistance des sols et capacité portante", duree:35, contenu:`## Résistance au cisaillement
Un sol se rompt par **glissement** le long de surfaces de rupture. Sa résistance suit le critère de **Mohr-Coulomb** :
$$ τ = c + σ' tan φ
- **c** : cohésion (kPa), importante pour les argiles ; nulle pour un sable sec.
- **φ** : angle de frottement interne (25 à 40° pour les sables et graves).
- σ' : contrainte **effective** (contrainte totale moins pression de l'eau).

Ces paramètres se mesurent à la **boîte de cisaillement** ou au **triaxial** en laboratoire.

## Capacité portante d'une semelle (Terzaghi)
Pour une semelle filante de largeur B, à la profondeur D :
$$ qu = ½ γ B Nγ + γ D Nq + c Nc
Les facteurs Nγ, Nq, Nc dépendent de φ (pour φ = 30°, valeurs usuelles : Nγ ≈ 20, Nq ≈ 18, Nc ≈ 30). La contrainte **admissible** s'obtient avec un coefficient de sécurité de 3 : **qadm ≈ qu / 3**.

> [!exemple] Semelle sur sable
> B = 1,0 m, D = 1,0 m, γ = 18 kN/m³, c = 0, φ = 30° :
> qu = 0,5 × 18 × 1 × 20 + 18 × 1 × 18 = 180 + 324 = **504 kPa** ; qadm ≈ 504 / 3 = **168 kPa ≈ 1,7 bar**.

## Les essais in situ
- **Pénétromètre dynamique** (léger ou lourd) : on compte les coups pour enfoncer une pointe ; rapide et économique, très utilisé pour les maisons.
- **Pénétromètre statique** (CPT) : résistance de pointe qc.
- **Pressiomètre Ménard** : module EM et pression limite pl, très utilisé pour calculer fondations et tassements.
- **SPT** (Standard Penetration Test) dans les forages.

## Ordres de grandeur de contraintes admissibles
| Sol | qadm indicative |
|---|---|
| Vase, argile molle | < 0,5 bar |
| Argile ferme | 1 à 2 bars |
| Sable moyennement dense, latérite | 1,5 à 3 bars |
| Grave dense | 3 à 5 bars |
| Rocher sain | > 10 bars |

!fig:bulbe|Bulbe des contraintes sous une semelle

> [!attention]
> Ces valeurs ne remplacent pas une étude de sol : deux terrains voisins peuvent être très différents.`, quiz:[
  {q:"Pour un sable sec, la cohésion c vaut :", o:["Beaucoup", "Environ zéro", "100 kPa", "Elle n'existe pas pour les argiles"], r:1, e:"Le sable résiste par frottement."},
  {q:"La contrainte admissible s'obtient avec un coefficient de sécurité d'environ :", o:["1", "1,5", "3", "10"], r:2, e:"qadm ≈ qu / 3."},
  {q:"L'essai le plus utilisé pour les petites constructions est :", o:["Le triaxial", "Le pénétromètre dynamique", "Le Proctor", "L'œdomètre"], r:1, e:"Rapide et économique."},
  {q:"Une argile molle peut porter environ :", o:["Moins de 0,5 bar", "3 bars", "10 bars", "50 bars"], r:0, e:"Elle est très compressible et peu résistante."}
 ]},

{id:"geo-5", niv:3, titre:"Tassements et choix des fondations", duree:30, contenu:`## Pourquoi un sol tasse
Sous une charge, les grains se rapprochent : le volume des vides diminue.
- **Sables** : tassement **rapide** (pendant la construction), modéré.
- **Argiles saturées** : l'eau doit s'échapper des pores, ce qui prend du temps : c'est la **consolidation**, qui peut durer des mois ou des années.

!fig:tassement|Courbe de consolidation d'une argile

## Calcul du tassement (œdomètre)
$$ s = H × Cc / (1 + e₀) × log((σ'₀ + Δσ) / σ'₀)
H : épaisseur de la couche compressible, Cc : indice de compression, e₀ : indice des vides initial, σ'₀ : contrainte effective initiale, Δσ : supplément de contrainte apporté par l'ouvrage.

> [!exemple]
> Couche d'argile de 4 m, Cc = 0,3, e₀ = 1,0, σ'₀ = 50 kPa, Δσ = 40 kPa :
> s = 4 × 0,3 / 2 × log(90 / 50) = 0,6 × 0,255 = **0,153 m** (15 cm !).

## Le tassement différentiel
Ce n'est pas tant le tassement total qui est dangereux que la **différence** de tassement entre deux points : il provoque des fissures en diagonale dans les murs. On limite la rotation relative à environ 1/500 pour les bâtiments courants.

## Choisir le type de fondation
| Situation | Fondation conseillée |
|---|---|
| Bon sol peu profond, charges modérées | Semelles isolées + longrines |
| Murs porteurs, sol moyen | Semelles filantes |
| Sol médiocre, charges importantes ou réparties | Radier général |
| Bon sol profond sous une couche molle | Puits ou pieux |
| Argiles gonflantes | Fondations plus profondes, structure rigide, gestion de l'eau |

!fig:fondations-types|Fondations superficielles et profondes

> [!retenir]
> On choisit la fondation en fonction du **sol** (portance, tassements) et des **charges**. Dans le doute, une étude géotechnique coûte bien moins cher qu'une reprise en sous-œuvre.`, quiz:[
  {q:"La consolidation concerne surtout :", o:["Les sables", "Les argiles saturées", "Les roches", "Les graviers"], r:1, e:"L'eau s'évacue lentement des argiles."},
  {q:"Les fissures en diagonale dans un mur sont souvent dues à :", o:["La peinture", "Un tassement différentiel", "La chaleur", "Un excès de ciment"], r:1, e:"Une partie du bâtiment s'enfonce plus que l'autre."},
  {q:"Sur un sol médiocre avec des charges réparties, on choisit souvent :", o:["Des semelles isolées", "Un radier général", "Pas de fondation", "Des briques"], r:1, e:"Le radier répartit les charges sur toute l'emprise."},
  {q:"Si le bon sol est à 8 m sous une vase, on utilise :", o:["Des semelles filantes", "Des pieux", "Un dallage", "Un hérisson"], r:1, e:"Les pieux transmettent les charges au bon sol profond."}
 ]},

{id:"geo-8", niv:3, titre:"Les fondations profondes : pieux", duree:35, contenu:`## Quand faut-il des pieux ?
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
- Relevé précis de chaque pieu : profondeur atteinte, volume de béton coulé (comparé au volume théorique).`, quiz:[
  {q:"La capacité d'un pieu provient :", o:["De la pointe et du frottement latéral", "Seulement de son poids", "Uniquement de la semelle de liaison", "Du vent"], r:0, e:"Qu = Qp + Qs."},
  {q:"Pieu de 0,60 m de diamètre : la section de pointe vaut environ :", o:["0,28 m²", "0,60 m²", "1,13 m²", "0,09 m²"], r:0, e:"π × 0,30² = 0,283 m²."},
  {q:"Le frottement négatif :", o:["Ajoute une charge au pieu", "Augmente sa capacité", "N'existe pas dans les vases", "Concerne seulement les toitures"], r:0, e:"La couche molle qui tasse entraîne le pieu vers le bas."},
  {q:"Les pieux d'un même poteau sont reliés par :", o:["Une semelle de liaison (chevêtre)", "Une poutre de toiture", "Un dallage", "Rien"], r:0, e:"Elle répartit la charge du poteau entre les pieux."}
 ]},

{id:"geo-9", niv:3, titre:"Murs de soutènement et poussée des terres", duree:35, contenu:`## La poussée des terres
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
Si l'eau s'accumule derrière le mur, elle ajoute sa propre poussée **½ × γw × H²** = 0,5 × 10 × 9 = **45 kN/m** : plus que la poussée des terres ! On prévoit un **massif drainant** (graviers + géotextile) et des **barbacanes** tous les 2 à 3 m.`, quiz:[
  {q:"Pour φ = 30°, le coefficient de poussée active Ka vaut :", o:["1/3", "1", "3", "0,5"], r:0, e:"tan²(45° − 15°) = tan² 30° = 1/3."},
  {q:"La poussée active des terres s'applique :", o:["Au tiers inférieur de la hauteur", "En tête du mur", "À mi-hauteur", "À la base exactement"], r:0, e:"Le diagramme de pression est triangulaire."},
  {q:"Les barbacanes servent à :", o:["Évacuer l'eau derrière le mur", "Décorer le mur", "Ancrer les aciers", "Ventiler les caves"], r:0, e:"Sans drainage, la poussée de l'eau peut dépasser celle des terres."},
  {q:"Le coefficient de sécurité au renversement visé est d'au moins :", o:["1,5", "0,5", "10", "1,0"], r:0, e:"Moment stabilisant / moment renversant ≥ 1,5."}
 ]}
]});
