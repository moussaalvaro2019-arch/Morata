/* =====================================================================
   Acoustique du bâtiment — cours complet (3 niveaux)
   ===================================================================== */
A.addMatiere({
 id:"acou",
 titre:"Acoustique du bâtiment",
 court:"Acoustique",
 groupe:"phys",
 icone:"sound",
 couleur:"#0E8C95",
 niveau:"Intermédiaire",
 heures:14,
 ordre:3,
 prerequis:["sp"],
 resume:"Le son et les décibels, isolation aux bruits aériens et aux bruits de choc, correction acoustique des salles et bonnes pratiques de conception.",
 objectifs:[
  "Calculer et additionner des niveaux sonores en décibels",
  "Appliquer la loi de masse pour choisir une paroi",
  "Traiter les bruits d'impact et d'équipements",
  "Calculer un temps de réverbération (formule de Sabine)"
 ],
 applications:[
  "Isolation entre deux logements d'un immeuble",
  "Chambre côté rue",
  "Salle de classe, salle de réunion, lieu de culte",
  "Bruit des groupes électrogènes et climatiseurs"
 ],
 chapitres:[
{id:"acou-1", niv:1, titre:"Le son et les décibels", duree:25, contenu:`## Qu'est-ce que le son ?
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
> Une exposition prolongée au-delà de 85 dB abîme l'audition : protections auditives obligatoires pour les ouvriers près des marteaux-piqueurs, bétonnières et scies.`, quiz:[
  {q:"Deux sources de 70 dB ensemble donnent :", o:["140 dB", "73 dB", "70 dB", "76 dB"], r:1, e:"Doubler l'énergie ajoute 3 dB."},
  {q:"En champ libre, doubler la distance réduit le niveau de :", o:["3 dB", "6 dB", "10 dB", "20 dB"], r:1, e:"−6 dB par doublement de distance."},
  {q:"La longueur d'onde d'un son de 340 Hz vaut :", o:["1 m", "34 m", "0,34 m", "3,4 m"], r:0, e:"λ = 340 / 340 = 1 m."},
  {q:"Une conversation normale fait environ :", o:["30 dB", "60 dB", "90 dB", "120 dB"], r:1, e:"Environ 60 dB."}
 ]},

{id:"acou-5", niv:1, titre:"Les bruits du quotidien et la gêne", duree:20, contenu:`## D'où viennent les bruits ?
- **Extérieurs** : circulation, maquis et lieux de culte, chantiers, groupes électrogènes du voisinage ;
- **Voisinage** : voix, musique, pas sur le plancher du dessus ;
- **Équipements** : climatiseurs, pompes, ascenseurs, chasses d'eau.

## L'échelle des décibels
| Situation | Niveau en dB(A) |
|---|---|
| Chambre calme la nuit | 30 |
| Bureau calme | 40 |
| Conversation normale | 60 |
| Rue animée | 70 |
| Seuil de danger pour 8 h d'exposition | 85 |
| Marteau-piqueur à 1 m | 100 |
| Seuil de la douleur | 120 |

## Deux règles simples
- **Deux sources identiques** ne doublent pas le niveau : elles ajoutent **3 dB**.
- Pour une source ponctuelle, chaque **doublement de distance** fait baisser le niveau de **6 dB**.

> [!exemple] Un groupe électrogène bruyant
> 85 dB(A) à 1 m. À 2 m : 79 ; à 4 m : 73 ; à 8 m : **67 dB(A)**. Pour gagner davantage, on le place dans un **caisson insonorisé** (15 à 25 dB de moins) et loin des chambres.

## Protéger les travailleurs
Au-delà de **85 dB(A)**, le port de **protections auditives** (casque, bouchons) est obligatoire sur le chantier : disqueuse, marteau-piqueur, bétonnière, groupe.`, quiz:[
  {q:"Deux climatiseurs identiques de 50 dB fonctionnant ensemble donnent :", o:["100 dB", "53 dB", "50 dB", "25 dB"], r:1, e:"Deux sources égales ajoutent 3 dB."},
  {q:"Pour une source ponctuelle, doubler la distance diminue le niveau de :", o:["3 dB", "6 dB", "10 dB", "20 dB"], r:1, e:"−6 dB par doublement de distance."},
  {q:"Les protections auditives deviennent obligatoires à partir de :", o:["60 dB(A)", "85 dB(A)", "120 dB(A)", "30 dB(A)"], r:1, e:"Seuil d'exposition sur une journée de travail."},
  {q:"Une conversation normale se situe vers :", o:["30 dB(A)", "60 dB(A)", "100 dB(A)", "120 dB(A)"], r:1, e:"Environ 60 dB(A) à 1 m."}
 ]},

{id:"acou-6", niv:1, titre:"Choisir ses matériaux pour le confort acoustique", duree:20, contenu:`## Isoler ou absorber : deux actions différentes
- **Isoler**, c'est empêcher le bruit de **passer** d'une pièce à l'autre : il faut de la **masse** et de l'**étanchéité**.
- **Absorber**, c'est réduire l'**écho** dans une pièce : il faut des matériaux **poreux ou souples** (faux plafond acoustique, rideaux, tapis).

## Les bons choix courants
| Ouvrage | Plus performant | Moins performant |
|---|---|---|
| Mur entre logements | Agglo plein enduit, double mur | Agglo creux de 10 |
| Plancher | Dalle pleine + chape | Plancher bois léger |
| Porte de chambre | Porte pleine avec joints | Porte isoplane creuse |
| Fenêtre sur rue | Double vitrage, menuiserie étanche | Persiennes, naco |
| Sol | Carrelage sur sous-couche, tapis | Carrelage collé directement |

## L'étanchéité compte autant que la masse
Une fente ou un trou laisse passer le bruit comme une fenêtre ouverte.
> [!exemple]
> Un mur qui isole de 50 dB, percé d'une ouverture représentant **1 %** de sa surface (gaine mal rebouchée, porte détalonnée), n'isole plus que **20 dB** environ.

## Équipements
- Poser climatiseurs, pompes et groupes sur des **plots antivibratiles** ;
- Désolidariser les tuyauteries (colliers isophoniques) ;
- Éloigner les machines des chambres.

> [!retenir]
> Masse + étanchéité pour isoler ; matériaux poreux pour absorber. Les deux ne se remplacent pas.`, quiz:[
  {q:"Pour isoler une chambre du bruit de la pièce voisine, il faut surtout :", o:["De la masse et de l'étanchéité", "Une moquette", "Une peinture acoustique", "Une couleur claire"], r:0, e:"L'absorption ne remplace pas l'isolation."},
  {q:"Un mur de 50 dB percé d'une ouverture de 1 % n'isole plus que :", o:["49 dB", "35 dB", "20 dB environ", "50 dB"], r:2, e:"Le trou laisse passer 1 % de l'énergie : −20 dB."},
  {q:"Pour réduire l'écho dans une salle, on ajoute :", o:["Des matériaux absorbants (faux plafond acoustique, rideaux)", "Du carrelage", "Des murs plus épais", "Des vitres"], r:0, e:"Ils diminuent la réverbération."},
  {q:"Les climatiseurs se posent sur :", o:["Des plots antivibratiles", "Des cales en bois serrées", "Directement sur la dalle", "Des briques"], r:0, e:"Pour éviter de transmettre les vibrations à la structure."}
 ]},

{id:"acou-2", niv:2, titre:"Isolation aux bruits aériens", duree:30, contenu:`## L'indice d'affaiblissement R
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
> Lourd, étanche, désolidarisé : les trois règles de l'isolation acoustique.`, quiz:[
  {q:"Selon la loi de masse, doubler la masse d'une paroi ajoute :", o:["3 dB", "6 dB", "10 dB", "20 dB"], r:1, e:"+6 dB par doublement de masse."},
  {q:"Le point faible d'une façade est souvent :", o:["Le mur en agglos", "La fenêtre", "Le poteau", "La fondation"], r:1, e:"Les menuiseries isolent moins que les murs."},
  {q:"Quelle paroi isole le mieux ?", o:["Cloison plâtre", "Agglo 10", "Voile béton 16 cm", "Contreplaqué"], r:2, e:"C'est la plus lourde."},
  {q:"Des prises électriques dos à dos dans une cloison :", o:["Améliorent l'isolement", "Créent un pont acoustique", "N'ont aucun effet", "Sont obligatoires"], r:1, e:"Elles percent la paroi des deux côtés."}
 ]},

{id:"acou-3", niv:2, titre:"Bruits de choc et d'équipements", duree:20, contenu:`## Les bruits d'impact
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
> Contre les chocs : couper la vibration (résilient, revêtement souple). Contre les équipements : désolidariser (plots, manchons) et éloigner.`, quiz:[
  {q:"Une chape flottante repose sur :", o:["Le béton directement", "Une sous-couche résiliente", "Des agglos", "Du sable sec"], r:1, e:"Le résilient amortit les vibrations."},
  {q:"Le revêtement de sol le plus efficace contre les bruits de pas :", o:["Carrelage collé", "Moquette ou sol souple", "Marbre", "Béton ciré"], r:1, e:"Il absorbe le choc à la source."},
  {q:"Un climatiseur extérieur doit être posé :", o:["Directement sur la dalle", "Sur des supports antivibratiles", "Sous la fenêtre d'une chambre", "Dans le salon"], r:1, e:"Pour ne pas transmettre les vibrations."},
  {q:"Un pont phonique est :", o:["Un isolant", "Un contact rigide qui transmet les vibrations", "Un type de fenêtre", "Une poutre"], r:1, e:"Il annule l'effet de désolidarisation."}
 ]},

{id:"acou-4", niv:2, titre:"Correction acoustique et réverbération", duree:25, contenu:`## Isolation ou correction ?
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
> Une salle « qui résonne » se corrige avec des matériaux absorbants, principalement au plafond.`, quiz:[
  {q:"La formule de Sabine donne :", o:["L'isolement d'un mur", "Le temps de réverbération", "Le niveau sonore", "La fréquence"], r:1, e:"T = 0,16 V / A."},
  {q:"Pour réduire la réverbération d'une salle, on ajoute :", o:["Du carrelage", "Des matériaux absorbants", "Des vitres", "Du béton"], r:1, e:"Ils augmentent l'aire d'absorption A."},
  {q:"Le coefficient d'absorption d'un béton lisse est environ :", o:["0,02", "0,5", "0,9", "1"], r:0, e:"Il réfléchit presque tout le son."},
  {q:"Temps de réverbération conseillé pour une salle de classe :", o:["0,5 à 0,8 s", "2 à 3 s", "0,1 s", "5 s"], r:0, e:"Pour une bonne intelligibilité de la parole."}
 ]},

{id:"acou-7", niv:3, titre:"Isolement entre locaux : transmissions latérales et DnT", duree:30, contenu:`## Du laboratoire au bâtiment
- **R** : indice d'affaiblissement d'une paroi mesuré en laboratoire (une seule paroi transmet).
- **R'** : indice apparent sur chantier, plus faible à cause des **transmissions latérales** (planchers et murs continus qui transportent les vibrations).
- **DnT** : isolement **standardisé** entre deux pièces réelles, corrigé de la réverbération de la pièce de réception :
$$ DnT = L1 − L2 + 10 log (T / 0,5)

> [!exemple] Mesure entre deux séjours d'un immeuble
> Niveau émis L1 = 95 dB, niveau reçu L2 = 48 dB, durée de réverbération de la pièce de réception T = 0,8 s.
> DnT = 95 − 48 + 10 log(1,6) = 47 + 2,0 = **49 dB**, inférieur à l'objectif de 53 dB → non conforme.

## Les transmissions latérales
Le bruit contourne la paroi séparative par les **planchers, les façades et les murs de refend** qui la traversent. Elles font perdre couramment **3 à 7 dB**. Remèdes : désolidariser (joints souples), doublages, chapes flottantes.

## Le système masse-ressort-masse
Un doublage (plaque de plâtre + laine minérale + lame d'air) devant un mur lourd améliore fortement l'isolement, à condition que sa **fréquence de résonance** soit basse (moins de 100 Hz) :
$$ f0 = 60 × √( (1/m1 + 1/m2) / d )   (m en kg/m², d en m)
> [!exemple]
> Mur de 230 kg/m² + plaque de 10 kg/m² avec 5 cm de vide rempli de laine : f0 = 60 × √((1/230 + 1/10)/0,05) ≈ **87 Hz** ✔.

## Objectifs courants pour les logements
- Entre logements : **DnT,A ≥ 53 dB** (bruits aériens) ;
- Bruits de choc reçus : **L'nT,w ≤ 58 dB** ;
- Équipements : moins de 30 à 35 dB(A) dans les chambres.`, quiz:[
  {q:"L'isolement standardisé DnT se calcule avec :", o:["L1 − L2 + 10 log(T/0,5)", "L1 + L2", "R × T", "20 log(m)"], r:0, e:"On corrige la différence de niveaux par la réverbération."},
  {q:"Les transmissions latérales font généralement perdre :", o:["3 à 7 dB", "0 dB", "30 dB", "50 dB"], r:0, e:"Le bruit contourne la paroi par les éléments continus."},
  {q:"Pour un doublage masse-ressort-masse efficace, la fréquence de résonance doit être :", o:["Basse (moins de 100 Hz)", "Élevée (plus de 1 000 Hz)", "Égale à 500 Hz", "Sans importance"], r:0, e:"Au-dessus de f0, l'isolement augmente fortement."},
  {q:"L'isolement courant visé entre deux logements est :", o:["DnT,A ≥ 53 dB", "DnT,A ≥ 20 dB", "DnT,A ≥ 90 dB", "Aucune exigence"], r:0, e:"Valeur de référence de la réglementation française souvent reprise."}
 ]},

{id:"acou-8", niv:3, titre:"Acoustique des salles : classes, lieux de culte, auditoriums", duree:30, contenu:`## La bonne durée de réverbération
| Usage | Durée conseillée |
|---|---|
| Salle de classe, bureau, salle de réunion | 0,5 à 0,8 s |
| Salle polyvalente, lieu de culte (parole et chants) | 1,0 à 1,5 s |
| Salle de concert | 1,5 à 2,0 s |

Trop longue, la réverbération rend la parole inintelligible ; trop courte, la salle paraît « sourde ».

## Calcul avec la formule de Sabine
$$ T = 0,16 × V / A      A = Σ S × α
> [!exemple] Une salle de classe de 9 × 7 × 3,2 m (40 élèves)
> V = 201,6 m³.
> Sol carrelé 63 m² × 0,02 = 1,26 ; plafond enduit 63 × 0,03 = 1,89 ; murs 90,4 m² × 0,03 = 2,71 ; fenêtres 12 m² × 0,10 = 1,20 ; élèves 40 × 0,40 = 16,0 → A = 23,1 m².
> T = 0,16 × 201,6 / 23,1 = **1,40 s** : beaucoup trop long, les élèves du fond comprennent mal.
> Avec un **faux plafond acoustique** (α = 0,70) : A augmente de 63 × (0,70 − 0,03) = 42,2 → A = 65,3 m² → **T = 0,49 s** ✔.

## La forme de la salle
- Éviter les murs parallèles très réfléchissants (échos flottants) : traiter au moins un des deux ;
- Utiliser le plafond au-dessus de l'orateur comme **réflecteur** et placer l'absorbant au fond ;
- Les coupoles et voûtes concentrent le son en certains points : à traiter.

## Le bruit de fond
Les climatiseurs, ventilateurs et bruits extérieurs doivent rester sous **35 dB(A)** dans une classe. Une sonorisation ne compense pas une salle trop réverbérante : elle ajoute du son à une salle qui en contient déjà trop.`, quiz:[
  {q:"La durée de réverbération conseillée pour une salle de classe est :", o:["0,5 à 0,8 s", "2 à 3 s", "0,1 s", "5 s"], r:0, e:"Pour une bonne intelligibilité de la parole."},
  {q:"La formule de Sabine s'écrit :", o:["T = 0,16 V / A", "T = A / V", "T = 0,16 A / V", "T = V × A"], r:0, e:"V volume en m³, A aire d'absorption en m²."},
  {q:"Dans l'exemple, le faux plafond acoustique fait passer T de 1,40 s à :", o:["0,49 s", "1,20 s", "2,10 s", "0,05 s"], r:0, e:"L'aire d'absorption passe de 23 à 65 m²."},
  {q:"Les échos flottants sont dus à :", o:["Des murs parallèles très réfléchissants", "Des fenêtres ouvertes", "Un plafond acoustique", "Des élèves trop nombreux"], r:0, e:"Le son rebondit de l'un à l'autre."}
 ]},

{id:"acou-9", niv:3, titre:"Bruit de l'environnement : routes, chantiers et protections", duree:30, contenu:`## Source ponctuelle et source linéique
- Une machine isolée est une **source ponctuelle** : −6 dB par doublement de distance.
- Une route chargée est une **source linéique** : seulement **−3 dB** par doublement de distance.
> [!exemple]
> Une voie express produit 75 dB(A) à 10 m. À 40 m (deux doublements), il reste encore 75 − 6 = **69 dB(A)**.

## Les écrans acoustiques
Un mur ou un merlon entre la route et les logements crée une **zone d'ombre** acoustique. Son efficacité dépend de la **différence de marche** δ (allongement du trajet du son qui passe par-dessus l'écran). Approximation de Maekawa :
$$ ΔL ≈ 10 log (3 + 20 N)   avec N = 2 δ / λ
> [!exemple]
> δ = 0,5 m à 500 Hz (λ = 0,68 m) : N = 1,47 → ΔL ≈ 10 log(32,4) ≈ **15 dB**. Un écran est moins efficace pour les sons graves (λ plus grande).

## L'isolement des façades
Isolement nécessaire ≈ niveau extérieur − niveau intérieur souhaité.
> Façade exposée à 70 dB(A), chambre visée à 35 dB(A) → **35 dB d'isolement** : menuiseries acoustiques, entrées d'air insonorisées, coffres de volets étanches.

## Le bruit de chantier
- Respecter les **horaires** (pas de bruit de nuit ni tôt le matin) ;
- Matériel récent et capoté, groupe électrogène en caisson, centrales à béton éloignées des riverains ;
- Informer le voisinage des phases bruyantes (démolition, battage, sciage).

## Urbanisme
Les **cartes de bruit** permettent d'éviter de placer écoles et logements le long des grands axes, ou de les protéger par des bâtiments-écrans (bureaux, commerces) et des espaces tampons.`, quiz:[
  {q:"Pour une route (source linéique), doubler la distance diminue le niveau de :", o:["3 dB", "6 dB", "10 dB", "0 dB"], r:0, e:"Contre 6 dB pour une source ponctuelle."},
  {q:"Un écran acoustique est le moins efficace pour :", o:["Les sons graves", "Les sons aigus", "Les sons de 1 000 Hz", "Les ultrasons"], r:0, e:"Leur grande longueur d'onde contourne l'écran."},
  {q:"Façade à 70 dB(A), chambre visée à 35 dB(A) : l'isolement à obtenir est :", o:["35 dB", "105 dB", "70 dB", "2 dB"], r:0, e:"70 − 35 = 35 dB."},
  {q:"Le paramètre clé de l'efficacité d'un écran est :", o:["La différence de marche du son", "La couleur de l'écran", "Le prix", "La hauteur des logements"], r:0, e:"Plus le détour est grand, plus l'atténuation est forte."}
 ]}
]});
