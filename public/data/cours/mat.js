/* =====================================================================
   Matériaux de construction — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"mat",
 titre:"Matériaux de construction",
 court:"Matériaux",
 groupe:"constr",
 icone:"brick",
 couleur:"#B85C38",
 niveau:"Débutant",
 heures:24,
 ordre:1,
 prerequis:["sp"],
 resume:"Granulats, ciments, bétons, mortiers, agglos, aciers, bois et matériaux locaux : choisir, doser, contrôler et bien mettre en œuvre.",
 objectifs:[
  "Choisir et contrôler les granulats",
  "Connaître les ciments et leurs classes",
  "Doser un béton, un mortier et un enduit",
  "Contrôler la qualité des agglos et des aciers",
  "Utiliser les bois et matériaux locaux"
 ],
 applications:["Commande des matériaux d'une maison", "Contrôle à la réception (sable, ciment, fers)", "Fabrication des agglos sur chantier", "Choix d'un bois de charpente"],
 chapitres:[
{id:"mat-1", niv:1, titre:"Les granulats : sable et gravier", duree:25, contenu:`## Définitions
Les **granulats** forment le squelette du béton (70 à 80 % de son volume).
| Granulat | Dimensions (d/D en mm) |
|---|---|
| Fines / fillers | < 0,08 |
| Sable | 0/4 (ou 0/5) |
| Gravillons | 4/10, 5/15, 6/10 |
| Gravier | 10/20, 15/25 |
| Cailloux, pierres cassées | 25/40 et plus |

## Origine
- **Granulats roulés** (rivière, lagune) : grains arrondis, béton maniable.
- **Granulats concassés** (carrières de granite) : grains anguleux, meilleure adhérence, béton plus résistant mais moins maniable.

## Qualités exigées
1. **Propreté** : pas d'argile, de terre, de matières organiques (feuilles, racines). Test simple : frotter le sable dans la main humide : s'il tache, il est sale. En laboratoire : **équivalent de sable ES ≥ 70 à 80**.
2. **Granulométrie** continue (toutes les tailles) pour limiter les vides.
3. **Dureté** des gravillons (essai Los Angeles) pour les bétons et les routes.
4. **Pas de sel** : le sable de mer non lavé apporte des chlorures qui corrodent les aciers.

> [!attention]
> Un sable sale ou un gravier mélangé de latérite peuvent faire perdre plus de 30 % de résistance au béton. Refuser la livraison est moins cher que démolir un poteau.

## Stockage
Sur une aire propre (dalle ou bâche), en tas séparés par nature, à l'abri des eaux de ruissellement. Le sable humide **foisonne** (son volume augmente jusqu'à 20 à 30 %) : à prendre en compte dans les dosages volumiques.

> [!retenir]
> Un bon granulat est propre, bien gradué, dur et sans sel.`, quiz:[
  {q:"Un sable courant pour béton est de classe :", o:["0/4", "10/20", "25/40", "0/0,08"], r:0, e:"Sable 0/4 ou 0/5."},
  {q:"Les granulats concassés donnent un béton :", o:["Plus maniable", "Plus résistant mais moins maniable", "Identique", "Plus léger"], r:1, e:"Grains anguleux, meilleure adhérence de la pâte."},
  {q:"Pourquoi refuser le sable de mer non lavé ?", o:["Couleur", "Sel : corrosion des aciers", "Trop gros", "Trop cher"], r:1, e:"Les chlorures attaquent les armatures."},
  {q:"Un équivalent de sable correct pour béton est :", o:["≥ 70 à 80", "< 30", "Exactement 50", "Sans importance"], r:0, e:"Plus il est élevé, plus le sable est propre."}
 ]},

{id:"mat-2", niv:1, titre:"Les liants : ciments, chaux et plâtre", duree:25, contenu:`## Le ciment Portland
Il est fabriqué en cuisant à environ **1 450 °C** un mélange de calcaire (80 %) et d'argile (20 %). On obtient le **clinker**, broyé finement avec un peu de gypse (régulateur de prise).

## Les types de ciments (norme NF EN 197-1)
| Type | Composition | Usage |
|---|---|---|
| CEM I | ≥ 95 % de clinker | Béton armé exigeant, préfabrication, décoffrage rapide |
| CEM II/A ou B | Clinker + 6 à 35 % d'ajouts (calcaire, laitier, pouzzolane, cendres) | Usage courant : béton armé, maçonnerie, enduits |
| CEM III | Riche en laitier | Milieux agressifs, ouvrages massifs |

## Les classes de résistance
Le chiffre indique la résistance minimale à **28 jours** sur mortier normalisé : **32,5**, **42,5** ou **52,5 MPa**. La lettre **N** (normale) ou **R** (rapide) indique la vitesse de montée en résistance.
Le ciment le plus courant en Côte d'Ivoire est un **CEM II 32,5** (anciennement appelé CPJ 35) ; le **42,5** est préféré pour les bétons de structure.

## La prise et le durcissement
- **Début de prise** : au moins 45 à 75 minutes selon la classe ; après, le béton ne doit plus être remanié.
- **Durcissement** : la résistance augmente pendant des semaines (≈ 65 à 70 % à 7 jours, 100 % à 28 jours).

> [!astuce] Réception des sacs
> Vérifier la date de fabrication, l'absence de grumeaux (sac « pierreux » = ciment éventé par l'humidité), la classe imprimée et le poids (50 kg). Stocker sur palettes, sous abri, piles de 10 sacs au plus.

## Les autres liants
- **Chaux** : aérienne (durcit avec le CO₂ de l'air) ou hydraulique ; mortiers souples, restauration, enduits respirants.
- **Plâtre** : prise très rapide, intérieur seulement (craint l'eau), staff et faux plafonds.

> [!retenir]
> CEM II 32,5 pour les usages courants, 42,5 pour les bétons de structure plus exigeants ; ciment stocké au sec et utilisé rapidement.`, quiz:[
  {q:"Le clinker est obtenu en cuisant :", o:["Sable et eau", "Calcaire et argile", "Gypse et chaux", "Fer et charbon"], r:1, e:"Environ 80 % de calcaire et 20 % d'argile."},
  {q:"« 42,5 » sur un sac de ciment indique :", o:["Le poids", "La résistance minimale à 28 jours en MPa", "Le prix", "La finesse"], r:1, e:"Classe de résistance."},
  {q:"Un sac de ciment contenant des grumeaux durs est :", o:["Meilleur", "Éventé par l'humidité", "Normal", "Plus résistant"], r:1, e:"Il a commencé à s'hydrater : à refuser."},
  {q:"Le plâtre convient :", o:["Aux fondations", "Aux usages intérieurs", "Aux façades exposées", "Aux piscines"], r:1, e:"Il craint l'eau."}
 ]},

{id:"mat-4", niv:1, titre:"Mortiers, enduits et agglos", duree:30, contenu:`## Les mortiers
Mortier = ciment + sable + eau (sans gravier).
| Usage | Dosage (kg de ciment par m³ de sable) |
|---|---|
| Mortier de pose des agglos | 250 à 300 kg |
| Chape | 300 à 350 kg |
| Enduit : gobetis (accrochage) | 500 kg |
| Enduit : corps d'enduit | 350 à 400 kg |
| Enduit : finition | 300 à 350 kg |
| Scellements, joints de carrelage | 400 à 500 kg |

## Les agglos (parpaings)
Blocs en béton vibré fabriqués sur place ou en usine : creux de **10, 15, 20** cm d'épaisseur, pleins de 15 ou 20 pour les soubassements. Format courant : 40 × 20 cm → **12,5 agglos par m²**.

## Fabriquer de bons agglos
- **Dosage** : environ 30 à 40 agglos creux de 15 par sac de ciment (soit un béton maigre de l'ordre de 150 à 200 kg/m³). Au-delà de 45 par sac, les agglos deviennent friables.
- Sable propre, peu d'eau (mélange « terre humide »), bonne vibration ou compression.
- **Cure** : arroser 2 fois par jour pendant **7 jours**, à l'ombre. Utiliser après 14 à 28 jours de séchage.

> [!astuce] Contrôle simple
> Un agglo sec qui tombe à plat d'une hauteur d'environ 1 m sur un sol dur ne doit pas se casser. Ses arêtes ne doivent pas s'effriter sous l'ongle. En laboratoire : résistance d'au moins 4 MPa (classe B40) pour une maçonnerie porteuse.

## La maçonnerie
- Humidifier les agglos avant la pose par temps chaud.
- Joints de **1 à 1,5 cm**, bien garnis, **verticaux décalés** d'un demi-bloc.
- Monter au cordeau, contrôler l'aplomb et le niveau.
- Ne pas monter plus de 1,20 à 1,50 m par jour sans chaînage.

> [!retenir]
> 12,5 agglos/m² · 30 à 40 agglos par sac à la fabrication · 7 jours d'arrosage · joints décalés.`, quiz:[
  {q:"Combien d'agglos 40 × 20 par m² de mur ?", o:["10", "12,5", "15", "20"], r:1, e:"1 / (0,40 × 0,20) = 12,5."},
  {q:"Le gobetis est :", o:["La couche de finition", "La couche d'accrochage riche en ciment", "Un type d'agglo", "Un adjuvant"], r:1, e:"Mortier fluide dosé à environ 500 kg."},
  {q:"Combien d'agglos de 15 par sac de ciment pour une bonne qualité ?", o:["10 à 15", "30 à 40", "70 à 80", "100"], r:1, e:"Au-delà de 45, ils deviennent friables."},
  {q:"Les joints verticaux d'une maçonnerie doivent être :", o:["Alignés", "Décalés d'un demi-bloc", "Absents", "Remplis de plâtre"], r:1, e:"Le décalage répartit les efforts et évite les fissures."}
 ]},

{id:"mat-3", niv:2, titre:"Le béton : composition et contrôle", duree:35, contenu:`## Les constituants
Ciment + sable + gravier + eau (+ éventuellement adjuvants). La pâte de ciment enrobe les granulats et les colle entre eux.

## Dosages courants pour 1 m³ de béton
| Usage | Ciment | Sable | Gravier | Eau |
|---|---|---|---|---|
| Béton de propreté | 150 kg (3 sacs) | 400 L | 800 L | ≈ 120 L |
| Gros béton, dallage | 250 à 300 kg | 400 L | 800 L | ≈ 150 L |
| **Béton armé** (poteaux, poutres, dalles) | **350 kg (7 sacs)** | **400 L** | **800 L** | **≈ 175 L** |
| Béton armé exposé (bord de mer) | 400 kg | 380 L | 800 L | ≈ 180 L |

> [!exemple] Gâchée à la bétonnière
> Pour 0,25 m³ de béton dosé à 350 kg/m³ : ciment 350 × 0,25 = 87,5 kg (**1¾ sac**), sable 100 L, gravier 200 L, eau ≈ 45 L.
> En pratique on cale la gâchée sur un sac entier : 1 sac de 50 kg dose 50 / 350 = **0,143 m³** de béton, soit environ **1 brouette de sable (60 L), 2 brouettes de gravier (115 L) et 25 L d'eau**.

## Le rapport E/C et la maniabilité
- Résistance et durabilité augmentent quand **E/C diminue** (0,45 à 0,55 pour un béton armé).
- La maniabilité se mesure au **cône d'Abrams** (affaissement) : 5 à 9 cm (classe S2) pour un béton vibré courant, 10 à 15 cm (S3) pour un béton pompé ou très ferraillé.
- Pour fluidifier sans eau : **plastifiant / superplastifiant**.

## Les résistances
- **fc28** : résistance à la compression à 28 jours mesurée sur éprouvettes cylindriques 16 × 32 cm (ou 11 × 22). Classe courante : **C25/30** (fck = 25 MPa sur cylindre, 30 sur cube).
- La traction est environ **10 fois plus faible** que la compression : ft28 = 0,6 + 0,06 fc28 = 2,1 MPa pour fc28 = 25 MPa (BAEL).

## La mise en œuvre
1. Coffrage propre, étanche, huilé ; armatures calées.
2. Transport sans ségrégation (ne pas lâcher le béton de plus de 1,5 m de haut).
3. **Vibration** (aiguille vibrante) : chasse l'air et compacte. Un béton non vibré a des « nids de cailloux ».
4. **Cure** : maintenir humide au moins 7 jours (arrosage, sacs mouillés, film).

> [!retenir]
> Béton armé courant : 350 kg de ciment, 400 L de sable, 800 L de gravier, 175 L d'eau par m³ ; vibrer ; arroser 7 jours.`, quiz:[
  {q:"Dosage courant en ciment d'un béton armé :", o:["150 kg/m³", "250 kg/m³", "350 kg/m³", "600 kg/m³"], r:2, e:"350 kg/m³, soit 7 sacs."},
  {q:"Si le rapport E/C augmente :", o:["La résistance augmente", "La résistance diminue", "Rien ne change", "Le béton sèche plus vite"], r:1, e:"L'eau en excès laisse des pores."},
  {q:"L'affaissement au cône d'Abrams mesure :", o:["La résistance", "La maniabilité", "Le poids", "Le dosage en ciment"], r:1, e:"Plus il est grand, plus le béton est fluide."},
  {q:"Durée minimale de cure humide d'un béton :", o:["1 heure", "1 jour", "7 jours", "28 jours"], r:2, e:"Pour une bonne hydratation en surface."},
  {q:"La résistance à la traction du béton est environ :", o:["Égale à la compression", "10 fois plus faible", "2 fois plus forte", "Nulle"], r:1, e:"D'où la nécessité des aciers dans les zones tendues."}
 ]},

{id:"mat-5", niv:2, titre:"Les aciers pour béton armé", duree:25, contenu:`## Les types d'aciers
- **Ronds lisses** (RL, Fe E235) : anciens, adhérence faible, encore utilisés pour certains crochets.
- **Haute adhérence (HA)** : nervures en relief qui assurent l'adhérence au béton. Nuances **Fe E400** (fe = 400 MPa) et **Fe E500 / B500** (fe = 500 MPa).
- **Treillis soudés** : panneaux pour dallages et dalles de compression (ex. ST25 : HA de 7 mm environ en mailles de 15 cm).

## Diamètres, sections et poids
| Diamètre | Section (cm²) | Poids (kg/m) | Usage courant |
|---|---|---|---|
| HA6 | 0,28 | 0,222 | Cadres, épingles |
| HA8 | 0,50 | 0,395 | Cadres, dalles |
| HA10 | 0,79 | 0,617 | Poteaux et chaînages de maisons, dalles |
| HA12 | 1,13 | 0,888 | Poteaux, poutres, semelles |
| HA14 | 1,54 | 1,208 | Poutres, poteaux R+1 |
| HA16 | 2,01 | 1,578 | Poutres, poteaux d'immeubles |
| HA20 | 3,14 | 2,466 | Ouvrages importants |
Formule : **poids (kg/m) = d² / 162** (d en mm). Les barres sont livrées en longueurs de **12 m**.

> [!exemple]
> 40 barres HA12 de 12 m : 40 × 12 × 0,888 = **426 kg**.

## Réception et stockage
- Vérifier le diamètre au pied à coulisse (un « HA12 » de mauvaise qualité peut mesurer 11 mm : −16 % de section !).
- Stocker sur des **cales**, hors de la boue, séparé par diamètre.
- Une légère rouille superficielle est acceptable ; une rouille feuilletée qui s'écaille ne l'est pas.

## Façonnage
- Plier à froid avec une cintreuse, **jamais en chauffant** (l'acier perd ses caractéristiques).
- Rayon de cintrage minimal (environ 5 à 10 diamètres selon l'usage) pour ne pas fissurer la barre.
- Respecter les **longueurs de recouvrement** (40 à 50 diamètres) et d'ancrage.

> [!retenir]
> Poids = d²/162 kg/m · barres de 12 m · ne jamais chauffer pour plier.`, quiz:[
  {q:"Poids d'un mètre de HA12 :", o:["0,617 kg", "0,888 kg", "1,208 kg", "0,395 kg"], r:1, e:"12² / 162 = 0,888 kg/m."},
  {q:"La limite élastique d'un acier Fe E500 vaut :", o:["235 MPa", "400 MPa", "500 MPa", "1 000 MPa"], r:2, e:"fe = 500 MPa."},
  {q:"Pour plier une barre HA, on doit :", o:["La chauffer au rouge", "La plier à froid à la cintreuse", "La couper", "La tremper dans l'eau"], r:1, e:"Le chauffage dégrade l'acier."},
  {q:"Section d'une barre HA16 :", o:["1,13 cm²", "2,01 cm²", "3,14 cm²", "1,54 cm²"], r:1, e:"π × 1,6² / 4 = 2,01 cm²."}
 ]},

{id:"mat-6", niv:2, titre:"Bois, métaux, verre et matériaux locaux", duree:25, contenu:`## Le bois
- Matériau **anisotrope** : beaucoup plus résistant dans le sens des fibres.
- Essences ivoiriennes courantes : **iroko** (durable, menuiseries extérieures), **framiré**, **fraké / limba** (coffrages, charpentes protégées), **samba / ayous** (léger, intérieur), **teck** (durable), **azobé** (très dur, très durable, ouvrages exposés).
- Ennemis : **termites**, champignons, humidité. Traiter les bois de charpente (traitement insecticide et fongicide) et éviter tout contact avec le sol.
- Taux d'humidité à la mise en œuvre : moins de 20 % pour les charpentes, 12 à 15 % pour les menuiseries.

## Les métaux
- **Acier de construction** (profilés IPE, HEA, tubes) : charpentes métalliques, portiques ; à protéger de la corrosion (galvanisation, peinture antirouille).
- **Aluminium** : menuiseries et tôles bac alu, léger, ne rouille pas.
- **Tôles galvanisées** : économiques mais corrodées plus vite en bord de mer.

## Le verre
Simple vitrage, verre feuilleté (sécurité), verre trempé (portes, garde-corps), verre réfléchissant (contrôle solaire).

## Les matériaux locaux et durables
- **Brique de terre comprimée (BTC)** : terre latéritique + 5 à 8 % de ciment, pressée ; résistance 2 à 5 MPa, bon confort thermique, économique, faible empreinte carbone.
- **Terre cuite** (briques creuses) : bonne isolation, légèreté.
- **Pierre** de taille locale pour soubassements et murs.
- **Bambou** : structures légères, coffrages.

> [!astuce]
> Les BTC exigent une terre bien choisie (argile ni trop abondante ni absente), une presse correcte et un enduit ou des débords de toit qui protègent les murs de la pluie battante.

## Les plastiques
PVC (canalisations d'évacuation, gaines), PPR (eau chaude et froide), PEHD (réseaux enterrés), polystyrène (isolation, hourdis légers).`, quiz:[
  {q:"Le principal ennemi du bois en Côte d'Ivoire est :", o:["Le froid", "Les termites", "Le vent", "Le sable"], r:1, e:"D'où le traitement insecticide."},
  {q:"Les BTC sont stabilisées avec environ :", o:["50 % de ciment", "5 à 8 % de ciment", "Pas de liant", "20 % de chaux vive"], r:1, e:"Une faible quantité suffit avec une bonne terre."},
  {q:"Pour les canalisations d'eau chaude, on utilise souvent :", o:["Le PVC d'évacuation", "Le PPR", "Le bois", "Le béton"], r:1, e:"Le PPR supporte la température et la pression."},
  {q:"Un bois très dur et très durable pour ouvrages exposés :", o:["Samba", "Azobé", "Contreplaqué", "Balsa"], r:1, e:"L'azobé est réputé pour sa durabilité."}
 ]},

{id:"mat-7", niv:3, titre:"Formuler un béton : la méthode de Dreux-Gorisse", duree:40, contenu:`## Les données de départ
- Résistance visée : **fc28 = 25 MPa** (poteaux, poutres, dalles) ;
- Ouvrabilité : béton **plastique**, affaissement au cône d'Abrams de 7 à 9 cm ;
- Gravier concassé 5/25 et sable 0/4 ; ciment CEM II 42,5 (classe vraie σ'c ≈ 45 MPa).

## 1. Résistance moyenne à viser
On vise environ 15 % de plus que la résistance demandée pour tenir compte de la dispersion : **fm ≈ 1,15 × 25 ≈ 29 MPa**.

## 2. Rapport ciment / eau (formule de Bolomey)
$$ fm = G × σ'c × (C/E − 0,5)
Avec G ≈ 0,5 (granulats de bonne qualité) : C/E = 29 / (0,5 × 45) + 0,5 ≈ **1,8**.

## 3. Ciment et eau
Pour cette ouvrabilité, l'abaque de Dreux donne un dosage d'environ **350 kg de ciment par m³**. Eau : E = 350 / 1,8 ≈ **194 litres**.

## 4. Granulats (volumes absolus)
Un mètre cube = 1 000 litres de volumes absolus :
- ciment : 350 / 3,1 = 113 L ; eau : 194 L ; air occlus : 15 L ;
- il reste **678 L de granulats**, répartis d'après la courbe granulaire de référence : sable 35 % (237 L), gravier 65 % (441 L) ;
- masses (masse volumique des grains 2,65) : **sable 629 kg, gravier 1 168 kg**.

> [!retenir] Composition pour 1 m³ (granulats secs)
> Ciment 350 kg · eau 194 L · sable 629 kg · gravier 1 168 kg → masse volumique ≈ 2 340 kg/m³.

## 5. Corriger selon l'humidité du sable
Un sable humide à 5 % apporte 629 × 0,05 ≈ **31 L d'eau** : on ne verse que 194 − 31 = 163 L et on pèse 660 kg de sable humide.

## 6. Gâchée d'essai et contrôle
On fabrique une gâchée, on mesure l'**affaissement** et on confectionne des **éprouvettes** (7 et 28 jours). Si le béton est trop sec, on ajoute un plastifiant plutôt que de l'eau.

> [!attention]
> Chaque litre d'eau ajouté « pour faciliter le coulage » fait perdre de la résistance : 20 L d'eau en plus par m³ peuvent coûter 3 à 4 MPa.`, quiz:[
  {q:"La formule de Bolomey relie la résistance du béton au rapport :", o:["C/E", "S/G", "E/S", "C/G"], r:0, e:"fm = G σ'c (C/E − 0,5)."},
  {q:"Avec 350 kg de ciment et C/E = 1,75, l'eau vaut :", o:["200 L", "350 L", "175 L", "612 L"], r:0, e:"350 / 1,75 = 200 L."},
  {q:"Le cône d'Abrams mesure :", o:["L'ouvrabilité (affaissement)", "La résistance", "La teneur en air", "La masse volumique"], r:0, e:"7 à 9 cm pour un béton plastique."},
  {q:"Un sable humide à 5 % (600 kg sec) apporte environ :", o:["30 L d'eau", "5 L d'eau", "300 L d'eau", "0 L"], r:0, e:"600 × 0,05 = 30 kg = 30 L."}
 ]},

{id:"mat-8", niv:3, titre:"Durabilité et pathologies des matériaux", duree:35, contenu:`## La carbonatation du béton
Le gaz carbonique de l'air pénètre progressivement dans le béton et fait baisser son pH. Quand le front de carbonatation atteint les aciers, ceux-ci ne sont plus protégés et **rouillent**.
$$ x = K × √t
> [!exemple]
> Béton courant, K ≈ 5 mm/an^½ : au bout de 25 ans, x = 5 × √25 = **25 mm**. Un enrobage de 1,5 cm est dépassé en moins de 10 ans ; un enrobage de 3 cm protège plus de 35 ans.

Test sur chantier : on pulvérise de la **phénolphtaléine** sur une cassure fraîche : le béton sain devient **rose**, la zone carbonatée reste grise.

## Les autres agressions
- **Chlorures** (bord de mer, lagune, sel de déverglaçage) : corrosion rapide par piqûres ;
- **Sulfates** (certains sols, eaux usées) : gonflement et désagrégation ;
- **Cycles d'humidité** et retrait : fissures de surface.

## La corrosion des aciers
La rouille occupe **plusieurs fois le volume** de l'acier : elle fait éclater le béton d'enrobage (**épaufrures**) et laisse les aciers apparents. La section d'acier diminue, la sécurité aussi.

## Maçonneries, enduits et bois
- **Remontées capillaires** : salpêtre, peinture qui cloque en pied de mur ;
- Enduits **faïencés** (séchage trop rapide) ou décollés (support poussiéreux) ;
- **Termites** : ennemis n° 1 des charpentes et menuiseries en Côte d'Ivoire → bois durs ou traités, barrière anti-termites sous dallage, pas de bois en contact avec le sol.

## Diagnostiquer et réparer
1. Relever les désordres (photos, cartographie, largeur des fissures au fissuromètre) ;
2. Mesurer : profondeur de carbonatation, enrobage (détecteur d'armatures), résistance (scléromètre, carottes) ;
3. Réparer : **purger** le béton dégradé, **brosser et passiver** les aciers, reconstituer avec un **mortier de réparation**, puis protéger (peinture anti-carbonatation, hydrofuge).`, quiz:[
  {q:"Selon x = K √t avec K = 5 mm/an^½, la carbonatation atteint au bout de 16 ans :", o:["20 mm", "80 mm", "5 mm", "16 mm"], r:0, e:"5 × √16 = 20 mm."},
  {q:"Avec la phénolphtaléine, le béton sain (non carbonaté) devient :", o:["Rose", "Gris", "Bleu", "Noir"], r:0, e:"Le pH élevé fait virer l'indicateur."},
  {q:"Les épaufrures sont causées par :", o:["Le gonflement de la rouille des aciers", "Un excès de ciment", "La peinture", "Le vent"], r:0, e:"La rouille occupe plusieurs fois le volume de l'acier."},
  {q:"Pour protéger une charpente des termites, on :", o:["Utilise des bois durs ou traités, sans contact avec le sol", "Peint en blanc", "Augmente la pente", "Ajoute des tôles"], r:0, e:"Et barrière chimique sous le bâtiment."}
 ]},

{id:"mat-9", niv:3, titre:"Matériaux écologiques et innovants", duree:30, contenu:`## L'énergie grise et le carbone
Fabriquer les matériaux consomme de l'énergie et émet du CO₂. Le **ciment** est le plus gros poste : environ **0,8 à 0,9 t de CO₂ par tonne de clinker**. Les ciments composés (CEM II, CEM III avec laitier, pouzzolanes ou calcaire) en émettent moins.

## La brique de terre comprimée (BTC)
Terre latéritique tamisée, **stabilisée avec 6 à 8 % de ciment**, comprimée à la presse et séchée à l'ombre.
- Résistance : **4 à 6 MPa**, suffisante pour des murs porteurs de maisons et de petits R+1 ;
- Bon confort thermique (inertie, régulation de l'humidité), aspect apprécié ;
- Matériau local : moins de transport.

> [!exemple] Ciment consommé par m² de mur
> BTC 29,5 × 14 × 9,5 cm : environ 31 briques par m², chacune contenant ≈ 0,5 kg de ciment → **≈ 16 kg de ciment par m²**.
> Agglos creux de 15 : 12,5 blocs par m² à ≈ 2,3 kg de ciment chacun → **≈ 29 kg par m²**, sans compter le mortier.

## D'autres matériaux à valoriser
- **Bambou** : très résistant en traction, léger ; à traiter contre les insectes, réservé aux structures légères et aux échafaudages ;
- **Bois certifiés** (gestion durable des forêts), bois locaux durables (iroko, teck) ;
- **Isolants biosourcés** : fibre de coco, typha, laine de chanvre ;
- **Granulats recyclés** issus de la démolition, pour bétons non structurels et remblais.

## Les bétons bas carbone
Ciments à fort taux d'ajouts, **géopolymères** (activation alcaline de cendres ou de laitiers), optimisation des dosages (ne pas surdoser par habitude).

> [!retenir]
> Le matériau le plus écologique est souvent celui qui vient de près, qui est bien dosé, et qui dure longtemps sans réparation.`, quiz:[
  {q:"La stabilisation d'une BTC se fait couramment avec :", o:["6 à 8 % de ciment", "50 % de ciment", "Uniquement de l'eau", "Du bitume"], r:0, e:"Le ciment améliore résistance et tenue à l'eau."},
  {q:"La résistance courante d'une BTC est de :", o:["4 à 6 MPa", "40 à 60 MPa", "0,4 MPa", "100 MPa"], r:0, e:"Suffisante pour des murs porteurs de maisons."},
  {q:"Le matériau qui émet le plus de CO₂ dans un bâtiment courant est :", o:["Le ciment", "Le bois", "La terre", "Le bambou"], r:0, e:"La cuisson du clinker libère beaucoup de CO₂."},
  {q:"Le bambou est surtout intéressant pour :", o:["Sa résistance en traction et sa légèreté", "Sa résistance au feu", "Son poids élevé", "Son isolation phonique"], r:0, e:"Il doit être traité contre les insectes."}
 ]}
]});
