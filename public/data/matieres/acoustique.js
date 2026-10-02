A.addMatiere({
 id:'acou', titre:'Acoustique du bâtiment', court:'Acoustique', groupe:'phys', icone:'sound', couleur:'#0E8C95', niveau:'Intermédiaire', heures:14, ordre:3, prerequis:['sp'],
 resume:"Le son et les décibels, isolation aux bruits aériens et aux bruits de choc, correction acoustique des salles et bonnes pratiques de conception.",
 objectifs:["Calculer et additionner des niveaux sonores en décibels","Appliquer la loi de masse pour choisir une paroi","Traiter les bruits d'impact et d'équipements","Calculer un temps de réverbération (formule de Sabine)"],
 applications:["Isolation entre deux logements d'un immeuble","Chambre côté rue","Salle de classe, salle de réunion, lieu de culte","Bruit des groupes électrogènes et climatiseurs"],
 chapitres:[
{id:'acou-1', niv:1, titre:'Le son et les décibels', duree:25, contenu:`## Qu'est-ce que le son ?
Une vibration de l'air qui se propage à environ **340 m/s**. Il est caractérisé par :
- sa **fréquence** f (Hz) : grave (< 250 Hz), médium, aigu (> 2 000 Hz). L'oreille entend de 20 à 20 000 Hz ;
- sa **longueur d'onde** λ = c / f (à 100 Hz : 3,4 m ; à 1 000 Hz : 34 cm) ;
- son **niveau** en décibels (dB).

## Le décibel
L'oreille perçoit des pressions sonores très différentes : on utilise une échelle **logarithmique**.
$$ L = 10 log(I / I₀)

| Situation | Niveau |
|---|---|
| Seuil d'audition | 0 dB |
| Chambre calme la nuit | 25 à 30 dB |
| Conversation | 60 dB |
| Rue animée | 70 à 80 dB |
| Groupe électrogène à 1 m | 85 à 100 dB |
| Marteau-piqueur | 100 à 110 dB |
| Seuil de douleur | 120 dB |

## Addition de niveaux
Les décibels **ne s'additionnent pas** arithmétiquement :
$$ Ltotal = 10 log(10^(L₁/10) + 10^(L₂/10) + …)
- Deux sources identiques : **+ 3 dB** (70 + 70 = 73 dB).
- Si l'écart dépasse 10 dB, la plus faible est négligeable (80 + 65 ≈ 80 dB).

## Décroissance avec la distance
En champ libre, le niveau baisse de **6 dB à chaque doublement de distance** d'une source ponctuelle.

> [!exemple]
> Un groupe électrogène produit 85 dB à 2 m. À 16 m (3 doublements) : 85 − 18 = **67 dB**. Pour le voisin à 32 m : environ 61 dB.

> [!attention]
> Une exposition prolongée au-delà de 85 dB abîme l'audition : protections auditives obligatoires pour les ouvriers près des marteaux-piqueurs, bétonnières et scies.`,
 quiz:[
  {q:"Deux sources de 70 dB ensemble donnent :", o:["140 dB","73 dB","70 dB","76 dB"], r:1, e:"Doubler l'énergie ajoute 3 dB."},
  {q:"En champ libre, doubler la distance réduit le niveau de :", o:["3 dB","6 dB","10 dB","20 dB"], r:1, e:"−6 dB par doublement de distance."},
  {q:"La longueur d'onde d'un son de 340 Hz vaut :", o:["1 m","34 m","0,34 m","3,4 m"], r:0, e:"λ = 340 / 340 = 1 m."},
  {q:"Une conversation normale fait environ :", o:["30 dB","60 dB","90 dB","120 dB"], r:1, e:"Environ 60 dB."}
 ]},
{id:'acou-2', niv:2, titre:'Isolation aux bruits aériens', duree:30, contenu:`## L'indice d'affaiblissement R
R (dB) mesure la capacité d'une paroi à arrêter le son. Si le bruit est de 80 dB d'un côté d'un mur de R = 45 dB, il reste environ 35 dB de l'autre (hors transmissions parasites).

## La loi de masse
Pour une paroi simple, l'isolement augmente avec la **masse surfacique** m (kg/m²) et la fréquence :
$$ R ≈ 20 log(m × f) − 47   (dB)
Conséquence : **+ 6 dB** quand on double la masse (ou la fréquence). Une paroi lourde isole bien ; une paroi légère isole mal, surtout les graves.

!fig:loi-masse|Loi de masse : l'isolement croît avec la masse

| Paroi | Masse (kg/m²) | Rw indicatif |
|---|---|---|
| Cloison plâtre simple | 25 | 33 dB |
| Agglo creux 10 enduit 2 faces | 150 | 40 dB |
| Agglo creux 15 enduit 2 faces | 200 à 230 | 45 dB |
| Agglo plein 20 enduit | 350 | 50 dB |
| Voile béton 16 cm | 380 | 55 dB |

## Les doubles parois
Deux parois séparées par une lame d'air avec un absorbant (laine minérale) isolent mieux qu'une paroi simple de même masse (effet masse-ressort-masse), sauf autour de leur fréquence de résonance.

## Les points faibles
L'isolement réel est limité par l'élément le plus faible :
- **portes et fenêtres** (une fenêtre ouverte ou mal jointive annule l'effet d'un mur lourd) ;
- **trous, gaines, prises dos à dos**, coffres de volets ;
- transmissions **latérales** par les murs et planchers continus.

> [!exemple]
> Un mur de 50 dB avec une porte de 25 dB occupant 10 % de la surface : l'ensemble n'isole plus qu'environ **35 dB**.

> [!retenir]
> Lourd, étanche, désolidarisé : les trois règles de l'isolation acoustique.`,
 quiz:[
  {q:"Selon la loi de masse, doubler la masse d'une paroi ajoute :", o:["3 dB","6 dB","10 dB","20 dB"], r:1, e:"+6 dB par doublement de masse."},
  {q:"Le point faible d'une façade est souvent :", o:["Le mur en agglos","La fenêtre","Le poteau","La fondation"], r:1, e:"Les menuiseries isolent moins que les murs."},
  {q:"Quelle paroi isole le mieux ?", o:["Cloison plâtre","Agglo 10","Voile béton 16 cm","Contreplaqué"], r:2, e:"C'est la plus lourde."},
  {q:"Des prises électriques dos à dos dans une cloison :", o:["Améliorent l'isolement","Créent un pont acoustique","N'ont aucun effet","Sont obligatoires"], r:1, e:"Elles percent la paroi des deux côtés."}
 ]},
{id:'acou-3', niv:2, titre:'Bruits de choc et d\'équipements', duree:20, contenu:`## Les bruits d'impact
Pas, chutes d'objets, déplacements de meubles : le choc fait vibrer **directement la structure** (dalle), qui rayonne le bruit dans les pièces voisines, y compris en diagonale.
- Une dalle pleine lourde transmet moins qu'un plancher léger.
- Le carrelage collé directement sur la dalle est très bruyant.

## Solutions
1. **Revêtement souple** (moquette, sol vinyle sur sous-couche) : très efficace.
2. **Chape flottante** : chape de 4 à 5 cm posée sur un **résilient** (sous-couche acoustique), désolidarisée des murs par une bande périphérique. On peut ensuite carreler.
3. **Faux plafond suspendu** avec laine minérale dans le local du dessous.

> [!attention]
> Une chape flottante qui touche le mur ou un poteau (mortier qui coule dans la bande périphérique) perd tout son effet : c'est un « pont phonique ».

## Les bruits d'équipements
- **Climatiseurs** : unités extérieures sur supports antivibratiles, loin des fenêtres des chambres (y compris celles des voisins).
- **Groupes électrogènes** : caisson insonorisé, plots antivibratiles, local en maçonnerie lourde, échappement orienté loin des habitations.
- **Canalisations** : chutes d'eaux usées en PVC entourées d'isolant, colliers avec caoutchouc ; éviter de les placer contre les murs des chambres.
- **Pompes et surpresseurs** : manchons souples et socles désolidarisés.

> [!retenir]
> Contre les chocs : couper la vibration (résilient, revêtement souple). Contre les équipements : désolidariser (plots, manchons) et éloigner.`,
 quiz:[
  {q:"Une chape flottante repose sur :", o:["Le béton directement","Une sous-couche résiliente","Des agglos","Du sable sec"], r:1, e:"Le résilient amortit les vibrations."},
  {q:"Le revêtement de sol le plus efficace contre les bruits de pas :", o:["Carrelage collé","Moquette ou sol souple","Marbre","Béton ciré"], r:1, e:"Il absorbe le choc à la source."},
  {q:"Un climatiseur extérieur doit être posé :", o:["Directement sur la dalle","Sur des supports antivibratiles","Sous la fenêtre d'une chambre","Dans le salon"], r:1, e:"Pour ne pas transmettre les vibrations."},
  {q:"Un pont phonique est :", o:["Un isolant","Un contact rigide qui transmet les vibrations","Un type de fenêtre","Une poutre"], r:1, e:"Il annule l'effet de désolidarisation."}
 ]},
{id:'acou-4', niv:2, titre:'Correction acoustique et réverbération', duree:25, contenu:`## Isolation ou correction ?
- **Isoler** : empêcher le bruit de passer d'un local à l'autre (parois lourdes).
- **Corriger** : améliorer l'écoute **dans** un local en limitant les réflexions (matériaux absorbants).

## Le coefficient d'absorption α
Fraction de l'énergie sonore absorbée par un matériau (de 0 à 1) :
| Matériau | α moyen |
|---|---|
| Béton, carrelage, enduit lissé | 0,02 |
| Bois massif | 0,10 |
| Rideaux épais | 0,40 |
| Personnes assises (par personne) | ≈ 0,5 m² d'absorption |
| Panneaux de laine minérale, dalles acoustiques | 0,70 à 0,95 |

## Le temps de réverbération (formule de Sabine)
C'est le temps que met le son pour décroître de 60 dB après l'arrêt de la source :
$$ T = 0,16 × V / A        A = Σ αᵢ Sᵢ   (m²)

> [!exemple] Salle de classe
> 9 × 7 × 3,2 m : V = 202 m³. Murs et plafond enduits, sol carrelé : surfaces 63 + 63 + 102 = 228 m² × 0,02 ≈ 4,6 m² ; 40 élèves ≈ 20 m² ; fenêtres et portes ≈ 2 m². A ≈ 26,6 m².
> T = 0,16 × 202 / 26,6 ≈ **1,2 s** : trop réverbérant (on vise 0,6 à 0,8 s pour une classe).
> Avec 63 m² de plafond acoustique (α = 0,8) : A ≈ 26,6 − 1,3 + 50,4 = 75,7 m² → T ≈ **0,43 s**. Un plafond partiel (35 m²) donne A ≈ 53,9 m² et T ≈ **0,6 s** : idéal.

## Valeurs cibles
| Local | Temps de réverbération |
|---|---|
| Salle de classe, bureau | 0,5 à 0,8 s |
| Salle de réunion | 0,6 à 0,8 s |
| Salle polyvalente | 1,0 à 1,2 s |
| Église, salle de musique | 1,5 à 2 s |

> [!retenir]
> Une salle « qui résonne » se corrige avec des matériaux absorbants, principalement au plafond.`,
 quiz:[
  {q:"La formule de Sabine donne :", o:["L'isolement d'un mur","Le temps de réverbération","Le niveau sonore","La fréquence"], r:1, e:"T = 0,16 V / A."},
  {q:"Pour réduire la réverbération d'une salle, on ajoute :", o:["Du carrelage","Des matériaux absorbants","Des vitres","Du béton"], r:1, e:"Ils augmentent l'aire d'absorption A."},
  {q:"Le coefficient d'absorption d'un béton lisse est environ :", o:["0,02","0,5","0,9","1"], r:0, e:"Il réfléchit presque tout le son."},
  {q:"Temps de réverbération conseillé pour une salle de classe :", o:["0,5 à 0,8 s","2 à 3 s","0,1 s","5 s"], r:0, e:"Pour une bonne intelligibilité de la parole."}
 ]}
]});
