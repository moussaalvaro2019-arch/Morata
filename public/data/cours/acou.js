/* =====================================================================
   Acoustique du bâtiment — cours complet (3 niveaux)
   Débutant : le son et les décibels, propagation, mesure du bruit,
              bruits du quotidien et gêne, absorber ou isoler
   Intermédiaire : bruits aériens et loi de masse, parois composites,
              bruits de choc et d'équipements, réverbération, bruit des
              chantiers et protection des travailleurs
   Avancé : isolement entre locaux, acoustique des salles, bruit de
            l'environnement et écrans, équipements techniques et
            vibrations, concevoir un bâtiment calme
   ===================================================================== */
A.addMatiere({
 id:"acou",
 titre:"Acoustique du bâtiment",
 court:"Acoustique",
 groupe:"phys",
 icone:"sound",
 couleur:"#0E8C95",
 niveau:"Intermédiaire",
 heures:50,
 ordre:3,
 prerequis:["sp"],
 resume:"Le son et les décibels, propagation et mesure du bruit, gêne et santé, isolation aux bruits aériens (loi de masse, parois doubles et composites), bruits de choc et d'équipements, réverbération et acoustique des salles, bruit des chantiers, de la circulation et des groupes électrogènes, conception de bâtiments calmes.",
 objectifs:[
  "Calculer, additionner et soustraire des niveaux sonores en décibels",
  "Prévoir la décroissance du bruit avec la distance et derrière un écran",
  "Mesurer un niveau équivalent et évaluer l'exposition des travailleurs",
  "Choisir une paroi avec la loi de masse et traiter les points faibles",
  "Réduire les bruits de choc et les vibrations des équipements",
  "Calculer un temps de réverbération et corriger une salle",
  "Concevoir un plan qui protège du bruit"
 ],
 applications:[
  "Isolation entre deux logements d'un immeuble",
  "Chambre côté rue, façade sur une voie à fort trafic",
  "Salle de classe, salle de réunion, lieu de culte",
  "Groupes électrogènes, climatiseurs et pompes",
  "Bruit de chantier et protection auditive"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"acou-1", niv:1, titre:"Le son et les décibels", duree:45, contenu:`## Qu'est-ce qu'un son ?
Un son est une **petite variation de pression** de l'air qui se propage (onde mécanique) à environ **340 m/s**. Il est caractérisé par :
- sa **fréquence** f (Hz) : grave (basse fréquence) ou aigu (haute fréquence). L'oreille entend de 20 Hz à 20 000 Hz, et elle est la plus sensible entre 1 000 et 4 000 Hz ;
- son **niveau** (intensité), exprimé en **décibels (dB)** ;
- sa **durée** et son **évolution** (bruit continu, impulsionnel, intermittent).

## Pourquoi des décibels ?
L'oreille perçoit des pressions acoustiques allant de 0,000 02 Pa (seuil d'audition) à 20 Pa (seuil de douleur) : un rapport d'un million. On utilise donc une échelle **logarithmique** :
$$ L = 20 × log(p / p₀)     avec p₀ = 2 × 10⁻⁵ Pa
| Situation | Niveau |
|---|---|
| Seuil d'audition | 0 dB |
| Chambre calme la nuit | 25 à 30 dB |
| Bureau calme | 40 à 45 dB |
| Conversation | 55 à 65 dB |
| Rue animée | 70 à 75 dB |
| Groupe électrogène à 5 m | 85 à 95 dB |
| Marteau-piqueur à 2 m | 100 à 110 dB |
| Seuil de douleur | 120 dB |

## Le décibel A
L'oreille entend moins bien les graves : on mesure avec une **pondération A** qui reproduit cette sensibilité ; le résultat s'exprime en **dB(A)**. C'est l'unité des réglementations sur le bruit.

## Additionner des décibels
Les décibels **ne s'additionnent pas** arithmétiquement : on additionne les énergies.
$$ L(total) = 10 × log( 10^(L₁/10) + 10^(L₂/10) + … )
Règles pratiques :
- deux sources **égales** : **+ 3 dB** (80 + 80 = 83 dB) ;
- dix sources égales : **+ 10 dB** ;
- si l'écart entre deux sources dépasse **10 dB**, la plus faible ne compte presque plus (70 + 60 = 70,4 dB).

| Écart entre les deux niveaux | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|---|---|
| À ajouter au plus fort | 3 | 2,5 | 2,1 | 1,8 | 1,5 | 1,0 | 0,6 | 0,4 |

## Ce que l'on perçoit
- **+ 3 dB** : énergie doublée, à peine perceptible ;
- **+ 5 dB** : nettement perceptible ;
- **+ 10 dB** : bruit perçu comme **deux fois plus fort**.
Ainsi, réduire un bruit de 10 dB revient à le « diviser par deux » pour l'oreille, mais il faut diviser l'énergie par 10.

> [!retenir]
> - L = 20 log(p/p₀) ; dB(A) : pondération de l'oreille.
> - Deux sources égales : + 3 dB ; dix sources : + 10 dB.
> - Écart > 10 dB : la plus faible est négligeable.
> - + 10 dB = deux fois plus fort pour l'oreille.`,
 exercices:[
  {t:"Pression et niveau", d:1, e:`Calculer le niveau sonore correspondant à une pression acoustique de 0,02 Pa, puis de 0,2 Pa.`, c:`0,02 Pa : L = 20 × log(0,02/2 × 10⁻⁵) = 20 × log(1 000) = **60 dB**.
0,2 Pa : L = 20 × log(10 000) = **80 dB** : une pression 10 fois plus forte donne 20 dB de plus.`},
  {t:"Deux machines identiques", d:1, e:`Une bétonnière produit 80 dB(A) au poste de l'ouvrier. On en met une deuxième identique à côté.
Quel est le niveau total ? Et avec quatre bétonnières ?`, c:`Deux : 80 + 3 = **83 dB(A)**.
Quatre : 10 × log(4) = 6 dB → **86 dB(A)**.`},
  {t:"Addition de trois sources", d:2, e:`Sur un chantier, au même point, on mesure séparément : scie à béton 85 dB(A), compresseur 82 dB(A), bétonnière 79 dB(A).
Calculer le niveau total.`, c:`L = 10 × log(10^8,5 + 10^8,2 + 10^7,9) = 10 × log(3,16 × 10⁸ + 1,58 × 10⁸ + 0,79 × 10⁸) = 10 × log(5,54 × 10⁸) = **87,4 dB(A)**.
La scie domine ; supprimer la bétonnière ne ferait gagner que 0,8 dB.`},
  {t:"Retrouver le bruit d'une machine", d:2, e:`Avec une pompe en marche, on mesure 78 dB(A) ; pompe arrêtée, le bruit de fond est de 72 dB(A).
Quel est le niveau dû à la pompe seule ?`, c:`On soustrait les énergies : L = 10 × log(10^7,8 − 10^7,2) = 10 × log(6,31 × 10⁷ − 1,58 × 10⁷) = 10 × log(4,73 × 10⁷) = **76,7 dB(A)**.`},
  {t:"Perception d'une amélioration", d:1, e:`Un écran réduit le bruit d'un groupe électrogène de 75 à 65 dB(A) chez un voisin.
Comment l'énergie sonore et la sensation ont-elles évolué ?`, c:`− 10 dB : l'énergie est divisée par **10** ; la sensation est divisée par **2** environ (bruit perçu deux fois moins fort).`}
 ],
 quiz:[
  {q:"Deux sources de 70 dB fonctionnant ensemble donnent :", o:["73 dB","140 dB","70 dB","76 dB"], r:0, e:"Doublement de l'énergie : + 3 dB."},
  {q:"Le dB(A) tient compte :", o:["De la sensibilité de l'oreille selon la fréquence","De la distance","De l'humidité","Du vent"], r:0, e:"Pondération A."},
  {q:"Une augmentation de 10 dB est perçue comme :", o:["Deux fois plus forte","Dix fois plus forte","À peine perceptible","Imperceptible"], r:0, e:"Énergie × 10, sensation × 2."},
  {q:"70 dB + 58 dB ≈", o:["70,3 dB","128 dB","64 dB","73 dB"], r:0, e:"Écart > 10 dB : la plus faible compte peu."},
  {q:"Le seuil de douleur est vers :", o:["120 dB","60 dB","30 dB","200 dB"], r:0, e:"20 Pa."}
 ]},

{id:"acou-10", niv:1, titre:"La propagation du son : distance, obstacles et réflexions", duree:40, contenu:`## La décroissance avec la distance
En s'éloignant d'une source, l'énergie se répartit sur une surface de plus en plus grande :
- **Source ponctuelle** (une machine, un groupe électrogène) : le niveau diminue de **6 dB chaque fois que la distance double** :
$$ L₂ = L₁ − 20 × log(r₂ / r₁)
- **Source linéique** (une route chargée, une voie ferrée) : le niveau diminue de **3 dB** par doublement de distance :
$$ L₂ = L₁ − 10 × log(r₂ / r₁)

> [!exemple] Groupe électrogène et route
> Groupe : 80 dB(A) à 10 m → 74 à 20 m, 68 à 40 m, **60 dB(A)** à 100 m.
> Route : 70 dB(A) à 10 m → 67 à 20 m, **64 dB(A)** à 40 m : s'éloigner d'une route est beaucoup moins efficace.

## Le niveau de puissance d'une source
Les fabricants indiquent le **niveau de puissance acoustique** Lw, propre à la machine. Pour une source posée sur le sol, en champ libre :
$$ Lp = Lw − 20 × log(r) − 8     (dB, r en mètres)
Un groupe électrogène de Lw = 100 dB(A) donne 100 − 20 − 8 = **72 dB(A)** à 10 m.

## Les obstacles et les réflexions
- Un **mur**, un bâtiment, un merlon de terre placé entre la source et l'auditeur crée une **zone d'ombre** acoustique : 5 à 15 dB d'atténuation selon sa hauteur (voir niveau avancé) ;
- Les sons **graves** contournent plus facilement les obstacles que les sons aigus ;
- Les surfaces dures (façades, cours bétonnées) **réfléchissent** le son : dans une rue étroite bordée de façades, le bruit est renforcé de 2 à 3 dB ;
- La **végétation** apporte peu d'atténuation réelle (quelques dB pour des dizaines de mètres de végétation dense), mais elle masque la source et améliore la perception.

## À l'intérieur d'un local
Dans une pièce, le son direct s'ajoute au **son réfléchi** par les parois (réverbération). Dans un local aux parois dures (carrelage, béton, vitrages), le niveau reste élevé même loin de la source : d'où l'intérêt des matériaux absorbants (voir chapitre Réverbération).

> [!retenir]
> - Source ponctuelle : − 6 dB par doublement de distance ; source linéique : − 3 dB.
> - Lp = Lw − 20 log r − 8 (source au sol).
> - Écrans et bâtiments créent des zones d'ombre ; les surfaces dures réfléchissent.`,
 exercices:[
  {t:"Éloigner une machine", d:1, e:`Une scie circulaire produit 90 dB(A) à 2 m. Quel niveau à 8 m ? À 32 m ?`, c:`8 m = 2 × 2 × 2 m : deux doublements → 90 − 12 = **78 dB(A)**.
32 m : quatre doublements → 90 − 24 = **66 dB(A)**.`},
  {t:"Distance à une route", d:1, e:`Une route produit 72 dB(A) à 15 m. Quel niveau à 60 m ? Comparer avec une source ponctuelle de même niveau à 15 m.`, c:`Route (linéique) : 60/15 = 4 → − 10 log 4 = − 6 dB → **66 dB(A)**.
Source ponctuelle : − 20 log 4 = − 12 dB → **60 dB(A)**.`},
  {t:"Groupe électrogène chez le voisin", d:2, e:`Un groupe électrogène a un niveau de puissance Lw = 100 dB(A). À quelle distance le niveau descend-il à 55 dB(A) (limite souhaitée chez le voisin, la nuit) ? Et avec un capot insonorisé qui réduit Lw de 20 dB ?`, c:`55 = 100 − 20 log r − 8 → 20 log r = 37 → r = 10^1,85 = **71 m**.
Avec capot (Lw = 80) : 20 log r = 17 → r = **7 m**. Le capot est bien plus efficace que l'éloignement.`},
  {t:"Calcul avec Lw", d:2, e:`Un compresseur a Lw = 95 dB(A). Calculer le niveau à 5 m et à 20 m (source au sol).`, c:`5 m : 95 − 20 log 5 − 8 = 95 − 14 − 8 = **73 dB(A)**.
20 m : 95 − 26 − 8 = **61 dB(A)**.`},
  {t:"Rue étroite", d:2, e:`Expliquer pourquoi une même circulation est plus bruyante dans une rue étroite bordée d'immeubles (« rue en U ») que sur une route en rase campagne, et proposer deux dispositions pour les logements.`, c:`Les façades **réfléchissent** le son, qui revient vers les fenêtres (effet de « canyon ») : + 2 à 3 dB, et le bruit ne décroît pas avec la hauteur.
Dispositions : placer les **chambres sur cour** (façade calme), renforcer l'**isolement de façade** côté rue (fenêtres performantes, entrées d'air acoustiques), traiter les façades avec des matériaux absorbants ou des balcons dont la sous-face est absorbante.`}
 ],
 quiz:[
  {q:"Pour une source ponctuelle, doubler la distance réduit le niveau de :", o:["6 dB","3 dB","10 dB","50 %"], r:0, e:"Divergence sphérique."},
  {q:"Pour une route chargée, doubler la distance réduit le niveau de :", o:["3 dB","6 dB","12 dB","0 dB"], r:0, e:"Source linéique."},
  {q:"Le niveau de puissance Lw caractérise :", o:["La source elle-même","Le niveau à 1 m seulement","La salle","L'auditeur"], r:0, e:"Indépendant de la distance."},
  {q:"Les sons graves :", o:["Contournent plus facilement les obstacles","Sont arrêtés par toutes les haies","Ne se propagent pas","Sont toujours les plus faibles"], r:0, e:"Grande longueur d'onde."},
  {q:"Une rue étroite bordée de façades :", o:["Renforce le bruit par réflexions","Absorbe tout le bruit","Est toujours calme","N'a pas d'effet"], r:0, e:"Effet de canyon."}
 ]},

{id:"acou-11", niv:1, titre:"Mesurer le bruit : sonomètre, niveau équivalent et indicateurs", duree:40, contenu:`## Le sonomètre
Un sonomètre mesure le niveau de pression acoustique. Réglages usuels :
- pondération **A** (dB(A)) pour l'évaluation de la gêne et de l'exposition ; pondération C pour les bruits forts et graves ;
- constante de temps **rapide** (« fast ») pour suivre les variations, **lente** (« slow ») pour une lecture stable ;
- mesure du **niveau équivalent** sur une durée.
On mesure à 1,5 m du sol, à au moins 1 m des murs (ou 2 m en façade), en notant les conditions (heure, sources, météo).

## Le niveau équivalent Leq
Un bruit qui varie (circulation, chantier) se résume par son **niveau équivalent** : le niveau constant qui transporterait la **même énergie** pendant la même durée.
$$ Leq = 10 × log( (1/T) × Σ tᵢ × 10^(Lᵢ/10) )
> [!exemple] Journée d'un coffreur
> 4 h à 85 dB(A) (scie, marteau) et 4 h à 75 dB(A) :
> Leq = 10 × log((4 × 10^8,5 + 4 × 10^7,5)/8) = **82,4 dB(A)**.
> Les périodes bruyantes **dominent** : le Leq est très proche du niveau le plus fort, même s'il ne dure que la moitié du temps.

## Les principaux indicateurs
| Indicateur | Usage |
|---|---|
| LAeq,T | Niveau équivalent pondéré A sur une durée T |
| LEX,8h | Exposition quotidienne d'un travailleur ramenée à 8 h |
| Lmax, Lpeak | Niveau maximal, niveau de crête (bruits impulsionnels) |
| Lden | Indicateur jour-soir-nuit (cartes de bruit des villes) |
| L10, L90 | Niveaux dépassés 10 % et 90 % du temps (L90 ≈ bruit de fond) |

## Quelques valeurs guides
L'Organisation mondiale de la santé recommande notamment :
- dans les **chambres**, la nuit : moins de **30 dB(A)** en niveau équivalent ;
- dans les **salles de classe** : moins de **35 dB(A)** pendant les cours ;
- à l'extérieur des logements, le jour : moins de **55 dB(A)** pour éviter une gêne sérieuse.
Ces valeurs sont des objectifs de santé ; les réglementations locales peuvent fixer d'autres limites (bruit de voisinage, ICPE, chantiers).

## L'émergence
Un bruit de voisinage (bar, atelier, groupe électrogène) est souvent jugé par son **émergence** : l'écart entre le niveau avec le bruit et le niveau du bruit de fond habituel. Une émergence de plus de **5 dB(A) le jour** ou **3 dB(A) la nuit** est généralement considérée comme gênante (règle française souvent prise en référence).

> [!retenir]
> - Sonomètre : dB(A), rapide ou lent, mesure du Leq.
> - Leq = 10 log((1/T) Σ tᵢ 10^(Lᵢ/10)) : les périodes bruyantes dominent.
> - OMS : chambre < 30 dB(A), classe < 35 dB(A), extérieur de jour < 55 dB(A).
> - Émergence : bruit particulier par rapport au bruit de fond.`,
 exercices:[
  {t:"Niveau équivalent sur 8 h", d:1, e:`Un ferrailleur est exposé 2 h à 90 dB(A) (meuleuse) et 6 h à 78 dB(A).
Calculer son niveau équivalent sur 8 h.`, c:`Leq = 10 × log((2 × 10⁹ + 6 × 10^7,8)/8) = 10 × log((2 × 10⁹ + 3,79 × 10⁸)/8) = 10 × log(2,97 × 10⁸) = **84,7 dB(A)**.`},
  {t:"Une heure très bruyante", d:2, e:`Un ouvrier passe 1 h au marteau-piqueur (95 dB(A)) et 7 h à 70 dB(A). Calculer Leq sur 8 h. Que se passe-t-il si l'on supprime l'heure de marteau-piqueur ?`, c:`Leq = 10 × log((10^9,5 + 7 × 10⁷)/8) = 10 × log((3,16 × 10⁹ + 7 × 10⁷)/8) = **86,1 dB(A)**.
Sans le marteau-piqueur : **70 dB(A)**. Une seule heure très bruyante fait l'essentiel de l'exposition.`},
  {t:"Émergence d'un groupe électrogène", d:2, e:`La nuit, le bruit de fond chez un riverain est de 40 dB(A). Avec le groupe électrogène d'un commerce voisin en marche, on mesure 48 dB(A).
Calculer l'émergence et conclure.`, c:`Émergence : 48 − 40 = **8 dB(A)** > 3 dB(A) admis la nuit → **gêne caractérisée** : il faut insonoriser le groupe (capot, écran) ou l'éloigner.`},
  {t:"Lire une mesure de classe", d:1, e:`Dans une classe pendant un cours, on relève LAeq = 48 dB(A) avec les fenêtres ouvertes sur une rue. Comparer à la valeur guide et proposer une solution.`, c:`48 dB(A) > 35 dB(A) recommandés : la parole de l'enseignant est masquée, les élèves se fatiguent.
Solutions : orienter les classes vers une cour calme, éloigner la rue (bande tampon), fenêtres plus isolantes avec ventilation silencieuse (entrées d'air acoustiques), traitement absorbant du plafond pour réduire la réverbération.`},
  {t:"Niveau de fond", d:2, e:`Sur un relevé de 24 h près d'une route, L10 = 74 dB(A) et L90 = 52 dB(A). Que signifient ces deux valeurs ?`, c:`L10 = 74 dB(A) : niveau **dépassé 10 %** du temps : il représente les **pics** (passages de camions, klaxons).
L90 = 52 dB(A) : niveau dépassé 90 % du temps : c'est le **bruit de fond**. L'écart de 22 dB indique un bruit très **fluctuant**, souvent plus gênant qu'un bruit constant de même Leq.`}
 ],
 quiz:[
  {q:"Le niveau équivalent Leq représente :", o:["Un niveau constant de même énergie","Le niveau maximal","Le niveau minimal","La moyenne arithmétique des dB"], r:0, e:"Moyenne énergétique."},
  {q:"OMS : niveau recommandé dans une chambre la nuit :", o:["Moins de 30 dB(A)","Moins de 60 dB(A)","Moins de 80 dB(A)","Pas de limite"], r:0, e:"Sommeil."},
  {q:"L'émergence est :", o:["L'écart entre le bruit avec la source et le bruit de fond","Le niveau maximal","La fréquence","La distance"], r:0, e:"Bruit de voisinage."},
  {q:"L90 représente plutôt :", o:["Le bruit de fond","Les pics","Le niveau moyen","Le niveau de crête"], r:0, e:"Dépassé 90 % du temps."},
  {q:"Dans un Leq, une courte période très bruyante :", o:["Peut dominer le résultat","Ne compte pas","Compte comme une autre","Le réduit"], r:0, e:"Échelle énergétique."}
 ]},

{id:"acou-5", niv:1, titre:"Les bruits du quotidien et la gêne : santé et bonnes pratiques", duree:40, contenu:`## Les effets du bruit sur la santé
- **Effets auditifs** : fatigue auditive après une exposition forte, puis **surdité** irréversible en cas d'expositions répétées au-delà de 80 à 85 dB(A) ; acouphènes ;
- **Effets non auditifs** : troubles du **sommeil**, stress, hypertension, baisse de la concentration et des apprentissages scolaires, gêne dans la communication.
La surdité professionnelle est fréquente dans le BTP : marteaux-piqueurs, meuleuses, scies, compacteurs, bétonnières.

## Les bruits dans et autour du bâtiment
| Type de bruit | Exemples | Transmission |
|---|---|---|
| Bruits **aériens extérieurs** | Circulation, maquis, lieux de culte, groupes électrogènes | Par l'air puis à travers façades et fenêtres |
| Bruits **aériens intérieurs** | Voix, télévision, musique des voisins | À travers murs et planchers |
| Bruits **de choc** (d'impact) | Pas, chutes d'objets, chaises déplacées | Directement dans la structure |
| Bruits **d'équipements** | Climatiseurs, pompes, surpresseurs, ascenseurs, chasses d'eau | Par l'air et par vibrations de la structure |

## Pourquoi certains bruits gênent plus que d'autres
La gêne dépend du niveau, mais aussi :
- du **moment** (la nuit, un bruit faible réveille) ;
- du **contenu** : un bruit porteur d'information (parole, musique) gêne plus qu'un bruit continu de même niveau ;
- des **fluctuations** (klaxons, aboiements) et des **sons purs** (sifflements de ventilateurs) ;
- du **contrôle** que l'on a sur la source et de l'attitude envers celle-ci.

## Les bonnes pratiques simples
1. **Éloigner** les pièces calmes (chambres, classes) des sources de bruit ; utiliser les pièces de service comme **tampons** ;
2. Placer les **groupes électrogènes** et unités extérieures de climatisation loin des fenêtres des chambres (chez soi et chez les voisins), sur plots antivibratiles ;
3. Choisir des **parois lourdes** entre logements, des **portes pleines** et bien jointives ;
4. Éviter les **sols durs** posés directement sur les dalles des étages (bruits de pas) sans sous-couche résiliente ;
5. Traiter les **salles** (classes, réfectoires) avec des matériaux absorbants pour limiter la réverbération ;
6. Sur les chantiers : **matériel silencieux**, horaires adaptés, **protections auditives**.

> [!retenir]
> - Le bruit provoque surdité (au-delà de 80-85 dB(A)) et effets non auditifs (sommeil, stress).
> - Quatre familles : aériens extérieurs, aériens intérieurs, chocs, équipements.
> - La nuit et les bruits porteurs d'information gênent le plus.
> - Éloigner, mettre des tampons, des parois lourdes, des sous-couches, des absorbants.`,
 exercices:[
  {t:"Classer les bruits", d:1, e:`Classer chacun de ces bruits dans sa famille : a) talons sur le carrelage de l'appartement du dessus ; b) musique du voisin de palier ; c) klaxons de la rue ; d) surpresseur d'eau au sous-sol ; e) chasse d'eau.`, c:`a) **Bruit de choc** ; b) **bruit aérien intérieur** ; c) **bruit aérien extérieur** ; d) **bruit d'équipement** (vibrations transmises par la structure) ; e) **bruit d'équipement** (écoulement, robinetterie).`},
  {t:"Plan d'une maison", d:1, e:`Une maison est bordée au sud par une route très passante et au nord par un jardin. Où placer les chambres, le séjour, la cuisine, le garage ?`, c:`**Chambres au nord**, côté jardin calme ; **garage, cuisine, buanderie, escalier** au sud, côté route, comme **tampons** ; le séjour peut être côté jardin ou en position intermédiaire ; limiter et renforcer les fenêtres de la façade sud.`},
  {t:"Groupe électrogène d'un immeuble", d:2, e:`Où et comment installer le groupe électrogène de secours d'un immeuble de logements pour limiter la gêne ?`, c:`Loin des fenêtres des chambres (de l'immeuble et des voisins), dans un **local maçonné** ou sous **capot insonorisé**, sur **plots antivibratiles**, avec un **silencieux** d'échappement, des grilles d'aération équipées de **pièges à son**, l'ouverture tournée vers une zone sans habitation ; essais périodiques en journée.`},
  {t:"Bruit et apprentissages", d:2, e:`Pourquoi le bruit est-il particulièrement nuisible dans une école ? Citer deux causes de bruit dans une classe et deux remèdes.`, c:`Les enfants comprennent moins bien la parole dans le bruit que les adultes ; le bruit fatigue, réduit l'attention, la mémorisation et oblige l'enseignant à forcer la voix.
Causes : bruit extérieur (route, cour de récréation), **réverbération** (parois dures), bruits de chaises.
Remèdes : **plafond absorbant**, orientation des classes vers une zone calme, embouts sous les pieds de chaises, fenêtres plus isolantes du côté bruyant.`},
  {t:"Sources de surdité au chantier", d:2, e:`Citer quatre outils de chantier qui dépassent couramment 85 dB(A) au poste de travail et trois mesures de prévention.`, c:`Outils : **marteau-piqueur**, **meuleuse** (disqueuse), **scie circulaire/scie à béton**, **compacteur/plaque vibrante**, cloueur, groupe électrogène ouvert.
Prévention : choisir du **matériel moins bruyant** et entretenu, **éloigner** ou **capoter** les machines fixes, **limiter la durée** d'exposition (rotation des postes), **protections auditives** adaptées (bouchons, casques) portées pendant toute l'exposition.`}
 ],
 quiz:[
  {q:"La surdité professionnelle apparaît par exposition répétée au-delà d'environ :", o:["80 à 85 dB(A)","40 dB(A)","20 dB(A)","150 dB(A) seulement"], r:0, e:"Seuils d'action."},
  {q:"Des pas sur le plancher du dessus sont un bruit :", o:["De choc","Aérien extérieur","D'équipement","Réverbéré"], r:0, e:"Impact transmis par la structure."},
  {q:"Un bruit gêne davantage :", o:["La nuit","Le jour, toujours","S'il est continu et sans information","S'il est grave uniquement"], r:0, e:"Le sommeil est sensible."},
  {q:"Les pièces de service placées côté bruit servent de :", o:["Tampons","Absorbants","Écrans parfaits","Rien"], r:0, e:"Elles éloignent les pièces calmes."},
  {q:"Un plafond absorbant dans une classe :", o:["Réduit la réverbération","Isole du bruit de la rue","Supprime les bruits de choc","Augmente le bruit"], r:0, e:"Correction acoustique."}
 ]},

{id:"acou-6", niv:1, titre:"Absorber ou isoler ? Choisir ses matériaux", duree:40, contenu:`## Deux problèmes différents
- **Isoler** : empêcher le son de passer **d'un local à un autre** (ou de l'extérieur vers l'intérieur). Il faut des parois **lourdes**, **étanches** et, pour plus de performance, **doubles**.
- **Corriger** (absorber) : réduire les **réflexions** du son **à l'intérieur d'un même local** (réverbération, écho). Il faut des matériaux **poreux** ou des panneaux perforés en surface.
Une confusion fréquente : coller de la mousse ou des boîtes à œufs sur un mur **n'isole pas** du voisin ; cela rend seulement la pièce moins réverbérante.

## Les matériaux isolants (aux bruits aériens)
L'isolement dépend surtout de la **masse surfacique** m (kg/m²) de la paroi (loi de masse : + 6 dB quand la masse double, voir niveau intermédiaire).
| Paroi | Masse (kg/m²) | Indice d'affaiblissement Rw (ordre de grandeur) |
|---|---|---|
| Plaque de plâtre seule (BA13) | 10 | 26 à 28 dB |
| Cloison en briques creuses de 5 cm enduite | 80 à 100 | 35 à 38 dB |
| Parpaing creux de 15 cm enduit | 200 | 44 à 46 dB |
| Parpaing creux de 20 cm enduit | 250 | 47 à 50 dB |
| Voile béton de 16 cm | 370 | 54 à 56 dB |
| Cloison double ossature 2 × BA13 + laine | 25 | 45 à 55 dB |
Une cloison **double** légère (plaques sur ossature + laine) peut égaler un mur lourd grâce à l'effet **masse-ressort-masse**.

## Les matériaux absorbants
On les caractérise par leur **coefficient d'absorption α** (0 = tout est réfléchi ; 1 = tout est absorbé) :
| Matériau | α (vers 500 à 1 000 Hz) |
|---|---|
| Béton, carrelage, verre, enduit lisse | 0,02 à 0,05 |
| Bois massif | 0,05 à 0,10 |
| Rideaux épais | 0,3 à 0,5 |
| Moquette | 0,2 à 0,4 |
| Dalles de faux plafond acoustiques | 0,6 à 0,9 |
| Laine minérale de 5 cm (derrière un parement perforé) | 0,8 à 0,95 |
| Une personne assise | ≈ 0,4 à 0,5 m² d'absorption équivalente |
Les matériaux absorbants sont **poreux et ouverts** : le son pénètre dans les pores et son énergie se transforme en chaleur par frottement.

## Les erreurs classiques
- Croire qu'un isolant **thermique** léger (polystyrène) isole du bruit : il est trop léger et peut même dégrader l'isolement s'il est collé ;
- Laisser des **trous** (prises électriques dos à dos, passages de gaines, joints de portes) : un trou annule l'isolement d'un mur lourd ;
- **Peindre** des dalles acoustiques avec une peinture épaisse qui bouche les pores.

> [!retenir]
> - Isoler (entre locaux) : masse, étanchéité, parois doubles.
> - Absorber (dans le local) : matériaux poreux, α proche de 1.
> - Coller de la mousse n'isole pas du voisin.
> - Un trou ou une fente ruine l'isolement.`,
 exercices:[
  {t:"Isoler ou corriger ?", d:1, e:`Pour chaque problème, dire s'il faut isoler ou corriger : a) on entend la télévision du voisin ; b) la cantine scolaire résonne et l'on ne s'entend plus ; c) le bruit de la rue gêne le sommeil ; d) dans une salle de réunion, la voix est confuse.`, c:`a) **Isoler** (paroi séparative) ; b) **Corriger** (plafond absorbant) ; c) **Isoler** (façade, fenêtres) ; d) **Corriger** (réverbération trop longue).`},
  {t:"Choisir une cloison", d:1, e:`Entre deux chambres d'un même logement, on hésite entre une cloison de briques creuses de 5 cm (Rw ≈ 36 dB) et une cloison double 2 × BA13 avec laine (Rw ≈ 48 dB). Laquelle isole le mieux ? Laquelle est la plus lourde ?`, c:`La **cloison double** isole mieux (48 dB contre 36 dB) bien qu'elle soit **plus légère** (25 kg/m² contre 90 kg/m²) : effet masse-ressort-masse avec la laine.`},
  {t:"Absorption d'une salle", d:2, e:`Une salle a un plafond de 50 m² en béton (α = 0,02). On le remplace par un faux plafond acoustique (α = 0,7).
Calculer l'absorption équivalente du plafond (A = α × S) avant et après.`, c:`Avant : 0,02 × 50 = **1 m²** ; après : 0,7 × 50 = **35 m²** : le plafond absorbe 35 fois plus (le niveau sonore réverbéré dans la salle baisse d'environ 5 à 10 dB, selon les autres surfaces).`},
  {t:"Le polystyrène isole-t-il du bruit ?", d:2, e:`Un particulier colle des plaques de polystyrène de 3 cm sur le mur mitoyen pour ne plus entendre ses voisins. Pourquoi est-ce inefficace ? Que conseiller ?`, c:`Le polystyrène est **très léger** et rigide : il n'apporte ni masse ni effet ressort efficace ; collé, il peut même créer une résonance qui **dégrade** l'isolement.
Conseil : vérifier et boucher les **fuites** (prises, gaines, fissures), puis réaliser un **doublage** sur ossature indépendante avec laine minérale et plaques de plâtre (masse-ressort-masse).`},
  {t:"Trou dans un mur", d:2, e:`Un mur mitoyen très isolant comporte deux prises électriques posées dos à dos qui forment un passage d'air. Expliquer le problème et la solution.`, c:`Le son passe par l'**air** à travers le trou, sans être freiné par la masse du mur : l'isolement réel peut chuter de 10 à 20 dB.
Solution : **décaler** les prises (jamais dos à dos), utiliser des boîtiers étanches, reboucher au mortier ou au plâtre autour des gaines.`}
 ],
 quiz:[
  {q:"Pour isoler deux logements, il faut surtout :", o:["Des parois lourdes et étanches","Des matériaux poreux","De la mousse collée","Des rideaux"], r:0, e:"Loi de masse."},
  {q:"Le coefficient d'absorption d'un béton lisse est d'environ :", o:["0,02","0,9","1","0,5"], r:0, e:"Il réfléchit presque tout."},
  {q:"Une cloison double légère avec laine peut :", o:["Isoler autant qu'un mur lourd","Ne rien isoler","Seulement absorber","Seulement isoler de la chaleur"], r:0, e:"Effet masse-ressort-masse."},
  {q:"Un plafond acoustique sert à :", o:["Corriger la réverbération du local","Isoler du voisin du dessus","Isoler de la chaleur","Supporter des charges"], r:0, e:"Absorption."},
  {q:"Des prises électriques dos à dos dans un mur mitoyen :", o:["Dégradent fortement l'isolement","Améliorent l'isolement","N'ont aucun effet","Absorbent le son"], r:0, e:"Fuite acoustique."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"acou-2", niv:2, titre:"Isolation aux bruits aériens : loi de masse et parois doubles", duree:55, contenu:`## L'indice d'affaiblissement R
Une paroi est caractérisée par son **indice d'affaiblissement acoustique** R (dB), mesuré en laboratoire : plus R est grand, plus la paroi isole. On le résume souvent par un indice unique **Rw** (pondéré). Pour les bruits de circulation, riches en graves, on utilise **Rw + Ctr** (Ctr est négatif, de − 3 à − 8 dB).

Sur place, on mesure l'**isolement brut** D = L(émission) − L(réception). Il dépend de la paroi, mais aussi des transmissions par les parois latérales et de l'absorption du local de réception (voir niveau avancé).

## La loi de masse (paroi simple)
Pour une paroi simple et homogène :
$$ R ≈ 20 × log(m × f) − 47     (dB ; m en kg/m² ; f en Hz)
- **Doubler la masse** : **+ 6 dB** ;
- **Doubler la fréquence** : **+ 6 dB** : une paroi isole mieux les aigus que les graves.

!fig:loi-masse|Loi de masse : l'isolement croît avec la masse

> [!exemple] Parpaing creux enduit (m ≈ 200 kg/m²)
> | Fréquence | 125 Hz | 250 Hz | 500 Hz | 1 000 Hz | 2 000 Hz |
> |---|---|---|---|---|---|
> | R théorique | 41 dB | 47 dB | 53 dB | 59 dB | 65 dB |
> En pratique, une loi expérimentale donne un ordre de grandeur de l'indice global pour les parois lourdes (m ≥ 150 kg/m²) : **Rw ≈ 37,5 log m − 42**, soit ≈ 44 dB pour 200 kg/m², 54 dB pour un voile béton de 16 cm (370 kg/m²).

**Limite : la coïncidence.** À une certaine fréquence (dite critique), la paroi vibre « en accord » avec le son et l'isolement chute. Pour les parois lourdes, elle est grave (moins de 200 Hz) ; pour une plaque de plâtre ou un vitrage, elle tombe dans les fréquences de la voix : d'où l'intérêt des vitrages **asymétriques** (deux verres d'épaisseurs différentes).

## Les parois doubles : masse-ressort-masse
Deux parois séparées par une lame d'air (de préférence remplie de laine minérale) isolent bien mieux que leur masse totale ne le laisserait prévoir. Le système résonne à une fréquence :
$$ f₀ ≈ 60 × √( (1/m₁ + 1/m₂) / d )     (d : épaisseur de la lame en m)
- En dessous de f₀ : la paroi double se comporte comme une paroi simple ;
- Au **voisinage** de f₀ : l'isolement **chute** (résonance) ;
- Au-dessus : il croît très vite (jusqu'à 18 dB par doublement de fréquence).
On vise donc **f₀ < 80 à 100 Hz** : lame d'air épaisse, parements assez lourds.
> [!exemple] Doublage d'un mur
> Mur de 200 kg/m² + plaque de plâtre BA13 (10 kg/m²) sur ossature indépendante, lame de 5 cm de laine : f₀ = 60 × √((1/10 + 1/200)/0,05) = **87 Hz** ; avec 10 cm : 61 Hz.

## Les règles de mise en œuvre
- **Étanchéité** : joints, calfeutrements, pas de trous traversants ;
- Parois doubles : **pas de liaisons rigides** entre les deux parements (ossatures séparées ou désolidarisées), **laine** dans la lame ;
- **Masse** répartie : un enduit sur chaque face d'un mur en blocs creux améliore l'étanchéité et l'isolement (les blocs creux nus laissent passer l'air).

> [!retenir]
> - R ≈ 20 log(m f) − 47 : + 6 dB par doublement de la masse ou de la fréquence.
> - Rw ≈ 37,5 log m − 42 pour les parois lourdes (ordre de grandeur).
> - Paroi double : f₀ = 60 √((1/m₁ + 1/m₂)/d) ; viser f₀ < 80 à 100 Hz ; laine dans la lame, pas de liaisons rigides.
> - Étanchéité à l'air indispensable.`,
 exercices:[
  {t:"Loi de masse à 500 Hz", d:1, e:`Calculer l'indice d'affaiblissement à 500 Hz d'une cloison de 50 kg/m², puis de 100 kg/m².`, c:`50 kg/m² : R = 20 × log(50 × 500) − 47 = 20 × 4,40 − 47 = **41 dB**.
100 kg/m² : 20 × log(50 000) − 47 = **47 dB** (+ 6 dB pour une masse doublée).`},
  {t:"Masse nécessaire", d:2, e:`Avec la loi expérimentale Rw ≈ 37,5 log m − 42, quelle masse surfacique faut-il pour obtenir Rw = 50 dB ? Et 55 dB ? Proposer une paroi pour chaque cas.`, c:`50 dB : log m = 92/37,5 = 2,453 → m ≈ **284 kg/m²** : parpaing **plein** de 15 cm enduit, ou béton de 12 cm.
55 dB : log m = 97/37,5 = 2,587 → m ≈ **386 kg/m²** : voile **béton de 16 à 18 cm**.`},
  {t:"Isolement selon la fréquence", d:1, e:`Une paroi a R = 45 dB à 500 Hz. Selon la loi de masse, quel est son indice à 125 Hz et à 2 000 Hz ? Que conclure pour les bruits de basses (musique, groupe électrogène) ?`, c:`125 Hz : deux octaves plus bas → 45 − 12 = **33 dB** ; 2 000 Hz : 45 + 12 = **57 dB**.
Les **graves** passent beaucoup mieux : les basses de la musique et le grondement des moteurs sont les plus difficiles à isoler.`},
  {t:"Fréquence de résonance d'une cloison double", d:2, e:`Une cloison est faite de deux plaques de BA13 (10 kg/m² chacune) séparées de 5 cm. Calculer f₀. Que proposer pour l'abaisser ?`, c:`f₀ = 60 × √((1/10 + 1/10)/0,05) = 60 × √4 = **120 Hz** : trop élevé (chute d'isolement dans les graves de la voix).
Pour l'abaisser : **doubler les plaques** de chaque côté (2 × BA13 : 20 kg/m²) et/ou **augmenter la lame** (ex. 2 × 2 BA13 et 7 cm : f₀ ≈ 72 Hz), en remplissant de laine minérale.`},
  {t:"Améliorer un mur mitoyen", d:3, e:`Un mur mitoyen en parpaing creux de 15 cm non enduit côté voisin laisse passer les conversations. Proposer une démarche d'amélioration progressive, du moins cher au plus efficace.`, c:`1) **Étanchéité** : enduire la face nue (les blocs creux non enduits laissent passer l'air), reboucher fissures, trous de gaines, prises dos à dos : souvent + 5 à 10 dB.
2) **Doublage** indépendant côté plaignant : ossature métallique non fixée au mur (ou fixations antivibratiles), 5 à 10 cm de laine, une ou deux plaques de plâtre : + 10 à 15 dB.
3) Traiter les **transmissions latérales** (planchers et murs continus) si nécessaire (voir niveau avancé).`}
 ],
 quiz:[
  {q:"Doubler la masse d'une paroi simple augmente R de :", o:["6 dB","3 dB","10 dB","100 %"], r:0, e:"Loi de masse."},
  {q:"Une paroi isole mieux :", o:["Les aigus que les graves","Les graves que les aigus","Toutes les fréquences pareil","Seulement les infrasons"], r:0, e:"R croît avec f."},
  {q:"Dans une paroi double, la lame d'air doit être remplie de :", o:["Laine minérale","Béton","Rien, toujours vide","Eau"], r:0, e:"Amortit la résonance."},
  {q:"Pour une paroi double, on cherche une fréquence f₀ :", o:["Basse (< 80 à 100 Hz)","Élevée (> 1 000 Hz)","Égale à 500 Hz","Nulle"], r:0, e:"Hors du domaine utile."},
  {q:"Rw + Ctr est utilisé pour :", o:["Les bruits de circulation riches en graves","Les bruits de pas","La réverbération","La musique aiguë"], r:0, e:"Ctr pénalise les graves."}
 ]},

{id:"acou-12", niv:2, titre:"Parois composites : fenêtres, portes, entrées d'air et fuites", duree:45, contenu:`## Le maillon faible
Une façade ou une cloison comporte souvent plusieurs éléments : mur, fenêtre, porte, entrée d'air, coffre de volet. Le son passe surtout par l'élément **le plus faible**. L'indice global se calcule en additionnant les **énergies transmises** :
$$ R(composite) = − 10 × log( Σ (Sᵢ/S) × 10^(− Rᵢ/10) )
> [!exemple] Façade de 12 m² : 9 m² de mur (R = 48 dB) et 3 m² de fenêtre
> | Fenêtre | R fenêtre | R de la façade |
> |---|---|---|
> | Jalousies à lames de verre | 12 dB | **18 dB** |
> | Simple vitrage courant | 30 dB | **36 dB** |
> | Fenêtre acoustique (vitrage asymétrique, joints) | 36 dB | **41 dB** |
> | Même fenêtre + entrée d'air ordinaire de 0,02 m² (R ≈ 0) | — | **28 dB** |
> Le mur à 48 dB ne sert à rien si la fenêtre est faible ; et une simple ouverture de 2 dm² fait perdre 13 dB à la meilleure fenêtre.

## Les fenêtres
| Type | Rw (ordre de grandeur) |
|---|---|
| Jalousies, persiennes ouvertes | 5 à 15 dB |
| Simple vitrage 4 mm, menuiserie courante | 25 à 30 dB |
| Double vitrage symétrique 4/16/4 | 30 dB |
| Double vitrage asymétrique 10/12/4 | 35 à 37 dB |
| Vitrage feuilleté acoustique, menuiserie étanche | 38 à 42 dB |
La **qualité des joints** et de la pose (calfeutrement entre dormant et maçonnerie) compte autant que le vitrage.

## Les portes
Une porte isoplane creuse ne dépasse pas 20 à 25 dB, et beaucoup moins si elle a un jour sous le vantail. Une porte **pleine** avec **joints périphériques** et **seuil** (ou plinthe automatique) atteint 30 à 40 dB.

## Ventiler sans laisser entrer le bruit
Les logements et les locaux doivent être ventilés, mais toute ouverture laisse passer le bruit. Solutions :
- **entrées d'air acoustiques** (avec chicanes et absorbant) ;
- grilles en **chicane** ou **pièges à son** pour les grandes ouvertures (locaux techniques) ;
- placer les ouvertures de ventilation sur la **façade calme**.
Sous les tropiques, la ventilation naturelle impose souvent de larges ouvertures : on organise donc le **plan** pour que les pièces sensibles s'ouvrent sur des façades calmes.

> [!retenir]
> - R composite = − 10 log(Σ (Sᵢ/S) 10^(−Rᵢ/10)) : l'élément faible domine.
> - Fenêtre courante ≈ 30 dB ; fenêtre acoustique 35 à 42 dB ; jalousies ≈ 10 dB.
> - Porte pleine avec joints et seuil ; aucune fente.
> - Ventiler avec des entrées d'air acoustiques ou du côté calme.`,
 exercices:[
  {t:"Mur avec fenêtre", d:1, e:`Un mur de 10 m² comprend 8 m² de maçonnerie (R = 50 dB) et 2 m² de fenêtre (R = 25 dB).
Calculer l'indice composite.`, c:`R = − 10 log(0,8 × 10⁻⁵ + 0,2 × 10^−2,5) = − 10 log(8 × 10⁻⁶ + 6,32 × 10⁻⁴) = − 10 log(6,40 × 10⁻⁴) = **31,9 dB**.
Le mur à 50 dB est « effacé » par la fenêtre.`},
  {t:"Améliorer la fenêtre", d:2, e:`Reprendre l'exercice précédent avec une fenêtre de R = 35 dB. Puis ajouter une fente de 0,01 m² (R = 0) dans la fenêtre. Conclure.`, c:`Fenêtre 35 dB : R = − 10 log(0,8 × 10⁻⁵ + 0,2 × 10^−3,5) = **41,5 dB** (+ 9,6 dB).
Avec la fente (1,99 m² à 35 dB et 0,01 m² à 0 dB) : R = **29,7 dB** : une fente de 1 dm² annule tout le gain ; l'étanchéité est essentielle.`},
  {t:"Porte de bureau", d:2, e:`Une cloison de 10 m² (R = 45 dB) comprend une porte de 1,8 m². Calculer l'indice global avec une porte isoplane creuse (R = 20 dB), une porte pleine (R = 30 dB) et une porte acoustique (R = 40 dB).`, c:`R = − 10 log((10 × 10^−4,5 + 1,8 × 10^(−R/10))/11,8) :
porte 20 dB : **28,1 dB** ; porte 30 dB : **37,5 dB** ; porte 40 dB : **43,8 dB**.
Pour un bureau de direction ou une salle de consultation, une porte pleine avec joints est le minimum.`},
  {t:"Fenêtre nécessaire", d:2, e:`Une façade de 12 m² comprend 9 m² de mur (R = 48 dB) et 3 m² de fenêtre. On veut un indice de façade d'au moins 35 dB. Quel indice minimal doit avoir la fenêtre ?`, c:`On teste : avec R(fenêtre) = 29,5 dB → R(façade) ≈ **35,0 dB** (calcul : − 10 log((9 × 10^−4,8 + 3 × 10^−2,95)/12)).
Il faut une fenêtre d'au moins **30 dB** posée avec soin (calfeutrement), ce qui correspond à une bonne fenêtre courante.`},
  {t:"Chambre sur une rue animée", d:3, e:`Une chambre a une façade sur une rue (bruit extérieur 72 dB(A)). On vise 30 dB(A) à l'intérieur la nuit. La façade comporte un mur (R = 50 dB) et une fenêtre ; la ventilation se fait par une entrée d'air.
a) Quel isolement faut-il (on assimile isolement et indice composite) ?
b) Proposer des composants.`, c:`a) Isolement : 72 − 30 = **42 dB**.
b) Fenêtre **acoustique** à vitrage feuilleté asymétrique (R ≈ 40 dB), pose soignée, **entrée d'air acoustique** (ou ventilation par la façade calme), coffre de volet isolé. Si cela reste insuffisant, placer la chambre **sur la cour** et réserver la façade sur rue au séjour ou à la cuisine.`}
 ],
 quiz:[
  {q:"Dans une paroi composite, l'isolement global est surtout limité par :", o:["L'élément le plus faible","L'élément le plus lourd","La couleur","L'épaisseur moyenne"], r:0, e:"Addition des énergies transmises."},
  {q:"Une fente de quelques dm² dans une fenêtre :", o:["Peut faire perdre plus de 10 dB","N'a aucun effet","Améliore l'isolement","Absorbe le son"], r:0, e:"Passage direct de l'air."},
  {q:"Indice d'une fenêtre à jalousies :", o:["5 à 15 dB","40 dB","60 dB","0 dB toujours"], r:0, e:"Lames non étanches."},
  {q:"Un vitrage asymétrique (10/12/4) sert à :", o:["Éviter que les deux verres résonnent à la même fréquence","Réduire le prix","Augmenter la lumière","Chauffer"], r:0, e:"Coïncidences décalées."},
  {q:"Pour ventiler une chambre exposée au bruit, on prévoit :", o:["Une entrée d'air acoustique ou une ventilation côté calme","Une grande grille ouverte sur la rue","Rien","Une porte isoplane"], r:0, e:"Ventiler sans laisser entrer le bruit."}
 ]},

{id:"acou-3", niv:2, titre:"Bruits de choc et bruits d'équipements", duree:45, contenu:`## Les bruits de choc
Un pas, une chaise qu'on traîne, un objet qui tombe **mettent le plancher en vibration** ; cette vibration se propage dans toute la structure et rayonne dans les locaux voisins, surtout celui du dessous. On caractérise un plancher par le **niveau de bruit de choc normalisé** L'n,w (dB), mesuré sous une machine à chocs normalisée : plus il est **petit**, mieux c'est (contrairement à R).
| Plancher | L'n,w (ordre de grandeur) |
|---|---|
| Dalle béton de 14 cm nue | ≈ 80 dB |
| Dalle béton de 20 cm nue | ≈ 75 dB |
| Dalle + carrelage collé directement | ≈ inchangé |
| Dalle + revêtement sur sous-couche résiliente | − 15 à − 20 dB |
| Dalle + moquette épaisse | − 20 à − 30 dB |
| Dalle + chape flottante sur isolant acoustique | − 20 à − 25 dB |
Dans les logements, une valeur de l'ordre de **L'nT,w ≤ 58 dB** est souvent prise comme objectif (réglementation française de référence).

> [!exemple] Plancher entre deux appartements
> Dalle de 16 cm : L'n,w ≈ 78 dB. Carrelage collé directement : ≈ 78 dB → **non conforme**.
> Chape flottante de 5 cm sur sous-couche acoustique (ΔLw = 22 dB) : 78 − 22 = **56 dB ≤ 58 dB** ✓.
> Attention : la chape doit être **totalement désolidarisée** (bandes résilientes en périphérie, plinthes non scellées à la chape et au mur à la fois) ; un seul pont rigide ruine le résultat.

## Le traitement à la source
C'est **au-dessus** que l'on traite les bruits de choc : revêtement souple ou flottant. Un faux plafond sous la dalle apporte un gain plus limité (5 à 10 dB) s'il est suspendu avec des suspentes antivibratiles et rempli de laine.

## Les bruits d'équipements
Climatiseurs, pompes, surpresseurs, ascenseurs, ventilateurs, chasses d'eau, groupes électrogènes produisent du bruit **aérien** et des **vibrations** transmises par la structure et les canalisations.
Bonnes pratiques :
- **Choisir** des appareils silencieux (comparer les niveaux de puissance Lw) ;
- **Implanter** les équipements bruyants loin des chambres, dans des locaux techniques isolés ;
- **Désolidariser** : plots ou socles **antivibratiles**, **manchettes souples** sur les tuyauteries et gaines, colliers à bague élastomère ;
- Limiter la **vitesse de l'eau** dans les tuyaux (< 1,5 à 2 m/s) et la vitesse de l'air dans les gaines ; éviter les coups de bélier ;
- Unités extérieures de climatisation : fixations antivibratiles, éloignées des fenêtres des chambres (les siennes et celles des voisins).

> [!retenir]
> - Bruit de choc : L'n,w (plus petit = meilleur) ; dalle nue ≈ 75 à 80 dB ; objectif logement ≈ 58 dB.
> - Traiter au-dessus : revêtement souple, sous-couche, chape flottante désolidarisée.
> - Équipements : appareils silencieux, éloignement, antivibratiles, manchettes souples, vitesses limitées.`,
 exercices:[
  {t:"Choisir un revêtement de sol", d:1, e:`Une dalle de 18 cm a un L'n,w de 76 dB. On veut ≤ 58 dB. Quels revêtements conviennent : carrelage collé (ΔLw = 0) ; parquet sur sous-couche (ΔLw = 18 dB) ; moquette (ΔLw = 25 dB) ?`, c:`Carrelage collé : 76 dB → **non**. Parquet sur sous-couche : 76 − 18 = **58 dB** → juste conforme. Moquette : 76 − 25 = **51 dB** → **oui**.
Pour garder un carrelage, il faut une **chape flottante** ou un carrelage sur sous-couche résiliente adaptée.`},
  {t:"Pont phonique", d:2, e:`Une chape flottante a été coulée, mais le carreleur a scellé les plinthes à la fois sur la chape et sur le mur. Les voisins du dessous entendent toujours les pas. Expliquer et corriger.`, c:`Les plinthes forment un **pont rigide** entre la chape flottante et le mur : les vibrations passent directement dans la structure, la chape ne « flotte » plus.
Correction : déposer les plinthes, mettre en place une **bande résiliente** périphérique, reposer les plinthes fixées **au mur seulement**, avec un joint souple entre plinthe et carrelage.`},
  {t:"Surpresseur bruyant", d:2, e:`Le surpresseur d'eau d'un immeuble, posé directement sur la dalle du sous-sol et raccordé par des tubes rigides, s'entend dans les chambres du premier étage. Proposer trois actions.`, c:`1) Poser le surpresseur sur un **socle** (massif) **sur plots antivibratiles** ;
2) Raccorder les tuyauteries par des **manchettes souples** et utiliser des **colliers** à bague élastomère ;
3) Isoler le **local** (porte pleine avec joints, éventuellement doublage) et réduire la **vitesse** de l'eau / les à-coups (variateur de vitesse, ballon anti-bélier).`},
  {t:"Unité extérieure de climatisation", d:1, e:`Un locataire installe l'unité extérieure de son climatiseur sur la façade, juste sous la fenêtre de la chambre du voisin du dessus, fixée rigidement au mur. Quels sont les deux chemins du bruit et comment les réduire ?`, c:`Bruit **aérien** (ventilateur, compresseur) par la fenêtre voisine, et **vibrations** transmises au mur, qui rayonnent dans les chambres.
Réduction : **déplacer** l'unité (toiture, cour, façade sans fenêtres de chambres), la poser sur **supports antivibratiles**, choisir un modèle **inverter** silencieux, éventuellement un écran acoustique.`},
  {t:"Faux plafond contre les bruits de choc", d:2, e:`Pour un plancher existant (L'n,w = 80 dB) qu'on ne peut pas modifier par le dessus, un faux plafond suspendu avec suspentes antivibratiles et laine apporte 8 dB. L'objectif est 58 dB. Conclure.`, c:`80 − 8 = **72 dB** > 58 dB : insuffisant. Les bruits de choc se traitent d'abord **au-dessus** (revêtement souple ou flottant) ; il faudra négocier avec le logement du dessus (moquette, tapis épais, sous-couche) ou accepter un confort limité.`}
 ],
 quiz:[
  {q:"Pour le bruit de choc d'un plancher, une valeur L'n,w plus petite signifie :", o:["Un meilleur plancher","Un plancher plus bruyant","Rien","Un plancher plus lourd"], r:0, e:"Niveau reçu en dessous."},
  {q:"Les bruits de choc se traitent le plus efficacement :", o:["Au-dessus, par un revêtement souple ou flottant","Par un rideau","Par une peinture","Par un vitrage"], r:0, e:"À la source."},
  {q:"Une chape flottante doit être :", o:["Totalement désolidarisée des murs et de la dalle","Scellée aux murs","Collée sur la dalle","Armée de fers liés aux murs"], r:0, e:"Sinon ponts phoniques."},
  {q:"Les manchettes souples sur les tuyauteries servent à :", o:["Couper la transmission des vibrations","Augmenter le débit","Isoler de la chaleur","Décorer"], r:0, e:"Désolidarisation."},
  {q:"Carrelage collé directement sur la dalle :", o:["N'améliore pas le bruit de choc","Supprime le bruit de choc","Améliore de 20 dB","Isole des bruits aériens"], r:0, e:"Surface dure, aucun amortissement."}
 ]},

{id:"acou-4", niv:2, titre:"Correction acoustique : réverbération et formule de Sabine", duree:50, contenu:`## La réverbération
Dans un local, le son émis rebondit sur les parois : il persiste après l'arrêt de la source. Le **temps de réverbération** T (s) est le temps nécessaire pour que le niveau diminue de **60 dB** après l'arrêt.
- T trop **long** : les syllabes se mélangent, la parole devient **inintelligible**, le bruit monte (chacun parle plus fort : « effet cocktail ») ;
- T trop **court** : salle « sourde », peu agréable pour la musique.

## La formule de Sabine
$$ T = 0,16 × V / A      ;      A = Σ αᵢ × Sᵢ (+ absorption des personnes et du mobilier)
V : volume du local (m³) ; A : **aire d'absorption équivalente** (m²) ; αᵢ : coefficient d'absorption de chaque surface Sᵢ ; chaque personne assise ajoute environ 0,4 à 0,5 m².

## Les valeurs recherchées
| Local | T conseillé (salle occupée) |
|---|---|
| Salle de classe (≤ 250 m³) | 0,4 à 0,8 s |
| Bureau, salle de réunion | 0,5 à 0,8 s |
| Restaurant scolaire, cantine | ≤ 1,2 s |
| Salle polyvalente | 0,8 à 1,2 s |
| Lieu de culte (parole et chants) | 1 à 2 s selon le volume |

> [!exemple] Salle de classe de 9 × 7 × 3 m (V = 189 m³), 35 élèves
> Surfaces : sol carrelé 63 m² (α = 0,02) ; plafond 63 m² ; murs enduits 86 m² (α = 0,03) ; vitrages 10 m² (α = 0,05) ; élèves 35 × 0,4 m².
> **Plafond en béton** (α = 0,02) : A = 1,3 + 1,3 + 2,6 + 0,5 + 14,0 = 19,6 m² → T = 0,16 × 189/19,6 = **1,54 s** : beaucoup trop réverbérant.
> **Faux plafond acoustique** (α = 0,7) : A = 1,3 + 44,1 + 2,6 + 0,5 + 14,0 = 62,4 m² → T = **0,48 s** ✓ (0,62 s quand la classe est vide).

## L'aire d'absorption nécessaire
Pour viser un temps T, il faut : **A = 0,16 V/T**. On en déduit la surface de matériau absorbant à installer.

## La baisse du niveau sonore
Augmenter l'absorption diminue aussi le **niveau du son réverbéré** dans le local :
$$ ΔL = 10 × log(A₂ / A₁)
Dans la classe : 10 × log(62,4/19,6) = **5 dB** de moins : la classe devient nettement plus calme.

## Où placer les absorbants ?
- En priorité au **plafond** (grande surface, peu exposé aux chocs) ;
- Sur le **mur du fond** des classes et des salles (évite les échos vers l'avant) ;
- Éviter les surfaces parallèles dures face à face (échos flottants) ;
- Garder une zone **réfléchissante** au-dessus de l'orateur pour renvoyer sa voix vers l'auditoire.

> [!retenir]
> - T = 0,16 V/A ; A = Σ α S + absorption des occupants.
> - Classe : 0,4 à 0,8 s ; cantine ≤ 1,2 s.
> - A nécessaire = 0,16 V/T ; baisse du niveau ΔL = 10 log(A₂/A₁).
> - Absorbants au plafond et au mur du fond.`,
 exercices:[
  {t:"Temps de réverbération d'une salle de réunion", d:1, e:`Une salle de 6 × 5 × 3 m a un sol carrelé (α = 0,03), un plafond en béton (α = 0,02), des murs enduits de 66 m² (α = 0,03) et 12 personnes (0,4 m² chacune).
Calculer T. Est-ce satisfaisant ?`, c:`V = 90 m³ ; A = 30 × 0,03 + 30 × 0,02 + 66 × 0,03 + 12 × 0,4 = 0,9 + 0,6 + 1,98 + 4,8 = **8,28 m²**.
T = 0,16 × 90/8,28 = **1,74 s** : beaucoup trop (objectif 0,5 à 0,8 s).`},
  {t:"Corriger la salle de réunion", d:2, e:`On remplace le plafond de la salle précédente par 30 m² de dalles acoustiques (α = 0,8). Calculer le nouveau T et la baisse du niveau réverbéré.`, c:`A = 0,9 + 30 × 0,8 + 1,98 + 4,8 = **31,7 m²** → T = 0,16 × 90/31,7 = **0,45 s** ✓.
ΔL = 10 × log(31,7/8,28) = **5,8 dB** de moins.`},
  {t:"Surface d'absorbant d'un réfectoire", d:2, e:`Un réfectoire de 12 × 8 × 4 m a des parois toutes dures (A ≈ 9,6 m² sans occupants). On vise T = 1,0 s (salle vide). Quelle surface de panneaux absorbants (α = 0,75, posés à la place de surfaces d'α ≈ 0,03) faut-il ?`, c:`V = 384 m³ → A nécessaire = 0,16 × 384/1,0 = **61,4 m²**.
Absorption à ajouter : 61,4 − 9,6 = 51,8 m² ; chaque m² de panneau apporte 0,75 − 0,03 = 0,72 m² → S = 51,8/0,72 = **72 m²** (par exemple les trois quarts du plafond de 96 m²).`},
  {t:"Effet des occupants", d:1, e:`Dans la classe de l'exemple du cours (plafond acoustique), calculer T quand la classe est vide, puis avec les 35 élèves.`, c:`Vide : A = 62,4 − 14 = 48,4 m² → T = 0,16 × 189/48,4 = **0,62 s**.
Occupée : A = 62,4 m² → T = **0,48 s**. Les occupants absorbent beaucoup ; on vérifie les deux situations.`},
  {t:"Lieu de culte", d:3, e:`Une église de 30 × 15 × 10 m a des murs et un sol durs (α moyen = 0,03 sur 1 800 m² de parois) et accueille 400 fidèles (0,45 m² chacun). On vise 1,5 s salle pleine.
a) Calculer T salle pleine. b) Quelle absorption ajouter ? Proposer une solution.`, c:`a) V = 4 500 m³ ; A = 1 800 × 0,03 + 400 × 0,45 = 54 + 180 = **234 m²** → T = 0,16 × 4 500/234 = **3,1 s** : la parole est très difficile à comprendre.
b) A nécessaire : 0,16 × 4 500/1,5 = **480 m²** → ajouter ≈ **246 m²** d'absorption : par exemple 340 m² de plafond ou de parties hautes des murs traités en panneaux perforés bois avec laine (α ≈ 0,75), en gardant des surfaces réfléchissantes près de l'autel ; une sonorisation à colonnes directives complète utilement.`}
 ],
 quiz:[
  {q:"Le temps de réverbération est le temps pour que le niveau baisse de :", o:["60 dB","10 dB","3 dB","100 dB"], r:0, e:"Définition."},
  {q:"Formule de Sabine :", o:["T = 0,16 V/A","T = A/V","T = 0,16 A/V","T = V × A"], r:0, e:"V en m³, A en m²."},
  {q:"Temps de réverbération conseillé pour une classe :", o:["0,4 à 0,8 s","3 s","0,01 s","5 s"], r:0, e:"Intelligibilité de la parole."},
  {q:"Où placer en priorité les absorbants d'une classe ?", o:["Au plafond","Sur le sol","Sur les fenêtres","Nulle part"], r:0, e:"Grande surface protégée."},
  {q:"Multiplier l'aire d'absorption par 3 baisse le niveau réverbéré d'environ :", o:["5 dB","30 dB","1 dB","15 dB"], r:0, e:"10 log 3."}
 ]},

{id:"acou-15", niv:2, titre:"Le bruit des chantiers et la protection des travailleurs", duree:45, contenu:`## Le BTP, un secteur très bruyant
| Matériel | Niveau au poste (ordre de grandeur) |
|---|---|
| Bétonnière | 80 à 85 dB(A) |
| Compresseur, groupe électrogène ouvert | 85 à 95 dB(A) |
| Meuleuse (disqueuse) | 95 à 105 dB(A) |
| Scie à béton, scie circulaire | 95 à 110 dB(A) |
| Marteau-piqueur, brise-roche | 100 à 115 dB(A) |
| Plaque vibrante, pilonneuse | 95 à 105 dB(A) |

## L'exposition quotidienne
On évalue l'exposition d'un travailleur par son **niveau d'exposition quotidienne** LEX,8h : le niveau équivalent ramené à une journée de 8 heures. Les seuils généralement retenus (directive européenne, souvent prise comme référence) :
| Seuil | LEX,8h | Obligations |
|---|---|---|
| Valeur d'action inférieure | 80 dB(A) | Informer, mettre à disposition des protections |
| Valeur d'action supérieure | 85 dB(A) | Programme de réduction, port obligatoire des protections, signalisation, suivi médical |
| Valeur limite (avec protection) | 87 dB(A) | Ne jamais dépasser à l'oreille du travailleur |

## La règle des 3 dB
L'énergie double tous les 3 dB : **à chaque + 3 dB, la durée d'exposition admissible est divisée par deux**.
| Niveau | 85 | 88 | 91 | 94 | 97 | 100 dB(A) |
|---|---|---|---|---|---|---|
| Durée équivalente à 8 h à 85 dB(A) | 8 h | 4 h | 2 h | 1 h | 30 min | 15 min |

## Réduire le bruit : l'ordre des priorités
1. **À la source** : matériel moins bruyant et bien entretenu (silencieux, capots fermés), méthodes moins bruyantes (sciage plutôt que piquage, éclateurs hydrauliques, béton auto-plaçant au lieu de la vibration) ;
2. **Sur la propagation** : éloigner ou capoter les machines fixes (groupes, compresseurs), écrans, organisation du chantier ;
3. **Sur l'organisation** : limiter le nombre d'exposés et la durée, rotation des tâches ;
4. **Protections individuelles** : bouchons d'oreilles, casques antibruit, adaptés et **portés en permanence** pendant l'exposition.

> [!attention] Une protection retirée quelques minutes perd presque toute son efficacité
> Un ouvrier exposé 8 h à 100 dB(A) avec une protection de 25 dB reçoit 75 dB(A). S'il la retire **30 minutes** : LEX,8h ≈ 10 log((7,5 × 10^7,5 + 0,5 × 10^10)/8) ≈ **88 dB(A)** : plus que la valeur limite !

## Le voisinage du chantier
- Respecter les **horaires** (pas de travaux bruyants la nuit, tôt le matin, le dimanche) ;
- Informer les riverains, placer les installations bruyantes loin des logements, des écoles et des centres de santé ;
- Utiliser des engins conformes et entretenus (niveaux de puissance garantis) ;
- Écrans provisoires (palissades pleines) autour des postes fixes.

> [!retenir]
> - Seuils : 80 / 85 / 87 dB(A) en LEX,8h.
> - + 3 dB = durée admissible divisée par 2.
> - Priorité : source, propagation, organisation, protections individuelles portées en permanence.
> - Respecter horaires et riverains.`,
 exercices:[
  {t:"Durée admissible", d:1, e:`Un ouvrier utilise une meuleuse à 97 dB(A). Combien de temps peut-il l'utiliser pour ne pas dépasser l'équivalent de 85 dB(A) sur 8 h (sans protection) ? Et à 94 dB(A) ?`, c:`97 dB(A) : 12 dB de plus → 4 divisions par 2 → 8 h/16 = **30 minutes**.
94 dB(A) : 9 dB de plus → 8 h/8 = **1 heure**.`},
  {t:"Exposition d'un coffreur-boiseur", d:2, e:`Journée : 3 h de sciage à 88 dB(A), 2 h de clouage et de meulage à 93 dB(A), 3 h de travaux divers à 76 dB(A). Calculer LEX,8h et situer par rapport aux seuils.`, c:`LEX = 10 log((3 × 10^8,8 + 2 × 10^9,3 + 3 × 10^7,6)/8) = 10 log((1,89 × 10⁹ + 3,99 × 10⁹ + 1,19 × 10⁸)/8) = **88,8 dB(A)**.
Au-dessus de la valeur d'action supérieure (85) : port **obligatoire** des protections, programme de réduction ; sans protection, la valeur limite (87) est dépassée.`},
  {t:"Protection retirée", d:2, e:`Un ouvrier est exposé 8 h à 100 dB(A) et porte un casque qui réduit le bruit de 25 dB. Calculer LEX,8h : a) s'il le porte tout le temps ; b) s'il l'enlève 30 minutes.`, c:`a) 100 − 25 = 75 dB(A) pendant 8 h → **LEX,8h = 75 dB(A)**, bien en dessous de 80 dB(A).
b) 7,5 h à 75 dB(A) et 0,5 h à 100 dB(A) : LEX = 10 log((7,5 × 10^7,5 + 0,5 × 10¹⁰)/8) = **88,0 dB(A)** : la valeur limite est dépassée. Les protections doivent être portées **en permanence**.`},
  {t:"Choisir une méthode moins bruyante", d:2, e:`Pour démolir un voile en béton, on hésite entre un brise-roche (110 dB(A) au poste) et un sciage au câble diamanté (90 dB(A) au poste). La tâche dure 6 h.
Comparer les expositions et conclure.`, c:`Brise-roche : 110 dB(A) pendant 6 h, soit 25 dB au-dessus de 85 : un temps admissible de 8 h/2^(25/3) ≈ **1,5 min** ! Impossible sans protection très efficace et rotation.
Sciage : 90 dB(A) : temps admissible 8/2^(5/3) ≈ **2,5 h** : encore à protéger, mais 20 dB de moins à la source (énergie divisée par 100). La méthode moins bruyante est de loin préférable (aussi pour les riverains et les vibrations).`},
  {t:"Plan de prévention d'un chantier en ville", d:3, e:`Un chantier de bâtiment se trouve à 20 m d'une école. Proposer un plan de réduction du bruit pour les riverains et pour les ouvriers.`, c:`Riverains : horaires adaptés (travaux bruyants hors des heures de cours sensibles, jamais la nuit), **palissade pleine** côté école, **groupe électrogène et compresseur** capotés et placés du côté opposé à l'école, béton prêt à l'emploi plutôt que centrale sur place, information de la direction de l'école.
Ouvriers : matériel récent et entretenu, sciage plutôt que piquage, rotation des tâches bruyantes, **protections auditives** fournies et portées (zones balisées « port obligatoire »), mesures de LEX,8h et suivi médical.`}
 ],
 quiz:[
  {q:"Valeur d'action supérieure d'exposition quotidienne :", o:["85 dB(A)","60 dB(A)","100 dB(A)","70 dB(A)"], r:0, e:"Port obligatoire des protections."},
  {q:"Si le niveau augmente de 3 dB, la durée admissible est :", o:["Divisée par 2","Multipliée par 2","Inchangée","Divisée par 10"], r:0, e:"L'énergie double."},
  {q:"Première priorité pour réduire le bruit :", o:["Agir à la source","Distribuer des bouchons","Augmenter les horaires","Rien"], r:0, e:"Matériel et méthodes."},
  {q:"Retirer sa protection 30 min dans 100 dB(A) :", o:["Ruine presque toute la protection de la journée","Est sans effet","Améliore l'audition","Est recommandé"], r:0, e:"Énergie très forte."},
  {q:"Durée équivalente à 8 h à 85 dB(A) pour 91 dB(A) :", o:["2 h","4 h","1 h","8 h"], r:0, e:"Deux fois 3 dB."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"acou-7", niv:3, titre:"Isolement entre locaux : transmissions latérales et DnT", duree:50, contenu:`## Du laboratoire au bâtiment
L'indice R d'une paroi est mesuré en laboratoire, où le son ne passe **que** par la paroi testée. Dans un bâtiment, il passe aussi par les **parois latérales** (murs de façade, planchers, plafonds continus) : ce sont les **transmissions latérales** (ou indirectes). On distingue :
- la transmission **directe** à travers la paroi séparative ;
- les transmissions **latérales** : le son fait vibrer une paroi du local d'émission (plancher, façade), la vibration traverse la jonction et rayonne dans le local de réception par la paroi correspondante. Il y a **12 chemins latéraux** (4 jonctions × 3 chemins).
L'indice apparent R' (in situ) est donc plus faible que R : de **3 à 8 dB** selon les jonctions et la masse des parois latérales.

## L'isolement standardisé DnT
L'isolement mesuré D = L(émission) − L(réception) dépend de l'absorption du local de réception. Pour comparer, on le **standardise** à un temps de réverbération de référence T₀ = 0,5 s :
$$ DnT = D + 10 × log(T / 0,5)
Prévision à partir de l'indice apparent :
$$ DnT ≈ R' + 10 × log(0,32 × V / S)
V : volume du local de réception ; S : surface de la paroi séparative. Pour une chambre courante (V ≈ 30 m³, S ≈ 10 m²), le terme correctif est presque nul : **DnT ≈ R'**.

## Les objectifs courants
| Entre… | Isolement recherché (ordre de grandeur, DnT,A) |
|---|---|
| Deux logements (pièces principales) | ≥ 53 dB |
| Deux chambres d'hôtel | ≥ 50 dB |
| Deux salles de classe | ≥ 43 dB |
| Deux bureaux | 35 à 45 dB selon la confidentialité |
| Logement et local d'activité bruyant (bar, atelier) | ≥ 58 à 63 dB |
(Valeurs inspirées de la réglementation française, souvent prises comme référence.)

> [!exemple] Mur entre deux appartements
> Voile béton de 16 cm : Rw ≈ 55 dB ; transmissions latérales par une façade légère : R' ≈ 51 dB.
> Chambre de réception : V = 30 m³ ; S = 10 m² → DnT ≈ 51 + 10 log(0,96) = **50,8 dB** < 53 dB : **insuffisant**.
> Solutions : voile de 20 cm (Rw ≈ 58 → R' ≈ 54 → DnT ≈ 53,8 dB ✓) ; ou doublage acoustique côté chambre ; et surtout traiter la **jonction** avec la façade (façade lourde, ou coupure du doublage de façade au droit du mur).

## Combiner les chemins
Chaque chemin transmet une énergie ; on les additionne comme pour une paroi composite :
$$ R' = − 10 × log( 10^(−R(direct)/10) + Σ 10^(−R(latéral i)/10) )
Si les chemins latéraux sont faibles, améliorer la paroi séparative ne sert presque à rien : il faut traiter les jonctions (parois latérales lourdes, coupures, doublages désolidarisés).

> [!retenir]
> - R' (in situ) = R − 3 à 8 dB à cause des transmissions latérales.
> - DnT = D + 10 log(T/0,5) ; prévision DnT ≈ R' + 10 log(0,32 V/S).
> - Entre logements : DnT,A ≥ 53 dB (référence).
> - Traiter les jonctions autant que la paroi séparative.`,
 exercices:[
  {t:"Standardiser une mesure", d:1, e:`Entre deux chambres, on mesure L(émission) = 95 dB et L(réception) = 47 dB. Le temps de réverbération de la chambre de réception est T = 1,0 s.
Calculer D et DnT.`, c:`D = 95 − 47 = **48 dB** ; DnT = 48 + 10 log(1,0/0,5) = 48 + 3 = **51 dB**.`},
  {t:"Prévoir un isolement", d:1, e:`Un mur séparatif de 12 m² a un indice apparent R' = 51 dB ; le local de réception fait 45 m³. Calculer DnT.`, c:`DnT = 51 + 10 log(0,32 × 45/12) = 51 + 10 log(1,2) = **51,8 dB**.`},
  {t:"Le poids des transmissions latérales", d:2, e:`La transmission directe d'un mur correspond à R = 55 dB ; quatre chemins latéraux ont chacun un indice de 60 dB.
a) Calculer R'. b) On remplace le mur par un mur à 58 dB : nouveau R' ? c) On traite plutôt les jonctions (chemins latéraux à 66 dB) en gardant le mur à 58 dB ?`, c:`a) R' = − 10 log(10^−5,5 + 4 × 10^−6) = **51,4 dB**.
b) Mur à 58 dB : R' = **52,5 dB** (+ 1,1 dB seulement).
c) Mur à 58 dB et jonctions à 66 dB : R' = **55,9 dB** (+ 4,5 dB) : ce sont les transmissions latérales qui limitaient l'isolement.`},
  {t:"Vérifier un hôtel", d:2, e:`Entre deux chambres d'hôtel (V = 35 m³ ; mur séparatif de 11 m²), on prévoit une cloison double à ossature (Rw = 55 dB), avec des transmissions latérales qui font perdre 6 dB. L'objectif est DnT ≥ 50 dB.
Le projet est-il satisfaisant ?`, c:`R' = 55 − 6 = **49 dB** ; DnT = 49 + 10 log(0,32 × 35/11) = 49 + 0,1 = **49,1 dB** < 50 dB : **juste insuffisant**.
Améliorer les jonctions (façade et plancher continus sous la cloison : coupures, plafond désolidarisé) ou renforcer la cloison (Rw ≈ 58 dB).`},
  {t:"Démarche face à une plainte", d:3, e:`Dans un immeuble neuf, un occupant entend nettement les conversations de son voisin. Décrire une démarche de diagnostic et de traitement.`, c:`1) **Mesurer** D et T, calculer DnT et le comparer à l'objectif ;
2) **Écouter** et rechercher les **fuites** (prises dos à dos, gaines, plafonds suspendus continus au-dessus de la cloison, joints de menuiseries, jonction cloison/façade) ;
3) Évaluer les **chemins latéraux** (plancher continu, façade légère, doublages collés) ;
4) Traiter dans l'ordre : fuites (peu coûteux), puis jonctions (coupures de faux plafonds et de doublages), puis doublage désolidarisé de la paroi séparative ; mesurer à nouveau.`}
 ],
 quiz:[
  {q:"Les transmissions latérales :", o:["Diminuent l'isolement réel par rapport au laboratoire","L'augmentent","N'existent pas","Concernent seulement les fenêtres"], r:0, e:"Le son contourne la paroi séparative."},
  {q:"DnT est standardisé à un temps de réverbération de :", o:["0,5 s","1 s","2 s","0 s"], r:0, e:"Référence des logements."},
  {q:"Objectif courant d'isolement entre deux logements :", o:["≥ 53 dB","≥ 20 dB","≥ 90 dB","≥ 35 dB"], r:0, e:"DnT,A."},
  {q:"Si les chemins latéraux dominent, améliorer la paroi séparative :", o:["Apporte peu","Apporte beaucoup","Est obligatoire","Supprime les chemins latéraux"], r:0, e:"Il faut traiter les jonctions."},
  {q:"Nombre de chemins latéraux entre deux pièces voisines :", o:["12","4","1","100"], r:0, e:"4 jonctions × 3 chemins."}
 ]},

{id:"acou-8", niv:3, titre:"Acoustique des salles : classes, salles polyvalentes, lieux de culte", duree:50, contenu:`## Ce que l'on attend d'une salle
- **Intelligibilité** de la parole (classes, salles de réunion, lieux de culte pour les prêches) ;
- **Qualité** pour la musique (chorales, orchestres) : un peu plus de réverbération ;
- **Absence de défauts** : échos, focalisations, zones sourdes ;
- **Calme** : bruit de fond bas (équipements, extérieur).

## Le volume
Le volume conditionne la réverbération. Repères :
| Salle | Volume par place |
|---|---|
| Salle de classe | 4 à 6 m³ par élève |
| Salle de conférence (parole) | 3 à 5 m³ par place |
| Salle polyvalente | 5 à 8 m³ par place |
| Lieu de culte avec musique | 6 à 10 m³ par place |
Un volume trop grand rend la salle réverbérante et oblige à beaucoup d'absorption.

## Le son direct et les premières réflexions
L'auditeur entend d'abord le **son direct**, puis les **réflexions** sur les parois. Les réflexions qui arrivent **moins de 50 ms** après le son direct (différence de parcours inférieure à **17 m**) **renforcent** utilement la parole. Celles qui arrivent plus tard, avec un niveau fort, sont perçues comme un **écho**.
> [!exemple] Écho du mur du fond
> Salle de 25 m de long ; un auditeur est à 5 m de l'orateur. Le son réfléchi par le mur du fond parcourt 25 + 20 = 45 m, contre 5 m pour le son direct : différence 40 m → retard **118 ms** > 50 ms : **écho** pour les premiers rangs.
> Remède : rendre le mur du fond **absorbant** (ou diffusant, avec des reliefs).

## La forme de la salle
- Éviter les **murs parallèles** durs face à face (échos flottants : « flutter echo ») ;
- Éviter les **surfaces concaves** (coupoles, voûtes, murs courbes) qui **focalisent** le son en certains points ;
- Placer un **réflecteur** (plafond incliné, panneau) au-dessus de l'orateur ou de la scène pour envoyer le son vers le fond ;
- Surélever l'orateur ou incliner les gradins : le son direct passe au-dessus des têtes.

## La réverbération optimale
Elle augmente avec le volume et dépend de l'usage : 0,4 à 0,8 s pour une classe ; 0,8 à 1,2 s pour une salle polyvalente ; 1 à 2 s pour une église où l'on chante. On la règle par la quantité et la position des absorbants (voir chapitre Réverbération).

## La sonorisation
Dans les grands volumes réverbérants (églises, mosquées, halls), une sonorisation bien conçue (colonnes directives orientées vers l'auditoire, retards électroniques) améliore beaucoup l'intelligibilité ; mal conçue, elle ajoute du bruit et de l'écho. Elle **complète** le traitement architectural, elle ne le remplace pas.

> [!retenir]
> - Volume adapté à l'usage (4 à 6 m³ par élève…).
> - Réflexions utiles < 50 ms (Δ parcours < 17 m) ; au-delà : écho.
> - Pas de parois parallèles dures ni de surfaces concaves ; réflecteur au-dessus de l'orateur ; fond absorbant.
> - Réverbération ajustée à l'usage ; sonorisation directive en complément.`,
 exercices:[
  {t:"Volume par place", d:1, e:`Une salle de 25 × 15 × 8 m accueille 400 personnes. Calculer le volume par place et commenter pour une salle de conférences.`, c:`V = 3 000 m³ → 3 000/400 = **7,5 m³ par place** : trop pour une salle de parole (3 à 5 m³) : elle sera réverbérante ; il faudra beaucoup d'absorption (plafond, mur du fond) ou un faux plafond plus bas.`},
  {t:"Retard d'une réflexion", d:1, e:`Le son direct parcourt 8 m ; une réflexion sur le plafond parcourt 14 m. Calculer le retard. Cette réflexion est-elle utile ?`, c:`Différence : 6 m → retard 6/340 = **18 ms** < 50 ms : réflexion **utile**, elle renforce la parole.`},
  {t:"Détecter un écho", d:2, e:`Dans une salle polyvalente de 30 m de long au mur du fond en béton, un auditeur est assis à 6 m de la scène. Calculer le retard de la réflexion sur le mur du fond et conclure.`, c:`Parcours réfléchi : 30 + 24 = 54 m ; direct : 6 m ; différence 48 m → retard **141 ms** : **écho** gênant.
Traiter le mur du fond : panneaux absorbants (laine derrière parement perforé) ou diffuseurs.`},
  {t:"Classe à plafond voûté", d:2, e:`Une école est construite avec des classes à plafond en voûte cylindrique en béton. Les élèves du centre de la classe se plaignent d'entendre « tout fort et confus ». Expliquer et proposer une correction.`, c:`La voûte **concave** **focalise** les réflexions vers une zone (le centre de la classe), et le béton réfléchit tout : son trop fort et confus à cet endroit, réverbération longue partout.
Correction : revêtir la voûte de **panneaux absorbants** (ou suspendre des baffles absorbants), ce qui supprime la focalisation et réduit la réverbération.`},
  {t:"Concevoir une salle de prière", d:3, e:`On conçoit une salle de prière de 600 places (prêches et chants). Proposer : le volume, la forme, la réverbération visée et les principales dispositions acoustiques.`, c:`Volume : 6 à 8 m³ par place → **3 600 à 4 800 m³**.
Forme : plan rectangulaire légèrement évasé ou en éventail, **sans coupole concave non traitée** (ou coupole revêtue d'absorbant), parois latérales non parallèles ou rendues diffusantes.
Réverbération : **1,2 à 1,6 s** salle pleine (compromis entre parole et chants).
Dispositions : **réflecteur** au-dessus de l'orateur ; **mur du fond absorbant** ; absorbants répartis en partie haute ; tapis au sol (absorbent aussi les bruits de pas) ; sonorisation par colonnes directives avec retards ; équipements (ventilateurs, climatisation) silencieux.`}
 ],
 quiz:[
  {q:"Une réflexion arrivant moins de 50 ms après le son direct :", o:["Renforce la parole","Crée un écho","Est inaudible","Est dangereuse"], r:0, e:"Intégrée par l'oreille."},
  {q:"Une différence de parcours de 17 m correspond à un retard de :", o:["50 ms","17 ms","5 ms","170 ms"], r:0, e:"17/340."},
  {q:"Les surfaces concaves (coupoles) :", o:["Focalisent le son","Le diffusent parfaitement","L'absorbent","N'ont aucun effet"], r:0, e:"Points de concentration."},
  {q:"Le mur du fond d'une salle doit plutôt être :", o:["Absorbant ou diffusant","Lisse et réfléchissant","Vitré","Concave"], r:0, e:"Éviter l'écho."},
  {q:"Volume conseillé par élève dans une classe :", o:["4 à 6 m³","20 m³","1 m³","50 m³"], r:0, e:"Réverbération maîtrisée."}
 ]},

{id:"acou-9", niv:3, titre:"Bruit de l'environnement : circulation, écrans et urbanisme", duree:50, contenu:`## Le bruit de la circulation
Le niveau sonore d'une route dépend :
- du **débit** : doubler le nombre de véhicules ajoute **3 dB** ;
- de la **vitesse** (au-delà de 50 km/h, le bruit de roulement domine) ;
- de la proportion de **poids lourds** (un poids lourd fait autant de bruit que 5 à 10 voitures) ;
- du **revêtement** et des irrégularités (dos-d'âne, pavés) ;
- de la **distance** (− 3 dB par doublement de distance pour une voie chargée).
Les **klaxons**, motos et taxis-motos ajoutent des pics très gênants.

## Les écrans antibruit
Un écran (mur, merlon de terre, bâtiment) coupe le trajet direct : le son ne parvient derrière que par **diffraction** sur l'arête. L'atténuation dépend de la **différence de parcours** δ entre le trajet qui passe par l'arête et le trajet direct, et de la fréquence (nombre de Fresnel N = 2δ/λ) :
$$ ΔL ≈ 10 × log(3 + 20 × N)     (formule de Maekawa)
> [!exemple] Écran de 3 m, à 5 m d'une source à 0,5 m de haut ; récepteur à 1,5 m de haut, à 25 m de la source
> δ = 0,63 m.
> | Fréquence | 125 Hz | 500 Hz | 2 000 Hz |
> |---|---|---|---|
> | Atténuation | 11 dB | 16 dB | 22 dB |
> Hauteur de l'écran à 500 Hz : 2 m → 12 dB ; 3 m → 16 dB ; 4 m → 19 dB ; 5 m → 21 dB.
Règles pratiques :
- un écran est efficace s'il **cache complètement** la source ; il doit être **continu** (sans trous) et **long** (dépasser largement de chaque côté) ;
- il est plus efficace **près de la source** ou **près du récepteur** qu'à mi-distance ;
- il atténue mieux les **aigus** que les graves ;
- sa masse doit dépasser environ **20 kg/m²** (un panneau léger laisse passer le son à travers).

## L'urbanisme contre le bruit
- **Éloigner** les logements, écoles et centres de santé des grands axes ; utiliser des **bandes tampons** (activités, parkings, espaces verts) ;
- Implanter des **bâtiments écrans** (bureaux, commerces) le long des voies, les logements derrière ;
- Organiser les **plans** des logements : pièces calmes côté cour ;
- Gérer les activités bruyantes : maquis, bars, lieux de culte sonorisés, ateliers, groupes électrogènes (horaires, limiteurs de son, isolation des locaux).

> [!retenir]
> - Débit doublé : + 3 dB ; distance doublée : − 3 dB (route) ; poids lourds très bruyants.
> - Écran : ΔL ≈ 10 log(3 + 20 N), N = 2δ/λ ; continu, haut, long, massif, près de la source ou du récepteur.
> - Urbanisme : distances, bandes tampons, bâtiments écrans, plans adaptés.`,
 exercices:[
  {t:"Trafic qui augmente", d:1, e:`Sur une route, le trafic passe de 1 000 à 4 000 véhicules par heure. De combien augmente le niveau sonore ?`, c:`Facteur 4 = deux doublements → **+ 6 dB** (10 log 4).`},
  {t:"Effet des poids lourds", d:2, e:`Une route supporte 900 voitures et 100 poids lourds par heure ; un poids lourd équivaut à 10 voitures. Comparer au niveau d'une route de 1 000 voitures seules.`, c:`Équivalent : 900 + 100 × 10 = **1 900 voitures** → + 10 log(1 900/1 000) = **+ 2,8 dB** par rapport à 1 000 voitures : 10 % de poids lourds font presque doubler l'énergie sonore.`},
  {t:"Hauteur d'un écran", d:2, e:`Avec les données de l'exemple du cours, quelle hauteur d'écran faut-il pour obtenir au moins 18 dB d'atténuation à 500 Hz ? Pourquoi l'atténuation réelle sur un bruit de circulation sera-t-elle plus faible ?`, c:`D'après le tableau : 3 m → 16 dB ; 4 m → **19 dB** : il faut un écran d'environ **4 m**.
Le bruit de circulation contient beaucoup de **graves** (moteurs, roulement), moins bien arrêtés (11 dB à 125 Hz pour 3 m) ; de plus, les extrémités de l'écran et les réflexions sur les façades réduisent l'efficacité : on compte en pratique 8 à 12 dB(A).`},
  {t:"Position de l'écran", d:2, e:`Source à 0,5 m de haut, récepteur à 1,5 m de haut, 25 m entre eux. On compare un écran de 3 m placé à 5 m de la source (δ = 0,63 m), à mi-distance (δ = 0,32 m) ou à 5 m du récepteur (δ = 0,36 m). Calculer l'atténuation à 500 Hz (λ = 0,68 m) pour chaque cas.`, c:`Près de la source : N = 1,84 → 10 log(3 + 36,8) = **16,0 dB**.
Mi-distance : N = 0,94 → 10 log(21,8) = **13,4 dB**.
Près du récepteur : N = 1,05 → 10 log(24) = **13,8 dB**.
L'écran est le plus efficace **près de la source** (ou très près du récepteur), le moins efficace à mi-distance.`},
  {t:"Aménager un quartier", d:3, e:`Un lotissement doit être aménagé le long d'une voie express à fort trafic de poids lourds. Proposer un plan d'aménagement qui protège du bruit les logements et une école prévue dans le projet.`, c:`Le long de la voie : **bande tampon** (contre-allée, espace vert, merlon de terre planté de 3 à 4 m), puis **bâtiments écrans** non sensibles (commerces, bureaux, ateliers), continus.
Logements **en second rang**, orientés avec les chambres côté jardin ; l'**école** au cœur du quartier, la plus éloignée de la voie, cour et classes protégées par les bâtiments.
Circulation interne lente (zones 30), entrées du lotissement éloignées des logements ; règles pour les activités bruyantes (horaires, emplacement des groupes électrogènes).`}
 ],
 quiz:[
  {q:"Doubler le trafic d'une route augmente le niveau de :", o:["3 dB","6 dB","10 dB","100 %"], r:0, e:"Énergie doublée."},
  {q:"Un écran antibruit est plus efficace :", o:["Près de la source ou du récepteur","À mi-distance","S'il est troué","S'il est très léger"], r:0, e:"Plus grande différence de parcours."},
  {q:"Un écran atténue mieux :", o:["Les aigus","Les graves","Toutes les fréquences pareil","Les infrasons"], r:0, e:"Nombre de Fresnel plus grand."},
  {q:"Un bâtiment écran le long d'une voie abrite de préférence :", o:["Des bureaux ou commerces","Des chambres","Une maternité","Une école"], r:0, e:"Activités peu sensibles."},
  {q:"Pour être efficace, un écran doit avoir une masse d'au moins :", o:["≈ 20 kg/m²","1 kg/m²","500 kg/m²","0"], r:0, e:"Sinon le son le traverse."}
 ]},

{id:"acou-14", niv:3, titre:"Équipements techniques : niveaux de puissance, capotages et antivibratiles", duree:50, contenu:`## Prévoir le bruit d'un équipement
Les fabricants donnent le **niveau de puissance acoustique** Lw (dB(A)). Pour une machine posée au sol, à l'extérieur, le niveau à la distance r vaut environ :
$$ Lp = Lw − 20 × log(r) − 8
(− 11 au lieu de − 8 pour une source suspendue en champ libre ; + 3 dB environ si la machine est contre un mur, + 6 dB dans un angle).
> [!exemple] Unité extérieure et groupe électrogène
> Unité de climatisation Lw = 65 dB(A) à 3 m d'une fenêtre : Lp = 65 − 9,5 − 8 = **47,5 dB(A)**.
> Groupe électrogène Lw = 98 dB(A) à 15 m d'une chambre : Lp = 98 − 23,5 − 8 = **66,5 dB(A)** : pour descendre à 50 dB(A), il faut gagner **16,5 dB** (capot, local, écran).

## Les capotages et locaux techniques
- **Capot insonorisé** (parois lourdes doublées d'absorbant, grilles d'aération en chicane) : 10 à 25 dB ;
- **Local maçonné** avec porte acoustique et **pièges à son** sur les entrées et sorties d'air : 25 à 40 dB ;
- **Silencieux** d'échappement pour les moteurs thermiques ;
- Attention aux **ouvertures** : la ventilation d'un groupe électrogène demande de grandes sections d'air ; sans pièges à son, elles annulent l'effet du local (voir parois composites).

## Les vibrations et les plots antivibratiles
Une machine tournante (pompe, compresseur, groupe, ventilateur) transmet des **vibrations** à la structure, qui les rayonne en bruit dans d'autres locaux (bruit solidien). On l'isole par des **supports élastiques** (ressorts, plots en élastomère) :
- **Fréquence propre** de la machine sur ses supports, à partir de l'**écrasement statique** δ (mm) des plots sous le poids :
$$ f₀ ≈ 15,8 / √δ     (Hz)
- **Fréquence d'excitation** : f = N/60 (N : vitesse de rotation en tr/min) ;
- **Transmissibilité** (part des vibrations transmises), si f/f₀ > √2 :
$$ T = 1 / ( (f/f₀)² − 1 )
On vise **f/f₀ ≥ 3** (efficacité d'environ 90 %). Si f/f₀ est proche de 1 : **résonance**, les supports **amplifient** les vibrations !
> [!exemple] Pompe tournant à 1 450 tr/min
> f = 1 450/60 = **24,2 Hz**.
> Plots écrasés de 5 mm : f₀ = 15,8/√5 = **7,1 Hz** → f/f₀ = 3,4 → T = 1/(3,4² − 1) = **0,09** : 91 % des vibrations sont arrêtées ✓.
> Plots écrasés de 2 mm : f₀ = 11,2 Hz → f/f₀ = 2,2 → T = 0,27 : seulement 73 %.

## Les autres précautions
- **Manchettes souples** sur les tuyauteries et les gaines raccordées à la machine ;
- **Massif d'inertie** (socle béton) sous les grosses machines, posé sur les plots ;
- Éviter les vitesses de rotation proches des fréquences propres des planchers légers ;
- Choisir des équipements à **vitesse variable** et les régler au plus bas suffisant.

> [!retenir]
> - Lp = Lw − 20 log r − 8 (source au sol) ; + 3 dB contre un mur.
> - Capot 10 à 25 dB ; local 25 à 40 dB, avec pièges à son sur les ouvertures.
> - f₀ = 15,8/√δ ; f = N/60 ; T = 1/((f/f₀)² − 1) ; viser f/f₀ ≥ 3.
> - Manchettes souples, massif d'inertie, vitesse variable.`,
 exercices:[
  {t:"Niveau d'une unité extérieure", d:1, e:`Une unité extérieure de climatisation (Lw = 70 dB(A)) est posée au sol à 5 m de la fenêtre d'une chambre voisine. Calculer le niveau à la fenêtre. Que se passe-t-il si on la fixe contre le mur ?`, c:`Lp = 70 − 20 log 5 − 8 = 70 − 14 − 8 = **48 dB(A)**.
Contre le mur : environ **+ 3 dB** → 51 dB(A), et des vibrations peuvent passer dans la structure si la fixation est rigide.`},
  {t:"Capot d'un groupe électrogène", d:2, e:`Un groupe électrogène de Lw = 98 dB(A) est à 15 m d'une chambre. On vise 50 dB(A) devant la fenêtre la nuit.
Quel gain le capot doit-il apporter ? Quelle autre solution complète ?`, c:`Lp = 98 − 20 log 15 − 8 = **66,5 dB(A)** → gain nécessaire : **16,5 dB**.
Un capot insonorisé de qualité (20 dB) convient ; on peut compléter par un **écran** ou en **éloignant** le groupe (à 30 m : − 6 dB de plus), et par un silencieux d'échappement performant.`},
  {t:"Choisir des plots antivibratiles", d:2, e:`Un ventilateur tourne à 960 tr/min. Calculer f, puis la transmissibilité avec des plots écrasés de 10 mm, puis de 3 mm. Conclure.`, c:`f = 960/60 = **16 Hz**.
δ = 10 mm : f₀ = 15,8/√10 = **5,0 Hz** → f/f₀ = 3,2 → T = 1/(10,2 − 1) = **0,11** (89 % d'efficacité).
δ = 3 mm : f₀ = **9,1 Hz** → f/f₀ = 1,75 → T = **0,48** (seulement 52 %).
Plus la machine tourne lentement, plus les plots doivent être **souples** (fort écrasement).`},
  {t:"Écrasement nécessaire", d:2, e:`Pour une pompe à 1 450 tr/min, quel écrasement statique minimal faut-il pour obtenir f/f₀ = 3 ?`, c:`f = 24,2 Hz → f₀ = 24,2/3 = **8,06 Hz** → √δ = 15,8/8,06 = 1,96 → δ = **3,8 mm** au minimum (on choisit des plots donnant 4 à 6 mm d'écrasement sous la charge réelle).`},
  {t:"Résonance dangereuse", d:3, e:`Une machine tourne à 600 tr/min. Un monteur l'a posée sur des plots qui s'écrasent de 7 mm. Calculer f et f₀ et conclure. Que faire ?`, c:`f = 600/60 = **10 Hz** ; f₀ = 15,8/√7 = **6,0 Hz** → f/f₀ = 1,67 → T = 1/(2,78 − 1) = **0,56** : peu efficace, et au démarrage la machine passe par la **résonance** (f = f₀) : fortes vibrations.
Solution : plots beaucoup plus **souples** (écrasement ≥ 25 mm, souvent des **ressorts**, f₀ ≈ 3 Hz → f/f₀ ≈ 3,3), éventuellement un **massif d'inertie** pour stabiliser la machine et limiter ses déplacements.`}
 ],
 quiz:[
  {q:"Lp d'une source au sol de Lw = 90 dB(A) à 10 m :", o:["62 dB(A)","80 dB(A)","90 dB(A)","72 dB(A)"], r:0, e:"90 − 20 − 8."},
  {q:"Fréquence propre d'une machine sur plots écrasés de 4 mm :", o:["≈ 7,9 Hz","≈ 4 Hz","≈ 63 Hz","≈ 1 Hz"], r:0, e:"15,8/2."},
  {q:"Pour bien isoler les vibrations, il faut :", o:["f/f₀ ≥ 3","f = f₀","f/f₀ < 1","f₀ très élevée"], r:0, e:"Loin de la résonance."},
  {q:"Les ouvertures de ventilation d'un local de groupe électrogène doivent avoir :", o:["Des pièges à son","Aucune protection","Des vitres","Des rideaux"], r:0, e:"Sinon l'isolement s'effondre."},
  {q:"Une machine contre un mur rayonne environ :", o:["3 dB de plus qu'au milieu d'une cour","3 dB de moins","Pareil","10 dB de moins"], r:0, e:"Réflexion sur le mur."}
 ]},

{id:"acou-16", niv:3, titre:"Concevoir un bâtiment calme : méthode de synthèse", duree:45, contenu:`## Agir dès l'esquisse
Comme pour le confort thermique, les bonnes décisions acoustiques se prennent **au moment du plan masse et du plan** : elles ne coûtent presque rien. Corriger un bâtiment bruyant après coup est cher et souvent décevant.

## 1. Le plan masse
- Identifier les **sources** : voies, activités, groupes électrogènes, lieux de culte, écoles (cours de récréation), équipements du projet lui-même ;
- **Éloigner** les locaux sensibles (chambres, classes, salles de soins) ; utiliser des **bâtiments écrans** et des **bandes tampons** ;
- Orienter les façades sensibles vers les **cours calmes**.

## 2. La distribution intérieure
- **Superposer** les pièces de même nature d'un étage à l'autre (chambres sur chambres, cuisines sur cuisines) ;
- **Séparer** les locaux calmes des locaux bruyants par des locaux tampons (rangements, salles d'eau, circulations) ;
- Éloigner les **gaines**, ascenseurs, chutes d'eau, locaux techniques des chambres ;
- Éviter que les **portes** de deux logements se fassent face, et les **fenêtres** de deux chambres voisines à angle droit (transmission par l'extérieur).

## 3. Les choix constructifs
- Parois séparatives **lourdes** (≥ 350 à 400 kg/m²) ou **doubles** désolidarisées ;
- Planchers **épais** (≥ 18 à 20 cm) avec **revêtements résilients** ou **chapes flottantes** ;
- **Façades** dimensionnées selon le bruit extérieur : isolement nécessaire = niveau extérieur − niveau intérieur visé ;
- **Fenêtres** adaptées et **entrées d'air** acoustiques ou ventilation par la façade calme ;
- **Traitement des jonctions** pour limiter les transmissions latérales.

## 4. Les équipements
Choix d'appareils silencieux, implantation éloignée, plots antivibratiles, manchettes souples, capotages, pièges à son, vitesses limitées.

## 5. La correction des locaux
Plafonds absorbants dans les classes, réfectoires, salles de réunion, circulations des écoles et des hôpitaux ; temps de réverbération adaptés.

## Le dilemme tropical : ventiler ou isoler ?
La ventilation naturelle demande des **ouvertures**, l'isolation acoustique demande de les **fermer**. Solutions :
- ouvrir les pièces sensibles sur les **façades calmes** ;
- protéger les ouvertures par des **écrans** (murets, bâtiments, végétation dense) ;
- utiliser des **ouvertures en chicane** et des **persiennes acoustiques** (lames absorbantes) ;
- prévoir la **climatisation** (avec ventilation silencieuse) seulement pour les locaux exposés à un bruit fort et continu.

> [!exemple] Isolement de façade nécessaire
> Une chambre fait face à une voie à 68 dB(A) ; on vise 35 dB(A) fenêtres fermées : isolement nécessaire **33 dB** → mur courant + fenêtre de bonne qualité (≈ 30 à 35 dB) et entrée d'air acoustique suffisent. À 75 dB(A), il faudrait 40 dB : fenêtre acoustique, et de préférence chambre déplacée côté cour.

> [!retenir]
> - Plan masse : éloigner, faire écran, orienter vers les cours calmes.
> - Plan : superposer les pièces de même nature, tampons, gaines loin des chambres.
> - Construction : parois lourdes ou doubles, planchers résilients, façades et fenêtres adaptées, jonctions traitées.
> - Équipements maîtrisés ; locaux corrigés ; concilier ventilation et calme.`,
 exercices:[
  {t:"Isolement de façade", d:1, e:`Une salle de classe donne sur une rue à 70 dB(A). On vise 35 dB(A) dans la classe. Quel isolement de façade faut-il ? Est-il compatible avec des fenêtres ouvertes (isolement ≈ 10 dB) ?`, c:`Isolement : 70 − 35 = **35 dB**.
Fenêtres ouvertes : 70 − 10 = **60 dB(A)** dans la classe : incompatible avec l'enseignement. Il faut orienter la classe vers une cour calme ou fermer (fenêtres de 35 dB environ, ventilation silencieuse, éventuellement climatisation).`},
  {t:"Analyser un plan d'immeuble", d:2, e:`Dans un projet d'immeuble, la chambre de l'appartement A est accolée à la cage d'ascenseur, et le séjour de l'appartement B est au-dessus de la chambre de l'appartement C. Relever les deux défauts et proposer des corrections.`, c:`1) Chambre contre l'**ascenseur** (bruits de machinerie, portes, vibrations) : inverser avec un rangement, une salle d'eau ou une circulation, ou désolidariser la cage par un doublage.
2) **Séjour au-dessus d'une chambre** (bruits de pas, télévision) : superposer les pièces de même nature ; à défaut, chape flottante et isolement renforcé du plancher.`},
  {t:"Choisir un plancher", d:2, e:`Un immeuble de logements doit respecter L'nT,w ≤ 58 dB et DnT,A ≥ 53 dB entre logements superposés. Proposer une composition de plancher.`, c:`Dalle béton de **20 cm** (Rw ≈ 58 dB, L'n,w ≈ 75 dB) + **chape flottante** de 5 cm sur sous-couche acoustique (ΔLw ≈ 20 à 22 dB) → L'n,w ≈ 53 à 55 dB ✓ ; l'isolement aux bruits aériens est aussi amélioré par la chape flottante (+ quelques dB) ✓ ; bandes résilientes en périphérie, plinthes désolidarisées.`},
  {t:"Ventiler un dortoir calme", d:2, e:`Un dortoir d'internat doit être ventilé naturellement, mais il fait face à un terrain de sport bruyant le soir. Proposer trois dispositions.`, c:`1) Ouvrir le dortoir sur la **façade opposée** au terrain (fenêtres principales côté calme), avec seulement des **impostes en chicane** côté terrain ;
2) Créer un **écran** entre le terrain et le dortoir : bâtiment de service, mur plein de 2,5 à 3 m, haie dense ;
3) **Persiennes acoustiques** (lames absorbantes) sur les ouvertures exposées ; horaires d'utilisation du terrain adaptés.`},
  {t:"Programme d'un centre de santé", d:3, e:`Un centre de santé comprend : salle d'attente, salles de consultation, salle de soins, groupe électrogène, parking, salle de réunion. Il est bordé par une route au sud. Proposer une organisation acoustique.`, c:`Plan masse : **parking et accueil** côté route (tampon) ; **groupe électrogène** dans un local maçonné au nord-est, loin des consultations, avec pièges à son et plots antivibratiles.
Plan : **salle d'attente** (bruyante) séparée des **consultations** par une circulation ; consultations et soins sur la façade **calme** (nord), avec portes pleines à joints (confidentialité, DnT ≈ 40 à 45 dB entre consultations).
Correction : plafonds absorbants dans l'attente, les circulations et la salle de réunion.
Équipements : climatiseurs silencieux, unités extérieures éloignées des fenêtres des consultations.`}
 ],
 quiz:[
  {q:"Les bonnes décisions acoustiques se prennent surtout :", o:["Dès l'esquisse et le plan","Après la livraison","Au moment de la peinture","Jamais"], r:0, e:"Elles ne coûtent presque rien."},
  {q:"On superpose de préférence :", o:["Des pièces de même nature","Un séjour au-dessus d'une chambre","Une machinerie au-dessus d'une chambre","Peu importe"], r:0, e:"Chambres sur chambres."},
  {q:"Isolement de façade nécessaire pour 72 dB(A) dehors et 35 dB(A) dedans :", o:["37 dB","107 dB","35 dB","72 dB"], r:0, e:"72 − 35."},
  {q:"Pour concilier ventilation naturelle et calme, on ouvre les pièces sensibles :", o:["Sur les façades calmes","Sur la rue","Sur le parking","Sur le local technique"], r:0, e:"Organisation du plan."},
  {q:"Une gaine d'ascenseur se place :", o:["Loin des chambres, entourée de locaux tampons","Contre les chambres","Au centre de la chambre","Peu importe"], r:0, e:"Bruits et vibrations."}
 ]}
]});
