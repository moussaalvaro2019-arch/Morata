/* =====================================================================
   Chapitres complémentaires (3 niveaux) — Gestion
   Organisation et gestion de chantier · Économie du bâtiment · Métré
   ===================================================================== */

/* ---------- GESTION DE CHANTIER (niveau avancé) ---------- */
A.addChapitres('chant', [
{id:'chant-7', niv:3, titre:'Management de projet : équipes, réunions et litiges', duree:30, contenu:`## Qui fait quoi ?
- **Maître d'ouvrage** : le client, qui finance et décide ;
- **Maître d'œuvre** : architecte et bureaux d'études, qui conçoivent et contrôlent l'exécution ;
- **Entreprise** générale et ses **sous-traitants** ;
- **Bureau de contrôle** : vérifie la solidité et la sécurité ;
- **OPC** (ordonnancement, pilotage, coordination) sur les gros projets.

## La réunion de chantier hebdomadaire
- Ordre du jour fixe : avancement, planning, qualité, sécurité, points techniques, approvisionnements ;
- **Compte rendu** diffusé sous 48 heures, avec pour chaque décision **qui fait quoi et pour quand** ;
- Les plans **visés** et les ordres de service sont les seules bases d'exécution.

## Le tableau de bord du chef de projet
| Domaine | Indicateur |
|---|---|
| Délais | Avancement réel / prévu, tâches critiques en retard |
| Coûts | Dépenses engagées / budget, prévision à terminaison |
| Qualité | Non-conformités ouvertes et levées |
| Sécurité | Accidents, presque-accidents, visites |

## Prévenir les litiges
La **traçabilité** évite la plupart des conflits : journal de chantier, photos datées, procès-verbaux, échanges écrits. Toute modification passe par un **ordre de service** ou un **avenant** avant exécution.

> [!exemple] Pénalités de retard
> Marché de 180 millions F, pénalité de 1/1 000 du marché par jour calendaire : **180 000 F par jour**. 20 jours de retard coûtent 3,6 millions F (dans la limite du plafond, souvent 5 à 10 % du marché).

## Régler un différend
Discussion technique → **mise en demeure** écrite → conciliation ou **expertise** → arbitrage ou tribunal. Plus le dossier est documenté, plus vite il se règle.`,
 quiz:[
  {q:"Le maître d'œuvre est :", o:["Celui qui conçoit et contrôle l'exécution","Le client qui finance","Le fournisseur de ciment","Le bureau de contrôle"], r:0, e:"Architecte et bureaux d'études."},
  {q:"Un compte rendu de réunion doit être diffusé :", o:["Sous 48 heures","Après la réception","Seulement en cas de litige","Une fois par an"], r:0, e:"Pour que les décisions soient appliquées rapidement."},
  {q:"Marché de 100 millions, pénalité de 1/1 000 par jour : 10 jours de retard coûtent :", o:["1 million F","100 000 F","10 millions F","10 000 F"], r:0, e:"100 000 F par jour × 10."},
  {q:"Une modification de travaux doit être formalisée par :", o:["Un ordre de service ou un avenant","Un appel téléphonique","Rien","Un message oral au chef d'équipe"], r:0, e:"Avant exécution, pour être payée et opposable."}
 ]},
{id:'chant-8', niv:3, titre:'Méthodes de construction : coffrages, rotations et cadences', duree:30, contenu:`## Choisir ses coffrages
| Coffrage | Nombre de réemplois | Usage |
|---|---|---|
| Bois et contreplaqué | 3 à 8 | Maisons, formes variées |
| Coffrages modulaires métalliques | 50 à 100 et plus | Poteaux, voiles, ouvrages répétitifs |
| Banches et tables | plusieurs centaines | Immeubles à étages identiques |

Plus un ouvrage est **répétitif** (immeuble, logements identiques), plus un coffrage industriel devient rentable.

## Les rotations d'étais
Les étais d'un plancher doivent rester en place **21 à 28 jours**. Si l'on coule un plancher tous les 10 jours, il faut des étais pour environ **3 niveaux** à la fois, plus un jeu en préparation.

## Calculer une cadence
> [!exemple] Structure d'un étage d'immeuble
> 12 m³ de béton armé de poteaux et de poutres à **25 heures de main-d'œuvre par m³** (coffrage, ferraillage, coulage, décoffrage) : 300 heures.
> Équipe de 6 ouvriers × 8 h = 48 h par jour → **6 à 7 jours** pour les poteaux et les poutres de l'étage, auxquels s'ajoute le plancher.

## Le bétonnage
- **Bétonnière** de 350 L : environ 2,5 m³ par heure de béton effectivement coulé ;
- **Béton prêt à l'emploi + pompe** : 20 à 40 m³ par heure, idéal pour couler une dalle d'un seul tenant.
> 12 m³ à la bétonnière : environ 5 heures de coulage continu, en prévoyant les matériaux et la main-d'œuvre à l'avance.

## Accélérer sans risque
- **Préfabriquer** ce qui peut l'être : poutrelles, linteaux, cages d'armatures montées au sol ;
- Faire travailler les équipes **en parallèle** sur des zones différentes ;
- Ne jamais réduire les délais de **décoffrage** et de **cure** pour gagner du temps.`,
 quiz:[
  {q:"Un coffrage industriel devient rentable quand :", o:["L'ouvrage est très répétitif","Il n'y a qu'un seul poteau","Le chantier est très petit","On utilise du bois"], r:0, e:"Il est amorti sur de nombreux réemplois."},
  {q:"Si l'on coule un plancher tous les 10 jours et que les étais restent 28 jours, il faut des étais pour environ :", o:["3 niveaux","1 niveau","10 niveaux","Aucun"], r:0, e:"28 / 10 ≈ 3 niveaux simultanément."},
  {q:"300 heures de travail pour une équipe de 6 ouvriers à 8 h par jour représentent :", o:["Environ 6 jours","2 jours","30 jours","1 jour"], r:0, e:"300 / 48 = 6,25 jours."},
  {q:"Pour gagner du temps, il ne faut jamais :", o:["Réduire la cure et les délais de décoffrage","Préfabriquer","Travailler en parallèle","Utiliser une pompe"], r:0, e:"La résistance du béton en dépend."}
 ]},
{id:'chant-9', niv:3, titre:'Gestion des risques, HSE et sinistres', duree:30, contenu:`## Les risques majeurs du chantier
1. **Chutes de hauteur** (planchers sans garde-corps, échafaudages, toitures) : première cause d'accidents graves ;
2. **Effondrement de fouilles** de plus de 1,30 m non blindées ;
3. **Électrocution** (câbles abîmés, coffrets sans différentiel) ;
4. **Engins et charges suspendues** (grue, camion, bétonnière) ;
5. Coupures, chutes d'objets, poussières, bruit, chaleur.

## Organiser la prévention
- **Évaluation des risques** et **plan de sécurité** propre au chantier (PPSPS) ;
- Équipements collectifs d'abord (garde-corps, blindages), individuels ensuite (casque, chaussures, harnais, gants, lunettes) ;
- **Accueil sécurité** de chaque nouvel ouvrier, causeries régulières, secouristes formés.

## Mesurer : taux de fréquence et de gravité
$$ TF = nombre d'accidents avec arrêt × 1 000 000 / heures travaillées
$$ TG = jours perdus × 1 000 / heures travaillées
> [!exemple]
> 3 accidents avec arrêt, 42 jours perdus, 120 000 heures travaillées : **TF = 25**, **TG = 0,35**.

## L'environnement
Tri des déchets (gravats, bois, métaux, emballages), arrosage contre la poussière, bacs de lavage des bétonnières (pas de laitance dans les caniveaux), stockage des huiles et carburants sur rétention.

## Assurances et sinistres
- **Tous risques chantier (TRC)** : dommages à l'ouvrage pendant les travaux ;
- **Responsabilité civile** de l'entreprise ;
- **Garantie décennale** après réception pour les désordres graves.
En cas de sinistre : sécuriser, photographier, faire constater, **déclarer dans le délai** prévu au contrat.

> [!attention] Plan d'urgence
> Afficher les numéros d'urgence (en Côte d'Ivoire : **180** pompiers, **185** SAMU), l'itinéraire vers l'hôpital le plus proche et le nom des secouristes.`,
 quiz:[
  {q:"La première cause d'accidents graves sur les chantiers est :", o:["Les chutes de hauteur","Les coupures","Le bruit","La pluie"], r:0, e:"D'où l'importance des garde-corps et des harnais."},
  {q:"3 accidents avec arrêt pour 150 000 heures travaillées donnent un taux de fréquence de :", o:["20","3","200","0,02"], r:0, e:"3 × 1 000 000 / 150 000 = 20."},
  {q:"On privilégie d'abord les protections :", o:["Collectives","Individuelles","Aucune","Électroniques"], r:0, e:"Elles protègent tout le monde sans dépendre du comportement de chacun."},
  {q:"La garantie qui couvre les désordres graves pendant 10 ans après la réception est :", o:["La garantie décennale","La TRC","La garantie de parfait achèvement","L'assurance auto"], r:0, e:"Elle couvre la solidité de l'ouvrage."}
 ]}
]);

/* ---------- ÉCONOMIE ---------- */
A.addChapitres('eco', [
{id:'eco-6', niv:1, titre:'Les bases : prix, coûts, marges et TVA', duree:25, contenu:`## Du coût au prix de vente
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
> Un prix trop bas n'est pas une bonne affaire s'il ne couvre pas le déboursé sec : l'entreprise se rattrapera sur la qualité.`,
 quiz:[
  {q:"Le déboursé sec comprend :", o:["Matériaux, main-d'œuvre et matériel","Uniquement le bénéfice","La TVA","Les frais généraux et le bénéfice"], r:0, e:"Ce sont les coûts directs de l'ouvrage."},
  {q:"Un prix de 118 000 F TTC (TVA 18 %) correspond à :", o:["100 000 F HT","96 760 F HT","118 000 F HT","139 240 F HT"], r:0, e:"118 000 / 1,18 = 100 000 F."},
  {q:"DS = 10 000 F et K = 1,3 : le prix de vente HT est :", o:["13 000 F","10 300 F","7 700 F","23 000 F"], r:0, e:"10 000 × 1,3 = 13 000 F."},
  {q:"Dans un marché à prix unitaires, on paie :", o:["Les quantités réellement exécutées × les prix unitaires","Un montant global fixe","Uniquement les matériaux","La TVA seule"], r:0, e:"Les quantités sont constatées sur le chantier."}
 ]},
{id:'eco-7', niv:1, titre:'Lire un devis et comparer des offres', duree:25, contenu:`## Ce que doit contenir un devis
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
On peut discuter les quantités, proposer des **variantes** ou un phasage, mais **jamais** réduire les aciers, le dosage du béton ou les fondations.`,
 quiz:[
  {q:"Avant de signer un devis, il faut d'abord vérifier :", o:["Que les quantités correspondent aux plans","La couleur du papier","Le nombre de pages","Rien"], r:0, e:"Un métré rapide évite les mauvaises surprises."},
  {q:"Une offre 23 % sous l'estimation est :", o:["Anormalement basse : il faut demander le détail","Forcément la meilleure","Illégale","Automatiquement rejetée"], r:0, e:"Elle cache souvent des oublis ou une baisse de qualité."},
  {q:"Un acompte raisonnable au démarrage est de l'ordre de :", o:["20 à 30 %","100 %","0 %","80 %"], r:0, e:"Le reste se paie à l'avancement."},
  {q:"Dans une négociation, on ne doit jamais réduire :", o:["Les aciers et le dosage du béton","Les délais administratifs","Les finitions décoratives","Les variantes"], r:0, e:"La sécurité de l'ouvrage en dépend."}
 ]},
{id:'eco-8', niv:3, titre:'Financement : actualisation, VAN et TRI', duree:35, contenu:`## Un franc d'aujourd'hui vaut plus qu'un franc demain
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
Nombre d'années pour que les flux cumulés remboursent l'investissement : simple à comprendre, mais il ignore ce qui se passe ensuite. On l'utilise en complément de la VAN.`,
 quiz:[
  {q:"Un projet est rentable au taux d'actualisation choisi si :", o:["Sa VAN est positive","Sa VAN est négative","Son TRI est nul","Son investissement est faible"], r:0, e:"Les recettes actualisées couvrent l'investissement."},
  {q:"Le TRI est le taux pour lequel :", o:["La VAN est nulle","Les loyers sont maximaux","Le crédit est remboursé","La TVA s'applique"], r:0, e:"C'est la rentabilité propre du projet."},
  {q:"1 000 000 F reçus dans 1 an, actualisés à 10 %, valent aujourd'hui environ :", o:["909 000 F","1 100 000 F","1 000 000 F","900 000 F"], r:0, e:"1 000 000 / 1,1 ≈ 909 091 F."},
  {q:"L'effet de levier est favorable si :", o:["Le projet rapporte plus que le taux du crédit","Le crédit coûte plus que le projet ne rapporte","Il n'y a pas de crédit","Le TRI est nul"], r:0, e:"Sinon il réduit la rentabilité des fonds propres."}
 ]},
{id:'eco-9', niv:3, titre:'Contrôle des coûts : valeur acquise, avenants et réclamations', duree:35, contenu:`## Suivre un budget
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
- **Retenue de garantie** de 5 %, libérée après la garantie de parfait achèvement ou remplacée par une caution bancaire.`,
 quiz:[
  {q:"L'indice de performance des coûts IPC vaut :", o:["VA / CR","CR / VA","VP / VA","VA − VP"], r:0, e:"Un IPC inférieur à 1 signale un dépassement."},
  {q:"VA = 90 M et VP = 100 M : le projet est :", o:["En retard","En avance","Dans les temps","En dépassement de coût seulement"], r:0, e:"IPD = 0,9."},
  {q:"Budget 200 M et IPC = 0,8 : la prévision à terminaison est :", o:["250 M","160 M","200 M","180 M"], r:0, e:"200 / 0,8 = 250 M."},
  {q:"Un avenant doit être signé :", o:["Avant l'exécution des travaux modifiés","Après la réception","Jamais","Seulement en cas de litige"], r:0, e:"Sinon le paiement est contestable."}
 ]}
]);

/* ---------- MÉTRÉ (niveau avancé) ---------- */
A.addChapitres('metre', [
{id:'metre-7', niv:3, titre:'Métré des lots techniques : électricité, plomberie, climatisation', duree:30, contenu:`## Électricité
On compte **à l'unité** sur les plans d'électricité, puis on estime les longueurs :
- points lumineux, interrupteurs, prises 16 A et 32 A, tableau, mise à la terre (u ou ens) ;
- **câbles et gaines** : mesurés sur plan (horizontal + montées et descentes) ou estimés par point.
> [!exemple] Maison F4
> 18 points lumineux × 12 m de câble 1,5 mm² = **216 m** ; 24 prises × 10 m de câble 2,5 mm² = **240 m** ; autant de gaine ICTA, plus 10 % de chutes.

## Plomberie sanitaire
- **Appareils** à l'unité (WC, lavabos, douches, éviers, chauffe-eau) ;
- **Alimentations** en PPR par diamètre (ml), mesurées sur plan + 10 % ;
- **Évacuations** PVC par diamètre (Ø 40, 50, 100), en ml ;
- Raccords et accessoires : à l'unité ou en pourcentage des tubes ;
- Regards (u), fosse septique et puisard (ens).

## Climatisation
- Climatiseurs **par puissance** (9 000, 12 000, 18 000, 24 000 BTU) à l'unité ;
- **Liaisons frigorifiques** cuivre isolées (ml) entre unité intérieure et extérieure ;
- **Évacuations des condensats** (ml), supports, alimentations électriques dédiées.

## Les règles à respecter
- Partir des **plans d'exécution** des lots techniques et de leurs schémas (unifilaire électrique, schéma de plomberie) ;
- Compter **par niveau et par logement** sur un immeuble, puis multiplier ;
- Distinguer **fourniture** et **pose** si le devis le demande.

> [!astuce]
> Les lots techniques représentent souvent 15 à 25 % du coût d'une villa : un oubli de quelques appareils ou de quelques dizaines de mètres de câble se voit tout de suite dans le budget.`,
 quiz:[
  {q:"Les points lumineux et les prises se métrent :", o:["À l'unité","Au m³","Au kg","Au m²"], r:0, e:"On les compte sur le plan d'électricité."},
  {q:"20 prises × 10 m de câble 2,5 mm² + 10 % de chutes donnent :", o:["220 m","200 m","2 000 m","22 m"], r:0, e:"200 m × 1,10 = 220 m."},
  {q:"Les liaisons frigorifiques des climatiseurs se métrent :", o:["Au mètre linéaire","À l'unité seulement","Au m²","Au kg"], r:0, e:"Entre l'unité intérieure et l'unité extérieure."},
  {q:"Sur un immeuble, on métre les lots techniques :", o:["Par niveau et par logement, puis on multiplie","Uniquement au rez-de-chaussée","Sans plans","Au hasard"], r:0, e:"Les étages courants sont identiques."}
 ]},
{id:'metre-8', niv:3, titre:'Métré des VRD et des ouvrages extérieurs', duree:30, contenu:`## Terrassements généraux
Décapage (m²), déblais et remblais (m³) calculés par **profils en travers** et cubatures, évacuation (m³ foisonné), compactage (m²).

## Voirie et allées
Chaque couche se métre en **m³** (épaisseur × surface) ou en **m²** pour une épaisseur donnée :
> [!exemple] Allée carrossable de 40 m × 4 m en pavés
> - Couche de base en graveleux latéritique de 20 cm : 40 × 4 × 0,20 = **32 m³ en place**, soit environ 42 m³ à approvisionner (coefficient de foisonnement et de compactage ≈ 1,3) ;
> - Lit de pose en sable de 3 cm : 160 × 0,03 = **4,8 m³** ;
> - Pavés autobloquants : **160 m²** ;
> - Bordures de part et d'autre : **80 ml**.

## Réseaux extérieurs
Tranchées (m³ ou ml selon le bordereau), canalisations par diamètre (ml), **regards** (u), fourreaux (ml), grillage avertisseur (ml), remblaiement (m³).

## Assainissement pluvial
Caniveaux (ml par section), dalots (u ou ml), grilles (u), puisards ou bassins (u ou m³).

## Clôture et portail
- Fondation en **semelle filante** (ml ou m³), soubassement et mur en agglos (m²), poteaux et chaînages en béton armé (m³), enduit et peinture (m²) ;
- Portail et portillon (u).

## Espaces verts
Terre végétale (m³), gazon (m²), arbres et arbustes (u), arrosage (ens).

> [!retenir]
> Les VRD s'oublient facilement dans un budget de maison, alors qu'ils représentent souvent 5 à 10 % du coût total.`,
 quiz:[
  {q:"Une couche de base de 25 cm sur 100 m² représente :", o:["25 m³","250 m³","2,5 m³","100 m³"], r:0, e:"100 × 0,25 = 25 m³ en place."},
  {q:"Les bordures se métrent :", o:["Au mètre linéaire","Au m³","Au kg","À l'unité seulement"], r:0, e:"On mesure leur longueur."},
  {q:"Les cubatures de terrassement se calculent :", o:["Avec les profils en travers","Avec le plan électrique","À l'unité","Au hasard"], r:0, e:"Méthode des trapèzes ou de Simpson."},
  {q:"Les VRD d'une maison représentent souvent :", o:["5 à 10 % du coût total","50 %","0 %","90 %"], r:0, e:"Ils sont souvent oubliés dans les budgets."}
 ]},
{id:'metre-9', niv:3, titre:'Attachements, situations et décomptes', duree:30, contenu:`## L'attachement
C'est le **constat contradictoire** des quantités exécutées, signé par l'entreprise et le maître d'œuvre. Il est indispensable pour les **ouvrages cachés** (fouilles, fondations, ferraillage) qu'on ne pourra plus mesurer plus tard.

## La situation mensuelle
Chaque mois, l'entreprise présente l'état des travaux réalisés :
1. Quantités **cumulées** depuis le début × prix unitaires = montant cumulé ;
2. Moins le cumul des situations précédentes = **travaux du mois** ;
3. Moins la **retenue de garantie** (5 %) ;
4. Moins le **remboursement de l'avance** de démarrage (au prorata) ;
5. Plus la **révision des prix** éventuelle ; puis TVA selon le contrat.

> [!exemple] Situation n° 3 d'un marché de 150 millions F HT
> Cumul des travaux à fin du mois : 54 M ; cumul des situations précédentes : 36 M → **travaux du mois : 18 M**.
> Retenue de garantie 5 % : −0,9 M ; remboursement de l'avance (15 % des travaux du mois) : −2,7 M.
> **Net à payer HT : 14,4 M**, puis TVA à 18 % : 2,59 M → 16,99 M TTC.

## Le décompte final
À la fin des travaux, le **décompte général et définitif (DGD)** récapitule toutes les quantités, les avenants, les révisions, les pénalités et les sommes déjà payées. Il fixe le solde du marché.

## Après la réception
- Levée des **réserves** dans les délais convenus ;
- La retenue de garantie est restituée à la fin de la **garantie de parfait achèvement** (1 an), sauf réserves non levées.

> [!astuce]
> Tenez un **tableau de suivi** par lot : quantités du marché, quantités cumulées, pourcentage d'avancement, montants. Il sert à la fois aux situations et au contrôle des coûts.`,
 quiz:[
  {q:"L'attachement est surtout indispensable pour :", o:["Les ouvrages cachés (fondations, ferraillage)","Les peintures","Les plantations","Les meubles"], r:0, e:"Ils ne pourront plus être mesurés ensuite."},
  {q:"Cumul à fin de mois 80 M, cumul précédent 60 M : les travaux du mois valent :", o:["20 M","140 M","80 M","60 M"], r:0, e:"80 − 60 = 20 M."},
  {q:"La retenue de garantie courante est de :", o:["5 %","50 %","0,5 %","18 %"], r:0, e:"Elle garantit la levée des réserves."},
  {q:"Le document qui fixe le solde final du marché est :", o:["Le décompte général et définitif","Le premier devis","Le plan de masse","Le permis de construire"], r:0, e:"Il récapitule toutes les sommes dues et payées."}
 ]}
]);
