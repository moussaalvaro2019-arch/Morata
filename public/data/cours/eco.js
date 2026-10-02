/* =====================================================================
   Économie du bâtiment — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"eco",
 titre:"Économie du bâtiment",
 court:"Économie",
 groupe:"gest",
 icone:"coins",
 couleur:"#1E9B5E",
 niveau:"Intermédiaire",
 heures:20,
 ordre:2,
 prerequis:["metre"],
 resume:"Coût global d'une opération, sous-détail des prix, coefficient de vente, estimations par ratios, marchés et appels d'offres, rentabilité d'un projet immobilier.",
 objectifs:[
  "Décomposer le coût global d'une opération de construction",
  "Établir un sous-détail de prix et un prix de vente",
  "Estimer un projet aux différentes phases",
  "Comprendre les marchés, les appels d'offres et la révision des prix",
  "Évaluer la rentabilité d'une opération immobilière"
 ],
 applications:["Budget d'une maison individuelle", "Réponse à un appel d'offres", "Contrôle des devis d'entreprises", "Projet de location ou de vente d'appartements"],
 chapitres:[
{id:"eco-1", niv:1, titre:"Le coût global d'une opération", duree:25, contenu:`## Ce que coûte réellement un projet
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
> Raisonner en coût global : le moins cher à construire n'est pas forcément le moins cher à posséder.`, quiz:[
  {q:"Les honoraires d'études représentent souvent :", o:["0,5 %", "6 à 12 % des travaux", "50 %", "100 %"], r:1, e:"Architecte, BET, contrôle, géotechnique…"},
  {q:"Le coût global comprend :", o:["Seulement les travaux", "Construction + exploitation + entretien", "Seulement le terrain", "Les impôts uniquement"], r:1, e:"Sur toute la durée de vie de l'ouvrage."},
  {q:"Un investissement de 1 200 000 F qui économise 400 000 F/an se rembourse en :", o:["1 an", "3 ans", "12 ans", "0,3 an"], r:1, e:"1 200 000 / 400 000 = 3 ans."},
  {q:"Les imprévus sont généralement estimés à :", o:["0 %", "5 à 10 %", "30 %", "60 %"], r:1, e:"Provision prudente dans tout budget."}
 ]},

{id:"eco-6", niv:1, titre:"Les bases : prix, coûts, marges et TVA", duree:25, contenu:`## Du coût au prix de vente
- Le **déboursé sec (DS)** est ce que coûte directement un ouvrage : matériaux + main-d'œuvre + matériel.
- L'entreprise y ajoute ses **frais de chantier**, ses **frais généraux** et son **bénéfice** grâce à un **coefficient de vente K** (souvent 1,25 à 1,45).
$$ Prix de vente HT = DS × K

> [!exemple] Un m² de mur en agglos de 15 enduit
> Matériaux 6 500 F + main-d'œuvre 2 500 F + matériel 500 F = **DS = 9 500 F**.
> Avec K = 1,35 : prix de vente HT = **12 825 F/m²**.
> Avec la TVA à 18 % : prix TTC = 12 825 × 1,18 = **15 134 F/m²**.

## HT et TTC
- TTC = HT × 1,18 ;
- HT = TTC / 1,18. Un montant de 59 000 F TTC correspond à **50 000 F HT**.

## Marge et bénéfice
La **marge** est la différence entre le prix de vente et les coûts ; le **taux de marge** se calcule sur le prix de vente.
> Un ouvrage vendu 1 000 000 F HT et revenant à 900 000 F tous frais compris laisse 100 000 F de bénéfice, soit **10 %** du prix de vente.

## Prix unitaire ou forfait ?
- **Prix unitaire** : on paie la quantité réellement exécutée × le prix (m², m³, kg, u) ;
- **Forfait** : un prix global pour un ouvrage défini, quelles que soient les quantités.

> [!retenir]
> Un prix trop bas n'est pas une bonne affaire s'il ne couvre pas le déboursé sec : l'entreprise se rattrapera sur la qualité.`, quiz:[
  {q:"Le déboursé sec comprend :", o:["Matériaux, main-d'œuvre et matériel", "Uniquement le bénéfice", "La TVA", "Les frais généraux et le bénéfice"], r:0, e:"Ce sont les coûts directs de l'ouvrage."},
  {q:"Un prix de 118 000 F TTC (TVA 18 %) correspond à :", o:["100 000 F HT", "96 760 F HT", "118 000 F HT", "139 240 F HT"], r:0, e:"118 000 / 1,18 = 100 000 F."},
  {q:"DS = 10 000 F et K = 1,3 : le prix de vente HT est :", o:["13 000 F", "10 300 F", "7 700 F", "23 000 F"], r:0, e:"10 000 × 1,3 = 13 000 F."},
  {q:"Dans un marché à prix unitaires, on paie :", o:["Les quantités réellement exécutées × les prix unitaires", "Un montant global fixe", "Uniquement les matériaux", "La TVA seule"], r:0, e:"Les quantités sont constatées sur le chantier."}
 ]},

{id:"eco-7", niv:1, titre:"Lire un devis et comparer des offres", duree:25, contenu:`## Ce que doit contenir un devis
- Nom et coordonnées de l'entreprise, du client, date et **durée de validité** ;
- Ouvrages classés par **lots**, avec une **désignation précise** (dimensions, dosages, marques, finitions) ;
- **Unité, quantité, prix unitaire, montant** pour chaque ligne ;
- Total **HT**, **TVA**, total **TTC** ;
- **Délais**, échéancier de paiement, garanties.

## Les points à vérifier
1. Les **quantités** correspondent-elles aux plans ? (refaites un métré rapide) ;
2. Les **prix unitaires** sont-ils dans la fourchette du marché ?
3. Qu'est-ce qui est **inclus ou exclu** : fourniture, pose, évacuation des déblais, nettoyage, raccordements ?
4. L'**acompte** demandé est-il raisonnable (souvent 20 à 30 % au démarrage, puis paiement à l'avancement) ?
5. L'entreprise est-elle **assurée** ?

## Comparer plusieurs offres
> [!exemple] Gros œuvre d'une villa, estimation du maître d'œuvre : 26 millions F
| Entreprise | Montant HT | Écart à l'estimation |
|---|---|---|
| A | 24,5 M | −6 % |
| B | 27,8 M | +7 % |
| C | 19,9 M | **−23 %** |

L'offre C est **anormalement basse** : oubli de postes, quantités sous-estimées, dosages réduits ? On demande le détail avant de la retenir.

## Négocier intelligemment
On peut discuter les quantités, proposer des **variantes** ou un phasage, mais **jamais** réduire les aciers, le dosage du béton ou les fondations.`, quiz:[
  {q:"Avant de signer un devis, il faut d'abord vérifier :", o:["Que les quantités correspondent aux plans", "La couleur du papier", "Le nombre de pages", "Rien"], r:0, e:"Un métré rapide évite les mauvaises surprises."},
  {q:"Une offre 23 % sous l'estimation est :", o:["Anormalement basse : il faut demander le détail", "Forcément la meilleure", "Illégale", "Automatiquement rejetée"], r:0, e:"Elle cache souvent des oublis ou une baisse de qualité."},
  {q:"Un acompte raisonnable au démarrage est de l'ordre de :", o:["20 à 30 %", "100 %", "0 %", "80 %"], r:0, e:"Le reste se paie à l'avancement."},
  {q:"Dans une négociation, on ne doit jamais réduire :", o:["Les aciers et le dosage du béton", "Les délais administratifs", "Les finitions décoratives", "Les variantes"], r:0, e:"La sécurité de l'ouvrage en dépend."}
 ]},

{id:"eco-2", niv:2, titre:"Le sous-détail de prix et le prix de vente", duree:35, contenu:`## Le déboursé sec (DS)
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
> Un prix inférieur au déboursé sec (« prix anormalement bas ») mène l'entreprise à la faillite ou à la mauvaise qualité (dosages réduits, aciers manquants). Le maître d'ouvrage doit s'en méfier.`, quiz:[
  {q:"Le déboursé sec comprend :", o:["Le bénéfice", "Matériaux, main-d'œuvre et matériel", "La TVA", "Les frais généraux"], r:1, e:"Ce sont les coûts directs de l'ouvrage."},
  {q:"Avec DS = 10 000 F et K = 1,3, le prix de vente HT est :", o:["7 692 F", "13 000 F", "11 300 F", "10 300 F"], r:1, e:"10 000 × 1,3 = 13 000 F."},
  {q:"Taux normal de TVA en Côte d'Ivoire :", o:["5 %", "10 %", "18 %", "25 %"], r:2, e:"18 %."},
  {q:"Un prix anormalement bas signifie :", o:["Une bonne affaire assurée", "Un risque de mauvaise qualité ou de défaillance", "Une entreprise riche", "Un prix TTC"], r:1, e:"Il est inférieur aux coûts réels."}
 ]},

{id:"eco-3", niv:2, titre:"Les méthodes d'estimation", duree:30, contenu:`## Précision selon la phase
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
> Plus le projet avance, plus l'estimation est détaillée et précise. Les ratios servent surtout à **contrôler** les devis.`, quiz:[
  {q:"À l'esquisse, l'estimation se fait surtout :", o:["Par métré détaillé", "Par ratio global au m²", "Par appel d'offres", "Au hasard"], r:1, e:"Les plans ne sont pas encore détaillés."},
  {q:"Précision d'un DQE établi sur métré détaillé :", o:["± 50 %", "± 25 %", "± 5 % environ", "Exacte"], r:2, e:"C'est l'estimation la plus fine."},
  {q:"Ratio courant d'acier dans le béton armé :", o:["5 à 10 kg/m³", "80 à 120 kg/m³", "500 kg/m³", "1 t/m³"], r:1, e:"Ordre de grandeur des bâtiments courants."},
  {q:"Coût estimé de 100 m² à 300 000 F/m² :", o:["3 millions", "30 millions", "300 millions", "300 000"], r:1, e:"100 × 300 000 = 30 000 000 F."}
 ]},

{id:"eco-4", niv:2, titre:"Marchés, appels d'offres et révision des prix", duree:30, contenu:`## Les formes de prix
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
> Forfait quand le projet est bien défini, prix unitaires quand les quantités sont incertaines, révision des prix pour les chantiers longs.`, quiz:[
  {q:"Dans un marché à prix unitaires, on paie :", o:["Un montant fixe", "Les quantités réellement exécutées × prix unitaires", "Les dépenses + 50 %", "Rien d'avance"], r:1, e:"BPU × quantités réelles."},
  {q:"Le « mieux-disant » est :", o:["Le moins cher", "Le meilleur rapport qualité-prix", "Le plus cher", "Le premier arrivé"], r:1, e:"On combine prix et valeur technique."},
  {q:"La caution de bonne exécution représente souvent :", o:["0,1 %", "5 à 10 %", "50 %", "100 %"], r:1, e:"Elle garantit la bonne fin des travaux."},
  {q:"Avec a = 0,15 et un index qui passe de 100 à 110, le coefficient de révision vaut :", o:["1,10", "1,085", "1,15", "0,85"], r:1, e:"0,15 + 0,85 × 1,10 = 1,085."}
 ]},

{id:"eco-5", niv:3, titre:"Rentabilité d'un projet immobilier", duree:30, contenu:`## Le bilan d'une opération de promotion
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
> Une opération se juge sur son bilan complet : terrain, travaux, honoraires, financement et commercialisation, comparés aux recettes.`, quiz:[
  {q:"Rendement brut d'un bien de 100 M F rapportant 8 M F de loyers par an :", o:["0,8 %", "8 %", "12,5 %", "80 %"], r:1, e:"8 / 100 = 8 %."},
  {q:"La marge visée d'une opération de promotion est souvent :", o:["0 à 2 %", "10 à 20 % du CA", "50 %", "100 %"], r:1, e:"Pour couvrir les risques."},
  {q:"Réduire la durée du chantier permet surtout de réduire :", o:["Le prix du terrain", "Les frais financiers", "La TVA", "La surface"], r:1, e:"Moins d'intérêts intercalaires et des recettes plus tôt."},
  {q:"Un projet est intéressant financièrement si sa VAN est :", o:["Négative", "Positive", "Nulle", "Égale au coût"], r:1, e:"Les revenus actualisés dépassent l'investissement."}
 ]},

{id:"eco-8", niv:3, titre:"Financement : actualisation, VAN et TRI", duree:35, contenu:`## Un franc d'aujourd'hui vaut plus qu'un franc demain
Pour comparer des sommes reçues à des dates différentes, on les **actualise** au taux a :
$$ valeur actuelle = F / (1 + a)ⁿ

## La valeur actuelle nette (VAN)
$$ VAN = − investissement + Σ flux nets de l'année t / (1 + a)ᵗ + valeur résiduelle / (1 + a)ⁿ
Le projet est rentable au taux a si **VAN > 0**.

> [!exemple] Immeuble de rapport
> Investissement 400 millions F ; loyers nets 36 millions F par an pendant 20 ans ; valeur de revente estimée 250 millions F dans 20 ans ; taux d'actualisation 8 %.
> Valeur actuelle des loyers : 36 × (1 − 1,08^(−20)) / 0,08 = 36 × 9,818 = **353,5 M**.
> Valeur actuelle de la revente : 250 / 1,08²⁰ = 250 / 4,661 = **53,6 M**.
> VAN = −400 + 353,5 + 53,6 = **+7,1 M** → projet rentable à 8 %.

## Le taux de rentabilité interne (TRI)
C'est le taux pour lequel la VAN s'annule. Ici, à 8,5 % la VAN vaut −10,4 M : par interpolation, **TRI ≈ 8,2 %**. On compare ce TRI au coût de l'argent (taux du crédit, rendement attendu par l'investisseur).

## L'effet de levier du crédit
Financer 70 % par un crédit à 7 % et 30 % en fonds propres augmente la rentabilité des fonds propres **si** le projet rapporte plus que le crédit ne coûte ; dans le cas contraire, le levier joue à l'envers.

## Le délai de récupération
Nombre d'années pour que les flux cumulés remboursent l'investissement : simple à comprendre, mais il ignore ce qui se passe ensuite. On l'utilise en complément de la VAN.`, quiz:[
  {q:"Un projet est rentable au taux d'actualisation choisi si :", o:["Sa VAN est positive", "Sa VAN est négative", "Son TRI est nul", "Son investissement est faible"], r:0, e:"Les recettes actualisées couvrent l'investissement."},
  {q:"Le TRI est le taux pour lequel :", o:["La VAN est nulle", "Les loyers sont maximaux", "Le crédit est remboursé", "La TVA s'applique"], r:0, e:"C'est la rentabilité propre du projet."},
  {q:"1 000 000 F reçus dans 1 an, actualisés à 10 %, valent aujourd'hui environ :", o:["909 000 F", "1 100 000 F", "1 000 000 F", "900 000 F"], r:0, e:"1 000 000 / 1,1 ≈ 909 091 F."},
  {q:"L'effet de levier est favorable si :", o:["Le projet rapporte plus que le taux du crédit", "Le crédit coûte plus que le projet ne rapporte", "Il n'y a pas de crédit", "Le TRI est nul"], r:0, e:"Sinon il réduit la rentabilité des fonds propres."}
 ]},

{id:"eco-9", niv:3, titre:"Contrôle des coûts : valeur acquise, avenants et réclamations", duree:35, contenu:`## Suivre un budget
Pour chaque lot : **budget** initial, **engagements** (commandes, contrats), **dépenses** réelles, **reste à faire** et **prévision à terminaison**.

## La méthode de la valeur acquise
- **VP** (valeur planifiée) : ce qui aurait dû être réalisé à la date, au prix du budget ;
- **VA** (valeur acquise) : ce qui a réellement été réalisé, au prix du budget ;
- **CR** (coût réel) : ce que ce travail a réellement coûté.
$$ IPC = VA / CR   (efficacité des coûts)      IPD = VA / VP   (respect des délais)

> [!exemple] Chantier de 340 millions F, semaine 20
> VP = 120 M, VA = 100 M, CR = 110 M.
> IPC = 100 / 110 = **0,91** : chaque franc dépensé ne produit que 0,91 F de travaux → dépassement.
> IPD = 100 / 120 = **0,83** : retard sur le planning.
> Prévision à terminaison si la tendance se poursuit : 340 / 0,91 ≈ **374 M** (34 M de dépassement).

## Les avenants
Travaux supplémentaires, modifications du client, imprévus techniques : ils doivent être **chiffrés et acceptés avant exécution** (ordre de service, avenant), avec des **prix nouveaux** justifiés par un sous-détail.

## Les réclamations de l'entreprise
Pour être recevable, une réclamation doit être **écrite, chiffrée et justifiée** : journal de chantier, comptes rendus, ordres de service, photos, sous-détails de prix, et respecter les **délais contractuels** de présentation.

## Révision des prix et garanties financières
- **Révision** par formule paramétrique (indices du ciment, de l'acier, des salaires) sur les marchés longs ;
- **Retenue de garantie** de 5 %, libérée après la garantie de parfait achèvement ou remplacée par une caution bancaire.`, quiz:[
  {q:"L'indice de performance des coûts IPC vaut :", o:["VA / CR", "CR / VA", "VP / VA", "VA − VP"], r:0, e:"Un IPC inférieur à 1 signale un dépassement."},
  {q:"VA = 90 M et VP = 100 M : le projet est :", o:["En retard", "En avance", "Dans les temps", "En dépassement de coût seulement"], r:0, e:"IPD = 0,9."},
  {q:"Budget 200 M et IPC = 0,8 : la prévision à terminaison est :", o:["250 M", "160 M", "200 M", "180 M"], r:0, e:"200 / 0,8 = 250 M."},
  {q:"Un avenant doit être signé :", o:["Avant l'exécution des travaux modifiés", "Après la réception", "Jamais", "Seulement en cas de litige"], r:0, e:"Sinon le paiement est contestable."}
 ]}
]});
