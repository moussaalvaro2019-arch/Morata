/* =====================================================================
   Organisation et gestion de chantier — cours complet (3 niveaux)
   Débutant : documents, intervenants, installation, qualité-sécurité-
              environnement, préparation de chantier
   Intermédiaire : rendements, planning, ressources et approvisionnements,
              matériel et engins, grandes opérations, suivi financier,
              suivi quotidien
   Avancé : management, méthodes et cadences, HSE et sinistres,
            valeur acquise, étude de cas complète
   ===================================================================== */
A.addMatiere({
 id:"chant",
 titre:"Organisation et gestion de chantier",
 court:"Gestion chantier",
 groupe:"gest",
 icone:"clip",
 couleur:"#B8700A",
 niveau:"Intermédiaire",
 heures:65,
 ordre:1,
 prerequis:["tech"],
 resume:"Préparer, organiser et piloter un chantier : documents du marché, intervenants, installation, qualité, sécurité et environnement, préparation, rendements et planning, ressources, approvisionnements, matériel et engins, terrassements et bétonnages, suivi financier et quotidien, management, cadences, HSE, valeur acquise, avec applications et exercices corrigés.",
 objectifs:[
  "Connaître les pièces d'un marché, les documents et les intervenants du chantier",
  "Préparer un chantier et organiser son installation",
  "Établir un planning à partir des quantités et des rendements",
  "Dimensionner les équipes, le matériel, les engins et les approvisionnements",
  "Appliquer les règles de qualité, de sécurité et d'environnement",
  "Suivre l'avancement, les coûts et la trésorerie d'un chantier"
 ],
 applications:[
  "Préparer l'ouverture d'un chantier de villa ou d'immeuble",
  "Planifier et suivre l'avancement chaque semaine",
  "Organiser un bétonnage ou un terrassement important",
  "Tenir les réunions, le journal et les tableaux de bord",
  "Établir une situation et analyser les écarts de coût"
 ],
 chapitres:[
{id:"chant-1", niv:1, titre:"Les documents du marché et du chantier", duree:45, contenu:`## Les pièces du marché
| Document | Contenu |
|---|---|
| **Acte d'engagement** | L'engagement de l'entreprise : montant, délai, signatures |
| **CCAP** (clauses administratives particulières) | Règles administratives et financières : délais, pénalités, paiements, avance, retenue de garantie, révision des prix |
| **CCTP** (clauses techniques particulières) | Description technique des ouvrages : matériaux, dosages, normes, mise en œuvre, essais |
| **BPU** (bordereau des prix unitaires) | Prix de chaque ouvrage élémentaire |
| **DQE** (devis quantitatif et estimatif) | Quantités × prix unitaires = montant du marché |
| **Plans** | Architecture, structure, réseaux, VRD |
| **Planning contractuel** | Délai global, jalons |
En cas de contradiction, l'ordre de priorité des pièces est fixé par le CCAP (en général : acte d'engagement, CCAP, CCTP, BPU, plans…).

## Les documents de chantier
- **Ordre de service (OS)** : décision écrite du maître d'œuvre (démarrage, travaux modificatifs, arrêt) ; la date de l'OS de démarrage fait courir le **délai** ;
- **Compte rendu de réunion** hebdomadaire : décisions, avancement, actions, responsables, échéances ;
- **Journal de chantier** : effectifs, météo, livraisons, matériel, incidents, essais, visites ;
- **Attachements** : relevés contradictoires des quantités exécutées (ouvrages enterrés ou cachés) ;
- **Procès-verbaux** (PV) : réception des fonds de fouille, des ferraillages, essais, réception des travaux ;
- **Plans d'exécution** visés, **plan d'installation de chantier**, **PPSPS** (plan de sécurité), **PAQ** (plan d'assurance qualité) ;
- **Situations** de travaux et **décompte** final.

## Le délai
> [!exemple] Calculer la date de fin contractuelle
> OS de démarrage notifié le 3 février ; délai contractuel : 6 mois. Fin contractuelle : **3 août**. Chaque jour de retard non justifié (hors intempéries reconnues ou ordres du maître d'œuvre) peut entraîner des **pénalités**.

> [!retenir]
> « Les écrits restent » : toute modification, réserve ou incident doit faire l'objet d'un écrit daté et signé (OS, compte rendu, PV, journal). C'est la base du règlement amiable des litiges.

> [!astuce]
> Photographiez chaque étape cachée (ferraillage avant coulage, fourreaux, étanchéités) et classez les photos par date : preuve précieuse et mémoire pour l'entretien.`,
 sujet:{titre:"Les pièces du marché, l'ordre de service et le calcul des délais et pénalités", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une entreprise de Bouaké remporte le marché de construction d'un dispensaire : **95 millions F HT**, délai **8 mois**. Vous êtes l'assistant du conducteur de travaux.

**Données**
- Ordre de service (OS) de démarrage notifié le **15 mars** ;
- Intempéries reconnues par le maître d'œuvre : **12 jours** calendaires ;
- Fin réelle des travaux : **10 décembre** ;
- Pénalité : **1/1 000** du montant du marché par jour calendaire de retard, plafonnée à **5 %**.

### Partie A — Les pièces du marché (8 points)
1. Donner le rôle de : acte d'engagement, CCAP, CCTP, BPU, DQE, plans, planning contractuel. (5 pts)
2. En cas de contradiction entre deux pièces, comment s'applique l'ordre de priorité ? Donner un exemple. (3 pts)

### Partie B — Les documents du chantier (5 points)
3. Qu'est-ce qu'un ordre de service ? Citer trois cas d'utilisation. (2 pts)
4. Rôle du journal de chantier, du compte rendu de réunion et des attachements. (3 pts)

### Partie C — Délais et pénalités (7 points)
5. Calculer la date de fin contractuelle, puis la date prolongée par les intempéries. (3 pts)
6. Calculer le nombre de jours de retard et le montant des pénalités. Le plafond est-il atteint ? (3 pts)
7. Comment l'entreprise aurait-elle pu éviter une partie de ces pénalités ? (1 pt)`,
  corrige:`### Partie A — Pièces (8 pts)
1. *(5 pts)*
   - **Acte d'engagement** : offre signée de l'entreprise (prix, délai), qui l'engage ;
   - **CCAP** : clauses administratives (délais, pénalités, paiements, retenues, assurances) ;
   - **CCTP** : clauses techniques (matériaux, mise en œuvre, contrôles) ;
   - **BPU** : prix unitaires de chaque ouvrage ;
   - **DQE** : quantités × prix = montant estimatif ;
   - **plans** : définition graphique de l'ouvrage ; **planning** contractuel : délais et jalons.
2. Les pièces sont classées dans le CCAP (en général : acte d'engagement, CCAP, CCTP, BPU, plans, DQE…) : la pièce **mieux classée l'emporte**. Ex. : le CCTP exige un béton à 350 kg/m³, un plan indique 300 → on applique le CCTP. *(3 pts)*

### Partie B — Documents (5 pts)
3. Ordre écrit du maître d'œuvre à l'entreprise : **démarrage** des travaux, **arrêt** ou reprise, **travaux modificatifs** ou supplémentaires, changement de délai. *(2 pts)*
4. **Journal** : registre quotidien (effectifs, météo, travaux, livraisons, incidents) ; **compte rendu** : décisions et actions de la réunion hebdomadaire, qui engagent les parties ; **attachements** : constats contradictoires des quantités exécutées (ouvrages cachés). *(3 pts)*

### Partie C — Délais (7 pts)
5. 15 mars + 8 mois = **15 novembre** ; + 12 jours = **27 novembre**. *(3 pts)*
6. Du 27 novembre au 10 décembre : **13 jours** de retard ; pénalité : 95 000 000 / 1 000 = 95 000 F/jour → **1 235 000 F** ; plafond 5 % = 4 750 000 F, non atteint. *(3 pts)*
7. En faisant **constater par écrit** chaque cause de retard non imputable (intempéries supplémentaires, ordres tardifs, plans manquants) et en demandant à temps une **prolongation de délai**. *(1 pt)*

> [!attention] Erreurs à éviter
> - Compter le délai à partir de la signature au lieu de l'OS de démarrage.
> - Oublier de faire reconnaître les intempéries par écrit.
> - Appliquer un plan contradictoire avec le CCTP sans en référer.`},
 exercices:[
  {t:"Où trouver l'information ?", d:1, e:`Dans quelle pièce du marché trouver : a) le dosage du béton des poteaux ; b) le montant des pénalités de retard ; c) le prix du m² d'enduit ; d) le délai d'exécution ; e) le taux de la retenue de garantie ; f) la quantité de carrelage prévue ?`, c:`a) **CCTP** ; b) **CCAP** ; c) **BPU** ; d) **acte d'engagement** (et planning contractuel) ; e) **CCAP** ; f) **DQE**.`},
  {t:"Date de fin d'un marché", d:1, e:`L'OS de démarrage d'un marché de 8 mois est notifié le 15 mars. Pendant le chantier, le maître d'œuvre accorde par OS une prolongation de 20 jours pour travaux supplémentaires. Quelle est la date de fin contractuelle ?`, c:`Délai initial : 15 mars + 8 mois = **15 novembre**. Prolongation de 20 jours : **5 décembre**.`},
  {t:"Quel document établir ?", d:2, e:`Dire quel document établir : a) le client demande un placard supplémentaire ; b) on va remblayer des fondations ; c) une pluie violente arrête le chantier deux jours ; d) un ouvrier se blesse légèrement ; e) les aciers d'une dalle sont prêts à être coulés.`, c:`a) **Devis** puis **OS** ou **avenant** avant exécution ; b) **attachement** des fondations (quantités) et **PV** de réception des fonds de fouille/ferraillage déjà faits ; c) mention au **journal de chantier** (et demande de reconnaissance des intempéries) ; d) **déclaration d'accident** + journal ; e) **PV de réception du ferraillage** (bon pour coulage).`},
  {t:"Contradiction entre pièces", d:2, e:`Le CCTP prévoit un béton dosé à 350 kg/m³ pour les poteaux, mais le libellé du BPU indique « béton dosé à 300 kg/m³ ». Que faire ?`, c:`Ne pas trancher seul : appliquer l'**ordre de priorité** des pièces fixé par le CCAP (souvent le CCTP prime sur le BPU pour la technique) et **demander par écrit** au maître d'œuvre de confirmer. Si le dosage de 350 kg est confirmé alors que le prix correspond à 300, l'entreprise peut demander un **prix nouveau** ou un avenant, mais avant d'exécuter.`},
  {t:"Rédiger une entrée de journal", d:1, e:`Rédiger l'entrée du journal de chantier du mardi : 9 ouvriers ; pluie de 10 h à 12 h ; livraison de 150 sacs de ciment et 12 m³ de sable ; coulage des poteaux du RDC (3,2 m³) ; prélèvement de 3 éprouvettes ; visite du bureau de contrôle.`, c:`Mardi [date] — Effectif : 9 (1 chef, 4 maçons, 4 manœuvres). Météo : pluie de 10 h à 12 h (arrêt des travaux extérieurs 2 h). Livraisons : 150 sacs de ciment CEM II 42,5 (BL n° …), 12 m³ de sable 0/4 (BL n° …), conformes. Travaux : coulage des poteaux du RDC, 3,2 m³, béton dosé à 350 kg/m³, vibré ; 3 éprouvettes 16 × 32 prélevées (série n° …). Visite : bureau de contrôle (M. …), observations : RAS. Signature du chef de chantier.`}
 ],
 quiz:[
  {q:"Le document qui décrit techniquement les ouvrages est :", o:["Le CCTP","Le CCAP","L'acte d'engagement","Le BPU"], r:0, e:"Clauses techniques."},
  {q:"Les pénalités de retard figurent dans :", o:["Le CCAP","Le CCTP","Les plans","Le journal"], r:0, e:"Clauses administratives."},
  {q:"L'ordre de service de démarrage :", o:["Fait courir le délai","Annule le marché","Fixe les prix","Est facultatif"], r:0, e:"Date de départ."},
  {q:"Un attachement concerne surtout :", o:["Les ouvrages cachés","La peinture","Le mobilier","Les plantations"], r:0, e:"Quantités contradictoires."},
  {q:"Le journal de chantier contient :", o:["Effectifs, météo, livraisons, incidents","Seulement les prix","Les plans d'architecte","Rien d'utile"], r:0, e:"Mémoire du chantier."}
 ]},
{id:"chant-10", niv:1, titre:"Les intervenants du chantier et l'organisation de l'équipe", duree:45, contenu:`## Du côté du maître d'ouvrage et de la maîtrise d'œuvre
Maître d'ouvrage (client), maître d'œuvre (architecte, BET), bureau de contrôle, coordonnateur sécurité, géotechnicien, éventuellement **OPC** (ordonnancement, pilotage, coordination) sur les gros projets.

## Du côté de l'entreprise
| Fonction | Rôle |
|---|---|
| **Directeur de travaux** | Responsable de plusieurs chantiers, relation avec le client, résultat financier |
| **Conducteur de travaux** | Prépare, planifie, commande, suit les coûts et la qualité d'un ou plusieurs chantiers |
| **Chef de chantier** | Organise le travail quotidien sur place, encadre les équipes, contrôle l'exécution |
| **Chef d'équipe** | Dirige une équipe (maçons, coffreurs, ferrailleurs) et travaille avec elle |
| **Ouvriers qualifiés** | Maçons, coffreurs, ferrailleurs, carreleurs, électriciens, plombiers, peintres |
| **Manœuvres** | Aide, manutention, fabrication du mortier et du béton |
| **Magasinier, gardien** | Stock, entrées et sorties, sécurité du site |
| **Sous-traitants, tâcherons** | Réalisent un lot ou une tâche à prix convenu |

## Régie ou tâcheronnage
- **Régie** : l'ouvrier est payé à la journée ; l'entreprise organise et contrôle ; rendement à surveiller ;
- **Tâcheronnage** : un tâcheron et son équipe sont payés à la tâche (m², m³, forfait) ; motivant et rapide, mais exige un **contrôle qualité serré** et un contrat écrit (prix, délais, qualité, sécurité, déclarations sociales).

## Composer une équipe
- Un maçon pour **1 à 2 manœuvres** selon la tâche (agglos, enduits, béton) ;
- Un chef d'équipe pour 6 à 10 ouvriers ;
- Des équipes **stables** et **polyvalentes**, formées à la sécurité.
> [!exemple] Coût journalier d'une équipe de gros œuvre (salaires chargés fictifs d'exercice)
> 1 chef d'équipe à 12 000 F + 4 maçons à 8 000 F + 6 manœuvres à 4 500 F = **71 000 F par jour**, soit **1 846 000 F** pour 26 jours de travail.

## La journée type du chef de chantier
Accueil et répartition des tâches → contrôle des approvisionnements → suivi de l'exécution et de la sécurité → réception des livraisons → mise à jour du journal → point avec le conducteur de travaux → préparation du lendemain.

> [!retenir]
> - Conducteur de travaux : prépare, planifie, gère ; chef de chantier : organise sur place ; chef d'équipe : dirige et travaille avec l'équipe.
> - Régie (à la journée) ou tâcheronnage (à la tâche, contrôle serré).
> - Un maçon pour 1 à 2 manœuvres ; un chef pour 6 à 10 ouvriers.`,
 sujet:{titre:"Les intervenants du chantier, l'organigramme et le coût d'une équipe", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes nommé chef de chantier d'un immeuble R+2 à Abobo. Vous organisez votre équipe.

**Données — équipe de gros œuvre** (salaires journaliers chargés, chiffres d'exercice)
- 1 chef d'équipe : **12 000 F** ; 5 maçons : **8 500 F** ; 2 ferrailleurs : **9 000 F** ; 7 manœuvres : **4 500 F** ;
- **26 jours** de travail par mois.

**Sous-traitants** : électricité, plomberie, étanchéité, menuiseries aluminium.

### Partie A — Les intervenants (6 points)
1. Classer les intervenants : maître d'ouvrage, architecte, BET, bureau de contrôle, coordonnateur sécurité, entreprise générale, sous-traitants, fournisseurs, concessionnaires (CIE, SODECI). (3 pts)
2. Différencier les rôles du conducteur de travaux, du chef de chantier et du chef d'équipe. (3 pts)

### Partie B — Organigramme (5 points)
3. Dessiner l'organigramme du chantier côté entreprise (avec les sous-traitants). (3 pts)
4. Quelles sont les obligations de l'entreprise générale vis-à-vis de ses sous-traitants (agrément, coordination, sécurité) ? (2 pts)

### Partie C — Coût de l'équipe (6 points)
5. Calculer le coût journalier puis mensuel de l'équipe. (3 pts)
6. L'élévation représente **330 m²** de maçonnerie ; l'équipe en pose **14 m²** par jour en moyenne. Calculer la durée et le coût de main-d'œuvre par m². (3 pts)

### Partie D — Communication (3 points)
7. Citer trois règles pour donner une consigne efficace à une équipe le matin. (3 pts)`,
  corrige:`### Partie A — Intervenants (6 pts)
1. *(3 pts)*
   - **Maîtrise d'ouvrage** : maître d'ouvrage (client) ;
   - **Maîtrise d'œuvre** : architecte, BET ;
   - **Contrôle et sécurité** : bureau de contrôle, coordonnateur sécurité ;
   - **Exécution** : entreprise générale, sous-traitants ;
   - **Autres** : fournisseurs, concessionnaires (CIE, SODECI) pour les branchements.
2. **Conducteur de travaux** : gère un ou plusieurs chantiers (budget, planning, commandes, relations avec la maîtrise d'œuvre) ; **chef de chantier** : organise et dirige au quotidien sur le terrain (équipes, matériel, sécurité, qualité) ; **chef d'équipe** : encadre directement un groupe d'ouvriers et travaille avec eux. *(3 pts)*

### Partie B — Organigramme (5 pts)
3. Directeur de travaux → **conducteur de travaux** → **chef de chantier** → chefs d'équipe (maçonnerie, ferraillage, coffrage) → ouvriers ; à côté : magasinier, pointeur ; liés au conducteur : **sous-traitants** (électricité, plomberie, étanchéité, menuiseries). *(3 pts)*
4. Faire **agréer** les sous-traitants par le maître d'ouvrage, leur transmettre plans et planning, **coordonner** leurs interventions, intégrer leurs risques dans le plan de sécurité, contrôler leur travail (l'entreprise générale reste responsable vis-à-vis du client), les payer dans les délais. *(2 pts)*

### Partie C — Coût (6 pts)
5. 12 000 + 5 × 8 500 + 2 × 9 000 + 7 × 4 500 = **104 000 F/jour** → × 26 = **2 704 000 F/mois**. *(3 pts)*
6. 330 / 14 = 23,6 → **24 jours** ; coût : 24 × 104 000 = 2 496 000 F → **≈ 7 560 F/m²** (l'équipe complète fait aussi d'autres tâches : poteaux, chaînages, coffrages). *(3 pts)*

### Partie D — Communication (3 pts)
7. Consigne **précise** (quoi, où, comment, avec quoi, pour quand) ; **vérifier** qu'elle est comprise (faire reformuler) ; rappeler le **point de sécurité** du jour ; nommer un responsable ; contrôler le résultat en fin de journée. *(3 pts)*

> [!attention] Erreurs à éviter
> - Laisser un sous-traitant intervenir sans agrément ni accueil sécurité.
> - Calculer un coût de main-d'œuvre avec des salaires non chargés.
> - Donner des consignes floues sans contrôle.`},
 exercices:[
  {t:"Qui s'en charge ?", d:1, e:`Attribuer la tâche à la bonne fonction : a) commander les aciers du mois ; b) répartir les ouvriers le matin ; c) négocier un avenant avec le client ; d) poser les agglos ; e) tenir le stock de ciment ; f) contrôler l'aplomb des poteaux avant coulage.`, c:`a) **Conducteur de travaux** ; b) **chef de chantier** ; c) **directeur ou conducteur de travaux** ; d) **maçon** ; e) **magasinier** ; f) **chef de chantier** (ou chef d'équipe), avec contrôle du conducteur.`},
  {t:"Coût d'une équipe", d:1, e:`Une équipe comprend 1 chef d'équipe (12 000 F/j), 3 maçons (8 000 F/j) et 5 manœuvres (4 500 F/j). Calculer son coût journalier et son coût pour 22 jours.`, c:`Par jour : 12 000 + 3 × 8 000 + 5 × 4 500 = **58 500 F** ; 22 jours : **1 287 000 F**.`},
  {t:"Régie ou tâche ?", d:2, e:`Pour 300 m² de maçonnerie, un tâcheron propose 1 600 F/m² (main-d'œuvre). En régie, un binôme maçon (8 000 F) + manœuvre (4 500 F) pose 10 m² par jour. Comparer les coûts et citer les points à prévoir dans le contrat du tâcheron.`, c:`Régie : 12 500 F / 10 m² = **1 250 F/m²** → 375 000 F (si le rendement de 10 m²/j est tenu ; à 7 m²/j, on monte à 1 786 F/m²).
Tâcheron : 300 × 1 600 = **480 000 F**, rendement garanti par le prix.
Contrat : prix et métré contradictoire, délai, qualité (aplomb, joints, chaînages), sécurité et EPI, déclaration des ouvriers, retenue ou paiement à l'avancement après contrôle.`},
  {t:"Composer les équipes", d:2, e:`On doit monter 240 m² d'agglos en 8 jours ; un binôme (1 maçon + 1 manœuvre) pose 10 m²/j, et il faut un manœuvre supplémentaire pour 2 binômes (mortier, approvisionnement). Combien de maçons et de manœuvres ?`, c:`Besoin : 240 / 8 = 30 m²/j → **3 binômes** → 3 maçons + 3 manœuvres, + 1 manœuvre pour l'approvisionnement de 2 binômes (on arrondit à **2** pour 3 binômes) → **3 maçons et 5 manœuvres**.`},
  {t:"Organigramme", d:1, e:`Dessiner (ou décrire) l'organigramme d'un chantier d'immeuble R+4 conduit par une entreprise générale, avec un sous-traitant pour l'électricité.`, c:`Directeur de travaux → **conducteur de travaux** → **chef de chantier** → chefs d'équipe (gros œuvre : maçons, coffreurs-ferrailleurs ; finitions) → ouvriers et manœuvres ; à côté : magasinier, gardiens, responsable sécurité ; le **sous-traitant électricité** (chef d'équipe et électriciens) est coordonné par le chef de chantier et rend compte au conducteur de travaux.`}
 ],
 quiz:[
  {q:"Qui organise le travail quotidien sur le chantier ?", o:["Le chef de chantier","Le maître d'ouvrage","Le notaire","Le fournisseur"], r:0, e:"Il encadre les équipes."},
  {q:"Le tâcheronnage consiste à payer :", o:["À la tâche (m², m³, forfait)","À la journée","Au mois","Rien"], r:0, e:"Selon le travail réalisé."},
  {q:"Un maçon travaille généralement avec :", o:["1 à 2 manœuvres","10 manœuvres","Aucun","Un architecte"], r:0, e:"Selon la tâche."},
  {q:"Le conducteur de travaux :", o:["Prépare, planifie, commande et suit les coûts","Pose les agglos","Garde le chantier la nuit","Signe le permis de construire"], r:0, e:"Gestion du chantier."},
  {q:"L'OPC intervient pour :", o:["Ordonnancer, piloter et coordonner","Peindre","Calculer les aciers","Vendre le terrain"], r:0, e:"Gros projets multi-lots."}
 ]},
{id:"chant-2", niv:1, titre:"L'installation de chantier", duree:45, contenu:`## Le plan d'installation de chantier (PIC)
Il positionne sur le plan de masse :
- les **accès** et la circulation des camions (entrée, sortie, aire de retournement) ;
- la **clôture**, le portail et le gardiennage ;
- les **cantonnements** : bureau, vestiaires, sanitaires, réfectoire, point d'eau potable ;
- le **magasin** (ciment, outillage) et les **aires de stockage** (sable, gravier, aciers, agglos, coffrages) ;
- l'**aire de fabrication** (bétonnière, atelier de ferraillage et de coffrage, fabrication des agglos) ;
- l'**engin de levage** (grue, monte-charge) et son rayon d'action ;
- les **branchements** provisoires d'eau et d'électricité (coffret avec différentiel 30 mA) ;
- la zone de **tri des déchets** et l'évacuation des eaux de pluie.

## Principes d'organisation
1. Rapprocher les stocks de leur lieu d'utilisation **sans gêner** l'avancement ni les fouilles ;
2. Séparer les circulations des engins et des piétons ;
3. Stocker le ciment **au sec**, sur palettes, et l'utiliser dans l'ordre d'arrivée ;
4. Placer la bétonnière entre les granulats, l'eau et l'ouvrage (trajets courts) ;
5. Prévoir l'**évacuation des eaux** (le chantier devient vite boueux en saison des pluies).

## Dimensionner les aires de stockage
> [!exemple] Agglos et ciment d'une villa
> 2 800 agglos empilés sur 6 rangs : 2 800 / 6 ≈ 467 piles × 0,06 m² (0,40 × 0,15) = **28 m²**, + 30 % pour les allées → **≈ 36 m²**.
> Ciment : 100 sacs en piles de 10 → 10 piles d'environ 0,32 m² → ≈ 3,2 m², + circulation → magasin de **3 × 4 m** suffisant.

## Le coût de l'installation
L'installation et le repli de chantier représentent couramment **2 à 4 %** du montant d'une maison, plus pour un immeuble (grue, cantonnements). Ce poste figure dans le devis (forfait) et se paie souvent au démarrage.

> [!exemple] Petite maison
> Clôture en tôles, magasin de 3 × 4 m fermant à clé, bâche à eau de 2 m³, sable et gravier côté rue (accès des camions), atelier de ferraillage sous abri près des fondations, toilettes de chantier.

> [!attention]
> Une installation mal pensée fait perdre des heures chaque jour (manutentions inutiles, camions bloqués) et augmente les vols. C'est le premier investissement rentable d'un chantier.

> [!retenir]
> - PIC : accès, clôture, cantonnements, magasin, stocks, fabrication, levage, réseaux, déchets.
> - Stocks près de leur usage sans gêner ; ciment au sec ; circulations séparées.
> - Coût : 2 à 4 % d'une maison.`,
 sujet:{titre:"Concevoir l'installation de chantier d'un immeuble sur une parcelle de 30 × 25 m", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Immeuble R+2 sur une parcelle de **30 × 25 m** à Yopougon, en bordure d'une rue sur le côté de 30 m. Vous préparez le plan d'installation de chantier (PIC).

**Données**
- Emprise du bâtiment : **18 × 12 m**, implanté à 5 m de la rue ;
- Stock d'agglos : **3 600** agglos en piles de **6 rangs**, une pile occupe **0,40 × 0,15 m** ; + 30 % pour les allées ;
- Stock de ciment : **150 sacs** en piles de 10 (une pile ≈ **0,32 m²**) ;
- Besoins en eau par jour : béton **4 m³** à **180 L/m³** ; mortiers **2 m³** à **250 L/m³** ; cure et arrosage **800 L** ; livraison d'eau tous les **2 jours** ;
- Clôture en tôles de **0,90 m** de largeur utile, avec un portail de **5 m**.

### Partie A — Le PIC (8 points)
1. Citer les éléments à faire figurer sur un plan d'installation de chantier. (3 pts)
2. Proposer une disposition sur la parcelle (croquis commenté) en justifiant les emplacements : accès, stocks, gâchage, ferraillage, magasin, bureau, sanitaires, déchets. (5 pts)

### Partie B — Dimensionner (8 points)
3. Calculer la surface de stockage des agglos. (2 pts)
4. Calculer la surface des piles de ciment et vérifier un magasin de 3 × 4 m. (2 pts)
5. Calculer le besoin en eau par jour et la capacité de la réserve. (2 pts)
6. Calculer la longueur de clôture et le nombre de tôles. (2 pts)

### Partie C — Obligations (4 points)
7. Que doit indiquer le panneau de chantier ? (2 pts)
8. Citer deux mesures pour limiter la gêne aux riverains. (2 pts)`,
  corrige:`### Partie A — PIC (8 pts)
1. Limites et **clôture**, **accès** et circulations (engins, piétons), emprise du bâtiment, zones de **stockage**, aire de **gâchage** ou centrale, atelier de **ferraillage** et de coffrage, **grue** et sa zone de survol, **bureau**, vestiaires, **sanitaires**, réseaux provisoires (eau, électricité), **déchets**, panneau. *(3 pts)*
2. Accès et portail **sur la rue** ; sable, gravier et agglos **près de l'accès** (déchargement direct) et près du gâchage ; aire de **gâchage** entre les stocks et le bâtiment ; **ferraillage** sous abri à côté de l'emprise ; **magasin** fermé et bureau près de l'entrée (contrôle des livraisons) ; sanitaires au fond, loin des stocks ; bennes à déchets accessibles aux camions ; circulation dégagée de 3 m autour du bâtiment. *(5 pts)*

### Partie B — Dimensionner (8 pts)
3. 3 600 / 6 = 600 piles × 0,06 = 36 m² → + 30 % = **≈ 47 m²**. *(2 pts)*
4. 15 piles × 0,32 = **4,8 m²** (+ circulation) : un magasin de **12 m²** suffit, avec de la place pour l'outillage. *(2 pts)*
5. 4 × 180 + 2 × 250 + 800 = **2 020 L/jour** → pour 2 jours : **≈ 4 m³** (bâche de 5 m³ avec marge). *(2 pts)*
6. Périmètre 2 × (30 + 25) = 110 m − 5 m de portail = **105 m** → 105 / 0,90 = 116,7 → **117 tôles**. *(2 pts)*

### Partie C — Obligations (4 pts)
7. Nature des travaux, numéro et date du **permis de construire**, maître d'ouvrage, maître d'œuvre, entreprises, dates de début et de fin, surface. *(2 pts)*
8. Horaires de travail respectés (pas de bruit la nuit), nettoyage de la voie et des roues des camions, arrosage contre la poussière, stationnement organisé, information des voisins. *(2 pts)*

> [!attention] Erreurs à éviter
> - Placer les stocks loin de l'accès : double manutention.
> - Oublier la réserve d'eau : le béton ne se fait pas sans eau.
> - Stocker sous la zone de survol de la grue des postes de travail fixes.`},
 exercices:[
  {t:"Placer les installations", d:1, e:`Terrain de 20 × 30 m, rue sur le côté de 20 m ; maison de 12 × 9 m au centre. Proposer l'emplacement : portail, sable et gravier, magasin, bétonnière, aciers, agglos, toilettes, déchets.`, c:`- **Portail** côté rue, largeur ≥ 4 m pour les camions ;
- **Sable et gravier** près du portail (livraison directe), entre la rue et la maison ;
- **Bétonnière** juste à côté des granulats, avec la **bâche à eau** ;
- **Magasin** fermé près de l'entrée (surveillance), au sec ;
- **Aciers** et atelier de ferraillage sur le côté, sous abri ;
- **Agglos** le long de la maison, sans gêner les fouilles ;
- **Toilettes** et **déchets** en fond de parcelle, accessibles pour l'évacuation.`},
  {t:"Surface de stockage d'agglos", d:2, e:`3 600 agglos de 15 sont livrés en une fois et empilés sur 6 rangs (emprise d'un agglo : 0,40 × 0,15 m). Calculer la surface nécessaire avec 30 % d'allées.`, c:`Piles : 3 600 / 6 = **600** ; emprise : 600 × 0,06 = **36 m²** ; avec allées : 36 × 1,3 = **46,8 m²** (≈ 7 × 7 m).`},
  {t:"Budget d'installation", d:1, e:`Une maison est estimée à 25 M F HT. Avec une installation de chantier à 3 %, quel montant prévoir ? Citer cinq dépenses incluses.`, c:`3 % × 25 M = **750 000 F HT**.
Dépenses : clôture et portail, magasin, branchements provisoires d'eau et d'électricité (et consommations), toilettes, panneau de chantier, gardiennage, repli et nettoyage final.`},
  {t:"Chantier en saison des pluies", d:2, e:`Le chantier démarre en mai (saison des pluies à Abidjan). Quelles dispositions d'installation prendre ?`, c:`Accès et aires de stockage **empierrés** (latérite compactée), **fossés** et pente pour évacuer l'eau, ciment stocké **surélevé et bâché** dans un magasin étanche, aciers sur **cales**, protection des fouilles (évacuation ou pompe), bâches pour protéger les bétons frais, planning tenant compte de jours d'arrêt.`},
  {t:"Rayon de la grue", d:2, e:`Une grue à tour a une flèche de 30 m. Le bâtiment mesure 40 × 15 m. Où placer la grue pour couvrir tout le bâtiment et l'aire de stockage ?`, c:`Placer la grue **au milieu du grand côté**, à environ 3 m de la façade : la distance au coin le plus éloigné vaut √(20² + 18²) = **26,9 m** < 30 m ✔. L'aire de stockage et de chargement des bennes doit être dans le rayon, du côté de l'accès, en évitant de faire survoler la voie publique et les voisins par les charges.`}
 ],
 quiz:[
  {q:"Le PIC est :", o:["Le plan d'installation de chantier","Un engin","Un document fiscal","Un essai"], r:0, e:"Organisation du site."},
  {q:"Le ciment se stocke :", o:["Au sec, sur palettes","Au soleil sur le sol","Sous la pluie","Dans les fouilles"], r:0, e:"Il craint l'humidité."},
  {q:"Coût courant d'installation pour une maison :", o:["2 à 4 % du montant","50 %","0 %","20 %"], r:0, e:"Forfait du devis."},
  {q:"La bétonnière se place :", o:["Près des granulats, de l'eau et de l'ouvrage","Au fond du terrain","Sur la voie publique","Dans le magasin"], r:0, e:"Trajets courts."},
  {q:"Le coffret électrique de chantier doit avoir :", o:["Un différentiel 30 mA","Rien","Une prise unique","Un compteur d'eau"], r:0, e:"Protection des personnes."}
 ]},
{id:"chant-5", niv:1, titre:"Qualité, sécurité et environnement", duree:50, contenu:`## La qualité
Un chantier de qualité suit un **plan de contrôle** : pour chaque étape, **ce qu'on vérifie**, **comment**, **par qui**, et la **trace écrite**.
| Étape | Point de contrôle |
|---|---|
| Implantation | Cotes, diagonales, niveau ±0,00 |
| Fond de fouille | Bon sol atteint, propreté, profondeur |
| Ferraillage | Nombre, diamètres, cadres, enrobage, recouvrements |
| Coulage | Dosage, consistance (cône), vibration, éprouvettes |
| Maçonnerie | Aplomb, alignement, joints, chaînages |
| Réseaux | Essais de pression, continuité électrique |
| Finitions | Planéité, aspect, fonctionnement |
Une **non-conformité** (écart par rapport au CCTP ou aux plans) fait l'objet d'une **fiche** : description, cause, traitement (réparer, démolir, accepter avec accord), action pour que cela ne se reproduise pas.

## La sécurité
Principaux risques : **chutes de hauteur** (première cause d'accidents graves), effondrement de fouilles ou d'étaiements, électrocution, chutes d'objets, blessures par les aciers en attente, engins, bruit, poussières, chaleur.
Mesures :
- **Protections collectives** d'abord : garde-corps sur les planchers et trémies, échafaudages conformes, filets, blindage des fouilles de plus de 1,30 m, balisage ;
- **EPI** obligatoires : casque, chaussures de sécurité, gants, gilet, harnais en hauteur, lunettes, protections auditives ;
- **Bouchons** sur les aciers en attente ; coffrets électriques avec **différentiel 30 mA** ;
- **Accueil sécurité** de chaque nouvel ouvrier, causeries régulières, eau potable et pauses par forte chaleur.

## L'environnement
- **Tri des déchets** (gravats, ferrailles, bois, emballages) et évacuation vers des filières autorisées ;
- Limitation du **bruit** (horaires) et de la **poussière** (arrosage) ;
- Pas de rejet de **laitance** de ciment ou d'huile de décoffrage dans les caniveaux (bac de lavage des bétonnières) ;
- Stockage des carburants et huiles sur **rétention** ;
- Économie d'eau, réemploi des terres de déblai, propreté de la voirie.

> [!exemple] Budget EPI d'une équipe de 12 ouvriers (prix fictifs d'exercice)
> Par ouvrier et par an : casque 5 000 F, chaussures 15 000 F, 4 paires de gants à 1 500 F, gilet 3 000 F → **29 000 F** ; pour 12 ouvriers : **348 000 F**, bien moins que le coût d'un seul accident grave.

> [!retenir]
> - Qualité : contrôler à chaque étape et tracer ; fiche de non-conformité.
> - Sécurité : protections collectives d'abord, EPI ensuite, accueil et causeries.
> - Environnement : trier, ne rien rejeter, limiter bruit et poussière.`,
 sujet:{titre:"Qualité, sécurité et environnement sur un chantier de bureaux", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes responsable QSE d'un chantier de bureaux R+3 au Plateau, avec **18 ouvriers**.

**Données**
- EPI par ouvrier et par an : casque **5 000 F**, chaussures **15 000 F**, **6 paires** de gants à **1 500 F**, gilet **3 000 F** ;
- Statistiques de l'année : **2 accidents** avec arrêt, **30 jours** perdus, **85 000 heures** travaillées ;
- TF = accidents avec arrêt × 1 000 000 / heures ; TG = jours perdus × 1 000 / heures.

### Partie A — Sécurité (9 points)
1. Citer les principaux risques d'un chantier de bâtiment (au moins cinq). (3 pts)
2. Expliquer la hiérarchie des mesures de prévention (supprimer, protéger collectivement, protéger individuellement, informer). Illustrer avec le risque de chute. (3 pts)
3. Calculer le budget EPI annuel. (1 pt)
4. Calculer TF et TG et les interpréter. (2 pts)

### Partie B — Qualité (6 points)
5. Qu'est-ce qu'un point d'arrêt ? En citer trois sur un chantier de béton armé. (3 pts)
6. Qu'est-ce qu'une fiche de non-conformité ? Que contient-elle ? (3 pts)

### Partie C — Environnement (5 points)
7. Proposer un plan de gestion des déchets de chantier (tri, stockage, filières). (3 pts)
8. Comment gérer les eaux de lavage des toupies et des outils ? (2 pts)`,
  corrige:`### Partie A — Sécurité (9 pts)
1. **Chutes de hauteur** (planchers, échafaudages, trémies) ; chutes de plain-pied ; **chutes d'objets** ; **ensevelissement** (tranchées) ; **engins** et grue ; **électrocution** ; manutentions (dos) ; coupures (ferraillage) ; bruit, poussière, chaleur. *(3 pts)*
2. On **supprime** le risque si possible (préfabriquer au sol) ; sinon **protection collective** (garde-corps, filets, couvrir les trémies) ; puis **protection individuelle** (harnais, si le collectif est impossible) ; enfin **informer et former** (accueil sécurité, consignes). *(3 pts)*
3. 18 × (5 000 + 15 000 + 9 000 + 3 000) = 18 × 32 000 = **576 000 F**. *(1 pt)*
4. TF = 2 × 1 000 000 / 85 000 = **23,5** ; TG = 30 × 1 000 / 85 000 = **0,35**. Environ 24 accidents par million d'heures : fréquence élevée — analyser les causes et renforcer la prévention. *(2 pts)*

### Partie B — Qualité (6 pts)
5. Étape qu'on ne peut pas dépasser sans **contrôle et accord** écrit : réception du **fond de fouille** ; contrôle du **ferraillage** avant bétonnage ; contrôle des **coffrages** et réservations ; mise en eau de l'**étanchéité**. *(3 pts)*
6. Document qui enregistre un **écart** par rapport aux exigences : description, localisation, cause, décision (reprise, acceptation, démolition), responsable, délai, vérification de la correction et actions pour éviter qu'il se reproduise. *(3 pts)*

### Partie C — Environnement (5 pts)
7. Bennes séparées : **inertes** (gravats, béton), **métaux** (chutes d'acier), **bois**, emballages (cartons, plastiques), **dangereux** (huiles, peintures, solvants) sur rétention ; évacuation vers des filières agréées ou réemploi (gravats en remblai) ; chantier propre chaque soir. *(3 pts)*
8. **Bac de décantation** pour les eaux de lavage (laitance), réutilisation de l'eau claire, évacuation des boues sèches avec les inertes ; jamais de rejet dans le caniveau ou la lagune. *(2 pts)*

> [!attention] Erreurs à éviter
> - Compter sur les seuls EPI au lieu des protections collectives.
> - Bétonner sans contrôle du ferraillage (point d'arrêt).
> - Brûler les déchets sur le chantier.`},
 exercices:[
  {t:"Plan de contrôle d'une semelle", d:1, e:`Établir le plan de contrôle d'une semelle isolée (quoi, comment, qui, trace).`, c:`| Quoi | Comment | Qui | Trace |
|---|---|---|---|
| Fond de fouille, bon sol | Visuel, pénétromètre, cote | Chef de chantier + MOE | PV de fond de fouille |
| Position et dimensions | Cordeaux, mètre | Chef de chantier | Fiche de contrôle |
| Ferraillage (Ø, espacements, enrobage) | Comparaison au plan, mètre, cales | Chef de chantier + MOE/BC | PV de ferraillage, photos |
| Béton (dosage, consistance) | Comptage des sacs, cône d'Abrams | Chef d'équipe | Journal, éprouvettes |
| Cure | Arrosage 7 jours | Chef d'équipe | Journal |`},
  {t:"Risques et parades", d:1, e:`Pour chaque situation, citer le risque et la parade : a) dalle d'étage coulée sans garde-corps ; b) tranchée de 2 m en sable ; c) rallonges électriques posées dans les flaques ; d) attentes de poteaux à hauteur du visage ; e) travail en plein soleil à 14 h.`, c:`a) **Chute de hauteur** → garde-corps périphériques et sur les trémies ;
b) **Ensevelissement** → talutage ou blindage, pas de stockage en bord de fouille ;
c) **Électrocution** → câbles suspendus et en bon état, coffret avec différentiel 30 mA ;
d) **Blessure grave** → bouchons de protection sur les aciers ;
e) **Coup de chaleur** → eau potable, pauses à l'ombre, horaires décalés.`},
  {t:"Budget EPI", d:1, e:`Un chantier emploie 20 ouvriers pendant 8 mois. Par ouvrier et par an : casque 5 000 F, chaussures 15 000 F, 4 paires de gants à 1 500 F, gilet 3 000 F, et 2 harnais à 45 000 F pour le chantier. Calculer le budget.`, c:`Par ouvrier et par an : 29 000 F → pour 8 mois (on fournit casque, chaussures et gilet en entier, gants au prorata : 3 paires) : 5 000 + 15 000 + 4 500 + 3 000 = 27 500 F → 20 × 27 500 = **550 000 F** ; harnais : **90 000 F** → total **640 000 F**.`},
  {t:"Fiche de non-conformité", d:2, e:`Au décoffrage d'un poteau, on découvre des nids de cailloux sur 30 cm en pied et un acier apparent. Rédiger la fiche de non-conformité.`, c:`- **Description** : poteau P12 (RDC), nids de cailloux sur 30 cm en pied, un acier apparent ; photo jointe.
- **Cause probable** : béton lâché de trop haut sans goulotte, vibration insuffisante en pied, fuite de laitance (coffrage non étanche).
- **Traitement** (après avis du MOE/BET) : purge du béton non compact, nettoyage, mortier de réparation à retrait compensé, contrôle.
- **Action corrective** : couler par couches avec goulotte, vibrer chaque couche, rendre les coffrages étanches, sensibiliser l'équipe ; contrôle renforcé des poteaux suivants.`},
  {t:"Gestion des déchets", d:1, e:`Classer et proposer une destination : gravats de béton, chutes d'acier, sacs de ciment vides, bois de coffrage usé, pots de peinture, huiles de décoffrage usagées.`, c:`- Gravats : **concassage/remblai** ou décharge autorisée ;
- Chutes d'acier : **ferrailleurs/recyclage** ;
- Sacs de ciment : déchets banals (ne pas brûler) ;
- Bois usé : réemploi, bois de chauffe hors chantier ou déchetterie ;
- Pots de peinture, huiles : **déchets dangereux**, à stocker sur rétention et remettre à une filière agréée.`}
 ],
 quiz:[
  {q:"La première cause d'accidents graves sur les chantiers est :", o:["La chute de hauteur","La piqûre de moustique","Le bruit","La pluie"], r:0, e:"Garde-corps indispensables."},
  {q:"Les protections collectives passent :", o:["Avant les EPI","Après les EPI","Jamais","Seulement la nuit"], r:0, e:"Elles protègent tout le monde."},
  {q:"Une fouille de plus de 1,30 m doit être :", o:["Talutée ou blindée","Remplie d'eau","Laissée telle quelle","Couverte de bâches"], r:0, e:"Risque d'ensevelissement."},
  {q:"La laitance de lavage des bétonnières :", o:["Ne doit pas être rejetée dans les caniveaux","Peut aller au caniveau","Sert de peinture","Se boit"], r:0, e:"Bac de décantation."},
  {q:"Une fiche de non-conformité décrit :", o:["L'écart, sa cause, son traitement et l'action corrective","Les salaires","La météo","Le prix du ciment"], r:0, e:"Démarche qualité."}
 ]},
{id:"chant-11", niv:1, titre:"La préparation de chantier", duree:50, contenu:`## Pourquoi préparer ?
« Un chantier bien préparé est à moitié réalisé. » La **période de préparation** (souvent 2 à 6 semaines, parfois incluse dans le délai) sert à anticiper tout ce qui pourrait bloquer l'exécution : plans, méthodes, matériel, matériaux, main-d'œuvre, autorisations, sécurité.

## Les tâches de la préparation
1. **Étudier le dossier** : plans, CCTP, CCAP, DQE ; relever les incohérences et poser les questions par écrit ;
2. **Visiter le site** : accès, voisins, réseaux existants, nature du terrain, eau et électricité disponibles ;
3. **Études d'exécution** : plans EXE (coffrage, ferraillage), calepinages, réservations, visa du maître d'œuvre et du bureau de contrôle ;
4. **Méthodes** : choix des coffrages, des moyens de levage et de bétonnage, phasage des travaux ;
5. **Planning détaillé** et **budget d'exécution** (objectif de déboursés par lot) ;
6. **Consultations et commandes** : fournisseurs, sous-traitants, location de matériel, en tenant compte des **délais** ;
7. **Plan d'installation**, **PPSPS** (sécurité), **PAQ** (qualité) ;
8. **Autorisations** : occupation de la voie, branchements, affichage du permis ;
9. **Constat** de l'état des avoisinants (huissier) avant les travaux ;
10. **Réunion de démarrage** et OS de commencement.

## Le rétro-planning des commandes
$$ Date de commande = date de besoin − délai du fournisseur − marge de sécurité
Certains éléments ont des délais longs : menuiseries aluminium sur mesure (6 à 10 semaines), charpente métallique, ascenseurs, équipements importés.
> [!exemple] Menuiseries aluminium
> Besoin sur le chantier : **semaine 16** ; fabrication : 8 semaines ; marge : 1 semaine → commande au plus tard en **semaine 7**. Si l'on attend la prise de cotes sur la maçonnerie terminée (semaine 10), la livraison arrivera en semaine 19 : **3 semaines de retard**. Solution : commander sur les **dimensions des plans** avec des **précadres** posés pendant la maçonnerie, ou des tableaux réalisés aux cotes exactes.

## Le budget d'exécution
On transforme le prix de vente en **objectif de déboursés** : DS objectif = prix de vente / K, réparti par lots et par postes (matériaux, main-d'œuvre, matériel, sous-traitance). Il sert ensuite à suivre les coûts réels.

> [!retenir]
> - Préparer : dossier, site, plans EXE, méthodes, planning, budget, commandes, PIC, PPSPS, PAQ, autorisations, constat des avoisinants.
> - Commande = besoin − délai − marge ; anticiper les délais longs.
> - Budget d'exécution = objectif de déboursés par lot.`,
 sujet:{titre:"Préparer un chantier : documents, études d'exécution et dates de commande", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous disposez de 4 semaines de préparation avant le démarrage d'un collège à Gagnoa.

**Données (approvisionnements)**
- Menuiseries aluminium : besoin en **semaine 22** ; fabrication **7 semaines** ; marge **1 semaine** ;
- Carrelage importé : besoin en **semaine 25** ; délai **10 semaines** ; marge **2 semaines** ;
- Aciers de la première levée de poteaux : besoin au **jour 18** du chantier ; livraison **5 jours** ; marge **3 jours** ;
- Date de commande = date de besoin − délai du fournisseur − marge.

### Partie A — La préparation (6 points)
1. Pourquoi la période de préparation est-elle décisive ? (2 pts)
2. Citer six documents ou actions de la préparation. (4 pts)

### Partie B — Études et méthodes (6 points)
3. Quelles études d'exécution demander au BET avant de couler les fondations ? (2 pts)
4. Qu'est-ce qu'une étude de méthodes ? Donner deux choix de méthode à faire sur ce chantier. (4 pts)

### Partie C — Approvisionnements (8 points)
5. Calculer la date de commande de chaque fourniture. (4 pts)
6. Les menuiseries ne sont commandées qu'après la prise de cotes sur la maçonnerie terminée (semaine 16). Quel retard ? Proposer une solution. (4 pts)`,
  corrige:`### Partie A — Préparation (6 pts)
1. Les décisions prises avant le démarrage (méthodes, planning, commandes, installation) fixent l'essentiel du coût et du délai ; une erreur découverte en cours de chantier coûte beaucoup plus cher à corriger. *(2 pts)*
2. **Planning** détaillé ; **PIC** (installation) ; **PPSPS** / plan de sécurité ; **plan qualité** et points d'arrêt ; commande des **études d'exécution** ; **calendrier des approvisionnements** ; budget d'exécution ; choix des **sous-traitants** ; visite du site et état des lieux ; déclarations administratives. *(4 pts)*

### Partie B — Études (6 pts)
3. Plans de **coffrage** et de **ferraillage** des fondations et amorces, nomenclatures d'aciers, note de calcul, plan d'implantation, réservations des réseaux enterrés. *(2 pts)*
4. Étude du **mode de réalisation** des ouvrages (matériel, coffrages, phasage, effectifs, cadences, coûts) pour choisir la solution la plus efficace. Ex. : **béton de centrale ou bétonnière** ; **coffrages bois ou métalliques** ; grue ou monte-charge ; poutrelles préfabriquées ou dalle pleine. *(4 pts)*

### Partie C — Approvisionnements (8 pts)
5. *(4 pts)*
   - Menuiseries : 22 − 7 − 1 = **semaine 14** ;
   - Carrelage : 25 − 10 − 2 = **semaine 13** ;
   - Aciers : 18 − 5 − 3 = **jour 10**.
6. Commande en semaine 16 → livraison en semaine 23 (16 + 7) au lieu de 22 : **1 semaine de retard** (2 sans marge). Solution : commander sur les **cotes des plans** en semaine 14 et faire respecter les réservations (gabarits, **précadres** posés pendant la maçonnerie). *(4 pts)*

> [!attention] Erreurs à éviter
> - Commander les fournitures à délai long au dernier moment.
> - Démarrer sans plans d'exécution validés.
> - Oublier la marge de sécurité dans les dates de commande.`},
 exercices:[
  {t:"Check-list de démarrage", d:1, e:`Établir une check-list de 8 points à vérifier avant le premier coup de pioche d'une villa.`, c:`1. Permis de construire obtenu et **affiché** ; 2. Bornage et **plan d'implantation** ; 3. **Étude de sol** et plans d'exécution des fondations visés ; 4. **Branchements** provisoires eau/électricité ; 5. **Installation** (clôture, magasin, toilettes) ; 6. **Commandes** des premiers matériaux et location du matériel ; 7. **Équipe** constituée, EPI distribués, accueil sécurité ; 8. **OS de démarrage** reçu et planning communiqué.`},
  {t:"Rétro-planning des commandes", d:2, e:`Le chantier démarre en semaine 1. Calculer la semaine de commande au plus tard (marge 1 semaine) : a) aciers, besoin semaine 3, délai 1 semaine ; b) charpente métallique, besoin semaine 12, délai 6 semaines ; c) carrelage importé, besoin semaine 18, délai 10 semaines ; d) climatiseurs, besoin semaine 20, délai 3 semaines.`, c:`a) 3 − 1 − 1 = **semaine 1** (immédiatement) ;
b) 12 − 6 − 1 = **semaine 5** ;
c) 18 − 10 − 1 = **semaine 7** ;
d) 20 − 3 − 1 = **semaine 16**.
Le carrelage et la charpente doivent être choisis et validés par le client **dès la préparation**.`},
  {t:"Budget d'exécution", d:2, e:`Le marché d'une maison vaut 19 832 641 F HT ; le coefficient de vente de l'entreprise est K = 1,355. Calculer le déboursé sec objectif et le répartir : gros œuvre 52 %, second œuvre 40 %, installation et divers 8 %.`, c:`DS objectif = 19 832 641 / 1,355 ≈ **14 637 000 F**.
Gros œuvre : **7 611 000 F** ; second œuvre : **5 855 000 F** ; installation et divers : **1 171 000 F**.
Le conducteur de travaux suivra chaque mois les dépenses réelles par rapport à ces objectifs.`},
  {t:"Constat des avoisinants", d:1, e:`Pourquoi faire constater par huissier l'état des maisons voisines avant de terrasser un sous-sol en limite de propriété ?`, c:`Pour disposer d'une **preuve datée** de l'état initial (fissures existantes, dégradations). En cas de réclamation d'un voisin pendant ou après les travaux, on peut distinguer les désordres **anciens** de ceux causés par le chantier, éviter des indemnisations injustifiées… et traiter rapidement les dommages réels.`},
  {t:"Questions au maître d'œuvre", d:2, e:`En étudiant le dossier, on relève : le plan de coffrage indique une poutre de 20 × 40, le plan de ferraillage une poutre de 20 × 50 ; le CCTP demande un carrelage 60 × 60, le DQE un 40 × 40 ; aucune réservation n'est dessinée pour la climatisation. Que faire ?`, c:`Rédiger une **liste de questions** écrite (fiche de demande d'information) au maître d'œuvre, **avant** exécution : 1) section exacte de la poutre (incidence sur la hauteur sous plafond et les aciers) ; 2) format du carrelage (incidence sur le prix : prix nouveau ou avenant) ; 3) emplacements et diamètres des réservations de climatisation (à intégrer aux plans EXE). Conserver les réponses écrites dans le dossier du chantier.`}
 ],
 quiz:[
  {q:"La période de préparation sert à :", o:["Anticiper tout ce qui pourrait bloquer l'exécution","Commencer les finitions","Payer le solde","Réceptionner"], r:0, e:"Plans, méthodes, commandes…"},
  {q:"Date de commande au plus tard :", o:["Besoin − délai − marge","Besoin + délai","Fin du chantier","N'importe quand"], r:0, e:"Rétro-planning."},
  {q:"Le PPSPS concerne :", o:["La sécurité","Les prix","La peinture","La TVA"], r:0, e:"Plan particulier de sécurité."},
  {q:"Les plans EXE doivent être :", o:["Visés par le maître d'œuvre et le contrôle","Dessinés après les travaux","Facultatifs","Gardés secrets"], r:0, e:"Base d'exécution."},
  {q:"Le budget d'exécution fixe :", o:["Les déboursés objectifs par lot","Le prix de vente au client","Les impôts","Les salaires des fonctionnaires"], r:0, e:"Suivi des coûts."}
 ]},
{id:"chant-3", niv:2, titre:"Rendements, temps unitaires et durées", duree:50, contenu:`## De la quantité à la durée
$$ Durée (jours) = Quantité / (rendement d'une équipe × nombre d'équipes)
ou, avec un **temps unitaire** Tu (heures par unité d'ouvrage) :
$$ Durée (jours) = Quantité × Tu / (nombre d'ouvriers × heures par jour)
Le **rendement** (unités par jour) et le **temps unitaire** (heures par unité) sont deux façons de dire la même chose : un binôme qui pose 10 m² d'agglos en 8 h a un temps unitaire de 0,8 h/m² (pour le binôme).

## Rendements indicatifs (main-d'œuvre locale, chantier bien organisé)
| Tâche | Équipe | Rendement indicatif |
|---|---|---|
| Fouilles manuelles en terrain ordinaire | 1 manœuvre | 2 à 4 m³/jour |
| Maçonnerie d'agglos de 15 | 1 maçon + 1 manœuvre | 8 à 12 m²/jour |
| Coffrage de poteaux et poutres | 1 coffreur + 1 aide | 6 à 10 m²/jour |
| Ferraillage | 1 ferrailleur + 1 aide | 150 à 250 kg/jour |
| Béton à la bétonnière | équipe de 6 à 8 | 6 à 12 m³/jour |
| Enduit ciment | 1 maçon + 1 manœuvre | 12 à 20 m²/jour |
| Carrelage sol | 1 carreleur + 1 aide | 10 à 15 m²/jour |
| Peinture (2 couches) | 1 peintre | 30 à 50 m²/jour |

## Ce qui fait varier les rendements
La qualification et la motivation des équipes, l'organisation (approvisionnements prêts, outillage), la météo (chaleur, pluie), la complexité de l'ouvrage (petites surfaces, nombreuses ouvertures), la hauteur (échafaudages), les arrêts (attentes de matériaux, de plans). Le meilleur rendement est celui **mesuré sur vos propres chantiers** : on le note chaque jour dans le journal.

> [!exemple] Élévation d'une villa
> 260 m² d'agglos de 15 ; 3 binômes maçon + manœuvre à 10 m²/jour : 260 / 30 ≈ **9 jours** de maçonnerie, à intercaler avec le coulage des poteaux et chaînages.

## Mesurer un rendement réel
Rendement réel = quantité réalisée / (nombre d'équipes × jours). Exemple : 2 binômes posent 54 m² en 3 jours → 54 / (2 × 3) = **9 m²/jour par binôme**. Si le planning prévoyait 10, il faut corriger les durées restantes ou agir (approvisionnement, organisation).

## Application : les durées du gros œuvre d'une villa
| Tâche | Quantité | Rendement par équipe | Équipes | Durée calculée | Durée retenue |
|---|---|---|---|---|---|
| Fouilles manuelles | 45 m³ | 3 m³/j | 4 manœuvres | 3,75 j | **4 j** |
| Coffrage poteaux et poutres | 120 m² | 8 m²/j | 2 | 7,5 j | **8 j** |
| Ferraillage | 1 800 kg | 200 kg/j | 1 | 9 j | **9 j** |
| Bétonnage (par phases) | 25 m³ | 8 m³/j | 1 | 3,1 j | **4 j** |
| Maçonnerie d'agglos | 260 m² | 10 m²/j | 3 | 8,7 j | **9 j** |
| Enduits 2 faces | 520 m² | 16 m²/j | 3 | 10,8 j | **11 j** |
Ces durées ne s'additionnent pas toutes : certaines tâches se chevauchent (le ferraillage avance pendant le coffrage). Leur enchaînement se fait sur le planning.

## Passer du rendement au temps unitaire par ouvrier
Un binôme qui pose 10 m²/jour en 8 h consomme 2 × 8 = 16 heures d'ouvrier pour 10 m² : **Tu = 1,6 h par m²** et par ouvrier. Pour 260 m² : 260 × 1,6 = 416 h ; avec 6 ouvriers à 8 h/jour : 416 / 48 = **8,7 jours** (même résultat que par le rendement).

## Corriger un rendement selon les conditions
On applique un **coefficient** au rendement de référence : travail à l'étage sur échafaudage × 0,85 ; forte chaleur × 0,90 ; petites surfaces avec nombreuses ouvertures × 0,80. Maçonnerie à l'étage : 10 × 0,85 = **8,5 m²/jour** par binôme.

> [!attention] Erreurs fréquentes
> - Confondre le temps unitaire de l'équipe et celui d'un ouvrier.
> - Additionner les durées de tâches qui se font en parallèle.
> - Garder un rendement de catalogue alors que le chantier mesure autre chose.
> - Arrondir une durée au jour inférieur.

> [!retenir]
> - Durée = quantité / (rendement × équipes) = quantité × Tu / (ouvriers × heures).
> - Rendements indicatifs à remplacer par vos rendements mesurés.
> - Arrondir les durées au jour supérieur et prévoir une marge pour les aléas.`,
 sujet:{titre:"Rendements, temps unitaires et durées des tâches d'une villa", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous établissez les durées des principales tâches d'une villa à Bingerville.

**Données**
- Maçonnerie d'agglos de 15 : **320 m²** ; **4 binômes** (maçon + manœuvre) à **9 m²/jour** par binôme ;
- Enduits : **850 m²** ; temps unitaire **0,9 h/m²** ; **6 ouvriers**, journées de **8 h** ;
- Coffrages de poteaux et poutres : **180 m²** ; **1,5 h/m²** ; **4 coffreurs** ;
- Carrelage : **260 m²** ; **2 carreleurs** à **12 m²/jour** chacun ;
- Durée (jours) = quantité / (rendement × nombre d'équipes) = quantité × Tu / (ouvriers × heures par jour).

### Partie A — Notions (4 points)
1. Définir rendement et temps unitaire. Convertir un rendement de 10 m² par journée de 8 h en temps unitaire. (2 pts)
2. Citer quatre facteurs qui font varier un rendement sur un chantier. (2 pts)

### Partie B — Durées (10 points)
3. Calculer la durée de la maçonnerie. (2 pts)
4. Calculer la durée des enduits. (3 pts)
5. Calculer la durée des coffrages. (2 pts)
6. Calculer la durée du carrelage. (2 pts)
7. Pourquoi arrondit-on toujours au jour supérieur ? (1 pt)

### Partie C — Ajuster (6 points)
8. Le planning n'accorde que **12 jours** aux enduits. Combien d'ouvriers faut-il ? (2 pts)
9. Le maître d'ouvrage veut gagner 2 jours sur la maçonnerie. Combien de binômes faut-il ? Quelles limites à cette solution ? (4 pts)`,
  corrige:`### Partie A — Notions (4 pts)
1. **Rendement** : quantité produite par unité de temps (m²/jour) ; **temps unitaire** : temps pour une unité d'ouvrage (h/m²). 8 h / 10 m² = **0,8 h/m²**. *(2 pts)*
2. Qualification et motivation des ouvriers ; météo (chaleur, pluie) ; approvisionnements (attentes) ; complexité de l'ouvrage (découpes, hauteur) ; matériel ; organisation et encadrement. *(2 pts)*

### Partie B — Durées (10 pts)
3. 320 / (9 × 4) = 8,9 → **9 jours**. *(2 pts)*
4. 850 × 0,9 / (6 × 8) = 765 / 48 = 15,9 → **16 jours**. *(3 pts)*
5. 180 × 1,5 / (4 × 8) = 270 / 32 = 8,4 → **9 jours**. *(2 pts)*
6. 260 / (12 × 2) = 10,8 → **11 jours**. *(2 pts)*
7. Une tâche commencée occupe l'équipe toute la journée ; arrondir vers le bas rendrait le planning irréaliste. *(1 pt)*

### Partie C — Ajuster (6 pts)
8. 765 h / (12 × 8) = 7,97 → **8 ouvriers**. *(2 pts)*
9. En 7 jours : 320 / (9 × 7) = 5,1 → **6 binômes** (5 binômes donnent 7,1 jours). Limites : place disponible et gêne mutuelle, approvisionnement en agglos et mortier, encadrement, coût, et les poteaux et chaînages doivent suivre le même rythme. *(4 pts)*

> [!attention] Erreurs à éviter
> - Confondre rendement par équipe et rendement par ouvrier.
> - Oublier de diviser par le nombre d'heures par jour quand on part d'un temps unitaire.
> - Croire qu'on peut toujours raccourcir une tâche en ajoutant des ouvriers.`},
 exercices:[
  {t:"Durées du gros œuvre", d:1, e:`Calculer les durées (au jour supérieur) : a) 45 m³ de fouilles manuelles, 4 manœuvres à 3 m³/j chacun ; b) 1 200 kg de ferraillage, 2 binômes à 200 kg/j ; c) 260 m² d'agglos, 3 binômes à 10 m²/j.`, c:`a) 45 / (4 × 3) = 3,75 → **4 jours** ; b) 1 200 / (2 × 200) = **3 jours** ; c) 260 / (3 × 10) = 8,7 → **9 jours**.`},
  {t:"Durées des finitions", d:1, e:`a) 420 m² d'enduits, 2 binômes à 15 m²/j ; b) 85 m² de carrelage, 1 équipe à 12 m²/j ; c) 665 m² de peinture (2 couches), 3 peintres à 40 m²/j.`, c:`a) 420 / 30 = **14 jours** ; b) 85 / 12 = 7,1 → **8 jours** ; c) 665 / 120 = 5,5 → **6 jours**.`},
  {t:"Avec un temps unitaire", d:2, e:`Le coffrage des poteaux et poutres d'un étage représente 150 m² ; temps unitaire 1,5 h/m² (coffreur + aide comptés ensemble comme 2 ouvriers, soit 0,75 h/m² par ouvrier). On dispose de 4 ouvriers travaillant 8 h par jour. Durée ?`, c:`Heures totales : 150 × 1,5 = **225 h** (pour l'ensemble des ouvriers).
Durée : 225 / (4 × 8) = 7,0 → **7 jours**.`},
  {t:"Rendement mesuré", d:2, e:`Prévu : 10 m²/j par binôme pour 300 m² avec 3 binômes. Après 4 jours, 96 m² sont posés. Calculer le rendement réel, la durée restante et le retard prévisible. Proposer deux actions.`, c:`Rendement réel : 96 / (3 × 4) = **8 m²/j** par binôme.
Reste : 204 m² → 204 / (3 × 8) = **8,5 jours** ; durée totale : 12,5 jours au lieu de 10 → **2,5 jours de retard**.
Actions : vérifier l'approvisionnement des postes (agglos et mortier prêts, manœuvre dédiée), ajouter un **quatrième binôme** (204 / 32 = 6,4 jours), éviter les heures les plus chaudes.`},
  {t:"Choisir le nombre d'équipes", d:2, e:`On doit enduire 600 m² en 10 jours. Un binôme fait 15 m²/j. Combien de binômes ? Avec combien de manœuvres en plus pour préparer le mortier (1 pour 2 binômes) ?`, c:`Besoin : 600 / 10 = 60 m²/j → 60 / 15 = **4 binômes** (4 maçons + 4 manœuvres) + **2 manœuvres** pour le mortier → 4 maçons et 6 manœuvres.`}
 ],
 quiz:[
  {q:"Durée pour 120 m² à 10 m²/j avec 3 équipes :", o:["4 jours","12 jours","36 jours","1 jour"], r:0, e:"120/30."},
  {q:"Un binôme qui pose 10 m² en 8 h a un temps unitaire de :", o:["0,8 h/m²","8 h/m²","1,25 h/m²","10 h/m²"], r:0, e:"8/10."},
  {q:"Le meilleur rendement à utiliser est :", o:["Celui mesuré sur vos chantiers","Un chiffre au hasard","Le plus élevé possible","Celui d'un autre pays"], r:0, e:"Réaliste."},
  {q:"On arrondit les durées :", o:["Au jour supérieur","Au jour inférieur","À zéro","Jamais"], r:0, e:"Prudence."},
  {q:"Un rendement plus faible que prévu entraîne :", o:["Un retard si l'on ne réagit pas","Une avance","Rien","Une baisse de prix"], r:0, e:"Agir vite."}
 ]},
{id:"chant-12", niv:2, titre:"Le planning : Gantt, liens, marges et chemin critique", duree:60, contenu:`## Construire le planning
1. **Lister les tâches** (par lots et par zones), assez détaillées pour être suivies ;
2. **Calculer les durées** (quantités du métré ÷ rendements) ;
3. Définir les **liens** : une tâche ne peut commencer que lorsque ses antécédentes sont finies (lien fin-début), avec parfois un **délai** (séchage, décoffrage) ;
4. Calculer les **dates au plus tôt**, la **durée totale**, les **marges** ;
5. Tracer le **diagramme de Gantt** (barres sur un calendrier) et repérer le **chemin critique** ;
6. Ajouter une **marge pour aléas** (10 à 15 % : pluies, ruptures d'approvisionnement).

!fig:gantt|Planning de type Gantt

## Dates, marges et chemin critique
- **Début au plus tôt** d'une tâche = la plus grande **fin au plus tôt** de ses antécédentes ;
- **Fin au plus tôt** = début au plus tôt + durée ;
- La **marge** d'une tâche est le retard qu'elle peut prendre sans retarder la fin du chantier ;
- Le **chemin critique** est la suite de tâches **sans marge** : tout retard sur elles retarde la fin.

> [!exemple] Planning d'une villa (durées en jours ouvrés)
> | Tâche | Durée | Après | Début | Fin |
> |---|---|---|---|---|
> | A Installation | 3 | — | 0 | 3 |
> | B Implantation, terrassements | 5 | A | 3 | 8 |
> | C Fondations | 12 | B | 8 | 20 |
> | D Élévation RDC | 25 | C | 20 | 45 |
> | E Dalle haute, étanchéité | 10 | D | 45 | 55 |
> | F Réseaux encastrés | 8 | D | 45 | 53 |
> | G Enduits | 14 | E, F | 55 | 69 |
> | H Menuiseries extérieures | 5 | E | 55 | 60 |
> | I Carrelage | 10 | G | 69 | 79 |
> | J Peinture, appareillages | 8 | I, H | 79 | 87 |
> | K Nettoyage, réception | 3 | J | 87 | 90 |
> Chemin critique : **A-B-C-D-E-G-I-J-K = 90 jours**. Marges : F = 55 − 53 = **2 jours** ; H = 79 − 60 = **19 jours**.

## Suivre le planning
Chaque semaine : marquer l'**avancement réel** sur le Gantt, comparer au prévu, identifier les retards **sur le chemin critique**, décider des actions (renfort, travail en parallèle, heures supplémentaires) et mettre à jour le planning.
Le planning **PERT** et la méthode des potentiels (voir Recherche opérationnelle) donnent les mêmes résultats sous forme de graphe.

> [!retenir]
> - Tâches, durées, liens → dates au plus tôt → chemin critique.
> - Marge = retard possible sans décaler la fin.
> - Suivre chaque semaine et agir sur les tâches critiques.`,
 sujet:{titre:"Planning d'une villa : dates au plus tôt, marges, chemin critique et retards", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous établissez le planning d'une villa à Cocody (durées en jours ouvrés).

| Tâche | Désignation | Durée | Antécédents |
|---|---|---|---|
| A | Installation de chantier | 4 | — |
| B | Implantation, terrassements | 6 | A |
| C | Fondations | 14 | B |
| D | Élévation RDC | 28 | C |
| E | Dalle haute et étanchéité | 12 | D |
| F | Réseaux encastrés | 10 | D |
| G | Enduits | 15 | E, F |
| H | Menuiseries extérieures | 6 | E |
| I | Carrelage | 12 | G |
| J | Peinture, appareillages | 9 | I, H |
| K | Nettoyage, réception | 3 | J |

### Partie A — Calcul du planning (10 points)
1. Calculer les dates de début et de fin au plus tôt de chaque tâche et la durée totale. (5 pts)
2. Calculer les dates au plus tard et les marges totales de F et H. (3 pts)
3. Donner le chemin critique. (2 pts)

### Partie B — Représentation (4 points)
4. Tracer le diagramme de Gantt (une ligne par tâche, chemin critique en évidence). (3 pts)
5. Quel autre type de lien que « fin-début » pourrait-on utiliser entre D et F pour gagner du temps ? (1 pt)

### Partie C — Aléas (6 points)
6. Les réseaux (F) prennent **5 jours** de retard. Conséquence sur la fin du chantier ? (2 pts)
7. Les menuiseries (H) arrivent avec **10 jours** de retard. Conséquence ? (2 pts)
8. Les fondations (C) prennent **4 jours** de retard. Proposer deux moyens de rattraper ce retard. (2 pts)`,
  corrige:`### Partie A — Calcul (10 pts)
1. *(5 pts)*

| Tâche | Début | Fin |
|---|---|---|
| A | 0 | 4 |
| B | 4 | 10 |
| C | 10 | 24 |
| D | 24 | 52 |
| E | 52 | 64 |
| F | 52 | 62 |
| G | 64 | 79 |
| H | 64 | 70 |
| I | 79 | 91 |
| J | 91 | 100 |
| K | 100 | 103 |

Durée totale : **103 jours ouvrés**.
2. F : fin au plus tard = début au plus tard de G = 64 → **marge 2 jours** ; H : fin au plus tard = début de J = 91 → **marge 21 jours**. *(3 pts)*
3. **A – B – C – D – E – G – I – J – K** (tâches de marge nulle). *(2 pts)*

### Partie B — Représentation (4 pts)
4. Barres horizontales sur une échelle de 0 à 103 jours, aux dates calculées ; les tâches critiques en rouge, les marges en pointillés après F et H. *(3 pts)*
5. Un lien **début-début avec décalage** : les réseaux encastrés peuvent commencer dans les pièces déjà maçonnées (par exemple 10 jours après le début de D). *(1 pt)*

### Partie C — Aléas (6 pts)
6. Retard de 5 jours > marge de 2 jours → G commence au jour 67 : **fin du chantier retardée de 3 jours** (106). *(2 pts)*
7. Retard de 10 jours < marge de 21 jours → **aucune conséquence** sur la fin. *(2 pts)*
8. C est critique : + 4 jours sur la fin si rien n'est fait. Rattraper en **renforçant** une tâche critique suivante (deuxième équipe de maçons sur D), en **chevauchant** des tâches (réseaux et enduits par zones), en allongeant la journée ou en travaillant le samedi. *(2 pts)*

> [!attention] Erreurs à éviter
> - Prendre le plus petit des antécédents comme date de début (c'est le plus grand).
> - Confondre marge libre et marge totale.
> - Vouloir rattraper un retard sur une tâche non critique.`},
 exercices:[
  {t:"Retard sur une tâche critique", d:1, e:`Dans le planning de la villa (90 jours), les fondations (C) prennent 5 jours de retard. Quelle est la nouvelle date de fin ? Même question si c'est la menuiserie extérieure (H) qui prend 5 jours de retard.`, c:`C est **critique** : la fin passe à **95 jours**.
H a **19 jours de marge** : un retard de 5 jours ne change pas la fin (**90 jours**).`},
  {t:"Retard sur une tâche à faible marge", d:2, e:`Les réseaux encastrés (F) prennent 5 jours de retard (durée 13 jours au lieu de 8). Quelle est la nouvelle date de fin ? Quel est le nouveau chemin critique ?`, c:`F finit à 45 + 13 = **58** au lieu de 53 ; G commence au plus tôt à max(55 ; 58) = **58** → G finit à 72, I à 82, J à 90, K à **93**.
Retard de **3 jours** (5 − 2 de marge) ; le chemin critique devient **A-B-C-D-F-G-I-J-K**.`},
  {t:"Accélérer le chantier", d:2, e:`Le client veut gagner 10 jours. On propose de doubler les équipes de l'élévation (D passe de 25 à 15 jours). Nouvelle durée totale ? Vérifier que les marges de F et H ne changent pas.`, c:`D finit à 20 + 15 = 35 ; E : 35 → 45 ; F : 35 → 43 ; G : 45 → 59 ; H : 45 → 50 ; I : 59 → 69 ; J : 69 → 77 ; K : 77 → **80 jours** (gain de 10 jours).
Marges : F = 45 − 43 = **2** ; H = 69 − 50 = **19** : inchangées (tout le planning est décalé de 10 jours après D).`},
  {t:"Du planning au calendrier", d:1, e:`Le planning dure 90 jours ouvrés, avec 5,5 jours de travail par semaine. Combien de semaines ? Avec 15 % de marge pour les aléas ?`, c:`90 / 5,5 = 16,4 semaines → avec 15 % : 16,4 × 1,15 = **18,8 semaines**, soit environ **19 semaines** (4 mois et demi) à annoncer au client.`},
  {t:"Placer un délai technique", d:2, e:`On veut ajouter un délai de séchage de 21 jours entre la fin des enduits (G) et le début de la peinture (J), le carrelage (I) pouvant se faire pendant ce temps. Le planning change-t-il ?`, c:`J pourrait commencer au plus tôt à max(fin de I = 79 ; fin de G + 21 = 69 + 21 = 90 ; fin de H = 60) = **90** → J : 90 → 98 ; K : 98 → **101 jours**.
Le délai de séchage devient critique : la fin recule de **11 jours**. Pour l'éviter : enduits plus tôt par zones, peinture adaptée aux supports jeunes après accord du fabricant, ou planification des finitions par pièces.`}
 ],
 quiz:[
  {q:"Le chemin critique est formé des tâches :", o:["Sans marge","Les plus courtes","Les moins chères","Facultatives"], r:0, e:"Tout retard décale la fin."},
  {q:"Le début au plus tôt d'une tâche est :", o:["La plus grande fin au plus tôt de ses antécédentes","La plus petite","Toujours zéro","La fin du chantier"], r:0, e:"Attendre toutes les antécédentes."},
  {q:"Une tâche ayant 10 jours de marge peut prendre 4 jours de retard :", o:["Sans retarder la fin","En retardant la fin de 4 jours","En annulant le chantier","Jamais"], r:0, e:"Marge suffisante."},
  {q:"Le diagramme de Gantt représente :", o:["Les tâches en barres sur un calendrier","Les prix","Les plans","Les fondations"], r:0, e:"Planning visuel."},
  {q:"Marge conseillée pour les aléas :", o:["10 à 15 %","0 %","100 %","1 %"], r:0, e:"Pluies, approvisionnements."}
 ]},
{id:"chant-4", niv:2, titre:"Les ressources : main-d'œuvre, stocks et approvisionnements", duree:55, contenu:`## La main-d'œuvre
- Constituer des équipes **équilibrées** (un maçon pour un ou deux manœuvres) ;
- Établir l'**histogramme** des effectifs à partir du planning (nombre d'ouvriers par jour ou par semaine) ;
- **Lisser** : décaler les tâches qui ont de la **marge** pour éviter les pics et les creux (une équipe stable est plus efficace et plus facile à gérer) ;
- Tenir la feuille de présence quotidienne et suivre les rendements réels.
> [!exemple] Lissage
> Tâche X (critique) jours 1 à 6 : 6 ouvriers ; tâche Y (marge 6 jours) jours 1 à 4 : 4 ouvriers ; tâche Z (critique) jours 7 à 10 : 2 ouvriers.
> Sans lissage : 10 ouvriers les jours 1 à 4, 6 les jours 5 et 6, 2 les jours 7 à 10. En décalant Y aux jours 7 à 10 : **6 ouvriers tous les jours**.

## Les stocks
- Un stock trop faible arrête le chantier ; un stock trop fort immobilise de l'argent, prend de la place, se dégrade (ciment) et se fait voler ;
- **Point de commande** = consommation journalière × (délai de livraison + stock de sécurité en jours) ;
- Inventaire hebdomadaire, bons de sortie signés, magasin fermé.
> [!exemple] Ciment
> Consommation : 12 sacs/jour ; délai de livraison : 3 jours ; sécurité : 2 jours → on recommande dès qu'il reste **12 × 5 = 60 sacs** ; quantité commandée : 10 jours de consommation, soit **120 sacs** (si le magasin peut en contenir 150 au plus).

## Les approvisionnements
1. Extraire les **quantités** du métré (sous-détail des matériaux) ;
2. Établir le **planning des approvisionnements** calé sur le planning des travaux (date de besoin − délai de livraison) ;
3. Comparer les fournisseurs (prix, qualité, délais, fiabilité, conditions de paiement) ;
4. **Réceptionner** : quantité, qualité (granulats propres, diamètres des aciers, date du ciment), bon de livraison signé avec réserves si besoin ;
5. Suivre les stocks (entrées, sorties, inventaires).

> [!attention]
> Les pertes et vols de matériaux peuvent atteindre 5 à 10 % sur un chantier mal tenu : magasin fermé, inventaires, bons de sortie signés.

## Application : l'histogramme et le volume de main-d'œuvre
Avec l'exemple de lissage ci-dessus, le volume total est le même avant et après : 6 × 6 + 4 × 4 + 2 × 4 = **60 jours-ouvriers** sur 10 jours, soit **6 ouvriers** en moyenne. Le lissage ne réduit pas le travail : il supprime les pics (10 ouvriers) qui obligeraient à embaucher pour quelques jours et à mal encadrer.

## Application : le stock moyen et son coût
Avec 120 sacs commandés à chaque fois et un stock de sécurité de 24 sacs (2 jours), le stock évolue en « dents de scie » entre 24 et 144 sacs. **Stock moyen** ≈ sécurité + commande / 2 = 24 + 60 = **84 sacs**, soit 84 × 5 500 = **462 000 F** immobilisés en permanence. Commander plus souvent par petites quantités réduit ce montant, mais augmente les frais de transport.

> [!exemple] Quand commander les aciers ?
> Le ferraillage des poteaux commence au jour 15 ; délai de livraison 7 jours ; marge de sécurité 3 jours.
> Date de commande : 15 − 7 − 3 = **jour 5**.
> On inscrit cette date sur le planning des approvisionnements.

## Méthode : planning des approvisionnements
1. Pour chaque matériau, relever la **date de besoin** sur le planning des travaux ;
2. Retrancher le **délai de livraison** et une **marge** ;
3. Calculer la **quantité** (métré + pertes) et la fractionner selon la capacité de stockage ;
4. Passer commande et suivre la livraison ;
5. Réceptionner, stocker correctement (ciment sur palettes à l'abri, aciers sur cales), tenir l'inventaire.

> [!attention] Erreurs fréquentes
> - Commander au dernier moment, sans tenir compte du délai de livraison.
> - Stocker le ciment à même le sol ou sous une bâche percée.
> - Accepter une livraison sans contrôle ni bon signé.
> - Embaucher pour un pic d'effectif qu'un simple décalage aurait évité.

> [!retenir]
> - Histogramme des effectifs ; lisser grâce aux marges.
> - Point de commande = consommation × (délai + sécurité).
> - Approvisionner selon le planning ; réceptionner et contrôler.`,
 sujet:{titre:"Gérer les ressources : lissage de la main-d'œuvre, stocks et dates de commande", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Sur le chantier d'un centre commercial à Daloa, vous optimisez les effectifs et les stocks.

**Données — main-d'œuvre (jours 1 à 12)**

| Tâche | Jours | Ouvriers | Marge |
|---|---|---|---|
| X (critique) | 1 à 8 | 5 | 0 |
| Y | 1 à 3 | 4 | 8 jours |
| W | 5 à 8 | 2 | 0 |
| Z (critique) | 9 à 12 | 3 | 0 |

**Données — stocks**
- Ciment : consommation **15 sacs/jour** ; délai de livraison **4 jours** ; sécurité **2 jours** ; magasin de **220 sacs** au maximum ; commande = **12 jours** de consommation ;
- Aciers des poteaux : besoin au **jour 22** ; délai de livraison **6 jours** ; marge **3 jours**.

### Partie A — Histogramme et lissage (9 points)
1. Tracer l'histogramme de la main-d'œuvre jour par jour et donner le pic d'effectif. (4 pts)
2. Proposer un lissage en déplaçant Y dans sa marge ; tracer le nouvel histogramme et le nouveau pic. (4 pts)
3. Quel est l'intérêt d'un effectif régulier ? (1 pt)

### Partie B — Stock de ciment (6 points)
4. Calculer le seuil de recommande. (2 pts)
5. Calculer la quantité commandée et vérifier la capacité du magasin. (2 pts)
6. Pourquoi ne pas commander tout le ciment du chantier en une fois ? (2 pts)

### Partie C — Aciers (5 points)
7. Calculer la date de commande des aciers. (2 pts)
8. Que se passe-t-il si les aciers arrivent au jour 25 ? Comment l'éviter ? (3 pts)`,
  corrige:`### Partie A — Lissage (9 pts)
1. Jours 1 à 3 : 5 + 4 = **9** ; jour 4 : **5** ; jours 5 à 8 : 5 + 2 = **7** ; jours 9 à 12 : **3** → pic de **9 ouvriers**. *(4 pts)*
2. Y décalé aux jours **9 à 11** (dans sa marge de 8 jours) : jours 1 à 4 : **5** ; jours 5 à 8 : **7** ; jours 9 à 11 : 3 + 4 = **7** ; jour 12 : **3** → pic ramené à **7 ouvriers**. *(4 pts)*
3. Moins d'embauches et de licenciements temporaires, équipe stable et efficace, moins de temps morts, encadrement plus simple. *(1 pt)*

### Partie B — Ciment (6 pts)
4. Seuil = 15 × (4 + 2) = **90 sacs** : on recommande dès qu'il reste 90 sacs. *(2 pts)*
5. 12 × 15 = **180 sacs** ; au moment de la livraison, il reste environ 2 jours de sécurité (30 sacs) → 210 sacs ≤ 220 ✔. *(2 pts)*
6. Risque d'**éventement** (humidité), place et trésorerie immobilisées, vols. *(2 pts)*

### Partie C — Aciers (5 pts)
7. 22 − 6 − 3 = **jour 13**. *(2 pts)*
8. 3 jours de retard sur une tâche critique (ferraillage des poteaux) → **retard du chantier**. Commander au jour 13 au plus tard, **confirmer** la commande et suivre la livraison, avoir un fournisseur de secours. *(3 pts)*

> [!attention] Erreurs à éviter
> - Déplacer une tâche au-delà de sa marge.
> - Oublier le stock de sécurité dans le seuil de recommande.
> - Commander les aciers sans les nomenclatures validées.`},
 exercices:[
  {t:"Histogramme et lissage", d:2, e:`Tâches : M (critique) jours 1 à 8, 5 ouvriers ; P (critique) jours 9 à 12, 5 ouvriers ; N (marge 8 jours) jours 1 à 4, 3 ouvriers ; Q (marge 4 jours) jours 1 à 4, 3 ouvriers. a) Calculer l'effectif par période. b) Proposer un lissage.`, c:`a) Jours 1-4 : 5 + 3 + 3 = **11** ; jours 5-8 : **5** ; jours 9-12 : **5**.
b) Garder Q aux jours 1-4 et décaler **N aux jours 5-8** (marge de 8 jours suffisante) : jours 1-4 : 5 + 3 = **8** ; jours 5-8 : 5 + 3 = **8** ; jours 9-12 : **5**.
Le pic passe de 11 à 8 ouvriers, sans retarder la fin du chantier (N et Q restent dans leur marge).`},
  {t:"Point de commande des agglos", d:2, e:`Le chantier pose 150 agglos par jour. Le fabricant livre en 4 jours ; on veut 2 jours de sécurité. Quand recommander ? Quelle quantité commander si l'aire de stockage contient 2 000 agglos au plus ?`, c:`Point de commande : 150 × (4 + 2) = **900 agglos** restants.
À la livraison (4 jours plus tard), il reste ≈ 900 − 600 = 300 agglos : on peut recevoir **1 700 agglos** au maximum (2 000 − 300), soit environ 11 jours de pose.`},
  {t:"Planning des approvisionnements", d:1, e:`Besoins : aciers des fondations le jour 8 (délai 5 jours) ; ciment le jour 8 (délai 2 jours) ; agglos de l'élévation le jour 20 (délai 7 jours) ; carreaux le jour 69 (délai 30 jours). Calculer les jours de commande au plus tard (marge de 2 jours).`, c:`Aciers : 8 − 5 − 2 = **jour 1** ; ciment : 8 − 2 − 2 = **jour 4** ; agglos : 20 − 7 − 2 = **jour 11** ; carreaux : 69 − 30 − 2 = **jour 37**.`},
  {t:"Réception d'une livraison", d:1, e:`Un camion livre « 200 sacs CEM II 42,5 » ; on compte 194 sacs, dont 5 déchirés et 3 contenant des grumeaux durs. Que faire ?`, c:`Accepter **186 sacs** conformes ; noter sur le bon de livraison les réserves : **6 sacs manquants**, **5 déchirés**, **3 éventés** refusés (à reprendre ou à créditer) ; faire signer le chauffeur ; informer le conducteur de travaux pour la facture.`},
  {t:"Pertes de matériaux", d:2, e:`D'après le métré, il fallait 230 sacs de ciment pour le gros œuvre ; on en a acheté 262 et il en reste 8 en stock. Calculer la consommation réelle et le taux de pertes. Proposer trois mesures.`, c:`Consommation : 262 − 8 = **254 sacs** → pertes : 254 − 230 = **24 sacs**, soit **10,4 %** (au-delà des 3 à 5 % normaux).
Mesures : magasin fermé et **bons de sortie** signés ; **dosage contrôlé** à la bétonnière (sacs par gâchée) ; **inventaire** hebdomadaire et rapprochement avec l'avancement.`}
 ],
 quiz:[
  {q:"Lisser les effectifs consiste à :", o:["Décaler les tâches à marge pour éviter les pics","Licencier","Travailler la nuit","Supprimer des tâches"], r:0, e:"Effectif stable."},
  {q:"Point de commande pour 10 sacs/j, délai 3 j, sécurité 2 j :", o:["50 sacs","30 sacs","20 sacs","100 sacs"], r:0, e:"10 × (3 + 2)."},
  {q:"Un stock trop important :", o:["Immobilise de l'argent et se dégrade","Est toujours une bonne chose","Est obligatoire","Réduit les vols"], r:0, e:"Juste nécessaire."},
  {q:"À la réception d'aciers, on vérifie :", o:["Les diamètres et les quantités","La couleur du camion","La météo","Rien"], r:0, e:"Section d'acier."},
  {q:"Taux de pertes de ciment acceptable sur un chantier bien tenu :", o:["3 à 5 %","30 %","50 %","0 % impossible à dépasser"], r:0, e:"Au-delà, enquêter."}
 ]},
{id:"chant-13", niv:2, titre:"Le matériel et les engins de chantier", duree:55, contenu:`## Le petit et moyen matériel
| Matériel | Usage |
|---|---|
| Bétonnière (250 à 500 L) | Béton et mortier |
| Aiguille vibrante | Compactage du béton |
| Étais, coffrages, banches | Poteaux, poutres, dalles, voiles |
| Échafaudages | Travail en hauteur |
| Plaque vibrante, pilonneuse | Compactage des remblais, tranchées |
| Groupe électrogène, pompe d'épuisement | Énergie, fouilles noyées |
| Scie, cintreuse, meuleuse | Façonnage des aciers et coupes |

## Les engins
| Engin | Usage |
|---|---|
| **Pelle hydraulique** | Fouilles, chargement des camions |
| **Chargeuse** | Chargement, reprise de stocks |
| **Bulldozer** | Décapage, poussage des terres |
| **Niveleuse** | Réglage des plates-formes et des chaussées |
| **Compacteurs** (vibrant lisse, pieds de mouton, pneus) | Compactage des remblais et couches de chaussée |
| **Camions-bennes** | Transport des déblais et matériaux |
| **Grue à tour, grue mobile** | Levage |
| **Toupie et pompe à béton** | Béton prêt à l'emploi |

## Le rendement d'une pelle
$$ Q (m³/h foisonnés) = q × k × 3 600 / T
q : capacité du godet (m³) ; k : coefficient de remplissage (0,8 à 1,0) ; T : durée d'un cycle (s). On divise par le **foisonnement** pour avoir des m³ en place, et on applique un **coefficient d'efficacité** (≈ 0,75 : 45 minutes utiles par heure).
> [!exemple] Pelle de 1 m³
> k = 0,9, cycle de 20 s : Q = 1 × 0,9 × 3 600 / 20 = 162 m³/h foisonnés → 162 / 1,25 = 129,6 m³/h en place → × 0,75 = **≈ 97 m³/h** réels.

## Le nombre de camions
Un camion doit être prêt sous la pelle quand le précédent part :
$$ nombre de camions = durée du cycle d'un camion / durée de chargement d'un camion
> [!exemple] Suite
> Camions de 10 m³ foisonnés : chargement 10 / 162 h = **3,7 min** ; cycle : 3,7 (charge) + 12 (aller) + 3 (vidage) + 10 (retour) = **28,7 min** → 28,7 / 3,7 = 7,8 → **8 camions** (avec 7, la pelle attendrait ; avec 9, les camions attendraient).

## Le coût du matériel
- **Coût horaire** d'un engin = amortissement + carburant + entretien + conducteur (+ assurance, transport) ;
- **Location ou achat** : on loue le matériel utilisé peu de temps, on achète celui utilisé en continu.
> [!exemple] Coût horaire d'une pelle (chiffres d'exercice)
> Achat 60 M F, revente 10 %, durée de vie 10 000 h → amortissement 60 × 0,9 / 10 000 = 5 400 F/h ; carburant 15 L/h × 700 F = 10 500 F/h ; entretien 3 000 F/h ; conducteur 1 500 F/h → **≈ 20 400 F/h**.

> [!retenir]
> - Pelle : Q = q k 3 600 / T, puis ÷ foisonnement × efficacité.
> - Camions = cycle camion / temps de chargement.
> - Coût horaire = amortissement + carburant + entretien + conducteur ; louer pour un usage court.`,
 sujet:{titre:"Pelle hydraulique et camions : rendement, nombre de camions et coût du terrassement", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Terrassement en grande masse de **6 000 m³** (en place) pour un parking souterrain à Marcory.

**Données**
- Pelle de **1,2 m³** ; coefficient de remplissage du godet **k = 0,85** ; cycle **22 s** ; foisonnement **1,25** ; efficacité du chantier **0,75** ;
- Q (m³/h foisonnés) = q × k × 3 600 / T ;
- Camions de **12 m³** foisonnés ; aller **15 min**, vidage **3 min**, retour **12 min** ;
- Coût de la pelle : achat **80 M F**, revente **15 %**, durée de vie **12 000 h** ; carburant **18 L/h** à **750 F/L** ; entretien **3 500 F/h** ; conducteur **1 800 F/h**.

### Partie A — Rendement de la pelle (6 points)
1. Calculer le rendement théorique foisonné, en place, puis le rendement réel. (4 pts)
2. Calculer la durée du terrassement (journées de 8 h). (2 pts)

### Partie B — Camions (6 points)
3. Calculer la durée de chargement d'un camion et la durée d'un cycle complet. (3 pts)
4. Calculer le nombre de camions. Que se passe-t-il avec un camion de moins ? De plus ? (3 pts)

### Partie C — Coût (6 points)
5. Calculer le coût horaire de la pelle. (3 pts)
6. Calculer le coût de la pelle pour ce terrassement et par m³. (3 pts)

### Partie D — Choix du matériel (2 points)
7. Citer quatre critères de choix d'un engin de terrassement. (2 pts)`,
  corrige:`### Partie A — Pelle (6 pts)
1. Q = 1,2 × 0,85 × 3 600 / 22 = **166,9 m³/h** foisonnés → / 1,25 = **133,5 m³/h** en place → × 0,75 = **≈ 100 m³/h** réels. *(4 pts)*
2. 6 000 / 100 = **60 h** → **7,5 jours** de 8 h (8 jours). *(2 pts)*

### Partie B — Camions (6 pts)
3. Chargement : 12 / 166,9 h = **4,3 min** ; cycle : 4,3 + 15 + 3 + 12 = **34,3 min**. *(3 pts)*
4. 34,3 / 4,3 = 7,96 → **8 camions**. Avec 7, la **pelle attend** (rendement perdu) ; avec 9, les **camions attendent** (coût inutile). *(3 pts)*

### Partie C — Coût (6 pts)
5. Amortissement : 80 × 0,85 / 12 000 = **5 667 F/h** ; carburant 18 × 750 = **13 500** ; entretien **3 500** ; conducteur **1 800** → **24 467 F/h**. *(3 pts)*
6. 60 h × 24 467 = **≈ 1,47 M F** → **≈ 245 F/m³** (pelle seule, sans les camions). *(3 pts)*

### Partie D — Critères (2 pts)
7. Nature du sol, volume et délai, distance de transport, accès et encombrement, disponibilité et coût, présence d'eau, contraintes urbaines (bruit, vibrations). *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le foisonnement entre volume chargé et volume en place.
> - Oublier l'efficacité réelle (pauses, déplacements, attentes).
> - Calculer le nombre de camions avec le temps d'aller seulement.`},
 exercices:[
  {t:"Rendement d'une pelle", d:2, e:`Pelle de 0,8 m³, coefficient de remplissage 0,85, cycle de 18 s, foisonnement 1,25, efficacité 0,75. Calculer le rendement en m³ en place par heure et la durée pour 1 500 m³ de déblais.`, c:`Q = 0,8 × 0,85 × 3 600 / 18 = **136 m³/h** foisonnés → 136 / 1,25 = 108,8 m³/h en place → × 0,75 = **81,6 m³/h**.
Durée : 1 500 / 81,6 = **18,4 h**, soit environ **2,3 journées** de 8 h.`},
  {t:"Nombre de camions", d:2, e:`Avec la pelle de l'exercice 1 (136 m³/h foisonnés) et des camions de 8 m³, la décharge est à 15 min aller, 12 min retour, 3 min de vidage. Combien de camions ?`, c:`Chargement : 8 / 136 h = **3,5 min** ; cycle : 3,5 + 15 + 3 + 12 = **33,5 min** → 33,5 / 3,5 = 9,6 → **10 camions** (ou 9 en acceptant de petites attentes de la pelle).`},
  {t:"Louer ou acheter une bétonnière", d:2, e:`Une bétonnière coûte 1 200 000 F à l'achat (durée de vie 3 ans, sans valeur de revente) et 100 000 F d'entretien par an ; la location coûte 15 000 F par jour. Comparer pour 60 jours et 20 jours d'utilisation par an.`, c:`Achat : 1 200 000 / 3 + 100 000 = **500 000 F/an**.
60 jours : location 60 × 15 000 = **900 000 F** → **acheter**.
20 jours : location **300 000 F** → **louer**.
Seuil : 500 000 / 15 000 ≈ **33 jours** d'utilisation par an.`},
  {t:"Coût horaire d'un compacteur", d:2, e:`Compacteur acheté 40 M F, revente 15 %, durée de vie 8 000 h ; consommation 10 L/h à 700 F ; entretien 2 000 F/h ; conducteur 1 500 F/h. Calculer le coût horaire.`, c:`Amortissement : 40 000 000 × 0,85 / 8 000 = **4 250 F/h** ; carburant : **7 000 F/h** ; entretien **2 000** ; conducteur **1 500** → **14 750 F/h**.`},
  {t:"Choisir les engins", d:1, e:`Choisir les engins pour : a) décaper 1 ha de terrain ; b) creuser les tranchées d'un réseau d'assainissement ; c) compacter un remblai argileux ; d) régler une plate-forme au centimètre ; e) couler une dalle de 80 m³ en une journée.`, c:`a) **Bulldozer** (ou chargeuse) ; b) **pelle** (mini-pelle en ville) ; c) compacteur à **pieds de mouton** ; d) **niveleuse** (guidage laser ou GPS) ; e) **béton prêt à l'emploi** en toupies + **pompe à béton**.`}
 ],
 quiz:[
  {q:"Pour compacter un remblai argileux, on utilise de préférence :", o:["Un compacteur à pieds de mouton","Une bétonnière","Une niveleuse seule","Une grue"], r:0, e:"Il pétrit le sol fin."},
  {q:"Rendement d'une pelle de 1 m³, k = 1, cycle 20 s :", o:["180 m³/h foisonnés","20 m³/h","3 600 m³/h","1 m³/h"], r:0, e:"1 × 1 × 3 600/20."},
  {q:"Nombre de camions = ", o:["Cycle d'un camion / temps de chargement","Volume / 10","Pelle × 2","Toujours 1"], r:0, e:"Pas d'attente de la pelle."},
  {q:"On loue plutôt qu'acheter un matériel :", o:["Utilisé peu de temps","Utilisé en continu","Très bon marché","Jamais"], r:0, e:"Seuil de rentabilité."},
  {q:"Le coût horaire d'un engin comprend :", o:["Amortissement, carburant, entretien, conducteur","Seulement le carburant","Seulement le prix d'achat","La TVA du client"], r:0, e:"Tous les postes."}
 ]},
{id:"chant-14", niv:2, titre:"Organiser les grandes opérations : terrassements et bétonnages", duree:55, contenu:`## Le terrassement d'une plate-forme
1. **Préparer** : levé topographique, calcul des cubatures (déblais, remblais, mouvement des terres), piquetage ;
2. **Décaper** la terre végétale et la stocker ;
3. **Terrasser** : pelle + camions (équilibrer la chaîne : voir chapitre précédent), ou bulldozer pour les faibles distances ;
4. **Remblayer** par couches de 20 à 30 cm, **arroser** à la teneur en eau optimale, **compacter** (nombre de passes défini par une planche d'essai) ;
5. **Contrôler** : densité en place, essai de plaque, nivellement.
Le **rendement d'un compacteur** : Q = V × l × e × η / n (V : vitesse en m/h, l : largeur utile, e : épaisseur de la couche, n : nombre de passes, η : efficacité).
> [!exemple] Compacteur vibrant
> V = 3 km/h, largeur utile 1,6 m, couches de 0,25 m, 6 passes, efficacité 0,75 : Q = 3 000 × 1,6 × 0,25 × 0,75 / 6 = **150 m³/h** : il peut suivre une pelle de 100 m³/h. La chaîne est limitée par l'engin le plus lent.

## Le bétonnage d'une dalle importante
1. **Volume** et **cadence** : choisir entre bétonnière (≈ 2,5 m³/h) et **béton prêt à l'emploi + pompe** (20 à 40 m³/h) ;
2. **Réservation** de la centrale et de la pompe, nombre de **toupies** ;
3. **Préparation** : coffrages et étaiements réceptionnés, ferraillage et réservations contrôlés (PV), éclairage si coulage tardif, équipe et vibreurs (+ un de secours), matériel de cure ;
4. **Coulage** continu, sans reprise non prévue ; prélèvement d'**éprouvettes** ; contrôle de chaque bon de livraison ;
5. **Cure** dès la fin du talochage.
Nombre de toupies : il faut une toupie toutes les (volume d'une toupie / cadence de la pompe) minutes ; nombre = cycle d'une toupie / cet intervalle.

> [!exemple] Dalle de 85 m³ en béton prêt à l'emploi
> Pompe : 20 m³/h effectifs → durée de coulage : 85 / 20 = **4 h 15**. Toupies de 7 m³ : 85 / 7 = 12,1 → **13 livraisons**, une toutes les 7 / 20 h = **21 min**.
> Cycle d'une toupie (centrale à 40 min) : 40 aller + 15 déchargement + 40 retour = **95 min** → 95 / 21 = 4,5 → **5 toupies** en rotation.
> À la bétonnière (2,5 m³/h), il faudrait 34 heures : impossible sans reprises de bétonnage.

## Bétonner par forte chaleur
Couler tôt le matin ou en fin de journée, mouiller les coffrages, protéger le béton du soleil et du vent, utiliser un retardateur pour les longs transports, démarrer la cure immédiatement.

> [!retenir]
> - Terrassement : décaper, terrasser, remblayer par couches, compacter, contrôler ; la chaîne va au rythme de l'engin le plus lent.
> - Compacteur : Q = V l e η / n.
> - Grande dalle : BPE + pompe ; toupies = cycle / intervalle ; coulage continu, éprouvettes, cure.`,
 sujet:{titre:"Organiser un terrassement compacté et le bétonnage d'une dalle de 120 m³", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Construction d'un supermarché à Yamoussoukro : remblai compacté de la plate-forme, puis coulage d'une grande dalle.

**Données — compactage**
- Compacteur vibrant : vitesse **4 km/h**, largeur utile **1,8 m**, couches de **0,30 m**, **8 passes**, efficacité **0,75** ; Q = V × l × e × efficacité / n ;
- Atelier de mise en remblai alimenté à **100 m³/h**.

**Données — bétonnage**
- Dalle de **120 m³** en béton prêt à l'emploi ; pompe : **25 m³/h** effectifs ;
- Toupies de **8 m³** ; centrale à **35 min** ; déchargement **15 min** ; retour **35 min** ;
- Bétonnière de chantier : **3 m³/h**.

### Partie A — Compactage (6 points)
1. Calculer le rendement du compacteur. Peut-il suivre l'atelier de remblai ? (3 pts)
2. Quels contrôles du compactage prévoir ? (3 pts)

### Partie B — Bétonnage (9 points)
3. Calculer la durée du coulage à la pompe. (1 pt)
4. Calculer le nombre de livraisons et l'intervalle entre deux toupies. (3 pts)
5. Calculer le cycle d'une toupie et le nombre de toupies en rotation. (3 pts)
6. Pourquoi est-il impossible de couler cette dalle à la bétonnière ? (2 pts)

### Partie C — Organisation (5 points)
7. Établir la liste du personnel et du matériel le jour du coulage. (3 pts)
8. Que prévoir en cas de panne de la pompe ou de pluie ? (2 pts)`,
  corrige:`### Partie A — Compactage (6 pts)
1. Q = 4 000 × 1,8 × 0,30 × 0,75 / 8 = **202,5 m³/h** > 100 m³/h → il **suit** sans difficulté (la chaîne est limitée par l'engin le plus lent). *(3 pts)*
2. Teneur en eau proche de l'OPM avant compactage ; **planche d'essai** (nombre de passes) ; contrôle de la **densité** (densitomètre, gammadensimètre) et de la **portance** (essai de plaque) couche par couche ; épaisseur des couches. *(3 pts)*

### Partie B — Bétonnage (9 pts)
3. 120 / 25 = **4,8 h ≈ 4 h 50**. *(1 pt)*
4. 120 / 8 = **15 livraisons** ; une toupie toutes les 8 / 25 h = **19 min**. *(3 pts)*
5. Cycle : 35 + 15 + 35 = **85 min** → 85 / 19,2 = 4,4 → **5 toupies** en rotation. *(3 pts)*
6. 120 / 3 = **40 heures** de fabrication : plusieurs jours, avec des **reprises de bétonnage** non prévues (joints froids) et une qualité irrégulière. *(2 pts)*

### Partie C — Organisation (5 pts)
7. Chef de chantier, pompiste, 2 à 3 vibreurs (aiguilles + 1 de **secours**), 2 régleurs (règle vibrante ou talocheuse), 2 manœuvres, un contrôleur (éprouvettes, slump, bons de livraison) ; matériel : pompe, vibreurs, règles, éclairage si besoin, produit de cure, bâches. *(3 pts)*
8. **Arrêts de bétonnage prévus** à l'avance (joints de reprise aux bons endroits), pompe ou bétonnière de secours, bâches pour la pluie, possibilité d'annuler des toupies à temps, consultation de la météo. *(2 pts)*

> [!attention] Erreurs à éviter
> - Dimensionner la chaîne sur l'engin le plus rapide.
> - Laisser la pompe attendre le béton (prise dans les tuyaux) ou les toupies attendre la pompe (béton qui vieillit).
> - Oublier la cure d'une grande dalle exposée au soleil.`},
 exercices:[
  {t:"Chaîne de terrassement", d:2, e:`Plate-forme : 2 000 m³ de déblai réutilisé en remblai compacté sur place. Pelle : 97 m³/h réels ; compacteur : 150 m³/h. Combien de journées de 8 h ? Quel engin limite ?`, c:`La **pelle** (97 m³/h) est la plus lente : 2 000 / 97 = **20,6 h**, soit **2,6 journées** (3 jours). Le compacteur (150 m³/h) suit sans difficulté ; il peut même être partagé avec un autre chantier.`},
  {t:"Rendement d'un compacteur", d:2, e:`Un compacteur roule à 2,5 km/h, largeur utile 1,8 m, couches de 0,20 m, 8 passes, efficacité 0,75. Calculer son rendement. Suit-il une pelle de 80 m³/h ?`, c:`Q = 2 500 × 1,8 × 0,20 × 0,75 / 8 = **84 m³/h** ≥ 80 → oui, de justesse : aucune marge en cas de panne ou d'arrosage insuffisant ; prévoir un second compacteur léger en appoint.`},
  {t:"Toupies pour une dalle", d:2, e:`Dalle de 120 m³ ; pompe à 25 m³/h effectifs ; toupies de 8 m³ ; centrale à 30 min ; déchargement 15 min. Calculer la durée du coulage, le nombre de livraisons et le nombre de toupies en rotation.`, c:`Durée : 120 / 25 = **4,8 h** (4 h 48). Livraisons : 120 / 8 = **15**. Intervalle : 8 / 25 h = **19,2 min**. Cycle : 30 + 15 + 30 = **75 min** → 75 / 19,2 = 3,9 → **4 toupies**.`},
  {t:"Préparer un coulage", d:1, e:`Établir la liste des vérifications la veille du coulage d'une dalle de 60 m³ en béton prêt à l'emploi.`, c:`Coffrages, étaiements et rives **réceptionnés** ; ferraillage, chapeaux, réservations et fourreaux **contrôlés** (PV signé) ; commande du BPE et de la **pompe** confirmée (heure, classe, consistance) ; accès des toupies dégagé ; équipe (pompiste, vibreurs, régleurs, talocheurs) et **2 vibreurs** + un de secours ; moules à éprouvettes et cône ; matériel de **cure** ; éclairage ; météo vérifiée ; consignes de sécurité.`},
  {t:"Reprise imprévue", d:2, e:`Pendant le coulage d'une dalle, la pompe tombe en panne après 30 m³ sur 60. Que faire ?`, c:`Arrêter proprement le coulage sur une **ligne de reprise** choisie (perpendiculaire à la portée, dans une zone de faible effort tranchant, en accord avec le BET si possible), réaliser un **arrêt net** (planche, grillage), vibrer et protéger le béton coulé ; refuser les toupies qui attendent trop longtemps ; à la reprise : **piquer et humidifier** la surface, éventuellement appliquer une barbotine ou un produit de reprise, puis couler. Noter l'incident au journal et dans le PV.`}
 ],
 quiz:[
  {q:"Dans une chaîne pelle-camions-compacteur, le rythme est fixé par :", o:["L'engin le plus lent","L'engin le plus rapide","Le plus cher","Le conducteur"], r:0, e:"Goulot d'étranglement."},
  {q:"Durée de coulage de 60 m³ avec une pompe à 20 m³/h :", o:["3 h","20 h","1 h","60 h"], r:0, e:"60/20."},
  {q:"On compacte un remblai par couches de :", o:["20 à 30 cm","1 m","5 m","2 cm"], r:0, e:"Efficacité du compactage."},
  {q:"Avant un coulage, le ferraillage doit être :", o:["Contrôlé et réceptionné (PV)","Recouvert de boue","Peint","Démonté"], r:0, e:"Point d'arrêt."},
  {q:"Par forte chaleur, on coule de préférence :", o:["Tôt le matin ou en fin de journée","À 14 h","Sans cure","Avec plus d'eau"], r:0, e:"Évaporation moindre."}
 ]},
{id:"chant-6", niv:2, titre:"Le suivi financier du chantier : budget, coûts et trésorerie", duree:55, contenu:`## Les situations de travaux
Chaque mois (ou à chaque étape), l'entreprise établit une **situation** : travaux réalisés cumulés (quantités × prix unitaires), moins les situations précédentes, moins la **retenue de garantie**, moins le remboursement de l'**avance**, plus TVA (voir le chapitre Situations du cours de Métré).
> [!exemple]
> Marché : 45 M F HT. Cumul à fin mars : 18,4 M ; situations précédentes : 11,2 M → travaux du mois **7,2 M** ; retenue 5 % (0,36 M) → **6,84 M HT** à payer, plus TVA.

## Le suivi des coûts
Pour chaque lot, on compare :
| Budget (objectif) | Engagé (commandes, contrats signés) | Réalisé (dépensé) | Avancement physique | Prévision à terminaison |
La **prévision à terminaison** (PAT) estime le coût final : PAT ≈ dépenses réelles / avancement (si les rendements restent les mêmes), ou dépenses réelles + reste à faire réestimé.
> [!exemple] Lot gros œuvre
> Budget : 25 M F ; avancement : 60 % ; dépenses : 16,5 M → PAT = 16,5 / 0,60 = **27,5 M** → dépassement prévisible de **2,5 M (10 %)**. Il faut en chercher les causes (rendements, pertes de matériaux, prix d'achat, reprises) et agir sur les 40 % restants.

## La marge
**Marge brute** = chiffre d'affaires (travaux facturés) − déboursés. Elle doit couvrir les frais de chantier, les frais généraux et le bénéfice. Un chantier « qui avance bien » peut perdre de l'argent : seul le suivi mensuel des coûts le révèle à temps.

## La trésorerie
L'entreprise paie les salaires et les fournisseurs **avant** d'être payée par le client (délais de paiement des situations). La **trésorerie** est la différence cumulée entre encaissements et décaissements :
> [!exemple] Plan de trésorerie (en millions F)
> Avance encaissée au démarrage : 6. Dépenses mensuelles : 8 ; 12 ; 14 ; 12. Situations facturées : 10 ; 15 ; 17 ; 15, payées **le mois suivant** à 85 % (retenue 5 % et avance 10 % déduites).
> Trésorerie fin de mois : M1 : 6 − 8 = **− 2** ; M2 : − 2 − 12 + 8,5 = **− 5,5** ; M3 : − 5,5 − 14 + 12,75 = **− 6,75** ; M4 : − 6,75 − 12 + 14,45 = **− 4,3**.
> L'entreprise doit financer jusqu'à **6,75 M** (découvert, fonds propres) : à prévoir dès la préparation.

## Les travaux modificatifs
Toute modification demandée par le maître d'ouvrage fait l'objet d'un **devis**, puis d'un **OS** ou d'un **avenant** **avant** exécution. Sans écrit, les « travaux supplémentaires » sont la première cause de conflit et de perte d'argent.

> [!retenir]
> - Situations mensuelles ; retenue de garantie ; avance remboursée.
> - Budget / engagé / réalisé / avancement → PAT ; agir dès qu'un écart apparaît.
> - Trésorerie : on dépense avant d'encaisser ; la prévoir.
> - Pas de travaux supplémentaires sans écrit.`,
 sujet:{titre:"Suivi financier d'un chantier : situation, prévision à terminaison et trésorerie", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes conducteur de travaux d'un marché de **68 millions F HT** à Bingerville.

**Données**
- Cumul des travaux réalisés fin mai : **31,6 M** ; cumul de la situation précédente : **22,4 M** ; retenue de garantie **5 %** ;
- Lot gros œuvre : budget **38 M** ; avancement **55 %** ; dépenses réelles **22,8 M** ;
- Trésorerie (en millions F) : avance encaissée au démarrage : **8** ; dépenses mensuelles : **10 ; 14 ; 16 ; 12** ; situations facturées : **12 ; 17 ; 19 ; 15**, payées **le mois suivant à 85 %** (retenue et remboursement d'avance déduits).

### Partie A — Situation de travaux (5 points)
1. Calculer les travaux du mois, la retenue et le montant HT à payer. (3 pts)
2. Pourquoi la situation doit-elle s'appuyer sur des métrés et attachements ? (2 pts)

### Partie B — Suivi des coûts (7 points)
3. Calculer la prévision à terminaison (PAT) du gros œuvre et l'écart avec le budget. (3 pts)
4. Citer quatre causes possibles de dépassement et une action pour chacune. (4 pts)

### Partie C — Trésorerie (8 points)
5. Calculer la trésorerie à la fin de chaque mois (M1 à M4). (5 pts)
6. Quel découvert maximal l'entreprise doit-elle financer ? Comment ? (2 pts)
7. Pourquoi une entreprise rentable peut-elle faire faillite ? (1 pt)`,
  corrige:`### Partie A — Situation (5 pts)
1. Travaux du mois : 31,6 − 22,4 = **9,2 M** ; retenue : **0,46 M** ; à payer : **8,74 M HT** (plus TVA). *(3 pts)*
2. Les quantités facturées doivent être **vérifiables** et acceptées par le maître d'œuvre (ouvrages cachés : attachements) ; sinon contestations et retards de paiement. *(2 pts)*

### Partie B — Coûts (7 pts)
3. PAT = 22,8 / 0,55 = **41,45 M** → dépassement prévisible de **3,45 M (9 %)**. *(3 pts)*
4. *(4 pts)*
   - **Rendements** plus faibles que prévu → réorganiser, former, mieux approvisionner ;
   - **Pertes** de matériaux (béton, ciment, casse) → contrôler les consommations, stockage ;
   - **Prix d'achat** plus élevés → négocier, regrouper les commandes ;
   - **Reprises** de malfaçons → contrôles et points d'arrêt ;
   - travaux supplémentaires non facturés → faire signer des avenants.

### Partie C — Trésorerie (8 pts)
5. *(5 pts)*

| Mois | Calcul | Trésorerie fin de mois |
|---|---|---|
| M1 | 8 − 10 | **− 2,0** |
| M2 | − 2 − 14 + 0,85 × 12 | **− 5,8** |
| M3 | − 5,8 − 16 + 0,85 × 17 | **− 7,35** |
| M4 | − 7,35 − 12 + 0,85 × 19 | **− 3,2** |

6. Découvert maximal **7,35 M F** (fin M3) : facilité de caisse ou découvert bancaire négocié à l'avance, délais de paiement fournisseurs, accélérer la facturation. *(2 pts)*
7. Parce que les **dépenses** arrivent avant les **encaissements** : sans trésorerie suffisante, elle ne peut plus payer salaires et fournisseurs, même si le chantier est bénéficiaire à la fin. *(1 pt)*

> [!attention] Erreurs à éviter
> - Facturer le cumul au lieu des travaux du mois.
> - Juger un dépassement sur les dépenses brutes sans tenir compte de l'avancement.
> - Oublier le décalage d'un mois des paiements.`},
 exercices:[
  {t:"Prévision à terminaison", d:2, e:`Lot second œuvre : budget 12 M F ; avancement 40 % ; dépenses 5,2 M. Calculer la PAT et l'écart. Même calcul pour le lot VRD : budget 3 M, avancement 75 %, dépenses 2,1 M.`, c:`Second œuvre : PAT = 5,2 / 0,40 = **13 M** → dépassement **1 M (8,3 %)**.
VRD : PAT = 2,1 / 0,75 = **2,8 M** → économie **0,2 M**.
Au total : dépassement net de 0,8 M ; il faut analyser le second œuvre (prix des carreaux ? reprises ?).`},
  {t:"Situation mensuelle", d:1, e:`Marché 60 M HT ; cumul fin juin 27 M ; situations précédentes 19,5 M ; retenue 5 % ; avance remboursée à 10 % des travaux du mois ; TVA 18 %. Calculer le net à payer TTC.`, c:`Travaux du mois : 27 − 19,5 = **7,5 M** ; retenue : 0,375 M ; avance : 0,75 M → net HT : **6,375 M** ; TVA : 1,1475 M → **7,5225 M TTC**.`},
  {t:"Plan de trésorerie", d:3, e:`Avance : 5 M au démarrage. Dépenses : 7 ; 10 ; 11 ; 9 M. Situations : 9 ; 13 ; 14 ; 12 M, payées le mois suivant à 85 %. Calculer la trésorerie de fin de mois et le besoin de financement maximal.`, c:`M1 : 5 − 7 = **− 2** ; M2 : − 2 − 10 + 7,65 = **− 4,35** ; M3 : − 4,35 − 11 + 11,05 = **− 4,30** ; M4 : − 4,30 − 9 + 11,90 = **− 1,40**.
Besoin maximal : **4,35 M F** (au mois 2) : à couvrir par un découvert négocié avec la banque ou des fonds propres.`},
  {t:"Marge d'un chantier", d:2, e:`Un chantier facturé 40 M F HT a coûté 31 M de déboursés. Les frais de chantier représentent 3,2 M et la quote-part de frais généraux 4 M. Calculer la marge brute et le résultat. Commenter.`, c:`Marge brute : 40 − 31 = **9 M** (22,5 %).
Résultat : 9 − 3,2 − 4 = **1,8 M** (4,5 % du chiffre d'affaires) : positif mais faible ; une petite dérive (pertes de matériaux, reprises, retard et pénalités) l'aurait annulé.`},
  {t:"Travaux supplémentaires", d:1, e:`Le client demande oralement au chef de chantier d'ajouter un mur de clôture de 20 m. Que doit faire l'entreprise avant d'exécuter ?`, c:`Établir un **devis** (quantités × prix du bordereau ou prix nouveaux), le faire **accepter par écrit** (ordre de service du maître d'œuvre ou avenant signé par le maître d'ouvrage), intégrer l'incidence sur le **délai**, puis seulement exécuter. Sans cela, le paiement et le délai supplémentaires pourront être contestés.`}
 ],
 quiz:[
  {q:"PAT d'un lot avec 9 M dépensés pour 60 % d'avancement :", o:["15 M","9 M","5,4 M","60 M"], r:0, e:"9/0,6."},
  {q:"La marge brute est :", o:["Chiffre d'affaires − déboursés","Le bénéfice net","La TVA","Le prix du ciment"], r:0, e:"Couvre frais et bénéfice."},
  {q:"La trésorerie d'un chantier est souvent négative au début car :", o:["On dépense avant d'être payé","Le client paie trop tôt","Il n'y a pas de dépenses","La TVA est nulle"], r:0, e:"Décalage de paiement."},
  {q:"Les travaux supplémentaires doivent être :", o:["Acceptés par écrit avant exécution","Exécutés puis discutés","Gratuits","Interdits"], r:0, e:"Devis + OS ou avenant."},
  {q:"La retenue de garantie courante est de :", o:["5 %","50 %","0,5 %","18 %"], r:0, e:"Libérée après la garantie de parfait achèvement."}
 ]},
{id:"chant-15", niv:2, titre:"Le suivi quotidien : réunions, comptes rendus et tableaux de bord", duree:45, contenu:`## La réunion de chantier hebdomadaire
- Participants : maître d'œuvre (qui la dirige), entreprises, parfois maître d'ouvrage et bureau de contrôle ;
- Ordre du jour fixe : **avancement** et planning, **qualité** (non-conformités, réserves), **sécurité**, points techniques (plans, choix de matériaux), approvisionnements, questions administratives ;
- **Compte rendu** diffusé sous 48 heures : pour chaque point, la **décision**, **qui** fait, **pour quand** ; il vaut accord s'il n'est pas contesté dans le délai prévu.

## Le compte rendu type
| N° | Sujet | Décision / action | Responsable | Échéance |
|---|---|---|---|---|
| 1 | Plans de ferraillage du R+1 | À transmettre visés | BET | Mardi |
| 2 | Retard des menuiseries | Relance du fournisseur, date ferme | Entreprise | Jeudi |
| 3 | Garde-corps de la trémie d'escalier | À poser avant toute intervention à l'étage | Chef de chantier | Immédiat |

## Mesurer l'avancement
L'avancement global se calcule en **pondérant** l'avancement de chaque lot par son poids dans le marché :
$$ avancement global = Σ (poids du lot × avancement du lot)
> [!exemple]
> Gros œuvre (40 % du marché) avancé à 80 % ; toiture (30 %) à 50 % ; finitions (20 %) à 10 % ; VRD (10 %) à 0 % → 0,4 × 80 + 0,3 × 50 + 0,2 × 10 + 0,1 × 0 = **49 %**.

## Les intempéries
Les jours de pluie qui empêchent réellement le travail (selon les seuils du marché : par exemple plus de 10 mm de pluie ou arrêt constaté) sont notés au **journal** et font l'objet d'une demande de **prolongation de délai** auprès du maître d'œuvre. Sans relevé contemporain, ils ne sont pas reconnus.

## Le tableau de bord du conducteur de travaux
| Domaine | Indicateurs |
|---|---|
| Délais | Avancement réel / prévu ; tâches critiques en retard ; jours d'intempéries |
| Coûts | Dépenses / budget ; prévision à terminaison ; travaux supplémentaires acceptés |
| Qualité | Non-conformités ouvertes et levées ; résultats d'essais |
| Sécurité | Accidents, presque-accidents, visites, causeries |
| Approvisionnements | Commandes en attente, ruptures |

## La communication
Avec le client (informer tôt des difficultés et des choix à faire), les voisins (nuisances, horaires), les équipes (objectifs de la semaine), l'administration. **Photos datées** et classées : mémoire et preuve.

> [!retenir]
> - Réunion hebdomadaire et compte rendu : décision, responsable, échéance.
> - Avancement global = Σ poids × avancement de chaque lot.
> - Intempéries notées au journal pour justifier une prolongation.
> - Tableau de bord : délais, coûts, qualité, sécurité, approvisionnements.`,
 sujet:{titre:"Suivi quotidien : avancement pondéré, réunion de chantier et tableau de bord", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Chantier d'un immeuble de bureaux à Treichville, semaine 20 sur 30. Vous préparez la réunion de chantier hebdomadaire.

**Données — avancement des lots**

| Lot | Poids dans le marché | Avancement |
|---|---|---|
| Gros œuvre | 45 % | 90 % |
| Toiture-étanchéité | 20 % | 60 % |
| Menuiseries | 10 % | 30 % |
| Finitions | 20 % | 15 % |
| VRD | 5 % | 0 % |

- Avancement prévu au planning à cette date : **65 %**.

### Partie A — Avancement (6 points)
1. Calculer l'avancement global pondéré. (3 pts)
2. Comparer avec le prévu et conclure. Quels lots faut-il regarder en priorité ? (3 pts)

### Partie B — La réunion de chantier (8 points)
3. Qui participe à la réunion de chantier ? (2 pts)
4. Proposer un ordre du jour type. (3 pts)
5. Qu'est-ce qu'un bon compte rendu ? (contenu, diffusion, délai) (3 pts)

### Partie C — Tableau de bord (6 points)
6. Proposer six indicateurs pour un tableau de bord hebdomadaire (délais, coûts, qualité, sécurité). (4 pts)
7. Que noter chaque jour dans le journal de chantier ? (2 pts)`,
  corrige:`### Partie A — Avancement (6 pts)
1. 0,45 × 90 + 0,20 × 60 + 0,10 × 30 + 0,20 × 15 + 0,05 × 0 = 40,5 + 12 + 3 + 3 + 0 = **58,5 %**. *(3 pts)*
2. 58,5 % < 65 % : **retard de 6,5 points** (≈ 2 semaines). Lots à surveiller : **finitions** (15 %) et **menuiseries** (30 %), qui conditionnent la fin ; vérifier les commandes et les effectifs. *(3 pts)*

### Partie B — Réunion (8 pts)
3. Maître d'œuvre (qui la dirige), entreprise générale (conducteur et chef de chantier), sous-traitants concernés, bureau de contrôle si nécessaire, coordonnateur sécurité, maître d'ouvrage selon les sujets. *(2 pts)*
4. Sécurité ; approbation du compte rendu précédent ; avancement et planning ; points techniques (plans, choix, réservations) ; qualité (non-conformités) ; approvisionnements ; administratif (situations, avenants) ; actions et date de la prochaine réunion. *(3 pts)*
5. Il liste les **présents**, les **décisions**, les **actions** avec un **responsable** et une **échéance**, les points en suspens ; il est diffusé à tous sous **48 h** ; sans contestation, il vaut accord. *(3 pts)*

### Partie C — Tableau de bord (6 pts)
6. Avancement réel / prévu ; tâches critiques en retard ; dépenses / budget (PAT) ; effectifs présents ; non-conformités ouvertes ; accidents et presque-accidents (TF) ; commandes en attente ; intempéries. *(4 pts)*
7. Date, météo, **effectifs** par entreprise, travaux réalisés, **livraisons**, matériel présent, visites, incidents et accidents, ordres reçus, essais réalisés. *(2 pts)*

> [!attention] Erreurs à éviter
> - Faire la moyenne des avancements sans pondération.
> - Compte rendu sans responsables ni dates : rien ne se fait.
> - Journal de chantier rempli « de mémoire » en fin de semaine.`},
 exercices:[
  {t:"Avancement global", d:1, e:`Poids et avancements : terrassements et fondations 20 % (100 %) ; élévation 35 % (60 %) ; toiture 15 % (0 %) ; second œuvre 30 % (5 %). Calculer l'avancement global. Le planning prévoyait 55 % : conclure.`, c:`0,20 × 100 + 0,35 × 60 + 0,15 × 0 + 0,30 × 5 = 20 + 21 + 0 + 1,5 = **42,5 %**.
Retard de **12,5 points** par rapport au prévu (55 %) : analyser le chemin critique (élévation), renforcer les équipes et préparer la toiture.`},
  {t:"Rédiger un compte rendu", d:2, e:`Lors de la réunion : le BET doit envoyer les plans de la dalle haute ; l'électricien n'a pas posé les fourreaux du séjour ; le client hésite entre deux carrelages ; un ouvrier travaillait sans casque. Rédiger le tableau des décisions.`, c:`| N° | Sujet | Décision / action | Responsable | Échéance |
|---|---|---|---|---|
| 1 | Plans de la dalle haute | Transmettre les plans visés | BET | Lundi prochain |
| 2 | Fourreaux du séjour | Poser avant coulage, contrôle par le chef de chantier | Électricien | Avant jeudi |
| 3 | Choix du carrelage | Choisir sur échantillons (délai de commande 10 semaines) | Maître d'ouvrage | Vendredi |
| 4 | Port du casque | Rappel en causerie, sanction si récidive | Chef de chantier | Immédiat |`},
  {t:"Jours d'intempéries", d:1, e:`Le marché reconnaît comme jour d'intempérie une journée avec plus de 10 mm de pluie entraînant l'arrêt. En juin, le journal note 9 jours de pluie, dont 6 au-dessus de 10 mm avec arrêt constaté. Quelle prolongation demander ?`, c:`**6 jours** (ceux qui remplissent les deux conditions), justifiés par le journal de chantier et, si possible, les relevés météorologiques ; les 3 autres jours de pluie faible ne sont pas reconnus.`},
  {t:"Lire un tableau de bord", d:2, e:`Tableau de bord du mois : avancement réel 38 % / prévu 45 % ; dépenses 14 M / budget à date 12,6 M ; 4 non-conformités ouvertes ; 1 accident avec arrêt ; 2 commandes en retard (aciers, menuiseries). Quelles priorités pour le conducteur de travaux ?`, c:`1. **Sécurité** : analyse de l'accident et mesures immédiates ;
2. **Approvisionnements** : débloquer les aciers (chemin critique) et relancer les menuiseries ;
3. **Délais** : plan de rattrapage (renfort d'équipes sur les tâches critiques) ;
4. **Coûts** : dépenses supérieures de 11 % au budget à date alors que l'avancement est en retard : rechercher les causes (rendements, pertes, prix) ;
5. **Qualité** : lever les 4 non-conformités avant qu'elles ne soient cachées.`},
  {t:"Informer le client", d:1, e:`Le fournisseur de menuiseries annonce trois semaines de retard. Rédiger en quelques lignes le message à adresser au maître d'œuvre et au client.`, c:`« Le fournisseur des menuiseries aluminium nous informe d'un retard de livraison de 3 semaines (nouvelle date : … ). Pour limiter l'impact, nous avançons les enduits intérieurs et les réseaux, et nous poserons des protections provisoires aux baies. L'incidence sur la date de fin est estimée à … jours ; nous vous proposons de faire le point à la prochaine réunion. » — Message écrit, daté, avec les solutions proposées.`}
 ],
 quiz:[
  {q:"Un compte rendu de réunion doit préciser pour chaque action :", o:["Le responsable et l'échéance","La couleur du stylo","Le prix du ciment","Rien"], r:0, e:"Qui fait quoi pour quand."},
  {q:"Avancement global avec un lot de 50 % du marché à 40 % et un lot de 50 % à 80 % :", o:["60 %","120 %","40 %","80 %"], r:0, e:"0,5 × 40 + 0,5 × 80."},
  {q:"Les jours d'intempéries doivent être :", o:["Notés au journal au moment où ils surviennent","Inventés à la fin","Ignorés","Payés double"], r:0, e:"Preuve contemporaine."},
  {q:"Le tableau de bord sert à :", o:["Suivre délais, coûts, qualité et sécurité","Dessiner les plans","Fixer la TVA","Commander le repas"], r:0, e:"Piloter le chantier."},
  {q:"Les photos datées du chantier servent de :", o:["Mémoire et de preuve","Décoration","Publicité seulement","Rien"], r:0, e:"Traçabilité."}
 ]},
{id:"chant-7", niv:3, titre:"Management de projet : équipes, réunions et litiges", duree:50, contenu:`## Qui fait quoi ?
- **Maître d'ouvrage** : le client, qui finance et décide ;
- **Maître d'œuvre** : architecte et bureaux d'études, qui conçoivent et contrôlent l'exécution ;
- **Entreprise** générale et ses **sous-traitants** ;
- **Bureau de contrôle** : vérifie la solidité et la sécurité ;
- **OPC** (ordonnancement, pilotage, coordination) sur les gros projets multi-lots.

## Manager les équipes
- **Fixer des objectifs** clairs et mesurables (« 30 m² d'agglos par jour pour l'équipe A ») ;
- **Déléguer** au bon niveau (le chef d'équipe organise sa tâche) et **contrôler** les résultats ;
- **Communiquer** : briefing du matin, explications des plans, retours sur la qualité ;
- **Motiver** : reconnaissance, primes de rendement liées à la qualité, conditions de travail correctes (eau, ombre, paie régulière) ;
- **Former** : accueil sécurité, compagnonnage des jeunes ;
- **Gérer les conflits** tôt, en écoutant les deux parties et en s'appuyant sur les faits.

## Le tableau de bord du chef de projet
| Domaine | Indicateur |
|---|---|
| Délais | Avancement réel / prévu, tâches critiques en retard |
| Coûts | Dépenses engagées / budget, prévision à terminaison |
| Qualité | Non-conformités ouvertes et levées |
| Sécurité | Accidents, presque-accidents, visites |

## Prévenir les litiges
La **traçabilité** évite la plupart des conflits : journal de chantier, photos datées, procès-verbaux, échanges écrits. Toute modification passe par un **ordre de service** ou un **avenant** **avant** exécution.
> [!exemple] Pénalités de retard
> Marché de 180 millions F, pénalité de 1/1 000 du marché par jour calendaire : **180 000 F par jour**. 20 jours de retard coûtent **3,6 millions F** (dans la limite du plafond, souvent 5 à 10 % du marché).

## Régler un différend
Discussion technique → **mise en demeure** écrite → conciliation ou **expertise** → arbitrage ou tribunal. Plus le dossier est documenté, plus vite il se règle ; une solution négociée est presque toujours moins coûteuse qu'un procès.

> [!retenir]
> - Objectifs clairs, délégation, contrôle, communication, motivation, formation.
> - Traçabilité écrite : OS, avenants, PV, journal, photos.
> - Pénalités = taux × montant × jours (plafonnées).
> - Litige : discussion, mise en demeure, conciliation, expertise, arbitrage ou tribunal.`,
 sujet:{titre:"Management de projet : réunions, conflits, travaux modificatifs et pénalités", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Vous dirigez le chantier d'un hôtel à Assinie : marché de **240 millions F HT**, pénalité de **1/1 000** du marché par jour calendaire, plafonnée à **5 %**.

**Situations rencontrées**
- S1 : le maître d'ouvrage demande oralement d'ajouter une piscine et de changer tous les carrelages ;
- S2 : le sous-traitant en étanchéité accumule les retards et ne vient plus aux réunions ;
- S3 : un conflit éclate entre le chef d'équipe des maçons et celui des ferrailleurs ;
- S4 : le chantier aura **25 jours** de retard, dont **10** dus à des plans livrés en retard par l'architecte.

### Partie A — Équipe et réunions (5 points)
1. Citer quatre qualités d'un bon chef de projet de chantier. (2 pts)
2. Donner cinq règles pour qu'une réunion soit efficace. (3 pts)

### Partie B — Travaux modificatifs (5 points)
3. Comment traiter la demande S1 ? Quel document faut-il ? (3 pts)
4. Pourquoi ne faut-il jamais exécuter de travaux supplémentaires sur un simple ordre oral ? (2 pts)

### Partie C — Sous-traitant et conflit (5 points)
5. Proposer une démarche graduée pour la situation S2. (3 pts)
6. Comment gérer le conflit S3 ? (2 pts)

### Partie D — Pénalités (5 points)
7. Calculer la pénalité journalière et la pénalité pour 25 jours. Vérifier le plafond. (2 pts)
8. Quels jours l'entreprise peut-elle contester et comment ? Calculer la pénalité si la réclamation est acceptée. (3 pts)`,
  corrige:`### Partie A — Équipe (5 pts)
1. **Organisé** et anticipateur ; **communicant** (écoute, clarté) ; **décideur** ; rigoureux sur la sécurité et la qualité ; sens du **budget** ; capacité à gérer les conflits ; exemplarité. *(2 pts)*
2. Ordre du jour **diffusé à l'avance** ; **horaire** et durée respectés ; un **animateur** qui distribue la parole ; décisions **écrites** avec responsable et échéance ; compte rendu diffusé sous 48 h ; seules les personnes concernées ; traiter les points techniques lourds en réunion séparée. *(3 pts)*

### Partie B — Modificatifs (5 pts)
3. Demander la confirmation **écrite** (ordre de service), chiffrer les travaux (prix nouveaux, devis), évaluer l'**incidence sur le délai**, puis faire signer un **avenant** (montant et délai) avant d'exécuter. *(3 pts)*
4. Sans écrit, les travaux risquent de ne **jamais être payés** et le retard qu'ils créent sera reproché à l'entreprise (pénalités). *(2 pts)*

### Partie C — Sous-traitant et conflit (5 pts)
5. Entretien avec le responsable du sous-traitant et rappel écrit de ses obligations → **mise en demeure** par lettre recommandée avec délai → si rien ne change, **application des pénalités** prévues au contrat de sous-traitance, puis **remplacement** (exécution à ses frais) en informant le maître d'œuvre. *(3 pts)*
6. Écouter chacun **séparément**, identifier la cause (interface entre tâches, matériel partagé, ordres contradictoires), clarifier les **rôles et l'enchaînement** des tâches, décider et suivre ; ne jamais laisser pourrir la situation. *(2 pts)*

### Partie D — Pénalités (5 pts)
7. 240 000 000 / 1 000 = **240 000 F/jour** ; 25 jours : **6 000 000 F** ; plafond : 5 % = 12 000 000 F, non atteint. *(2 pts)*
8. Les **10 jours** dus aux plans en retard ne sont pas imputables à l'entreprise : elle doit les avoir **signalés par écrit** au moment des faits (comptes rendus, courriers) et présenter une **réclamation** argumentée ; si elle est acceptée : 15 × 240 000 = **3 600 000 F**. *(3 pts)*

> [!attention] Erreurs à éviter
> - Accepter des modifications orales « pour faire plaisir au client ».
> - Laisser un sous-traitant défaillant sans mise en demeure écrite.
> - Découvrir à la fin du chantier qu'on n'a gardé aucune trace des retards subis.`},
 exercices:[
  {t:"Calcul de pénalités", d:1, e:`Marché de 95 M F ; pénalité de 1/2 000 du montant par jour calendaire, plafonnée à 5 %. Retard : 35 jours. Calculer la pénalité. Et pour 120 jours ?`, c:`Par jour : 95 000 000 / 2 000 = **47 500 F** ; 35 jours : **1 662 500 F**.
120 jours : 5 700 000 F, mais plafond 5 % × 95 M = **4 750 000 F** → pénalité plafonnée à **4,75 M F**.`},
  {t:"Fixer des objectifs", d:1, e:`Transformer en objectifs mesurables : a) « il faut aller plus vite sur la maçonnerie » ; b) « soyez plus prudents » ; c) « faites attention au ciment ».`, c:`a) « L'équipe A pose **30 m²** d'agglos par jour cette semaine, joints décalés et aplomb contrôlé » ;
b) « **100 %** des ouvriers en hauteur avec harnais attaché ; garde-corps posés sur toutes les trémies avant vendredi » ;
c) « **7 sacs par m³** de béton, comptés à chaque gâchée ; inventaire du ciment chaque samedi, pertes < 5 % ».`},
  {t:"Gérer un conflit d'équipe", d:2, e:`Deux chefs d'équipe se disputent la bétonnière chaque matin ; le coulage des poteaux prend du retard. Que faire ?`, c:`Écouter les deux chefs, constater le **problème d'organisation** (une ressource partagée sans règle), puis **planifier** l'utilisation de la bétonnière (créneaux horaires selon le planning, priorité aux tâches critiques), éventuellement **louer une seconde bétonnière** si le besoin est réel ; afficher le planning de la semaine et le rappeler au briefing du matin.`},
  {t:"Dossier en cas de litige", d:2, e:`Le maître d'ouvrage refuse de payer 2,4 M F de travaux supplémentaires (un mur de soutènement ajouté). Quelles pièces l'entreprise doit-elle réunir ?`, c:`L'**ordre de service** ou l'avenant signé (s'il existe), le **devis** accepté, les **comptes rendus** de réunion mentionnant la demande, les **attachements** et métrés contradictoires, le **journal** de chantier, les **photos datées**, les échanges écrits (courriels, lettres). Sans écrit préalable, la position de l'entreprise est fragile : d'où la règle « pas de travaux sans OS ».`},
  {t:"Motiver sans dégrader la qualité", d:2, e:`Une entreprise veut payer une prime de rendement à ses maçons. Quel risque ? Comment construire la prime ?`, c:`Risque : vitesse au détriment de la **qualité** (aplomb, joints, chaînages) et de la **sécurité**.
Construction : prime liée au rendement **et** à des critères de qualité contrôlés (aucune reprise, contrôles conformes) et de sécurité (EPI portés, aucun accident), versée après **réception** de la tâche par le chef de chantier.`}
 ],
 quiz:[
  {q:"Un bon objectif d'équipe est :", o:["Clair et mesurable","Vague","Secret","Impossible à atteindre"], r:0, e:"30 m²/jour, etc."},
  {q:"Pénalité de 1/1 000 sur un marché de 50 M pour 10 jours :", o:["500 000 F","50 000 F","5 000 000 F","5 000 F"], r:0, e:"50 000 × 10."},
  {q:"La meilleure prévention des litiges est :", o:["La traçabilité écrite","La discussion orale seule","L'oubli","Le silence"], r:0, e:"Écrits datés et signés."},
  {q:"Avant le tribunal, on passe généralement par :", o:["La mise en demeure et la conciliation","La démolition","La grève","Rien"], r:0, e:"Règlement amiable."},
  {q:"L'OPC sert à :", o:["Coordonner les entreprises d'un gros projet","Peindre","Calculer les aciers","Vendre les logements"], r:0, e:"Ordonnancement, pilotage, coordination."}
 ]},
{id:"chant-8", niv:3, titre:"Méthodes de construction : coffrages, rotations et cadences", duree:50, contenu:`## Choisir ses coffrages
| Coffrage | Nombre de réemplois | Usage |
|---|---|---|
| Bois et contreplaqué | 3 à 8 | Maisons, formes variées |
| Coffrages modulaires métalliques | 50 à 100 et plus | Poteaux, voiles, ouvrages répétitifs |
| Banches et tables | plusieurs centaines | Immeubles à étages identiques |
Plus un ouvrage est **répétitif**, plus un coffrage industriel devient rentable : on compare le **coût par utilisation** (prix / nombre de réemplois + entretien + main-d'œuvre de mise en place).
> [!exemple] Coût par utilisation
> Contreplaqué à 3 000 F/m², 5 réemplois → **600 F/m²** par utilisation ; panneau métallique à 45 000 F/m², 100 réemplois + 100 F d'entretien → **550 F/m²**, et une main-d'œuvre plus rapide : rentable sur un immeuble, pas sur une maison.

## Les rotations d'étais
Les étais d'un plancher restent en place **21 à 28 jours**. Si l'on coule un plancher tous les 10 jours, il faut des étais pour environ **3 niveaux** à la fois (étaiement de reprise), plus un jeu en préparation.

## Calculer une cadence
> [!exemple] Structure d'un étage d'immeuble
> 12 m³ de béton armé de poteaux et poutres à **25 heures de main-d'œuvre par m³** (coffrage, ferraillage, coulage, décoffrage) : 300 heures.
> Équipe de 6 ouvriers × 8 h = 48 h par jour → 300 / 48 = **6,25 jours** pour les poteaux et les poutres de l'étage, auxquels s'ajoute le plancher.

## Le bétonnage
- **Bétonnière** de 350 L : environ 2,5 m³ par heure de béton effectivement coulé ;
- **Béton prêt à l'emploi + pompe** : 20 à 40 m³ par heure, idéal pour couler une dalle d'un seul tenant.

## Accélérer sans risque
- **Préfabriquer** ce qui peut l'être : poutrelles, linteaux, cages d'armatures montées au sol, escaliers ;
- Faire travailler les équipes **en parallèle** sur des zones différentes (**travail à la chaîne** : coffreurs, ferrailleurs, bétonneurs se succèdent de zone en zone) ;
- Ne jamais réduire les délais de **décoffrage** et de **cure** pour gagner du temps.

## Application : combien de jeux d'étais ?
Nombre de jeux = durée de maintien / cadence (arrondie au-dessus) + 1 jeu en préparation. Avec un maintien de 28 jours et un plancher tous les 10 jours : 28 / 10 = 2,8 → 3 jeux en place + 1 = **4 jeux**. Pour un plancher de 200 m² étayé à raison d'un étai par m² : **800 étais** à prévoir (achat ou location).

## Application : le cycle d'un étage en 10 jours
| Jours | Travaux |
|---|---|
| J1 – J2 | Implantation, ferraillage et coffrage des poteaux |
| J3 | Coulage des poteaux |
| J4 – J6 | Étaiement, coffrage des poutres et du plancher |
| J7 – J8 | Ferraillage, réservations des réseaux, contrôle |
| J9 | Coulage du plancher |
| J10 | Cure, décoffrage des joues de poutres, préparation du niveau suivant |
Chaque équipe (coffreurs, ferrailleurs, bétonneurs) retrouve le même travail au même moment du cycle : les rendements s'améliorent d'étage en étage.

## Application : bétonner une dalle de 45 m³
- À la **bétonnière** (2,5 m³/h) : 45 / 2,5 = **18 heures** de coulage, soit plus de deux journées : il faut prévoir des **reprises de bétonnage** à des endroits choisis par le bureau d'études ;
- À la **pompe** (30 m³/h) avec du BPE : 45 / 30 = **1,5 heure** de pompage (plus l'installation) : la dalle est coulée d'un seul tenant.

> [!attention] Erreurs fréquentes
> - Retirer les étais avant le délai pour récupérer du matériel.
> - Couler une grande dalle à la bétonnière sans plan de reprises.
> - Choisir un coffrage industriel pour un ouvrage peu répétitif.
> - Oublier les réservations (gaines, fourreaux) avant le coulage.

> [!retenir]
> - Coffrage : comparer le coût par utilisation ; industriel si répétitif.
> - Étais : 21 à 28 jours → plusieurs jeux en rotation.
> - Cadence = heures nécessaires / heures disponibles par jour.
> - Préfabriquer, paralléliser, mais respecter décoffrage et cure.`,
 sujet:{titre:"Méthodes de construction : choix des coffrages, rotations et cadence d'étage", duree:90, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Immeuble R+9 à Cocody : la structure de chaque étage comporte **15 m³** de poteaux et poutres et **380 m²** de coffrage. Vous étudiez les méthodes.

**Données**
- Contreplaqué : **3 500 F/m²**, **6 réemplois** ; panneaux métalliques : **50 000 F/m²**, **120 réemplois** + **150 F/m²** d'entretien par utilisation ;
- Main-d'œuvre poteaux-poutres : **22 heures par m³** (coffrage, ferraillage, coulage, décoffrage) ; équipe de **8 ouvriers** × **8 h** ;
- Plancher de l'étage : **4 jours** supplémentaires avec la même équipe ;
- Délai de décoffrage des fonds : **14 jours** (étais de reprise sur 2 niveaux).

### Partie A — Choix des coffrages (7 points)
1. Calculer le coût par utilisation (par m²) des deux solutions. (3 pts)
2. Calculer le coût des coffrages pour les 10 niveaux dans chaque solution (380 m² par niveau). (2 pts)
3. Conclure, en tenant compte des autres critères (main-d'œuvre, qualité des parements, stockage, levage). (2 pts)

### Partie B — Cadence (7 points)
4. Calculer la durée des poteaux et poutres d'un étage. (2 pts)
5. En déduire la durée d'un cycle d'étage et la durée de la structure (10 niveaux). (3 pts)
6. Combien de jeux de coffrages de fonds et d'étais faut-il pour tenir ce cycle avec 14 jours avant décoffrage ? (2 pts)

### Partie C — Méthodes (6 points)
7. Comparer coffrage traditionnel, coffrages-outils (banches, tables) et préfabrication. (3 pts)
8. Proposer une organisation en zones pour accélérer (travail à la chaîne). (3 pts)`,
  corrige:`### Partie A — Coffrages (7 pts)
1. Contreplaqué : 3 500 / 6 = **583 F/m²** par utilisation ; métal : 50 000 / 120 + 150 = **567 F/m²**. *(3 pts)*
2. 10 niveaux × 380 m² = 3 800 m² utilisés : contreplaqué **2,22 M F** ; métal **2,15 M F** (en supposant que les panneaux servent ensuite sur d'autres chantiers jusqu'à 120 réemplois). *(2 pts)*
3. Coûts voisins par utilisation, mais le **métal** donne des parements plus réguliers, une **main-d'œuvre plus rapide** et se réemploie sur d'autres chantiers ; il exige une **grue** et une immobilisation de capital. Sur un R+9, le métal (ou des coffrages-outils) est rentable ; sur une maison, non. *(2 pts)*

### Partie B — Cadence (7 pts)
4. 15 × 22 = 330 h / (8 × 8) = 5,2 → **6 jours** (5,2 jours de travail effectif). *(2 pts)*
5. Cycle : 5,2 + 4 ≈ **9 à 10 jours** par étage → structure : **≈ 95 jours** (10 cycles de 9,5 jours). *(3 pts)*
6. 14 jours / 9,5 jours par cycle ≈ 1,5 → **2 jeux** de coffrages de fonds et d'étais (plus les étais de reprise d'un troisième niveau). *(2 pts)*

### Partie C — Méthodes (6 pts)
7. **Traditionnel** (bois) : souple, peu d'investissement, lent, parements moyens ; **coffrages-outils** (banches pour voiles, tables pour planchers) : rapides, réguliers, demandent une grue et de la répétitivité ; **préfabrication** (prédalles, poutrelles, escaliers) : rapidité et qualité, transport et levage, liaisons à soigner. *(3 pts)*
8. Diviser l'étage en **2 ou 3 zones** : pendant que l'équipe coffrage travaille sur la zone 2, les ferrailleurs sont sur la zone 1, puis le bétonnage ; chaque équipe enchaîne sans attente (**travail à la chaîne**), ce qui réduit le cycle et lisse les effectifs. *(3 pts)*

> [!attention] Erreurs à éviter
> - Comparer les coffrages sur leur prix d'achat seul.
> - Oublier les étais de reprise dans le nombre de jeux.
> - Choisir une méthode industrielle sans répétitivité suffisante.`},
 exercices:[
  {t:"Jeux d'étais", d:2, e:`On coule un plancher tous les 8 jours ; les étais doivent rester 24 jours sous chaque plancher ; il faut en plus un jeu en préparation. Combien de jeux d'étais (d'un plancher) faut-il ?`, c:`Planchers simultanément étayés : 24 / 8 = **3** ; + 1 jeu en préparation → **4 jeux** d'étais.`},
  {t:"Cadence d'un étage", d:2, e:`Un étage comprend 15 m³ de poteaux, poutres et voiles (28 h de main-d'œuvre par m³) et 180 m² de plancher (1,2 h/m²). L'équipe compte 8 ouvriers travaillant 8 h par jour. Calculer la durée d'un étage.`, c:`Heures : 15 × 28 + 180 × 1,2 = 420 + 216 = **636 h** ; capacité : 8 × 8 = 64 h/j → 636 / 64 = **9,9 jours** → cycle d'étage d'environ **10 jours**.`},
  {t:"Choisir un coffrage", d:2, e:`Pour 40 poteaux identiques par étage sur 8 étages, comparer : coffrage bois (4 000 F/m², 6 réemplois) et coffrage métallique (60 000 F/m², 120 réemplois, entretien 150 F/m² par utilisation). Coût par m² et par utilisation ?`, c:`Bois : 4 000 / 6 = **667 F/m²** par utilisation (et il faudra le renouveler ~ 53 fois sur 320 utilisations).
Métal : 60 000 / 120 + 150 = **650 F/m²**, avec des parements plus lisses et une pose plus rapide → **métal** préférable pour 320 utilisations.`},
  {t:"Travail à la chaîne", d:3, e:`Trois équipes (coffrage 3 jours, ferraillage 2 jours, coulage 1 jour) traitent successivement 4 zones identiques d'un plancher. Calculer la durée totale si chaque équipe passe à la zone suivante dès qu'elle a fini (sans attendre), en respectant l'ordre des tâches dans chaque zone.`, c:`Coffrage (goulot à 3 jours) : zones finies aux jours 3, 6, 9, 12.
Ferraillage : zone 1 : jours 4-5 ; zone 2 : 7-8 ; zone 3 : 10-11 ; zone 4 : 13-14.
Coulage : zone 1 : jour 6 ; zone 2 : 9 ; zone 3 : 12 ; zone 4 : **15**.
Durée totale : **15 jours**, au lieu de 4 × (3 + 2 + 1) = 24 jours en travaillant zone par zone.`},
  {t:"Préfabriquer les linteaux", d:1, e:`Un chantier de 20 logements comporte 260 linteaux identiques. Quels avantages à les préfabriquer au sol ?`, c:`Coffrages simples et réutilisés au sol, **qualité** régulière (vibration, enrobage contrôlés), **gain de temps** (pose directe sur la maçonnerie, pas d'étaiement), travail en sécurité au sol, possibilité de les fabriquer à l'avance pendant les fondations.`}
 ],
 quiz:[
  {q:"Un coffrage métallique est rentable :", o:["Pour des ouvrages répétitifs","Pour un ouvrage unique","Jamais","Seulement pour les fondations"], r:0, e:"Nombreux réemplois."},
  {q:"Durée pour 300 h de travail avec 6 ouvriers à 8 h/j :", o:["6,25 jours","50 jours","3 jours","1 jour"], r:0, e:"300/48."},
  {q:"Les étais d'un plancher restent en général :", o:["21 à 28 jours","1 jour","1 an","Ils sont inutiles"], r:0, e:"Résistance du béton."},
  {q:"Pour accélérer sans risque, on peut :", o:["Préfabriquer et travailler en parallèle","Réduire la cure","Décoffrer plus tôt","Ajouter de l'eau au béton"], r:0, e:"Sans toucher aux délais techniques."},
  {q:"Coût par utilisation d'un coffrage de 3 000 F/m² réemployé 5 fois :", o:["600 F/m²","15 000 F/m²","3 000 F/m²","60 F/m²"], r:0, e:"3 000/5."}
 ]},
{id:"chant-9", niv:3, titre:"Gestion des risques, HSE et sinistres", duree:50, contenu:`## Les risques majeurs du chantier
1. **Chutes de hauteur** (planchers sans garde-corps, échafaudages, toitures) : première cause d'accidents graves ;
2. **Effondrement** de fouilles de plus de 1,30 m non blindées, d'étaiements ou de murs ;
3. **Électrocution** (câbles abîmés, coffrets sans différentiel, lignes aériennes) ;
4. **Engins et charges suspendues** (grue, camions, pelles en marche arrière) ;
5. Coupures, chutes d'objets, poussières (silice), bruit, **chaleur**, produits chimiques (ciment : brûlures et eczéma).

## Évaluer les risques
On classe chaque risque selon sa **probabilité** (P, de 1 à 4) et sa **gravité** (G, de 1 à 4) : **criticité C = P × G**. On traite en priorité les risques les plus critiques, en suivant l'ordre des mesures : **supprimer** le risque → **protéger collectivement** → **organiser** (procédures, formation) → **protéger individuellement** (EPI).

## Organiser la prévention
- **Plan de sécurité** propre au chantier (PPSPS) et plan d'installation ;
- **Accueil sécurité** de chaque nouvel ouvrier, causeries régulières (« quart d'heure sécurité »), secouristes formés, trousse de secours ;
- **Vérifications** des échafaudages, engins, appareils de levage, installations électriques ;
- **Analyse** de chaque accident et presque-accident (arbre des causes) pour éviter qu'il se reproduise.

## Mesurer : taux de fréquence et de gravité
$$ TF = nombre d'accidents avec arrêt × 1 000 000 / heures travaillées
$$ TG = jours perdus × 1 000 / heures travaillées
> [!exemple]
> 3 accidents avec arrêt, 42 jours perdus, 120 000 heures travaillées : **TF = 25** ; **TG = 0,35**.

## L'environnement
Tri des déchets (gravats, bois, métaux, emballages), arrosage contre la poussière, bacs de lavage des bétonnières (pas de laitance dans les caniveaux), stockage des huiles et carburants sur rétention, respect des horaires pour le bruit.

## Assurances et sinistres
- **Tous risques chantier (TRC)** : dommages à l'ouvrage pendant les travaux (effondrement, incendie, inondation, vol selon contrat) ;
- **Responsabilité civile** de l'entreprise : dommages causés aux tiers (voisins, passants) ;
- **Garantie décennale** après réception pour les désordres graves.
En cas de sinistre : **sécuriser**, porter secours, photographier, faire constater, **déclarer dans le délai** prévu au contrat.

> [!attention] Plan d'urgence
> Afficher les numéros d'urgence (en Côte d'Ivoire : **180** pompiers, **185** SAMU), l'itinéraire vers le centre de santé le plus proche et le nom des secouristes.

> [!retenir]
> - Criticité = probabilité × gravité ; supprimer, protéger collectivement, organiser, puis EPI.
> - TF = accidents × 10⁶ / heures ; TG = jours perdus × 10³ / heures.
> - TRC, responsabilité civile, décennale ; déclarer les sinistres dans les délais.`,
 sujet:{titre:"Risques, prévention et sinistres : évaluer, prévenir, assurer", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Chantier d'un immeuble R+4 à Yopougon, **160 000 heures** travaillées dans l'année.

**Données**
- Accidents avec arrêt : **4** ; jours perdus : **65** ;
- Évaluation des risques : criticité = gravité (1 à 4) × probabilité (1 à 4) ; on traite en priorité les risques de criticité ≥ 9 ;
- Risques identifiés : R1 chute depuis un plancher sans garde-corps (G4, P3) ; R2 coupure en ferraillage (G2, P3) ; R3 effondrement d'une tranchée de 1,8 m non blindée (G4, P2) ; R4 électrocution sur un câble de bétonnière endommagé (G4, P2) ; R5 coup de chaleur (G3, P3).
- Une nuit, un orage fait s'effondrer un mur en cours de construction sur la voiture d'un voisin.

### Partie A — Indicateurs (4 points)
1. Calculer le taux de fréquence et le taux de gravité. (2 pts)
2. Que mesurent-ils ? (2 pts)

### Partie B — Évaluation des risques (8 points)
3. Calculer la criticité de chaque risque et les classer. (3 pts)
4. Proposer une mesure de prévention pour chacun des risques prioritaires. (5 pts)

### Partie C — Sinistres et assurances (8 points)
5. Expliquer les assurances : tous risques chantier (TRC), responsabilité civile (RC), décennale. (3 pts)
6. Quelle assurance joue pour la voiture du voisin ? Pour le mur effondré ? (2 pts)
7. Décrire la conduite à tenir après ce sinistre (sécurité, constats, déclaration). (3 pts)`,
  corrige:`### Partie A — Indicateurs (4 pts)
1. TF = 4 × 1 000 000 / 160 000 = **25** ; TG = 65 × 1 000 / 160 000 = **0,41**. *(2 pts)*
2. **TF** : nombre d'accidents avec arrêt par million d'heures travaillées (fréquence) ; **TG** : jours perdus pour 1 000 heures (gravité). Ils permettent de comparer et de suivre les chantiers. *(2 pts)*

### Partie B — Évaluation (8 pts)
3. R1 : 4 × 3 = **12** ; R2 : 2 × 3 = 6 ; R3 : 4 × 2 = 8 ; R4 : 4 × 2 = 8 ; R5 : 3 × 3 = **9** → prioritaires : **R1 (12)** et **R5 (9)**, puis R3 et R4 (8), puis R2. *(3 pts)*
4. *(5 pts)*
   - **R1** : garde-corps périphériques, couverture des trémies, filets ;
   - **R5** : eau fraîche à disposition, pauses à l'ombre, horaires décalés aux heures chaudes, surveillance mutuelle ;
   - **R3** : blindage ou talutage de toute tranchée de plus de 1,30 m, déblais à distance du bord ;
   - **R4** : câbles vérifiés et remplacés, coffret avec différentiel 30 mA ;
   - **R2** : gants, outillage adapté, protection des fers en attente.

### Partie C — Sinistres (8 pts)
5. **TRC** : dommages à l'**ouvrage en cours** (effondrement, incendie, intempéries) ; **RC** : dommages causés **aux tiers** (voisins, passants) ; **décennale** : désordres graves **après réception** (solidité, destination) pendant 10 ans. *(3 pts)*
6. Voiture du voisin : **RC** de l'entreprise ; mur effondré (ouvrage en cours) : **TRC**. *(2 pts)*
7. **Sécuriser** (baliser, étayer, couper les réseaux), porter secours si besoin ; **photos** et **constat** (huissier si nécessaire, PV contradictoire) ; **déclarer** le sinistre à l'assureur dans le délai du contrat (souvent 5 jours) ; informer le maître d'œuvre ; rechercher les causes (mur non chaîné, pas de contreventement provisoire) et corriger la méthode. *(3 pts)*

> [!attention] Erreurs à éviter
> - Traiter les risques dans l'ordre où on les découvre au lieu de leur criticité.
> - Déclarer un sinistre hors délai.
> - Laisser des murs hauts sans étaiement provisoire en saison des orages.`},
 exercices:[
  {t:"Taux de fréquence et de gravité", d:1, e:`Un chantier a totalisé 85 000 heures de travail, avec 2 accidents avec arrêt et 15 jours perdus. Calculer TF et TG. Comparer avec un chantier à TF = 25 et TG = 0,35.`, c:`TF = 2 × 1 000 000 / 85 000 = **23,5** ; TG = 15 × 1 000 / 85 000 = **0,18**.
Fréquence voisine du second chantier, mais accidents **moins graves** (TG deux fois plus faible).`},
  {t:"Matrice des risques", d:2, e:`Évaluer (P et G de 1 à 4) et classer : a) chute depuis une dalle sans garde-corps (P 3, G 4) ; b) coupure à la main en façonnant les aciers (P 4, G 1) ; c) effondrement d'une tranchée de 2 m non blindée (P 2, G 4) ; d) électrocution par rallonge dénudée (P 2, G 4) ; e) mal de dos en portant les sacs (P 4, G 2). Quelles priorités ?`, c:`Criticités : a) **12** ; b) 4 ; c) **8** ; d) **8** ; e) 8.
Priorité 1 : **garde-corps** sur toutes les rives et trémies (a). Ensuite : **blindage/talutage** (c), **remplacement des rallonges et différentiel 30 mA** (d), **manutention** (sacs à deux, brouettes, palettes au plus près) (e). Puis gants pour le façonnage (b).`},
  {t:"Arbre des causes", d:2, e:`Un manœuvre est tombé d'un échafaudage en bois monté sur des fûts, sans garde-corps, en portant un seau de mortier. Identifier au moins quatre causes et une mesure pour chacune.`, c:`- Échafaudage **non conforme** (fûts instables) → échafaudage métallique ou tréteaux conformes, vérifiés ;
- **Absence de garde-corps** → garde-corps et plinthes sur les plateaux > 1 m ;
- **Port de charge** en montant → poulie ou monte-charge, approvisionnement par un autre ouvrier ;
- **Absence de formation/contrôle** → accueil sécurité, vérification par le chef de chantier avant usage.`},
  {t:"Déclarer un sinistre", d:1, e:`Une nuit, un orage fait s'effondrer un mur de clôture en cours de construction sur la voiture d'un voisin. Quelles démarches ? Quelles assurances sont concernées ?`, c:`Sécuriser le site (balisage, étaiement), **photographier**, prévenir le voisin, faire **constater** (constat amiable ou huissier), **déclarer** le sinistre à l'assureur dans le délai contractuel.
Assurances : **TRC** pour le mur (dommage à l'ouvrage) et **responsabilité civile** de l'entreprise pour la voiture du voisin (dommage à un tiers).`},
  {t:"Chaleur et santé", d:2, e:`Par 35 °C, un ouvrier présente des vertiges et des maux de tête vers 14 h. Que faire immédiatement ? Quelles mesures pour l'organisation du travail ?`, c:`Immédiatement : le mettre **à l'ombre**, le faire boire de l'eau fraîche par petites gorgées, le rafraîchir, appeler les secours (**185**) si son état ne s'améliore pas rapidement ou s'il est confus.
Organisation : **eau potable** en quantité, **pauses** à l'ombre, travaux pénibles **tôt le matin**, rotation des tâches exposées, casques ventilés, attention aux nouveaux arrivants.`}
 ],
 quiz:[
  {q:"La criticité d'un risque se calcule par :", o:["Probabilité × gravité","Probabilité + coût","Gravité / durée","Le nombre d'ouvriers"], r:0, e:"Classement des priorités."},
  {q:"TF pour 2 accidents et 100 000 heures :", o:["20","2","200","0,2"], r:0, e:"2 × 10⁶ / 10⁵."},
  {q:"L'ordre des mesures de prévention commence par :", o:["Supprimer le risque","Distribuer des EPI","Afficher une consigne","Rien"], r:0, e:"Puis protection collective."},
  {q:"L'assurance qui couvre les dommages à l'ouvrage pendant les travaux est :", o:["La TRC","La décennale","L'assurance-vie","Aucune"], r:0, e:"Tous risques chantier."},
  {q:"Numéro des pompiers en Côte d'Ivoire :", o:["180","112","17","911"], r:0, e:"185 pour le SAMU."}
 ]},
{id:"chant-16", niv:3, titre:"Piloter par la valeur acquise : délais et coûts", duree:50, contenu:`## Pourquoi la valeur acquise ?
Comparer seulement les dépenses au budget ne suffit pas : un chantier qui a dépensé moins que prévu peut être… simplement en retard. La méthode de la **valeur acquise** croise **trois courbes** pour savoir à la fois où l'on en est en **délai** et en **coût**.

## Les trois grandeurs (à une date donnée)
| Grandeur | Définition |
|---|---|
| **Valeur planifiée** (VP) | Budget des travaux qui **devaient** être faits à cette date |
| **Valeur acquise** (VA) | Budget des travaux **réellement** faits (avancement × budget) |
| **Coût réel** (CR) | Ce que ces travaux ont **réellement coûté** |
Le budget total à l'achèvement est noté **BAC**.

## Les écarts et les indices
- Écart de délai : **ED = VA − VP** (négatif = retard) ; indice **SPI = VA / VP** ;
- Écart de coût : **EC = VA − CR** (négatif = dépassement) ; indice **CPI = VA / CR** ;
- **Estimation à l'achèvement** : **EAA ≈ BAC / CPI** (si l'efficacité reste la même) ;
- Durée estimée ≈ durée prévue / SPI.

> [!exemple] Chantier de 60 M F prévu en 10 mois, fin du mois 4
> VP = 24 M ; VA = 20 M ; CR = 22 M.
> ED = 20 − 24 = **− 4 M** (retard) ; SPI = 20 / 24 = **0,83**.
> EC = 20 − 22 = **− 2 M** (dépassement) ; CPI = 20 / 22 = **0,91**.
> EAA = 60 / 0,91 ≈ **66 M** (6 M de dépassement prévisible) ; durée ≈ 10 / 0,83 = **12 mois**.
> Le chantier est **en retard et trop cher** : il faut agir (organisation, rendements, approvisionnements) avant que les écarts ne s'aggravent.

## La courbe en S
En traçant VP, VA et CR cumulés en fonction du temps, on obtient des courbes en **S** (démarrage lent, accélération, ralentissement des finitions). L'écart vertical entre VA et VP montre le retard ou l'avance, celui entre VA et CR le dépassement ou l'économie.

## Les bonnes pratiques
- Mesurer l'avancement **physiquement** (métrés, pourcentages par lot) et non d'après les dépenses ;
- Mettre à jour chaque mois, analyser les causes des écarts, décider d'actions et suivre leurs effets ;
- Présenter les résultats simplement au maître d'ouvrage et à la direction (indices et courbes).

## Application : calculer la valeur acquise par lot
Avec le chantier de 60 M F de l'exemple (fin du mois 4), on mesure l'avancement physique de chaque lot :
| Lot | Budget (M F) | Avancement mesuré | Valeur acquise (M F) |
|---|---|---|---|
| Terrassements | 6 | 100 % | 6 |
| Fondations | 12 | 100 % | 12 |
| Élévation | 20 | 10 % | 2 |
| Toiture | 10 | 0 % | 0 |
| Second œuvre | 12 | 0 % | 0 |
| **Total (BAC)** | **60** | | **VA = 20** |

## Plusieurs prévisions à l'achèvement
| Hypothèse | Formule | Résultat |
|---|---|---|
| L'écart est accidentel | EAA = CR + (BAC − VA) | 22 + 40 = **62 M** |
| L'efficacité reste la même | EAA = BAC / CPI | **66 M** |
| Coûts et retards pèsent ensemble | EAA = CR + (BAC − VA) / (CPI × SPI) | **74,8 M** |
La fourchette (62 à 75 M) montre l'enjeu des décisions à prendre maintenant.

## L'effort à fournir
Pour finir dans le budget, le reste des travaux (60 − 20 = 40 M au budget) doit coûter au plus 60 − 22 = 38 M : l'indice à atteindre est **TCPI = 40 / 38 = 1,05**. Il faut travailler 5 % plus efficacement que prévu jusqu'à la fin, alors qu'on est à 0,91 : c'est irréaliste sans changer d'organisation.

> [!attention] Erreurs fréquentes
> - Calculer la valeur acquise à partir des dépenses au lieu de l'avancement physique.
> - Mélanger des montants HT et TTC.
> - Oublier de mettre à jour le BAC après un avenant.
> - Constater les écarts sans décider d'actions correctives.

> [!retenir]
> - VP (prévu), VA (fait, au prix du budget), CR (coût réel).
> - SPI = VA/VP (délai) ; CPI = VA/CR (coût) ; < 1 = défavorable.
> - EAA ≈ BAC / CPI ; durée ≈ durée prévue / SPI.`,
 sujet:{titre:"Piloter un chantier par la valeur acquise : écarts, indices et prévisions", duree:60, niveau:"BTS / Licence", bareme:20,
  enonce:`**Contexte.** Construction d'un centre administratif à Korhogo : budget **84 millions F**, durée prévue **12 mois**. Fin du mois 5, vous faites le point.

**Données (en millions F)**
- Valeur planifiée (VP) des travaux prévus à fin du mois 5 : **32** ;
- Valeur acquise (VA) des travaux réellement réalisés, au prix du budget : **28** ;
- Coût réel (CR) dépensé : **30,5**.

### Partie A — Les trois grandeurs (4 points)
1. Définir VP, VA et CR. Pourquoi comparer des valeurs en F plutôt que des pourcentages isolés ? (4 pts)

### Partie B — Écarts et indices (8 points)
2. Calculer l'écart de délai ED = VA − VP et l'indice SPI = VA / VP. Interpréter. (4 pts)
3. Calculer l'écart de coût EC = VA − CR et l'indice CPI = VA / CR. Interpréter. (4 pts)

### Partie C — Prévisions (5 points)
4. Calculer l'estimation à achèvement EAA = budget / CPI et le dépassement prévisible. (3 pts)
5. Estimer la durée finale si la tendance continue. (2 pts)

### Partie D — Actions (3 points)
6. Proposer trois actions correctives concrètes. (3 pts)`,
  corrige:`### Partie A — Grandeurs (4 pts)
1. **VP** : ce qu'on avait prévu de réaliser à cette date (en valeur du budget) ; **VA** : ce qu'on a réellement réalisé, valorisé au budget ; **CR** : ce que ces travaux ont réellement coûté. Exprimer tout en F permet de **cumuler** des tâches différentes et de séparer le problème de **délai** (VA vs VP) du problème de **coût** (VA vs CR). *(4 pts)*

### Partie B — Écarts (8 pts)
2. ED = 28 − 32 = **− 4 M** ; SPI = 28 / 32 = **0,875** < 1 → **retard** : on ne réalise que 87,5 % de ce qui était prévu. *(4 pts)*
3. EC = 28 − 30,5 = **− 2,5 M** ; CPI = 28 / 30,5 = **0,918** < 1 → **dépassement** : chaque 1 000 F dépensés ne produisent que 918 F de travaux. *(4 pts)*

### Partie C — Prévisions (5 pts)
4. EAA = 84 / 0,918 = **91,5 M** → **7,5 M de dépassement** prévisible (≈ 9 %). *(3 pts)*
5. 12 / 0,875 = **13,7 mois** → environ **1,7 mois de retard**. *(2 pts)*

### Partie D — Actions (3 pts)
6. Analyser les **tâches critiques** en retard et renforcer les équipes (ou travailler par zones) ; sécuriser les **approvisionnements** ; contrôler les **rendements** et les **pertes** de matériaux ; renégocier les achats restants ; faire signer les avenants pour les travaux supplémentaires ; suivre VA/CR chaque mois. *(3 pts)*

> [!attention] Erreurs à éviter
> - Comparer CR à VP : on mélange retard et dépassement.
> - Se rassurer avec « 36 % du budget dépensé » sans regarder ce qui est fait.
> - Attendre la fin du chantier pour agir.`},
 exercices:[
  {t:"Indices d'un chantier", d:2, e:`Budget 60 M F sur 10 mois. Fin du mois 6 : VP = 36 M ; VA = 33 M ; CR = 31 M. Calculer ED, EC, SPI, CPI et l'estimation à l'achèvement. Interpréter.`, c:`ED = 33 − 36 = **− 3 M** ; SPI = 33 / 36 = **0,92** → **retard** (≈ 8 %).
EC = 33 − 31 = **+ 2 M** ; CPI = 33 / 31 = **1,06** → **économie** : les travaux réalisés coûtent moins que prévu.
EAA = 60 / 1,06 ≈ **56,4 M**. Le chantier est rentable mais en retard : on peut investir une partie de l'économie dans un renfort d'équipes pour rattraper le délai.`},
  {t:"Calculer la valeur acquise", d:1, e:`Lots et budgets : gros œuvre 30 M (avancement 70 %) ; toiture 8 M (25 %) ; second œuvre 22 M (0 %). Calculer la valeur acquise.`, c:`VA = 30 × 0,70 + 8 × 0,25 + 22 × 0 = 21 + 2 = **23 M F**.`},
  {t:"Durée prévisible", d:1, e:`Un chantier prévu en 14 mois présente un SPI de 0,875 au mois 6. Estimer la durée totale si rien ne change.`, c:`Durée ≈ 14 / 0,875 = **16 mois** (2 mois de retard).`},
  {t:"Lire les indices", d:2, e:`Interpréter chaque situation : a) SPI = 1,05 ; CPI = 0,90 ; b) SPI = 0,85 ; CPI = 1,10 ; c) SPI = 0,80 ; CPI = 0,85.`, c:`a) **En avance mais trop cher** (on accélère peut-être à coup d'heures supplémentaires coûteuses) ;
b) **En retard mais économique** (peut-être des équipes insuffisantes) ;
c) **En retard et trop cher** : situation critique, plan d'action urgent (organisation, rendements, approvisionnements, reprises).`},
  {t:"Le piège des dépenses", d:2, e:`Un conducteur de travaux se réjouit : « au mois 5, nous avons dépensé 18 M pour un budget prévu à date de 25 M ». L'avancement réel est de 30 % d'un budget total de 60 M. Qu'en penser ?`, c:`VA = 0,30 × 60 = **18 M** ; VP = 25 M ; CR = 18 M.
SPI = 18 / 25 = **0,72** → fort **retard** ; CPI = 18 / 18 = **1,00** → coûts conformes.
La « sous-consommation » du budget ne traduit pas une économie mais un **retard de 28 %** : il faut agir sur l'avancement.`}
 ],
 quiz:[
  {q:"La valeur acquise est :", o:["Le budget des travaux réellement faits","Ce qu'on a dépensé","Ce qu'on devait faire","Le bénéfice"], r:0, e:"Avancement × budget."},
  {q:"Un SPI inférieur à 1 indique :", o:["Un retard","Une avance","Une économie","Un bénéfice"], r:0, e:"VA < VP."},
  {q:"CPI = 0,8 signifie :", o:["Les travaux coûtent plus que prévu","Les travaux coûtent moins que prévu","Le chantier est en avance","Rien"], r:0, e:"VA < CR."},
  {q:"Estimation à l'achèvement pour BAC = 50 M et CPI = 0,9 :", o:["≈ 55,6 M","45 M","50 M","90 M"], r:0, e:"50 / 0,9."},
  {q:"L'avancement doit être mesuré :", o:["Physiquement (métrés, pourcentages)","D'après les dépenses","Au hasard","Seulement à la fin"], r:0, e:"Sinon on confond retard et économie."}
 ]},
{id:"chant-17", niv:3, titre:"Étude de cas : préparer et piloter le chantier d'une villa", duree:70, contenu:`## Le projet
La villa de plain-pied à toiture-terrasse étudiée en Métré (11,30 × 8,30 m) : marché de **19 832 641 F HT** (23,4 M F TTC), délai contractuel de **5 mois**, démarrage en début de saison sèche. L'entreprise applique un coefficient de vente K = 1,355 → **déboursé sec objectif ≈ 14,64 M F**.

## 1. Le planning
Le planning du chapitre « Planning » (11 tâches) donne **90 jours ouvrés** ; avec 5,5 jours de travail par semaine et 15 % d'aléas : ≈ **19 semaines**, compatibles avec les 5 mois du marché. Chemin critique : installation → terrassements → fondations → élévation → dalle et étanchéité → enduits → carrelage → peinture → réception.
Chiffre d'affaires moyen : 19 832 641 / 90 ≈ **220 000 F HT par jour ouvré** : chaque jour de retard coûte aussi en frais fixes de chantier.

## 2. Les équipes
Élévation (tâche D) : 17,58 m³ de béton armé à 25 h/m³ = 440 h ; 140,72 m² de maçonnerie à 1,6 h/m² (binôme) = 225 h → **≈ 665 heures**. Avec 8 ouvriers (64 h/jour), 665 / 64 ≈ **10,4 jours** : la durée de 25 jours du planning laisse une marge confortable, qu'on peut utiliser pour **réduire l'effectif** ou **raccourcir** le chantier.

## 3. Les approvisionnements
Ciment : **324 sacs** répartis en trois phases (93 / 141 / 89 sacs, voir Métré) ; sable 31,5 m³ ; gravier 27,7 m³ ; aciers 2,1 t ; 2 173 agglos ; carrelage, menuiseries et équipements commandés dès la préparation (délais longs).

## 4. La trésorerie
Avance de démarrage 10 % (1,98 M), situations mensuelles payées le mois suivant à 85 % (retenue 5 % et remboursement de l'avance 10 %), déboursés = montant facturé / 1,355 :
| Mois | Travaux (M F HT) | Déboursés | Encaissements | Trésorerie fin de mois |
|---|---|---|---|---|
| 0 (avance) | — | — | 1,98 | 1,98 |
| 1 : installation, terrassements, fondations | 4,17 | 3,08 | 0 | **− 1,09** |
| 2 : élévation, maçonnerie | 6,13 | 4,53 | 3,54 | **− 2,08** |
| 3 : toiture-terrasse, enduits, revêtements | 5,10 | 3,77 | 5,21 | **− 0,63** |
| 4 : menuiseries, électricité, plomberie, peinture | 4,43 | 3,27 | 4,34 | **+ 0,44** |
| 5 : encaissement de la dernière situation | — | — | 3,76 | **+ 4,20** |
Besoin de financement maximal : **≈ 2,1 M F** au mois 2 ; la retenue de garantie (≈ 1 M) sera récupérée un an après la réception.

## 5. Les risques principaux et leurs parades
| Risque | Parade |
|---|---|
| Retard des menuiseries aluminium | Commande sur plans en préparation, précadres |
| Pluies précoces | Démarrage en saison sèche, toiture-terrasse prioritaire, bâches |
| Mauvais sol découvert en fouille | Réception des fonds de fouille, attachement, avis du géotechnicien |
| Pertes et vols de ciment | Magasin fermé, inventaires hebdomadaires |
| Chute de hauteur au coulage de la dalle | Garde-corps périphériques, trémies protégées |

> [!retenir]
> Préparer (planning, équipes, approvisionnements, trésorerie, risques), puis piloter chaque semaine (avancement, coûts, qualité, sécurité) : c'est le métier du conducteur de travaux.`,
 sujet:{titre:"Étude de cas : préparer et piloter le chantier d'une villa de A à Z", duree:180, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes conducteur de travaux d'une petite entreprise et préparez le chantier d'une villa de plain-pied à Bingerville.

**Quantités et rendements**

| Tâche | Quantité | Rendement / temps unitaire | Équipe |
|---|---|---|---|
| A Installation, implantation | — | 3 jours | — |
| B Fouilles manuelles | 45 m³ | 3 m³/jour par manœuvre | 6 manœuvres |
| C Fondations (béton armé) | 12 m³ | 20 h/m³ | 6 ouvriers × 8 h |
| D Maçonnerie d'élévation | 280 m² | 10 m²/jour par binôme | 3 binômes |
| E Poteaux, chaînages, dalle | 28 m³ | 25 h/m³ | 8 ouvriers × 8 h |
| F Toiture et étanchéité | — | 6 jours (sous-traitant) | — |
| G Réseaux encastrés | — | 5 jours (sous-traitants) | — |
| H Enduits | 720 m² | 0,8 h/m² | 6 ouvriers × 8 h |
| I Carrelage | 150 m² | 12 m²/jour par carreleur | 2 carreleurs |
| J Peinture | 900 m² | 40 m²/jour par peintre | 3 peintres |
| K Nettoyage, réception | — | 2 jours | — |

Enchaînement : A → B → C → D → E → (F et G en parallèle) → H (après F et G) → I → J → K.
**Salaires journaliers chargés** : maçon **8 500 F**, manœuvre **4 500 F**.
**Ciment** : béton **7 sacs/m³** ; maçonnerie **0,09 sac/m²** ; enduits **0,13 sac/m²** ; pertes **5 %**.

### Partie A — Durées (6 points)
1. Calculer la durée de chaque tâche (arrondie au jour supérieur). (6 pts)

### Partie B — Planning (6 points)
2. Calculer les dates de début et de fin, la durée totale et le chemin critique. Quelle est la marge de G ? (4 pts)
3. Le chantier doit être livré en **65 jours**. Proposer deux moyens réalistes d'y parvenir. (2 pts)

### Partie C — Ressources (5 points)
4. Calculer le coût de main-d'œuvre de la maçonnerie (3 binômes maçon + manœuvre) et par m². (2 pts)
5. Calculer le nombre de sacs de ciment pour C, D, E et H. (3 pts)

### Partie D — Pilotage (3 points)
6. Quels documents mettre en place pour suivre ce chantier au quotidien et chaque semaine ? (3 pts)`,
  corrige:`### Partie A — Durées (6 pts)
1. *(6 pts)*

| Tâche | Calcul | Durée (j) |
|---|---|---|
| A | donnée | 3 |
| B | 45 / (3 × 6) = 2,5 | 3 |
| C | 12 × 20 / 48 = 5,0 | 5 |
| D | 280 / (10 × 3) = 9,3 | 10 |
| E | 28 × 25 / 64 = 10,9 | 11 |
| F | donnée | 6 |
| G | donnée | 5 |
| H | 720 × 0,8 / 48 = 12,0 | 12 |
| I | 150 / 24 = 6,25 | 7 |
| J | 900 / 120 = 7,5 | 8 |
| K | donnée | 2 |

### Partie B — Planning (6 pts)
2. A 0-3 ; B 3-6 ; C 6-11 ; D 11-21 ; E 21-32 ; F 32-38 ; G 32-37 ; H 38-50 ; I 50-57 ; J 57-65 ; K 65-67 → **67 jours**. Chemin critique : **A-B-C-D-E-F-H-I-J-K** ; marge de G : 38 − 37 = **1 jour**. *(4 pts)*
3. Gagner 2 jours : un **4e binôme** en maçonnerie (280 / 40 = 7 jours, − 3 j), ou une équipe supplémentaire sur E ; faire démarrer les **enduits par zones** dès que F est terminé dans une partie ; ajouter un **3e carreleur** (150 / 36 = 4,2 → 5 j, − 2 j). *(2 pts)*

### Partie C — Ressources (5 pts)
4. Un binôme : 8 500 + 4 500 = 13 000 F/jour ; 3 binômes × 10 jours = **390 000 F** → **≈ 1 390 F/m²**. *(2 pts)*
5. Béton : (12 + 28) × 7 = 280 ; maçonnerie : 280 × 0,09 = 25,2 ; enduits : 720 × 0,13 = 93,6 → 398,8 sacs + 5 % → **419 sacs** (≈ 21 t), à livrer par lots selon le planning. *(3 pts)*

### Partie D — Pilotage (3 pts)
6. **Journal de chantier** (quotidien) ; **planning** mis à jour chaque semaine (avancement réel / prévu) ; **compte rendu** de réunion hebdomadaire ; **tableau de bord** (dépenses / budget, effectifs, sécurité, qualité) ; planning des **approvisionnements** ; fiches de contrôle (points d'arrêt) ; **attachements** pour les ouvrages cachés. *(3 pts)*

> [!attention] Erreurs à éviter
> - Oublier les tâches en parallèle et leur marge.
> - Planifier sans vérifier les approvisionnements (ciment, aciers, menuiseries).
> - Raccourcir le planning sur le papier sans moyens supplémentaires réels.`},
 exercices:[
  {t:"Vérifier la durée de l'élévation", d:2, e:`L'élévation représente 17,58 m³ de béton armé (25 h/m³) et 140,72 m² de maçonnerie (1,6 h/m² pour le binôme). Combien de jours avec 6 ouvriers ? avec 10 ouvriers ? (8 h par jour)`, c:`Heures : 17,58 × 25 + 140,72 × 1,6 = 439,5 + 225,2 = **664,7 h**.
6 ouvriers (48 h/j) : 664,7 / 48 = **13,8 → 14 jours** ; 10 ouvriers (80 h/j) : **8,3 → 9 jours** (à condition que les approvisionnements et le matériel suivent).`},
  {t:"Gagner trois semaines", d:2, e:`Le client voudrait emménager 3 semaines (≈ 16 jours ouvrés) plus tôt. Proposer des actions sur le chemin critique, à partir du planning (90 jours) et de l'exercice précédent.`, c:`- **Élévation** : passer de 25 à 14 jours avec 6 ouvriers (− 11 jours) ;
- **Enduits** : ajouter un binôme (14 → 10 jours, − 4 jours) ;
- **Carrelage** : deux équipes par zones (10 → 6 jours, − 4 jours), en vérifiant le séchage ;
Gain ≈ 19 jours > 16 jours visés, sans toucher aux délais techniques (décoffrage, cure, séchage). On vérifie que F (réseaux) et H (menuiseries) ne deviennent pas critiques.`},
  {t:"Trésorerie sans avance", d:3, e:`Reprendre le tableau de trésorerie sans avance de démarrage : il n'y a alors plus de remboursement d'avance, et les situations sont encaissées à 95 % (retenue de garantie de 5 % seulement). Calculer la trésorerie de fin de mois et le besoin de financement maximal.`, c:`| Mois | Déboursés | Encaissements (95 % du mois précédent) | Trésorerie |
|---|---|---|---|
| 1 | 3,08 | 0 | **− 3,08** |
| 2 | 4,53 | 3,96 | **− 3,64** |
| 3 | 3,77 | 5,83 | **− 1,58** |
| 4 | 3,27 | 4,85 | **0,00** |
| 5 | 0 | 4,21 | **+ 4,20** |
Besoin maximal : **≈ 3,6 M F** au mois 2, contre 2,1 M avec l'avance : l'avance de démarrage est précieuse pour une petite entreprise ; à défaut, il faut négocier un découvert bancaire.`},
  {t:"Point mensuel", d:2, e:`Fin du mois 2 : travaux prévus cumulés (VP) 10,30 M ; avancement réel valorisé (VA) 9,10 M ; déboursés réels 7,20 M, alors que le déboursé objectif de ces travaux était 9,10 / 1,355 = 6,72 M. Commenter le délai et le coût.`, c:`Délai : SPI = 9,10 / 10,30 = **0,88** → retard d'environ 12 %.
Coût : déboursés réels 7,20 M pour un objectif de 6,72 M → **dépassement de 0,48 M (7 %)** : la marge prévue se réduit.
Actions : analyser les rendements et les pertes de matériaux de l'élévation, renforcer les équipes sur le chemin critique, surveiller la consommation de ciment et d'aciers.`},
  {t:"Préparer la réception", d:1, e:`À deux semaines de la fin, lister les actions du conducteur de travaux pour une réception réussie.`, c:`Faire une **pré-réception** interne (liste des défauts) et les corriger ; réaliser les **essais** (étanchéité, pression des réseaux, électricité, fonctionnement des équipements) ; nettoyer le chantier et replier l'installation ; préparer le **DOE** (plans conformes, notices, PV d'essais) ; organiser la visite de réception avec le maître d'œuvre et le client, puis lever rapidement les **réserves**.`}
 ],
 quiz:[
  {q:"Le déboursé sec objectif d'un marché de 20 M avec K = 1,25 vaut :", o:["16 M","25 M","20 M","1,25 M"], r:0, e:"20 / 1,25."},
  {q:"Pour raccourcir un chantier, on agit sur :", o:["Les tâches du chemin critique","Les tâches à grande marge","La cure du béton","Le délai de séchage"], r:0, e:"Seules elles décident de la fin."},
  {q:"Le besoin de financement est maximal en général :", o:["Au cœur du chantier, quand les dépenses sont fortes","Le premier jour","Après la réception","Jamais"], r:0, e:"Décalage des paiements."},
  {q:"Le DOE est remis :", o:["À la réception","Au démarrage","Jamais","Avant le permis"], r:0, e:"Dossier des ouvrages exécutés."},
  {q:"Une marge de 15 % pour aléas sur 90 jours ouvrés donne environ :", o:["104 jours","90 jours","75 jours","150 jours"], r:0, e:"90 × 1,15."}
 ]}
]});
