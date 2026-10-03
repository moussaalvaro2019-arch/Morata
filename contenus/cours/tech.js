/* =====================================================================
   Technologie de construction — cours complet (3 niveaux)
   Débutant : acteurs et étapes, anatomie d'un bâtiment, systèmes
              constructifs, implantation, fondations superficielles, maçonnerie
   Intermédiaire : béton armé sur chantier, planchers, escaliers, toitures
              inclinées, étanchéité, menuiseries, finitions, équipements
   Avancé : fondations profondes et ouvrages enterrés, immeubles,
            ossatures métal et bois, construction durable, pathologies,
            contrôles et réception
   ===================================================================== */
A.addMatiere({
 id:"tech",
 titre:"Technologie de construction",
 court:"Technologie",
 groupe:"constr",
 icone:"hammer",
 couleur:"#E8752A",
 niveau:"Débutant",
 heures:70,
 ordre:2,
 resume:"Comment se construit un bâtiment, du terrain nu à la réception : acteurs et étapes, systèmes constructifs, implantation, fondations, maçonnerie, béton armé sur chantier, planchers, escaliers, toitures, étanchéité, menuiseries, finitions, équipements, immeubles, ossatures métal et bois, construction durable, pathologies et contrôles, avec applications et exercices corrigés.",
 objectifs:[
  "Identifier les intervenants et les étapes d'un projet",
  "Nommer et situer tous les ouvrages d'un bâtiment",
  "Choisir un système constructif et des fondations adaptés",
  "Connaître la mise en œuvre et les règles de l'art de chaque ouvrage",
  "Organiser l'ordre d'intervention des corps d'état",
  "Diagnostiquer les désordres courants et contrôler l'exécution"
 ],
 applications:[
  "Lire un descriptif de travaux et un plan d'exécution",
  "Implanter et suivre un chantier de maison",
  "Dimensionner un escalier, une pente de toiture, une forme de pente",
  "Dialoguer avec architectes, bureaux d'études et artisans",
  "Réceptionner des ouvrages et rédiger des réserves"
 ],
 chapitres:[
{id:"tech-1", niv:1, titre:"Les acteurs et les étapes d'un projet de construction", duree:50, contenu:`## Qui fait quoi ?
| Acteur | Rôle |
|---|---|
| **Maître d'ouvrage** (MOA) | Le client : il définit le besoin, finance, signe les marchés et reçoit l'ouvrage |
| **Maître d'œuvre** (MOE) | Souvent l'**architecte** : conçoit le projet, établit les plans, consulte les entreprises, dirige et contrôle les travaux |
| **Bureau d'études techniques** (BET) | Calcule la structure (béton armé), les fluides (électricité, plomberie, climatisation), la VRD |
| **Bureau de contrôle** | Vérifie, pour le MOA, la solidité et la sécurité des ouvrages (obligatoire pour les établissements recevant du public et les immeubles) |
| **Géotechnicien** | Étudie le sol et recommande les fondations |
| **Géomètre** | Borne le terrain, fait les levés et l'implantation |
| **Entreprises** (générale ou par lots) | Réalisent les travaux avec leurs ouvriers, sous-traitants et tâcherons |
| **Coordonnateur sécurité** | Prévient les risques quand plusieurs entreprises interviennent |
| **Administration** | Instruit le permis de construire, contrôle la conformité, délivre les autorisations |

## Les étapes d'un projet
1. **Programme et faisabilité** : besoin, budget, terrain (document foncier : ACD, titre foncier), règles d'urbanisme.
2. **Conception** : esquisse → avant-projet sommaire (**APS**) → avant-projet définitif (**APD**) → dossier de **permis de construire**.
3. **Projet** (PRO) et **dossier de consultation des entreprises** (DCE) : plans détaillés, CCTP, cadre de devis (BPU, DQE).
4. **Consultation et choix des entreprises** (ACT) : analyse des offres, signature des marchés.
5. **Préparation** du chantier : plans d'exécution (EXE), planning, installation de chantier.
6. **Exécution des travaux** (DET : direction de l'exécution par le MOE) : réunions de chantier hebdomadaires, comptes rendus, situations.
7. **Réception** (AOR) : constat des travaux, réserves, levée des réserves, dossier des ouvrages exécutés (DOE), garanties.

## Le gros œuvre et le second œuvre
- **Gros œuvre** : ce qui assure la stabilité et le **clos et couvert** : terrassements, fondations, structure, murs, planchers, toiture.
- **Second œuvre** (corps d'état secondaires) : menuiseries, électricité, plomberie, climatisation, faux plafonds, revêtements, peinture…

## Le budget d'une opération
Le coût des **travaux** n'est qu'une partie du coût total : il faut ajouter le terrain, les **honoraires** (architecte 6 à 10 % des travaux, BET, bureau de contrôle, géotechnicien, géomètre), les taxes et frais administratifs, les branchements (eau, électricité), l'assurance, les aléas.
> [!exemple] Budget d'une villa
> Travaux : 60 M F ; architecte 8 % = 4,8 M ; BET 2 % = 1,2 M ; contrôle 1,5 % = 0,9 M ; étude de sol 0,6 M ; branchements et taxes 2,5 M ; aléas 5 % des travaux = 3 M.
> **Coût de l'opération hors terrain : 73 M F**, soit 22 % de plus que les seuls travaux.

> [!attention]
> Construire sans permis, sans plans d'un professionnel ou sans étude de sol est la première cause des effondrements de bâtiments. Le permis et le contrôle ne sont pas des formalités : ils protègent les occupants.

> [!retenir]
> - Le MOA décide et paie, le MOE conçoit et contrôle, l'entreprise construit, le bureau de contrôle vérifie la sécurité.
> - Étapes : programme → esquisse, APS, APD, permis → PRO, DCE → consultation → préparation → travaux → réception.
> - Coût d'opération = travaux + honoraires + taxes + branchements + aléas (+ terrain).`,
 sujet:{titre:"Les acteurs, les étapes et le budget d'une opération : une clinique à Daloa", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un groupe de médecins veut construire une petite clinique à Daloa. Ils vous demandent d'expliquer qui intervient, dans quel ordre, et combien coûtera réellement l'opération.

**Données budgétaires**
- Travaux estimés : **180 millions F HT** ;
- Honoraires : architecte **7 %**, bureau d'études techniques (BET) **2,5 %**, bureau de contrôle **1,2 %** des travaux ;
- Étude de sol **1,5 M F** ; géomètre **0,8 M F** ; branchements (eau, électricité) et taxes **4,5 M F** ;
- Aléas : **5 %** des travaux.

### Partie A — Les acteurs (6 points)
1. Définir maître d'ouvrage et maître d'œuvre. Qui est qui dans ce projet ? (2 pts)
2. Donner le rôle de : l'architecte, le BET, le bureau de contrôle, le géotechnicien, le géomètre, l'entreprise. (4 pts)

### Partie B — Les étapes (6 points)
3. Remettre dans l'ordre : appel d'offres, esquisse, réception, permis de construire, APD, programme, exécution des travaux, APS, DCE, signature des marchés. (4 pts)
4. Pourquoi le programme doit-il être précis dès le départ ? (2 pts)

### Partie C — Gros œuvre et second œuvre (3 points)
5. Classer en gros œuvre ou second œuvre : fondations, carrelage, poteaux, menuiseries, dalles, électricité, maçonnerie, peinture, charpente, plomberie. (3 pts)

### Partie D — Budget (5 points)
6. Calculer chaque poste annexe et le coût total de l'opération hors terrain. (4 pts)
7. De combien (en %) dépasse-t-il le seul montant des travaux ? (1 pt)`,
  corrige:`### Partie A — Acteurs (6 pts)
1. **Maître d'ouvrage** : celui qui commande et paie l'ouvrage (le groupe de médecins). **Maître d'œuvre** : celui qui conçoit et dirige les travaux pour lui (l'architecte, avec le BET). *(2 pts)*
2. *(4 pts)*
   - **Architecte** : conception, plans, permis, direction des travaux ;
   - **BET** : calculs de structure et des lots techniques (plans de béton armé, fluides) ;
   - **Bureau de contrôle** : vérifie la solidité et la sécurité (avis sur les plans, visites) ;
   - **Géotechnicien** : étude du sol et recommandations de fondations ;
   - **Géomètre** : levé du terrain, bornage, implantation ;
   - **Entreprise** : exécute les travaux selon le marché.

### Partie B — Étapes (6 pts)
3. Programme → esquisse → APS → APD → permis de construire → DCE → appel d'offres → signature des marchés → exécution des travaux → réception. *(4 pts)*
4. Tout changement tardif (nombre de lits, bloc opératoire, groupe électrogène) oblige à refaire les plans, retarde et coûte cher ; une clinique a aussi des normes sanitaires précises. *(2 pts)*

### Partie C — Classement (3 pts)
5. **Gros œuvre** : fondations, poteaux, dalles, maçonnerie, charpente (structure de la couverture). **Second œuvre** : carrelage, menuiseries, électricité, peinture, plomberie. *(3 pts)*

### Partie D — Budget (5 pts)
6. *(4 pts)*

| Poste | Calcul | M F |
|---|---|---|
| Travaux | | 180,00 |
| Architecte | 7 % | 12,60 |
| BET | 2,5 % | 4,50 |
| Bureau de contrôle | 1,2 % | 2,16 |
| Étude de sol | | 1,50 |
| Géomètre | | 0,80 |
| Branchements et taxes | | 4,50 |
| Aléas | 5 % | 9,00 |
| **Total hors terrain** | | **215,06** |

7. 35,06 / 180 = **+ 19,5 %** : un budget limité aux travaux est toujours sous-estimé. *(1 pt)*

> [!attention] Erreurs à éviter
> - Confondre maître d'ouvrage et maître d'œuvre.
> - Oublier les honoraires, les études et les branchements dans le budget.
> - Démarrer les travaux avant le permis de construire.`},
 exercices:[
  {t:"Qui fait quoi ?", d:1, e:`Indiquer l'acteur concerné : a) calcule les sections d'acier d'une poutre ; b) signe le marché et paie les situations ; c) dessine les plans du permis de construire ; d) recommande des pieux ; e) implante les axes du bâtiment ; f) vérifie la sécurité incendie d'une école pour le compte du client.`, c:`a) **BET structure** ; b) **maître d'ouvrage** ; c) **architecte** (maître d'œuvre) ; d) **géotechnicien** ; e) **géomètre** ; f) **bureau de contrôle**.`},
  {t:"Remettre les étapes dans l'ordre", d:1, e:`Classer : réception ; APD ; consultation des entreprises ; esquisse ; exécution des travaux ; permis de construire ; DCE ; APS ; préparation du chantier.`, c:`Esquisse → **APS** → **APD** → **permis de construire** → **DCE** → **consultation des entreprises** → **préparation du chantier** → **exécution des travaux** → **réception**.`},
  {t:"Durée d'un projet", d:2, e:`Études jusqu'au permis : 3 mois ; instruction du permis : 2 mois ; DCE et consultation : 1,5 mois ; préparation : 1 mois ; travaux : 10 mois ; levée des réserves : 1 mois. Si les études commencent en janvier, quand le bâtiment peut-il être occupé ? Quelle tâche peut se faire en parallèle pour gagner du temps ?`, c:`Total : 3 + 2 + 1,5 + 1 + 10 + 1 = **18,5 mois** → occupation vers **mi-juillet de l'année suivante**.
Le **DCE** peut être préparé pendant l'instruction du permis (gain jusqu'à 1,5 mois), à condition de ne signer les marchés qu'une fois le permis obtenu.`},
  {t:"Budget d'opération", d:2, e:`Travaux estimés à 45 M F. Honoraires : architecte 7 %, BET 2 %, bureau de contrôle 1,2 % ; étude de sol 0,5 M ; géomètre 0,3 M ; branchements et taxes 1,8 M ; aléas 5 % des travaux. Calculer le coût de l'opération hors terrain et le surcoût par rapport aux travaux.`, c:`Architecte 3,15 M ; BET 0,9 M ; contrôle 0,54 M ; sol 0,5 M ; géomètre 0,3 M ; branchements et taxes 1,8 M ; aléas 2,25 M → **9,44 M**.
Coût de l'opération : 45 + 9,44 = **54,44 M F** (+ **21 %**).`},
  {t:"Situations de chantier", d:2, e:`Pendant les travaux, le client demande au maçon de supprimer un poteau pour agrandir le salon. Qui doit être consulté, et pourquoi ? Même question si une fissure oblique apparaît sur une poutre.`, c:`Dans les deux cas : le **maître d'œuvre**, qui saisit le **BET structure** (recalcul : un poteau supprimé double la portée de la poutre, donc multiplie son moment par environ 4) et informe le **bureau de contrôle**. Le maçon ne doit rien modifier sans plan validé. Pour la fissure, on étaie par précaution en attendant le diagnostic.`}
 ],
 quiz:[
  {q:"Le maître d'ouvrage est :", o:["Le client qui finance","L'architecte","L'entreprise","Le géomètre"], r:0, e:"Propriétaire du projet."},
  {q:"Le DCE sert à :", o:["Consulter les entreprises","Implanter le bâtiment","Calculer les aciers","Payer les ouvriers"], r:0, e:"Plans, CCTP et cadre de devis."},
  {q:"La toiture fait partie :", o:["Du gros œuvre","Du second œuvre","Des VRD","De la décoration"], r:0, e:"Elle assure le couvert."},
  {q:"Le bureau de contrôle travaille pour :", o:["Le maître d'ouvrage","L'entreprise","Le fournisseur","Le voisin"], r:0, e:"Il vérifie la solidité et la sécurité."},
  {q:"L'APD vient :", o:["Après l'APS","Avant l'esquisse","Après la réception","Après les travaux"], r:0, e:"Avant-projet définitif."}
 ]},
{id:"tech-10", niv:1, titre:"Anatomie d'un bâtiment : vocabulaire et ouvrages", duree:45, contenu:`## Infrastructure et superstructure
- **Infrastructure** : tout ce qui est sous le niveau du rez-de-chaussée : fondations, longrines, soubassement, sous-sol, dallage.
- **Superstructure** : tout ce qui est au-dessus : poteaux, murs, planchers, escaliers, toiture.

!fig:coupe-type|Coupe type d'une maison : de la fondation à la toiture

## Les ouvrages, de bas en haut
| Ouvrage | Rôle |
|---|---|
| **Semelle** | Répartir la charge d'un poteau ou d'un mur sur le sol |
| **Amorce de poteau** | Partie du poteau entre semelle et longrine |
| **Longrine** | Poutre basse reliant les semelles, portant le soubassement |
| **Soubassement** | Maçonnerie basse (agglos pleins) entre longrine et dallage |
| **Hérisson, dallage** | Sol du rez-de-chaussée sur terre-plein |
| **Poteau** | Élément vertical porteur |
| **Poutre** | Élément horizontal porteur qui franchit une portée |
| **Chaînage** | Ceinture en béton armé liant les murs |
| **Linteau, appui, tableau** | Dessus, dessous et côtés d'une baie |
| **Plancher, dalle** | Sol d'un étage, toit-terrasse |
| **Acrotère** | Petit mur en rive de terrasse (relevé d'étanchéité, sécurité) |
| **Charpente, couverture** | Toiture en pente |
| **Escalier** | Liaison verticale entre niveaux |

## Porteur ou non porteur ?
- **Éléments porteurs** (structure) : fondations, poteaux, poutres, voiles, planchers, murs porteurs. On ne les modifie **jamais** sans étude.
- **Éléments non porteurs** : cloisons, remplissages entre poteaux (dans une ossature), faux plafonds, menuiseries.

## Les niveaux et les hauteurs
- **RDC**, **R+1**, **R+2**… ; **sous-sol** (S-1) ; **combles**, **terrasse**.
- **Hauteur sous plafond** (HSP) : du sol fini au plafond fini (2,50 à 3,00 m en habitation ; plus en climat chaud pour la ventilation).
- **Hauteur d'étage** : HSP + épaisseur du plancher (et des revêtements).
> [!exemple] Immeuble R+2 à toiture-terrasse
> Sol fini RDC ±0,00 (le terrain naturel est à −0,30) ; HSP 2,80 m ; planchers 0,20 m → hauteur d'étage 3,00 m.
> Planchers bruts : R+1 à +3,00 ; R+2 à +6,00 ; terrasse à +9,00 ; acrotère de 0,60 m → sommet à **+9,60**, soit **9,90 m** au-dessus du terrain naturel.

## Le clos et le couvert
Le bâtiment est **hors d'eau** quand la toiture est posée, **hors d'air** quand les menuiseries extérieures sont posées : le second œuvre intérieur peut alors commencer sans risque.

> [!retenir]
> - Infrastructure (sous le RDC) / superstructure (au-dessus).
> - Porteurs : fondations, poteaux, poutres, voiles, planchers ; non porteurs : cloisons, remplissages.
> - Hauteur d'étage = HSP + épaisseur du plancher.`,
 sujet:{titre:"Anatomie d'un immeuble R+3 : vocabulaire, niveaux et hauteurs", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un immeuble R+3 à toiture-terrasse est en projet à Koumassi. Vous devez présenter ses ouvrages et calculer ses niveaux.

**Données**
- Sol fini du RDC : **± 0,00** ; terrain naturel : **− 0,45** ;
- Hauteur sous plafond (HSP) : **2,85 m** à tous les niveaux ; épaisseur des planchers (brut + revêtement) : **0,20 m** ;
- Acrotère de **0,80 m** au-dessus du plancher terrasse.

### Partie A — Vocabulaire (8 points)
1. Classer en infrastructure ou superstructure : semelles, longrines, poteaux, dallage, poutres, planchers, acrotère, amorces de poteaux, soubassement, linteaux. (4 pts)
2. Citer les ouvrages d'un bâtiment de bas en haut (au moins huit). (4 pts)

### Partie B — Porteur ou non porteur (4 points)
3. Dans une ossature poteaux-poutres avec remplissage en agglos, les murs sont-ils porteurs ? Peut-on en supprimer un sans précaution ? Et un poteau ? (4 pts)

### Partie C — Niveaux (6 points)
4. Calculer la hauteur d'étage. (1 pt)
5. Calculer les niveaux des planchers R+1, R+2, R+3 et terrasse. (3 pts)
6. Calculer l'altitude du sommet de l'acrotère et la hauteur totale au-dessus du terrain naturel. (2 pts)

### Partie D — Clos et couvert (2 points)
7. Que signifie « bâtiment clos et couvert » ? Pourquoi est-ce une étape importante ? (2 pts)`,
  corrige:`### Partie A — Vocabulaire (8 pts)
1. **Infrastructure** : semelles, longrines, amorces de poteaux, soubassement, dallage (sur terre-plein). **Superstructure** : poteaux, poutres, planchers, acrotère, linteaux. *(4 pts)*
2. Fondations (semelles) → amorces et longrines → soubassement → dallage → poteaux et murs → linteaux et chaînages → poutres et planchers → escaliers → toiture ou terrasse (acrotère, étanchéité) → menuiseries et finitions. *(4 pts)*

### Partie B — Porteur (4 pts)
3. Les murs de remplissage ne portent pas les planchers (ce sont les poteaux et poutres) : on peut en déplacer un, mais il participe parfois au contreventement et porte ses propres réseaux — avis du BET recommandé. Un **poteau** porte les étages : on ne le supprime **jamais** sans étude et renforcement (poutre de reprise). *(4 pts)*

### Partie C — Niveaux (6 pts)
4. 2,85 + 0,20 = **3,05 m**. *(1 pt)*
5. R+1 : **+ 3,05** ; R+2 : **+ 6,10** ; R+3 : **+ 9,15** ; terrasse : **+ 12,20**. *(3 pts)*
6. Sommet de l'acrotère : 12,20 + 0,80 = **+ 13,00** ; au-dessus du TN : 13,00 + 0,45 = **13,45 m**. *(2 pts)*

### Partie D — Clos et couvert (2 pts)
7. Le bâtiment est fermé (menuiseries extérieures posées) et couvert (toiture ou étanchéité faite) : il est **hors d'eau et hors d'air**, on peut commencer les finitions intérieures sans risque de les abîmer. *(2 pts)*

> [!attention] Erreurs à éviter
> - Confondre HSP et hauteur d'étage.
> - Compter les niveaux depuis le terrain naturel au lieu du ± 0,00.
> - Démolir une cloison sans vérifier si elle porte ou contrevente.`},
 exercices:[
  {t:"Infrastructure ou superstructure ?", d:1, e:`Classer : semelle ; poteau du R+1 ; longrine ; acrotère ; dallage du RDC ; poutre de plancher ; soubassement ; escalier ; amorce de poteau.`, c:`**Infrastructure** : semelle, longrine, dallage du RDC, soubassement, amorce de poteau.
**Superstructure** : poteau du R+1, acrotère, poutre de plancher, escalier.`},
  {t:"Porteur ou non porteur ?", d:1, e:`Dans une maison à ossature poteaux-poutres, dire si l'on peut démolir sans étude : a) une cloison en agglos de 10 ; b) un poteau ; c) un mur de remplissage en agglos de 15 entre deux poteaux ; d) une poutre ; e) un faux plafond.`, c:`a) Oui (non porteur) ; b) **Non** ; c) en principe oui, mais il peut participer au contreventement : avis du BET conseillé ; d) **Non** ; e) oui.`},
  {t:"Hauteurs d'un R+3", d:2, e:`Immeuble R+3 : sol fini RDC à ±0,00, terrain naturel à −0,45 ; HSP 2,75 m ; planchers de 0,20 m et revêtements de 0,05 m. Calculer la hauteur d'étage, le niveau du sol fini du R+3 et la hauteur du bâtiment au-dessus du terrain naturel (acrotère de 0,80 m au-dessus de la dalle terrasse brute).`, c:`Hauteur d'étage : 2,75 + 0,20 + 0,05 = **3,00 m**.
Sol fini du R+3 : 3 × 3,00 = **+9,00**.
Dalle terrasse brute : sous-face du plafond du R+3 à +11,75, dessus de dalle à +11,95 → acrotère jusqu'à **+12,75** → **13,20 m** au-dessus du terrain naturel.`},
  {t:"Ordre d'exécution", d:2, e:`Remettre dans l'ordre d'exécution : dallage ; semelles ; poteaux du RDC ; béton de propreté ; longrines ; soubassement ; hérisson ; chaînage haut ; maçonnerie ; amorces ; plancher haut ; remblai compacté.`, c:`Béton de propreté → semelles → amorces → longrines → soubassement → remblai compacté → hérisson → dallage → poteaux du RDC → maçonnerie → chaînage haut → plancher haut.
(Selon les chantiers, la maçonnerie peut monter avant les poteaux, qui sont alors coulés dans les angles ; mais les fondations précèdent toujours l'élévation.)`},
  {t:"Hors d'eau, hors d'air", d:1, e:`Pourquoi attend-on que le bâtiment soit hors d'eau et hors d'air avant de poser les faux plafonds, l'électricité finale et les peintures intérieures ?`, c:`Parce que la pluie et le vent abîmeraient les plâtres, les appareillages et les peintures : il faut que la **toiture** (hors d'eau) et les **menuiseries extérieures** (hors d'air) soient posées pour protéger le second œuvre intérieur.`}
 ],
 quiz:[
  {q:"La longrine fait partie :", o:["De l'infrastructure","De la toiture","Du second œuvre","Des menuiseries"], r:0, e:"Elle relie les semelles."},
  {q:"Le dessus d'une baie s'appelle :", o:["Le linteau","L'appui","Le tableau","L'allège"], r:0, e:"Il franchit l'ouverture."},
  {q:"Une cloison en agglos de 10 est :", o:["Non porteuse","Toujours porteuse","Une fondation","Un poteau"], r:0, e:"Elle sépare les pièces."},
  {q:"Hauteur d'étage avec HSP 2,80 m et plancher de 0,20 m :", o:["3,00 m","2,60 m","2,80 m","3,20 m"], r:0, e:"2,80 + 0,20."},
  {q:"Le bâtiment est hors d'eau quand :", o:["La toiture est posée","Les fondations sont coulées","La peinture est finie","Le terrain est acheté"], r:0, e:"La pluie n'entre plus par le haut."}
 ]},
{id:"tech-2", niv:1, titre:"Les systèmes constructifs", duree:50, contenu:`## Les murs porteurs
Les murs (pierres, briques, BTC, agglos pleins) **portent** les planchers et la toiture et transmettent les charges aux fondations filantes. Économique pour les petits bâtiments, mais : ouvertures limitées, plans rigides, portées modestes (4 à 5 m). **Chaînages** horizontaux et verticaux obligatoires.

## L'ossature poteaux-poutres (portiques)
Le système le plus répandu en Afrique de l'Ouest : des **poteaux** et des **poutres** en béton armé forment une ossature qui porte les planchers ; les murs en agglos ne font que **remplir** (maçonnerie de remplissage). Avantages : grandes ouvertures, plans libres, étages possibles, transformations faciles des cloisons.
!fig:poteau-elevation|Poteau en élévation et ferraillage

## Les voiles en béton armé
Murs en béton armé coulés en place (banches) ou préfabriqués : très rigides, ils portent et **contreventent**. Utilisés pour les immeubles, les cages d'escaliers et d'ascenseurs, les sous-sols, les réservoirs.

## Les ossatures métalliques et bois
- **Métal** : hangars, entrepôts, usines, grandes portées (20 à 60 m), montage rapide, à protéger contre la corrosion et le feu.
- **Bois** : charpentes, maisons légères, constructions durables ; à protéger des termites et de l'humidité.

## Le cheminement des charges
Les charges suivent toujours le même chemin : **plancher → poutres → poteaux (ou murs) → fondations → sol**. Un poteau reprend la charge de sa **surface d'influence** (la moitié des travées qui l'entourent), à chaque niveau.
> [!exemple] Poteau intérieur d'un R+2
> Trame 4,00 × 5,00 m → surface d'influence **20 m²**. Plancher : G = 5 kN/m², Q = 1,5 kN/m² → charge ELU 1,35 × 5 + 1,5 × 1,5 = **9,0 kN/m²** → 180 kN par plancher ; 3 planchers (R+1, R+2, terrasse) → **≈ 540 kN** au pied du poteau du RDC (sans son poids propre).

## Le contreventement
Toute structure doit aussi résister aux **efforts horizontaux** (vent, séisme). Moyens : **voiles**, **palées triangulées** (croix de Saint-André), **portiques à nœuds rigides** ; les planchers jouent le rôle de **diaphragme** qui répartit les efforts entre ces éléments.

## Les joints
Un bâtiment long se dilate et se rétracte : on le coupe par des **joints de dilatation** environ tous les **25 à 30 m** (en climat chaud et sec, plutôt 25 m). Un **joint de rupture** (jusque dans les fondations) sépare deux blocs de hauteurs ou de sols très différents.

> [!exemple] Choisir un système
> - Maison R+1 à Yopougon avec de grandes baies : **portiques béton armé + remplissage en agglos de 15** ;
> - Entrepôt de 30 m de portée : **charpente métallique** ;
> - Immeuble R+8 : **portiques + voiles** de contreventement ;
> - Case de santé rurale économique : **murs porteurs en BTC** chaînés, toiture légère.

> [!attention]
> Dans un système poteaux-poutres, ne jamais supprimer un poteau ou couper une poutre pour agrandir une pièce sans l'avis d'un bureau d'études.

> [!retenir]
> - Murs porteurs, ossature poteaux-poutres, voiles, ossatures métal et bois.
> - Charges : plancher → poutres → poteaux → fondations → sol ; surface d'influence.
> - Contreventement contre vent et séisme ; joints de dilatation tous les 25 à 30 m.`,
 sujet:{titre:"Choisir un système constructif et suivre le cheminement des charges", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un bureau d'études vous confie quatre projets et une première descente de charges.

**Projets**
- P1 : maison R+1 à Yopougon avec de grandes baies vitrées ;
- P2 : entrepôt de 36 m de portée à Vridi ;
- P3 : immeuble R+9 au Plateau ;
- P4 : centre de santé rural économique près de Katiola.

**Descente de charges (projet R+3)**
- Poteau intérieur, trame **4,50 × 5,00 m** ;
- Chaque plancher : **G = 5,5 kN/m²**, **Q = 1,5 kN/m²** ; 4 planchers au-dessus du RDC (R+1, R+2, R+3, terrasse) ;
- Poteaux **25 × 25**, hauteur d'étage **3,05 m**, béton **25 kN/m³**.

### Partie A — Systèmes (8 points)
1. Comparer murs porteurs, ossature poteaux-poutres, voiles en béton armé et ossature métallique (avantages, limites). (4 pts)
2. Proposer un système pour chaque projet P1 à P4 et justifier. (4 pts)

### Partie B — Descente de charges (8 points)
3. Calculer la surface d'influence du poteau. (1 pt)
4. Calculer la charge ELU par m² de plancher puis par plancher. (3 pts)
5. Calculer la charge au pied du poteau du RDC, poids propre des 4 tronçons de poteau compris. (3 pts)
6. Pourquoi les poteaux sont-ils plus gros en bas qu'en haut ? (1 pt)

### Partie C — Stabilité (4 points)
7. Qu'est-ce que le contreventement ? Citer deux moyens de l'assurer. (2 pts)
8. Un bâtiment fait 64 m de long : combien de joints de dilatation prévoir ? Qu'est-ce qu'un joint de rupture ? (2 pts)`,
  corrige:`### Partie A — Systèmes (8 pts)
1. *(4 pts)*
   - **Murs porteurs** : économiques, simples ; ouvertures limitées, plans rigides, petits bâtiments ;
   - **Poteaux-poutres** : plans libres, grandes baies, étages ; remplissage non porteur ;
   - **Voiles** : très rigides (contreventement), immeubles hauts ; coffrages importants ;
   - **Métal** : grandes portées (20 à 60 m), montage rapide ; protection contre corrosion et feu.
2. *(4 pts)*
   - P1 : **portiques BA + remplissage agglos de 15** (grandes baies) ;
   - P2 : **charpente métallique** (36 m de portée) ;
   - P3 : **portiques + voiles** de contreventement (cages d'escalier et d'ascenseur) ;
   - P4 : **murs porteurs en BTC** chaînés, toiture légère (économique, matériaux locaux).

### Partie B — Descente de charges (8 pts)
3. 4,50 × 5,00 = **22,5 m²**. *(1 pt)*
4. 1,35 × 5,5 + 1,5 × 1,5 = **9,675 kN/m²** → 9,675 × 22,5 = **217,7 kN** par plancher. *(3 pts)*
5. Planchers : 4 × 217,7 = 870,8 kN ; poteaux : 1,35 × 25 × 0,25 × 0,25 × 3,05 × 4 = 25,7 kN → **≈ 897 kN**. *(3 pts)*
6. Chaque niveau ajoute sa charge : le poteau du RDC porte tous les étages au-dessus. *(1 pt)*

### Partie C — Stabilité (4 pts)
7. Le contreventement reprend les efforts horizontaux (vent, séismes, chocs) et empêche le bâtiment de se déformer ou de basculer : **voiles** BA, **portiques** à nœuds rigides, **croix de Saint-André** (métal), planchers formant diaphragme. *(2 pts)*
8. Joints tous les 25 à 30 m : 64 / 25 ≈ 2,6 → **2 joints** (3 blocs d'environ 21 m). Le **joint de rupture** coupe aussi les fondations, entre deux parties de hauteurs ou de sols différents, pour qu'elles tassent indépendamment. *(2 pts)*

> [!attention] Erreurs à éviter
> - Oublier le poids propre des poteaux et des poutres dans la descente de charges.
> - Mélanger charges de service (G + Q) et charges ultimes (1,35 G + 1,5 Q).
> - Faire un bâtiment très long sans joint : fissures de dilatation garanties.`},
 exercices:[
  {t:"Choisir un système constructif", d:1, e:`Proposer un système pour : a) un marché couvert de 40 × 25 m sans poteau intérieur ; b) une villa R+1 avec un séjour de 7 m de large ; c) un immeuble de bureaux R+10 ; d) un logement économique de plain-pied en zone rurale.`, c:`a) **Charpente métallique** (portiques de 25 m) sur poteaux en béton ou en acier.
b) **Ossature poteaux-poutres en béton armé** avec remplissage en agglos ; la poutre du séjour (7 m) sera dimensionnée en conséquence.
c) **Portiques + voiles** (noyau d'escaliers et d'ascenseurs) pour le contreventement.
d) **Murs porteurs** en BTC ou agglos, chaînés, avec toiture légère.`},
  {t:"Surface d'influence", d:2, e:`Un poteau de rive d'un R+1 reçoit la moitié de deux travées de 4,00 m dans un sens et la moitié d'une travée de 5,00 m dans l'autre. Planchers : 9 kN/m² à l'ELU (2 planchers). Calculer la surface d'influence et la charge.`, c:`Surface : (4,00/2 + 4,00/2) × 5,00/2 = 4,00 × 2,50 = **10 m²**.
Charge : 10 × 9 × 2 = **180 kN** (plus le poids propre du poteau et des façades qu'il porte).`},
  {t:"Joints de dilatation", d:1, e:`Un bâtiment scolaire mesure 72 m de long. Combien de joints de dilatation prévoir (blocs de 25 m au plus) ? Quelle longueur aura chaque bloc ?`, c:`72 / 25 = 2,9 → **3 blocs** de 24 m → **2 joints** de dilatation.`},
  {t:"Charge sur un mur porteur", d:2, e:`Un mur porteur intérieur reçoit, de chaque côté, la moitié d'un plancher de 4,00 m de portée. Charge du plancher : 9 kN/m² (ELU). a) Calculer la charge par mètre de mur. b) Un mur de 15 cm en agglos creux (résistance admissible ≈ 0,8 MPa sur la section brute) peut-il la supporter ?`, c:`a) Largeur reprise : 2 × 4,00 / 2 = 4,00 m → q = 4,00 × 9 = **36 kN/m**.
b) Contrainte : 36 000 N / (1 000 × 150 mm²) = **0,24 MPa** < 0,8 MPa → **oui** pour un niveau ; pour plusieurs niveaux, on cumule et l'on passe vite à des agglos pleins ou à une ossature.`},
  {t:"Identifier le contreventement", d:2, e:`Dans un hangar métallique, on voit des croix en câbles ou cornières dans certaines travées de façade et de toiture. À quoi servent-elles ? Que se passerait-il si on les supprimait pour faciliter le passage des engins ?`, c:`Ce sont des **palées de stabilité** (croix de Saint-André) : elles reprennent les efforts horizontaux (vent sur les pignons et les longs pans) et les ramènent aux fondations. Sans elles, les portiques articulés en pied pourraient se déformer en parallélogramme et la structure s'effondrer sous un fort vent. On peut les déplacer dans une autre travée, mais pas les supprimer.`}
 ],
 quiz:[
  {q:"Dans une ossature poteaux-poutres, les murs en agglos sont :", o:["De remplissage","Porteurs","Inutiles","En acier"], r:0, e:"La structure en béton armé porte."},
  {q:"Le contreventement résiste :", o:["Aux efforts horizontaux","Aux charges verticales seulement","À la pluie","À la chaleur"], r:0, e:"Vent, séisme."},
  {q:"Les joints de dilatation se placent environ tous les :", o:["25 à 30 m","2 m","100 m","5 m"], r:0, e:"Variations de longueur."},
  {q:"La surface d'influence d'un poteau sert à :", o:["Calculer la charge qu'il reçoit","Choisir la peinture","Implanter les fenêtres","Calculer la TVA"], r:0, e:"Moitié des travées voisines."},
  {q:"Un voile est :", o:["Un mur en béton armé","Un rideau","Une fondation","Une tuile"], r:0, e:"Il porte et contrevente."}
 ]},
{id:"tech-11", niv:1, titre:"Le terrain, l'installation de chantier et l'implantation", duree:50, contenu:`## Avant de commencer
- **Document foncier** et **bornage** du terrain par un géomètre (les bornes doivent être visibles et respectées) ;
- **Permis de construire** affiché sur le chantier ;
- **Étude de sol** et plan d'implantation (distances aux limites, reculs réglementaires, altitude du rez-de-chaussée) ;
- **Branchements provisoires** : eau, électricité.

## L'installation de chantier
Clôture et portail, panneau de chantier, magasin fermé (ciment, outillage), aire de stockage des granulats et des aciers, aire de fabrication du béton, poste d'eau, toilettes, local du personnel, accès des camions. Un plan d'installation évite les déplacements inutiles et les accidents.

## Le décapage et les terrassements
On enlève la terre végétale (10 à 30 cm), on dégage les racines et souches, puis on réalise les fouilles. La terre végétale est stockée à part pour les espaces verts.

## L'implantation
Elle consiste à reporter sur le terrain la position exacte du bâtiment :
1. Placer les **axes principaux** à partir des bornes ou d'une ligne de référence (piquets, théodolite ou station totale, ou ruban et équerre) ;
2. Contrôler l'**équerrage** : diagonales égales d'un rectangle, ou triangle **3-4-5** (ou ses multiples 6-8-10) ;
3. Construire les **chaises d'implantation** à 1 à 2 m à l'extérieur des fouilles (planches horizontales clouées sur piquets, toutes au même niveau) ;
4. Tendre des **cordeaux** entre les chaises pour matérialiser axes et nus des murs ; marquer les fouilles à la chaux ;
5. Reporter les **niveaux** depuis un **repère de nivellement** (niveau de chantier, niveau laser, ou tuyau à eau pour les petits ouvrages).

!fig:implantation|Implantation : axes, chaises et cordeaux

> [!exemple] Contrôle des diagonales
> Rectangle de 12,00 × 9,00 m : diagonale théorique √(12² + 9²) = **15,00 m**. Si l'on mesure 15,04 m et 14,96 m, le bâtiment n'est pas d'équerre : on corrige jusqu'à ce que les deux diagonales soient égales (tolérance ≈ 1 cm).

## Le report des niveaux
Avec un niveau de chantier : altitude du plan de visée = altitude du repère + lecture arrière ; altitude d'un point = plan de visée − lecture sur ce point.
> [!exemple] Fond de fouille
> Repère à 100,00 m ; lecture arrière 1,452 → plan de visée **101,452**. Pour régler un fond de fouille à 99,20 m, il faut lire **101,452 − 99,20 = 2,252** sur la mire posée au fond.

> [!attention]
> Une erreur d'implantation est très coûteuse : bâtiment empiétant sur la parcelle voisine ou sur la voie, démolition ordonnée. Faire vérifier l'implantation par le géomètre avant de couler les fondations.

> [!retenir]
> - Bornage, permis, étude de sol et plan d'implantation avant tout.
> - Installation de chantier planifiée.
> - Implantation : axes, équerrage (diagonales, 3-4-5), chaises, cordeaux, niveaux depuis un repère.`,
 sujet:{titre:"Préparer le terrain : installation de chantier, implantation et report des niveaux", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous démarrez le chantier d'une maison de **14,00 × 10,50 m** à Bingerville, sur un terrain légèrement en pente.

**Données**
- Rectangle d'implantation : **14,00 × 10,50 m** ; diagonales mesurées après un premier piquetage : **17,53 m** et **17,47 m** ;
- Repère de nivellement R : altitude **25,000 m** ; lecture arrière sur R : **1,318 m** ;
- Fond de fouille des semelles : **24,15 m**.

### Partie A — Avant de commencer (5 points)
1. Citer les démarches et vérifications avant le premier coup de pelle (au moins quatre). (3 pts)
2. Pourquoi faut-il repérer les réseaux existants (eau, électricité, télécoms) ? (2 pts)

### Partie B — Installation de chantier (5 points)
3. Dresser la liste des installations d'un chantier de maison et proposer leur disposition sur la parcelle (accès, stockages, gâchage, baraque, sanitaires, eau, électricité, clôture, panneau). (5 pts)

### Partie C — Implantation (6 points)
4. Calculer la diagonale théorique. Le rectangle est-il d'équerre ? Comment le corriger ? (3 pts)
5. Expliquer l'implantation par chaises et cordeaux. Pourquoi placer les chaises à 1,50 – 2,00 m des fouilles ? (3 pts)

### Partie D — Niveaux (4 points)
6. Calculer l'altitude du plan de visée et la lecture à obtenir au fond de fouille. (2 pts)
7. Pourquoi reporte-t-on aussi un trait de niveau sur les chaises ? (2 pts)`,
  corrige:`### Partie A — Avant de commencer (5 pts)
1. Permis de construire affiché ; titre foncier / ACD et **bornage** vérifié ; étude de sol ; plans visés ; déclaration d'ouverture de chantier ; état des lieux des voisins (photos) ; branchements provisoires d'eau et d'électricité. *(3 pts)*
2. Pour éviter de les endommager (coupures, accidents graves sur une ligne électrique) et de bâtir dessus. *(2 pts)*

### Partie B — Installation (5 pts)
3. Clôture et portail, **panneau de chantier** ; accès camions près de la voie ; aires de stockage du sable, du gravier, des agglos et des aciers (à l'abri et sur cales) ; **magasin** fermé pour le ciment (sur palettes) et l'outillage ; aire de gâchage près des stocks et de l'eau ; baraque du chef de chantier ; sanitaires ; point d'eau (fût, branchement) ; coffret électrique protégé ; zone de déchets. Les stocks lourds près de l'accès, le gâchage au centre des ouvrages à couler. *(5 pts)*

### Partie C — Implantation (6 pts)
4. √(14,00² + 10,50²) = **17,50 m**. Diagonales de 17,53 et 17,47 m : différence 6 cm > 1 cm → pas d'équerre (parallélogramme). On déplace les deux angles opposés jusqu'à obtenir **deux diagonales égales à 17,50 m**, les côtés restant à leurs longueurs. *(3 pts)*
5. Des chaises (planches horizontales sur piquets) sont posées hors de l'emprise ; on y reporte les axes par des clous ; les **cordeaux** tendus entre chaises matérialisent les axes au moment voulu. À 1,50 – 2,00 m des fouilles, elles ne sont ni détruites par le terrassement ni gênantes pour les engins. *(3 pts)*

### Partie D — Niveaux (4 pts)
6. Plan de visée : 25,000 + 1,318 = **26,318 m** ; lecture au fond : 26,318 − 24,15 = **2,168 m**. *(2 pts)*
7. Le trait sert de référence de hauteur permanente pour régler les fonds de fouille, les arases et le dallage sans refaire de nivellement à chaque fois. *(2 pts)*

> [!attention] Erreurs à éviter
> - Implanter sans contrôler les diagonales.
> - Poser les chaises trop près des fouilles.
> - Stocker le ciment à même le sol, sous la pluie.`},
 exercices:[
  {t:"Vérifier l'équerrage", d:1, e:`Un bâtiment rectangulaire de 15,00 × 8,00 m est implanté. Quelle doit être la diagonale ? On mesure 17,03 m et 16,99 m : que faire ?`, c:`Diagonale théorique : √(15² + 8²) = √289 = **17,00 m**.
Les mesures diffèrent de 4 cm : le rectangle est légèrement déformé (parallélogramme). On déplace les angles jusqu'à obtenir deux diagonales égales à **17,00 m** (± 1 cm), en gardant les longueurs des côtés.`},
  {t:"La règle 3-4-5", d:1, e:`Avec un simple ruban, comment tracer un angle droit au coin d'une fondation ? Donner les mesures à utiliser avec le multiple 6-8-10 et vérifier par Pythagore.`, c:`On mesure **6 m** sur un côté et **8 m** sur l'autre depuis le coin : l'angle est droit quand la distance entre ces deux points vaut **10 m**.
Vérification : 6² + 8² = 36 + 64 = 100 = 10² ✔. Plus le triangle est grand, plus l'angle est précis.`},
  {t:"Report de niveau", d:2, e:`Repère de nivellement à 100,00 m. Lecture arrière : 1,452. a) Lecture sur un piquet : 0,987 : altitude du piquet ? b) Quelle lecture viser pour régler un fond de fouille à 99,20 m ? c) Le dessus des chaises doit être à 100,50 m : lecture à obtenir ?`, c:`Plan de visée : 100,00 + 1,452 = **101,452**.
a) 101,452 − 0,987 = **100,465 m**.
b) 101,452 − 99,20 = **2,252** sur la mire.
c) 101,452 − 100,50 = **0,952**.`},
  {t:"Surface constructible", d:2, e:`Terrain de 20 × 30 m (façade de 20 m sur rue). Reculs : 5 m sur la rue, 3 m sur les limites latérales et au fond. Coefficient d'emprise au sol maximal : 50 %. Quelle surface au sol peut-on construire ?`, c:`Zone constructible : (20 − 2 × 3) × (30 − 5 − 3) = 14 × 22 = **308 m²**.
Emprise maximale : 50 % × 600 = **300 m²**.
La règle la plus contraignante l'emporte : **300 m²** au sol au maximum (le bâtiment doit en plus rester dans la zone de 14 × 22 m).`},
  {t:"Plan d'installation de chantier", d:2, e:`Citer les éléments à placer sur le plan d'installation d'un chantier de villa et deux règles de bon sens pour les positionner.`, c:`Éléments : clôture et portail, panneau de chantier, magasin (ciment, outillage), aire à granulats, aire de ferraillage, bétonnière près des granulats et du point d'eau, toilettes, abri du personnel, accès camions, zone de déchets.
Règles : placer la **bétonnière** entre les granulats, l'eau et l'ouvrage (trajets courts) ; laisser un **accès camion** dégagé jusqu'aux aires de stockage ; garder le magasin de ciment **au sec** et fermé.`}
 ],
 quiz:[
  {q:"La méthode 3-4-5 sert à :",o:["Tracer un angle droit","Doser le béton","Calculer la pente","Compter les agglos"], r:0, e:"Pythagore."},
  {q:"Les chaises d'implantation se placent :", o:["À l'extérieur des fouilles","Au fond des fouilles","Sur la dalle","Dans le magasin"], r:0, e:"Elles restent en place pendant les terrassements."},
  {q:"Plan de visée = ", o:["Altitude du repère + lecture arrière","Lecture avant − repère","Repère × lecture","Repère − lecture arrière"], r:0, e:"Nivellement."},
  {q:"Qui doit vérifier l'implantation avant les fondations ?", o:["Le géomètre","Le peintre","Le fournisseur","Personne"], r:0, e:"Pour éviter les empiètements."},
  {q:"La terre végétale décapée :", o:["Est stockée à part pour les espaces verts","Sert de remblai sous dallage","Est mélangée au béton","Est jetée dans les fouilles"], r:0, e:"Elle est organique."}
 ]},
{id:"tech-3", niv:1, titre:"Les fondations superficielles et l'infrastructure d'une maison", duree:55, contenu:`## Le rôle des fondations
Transmettre les charges du bâtiment au **bon sol**, sans dépasser sa résistance et sans provoquer de **tassements** nuisibles (surtout différentiels). Le choix dépend de l'**étude de sol** et des charges.

!fig:fondations-types|Fondations superficielles, semi-profondes et profondes

## Les types de fondations superficielles
| Type | Sous | Quand l'utiliser |
|---|---|---|
| **Semelle isolée** | Un poteau | Ossature poteaux-poutres, bon sol à faible profondeur |
| **Semelle filante** | Un mur porteur ou une file de poteaux | Murs porteurs, sol moyen |
| **Radier général** | Tout le bâtiment | Sol médiocre et homogène, charges réparties, sous-sol |
| **Puits** (semi-profonds) | Un poteau | Bon sol entre 2 et 5 m de profondeur |
Si le bon sol est trop profond ou très médiocre : **fondations profondes** (pieux, chapitre avancé).

## Dimensionner simplement une semelle isolée
- Surface : **A = N / σsol** (N : charge de service, σsol : contrainte admissible donnée par l'étude de sol) ;
- Hauteur (semelle rigide) : **h ≥ (B − b) / 4 + 5 cm** (B : côté de la semelle, b : côté du poteau) ;
- Profondeur d'assise : sur le bon sol, sous la couche altérée ou remaniée (au moins 0,60 à 0,80 m en général).
> [!exemple] Poteau de 400 kN sur un sol à 0,20 MPa (200 kN/m²)
> A = 400 / 200 = 2,00 m² → B = √2 = 1,41 → **1,45 m** ; h ≥ (1,45 − 0,25)/4 + 0,05 = **0,35 m**.
> Le calcul des aciers relève du béton armé (méthode des bielles).

## L'infrastructure, de bas en haut
**Béton de propreté** (5 cm, 150 kg/m³) → **semelles** → **amorces de poteaux** → **longrines** (elles relient les semelles, portent le soubassement et limitent les tassements différentiels) → **soubassement** en agglos pleins → **remblai compacté** par couches de 20 cm → **traitement anti-termites** → **hérisson** de pierres (15 cm, coupe les remontées d'humidité) → **film polyane** → **dallage** (8 à 12 cm) armé de treillis soudé.
!fig:longrine|Longrine reliant deux semelles

## Les règles de mise en œuvre
- Fond de fouille **propre, sec et sur le bon sol**, réceptionné avant le béton de propreté ;
- **Enrobage** des aciers de 5 cm en fondation (cales en béton, jamais de cailloux) ;
- **Réservations** (fourreaux pour eau, électricité, évacuations) posées **avant** de couler les longrines et le dallage ;
- **Arase étanche** (mortier hydrofuge) sur le soubassement pour bloquer les remontées capillaires ;
- Ne jamais fonder une partie du bâtiment sur un remblai et une autre sur le terrain naturel.

> [!attention]
> Les fondations ne se voient plus une fois la maison finie, mais toutes les erreurs y coûtent le plus cher à réparer.

> [!retenir]
> - Semelle isolée (poteau), filante (mur), radier (sol médiocre), puits (bon sol à 2 – 5 m).
> - A = N / σsol ; h ≥ (B − b)/4 + 5 cm.
> - Propreté → semelles → amorces → longrines → soubassement → remblai → anti-termites → hérisson → polyane → dallage.`,
 sujet:{titre:"Fondations superficielles d'une maison : semelles, infrastructure et mise en œuvre", duree:90, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Maison R+1 à Abatta. L'étude de sol donne une contrainte admissible de **0,18 MPa** à 1,20 m pour les semelles isolées et **0,15 MPa** pour les semelles filantes.

**Données**
- Poteau **25 × 25** apportant **520 kN** (service) ;
- Mur porteur de 20 cm apportant **85 kN/m** (service) ; on prendra une semelle filante de largeur multiple de 5 cm ;
- Hauteur d'une semelle : h ≥ (B − b) / 4 + 0,05 m (b : largeur du poteau ou du mur) ; béton **25 kN/m³** ; les terres au-dessus de la semelle sont négligées.

### Partie A — Rôle et types (4 points)
1. Quel est le rôle des fondations ? (1 pt)
2. Dans quels cas utilise-t-on des semelles isolées, des semelles filantes, un radier ? (3 pts)

### Partie B — Semelle isolée (8 points)
3. Calculer la surface nécessaire et le côté B (sans le poids de la semelle). (2 pts)
4. Calculer la hauteur h. (1 pt)
5. Vérifier la contrainte en ajoutant le poids de la semelle. Conclure et redimensionner si besoin. (5 pts)

### Partie C — Semelle filante (3 points)
6. Calculer la largeur et la hauteur de la semelle filante. (3 pts)

### Partie D — Infrastructure et mise en œuvre (5 points)
7. Décrire l'infrastructure de bas en haut : du fond de fouille au dallage. (3 pts)
8. Citer quatre règles de mise en œuvre des fondations. (2 pts)`,
  corrige:`### Partie A — Rôle et types (4 pts)
1. Transmettre les charges du bâtiment au sol **sans dépasser sa résistance** et **sans tassements excessifs**. *(1 pt)*
2. **Isolées** : sous les poteaux d'une ossature ; **filantes** : sous les murs porteurs ou des poteaux rapprochés ; **radier** : sol faible ou charges fortes (semelles qui couvriraient plus de la moitié de l'emprise), ou présence d'eau. *(3 pts)*

### Partie B — Semelle isolée (8 pts)
3. A = 520 / 180 = 2,89 m² → B = √2,89 = **1,70 m**. *(2 pts)*
4. h ≥ (1,70 − 0,25) / 4 + 0,05 = 0,41 → **h = 0,45 m**. *(1 pt)*
5. Poids : 1,70² × 0,45 × 25 = 32,5 kN → σ = (520 + 32,5) / 2,89 = **191 kPa > 180** ✘. Avec B = **1,80 m** (h = 0,45) : poids 36,5 kN → σ = 556,5 / 3,24 = **172 kPa ≤ 180** ✔. Le poids propre de la semelle ne doit pas être oublié. *(5 pts)*

### Partie C — Semelle filante (3 pts)
6. B = 85 / 150 = 0,57 → **0,60 m** ; h ≥ (0,60 − 0,20) / 4 + 0,05 = 0,15 → **h = 0,20 m** (vérification : (85 + 0,60 × 0,20 × 25) / 0,60 = 147 kPa ✔). *(3 pts)*

### Partie D — Infrastructure (5 pts)
7. Fond de fouille propre et horizontal → **béton de propreté** (5 cm) → **semelles** (armées) → **amorces de poteaux** → **longrines** ou soubassement en agglos pleins → **remblai compacté** → **hérisson** + film → **dallage** armé. *(3 pts)*
8. Fond de fouille réceptionné (bon sol, sec, sans boue) ; béton de propreté ; enrobage de **5 cm** (cales) ; aciers en attente bien placés et ligaturés ; bétonnage sans délai après l'ouverture des fouilles ; profondeur minimale respectée ; cure. *(2 pts)*

> [!attention] Erreurs à éviter
> - Dimensionner sans le poids propre de la semelle.
> - Couler sur un fond de fouille boueux ou remanié par la pluie.
> - Oublier les cales d'enrobage : les aciers rouillent au contact du sol.`},
 exercices:[
  {t:"Choisir le type de fondation", d:1, e:`Choisir la fondation : a) villa à ossature poteaux-poutres, bon sol latéritique à 1 m ; b) maison en murs porteurs BTC, sol moyen ; c) entrepôt sur sol sableux médiocre et homogène, charges réparties ; d) bon sol à 3,50 m sous un remblai.`, c:`a) **Semelles isolées** reliées par des longrines.
b) **Semelles filantes** sous les murs.
c) **Radier général** (ou dallage épais sur sol amélioré).
d) **Puits** (fondations semi-profondes) descendus jusqu'au bon sol, ou pieux courts.`},
  {t:"Dimensionner une semelle", d:2, e:`Un poteau 25 × 25 cm transmet 560 kN (ELS). Le rapport de sol donne σsol = 0,25 MPa. Calculer la surface, le côté (au 5 cm supérieur) et la hauteur de la semelle carrée.`, c:`A = 560 / 250 = **2,24 m²** → B = √2,24 = 1,497 → **1,50 m**.
h ≥ (1,50 − 0,25)/4 + 0,05 = 0,3125 + 0,05 = **0,36 m** → on retient **0,40 m**.`},
  {t:"Ordre des couches sous le dallage", d:1, e:`Remettre dans l'ordre (de bas en haut) : dallage ; remblai compacté ; film polyane ; traitement anti-termites ; hérisson ; terrain naturel. Donner le rôle du hérisson et du polyane.`, c:`Terrain naturel → **remblai compacté** → **traitement anti-termites** → **hérisson** → **film polyane** → **dallage**.
Le hérisson (pierres sans fines) coupe les **remontées capillaires** ; le polyane empêche la laitance du béton de s'échapper dans le hérisson et freine l'humidité.`},
  {t:"Longrines et tassements", d:2, e:`Pourquoi relie-t-on les semelles par des longrines même quand les poteaux sont peu chargés ? Que risque-t-on sans elles sur un sol hétérogène ?`, c:`Les longrines **solidarisent** les semelles : elles répartissent les différences de tassement, portent le soubassement et les murs du rez-de-chaussée, et maintiennent l'écartement des poteaux.
Sans elles, une semelle qui tasse plus que sa voisine provoque des **fissures en escalier** dans les murs et des désordres dans les menuiseries.`},
  {t:"Contrôle avant bétonnage", d:2, e:`Établir une liste de 6 points à vérifier avant de couler une semelle et ses amorces.`, c:`1. Fond de fouille sur le **bon sol**, propre, sans eau ; 2. Béton de propreté réalisé ; 3. Dimensions et **position** de la semelle (axes, cordeaux) ; 4. Ferraillage conforme au plan (diamètres, espacements) ; 5. **Enrobage** de 5 cm assuré par des cales ; 6. Attentes des poteaux bien placées et d'aplomb, avec la bonne longueur de recouvrement.`}
 ],
 quiz:[
  {q:"Sous un poteau isolé, on réalise en général :", o:["Une semelle isolée","Une semelle filante","Un linteau","Une chape"], r:0, e:"Elle répartit la charge du poteau."},
  {q:"Surface d'une semelle pour 300 kN sur un sol à 150 kN/m² :", o:["2 m²","0,5 m²","4,5 m²","450 m²"], r:0, e:"300 / 150."},
  {q:"L'enrobage des aciers en fondation est d'environ :", o:["5 cm","1 cm","20 cm","0 cm"], r:0, e:"Contact avec le sol."},
  {q:"Le hérisson sert à :", o:["Couper les remontées capillaires","Décorer","Armer le dallage","Isoler du bruit"], r:0, e:"Pierres sans fines."},
  {q:"Les fourreaux se posent :", o:["Avant de couler longrines et dallage","Après le carrelage","Jamais","Après la peinture"], r:0, e:"Sinon il faut casser."}
 ]},
{id:"tech-4", niv:1, titre:"La maçonnerie : murs, chaînages et ouvertures", duree:55, contenu:`## Les matériaux de maçonnerie
| Élément | Usage |
|---|---|
| Agglos creux de 10 | Cloisons intérieures |
| Agglos creux de 15 | Murs extérieurs (remplissage), murs porteurs légers |
| Agglos creux de 20 | Murs épais, clôtures hautes |
| Agglos pleins de 15 / 20 | Soubassements, murs très chargés |
| BTC, briques de terre cuite | Murs porteurs ou de remplissage, bon confort thermique |
Les agglos doivent être **bien fabriqués** (dosage, vibration), **arrosés** pendant au moins 7 jours et secs à la pose ; un agglo qui s'effrite à l'ongle est à refuser.

## Les règles de l'art
1. **Appareillage** en quinconce : joints verticaux **décalés** d'un demi-bloc d'un rang à l'autre ;
2. **Joints** de 1 à 1,5 cm, pleins, au mortier dosé à 300 kg/m³ ;
3. **Aplomb, alignement et niveau** contrôlés à chaque rang (fil à plomb, règle, niveau, cordeau) ;
4. **Liaison avec les poteaux** : fers d'attente ou harpage tous les 2 à 3 rangs ;
5. **Chaînages** horizontaux en tête de mur (et à mi-hauteur pour les grands murs), **chaînages verticaux** (raidisseurs) aux angles, aux intersections et au moins tous les 4 à 5 m ;
6. **Linteaux** au-dessus des baies (appuis de 20 cm de chaque côté au moins), **appuis** en béton sous les fenêtres ;
7. Monter au plus 1,50 m de mur par jour pour laisser durcir le mortier ; humidifier les blocs par temps chaud.

!fig:chainage|Chaînages horizontaux et verticaux

## Les ouvertures
- Porte intérieure : 0,80 × 2,10 m (passage) ; porte d'entrée : 0,90 à 1,00 m ; accès handicapés : 0,90 m minimum ;
- Fenêtre : allège ≈ 1,00 m, hauteur de baie 1,20 à 1,50 m ; linteau au même niveau pour toutes les baies d'un mur ;
- **Tableau** (côtés), **linteau** (dessus), **appui** (dessous), **allège** (partie de mur sous l'appui).

## Les murs de clôture
Fondation filante, **poteaux raidisseurs tous les 3 à 4 m**, chaînage haut, **joints de dilatation tous les 15 à 20 m**, barbacanes si le mur retient de la terre. Un mur de clôture de 2,50 m non chaîné est dangereux en cas de vent fort.

> [!exemple] Mur de 2,60 m en agglos de 20 cm de haut (joint compris)
> Nombre de rangs : 2,60 / 0,20 = **13 rangs** ; fers de liaison tous les 2 rangs → 6 lits de fers à chaque poteau ; chaînage haut de 15 × 20 au-dessus.

> [!attention]
> Les saignées pour gaines électriques doivent être **verticales** de préférence ; une saignée horizontale profonde affaiblit le mur. Ne jamais poser une maçonnerie sur une dalle sans vérifier qu'elle peut la porter.

> [!retenir]
> - Joints décalés, pleins, de 1 à 1,5 cm ; aplomb, alignement, niveau.
> - Chaînages horizontaux et verticaux ; liaison avec les poteaux.
> - Linteaux avec 20 cm d'appui de chaque côté ; clôtures : raidisseurs tous les 3 à 4 m.`,
 sujet:{titre:"Murs en agglos, chaînages, ouvertures et mur de clôture", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous encadrez une équipe de maçons sur une villa à Bonoua, puis sur le mur de clôture de la parcelle.

**Données**
- Mur de façade de **11,40 m** entre poteaux d'angle, hauteur de maçonnerie **3,00 m**, agglos de **20 cm** de haut (joint compris) ;
- Fenêtre de **1,40 m** de large dans ce mur ;
- Mur de clôture de **45,00 m**, hauteur **2,40 m**.

### Partie A — Matériaux et réception (4 points)
1. Quel agglo choisir pour : une cloison, un mur extérieur, un soubassement, une clôture haute ? (2 pts)
2. Comment reconnaître un agglo de mauvaise qualité à la livraison ? (2 pts)

### Partie B — Règles de l'art (8 points)
3. Citer six règles de l'art pour monter un mur d'agglos. (6 pts)
4. Combien de rangs pour le mur de 3,00 m ? Combien de lits de fers de liaison (tous les 2 rangs) à chaque poteau ? Combien de jours au minimum pour le monter (1,50 m par jour) ? (2 pts)

### Partie C — Chaînages et ouverture (4 points)
5. Combien de raidisseurs intermédiaires faut-il dans le mur de 11,40 m (au plus tous les 4 à 5 m) ? (2 pts)
6. Quelle longueur de linteau pour la fenêtre ? (2 pts)

### Partie D — Mur de clôture (4 points)
7. Calculer le nombre de poteaux raidisseurs (tous les 3 à 4 m) et le nombre de joints de dilatation (tous les 15 à 20 m). (3 pts)
8. Pourquoi un mur de clôture non chaîné est-il dangereux ? (1 pt)`,
  corrige:`### Partie A — Matériaux (4 pts)
1. Cloison : **agglo creux de 10** ; mur extérieur : **creux de 15** ; soubassement : **plein de 15 ou 20** ; clôture haute : **creux de 20**. *(2 pts)*
2. Il s'effrite à l'ongle, sonne creux, a des arêtes cassées, des dimensions irrégulières ; il n'a pas été arrosé 7 jours. On le refuse (ou on fait tester sa résistance). *(2 pts)*

### Partie B — Règles de l'art (8 pts)
3. *(6 pts)*
   - appareillage **en quinconce** (joints verticaux décalés d'un demi-bloc) ;
   - joints pleins de 1 à 1,5 cm au mortier dosé à 300 ;
   - **aplomb, alignement, niveau** contrôlés à chaque rang ;
   - **liaison avec les poteaux** (fers d'attente tous les 2 à 3 rangs) ;
   - **chaînages** horizontaux et verticaux ;
   - **linteaux** et appuis aux baies ; blocs humidifiés par temps chaud ; 1,50 m par jour au plus.
4. 3,00 / 0,20 = **15 rangs** ; fers tous les 2 rangs → **7 lits** ; 3,00 / 1,50 = **2 jours** au minimum. *(2 pts)*

### Partie C — Chaînages (4 pts)
5. 11,40 / 4,5 = 2,5 → **3 travées** → **2 raidisseurs intermédiaires** (travées de 3,80 m). *(2 pts)*
6. 1,40 + 2 × 0,20 = **1,80 m** (appuis de 20 cm de chaque côté). *(2 pts)*

### Partie D — Clôture (4 pts)
7. 45 / 3,5 ≈ 12,9 → **13 travées** → **14 poteaux** ; 45 / 15 = 3 tronçons → **2 joints** de dilatation. *(3 pts)*
8. Sans chaînage ni raidisseurs, un mur mince et haut bascule sous le vent ou un choc (et s'effondre parfois sur des enfants). *(1 pt)*

> [!attention] Erreurs à éviter
> - Monter le mur avant les poteaux sans fers d'attente : il se décolle.
> - Joints verticaux alignés d'un rang à l'autre.
> - Monter 3 m de mur dans la journée : le mortier frais s'écrase.`},
 exercices:[
  {t:"Nombre de rangs", d:1, e:`Un mur doit atteindre 2,85 m sous le chaînage. Les agglos font 20 cm de haut joint compris. Combien de rangs faut-il ? Que faire de la hauteur restante ?`, c:`2,85 / 0,20 = 14,25 → **14 rangs** = 2,80 m ; il reste **5 cm**, que l'on rattrape dans l'épaisseur du joint sous le chaînage ou en ajustant la hauteur du chaînage (on évite les morceaux d'agglos découpés en tête de mur).`},
  {t:"Raidisseurs d'une clôture", d:1, e:`Mur de clôture rectiligne de 36 m. Poteaux raidisseurs tous les 3 m, joints de dilatation tous les 18 m au plus. Combien de poteaux et de joints ?`, c:`Poteaux : 36 / 3 + 1 = **13 poteaux**.
Joints : 36 / 18 = 2 tronçons → **1 joint** de dilatation au milieu (on dédouble le poteau à cet endroit : un poteau de chaque côté du joint, soit 14 poteaux au total).`},
  {t:"Linteau d'une fenêtre", d:1, e:`Une fenêtre de 1,20 m de large dans un mur de 15 cm. Quelle est la longueur du linteau ? Proposer sa section et son ferraillage minimal courant.`, c:`Longueur : 1,20 + 2 × 0,20 = **1,60 m**.
Section : 15 × 20 cm (largeur du mur × hauteur d'un rang d'agglos) ; ferraillage courant : 2 HA10 en bas, 2 HA8 en haut, cadres HA6 tous les 15 cm (à vérifier si le linteau porte un plancher).`},
  {t:"Trouver les erreurs", d:2, e:`Sur un chantier, on observe : joints verticaux alignés sur 4 rangs ; mur de 3 m monté dans la journée ; linteau posé avec 5 cm d'appui ; saignée horizontale de 5 cm de profondeur sur 3 m de long ; agglos secs posés en plein soleil. Corriger chaque point.`, c:`- Joints alignés → **décaler** les joints d'un demi-bloc (quinconce) ;
- 3 m en un jour → limiter à **1,50 m par jour** ;
- appui de 5 cm → **20 cm** minimum de chaque côté ;
- saignée horizontale → faire passer la gaine **verticalement** ou dans le chaînage/la dalle ;
- agglos secs au soleil → **humidifier** les blocs avant la pose pour que le mortier ne soit pas « brûlé ».`},
  {t:"Allège et hauteur de baie", d:2, e:`Dans une chambre, le dessus du dallage fini est à ±0,00 et le dessous du chaînage à +2,70. On veut une allège de 1,00 m et un linteau de 0,20 m sous le chaînage. Quelle est la hauteur maximale de la fenêtre ?`, c:`Dessous du linteau : 2,70 − 0,20 = **+2,50** ; appui à **+1,00**.
Hauteur de baie maximale : 2,50 − 1,00 = **1,50 m**.`}
 ],
 quiz:[
  {q:"Pour les cloisons intérieures, on utilise généralement :", o:["Agglos de 10","Agglos pleins de 20","Béton armé","Pierres"], r:0, e:"Suffisant pour une cloison."},
  {q:"La partie de mur sous l'appui d'une fenêtre s'appelle :", o:["L'allège","Le linteau","Le tableau","Le chaînage"], r:0, e:"Hauteur courante ≈ 1 m."},
  {q:"Les joints verticaux doivent être :", o:["Décalés","Alignés","Absents","De 5 cm"], r:0, e:"Appareillage en quinconce."},
  {q:"Appui minimal d'un linteau de chaque côté :", o:["20 cm","2 cm","1 m","0 cm"], r:0, e:"Pour transmettre la charge."},
  {q:"Hauteur maximale de maçonnerie montée par jour :", o:["≈ 1,50 m","10 m","0,20 m","Illimitée"], r:0, e:"Laisser durcir le mortier."}
 ]},
{id:"tech-12", niv:2, titre:"Le béton armé sur le chantier : coffrage, ferraillage, bétonnage", duree:60, contenu:`## Les coffrages
Le coffrage est le **moule** du béton. Il doit être **étanche** (pas de fuite de laitance), **rigide** (pas de déformation sous la poussée du béton frais), **propre** et **huilé** (huile de décoffrage), et **étayé** pour les planchers et les poutres.
- Bois (planches, contreplaqué) : courant, 3 à 5 réemplois ;
- Métal (banches, coffrages de poteaux) : nombreux réemplois, parements lisses ;
- **Étaiement** : étais métalliques réglables, espacés de 1,00 à 1,50 m, sur un sol stable (calage).

## Le ferraillage
- Respecter le **plan de ferraillage** : diamètres, nombres, espacements, longueurs d'ancrage et de recouvrement ;
- Barres **propres** (pas de boue, de graisse ni de rouille feuilletée) ;
- Cadres bien **ligaturés** ; crochets à 135° dans les poteaux ;
- **Enrobage** assuré par des **cales** (béton ou plastique) : 5 cm en fondation, 3 cm en extérieur, 2 à 2,5 cm à l'intérieur ;
- **Réservations** (fourreaux, gaines, trémies) mises en place avant le coulage.

## Le bétonnage
1. **Fabrication** : dosage respecté (7 sacs/m³ pour 350 kg/m³), eau mesurée (E/C ≈ 0,5), malaxage de 2 à 3 minutes à la bétonnière ;
2. **Contrôle de consistance** au cône d'Abrams (affaissement courant **5 à 10 cm**) : un béton trop fluide parce qu'on a ajouté de l'eau perd une grande partie de sa résistance ;
3. **Transport et mise en place** sans ségrégation : hauteur de chute ≤ 1,50 m, couches de 30 à 50 cm ;
4. **Vibration** à l'aiguille vibrante (piquer verticalement, retirer lentement) pour chasser l'air ;
5. **Reprises de bétonnage** prévues aux bons endroits, surface piquée et humidifiée avant la reprise ;
6. **Cure** : maintenir le béton **humide au moins 7 jours** (arrosage, toile humide, produit de cure), surtout en climat chaud et venteux.

!fig:poutre-elevation|Poutre : ferraillage et cadres

## Les délais de décoffrage (indicatifs, climat chaud)
| Élément | Décoffrage |
|---|---|
| Joues de poutres, poteaux, voiles | 1 à 2 jours |
| Fonds de dalles et de poutres | 14 à 21 jours, avec **étais de sécurité** laissés en place |
| Consoles, grandes portées | 28 jours |
La résistance du béton augmente avec le temps : environ 65 % à 7 jours et 100 % (fc28) à 28 jours.

## Le contrôle de la qualité
- **Éprouvettes** (cylindres 16 × 32 cm ou cubes de 15 cm) prélevées au moment du coulage, écrasées à 7 et 28 jours au laboratoire ;
- **Réception des coffrages et des armatures** avant chaque coulage (bon pour coulage signé) ;
- Contrôle visuel après décoffrage : nids de cailloux, aciers apparents, défauts d'aplomb.

> [!exemple] Coulage d'une dalle de 4,50 m³ à la bétonnière de 350 L
> Volume utile ≈ 250 L par gâchée → 4,50 / 0,25 = **18 gâchées** ; à 6 minutes la gâchée, **≈ 1 h 50** de fabrication, à condition d'avoir sur place 32 sacs, 1,8 m³ de sable et 3,6 m³ de gravier, et une équipe suffisante pour transporter et vibrer.

> [!retenir]
> - Coffrage étanche, rigide, huilé et étayé ; ferraillage conforme, propre, calé (enrobage).
> - Béton : dosage et eau respectés, affaissement 5 – 10 cm, vibration, cure de 7 jours.
> - Décoffrer les fonds de dalle après 14 à 21 jours ; éprouvettes à 7 et 28 jours.`,
 sujet:{titre:"Couler une dalle en béton armé : coffrage, ferraillage, bétonnage et cure", duree:90, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous préparez le coulage de la dalle pleine d'une salle de classe à Divo : **6,20 × 5,40 m**, épaisseur **15 cm**, béton dosé à **350 kg/m³**.

**Données**
- Bétonnière de **350 L** (environ **250 L** de béton par gâchée), **6 minutes** par gâchée ;
- Pour 1 m³ : **7 sacs** de ciment, **0,40 m³** de sable, **0,80 m³** de gravier ;
- Au contrôle, le premier béton donne un affaissement au cône de **18 cm** ;
- fc28 visé : **25 MPa** ; environ 65 % de fc28 à 7 jours.

### Partie A — Coffrage et étaiement (4 points)
1. Citer trois qualités d'un bon coffrage. (2 pts)
2. À quel espacement placer les étais ? Sur quoi les poser ? (2 pts)

### Partie B — Ferraillage (4 points)
3. Donner les enrobages à respecter en fondation, à l'extérieur et à l'intérieur, et le moyen de les garantir. (2 pts)
4. Que vérifier sur le ferraillage avant le coulage ? (2 pts)

### Partie C — Organisation du bétonnage (6 points)
5. Calculer le volume de béton, le nombre de gâchées et la durée de fabrication. (3 pts)
6. Calculer les quantités de ciment, sable et gravier à avoir sur place. (3 pts)

### Partie D — Contrôles et cure (6 points)
7. Le béton avec 18 cm d'affaissement est-il acceptable ? Pourquoi ? (2 pts)
8. Quelle résistance attendre à 7 jours ? À quoi servent les éprouvettes ? (2 pts)
9. Comment faire la cure et combien de temps ? Quand peut-on décoffrer les joues et le fond de la dalle ? (2 pts)`,
  corrige:`### Partie A — Coffrage (4 pts)
1. **Étanche** (pas de fuite de laitance), **rigide et stable** (pas de déformation), aux **bonnes cotes** et propre, huilé pour le décoffrage. *(2 pts)*
2. Étais tous les **1,00 à 1,50 m**, sur un sol stable et **calé** (madriers), jamais sur de la terre meuble. *(2 pts)*

### Partie B — Ferraillage (4 pts)
3. **5 cm** en fondation, **3 cm** à l'extérieur, **2 à 2,5 cm** à l'intérieur ; garantis par des **cales** en béton ou plastique. *(2 pts)*
4. Diamètres, nombres et espacements conformes au plan ; ancrages et recouvrements ; chapeaux en place ; ligatures ; enrobages ; propreté (pas de terre, pas de rouille non adhérente) ; réservations. *(2 pts)*

### Partie C — Organisation (6 pts)
5. V = 6,20 × 5,40 × 0,15 = **5,02 m³** ; 5,02 / 0,25 = 20,1 → **21 gâchées** ; 21 × 6 min = **2 h 06** de fabrication (prévoir l'équipe de transport et de vibration). *(3 pts)*
6. Ciment : 5,02 × 7 = 35,2 → **36 sacs** (+ réserve) ; sable : **2,0 m³** ; gravier : **4,0 m³**. *(3 pts)*

### Partie D — Contrôles (6 pts)
7. **Non** : l'affaissement courant est de 5 à 10 cm ; 18 cm signale un excès d'eau, qui fait chuter la résistance. On refait la gâchée en respectant l'eau (E/C ≈ 0,5). *(2 pts)*
8. ≈ 0,65 × 25 = **16 MPa** à 7 jours. Les éprouvettes, écrasées à 7 et 28 jours, prouvent que le béton a la résistance prévue. *(2 pts)*
9. Garder le béton **humide au moins 7 jours** (arrosage, toile humide, produit de cure). Joues : 1 à 2 jours ; fond de dalle : **14 à 21 jours**, avec étais de sécurité. *(2 pts)*

> [!attention] Erreurs à éviter
> - Ajouter de l'eau pour faciliter la mise en œuvre.
> - Décoffrer le fond de dalle au bout de quelques jours.
> - Laisser sécher la dalle au soleil sans cure : fissures de retrait.`},
 exercices:[
  {t:"Organiser un coulage", d:2, e:`On coule 6,2 m³ de béton dosé à 350 kg/m³ avec une bétonnière de volume utile 250 L, à raison d'une gâchée toutes les 6 minutes. Calculer le nombre de gâchées, la durée de fabrication et les sacs de ciment.`, c:`Gâchées : 6,2 / 0,25 = 24,8 → **25 gâchées** ; durée : 25 × 6 = 150 min = **2 h 30**.
Ciment : 6,2 × 7 = 43,4 → **44 sacs** (+ quelques sacs de réserve). Commencer tôt le matin pour couler à la fraîche.`},
  {t:"Un béton trop fluide", d:2, e:`Le CCTP impose un affaissement de 8 cm. Sur le chantier, on mesure 18 cm : les ouvriers ont ajouté de l'eau pour faciliter le travail. Quelles conséquences ? Que faire ?`, c:`Plus d'eau → rapport E/C plus élevé → béton plus **poreux**, **moins résistant** (perte pouvant dépasser 20 à 30 %), plus de **retrait** et de fissures, risque de ségrégation.
Il faut **refuser** cette gâchée, rappeler le dosage en eau, mesurer l'eau au seau gradué ; si l'on veut un béton plus maniable, utiliser un **plastifiant** et bien **vibrer**.`},
  {t:"Planning de décoffrage", d:2, e:`Une dalle et ses poutres sont coulées le lundi 3. Indiquer les dates possibles de décoffrage des joues des poutres, des fonds de dalle (avec étais de sécurité) et des étais de sécurité de la console de balcon.`, c:`Joues des poutres : **mercredi 5** (après 2 jours).
Fonds de dalle : à partir du **lundi 17** (14 jours) en laissant des étais de sécurité, ou **lundi 24** (21 jours).
Console de balcon : **lundi 31** (28 jours).`},
  {t:"Enrobages", d:1, e:`Indiquer l'enrobage courant pour : a) une semelle ; b) un poteau de façade ; c) une poutre intérieure ; d) un réservoir d'eau. Pourquoi est-il si important ?`, c:`a) **5 cm** ; b) **3 cm** ; c) **2 à 2,5 cm** ; d) **4 à 5 cm** (milieu humide).
L'enrobage protège les aciers de la **corrosion** (le béton est basique et passive l'acier) et du **feu**, et assure l'**adhérence** acier-béton. Un enrobage trop faible provoque la rouille, l'éclatement du béton et des fissures le long des aciers.`},
  {t:"Interpréter des éprouvettes", d:3, e:`Le béton doit avoir fc28 = 25 MPa. Trois éprouvettes donnent à 28 jours : 24,1 ; 25,6 et 23,8 MPa. À 7 jours, d'autres éprouvettes donnaient 16,5 MPa en moyenne. Commenter.`, c:`Moyenne à 28 jours : (24,1 + 25,6 + 23,8) / 3 = **24,5 MPa**, légèrement sous 25 MPa.
À 7 jours : 16,5 / 25 = 66 % : conforme à l'évolution attendue (≈ 65 %), donc le béton était correct mais sans marge.
Conduite : signaler au BET, qui vérifie si 24,5 MPa reste acceptable pour l'ouvrage ; renforcer les contrôles (dosage, eau, cure) ; éventuellement carottages. En pratique, on vise une résistance moyenne supérieure à fc28 de quelques MPa pour couvrir la dispersion.`}
 ],
 quiz:[
  {q:"L'affaissement courant au cône d'Abrams est de :", o:["5 à 10 cm","30 cm","0 cm","1 m"], r:0, e:"Béton plastique."},
  {q:"La cure du béton consiste à :", o:["Le maintenir humide plusieurs jours","Le chauffer","Le peindre","Le recouvrir de sable sec"], r:0, e:"Au moins 7 jours en climat chaud."},
  {q:"Ajouter de l'eau au béton sur le chantier :", o:["Diminue sa résistance","Augmente sa résistance","Ne change rien","Accélère la prise sans effet"], r:0, e:"E/C plus élevé."},
  {q:"Les fonds de dalle se décoffrent en général après :", o:["14 à 21 jours","1 heure","1 jour","1 an"], r:0, e:"Avec étais de sécurité."},
  {q:"Les cales servent à :", o:["Assurer l'enrobage des aciers","Huiler le coffrage","Vibrer le béton","Mesurer l'affaissement"], r:0, e:"Distance acier-coffrage."}
 ]},
{id:"tech-5", niv:2, titre:"Les planchers et les dalles", duree:55, contenu:`## Le rôle d'un plancher
Porter les charges (poids propre, cloisons, revêtements, occupants, mobilier) et les transmettre aux poutres et aux murs, **contreventer** horizontalement le bâtiment (diaphragme), isoler (bruit, feu, chaleur entre étages).

## Les types de planchers
| Type | Principe | Usage |
|---|---|---|
| **Corps creux** (hourdis) | Poutrelles + entrevous + table de compression 4 à 5 cm | Le plus courant (logements, bureaux), portées 4 à 6 m |
| **Dalle pleine** | Dalle en béton armé coulée en place, 12 à 25 cm | Balcons, consoles, salles d'eau, portées dans deux directions, toits-terrasses |
| **Prédalles** | Plaques préfabriquées servant de coffrage + béton coulé dessus | Chantiers rapides, moins d'étaiement |
| **Dalles alvéolées** précontraintes | Éléments préfabriqués de grande portée | Bureaux, parkings (10 à 15 m) |
| **Plancher-dalle** | Dalle épaisse sans poutres sur poteaux | Grands bâtiments |
| **Plancher bois ou mixte acier-béton** | Solives ou bacs acier + béton | Constructions légères, rénovations |

!fig:hourdis|Plancher à corps creux

## Le prédimensionnement (ordres de grandeur)
| Élément | Épaisseur courante |
|---|---|
| Plancher à corps creux | **h ≈ L / 22,5** (L : portée des poutrelles) : 16 + 4 jusqu'à 4,50 m ; 20 + 5 jusqu'à 5,60 m |
| Dalle pleine portant dans un sens | e ≈ L / 30 à L / 35 |
| Dalle pleine sur 4 appuis | e ≈ Lx / 40 (Lx : petite portée), au moins 12 cm |
| Console (balcon) | e ≈ L / 10 |
| Poutre | h ≈ L / 10 à L / 12 ; b ≈ 0,3 à 0,5 h |
> [!exemple] Planchers d'une villa
> Poutrelles de 4,20 m de portée : 4,20 / 22,5 = 0,19 m → **16 + 4**. Poutre de 6,00 m : h ≈ 6,00 / 12 = **0,50 m**, b = 0,20 à 0,25 m.

## Les poids propres
| Plancher | Poids propre |
|---|---|
| Corps creux 16 + 4 | ≈ 2,85 kN/m² |
| Corps creux 20 + 5 | ≈ 3,30 kN/m² |
| Dalle pleine de 15 cm | 25 × 0,15 = 3,75 kN/m² |
| Revêtement (chape + carrelage) | ≈ 1,0 kN/m² |
| Cloisons légères réparties | ≈ 1,0 kN/m² |

## La mise en œuvre d'un plancher à corps creux
1. Pose des **poutrelles** sur les poutres ou chaînages (appuis ≥ 5 à 10 cm), sens et entraxe du plan de calepinage ;
2. **Étaiement** des poutrelles à mi-portée (ou plus selon la portée) ;
3. Pose des **entrevous** ; obturation des rives ;
4. **Chapeaux** sur appuis, **treillis soudé**, réservations ;
5. Arrosage des entrevous, **coulage** de la table et des clavetages en une seule fois avec les poutres et chaînages ;
6. **Cure**, puis désétaiement après 14 à 21 jours.

## Les points sensibles
- **Trémies** (escaliers, gaines) : chevêtres en béton armé autour ;
- **Balcons en console** : armatures principales **en haut**, ancrées dans le plancher ;
- Pas de charge de chantier concentrée (palettes d'agglos) sur un plancher jeune.

> [!retenir]
> - Corps creux (le plus courant), dalle pleine, prédalles, alvéolées, plancher-dalle.
> - Corps creux h ≈ L/22,5 ; dalle sur 4 appuis ≈ Lx/40 ; poutre h ≈ L/10 à L/12.
> - Poids : 16 + 4 ≈ 2,85 kN/m² ; dalle de 15 cm = 3,75 kN/m².
> - Consoles : aciers en haut.`,
 sujet:{titre:"Choisir et prédimensionner les planchers d'une villa R+1", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Villa R+1 à Cocody. Vous proposez les types de planchers et leurs épaisseurs, puis vous évaluez les charges.

**Données**
- Séjour : poutrelles de **4,80 m** de portée ;
- Salle d'eau de l'étage : dalle pleine sur 4 appuis, petite portée **Lx = 3,60 m** ;
- Balcon en console de **1,20 m** ;
- Poutre de **5,40 m** de portée ;
- Règles : corps creux h ≈ L / 22,5 (16 + 4 jusqu'à 4,50 m ; 20 + 5 jusqu'à 5,60 m) ; dalle sur 4 appuis e ≈ Lx / 40, au moins 12 cm ; console e ≈ L / 10 ; poutre h ≈ L / 10 à L / 12, b ≈ 0,3 à 0,5 h ;
- Poids : 16 + 4 ≈ **2,85 kN/m²** ; 20 + 5 ≈ **3,30 kN/m²** ; revêtement **1,0** ; cloisons **1,0 kN/m²** ; Q = **1,5 kN/m²**.

### Partie A — Types de planchers (4 points)
1. Comparer plancher à corps creux, dalle pleine et dalles alvéolées (constitution, usage, portées). (3 pts)
2. Pourquoi réalise-t-on souvent les salles d'eau et les balcons en dalle pleine ? (1 pt)

### Partie B — Prédimensionnement (8 points)
3. Choisir le plancher du séjour. (2 pts)
4. Choisir l'épaisseur de la dalle de la salle d'eau. (2 pts)
5. Choisir l'épaisseur du balcon. (2 pts)
6. Proposer une section pour la poutre. (2 pts)

### Partie C — Charges (4 points)
7. Calculer G, puis la charge ELU (1,35 G + 1,5 Q) du plancher du séjour. (4 pts)

### Partie D — Mise en œuvre (4 points)
8. Décrire dans l'ordre la mise en œuvre d'un plancher à corps creux. (3 pts)
9. Quand peut-on désétayer ? (1 pt)`,
  corrige:`### Partie A — Types (4 pts)
1. *(3 pts)*
   - **Corps creux** : poutrelles + entrevous + table de compression 4 à 5 cm ; logements, bureaux ; 4 à 6 m ;
   - **Dalle pleine** : béton armé coulé en place, 12 à 25 cm ; porte dans deux directions ; balcons, terrasses ;
   - **Dalles alvéolées** précontraintes : préfabriquées, grandes portées (10 à 15 m) ; bureaux, parkings.
2. La dalle pleine supporte mieux l'humidité et les percements (siphons), et seule elle peut travailler en **console**. *(1 pt)*

### Partie B — Prédimensionnement (8 pts)
3. 4,80 / 22,5 = 0,213 m > 0,20 → **20 + 5** (valable jusqu'à 5,60 m). *(2 pts)*
4. 3,60 / 40 = 0,09 m < 12 cm → **e = 12 cm** (minimum). *(2 pts)*
5. 1,20 / 10 = **0,12 m** → **12 cm** (souvent 15 cm à l'encastrement). *(2 pts)*
6. h = 5,40 / 12 à 5,40 / 10 = 0,45 à 0,54 → **h = 0,50 m** ; b = 0,15 à 0,25 → **b = 0,20 m** (ou 0,25). *(2 pts)*

### Partie C — Charges (4 pts)
7. G = 3,30 + 1,0 + 1,0 = **5,30 kN/m²** ; ELU : 1,35 × 5,30 + 1,5 × 1,5 = **9,41 kN/m²**. *(4 pts)*

### Partie D — Mise en œuvre (4 pts)
8. Pose des **poutrelles** (appuis ≥ 5 à 10 cm, entraxe du calepinage) → **étaiement** à mi-portée → pose des **entrevous**, obturation des rives → **chapeaux**, **treillis soudé**, réservations → arrosage des entrevous → **coulage** de la table avec poutres et chaînages en une fois → cure. *(3 pts)*
9. Après **14 à 21 jours**. *(1 pt)*

> [!attention] Erreurs à éviter
> - Prendre un 16 + 4 pour 4,80 m de portée : flèche excessive, fissures des cloisons.
> - Poser les poutrelles dans le mauvais sens par rapport au plan.
> - Couler la table sans étaiement.`},
 exercices:[
  {t:"Choisir l'épaisseur des corps creux", d:1, e:`Choisir le plancher à corps creux pour des portées de poutrelles de 3,80 m, 4,50 m et 5,20 m (h ≈ L/22,5 ; types disponibles : 16 + 4, 20 + 5, 25 + 5).`, c:`3,80 / 22,5 = 0,17 m → **16 + 4** (20 cm).
4,50 / 22,5 = 0,20 m → **16 + 4** (limite).
5,20 / 22,5 = 0,23 m → **20 + 5** (25 cm).`},
  {t:"Prédimensionner une dalle et une poutre", d:2, e:`a) Dalle pleine d'une salle d'eau de 3,20 × 4,00 m appuyée sur ses 4 côtés. b) Poutre de 5,40 m de portée. c) Balcon en console de 1,20 m.`, c:`a) e ≈ 3,20 / 40 = 0,08 m → minimum **12 cm** (on prend souvent 15 cm pour l'acoustique et l'enrobage).
b) h ≈ 5,40 / 12 à 5,40 / 10 = **0,45 à 0,54 m** → 25 × 50 cm.
c) e ≈ 1,20 / 10 = **0,12 m** à l'encastrement, avec les aciers principaux en partie **supérieure**.`},
  {t:"Charges permanentes d'un plancher", d:2, e:`Calculer la charge permanente G (kN/m²) : a) plancher 16 + 4 + chape et carrelage + cloisons légères ; b) dalle pleine de 15 cm + chape et carrelage + cloisons. Comparer.`, c:`a) 2,85 + 1,0 + 1,0 = **4,85 kN/m²**.
b) 3,75 + 1,0 + 1,0 = **5,75 kN/m²**.
La dalle pleine est environ **19 % plus lourde** : poutres, poteaux et fondations seront plus chargés.`},
  {t:"Étaiement d'une dalle", d:2, e:`Dalle de 6,00 × 4,00 m étayée par des étais espacés de 1,20 m au plus dans les deux sens (premières files contre les appuis). Combien d'étais faut-il environ ?`, c:`Sens de 6,00 m : 6,00 / 1,20 = 5 intervalles → **6 files** ; sens de 4,00 m : 4,00 / 1,20 = 3,3 → 4 intervalles → **5 files**.
Total : 6 × 5 = **30 étais** (les files contre les murs peuvent être supprimées si les coffrages s'appuient sur les murs, ce qui réduit le nombre).`},
  {t:"Le balcon qui s'affaisse", d:3, e:`Un balcon en console s'est affaissé et fissuré à l'encastrement, côté supérieur. À la démolition, on découvre les aciers principaux en partie basse. Expliquer l'erreur.`, c:`Dans une console, le moment est **négatif** : la partie **supérieure** est tendue et doit recevoir les armatures principales, bien ancrées dans le plancher voisin. Placées en bas (comme dans une travée normale), les armatures ne servent presque à rien : le béton tendu en haut se fissure à l'encastrement et la console fléchit. Il faut démolir et refaire le balcon avec les aciers en haut (et des cales hautes pour qu'ils ne soient pas écrasés par les ouvriers au coulage).`}
 ],
 quiz:[
  {q:"Le plancher le plus courant dans les logements est :", o:["Le plancher à corps creux","Le plancher bois massif","La dalle alvéolée de 15 m","Le plancher métallique"], r:0, e:"Économique et léger."},
  {q:"Prédimensionnement d'un corps creux :", o:["h ≈ L/22,5","h ≈ L/2","h ≈ L/100","h = L"], r:0, e:"Portée des poutrelles."},
  {q:"Poids propre d'une dalle pleine de 20 cm :", o:["5 kN/m²","2 kN/m²","20 kN/m²","0,5 kN/m²"], r:0, e:"25 × 0,20."},
  {q:"Dans une console, les aciers principaux sont :", o:["En haut","En bas","Au milieu","Absents"], r:0, e:"Moment négatif."},
  {q:"Le plancher contribue au contreventement en jouant le rôle de :", o:["Diaphragme","Fondation","Toiture","Cloison"], r:0, e:"Il répartit les efforts horizontaux."}
 ]},
{id:"tech-13", niv:2, titre:"Les escaliers : vocabulaire, tracé et mise en œuvre", duree:55, contenu:`## Le vocabulaire
| Terme | Définition |
|---|---|
| **Marche** / **contremarche** | Partie horizontale où l'on pose le pied / partie verticale entre deux marches |
| **Hauteur de marche h** | Hauteur d'une contremarche (16 à 18 cm en habitation) |
| **Giron g** | Profondeur utile d'une marche, mesurée sur la **ligne de foulée** (25 à 30 cm) |
| **Emmarchement** | Largeur de l'escalier (≥ 0,80 m en maison, 1,20 m et plus dans les lieux publics) |
| **Volée** | Suite ininterrompue de marches entre deux paliers |
| **Palier** | Plate-forme d'arrivée ou de repos |
| **Paillasse** | Dalle inclinée en béton armé qui porte les marches |
| **Échappée** | Hauteur libre au-dessus d'un nez de marche (≥ 2,00 m) |
| **Trémie** | Ouverture dans le plancher supérieur pour le passage de l'escalier |
| **Garde-corps, main courante** | Protection contre les chutes (hauteur ≥ 1,00 m en général), appui pour la main |

!fig:escalier|Escalier droit : giron, hauteur de marche, paillasse

## La loi de Blondel
Un escalier est confortable quand le pas correspond à l'enjambée moyenne :
$$ 60 cm ≤ 2h + g ≤ 64 cm      (idéal ≈ 63 cm)
## La méthode de calcul
1. Hauteur à monter **H** (de sol fini à sol fini) ;
2. Nombre de contremarches **n = H / h** visé (h ≈ 17 cm), arrondi à l'entier ;
3. Hauteur réelle **h = H / n** ;
4. Giron **g = 63 − 2h** (en cm), arrondi ;
5. Nombre de girons d'une volée droite = **n − 1** ; longueur de la volée = (n − 1) × g ;
6. Au-delà de 18 à 20 marches, prévoir un **palier de repos** ;
7. Vérifier l'**échappée** : longueur minimale de la trémie ≈ (2,00 + e) / (h / g), mesurée depuis l'arrivée (e : épaisseur du plancher fini).

> [!exemple] Escalier droit pour une hauteur d'étage de 2,97 m
> n = 2,97 / 0,17 = 17,5 → **17 contremarches** de h = 2,97 / 17 = **17,5 cm**.
> g = 63 − 2 × 17,5 = **28 cm** → 2h + g = 62,9 cm ✔.
> Volée : 16 girons × 0,28 = **4,48 m** de projection horizontale ; pente h/g = 0,624 (32°).
> Trémie (plancher fini de 25 cm) : (2,00 + 0,25) / 0,624 = **3,61 m** au moins.

## Les formes d'escaliers
- **Droit** : le plus simple et le plus économique, mais encombrant en longueur ;
- **À quart tournant** ou **demi-tournant** : marches **balancées** (dansantes) ou palier intermédiaire ; plus compact ;
- **Hélicoïdal** : très compact, moins confortable, difficile à déménager ;
- **Escalier extérieur** : marches avec légère pente vers l'avant (1 %) pour évacuer l'eau, nez antidérapants.

## La réalisation en béton armé
Coffrage de la paillasse et des contremarches, ferraillage (aciers principaux en partie basse de la paillasse, bien ancrés dans les paliers et poutres palières), coulage de bas en haut, cure. On réserve l'épaisseur du revêtement (marches carrelées) : toutes les hauteurs de marches **finies** doivent être égales, y compris la première et la dernière.

> [!attention] Sécurité
> Une marche de hauteur différente des autres fait trébucher : c'est une cause fréquente de chutes graves. Garde-corps d'au moins 1,00 m (0,90 m le long de la volée), barreaux espacés de moins de 11 cm, pas d'éléments horizontaux escaladables par les enfants.

> [!retenir]
> - Blondel : 60 ≤ 2h + g ≤ 64 cm ; h ≈ 17 cm, g ≈ 28 cm.
> - n = H/h ; volée droite : n − 1 girons ; palier au-delà de 18 à 20 marches.
> - Échappée ≥ 2,00 m ; garde-corps ≥ 1,00 m ; toutes les marches finies identiques.`,
 sujet:{titre:"Tracer un escalier droit : loi de Blondel, trémie et échappée", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un escalier droit en béton armé doit relier le rez-de-chaussée à l'étage d'un duplex à Riviera.

**Données**
- Hauteur d'étage (sol fini à sol fini) : **3,06 m** ; épaisseur du plancher fini : **0,22 m** ;
- Hauteur de marche visée : environ **17 cm** ; loi de Blondel : **60 ≤ 2h + g ≤ 64 cm** (idéal 63) ;
- Échappée minimale : **2,00 m** ; largeur de l'escalier : **1,00 m**.

### Partie A — Vocabulaire (4 points)
1. Définir : marche, contremarche, giron, emmarchement, volée, palier, limon, échappée, reculement. (4 pts)

### Partie B — Calcul de l'escalier (9 points)
2. Calculer le nombre de contremarches et la hauteur exacte de marche. (2 pts)
3. Calculer le giron par la loi de Blondel et vérifier 2h + g. (2 pts)
4. Calculer le nombre de girons, le reculement (projection horizontale) et la pente (en % et en degrés). (3 pts)
5. Calculer la longueur minimale de la trémie. (2 pts)

### Partie C — Variante (4 points)
6. La place disponible n'est que de **3,00 m** de long. Proposer une forme d'escalier et calculer le reculement de chaque volée si l'on fait deux volées de 9 contremarches avec un palier intermédiaire. (4 pts)

### Partie D — Réalisation (3 points)
7. Décrire les étapes de réalisation d'un escalier en béton armé coulé en place. (3 pts)`,
  corrige:`### Partie A — Vocabulaire (4 pts)
1. **Marche** : surface horizontale où l'on pose le pied ; **contremarche** : face verticale ; **giron** : profondeur de marche (g) ; **emmarchement** : largeur utile ; **volée** : suite de marches entre deux paliers ; **palier** : plate-forme de repos ou d'arrivée ; **limon** : élément rampant qui porte les marches côté vide ; **échappée** : hauteur libre au-dessus des marches ; **reculement** : longueur horizontale occupée par la volée. *(4 pts)*

### Partie B — Calcul (9 pts)
2. 3,06 / 0,17 = **18 contremarches** de h = 3,06 / 18 = **17,0 cm**. *(2 pts)*
3. g = 63 − 2 × 17 = **29 cm** ; 2h + g = 34 + 29 = **63 cm** ✔. *(2 pts)*
4. 17 girons (la dernière marche est le palier) : 17 × 0,29 = **4,93 m** ; pente 17 / 29 = **58,6 %**, soit **30,4°**. *(3 pts)*
5. $$ L ≥ (échappée + épaisseur du plancher) / pente = (2,00 + 0,22) / 0,586 = 3,79 m
   *(2 pts)*

### Partie C — Variante (4 pts)
6. Escalier à **deux volées** (en U ou en L) avec palier intermédiaire : chaque volée de 9 contremarches a **8 girons** → 8 × 0,29 = **2,32 m** ≤ 3,00 m ✔ (plus un palier d'au moins 1,00 m de profondeur). *(4 pts)*

### Partie D — Réalisation (3 pts)
7. Tracé sur le mur (ligne de foulée, marches) → coffrage de la paillasse et des contremarches, étaiement → ferraillage (paillasse, chapeaux, ancrages dans les planchers) → bétonnage du bas vers le haut, vibration → cure, décoffrage après 14 à 21 jours. *(3 pts)*

> [!attention] Erreurs à éviter
> - Compter autant de girons que de contremarches.
> - Marches de hauteurs différentes (la première ou la dernière) : cause de chutes.
> - Trémie trop courte : on se cogne la tête.`},
 exercices:[
  {t:"Calculer un escalier droit", d:1, e:`Hauteur d'étage (sol fini à sol fini) : 2,80 m. Déterminer le nombre de contremarches, la hauteur de marche, le giron, vérifier Blondel et calculer la longueur de la volée.`, c:`n = 2,80 / 0,17 = 16,5 → **16 contremarches** : h = 2,80 / 16 = **17,5 cm**.
g = 63 − 35 = **28 cm** → 2h + g = **63 cm** ✔.
Volée : 15 girons × 0,28 = **4,20 m** ; pente arctan(17,5/28) = **32°**.`},
  {t:"Longueur de trémie", d:2, e:`Pour l'escalier de l'exercice 1 (h = 17,5 cm, g = 28 cm), le plancher fini fait 22 cm d'épaisseur. Quelle longueur minimale donner à la trémie pour respecter une échappée de 2,00 m ?`, c:`Pente : h / g = 0,175 / 0,28 = **0,625**.
Longueur minimale : (2,00 + 0,22) / 0,625 = **3,55 m**, mesurée depuis le bord d'arrivée de la trémie.`},
  {t:"Grande hauteur", d:2, e:`Un hall a une hauteur d'étage de 3,60 m. Combien de contremarches faut-il ? Peut-on faire une seule volée ? Proposer une solution.`, c:`n = 3,60 / 0,175 = 20,6 → **21 contremarches** de 3,60 / 21 = **17,1 cm** ; g = 63 − 34,3 ≈ **29 cm**.
21 marches d'une traite, c'est trop (fatigue, chute plus grave) : on prévoit **deux volées** (10 + 11 contremarches) séparées par un **palier de repos**, en escalier droit avec palier ou en demi-tournant.`},
  {t:"Diagnostiquer un escalier inconfortable", d:2, e:`Un escalier existant a des marches de 20 cm de haut et des girons de 22 cm. Calculer 2h + g. Pourquoi est-il pourtant dangereux ?`, c:`2h + g = 40 + 22 = **62 cm** : Blondel est respecté, mais **h est trop grand** (> 18 cm) et **g trop petit** (< 25 cm) : la pente vaut arctan(20/22) = 42°, le pied n'est pas posé en entier sur la marche et la descente est dangereuse. Blondel ne suffit pas : il faut aussi h ≈ 16 à 18 cm et g ≈ 25 à 30 cm.`},
  {t:"Marches finies égales", d:3, e:`Un escalier en béton de 16 contremarches de 17,5 cm brutes va recevoir un carrelage de 2 cm sur les marches et sur le palier d'arrivée, mais le sol du départ (dallage) recevra une chape et un carrelage de 5 cm. Que se passe-t-il pour la première marche ? Comment l'éviter ?`, c:`La première marche finie mesurera 17,5 − 5 + 2 = **14,5 cm** (le sol de départ monte de 5 cm, le dessus de la marche de 2 cm), alors que les autres feront 17,5 cm : risque de trébucher.
Il faut tenir compte **dès le coffrage** des épaisseurs de revêtement : le départ brut doit être calé pour que **toutes** les hauteurs finies soient égales (ici, première contremarche brute de 17,5 + 5 − 2 = 20,5 cm).`}
 ],
 quiz:[
  {q:"La loi de Blondel s'écrit :", o:["60 ≤ 2h + g ≤ 64 cm","h + g = 100 cm","2g + h = 30 cm","h = g"], r:0, e:"Le pas moyen."},
  {q:"L'échappée minimale courante est de :", o:["2,00 m","1,20 m","3,00 m","0,90 m"], r:0, e:"Hauteur libre au-dessus des marches."},
  {q:"Pour 17 contremarches dans une volée droite, il y a :", o:["16 girons","17 girons","18 girons","34 girons"], r:0, e:"n − 1."},
  {q:"La hauteur courante d'un garde-corps est :", o:["≥ 1,00 m","0,50 m","2,00 m","0,20 m"], r:0, e:"Protection contre les chutes."},
  {q:"La paillasse est :", o:["La dalle inclinée qui porte les marches","Le revêtement","La rampe","Le palier"], r:0, e:"En béton armé."}
 ]},
{id:"tech-14", niv:2, titre:"Les toitures inclinées : charpente et couverture", duree:55, contenu:`## Les éléments d'une toiture
- **Charpente** : structure porteuse (bois ou métal) ;
- **Couverture** : peau étanche (tôles, tuiles) ;
- **Accessoires** : faîtière, rives, arêtiers, noues, gouttières, descentes, closoirs ;
- Souvent : **faux plafond** isolé et **combles ventilés** dessous (confort thermique).

## La charpente
- **Fermes** triangulées (entrait, arbalétriers, poinçon, contrefiches) posées tous les 3 à 4 m, ou **pignons maçonnés** porteurs pour les petites maisons ;
- **Pannes** (faîtière, intermédiaires, sablières) posées sur les fermes, espacées selon la couverture (≈ 1,00 à 1,50 m pour les tôles bac alu) ;
- **Chevrons et liteaux** pour les tuiles ;
- Charpente **métallique** : portiques en profilés (IPE, HEA) et pannes en profils minces (Z, C), pour les grandes portées.
Le bois doit être **sec, sain et traité** contre les termites et les champignons ; les assemblages sont boulonnés ou cloués avec des connecteurs.

!fig:treillis|Ferme triangulée

## L'ancrage : la sécurité contre le vent
Le vent ne se contente pas de pousser : il **soulève** la toiture (dépression). Il faut donc :
- **ancrer** chaque ferme ou panne sablière dans le **chaînage** (tiges filetées, feuillards scellés) ;
- **fixer chaque tôle sur chaque panne**, avec des tire-fonds ou crochets à rondelles d'étanchéité, plus serrés en rive et aux angles ;
- limiter les **débords** non contreventés (au-delà de 50 à 60 cm, prévoir des renforts).
Les toitures arrachées lors des orages sont presque toujours **mal fixées** ou **mal ancrées**.

## La couverture et sa pente
| Couverture | Pente minimale indicative |
|---|---|
| Tôle bac aluminium (grandes longueurs) | 10 à 15 % |
| Tôle ondulée galvanisée | 15 à 20 % |
| Tuiles mécaniques | 30 à 40 % |
| Tuiles canal | 25 à 35 % |
Une pente trop faible laisse l'eau remonter par capillarité ou sous le vent aux recouvrements.
- Hauteur au faîtage = demi-portée (avec débord) × pente ; angle = arctan(pente).
> [!exemple] Toiture à deux pans de 9 m de portée, pente 20 %
> Hauteur du faîtage au-dessus des sablières : 4,50 × 0,20 = **0,90 m** ; angle : arctan 0,20 = **11,3°** ; rampant 4,50 × √1,04 = 4,59 m → avec des pannes à 1,00 m : **6 lignes** par pan.

## L'évacuation des eaux
- **Gouttières** avec une pente de 0,5 à 1 % vers les descentes (sur 11 m à 0,5 % : 5,5 cm de dénivelé) ;
- **Descentes** dimensionnées pour les fortes pluies tropicales (≈ 1 cm² de section par m² de toiture) ;
- Pied de descente raccordé à un regard ou à un caniveau, jamais au pied du mur.

## Le confort sous la toiture
La tôle chauffe énormément au soleil : faux plafond, **isolant** (laine minérale, panneaux), **combles ventilés** (grilles en pignons), tôles de couleur claire ou à revêtement réfléchissant réduisent fortement la chaleur reçue (voir Thermique).

> [!retenir]
> - Charpente (fermes, pannes) + couverture + accessoires.
> - Ancrer la charpente dans le chaînage et fixer chaque tôle sur chaque panne.
> - Pentes minimales : bac alu 10 – 15 %, ondulée 15 – 20 %, tuiles ≥ 30 %.
> - Gouttières à 0,5 – 1 % ; isoler et ventiler sous la tôle.`,
 sujet:{titre:"Toiture à deux pans en tôles : charpente, pente, eaux pluviales et ancrage au vent", duree:90, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Couverture d'une école primaire à Sinfra : bâtiment de **14,00 × 10,00 m** (portée **10,00 m** entre sablières), toiture à deux pans en tôles bac aluminium.

**Données**
- Pente **25 %** ; débords **0,60 m** sur tout le pourtour ; fermes tous les **3,50 m** ; pannes à **1,20 m** maximum ;
- Gouttières sur les grands côtés, pente **0,5 %** ; descentes : **1 cm² par m² de toiture projetée** ; Ø 100 = 78,5 cm², Ø 125 = 122,7 cm² ;
- Vent : dépression (soulèvement) de **0,9 kN/m²** sur la surface projetée ; poids de la couverture et de la charpente : **0,25 kN/m²** de rampant ;
- Chaque ferme est ancrée à ses deux extrémités.

### Partie A — Charpente et pente (7 points)
1. Nommer les éléments d'une ferme triangulée et d'une toiture (au moins six). (2 pts)
2. Calculer la hauteur du faîtage au-dessus des sablières et l'angle de la toiture. La pente convient-elle pour du bac alu ? (2 pts)
3. Calculer le rampant (débord compris) et le nombre de lignes de pannes par pan. (2 pts)
4. Calculer le nombre de fermes (longueur 14,00 m). (1 pt)

### Partie B — Eaux pluviales (5 points)
5. Calculer la longueur d'une gouttière et sa dénivelée. (2 pts)
6. Choisir les descentes d'un pan. (3 pts)

### Partie C — Ancrage au vent (6 points)
7. Calculer la force de soulèvement totale et le poids de la toiture. (3 pts)
8. Calculer l'effort à reprendre par chaque ancrage. Comment réaliser les ancrages ? (3 pts)

### Partie D — Confort (2 points)
9. Proposer deux dispositions pour limiter la chaleur sous la toiture. (2 pts)`,
  corrige:`### Partie A — Charpente (7 pts)
1. Ferme : **entrait**, **arbalétriers**, **poinçon**, **contrefiches** ; toiture : **pannes** (faîtière, intermédiaires, sablières), chevrons ou liteaux selon la couverture, **faîtage**, **rives**, **égout**, **débords**. *(2 pts)*
2. 5,00 × 0,25 = **1,25 m** ; arctan 0,25 = **14,0°**. Le bac alu demande 10 à 15 % : **25 % convient** (bon écoulement). *(2 pts)*
3. Projection 5,00 + 0,60 = 5,60 m → rampant = 5,60 × √1,0625 = **5,77 m** ; 5,77 / 1,20 = 4,8 → 5 intervalles → **6 lignes** par pan. *(2 pts)*
4. 14,00 / 3,50 = 4 intervalles → **5 fermes** (ou 3 fermes et 2 pignons maçonnés). *(1 pt)*

### Partie B — Eaux pluviales (5 pts)
5. 14,00 + 2 × 0,60 = **15,20 m** ; dénivelée 15,20 × 0,005 = **7,6 cm**. *(2 pts)*
6. Surface projetée d'un pan : 15,20 × 5,60 = **85,1 m²** → section **85 cm²** : une Ø 100 (78,5) est insuffisante → **une Ø 125** (122,7 cm²) ou **deux Ø 100** par pan. *(3 pts)*

### Partie C — Ancrage (6 pts)
7. Surface projetée : 15,20 × 11,20 = 170,2 m² → soulèvement 0,9 × 170,2 = **153,2 kN** ; rampant 2 × 5,77 × 15,20 = 175,4 m² → poids 0,25 × 175,4 = **43,9 kN**. *(3 pts)*
8. Effort net : 153,2 − 43,9 = **109,3 kN** ; 5 fermes × 2 ancrages = 10 → **≈ 11 kN par ancrage**. Ancrages par **fers en attente** ou platines scellées dans le **chaînage haut** (et non dans les agglos), boulonnés ou soudés ; tôles fixées par tire-fonds à rondelles sur chaque panne. *(3 pts)*

### Partie D — Confort (2 pts)
9. Faux plafond **isolé** et ventilé, isolant sous tôle (laine de roche, film réfléchissant), **ventilation des combles** par les pignons et le faîtage, tôle de couleur claire. *(2 pts)*

> [!attention] Erreurs à éviter
> - Ancrer la charpente dans la maçonnerie : c'est la toiture entière qui s'envole avec le haut du mur.
> - Sous-dimensionner les descentes sous les pluies tropicales.
> - Débords de plus de 60 cm non renforcés.`},
 exercices:[
  {t:"Hauteur au faîtage", d:1, e:`Maison de 10,20 m de large (portée entre murs), toiture à deux pans à 25 %. Calculer la hauteur du faîtage au-dessus des sablières et l'angle de la pente.`, c:`Demi-portée : 5,10 m → hauteur : 5,10 × 0,25 = **1,28 m** ; angle : arctan 0,25 = **14,0°**.`},
  {t:"Vérifier une pente", d:1, e:`Un artisan propose une couverture en tuiles mécaniques sur une charpente à 18 % de pente. Est-ce acceptable ? Que proposer ?`, c:`Non : les tuiles mécaniques demandent **30 à 40 %** ; à 18 %, l'eau poussée par le vent passera aux recouvrements.
Soit on relève la charpente à au moins 30 – 35 %, soit on choisit une **tôle bac alu** (≥ 10 – 15 %) ou ondulée (≥ 15 – 20 %).`},
  {t:"Lignes de pannes", d:2, e:`Pan de toiture de 5,26 m de rampant, couverture bac alu, pannes espacées de 1,20 m au plus (une panne sablière en bas et une panne faîtière en haut). Combien de lignes de pannes par pan ?`, c:`5,26 / 1,20 = 4,4 → **5 intervalles** → **6 lignes** de pannes par pan (espacement réel 5,26 / 5 = 1,05 m), la panne faîtière pouvant être commune aux deux pans.`},
  {t:"Pente de gouttière", d:1, e:`Une gouttière de 13,20 m se déverse dans une seule descente à une extrémité, avec une pente de 0,5 %. Quel dénivelé entre les deux extrémités ? Et avec deux descentes aux extrémités et un point haut au milieu ?`, c:`Une descente : 13,20 × 0,005 = **6,6 cm**.
Deux descentes : chaque moitié fait 6,60 m → 6,60 × 0,005 = **3,3 cm** seulement, plus discret et plus efficace (débit réparti).`},
  {t:"Toiture arrachée", d:3, e:`Après un orage, la toiture en tôles d'un préau s'est envolée d'un bloc avec les pannes. Les fermes étaient simplement posées sur les murs et les tôles fixées une panne sur deux. Expliquer et proposer les corrections.`, c:`Le vent a créé une **dépression** au-dessus de la toiture (soulèvement) : les tôles, insuffisamment fixées, ont décollé ; les fermes, **non ancrées**, sont parties avec elles.
Corrections : **ancrer** chaque ferme dans le **chaînage** (tiges scellées, équerres) ; fixer **chaque tôle sur chaque panne** (renforcer en rives et aux angles) ; contreventer la charpente ; limiter les débords ; vérifier les fixations après chaque saison des pluies.`}
 ],
 quiz:[
  {q:"La pente minimale d'une couverture en tuiles mécaniques est d'environ :", o:["30 à 40 %","5 %","10 %","100 %"], r:0, e:"Recouvrements sensibles au vent."},
  {q:"Le vent sur une toiture provoque surtout :", o:["Un soulèvement","Un tassement","Une dilatation","Rien"], r:0, e:"Dépression au-dessus."},
  {q:"Les pannes sont :", o:["Les éléments horizontaux qui portent la couverture","Les tôles","Les gouttières","Les murs"], r:0, e:"Posées sur les fermes."},
  {q:"Hauteur au faîtage pour 4 m de demi-portée à 20 % :", o:["0,80 m","2 m","0,20 m","4 m"], r:0, e:"4 × 0,20."},
  {q:"La pente courante d'une gouttière est :", o:["0,5 à 1 %","10 %","0 %","25 %"], r:0, e:"Écoulement vers les descentes."}
 ]},
{id:"tech-7", niv:2, titre:"L'étanchéité : toitures-terrasses, salles d'eau et ouvrages enterrés", duree:55, contenu:`## La toiture-terrasse
Composition de bas en haut :
1. **Dalle** support (béton armé ou plancher à corps creux) ;
2. **Forme de pente** de 1,5 à 2 % vers les évacuations (épaisseur minimale 4 cm) ;
3. **Isolant** (recommandé en climat chaud, voir Thermique) ;
4. **Revêtement d'étanchéité** : bicouche de bitume élastomère SBS, membrane synthétique (PVC, EPDM) ou système liquide (résine) ;
5. **Protection** : gravillons (terrasse inaccessible), dallettes sur plots ou carrelage scellé (terrasse accessible), autoprotection minérale.

!fig:dalle-coupe|Coupe d'une toiture-terrasse

## Les points singuliers (là où naissent les fuites)
- **Relevés** d'étanchéité d'au moins **15 cm** au-dessus de la protection, protégés en tête par une bande de solin ou une engravure dans l'**acrotère** ;
- **Évacuations** d'eaux pluviales : au moins **deux** par terrasse (une peut se boucher), avec crapaudines, plus un **trop-plein** ;
- **Traversées** (gaines, pieds de supports de climatiseurs, antennes) avec platines et manchons ;
- **Joints de dilatation** traités par des profils adaptés ;
- **Angles** rentrants et sortants renforcés (bandes de renfort).

> [!norme] Essai à l'eau
> Avant de poser la protection, on obstrue les évacuations et on met **5 cm d'eau pendant 48 heures** : aucune trace d'humidité ne doit apparaître en sous-face.

## Les salles d'eau
- Sol et murs de douche protégés par une **étanchéité sous carrelage** (SPEC : résine ou natte), remontée de 10 cm sur les murs et jusqu'à la hauteur de la douche (≈ 2 m) ;
- **Pente de 1 à 2 %** vers le siphon de sol, joints de carrelage soignés, silicone aux angles et autour des appareils ;
- Traversées de tuyaux étanchées avant carrelage ; seuil ou ressaut à la porte.

## Les ouvrages enterrés
Cuves, fosses, sous-sols, piscines :
- béton **compact** et bien vibré, dosé à 350 – 400 kg/m³, enrobage de 4 à 5 cm ;
- **joints de reprise** équipés de bandes d'arrêt d'eau (waterstop) ;
- **enduit hydrofuge** ou membrane du côté de l'eau ; **cuvelage** quand la nappe pousse ;
- **drainage** périphérique et regard pour évacuer l'eau autour des murs.

> [!exemple] Terrasse de 11,00 × 8,00 m
> Évacuations : 88 m² → **2 évacuations** (une par versant) + 1 trop-plein. Forme de pente à 1,5 % sur 4 m d'écoulement : 4 cm au bas, **10 cm** au faîte. Essai à l'eau : 88 × 0,05 = **4,4 m³**, soit 0,5 kN/m² de charge (supportable par la dalle).

> [!attention]
> Plus de la moitié des sinistres de toitures-terrasses viennent des **relevés** et des **évacuations**, pas de la partie courante.

> [!retenir]
> - Terrasse : dalle → forme de pente 1,5 – 2 % → isolant → étanchéité → protection.
> - Relevés ≥ 15 cm, au moins 2 évacuations + trop-plein, essai à l'eau 48 h.
> - Salles d'eau : SPEC, pente 1 – 2 % vers le siphon.
> - Enterrés : béton compact, waterstop, hydrofuge, drainage.`,
 sujet:{titre:"Étanchéité d'une toiture-terrasse, d'une salle d'eau et d'un local enterré", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Immeuble à Marcory : toiture-terrasse inaccessible de **12,00 × 9,00 m**, salles d'eau dans les logements et local technique enterré.

**Données**
- Une évacuation au moins par versant et par 100 m² de terrasse, plus un **trop-plein** ;
- Forme de pente à **1,5 %** sur une longueur d'écoulement de **4,50 m**, épaisseur minimale **4 cm** ;
- Protection en gravillons de **5 cm** ; relevés d'étanchéité d'au moins **15 cm** au-dessus de la protection ;
- Essai de mise en eau : **5 cm** d'eau pendant **48 h**.

### Partie A — Terrasse (10 points)
1. Décrire le complexe d'une toiture-terrasse de la dalle à la protection. (3 pts)
2. Calculer la surface et le nombre d'évacuations. (2 pts)
3. Calculer l'épaisseur de la forme de pente au point haut. (2 pts)
4. Calculer la hauteur minimale de l'acrotère (forme au point haut + 1 cm d'étanchéité + protection + relevé, + 5 cm pour l'engravure). (2 pts)
5. Calculer le volume d'eau de l'essai et la charge ajoutée sur la dalle. (1 pt)

### Partie B — Points singuliers (4 points)
6. Citer quatre points singuliers où naissent les fuites et la précaution pour chacun. (4 pts)

### Partie C — Salles d'eau (3 points)
7. Décrire l'étanchéité d'une douche à l'italienne. (3 pts)

### Partie D — Local enterré (3 points)
8. Comparer cuvelage et drainage pour un local enterré sous la nappe. (3 pts)`,
  corrige:`### Partie A — Terrasse (10 pts)
1. **Dalle** → **forme de pente** (1,5 à 2 %) → **isolant** (recommandé) → **revêtement d'étanchéité** (bicouche bitume SBS, membrane PVC/EPDM ou résine) → **protection** (gravillons, dallettes). *(3 pts)*
2. 12 × 9 = **108 m²** → **2 évacuations** (une par versant, chacune < 100 m²) + **1 trop-plein**. *(2 pts)*
3. 4 + 450 × 0,015 = 4 + 6,75 = **10,75 cm ≈ 11 cm**. *(2 pts)*
4. 11 + 1 + 5 + 15 + 5 = **37 cm** → acrotère d'au moins **40 cm** au-dessus de la dalle. *(2 pts)*
5. 108 × 0,05 = **5,4 m³** d'eau, soit **0,5 kN/m²** (supportable). *(1 pt)*

### Partie B — Points singuliers (4 pts)
6. *(4 pts)*
   - **Relevés** sur acrotère : hauteur suffisante, protégés en tête (bande de solin, engravure) ;
   - **Évacuations** : platine raccordée à l'étanchéité, crapaudine contre les feuilles ;
   - **Traversées** (tuyaux, supports de climatiseurs) : fourreaux et colliers étanches ;
   - **Joints de dilatation** : traitement spécial souple ; **angles** : renforts.

### Partie C — Salles d'eau (3 pts)
7. Forme de pente de **1 à 2 %** vers le siphon ; **étanchéité sous carrelage** (SPEC : résine ou natte) au sol et sur les murs jusqu'à **2 m**, remontée de 10 cm ailleurs ; bandes d'angle ; raccord étanche au siphon ; joints soignés et silicone autour des appareils. *(3 pts)*

### Partie D — Local enterré (3 pts)
8. **Cuvelage** : enveloppe en béton armé étanche (béton compact dosé à 350 – 400, enrobage 4 à 5 cm, joints traités) qui résiste à la pression de l'eau — indispensable sous la nappe. **Drainage** : on évacue l'eau avant qu'elle n'atteigne le mur (drain périphérique, gravier, géotextile) — suffisant au-dessus de la nappe. *(3 pts)*

> [!attention] Erreurs à éviter
> - Forme de pente trop faible : flaques qui stagnent et vieillissent l'étanchéité.
> - Relevés trop bas : l'eau passe par-dessus quand une évacuation se bouche.
> - Oublier le trop-plein.`},
 exercices:[
  {t:"Épaisseurs de forme de pente", d:1, e:`Terrasse de 12 m de large avec un seul versant vers une rive (longueur d'écoulement 12 m), pente 1,5 %, épaisseur minimale 4 cm. Calculer l'épaisseur maximale. Proposer une meilleure disposition.`, c:`Maximum : 4 + 1 200 × 0,015 = **22 cm** : beaucoup trop lourd et coûteux.
Avec **deux versants** (écoulement de 6 m) : 4 + 600 × 0,015 = **13 cm** ; avec des évacuations au centre de zones de 6 × 6 m, encore moins. On multiplie les évacuations plutôt que d'épaissir la forme.`},
  {t:"Ordre des couches", d:1, e:`Remettre dans l'ordre (de bas en haut) une terrasse accessible : carrelage scellé ; dalle ; étanchéité bicouche ; forme de pente ; isolant ; couche de désolidarisation et mortier de pose.`, c:`Dalle → **forme de pente** → **isolant** → **étanchéité bicouche** → **couche de désolidarisation et mortier de pose** → **carrelage scellé**.`},
  {t:"Essai à l'eau", d:2, e:`Une terrasse de 140 m² est mise en eau sur 5 cm pour l'essai. Quel volume d'eau et quelle charge sur la dalle ? Après 48 h, on voit une tache humide en sous-face près d'une descente : que faire ?`, c:`Volume : 140 × 0,05 = **7 m³** ; charge : 0,05 × 10 = **0,5 kN/m²**.
La tache près d'une descente indique un défaut au **raccord de l'évacuation** (platine mal soudée, crapaudine, manchon) : vidanger, reprendre le raccord, puis **refaire l'essai** avant de poser la protection.`},
  {t:"Douche à l'italienne", d:2, e:`Douche de 1,20 × 0,90 m avec siphon au centre, pente 1,5 %. Quel est le dénivelé entre le bord le plus éloigné et le siphon ? Quelles précautions d'étanchéité ?`, c:`Distance maximale (du coin au centre) : √(0,60² + 0,45²) = 0,75 m → dénivelé ≈ 0,75 × 0,015 = **1,1 cm** (on prend souvent 1,5 à 2 cm).
Précautions : **SPEC** sous carrelage au sol et sur les murs jusqu'à ≈ 2 m, bandes d'angle, raccord étanche au siphon, joints époxy ou silicone aux angles, seuil adapté pour que l'eau ne sorte pas.`},
  {t:"Sous-sol humide", d:3, e:`Un sous-sol en béton présente des infiltrations aux reprises de bétonnage entre le radier et les murs, et en pied de mur après les pluies. Proposer un diagnostic et des remèdes.`, c:`Diagnostic : **reprises de bétonnage** non équipées de **waterstop**, béton insuffisamment vibré, absence de **drainage** et pression de l'eau contre les murs en saison des pluies.
Remèdes : injection des reprises (résines expansives), enduit d'**imperméabilisation** (cuvelage) côté intérieur, et surtout réalisation d'un **drain périphérique** avec regard et évacuation pour supprimer la pression d'eau ; pour les ouvrages neufs : waterstop, béton compact et étanchéité extérieure.`}
 ],
 quiz:[
  {q:"La forme de pente d'une toiture-terrasse est d'au moins :", o:["1,5 à 2 %","0 %","10 %","30 %"], r:0, e:"L'eau ne doit pas stagner."},
  {q:"Hauteur minimale d'un relevé d'étanchéité au-dessus de la protection :", o:["15 cm","2 cm","50 cm","1 m"], r:0, e:"Point singulier."},
  {q:"L'essai d'étanchéité d'une terrasse consiste à :", o:["Mettre 5 cm d'eau pendant 48 h","Arroser 5 minutes","Peindre la dalle","Chauffer la dalle"], r:0, e:"Avant la protection."},
  {q:"Le waterstop sert à :", o:["Étancher les reprises de bétonnage","Évacuer l'eau de pluie","Isoler la terrasse","Ventiler le sous-sol"], r:0, e:"Bande d'arrêt d'eau."},
  {q:"Nombre minimal d'évacuations conseillé par terrasse :", o:["2 + un trop-plein","0","1 sans trop-plein","10"], r:0, e:"Une peut se boucher."}
 ]},
{id:"tech-15", niv:2, titre:"Les menuiseries extérieures et intérieures", duree:50, contenu:`## Le rôle des menuiseries
Fermer le bâtiment (**clos**), laisser entrer la **lumière** et l'**air**, protéger contre la pluie, le vent, le bruit, les insectes et les intrusions, permettre le passage.

## Le vocabulaire
- **Baie** : ouverture dans le mur ; **tableau, linteau, appui** : ses côtés, son dessus, son dessous ;
- **Dormant** (ou bâti, huisserie pour une porte) : cadre fixé au mur ; **ouvrant** (ou vantail) : partie mobile ;
- **Précadre** : cadre posé pendant le gros œuvre pour recevoir plus tard la menuiserie ;
- **Paumelles** (charnières), **serrure**, **crémone**, **poignée** : quincaillerie ;
- **Calfeutrement** : joint entre dormant et maçonnerie (mastic, mousse, mortier).

## Les matériaux
| Matériau | Avantages | Points d'attention |
|---|---|---|
| **Bois** (iroko, framiré, samba…) | Chaleureux, réparable, bon isolant | Entretien (vernis, peinture), termites, humidité |
| **Aluminium** | Léger, durable, sans entretien, grandes baies | Conducteur de chaleur, coût |
| **PVC** | Bon isolant, peu d'entretien | Sensible aux UV et à la chaleur s'il est de mauvaise qualité |
| **Acier** (portes métalliques, grilles) | Robuste, sécurité | Corrosion : peinture antirouille |

## Les types d'ouvrants
Battant (à la française), **coulissant** (gain de place, très répandu en aluminium), à soufflet, oscillo-battant, **naco** (jalousies à lames de verre orientables : ventilation permanente), persiennes et volets (protection solaire et intrusion).

## Les vitrages
Simple vitrage clair ou teinté, **feuilleté** (sécurité : il ne se disperse pas en éclats), **trempé** (résistant, se brise en petits morceaux), **réfléchissant** ou à contrôle solaire (limite les apports de chaleur), double vitrage (isolation thermique et acoustique, pour les locaux climatisés).

## La pose
- **Réservations** : baie = dimension de la menuiserie + jeu de pose (≈ 1 cm de chaque côté) ;
- Pose **en tableau** (dans l'épaisseur du mur) ou **en applique** ; fixation par pattes scellées ou chevilles ;
- **D'aplomb, de niveau et d'équerre** (vérifier les diagonales) ;
- **Calfeutrement** étanche et **appui** en pente vers l'extérieur avec **goutte d'eau** (rainure sous l'appui) pour que l'eau ne coule pas sur la façade.

## Les règles de confort
- **Éclairage naturel** : surface vitrée d'au moins **1/6 de la surface du sol** de la pièce (règle courante) ;
- **Ventilation** : chaque pièce principale doit pouvoir être aérée ; ventilation traversante favorisée en climat chaud ;
- **Protection solaire** : débords de toiture, auvents, brise-soleil, volets (voir Thermique).
> [!exemple] Chambre de 3,60 × 3,20 m
> Surface : 11,52 m² → vitrage minimal : 11,52 / 6 = **1,92 m²** → une fenêtre de 1,20 × 1,20 m (1,44 m²) ne suffit pas tout à fait : prendre 1,40 × 1,40 m ou deux fenêtres pour une ventilation traversante.

> [!retenir]
> - Dormant/ouvrant, quincaillerie, calfeutrement.
> - Bois, aluminium, PVC, acier : choisir selon usage, entretien et budget.
> - Pose d'aplomb, de niveau, d'équerre ; appui avec goutte d'eau.
> - Vitrage ≥ 1/6 de la surface du sol ; ventilation et protection solaire.`,
 sujet:{titre:"Menuiseries d'une maison : éclairage naturel, choix et pose des fenêtres", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous choisissez les menuiseries d'une maison à Yamoussoukro et vous contrôlez leur pose.

**Données**
- Chambre 1 : **4,00 × 3,50 m** ; chambre 2 : **3,60 × 3,00 m** ; séjour : **5,20 × 4,20 m** ;
- Règle : surface vitrée ≥ **1/6** de la surface du sol ;
- Fenêtres standard : **1,20 × 1,00** ; **1,20 × 1,40** ; **1,40 × 1,40** ; jeu de pose ≈ **1 cm** de chaque côté.

### Partie A — Rôles et vocabulaire (5 points)
1. Citer quatre fonctions d'une menuiserie extérieure. (2 pts)
2. Définir : dormant, ouvrant, tableau, appui, rejingot, jet d'eau, larmier, calfeutrement. (3 pts)

### Partie B — Éclairage naturel (6 points)
3. Calculer la surface vitrée minimale de chaque pièce et choisir les fenêtres. (4 pts)
4. Pourquoi préférer deux fenêtres sur deux façades différentes ? (2 pts)

### Partie C — Choix (4 points)
5. Comparer bois, aluminium, PVC et métal (acier) pour une maison en climat chaud et humide. (2 pts)
6. Quel type d'ouvrant et de vitrage conseiller pour une chambre côté rue bruyante et ensoleillée ? (2 pts)

### Partie D — Pose (5 points)
7. Pour une fenêtre de 1,20 × 1,40, quelles dimensions de réservation demander au maçon ? (1 pt)
8. Décrire les points de contrôle d'une pose de fenêtre (fixation, aplomb, étanchéité, appui). (4 pts)`,
  corrige:`### Partie A — Rôles (5 pts)
1. Éclairer, **ventiler**, protéger des intempéries, **sécuriser** (effraction), isoler du bruit et de la chaleur, donner vue. *(2 pts)*
2. **Dormant** : cadre fixe scellé ; **ouvrant** : partie mobile ; **tableau** : côté de la baie ; **appui** : partie basse de la baie, en pente vers l'extérieur ; **rejingot** : relief de l'appui contre lequel bute le dormant ; **jet d'eau** : profil qui rejette l'eau en bas de l'ouvrant ; **larmier** : goutte d'eau sous l'appui ; **calfeutrement** : joint entre dormant et maçonnerie. *(3 pts)*

### Partie B — Éclairage (6 pts)
3. *(4 pts)*

| Pièce | Surface | Vitrage minimal | Choix |
|---|---|---|---|
| Chambre 1 | 14,00 m² | 2,33 m² | 2 × (1,20 × 1,00) = 2,40 m² |
| Chambre 2 | 10,80 m² | 1,80 m² | 1 × (1,40 × 1,40) = 1,96 m² |
| Séjour | 21,84 m² | 3,64 m² | 2 × (1,40 × 1,40) = 3,92 m² |

4. Pour la **ventilation traversante** (l'air entre par une façade et sort par l'autre) : indispensable au confort sans climatisation. *(2 pts)*

### Partie C — Choix (4 pts)
5. **Aluminium** : léger, durable, sans entretien, le plus courant ; **bois** : chaleureux mais sensible aux termites et à l'humidité (traitement) ; **PVC** : isolant, se déforme au soleil s'il est de mauvaise qualité ; **acier** : robuste (portes, grilles), rouille sans protection. *(2 pts)*
6. Coulissant ou battant aluminium à rupture de pont thermique avec **vitrage feuilleté** (acoustique, sécurité) et **teinté ou à contrôle solaire** ; protection extérieure (volet, brise-soleil). *(2 pts)*

### Partie D — Pose (5 pts)
7. **1,22 × 1,42 m** (menuiserie + 1 cm de chaque côté). *(1 pt)*
8. Fixations par pattes ou chevilles dans la maçonnerie saine (pas dans un joint) ; **aplomb, niveau, équerrage** (ouvrants qui ferment sans frotter) ; **calfeutrement** continu (mastic, mousse + joint) ; appui en **pente** vers l'extérieur avec **rejingot** et **larmier** ; trous d'évacuation des eaux non bouchés ; protection pendant les travaux. *(4 pts)*

> [!attention] Erreurs à éviter
> - Réservations trop justes : on casse la maçonnerie pour poser.
> - Appui horizontal : l'eau entre sous la fenêtre.
> - Une seule petite fenêtre par chambre : chaleur et humidité.`},
 exercices:[
  {t:"Surface vitrée minimale", d:1, e:`Vérifier l'éclairement naturel (règle du 1/6) : a) séjour de 5,60 × 4,20 m avec une baie de 2,40 × 2,20 et une fenêtre de 1,20 × 1,20 ; b) chambre de 3,40 × 3,00 m avec une fenêtre de 1,20 × 1,20.`, c:`a) Sol : 23,52 m² → minimum 3,92 m² ; vitrages : 5,28 + 1,44 = **6,72 m²** ✔.
b) Sol : 10,20 m² → minimum **1,70 m²** ; fenêtre : 1,44 m² ✘ → agrandir (1,40 × 1,40 = 1,96 m²) ou ajouter une seconde fenêtre.`},
  {t:"Dimensions de réservation", d:1, e:`Une fenêtre aluminium a un dormant de 1,18 × 1,18 m ; jeu de pose 1 cm de chaque côté. Quelle baie réserver dans la maçonnerie ? Et pour une porte de 0,83 × 2,13 m hors tout d'huisserie ?`, c:`Fenêtre : 1,18 + 0,02 = **1,20 × 1,20 m**.
Porte : 0,83 + 0,02 = 0,85 m de large ; 2,13 + 0,01 (jeu en haut) = **2,14 m** de haut, en tenant compte de l'épaisseur du revêtement de sol fini pour la hauteur.`},
  {t:"Choisir les menuiseries", d:2, e:`Proposer un type de menuiserie et de vitrage pour : a) façade très ensoleillée d'un bureau climatisé ; b) salle d'eau ; c) porte d'entrée d'une maison isolée ; d) chambre en zone moustiquée sans climatisation.`, c:`a) **Aluminium à rupture de pont thermique**, **vitrage à contrôle solaire** (ou double vitrage), protections extérieures.
b) **Naco** ou châssis à soufflet en aluminium, vitre **imprimée** (opaque).
c) Porte **métallique** ou bois massif avec serrure multipoints, éventuellement grille.
d) Fenêtres coulissantes ou nacos avec **moustiquaire**, persiennes pour ventiler la nuit en sécurité.`},
  {t:"Défauts de pose", d:2, e:`Après la saison des pluies, de l'eau coule sous une fenêtre à l'intérieur et la façade est tachée sous chaque appui. Quelles en sont les causes probables ?`, c:`- **Calfeutrement** insuffisant entre dormant et maçonnerie ;
- **Appui** sans pente vers l'extérieur ou sans **goutte d'eau** : l'eau revient vers le mur et coule sur la façade ;
- trous d'évacuation (drainage) du dormant aluminium bouchés ou absents.
Remèdes : refaire le joint mastic, reprendre l'appui avec une pente de 10 % et une goutte d'eau, déboucher les drainages.`},
  {t:"Vitrage de sécurité", d:1, e:`Pourquoi impose-t-on un vitrage feuilleté ou trempé pour une porte vitrée d'école ou un garde-corps vitré ?`, c:`Un vitrage ordinaire se brise en **grands éclats coupants**. Le **feuilleté** reste en place grâce à son film intercalaire ; le **trempé** est plus résistant et se brise en petits morceaux peu coupants. Dans les zones de passage, surtout avec des enfants, ils évitent des blessures graves.`}
 ],
 quiz:[
  {q:"La partie fixe d'une fenêtre s'appelle :", o:["Le dormant","L'ouvrant","La crémone","Le vantail"], r:0, e:"Fixée au mur."},
  {q:"Surface vitrée minimale d'une pièce de 12 m² (règle du 1/6) :", o:["2 m²","6 m²","0,5 m²","12 m²"], r:0, e:"12 / 6."},
  {q:"La goutte d'eau sous un appui sert à :", o:["Empêcher l'eau de couler sur la façade","Décorer","Ventiler","Fixer la fenêtre"], r:0, e:"L'eau se détache."},
  {q:"Un naco est :", o:["Une fenêtre à lames de verre orientables","Une porte en fer","Une serrure","Un vitrage double"], r:0, e:"Ventilation permanente."},
  {q:"Un vitrage feuilleté :", o:["Reste en place en cas de bris","Se dissout","Est toujours teinté","Est interdit"], r:0, e:"Film intercalaire."}
 ]},
{id:"tech-16", niv:2, titre:"Les finitions : enduits, chapes, carrelages, faux plafonds et peintures", duree:55, contenu:`## L'ordre des finitions
1. Gros œuvre terminé, bâtiment **hors d'eau et hors d'air** ;
2. **Réseaux encastrés** (gaines électriques, tuyaux) **testés** ;
3. **Enduits** intérieurs et extérieurs ;
4. **Faux plafonds**, **chapes** ;
5. **Carrelage**, faïence ;
6. Menuiseries intérieures, appareillage électrique, appareils sanitaires ;
7. **Peinture** (impression puis finitions), nettoyage.

## Les enduits au mortier de ciment
- **Support** propre, rugueux, humidifié (jamais sur un mur sec en plein soleil) ;
- Trois couches à l'extérieur : **gobetis** (accrochage, mortier riche et fluide), **corps d'enduit** (dressage à la règle sur des **nus** ou repères), **couche de finition** (talochée, lissée, grattée, tyrolienne) ;
- Épaisseur totale 1,5 à 2 cm ; **grillage** ou toile de verre aux jonctions béton/agglos pour limiter les fissures ;
- **Cure** : humidifier 2 à 3 jours ; tolérance de planéité : **5 mm sous une règle de 2 m**.

## Les chapes
Mortier de 3 à 6 cm (dosé à 350 – 400 kg/m³) pour dresser un sol avant un revêtement collé ; chape **désolidarisée** (sur film) ou **flottante** (sur isolant) pour l'acoustique. Joints de fractionnement sur les grandes surfaces.

## Les carrelages et faïences
- **Pose scellée** (sur lit de mortier) ou **pose collée** (mortier-colle sur support plan, **double encollage** pour les grands formats) ;
- **Calepinage** : commencer au centre ou sur l'axe visible, coupes en périphérie et dans les zones cachées ;
- **Joints** de 2 à 5 mm, réguliers ; **joints de fractionnement** sur les grandes surfaces (environ tous les 40 à 60 m²) et au droit des joints du gros œuvre ; joint souple en périphérie ;
- Contrôle : carreaux qui « sonnent creux » (mal collés) à refuser, alignement et planéité.

## Les faux plafonds
Plaques de plâtre (BA13) sur ossature métallique, dalles 60 × 60 démontables, staff (plâtre armé de filasse). Ils cachent les réseaux, améliorent l'isolation (avec un isolant au-dessus) et l'acoustique. **Trappes de visite** près des appareils (climatiseurs, boîtes de dérivation).

## Les peintures
1. **Préparation** : support sec (un enduit ciment neuf doit sécher plusieurs semaines), propre, dépoussiéré ; rebouchage, ponçage ;
2. **Impression** (sous-couche) : fixe le support et uniformise l'absorption ;
3. **Deux couches de finition** croisées, en respectant le **temps de séchage** entre couches ;
Choisir le produit selon le support : vinylique/acrylique (murs intérieurs), peinture de façade (pliolite, siloxane), glycéro ou laque (bois, métal), **antirouille** sur les métaux, peinture lessivable dans les cuisines et salles d'eau.

## Les défauts courants
| Défaut | Cause probable |
|---|---|
| Fissures en réseau sur l'enduit | Retrait : enduit trop riche, trop épais, séché trop vite |
| Fissure franche à la jonction poteau/agglos | Matériaux différents sans grillage de renfort |
| Peinture qui cloque ou s'écaille | Support humide, pas d'impression |
| Taches blanches (efflorescences) | Sels entraînés par l'humidité |
| Carreaux qui sonnent creux, se décollent | Colle mal étalée, support poussiéreux, pas de double encollage |

> [!retenir]
> - Ordre : réseaux testés → enduits → plafonds, chapes → carrelage → équipements → peinture.
> - Enduit : gobetis, corps, finition ; 5 mm sous la règle de 2 m.
> - Carrelage : calepinage, joints, fractionnement ; peinture : support sec, impression + 2 couches.`,
 sujet:{titre:"Organiser et contrôler les finitions : enduits, chapes, carrelages, faux plafonds, peintures", duree:60, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Vous êtes conducteur de travaux d'un immeuble de bureaux à Treichville, en phase de finitions.

**Données**
- Contrôle d'un enduit : flèche de **7 mm** sous la règle de 2 m ; tolérance : **5 mm** ;
- Hall de **15,00 × 8,00 m** à carreler ; joints de fractionnement tous les **40 à 60 m²** ;
- Bureau de **4,80 × 3,60 m** en dalles de faux plafond **60 × 60** (+ 5 %) ;
- Peinture sur un enduit ciment posé il y a **une semaine** (encore humide).

### Partie A — Ordre des finitions (5 points)
1. Remettre dans l'ordre : peinture, carrelage, enduits, faux plafonds et chapes, réseaux encastrés testés, appareils sanitaires et appareillage électrique, bâtiment hors d'eau et hors d'air. Justifier deux places. (5 pts)

### Partie B — Enduits et chapes (6 points)
2. Décrire l'enduit extérieur en trois couches et la précaution aux jonctions béton/agglos. (3 pts)
3. L'enduit contrôlé est-il accepté ? Que faire ? (1 pt)
4. Quelle épaisseur et quel dosage pour une chape ? Qu'est-ce qu'une chape désolidarisée ? (2 pts)

### Partie C — Carrelage et faux plafond (5 points)
5. Combien de zones de fractionnement faut-il dans le hall ? Où placer les joints ? (2 pts)
6. Calculer le nombre de dalles de faux plafond du bureau. (2 pts)
7. Pourquoi laisser un joint souple en périphérie d'un carrelage ? (1 pt)

### Partie D — Peinture (4 points)
8. Que risque-t-on à peindre sur l'enduit d'une semaine ? (2 pts)
9. Décrire le système de peinture correct. (2 pts)`,
  corrige:`### Partie A — Ordre (5 pts)
1. Hors d'eau et hors d'air → réseaux encastrés testés → **enduits** → faux plafonds et chapes → **carrelage** → appareils sanitaires et appareillage électrique → **peinture**. Les réseaux sont testés **avant** d'être cachés par les enduits ; la peinture vient en **dernier** pour ne pas être salie ou abîmée par les autres corps d'état. *(5 pts)*

### Partie B — Enduits et chapes (6 pts)
2. **Gobetis** (accrochage, mortier riche et fluide) → **corps d'enduit** (dressage) → **finition** (talochée, lissée, grattée) ; épaisseur totale 1,5 à 2 cm ; **grillage** ou toile de verre aux jonctions béton/agglos pour éviter les fissures ; cure 2 à 3 jours. *(3 pts)*
3. 7 mm > 5 mm → **refusé** : reprise (ponçage des bosses, recharge des creux) avant la peinture. *(1 pt)*
4. **3 à 6 cm**, dosée à **350 – 400 kg/m³** ; désolidarisée : coulée sur un film (polyane) qui la sépare du support, pour limiter la fissuration et les bruits d'impact. *(2 pts)*

### Partie C — Carrelage et faux plafond (5 pts)
5. 15 × 8 = 120 m² → **2 à 3 zones** (par exemple 3 zones de 5,00 × 8,00 m = 40 m²) ; joints au droit des joints du gros œuvre et des changements de pièce. *(2 pts)*
6. 4,80 × 3,60 = 17,28 m² / 0,36 = 48 → + 5 % → **51 dalles**. *(2 pts)*
7. Le carrelage se dilate (chaleur, humidité) : sans joint souple contre les murs, il se soulève (« tuilage ») ou se fissure. *(1 pt)*

### Partie D — Peinture (4 pts)
8. Cloquage, décollement, taches de salpêtre et réaction de l'alcalinité du ciment frais avec la peinture. *(2 pts)*
9. Support **sec** (plusieurs semaines), propre, poncé, rebouché → **impression** (sous-couche) → **deux couches de finition** croisées, en respectant le temps de séchage entre couches. *(2 pts)*

> [!attention] Erreurs à éviter
> - Peindre avant la pose des appareils : retouches partout.
> - Carreler un grand hall sans joints de fractionnement.
> - Accepter un enduit gondolé : la peinture souligne tous les défauts.`},
 exercices:[
  {t:"Remettre les travaux dans l'ordre", d:1, e:`Classer : peinture de finition ; pose des prises et interrupteurs ; enduits intérieurs ; saignées et gaines électriques ; carrelage ; faux plafonds ; impression ; test des canalisations.`, c:`Saignées et gaines électriques → **test des canalisations** → **enduits intérieurs** → **faux plafonds** → **carrelage** → **pose des prises et interrupteurs** → **impression** → **peinture de finition**.`},
  {t:"Planning des finitions", d:2, e:`Les enduits intérieurs d'une maison sont terminés le 1er mars. Délais minimaux : faux plafonds 1 semaine après les enduits ; chape 7 jours avant carrelage ; carrelage 10 jours ; peinture sur enduit ciment au moins 4 semaines après les enduits. Quand peut-on commencer la peinture ? Le carrelage peut-il se faire pendant le séchage des enduits ?`, c:`Peinture : au plus tôt **4 semaines** après le 1er mars, soit vers le **29 mars**.
Oui : pendant ce temps, on réalise faux plafonds (à partir du 8 mars), chapes, puis carrelage (une dizaine de jours) : le séchage des enduits n'est pas du temps perdu.`},
  {t:"Calepinage d'un salon", d:2, e:`Salon de 6,00 × 4,50 m en carreaux de 60 × 60 cm avec joints de 3 mm. Combien de carreaux entiers par rangée dans chaque sens ? Comment placer les coupes ?`, c:`Module : 0,603 m. Sens de 6,00 m : 6,00 / 0,603 = 9,95 → 9 carreaux entiers + une coupe de 0,57 m ; sens de 4,50 m : 4,50 / 0,603 = 7,46 → 7 entiers + 0,28 m.
On **centre** le calepinage : sens de 6 m → 9 entiers et deux coupes d'environ 28 cm de chaque côté ; sens de 4,50 m → 7 entiers et deux coupes de 14 cm, ou 6 entiers et deux coupes de 44 cm (plus esthétique, moins de petites coupes).`},
  {t:"Diagnostiquer une peinture qui cloque", d:2, e:`Trois mois après la livraison, la peinture d'une chambre cloque en bas des murs et une poudre blanche apparaît. Diagnostic et remède ?`, c:`Humidité dans le mur (remontées capillaires faute d'**arase étanche**, ou enduit peint trop tôt) : l'eau pousse le film de peinture (cloques) et dépose des sels (**efflorescences**).
Remède : supprimer la cause (arase, drainage, hydrofuge en pied de mur), laisser sécher, brosser les sels, appliquer une impression adaptée puis une peinture **microporeuse**.`},
  {t:"Planéité d'un enduit", d:1, e:`En posant une règle de 2 m sur un enduit, on mesure des creux de 3 mm, 7 mm et 4 mm à différents endroits. L'enduit est-il recevable (tolérance 5 mm) ?`, c:`Les creux de 3 et 4 mm sont acceptables ; celui de **7 mm** dépasse la tolérance : la zone doit être **reprise** (ou faire l'objet d'une réserve à la réception) avant peinture, sinon le défaut sera très visible en lumière rasante.`}
 ],
 quiz:[
  {q:"La première couche d'un enduit extérieur s'appelle :", o:["Le gobetis","La finition","L'impression","La chape"], r:0, e:"Couche d'accrochage."},
  {q:"Tolérance courante de planéité d'un enduit :", o:["5 mm sous la règle de 2 m","5 cm sous la règle de 2 m","0 mm","2 cm par mètre"], r:0, e:"Contrôle à la règle."},
  {q:"Un carreau qui sonne creux est :", o:["Mal collé","Parfaitement posé","Plus solide","Isolant"], r:0, e:"À reprendre."},
  {q:"Avant de peindre, l'enduit ciment doit être :", o:["Sec","Mouillé","Chaud","Peint au plâtre"], r:0, e:"Sinon la peinture cloque."},
  {q:"Les efflorescences sont :", o:["Des taches blanches de sels","Des moisissures noires","Des fissures","Des bulles d'air"], r:0, e:"Liées à l'humidité."}
 ]},
{id:"tech-6", niv:2, titre:"Les équipements techniques : électricité, plomberie et assainissement", duree:60, contenu:`## L'installation électrique d'un logement
De l'extérieur vers l'intérieur : **branchement** au réseau, **compteur**, **disjoncteur de branchement** (il limite la puissance souscrite et protège l'installation), **tableau** de répartition avec **interrupteurs différentiels 30 mA** (protection des personnes) et **disjoncteurs divisionnaires** (un par circuit), puis les **circuits** :
| Circuit | Section du câble | Protection courante |
|---|---|---|
| Éclairage (≤ 8 points) | 1,5 mm² | 10 A |
| Prises 16 A (≤ 8 prises) | 2,5 mm² | 16 à 20 A |
| Chauffe-eau, climatiseur | 2,5 mm² | 20 A |
| Cuisinière, plaques | 6 mm² | 32 A |
La **mise à la terre** (piquet, câble de terre vert-jaune, barrette de mesure) et les **liaisons équipotentielles** des salles d'eau sont **indispensables** : sans elles, le différentiel ne protège pas correctement.
- Puissance et intensité : **P = U × I** (U = 230 V en monophasé) ; un climatiseur de 1 200 W appelle environ 5,2 A.

## La plomberie : alimentation
**Branchement** au réseau, compteur, robinet d'arrêt général, éventuellement **réservoir** et **surpresseur** (pression irrégulière), puis distribution en PPR, PEHD ou multicouche : diamètres 25 à 32 mm pour l'alimentation principale, 16 à 20 mm vers les appareils. **Eau chaude** : chauffe-eau électrique ou **solaire**. Essai de **mise en pression** avant fermeture des saignées.

## La plomberie : évacuations
- **Eaux usées** (EU : lavabos, douches, éviers) en PVC Ø 40 à 50 ; **eaux vannes** (EV : WC) en Ø 100 ;
- **Pente** des canalisations horizontales **1 à 3 %** ; **siphon** sous chaque appareil (contre les odeurs) ;
- **Chutes** verticales prolongées en **ventilation** jusqu'en toiture ;
- **Regards** aux changements de direction et aux jonctions ; tampons accessibles.

## L'assainissement autonome
En l'absence de réseau public d'égouts : **fosse septique toutes eaux** (prétraitement : décantation et digestion des matières), puis **épandage** dans le sol (tranchées filtrantes) ou **puisard** selon la perméabilité du terrain ; **bac à graisses** pour la cuisine dans les restaurants. Ordre de grandeur courant : **3 m³** de volume utile pour une maison jusqu'à 5 pièces principales, + 1 m³ par pièce supplémentaire. Vidange périodique (tous les 3 à 5 ans). Éloigner l'ensemble des **puits** d'eau de boisson (au moins 30 à 35 m) et des fondations.

## Les eaux pluviales
Gouttières, descentes, regards, caniveaux, puisards ou raccordement au réseau pluvial ; ne jamais les envoyer dans la fosse septique (elle déborderait). Récupération possible dans une citerne pour l'arrosage.

> [!exemple] Puissance d'une maison
> 2 climatiseurs de 1 200 W, un chauffe-eau de 1 500 W, éclairage 500 W, prises 2 000 W : P = **6 400 W** ; avec un coefficient de simultanéité de 0,7 : 4 480 W → I = 4 480 / 230 = **19,5 A** → disjoncteur de branchement et puissance souscrite au calibre supérieur.

> [!attention]
> Ne jamais toucher une installation sous tension ; faire réaliser et contrôler l'installation par un électricien qualifié ; un différentiel 30 mA qui « saute » signale un défaut d'isolement à rechercher, pas à shunter.

> [!retenir]
> - Électricité : disjoncteur de branchement, différentiels 30 mA, un disjoncteur par circuit, terre obligatoire ; P = U × I.
> - Plomberie : essai en pression ; évacuations à 1 – 3 %, siphons, ventilation des chutes.
> - Assainissement autonome : fosse toutes eaux + épandage ou puisard, loin des puits.`,
 sujet:{titre:"Équipements d'une villa : puissance électrique, circuits, évacuations et assainissement", duree:90, niveau:"BT / BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Villa de **6 pièces principales** à Angré, sans réseau public d'égouts.

**Électricité** : 3 climatiseurs de **1 200 W** ; chauffe-eau **1 500 W** ; éclairage **600 W** ; prises (réfrigérateur, TV, ordinateurs…) **2 500 W** ; plaques de cuisson **2 000 W** ; coefficient de simultanéité **0,7** ; U = **230 V**.

**Plomberie** : WC raccordé à la chute par **6 m** de canalisation horizontale ; pente **2 %**.

**Assainissement** : fosse septique toutes eaux de volume utile **3 m³ jusqu'à 5 pièces principales, + 1 m³ par pièce supplémentaire**.

### Partie A — Électricité (9 points)
1. Décrire la chaîne de l'installation du réseau au point d'utilisation. (2 pts)
2. Calculer la puissance installée, la puissance probable et l'intensité. Choisir le calibre du disjoncteur de branchement. (4 pts)
3. Donner la section des conducteurs et le calibre de protection : circuit d'éclairage, prises 16 A, climatiseur, plaques. (2 pts)
4. Quel est le rôle d'un interrupteur différentiel 30 mA ? (1 pt)

### Partie B — Plomberie (6 points)
5. Distinguer eaux usées, eaux vannes et eaux pluviales ; donner les diamètres usuels d'évacuation. (3 pts)
6. Calculer la dénivelée de la canalisation du WC. Pourquoi une pente ni trop faible ni trop forte ? (2 pts)
7. À quoi sert un siphon ? (1 pt)

### Partie C — Assainissement (5 points)
8. Calculer le volume de la fosse septique. (1 pt)
9. Expliquer le fonctionnement fosse septique + épandage (ou puisard) et les règles d'implantation. (4 pts)`,
  corrige:`### Partie A — Électricité (9 pts)
1. Réseau → **branchement** → **compteur** → **disjoncteur de branchement** → **tableau** (interrupteurs différentiels, disjoncteurs divisionnaires) → **circuits** → points d'utilisation ; liaison à la **terre**. *(2 pts)*
2. P = 3 600 + 1 500 + 600 + 2 500 + 2 000 = **10 200 W** ; probable : 0,7 × 10 200 = **7 140 W** ; I = 7 140 / 230 = **31 A** → calibre supérieur (**32 A**) ou branchement triphasé. *(4 pts)*
3. Éclairage **1,5 mm² / 10 A** ; prises **2,5 mm² / 16 à 20 A** ; climatiseur **2,5 mm² / 20 A** ; plaques **6 mm² / 32 A**. *(2 pts)*
4. Il coupe le courant dès qu'une fuite de 30 mA passe à la terre (souvent à travers une personne) : **protection des personnes** contre l'électrocution. *(1 pt)*

### Partie B — Plomberie (6 pts)
5. **EU** : lavabos, douches, éviers (Ø 40 à 50) ; **EV** : WC (Ø 100) ; **EP** : toitures et cours (descentes, caniveaux), évacuées **séparément**. *(3 pts)*
6. 6 × 0,02 = **12 cm**. Trop faible : dépôts et bouchages ; trop forte : l'eau file seule et laisse les matières (1 à 3 %). *(2 pts)*
7. La garde d'eau du siphon bloque les **odeurs** et les insectes venant du réseau. *(1 pt)*

### Partie C — Assainissement (5 pts)
8. 3 + 1 × (6 − 5) = **4 m³**. *(1 pt)*
9. La fosse **décante** les matières et les **digère** (bactéries) ; l'effluent prétraité est infiltré par **épandage** (tranchées filtrantes) ou un **puisard** selon le sol. Règles : fosse ventilée, accessible pour la vidange, à distance des puits et des limites (souvent 5 m de l'habitation, 35 m d'un puits d'eau potable), épandage au-dessus de la nappe. *(4 pts)*

> [!attention] Erreurs à éviter
> - Mettre tous les climatiseurs sur un circuit de prises.
> - Raccorder les eaux pluviales à la fosse septique : elle déborde à chaque pluie.
> - Puisard près d'un puits d'eau de boisson.`},
 exercices:[
  {t:"Intensité appelée", d:1, e:`Calculer l'intensité appelée sous 230 V par : a) un climatiseur de 2 300 W ; b) une plaque de cuisson de 3 500 W ; c) un chauffe-eau de 1 500 W. Quel calibre de protection et quelle section de câble pour chacun ?`, c:`a) I = 2 300 / 230 = **10 A** → disjoncteur 16 ou 20 A, câble **2,5 mm²**.
b) I = 3 500 / 230 = **15,2 A** → circuit spécialisé **32 A**, câble **6 mm²** (plaques et cuisinière).
c) I = 1 500 / 230 = **6,5 A** → disjoncteur 20 A, câble **2,5 mm²**.`},
  {t:"Puissance à souscrire", d:2, e:`Une maison comporte 3 climatiseurs de 1 200 W, un chauffe-eau de 1 500 W, l'éclairage (600 W) et des prises (2 500 W). Coefficient de simultanéité 0,7. Calculer la puissance et l'intensité appelées.`, c:`P = 3 × 1 200 + 1 500 + 600 + 2 500 = **8 200 W** ; avec 0,7 : **5 740 W** → I = 5 740 / 230 = **25 A** environ.
On choisit le calibre normalisé immédiatement supérieur pour le disjoncteur de branchement (par exemple 30 A) et la puissance souscrite correspondante.`},
  {t:"Pente d'une évacuation", d:1, e:`Une canalisation de WC en PVC Ø 100 de 8 m relie la salle d'eau au regard extérieur avec une pente de 2 %. Quel dénivelé faut-il ? Le fil d'eau au départ est à −0,25 : à quelle cote arrive-t-on au regard ?`, c:`Dénivelé : 8 × 0,02 = **0,16 m**.
Cote d'arrivée : −0,25 − 0,16 = **−0,41**. Le regard doit donc avoir son fil d'eau au plus haut à −0,41.`},
  {t:"Fosse septique", d:2, e:`Une maison compte 6 pièces principales. Avec la règle de 3 m³ jusqu'à 5 pièces + 1 m³ par pièce supplémentaire, quel volume utile prévoir ? Où ne doit-on pas l'implanter ?`, c:`Volume : 3 + 1 = **4 m³**.
Ne pas l'implanter près d'un **puits** d'eau de boisson (au moins 30 à 35 m), sous une voie carrossable non prévue pour, contre les fondations, ni dans une zone inondable ; garder un accès pour la vidange.`},
  {t:"Consommation d'un climatiseur", d:2, e:`Un climatiseur de 1 200 W fonctionne 8 h par jour pendant 30 jours. Calculer l'énergie consommée et son coût à 80 F/kWh. Citer deux moyens de la réduire.`, c:`E = 1,2 kW × 8 h × 30 = **288 kWh** → coût : 288 × 80 = **23 040 F** par mois.
Réductions : isoler la toiture et protéger les vitrages du soleil (moins de chaleur à extraire), régler la consigne à 25 – 26 °C, choisir un appareil **inverter** à haut rendement, fermer portes et fenêtres pendant le fonctionnement.`}
 ],
 quiz:[
  {q:"L'interrupteur différentiel 30 mA protège :", o:["Les personnes contre l'électrocution","Les câbles contre la chaleur du soleil","La toiture","La peinture"], r:0, e:"Il détecte les fuites de courant."},
  {q:"Section courante d'un circuit de prises 16 A :", o:["2,5 mm²","0,5 mm²","16 mm²","1 mm²"], r:0, e:"Protection 16 à 20 A."},
  {q:"Pente courante des évacuations horizontales :", o:["1 à 3 %","0 %","20 %","50 %"], r:0, e:"Écoulement sans dépôt."},
  {q:"Le siphon sous un lavabo sert à :", o:["Bloquer les odeurs","Augmenter la pression","Chauffer l'eau","Filtrer l'eau potable"], r:0, e:"Garde d'eau."},
  {q:"Les eaux pluviales doivent être envoyées :", o:["Hors de la fosse septique","Dans la fosse septique","Dans le puits d'eau potable","Sous le dallage"], r:0, e:"La fosse déborderait."}
 ]},
{id:"tech-17", niv:3, titre:"Fondations profondes, radiers et ouvrages enterrés", duree:55, contenu:`## Quand les fondations superficielles ne suffisent plus
- Bon sol **trop profond** (vases et argiles molles lagunaires, remblais récents) ;
- **Charges très fortes** (immeubles, châteaux d'eau, silos) ;
- Risque d'**affouillement** (berges, rivières) ou de **tassements** inacceptables.
Solutions : **radier général**, **puits**, **pieux** ou **micropieux**, selon l'étude de sol (voir Géotechnique pour les calculs).

!fig:fondations-types|Fondations superficielles, semi-profondes et profondes

## Le radier général
Une grande dalle en béton armé sous tout le bâtiment, qui répartit les charges sur toute l'emprise : contrainte faible sur le sol, tassements plus uniformes. Radier **plat** épais ou **nervuré** (dalle + poutres renversées). Épaisseur courante 30 à 60 cm pour des immeubles moyens ; béton coulé en continu, joints de reprise étudiés, étanchéité si présence d'eau.

## Les pieux : techniques d'exécution
| Technique | Déroulement |
|---|---|
| **Pieu foré simple** | Forage à la tarière ou au grappin, nettoyage du fond, cage d'armatures, bétonnage |
| **Foré tubé** | Un tube métallique soutient le terrain pendant le forage, retiré au bétonnage |
| **Foré à la boue** | Le forage est rempli de boue bentonitique qui maintient les parois sous la nappe |
| **Tarière creuse** | La tarière est vissée puis remontée pendant que le béton est injecté par son axe : rapide, sans vibrations |
| **Battu** | Pieu préfabriqué (béton, acier) enfoncé au mouton jusqu'au **refus** |
| **Micropieu** | Petit diamètre, armature tubulaire et coulis injecté : reprises en sous-œuvre, accès difficiles |
Le **bétonnage sous l'eau ou la boue** se fait au **tube plongeur** : le béton est envoyé au fond et remonte en chassant la boue, le tube restant toujours plongé dans le béton frais. On coule plus haut que nécessaire, puis on **recèpe** la tête (on casse le béton pollué) pour dégager les armatures qui seront ancrées dans la **semelle de liaison** (massif sur pieux).

> [!exemple] Pieu foré Ø 0,60 m de 14 m
> Béton théorique : π × 0,30² × 14 = **3,96 m³** ; avec une surconsommation de 15 % (hors-profil du forage) : **4,55 m³** à commander. Recépage sur 0,50 m : π × 0,30² × 0,50 = **0,14 m³** de béton cassé par pieu.

## Les ouvrages enterrés et les soutènements de fouilles
- **Sous-sols, parkings, cuves** : murs en béton armé calculés pour la **poussée des terres et de l'eau**, radier, étanchéité ou **cuvelage**, drainage ;
- **Soutènements provisoires** : talutage, **blindages** de tranchées, **paroi berlinoise** (profilés battus + planches ou béton projeté), **palplanches** (écrans métalliques battus, étanches), **paroi moulée** (béton coulé dans une tranchée à la boue, définitive) ;
- **Rabattement de nappe** : pompage dans des puits ou des pointes filtrantes pour travailler à sec ; attention aux tassements des bâtiments voisins.

> [!attention]
> Les fouilles profondes en ville sont dangereuses pour les ouvriers **et pour les voisins** : effondrement de talus, déstabilisation des fondations mitoyennes. Elles exigent une étude (mission G3), des soutènements calculés et un suivi.

> [!retenir]
> - Radier : répartit les charges sur toute l'emprise ; pieux : transmettent la charge au bon sol profond.
> - Foré simple, tubé, à la boue, tarière creuse, battu, micropieu ; bétonnage au tube plongeur, recépage.
> - Ouvrages enterrés : poussée des terres et de l'eau, cuvelage, drainage ; soutènements de fouilles.`,
 sujet:{titre:"Radier ou pieux ? Choisir et préparer des fondations spéciales", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un immeuble R+5 de **20 × 15 m** est prévu à Port-Bouët, sur un sol médiocre. Le BET hésite entre semelles, radier et pieux.

**Données**
- 24 poteaux ; avec la contrainte admissible du sol, chaque semelle ferait **2,60 × 2,60 m** ;
- Variante pieux : **30 pieux forés Ø 0,80 m**, longueur **16 m** ; surconsommation de béton **15 %** ; recépage sur **0,50 m** ;
- Sous-sol partiel prévu avec une fouille de **3 m** sous la nappe, à **2 m** d'un bâtiment voisin.

### Partie A — Quand changer de fondations (4 points)
1. Citer trois situations où les fondations superficielles ne suffisent plus. (2 pts)
2. Calculer la surface totale des semelles et le rapport à l'emprise. Conclure (seuil courant : 50 %). (2 pts)

### Partie B — Radier (4 points)
3. Décrire le radier général (plat, nervuré) et ses avantages. (2 pts)
4. Quelles précautions de mise en œuvre pour un radier (bétonnage, joints, étanchéité) ? (2 pts)

### Partie C — Pieux (7 points)
5. Décrire l'exécution d'un pieu foré (avec tube ou boue) et d'un pieu battu. (3 pts)
6. Calculer le volume de béton théorique et commandé par pieu, puis pour les 30 pieux. (3 pts)
7. Qu'est-ce que le recépage ? Calculer le volume de béton démoli par pieu. (1 pt)

### Partie D — Fouille du sous-sol (5 points)
8. Proposer un soutènement de fouille adapté (comparer berlinoise, palplanches, paroi moulée). (3 pts)
9. Quelles précautions vis-à-vis du bâtiment voisin ? (2 pts)`,
  corrige:`### Partie A — Changer de fondations (4 pts)
1. Bon sol trop profond (remblais, vases) ; charges trop fortes ; semelles trop grandes qui se touchent ; tassements différentiels à craindre ; nappe haute ; voisinage proche. *(2 pts)*
2. 24 × 2,60² = **162,2 m²** pour 300 m² d'emprise, soit **54 % > 50 %** → un **radier** (ou des pieux) devient plus rationnel. *(2 pts)*

### Partie B — Radier (4 pts)
3. Dalle épaisse sous tout le bâtiment (**plat**), ou dalle plus mince raidie par des **nervures** sous les files de poteaux. Il répartit les charges sur toute l'emprise : **contrainte faible**, **tassements plus uniformes**, sert de plancher bas et de cuvelage. *(2 pts)*
4. Béton de propreté, ferraillage en deux nappes avec chaises, bétonnage continu par zones avec **reprises traitées** (joints waterstop), vibration, **cure** soignée ; étanchéité ou cuvelage si nappe, et vérification au soulèvement. *(2 pts)*

### Partie C — Pieux (7 pts)
5. **Foré** : forage à la tarière ou au grappin, maintenu par un **tube** de travail ou de la **boue** bentonitique si le terrain s'éboule ; mise en place de la cage d'armatures ; bétonnage **au tube plongeur** de bas en haut. **Battu** : pieu préfabriqué (béton, acier) enfoncé au mouton jusqu'au refus (bruit, vibrations). *(3 pts)*
6. π × 0,40² × 16 = **8,04 m³** ; commandé : × 1,15 = **9,25 m³** ; 30 pieux : **277,5 m³**. *(3 pts)*
7. On démolit le haut du pieu, béton pollué par la boue et la laitance, pour retrouver du béton sain et dégager les aciers : π × 0,40² × 0,50 = **0,25 m³** par pieu. *(1 pt)*

### Partie D — Fouille (5 pts)
8. **Berlinoise** (profilés + blindage bois ou béton projeté) : économique mais **pas étanche** → inadaptée sous la nappe ; **palplanches** métalliques battues : étanches, rapides, mais vibrations près du voisin ; **paroi moulée** béton armé : étanche, rigide, sans vibration, peut devenir le mur définitif → la meilleure ici (ou palplanches vibrofoncées avec précaution). *(3 pts)*
9. Constat d'huissier et **état des lieux** avant travaux ; étude de l'interaction (tassements dus au pompage et à la décompression) ; **suivi** par cibles topographiques et témoins de fissures ; limiter les vibrations ; tirants ou butons si nécessaire. *(2 pts)*

> [!attention] Erreurs à éviter
> - Bétonner un pieu foré à sec dans un terrain noyé.
> - Oublier la surconsommation de béton dans les commandes.
> - Ouvrir une fouille sous la nappe contre un voisin sans soutènement étanche.`},
 exercices:[
  {t:"Choisir une fondation", d:1, e:`Choisir la solution : a) immeuble R+6 à Treichville sur 9 m de vase, bon sable dessous ; b) entrepôt sur sable lâche homogène, charges faibles et réparties ; c) reprise en sous-œuvre d'une maison fissurée dans une cour étroite ; d) château d'eau sur bon sol à 4 m.`, c:`a) **Pieux** (forés à la boue ou tarière creuse) ancrés dans le sable.
b) **Radier** ou dallage épais sur sol compacté/amélioré.
c) **Micropieux** (matériel léger, faible encombrement).
d) **Puits** ou semelle profonde jusqu'au bon sol, ou radier circulaire posé sur le bon sol après purge.`},
  {t:"Béton d'un pieu", d:1, e:`12 pieux forés Ø 0,60 m de 14 m chacun, surconsommation 15 %, recépage de 0,50 m. Calculer le béton à commander et le béton à casser au recépage.`, c:`Par pieu : 3,96 m³ × 1,15 = 4,55 m³ → 12 pieux : **54,6 m³** à commander.
Recépage : 0,14 m³ × 12 = **1,70 m³** de béton à casser et à évacuer.`},
  {t:"Ordre d'exécution d'un pieu foré à la boue", d:2, e:`Remettre dans l'ordre : recépage ; mise en place de la cage d'armatures ; forage sous boue ; bétonnage au tube plongeur ; nettoyage du fond (dessablage) ; mise en place du tube-guide ; coulage de la semelle de liaison.`, c:`Tube-guide (avant-trou) → **forage sous boue** → **nettoyage du fond** → **cage d'armatures** → **bétonnage au tube plongeur** → (durcissement) → **recépage** → **semelle de liaison**.`},
  {t:"Radier d'un petit immeuble", d:2, e:`Radier de 12 × 10 m et 40 cm d'épaisseur, béton dosé à 350 kg/m³. Calculer le volume de béton et le ciment. Pourquoi faut-il organiser un coulage continu ?`, c:`Béton : 12 × 10 × 0,40 = **48 m³** → ciment 48 × 7 = **336 sacs** (≈ 16,8 t) — un tel volume se coule de préférence en **béton prêt à l'emploi** pompé.
Coulage continu : éviter des **reprises de bétonnage** non prévues (plans de faiblesse et chemins d'eau) ; si des reprises sont nécessaires, elles sont positionnées par le BET et équipées de waterstop.`},
  {t:"Fouille en ville", d:3, e:`On creuse un sous-sol de 3 m contre une maison mitoyenne fondée à 1 m sur un sable. Quels risques ? Quelles précautions ?`, c:`Risques : éboulement de la paroi, **décompression** du sol sous les fondations voisines (tassements, fissures, voire effondrement), venue d'eau si la nappe est haute.
Précautions : étude géotechnique (G2/G3), **soutènement** calculé (paroi berlinoise ou palplanches, éventuellement butons), terrassement par **passes alternées** le long du mitoyen, **reprise en sous-œuvre** préalable de la maison voisine si nécessaire, constat d'huissier et **suivi** (témoins sur les fissures, mesures de tassement), rabattement de nappe contrôlé.`}
 ],
 quiz:[
  {q:"Le bétonnage d'un pieu sous l'eau se fait :", o:["Au tube plongeur","En versant depuis la surface","Avec un seau","Sans béton"], r:0, e:"Le tube reste dans le béton frais."},
  {q:"Le recépage consiste à :", o:["Casser la tête de pieu polluée","Forer plus profond","Peindre le pieu","Vibrer le béton"], r:0, e:"Pour dégager les armatures."},
  {q:"Un radier général est :", o:["Une dalle de fondation sous tout le bâtiment","Un pieu","Un mur","Une toiture"], r:0, e:"Il répartit les charges."},
  {q:"Les palplanches sont :", o:["Des écrans métalliques battus","Des tuiles","Des poutrelles","Des carreaux"], r:0, e:"Soutènement étanche."},
  {q:"Les micropieux sont utiles :", o:["Pour les reprises en sous-œuvre et les accès difficiles","Pour les toitures","Pour la peinture","Pour les menuiseries"], r:0, e:"Matériel léger."}
 ]},
{id:"tech-8", niv:3, titre:"Construire en hauteur : immeubles et organisation technique", duree:60, contenu:`## La structure d'un immeuble
- **Portiques** (poteaux-poutres) pour les charges verticales ;
- **Voiles en béton armé** (cages d'escaliers et d'ascenseurs, pignons) pour le **contreventement** contre le vent et les séismes ;
- **Descente de charges cumulée** : les poteaux du rez-de-chaussée portent tous les étages ;
- **Joints de dilatation** tous les 25 à 30 m ; **joints de rupture** entre blocs de hauteurs différentes.
> [!exemple] Poteau intérieur d'un R+4
> Surface d'influence 20 m², 9 kN/m² à l'ELU par plancher : 180 kN par niveau. Avec 5 planchers (R+1 à R+4 et terrasse) : **900 kN** au pied du poteau du RDC, cinq fois plus qu'au dernier étage : les poteaux sont plus gros en bas.

## Le cycle d'étage
Chaque niveau répète la même séquence : **implantation des axes** → poteaux et voiles → coffrage et **étaiement** du plancher → ferraillage et **réservations** → **coulage** → cure → décoffrage.
Avec un cycle de **10 jours par niveau**, la structure d'un R+4 (5 niveaux) demande environ 50 jours, plus les fondations. Les étais restent en place sur 2 ou 3 niveaux (**étaiement de reprise**), car un plancher jeune ne peut pas porter seul le poids du suivant en cours de coulage.

## Les coffrages et le levage
- **Banches** métalliques pour les voiles, **coffrages-tables** ou poutrelles et contreplaqué pour les planchers ;
- **Grue à tour** : elle est caractérisée par son **moment** (t·m). La charge admissible **diminue avec la portée** : charge × portée ≤ moment ;
- **Pompe à béton** pour couler vite et en hauteur ; **monte-matériaux** pour les agglos et les finitions.
> [!exemple] Grue de 40 t·m
> Charge admissible à 20 m : 40 / 20 = **2 t** ; à 30 m : **1,33 t**. Une benne de 1 m³ de béton (2,4 t) + la benne (0,5 t) = 2,9 t : portée maximale 40 / 2,9 = **13,8 m**.

## Les réseaux verticaux
**Gaines techniques** superposées d'un niveau à l'autre : colonnes d'eau, **chutes** d'eaux usées ventilées, **colonne montante** électrique, télécoms, désenfumage. Un **ascenseur** devient indispensable au-delà de 4 à 5 niveaux habités (et pour l'accessibilité des personnes à mobilité réduite).

## La sécurité incendie
- **Escaliers encloisonnés** et désenfumés, protégés par des portes coupe-feu, au moins un escalier par cage, deux sorties pour les grands plateaux ;
- Structure **stable au feu** (enrobages, sections suffisantes), **extincteurs**, éclairage de sécurité, colonnes sèches pour les pompiers dans les immeubles élevés ;
- Accès des engins de secours en façade.

## La sécurité du chantier en hauteur
Garde-corps périphériques à chaque plancher, **trémies** protégées, filets, échafaudages conformes, harnais, zone de levage interdite au public, consignes de vent pour la grue.

> [!retenir]
> - Portiques + voiles ; charges cumulées vers le bas ; joints tous les 25 à 30 m.
> - Cycle d'étage répétitif ; étaiement de reprise sur 2 – 3 niveaux.
> - Grue : charge × portée ≤ moment.
> - Gaines verticales, ascenseur au-delà de 4 – 5 niveaux, escaliers encloisonnés.`,
 sujet:{titre:"Immeuble R+5 : descente de charges, cycle d'étage, grue et sécurité", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Construction d'un immeuble de logements R+5 à Cocody-Riviera.

**Données**
- Poteau intérieur : surface d'influence **20 m²** ; charge ELU par plancher **9,0 kN/m²** ; 6 planchers au-dessus du RDC (R+1 à R+5 et terrasse) ;
- Cycle d'étage prévu : **10 jours par niveau** ; 7 niveaux de structure (RDC à terrasse) ;
- Grue à tour de **50 t·m** ; benne à béton de **0,8 m³** (béton 2,4 t/m³) pesant **0,4 t** à vide.

### Partie A — Structure (5 points)
1. Calculer la charge au pied du poteau du RDC et au pied du poteau du R+5. Conclure. (3 pts)
2. Pourquoi faut-il des voiles ou des portiques de contreventement dans un immeuble ? (2 pts)

### Partie B — Organisation (6 points)
3. Décrire les tâches d'un cycle d'étage (de l'implantation au décoffrage). (3 pts)
4. Calculer la durée de la structure. Pourquoi garde-t-on des étais sur 2 ou 3 niveaux (étaiement de reprise) ? (3 pts)

### Partie C — Grue (5 points)
5. Calculer la charge admissible à 25 m et la masse d'une benne pleine. (2 pts)
6. Calculer la portée maximale pour lever la benne pleine. Conséquence pour l'implantation de la grue ? (3 pts)

### Partie D — Réseaux et sécurité (4 points)
7. Qu'est-ce qu'une gaine technique ? Que contient-elle ? (2 pts)
8. Citer quatre mesures de sécurité du chantier en hauteur. (2 pts)`,
  corrige:`### Partie A — Structure (5 pts)
1. Par plancher : 9,0 × 20 = 180 kN. Pied du RDC : 6 × 180 = **1 080 kN** ; pied du R+5 : 1 plancher (terrasse) → **180 kN**. Les poteaux du bas portent six fois plus : on augmente leur section en descendant. *(3 pts)*
2. Plus le bâtiment est haut, plus le vent (et un séisme) crée de grands efforts horizontaux et de grands moments à la base : il faut des éléments très rigides (voiles des cages d'escalier et d'ascenseur, portiques) pour les reprendre et limiter les déplacements. *(2 pts)*

### Partie B — Organisation (6 pts)
3. Implantation des axes et des niveaux → poteaux et voiles (ferraillage, coffrage, bétonnage) → coffrage et étaiement du plancher → ferraillage des poutres et du plancher, réservations, réseaux → **bétonnage** du plancher → cure → décoffrage des joues, transfert des banches au niveau suivant. *(3 pts)*
4. 7 × 10 = **70 jours** (plus les fondations). Le béton jeune ne porte pas seul son poids et celui du plancher coulé au-dessus : les étais de reprise répartissent la charge sur plusieurs planchers. *(3 pts)*

### Partie C — Grue (5 pts)
5. À 25 m : 50 / 25 = **2,0 t** ; benne pleine : 0,8 × 2,4 + 0,4 = **2,32 t**. *(2 pts)*
6. Portée max : 50 / 2,32 = **21,6 m**. La grue doit être implantée pour que les zones de bétonnage soient à moins de 21,6 m, ou on utilise une benne plus petite (ou une pompe à béton pour les zones éloignées). *(3 pts)*

### Partie D — Réseaux et sécurité (4 pts)
7. Conduit vertical continu d'un étage à l'autre, accessible par des trappes, qui regroupe **colonnes d'eau**, **chutes** EU/EV ventilées, **colonne montante** électrique, télécoms, désenfumage. *(2 pts)*
8. **Garde-corps** périphériques et protection des trémies ; **filets** ; harnais pour les travaux en rive ; casques et chaussures ; balisage de la zone sous la grue ; échafaudages réceptionnés ; accès sûrs (escaliers provisoires). *(2 pts)*

> [!attention] Erreurs à éviter
> - Lever une charge sans vérifier la courbe charge-portée de la grue.
> - Désétayer trop tôt les planchers inférieurs.
> - Laisser des trémies sans protection.`},
 exercices:[
  {t:"Charge cumulée", d:1, e:`Un poteau reçoit 160 kN (ELU) par plancher. Calculer sa charge au pied du RDC pour un R+3 à toiture-terrasse, puis pour un R+6. Commenter.`, c:`R+3 : 4 planchers (R+1, R+2, R+3, terrasse) → **640 kN** ; R+6 : 7 planchers → **1 120 kN**.
La charge (et donc la section du poteau, les aciers et la semelle) augmente avec chaque étage : on ne peut pas ajouter des niveaux sans recalcul.`},
  {t:"Durée du gros œuvre", d:1, e:`Fondations : 6 semaines ; cycle d'étage : 8 jours ouvrés ; immeuble R+7 (8 niveaux de planchers en comptant la terrasse). Estimer la durée de la structure en semaines de 5 jours.`, c:`Élévation : 8 × 8 = **64 jours** = 12,8 semaines.
Total : 6 + 12,8 ≈ **19 semaines** (environ 4,5 mois), hors intempéries et aléas.`},
  {t:"Choisir les levages", d:2, e:`Une grue a un moment de 50 t·m. a) Peut-elle lever une benne de 1 m³ de béton (2,4 t + 0,5 t) à 20 m ? b) Quelle est sa portée maximale pour cette benne ? c) Une palette d'agglos de 1,6 t à 30 m ?`, c:`a) 2,9 × 20 = 58 t·m > 50 → **non**.
b) 50 / 2,9 = **17,2 m**.
c) 1,6 × 30 = 48 t·m ≤ 50 → **oui** (juste ; pas de surcharge, ni de vent fort).`},
  {t:"Étaiement de reprise", d:2, e:`On coule le plancher du R+3 au jour J. Le plancher du R+2 a été coulé à J − 8 et celui du R+1 à J − 16. Pourquoi laisse-t-on les étais sous R+2 et sous R+1 ?`, c:`Un plancher de 8 jours n'a qu'environ 60 % de sa résistance et n'est pas calculé pour porter le poids d'un plancher frais (béton, coffrages, ouvriers). Les **étais de reprise** transmettent ces charges sur **plusieurs planchers** jusqu'à un niveau assez résistant (ou jusqu'au sol). On ne retire les étais du R+1 que lorsque les planchers supérieurs ont durci et que le BET l'autorise.`},
  {t:"Sécurité incendie", d:2, e:`Citer quatre dispositions qui permettent l'évacuation et l'intervention des secours dans un immeuble R+8 d'habitation.`, c:`1. **Escalier encloisonné** et désenfumé, avec portes coupe-feu à fermeture automatique ;
2. **Éclairage de sécurité** et signalisation des sorties ;
3. **Extincteurs** à chaque niveau et **colonne sèche** pour les pompiers ;
4. **Accès des engins de secours** en façade et structure stable au feu (enrobages, sections suffisantes).`}
 ],
 quiz:[
  {q:"Les voiles d'une cage d'escalier servent surtout à :", o:["Contreventer l'immeuble","Décorer","Isoler du bruit uniquement","Porter les cloisons"], r:0, e:"Efforts horizontaux."},
  {q:"Grue de 40 t·m : charge maximale à 20 m :", o:["2 t","20 t","40 t","0,5 t"], r:0, e:"40 / 20."},
  {q:"Avec un cycle de 8 jours, 5 niveaux de structure prennent environ :", o:["40 jours","8 jours","13 jours","400 jours"], r:0, e:"5 × 8."},
  {q:"L'étaiement de reprise sert à :", o:["Répartir les charges de chantier sur plusieurs planchers","Décorer les plafonds","Porter la grue","Ventiler"], r:0, e:"Planchers jeunes."},
  {q:"Un escalier encloisonné protège :", o:["L'évacuation en cas d'incendie","Les canalisations","La toiture","Le parking"], r:0, e:"Il reste praticable."}
 ]},
{id:"tech-18", niv:3, titre:"Les ossatures métalliques et en bois", duree:55, contenu:`## Pourquoi le métal ?
Grandes portées (hangars, entrepôts, halls, marchés), légèreté, **rapidité de montage**, préfabrication en atelier, démontage possible. Inconvénients : **corrosion** (climat humide et salin du littoral), comportement au **feu**, chaleur sous les couvertures.

## Les éléments d'une ossature métallique
- **Portiques** : poteaux et traverses en profilés laminés (**IPE**, **HEA**) ;
- **Pannes** en profils minces formés à froid (Z, C) ou IPE légers, **lisses** de bardage ;
- **Contreventements** : croix de Saint-André (cornières, câbles, tubes) en toiture et en façade, **poutre au vent** ;
- **Pieds de poteaux** : **platine** soudée, **tiges d'ancrage** scellées dans le massif en béton, mortier de calage ;
- **Assemblages** : **boulonnés** sur chantier (boulons ordinaires ou à haute résistance serrés au couple), **soudés** en atelier.

!fig:treillis|Ferme en treillis : barres tendues et comprimées

| Profilé | Masse (kg/m) | Surface à peindre (m²/m) |
|---|---|---|
| IPE 200 | 22,4 | 0,77 |
| IPE 300 | 42,2 | 1,16 |
| HEA 200 | 42,3 | 1,14 |
La charpente métallique se commande et se paie au **kg**.

## La protection contre la corrosion et le feu
- **Galvanisation** à chaud (zinc) : la meilleure protection en atmosphère marine ;
- **Système de peinture** : préparation (sablage, dégraissage), **primaire antirouille**, couches intermédiaire et de finition ; retouches après montage ;
- Feu : **peinture intumescente**, **flocage**, ou habillage en plaques, selon la durée de stabilité exigée.

## Le bois dans la construction
Charpentes, ossatures légères, menuiseries, coffrages. Essences locales (iroko, framiré, samba, teck…) à choisir selon l'usage. Règles :
- bois **sec** (humidité < 20 % à la mise en œuvre) et **sans défauts** majeurs (nœuds, fentes) ;
- **traitement** préventif (autoclave, produit insecticide et fongicide), indispensable contre les **termites** ;
- pas de contact direct avec le sol ou la maçonnerie humide (pieds sur platines, coupures de capillarité) ;
- assemblages par boulons, connecteurs métalliques, pointes, tenons-mortaises.

## Le montage
Réception des massifs (implantation et niveaux des tiges d'ancrage), levage des portiques, mise en place **immédiate** des contreventements, réglage d'aplomb, serrage des boulons, calage et clavetage des pieds au mortier sans retrait, puis pannes et couverture. Une structure non contreventée est instable pendant le montage.

> [!exemple] Portique d'un hangar de 20 m
> Poteaux HEA 200 de 6 m : 2 × 6 × 42,3 = 507,6 kg ; traverses IPE 300 (2 rampants de 10,20 m) : 20,40 × 42,2 = 860,9 kg → **1 368,5 kg par portique**.
> Surface à peindre : 2 × 6 × 1,14 + 20,40 × 1,16 = **37,3 m²** → 2 couches à 10 m²/L : **7,5 L** de finition par portique (plus le primaire).

> [!retenir]
> - Métal : portiques IPE/HEA, pannes, contreventements, platines et tiges d'ancrage ; payé au kg.
> - Protéger contre la corrosion (galvanisation, peinture) et le feu.
> - Bois : sec, traité contre les termites, isolé de l'humidité.
> - Contreventer dès le montage.`,
 sujet:{titre:"Portiques métalliques d'un hangar : poids, protection et montage", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Un hangar agricole de **24 m** de portée et **36 m** de long est prévu à Bouaflé, en charpente métallique.

**Données**
- Portiques tous les **6 m** (donc **7 portiques**) ; poteaux **HEA 220** de **7 m** (**50,5 kg/m**, surface à peindre **1,26 m²/m**) ;
- Traverses **IPE 360** (**57,1 kg/m**, **1,35 m²/m**), deux rampants de **12 m** en projection, pente **15 %** ;
- Peinture : 2 couches de finition à **10 m²/L** par couche (plus un primaire anticorrosion) ;
- Une variante en charpente bois est envisagée pour un auvent.

### Partie A — Pourquoi le métal (4 points)
1. Citer les avantages et les inconvénients d'une ossature métallique pour ce hangar. (2 pts)
2. Nommer les éléments d'une ossature de hangar : portique, poteaux, traverses, pannes, lisses, contreventements, platines, tiges d'ancrage. Donner le rôle de quatre d'entre eux. (2 pts)

### Partie B — Poids et peinture (7 points)
3. Calculer la longueur d'un rampant de traverse. (1 pt)
4. Calculer la masse d'un portique et des 7 portiques. (3 pts)
5. Calculer la surface à peindre d'un portique et le volume de peinture de finition. (3 pts)

### Partie C — Protection (5 points)
6. Décrire deux systèmes de protection contre la corrosion. (2 pts)
7. Pourquoi l'acier doit-il être protégé contre le feu ? Citer deux moyens. (3 pts)

### Partie D — Bois et montage (4 points)
8. Quels traitements et précautions pour une charpente bois en Côte d'Ivoire ? (2 pts)
9. Décrire l'ordre de montage d'un hangar métallique. (2 pts)`,
  corrige:`### Partie A — Métal (4 pts)
1. Avantages : **grandes portées**, légèreté, **montage rapide**, préfabrication en atelier, démontable. Inconvénients : **corrosion** (climat humide, littoral), mauvaise tenue au **feu**, besoin de soudeurs et monteurs qualifiés, coût de l'acier. *(2 pts)*
2. Portique (poteaux + traverses) : structure principale ; **pannes** : portent la couverture ; **lisses** : portent le bardage ; **contreventements** (croix de Saint-André) : stabilité longitudinale ; **platines et tiges d'ancrage** : liaison aux fondations. *(2 pts)*

### Partie B — Poids et peinture (7 pts)
3. 12 × √(1 + 0,15²) = **12,13 m**. *(1 pt)*
4. Poteaux : 2 × 7 × 50,5 = 707,0 kg ; traverses : 2 × 12,13 × 57,1 = 1 385,7 kg → **2 093 kg par portique** ; 7 portiques : **14,65 t** (sans pannes, lisses et contreventements). *(3 pts)*
5. 2 × 7 × 1,26 + 2 × 12,13 × 1,35 = 17,64 + 32,76 = **50,4 m²** ; finition : 2 × 50,4 / 10 = **10,1 L** par portique (≈ 71 L pour les 7). *(3 pts)*

### Partie C — Protection (5 pts)
6. **Galvanisation à chaud** (bain de zinc, très durable) ; **système de peinture** : préparation (sablage), primaire anticorrosion riche en zinc, couches intermédiaire et de finition ; entretien périodique. *(2 pts)*
7. L'acier perd environ la moitié de sa résistance vers 550 °C : la structure peut s'effondrer en quelques minutes d'incendie. Moyens : **peinture intumescente**, **flocage** (projection fibreuse), **encoffrement** en plaques ou béton. *(3 pts)*

### Partie D — Bois et montage (4 pts)
8. Essences durables (iroko, teck…) ou bois **traités** contre les **termites** et champignons (traitement en autoclave) ; bois **secs** ; éviter le contact avec le sol et l'humidité ; ventilation ; assemblages protégés. *(2 pts)*
9. Contrôle des massifs et des tiges d'ancrage (position, niveau) → levage du **premier portique** et de la **travée contreventée** (stabilité) → portiques suivants reliés par les pannes → contreventements définitifs, serrage des boulons → couverture et bardage. *(2 pts)*

> [!attention] Erreurs à éviter
> - Monter des portiques sans contreventement provisoire : ils basculent comme des dominos.
> - Peindre sur un acier rouillé sans préparation.
> - Oublier la protection au feu d'un bâtiment recevant du public.`},
 exercices:[
  {t:"Masse d'un hangar", d:1, e:`Un hangar compte 6 portiques identiques de 1 368,5 kg, des pannes et lisses représentant 35 % de la masse des portiques, et 4 % d'assemblages. Calculer la masse totale et le coût à 1 600 F/kg posé.`, c:`Portiques : 6 × 1 368,5 = **8 211 kg** ; pannes et lisses : 0,35 × 8 211 = **2 874 kg**.
Sous-total : 11 085 kg ; assemblages (4 %) : 443 kg → **≈ 11 528 kg**.
Coût : 11 528 × 1 600 = **≈ 18,4 M F HT**.`},
  {t:"Peinture d'une charpente", d:2, e:`Calculer la surface à peindre et la quantité de peinture de finition (2 couches à 10 m²/L) et de primaire (1 couche à 8 m²/L) pour 6 portiques de 37,3 m² chacun.`, c:`Surface : 6 × 37,3 = **223,8 m²**.
Finition : 223,8 × 2 / 10 = **44,8 L** ; primaire : 223,8 / 8 = **28 L**.`},
  {t:"Choisir la protection", d:2, e:`Quel système de protection proposer pour : a) un hangar à 300 m de la mer à Grand-Bassam ; b) une charpente intérieure d'atelier sec ; c) un escalier de secours métallique extérieur d'un hôtel ?`, c:`a) **Galvanisation à chaud** + éventuellement peinture de finition (système « duplex ») : atmosphère marine très corrosive.
b) **Primaire antirouille + finition** suffisent (entretien périodique).
c) **Galvanisation** (extérieur, sécurité) et, si exigé, protection au feu adaptée ; contrôle et entretien réguliers.`},
  {t:"Bois de charpente", d:2, e:`On livre des pannes en bois de 8 × 16 cm pour une toiture : 184,80 ml. Calculer le volume. À la réception, l'humidimètre indique 32 %. Que faire ?`, c:`Volume : 184,80 × 0,08 × 0,16 = **2,37 m³**.
32 % d'humidité, c'est beaucoup trop (> 20 %) : en séchant, le bois va **se rétracter, se déformer et se fendre**, desserrant les assemblages. Refuser ou stocker sous abri ventilé jusqu'au séchage, puis **traiter** avant la pose.`},
  {t:"Montage sous le vent", d:3, e:`Lors du montage d'un hangar, l'équipe pose les 6 portiques en deux jours mais reporte la pose des croix de contreventement à la semaine suivante. Un orage survient. Que risque-t-on ? Quelle règle aurait dû être appliquée ?`, c:`Les portiques, articulés en pied et non contreventés dans le sens longitudinal, peuvent **basculer comme des dominos** sous le vent : effondrement et danger mortel.
Règle : **contreventer au fur et à mesure** : le premier portique est stabilisé par haubans ou butons, la première travée est contreventée dès que deux portiques sont levés, et chaque portique suivant est relié par les pannes et les entretoises avant de lâcher la grue.`}
 ],
 quiz:[
  {q:"Une charpente métallique se paie généralement :", o:["Au kg","Au m³","À l'unité","Au litre"], r:0, e:"Masse des profilés."},
  {q:"La meilleure protection en atmosphère marine est :", o:["La galvanisation à chaud","Une seule couche de peinture","Aucune","L'huile de vidange"], r:0, e:"Couche de zinc."},
  {q:"Les tiges d'ancrage relient :", o:["La platine du poteau au massif en béton","Les tôles aux pannes","Les boulons entre eux","Les portes aux murs"], r:0, e:"Pied de poteau."},
  {q:"L'humidité maximale du bois à la mise en œuvre est d'environ :", o:["20 %","60 %","90 %","1 %"], r:0, e:"Sinon retrait et déformations."},
  {q:"Pendant le montage, les contreventements doivent être posés :", o:["Au fur et à mesure","À la fin du chantier","Jamais","Après la peinture"], r:0, e:"Stabilité provisoire."}
 ]},
{id:"tech-19", niv:3, titre:"Construire durable en climat tropical : bioclimatique et matériaux locaux", duree:55, contenu:`## Pourquoi construire autrement ?
Le bâtiment consomme beaucoup d'énergie (climatisation), d'eau et de matériaux (ciment, acier importés). Un bâtiment bien conçu pour le **climat chaud et humide** de la Côte d'Ivoire reste plus frais, consomme moins, coûte moins cher à l'usage et dure plus longtemps.

## Les principes bioclimatiques
- **Orientation** : grandes façades au **nord et au sud** (faciles à protéger du soleil), façades est et ouest (soleil bas, très chaud l'après-midi) réduites et peu vitrées ;
- **Protections solaires** : débords de toiture, auvents, brise-soleil, varangues, volets, végétation ; un vitrage protégé reçoit beaucoup moins de chaleur ;
- **Ventilation naturelle traversante** : ouvertures sur des façades opposées, dans le sens des vents dominants, pièces peu profondes, nacos et persiennes ;
- **Toiture** : principal apport de chaleur sous les tropiques → couleurs **claires**, **isolant**, **combles ventilés** ou double toiture ;
- **Inertie** adaptée : en climat humide à faible écart jour/nuit, privilégier la ventilation et la protection solaire plutôt qu'une forte inertie.

## Dimensionner une protection solaire
Pour qu'un débord horizontal protège une fenêtre quand le soleil est à une hauteur angulaire **α** :
$$ débord d = hauteur à protéger / tan α
> [!exemple] Fenêtre de 1,40 m de haut, soleil à 70° (milieu de journée)
> d = 1,40 / tan 70° = 1,40 / 2,75 = **0,51 m** (si le débord est à 0,30 m au-dessus du linteau : (1,40 + 0,30) / 2,75 = **0,62 m**). Pour un soleil plus bas (60°), il faudrait 0,81 m : sur les façades est et ouest, on préfère des **protections verticales** (lames, volets).

## Les matériaux locaux
- **Briques de terre comprimée (BTC)** stabilisées au ciment (5 à 8 %) : terre latéritique disponible sur place, bon confort thermique, peu d'énergie de fabrication ; à protéger des pluies (débords, soubassement, enduit) ;
- **Terre cuite** (briques, tuiles), **bois** local géré durablement, **bambou** ;
- **Granulats locaux**, latérite améliorée pour les voiries ;
- Réemploi et recyclage des déchets de chantier (gravats concassés en remblai).

## L'eau et l'énergie
- **Récupération des eaux de pluie** : volume annuel ≈ surface de toiture × hauteur de pluie × coefficient (≈ 0,8). Abidjan reçoit environ **1,8 m** de pluie par an ;
- Appareils économes, réducteurs de débit, réutilisation des eaux de pluie pour l'arrosage et les WC ;
- **Chauffe-eau solaire**, panneaux **photovoltaïques**, éclairage **LED**, climatiseurs inverter.

> [!exemple] Toiture de 100 m² à Abidjan
> Pluie récupérable : 100 × 1,8 × 0,8 = **144 m³ par an**, soit environ 400 L par jour en moyenne (mais très inégalement répartis entre saisons sèches et pluvieuses : la taille de la citerne est un compromis).

## Le chantier responsable
Tri des déchets, limitation des nuisances (bruit, poussière, boues sur la voirie), économie d'eau sur le chantier, sécurité et conditions de travail des ouvriers, achats locaux.

> [!retenir]
> - Façades principales nord-sud, protections solaires, ventilation traversante, toiture claire, isolée et ventilée.
> - Débord : d = h / tan α.
> - Matériaux locaux : BTC stabilisées, terre cuite, bois traité.
> - Eau de pluie : surface × pluie × 0,8 ; énergie : solaire, LED, appareils économes.`,
 sujet:{titre:"Maison bioclimatique en climat tropical : protections solaires, eau de pluie, solaire et BTC", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une ONG veut construire une maison-témoin économe en énergie près de Bouaké.

**Données**
- Fenêtres de **1,50 m** de haut, face au sud, soleil de milieu de journée à **70°** au-dessus de l'horizon ; le débord de toiture est à **0,30 m** au-dessus du linteau ;
- Toiture de **150 m²** ; pluie annuelle (on prend la valeur d'Abidjan) : **1,8 m** ; coefficient de récupération **0,8** ;
- Consommation d'eau : **300 L/jour** ; saison sèche de **90 jours** ;
- Consommation électrique : **6 kWh/jour** ; ensoleillement : **4,5 kWh/m²/jour** (heures équivalentes) ; rendement global du système : **0,75** ; panneaux de **400 Wc** ;
- BTC stabilisées à **6 %** de ciment, masse d'une brique **7 kg**.

### Partie A — Principes bioclimatiques (5 points)
1. Citer cinq principes de conception bioclimatique en climat chaud et humide. (3 pts)
2. Pourquoi les façades est et ouest sont-elles les plus difficiles à protéger ? (2 pts)

### Partie B — Protection solaire (4 points)
3. Calculer le débord nécessaire pour protéger la fenêtre (d = hauteur à protéger / tan α). (2 pts)
4. Quelle protection proposer sur la façade ouest ? (2 pts)

### Partie C — Eau et énergie (8 points)
5. Calculer le volume d'eau de pluie récupérable par an. (2 pts)
6. Calculer le volume de citerne pour couvrir la saison sèche. (2 pts)
7. Calculer la puissance crête nécessaire et le nombre de panneaux. (4 pts)

### Partie D — Matériaux locaux (3 points)
8. Calculer la masse de ciment pour 1 000 BTC et le nombre de sacs de 50 kg. (2 pts)
9. Comment protéger les murs en BTC de la pluie ? (1 pt)`,
  corrige:`### Partie A — Principes (5 pts)
1. Orientation des grandes façades **nord-sud** ; **protections solaires** (débords, brise-soleil) ; **ventilation traversante** naturelle ; **toiture isolée** et ventilée, teintes claires ; végétation et ombrage autour ; matériaux à **inertie** (BTC) ; récupération des eaux de pluie. *(3 pts)*
2. Le soleil y est **bas** le matin et le soir : les rayons arrivent presque horizontalement et passent sous les débords ; la façade ouest reçoit en plus le soleil aux heures les plus chaudes. *(2 pts)*

### Partie B — Protection solaire (4 pts)
3. d = (1,50 + 0,30) / tan 70° = 1,80 / 2,75 = **0,65 m** (sans le décalage : 0,55 m). *(2 pts)*
4. Des **protections verticales** : lames orientables, volets persiennés, claustras, écran de végétation ; et réduire les ouvertures à l'ouest. *(2 pts)*

### Partie C — Eau et énergie (8 pts)
5. 150 × 1,8 × 0,8 = **216 m³/an**. *(2 pts)*
6. 0,300 × 90 = **27 m³** (citerne de 27 à 30 m³, avec filtration et première chasse). *(2 pts)*
7. P = 6 / (4,5 × 0,75) = **1,78 kWc** → 1 780 / 400 = 4,4 → **5 panneaux** (2,0 kWc), plus batteries et onduleur. *(4 pts)*

### Partie D — BTC (3 pts)
8. 7 × 0,06 = 0,42 kg par brique → 1 000 BTC : **420 kg**, soit **8,4 → 9 sacs**. *(2 pts)*
9. Grands **débords** de toiture, **soubassement** en maçonnerie dure ou béton (pas de BTC au contact du sol et des éclaboussures), enduit ou badigeon perméable à la vapeur, gouttières. *(1 pt)*

> [!attention] Erreurs à éviter
> - Mettre de grandes baies vitrées à l'ouest sans protection.
> - Dimensionner la citerne sur la pluie annuelle et non sur la durée de la saison sèche.
> - Confondre puissance crête (kWc) et énergie (kWh).`},
 exercices:[
  {t:"Orienter une maison", d:1, e:`Une maison rectangulaire de 15 × 8 m peut être orientée avec ses grandes façades au nord et au sud, ou à l'est et à l'ouest. Laquelle choisir et pourquoi ? Où placer les chambres ?`, c:`Grandes façades **au nord et au sud** : le soleil y est haut à midi et facile à arrêter avec des débords ; les petites façades (est, ouest) reçoivent le soleil bas du matin et de l'après-midi, très chaud et difficile à arrêter : peu de baies de ce côté.
Les **chambres** sont à placer de préférence à l'est ou protégées de l'ouest (elles sont occupées le soir, quand les murs ouest restituent la chaleur de l'après-midi).`},
  {t:"Débord de protection", d:2, e:`Fenêtre de 1,20 m de haut ; le débord de toiture est à 0,40 m au-dessus du linteau. Quelle profondeur de débord faut-il pour protéger toute la fenêtre quand le soleil est à 70° ? Et à 60° ?`, c:`Hauteur à protéger : 1,20 + 0,40 = **1,60 m**.
À 70° : d = 1,60 / tan 70° = 1,60 / 2,747 = **0,58 m**.
À 60° : d = 1,60 / 1,732 = **0,92 m**.`},
  {t:"Citerne d'eau de pluie", d:2, e:`Une école a 150 m² de toiture. Pluie annuelle : 1,8 m ; coefficient 0,8. Quel volume récupérable par an ? Les toilettes consomment 750 L par jour d'école (180 jours). Quelle part des besoins peut être couverte ?`, c:`Récupérable : 150 × 1,8 × 0,8 = **216 m³/an**.
Besoins : 0,75 × 180 = **135 m³/an** → en théorie couverts à 100 %, à condition d'avoir une **citerne** assez grande pour passer les saisons sèches (plusieurs dizaines de m³) ; sinon, la couverture réelle sera partielle.`},
  {t:"Briques de terre comprimée", d:2, e:`Une BTC mesure 29,5 × 14 × 9 cm. Une presse produit 800 briques par jour. a) Volume d'une brique ; b) nombre de briques par m³ ; c) ciment pour 1 m³ de briques si le mélange contient 6 % de ciment (masse de terre sèche : 1 900 kg/m³).`, c:`a) 0,295 × 0,14 × 0,09 = **0,00372 m³**.
b) 1 / 0,00372 = **269 briques** par m³.
c) Ciment : 6 % × 1 900 = **114 kg** par m³ de briques, soit environ **2,3 sacs** (bien moins qu'un m³ de béton à 350 kg).`},
  {t:"Réduire la chaleur d'une maison existante", d:3, e:`Une maison à toiture en tôle sans faux plafond est très chaude l'après-midi. Proposer cinq améliorations, de la moins chère à la plus chère.`, c:`1. **Ventiler** : ouvrir des grilles hautes en pignons, créer une ventilation traversante (nacos, persiennes) ;
2. **Peindre la tôle en blanc** ou en couleur réfléchissante ;
3. **Ombrer** les façades ouest et les fenêtres (végétation, stores, auvents) ;
4. Poser un **faux plafond isolé** (laine minérale ou panneaux) avec combles ventilés ;
5. Remplacer les vitrages exposés par des vitrages à **contrôle solaire** ou poser des brise-soleil ; en dernier recours, une climatisation économe (inverter) dans les pièces de nuit.`}
 ],
 quiz:[
  {q:"Sous les tropiques, les grandes façades doivent être orientées de préférence :", o:["Nord et sud","Est et ouest","Uniquement à l'ouest","Peu importe"], r:0, e:"Soleil haut, facile à protéger."},
  {q:"Débord pour protéger 1,50 m de hauteur avec un soleil à 45° :", o:["1,50 m","0,50 m","3,00 m","0,15 m"], r:0, e:"tan 45° = 1."},
  {q:"La principale source de chaleur d'une maison à toiture en tôle est :", o:["La toiture","Le dallage","Les fondations","Les portes intérieures"], r:0, e:"La tôle chauffe au soleil."},
  {q:"Les BTC sont stabilisées avec environ :", o:["5 à 8 % de ciment","50 % de ciment","0,1 % de chaux","100 % de sable"], r:0, e:"Peu de ciment."},
  {q:"Volume de pluie récupérable sur 100 m² avec 1,8 m de pluie et un coefficient de 0,8 :", o:["144 m³","1 800 m³","14,4 m³","180 m³"], r:0, e:"100 × 1,8 × 0,8."}
 ]},
{id:"tech-9", niv:3, titre:"Pathologies du bâtiment, diagnostic et réhabilitation", duree:60, contenu:`## Lire une fissure
La forme et l'orientation d'une fissure renseignent sur sa cause :
| Fissure | Cause probable |
|---|---|
| En **escalier** dans la maçonnerie, près d'un angle | Tassement différentiel des fondations |
| **Verticale** en bas, au milieu d'une poutre | Flexion excessive (aciers insuffisants ou surcharge) |
| **Oblique** à 45° près d'un appui | Effort tranchant (cadres insuffisants) |
| **Le long des aciers**, avec rouille et éclatement | Corrosion (enrobage trop faible, béton poreux) |
| Fin **réseau** de surface (faïençage) | Retrait (enduit trop riche, cure insuffisante) |
| **Horizontale** sous une dalle ou en tête de mur | Dilatation de la dalle de toiture au soleil, flèche du plancher |
| Franche à la jonction **poteau / agglos** | Matériaux différents, absence de grillage de renfort |

## Les autres désordres courants
- **Humidité** : remontées capillaires (pas d'arase étanche), infiltrations (toiture, menuiseries, fissures), condensation (locaux fermés et climatisés) ;
- **Corrosion des armatures** : en bord de mer et dans les ouvrages humides ; le béton éclate, les aciers perdent leur section ;
- **Termites** : galeries de terre, bois creux ; ils attaquent les charpentes, menuiseries, faux plafonds ;
- **Décollements** de carrelage, cloquage de peinture, efflorescences.

## La démarche de diagnostic
1. **Relevé** : plans, photos, cartographie des fissures, **largeur** (< 0,2 mm : esthétique ; 0,2 à 2 mm : à surveiller et traiter ; > 2 mm : souvent structurel) ;
2. **Suivi** : **témoins** (plâtre, jauges graduées) datés pour savoir si la fissure **évolue** ;
3. **Investigations** : sondages des fondations, carottages, détection des aciers (enrobage), mesures d'humidité, étude de sol ;
4. **Recalcul** de la structure avec les charges réelles ;
5. **Préconisations** et chiffrage des réparations.
> [!exemple] Suivi d'une fissure
> Une jauge posée le 1er mars indique 0,30 mm ; 0,45 mm le 1er avril ; 0,60 mm le 1er mai : la fissure **s'ouvre de 0,15 mm par mois** : le phénomène est actif (tassement en cours) ; il faut traiter la cause **avant** de reboucher.

## Les techniques de réparation
- **Reprise en sous-œuvre** : élargissement ou approfondissement des semelles, micropieux ;
- **Renforcement** : chemisage de poteaux en béton armé, plats ou tissus de **fibre de carbone** collés, profilés métalliques ;
- **Injection** des fissures stabilisées à la résine époxy ; agrafage des maçonneries ;
- Traitement de la **corrosion** : piquage du béton dégradé, brossage, passivation des aciers (ou ajout d'aciers), mortier de réparation ;
- **Humidité** : arase par injection, drainage, hydrofuge ; **termites** : barrière chimique dans le sol, traitement des bois.

## Surélever une maison existante
> [!exemple] Ajouter un étage sur une maison de plain-pied
> Une semelle de 0,80 × 0,80 m portait 60 kN. L'étage ajoute environ 70 kN : N = 130 kN.
> Pression sur le sol : 130 / 0,64 = **203 kN/m²**, supérieure aux 150 kN/m² admissibles.
> Il faut élargir la semelle à √(130 × 1,08 / 150) ≈ **1,00 m** (le facteur 1,08 tient compte du poids de la semelle) et vérifier les poteaux (souvent trop faibles : 4 HA10 ne suffisent plus).

> [!attention]
> Ne jamais surélever ni supprimer un élément porteur sans **note de calcul** et sans contrôle : c'est l'une des premières causes d'effondrement de bâtiments.

> [!retenir]
> - Escalier = tassement ; verticale au milieu de poutre = flexion ; 45° près des appuis = effort tranchant ; le long des aciers = corrosion ; réseau fin = retrait.
> - Diagnostic : relevé, suivi par témoins, investigations, recalcul.
> - Traiter la cause avant de réparer l'effet.`,
 sujet:{titre:"Diagnostiquer des fissures et préparer la surélévation d'une maison", duree:90, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Une maison de plain-pied à Yopougon présente des fissures. Le propriétaire veut aussi ajouter un étage. Vous menez le diagnostic.

**Constats**
- F1 : fissure **oblique à 45°** partant de l'angle d'une fenêtre vers le bas, côté d'un angle de la maison ;
- F2 : fissure **verticale** continue à la jonction entre un poteau et le mur d'agglos ;
- F3 : fissure **horizontale** sous la dalle de toiture-terrasse, sur le mur de façade ensoleillé ;
- F4 : éclatement du béton d'une poutre de salle d'eau, aciers rouillés apparents ;
- Suivi de F1 par jauge : **0,20 mm** (1er février), **0,32 mm** (1er mars), **0,44 mm** (1er avril).

**Surélévation** : une semelle de **0,90 × 0,90 m** porte **80 kN** ; l'étage ajoutera **75 kN** ; sol : **150 kN/m²** ; facteur 1,08 pour le poids propre de la semelle.

### Partie A — Lecture des fissures (8 points)
1. Pour chaque fissure F1 à F4, proposer la cause la plus probable. (4 pts)
2. Classer les fissures selon leur largeur (esthétique, à surveiller, structurelle). (2 pts)
3. Interpréter le suivi de F1. Que faut-il faire avant de reboucher ? (2 pts)

### Partie B — Démarche de diagnostic (5 points)
4. Décrire les étapes d'un diagnostic de pathologie. (3 pts)
5. Proposer la réparation de la poutre F4. (2 pts)

### Partie C — Surélévation (7 points)
6. Calculer la contrainte sur le sol après surélévation. Conclure. (3 pts)
7. Calculer le côté de la nouvelle semelle. (2 pts)
8. Quels autres éléments faut-il vérifier avant d'ajouter un étage ? (2 pts)`,
  corrige:`### Partie A — Fissures (8 pts)
1. *(4 pts)*
   - **F1** : **tassement différentiel** de la fondation près de l'angle (le mur « descend » d'un côté) ;
   - **F2** : absence de **liaison** poteau-maçonnerie (pas de fers d'attente) et retrait différentiel béton/agglos ;
   - **F3** : **dilatation thermique** de la dalle de terrasse (pas d'isolation, pas de joint de glissement) ;
   - **F4** : **corrosion des armatures** (enrobage insuffisant, humidité, carbonatation) qui fait éclater le béton.
2. < 0,2 mm : esthétique ; 0,2 à 2 mm : à surveiller et traiter ; > 2 mm : souvent structurel. *(2 pts)*
3. Ouverture de **0,12 mm par mois** : la fissure est **active** (tassement en cours). Il faut traiter la **cause** (fondation, fuite d'eau, sol) avant de reboucher, sinon elle se rouvrira. *(2 pts)*

### Partie B — Diagnostic (5 pts)
4. **Relevé** (plans, photos, cartographie et largeur des fissures) → **suivi** par témoins datés → **investigations** (sondage des fondations, étude de sol, détection des aciers, humidité) → **recalcul** avec les charges réelles → **préconisations** et chiffrage. *(3 pts)*
5. Purger le béton dégradé, dégager les aciers, les **brosser** (ou remplacer s'ils ont perdu de la section), appliquer un **passivant**, reconstituer l'enrobage au **mortier de réparation** ; supprimer la cause (étanchéité de la salle d'eau, ventilation). *(2 pts)*

### Partie C — Surélévation (7 pts)
6. N = 80 + 75 = 155 kN → σ = 155 / 0,81 = **191 kN/m² > 150** ✘. *(3 pts)*
7. B = √(155 × 1,08 / 150) = **1,06 → 1,10 m** (renforcement par élargissement ou micropieux). *(2 pts)*
8. Les **poteaux** (souvent 4 HA10 insuffisants), les **poutres**, la dalle actuelle (qui devient plancher : charges plus fortes), les **chaînages**, l'ancrage du nouvel étage, l'**étude de sol** et le permis. *(2 pts)*

> [!attention] Erreurs à éviter
> - Reboucher une fissure active : elle réapparaît.
> - Peindre sur des aciers rouillés sans les traiter.
> - Ajouter un étage sans vérifier fondations et poteaux.`},
 exercices:[
  {t:"Identifier la cause d'une fissure", d:1, e:`Associer chaque fissure à sa cause : a) fissure oblique à 45° au bout d'une poutre ; b) fissures en escalier au-dessus d'une fenêtre d'angle ; c) éclatement du béton d'un poteau en bord de mer avec aciers rouillés ; d) fines fissures en toile d'araignée sur un enduit neuf.`, c:`a) **Effort tranchant** (cadres insuffisants) ; b) **tassement différentiel** des fondations sous l'angle ; c) **corrosion** des armatures (enrobage insuffisant, air salin) ; d) **retrait** de l'enduit (trop riche, séché trop vite).`},
  {t:"Fissure active ou stabilisée ?", d:2, e:`Une jauge posée sur une fissure indique : 0,30 mm (1er mars), 0,45 mm (1er avril), 0,60 mm (1er mai), 0,60 mm (1er juin), 0,61 mm (1er juillet). Interpréter. Quand peut-on la reboucher ?`, c:`De mars à mai, ouverture de **0,15 mm/mois** : désordre **actif**. Puis stabilisation (0,60 → 0,61 mm, dans la précision de la mesure).
On recherche et traite d'abord la **cause** (fondations, fuite d'eau sous la semelle…), on poursuit la surveillance quelques mois (dont une saison des pluies), puis on **injecte** ou on reprend l'enduit avec un renfort ; reboucher une fissure active ne sert à rien : elle réapparaît.`},
  {t:"Surélévation", d:2, e:`Une semelle de 0,90 × 0,90 m porte 80 kN. L'étage projeté ajoute 90 kN. Sol : 150 kN/m² admissibles. La semelle suffit-elle ? Sinon, quel côté lui donner (facteur 1,08 pour son poids) ?`, c:`N = 80 + 90 = **170 kN** → pression : 170 / 0,81 = **210 kN/m²** > 150 ✘.
Côté nécessaire : √(170 × 1,08 / 150) = √1,224 = **1,11 m** → **1,15 m** : reprise en sous-œuvre de la semelle, et vérification des poteaux et des poutres.`},
  {t:"Humidité en pied de mur", d:2, e:`Dans une maison, les enduits intérieurs se dégradent sur 50 cm en bas des murs, avec des taches blanches ; le phénomène est pire en saison des pluies. Diagnostic et traitement ?`, c:`**Remontées capillaires** : l'eau du sol monte dans la maçonnerie faute d'**arase étanche** (ou parce qu'elle est pontée par un enduit extérieur descendu jusqu'au sol) ; les sels cristallisent (taches blanches).
Traitement : couper la remontée (**injection** d'une barrière hydrofuge en pied de mur), éloigner l'eau (**drainage**, trottoir en pente, gouttières), décroûter l'enduit sur 1 m et refaire un enduit **respirant** après séchage.`},
  {t:"Poteau corrodé", d:3, e:`Un poteau de façade en bord de lagune présente des éclatements de béton : les aciers HA12 ont perdu une partie de leur section, l'enrobage mesuré est de 1 cm. Proposer la démarche de réparation.`, c:`1. **Étayer** si la section d'acier est fortement réduite ;
2. **Piquer** le béton dégradé jusqu'à dégager les aciers sur tout leur pourtour ;
3. **Brosser** (ou sabler) les aciers, mesurer la perte de section ; si elle est importante, **ajouter des aciers** (ou chemiser le poteau) selon une note de calcul ;
4. Appliquer un **passivant** puis un **mortier de réparation** à retrait compensé, en reconstituant un **enrobage de 3 à 4 cm** ;
5. Protéger par une peinture ou un revêtement anti-carbonatation et surveiller les autres poteaux.`}
 ],
 quiz:[
  {q:"Une fissure en escalier dans un mur près d'un angle indique souvent :", o:["Un tassement différentiel","Un excès de peinture","Un retrait de carrelage","Rien"], r:0, e:"Fondations."},
  {q:"Une fissure oblique à 45° près de l'appui d'une poutre indique :", o:["Un effort tranchant mal repris","Une dilatation","Un défaut d'enduit","Une infiltration"], r:0, e:"Cadres insuffisants."},
  {q:"Pour savoir si une fissure évolue, on pose :", o:["Des témoins datés","Du carrelage","Un drain","Un climatiseur"], r:0, e:"Plâtre ou jauges."},
  {q:"Les remontées capillaires se traitent par :", o:["Une barrière étanche en pied de mur et le drainage","Plus de peinture","Un faux plafond","Une gouttière seulement"], r:0, e:"Couper la remontée."},
  {q:"Avant de surélever une maison, il faut :", o:["Une note de calcul des fondations et des poteaux","L'accord du voisin seulement","Plus de ciment dans le mortier","Rien"], r:0, e:"Charges en forte hausse."}
 ]},
{id:"tech-20", niv:3, titre:"Contrôles d'exécution, réception des travaux et garanties", duree:50, contenu:`## Contrôler à chaque étape
La qualité ne se « contrôle » pas à la fin : elle se construit à chaque étape.
- **Autocontrôle** de l'entreprise (fiches de contrôle, conducteur de travaux) ;
- **Contrôle du maître d'œuvre** (visites, réunions de chantier) et du **bureau de contrôle** ;
- **Points d'arrêt** : étapes qu'on ne peut pas dépasser sans accord écrit, parce qu'elles seront ensuite cachées : réception des **fonds de fouille**, du **ferraillage** avant coulage, des **réseaux** avant fermeture des saignées et des tranchées, de l'**étanchéité** avant protection.

## Les essais
| Ouvrage | Essai |
|---|---|
| Remblais, couches de forme | Densité en place, essai de plaque |
| Béton | Affaissement au cône, éprouvettes à 7 et 28 jours |
| Aciers | Certificats, diamètres, nuance |
| Étanchéité de terrasse | Mise en eau 48 h |
| Canalisations d'eau | Mise en pression |
| Évacuations | Écoulement, étanchéité des joints |
| Électricité | Continuité, isolement, résistance de terre, déclenchement des différentiels |

## Les tolérances courantes (indicatives)
| Ouvrage | Tolérance |
|---|---|
| Implantation des axes | ± 1 à 2 cm |
| Aplomb d'un poteau ou d'un mur | ≈ 1 cm par étage |
| Planéité d'un enduit | 5 mm sous une règle de 2 m |
| Planéité d'un dallage ou d'une chape | 5 à 7 mm sous une règle de 2 m |
| Niveau d'un plancher | ± 1 cm |
Le CCTP du marché fixe les valeurs applicables.

## La réception des travaux
C'est l'acte par lequel le maître d'ouvrage **accepte** l'ouvrage, **avec ou sans réserves**, en présence de l'entreprise et du maître d'œuvre. Elle est précédée d'**opérations préalables** (visite contradictoire, essais de fonctionnement) et constatée par un **procès-verbal** (PV) qui liste les réserves et fixe un **délai pour les lever**.
La réception est essentielle : elle **transfère la garde** de l'ouvrage au maître d'ouvrage et **fait courir les garanties**.

## Le dossier des ouvrages exécutés (DOE)
Plans conformes à l'exécution (réseaux enterrés, ferraillages), notices des équipements, fiches techniques des matériaux, PV d'essais : indispensable pour l'entretien et les futurs travaux.

## Les garanties après réception
| Garantie | Durée | Couvre |
|---|---|---|
| **Parfait achèvement** | 1 an | Tous les désordres signalés (réserves et défauts apparus dans l'année) |
| **Bon fonctionnement** | 2 ans | Équipements dissociables (portes, appareils, robinetterie…) |
| **Décennale** | 10 ans | Désordres compromettant la **solidité** ou rendant l'ouvrage **impropre à sa destination** |
La **retenue de garantie** (souvent 5 %) est restituée à la fin de la garantie de parfait achèvement, si les réserves sont levées.

> [!retenir]
> - Points d'arrêt avant de cacher un ouvrage ; essais à chaque étape.
> - Réception avec ou sans réserves (PV) : transfert de garde et départ des garanties.
> - Garanties : parfait achèvement 1 an, bon fonctionnement 2 ans, décennale 10 ans.`,
 sujet:{titre:"Contrôles d'exécution, réception avec réserves et garanties après réception", duree:60, niveau:"BTS Bâtiment", bareme:20,
  enonce:`**Contexte.** Fin de chantier d'un immeuble R+2 de bureaux à Plateau-Dokui (marché de **120 M F HT**). Vous assistez le maître d'œuvre pour les derniers contrôles et la réception.

**Constats**
- Faux aplomb mesuré en tête d'un poteau d'angle du R+2 : **4,5 cm** (tolérance ≈ 1 cm par étage) ;
- Planéité d'une chape : flèche de **9 mm** sous la règle de 2 m (tolérance 5 à 7 mm) ;
- Terrasse : l'essai de mise en eau n'a duré que **24 h** ;
- Retenue de garantie : **5 %** du marché.

**Désordres apparus après réception**
- D1 : une porte frotte et une poignée se casse (18 mois après) ;
- D2 : peinture qui s'écaille dans un bureau (8 mois après) ;
- D3 : fissure traversante d'une poutre avec flèche importante (6 ans après) ;
- D4 : infiltrations d'eau par la terrasse rendant deux bureaux inutilisables (3 ans après).

### Partie A — Contrôles (7 points)
1. Citer un contrôle pour chaque étape : implantation, fondations, ferraillage, béton, maçonnerie, étanchéité. (3 pts)
2. Le poteau et la chape sont-ils acceptables ? (2 pts)
3. L'essai de la terrasse est-il valable ? (2 pts)

### Partie B — Réception (6 points)
4. Qu'est-ce que la réception ? Qui la prononce ? (2 pts)
5. Qu'est-ce qu'une réception avec réserves ? Comment sont-elles levées ? (2 pts)
6. Que contient le dossier des ouvrages exécutés (DOE) ? (2 pts)

### Partie C — Garanties (7 points)
7. Rattacher chaque désordre D1 à D4 à la bonne garantie (parfait achèvement, bon fonctionnement, décennale). (4 pts)
8. Calculer la retenue de garantie. Quand est-elle restituée ? (3 pts)`,
  corrige:`### Partie A — Contrôles (7 pts)
1. Implantation : **diagonales** et axes ; fondations : **réception du fond de fouille** ; ferraillage : conformité au plan et enrobages **avant** bétonnage ; béton : **affaissement** et **éprouvettes** ; maçonnerie : aplomb, alignement, liaison aux poteaux ; étanchéité : **mise en eau 48 h**. *(3 pts)*
2. Poteau : tolérance 2 étages × 1 cm ≈ 2 à 3 cm → 4,5 cm **hors tolérance** (expertise, vérification structurelle). Chape : 9 mm > 7 mm → **refusée** (ragréage ou reprise). *(2 pts)*
3. **Non** : l'essai doit durer **48 h** ; à refaire avant la réception. *(2 pts)*

### Partie B — Réception (6 pts)
4. Acte par lequel le **maître d'ouvrage** accepte l'ouvrage, contradictoirement avec l'entreprise (assisté du maître d'œuvre) : il en prend possession et les **garanties commencent**. *(2 pts)*
5. L'ouvrage est accepté mais des défauts sont listés au **procès-verbal** avec un délai ; l'entreprise les corrige et un nouveau constat **lève les réserves**. *(2 pts)*
6. Plans conformes à l'exécution (béton armé, réseaux), notices et fiches techniques des matériaux et équipements, garanties des fabricants, PV d'essais, notice d'entretien. *(2 pts)*

### Partie C — Garanties (7 pts)
7. *(4 pts)*
   - **D1** : équipements dissociables → **bon fonctionnement** (2 ans) ✔ à 18 mois ;
   - **D2** : désordre apparu dans l'année → **parfait achèvement** (1 an) ;
   - **D3** : solidité compromise → **décennale** (10 ans) ;
   - **D4** : ouvrage **impropre à sa destination** → **décennale**.
8. 5 % × 120 = **6 M F**, restitués à la fin de la garantie de **parfait achèvement** (1 an), si les réserves sont levées (ou remplacés par une caution bancaire). *(3 pts)*

> [!attention] Erreurs à éviter
> - Couler sans contrôle des aciers : on ne pourra plus vérifier.
> - Réceptionner sans PV écrit.
> - Confondre garantie de bon fonctionnement (équipements) et décennale (solidité, destination).`},
 exercices:[
  {t:"Points d'arrêt", d:1, e:`Citer cinq points d'arrêt sur un chantier de maison et dire pourquoi on ne peut pas les passer sans contrôle.`, c:`1. **Fonds de fouille** (bon sol) avant le béton de propreté ; 2. **Ferraillage** des semelles, longrines, poteaux, planchers avant coulage ; 3. **Réseaux enterrés** (eaux usées, fourreaux) avant remblai et dallage ; 4. **Réseaux encastrés** (gaines, tuyaux testés) avant enduits ; 5. **Étanchéité** de la terrasse (essai à l'eau) avant protection.
Une fois recouverts, ces ouvrages ne peuvent plus être vérifiés sans démolition.`},
  {t:"Contrôler des tolérances", d:2, e:`Mesures sur un chantier : axe d'un poteau décalé de 3 cm par rapport au plan ; faux aplomb de 8 mm sur un poteau d'étage ; creux de 9 mm sous la règle de 2 m sur un dallage ; plancher à +1,5 cm du niveau prévu. Lesquels sont hors tolérance (valeurs du cours) ?`, c:`- Implantation : 3 cm > 2 cm → **hors tolérance** (à signaler ; vérifier l'incidence sur les poutres et les façades) ;
- Aplomb : 8 mm ≤ 1 cm → **acceptable** ;
- Dallage : 9 mm > 7 mm → **hors tolérance** (ragréage ou reprise avant carrelage) ;
- Niveau : 1,5 cm > 1 cm → **hors tolérance** (à rattraper dans la chape, en vérifiant les seuils et les hauteurs de marches).`},
  {t:"Dates des garanties", d:1, e:`Une maison est réceptionnée avec réserves le 15 juin 2026. Jusqu'à quelle date courent la garantie de parfait achèvement, la garantie de bon fonctionnement et la garantie décennale ? Quand la retenue de garantie est-elle restituée ?`, c:`Parfait achèvement : jusqu'au **15 juin 2027** ; bon fonctionnement : **15 juin 2028** ; décennale : **15 juin 2036**.
Retenue de garantie : restituée vers le **15 juin 2027**, à condition que les réserves aient été levées.`},
  {t:"Quelle garantie ?", d:2, e:`Dire quelle garantie joue : a) 6 mois après réception, une porte intérieure frotte ; b) 18 mois après, la pompe du surpresseur tombe en panne ; c) 4 ans après, une poutre se fissure dangereusement ; d) 7 ans après, la terrasse fuit et rend les chambres inhabitables ; e) 3 ans après, la peinture extérieure se décolore.`, c:`a) **Parfait achèvement** (1re année) ; b) **bon fonctionnement** (équipement, moins de 2 ans) ; c) **décennale** (solidité) ; d) **décennale** (ouvrage impropre à sa destination) ; e) en général **aucune** de ces garanties (aspect, usure normale), sauf clause contractuelle ou défaut d'exécution relevant d'une autre responsabilité.`},
  {t:"Rédiger des réserves", d:2, e:`Lors de la visite de réception, on constate : un carreau fêlé dans la cuisine, une fuite au siphon du lavabo, une prise sans courant dans la chambre 2, une trace de peinture sur la vitre du séjour. Rédiger les réserves du PV avec un délai de levée.`, c:`Réserves (à lever sous **30 jours**) :
1. Cuisine : remplacer le **carreau fêlé** du sol (près de l'évier) ;
2. Salle d'eau : reprendre l'**étanchéité du siphon** du lavabo (fuite constatée) ;
3. Chambre 2 : **prise de courant** sans tension : rechercher le défaut et remettre en service ;
4. Séjour : **nettoyer** la trace de peinture sur la baie vitrée.
Chaque réserve est localisée, décrite précisément, attribuée à l'entreprise concernée, puis levée par un constat contradictoire.`}
 ],
 quiz:[
  {q:"Un point d'arrêt est :", o:["Une étape qu'on ne dépasse pas sans contrôle","Une pause café","La fin du chantier","Un panneau de signalisation"], r:0, e:"Avant de cacher un ouvrage."},
  {q:"La garantie décennale couvre :", o:["La solidité et l'impropriété à la destination","La couleur des peintures","Les meubles","Le jardin"], r:0, e:"10 ans."},
  {q:"La réception fait courir :", o:["Les garanties","Le permis de construire","Les études","Les fondations"], r:0, e:"Et transfère la garde."},
  {q:"Durée de la garantie de parfait achèvement :", o:["1 an","10 ans","1 mois","5 ans"], r:0, e:"Tous les désordres signalés."},
  {q:"Le DOE contient :", o:["Les plans conformes à l'exécution et les notices","Le permis de construire seul","Les factures des ouvriers","Les photos de vacances"], r:0, e:"Pour l'entretien futur."}
 ]}
]});
