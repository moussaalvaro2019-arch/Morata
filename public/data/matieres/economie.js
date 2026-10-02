A.addMatiere({
 id:'eco', titre:'Économie du bâtiment', court:'Économie', groupe:'gest', icone:'coins', couleur:'#1E9B5E', niveau:'Intermédiaire', heures:20, ordre:2, prerequis:['metre'],
 resume:"Coût global d'une opération, sous-détail des prix, coefficient de vente, estimations par ratios, marchés et appels d'offres, rentabilité d'un projet immobilier.",
 objectifs:["Décomposer le coût global d'une opération de construction","Établir un sous-détail de prix et un prix de vente","Estimer un projet aux différentes phases","Comprendre les marchés, les appels d'offres et la révision des prix","Évaluer la rentabilité d'une opération immobilière"],
 applications:["Budget d'une maison individuelle","Réponse à un appel d'offres","Contrôle des devis d'entreprises","Projet de location ou de vente d'appartements"],
 chapitres:[
{id:'eco-1', niv:1, titre:'Le coût global d\'une opération', duree:25, contenu:`## Ce que coûte réellement un projet
Le coût des travaux n'est qu'une partie du coût total :
| Poste | Part indicative |
|---|---|
| Terrain (foncier) et frais d'acquisition | très variable (10 à 40 %) |
| Études : architecte, BET, géotechnique, géomètre, contrôle | 6 à 12 % des travaux |
| Taxes, permis de construire, branchements CIE et SODECI | 2 à 5 % |
| **Travaux** (gros œuvre, second œuvre, VRD) | le poste principal |
| Frais financiers (intérêts d'emprunt pendant les travaux) | 2 à 6 % |
| Imprévus | 5 à 10 % |

> [!exemple] Villa moyen standing
> Travaux : 48 000 000 F TTC. Études et suivi (8 %) : 3 840 000 F. Permis et branchements (3 %) : 1 440 000 F. Imprévus (7 %) : 3 360 000 F.
> Total hors terrain : **56 640 000 F**. Avec un terrain de 600 m² à 25 000 F/m² (15 000 000 F) et ses frais : environ **73 millions F**.

## Le coût global (coût de cycle de vie)
Sur 30 ans, le coût d'**exploitation** et d'**entretien** (électricité, climatisation, eau, peintures, étanchéité, remplacements) dépasse souvent le coût de construction ! Un investissement initial plus élevé peut être très rentable :
- isolation de la toiture et protections solaires → factures de climatisation réduites ;
- matériaux durables (menuiseries aluminium, peintures de qualité) → moins d'entretien ;
- installations électriques bien dimensionnées → sécurité et moindre consommation.

> [!astuce] Temps de retour simple
> Isolant au plafond : 1 500 000 F. Économie de climatisation : 45 000 F/mois → 540 000 F/an. Temps de retour : 1 500 000 / 540 000 ≈ **2,8 ans**.

> [!retenir]
> Raisonner en coût global : le moins cher à construire n'est pas forcément le moins cher à posséder.`,
 quiz:[
  {q:"Les honoraires d'études représentent souvent :", o:["0,5 %","6 à 12 % des travaux","50 %","100 %"], r:1, e:"Architecte, BET, contrôle, géotechnique…"},
  {q:"Le coût global comprend :", o:["Seulement les travaux","Construction + exploitation + entretien","Seulement le terrain","Les impôts uniquement"], r:1, e:"Sur toute la durée de vie de l'ouvrage."},
  {q:"Un investissement de 1 200 000 F qui économise 400 000 F/an se rembourse en :", o:["1 an","3 ans","12 ans","0,3 an"], r:1, e:"1 200 000 / 400 000 = 3 ans."},
  {q:"Les imprévus sont généralement estimés à :", o:["0 %","5 à 10 %","30 %","60 %"], r:1, e:"Provision prudente dans tout budget."}
 ]},
{id:'eco-2', niv:2, titre:'Le sous-détail de prix et le prix de vente', duree:35, contenu:`## Le déboursé sec (DS)
C'est ce que coûte **directement** un ouvrage à l'entreprise :
- **matériaux** (avec pertes) ;
- **main-d'œuvre** (salaires et charges) ;
- **matériel** (amortissement ou location, carburant).

## Du déboursé sec au prix de vente
Il faut ajouter :
- les **frais de chantier** (installation, encadrement, gardiennage, eau, électricité) ;
- les **frais généraux** de l'entreprise (bureaux, direction, assurances, comptabilité) ;
- le **bénéfice et les aléas**.
$$ Prix de vente HT = DS × K
$$ K = (1 + frais de chantier) × (1 + frais généraux) × (1 + bénéfice et aléas)

> [!exemple] Coefficient K
> Frais de chantier 10 %, frais généraux 12 %, bénéfice et aléas 8 % : K = 1,10 × 1,12 × 1,08 = **1,331**.

## Exemple : 1 m² de maçonnerie d'agglos de 15
| Composant | Calcul | Montant (F) |
|---|---|---|
| Agglos | 12,5 u × 400 F (+ 2 % de casse) | 5 100 |
| Mortier | 0,015 m³ × 45 000 F/m³ | 675 |
| Main-d'œuvre | binôme (8 000 + 5 000 F/j) pour 10 m²/j | 1 300 |
| Petit matériel | 5 % de la main-d'œuvre | 65 |
| **Déboursé sec** | | **7 140** |
| Prix de vente HT | 7 140 × 1,331 | **≈ 9 500 F/m²** |

> [!exemple] Mortier dosé à 300 kg/m³
> 6 sacs × 5 500 F = 33 000 F + 1,05 m³ de sable × 12 000 F = 12 600 F → environ **45 600 F/m³** (on prend 45 000).

## Le prix TTC
Prix TTC = Prix HT × (1 + taux de TVA). En Côte d'Ivoire, le taux normal de TVA est de **18 %**.

> [!attention]
> Un prix inférieur au déboursé sec (« prix anormalement bas ») mène l'entreprise à la faillite ou à la mauvaise qualité (dosages réduits, aciers manquants). Le maître d'ouvrage doit s'en méfier.`,
 quiz:[
  {q:"Le déboursé sec comprend :", o:["Le bénéfice","Matériaux, main-d'œuvre et matériel","La TVA","Les frais généraux"], r:1, e:"Ce sont les coûts directs de l'ouvrage."},
  {q:"Avec DS = 10 000 F et K = 1,3, le prix de vente HT est :", o:["7 692 F","13 000 F","11 300 F","10 300 F"], r:1, e:"10 000 × 1,3 = 13 000 F."},
  {q:"Taux normal de TVA en Côte d'Ivoire :", o:["5 %","10 %","18 %","25 %"], r:2, e:"18 %."},
  {q:"Un prix anormalement bas signifie :", o:["Une bonne affaire assurée","Un risque de mauvaise qualité ou de défaillance","Une entreprise riche","Un prix TTC"], r:1, e:"Il est inférieur aux coûts réels."}
 ]},
{id:'eco-3', niv:2, titre:'Les méthodes d\'estimation', duree:30, contenu:`## Précision selon la phase
| Phase | Méthode | Précision |
|---|---|---|
| Programme, esquisse | Ratio global (F/m²) | ± 20 à 30 % |
| APS | Ratios par lots ou par éléments | ± 15 % |
| APD | Avant-métré sommaire | ± 10 % |
| DCE / marché | Métré détaillé et DQE | ± 5 % |

## Estimation par ratio global
Coût = surface × ratio au m² (voir la matière Construction A→Z : 180 000 à 280 000 F/m² en économique, 280 000 à 380 000 en moyen standing, 400 000 à 600 000 et plus en haut standing).
> [!exemple]
> Maison de 120 m² moyen standing : 120 × 330 000 = **39,6 millions F** (± 25 %).

## Estimation par lots
On répartit un montant global selon des pourcentages habituels :
| Lot | Maison courante |
|---|---|
| Terrassements, fondations | 12 à 18 % |
| Élévation, béton armé, maçonnerie | 22 à 30 % |
| Toiture / étanchéité | 10 à 14 % |
| Menuiseries | 10 à 12 % |
| Électricité | 7 à 10 % |
| Plomberie sanitaire | 7 à 9 % |
| Revêtements, enduits | 12 à 16 % |
| Peinture, VRD | 6 à 10 % |

## Ratios techniques (contrôle d'un DQE)
- **Béton** : 0,25 à 0,40 m³ par m² de plancher dans un bâtiment à ossature.
- **Acier** : 80 à 120 kg par m³ de béton armé (plus pour les poutres, moins pour les fondations).
- **Coffrage** : 6 à 10 m² par m³ de béton pour les poteaux et poutres.
- **Agglos** : 12,5 par m² ; **ciment** : environ 1,5 à 2,5 sacs par m² de surface bâtie (maison courante, tous ouvrages).

> [!astuce]
> Si un devis donne 250 kg d'acier par m³ de béton pour une maison, ou 0,8 m³ de béton par m² de plancher, demandez des explications : il y a probablement une erreur.

> [!retenir]
> Plus le projet avance, plus l'estimation est détaillée et précise. Les ratios servent surtout à **contrôler** les devis.`,
 quiz:[
  {q:"À l'esquisse, l'estimation se fait surtout :", o:["Par métré détaillé","Par ratio global au m²","Par appel d'offres","Au hasard"], r:1, e:"Les plans ne sont pas encore détaillés."},
  {q:"Précision d'un DQE établi sur métré détaillé :", o:["± 50 %","± 25 %","± 5 % environ","Exacte"], r:2, e:"C'est l'estimation la plus fine."},
  {q:"Ratio courant d'acier dans le béton armé :", o:["5 à 10 kg/m³","80 à 120 kg/m³","500 kg/m³","1 t/m³"], r:1, e:"Ordre de grandeur des bâtiments courants."},
  {q:"Coût estimé de 100 m² à 300 000 F/m² :", o:["3 millions","30 millions","300 millions","300 000"], r:1, e:"100 × 300 000 = 30 000 000 F."}
 ]},
{id:'eco-4', niv:2, titre:'Marchés, appels d\'offres et révision des prix', duree:30, contenu:`## Les formes de prix
- **Prix global et forfaitaire** : l'entreprise s'engage sur un montant total pour un ouvrage défini ; les erreurs de quantités sont à sa charge (sauf modification du projet).
- **Prix unitaires** (BPU) : on paie les **quantités réellement exécutées** × prix unitaires ; adapté quand les quantités sont incertaines (terrassements, fondations).
- **Régie** : on rembourse les dépenses contrôlées (main-d'œuvre, matériaux) + un coefficient ; pour les petits travaux imprévus.

## L'appel d'offres
1. Le maître d'ouvrage prépare le **dossier d'appel d'offres** (DAO) : règlement de consultation, CCAP, CCTP, plans, cadre du BPU/DQE.
2. Les entreprises remettent une **offre technique** (moyens, méthodes, planning, références) et une **offre financière**.
3. **Analyse** : conformité, comparaison des prix ligne par ligne, détection des prix anormalement bas ou des erreurs arithmétiques, note technique.
4. **Attribution** au « mieux-disant » (meilleur rapport qualité-prix), signature du marché, ordre de service de démarrage.

## Les garanties financières
- **Caution de soumission** (sérieux de l'offre).
- **Caution de bonne exécution** (souvent 5 à 10 % du marché).
- **Retenue de garantie** (5 %) ou caution équivalente.

## La révision des prix
Pour les chantiers longs, le prix évolue avec les coûts (ciment, acier, salaires) selon une **formule paramétrique** :
$$ P = P₀ × (a + b × I / I₀)       avec a + b = 1 (a : partie fixe, souvent 0,15)
I₀ et I : index des coûts au mois de référence et au mois des travaux.
> [!exemple]
> Situation de 10 000 000 F, a = 0,15, b = 0,85, index passé de 100 à 108 :
> P = 10 000 000 × (0,15 + 0,85 × 1,08) = 10 000 000 × 1,068 = **10 680 000 F**.

> [!retenir]
> Forfait quand le projet est bien défini, prix unitaires quand les quantités sont incertaines, révision des prix pour les chantiers longs.`,
 quiz:[
  {q:"Dans un marché à prix unitaires, on paie :", o:["Un montant fixe","Les quantités réellement exécutées × prix unitaires","Les dépenses + 50 %","Rien d'avance"], r:1, e:"BPU × quantités réelles."},
  {q:"Le « mieux-disant » est :", o:["Le moins cher","Le meilleur rapport qualité-prix","Le plus cher","Le premier arrivé"], r:1, e:"On combine prix et valeur technique."},
  {q:"La caution de bonne exécution représente souvent :", o:["0,1 %","5 à 10 %","50 %","100 %"], r:1, e:"Elle garantit la bonne fin des travaux."},
  {q:"Avec a = 0,15 et un index qui passe de 100 à 110, le coefficient de révision vaut :", o:["1,10","1,085","1,15","0,85"], r:1, e:"0,15 + 0,85 × 1,10 = 1,085."}
 ]},
{id:'eco-5', niv:3, titre:'Rentabilité d\'un projet immobilier', duree:30, contenu:`## Le bilan d'une opération de promotion
| Recettes / Dépenses | Montant |
|---|---|
| **Chiffre d'affaires** (ventes) | ventes des logements |
| − Terrain et frais | |
| − Travaux (TTC) | |
| − Honoraires, études, assurances | |
| − Frais financiers, commercialisation, taxes | |
| **= Marge** | souvent visée entre 10 et 20 % du CA |

> [!exemple] Immeuble R+4 de 10 appartements F3
> Terrain : 60 M. Travaux : 336 M (voir le projet type). Honoraires et études (8 %) : 27 M. Frais financiers, commercialisation, taxes : 20 M.
> **Coût total : 443 M F.**
> Vente : 10 × 55 M = **550 M F** → marge = 107 M F, soit **19,5 % du CA**.

## La location : rendement locatif
$$ Rendement brut = Loyers annuels / Coût total × 100
> [!exemple] Même immeuble en location
> Loyer d'un F3 : 250 000 F/mois → 10 × 250 000 × 12 = **30 M F/an**.
> Rendement brut = 30 / 443 = **6,8 %**.
> Rendement net : en retirant la vacance (≈ 8 %), l'entretien et la gestion (≈ 12 %) et les impôts fonciers, il reste environ 30 × 0,8 = 24 M F → **5,4 %**.

## Le temps de retour et la VAN
- **Temps de retour simple** : coût / revenus nets annuels = 443 / 24 ≈ **18,5 ans**.
- **Valeur actuelle nette (VAN)** : on actualise les revenus futurs (1 F dans 10 ans vaut moins qu'1 F aujourd'hui). Avec un taux d'actualisation t : VAN = − investissement + Σ revenu / (1 + t)ⁿ. Le projet est intéressant si VAN > 0.

## Les leviers de rentabilité
- **Maîtriser le coût de construction** (conception compacte, trames régulières, matériaux standard).
- **Réduire les délais** (moins de frais financiers, loyers plus tôt).
- **Bien choisir l'emplacement** et le type de logement demandé.
- **Limiter l'entretien futur** (qualité des étanchéités, menuiseries, peintures).

> [!retenir]
> Une opération se juge sur son bilan complet : terrain, travaux, honoraires, financement et commercialisation, comparés aux recettes.`,
 quiz:[
  {q:"Rendement brut d'un bien de 100 M F rapportant 8 M F de loyers par an :", o:["0,8 %","8 %","12,5 %","80 %"], r:1, e:"8 / 100 = 8 %."},
  {q:"La marge visée d'une opération de promotion est souvent :", o:["0 à 2 %","10 à 20 % du CA","50 %","100 %"], r:1, e:"Pour couvrir les risques."},
  {q:"Réduire la durée du chantier permet surtout de réduire :", o:["Le prix du terrain","Les frais financiers","La TVA","La surface"], r:1, e:"Moins d'intérêts intercalaires et des recettes plus tôt."},
  {q:"Un projet est intéressant financièrement si sa VAN est :", o:["Négative","Positive","Nulle","Égale au coût"], r:1, e:"Les revenus actualisés dépassent l'investissement."}
 ]}
]});
