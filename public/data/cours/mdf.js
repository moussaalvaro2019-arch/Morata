/* =====================================================================
   Mécanique des fluides — cours complet (3 niveaux)
   Débutant : propriétés et pression, hydrostatique, Archimède et
              sous-pressions, débits et vitesses, l'eau dans la maison
   Intermédiaire : Bernoulli, régimes d'écoulement, pertes de charge,
              eaux pluviales, évacuation des eaux usées
   Avancé : pompes et surpresseurs, écoulements à surface libre, coup de
            bélier, réservoirs et châteaux d'eau, assainissement
            autonome, hydrologie et ouvrages de drainage
   ===================================================================== */
A.addMatiere({
 id:"mdf",
 titre:"Mécanique des fluides",
 court:"Méca. fluides",
 groupe:"phys",
 icone:"wave",
 couleur:"#2F6FDB",
 niveau:"Intermédiaire",
 heures:55,
 ordre:4,
 prerequis:["sp", "math"],
 resume:"L'eau dans et autour du bâtiment : pression et hydrostatique, poussées et sous-pressions, débits, Bernoulli, régimes d'écoulement et pertes de charge, réseaux d'eau potable, eaux pluviales et eaux usées, pompes et surpresseurs, caniveaux, buses et dalots, coup de bélier, réservoirs, assainissement autonome et hydrologie urbaine.",
 objectifs:[
  "Calculer des pressions, des poussées hydrostatiques et des sous-pressions",
  "Calculer débits, vitesses et appliquer la conservation du débit",
  "Appliquer le théorème de Bernoulli avec pertes de charge",
  "Dimensionner un réseau d'eau potable et vérifier la pression aux robinets",
  "Dimensionner gouttières, descentes, canalisations d'eaux usées et caniveaux",
  "Choisir une pompe ou un surpresseur et protéger un réseau du coup de bélier",
  "Dimensionner un réservoir, une fosse septique et un ouvrage de drainage"
 ],
 applications:[
  "Bâches à eau, cuves enterrées et châteaux d'eau",
  "Réseau d'alimentation d'une villa ou d'un immeuble",
  "Évacuation des eaux pluviales de toiture et de parcelle",
  "Réseaux d'eaux usées, fosse septique et épandage",
  "Caniveaux, buses et dalots de voirie"
 ],
 chapitres:[
/* ============================ DÉBUTANT ============================ */
{id:"mdf-1", niv:1, titre:"Propriétés des fluides et pression", duree:40, contenu:`## Qu'est-ce qu'un fluide ?
Un fluide (liquide ou gaz) se déforme sans résistance permanente et **épouse la forme** de son contenant. Les liquides ont un volume propre ; les gaz occupent tout l'espace offert.

## Les propriétés utiles
| Propriété | Eau (20 °C) | Air (20 °C) |
|---|---|---|
| Masse volumique ρ | 1 000 kg/m³ | 1,2 kg/m³ |
| Poids volumique γ = ρ g | 9,81 kN/m³ (≈ 10) | 0,012 kN/m³ |
| Viscosité cinématique ν | 1 × 10⁻⁶ m²/s | 15 × 10⁻⁶ m²/s |
| Compressibilité | Pratiquement incompressible | Très compressible |
- La **viscosité** est la résistance d'un fluide à l'écoulement : le miel, les boues, les huiles sont beaucoup plus visqueux que l'eau.
- Les boues de forage (bentonite) ou un béton frais sont des fluides particuliers (ils ne coulent qu'au-delà d'un certain effort).

## La pression
La **pression** est une force répartie sur une surface :
$$ p = F / S     (Pa = N/m²)
Unités usuelles :
| Unité | Équivalence |
|---|---|
| 1 bar | 10⁵ Pa ≈ 10,2 m de colonne d'eau (mCE) |
| 1 mCE | 9 810 Pa ≈ 0,1 bar |
| 1 kPa | 1 000 Pa |
| 1 MPa | 10 bar |
En plomberie, on raisonne souvent en **mètres de colonne d'eau** : « 3 bars » ≈ 30 m de hauteur d'eau.

## Pression absolue et pression relative
- La **pression atmosphérique** vaut environ **101 325 Pa** (≈ 1 bar ≈ 10,33 mCE) au niveau de la mer.
- Un manomètre indique en général la **pression relative** (au-dessus de l'atmosphère) : p(absolue) = p(relative) + p(atm).
- Une **dépression** (pression relative négative) existe à l'aspiration d'une pompe : on ne peut jamais aspirer de l'eau à plus de **10,33 m** de haut en théorie (environ 7 m en pratique).

## Les propriétés de la pression dans un liquide au repos
- En un point, la pression est la même **dans toutes les directions** ;
- Elle s'exerce **perpendiculairement** aux parois ;
- Elle ne dépend que de la **profondeur** (voir chapitre suivant).

## Application : la même charge, des pressions très différentes
Un réservoir contient **2 m³** d'eau : masse 2 000 kg, poids 2 000 × 9,81 = **19,62 kN** (on néglige le poids de la cuve).
- Posé sur 4 pieds de 10 × 10 cm (S = 0,04 m²) : p = 19,62 / 0,04 = **490 kPa ≈ 0,49 MPa** sous les pieds ;
- Posé à plat sur une base de 1,50 × 1,50 m (S = 2,25 m²) : p = 19,62 / 2,25 = **8,7 kPa**.
La même charge exerce une pression 56 fois plus forte sous les pieds : il faut vérifier la dalle (poinçonnement) ou interposer un socle de répartition.

## Conversions pas à pas
- 3,5 bar = 3,5 × 10⁵ Pa = 350 kPa = 350 000 / 9 810 = **35,7 mCE** ;
- 25 mCE = 25 × 9 810 = 245 250 Pa = **2,45 bar** ;
- 0,6 MPa = **6 bar** (pression d'épreuve courante d'un réseau d'eau) ;
- Un manomètre indique 2,5 bar : pression absolue = 2,5 + 1,01 = **3,51 bar**.

> [!astuce] Repères faciles à retenir
> 1 bar ≈ 10 m d'eau ≈ 100 kPa.
> 1 m d'eau ≈ 10 kPa ≈ 0,1 bar.
> Un château d'eau de 30 m donne environ 3 bars au pied.

## Méthode
1. Identifier la **force** (poids d'un liquide, effort d'une pompe) en newtons ;
2. Identifier la **surface** d'appui en m² ;
3. Calculer p = F / S en Pa, puis convertir dans l'unité utile (kPa, bar, mCE) ;
4. Préciser s'il s'agit d'une pression **relative** ou **absolue**.

> [!attention] Erreurs fréquentes
> - Confondre bar et MPa : 1 MPa = 10 bar.
> - Confondre masse (kg) et poids (N) : multiplier par g = 9,81.
> - Additionner une pression relative et une pression absolue.
> - Oublier de convertir les cm² en m² (1 cm² = 10⁻⁴ m²).

> [!retenir]
> - Eau : ρ = 1 000 kg/m³ ; γ ≈ 10 kN/m³ ; incompressible.
> - p = F/S ; 1 bar = 10⁵ Pa ≈ 10,2 mCE.
> - Pression relative (manomètre) + atmosphérique = absolue.
> - Aspiration limitée à 10,33 m en théorie, ≈ 7 m en pratique.`,
 exercices:[
  {t:"Conversions de pression", d:1, e:`Convertir : a) 3 bar en Pa et en mCE ; b) 25 mCE en bar ; c) 450 kPa en bar.`, c:`a) 3 bar = **300 000 Pa** = 3 × 10,2 = **30,6 mCE**.
b) 25 mCE = 25 × 9 810 = 245 250 Pa = **2,45 bar**.
c) 450 kPa = 450 000 Pa = **4,5 bar**.`},
  {t:"Pression sous un pied de poteau", d:1, e:`Un poteau transmet 250 kN à une semelle de 1,2 × 1,2 m. Calculer la pression moyenne sous la semelle en kPa et en bar.`, c:`p = 250/(1,2 × 1,2) = 250/1,44 = **174 kPa** = **1,74 bar**.`},
  {t:"Absolue ou relative", d:1, e:`Le manomètre d'un surpresseur indique 3,5 bar. Quelle est la pression absolue ? Que lirait-il à l'arrêt, réseau vidangé et ouvert à l'air ?`, c:`p(absolue) = 3,5 + 1,013 ≈ **4,5 bar**.
Réseau ouvert à l'air : le manomètre indique **0** (pression relative nulle), la pression absolue étant la pression atmosphérique.`},
  {t:"Hauteur d'aspiration", d:2, e:`Une pompe de surface doit aspirer l'eau d'un puits dont le niveau est à 9 m sous la pompe. Est-ce possible ? Proposer une solution.`, c:`En théorie, la limite est 10,33 m, mais les pertes de charge, la pression de vapeur et la sécurité contre la cavitation la réduisent à **6 à 7 m** en pratique : **9 m est trop**.
Solution : une **pompe immergée** (qui refoule au lieu d'aspirer) ou une pompe de surface placée plus bas (dans le puits, sur une plateforme).`},
  {t:"Masse et poids d'une citerne", d:2, e:`Une citerne contient 5 m³ d'eau. Calculer la masse, le poids (kN) de l'eau, et la pression exercée sur une dalle si la citerne repose sur 2,5 m².`, c:`m = 5 × 1 000 = **5 000 kg** ; P = 5 000 × 9,81 = **49,05 kN**.
p = 49,05/2,5 = **19,6 kPa** (≈ 2 kN/m² par mètre de hauteur d'eau, ici 2 m) : la dalle doit être calculée pour cette charge (souvent plus forte qu'une charge d'exploitation de logement).`}
 ],
 quiz:[
  {q:"1 bar correspond à environ :", o:["10 m de colonne d'eau","1 m","100 m","0,1 m"], r:0, e:"10,2 mCE."},
  {q:"Un manomètre indique en général :", o:["La pression relative","La pression absolue","La température","Le débit"], r:0, e:"Par rapport à l'atmosphère."},
  {q:"La masse volumique de l'eau vaut :", o:["1 000 kg/m³","1 kg/m³","2 500 kg/m³","100 kg/m³"], r:0, e:"Valeur de référence."},
  {q:"Hauteur d'aspiration maximale théorique d'une pompe :", o:["10,33 m","50 m","1 m","100 m"], r:0, e:"Pression atmosphérique."},
  {q:"Dans un liquide au repos, la pression s'exerce :", o:["Perpendiculairement aux parois","Parallèlement aux parois","Seulement vers le bas","Seulement vers le haut"], r:0, e:"Propriété de la pression."}
 ]},

{id:"mdf-2", niv:1, titre:"Hydrostatique : pression en profondeur et poussées sur les parois", duree:50, contenu:`## La loi fondamentale
Dans un liquide au repos, la pression augmente avec la profondeur h sous la surface libre :
$$ p = ρ × g × h     (pression relative)
Pour l'eau : **+ 9,81 kPa (≈ 0,1 bar) par mètre** de profondeur.
Conséquences :
- Tous les points d'un liquide au repos situés au **même niveau** ont la même pression (**vases communicants**) ;
- La pression ne dépend **pas de la forme** du récipient, seulement de la hauteur d'eau au-dessus du point.

> [!exemple] Château d'eau
> Le niveau de l'eau est à 25 m au-dessus d'un robinet : à débit nul, p = 1 000 × 9,81 × 25 = 245 250 Pa = **2,45 bar**.
> Au 3ᵉ étage d'un immeuble (10 m plus haut), il ne reste que 15 m d'eau au-dessus : **1,47 bar**.

## La poussée sur une paroi plane verticale
Sur une paroi verticale de largeur b retenant une hauteur d'eau h, la pression croît linéairement de 0 (surface) à ρ g h (fond) : le diagramme est un **triangle**.
$$ F = ½ × ρ × g × h² × b      (appliquée à h/3 au-dessus du fond)

!fig:hydrostatique|Diagramme triangulaire de pression sur une paroi

> [!exemple] Paroi d'une bâche à eau
> Hauteur d'eau 2 m, paroi de 3 m de long : F = 0,5 × 9 810 × 2² × 3 = **58 860 N ≈ 58,9 kN**, appliquée à 2/3 = 0,67 m du fond.
> Moment à la base de la paroi (si elle est encastrée en pied) : M = 58,9 × 0,67 = **39,2 kN·m** : c'est lui qui dimensionne le ferraillage vertical côté eau.

## La poussée sur un fond horizontal
Sur un fond horizontal, la pression est uniforme : **F = ρ × g × h × S**.
Fond de la même bâche (3 × 3 m, 2 m d'eau) : p = 19,6 kPa ; F = 19,6 × 9 = **176,6 kN**.

## Les applications au bâtiment
- **Bâches à eau, piscines, réservoirs** : parois calculées comme des consoles ou des plaques sous charge triangulaire ;
- **Murs de soutènement** avec une nappe : la poussée de l'eau s'ajoute à celle des terres (d'où les **barbacanes** et le drainage, qui évitent cette poussée) ;
- **Coffrages** : le béton frais pousse comme un liquide lourd (ρ ≈ 2 400 kg/m³) sur les banches pendant le coulage ;
- **Pression des réseaux** : hauteur des réservoirs ou des surpresseurs.

> [!retenir]
> - p = ρ g h : 0,1 bar par mètre d'eau.
> - Vases communicants : même niveau, même pression.
> - Paroi verticale : F = ½ ρ g h² b, à h/3 du fond ; fond : F = ρ g h S.
> - Drainer les murs de soutènement pour supprimer la poussée de l'eau.`,
 exercices:[
  {t:"Pression au fond d'une piscine", d:1, e:`Calculer la pression relative au fond d'une piscine de 1,8 m de profondeur, en kPa et en bar.`, c:`p = 1 000 × 9,81 × 1,8 = **17 658 Pa ≈ 17,7 kPa** = **0,177 bar**.`},
  {t:"Poussée sur la paroi d'une piscine", d:2, e:`Une piscine de 10 × 5 m a 1,5 m d'eau. Calculer la poussée sur une grande paroi (10 m) et son point d'application, puis la force sur le fond.`, c:`Paroi : F = 0,5 × 9 810 × 1,5² × 10 = **110 363 N ≈ 110,4 kN**, à 1,5/3 = **0,5 m** du fond.
Fond : F = 9 810 × 1,5 × 50 = **735 750 N ≈ 736 kN** (le sol doit les supporter sans tasser différentiellement).`},
  {t:"Pression dans un immeuble", d:1, e:`Le niveau d'eau d'un réservoir sur la toiture est à 18 m au-dessus du rez-de-chaussée. Calculer la pression statique au rez-de-chaussée et au 4ᵉ étage (12 m au-dessus du RDC).`, c:`RDC : 18 m → **1,77 bar** ; 4ᵉ étage : 18 − 12 = 6 m → **0,59 bar** : insuffisant pour un bon confort (on vise au moins 1 bar au robinet) : il faut un surpresseur pour les derniers étages.`},
  {t:"Mur de soutènement avec nappe", d:2, e:`Un mur de soutènement de 3 m retient des terres saturées d'eau sur toute sa hauteur (drainage bouché). Calculer la poussée de l'eau seule par mètre de mur et son moment au pied.`, c:`F = 0,5 × 9,81 × 3² = **44,1 kN/m**, à 1 m du pied → M = **44,1 kN·m/m**.
Cette poussée s'ajoute à celle des terres : c'est pourquoi les **barbacanes** et le **drainage** (qui suppriment la pression d'eau) sont indispensables.`},
  {t:"Poussée du béton frais sur un coffrage", d:3, e:`On coule d'un seul coup un voile de 3 m de haut et 4 m de long. On assimile le béton frais à un liquide de masse volumique 2 400 kg/m³.
a) Calculer la pression au pied et la poussée totale sur une face du coffrage.
b) Pourquoi coule-t-on souvent par couches ou avec une vitesse de montée limitée ?`, c:`a) p = 2 400 × 9,81 × 3 = **70,6 kPa** au pied ; F = 0,5 × 70,6 × 3 × 4 = **424 kN** sur la face, à 1 m du pied.
b) Le béton commence à **prendre** et à se rigidifier : en coulant par couches ou lentement, la partie basse ne pousse plus comme un liquide, ce qui réduit la poussée réelle ; les coffrages (banches, tiges) sont dimensionnés pour une vitesse de bétonnage donnée.`}
 ],
 quiz:[
  {q:"La pression augmente dans l'eau d'environ :", o:["0,1 bar par mètre","1 bar par mètre","0,01 bar par mètre","10 bar par mètre"], r:0, e:"9,81 kPa/m."},
  {q:"La poussée sur une paroi verticale est appliquée :", o:["À h/3 au-dessus du fond","À mi-hauteur","À la surface","Au fond"], r:0, e:"Diagramme triangulaire."},
  {q:"La pression au fond d'un récipient dépend :", o:["De la hauteur d'eau seulement","De la forme du récipient","Du volume total","De la largeur"], r:0, e:"Paradoxe hydrostatique."},
  {q:"Poussée de l'eau sur 1 m de paroi pour 2 m d'eau :", o:["≈ 19,6 kN","≈ 39 kN","≈ 9,8 kN","≈ 4,9 kN"], r:0, e:"0,5 × 9,81 × 4."},
  {q:"Les barbacanes d'un mur de soutènement servent à :", o:["Évacuer l'eau et supprimer sa poussée","Décorer","Alléger le mur","Ancrer le mur"], r:0, e:"Drainage."}
 ]},

{id:"mdf-10", niv:1, titre:"Poussée d'Archimède, flottaison et sous-pressions", duree:40, contenu:`## Le principe d'Archimède
Tout corps plongé dans un liquide subit une force verticale **vers le haut** égale au **poids du liquide déplacé** :
$$ F(A) = ρ(liquide) × g × V(immergé)
Elle résulte des pressions sur la face inférieure, plus fortes que sur la face supérieure.
- Si le poids du corps est **supérieur** à F(A) : il coule ;
- S'il est **inférieur** : il remonte et **flotte**, en s'enfonçant jusqu'à ce que la poussée égale son poids.

## Les sous-pressions sous les ouvrages
Un ouvrage dont le fond est sous le niveau de la **nappe phréatique** subit sous son radier une pression d'eau :
$$ u = ρ × g × h(w)     (h(w) : hauteur de nappe au-dessus du dessous du radier)
La force totale vaut u × S. Elle soulage les fondations quand l'ouvrage est lourd, mais elle peut **soulever** un ouvrage léger ou vide :
- cuves, bâches et fosses enterrées vides ;
- piscines vidées en saison des pluies ;
- sous-sols et parkings enterrés en cours de construction (avant que la structure soit assez lourde) ;
- radiers de stations de pompage.

> [!exemple] Sous-sol en construction
> Radier de 20 × 15 m ; la nappe remonte à 2 m au-dessus du dessous du radier.
> u = 9,81 × 2 = 19,6 kPa → F = 19,6 × 300 = **5 886 kN** (environ 600 t).
> Tant que la structure (radier, voiles, planchers) pèse moins que cela, avec une marge, il faut **rabattre la nappe** (pompage) ou **lester**. Ensuite, le radier doit aussi résister en **flexion** à cette pression dirigée vers le haut.

## Vérifier la stabilité au soulèvement
On compare le poids **minimal** de l'ouvrage (vide, sans charges d'exploitation) à la sous-pression maximale, avec un coefficient de sécurité (souvent ≥ 1,1 à 1,2) :
$$ G(min) ≥ 1,1 × u × S
Solutions : épaissir le radier, créer des **débords** de radier chargés par les terres, ancrer par **tirants** ou **pieux**, ou drainer en permanence (avec des risques en cas de panne).

## La flottaison
Un corps flotte en s'enfonçant d'un volume tel que ρ(liquide) × V(immergé) = masse du corps. Applications : **robinets à flotteur** des réservoirs et des chasses d'eau, bouées, pontons, caissons flottants pour les ouvrages en mer.

> [!retenir]
> - F(A) = ρ g V(immergé), verticale vers le haut.
> - Sous-pression u = ρ g h(w) sous le radier ; force u × S.
> - Ouvrages enterrés vides : vérifier G(min) ≥ 1,1 u S ; lester, ancrer ou drainer.
> - Le radier doit aussi résister en flexion à la sous-pression.`,
 exercices:[
  {t:"Poussée sur une cuve", d:1, e:`Une cuve enterrée de 2 × 2 × 1,5 m (dimensions extérieures) est entièrement dans la nappe. Elle pèse 3 t à vide. Se soulève-t-elle ?`, c:`F(A) = 9,81 × (2 × 2 × 1,5) = **58,9 kN** ; poids = 3 × 9,81 = **29,4 kN** < 58,9 kN → **oui**, elle se soulève vide. Il faut un lest d'environ 1,1 × 58,9 − 29,4 = 35,4 kN (3,6 t) ou un ancrage.`},
  {t:"Sous-pression d'un sous-sol", d:2, e:`Un parking enterré a un radier de 25 × 18 m. La nappe peut monter à 2,5 m au-dessus du dessous du radier. Calculer la sous-pression et la force totale. Quel poids minimal doit avoir l'ouvrage (coefficient 1,1) ?`, c:`u = 9,81 × 2,5 = **24,5 kPa** ; F = 24,5 × 450 = **11 036 kN**.
Poids minimal : 1,1 × 11 036 = **12 140 kN** (≈ 1 240 t) : à vérifier en phase chantier, avant la construction des étages.`},
  {t:"Flexion du radier", d:2, e:`Le radier précédent est porté par des voiles espacés de 6 m. Sous la sous-pression (24,5 kPa) diminuée de son poids propre (radier de 40 cm : 10 kPa), quelle charge nette vers le haut le radier doit-il reprendre ? Quel moment approximatif dans une bande de 1 m (pL²/10) ?`, c:`Charge nette vers le haut : 24,5 − 10 = **14,5 kN/m²**.
M ≈ 14,5 × 6²/10 = **52,2 kN·m/m** : le radier est armé **en partie haute** au milieu des travées (inversion par rapport à un plancher).`},
  {t:"Robinet à flotteur", d:1, e:`Le flotteur d'un réservoir est une sphère creuse de 15 cm de diamètre pesant 0,3 kg. Quelle force maximale peut-il exercer vers le haut sur la tige du robinet quand il est totalement immergé ?`, c:`V = π × 0,15³/6 = **0,001 77 m³** → F(A) = 1 000 × 9,81 × 0,00177 = **17,3 N** ; poids = 2,9 N.
Force nette : 17,3 − 2,9 = **14,4 N**, transmise (et amplifiée par le levier) pour fermer l'arrivée d'eau.`},
  {t:"Piscine vidée en saison des pluies", d:3, e:`Une piscine de 10 × 5 m, à fond de 1,8 m sous le terrain, pèse 60 t (vide). En saison des pluies, la nappe monte à 1,2 m sous le terrain. On veut la vider pour entretien. Quel est le risque et comment l'éviter ?`, c:`Hauteur de nappe au-dessus du fond (on néglige l'épaisseur du radier) : 1,8 − 1,2 = **0,6 m** → u = 5,9 kPa → F = 5,9 × 50 = **294 kN** (30 t) < 60 t : pas de soulèvement d'ensemble ici, mais si la nappe montait jusqu'à 0,5 m sous le terrain (u = 12,8 kPa → 638 kN = 65 t), la piscine vide pourrait se soulever ou se fissurer.
Précautions : vider en **saison sèche**, ou installer un **clapet de décompression** au fond (qui laisse entrer l'eau de la nappe) ou un **puits de rabattement** à pomper pendant la vidange.`}
 ],
 quiz:[
  {q:"La poussée d'Archimède est égale :", o:["Au poids du liquide déplacé","Au poids du corps","À la masse du liquide","À la pression atmosphérique"], r:0, e:"Principe d'Archimède."},
  {q:"Sous-pression sous un radier situé 3 m sous la nappe :", o:["≈ 29,4 kPa","≈ 3 kPa","≈ 300 kPa","0"], r:0, e:"9,81 × 3."},
  {q:"Un ouvrage enterré est le plus menacé de soulèvement :", o:["Quand il est vide et que la nappe est haute","Quand il est plein","En saison sèche","Jamais"], r:0, e:"Poids minimal, poussée maximale."},
  {q:"Sous la sous-pression, un radier fléchit :", o:["Vers le haut entre les appuis","Vers le bas","Il ne fléchit pas","Latéralement"], r:0, e:"Armatures en partie haute en travée."},
  {q:"Pour éviter le soulèvement on peut :", o:["Lester, ancrer ou drainer","Vider l'ouvrage","Peindre le radier","Augmenter la nappe"], r:0, e:"Augmenter G ou réduire u."}
 ]},

{id:"mdf-11", niv:1, titre:"Débits et vitesses d'écoulement", duree:40, contenu:`## Le débit
Le **débit volumique** Q est le volume de fluide qui traverse une section par unité de temps :
$$ Q = V / t     (m³/s, L/s, m³/h)
1 L/s = 3,6 m³/h. On mesure simplement le débit d'un robinet avec un seau et un chronomètre : 10 L en 25 s → Q = **0,4 L/s** = 1,44 m³/h.

## Débit et vitesse
Dans une conduite de section S où l'eau circule à la vitesse moyenne v :
$$ Q = S × v      avec S = π D²/4
> [!exemple] Vitesse dans les tubes d'une maison
> Q = 0,4 L/s = 0,0004 m³/s.
> | Diamètre intérieur | Section | Vitesse |
> |---|---|---|
> | 16 mm | 2,01 cm² | 1,99 m/s |
> | 20,4 mm | 3,27 cm² | 1,22 m/s |
> | 26 mm | 5,31 cm² | 0,75 m/s |
> Dans les réseaux intérieurs, on limite la vitesse à environ **1,5 à 2 m/s** (bruit, usure, coups de bélier).

## La conservation du débit (continuité)
L'eau étant incompressible, le **même débit** traverse toutes les sections d'une conduite sans dérivation :
$$ S₁ × v₁ = S₂ × v₂
Si le diamètre est divisé par 2, la section est divisée par 4 et la vitesse **multipliée par 4**. À un **branchement** (té), le débit se partage : Q = Q₁ + Q₂.

## Les débits des appareils sanitaires
| Appareil | Débit de base |
|---|---|
| Lavabo, évier, douche | 0,20 L/s |
| Baignoire | 0,33 L/s |
| WC à réservoir | 0,12 L/s |
| Machine à laver | 0,20 L/s |
| Robinet de jardin | 0,33 L/s |
Tous les appareils ne fonctionnent pas en même temps : on applique un **coefficient de simultanéité** (règle courante pour un logement) :
$$ y = 0,8 / √(n − 1)     (n : nombre d'appareils, n ≥ 2)
> [!exemple] Maison de 8 appareils
> Somme des débits de base : 1,57 L/s ; y = 0,8/√7 = 0,30 → débit probable : 1,57 × 0,30 = **0,47 L/s**.

## Application : choisir le diamètre d'un tube
Débit probable de la maison : 0,47 L/s ; vitesse limitée à 1,5 m/s.
1. Section minimale : S = Q / v = 0,000 47 / 1,5 = **3,13 × 10⁻⁴ m²** (3,13 cm²) ;
2. Diamètre intérieur minimal : D = √(4 S / π) = **20,0 mm** ;
3. On choisit le tube de diamètre intérieur immédiatement supérieur : **20,4 mm** (tube PER 25 × 2,3) ;
4. Vérification : v = 0,000 47 / 3,27 × 10⁻⁴ = **1,44 m/s** ≤ 1,5 m/s ✔.

> [!exemple] Temps de remplissage d'une citerne
> Citerne de 1 000 L alimentée à 0,4 L/s.
> Durée : 1 000 / 0,4 = 2 500 s ≈ **42 min**.

> [!exemple] Réduction de diamètre
> Un tuyau de 50 mm où l'eau circule à 1 m/s se réduit à 25 mm.
> La section est divisée par 4 : v₂ = 4 × 1 = **4 m/s** (trop rapide pour un réseau intérieur).

> [!exemple] Débit d'un caniveau
> Caniveau rectangulaire de 30 cm de large, 10 cm d'eau, vitesse 1,2 m/s.
> Q = (0,30 × 0,10) × 1,2 = 0,036 m³/s = **36 L/s**.

## Méthode
1. Convertir le débit en m³/s et les diamètres en m ;
2. Utiliser le diamètre **intérieur** (le diamètre nominal d'un tube plastique est souvent le diamètre extérieur) ;
3. Appliquer Q = S v dans le sens demandé (vitesse, débit ou diamètre) ;
4. Comparer à la vitesse admissible et choisir le diamètre commercial supérieur.

> [!attention] Erreurs fréquentes
> - Oublier de convertir les mm en m (16 mm = 0,016 m) ou les L/s en m³/s.
> - Prendre le diamètre extérieur d'un tube PER ou PVC.
> - Additionner les débits de tous les appareils sans coefficient de simultanéité.

> [!retenir]
> - Q = V/t = S × v ; 1 L/s = 3,6 m³/h.
> - Continuité : S₁ v₁ = S₂ v₂ ; aux branchements Q = Σ Qᵢ.
> - Vitesse dans les réseaux intérieurs : 1,5 à 2 m/s au plus.
> - Débit probable = Σ débits de base × y, y = 0,8/√(n − 1).`,
 exercices:[
  {t:"Mesurer un débit", d:1, e:`Une douche remplit un seau de 12 L en 40 s. Calculer le débit en L/s et en m³/h, puis le volume consommé par une douche de 6 minutes.`, c:`Q = 12/40 = **0,3 L/s** = 0,3 × 3,6 = **1,08 m³/h**.
Volume : 0,3 × 360 = **108 L** : un pommeau économe (0,15 L/s) diviserait la consommation par deux.`},
  {t:"Vitesse dans une conduite", d:1, e:`Un débit de 2 L/s circule dans une conduite de 50 mm de diamètre intérieur. Calculer la vitesse.`, c:`S = π × 0,05²/4 = **1,96 × 10⁻³ m²** → v = 0,002/0,00196 = **1,02 m/s**.`},
  {t:"Réduction de diamètre", d:1, e:`L'eau circule à 1 m/s dans un tube de 40 mm qui se réduit à 20 mm. Quelle est la vitesse dans la partie étroite ?`, c:`v₂ = v₁ × (D₁/D₂)² = 1 × (40/20)² = **4 m/s** : trop rapide pour un réseau intérieur (bruit, usure).`},
  {t:"Débit probable d'un appartement", d:2, e:`Un appartement comprend : 2 lavabos, 1 évier, 1 douche, 1 baignoire, 2 WC, 1 machine à laver.
Calculer la somme des débits de base, le coefficient de simultanéité et le débit probable.`, c:`Σ = 2 × 0,20 + 0,20 + 0,20 + 0,33 + 2 × 0,12 + 0,20 = **1,57 L/s** ; n = 8 → y = 0,8/√7 = **0,30**.
Débit probable : 1,57 × 0,30 = **0,47 L/s**.`},
  {t:"Choisir un diamètre", d:2, e:`On veut faire passer 0,47 L/s avec une vitesse d'au plus 1,5 m/s. Quel diamètre intérieur minimal faut-il ? Choisir parmi 16 ; 20,4 ; 26 mm.`, c:`S ≥ Q/v = 0,00047/1,5 = **3,13 × 10⁻⁴ m²** → D ≥ √(4 S/π) = **20 mm**.
Le diamètre intérieur de **20,4 mm** convient juste (v = 1,44 m/s) ; on prend **26 mm** pour l'alimentation générale si la longueur est grande (moins de pertes de charge, voir chapitre Pertes de charge).`}
 ],
 quiz:[
  {q:"1 L/s correspond à :", o:["3,6 m³/h","1 m³/h","36 m³/h","0,36 m³/h"], r:0, e:"3 600 L par heure."},
  {q:"Si le diamètre d'une conduite est divisé par 2, la vitesse :", o:["Est multipliée par 4","Est multipliée par 2","Est divisée par 2","Ne change pas"], r:0, e:"Section divisée par 4."},
  {q:"Débit = ", o:["Section × vitesse","Pression × section","Vitesse/section","Volume × temps"], r:0, e:"Q = S v."},
  {q:"Vitesse maximale conseillée dans un réseau intérieur :", o:["1,5 à 2 m/s","10 m/s","0,01 m/s","20 m/s"], r:0, e:"Bruit et usure."},
  {q:"Le coefficient de simultanéité tient compte :", o:["Du fait que tous les appareils ne fonctionnent pas ensemble","De la pression","De la température","Du diamètre"], r:0, e:"y = 0,8/√(n − 1)."}
 ]},

{id:"mdf-6", niv:1, titre:"L'eau dans la maison : alimentation, évacuation et règles simples", duree:45, contenu:`## L'alimentation en eau potable
Depuis le **compteur** du distributeur (ou un forage, une citerne), l'eau est conduite vers les appareils :
1. **Robinet d'arrêt** général et compteur, souvent un **réducteur de pression** si le réseau dépasse 3 bar ;
2. Une **nourrice** (collecteur) ou une distribution en ramifications ;
3. Des **robinets d'arrêt** par pièce ou par appareil, pour réparer sans tout couper.
Pression de confort au robinet : **1 à 3 bar** (en dessous, débit faible ; au-dessus, bruit, usure, risques de fuite).

## Les matériaux des canalisations
| Matériau | Usage |
|---|---|
| PVC pression | Alimentation enterrée, réseaux extérieurs |
| PE (polyéthylène) | Branchements, réseaux enterrés, souple |
| PPR (polypropylène soudé) | Réseaux intérieurs eau froide et chaude |
| PER, multicouche | Distribution intérieure en pieuvre |
| Cuivre, acier galvanisé | Installations anciennes ou techniques |
Les canalisations d'eau potable ne doivent pas passer dans les regards d'eaux usées, et il ne doit jamais y avoir de **retour d'eau** d'un réseau non potable (forage, récupération d'eau de pluie) vers le réseau public.

## Les réserves d'eau
En Côte d'Ivoire, les coupures fréquentes conduisent à installer des **bâches** (au sol ou enterrées) avec **surpresseur**, ou des **réservoirs en hauteur** (château d'eau individuel, citerne en toiture). Une consommation urbaine courante est de **80 à 150 L par personne et par jour** ; une réserve de 1 à 2 jours est souvent prévue.

## L'évacuation des eaux usées et des eaux vannes
- **Eaux usées** (EU) : lavabos, douches, éviers, machines ;
- **Eaux vannes** (EV) : WC ;
- **Eaux pluviales** (EP) : toitures, cours (réseau séparé de préférence).
Règles :
| Appareil | Diamètre d'évacuation courant |
|---|---|
| Lavabo, bidet | 32 mm |
| Évier, douche, baignoire, machine | 40 mm |
| WC | 100 mm (90 mm minimum) |
| Chute (colonne verticale) | 100 mm |
- Chaque appareil a un **siphon** (garde d'eau de 50 mm) qui bloque les odeurs ;
- Les canalisations horizontales ont une **pente de 1 à 3 cm par mètre** ;
- La chute est **ventilée** en toiture (ventilation primaire) pour éviter le désamorçage des siphons ;
- Des **regards** permettent le curage aux changements de direction et aux jonctions.

> [!retenir]
> - Pression au robinet : 1 à 3 bar ; robinets d'arrêt par pièce.
> - Pas de retour d'eau non potable vers le réseau public.
> - Consommation urbaine : 80 à 150 L/personne/jour.
> - Évacuations : lavabo 32, douche/évier 40, WC 100 mm ; pente 1 à 3 % ; siphons et ventilation.`,
 exercices:[
  {t:"Volume d'une bâche", d:1, e:`Une famille de 6 personnes consomme 120 L par personne et par jour. Quel volume de bâche faut-il pour 2 jours d'autonomie ?`, c:`Consommation : 6 × 120 = **720 L/jour** → 2 jours : **1 440 L** → on choisit une bâche de **1,5 à 2 m³**.`},
  {t:"Pression trop forte", d:1, e:`Le réseau public arrive à 5 bar chez un client. Quels problèmes cela peut-il causer ? Que poser ?`, c:`Bruits dans les canalisations, coups de bélier, usure des robinets et des chasses d'eau, fuites, surconsommation.
Poser un **réducteur de pression** après le compteur, réglé vers **2,5 à 3 bar**.`},
  {t:"Diamètres d'évacuation", d:1, e:`Donner le diamètre d'évacuation pour : une douche, un lavabo, un WC, la chute d'un immeuble de 4 niveaux.`, c:`Douche : **40 mm** ; lavabo : **32 mm** ; WC : **100 mm** ; chute : **100 mm** (on vérifie le nombre d'appareils raccordés pour les grands immeubles).`},
  {t:"Pente d'un collecteur", d:2, e:`Un collecteur de cuisine de 6 m de long doit avoir une pente de 2 %. Quelle différence de niveau entre ses extrémités ? Que se passe-t-il si la pente est trop faible ? Trop forte ?`, c:`Δh = 0,02 × 6 = **12 cm**.
Trop faible : l'eau stagne, les **graisses et dépôts** s'accumulent, bouchons et odeurs.
Trop forte (au-delà de 10 % environ pour les petits diamètres) : l'eau file et laisse les **matières solides** en arrière.`},
  {t:"Odeurs dans une salle de bains", d:2, e:`Des odeurs d'égout apparaissent dans une salle de bains quand on vide la baignoire de l'étage supérieur. Expliquer le phénomène et la solution.`, c:`L'écoulement dans la chute crée une **dépression** qui **aspire la garde d'eau** des siphons (désamorçage) : les gaz de l'égout remontent.
Solution : vérifier que la chute est **ventilée en toiture** (ventilation primaire non bouchée, de même diamètre que la chute) ; ajouter si besoin un **clapet aérateur** sur le branchement ; respecter les longueurs et pentes des branchements.`}
 ],
 quiz:[
  {q:"Pression de confort au robinet :", o:["1 à 3 bar","0,1 bar","10 bar","50 bar"], r:0, e:"Au-delà, réducteur de pression."},
  {q:"Diamètre d'évacuation d'un WC :", o:["100 mm","32 mm","20 mm","200 mm"], r:0, e:"90 mm minimum."},
  {q:"Le siphon sert à :", o:["Empêcher les odeurs de remonter","Augmenter le débit","Filtrer l'eau","Réduire la pression"], r:0, e:"Garde d'eau."},
  {q:"Pente courante des canalisations d'évacuation horizontales :", o:["1 à 3 %","10 à 20 %","0 %","50 %"], r:0, e:"Écoulement sans dépôt."},
  {q:"La ventilation primaire d'une chute :", o:["Évite le désamorçage des siphons","Apporte de l'eau","Refroidit l'eau","Est inutile"], r:0, e:"Équilibre des pressions."}
 ]},

/* ========================== INTERMÉDIAIRE ========================== */
{id:"mdf-3", niv:2, titre:"Le théorème de Bernoulli et ses applications", duree:50, contenu:`## La charge hydraulique
En un point d'un écoulement, l'énergie d'un kilogramme d'eau, exprimée en **mètres de colonne d'eau**, est la **charge** :
$$ H = z + p/(ρ g) + v²/(2 g)
- z : **cote** du point (énergie de position) ;
- p/(ρ g) : **hauteur de pression** ;
- v²/(2 g) : **hauteur de vitesse** (souvent faible : 0,05 m pour 1 m/s).

## Le théorème de Bernoulli
Pour un fluide parfait (sans frottement), la charge se **conserve** le long d'une ligne de courant :
$$ z₁ + p₁/(ρ g) + v₁²/(2 g) = z₂ + p₂/(ρ g) + v₂²/(2 g)
Pour un fluide réel, il faut ajouter les **pertes de charge** ΔH (énergie perdue par frottement, voir chapitre suivant) :
$$ H₁ = H₂ + ΔH(1→2)

!fig:bernoulli|Là où la vitesse augmente, la pression baisse

## Les applications
**Pression dans un réseau alimenté par un réservoir**
> [!exemple] Robinet au 3ᵉ étage
> Niveau d'eau du château d'eau : z₁ = 30 m (p₁ = 0, v₁ ≈ 0). Robinet : z₂ = 10 m, v₂ = 1 m/s ; pertes de charge entre les deux : 2 m.
> p₂/(ρ g) = 30 − 10 − 0,05 − 2 = **17,95 m** → p₂ = **1,76 bar**.

**Vidange d'un réservoir (formule de Torricelli)**
Par un orifice situé à h sous la surface libre : v = √(2 g h). Le débit réel tient compte de la contraction du jet : Q = Cd × S × √(2 g h) avec Cd ≈ 0,6.
> [!exemple] Orifice de 2 cm à 2 m sous la surface
> v = √(2 × 9,81 × 2) = 6,26 m/s ; Q = 0,62 × 3,14 × 10⁻⁴ × 6,26 = **1,22 L/s**.

**Le venturi** : dans un rétrécissement, la vitesse augmente et la pression **diminue** : la mesure de cette différence de pression donne le débit (débitmètres, injecteurs, trompes à vide).

**Le jet d'eau** : un jet vertical de vitesse v monte à h = v²/(2 g) (8 m/s → 3,3 m) ; c'est ainsi qu'on vérifie la pression d'une lance d'incendie.

**Le siphon** : un tuyau rempli d'eau peut vider un bassin par-dessus un bord, à condition que la sortie soit plus basse que la surface libre et que le point haut ne dépasse pas 7 à 8 m au-dessus de cette surface (sinon l'eau « décroche » par dépression).

> [!retenir]
> - H = z + p/(ρg) + v²/(2g) (en mètres).
> - Fluide réel : H₁ = H₂ + ΔH.
> - Torricelli : v = √(2gh) ; Q = Cd S √(2gh), Cd ≈ 0,6.
> - Venturi : la pression baisse là où la vitesse augmente.`,
 exercices:[
  {t:"Pression à un robinet", d:1, e:`Un réservoir a son niveau d'eau à 22 m au-dessus du sol. Un robinet est à 4 m au-dessus du sol. À débit nul, quelle pression lit-on ? Avec un débit (v = 1,2 m/s) et 1,5 m de pertes de charge ?`, c:`Débit nul : p/(ρg) = 22 − 4 = **18 m** → **1,77 bar**.
Avec débit : 22 − 4 − 1,2²/(2 × 9,81) − 1,5 = 22 − 4 − 0,07 − 1,5 = **16,43 m** → **1,61 bar**.`},
  {t:"Vidange d'une cuve", d:1, e:`Une cuve de chantier a un robinet de vidange de 25 mm de diamètre à 1,5 m sous la surface. Calculer la vitesse théorique et le débit (Cd = 0,62).`, c:`v = √(2 × 9,81 × 1,5) = **5,42 m/s** ; S = π × 0,025²/4 = 4,91 × 10⁻⁴ m².
Q = 0,62 × 4,91 × 10⁻⁴ × 5,42 = **1,65 × 10⁻³ m³/s ≈ 1,65 L/s** (le débit diminue ensuite quand le niveau baisse).`},
  {t:"Débitmètre venturi", d:2, e:`Un venturi passe de 100 mm à 50 mm de diamètre ; on mesure une différence de pression de 0,15 bar entre l'entrée et le col. Calculer la vitesse au col et le débit (fluide parfait, même cote).`, c:`Continuité : v₁ = v₂ × (50/100)² = v₂/4.
Bernoulli : Δp/ρ = (v₂² − v₁²)/2 = v₂² (1 − 1/16)/2 → 15 000/1 000 = 0,469 v₂² → v₂ = **5,66 m/s**.
Q = π × 0,05²/4 × 5,66 = **11,1 L/s**.`},
  {t:"Hauteur d'un jet", d:1, e:`Une lance d'incendie projette l'eau verticalement à 8 m/s à la sortie. Quelle hauteur atteint le jet (sans frottement) ? Quelle pression faut-il juste avant l'embout (vitesse négligeable en amont) ?`, c:`h = v²/(2g) = 64/19,62 = **3,26 m**.
Pression nécessaire : p = ρ v²/2 = 1 000 × 64/2 = **32 000 Pa = 0,32 bar** (sans pertes dans l'embout).`},
  {t:"Vider une fouille par siphon", d:3, e:`On vide une fouille inondée avec un tuyau de 50 mm utilisé en siphon : la sortie est 3 m sous le niveau de l'eau de la fouille ; le point haut du tuyau est 1,5 m au-dessus de ce niveau.
a) Calculer la vitesse et le débit théoriques. b) Quelle est la pression au point haut (vitesse du tuyau) ? Le siphon fonctionne-t-il ?`, c:`a) v = √(2 × 9,81 × 3) = **7,67 m/s** (théorique, les pertes la réduisent nettement) ; Q = 1,96 × 10⁻³ × 7,67 = **15 L/s** au plus.
b) Au point haut : p/(ρg) = 0 − 1,5 − 7,67²/19,62 = − 1,5 − 3,0 = **− 4,5 m** (dépression de 0,44 bar) : supérieure à la limite d'environ − 8 m, le siphon **fonctionne**.`}
 ],
 quiz:[
  {q:"La charge hydraulique comprend :", o:["Cote, hauteur de pression, hauteur de vitesse","Seulement la pression","Seulement la vitesse","Le débit et la section"], r:0, e:"H = z + p/ρg + v²/2g."},
  {q:"Dans un rétrécissement, la pression :", o:["Diminue","Augmente","Reste égale","S'annule toujours"], r:0, e:"La vitesse augmente."},
  {q:"Formule de Torricelli :", o:["v = √(2 g h)","v = 2 g h","v = g h²","v = h/g"], r:0, e:"Vidange d'un réservoir."},
  {q:"Hauteur de vitesse pour v = 1 m/s :", o:["≈ 0,05 m","≈ 1 m","≈ 0,5 m","≈ 10 m"], r:0, e:"1/19,62."},
  {q:"Pour un fluide réel, on ajoute à Bernoulli :", o:["Les pertes de charge","La poussée d'Archimède","La viscosité seulement","Rien"], r:0, e:"Énergie perdue par frottement."}
 ]},

{id:"mdf-12", niv:2, titre:"Régimes d'écoulement : nombre de Reynolds et rugosité", duree:40, contenu:`## Laminaire ou turbulent ?
- En écoulement **laminaire**, les filets de fluide glissent régulièrement les uns sur les autres (écoulement lent, fluide visqueux, petit diamètre) ;
- En écoulement **turbulent**, des tourbillons mélangent le fluide (cas presque général de l'eau dans les réseaux du bâtiment).

## Le nombre de Reynolds
$$ Re = v × D / ν      (sans unité ; ν = 10⁻⁶ m²/s pour l'eau à 20 °C)
| Re | Régime |
|---|---|
| < 2 000 | Laminaire |
| 2 000 à 4 000 | Transition |
| > 4 000 | Turbulent |
> [!exemple] Eau dans un tube de 26 mm à 1 m/s
> Re = 1 × 0,026/10⁻⁶ = **26 000** → turbulent. Il faudrait une vitesse inférieure à 8 cm/s pour rester laminaire : en plomberie, l'écoulement est toujours turbulent.

## La rugosité
Les parois ne sont pas parfaitement lisses. On caractérise leur **rugosité** ε (hauteur moyenne des aspérités) :
| Matériau | ε (mm) |
|---|---|
| PVC, PE, PPR, cuivre | 0,001 à 0,007 (lisses) |
| Acier neuf | 0,05 |
| Fonte | 0,25 |
| Acier galvanisé ancien, entartré | 0,5 à 3 |
| Béton | 0,3 à 3 |
La **rugosité relative** ε/D compare les aspérités au diamètre.

## Le coefficient de perte de charge λ
Il dépend de Re et de ε/D (diagramme de Moody, formule de Colebrook). Valeurs utiles :
- **Laminaire** : λ = 64/Re ;
- **Turbulent, tube lisse** (formule de Blasius, Re < 100 000) : **λ = 0,316 × Re^(− 0,25)** ;
- En pratique, pour l'eau dans les réseaux de bâtiment : **λ ≈ 0,02 à 0,03**.
> [!exemple] Valeurs de λ
> Tube lisse, Re = 26 000 : λ = 0,316 × 26 000^(− 0,25) = **0,025**.
> Acier de 100 mm à Re = 100 000 : λ ≈ 0,020 ; béton de 300 mm (ε = 1 mm) à Re = 300 000 : λ ≈ 0,028.

## Conséquences pratiques
- Les tubes **lisses** (plastiques) perdent moins de charge que l'acier galvanisé, qui s'**entartre** et se **corrode** avec le temps (sa rugosité augmente, son diamètre utile diminue) ;
- Un réseau ancien en acier galvanisé peut perdre la moitié de son débit : c'est souvent la cause des « robinets qui coulent mal » dans les vieux immeubles.

> [!retenir]
> - Re = v D/ν ; laminaire < 2 000 ; turbulent > 4 000 (cas des réseaux d'eau).
> - λ = 64/Re (laminaire) ; λ = 0,316 Re^(−0,25) (turbulent lisse) ; λ ≈ 0,02 à 0,03 en pratique.
> - Rugosité : plastiques lisses ; acier galvanisé qui s'entartre.`,
 exercices:[
  {t:"Calculer Re", d:1, e:`De l'eau (ν = 10⁻⁶ m²/s) circule à 1,02 m/s dans une conduite de 50 mm. Calculer Re et le régime.`, c:`Re = 1,02 × 0,05/10⁻⁶ = **51 000** → **turbulent**.`},
  {t:"Vitesse limite du laminaire", d:1, e:`Dans un tube de 20 mm, en dessous de quelle vitesse l'écoulement de l'eau est-il laminaire (Re < 2 000) ?`, c:`v < 2 000 × 10⁻⁶/0,02 = **0,1 m/s** : en plomberie, on est presque toujours en turbulent.`},
  {t:"Coefficient de Blasius", d:2, e:`Calculer λ par la formule de Blasius pour Re = 51 000, puis pour Re = 24 900.`, c:`Re = 51 000 : λ = 0,316 × 51 000^(− 0,25) = 0,316/15,03 = **0,021**.
Re = 24 900 : λ = 0,316/12,56 = **0,025**.`},
  {t:"Écoulement d'une huile", d:2, e:`Une huile de décoffrage (ν = 10⁻⁴ m²/s) circule à 0,5 m/s dans un tuyau de 20 mm. Calculer Re et λ.`, c:`Re = 0,5 × 0,02/10⁻⁴ = **100** → **laminaire** ; λ = 64/100 = **0,64** : les fluides visqueux perdent beaucoup plus de charge.`},
  {t:"Vieux réseau en acier galvanisé", d:3, e:`Dans un vieil immeuble, une colonne en acier galvanisé de 40 mm est entartrée : son diamètre utile n'est plus que de 30 mm et sa rugosité a fortement augmenté. Expliquer pourquoi le débit aux étages a beaucoup baissé, et proposer une solution.`, c:`Pour un même débit, la vitesse augmente comme 1/D² ((40/30)² = 1,78 fois plus) et les pertes de charge, proportionnelles à λ v²/D, augmentent encore plus (λ plus grand, D plus petit) : environ **6 à 8 fois plus** de pertes. La pression disponible s'épuise et les débits chutent.
Solution : **remplacer** la colonne par un tube plastique (PPR, PE) de diamètre suffisant ; à défaut, un détartrage n'est qu'un palliatif.`}
 ],
 quiz:[
  {q:"Le nombre de Reynolds vaut :", o:["v D/ν","ν/(v D)","v ν/D","D/v"], r:0, e:"Sans unité."},
  {q:"L'écoulement de l'eau dans les réseaux du bâtiment est en général :", o:["Turbulent","Laminaire","Immobile","Supersonique"], r:0, e:"Re de plusieurs dizaines de milliers."},
  {q:"En laminaire, λ =", o:["64/Re","0,316 Re^−0,25","0,02","Re/64"], r:0, e:"Loi de Poiseuille."},
  {q:"Les tubes plastiques sont :", o:["Hydrauliquement lisses","Très rugueux","Plus rugueux que le béton","Sans pertes de charge"], r:0, e:"ε ≈ 0,007 mm."},
  {q:"Valeur courante de λ pour l'eau en réseau :", o:["0,02 à 0,03","2 à 3","0,0001","64"], r:0, e:"Ordre de grandeur."}
 ]},

{id:"mdf-4", niv:2, titre:"Pertes de charge et dimensionnement des réseaux d'eau potable", duree:55, contenu:`## Les pertes de charge linéaires
Le long d'une conduite, le frottement dissipe de l'énergie (formule de Darcy-Weisbach) :
$$ ΔH(lin) = λ × (L / D) × v² / (2 g)     (en mètres)
À débit constant, la perte de charge varie environ comme **1/D⁵** : un petit diamètre coûte très cher en pression.

## Les pertes de charge singulières
Chaque accessoire (coude, té, vanne, clapet, compteur, robinet) crée une perte localisée :
$$ ΔH(sing) = K × v² / (2 g)
| Accessoire | K (ordre de grandeur) |
|---|---|
| Coude à 90° | 0,3 à 0,5 |
| Té (passage dérivé) | 1 à 1,5 |
| Vanne ouverte | 0,2 |
| Clapet anti-retour | 2 à 3 |
| Robinet de puisage | 2 à 5 |
Faute de détail, on majore souvent les pertes linéaires de **10 à 20 %**.

## Vérifier la pression au point le plus défavorable
On applique Bernoulli entre le compteur (ou le réservoir) et l'appareil le plus défavorable (le plus haut et le plus éloigné) :
$$ p(compteur)/(ρ g) = Δz + ΔH(totale) + p(robinet)/(ρ g)     (+ v²/2g, négligeable)
On exige en général **au moins 1 bar** (≈ 10 m) à l'appareil le plus défavorable.

> [!exemple] Douche à l'étage d'une villa
> Débit 0,3 L/s ; longueur 25 m ; diamètre intérieur 20 mm ; dénivelé 6 m.
> v = 0,0003/(π × 0,02²/4) = **0,95 m/s** ; Re = 19 100 → λ = 0,316 × 19 100^(− 0,25) = **0,027**.
> ΔH(lin) = 0,027 × (25/0,02) × 0,95²/19,62 = **1,56 m** ; + 20 % de singulières → **1,87 m**.
> Pression nécessaire au compteur : 10,2 (1 bar à la douche) + 6 + 1,87 = **18,1 m ≈ 1,8 bar**.
> Avec un diamètre de 26 mm, les pertes tombent à 0,45 m (+ 20 % = 0,54 m) : plus de marge.

## La démarche de dimensionnement
1. Calculer les **débits probables** de chaque tronçon (débits de base × simultanéité) ;
2. Choisir les **diamètres** pour une vitesse de **1 à 1,5 m/s** (2 m/s au plus) ;
3. Calculer les **pertes de charge** jusqu'au point le plus défavorable ;
4. Vérifier la **pression** disponible ; sinon augmenter les diamètres ou installer un **surpresseur**.

> [!retenir]
> - ΔH(lin) = λ (L/D) v²/2g ; ΔH(sing) = K v²/2g (ou + 10 à 20 %).
> - ΔH ≈ proportionnelle à 1/D⁵ à débit donné.
> - Pression au compteur = Δz + ΔH + pression voulue au robinet (≥ 1 bar).
> - Vitesses de 1 à 1,5 m/s pour dimensionner.`,
 exercices:[
  {t:"Perte de charge linéaire", d:1, e:`Une conduite de 50 mm de diamètre et de 100 m de long transporte 3 L/s. Calculer la vitesse, Re, λ (Blasius) et la perte de charge.`, c:`v = 0,003/(π × 0,05²/4) = **1,53 m/s** ; Re = 1,53 × 0,05/10⁻⁶ = **76 400** ; λ = 0,316 × 76 400^(− 0,25) = **0,019**.
ΔH = 0,019 × (100/0,05) × 1,53²/19,62 = **4,5 m** (0,45 bar).`},
  {t:"Pertes singulières", d:2, e:`Un réseau intérieur de 40 m en PPR (diamètre intérieur 26 mm) transporte 0,47 L/s et comporte 8 coudes (K = 0,5), 2 tés (K = 1) et une vanne (K = 0,2). Calculer les pertes linéaires, singulières et totales.`, c:`v = 0,00047/(5,31 × 10⁻⁴) = **0,89 m/s** ; Re = 23 000 → λ = **0,026**.
Linéaires : 0,026 × (40/0,026) × 0,89²/19,62 = **1,58 m**.
Singulières : (8 × 0,5 + 2 × 1 + 0,2) × 0,0399 = 6,2 × 0,0399 = **0,25 m**.
Total : **1,83 m** (les singulières représentent ici 14 %).`},
  {t:"Effet du diamètre", d:2, e:`À débit égal, de combien les pertes de charge augmentent-elles si l'on remplace un tube de 26 mm intérieur par un tube de 20,4 mm (prendre ΔH proportionnelle à D^(− 4,75)) ?`, c:`Rapport : (26/20,4)^4,75 = 1,274^4,75 = **3,2** : les pertes sont multipliées par plus de **trois**. Un diamètre un peu plus grand coûte peu et évite bien des problèmes de pression.`},
  {t:"Pression suffisante ?", d:2, e:`Le réseau public fournit 1,5 bar au compteur. La douche la plus défavorable est 4,5 m plus haut, avec 2,2 m de pertes de charge. Quelle pression obtient-on à la douche ? Est-ce suffisant ?`, c:`Charge au compteur : 1,5 × 10,2 = **15,3 m**.
À la douche : 15,3 − 4,5 − 2,2 = **8,6 m ≈ 0,84 bar** < 1 bar : **insuffisant**. Solutions : augmenter les diamètres (réduire les pertes), ou installer un **surpresseur** (souvent avec une bâche, vu les coupures).`},
  {t:"Dimensionner une colonne d'immeuble", d:3, e:`Une colonne montante alimente 6 étages (3 m par étage) d'un immeuble ; le débit probable en pied est de 2 L/s. Le surpresseur est au rez-de-chaussée. On veut 1,5 bar au robinet du 6ᵉ étage (z = 18 m au-dessus du surpresseur), longueur totale 30 m, pertes singulières = 20 % des linéaires.
a) Choisir un diamètre parmi 40 et 50 mm intérieurs (v ≤ 1,5 m/s).
b) Calculer la pression de refoulement du surpresseur.`, c:`a) D = 40 mm : v = 0,002/1,257 × 10⁻³ = **1,59 m/s** (un peu trop) ; D = 50 mm : v = **1,02 m/s** ✓ → **50 mm**.
b) Re = 51 000 → λ = 0,021 ; ΔH(lin) = 0,021 × (30/0,05) × 1,02²/19,62 = **0,67 m** → avec 20 % : **0,80 m**.
Pression : 18 + 0,80 + 1,5 × 10,2 = 18 + 0,8 + 15,3 = **34,1 m ≈ 3,3 bar** (les étages bas recevront plus : prévoir des réducteurs de pression s'ils dépassent 3 bar).`}
 ],
 quiz:[
  {q:"Formule de Darcy-Weisbach :", o:["ΔH = λ (L/D) v²/2g","ΔH = K v","ΔH = ρ g h","ΔH = Q/S"], r:0, e:"Pertes linéaires."},
  {q:"À débit égal, si le diamètre diminue, les pertes de charge :", o:["Augmentent très fortement","Diminuent","Restent égales","S'annulent"], r:0, e:"≈ 1/D⁵."},
  {q:"Pression minimale conseillée à l'appareil le plus défavorable :", o:["1 bar","0,1 bar","5 bar","10 bar"], r:0, e:"Confort d'utilisation."},
  {q:"Sans détail des accessoires, on majore les pertes linéaires de :", o:["10 à 20 %","100 %","1 %","50 %"], r:0, e:"Pertes singulières."},
  {q:"Vitesse de dimensionnement courante :", o:["1 à 1,5 m/s","5 m/s","0,1 m/s","10 m/s"], r:0, e:"Compromis diamètre/pertes/bruit."}
 ]},

{id:"mdf-5", niv:2, titre:"Eaux pluviales : toitures, gouttières, descentes et parcelles", duree:50, contenu:`## Les averses tropicales
Les pluies d'orage tropicales sont **courtes et très intenses** : 100 à 200 mm/h pendant quelques minutes. Les ouvrages d'évacuation (gouttières, descentes, caniveaux) doivent absorber ces pointes, sinon l'eau déborde, s'infiltre dans les murs, inonde les cours et érode les sols.
On dimensionne souvent les ouvrages de toiture avec une intensité de **3 L/min par m²**, soit **180 mm/h**.

## Le débit d'une surface : la méthode rationnelle
$$ Q = C × i × A / 3 600     (Q en L/s ; i en mm/h ; A en m²)
C : **coefficient de ruissellement** (part de la pluie qui ruisselle) :
| Surface | C |
|---|---|
| Toiture | 0,9 à 1,0 |
| Béton, bitume, pavés jointoyés | 0,85 à 0,95 |
| Latérite compactée, gravier | 0,4 à 0,7 |
| Pelouse, jardin | 0,1 à 0,3 |
| Bois, forêt | 0,05 à 0,2 |
Pour une parcelle composée, on fait la somme des Cᵢ × Aᵢ (ou on calcule un C moyen pondéré par les surfaces).

> [!exemple] Toiture de 150 m²
> Q = 1,0 × 180 × 150/3 600 = **7,5 L/s**.

> [!exemple] Parcelle d'une villa
> Toiture 400 m² (C = 0,9) ; cour en béton 200 m² (C = 0,95) ; jardin 600 m² (C = 0,2).
> Σ C A = 360 + 190 + 120 = 670 m² → Q = 670 × 180/3 600 = **33,5 L/s** ; C moyen = 670/1 200 = 0,56.
> Remplacer le jardin par du béton porterait Q à près de 56 L/s : imperméabiliser augmente fortement le ruissellement.

## Gouttières et descentes
- **Gouttières** (chéneaux) : pente de 0,5 à 1 cm par mètre vers les descentes ; longueur desservie par une descente limitée (environ 12 m de part et d'autre) ;
- **Descentes** : règle courante (climat tempéré) : **1 cm² de section de descente par m² de toiture** en plan. Ø 80 mm (50 cm²) → 50 m² ; Ø 100 mm (78 cm²) → 78 m² ; Ø 125 mm (123 cm²) → 123 m². Sous les tropiques, on prend une **marge** (diamètres supérieurs ou descentes plus nombreuses) ;
- **Crapaudines** (grilles) en tête de descente contre les feuilles ; **dauphins** en fonte en pied (chocs) ;
- Rejet dans un **regard** ou un caniveau, jamais au pied des fondations.

## Que faire de l'eau de pluie ?
- **Évacuer** vers le réseau public ou le caniveau de la voie (si autorisé) ;
- **Infiltrer** dans la parcelle (puits d'infiltration, tranchées drainantes) si le sol est perméable et la nappe profonde ;
- **Stocker** et **réutiliser** (citerne : arrosage, WC, lavage) ; 1 mm de pluie sur 1 m² donne 1 L ;
- **Retenir** temporairement (bassin, noue, toiture stockante) pour écrêter les pointes et éviter d'inonder l'aval.

> [!retenir]
> - Q = C i A/3 600 (L/s ; mm/h ; m²) ; i ≈ 180 mm/h pour les toitures.
> - C : toiture ≈ 1 ; béton ≈ 0,9 ; jardin ≈ 0,2.
> - Descentes : ≈ 1 cm² par m² de toiture (avec marge sous les tropiques).
> - Évacuer loin des fondations ; infiltrer, stocker ou retenir quand c'est possible.`,
 exercices:[
  {t:"Débit d'une toiture", d:1, e:`Une villa a une toiture de 220 m² en projection horizontale. Calculer le débit de pointe pour i = 180 mm/h (C = 1).`, c:`Q = 1 × 180 × 220/3 600 = **11 L/s**.`},
  {t:"Nombre de descentes", d:1, e:`Avec la règle de 1 cm² de descente par m² de toiture, combien de descentes de 100 mm faut-il pour la toiture de 220 m² ?`, c:`Section nécessaire : **220 cm²** ; une descente Ø 100 : 78,5 cm² → 220/78,5 = 2,8 → **3 descentes** (4 pour avoir une marge sous les tropiques, ou des Ø 125).`},
  {t:"Débit d'un parking", d:2, e:`Un parking comprend 1 500 m² de pavés et béton (C = 0,9) et 500 m² d'espaces verts (C = 0,3). Calculer le débit de pointe pour i = 180 mm/h et le C moyen.`, c:`Σ C A = 1 350 + 150 = **1 500 m²** → Q = 1 500 × 180/3 600 = **75 L/s** ; C moyen = 1 500/2 000 = **0,75**.`},
  {t:"Récupération d'eau de pluie", d:2, e:`Une école a 600 m² de toiture. Il tombe 1 800 mm de pluie par an, dont on récupère 80 %. L'école consomme 2 m³ par jour pour les WC et l'arrosage, 200 jours par an.
Quelle part de ces besoins peut couvrir la pluie ? Quel volume de citerne conseiller ?`, c:`Eau récupérable : 0,8 × 1,8 × 600 = **864 m³/an** ; besoins : 2 × 200 = **400 m³/an** → la pluie peut couvrir **100 %** des besoins sur l'année, à condition de stocker assez pour la saison sèche.
Citerne : il faut couvrir 2 à 3 mois secs d'usage : 2 × 40 à 60 jours de classe ≈ **80 à 120 m³** (on adapte à la répartition réelle des pluies et au budget).`},
  {t:"Effet de l'imperméabilisation", d:3, e:`Un terrain de 5 000 m² en savane (C = 0,15) est loti : 40 % de toitures (C = 0,95), 25 % de voiries (C = 0,9), 35 % de jardins (C = 0,2). Calculer le débit de pointe avant et après (i = 120 mm/h) et proposer des solutions.`, c:`Avant : Q = 0,15 × 120 × 5 000/3 600 = **25 L/s**.
Après : Σ C A = 0,95 × 2 000 + 0,9 × 1 250 + 0,2 × 1 750 = 1 900 + 1 125 + 350 = 3 375 m² → Q = 3 375 × 120/3 600 = **112,5 L/s**, soit **4,5 fois plus**.
Solutions : **bassin de rétention** ou noues pour écrêter le débit rejeté, **puits d'infiltration**, chaussées et parkings **perméables**, citernes de récupération, préservation d'espaces verts.`}
 ],
 quiz:[
  {q:"Méthode rationnelle :", o:["Q = C i A","Q = S v","Q = ρ g h","Q = λ L/D"], r:0, e:"Débit de pointe d'une surface."},
  {q:"Coefficient de ruissellement d'une toiture :", o:["≈ 0,9 à 1","≈ 0,1","≈ 0,5","0"], r:0, e:"Presque toute la pluie ruisselle."},
  {q:"1 mm de pluie sur 1 m² représente :", o:["1 litre","1 m³","10 litres","0,1 litre"], r:0, e:"0,001 m³."},
  {q:"Intensité souvent retenue pour les toitures :", o:["180 mm/h (3 L/min/m²)","10 mm/h","1 000 mm/h","1 mm/h"], r:0, e:"Averses intenses."},
  {q:"Imperméabiliser un terrain :", o:["Augmente fortement le débit de pointe","Le réduit","N'a pas d'effet","Supprime la pluie"], r:0, e:"C augmente."}
 ]},

{id:"mdf-13", niv:2, titre:"Évacuation des eaux usées : réseaux, pentes et diamètres", duree:45, contenu:`## Les réseaux d'assainissement
- **Séparatif** : un réseau pour les eaux usées (EU et EV), un autre pour les eaux pluviales : c'est la règle pour les constructions neuves ;
- **Unitaire** : un seul réseau pour tout (anciens centres-villes) : en cas d'orage, il déborde et pollue.
Sur la parcelle : réseaux intérieurs → **regards** → branchement à l'égout public, ou à un assainissement autonome (voir niveau avancé).

## Les débits d'eaux usées
- Rejet domestique moyen : de l'ordre de **80 à 90 % de l'eau consommée**, soit 100 à 150 L par personne et par jour en ville ;
- Les débits sont très **irréguliers** : coefficient de pointe de 2 à 4 sur les petits réseaux ;
- Dans un bâtiment, les **chasses d'eau** (1,5 à 2 L/s pendant quelques secondes) dimensionnent les collecteurs plus que les débits moyens.

## La capacité d'une canalisation : formule de Manning-Strickler
Les canalisations d'eaux usées coulent **à surface libre** (elles ne sont pas en pression). À pleine section :
$$ Q = K × S × R^(2/3) × √I      ;      v = K × R^(2/3) × √I
K : coefficient de Strickler (PVC ≈ 100 ; béton ≈ 70) ; S : section ; R = S/P : **rayon hydraulique** (pour un tuyau plein, R = D/4) ; I : pente (m/m).
> [!exemple] PVC Ø 110 (diamètre intérieur 103,6 mm)
> | Pente | Vitesse à pleine section | Débit à pleine section |
> |---|---|---|
> | 1 % | 0,88 m/s | 7,4 L/s |
> | 2 % | 1,24 m/s | 10,4 L/s |
> | 3 % | 1,52 m/s | 12,8 L/s |
> Un PVC Ø 160 à 2 % évacue 26 L/s.

## Les règles de conception
- **Vitesse d'autocurage** : au moins **0,6 à 0,7 m/s** à pleine section pour entraîner les dépôts ; pente minimale **1 %** (souvent 2 % pour les branchements) ;
- **Diamètre minimal** du branchement d'un logement : 100 à 125 mm ; ne jamais réduire le diamètre vers l'aval ;
- **Regards** de visite aux changements de direction, de pente, aux jonctions et au moins tous les 30 à 50 m en ligne droite ;
- **Profondeur** : hors gel inutile en Côte d'Ivoire, mais protection contre les charges roulantes (≥ 0,8 m sous chaussée, ou dalle de protection) ;
- **Ventilation** des réseaux et **siphon disconnecteur** (regard siphoïde) avant le branchement public pour bloquer les odeurs ;
- **Bac dégraisseur** pour les cuisines de restaurants et de cantines.

> [!retenir]
> - Réseau séparatif EU/EP pour le neuf.
> - Manning : Q = K S R^(2/3) √I ; PVC Ø 110 à 2 % : ≈ 10 L/s.
> - Pente ≥ 1 % (2 % conseillé), autocurage ≥ 0,6 m/s, regards aux changements de direction.
> - Siphon disconnecteur, ventilation, bac dégraisseur pour les cuisines collectives.`,
 exercices:[
  {t:"Rayon hydraulique", d:1, e:`Calculer le rayon hydraulique d'un tuyau de 150 mm coulant à pleine section, puis d'un caniveau rectangulaire de 0,40 m de large rempli sur 0,20 m.`, c:`Tuyau plein : R = D/4 = **0,0375 m**.
Caniveau : S = 0,40 × 0,20 = 0,08 m² ; P = 0,40 + 2 × 0,20 = 0,80 m → R = **0,10 m**.`},
  {t:"Capacité d'un collecteur", d:2, e:`Calculer la vitesse et le débit à pleine section d'un PVC Ø 160 (diamètre intérieur 146,8 mm ; K = 100) posé à 2 %.`, c:`S = π × 0,1468²/4 = **0,0169 m²** ; R = 0,1468/4 = 0,0367 m → R^(2/3) = 0,110.
v = 100 × 0,110 × √0,02 = **1,56 m/s** ; Q = 0,0169 × 1,56 = **26,4 L/s**.`},
  {t:"Débit d'un immeuble", d:2, e:`Un immeuble de 60 logements de 4 personnes rejette 150 L par personne et par jour. Calculer le débit moyen et le débit de pointe (coefficient 3). Un PVC Ø 110 à 2 % suffit-il pour le collecteur de sortie ?`, c:`Volume journalier : 60 × 4 × 150 = **36 m³/j** → débit moyen : 36 000/86 400 = **0,42 L/s** ; pointe : **1,25 L/s**.
Capacité du Ø 110 à 2 % : **10,4 L/s** → largement suffisant en débit ; on retient néanmoins souvent du **Ø 125 à 160** pour un collecteur d'immeuble (risque d'obstruction, chasses simultanées).`},
  {t:"Pente et autocurage", d:1, e:`Un branchement en PVC Ø 110 est posé à 0,5 % pour des raisons de niveau. Calculer la vitesse à pleine section (R^(2/3) = 0,0875 ; K = 100) et conclure.`, c:`v = 100 × 0,0875 × √0,005 = **0,62 m/s** : juste à la limite de l'autocurage ; en débit partiel (cas courant), la vitesse sera plus faible → risque de **dépôts** et de bouchons. Il faut chercher à augmenter la pente (≥ 1 %) ou prévoir des regards de curage rapprochés.`},
  {t:"Implanter les regards", d:3, e:`Le réseau d'eaux usées d'une villa comprend un collecteur de 28 m en ligne droite, avec deux changements de direction et une jonction avec la canalisation de la cuisine. Où placer les regards ? Quels autres ouvrages prévoir avant le raccordement à l'égout public ?`, c:`Regards : à chaque **changement de direction** (2), à la **jonction** cuisine (1), en **tête** de réseau et en **limite de propriété** (regard de branchement) ; la ligne droite de 28 m ne demande pas de regard intermédiaire (< 30 à 50 m).
Avant l'égout : **siphon disconnecteur** (regard siphoïde) contre les odeurs, éventuellement un **clapet anti-retour** si l'égout peut se mettre en charge, et un **bac dégraisseur** si la cuisine est importante.`}
 ],
 quiz:[
  {q:"Pour une construction neuve, on prévoit un réseau :", o:["Séparatif","Unitaire","Sans regard","En pression"], r:0, e:"EU et EP séparées."},
  {q:"Formule de Manning-Strickler :", o:["Q = K S R^(2/3) √I","Q = S v²","Q = λ L/D","Q = ρ g h S"], r:0, e:"Écoulement à surface libre."},
  {q:"Rayon hydraulique d'un tuyau plein :", o:["D/4","D/2","D","2D"], r:0, e:"S/P = (πD²/4)/(πD)."},
  {q:"Vitesse minimale d'autocurage :", o:["≈ 0,6 à 0,7 m/s","≈ 5 m/s","≈ 0,05 m/s","Aucune"], r:0, e:"Entraîner les dépôts."},
  {q:"Les regards se placent notamment :", o:["Aux changements de direction et aux jonctions","Tous les 2 m","Uniquement en tête de réseau","Jamais"], r:0, e:"Pour le curage."}
 ]},

/* ============================ AVANCÉ ============================ */
{id:"mdf-7", niv:3, titre:"Pompes et surpresseurs : HMT, courbes et choix", duree:55, contenu:`## Le rôle d'une pompe
Une pompe **apporte de l'énergie** à l'eau pour la faire monter, la faire circuler et lui donner une pression : alimentation d'un réservoir en toiture, surpression d'un immeuble, épuisement d'une fouille, forage. Dans le bâtiment, on utilise surtout des **pompes centrifuges** (de surface ou immergées).

## La hauteur manométrique totale (HMT)
C'est l'énergie, en mètres de colonne d'eau, que la pompe doit fournir :
$$ HMT = H(géométrique) + ΔH(aspiration) + ΔH(refoulement) + p(résiduelle)/(ρ g)
- H(géométrique) : différence de niveau entre la surface de l'eau pompée et le point de refoulement ;
- ΔH : pertes de charge (voir chapitre Pertes de charge) ;
- p(résiduelle) : pression voulue au point d'arrivée (0 si l'on remplit un réservoir à l'air libre, 1 à 2 bar pour un robinet).

## La puissance
$$ P(hydraulique) = ρ × g × Q × HMT      ;      P(absorbée) = P(hydraulique) / η
η : rendement de la pompe (0,4 à 0,8 selon la taille et le point de fonctionnement).

> [!exemple] Remplir un réservoir en toiture
> Q = 2 L/s ; dénivelé 18 m ; conduite de refoulement de 60 m en 40 mm.
> v = 1,59 m/s ; Re = 63 700 ; λ = 0,020 → ΔH = 0,020 × (60/0,04) × 1,59²/19,62 × 1,2 = **4,6 m**.
> HMT = 18 + 4,6 = **22,6 m** ; P(hydraulique) = 9 810 × 0,002 × 22,6 = **444 W** ; avec η = 0,6 : **740 W** absorbés.

## Point de fonctionnement
Une pompe est décrite par sa **courbe caractéristique** H(Q) donnée par le constructeur (la hauteur fournie diminue quand le débit augmente). Le réseau a sa **courbe** H = H(géométrique) + k Q² (les pertes croissent comme le carré du débit). La pompe fonctionne à l'**intersection** des deux courbes.
> [!exemple] Intersection
> Pompe : H = 32 − 2,5 × 10⁶ Q² ; réseau : H = 18 + 1,16 × 10⁶ Q² (Q en m³/s).
> 32 − 2,5 × 10⁶ Q² = 18 + 1,16 × 10⁶ Q² → Q² = 14/3,66 × 10⁶ → **Q = 1,96 L/s** ; H = **22,4 m**.
On choisit une pompe dont le point de fonctionnement tombe dans sa zone de **meilleur rendement**.

## L'aspiration et la cavitation
Une pompe de surface **aspire** : la pression à l'entrée baisse. Si elle descend jusqu'à la pression de vapeur de l'eau, des bulles se forment puis implosent : c'est la **cavitation** (bruit, chute de débit, érosion de la roue). On vérifie que :
$$ NPSH(disponible) = 10,33 − h(aspiration) − ΔH(aspiration) − h(vapeur) > NPSH(requis par la pompe)
En pratique : hauteur d'aspiration **≤ 6 à 7 m**, conduite d'aspiration courte, de gros diamètre, avec crépine et clapet de pied. Au-delà : **pompe immergée**.

## Les surpresseurs
Un surpresseur (pompe + **ballon** à membrane + pressostat ou variateur) maintient la pression d'un réseau à partir d'une **bâche** :
- il démarre quand la pression baisse et s'arrête quand elle remonte ; le ballon évite les démarrages trop fréquents ;
- les modèles à **vitesse variable** maintiennent une pression constante et consomment moins ;
- on le dimensionne pour le **débit de pointe** et la **HMT** nécessaire au point le plus défavorable ;
- on prévoit souvent **deux pompes** (une en secours) pour un immeuble.

> [!retenir]
> - HMT = H(géo) + pertes + pression résiduelle.
> - P = ρ g Q HMT/η.
> - Point de fonctionnement : intersection des courbes de la pompe et du réseau.
> - Aspiration ≤ 6 à 7 m (cavitation) ; sinon pompe immergée.
> - Surpresseur : bâche + pompes + ballon ; dimensionné au débit de pointe.`,
 exercices:[
  {t:"Puissance d'une pompe d'épuisement", d:1, e:`Une pompe d'épuisement relève 15 L/s d'eau sur une hauteur totale (HMT) de 8 m avec un rendement de 0,5.
Calculer la puissance hydraulique et la puissance absorbée.`, c:`P(h) = 9 810 × 0,015 × 8 = **1 177 W** ; P(abs) = 1 177/0,5 = **2,35 kW**.`},
  {t:"HMT d'un surpresseur d'immeuble", d:2, e:`Un surpresseur doit fournir 2 L/s au 6ᵉ étage, 18 m au-dessus de la bâche, avec 1,5 bar résiduel ; les pertes de charge totales sont de 0,8 m.
Calculer la HMT, la puissance hydraulique et la puissance absorbée (η = 0,55).`, c:`HMT = 18 + 0,8 + 15,3 = **34,1 m**.
P(h) = 9 810 × 0,002 × 34,1 = **669 W** ; P(abs) = 669/0,55 = **1,2 kW** (on installe deux pompes de 1,2 à 1,5 kW, l'une en secours).`},
  {t:"Point de fonctionnement", d:2, e:`Une pompe a pour courbe H = 40 − 4 × 10⁶ Q² ; le réseau H = 25 + 2 × 10⁶ Q² (Q en m³/s, H en m).
Calculer le débit et la hauteur au point de fonctionnement.`, c:`40 − 4 × 10⁶ Q² = 25 + 2 × 10⁶ Q² → 6 × 10⁶ Q² = 15 → Q² = 2,5 × 10⁻⁶ → **Q = 1,58 × 10⁻³ m³/s ≈ 1,6 L/s**.
H = 25 + 2 × 10⁶ × 2,5 × 10⁻⁶ = **30 m**.`},
  {t:"Risque de cavitation", d:2, e:`Une pompe de surface aspire dans un puits dont l'eau est 6,5 m plus bas ; les pertes à l'aspiration valent 0,8 m ; h(vapeur) ≈ 0,43 m à 30 °C. La pompe demande un NPSH de 3 m.
Le montage convient-il ?`, c:`NPSH(disponible) = 10,33 − 6,5 − 0,8 − 0,43 = **2,6 m** < 3 m requis → **cavitation** probable.
Solutions : rapprocher la pompe de l'eau (moins de 5,5 m d'aspiration), augmenter le diamètre de l'aspiration, ou utiliser une **pompe immergée**.`},
  {t:"Énergie d'un pompage quotidien", d:3, e:`Un quartier consomme 80 m³ d'eau par jour, pompés d'un forage vers un réservoir avec une HMT de 22,6 m (η = 0,6). Calculer l'énergie électrique journalière et le coût annuel à 90 F/kWh. Combien de modules solaires de 400 Wc faudrait-il pour un pompage solaire (H = 5 kWh/m²/jour, PR = 0,65) ?`, c:`Énergie hydraulique : 9 810 × 80 × 22,6 = 17,7 MJ ; électrique : 17,7/0,6 = 29,6 MJ = **8,2 kWh/jour**.
Coût : 8,2 × 365 × 90 = **270 000 F/an**.
Solaire : Pc = 8,2/(5 × 0,65) = **2,5 kWc** → 2 520/400 = 6,3 → **7 modules** (le réservoir sert de stockage : pas besoin de batteries).`}
 ],
 quiz:[
  {q:"La HMT comprend :", o:["Hauteur géométrique, pertes de charge et pression résiduelle","Seulement la hauteur","Seulement le débit","La puissance électrique"], r:0, e:"Énergie à fournir."},
  {q:"Puissance hydraulique d'une pompe :", o:["ρ g Q HMT","Q/HMT","ρ Q","g HMT"], r:0, e:"En watts."},
  {q:"Le point de fonctionnement est :", o:["L'intersection des courbes pompe et réseau","Le maximum de la courbe de la pompe","Le débit nul","Toujours le meilleur rendement"], r:0, e:"Équilibre."},
  {q:"La cavitation est due à :", o:["Une pression trop basse à l'aspiration","Une pression trop forte au refoulement","Un tuyau trop gros","L'eau froide"], r:0, e:"Formation de bulles de vapeur."},
  {q:"Le ballon d'un surpresseur sert à :", o:["Éviter les démarrages trop fréquents","Stocker toute l'eau de l'immeuble","Filtrer l'eau","Chauffer l'eau"], r:0, e:"Réserve sous pression."}
 ]},

{id:"mdf-8", niv:3, titre:"Écoulements à surface libre : caniveaux, fossés, buses et dalots", duree:55, contenu:`## L'écoulement à surface libre
Dans un caniveau, un fossé, une buse non pleine, l'eau coule sous l'effet de la **pente**, avec une surface libre à la pression atmosphérique. En régime **uniforme** (profondeur constante), la formule de **Manning-Strickler** relie débit, section et pente :
$$ Q = K × S × R^(2/3) × √I      ;      R = S/P
S : section mouillée ; P : **périmètre mouillé** (longueur de paroi en contact avec l'eau) ; R : rayon hydraulique ; I : pente (m/m) ; K : coefficient de Strickler.
| Paroi | K |
|---|---|
| Béton lisse, PVC | 75 à 90 |
| Béton ordinaire, maçonnerie enduite | 60 à 70 |
| Maçonnerie de moellons | 50 à 60 |
| Terre nue, fossé entretenu | 30 à 40 |
| Fossé enherbé ou encombré | 20 à 30 |

> [!exemple] Caniveau rectangulaire en béton
> Largeur 0,50 m ; hauteur d'eau 0,30 m ; pente 0,5 % ; K = 70.
> S = 0,15 m² ; P = 0,50 + 2 × 0,30 = 1,10 m ; R = 0,136 m.
> v = 70 × 0,136^(2/3) × √0,005 = **1,31 m/s** ; Q = 0,15 × 1,31 = **0,197 m³/s ≈ 197 L/s**.

## La section la plus efficace
Pour une section donnée, le débit est maximal quand le périmètre mouillé est minimal : pour un rectangle, **largeur = 2 × hauteur d'eau**. Le caniveau de 0,60 × 0,30 m (même hauteur d'eau, R = 0,15 m) débite **252 L/s**.

## Fossés en terre trapézoïdaux
> [!exemple] Fossé de fond 1 m, talus 1/1, hauteur d'eau 0,60 m
> S = 0,6 × (1 + 0,6) = 0,96 m² ; P = 1 + 2 × 0,6 × √2 = 2,70 m ; R = 0,356 m.
> K = 35 ; I = 0,2 % : v = 0,79 m/s ; Q = **0,75 m³/s**.

## Les vitesses admissibles
- **Minimales** : 0,5 à 0,6 m/s pour éviter les dépôts de sable et de déchets ;
- **Maximales** pour éviter l'érosion : terre nue 0,6 à 1 m/s ; latérite compactée 1 à 1,5 m/s ; enherbé 1,5 à 2 m/s ; maçonnerie 3 m/s ; béton 4 à 6 m/s.
Sur les fortes pentes, on construit des **descentes d'eau** bétonnées, des **seuils** ou des **chutes** pour dissiper l'énergie.

## Fluvial ou torrentiel : le nombre de Froude
$$ Fr = v / √(g × h)
- **Fr < 1** : écoulement **fluvial** (lent, profond), influencé par l'aval ;
- **Fr > 1** : écoulement **torrentiel** (rapide, peu profond) ; le passage du torrentiel au fluvial se fait par un **ressaut hydraulique** très érosif (à protéger par un bassin de dissipation).

## Buses et dalots
Sous une route ou une voie d'accès, l'eau passe dans une **buse** (tuyau circulaire en béton ou en tôle) ou un **dalot** (cadre rectangulaire en béton armé). On les dimensionne pour le débit de projet (voir chapitre Hydrologie), avec une revanche pour les débris, et en vérifiant la vitesse de sortie (protection en enrochements).
> [!exemple] Capacités à pleine section (K = 75, pente 1 %)
> Buse Ø 800 : **1,29 m³/s** (v = 2,6 m/s) ; buse Ø 1 000 : **2,34 m³/s**.

> [!retenir]
> - Q = K S R^(2/3) √I ; R = S/P.
> - Rectangle le plus efficace : b = 2h.
> - Vitesses : ≥ 0,5 m/s (dépôts) et ≤ limite d'érosion du revêtement.
> - Fr = v/√(gh) : fluvial < 1 < torrentiel ; ressaut à protéger.`,
 exercices:[
  {t:"Rayon hydraulique et débit", d:1, e:`Un caniveau rectangulaire en béton (K = 70) de 0,40 m de large écoule une hauteur d'eau de 0,30 m sur une pente de 1 %. Calculer S, P, R, la vitesse et le débit.`, c:`S = 0,12 m² ; P = 0,40 + 0,60 = 1,00 m ; R = **0,12 m** → R^(2/3) = 0,243.
v = 70 × 0,243 × 0,1 = **1,70 m/s** ; Q = 0,12 × 1,70 = **0,204 m³/s ≈ 204 L/s**.`},
  {t:"Choisir une buse", d:2, e:`Une buse en béton (K = 75) posée à 1,5 % doit évacuer 1,0 m³/s. Parmi les diamètres 600, 800 et 1 000 mm, lequel choisir (calcul à pleine section) ?`, c:`Q = 75 × (πD²/4) × (D/4)^(2/3) × √0,015 :
Ø 600 : **0,73 m³/s** (insuffisant) ; Ø 800 : **1,58 m³/s** ✓ ; Ø 1 000 : 2,86 m³/s.
On retient **Ø 800**, avec une marge pour les débris et l'envasement (Ø 1 000 si le bassin est mal entretenu).`},
  {t:"Fluvial ou torrentiel ?", d:1, e:`Calculer le nombre de Froude pour : a) v = 1,5 m/s et h = 0,40 m ; b) v = 3 m/s et h = 0,30 m.`, c:`a) Fr = 1,5/√(9,81 × 0,40) = 1,5/1,98 = **0,76** → fluvial.
b) Fr = 3/√(9,81 × 0,30) = 3/1,72 = **1,75** → torrentiel (prévoir une protection contre l'érosion en aval).`},
  {t:"Érosion d'un fossé", d:2, e:`Le fossé trapézoïdal de l'exemple du cours (v = 0,79 m/s à 0,2 %) est prolongé sur une pente de 2 %. Calculer la nouvelle vitesse (même section) et conclure pour un fossé en terre nue.`, c:`La vitesse varie comme √I : v = 0,79 × √(2/0,2) = 0,79 × 3,16 = **2,5 m/s** > 1 m/s admissible en terre nue → **érosion**.
Solutions : revêtir le fossé (béton, maçonnerie de moellons), créer des **seuils** pour casser la pente, ou des descentes d'eau en escalier.`},
  {t:"Dalot sous une voie", d:3, e:`Un dalot en béton (K = 70) de 1,50 m de large, posé à 1 %, écoule une hauteur d'eau de 0,80 m.
Calculer le débit, la vitesse et le nombre de Froude. Quelles protections prévoir à la sortie ?`, c:`S = 1,20 m² ; P = 1,5 + 1,6 = 3,1 m ; R = 0,387 m → R^(2/3) = 0,531.
v = 70 × 0,531 × 0,1 = **3,72 m/s** ; Q = 1,2 × 3,72 = **4,46 m³/s**.
Fr = 3,72/√(9,81 × 0,8) = **1,33** : torrentiel. En sortie : **bassin de dissipation** (ressaut) ou **enrochements** sur plusieurs mètres, pour éviter l'affouillement du lit et de la tête de l'ouvrage.`}
 ],
 quiz:[
  {q:"Le périmètre mouillé est :", o:["La longueur de paroi en contact avec l'eau","Le périmètre total de la section","La largeur du caniveau","La surface libre"], r:0, e:"Sans la surface libre."},
  {q:"Pour un caniveau rectangulaire, la section la plus efficace a :", o:["Une largeur égale à deux fois la hauteur d'eau","Une largeur égale à la hauteur","Une hauteur double de la largeur","Peu importe"], r:0, e:"Périmètre minimal."},
  {q:"Si la pente est multipliée par 4, la vitesse (même section) est :", o:["Multipliée par 2","Multipliée par 4","Inchangée","Divisée par 2"], r:0, e:"v ∝ √I."},
  {q:"Un écoulement avec Fr > 1 est :", o:["Torrentiel","Fluvial","Laminaire","Immobile"], r:0, e:"Rapide et peu profond."},
  {q:"Vitesse maximale admissible dans un fossé en terre nue :", o:["≈ 0,6 à 1 m/s","≈ 5 m/s","≈ 10 m/s","Aucune limite"], r:0, e:"Au-delà, érosion."}
 ]},

{id:"mdf-9", niv:3, titre:"Coup de bélier et protection des réseaux", duree:45, contenu:`## Le phénomène
Quand on arrête brusquement l'écoulement dans une conduite (fermeture rapide d'une vanne, arrêt d'une pompe, robinet quart de tour), la masse d'eau en mouvement est stoppée net : son énergie se transforme en une **onde de surpression** qui parcourt la conduite à grande vitesse, se réfléchit et alterne avec des **dépressions**. C'est le **coup de bélier** : claquements, vibrations, et parfois éclatement des tuyaux ou des raccords, aspiration d'air ou d'eau sale par les joints en dépression.

## La célérité de l'onde
L'onde se propage à la célérité a, qui dépend de l'eau et de l'élasticité du tuyau :
| Conduite | a (m/s, ordre de grandeur) |
|---|---|
| Acier, fonte | 1 000 à 1 300 |
| Béton | 1 000 à 1 200 |
| PVC | 300 à 500 |
| PE | 200 à 400 |
Les tuyaux plastiques, plus souples, donnent des surpressions plus faibles.

## La surpression maximale (fermeture brusque)
Si la fermeture dure moins que le temps d'aller-retour de l'onde, **t < 2L/a**, la surpression est maximale (formule de **Joukowsky**) :
$$ Δp = ρ × a × Δv
> [!exemple] Arrêt brusque à 1,5 m/s
> PVC (a = 400 m/s) : Δp = 1 000 × 400 × 1,5 = 600 000 Pa = **6 bar** ;
> acier (a = 1 200 m/s) : **18 bar**, qui s'ajoutent à la pression de service !

## Fermeture lente
Si la fermeture dure t > 2L/a, la surpression diminue (formule de **Michaud**) :
$$ Δp ≈ 2 × ρ × L × v / t
> [!exemple] Conduite de 800 m à 1,5 m/s fermée en 10 s
> Δp = 2 × 1 000 × 800 × 1,5/10 = 240 000 Pa = **2,4 bar**.
> Plus la conduite est **longue** et l'eau **rapide**, plus il faut fermer **lentement**.

## Les protections
- **Limiter les vitesses** (1 à 1,5 m/s) ;
- **Manœuvres lentes** : vannes à volant plutôt que quart de tour sur les grosses conduites ; démarreurs progressifs et variateurs sur les pompes ;
- **Anti-béliers** : ballons à air ou à vessie, cheminées d'équilibre, soupapes de décharge ;
- **Ventouses** aux points hauts (évacuation de l'air, entrée d'air en dépression) ;
- **Butées** en béton aux coudes et tés des conduites enterrées, qui reprennent les poussées (statique et dynamique) ;
- Dans les logements : **anti-béliers** près des machines à laver et des électrovannes, robinets à fermeture progressive.

> [!retenir]
> - Fermeture brusque (t < 2L/a) : Δp = ρ a Δv (6 bar en PVC, 18 bar en acier pour 1,5 m/s).
> - Fermeture lente : Δp ≈ 2 ρ L v/t.
> - Protection : vitesses faibles, manœuvres lentes, anti-béliers, ventouses, butées.`,
 exercices:[
  {t:"Surpression dans une conduite en acier", d:1, e:`Une conduite en acier (a = 1 100 m/s) transporte de l'eau à 1,2 m/s. Calculer la surpression en cas de fermeture brusque.`, c:`Δp = 1 000 × 1 100 × 1,2 = 1 320 000 Pa = **13,2 bar** : si la pression de service est de 6 bar, la conduite subit **19 bar**.`},
  {t:"Fermeture brusque ou lente ?", d:1, e:`Une conduite en PVC (a = 350 m/s) de 300 m de long est fermée en 6 s. Calculer 2L/a et conclure. Calculer la surpression.`, c:`2L/a = 600/350 = **1,7 s** < 6 s → fermeture **lente**.
Michaud (v = 1 m/s) : Δp = 2 × 1 000 × 300 × 1/6 = **100 000 Pa = 1 bar** (contre 3,5 bar en fermeture brusque).`},
  {t:"Temps de fermeture nécessaire", d:2, e:`Pour une conduite de 600 m où l'eau circule à 1,5 m/s, en combien de temps faut-il fermer la vanne pour limiter la surpression à 2 bar ?`, c:`t = 2 ρ L v/Δp = 2 × 1 000 × 600 × 1,5/200 000 = **9 s** au minimum : une vanne à volant manœuvrée progressivement, pas un quart de tour.`},
  {t:"PVC ou acier ?", d:2, e:`Comparer la surpression d'un arrêt brusque de pompe (v = 1,8 m/s) dans une conduite de refoulement en PE (a = 300 m/s) et en fonte (a = 1 200 m/s).`, c:`PE : 1 000 × 300 × 1,8 = **5,4 bar** ; fonte : 1 000 × 1 200 × 1,8 = **21,6 bar**.
La conduite souple subit quatre fois moins de surpression, mais elle résiste moins : on vérifie toujours la pression maximale admissible (PN) de chaque tuyau, et on protège la pompe (clapet, anti-bélier).`},
  {t:"Protéger un refoulement", d:3, e:`Une station de pompage refoule dans une conduite de 2 km vers un château d'eau. Lors des coupures d'électricité, l'arrêt brutal des pompes provoque des claquements et des fuites. Proposer des protections.`, c:`À l'arrêt brutal d'une pompe, l'eau continue sur son élan puis revient : dépression puis surpression.
Protections : **réservoir anti-bélier** (ballon à vessie) au départ de la station ; **clapets** anti-retour à fermeture amortie ; **ventouses** aux points hauts (entrée d'air pour éviter l'écrasement du tuyau et la cavitation) ; **soupape** de décharge ; **butées** aux coudes ; à la mise en route, démarrage progressif (variateur) ; et, si possible, une alimentation de secours qui ralentit l'arrêt.`}
 ],
 quiz:[
  {q:"Surpression d'une fermeture brusque :", o:["Δp = ρ a Δv","Δp = ρ g h","Δp = λ L/D","Δp = ½ ρ v²"], r:0, e:"Formule de Joukowsky."},
  {q:"La célérité de l'onde est plus faible dans :", o:["Les tuyaux plastiques","Les tuyaux en acier","Le béton","L'air"], r:0, e:"Tuyaux souples."},
  {q:"Une fermeture est brusque si sa durée est :", o:["Inférieure à 2L/a","Supérieure à 2L/a","Égale à 1 minute","Nulle seulement"], r:0, e:"Temps d'aller-retour de l'onde."},
  {q:"Les ventouses se placent :", o:["Aux points hauts","Aux points bas","Sur les robinets","Dans les regards d'eaux usées"], r:0, e:"Évacuer et admettre l'air."},
  {q:"Pour limiter le coup de bélier, on :", o:["Ferme lentement","Augmente la vitesse","Supprime les anti-béliers","Utilise des robinets quart de tour"], r:0, e:"Manœuvres progressives."}
 ]},

{id:"mdf-14", niv:3, titre:"Réservoirs et châteaux d'eau : volume, hauteur et fonctionnement", duree:45, contenu:`## À quoi sert un réservoir ?
Un réservoir (au sol, enterré ou surélevé : **château d'eau**) remplit trois fonctions :
1. **Régulation** : la production (forage, pompage, réseau public) est régulière, la consommation varie fortement dans la journée (pointes du matin et du soir) ; le réservoir absorbe ces écarts ;
2. **Pression** : un réservoir surélevé met le réseau sous pression **par gravité**, sans pompe en fonctionnement permanent ;
3. **Sécurité** : réserve en cas de coupure, de panne de pompe ou d'incendie.

## Le volume
$$ V = V(régulation) + V(incendie) + V(secours)
- **Régulation** : souvent 25 à 50 % de la consommation journalière pour un réseau de distribution (davantage si l'alimentation ne fonctionne que quelques heures par jour, par exemple un pompage solaire) ;
- **Réserve incendie** : pour une commune, souvent **120 m³** (60 m³/h pendant 2 h), selon les exigences des services de secours ;
- **Secours** : un ou plusieurs jours de consommation pour un bâtiment sensible (hôpital).

> [!exemple] Village de 2 000 habitants
> Consommation : 40 L/hab/jour → **80 m³/jour**.
> Régulation : 50 % → 40 m³ ; réserve incendie : 120 m³ → volume total **160 m³**.
> Remplissage par une pompe de forage fonctionnant 10 h par jour : 80/10 = **8 m³/h** (2,2 L/s).

## La hauteur
Le fond du réservoir (niveau le plus bas de l'eau) doit être assez haut pour assurer la pression minimale au point le plus défavorable, débit de pointe compris :
$$ z(fond) ≥ z(point le plus haut desservi) + p(minimale)/(ρ g) + ΔH(pointe)
> [!exemple] Desservir un immeuble R+4
> Dernier robinet à 13 m au-dessus du sol ; pression voulue 1,5 bar (15,3 m) ; pertes de charge à la pointe 3 m :
> fond du réservoir à au moins 13 + 15,3 + 3 = **31,3 m** au-dessus du sol. On choisit souvent un **surpresseur** quand la hauteur nécessaire devient trop grande.

## Le fonctionnement et les équipements
- **Marnage** : variation de niveau entre plein et vide ; un marnage faible (cuve large et peu profonde) donne une pression plus stable ;
- **Arrivée** par le haut (avec robinet à flotteur ou commande de la pompe par poires de niveau) ; **départ** légèrement au-dessus du fond (pour ne pas entraîner les dépôts) ;
- **Trop-plein** et **vidange** raccordés à un exutoire, avec grille anti-animaux ;
- **Aération** protégée, **trappe d'accès** fermée à clé, échelle, **étanchéité** du génie civil (béton de qualité, cuvelage) ;
- **Hygiène** : nettoyage et désinfection périodiques (au moins une fois par an), réservoir couvert et à l'abri de la lumière (algues).

## Les réservoirs individuels
Dans les maisons et les immeubles, les coupures d'eau imposent souvent : **bâche** au sol ou enterrée + **surpresseur**, ou **citerne en toiture** (attention à son poids sur la structure : 1 m³ = 1 t, à prévoir dans le calcul des planchers et de la charpente).

> [!retenir]
> - V = régulation (25 à 50 % du journalier) + incendie (≈ 120 m³ pour une commune) + secours.
> - z(fond) ≥ z(robinet le plus haut) + pression minimale + pertes de pointe.
> - Trop-plein, vidange, aération, accès sécurisé, nettoyage annuel.
> - 1 m³ d'eau en toiture = 1 t à reprendre par la structure.`,
 exercices:[
  {t:"Volume d'un réservoir de village", d:1, e:`Un village de 3 000 habitants consomme 35 L/hab/jour. On prévoit 40 % de régulation et une réserve incendie de 120 m³. Calculer le volume du réservoir.`, c:`Consommation : 3 000 × 35 = **105 m³/jour** ; régulation : 0,4 × 105 = **42 m³**.
Volume : 42 + 120 = **162 m³** → réservoir de **170 à 200 m³**.`},
  {t:"Débit de remplissage", d:1, e:`Le réservoir de l'exercice précédent est alimenté par une pompe solaire qui fonctionne 7 h par jour. Quel débit doit-elle fournir pour couvrir la consommation journalière ?`, c:`Q = 105/7 = **15 m³/h** = 4,2 L/s. (Avec un pompage solaire, le volume de régulation doit couvrir aussi la nuit et les jours couverts : on l'augmente souvent à 100 % du journalier.)`},
  {t:"Hauteur d'un château d'eau", d:2, e:`Un château d'eau dessert un quartier dont le point le plus haut est 8 m au-dessus du terrain du château d'eau. On veut 1,2 bar à ce point, avec 4 m de pertes de charge à la pointe. À quelle hauteur doit se trouver le fond de la cuve ?`, c:`z(fond) ≥ 8 + 1,2 × 10,2 + 4 = 8 + 12,2 + 4 = **24,2 m** au-dessus du terrain du château d'eau.`},
  {t:"Citerne sur une toiture-terrasse", d:2, e:`On veut poser une citerne de 3 m³ sur une dalle de toiture, sur une surface de 1,6 × 1,6 m. Calculer la charge répartie sous la citerne pleine et la comparer à une charge d'exploitation de toiture accessible de 1,5 kN/m².`, c:`Poids : 3 × 9,81 = **29,4 kN** (+ la cuve) ; surface : 2,56 m² → **11,5 kN/m²**, presque **8 fois** la charge d'exploitation prévue.
Il faut **vérifier la dalle** (ou poser la citerne sur un châssis qui reporte la charge sur les poteaux ou les poutres).`},
  {t:"Réservoir d'un hôpital", d:3, e:`Un hôpital de 150 lits consomme 400 L par lit et par jour. On veut 2 jours d'autonomie et une réserve incendie de 120 m³. Proposer un volume et une organisation (bâche + surpresseur ou château d'eau).`, c:`Consommation : 150 × 400 = **60 m³/jour** → 2 jours : **120 m³** ; + incendie 120 m³ → **240 m³**.
Organisation : **bâche enterrée** compartimentée (deux cuves pour nettoyer sans interruption), réserve incendie séparée ou protégée par un départ en point haut ; **surpresseur à deux pompes** (dont une de secours) sur groupe électrogène, ou château d'eau si le terrain et le budget le permettent ; traitement (chloration) et contrôle de la qualité.`}
 ],
 quiz:[
  {q:"Un château d'eau assure la pression par :", o:["La gravité","Un compresseur","La chaleur","Un ballon"], r:0, e:"Hauteur de l'eau."},
  {q:"Réserve incendie courante d'une commune :", o:["120 m³","1 m³","10 000 m³","5 m³"], r:0, e:"60 m³/h pendant 2 h."},
  {q:"Le départ de distribution se place :", o:["Légèrement au-dessus du fond","Au fond exactement","Au trop-plein","Au sommet"], r:0, e:"Ne pas entraîner les dépôts."},
  {q:"1 m³ d'eau dans une citerne en toiture pèse :", o:["≈ 1 t (10 kN)","≈ 100 kg","≈ 10 t","≈ 1 kg"], r:0, e:"À prévoir dans la structure."},
  {q:"Un réservoir doit être nettoyé et désinfecté :", o:["Au moins une fois par an","Jamais","Tous les 20 ans","Chaque jour"], r:0, e:"Hygiène."}
 ]},

{id:"mdf-15", niv:3, titre:"Assainissement autonome : fosse septique, épandage et puisards", duree:50, contenu:`## Quand l'égout n'existe pas
Dans beaucoup de quartiers et de villages, il n'y a pas de réseau public d'assainissement. Chaque parcelle traite ses eaux usées : c'est l'**assainissement autonome** (ou non collectif). Mal conçu, il pollue la nappe et les puits voisins, provoque des odeurs, des débordements et des maladies (diarrhées, choléra, typhoïde).

## La chaîne de traitement
1. **Prétraitement** : la **fosse septique toutes eaux** reçoit les eaux vannes (WC) et les eaux ménagères. Les matières lourdes décantent (boues), les graisses flottent ; les bactéries **digèrent** une partie de la pollution en l'absence d'air. Un **bac à graisses** est conseillé en amont pour les cuisines importantes ;
2. **Traitement et évacuation** : l'effluent prétraité, encore polluant, est **épuré par le sol** (tranchées d'épandage, filtre à sable) puis infiltré ;
3. **Entretien** : **vidange** des boues quand elles atteignent environ la moitié du volume (souvent tous les 3 à 5 ans pour une famille).

## Dimensionner la fosse
Règle courante (référence française) : **3 m³** jusqu'à 5 pièces principales, **+ 1 m³ par pièce supplémentaire**. On vérifie aussi un temps de séjour suffisant (au moins 2 à 3 jours de débit) et l'accès pour la vidange (regards, piste pour le camion).
> [!exemple] Villa de 6 pièces principales, 6 occupants
> Volume : 3 + 1 = **4 m³** ; débit : 6 × 120 = 720 L/jour → séjour = 4 000/720 ≈ 5,5 jours ✓.

## L'épandage
Les **tranchées d'épandage** (largeur ≈ 0,5 m, profondeur 0,6 à 1 m) contiennent des tuyaux perforés posés sur du gravier ; l'effluent s'infiltre et le sol l'épure. La surface d'infiltration dépend de la **perméabilité** du sol (test de percolation) :
$$ surface d'infiltration = débit journalier / charge hydraulique admissible
La charge admissible va d'environ **20 à 40 L/m²/jour** (sols moyennement perméables) ; elle est plus faible pour les sols argileux.
> [!exemple] Suite
> 720 L/jour avec 25 L/m²/jour → **28,8 m²** de fond de tranchée → avec 0,5 m de largeur : **≈ 58 m** de tranchées (par exemple 4 tranchées de 15 m, espacées d'au moins 1,5 m).

## Les règles d'implantation
- Distance d'au moins **30 à 35 m** de tout **puits** ou captage d'eau potable ;
- Au moins **5 m** des bâtiments et **3 m** des limites de propriété et des arbres ;
- Pas d'épandage dans une **nappe** trop proche (moins de 1 m sous le fond des tranchées) ni en zone inondable : on utilise alors un **tertre** ou un **filtre à sable drainé** ;
- Ne pas faire rouler de véhicules sur l'épandage ; pas d'eaux pluviales dans la fosse (elles la lessiveraient).

## Le puisard (puits perdu)
Très répandu, il infiltre les eaux en profondeur sans traitement par le sol superficiel : il **pollue facilement la nappe**. On ne l'admet qu'en dernier recours, pour un effluent prétraité, loin des puits, dans un sol perméable et une nappe profonde.

> [!retenir]
> - Fosse toutes eaux : 3 m³ jusqu'à 5 pièces + 1 m³ par pièce de plus ; vidange quand les boues atteignent la moitié.
> - Épandage : surface = débit/charge admissible (20 à 40 L/m²/j) ; tranchées de 0,5 m.
> - ≥ 30 à 35 m d'un puits ; pas d'eaux pluviales dans la fosse.
> - Puisard : à éviter (pollution de la nappe).`,
 exercices:[
  {t:"Volume de fosse", d:1, e:`Quel volume de fosse toutes eaux faut-il pour une maison de 4 pièces principales ? De 7 pièces principales ?`, c:`4 pièces (≤ 5) : **3 m³** ; 7 pièces : 3 + 2 = **5 m³**.`},
  {t:"Temps de séjour", d:1, e:`Une fosse de 3 m³ reçoit les eaux de 5 personnes consommant 100 L par jour. Calculer le temps de séjour.`, c:`Débit : 5 × 100 = **500 L/jour** → séjour = 3 000/500 = **6 jours** : suffisant pour la décantation.`},
  {t:"Longueur de tranchées", d:2, e:`Une famille de 8 personnes rejette 120 L par personne et par jour. Le test de percolation donne une charge admissible de 20 L/m²/jour. Calculer la surface d'infiltration et la longueur de tranchées de 0,5 m de large.`, c:`Débit : 8 × 120 = **960 L/jour** → surface = 960/20 = **48 m²** → longueur = 48/0,5 = **96 m** de tranchées (par exemple 6 tranchées de 16 m) : un terrain peu perméable demande beaucoup de place ; sinon, filtre à sable.`},
  {t:"Implanter le dispositif", d:2, e:`Sur une parcelle de 25 × 30 m, le puits du voisin est à 5 m de la limite nord. Où placer la fosse et l'épandage ?`, c:`Il faut au moins **30 à 35 m** entre l'épandage et le puits : placer le dispositif **au sud** de la parcelle (le plus loin possible : jusqu'à 5 + 30 = 35 m du puits si la parcelle mesure 30 m dans ce sens, l'extrémité sud est à 35 m), en aval du sens d'écoulement de la nappe si on le connaît, à plus de 5 m de la maison et 3 m des limites. Si les distances ne peuvent pas être respectées, prévoir un **filtre à sable drainé** dont la sortie est rejetée loin du puits, ou une solution collective.`},
  {t:"Débordements et odeurs", d:3, e:`Une fosse septique déborde à chaque forte pluie et dégage des odeurs. On découvre que les descentes d'eaux pluviales y sont raccordées et que la fosse n'a pas été vidangée depuis 10 ans. Expliquer et proposer des corrections.`, c:`Les **eaux pluviales** saturent la fosse (débits énormes par rapport aux eaux usées) : elle déborde et les boues sont **lessivées** vers l'épandage, qui se **colmate**. L'absence de **vidange** réduit le volume utile et laisse passer les matières solides.
Corrections : **déconnecter** les eaux pluviales (réseau séparé, infiltration à part) ; **vidanger** la fosse par un camion agréé ; vérifier et, si besoin, **refaire l'épandage** colmaté ; contrôler la **ventilation** de la fosse (sortie des gaz en toiture) ; programmer une vidange tous les 3 à 5 ans.`}
 ],
 quiz:[
  {q:"Volume minimal d'une fosse toutes eaux pour 5 pièces principales :", o:["3 m³","0,5 m³","10 m³","1 m³"], r:0, e:"Règle courante."},
  {q:"L'effluent de la fosse septique :", o:["Doit encore être épuré par le sol","Est potable","Peut être rejeté dans la rue","N'existe pas"], r:0, e:"Prétraitement seulement."},
  {q:"Distance minimale entre un épandage et un puits :", o:["30 à 35 m","2 m","100 m obligatoirement","5 m"], r:0, e:"Protection de la nappe."},
  {q:"Les eaux pluviales raccordées à une fosse septique :", o:["La font déborder et colmatent l'épandage","L'améliorent","Sont obligatoires","Nettoient l'épandage"], r:0, e:"Toujours séparer."},
  {q:"On vidange une fosse quand les boues atteignent environ :", o:["La moitié du volume","5 %","100 %","Jamais"], r:0, e:"Tous les 3 à 5 ans environ."}
 ]},

{id:"mdf-16", niv:3, titre:"Hydrologie urbaine : débit de projet et ouvrages de drainage", duree:55, contenu:`## Le bassin versant
Un **bassin versant** est la surface dont toutes les eaux de pluie convergent vers un même point (l'exutoire : un caniveau, une buse, un dalot). On le délimite sur un plan topographique en suivant les lignes de crête. On caractérise :
- sa **surface** A ;
- son **coefficient de ruissellement** C (moyenne pondérée des surfaces) ;
- sa **plus grande longueur d'écoulement** L et sa **pente** moyenne I.

## La période de retour
On ne dimensionne pas pour « la pluie la plus forte possible », mais pour une pluie qui revient en moyenne tous les T ans : **période de retour** de 2 à 5 ans pour les caniveaux d'une cour, **10 ans** pour la voirie et les réseaux urbains, 25 à 100 ans pour les ouvrages importants (traversées de routes principales, protection contre les inondations). Une pluie décennale a une chance sur dix de se produire chaque année.

## Le temps de concentration
C'est le temps que met l'eau tombée au point le plus éloigné pour atteindre l'exutoire. Pour un petit bassin, une formule courante (Kirpich) :
$$ tc ≈ 0,0195 × L^0,77 × I^(− 0,385)     (tc en minutes, L en m, I en m/m)
Le débit de pointe est atteint pour une averse qui dure **tc** : plus le bassin est petit et pentu, plus la pluie à prendre en compte est **courte et intense**.

## L'intensité de pluie : les courbes IDF
Les courbes **Intensité-Durée-Fréquence** (IDF), établies par les services météorologiques, donnent l'intensité i (mm/h) en fonction de la durée t et de la période de retour. On les écrit souvent sous la forme de **Montana** : **i = a × t^(− b)**. Les valeurs de a et b sont propres à chaque ville et à chaque période de retour.

## Le débit de pointe : méthode rationnelle
$$ Q = C × i × A / 3,6     (Q en m³/s ; i en mm/h ; A en km²)
ou Q (L/s) = C × i × A(m²)/3 600. Elle est valable pour des bassins de quelques hectares à quelques km².

> [!exemple] Quartier de 5 ha (exemple pédagogique)
> L = 400 m ; I = 2 % ; C = 0,6 ; courbe IDF décennale supposée : i = 600 × t^(− 0,5) (i en mm/h, t en min).
> tc = 0,0195 × 400^0,77 × 0,02^(− 0,385) = **8,9 min** → i = 600 × 8,9^(− 0,5) = **201 mm/h**.
> Q = 0,6 × 201 × 0,05/3,6 = **1,68 m³/s**.
> Ouvrage : une buse Ø 800 à 1 % (1,29 m³/s) est **insuffisante** ; une buse Ø 1 000 (2,34 m³/s) ou un dalot convient.

## Concevoir le drainage d'un projet
1. Délimiter les **bassins versants** et repérer les exutoires naturels (ne jamais les boucher) ;
2. Calculer les **débits de projet** (période de retour adaptée) ;
3. Dimensionner caniveaux, buses et dalots (**Manning**), vérifier les vitesses (dépôts, érosion) ;
4. Prévoir les **ouvrages annexes** : regards, grilles, avaloirs, têtes d'ouvrage, protections en enrochements, bassins de rétention si l'aval est saturé ;
5. Prévoir l'**entretien** : curage avant la saison des pluies (les ouvrages bouchés par les déchets sont la première cause d'inondation urbaine).

> [!retenir]
> - Bassin versant : A, C, L, I ; période de retour de 2 à 100 ans selon l'enjeu.
> - tc (Kirpich) ≈ 0,0195 L^0,77 I^(−0,385) ; i = a t^(−b) (IDF).
> - Q = C i A/3,6 (m³/s, mm/h, km²).
> - Dimensionner par Manning ; entretenir les ouvrages.`,
 exercices:[
  {t:"Débit d'un lotissement", d:1, e:`Un lotissement de 3 ha a un coefficient de ruissellement de 0,55 ; l'intensité de projet est de 150 mm/h. Calculer le débit de pointe.`, c:`A = 0,03 km² → Q = 0,55 × 150 × 0,03/3,6 = **0,69 m³/s**.`},
  {t:"Temps de concentration", d:2, e:`Un petit bassin a une longueur d'écoulement de 250 m et une pente de 3 %. Calculer tc (Kirpich), puis l'intensité avec la courbe de l'exemple (i = 600 t^(−0,5)).`, c:`tc = 0,0195 × 250^0,77 × 0,03^(− 0,385) = 0,0195 × 70,4 × 3,85 = **5,3 min**.
i = 600 × 5,3^(− 0,5) = 600/2,30 = **261 mm/h** (pluie très courte et très intense).`},
  {t:"Débit et ouvrage", d:2, e:`Ce bassin de 2 ha a un C de 0,7. Calculer le débit de projet (i = 261 mm/h) et choisir une buse posée à 1,5 % (capacités : Ø 600 : 0,73 m³/s ; Ø 800 : 1,58 m³/s).`, c:`Q = 0,7 × 261 × 0,02/3,6 = **1,02 m³/s** → la Ø 600 est insuffisante ; on choisit **Ø 800** (1,58 m³/s), qui laisse une marge pour les débris.`},
  {t:"Période de retour", d:1, e:`Quelle est la probabilité qu'une pluie décennale se produise au moins une fois pendant les 10 ans d'utilisation d'un ouvrage ?`, c:`Probabilité de ne pas se produire une année donnée : 0,9 → sur 10 ans : 0,9¹⁰ = 0,35.
Probabilité qu'elle se produise **au moins une fois** : 1 − 0,35 = **65 %** : une pluie « décennale » a de grandes chances d'arriver pendant la vie d'un ouvrage ; il doit donc la supporter sans dommage.`},
  {t:"Projet de drainage d'une école", d:3, e:`Une école de 1,2 ha (toitures, cours bétonnées, terrain de sport en latérite) est située en bas d'un versant de 4 ha (savane) qui ruisselle vers elle. Proposer une démarche de drainage et les ouvrages principaux.`, c:`1) Délimiter les **deux bassins** : le versant amont (4 ha, C ≈ 0,2 à 0,3) et l'école (1,2 ha, C moyen ≈ 0,7).
2) **Intercepter** les eaux du versant **avant** l'école par un **fossé de crête** ou un caniveau périphérique qui les contourne vers l'exutoire naturel.
3) Drainer l'intérieur : descentes de toiture et **caniveaux** le long des bâtiments et des cours, regards, avaloirs ; terrain de sport avec pentes de 1 à 2 % et fossés latéraux.
4) Calculer les débits (période de retour 10 ans), dimensionner par Manning, protéger les sorties (enrochements), éventuellement **bassin de rétention** ou noues si l'aval est saturé.
5) Programme d'**entretien** : curage avant chaque saison des pluies, sensibilisation contre les déchets.`}
 ],
 quiz:[
  {q:"Un bassin versant est :", o:["La surface dont les eaux convergent vers un même exutoire","Un bassin de piscine","Un réservoir","Une nappe"], r:0, e:"Délimité par les lignes de crête."},
  {q:"Le temps de concentration est :", o:["Le temps de parcours de l'eau depuis le point le plus éloigné","La durée de la saison des pluies","Le temps de vidange d'une fosse","La durée d'un orage"], r:0, e:"Il fixe la durée de pluie critique."},
  {q:"Période de retour courante pour la voirie urbaine :", o:["10 ans","1 jour","1 000 ans","1 mois"], r:0, e:"Compromis coût/risque."},
  {q:"Méthode rationnelle (unités m³/s, mm/h, km²) :", o:["Q = C i A/3,6","Q = C i A","Q = i/A","Q = K S R^(2/3) √I"], r:0, e:"Débit de pointe."},
  {q:"Première cause d'inondation urbaine liée aux ouvrages :", o:["Leur obstruction par les déchets","Leur trop grande taille","La pente","Le béton"], r:0, e:"Entretien indispensable."}
 ]}
]});
