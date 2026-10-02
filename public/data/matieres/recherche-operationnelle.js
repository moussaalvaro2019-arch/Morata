A.addMatiere({
 id:'ro', titre:'Recherche opérationnelle', court:'Recherche op.', groupe:'fond', icone:'network', couleur:'#8E4FD1', niveau:'Intermédiaire', heures:20, ordre:4, prerequis:['math'],
 resume:"Modéliser et optimiser : programmation linéaire, ordonnancement PERT et MPM, chemin critique, transport, affectation et gestion des stocks appliqués au chantier.",
 objectifs:["Modéliser un problème de décision (variables, contraintes, objectif)","Résoudre graphiquement un programme linéaire","Construire un réseau PERT et trouver le chemin critique","Optimiser des transports, des affectations et des stocks"],
 applications:["Planning et délais d'un chantier","Répartition des camions entre carrières et chantiers","Affectation des équipes aux tâches","Quantité économique de commande de ciment"],
 chapitres:[
{id:'ro-1', niv:1, titre:'Modéliser un problème de décision', duree:20, contenu:`## Qu'est-ce que la recherche opérationnelle ?
C'est l'ensemble des méthodes mathématiques qui aident à **prendre la meilleure décision** quand les ressources (argent, temps, matériel, main-d'œuvre) sont limitées.

## Les trois éléments d'un modèle
1. **Les variables de décision** : ce que l'on choisit (quantités à produire, dates de début, nombre de camions…).
2. **Les contraintes** : les limites à respecter (stock de ciment, nombre d'ouvriers, délais).
3. **La fonction objectif** : ce que l'on veut maximiser (bénéfice) ou minimiser (coût, durée).

> [!exemple] Formulation
> Un entrepreneur peut couler du béton en régie (coût 95 000 F/m³) ou l'acheter prêt à l'emploi (115 000 F/m³). Sa bétonnière produit au plus 12 m³/jour ; il lui faut 30 m³ en 2 jours.
> Variables : x = m³ en régie, y = m³ prêt à l'emploi.
> Contraintes : x + y = 30 ; x ≤ 24 (2 jours × 12) ; x, y ≥ 0.
> Objectif : minimiser C = 95 000 x + 115 000 y.
> Solution évidente : produire le maximum en régie (x = 24) et acheter y = 6 m³ → C = 2 280 000 + 690 000 = **2 970 000 F**.

## Les grandes familles de problèmes
| Problème | Méthode |
|---|---|
| Répartir des ressources | Programmation linéaire (simplexe) |
| Planifier des tâches | PERT, MPM, Gantt |
| Acheminer des matériaux | Problème de transport |
| Affecter des équipes | Méthode hongroise |
| Commander des matériaux | Modèle de Wilson |

> [!retenir]
> Un bon modèle est simple : il ne garde que les variables et contraintes qui influencent vraiment la décision.`,
 quiz:[
  {q:"La fonction objectif est :", o:["Une contrainte","Ce que l'on cherche à maximiser ou minimiser","Une variable","Un délai"], r:1, e:"C'est le critère d'optimisation."},
  {q:"Pour planifier des tâches avec des dépendances, on utilise :", o:["Le simplexe","Le PERT","Wilson","La méthode hongroise"], r:1, e:"PERT et MPM servent à l'ordonnancement."},
  {q:"Dans l'exemple, pourquoi produire 24 m³ en régie ?", o:["Parce que c'est moins cher","Parce que c'est plus rapide","Parce que c'est obligatoire","Au hasard"], r:0, e:"La régie coûte 95 000 F/m³ contre 115 000 F."},
  {q:"Une contrainte représente :", o:["Le bénéfice","Une limite à respecter","Une décision","Un résultat"], r:1, e:"Ressources limitées, délais, capacités…"}
 ]},
{id:'ro-2', niv:3, titre:'Programmation linéaire', duree:35, contenu:`## Forme d'un programme linéaire
Maximiser (ou minimiser) **Z = c₁x₁ + c₂x₂ + …** sous des contraintes **linéaires** a₁x₁ + a₂x₂ ≤ b, avec x ≥ 0.

## Résolution graphique (2 variables)
1. Tracer chaque contrainte comme une droite et hachurer la zone interdite.
2. La zone restante est le **domaine des solutions réalisables** (un polygone).
3. L'optimum se trouve sur un **sommet** du polygone : on calcule Z en chaque sommet.

!fig:pl|Domaine réalisable et optimum sur un sommet

> [!exemple] Fabrication d'agglos
> Une petite unité fabrique des agglos de 15 (x centaines) et de 20 (y centaines).
> Marge : 3 000 F par centaine d'agglos de 15, 4 000 F par centaine de 20.
> Ciment : 2 sacs par centaine de 15, 3 sacs par centaine de 20, **60 sacs** par jour au maximum.
> Main-d'œuvre : 1 heure par centaine (quel que soit le type), **25 heures** par jour.
> Programme : max Z = 3 000 x + 4 000 y ; 2x + 3y ≤ 60 ; x + y ≤ 25 ; x, y ≥ 0.
> Sommets : (0 ; 0) → 0 ; (25 ; 0) → 75 000 ; (0 ; 20) → 80 000 ; intersection 2x + 3y = 60 et x + y = 25 → **(15 ; 10)** → Z = 45 000 + 40 000 = **85 000 F**.
> Décision : fabriquer **1 500 agglos de 15 et 1 000 agglos de 20** par jour.

## La méthode du simplexe
Au-delà de 2 variables, on utilise l'**algorithme du simplexe** (Dantzig), qui passe de sommet en sommet en améliorant Z à chaque étape. Les tableurs (solveur d'Excel ou de LibreOffice) le font automatiquement.

## Analyse de sensibilité
La « valeur marginale » d'une contrainte indique combien rapporterait une unité de ressource supplémentaire. Ici, une heure de plus de main-d'œuvre permettrait de gagner environ 1 000 F : utile pour décider d'heures supplémentaires.

> [!retenir]
> L'optimum d'un programme linéaire est toujours sur un sommet du domaine réalisable.`,
 quiz:[
  {q:"Où se trouve l'optimum d'un programme linéaire ?", o:["Au centre du domaine","Sur un sommet du domaine","À l'origine","Hors du domaine"], r:1, e:"C'est une propriété fondamentale de la programmation linéaire."},
  {q:"Dans l'exemple, la marge au point (25 ; 0) vaut :", o:["75 000 F","85 000 F","100 000 F","60 000 F"], r:0, e:"3 000 × 25 = 75 000 F."},
  {q:"L'algorithme du simplexe sert à :", o:["Dessiner un plan","Résoudre un programme linéaire à plusieurs variables","Calculer un moment","Faire un planning"], r:1, e:"Il parcourt les sommets du domaine."},
  {q:"Une contrainte « 2x + 3y ≤ 60 » est représentée par :", o:["Un point","Une droite et un demi-plan","Un cercle","Une parabole"], r:1, e:"La droite 2x + 3y = 60 limite un demi-plan."}
 ]},
{id:'ro-3', niv:2, titre:'Ordonnancement : le PERT et le chemin critique', duree:35, contenu:`## Le réseau PERT
Chaque tâche est une **flèche** ; les **nœuds** (étapes) marquent le début et la fin des tâches. Une tâche ne peut commencer que lorsque toutes celles qui la précèdent sont terminées.

!fig:pert|Réseau PERT : le chemin critique est en rouge

## Calcul des dates
1. **Dates au plus tôt** (de gauche à droite) : date d'un nœud = **maximum** des (date du nœud précédent + durée de la tâche).
2. **Dates au plus tard** (de droite à gauche, en partant de la date de fin) : date = **minimum** des (date du nœud suivant − durée).
3. **Marge totale** d'une tâche = date au plus tard de fin − date au plus tôt de début − durée.

> [!exemple] Réseau de la figure
> Tâches : A (3 j, 1→2), B (2 j, 1→3), C (5 j, 2→4), D (4 j, 3→4), E (2 j, 4→5), F (6 j, 4→6), G (1 j, 5→6).
> Au plus tôt : nœud 1 = 0 ; 2 = 3 ; 3 = 2 ; 4 = max(3 + 5 ; 2 + 4) = 8 ; 5 = 10 ; 6 = max(8 + 6 ; 10 + 1) = **14 jours**.
> Au plus tard : 6 = 14 ; 5 = 13 ; 4 = min(14 − 6 ; 13 − 2) = 8 ; 3 = 4 ; 2 = 3 ; 1 = 0.
> Marges : B et D = **2 jours**, E et G = **3 jours**, A, C et F = **0**.

## Le chemin critique
C'est la suite des tâches **sans marge** : A → C → F. Tout retard sur une tâche critique **retarde tout le chantier**. Pour raccourcir le délai, il faut agir sur ces tâches (plus d'ouvriers, travail en équipes…).

## Application au chantier
| Tâche | Durée | Après |
|---|---|---|
| Fouilles | 4 j | — |
| Béton de propreté et semelles | 5 j | Fouilles |
| Commande des menuiseries | 30 j | — |
| Élévation | 20 j | Semelles |
| Pose des menuiseries | 6 j | Élévation et commande |
La chaîne fouilles + semelles + élévation dure 4 + 5 + 20 = 29 jours, mais la commande des menuiseries en dure 30 : c'est donc **la commande qui est critique** ! Il faut la passer dès le premier jour, sinon la pose sera retardée.

> [!retenir]
> Le chemin critique est le plus long chemin du réseau : il fixe la durée minimale du projet.`,
 quiz:[
  {q:"Le chemin critique est :", o:["Le chemin le plus court","Le plus long chemin, sans marge","Le chemin le moins cher","La première tâche"], r:1, e:"Il détermine la durée du projet."},
  {q:"La date au plus tôt d'un nœud se calcule avec :", o:["Le minimum","Le maximum","La moyenne","La somme de toutes les durées"], r:1, e:"On attend la fin de toutes les tâches qui arrivent."},
  {q:"Une tâche avec 3 jours de marge totale peut :", o:["Être supprimée","Être retardée de 3 jours sans retarder le projet","Commencer 3 jours plus tôt obligatoirement","Durer 3 jours de moins"], r:1, e:"C'est la définition de la marge totale."},
  {q:"Dans l'exemple, la durée totale du projet est :", o:["11 jours","14 jours","23 jours","8 jours"], r:1, e:"A + C + F = 3 + 5 + 6 = 14 jours."}
 ]},
{id:'ro-4', niv:2, titre:'Méthode des potentiels, Gantt et lissage', duree:25, contenu:`## La méthode des potentiels (MPM)
Ici, les **tâches sont des nœuds** et les flèches représentent les liens d'antériorité. Elle évite les tâches fictives du PERT et permet facilement des liens « début-début » ou « fin-début avec décalage » (par exemple : décoffrer 21 jours après le coulage).

## Le diagramme de Gantt
Chaque tâche est une **barre horizontale** sur une échelle de temps. Il est très lisible pour les équipes et le maître d'ouvrage.

!fig:gantt|Diagramme de Gantt d'une maison

Bonnes pratiques :
- découper en tâches de 2 à 15 jours ;
- faire apparaître les **jalons** (fin des fondations, mise hors d'eau, réception) ;
- mettre à jour le planning **chaque semaine** avec l'avancement réel.

## Durée d'une tâche
$$ Durée = Quantité / (Rendement × Effectif)

> [!exemple]
> 320 m² de maçonnerie d'agglos, rendement d'un binôme maçon + manœuvre : 10 m²/jour. Avec 4 binômes : 320 / (10 × 4) = **8 jours**.

## Lissage des ressources
Si plusieurs tâches demandent le même métier en même temps, le pic d'effectif peut dépasser l'équipe disponible. On **décale les tâches qui ont de la marge** pour lisser la charge : l'effectif reste stable et le chantier coûte moins cher.

> [!astuce]
> Les tâches critiques ne se décalent pas : on lisse avec les marges des autres tâches.`,
 quiz:[
  {q:"Dans la méthode MPM, les tâches sont représentées par :", o:["Des flèches","Des nœuds","Des barres","Des cercles vides"], r:1, e:"Contrairement au PERT, les tâches sont les nœuds."},
  {q:"Durée pour 200 m² avec un rendement de 10 m²/j et 2 équipes :", o:["5 jours","10 jours","20 jours","40 jours"], r:1, e:"200 / (10 × 2) = 10 jours."},
  {q:"Le lissage des ressources consiste à :", o:["Supprimer des tâches","Décaler les tâches qui ont de la marge","Allonger le chemin critique","Embaucher plus"], r:1, e:"On évite les pics d'effectif."},
  {q:"Un jalon est :", o:["Une tâche longue","Un événement clé de durée nulle","Un ouvrier","Un retard"], r:1, e:"Exemple : mise hors d'eau, réception."}
 ]},
{id:'ro-5', niv:3, titre:'Problèmes de transport et d\'affectation', duree:30, contenu:`## Le problème de transport
Des **sources** (carrières, dépôts) livrent des **destinations** (chantiers) ; chaque liaison a un coût par unité. On cherche le plan de livraison de **coût total minimal** en respectant offres et demandes.

> [!exemple] Gravier pour deux chantiers
> Carrière C1 : 60 m³ disponibles ; carrière C2 : 40 m³. Chantier A : 50 m³ ; chantier B : 50 m³.
> Coûts de transport (F/m³) : C1→A 3 000 ; C1→B 5 000 ; C2→A 6 000 ; C2→B 4 000.
> Méthode du **coût minimal** : on remplit d'abord la case la moins chère.
> C1→A : 50 m³ (3 000) ; C2→B : 40 m³ (4 000) ; reste C1→B : 10 m³ (5 000).
> Coût = 150 000 + 160 000 + 50 000 = **360 000 F**.
> Comparer avec la solution « coin nord-ouest » : C1→A 50, C1→B 10, C2→B 40 : identique ici. On vérifie l'optimalité par la méthode des potentiels (stepping-stone).

## Le problème d'affectation
Affecter n équipes à n tâches (une équipe par tâche) en minimisant le temps ou le coût total. La **méthode hongroise** :
1. soustraire le minimum de chaque ligne, puis de chaque colonne ;
2. chercher une affectation sur les zéros ;
3. sinon, couvrir les zéros par un minimum de lignes et ajuster.

> [!exemple]
> 3 équipes (E1, E2, E3), 3 tâches (coffrage, ferraillage, maçonnerie). Temps (jours) :
> E1 : 4, 6, 5 · E2 : 5, 4, 7 · E3 : 6, 7, 4.
> Affectation optimale : E1 → coffrage (4), E2 → ferraillage (4), E3 → maçonnerie (4) : **12 jours-équipe**.

> [!retenir]
> Transport : satisfaire toutes les demandes au coût minimal. Affectation : une ressource par tâche, au meilleur rendement.`,
 quiz:[
  {q:"Le problème de transport cherche à :", o:["Maximiser les livraisons","Minimiser le coût total en respectant offres et demandes","Choisir un camion","Planifier les tâches"], r:1, e:"C'est l'objectif classique."},
  {q:"Dans la méthode du coût minimal, on commence par :", o:["La case la plus chère","La case la moins chère","La case en haut à gauche","Au hasard"], r:1, e:"On remplit d'abord les liaisons les moins coûteuses."},
  {q:"La méthode hongroise résout :", o:["Les transports","Les affectations","Les stocks","Les PERT"], r:1, e:"Elle sert au problème d'affectation."},
  {q:"Coût de 50 m³ à 3 000 F/m³ :", o:["15 000 F","150 000 F","1 500 000 F","53 000 F"], r:1, e:"50 × 3 000 = 150 000 F."}
 ]},
{id:'ro-6', niv:2, titre:'Gestion des stocks : la formule de Wilson', duree:25, contenu:`## Le dilemme des approvisionnements
- Commander **souvent en petites quantités** : beaucoup de frais de commande et de transport, risque de rupture.
- Commander **rarement en grandes quantités** : frais de stockage, immobilisation d'argent, pertes (ciment qui durcit, vols).

## La quantité économique de Wilson
$$ Q* = √( 2 × D × Cc / Cs )
- D : consommation annuelle (ou sur la durée du chantier) ;
- Cc : coût d'une commande (transport, démarches) ;
- Cs : coût de stockage d'une unité sur la même période.

> [!exemple] Ciment d'un chantier d'immeuble
> Consommation : 6 000 sacs sur l'année. Coût d'une commande (camion + déchargement) : 25 000 F. Coût de stockage d'un sac pendant un an (magasin, pertes, argent immobilisé) : 500 F.
> Q* = √(2 × 6 000 × 25 000 / 500) = √600 000 ≈ **775 sacs** par commande, soit environ **8 commandes** par an (une toutes les 6 à 7 semaines).

## Stock de sécurité et point de commande
$$ Point de commande = consommation pendant le délai de livraison + stock de sécurité
> [!exemple]
> Consommation : 25 sacs/jour ; délai de livraison : 3 jours ; stock de sécurité : 2 jours.
> On recommande lorsque le stock descend à 25 × (3 + 2) = **125 sacs**.

> [!attention]
> Le ciment se conserve mal en climat humide : au-delà de 1 à 2 mois, il forme des grumeaux et perd de sa résistance. Le stock doit rester **sur palettes, à l'abri, et être consommé dans l'ordre d'arrivée** (premier entré, premier sorti).`,
 quiz:[
  {q:"La formule de Wilson donne :", o:["Le prix du ciment","La quantité économique à commander","La durée du chantier","Le stock maximum autorisé"], r:1, e:"Q* équilibre coûts de commande et de stockage."},
  {q:"Si le coût de stockage augmente, Q* :", o:["Augmente","Diminue","Ne change pas","Double"], r:1, e:"Cs est au dénominateur : on commande moins à la fois."},
  {q:"Point de commande pour 20 sacs/j, délai 4 j, sécurité 1 j :", o:["80 sacs","100 sacs","20 sacs","24 sacs"], r:1, e:"20 × (4 + 1) = 100 sacs."},
  {q:"Le stock de ciment doit être géré :", o:["Dernier entré, premier sorti","Premier entré, premier sorti","Au hasard","En le laissant au soleil"], r:1, e:"Pour éviter que des sacs vieillissent."}
 ]}
]});
