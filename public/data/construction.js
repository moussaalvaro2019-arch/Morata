/* =====================================================================
   CONSTRUCTION DE A À Z : étapes du chantier, éléments d'ouvrage, projets
   ===================================================================== */
A.AZ = {etapes:[], elements:[], projets:[]};

/* ------------------------------------------------------------------ */
/* 1. LES ÉTAPES DU CHANTIER                                           */
/* ------------------------------------------------------------------ */
A.AZ.etapes = [
{id:'terrain', titre:'Le projet et le terrain', icone:'map', duree:'2 à 8 semaines', matieres:['topo','geo','eco'],
 resume:'Sécuriser le terrain, connaître le sol, fixer le programme et le budget avant de dessiner.',
 contenu:`## Avant tout : le terrain
Un bon projet commence par un terrain **juridiquement sûr** et **techniquement connu**. En Côte d'Ivoire, vérifiez le document de propriété : **ACD** (Arrêté de Concession Définitive) ou titre foncier. Une simple attestation villageoise ou une lettre d'attribution ne suffit pas pour obtenir un permis de construire ni pour sécuriser votre investissement.

## Le levé topographique
Le géomètre réalise le **plan de bornage** (limites exactes, bornes) et un **levé topographique** : courbes de niveau, points cotés, arbres, réseaux existants (CIE, SODECI, caniveaux). Ce levé sert à :
- placer le bâtiment en respectant les **reculs** imposés par le lotissement (souvent 3 à 5 m sur rue) ;
- prévoir l'écoulement des eaux pluviales (pente du terrain) ;
- calculer les terrassements (déblais / remblais).

## L'étude de sol (géotechnique)
Pour une petite maison sur un sol connu, des **sondages au pénétromètre** ou des fouilles de reconnaissance peuvent suffire. Pour un R+1 et plus, ou un sol douteux (zone marécageuse, remblai récent, argile gonflante, lagune), l'**étude géotechnique est indispensable**. Elle donne la **contrainte admissible du sol** (σsol en bar ou en MPa) et le **type de fondation** recommandé.

> [!retenir]
> 1 bar = 0,1 MPa = 100 kPa = 10 t/m². Un sol latéritique compact porte souvent 1,5 à 2,5 bars ; une argile molle moins de 1 bar.

## Le programme et le budget
Listez vos besoins : nombre de chambres, salles d'eau, garage, évolutivité (prévoir un étage plus tard ?). Fixez un **budget plafond** en incluant 10 % d'imprévus. Ratios indicatifs à Abidjan :

| Standing | Coût indicatif au m² bâti |
|---|---|
| Économique | 180 000 à 280 000 FCFA |
| Moyen standing | 280 000 à 380 000 FCFA |
| Haut standing | 400 000 à 600 000 FCFA et plus |
| Immeuble de logements | 250 000 à 350 000 FCFA |

> [!attention]
> Si vous prévoyez un étage plus tard, les **fondations et les poteaux doivent être calculés dès le départ pour le R+1**. Renforcer après coup coûte beaucoup plus cher.`},

{id:'conception', titre:'Conception et plans', icone:'compass', duree:'3 à 8 semaines', matieres:['tech','rdm','ba','pb','metre'],
 resume:"De l'esquisse aux plans d'exécution : architecture, structure, électricité, plomberie, devis.",
 contenu:`## Les phases de conception
1. **Esquisse** : premières idées de plan, orientation, volumes.
2. **APS** (Avant-Projet Sommaire) : plans cotés au 1/100, première estimation.
3. **APD** (Avant-Projet Détaillé) : plans définitifs, façades, coupes, choix des matériaux.
4. **Dossier de permis de construire** déposé auprès des services de l'urbanisme.
5. **Plans d'exécution** (PEX) : ce que le chantier utilise réellement.

## Les plans architecturaux
- **Plans de niveaux** : murs, portes, fenêtres, cotes, surfaces des pièces.
- **Façades** : aspect extérieur, hauteurs, ouvertures.
- **Coupes** : hauteurs sous plafond, niveaux des planchers, toiture.
- **Plan de masse et de situation** : position sur la parcelle, reculs, accès.

## Les plans d'exécution
| Plan | Contenu | Qui l'établit |
|---|---|---|
| Fondations | Semelles, longrines, cotes d'implantation | Bureau d'études structure |
| Coffrage | Dimensions des poteaux, poutres, dalles | Bureau d'études structure |
| Ferraillage | Nombre, diamètre et forme des aciers | Bureau d'études structure |
| Électricité | Points lumineux, prises, circuits, tableau | Électricien / BET fluides |
| Plomberie | Alimentation, évacuations, appareils, fosse | Plombier / BET fluides |

> [!retenir]
> On ne construit **jamais** avec le seul plan architectural. Les dimensions des éléments porteurs et les aciers viennent du **calcul de structure** (RDM, béton armé).

## Le devis
À partir des plans, le métreur établit l'**avant-métré** (quantités) puis le **DQE** (Devis Quantitatif et Estimatif) par lots. Ouvrez un projet type dans l'onglet **Projets** pour voir tous ces plans et le métré correspondant.`},

{id:'installation', titre:'Installation de chantier', icone:'hat', duree:'1 semaine', matieres:['chant'],
 resume:'Clôture, magasin, eau, électricité, aires de stockage et sécurité avant le premier coup de pioche.',
 contenu:`## Organiser le terrain
L'installation de chantier conditionne la productivité de tout le projet :
- **Clôture** (tôles ou palissade) et **portail** pour la sécurité du matériel ;
- **Magasin** fermé pour le ciment (sur palettes, à l'abri de l'humidité, empilé sur 10 sacs maximum) et l'outillage ;
- **Point d'eau** (branchement provisoire ou forage, fûts de stockage) : il faut environ 180 litres d'eau par m³ de béton, plus la cure ;
- **Électricité de chantier** (coffret provisoire ou groupe électrogène) pour la bétonnière, le vibreur, l'éclairage ;
- **Aires de stockage** : sable et gravier séparés, sur sol propre ; aciers posés sur cales, à l'abri de la boue ;
- **Panneau de chantier** : références du permis de construire, maître d'ouvrage, entreprise.

## Sécurité
> [!attention]
> Casque, chaussures de sécurité, gants et gilet sont obligatoires. Les fouilles de plus de 1,30 m doivent être blindées ou talutées. Les aciers en attente doivent être protégés (bouchons) pour éviter les blessures.

## Le journal de chantier
Tenez un **cahier de chantier** : effectif, livraisons, météo, travaux réalisés, problèmes. C'est la mémoire du projet et une preuve en cas de litige.`},

{id:'implantation', titre:"Implantation de l'ouvrage", icone:'pin', duree:'1 à 2 jours', matieres:['topo','math'],
 resume:"Reporter le plan sur le terrain avec chaises, cordeaux et contrôle des diagonales.",
 contenu:`## Principe
L'implantation consiste à **matérialiser sur le terrain les axes des murs et des poteaux** à partir du plan de fondations. Une erreur ici se retrouve dans tout le bâtiment.

!fig:implantation|Chaises d'implantation et cordeaux tendus sur les axes

## Méthode pas à pas
1. Repérer les **bornes** et la limite de recul. Tracer une **ligne de base** (souvent la façade principale) parallèle à la rue.
2. Planter les **chaises** (piquets + planche horizontale) à 1,50 m environ en dehors des fouilles, pour qu'elles ne soient pas détruites.
3. Tendre les **cordeaux** entre les chaises et marquer les axes par des clous sur les planches.
4. Contrôler l'**angle droit** par la méthode **3-4-5** : un triangle de côtés 3 m, 4 m et 5 m est rectangle (3² + 4² = 5²). Pour plus de précision : 6-8-10 m.
5. Contrôler les **diagonales** du rectangle : elles doivent être **égales** (tolérance 1 à 2 cm).
6. Fixer le **niveau de référence ±0,00** (niveau fini du rez-de-chaussée) et le reporter sur toutes les chaises au niveau à eau ou au niveau laser.

> [!exemple] Contrôle des diagonales
> Bâtiment de 10,60 m × 7,20 m : diagonale théorique = √(10,60² + 7,20²) = √(112,36 + 51,84) = √164,2 = **12,81 m**. Si vous mesurez 12,78 m et 12,85 m, le rectangle n'est pas d'équerre : corrigez avant de creuser.

> [!astuce]
> Le niveau ±0,00 est généralement placé 15 à 30 cm au-dessus du point haut du terrain naturel pour protéger la maison des eaux de ruissellement.`},

{id:'terrassement', titre:'Terrassements et fouilles', icone:'shovel', duree:'3 à 10 jours', matieres:['geo','topo'],
 resume:'Décaper, creuser les fouilles en puits et en rigole jusqu\'au bon sol, évacuer les déblais.',
 contenu:`## Décapage
On enlève la **terre végétale** (10 à 30 cm) sur toute l'emprise : elle est compressible et contient des matières organiques. Elle est stockée pour les jardins.

## Les fouilles
- **Fouilles en puits** sous chaque poteau pour les **semelles isolées** (par exemple 1,00 × 1,00 m, profondeur 0,80 à 1,20 m) ;
- **Fouilles en rigole** (tranchées de 40 à 60 cm de large) pour les **longrines** ou les **semelles filantes** ;
- **Fouilles en pleine masse** pour un sous-sol ou un radier.

> [!retenir]
> On ne s'arrête pas à une profondeur fixée d'avance : on descend jusqu'au **bon sol** (homogène, compact, non remanié) indiqué par l'étude de sol. Le **fond de fouille** doit être propre, horizontal et sec.

## Contrôles
- Profondeur mesurée depuis le niveau de référence des chaises ;
- Dimensions des puits (au moins 10 cm de plus que la semelle de chaque côté pour le coffrage ou le travail) ;
- Présence d'eau : pomper, ne jamais couler du béton dans l'eau stagnante.

> [!attention]
> Une fouille laissée ouverte sous la pluie se dégrade : prévoir le **béton de propreté** rapidement après l'ouverture.

## Volume des déblais
Volume en place × **coefficient de foisonnement** (1,2 à 1,4 selon le sol) = volume à évacuer par camion. Voir la matière Métré.`},

{id:'fondations', titre:'Les fondations', icone:'layers', duree:'1 à 3 semaines', matieres:['ba','geo','mat','rdm'],
 resume:'Béton de propreté, ferraillage et coulage des semelles avec leurs amorces de poteaux.',
 contenu:`## Rôle des fondations
Les fondations **transmettent les charges** du bâtiment au sol sans dépasser sa contrainte admissible et sans tassements excessifs. Le choix dépend du sol et des charges :

!fig:fondations-types|Semelles isolées, filantes, radier, pieux

## Étapes de réalisation d'une semelle isolée
1. **Béton de propreté** (5 cm, dosé à 150 kg/m³) : il isole les aciers du sol et donne une surface plane.
2. Pose de la **nappe d'aciers** (treillis en HA10 ou HA12 dans les deux sens) sur des **cales de 5 cm** (enrobage).
3. Mise en place des **attentes du poteau** (aciers longitudinaux avec retours en pied) et de 2 ou 3 cadres pour les maintenir.
4. **Coulage** du béton dosé à 350 kg/m³, **vibration** pour chasser l'air, réglage du dessus.
5. Coffrage et coulage de l'**amorce de poteau** jusqu'au niveau des longrines.

!fig:semelle|Coupe d'une semelle isolée avec ses aciers

## Dimensionnement simplifié
L'aire de la semelle doit vérifier : **A × B ≥ N / σsol**, avec N la charge transmise par le poteau.

> [!exemple] Semelle d'une maison R+1
> Charge du poteau à l'ELS : N = 260 kN. Sol : σsol = 1,5 bar = 0,15 MPa = 150 kN/m².
> Aire nécessaire = 260 / 150 = 1,73 m² → semelle carrée de **1,35 × 1,35 m** (1,82 m²).
> Hauteur : h ≥ (A − a)/4 = (1,35 − 0,25)/4 = 0,275 m → on prend **h = 30 cm** (+ 5 cm d'enrobage déjà compris dans la hauteur utile).

> [!attention]
> L'enrobage en fondation est de **4 à 5 cm**. Des aciers posés directement sur la terre rouillent et perdent leur adhérence : c'est une des premières causes de désordres.`},

{id:'soubassement', titre:'Soubassement, longrines et dallage', icone:'brick', duree:'1 à 2 semaines', matieres:['ba','mat','tech'],
 resume:'Relier les semelles, monter le soubassement, remblayer, compacter et couler le dallage.',
 contenu:`## Les longrines
Les **longrines** sont des poutres en béton armé (souvent 20 × 30 cm, 4 HA10 ou 4 HA12, cadres HA6 tous les 15 cm) qui **relient les semelles** entre elles. Elles portent le mur de soubassement et empêchent les semelles de se déplacer indépendamment.

!fig:longrine|Longrine entre deux semelles

## Le soubassement
Entre la longrine et le niveau du dallage, on monte 2 à 4 rangs d'**agglos pleins** (ou creux remplis de béton). Le soubassement protège le bas des murs de l'humidité.

> [!astuce]
> Appliquer un **traitement anti-termites** sur le fond de forme et en pied de mur avant le remblai : c'est peu coûteux et évite des dégâts considérables sur les menuiseries et charpentes en bois.

## Remblai et dallage
1. **Remblai** en couches de 15 à 20 cm, arrosées et **compactées** (dame ou plaque vibrante). Un remblai mal compacté provoque des fissures du dallage.
2. **Hérisson** de pierres cassées (10 à 15 cm) pour couper les remontées capillaires.
3. **Film polyane** (facultatif mais recommandé).
4. **Dallage** de 8 à 10 cm en béton dosé à 300 kg/m³ avec **treillis soudé**, joints de retrait tous les 25 à 30 m².

!fig:coupe-type|Coupe verticale type d'une maison`},

{id:'elevation', titre:'Élévation : poteaux et murs', icone:'column', duree:'2 à 5 semaines', matieres:['ba','tech','mat'],
 resume:'Couler les poteaux, monter les murs en agglos d\'aplomb, poser les linteaux.',
 contenu:`## Les poteaux
Les poteaux reçoivent les charges des poutres et chaînages et les descendent vers les fondations. Dans une maison courante : **20 × 20 cm**, **4 HA10 ou 4 HA12**, cadres **HA6 tous les 15 cm** (10 cm près des nœuds).

!fig:poteau-coupe|Section d'un poteau : aciers, cadre et enrobage

Points de contrôle avant coulage :
- **aplomb** du coffrage (fil à plomb ou niveau) et stabilité des étais ;
- **enrobage** respecté grâce à des **cales** fixées sur les cadres ;
- **recouvrement** des aciers d'au moins **50 diamètres** (60 cm pour du HA12) ;
- coffrage propre et huilé, joints étanches pour éviter les fuites de laitance.

## Les murs en agglos
- Agglos creux de **15** pour les murs extérieurs, de **10** pour les cloisons.
- **12,5 agglos par m²** (format 40 × 20 cm).
- Joints de 1 à 1,5 cm au mortier dosé à 250-300 kg/m³, **joints verticaux décalés** (pose en quinconce).
- Vérifier l'**alignement** au cordeau et l'**aplomb** à chaque rang.

## Linteaux et chaînages
Au-dessus de chaque ouverture, un **linteau** en béton armé déborde de **20 cm minimum** de chaque côté. En tête de mur, le **chaînage horizontal** ceinture tout le bâtiment.

!fig:chainage|Chaînage horizontal en tête de mur

> [!attention]
> Ne jamais couler les poteaux **après** le mur sans prévoir l'harpage ou les aciers de liaison ; ne jamais faire de saignée horizontale dans un poteau pour passer une gaine.`},

{id:'planchers', titre:'Poutres et planchers', icone:'beam', duree:'2 à 4 semaines par niveau', matieres:['ba','rdm','mmc'],
 resume:'Coffrer, étayer, ferrailler, contrôler, couler et décoffrer poutres et dalles.',
 contenu:`## Choisir le plancher
- **Dalle pleine** en béton armé (12 à 16 cm) : simple, monolithique, bonne isolation acoustique ; adaptée aux portées jusqu'à 5 m environ.
- **Plancher à corps creux** (hourdis) **16 + 4** : poutrelles + entrevous + dalle de compression de 4 cm avec treillis. Économique et léger, très utilisé en Afrique de l'Ouest.

!fig:hourdis|Plancher à corps creux 16+4

## Pré-dimensionnement
| Élément | Règle pratique |
|---|---|
| Poutre isostatique | h ≈ L/10 à L/12 |
| Poutre continue | h ≈ L/12 à L/15 |
| Largeur de poutre | b ≈ 0,3 h à 0,5 h (20 cm minimum) |
| Dalle pleine continue | e ≈ L/30 à L/35 |
| Corps creux 16+4 | portée jusqu'à 5 m environ |

## Ferraillage d'une poutre
!fig:poutre-elevation|Aciers inférieurs, chapeaux sur appuis et cadres resserrés

- **Aciers inférieurs** : ils reprennent la traction due au moment en travée (M = qL²/8 pour une poutre sur deux appuis).
- **Chapeaux** sur appuis : traction en partie haute au droit des poteaux pour les poutres continues.
- **Cadres** plus serrés près des appuis où l'**effort tranchant** est maximal.

## Coulage et décoffrage
1. Contrôle complet du ferraillage (nombre, diamètres, enrobage de 2 à 2,5 cm, cales, gaines électriques posées) **avant** de commander le béton.
2. Coulage en une seule fois par zone, **vibration**, réglage et lissage.
3. **Cure** : arroser ou couvrir pendant au moins 7 jours.
4. Décoffrage des joues de poutres après 2 à 3 jours ; **étais laissés 21 à 28 jours** sous les dalles et poutres.

> [!attention]
> Retirer les étais trop tôt est l'une des causes principales de flèches excessives et de fissures. Le béton n'atteint sa résistance de calcul (fc28) qu'à 28 jours.`},

{id:'toiture', titre:'Toiture et étanchéité', icone:'roof', duree:'1 à 3 semaines', matieres:['tech','mdf','pb','therm'],
 resume:'Charpente, couverture en tôle ou tuile, ou toiture-terrasse étanchée, avec évacuation des eaux pluviales.',
 contenu:`## Toiture en pente
- **Charpente** en bois traité (fermes, pannes, chevrons) ou **métallique** (profilés, pannes en Z ou C).
- **Couverture** : tôles bac aluminium (6/10e ou 7/10e), tôles ondulées, tuiles mécaniques. Pente minimale : 10 à 15 % pour le bac alu, 30 à 40 % pour la tuile.
- **Débords de toit** de 40 à 80 cm pour protéger les façades du soleil et de la pluie.
- **Faux plafond** (staff, plâtre, lambris PVC) avec **lame d'air ventilée** et isolant si possible : la toiture reçoit la plus grande part de la chaleur solaire.

!fig:treillis|Une ferme en treillis transmet les charges par des barres tendues ou comprimées

## Toiture-terrasse
Dalle en béton armé avec **forme de pente** (1,5 à 2 %), **étanchéité multicouche** (bitume ou membrane), relevés de 15 cm minimum sur les acrotères, protection (gravillons ou carrelage pour une terrasse accessible).

## Évacuation des eaux pluviales
Les gouttières et descentes sont dimensionnées selon la surface de toiture et l'intensité des pluies (forte en zone tropicale) : compter environ **1 cm² de section de descente par m² de toiture** projetée, et au moins une descente tous les 12 à 15 m de gouttière.

> [!astuce]
> Les tôles de couleur claire et un faux plafond ventilé peuvent faire baisser la température intérieure de plusieurs degrés. Voir la matière Thermique du bâtiment.`},

{id:'reseaux', titre:'Électricité et plomberie', icone:'plug', duree:'2 à 4 semaines', matieres:['mdf','tech','pb'],
 resume:"Gaines, câbles, tableau, prise de terre ; alimentation en eau, évacuations et assainissement.",
 contenu:`## Électricité (principes de la NF C 15-100)
- Les **gaines** (ICTA) sont posées avant l'enduit, dans les murs, et **dans la dalle avant coulage**.
- Sections des conducteurs (cuivre) : **1,5 mm²** pour l'éclairage (disjoncteur 10 ou 16 A, 8 points max), **2,5 mm²** pour les prises (20 A, 8 prises max), **6 mm²** pour la cuisinière (32 A).
- **Dispositif différentiel 30 mA** obligatoire pour la protection des personnes.
- **Prise de terre** (piquet ou boucle à fond de fouille) reliée à toutes les prises et masses métalliques.
- Le **tableau** regroupe les protections, avec une étiquette par circuit.

## Plomberie sanitaire
- **Alimentation** : tubes PPR (polypropylène) ou PEHD depuis le compteur SODECI, avec vanne d'arrêt générale et vannes par pièce d'eau.
- **Évacuations** en PVC : diamètre 40 mm (lavabo, douche), 50 mm (évier), **100 mm** (WC et colonnes), **pente 1 à 3 %**.
- **Ventilation primaire** des chutes pour éviter les mauvaises odeurs et le désiphonnage.
- **Assainissement autonome** : fosse septique toutes eaux + puisard ou épandage, à plus de 5 m de la maison et 35 m d'un puits.

> [!retenir]
> Les réseaux se posent **en même temps que le gros œuvre** : réservations dans les longrines et les dalles, fourreaux sous dallage. Ouvrir le béton après coup affaiblit la structure.

Ouvrez un projet type pour voir le **plan d'électricité** et le **plan de plomberie** générés à partir de l'architecture.`},

{id:'menuiseries', titre:'Menuiseries et enduits', icone:'door', duree:'2 à 3 semaines', matieres:['mat','tech'],
 resume:'Poser les cadres de portes et fenêtres, réaliser les enduits intérieurs et extérieurs.',
 contenu:`## Menuiseries
- **Cadres et huisseries** posés d'aplomb et de niveau, scellés ou chevillés avant les enduits.
- Portes intérieures **0,80 × 2,10 m** (0,70 pour WC et salle d'eau), porte d'entrée **0,90 à 1,00 m**.
- Fenêtres en aluminium ou en bois, avec **appui** en béton présentant une pente vers l'extérieur et une **goutte d'eau**.
- Grilles de protection selon le besoin de sécurité.

## Enduits au mortier de ciment
1. **Gobetis** (couche d'accrochage très fluide, dosage 500 kg/m³) ;
2. **Corps d'enduit** (1,5 cm, dosé à 350-400 kg/m³) dressé à la règle entre des **repères** (nus) verticaux ;
3. **Finition** talochée ou lissée.

> [!astuce]
> Humidifier le mur avant l'enduit et le protéger du soleil direct : un enduit qui sèche trop vite **faïence** (micro-fissures) et se décolle.

Tolérance de planéité courante : **5 mm sous la règle de 2 m**.`},

{id:'finitions', titre:'Revêtements et finitions', icone:'paint', duree:'3 à 6 semaines', matieres:['mat','tech','acou'],
 resume:'Chapes, carrelage, faïence, faux plafonds, peinture : la qualité visible du bâtiment.',
 contenu:`## Sols
- **Chape** de ragréage si nécessaire, avec pente de 1 % vers les siphons dans les salles d'eau.
- **Carrelage** collé (mortier-colle) ou scellé (mortier), joints réguliers, **calepinage** préparé pour éviter les petites coupes visibles.
- Plinthes assorties.

## Murs
- **Faïence** dans les salles d'eau (hauteur 1,80 à 2,20 m) et crédences de cuisine.
- **Peinture** : préparation (rebouchage, ponçage), **couche d'impression**, puis **2 couches de finition**. Vinylique ou acrylique à l'intérieur, pliolite ou acrylique extérieur sur les façades.

## Plafonds
Faux plafonds en staff, plâtre ou PVC ; prévoir les trappes de visite et les réservations pour les luminaires.

> [!retenir]
> Les finitions représentent souvent **30 à 45 % du coût total** d'une maison. C'est là que le standing (économique, moyen, haut) fait la différence de budget.

## Confort acoustique
Une dalle pleine lourde, des cloisons maçonnées et des menuiseries étanches réduisent les bruits. Voir la matière Acoustique du bâtiment.`},

{id:'reception', titre:'VRD, réception et entretien', icone:'flag', duree:'1 à 3 semaines', matieres:['chant','eco'],
 resume:'Raccorder aux réseaux, aménager les abords, réceptionner les travaux et suivre les garanties.',
 contenu:`## Voiries et réseaux divers (VRD)
Raccordements définitifs **CIE** (électricité) et **SODECI** (eau), caniveaux, regards, allées, clôture, portail, espaces verts.

## La réception des travaux
La réception est l'acte par lequel le maître d'ouvrage **accepte l'ouvrage**, avec ou sans **réserves**. Elle se fait par une visite contradictoire et un **procès-verbal (PV) de réception** signé.
- Les réserves (défauts constatés) sont listées avec un délai de levée.
- La réception déclenche le point de départ des **garanties**.

| Garantie | Durée | Ce qu'elle couvre |
|---|---|---|
| Parfait achèvement | 1 an | Tous les désordres signalés |
| Bon fonctionnement (biennale) | 2 ans | Équipements dissociables (robinets, portes…) |
| Décennale | 10 ans | Désordres compromettant la solidité ou rendant l'ouvrage impropre à sa destination |

## Le dossier des ouvrages exécutés (DOE)
Plans conformes à l'exécution, notices des équipements, emplacement des réseaux enterrés : indispensable pour l'entretien et les travaux futurs.

> [!astuce]
> Entretien courant : nettoyer les gouttières avant la saison des pluies, vérifier l'étanchéité des terrasses, repeindre les façades tous les 5 à 8 ans.`}
];

/* ------------------------------------------------------------------ */
/* 2. LES ÉLÉMENTS D'OUVRAGE (comment les concevoir et les réaliser)    */
/* ------------------------------------------------------------------ */
A.AZ.elements = [
{id:'poteau', titre:'Poteau', fig:'poteau-coupe', fig2:'poteau-elevation', calc:'poteau', matieres:['ba','rdm'],
 resume:'Élément vertical qui descend les charges vers les fondations.',
 contenu:`## Rôle
Le poteau reçoit les charges des poutres, chaînages et planchers et les transmet aux fondations. Il travaille principalement en **compression** ; s'il est élancé, il risque le **flambement**.

## Dimensions courantes
| Bâtiment | Section | Aciers longitudinaux | Cadres |
|---|---|---|---|
| Maison RDC | 20 × 20 cm | 4 HA10 | HA6 tous les 15 cm |
| Maison R+1 (RDC) | 20 × 25 à 25 × 25 | 4 HA12 | HA6 / 15 cm |
| Immeuble R+4 (RDC) | 30 × 30 à 40 × 40 | 8 HA14 à 8 HA16 | HA8 / 15 cm |

## Règles à respecter
- **Enrobage** : 2,5 cm à l'intérieur, 3 cm en façade, 5 cm en fondation.
- Section d'acier minimale : **A ≥ 0,2 % de la section de béton** et 4 cm² par mètre de périmètre (BAEL).
- Espacement des cadres **≤ 15 fois le plus petit diamètre longitudinal** (15 × 1,0 = 15 cm pour du HA10) et resserrés à 10 cm près des nœuds.
- **Recouvrement** des barres : 40 à 50 diamètres.
- Béton dosé à **350 kg/m³**, bien vibré : les nids de cailloux en pied de poteau sont un défaut grave.

!fig:poteau-elevation|Cadres resserrés aux nœuds

> [!attention] Erreurs fréquentes
> Cadres trop espacés ou mal fermés (crochets à 135° recommandés), aciers collés au coffrage (pas de cales), poteau décalé par rapport à la semelle, reprise de bétonnage sale.`},
{id:'poutre', titre:'Poutre', fig:'poutre-coupe', fig2:'poutre-elevation', calc:'poutre', matieres:['ba','rdm'],
 resume:'Élément horizontal qui porte les planchers et les murs et travaille en flexion.',
 contenu:`## Rôle
La poutre porte les charges des planchers (et parfois des murs) et les reporte sur les poteaux. Elle travaille en **flexion** : la partie haute est **comprimée**, la partie basse **tendue**. Le béton résiste mal à la traction : ce sont les **aciers inférieurs** qui la reprennent.

## Pré-dimensionnement
- Hauteur : **h ≈ L/10 à L/12** (poutre isostatique), **L/12 à L/15** (poutre continue).
- Largeur : **b ≈ 0,3 à 0,5 h**, au moins 20 cm pour loger les aciers.
- Exemple : portée de 4,50 m → h = 450/12 ≈ 37,5 → **20 × 40 cm**.

## Calcul simplifié des aciers
Pour une poutre sur deux appuis sous charge uniforme q (kN/m) :
$$ M max = q × L² / 8
$$ As ≈ M / (0,9 × d × fsu)    avec fsu = fe / 1,15 = 435 MPa pour du Fe E500

> [!exemple]
> q = 25 kN/m (ELU), L = 4,50 m → M = 25 × 4,5² / 8 = 63,3 kN·m. Avec d = 0,36 m :
> As = 0,0633 / (0,9 × 0,36 × 435) = 4,49 × 10⁻⁴ m² = **4,49 cm²** → **3 HA14** (4,62 cm²) ou 4 HA12 (4,52 cm²).

## Mise en œuvre
- Cadres resserrés près des appuis (effort tranchant), **chapeaux** sur appuis intermédiaires.
- Enrobage 2,5 cm ; cales sous les aciers inférieurs.
- Étaiement maintenu **21 à 28 jours**.`},
{id:'dalle', titre:'Dalle pleine', fig:'dalle-coupe', calc:'dalle', matieres:['ba','rdm'],
 resume:'Plancher en béton armé coulé en place, porteur dans une ou deux directions.',
 contenu:`## Rôle
La dalle reçoit les charges d'exploitation (personnes, mobilier) et son poids propre, et les transmet aux poutres ou aux murs. Elle assure aussi le **contreventement horizontal** (effet diaphragme) et l'**isolation acoustique** entre niveaux.

## Épaisseur
- Dalle portant dans un sens (Ly > 2 Lx) : **e ≈ Lx/25 à Lx/30**.
- Dalle portant dans deux sens : **e ≈ Lx/30 à Lx/40**.
- Minimum courant : **12 cm** (15 à 16 cm pour une bonne isolation acoustique).

## Ferraillage
- **Nappe inférieure** : aciers porteurs dans le sens de la petite portée Lx (HA8 à HA12 tous les 15 à 20 cm), aciers de répartition perpendiculaires.
- **Chapeaux** (nappe supérieure) au droit des appuis et en rive.
- **Enrobage : 2 cm** ; cales en béton ou en plastique sous la nappe, **chaises** pour tenir les chapeaux.

> [!retenir]
> Poids propre d'une dalle : 25 kN/m³ × e. Une dalle de 15 cm pèse **3,75 kN/m²** (375 kg/m²), avant revêtement et charges d'exploitation (1,5 kN/m² pour un logement).

## Coulage
Commencer par les poutres puis la dalle, en une seule fois. Vibrer, régler, **arroser pendant 7 jours** (cure), étais conservés 21 à 28 jours.`},
{id:'hourdis', titre:'Plancher à corps creux', fig:'hourdis', calc:'hourdis', matieres:['ba','tech'],
 resume:'Poutrelles + hourdis + dalle de compression : le plancher économique le plus courant.',
 contenu:`## Composition
- **Poutrelles** préfabriquées (béton précontraint ou armé) posées entre les poutres, tous les 60 cm environ ;
- **Entrevous (hourdis)** en béton ou en polystyrène posés entre les poutrelles ;
- **Dalle de compression** de 4 à 5 cm avec un **treillis soudé** ;
- Le plancher est désigné par « hauteur du hourdis + épaisseur de la dalle » : **16 + 4**, 20 + 4, 25 + 5.

## Domaine d'emploi
| Plancher | Portée courante |
|---|---|
| 12 + 4 | jusqu'à 3,5 m |
| 16 + 4 | jusqu'à 5 m |
| 20 + 4 | jusqu'à 6 m |

## Mise en œuvre
1. Pose des poutrelles avec un **appui minimal de 5 cm**, **étaiement** à mi-portée (ou tous les 1,50 m) ;
2. Pose des hourdis, des **rehausses** et des aciers de chaînage ;
3. Treillis soudé + chapeaux sur les appuis ;
4. Arrosage des hourdis puis coulage du béton de la table de compression.

> [!attention]
> Les poutrelles se posent toujours dans le sens de la **petite portée** et ne doivent pas être coupées ou percées.`},
{id:'semelle', titre:'Semelle isolée', fig:'semelle', calc:'semelle', matieres:['ba','geo'],
 resume:'Fondation sous poteau qui répartit la charge sur une surface de sol suffisante.',
 contenu:`## Rôle
La semelle **élargit l'appui** du poteau pour que la pression sur le sol reste inférieure à sa contrainte admissible.

## Dimensionnement
$$ A × B ≥ N / σsol
$$ hauteur : h ≥ (A − a) / 4 + 5 cm

Avec N la charge du poteau (à l'ELS pour la vérification du sol), a la largeur du poteau.

> [!exemple]
> N = 180 kN, σsol = 2 bars = 200 kN/m² → A × B ≥ 0,90 m² → semelle **1,00 × 1,00 m**, h ≥ (1,00 − 0,20)/4 = 0,20 m → **h = 25 cm**.

## Ferraillage
Treillis de barres HA10 à HA14 dans les deux directions, espacées de 15 à 20 cm, avec **crochets** ou retours en extrémité. Enrobage **5 cm** grâce au béton de propreté et aux cales.

## Mise en œuvre
Fouille → béton de propreté → nappe sur cales → attentes du poteau tenues par des cadres → coulage et vibration → amorce de poteau.`},
{id:'filante', titre:'Semelle filante', fig:'semelle-filante', calc:'filante', matieres:['ba','geo'],
 resume:'Fondation continue sous un mur porteur.',
 contenu:`## Rôle et usage
La semelle filante est une bande continue de béton armé sous un **mur porteur**. Elle convient aux constructions en maçonnerie porteuse et aux sols de qualité moyenne.

## Dimensionnement
Pour une charge linéique p (kN/m) : **B ≥ p / σsol**, h ≥ (B − b)/4 + 5 cm.

> [!exemple]
> Mur porteur transmettant p = 60 kN/m, sol à 1,5 bar (150 kN/m²) : B ≥ 0,40 m → **B = 50 cm**, h = 20 cm.

## Ferraillage
Aciers **longitudinaux filants** (3 à 4 HA10) et aciers **transversaux** (HA8 ou HA10 tous les 20 cm) qui reprennent la flexion transversale.`},
{id:'longrine', titre:'Longrine', fig:'longrine', calc:'lineaire', matieres:['ba'],
 resume:'Poutre de fondation qui relie les semelles et porte le soubassement.',
 contenu:`## Rôle
- **Relier** les semelles pour éviter les déplacements différentiels ;
- **Porter** les murs de soubassement et de façade ;
- Assurer un **chaînage** en pied du bâtiment.

## Dimensions courantes
**20 × 30 cm** à **20 × 40 cm**, **4 HA10 ou 4 HA12**, cadres **HA6 tous les 15 cm**. Enrobage **4 à 5 cm** si la longrine est en contact avec le sol.

> [!astuce]
> Prévoir dans les longrines les **fourreaux** (tubes PVC) pour le passage des canalisations d'eau et des câbles avant le coulage.`},
{id:'chainage', titre:'Chaînage', fig:'chainage', calc:'lineaire', matieres:['ba','tech'],
 resume:'Ceinture en béton armé qui solidarise les murs en tête et aux angles.',
 contenu:`## Rôle
Les chaînages **horizontaux** (en tête de mur, au niveau des planchers) et **verticaux** (aux angles, aux jonctions de murs) forment une **ceinture** qui empêche la fissuration et l'écartement des murs, notamment en cas de tassement ou de séisme.

## Dimensions
Section courante **15 × 20 ou 20 × 20 cm**, **4 HA10**, cadres **HA6 tous les 15 à 20 cm**. Le chaînage doit être **continu** : aux angles, les aciers se croisent avec un retour d'au moins 50 diamètres.

> [!retenir]
> En construction en agglos, les chaînages horizontaux et verticaux sont **obligatoires** : un mur non chaîné se fissure dès les premiers mouvements du sol.`},
{id:'linteau', titre:'Linteau', fig:'chainage', calc:'lineaire', matieres:['ba','rdm'],
 resume:'Petite poutre au-dessus d\'une porte ou d\'une fenêtre.',
 contenu:`## Rôle
Le linteau franchit l'ouverture et reporte le poids du mur situé au-dessus sur les **trumeaux** (parties de mur de chaque côté).

## Règles pratiques
- **Appui de 20 cm minimum** de chaque côté de l'ouverture (souvent 25 cm).
- Hauteur 15 à 20 cm, largeur égale à l'épaisseur du mur.
- Ferraillage courant : **2 HA10 en bas + 2 HA8 en haut**, cadres HA6 tous les 15 cm (pour des ouvertures jusqu'à 1,50 m).
- Souvent coulé avec le chaînage quand l'ouverture est proche de celui-ci.

> [!exemple]
> Fenêtre de 1,20 m dans un mur de 15 : linteau de 1,20 + 2 × 0,25 = **1,70 m**, section 15 × 20 cm → volume 0,051 m³.`},
{id:'escalier', titre:'Escalier', fig:'escalier', calc:'escalier', matieres:['ba','math','tech'],
 resume:'Ouvrage de circulation verticale : confort réglé par la formule de Blondel.',
 contenu:`## Vocabulaire
- **Hauteur de marche h** (16 à 18 cm), **giron g** (largeur de la marche, 26 à 30 cm) ;
- **Emmarchement** : largeur de passage (0,90 m minimum dans un logement, 1,20 m en immeuble) ;
- **Paillasse** : dalle inclinée en béton armé qui porte les marches ; **palier** : plate-forme intermédiaire.

## Formule de Blondel
$$ 60 cm ≤ 2h + g ≤ 64 cm

> [!exemple]
> Hauteur à franchir : 3,06 m. Avec 18 marches : h = 306/18 = 17 cm. Blondel : g = 63 − 2 × 17 = **29 cm**. Longueur en plan (17 girons) : 17 × 0,29 = **4,93 m**.

## Ferraillage de la paillasse
Épaisseur e ≈ L/25 à L/30 (12 à 15 cm). Aciers porteurs dans le sens de la pente en nappe inférieure (HA10 à HA12 tous les 15 cm), aciers de répartition, **chapeaux** aux appuis et en liaison avec les paliers.`}
];

/* ------------------------------------------------------------------ */
/* 3. LES PROJETS TYPES                                                 */
/*    pièces : rectangles {n, t, x, y, w, h} en mètres (axe des murs)  */
/*    portes : {x, y, w, o:'h'|'v', s:±1 (ouverture), h:1 (charnière en fin)} */
/*    fenêtres : {x, y, w, o}                                          */
/* ------------------------------------------------------------------ */
A.AZ.projets = [
{id:'eco', titre:'Maison économique F3', standing:'Économique', niveauxTxt:'Rez-de-chaussée', surface:70, budget:[16000000, 22000000], duree:'5 à 6 mois', toiture:'pente', entrees:2,
 site:{ville:'Abidjan, Yopougon', alt:24.60, tn:-0.20, sol:{sigma:1.5, nature:'Latérite argileuse compacte', prof:0.90}, orient:'S', borne:[-3, -4]},
 toit:{type:'2 pans', pente:15, debord:0.6, couverture:'Tôles bac aluminium 6/10e', charpente:'Bois traité (fermes en W)', entraxe:1.2},
 coupes:[{nom:'A', x:5.9}, {nom:'B', y:2.0}],
 gamme:{carreau:.75, faience:.8, fenetre:.65, porte:.7, portee:.6, sanit:.7, fplaf:.8, peinti:.85, peinte:.85, tableau:.7, charpente:.9},
 resume:'2 chambres, séjour, cuisine, salle d\'eau, WC, magasin et buanderie sur 76 m² d\'emprise.',
 description:`Maison de plain-pied conçue pour un budget maîtrisé et une **extension future** possible (troisième chambre à l'arrière). La structure est en **poteaux et chaînages en béton armé** avec un remplissage en **agglos creux de 15**, sur **semelles isolées reliées par des longrines**. La toiture est en **tôles bac aluminium** sur charpente en bois traité, avec faux plafond.`,
 struct:{poteau:20, semelle:[80,80,25], longrine:[20,30], chainage:[20,20], prof:0.9, aciers:'Poteaux 4 HA10, cadres HA6/15 · Longrines 4 HA10 · Chaînages 4 HA10 · Semelles nappe HA10/15 dans les 2 sens'},
 pieces:[
  {n:'Séjour', t:'sejour', x:0, y:0, w:4.6, h:4.8},
  {n:'Chambre 1', t:'chambre', x:4.6, y:0, w:3.0, h:3.6},
  {n:'Chambre 2', t:'chambre', x:7.6, y:0, w:3.0, h:3.6},
  {n:'Dégagement', t:'circ', x:4.6, y:3.6, w:6.0, h:1.2},
  {n:'Cuisine', t:'cuisine', x:0, y:4.8, w:3.0, h:2.4},
  {n:'Magasin', t:'service', x:3.0, y:4.8, w:1.6, h:2.4},
  {n:'Salle d\'eau', t:'eau', x:4.6, y:4.8, w:2.6, h:2.4},
  {n:'WC', t:'wc', x:7.2, y:4.8, w:1.4, h:2.4},
  {n:'Buanderie', t:'service', x:8.6, y:4.8, w:2.0, h:2.4}
 ],
 portes:[
  {x:1.6, y:0, w:1.0, o:'h', s:1},
  {x:4.6, y:3.75, w:0.9, o:'v', s:1},
  {x:6.6, y:3.6, w:0.8, o:'h', s:-1, h:1},
  {x:7.8, y:3.6, w:0.8, o:'h', s:-1},
  {x:1.0, y:4.8, w:0.8, o:'h', s:1},
  {x:3.0, y:5.3, w:0.7, o:'v', s:1},
  {x:5.0, y:4.8, w:0.7, o:'h', s:1},
  {x:7.55, y:4.8, w:0.7, o:'h', s:1},
  {x:9.4, y:4.8, w:0.8, o:'h', s:1, h:1},
  {x:10.6, y:5.6, w:0.9, o:'v', s:-1}
 ],
 fenetres:[
  {x:0, y:1.4, w:1.2, o:'v'}, {x:3.1, y:0, w:1.2, o:'h'}, {x:5.5, y:0, w:1.2, o:'h'}, {x:8.5, y:0, w:1.2, o:'h'},
  {x:10.6, y:1.2, w:1.0, o:'v'}, {x:0.9, y:7.2, w:1.2, o:'h'}, {x:5.4, y:7.2, w:0.6, o:'h'}, {x:7.6, y:7.2, w:0.6, o:'h'}, {x:9.1, y:7.2, w:0.8, o:'h'}
 ],
 planning:[['Installation, implantation',0,1],['Terrassements',1,1],['Fondations, longrines',2,2],['Soubassement, dallage',4,2],['Poteaux, murs, chaînages',6,4],['Charpente, couverture',10,2],['Électricité, plomberie',11,4],['Menuiseries, enduits',13,3],['Carrelage, faux plafond',16,3],['Peinture, VRD, réception',19,3]],
 lots:[['Terrassements & fondations',18],['Élévation béton armé & maçonnerie',27],['Toiture',13],['Menuiseries',10],['Électricité',7],['Plomberie sanitaire',7],['Revêtements & enduits',12],['Peinture',6]]
},
{id:'moyen', titre:'Villa moyen standing F5', standing:'Moyen standing', niveauxTxt:'Rez-de-chaussée', surface:135, budget:[42000000, 55000000], duree:'7 à 9 mois', toiture:'pente', entrees:2,
 site:{ville:'Abidjan, Cocody Angré', alt:58.20, tn:-0.25, sol:{sigma:1.8, nature:'Sable argileux latéritique', prof:1.00}, orient:'S', borne:[-4, -5]},
 toit:{type:'4 pans', pente:17, debord:0.7, couverture:'Tôles bac aluminium 7/10e', charpente:'Métallique (fermes en IPE et pannes en Z)', entraxe:3.0},
 coupes:[{nom:'A', x:3.0}, {nom:'B', y:5.8}],
 gamme:{carreau:1.2, faience:1.15, fenetre:1.1, porte:1.2, portee:1.4, sanit:1.3, ptl:1.2, charpente:1.3, fplaf:1.2},
 extras:[['Électricité','Climatiseurs split 1,5 CV posés (séjour + 3 chambres)','u',4,450000],['Plomberie sanitaire','Chauffe-eau électrique 100 L posé','u',2,180000],['Menuiseries','Placards et cuisine (meubles bas et hauts)','ens',1,1800000],['Divers','Clôture, portail, allées et aménagements extérieurs','ens',1,3500000]],
 resume:'3 chambres dont une suite parentale, bureau, grand séjour, terrasse couverte, sur 158 m².',
 description:`Villa de plain-pied avec une **suite parentale** (chambre, salle de bains privative), deux chambres, un bureau, un grand séjour ouvert sur une **terrasse couverte**, une cuisine avec cellier. Structure **poteaux-poutres** en béton armé, maçonnerie en agglos de 15, fondations sur **semelles isolées de 0,80 × 0,80 m** reliées par des longrines. Couverture tôle bac alu sur charpente métallique, faux plafond en staff.`,
 struct:{poteau:20, semelle:[100,100,30], longrine:[20,35], chainage:[20,25], prof:1.0, extraPosts:[[0,0],[3.5,0]], extraBeams:[[0,0,7,0],[0,0,0,2]], aciers:'Poteaux 4 HA12, cadres HA6/15 · Longrines 4 HA12 · Chaînages 6 HA10 · Semelles nappe HA12/15'},
 pieces:[
  {n:'Terrasse couverte', t:'terrasse', x:0, y:0, w:7.0, h:2.0},
  {n:'Séjour / salle à manger', t:'sejour', x:0, y:2.0, w:5.6, h:5.0},
  {n:'Cuisine', t:'cuisine', x:0, y:7.0, w:3.4, h:3.4},
  {n:'Cellier', t:'service', x:3.4, y:7.0, w:2.2, h:3.4},
  {n:'Dégagement', t:'circ', x:5.6, y:2.0, w:1.4, h:8.4},
  {n:'Chambre 2', t:'chambre', x:7.0, y:0, w:4.0, h:4.0},
  {n:'Chambre 3', t:'chambre', x:11.0, y:0, w:4.2, h:4.0},
  {n:'Salle de bains', t:'eau', x:7.0, y:4.0, w:2.6, h:3.0},
  {n:'WC', t:'wc', x:9.6, y:4.0, w:1.4, h:3.0},
  {n:'Bureau', t:'bureau', x:11.0, y:4.0, w:4.2, h:3.0},
  {n:'Chambre parents', t:'chambre', x:7.0, y:7.0, w:5.0, h:3.4},
  {n:'SdB parents', t:'eau', x:12.0, y:7.0, w:3.2, h:3.4}
 ],
 portes:[
  {x:5.6, y:0.4, w:1.0, o:'v', s:1, h:0},
  {x:2.0, y:2.0, w:1.4, o:'h', s:1},
  {x:5.6, y:5.6, w:0.9, o:'v', s:-1},
  {x:1.0, y:7.0, w:0.9, o:'h', s:1},
  {x:3.4, y:7.6, w:0.8, o:'v', s:1},
  {x:7.0, y:2.6, w:0.8, o:'v', s:1},
  {x:11.3, y:4.0, w:0.8, o:'h', s:-1},
  {x:7.0, y:4.6, w:0.7, o:'v', s:1},
  {x:9.8, y:7.0, w:0.7, o:'h', s:-1, h:1},
  {x:12.2, y:7.0, w:0.8, o:'h', s:-1},
  {x:7.0, y:7.6, w:0.8, o:'v', s:1},
  {x:12.0, y:8.4, w:0.7, o:'v', s:1}
 ],
 fenetres:[
  {x:0, y:3.4, w:1.6, o:'v'}, {x:3.6, y:2.0, w:1.4, o:'h'}, {x:7.8, y:0, w:1.6, o:'h'}, {x:12.3, y:0, w:1.6, o:'h'}, {x:15.2, y:1.4, w:1.2, o:'v'},
  {x:15.2, y:4.9, w:1.2, o:'v'}, {x:0, y:8.0, w:1.2, o:'v'}, {x:8.6, y:10.4, w:1.8, o:'h'}, {x:13.2, y:10.4, w:0.8, o:'h'}, {x:4.0, y:10.4, w:0.8, o:'h'}
 ],
 planning:[['Installation, implantation',0,1],['Terrassements',1,2],['Fondations, longrines',3,3],['Soubassement, dallage',6,2],['Poteaux, murs, chaînages',8,5],['Charpente métallique, couverture',13,3],['Électricité, plomberie',13,6],['Menuiseries, enduits',17,5],['Carrelage, faïence, staff',22,5],['Peinture, VRD, réception',27,5]],
 lots:[['Terrassements & fondations',15],['Élévation béton armé & maçonnerie',24],['Toiture & faux plafond',13],['Menuiseries alu & bois',12],['Électricité & climatisation',9],['Plomberie sanitaire',8],['Revêtements & enduits',13],['Peinture & VRD',6]]
},
{id:'haut', titre:'Villa haut standing R+1', standing:'Haut standing', niveauxTxt:'R+1 (duplex)', surface:330, budget:[160000000, 210000000], duree:'12 à 16 mois', toiture:'terrasse', entrees:2, tableaux:2,
 site:{ville:'Abidjan, Riviera Golf', alt:31.40, tn:-0.40, sol:{sigma:2.0, nature:'Sable argileux compact (étude de sol G2)', prof:1.20}, orient:'S', borne:[-4, -5]},
 toit:{type:'terrasse', acces:false, acrotere:0.6, pente:2},
 coupes:[{nom:'A', x:7.9}, {nom:'B', y:3.5}],
 gamme:{carreau:2.4, faience:2, plinthe:2, fenetre:1.9, porte:2.2, portee:3.5, sanit:2.6, ptl:1.8, prise:1.5, tableau:2, peinti:1.6, peinte:1.5, enduit:1.2, ba:1.05},
 extras:[['Électricité','Climatisation (splits inverter) posée','u',9,550000],['Électricité','Groupe électrogène 20 kVA + inverseur','ens',1,9500000],['Électricité','Vidéosurveillance, alarme et domotique','ens',1,6000000],['Menuiseries','Cuisine équipée haut de gamme + dressings','ens',1,11000000],['Menuiseries','Garde-corps et escalier habillé (marbre, inox-verre)','ens',1,6500000],['Divers','Piscine 8 × 4 m avec local technique','ens',1,18000000],['Divers','Clôture, portail motorisé, pavés, jardin, éclairage extérieur','ens',1,12000000]],
 resume:'Duplex de 4 chambres, double séjour, bureau, salon familial et terrasse à l\'étage.',
 description:`Duplex haut de gamme : au rez-de-chaussée, grand salon, salle à manger, cuisine équipée avec office, bureau, chambre d'amis avec salle d'eau ; à l'étage, **suite parentale** (dressing, salle de bains), deux chambres avec salles d'eau, salon familial et **grande terrasse**. Structure **poteaux-poutres** et **planchers à corps creux 16+4**, **toiture-terrasse étanchée**. Fondations sur **semelles isolées de 0,80 à 1,40 m de côté** (4 types calculés poteau par poteau) après étude de sol.`,
 struct:{poteau:25, semelle:[140,140,35], longrine:[25,40], chainage:[20,25], poutre:[25,45], dalle:'hourdis', prof:1.2, aciers:'Poteaux RDC 4 HA14 + 2 HA12, cadres HA8/15 · Poutres 3 HA14 + chapeaux 3 HA12 · Plancher 16+4 treillis ST25 · Semelles nappe HA14/15'},
 niveaux:[
  {nom:'Rez-de-chaussée', pieces:[
   {n:'Salon', t:'sejour', x:0, y:0, w:6.4, h:7.6},
   {n:'Hall', t:'circ', x:6.4, y:0, w:3.0, h:2.4},
   {n:'Escalier', t:'escalier', x:6.4, y:2.4, w:3.0, h:5.2},
   {n:'Salle à manger', t:'sejour', x:9.4, y:0, w:6.6, h:5.0},
   {n:'Cuisine', t:'cuisine', x:9.4, y:5.0, w:4.0, h:4.0},
   {n:'Office', t:'service', x:13.4, y:5.0, w:2.6, h:4.0},
   {n:'Chambre d\'amis', t:'chambre', x:9.4, y:9.0, w:4.0, h:3.0},
   {n:'SdE amis', t:'eau', x:13.4, y:9.0, w:2.6, h:3.0},
   {n:'Bureau', t:'bureau', x:0, y:7.6, w:3.6, h:4.4},
   {n:'WC visiteurs', t:'wc', x:3.6, y:7.6, w:2.8, h:1.8},
   {n:'Buanderie', t:'service', x:3.6, y:9.4, w:2.8, h:2.6},
   {n:'Dégagement', t:'circ', x:6.4, y:7.6, w:3.0, h:4.4}],
   portes:[{x:7.4, y:0, w:1.2, o:'h', s:1},{x:6.4, y:0.6, w:1.4, o:'v', s:-1},{x:9.4, y:0.8, w:1.4, o:'v', s:1},{x:10.5, y:5.0, w:0.9, o:'h', s:1},{x:13.4, y:6.0, w:0.8, o:'v', s:1},{x:9.4, y:10.0, w:0.8, o:'v', s:1},{x:13.4, y:10.2, w:0.7, o:'v', s:1},{x:3.6, y:10.4, w:0.8, o:'v', s:-1},{x:6.4, y:8.0, w:0.7, o:'v', s:-1},{x:6.4, y:10.2, w:0.8, o:'v', s:-1},{x:4.2, y:9.4, w:0.7, o:'h', s:-1}],
   fenetres:[{x:1.2, y:0, w:2.4, o:'h'},{x:0, y:3.0, w:2.0, o:'v'},{x:11.2, y:0, w:2.4, o:'h'},{x:16.0, y:1.6, w:1.8, o:'v'},{x:16.0, y:6.2, w:1.2, o:'v'},{x:10.6, y:12.0, w:1.6, o:'h'},{x:14.2, y:12.0, w:0.8, o:'h'},{x:0, y:9.0, w:1.4, o:'v'},{x:4.4, y:12.0, w:1.0, o:'h'}]},
  {nom:'Étage', pieces:[
   {n:'Suite parentale', t:'chambre', x:0, y:0, w:6.4, h:5.0},
   {n:'Dressing', t:'service', x:0, y:5.0, w:3.0, h:2.6},
   {n:'SdB parentale', t:'eau', x:3.0, y:5.0, w:3.4, h:2.6},
   {n:'Palier', t:'circ', x:6.4, y:0, w:3.0, h:2.4},
   {n:'Escalier', t:'escalier', x:6.4, y:2.4, w:3.0, h:5.2},
   {n:'Chambre 2', t:'chambre', x:9.4, y:0, w:3.4, h:4.4},
   {n:'Chambre 3', t:'chambre', x:12.8, y:0, w:3.2, h:4.4},
   {n:'SdE 2', t:'eau', x:9.4, y:4.4, w:3.4, h:2.4},
   {n:'SdE 3', t:'eau', x:12.8, y:4.4, w:3.2, h:2.4},
   {n:'Salon familial', t:'sejour', x:9.4, y:6.8, w:6.6, h:5.2},
   {n:'Terrasse', t:'terrasse', x:0, y:7.6, w:6.4, h:4.4},
   {n:'Dégagement', t:'circ', x:6.4, y:7.6, w:3.0, h:4.4}],
   portes:[{x:6.4, y:0.6, w:0.9, o:'v', s:-1},{x:3.0, y:5.6, w:0.7, o:'v', s:-1},{x:4.0, y:5.0, w:0.7, o:'h', s:1},{x:9.4, y:0.8, w:0.8, o:'v', s:1},{x:13.2, y:4.4, w:0.8, o:'h', s:-1},{x:9.8, y:4.4, w:0.7, o:'h', s:1},{x:13.4, y:6.8, w:0.7, o:'h', s:-1},{x:9.4, y:8.4, w:1.4, o:'v', s:1},{x:6.4, y:9.0, w:1.6, o:'v', s:-1}],
   fenetres:[{x:1.6, y:0, w:2.4, o:'h'},{x:10.3, y:0, w:1.6, o:'h'},{x:13.6, y:0, w:1.6, o:'h'},{x:16.0, y:1.4, w:1.4, o:'v'},{x:16.0, y:8.6, w:1.8, o:'v'},{x:11.6, y:12.0, w:2.4, o:'h'},{x:0, y:1.6, w:1.6, o:'v'}]}
 ],
 planning:[['Études, étude de sol, permis',0,4],['Installation, terrassements',4,2],['Fondations, longrines, dallage',6,4],['Structure RDC + plancher haut',10,6],['Structure étage + terrasse',16,6],['Étanchéité',22,2],['Maçonnerie, réseaux encastrés',14,12],['Menuiseries alu, enduits',26,8],['Revêtements haut de gamme',32,10],['Peinture, VRD, piscine, réception',40,12]],
 lots:[['Terrassements & fondations',11],['Gros œuvre béton armé',25],['Étanchéité',4],['Menuiseries alu & bois massif',12],['Électricité, domotique & climatisation',11],['Plomberie & sanitaires haut de gamme',9],['Revêtements (marbre, grès cérame)',16],['Peinture, staff & VRD',12]]
},
{id:'immeuble', titre:'Immeuble R+4 de logements', standing:'Immeuble', niveauxTxt:'R+4 (étage courant × 5)', surface:1220, budget:[320000000, 420000000], duree:'18 à 24 mois', toiture:'terrasse', entrees:10, tableaux:10, edicule:true,
 site:{ville:'Abidjan, Cocody Riviera 3', alt:45.00, tn:-0.30, sol:{sigma:2.5, nature:'Sable argileux très compact (étude géotechnique G2 AVP)', prof:1.50}, orient:'S', borne:[-5, -6]},
 toit:{type:'terrasse', acces:false, acrotere:0.8, pente:2},
 coupes:[{nom:'A', x:11.0}, {nom:'B', y:9.0}],
 gamme:{carreau:1.1, fenetre:1.05, portee:1.6},
 extras:[['Fondations','Étude géotechnique et contrôle technique (bureau de contrôle)','ens',1,9000000],['Électricité','Colonne montante, comptages, éclairage des communs, paratonnerre','ens',1,14000000],['Plomberie sanitaire','Colonnes d\'eau, surpresseur, bâche à eau 20 m³','ens',1,16000000],['Plomberie sanitaire','Sécurité incendie (extincteurs, RIA, détection)','ens',1,8000000],['Divers','VRD : parking, voirie, réseaux, assainissement collectif','ens',1,30000000],['Électricité','Climatiseurs split dans les logements','u',30,420000]],
 resume:'10 appartements F3 (2 par niveau), cage d\'escalier centrale, ossature en portiques.',
 description:`Immeuble de 5 niveaux (RDC + 4 étages) comprenant **2 appartements F3 par niveau** autour d'une **cage d'escalier centrale**. Ossature en **portiques béton armé** (poteaux-poutres) sur une **trame régulière**, planchers à **corps creux 16+4** (dalle pleine dans la cage d'escalier), toiture-terrasse inaccessible étanchée. Les fondations sont des **semelles isolées de 1,60 à 2,80 m de côté** (6 types) reliées par des longrines, à confirmer par l'**étude géotechnique obligatoire** (un radier peut être nécessaire sur sol médiocre).`,
 struct:{poteau:35, semelle:[180,180,50], longrine:[30,50], chainage:[20,30], poutre:[25,50], dalle:'hourdis', prof:1.5, aciers:'Poteaux RDC 35×35 : 8 HA16, cadres HA8/12 · Étages 30×30 : 8 HA14 · Poutres 25×50 : 4 HA16 + chapeaux · Semelles nappe HA14/12'},
 grille:{x:[0, 4.7, 9.5, 12.5, 17.3, 22.0], y:[0, 5.5, 12.0]},
 niveaux:[
  {nom:'Étage courant', repeat:5,
   rdc:{renomme:{'Palier':'Hall d\'entrée'}, portes:[{x:10.4, y:0, w:1.2, o:'h', s:1}]},
   etage:{fenetres:[{x:10.4, y:0, w:1.2, o:'h'}]},
   pieces:[
   {n:'Séjour A', t:'sejour', x:0, y:0, w:5.5, h:5.5},
   {n:'Cuisine A', t:'cuisine', x:5.5, y:0, w:4.0, h:3.0},
   {n:'SdB A', t:'eau', x:5.5, y:3.0, w:2.4, h:2.5},
   {n:'WC A', t:'wc', x:7.9, y:3.0, w:1.6, h:2.5},
   {n:'Dégagement A', t:'circ', x:0, y:5.5, w:9.5, h:1.3},
   {n:'Chambre 1A', t:'chambre', x:0, y:6.8, w:4.7, h:5.2},
   {n:'Chambre 2A', t:'chambre', x:4.7, y:6.8, w:4.8, h:5.2},
   {n:'Palier', t:'circ', x:9.5, y:0, w:3.0, h:5.5},
   {n:'Escalier', t:'escalier', x:9.5, y:5.5, w:3.0, h:6.5},
   {n:'Cuisine B', t:'cuisine', x:12.5, y:0, w:4.0, h:3.0},
   {n:'Séjour B', t:'sejour', x:16.5, y:0, w:5.5, h:5.5},
   {n:'WC B', t:'wc', x:12.5, y:3.0, w:1.6, h:2.5},
   {n:'SdB B', t:'eau', x:14.1, y:3.0, w:2.4, h:2.5},
   {n:'Dégagement B', t:'circ', x:12.5, y:5.5, w:9.5, h:1.3},
   {n:'Chambre 1B', t:'chambre', x:12.5, y:6.8, w:4.8, h:5.2},
   {n:'Chambre 2B', t:'chambre', x:17.3, y:6.8, w:4.7, h:5.2}],
   portes:[{x:9.5, y:1.8, w:1.0, o:'v', s:-1},{x:12.5, y:1.8, w:1.0, o:'v', s:1},{x:5.5, y:0.8, w:0.8, o:'v', s:1},{x:16.5, y:0.8, w:0.8, o:'v', s:-1},{x:6.2, y:5.5, w:0.7, o:'h', s:-1},{x:8.3, y:5.5, w:0.7, o:'h', s:-1},{x:13.0, y:5.5, w:0.7, o:'h', s:-1},{x:15.0, y:5.5, w:0.7, o:'h', s:-1},{x:2.0, y:6.8, w:0.8, o:'h', s:1},{x:6.8, y:6.8, w:0.8, o:'h', s:1},{x:14.6, y:6.8, w:0.8, o:'h', s:1},{x:19.2, y:6.8, w:0.8, o:'h', s:1},{x:2.0, y:5.5, w:1.2, o:'h', s:1},{x:18.8, y:5.5, w:1.2, o:'h', s:1}],
   fenetres:[{x:1.4, y:0, w:2.4, o:'h'},{x:0, y:2.0, w:1.6, o:'v'},{x:6.8, y:0, w:1.4, o:'h'},{x:1.6, y:12.0, w:1.6, o:'h'},{x:6.3, y:12.0, w:1.6, o:'h'},{x:13.8, y:0, w:1.4, o:'h'},{x:18.2, y:0, w:2.4, o:'h'},{x:22.0, y:2.0, w:1.6, o:'v'},{x:14.1, y:12.0, w:1.6, o:'h'},{x:18.8, y:12.0, w:1.6, o:'h'},{x:10.3, y:12.0, w:1.4, o:'h'}]}
 ],
 planning:[['Études, sol, permis, appel d\'offres',0,12],['Installation, terrassements',12,3],['Fondations, longrines',15,6],['Structure RDC à R+4 (5 niveaux)',21,25],['Étanchéité terrasse',46,3],['Maçonnerie et réseaux',28,26],['Menuiseries, enduits',44,14],['Revêtements',52,14],['Ascenseur/escalier, peinture',60,12],['VRD, réception, livraison',70,10]],
 lots:[['Installation & fondations',12],['Gros œuvre béton armé',30],['Maçonnerie & étanchéité',8],['Menuiseries',10],['Électricité & courants faibles',10],['Plomberie, sanitaires & incendie',9],['Revêtements & enduits',14],['Peinture & VRD',7]]
}
];
