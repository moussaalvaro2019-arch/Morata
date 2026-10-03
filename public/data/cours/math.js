/* =====================================================================
   Mathématiques — cours complet (3 niveaux)
   Débutant : calcul numérique et unités, fractions et pourcentages,
              proportionnalité et échelles, aires et périmètres, angles,
              triangles et Thalès
   Intermédiaire : Pythagore et trigonométrie, volumes, équations et
              systèmes, fonctions affines, second degré, statistiques
   Avancé : triangles quelconques, repérage et vecteurs, suites,
            logarithmes et exponentielles, probabilités, calculs financiers
   ===================================================================== */
A.addMatiere({
 id:"math",
 titre:"Mathématiques",
 court:"Maths",
 groupe:"fond",
 icone:"sigma",
 couleur:"#2F6FDB",
 niveau:"Débutant",
 heures:65,
 ordre:1,
 resume:"Les mathématiques utiles au bâtiment, du calcul de base aux outils avancés : unités et conversions, fractions et pourcentages, proportionnalité et échelles, géométrie plane et dans l'espace, Pythagore et trigonométrie, équations, fonctions, statistiques, triangles quelconques, repérage, suites, logarithmes, probabilités et calculs financiers, avec applications de chantier et exercices corrigés.",
 objectifs:[
  "Calculer avec les unités, les puissances de 10, les fractions et les pourcentages",
  "Calculer aires, périmètres et volumes d'ouvrages",
  "Utiliser Pythagore, Thalès et la trigonométrie (pentes, toitures, escaliers, topographie)",
  "Résoudre des équations et des systèmes, utiliser des fonctions",
  "Exploiter des statistiques et des probabilités pour le contrôle qualité",
  "Utiliser suites, logarithmes et calculs financiers"
 ],
 applications:[
  "Surfaces de carrelage et de peinture, volumes de béton et de fouilles",
  "Pente d'une toiture, d'une rampe ou d'une canalisation",
  "Lecture des plans au 1/50 et au 1/100",
  "Contrôle statistique des résistances du béton",
  "Calculs topographiques et financiers"
 ],
 chapitres:[
{id:"math-1", niv:1, titre:"Calcul numérique, unités et conversions", duree:45, contenu:`## Les puissances de 10 et l'écriture scientifique
- 10³ = 1 000 ; 10⁶ = 1 000 000 ; 10⁻³ = 0,001 ; 10⁻⁶ = 0,000 001 ;
- Règles : 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ ; 10ᵃ / 10ᵇ = 10ᵃ⁻ᵇ ;
- **Écriture scientifique** : un nombre entre 1 et 10 multiplié par une puissance de 10 : 0,000 012 = **1,2 × 10⁻⁵** (dilatation de l'acier) ; 210 000 MPa = **2,1 × 10⁵ MPa**.

## Les préfixes et les unités SI
| Préfixe | Symbole | Facteur |
|---|---|---|
| méga | M | 10⁶ |
| kilo | k | 10³ |
| centi | c | 10⁻² |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |
Longueur (m), masse (kg), temps (s), force (N), pression (Pa = N/m²), énergie (J), puissance (W).

## Les conversions
- **Surfaces** : 1 m² = 100 dm² = 10 000 cm² ; 1 ha = 10 000 m² ; 1 km² = 100 ha ;
- **Volumes** : 1 m³ = 1 000 dm³ = 1 000 L ; 1 L = 1 dm³ ;
- **Masses** : 1 t = 1 000 kg ;
- **Forces et pressions** : 1 kN = 1 000 N ; 1 MPa = 1 N/mm² = 1 000 kPa ; 1 bar = 100 kPa = 0,1 MPa.
Pour les surfaces, on décale de **2 rangs** par unité ; pour les volumes, de **3 rangs**.
> [!exemple] Conversions de chantier
> 3 450 cm² = **0,345 m²** ; 2,5 m³ = **2 500 L** ; 0,75 t = **750 kg** ; un débit de 12 L/min = 12 × 60 / 1 000 = **0,72 m³/h**.

## Masse, volume et masse volumique
**Masse = masse volumique × volume** : 2,5 m³ de béton à 2,4 t/m³ pèsent **6 t** ; poids ≈ 6 × 10 = 60 kN.

## Arrondis et ordres de grandeur
On arrondit le **résultat final** (pas les calculs intermédiaires) avec un nombre de chiffres cohérent avec la précision des données : 2 décimales en mètres pour le métré, au sac entier pour le ciment (arrondi supérieur). Vérifier l'**ordre de grandeur** évite les erreurs grossières (une semelle de maison ne fait pas 30 m³ !).

## Application détaillée : le poids d'une dalle
Une dalle pleine de **6,00 × 4,50 m** et de **16 cm** d'épaisseur, en béton armé de masse volumique **2,5 t/m³**. Quelle charge apporte-t-elle par m² ?
1. **Tout convertir en mètres** : 16 cm = 0,16 m ;
2. **Volume** : 6,00 × 4,50 × 0,16 = **4,32 m³** ;
3. **Masse** : 4,32 × 2,5 = **10,8 t** ;
4. **Poids** : 10,8 t ≈ 10,8 × 10 = **108 kN** ;
5. **Charge par m²** : 108 / (6,00 × 4,50) = 108 / 27 = **4 kN/m²** (on retrouve 0,16 × 25 kN/m³ = 4 kN/m² : c'est la règle « épaisseur × 25 »).

## Estimer avant de calculer
Avant de taper sur la calculatrice, on fait un calcul mental grossier : la section d'un tuyau de Ø 0,62 m vaut π × 0,62² / 4 ≈ 3 × 0,4 / 4 = **0,3 m²** ; la calculatrice donne 0,302 m² : le résultat est plausible. Si elle affiche 3,02 ou 0,0302, une virgule a été mal placée.

| Grandeur | Conversion utile |
|---|---|
| Masse volumique | 2 400 kg/m³ = 2,4 t/m³ = 24 kN/m³ environ |
| Débit | 0,72 m³/h = 720 L / 3 600 s = **0,2 L/s** |
| Contrainte | 25 MPa = 25 N/mm² = 25 000 kN/m² |
| Surface | 1 cm² = 10⁻⁴ m² ; 1 mm² = 10⁻⁶ m² |

> [!attention] Erreurs fréquentes
> - Mélanger cm et m dans un même produit (6 × 4,5 × 16 = 432 « m³ » au lieu de 4,32 m³).
> - Convertir les surfaces ou les volumes comme des longueurs : 1 m² = 10 000 cm², pas 100 cm².
> - Arrondir trop tôt : on garde 3 ou 4 chiffres dans les calculs et on arrondit le résultat final.
> - Oublier l'unité dans la réponse : « 4 » ne veut rien dire, « 4 kN/m² » si.

> [!retenir]
> - Surfaces : 2 rangs par unité ; volumes : 3 rangs ; 1 m³ = 1 000 L.
> - 1 MPa = 1 N/mm² ; 1 bar = 0,1 MPa.
> - Masse = ρ × V ; arrondir à la fin, contrôler l'ordre de grandeur.`,
 exercices:[
  {t:"Conversions", d:1, e:`Convertir : a) 0,85 m² en cm² ; b) 45 000 cm² en m² ; c) 3,2 ha en m² ; d) 750 L en m³ ; e) 0,035 m³ en litres ; f) 25 MPa en N/mm² et en kPa.`, c:`a) **8 500 cm²** ; b) **4,5 m²** ; c) **32 000 m²** ; d) **0,75 m³** ; e) **35 L** ; f) **25 N/mm²** = **25 000 kPa**.`},
  {t:"Écriture scientifique", d:1, e:`Écrire en notation scientifique : a) 0,000 012 ; b) 210 000 ; c) 0,0045 ; d) 7 850. Calculer 2,1 × 10⁵ × 1,2 × 10⁻⁵.`, c:`a) **1,2 × 10⁻⁵** ; b) **2,1 × 10⁵** ; c) **4,5 × 10⁻³** ; d) **7,85 × 10³**.
Produit : 2,1 × 1,2 × 10⁵⁻⁵ = **2,52** (contrainte en MPa provoquée par une déformation de 1,2 × 10⁻⁵ dans l'acier).`},
  {t:"Masse d'un camion de matériaux", d:1, e:`Un camion transporte 8 m³ de sable (1,6 t/m³) ; un autre 6 m³ de gravier (1,5 t/m³). Calculer les masses. Lequel est le plus chargé ?`, c:`Sable : 8 × 1,6 = **12,8 t** ; gravier : 6 × 1,5 = **9 t** → le camion de sable.`},
  {t:"Débit et durée de remplissage", d:2, e:`Une citerne de 5 m³ est remplie par un tuyau débitant 20 L par minute. Combien de temps faut-il ? Exprimer le débit en m³/h.`, c:`5 m³ = 5 000 L → 5 000 / 20 = **250 min = 4 h 10 min**.
Débit : 20 × 60 / 1 000 = **1,2 m³/h**.`},
  {t:"Ordre de grandeur", d:1, e:`Un élève trouve qu'une dalle de 10 × 8 m et 15 cm d'épaisseur contient 1 200 m³ de béton. Trouver l'erreur.`, c:`Volume correct : 10 × 8 × 0,15 = **12 m³**. L'élève a pris 15 au lieu de 0,15 (oubli de la conversion des cm en m) : résultat 100 fois trop grand. Toujours convertir en mètres avant de multiplier.`}
 ],
 quiz:[
  {q:"1 m³ = ", o:["1 000 L","100 L","10 L","10 000 L"], r:0, e:"1 L = 1 dm³."},
  {q:"1 m² = ", o:["10 000 cm²","100 cm²","1 000 cm²","1 000 000 cm²"], r:0, e:"2 rangs par unité."},
  {q:"1 MPa = ", o:["1 N/mm²","1 N/m²","1 kN/mm²","10 N/mm²"], r:0, e:"10⁶ N/m²."},
  {q:"0,0012 en écriture scientifique :", o:["1,2 × 10⁻³","1,2 × 10³","12 × 10⁻²","0,12 × 10⁻²"], r:0, e:"Un chiffre avant la virgule."},
  {q:"Masse de 2 m³ de béton à 2,4 t/m³ :", o:["4,8 t","2,4 t","1,2 t","48 t"], r:0, e:"ρ × V."}
 ]},
{id:"math-10", niv:1, titre:"Fractions, priorités et pourcentages", duree:40, contenu:`## Les priorités de calcul
Parenthèses → puissances → multiplications et divisions → additions et soustractions (de gauche à droite). Ex. : 2 + 3 × 4 = 14 (et non 20) ; (2 + 3) × 4 = 20.

## Les fractions
- Simplifier : 12/16 = 3/4 ;
- Additionner : réduire au même dénominateur : 3/4 + 2/5 = 15/20 + 8/20 = **23/20** ;
- Multiplier : 2/3 × 3/4 = 6/12 = 1/2 ; diviser : multiplier par l'inverse.
> [!exemple] Dosage en volumes 1 : 2 : 3
> Un béton dosé « 1 volume de ciment, 2 de sable, 3 de gravier » contient 1/6 de ciment, 2/6 de sable et 3/6 de gravier (en volume de matériaux). Pour 300 L de matériaux : **50 L de ciment, 100 L de sable, 150 L de gravier**.

## Les pourcentages
- p % d'une quantité : quantité × p / 100 ;
- Augmenter de p % : × (1 + p/100) ; diminuer : × (1 − p/100) ;
- Retrouver la valeur initiale : valeur finale / (1 + p/100) ;
- Pourcentage d'une part : part / total × 100.
> [!exemple] Pertes et TVA
> 120 sacs + 5 % de pertes : 120 × 1,05 = **126 sacs** ; un devis de 2 360 000 F TTC (TVA 18 %) vaut 2 360 000 / 1,18 = **2 000 000 F HT**.

## Les pentes
Une pente en % est un rapport : dénivelé / longueur horizontale × 100. 1 cm par mètre = **1 %** ; une pente de 1/20 = **5 %** ; 2 cm/m = 2 %.

## Méthode : les pourcentages successifs
Deux hausses ou baisses successives **se multiplient**, elles ne s'additionnent pas :
- + 10 % puis + 10 % : × 1,10 × 1,10 = × 1,21 → **+ 21 %** (et non + 20 %) ;
- + 20 % puis − 20 % : × 1,20 × 0,80 = × 0,96 → **− 4 %** (on ne revient pas au prix de départ) ;
- **Taux d'évolution** entre deux valeurs : (valeur finale − valeur initiale) / valeur initiale × 100. Le sac de ciment passe de 4 800 F à 5 400 F : 600 / 4 800 = **+ 12,5 %**.

> [!exemple] Remise puis TVA sur une facture
> Montant HT 1 500 000 F, remise de 5 %, puis TVA 18 %.
> Après remise : 1 500 000 × 0,95 = **1 425 000 F HT** ; TTC : 1 425 000 × 1,18 = **1 681 500 F**.
> La TVA s'applique toujours **après** la remise, sur le net HT.

> [!exemple] Mortier dosé 1 : 4 pour une gâchée de 200 L
> 1 + 4 = 5 parts ; une part = 200 / 5 = 40 L.
> Ciment : **40 L** ; sable : 4 × 40 = **160 L**.
> Contrôle : 40 + 160 = 200 L.

## Méthode pour une proportion « a : b : c »
1. Additionner les parts (1 + 2 + 3 = 6) ;
2. Diviser la quantité totale par ce total : on obtient **une part** ;
3. Multiplier la part par chaque coefficient ;
4. Vérifier que la somme redonne le total.

> [!attention] Erreurs fréquentes
> - Retrouver un montant HT en retirant 18 % : 2 360 000 × 0,82 = 1 935 200 F (faux) ; il faut **diviser** par 1,18 → 2 000 000 F.
> - Additionner des pourcentages successifs.
> - Calculer 2 + 3 × 4 de gauche à droite (20 au lieu de 14).
> - Additionner des fractions en additionnant numérateurs et dénominateurs (1/2 + 1/3 ≠ 2/5 ; = 5/6).

> [!retenir]
> - Priorités : parenthèses, puissances, × et ÷, puis + et −.
> - Fractions : même dénominateur pour additionner.
> - × (1 + p/100) pour augmenter ; ÷ (1 + p/100) pour retrouver la valeur initiale.`,
 exercices:[
  {t:"Priorités", d:1, e:`Calculer : a) 12 − 4 × 2 ; b) (12 − 4) × 2 ; c) 3 + 2 × 5² ; d) 0,5 × 9 × 4² / 8.`, c:`a) 12 − 8 = **4** ; b) 8 × 2 = **16** ; c) 3 + 2 × 25 = **53** ; d) 0,5 × 9 × 16 / 8 = 72 / 8 = **9** (les puissances se calculent avant les multiplications).`},
  {t:"Fractions", d:1, e:`Calculer et simplifier : a) 1/2 + 1/3 ; b) 5/6 − 1/4 ; c) 3/8 × 4/9 ; d) (2/3) / (4/5).`, c:`a) 3/6 + 2/6 = **5/6** ; b) 10/12 − 3/12 = **7/12** ; c) 12/72 = **1/6** ; d) 2/3 × 5/4 = 10/12 = **5/6**.`},
  {t:"Dosage en volumes", d:2, e:`Un mortier est dosé 1 : 4 (1 volume de ciment pour 4 de sable). Pour 250 L de mélange sec, quels volumes ? Un sac de ciment occupe environ 35 L : combien de sacs ?`, c:`Ciment : 250 / 5 = **50 L** ; sable : **200 L**.
Sacs : 50 / 35 = 1,43 → environ **1,5 sac** (on prépare en pratique des gâchées d'un sac pour 140 L de sable).`},
  {t:"Retrouver un prix initial", d:2, e:`Après une hausse de 8 %, le sac de ciment coûte 5 940 F. Quel était son prix avant la hausse ? Si le prix baisse ensuite de 8 %, revient-il au prix initial ?`, c:`Avant : 5 940 / 1,08 = **5 500 F**.
Après une baisse de 8 % : 5 940 × 0,92 = **5 465 F** ≠ 5 500 F : une hausse puis une baisse du même pourcentage ne se compensent pas.`},
  {t:"Pente d'une canalisation", d:1, e:`Une canalisation descend de 18 cm sur 12 m. Quelle est sa pente en % ? Respecte-t-elle le minimum de 1 % ?`, c:`Pente : 0,18 / 12 × 100 = **1,5 %** ≥ 1 % ✔.`}
 ],
 quiz:[
  {q:"2 + 3 × 4 = ", o:["14","20","24","9"], r:0, e:"Multiplication d'abord."},
  {q:"1/4 + 1/4 = ", o:["1/2","2/8","1/8","1/16"], r:0, e:"2/4 = 1/2."},
  {q:"Augmenter de 5 % revient à multiplier par :", o:["1,05","0,95","5","1,5"], r:0, e:"1 + 5/100."},
  {q:"Une pente de 1/50 vaut :", o:["2 %","50 %","5 %","0,5 %"], r:0, e:"1/50 = 0,02."},
  {q:"1 180 F TTC (TVA 18 %) correspondent à :", o:["1 000 F HT","967,6 F HT","1 180 F HT","982 F HT"], r:0, e:"1 180 / 1,18."}
 ]},
{id:"math-6", niv:1, titre:"Proportionnalité, règle de trois et échelles", duree:45, contenu:`## La proportionnalité
Deux grandeurs sont **proportionnelles** si l'une s'obtient en multipliant l'autre par un même nombre (le **coefficient de proportionnalité**). Ex. : sacs de ciment = 7 × volume de béton (dosage 350 kg/m³).

## La règle de trois
> [!exemple] 7 sacs pour 1 m³ : combien pour 4,3 m³ ?
> 4,3 × 7 / 1 = **30,1 → 31 sacs** (arrondi supérieur).
Méthode : on écrit les deux grandeurs en colonnes, on multiplie en croix et on divise.

## La proportionnalité inverse
Quand l'une double, l'autre est divisée par 2 : **nombre d'ouvriers × durée = constante** (pour un travail donné). Ex. : 3 maçons en 12 jours = 36 jours-maçon → 4 maçons en **9 jours**.

## Les échelles
$$ longueur sur le plan = longueur réelle × échelle      échelle = 1/n
- 1/100 : 1 cm sur le plan = 1 m ; 1/50 : 1 cm = 0,50 m ; 1/200 : 1 cm = 2 m ;
- Les **surfaces** varient comme le **carré** de l'échelle : 1 cm² au 1/100 représente 1 m² ; au 1/50, 0,25 m².
> [!exemple]
> Une pièce mesure 4,2 × 3,6 cm sur un plan au 1/100 : en réalité **4,20 × 3,60 m** = 15,12 m².

## Vitesses, débits, rendements
Ce sont des rapports : vitesse = distance / temps ; débit = volume / temps ; rendement = quantité / temps. Ex. : une pompe de 1,2 m³/h remplit 6 m³ en **5 h**.

## Méthode : reconnaître une situation proportionnelle
On dresse un **tableau** : si l'on passe d'une ligne à l'autre en multipliant toujours par le même nombre, il y a proportionnalité.

| Surface carrelée (m²) | 12 | 24 | 60 | 150 |
|---|---|---|---|---|
| Durée pour un carreleur (j) | 1 | 2 | 5 | 12,5 |

Un carreleur qui pose **12 m²/jour** met 150 / 12 = **12,5 jours** pour 150 m² ; deux carreleurs mettent **6,25 jours** (proportionnalité inverse). Trois maçons à 10 m²/j chacun montent 180 m² de mur en 180 / (3 × 10) = **6 jours**.

> [!exemple] Retrouver l'échelle d'un plan
> Un mur de 15 m mesure 7,5 cm sur le plan.
> Échelle = 7,5 cm / 1 500 cm = 1/200.
> Toujours mettre les deux longueurs dans la **même unité** avant de diviser.

## Quand ce n'est pas proportionnel
Un coût comportant une **partie fixe** n'est pas proportionnel. Location d'une bétonnière : 15 000 F/jour + 20 000 F de transport.
- 2 jours : 20 000 + 2 × 15 000 = **50 000 F** ;
- 4 jours : 20 000 + 4 × 15 000 = **80 000 F** (et non 2 × 50 000 = 100 000 F).
La règle de trois ne s'applique qu'à la partie variable (voir les fonctions affines au niveau 2).

> [!exemple] Pente d'un dallage
> Pente de 2 % sur 12 m.
> Dénivelé = 12 × 2 / 100 = 0,24 m = **24 cm**.
> Le dénivelé est proportionnel à la longueur.

> [!attention] Erreurs fréquentes
> - Appliquer une règle de trois à une situation de proportionnalité **inverse** (plus d'ouvriers ne donne pas plus de jours).
> - Oublier la partie fixe d'un coût.
> - Convertir une surface d'un plan avec l'échelle simple au lieu de l'échelle au carré.
> - Arrondir les sacs ou les jours vers le bas : on arrondit à l'**unité supérieure**.

> [!retenir]
> - Proportionnalité : y = k x ; règle de trois.
> - Proportionnalité inverse : ouvriers × durée = constante.
> - Échelle 1/n : réel = plan × n ; surfaces × n².`,
 exercices:[
  {t:"Règle de trois", d:1, e:`a) 12,5 agglos par m² : combien pour 36,8 m² ? b) 0,40 m³ de sable par m³ de béton : combien pour 6,5 m³ ? c) Un ouvrier enduit 15 m² par jour : combien de jours pour 96 m² ?`, c:`a) 36,8 × 12,5 = **460 agglos** ; b) 6,5 × 0,40 = **2,6 m³** ; c) 96 / 15 = 6,4 → **7 jours**.`},
  {t:"Proportionnalité inverse", d:1, e:`5 manœuvres creusent une tranchée en 8 jours. Combien de jours avec 4 manœuvres ? Combien de manœuvres pour finir en 5 jours ?`, c:`Travail : 5 × 8 = **40 jours-manœuvre**.
4 manœuvres : 40 / 4 = **10 jours** ; en 5 jours : 40 / 5 = **8 manœuvres**.`},
  {t:"Lire un plan", d:1, e:`Sur un plan au 1/50, un mur mesure 13,6 cm et une porte 1,8 cm. Longueurs réelles ? Sur un plan au 1/200, quelle longueur dessiner pour une façade de 24 m ?`, c:`Mur : 13,6 × 50 = 680 cm = **6,80 m** ; porte : **0,90 m**.
Façade au 1/200 : 2 400 / 200 = **12 cm**.`},
  {t:"Surfaces et échelles", d:2, e:`Une parcelle occupe 18 cm² sur un plan au 1/500. Quelle est sa surface réelle ?`, c:`1 cm² au 1/500 représente 5 m × 5 m = **25 m²** → 18 × 25 = **450 m²**.`},
  {t:"Débit d'une pompe", d:2, e:`Une fouille noyée contient 14 m³ d'eau. Une pompe débite 250 L/min. Combien de temps pour la vider ? Et avec deux pompes ?`, c:`Débit : 250 × 60 / 1 000 = **15 m³/h** → 14 / 15 = 0,93 h ≈ **56 min** ; avec deux pompes : **28 min** (si l'eau ne revient pas entre-temps).`}
 ],
 quiz:[
  {q:"7 sacs par m³ : pour 3 m³ il faut :", o:["21 sacs","10 sacs","7 sacs","3 sacs"], r:0, e:"3 × 7."},
  {q:"Au 1/100, 5 cm représentent :", o:["5 m","50 cm","0,5 m","50 m"], r:0, e:"5 × 100 cm."},
  {q:"4 ouvriers mettent 6 jours ; 8 ouvriers mettent :", o:["3 jours","12 jours","6 jours","24 jours"], r:0, e:"Proportionnalité inverse."},
  {q:"Au 1/50, 1 cm² représente :", o:["0,25 m²","50 m²","0,5 m²","2,5 m²"], r:0, e:"0,5 × 0,5."},
  {q:"Débit pour remplir 6 m³ en 2 h :", o:["3 m³/h","12 m³/h","6 m³/h","0,33 m³/h"], r:0, e:"6/2."}
 ]},
{id:"math-2", niv:1, titre:"Géométrie plane : aires et périmètres", duree:45, contenu:`## Les formules de base
| Figure | Périmètre | Aire |
|---|---|---|
| Carré de côté a | 4 a | a² |
| Rectangle L × l | 2 (L + l) | L × l |
| Triangle (base b, hauteur h) | somme des côtés | b × h / 2 |
| Trapèze (bases B et b, hauteur h) | somme des côtés | (B + b) / 2 × h |
| Parallélogramme | somme des côtés | base × hauteur |
| Cercle de rayon R | 2 π R = π D | π R² = π D² / 4 |
| Couronne (D extérieur, d intérieur) | — | π (D² − d²) / 4 |

## Les figures composées
On **découpe** en figures simples, ou on **soustrait** (surface totale − vides).
> [!exemple] Dalle en L
> Rectangle de 8 × 5 m auquel on retire un angle de 3 × 2 m : 40 − 6 = **34 m²**.

> [!exemple] Pièce avec un pan coupé
> Rectangle de 4,00 × 3,50 m dont un angle est coupé par un triangle rectangle de 1,00 × 1,00 m : 14,00 − 0,50 = **13,50 m²**.

## Les surfaces de chantier
- Carrelage : surface au sol (+ chutes) ; plinthes : périmètre − portes ;
- Peinture : surfaces des murs (périmètre × hauteur − ouvertures) + plafonds ;
- Regards circulaires, poteaux ronds : cercles et couronnes.
> [!exemple] Regard circulaire
> Tampon Ø 0,60 m : π × 0,60² / 4 = **0,283 m²** ; dalle annulaire Ø ext 1,20, Ø int 1,00 : π (1,44 − 1,00) / 4 = **0,346 m²**.

## Application détaillée : peindre un pignon
Un pignon est formé d'un rectangle de **8,00 × 3,00 m** surmonté d'un triangle de **8,00 m** de base et **2,00 m** de hauteur. Il comporte une fenêtre de 1,60 × 1,50 m et une porte de 0,90 × 2,10 m.
1. Rectangle : 8,00 × 3,00 = **24,00 m²** ;
2. Triangle : 8,00 × 2,00 / 2 = **8,00 m²** ;
3. Surface brute : **32,00 m²** ;
4. Ouvertures : 1,60 × 1,50 + 0,90 × 2,10 = 2,40 + 1,89 = **4,29 m²** ;
5. Surface à peindre : 32,00 − 4,29 = **27,71 m²**. Avec un rendement de 10 m²/L par couche et deux couches : 27,71 × 2 / 10 = 5,5 L → **6 L**.

> [!exemple] Plinthes d'une chambre
> Chambre de 4,20 × 3,60 m avec une porte de 0,90 m.
> Périmètre : 2 × (4,20 + 3,60) = 15,60 m.
> Plinthes : 15,60 − 0,90 = **14,70 ml**.

> [!exemple] Bassin circulaire de Ø 6 m
> Aire du radier : π × 6² / 4 = **28,27 m²** (étanchéité).
> Périmètre : π × 6 = **18,85 m** (longueur de la margelle).

## Méthode pour une figure composée
1. Faire un **croquis coté** et numéroter les morceaux ;
2. Convertir toutes les cotes en mètres ;
3. Calculer chaque morceau sur une ligne séparée ;
4. Additionner les « pleins », soustraire les « vides » ;
5. Contrôler l'ordre de grandeur avec un rectangle englobant.

> [!attention] Erreurs fréquentes
> - Oublier de diviser par 2 l'aire d'un triangle.
> - Confondre rayon et diamètre dans π R².
> - Confondre périmètre (ml) et aire (m²).
> - Déduire de petites ouvertures que les règles de métré ne déduisent pas (voir le cours de métré).

> [!retenir]
> - Rectangle L × l ; triangle b h / 2 ; trapèze (B + b)/2 × h ; cercle π R².
> - Figures composées : découper ou soustraire.
> - Toujours convertir en mètres avant de calculer.`,
 exercices:[
  {t:"Surface d'un logement", d:1, e:`Un appartement comprend : séjour 5,20 × 4,30 m ; 2 chambres de 3,50 × 3,20 m ; cuisine 3,00 × 2,40 m ; salle d'eau 2,20 × 1,80 m ; couloir 4,00 × 1,10 m. Calculer la surface totale.`, c:`Séjour 22,36 ; chambres 2 × 11,20 = 22,40 ; cuisine 7,20 ; salle d'eau 3,96 ; couloir 4,40 → **60,32 m²**.`},
  {t:"Terrain en trapèze", d:1, e:`Un terrain a la forme d'un trapèze rectangle : bases 22 m et 30 m, hauteur 25 m. Calculer sa surface et la longueur de clôture (le côté oblique mesure 25,96 m).`, c:`Surface : (22 + 30) / 2 × 25 = **650 m²**.
Clôture : 22 + 30 + 25 + 25,96 = **102,96 m**.`},
  {t:"Peinture d'une chambre", d:2, e:`Chambre de 4,00 × 3,50 m, hauteur 2,80 m ; une porte 0,80 × 2,10 et une fenêtre 1,20 × 1,20. Calculer la surface des murs et du plafond à peindre.`, c:`Murs : 2 × (4,00 + 3,50) × 2,80 = 42,00 − 1,68 − 1,44 = **38,88 m²** ; plafond : **14,00 m²** → total **52,88 m²**.`},
  {t:"Poteaux circulaires", d:2, e:`Un hall comporte 6 poteaux ronds de 40 cm de diamètre et 4 m de haut. Calculer la section d'un poteau, la surface latérale à peindre de chacun, puis le total.`, c:`Section : π × 0,40² / 4 = **0,126 m²**.
Surface latérale : π × 0,40 × 4 = **5,03 m²** → 6 poteaux : **30,2 m²**.`},
  {t:"Dalle en forme de T", d:2, e:`Une dalle en T se compose d'une barre horizontale de 9,00 × 3,00 m et d'une barre verticale de 4,00 × 3,00 m placée au milieu en dessous. Calculer sa surface et son périmètre.`, c:`Surface : 27 + 12 = **39 m²**.
Périmètre : 9 + 3 + 3 + 4 + 3 + 4 + 3 + 3 = **32 m** (en parcourant le contour : 9 en haut, 3 à droite, 3 de retour, 4 en descente, 3 en bas, 4 en remontée, 3 de retour, 3 à gauche).`}
 ],
 quiz:[
  {q:"Aire d'un triangle de base 6 m et de hauteur 4 m :", o:["12 m²","24 m²","10 m²","20 m²"], r:0, e:"6 × 4 / 2."},
  {q:"Aire d'un cercle de diamètre 2 m :", o:["3,14 m²","6,28 m²","12,57 m²","1,57 m²"], r:0, e:"π × 1²."},
  {q:"Périmètre d'un rectangle de 5 × 3 m :", o:["16 m","15 m","8 m","30 m"], r:0, e:"2 × (5 + 3)."},
  {q:"Aire d'un trapèze de bases 4 et 6 m, hauteur 2 m :", o:["10 m²","20 m²","24 m²","12 m²"], r:0, e:"(4 + 6)/2 × 2."},
  {q:"Pour une figure composée, on peut :", o:["Découper ou soustraire","Multiplier les périmètres","Ajouter les diagonales","Rien"], r:0, e:"Figures simples."}
 ]},
{id:"math-11", niv:1, titre:"Angles, triangles, Thalès et constructions", duree:45, contenu:`## Les angles
- Angle droit 90°, plat 180°, tour complet 360° ;
- Dans un **triangle**, la somme des angles vaut **180°** ;
- Dans un **polygone** à n côtés : somme des angles intérieurs = (n − 2) × 180° ; un polygone régulier a tous ses angles égaux (hexagone : 120°).

## Les triangles particuliers
- **Isocèle** : deux côtés égaux, deux angles égaux (fermes de charpente symétriques) ;
- **Équilatéral** : trois côtés égaux, angles de 60° ;
- **Rectangle** : un angle droit (Pythagore, trigonométrie : chapitre suivant).

## Le théorème de Thalès et les triangles semblables
Si deux droites parallèles coupent les côtés d'un triangle, les longueurs sont **proportionnelles**. Deux triangles **semblables** ont les mêmes angles et des côtés proportionnels.
> [!exemple] Hauteur d'un bâtiment par son ombre
> Au même moment, un bâton de 1,50 m a une ombre de 2,00 m et le bâtiment une ombre de 24 m : hauteur = 1,50 × 24 / 2,00 = **18 m**.

## Le cercle
Rayon, diamètre, corde, arc ; longueur d'un arc d'angle α : 2 π R × α / 360 ; un angle inscrit dans un demi-cercle est **droit**.

## Les constructions sur le chantier
- **Angle droit** par le triangle 3-4-5 (ou 6-8-10) ;
- **Médiatrice** d'un segment (axe d'une baie, d'un mur) avec deux arcs de même rayon ;
- **Parallèles** par report de deux distances égales ;
- **Arc de cercle** (escalier, bassin) avec un cordeau fixé au centre.

## Application : contrôler l'implantation d'un rectangle
Pour implanter un bâtiment de **12 × 9 m**, on trace les quatre côtés puis on mesure les **deux diagonales** : dans un rectangle, elles sont **égales**. Avec les dimensions 9-12-15 (le triangle 3-4-5 multiplié par 3), chaque diagonale doit mesurer **15,00 m**. Si l'on trouve 15,04 m et 14,96 m, la figure est un parallélogramme : on fait pivoter les côtés jusqu'à l'égalité.

> [!exemple] Thalès dans une ferme
> Un rampant monte de 2,00 m sur une demi-portée horizontale de 4,00 m.
> Hauteur d'un potelet placé à 1,50 m de l'appui : 2,00 × 1,50 / 4,00 = **0,75 m**.
> Les triangles formés par le potelet et par la demi-ferme sont semblables.

## Les polygones réguliers et les coupes
- Angle intérieur d'un polygone régulier à n côtés : (n − 2) × 180° / n ;
- Octogone : 6 × 180 / 8 = **135°** ; pour assembler deux pièces de bois, chacune est coupée à (180 − 135) / 2 = **22,5°** ;
- Hexagone : 120° ; coupe à 30°.

> [!exemple] Longueur d'une bordure en arc
> Arc de rayon 5,00 m et d'angle 90°.
> Longueur : 2 × π × 5,00 × 90 / 360 = **7,85 m**.
> Contrôle : c'est le quart du périmètre du cercle (31,42 / 4).

## Méthode pour un problème de Thalès
1. Repérer les deux droites **parallèles** (verticales, potelets, ombres prises au même instant) ;
2. Écrire l'égalité des rapports en mettant les côtés **correspondants** face à face ;
3. Faire le produit en croix et vérifier que le résultat est plausible.

> [!attention] Erreurs fréquentes
> - Mettre en rapport des côtés qui ne se correspondent pas.
> - Appliquer Thalès sans droites parallèles.
> - Oublier que la somme des angles d'un triangle vaut toujours 180°.

> [!retenir]
> - Triangle : 180° ; polygone : (n − 2) × 180°.
> - Thalès : parallèles → longueurs proportionnelles ; triangles semblables.
> - Angle droit par 3-4-5 ; arc = 2πR × α/360.`,
 exercices:[
  {t:"Hauteur par Thalès", d:1, e:`Un poteau de 2,40 m projette une ombre de 1,60 m. Au même moment, l'ombre d'un château d'eau mesure 14,40 m. Quelle est sa hauteur ?`, c:`Hauteur = 2,40 × 14,40 / 1,60 = **21,60 m**.`},
  {t:"Angles d'une ferme", d:1, e:`Une ferme de charpente forme un triangle isocèle dont l'angle au faîte vaut 140°. Calculer les deux angles à la base. Quelle est la pente du toit en degrés ?`, c:`Angles à la base : (180 − 140) / 2 = **20°** chacun → la pente du toit est de **20°** (≈ 36 %).`},
  {t:"Kiosque hexagonal", d:2, e:`Un kiosque a la forme d'un hexagone régulier de 3 m de côté. Calculer la somme des angles intérieurs, chaque angle et le périmètre.`, c:`Somme : (6 − 2) × 180 = **720°** ; chaque angle : 720 / 6 = **120°** ; périmètre : 6 × 3 = **18 m**.`},
  {t:"Triangles semblables : pente d'une rampe", d:2, e:`Une rampe monte de 0,60 m sur 7,20 m horizontaux. À 3 m du départ (horizontalement), de combien est-elle montée ? Quelle est sa pente ?`, c:`Triangles semblables : 0,60 × 3 / 7,20 = **0,25 m**. Pente : 0,60 / 7,20 = **8,3 %**.`},
  {t:"Arc d'un escalier", d:2, e:`La ligne de foulée d'un escalier hélicoïdal est un arc de rayon 0,90 m qui fait un tour complet (360°). Quelle est sa longueur ? Avec des girons de 25 cm, combien de marches sur un tour ?`, c:`Longueur : 2 × π × 0,90 = **5,65 m** → 5,65 / 0,25 = 22,6 → **22 marches** par tour (giron réel 25,7 cm).`}
 ],
 quiz:[
  {q:"La somme des angles d'un triangle vaut :", o:["180°","360°","90°","270°"], r:0, e:"Toujours."},
  {q:"Un angle d'hexagone régulier vaut :", o:["120°","60°","90°","135°"], r:0, e:"720/6."},
  {q:"Le théorème de Thalès concerne :", o:["Des longueurs proportionnelles avec des parallèles","Les aires des cercles","Les volumes","Les pourcentages"], r:0, e:"Triangles semblables."},
  {q:"Pour tracer un angle droit au cordeau, on utilise :", o:["Le triangle 3-4-5","Le triangle 1-1-1","Le cercle","La règle de trois"], r:0, e:"Pythagore."},
  {q:"Les angles à la base d'un triangle isocèle sont :", o:["Égaux","Toujours droits","Différents","Nuls"], r:0, e:"Symétrie."}
 ]},
{id:"math-3", niv:2, titre:"Pythagore et trigonométrie dans le triangle rectangle", duree:50, contenu:`## Le théorème de Pythagore
Dans un triangle rectangle d'hypoténuse c (côté opposé à l'angle droit) : **c² = a² + b²**.
- Calculer une diagonale, un rampant, une longueur inclinée ;
- **Réciproque** : si c² = a² + b², le triangle est rectangle (contrôle d'équerrage : 3-4-5, 6-8-10).
> [!exemple]
> Diagonale d'une dalle de 12 × 9 m : √(144 + 81) = √225 = **15 m**.

## Les rapports trigonométriques
Pour un angle aigu α d'un triangle rectangle :
$$ sin α = côté opposé / hypoténuse      cos α = côté adjacent / hypoténuse      tan α = côté opposé / côté adjacent
- La **pente** d'un toit ou d'une rampe est tan α : pente 25 % ↔ tan α = 0,25 ↔ α = 14,0° ;
- Pour retrouver un angle : α = arctan(rapport) (touches sin⁻¹, cos⁻¹, tan⁻¹ de la calculatrice, en mode **degrés**).

!fig:triangle|Triangle rectangle : côtés et angle

> [!exemple] Ferme de toiture
> Demi-portée 4,50 m, hauteur au faîtage 1,20 m : rampant = √(4,50² + 1,20²) = **4,66 m** ; pente = 1,20 / 4,50 = **26,7 %** ; angle = arctan 0,267 = **14,9°**.

> [!exemple] Échelle appuyée contre un mur
> Échelle de 6 m inclinée à 75° : hauteur atteinte = 6 × sin 75° = **5,80 m** ; distance du pied au mur = 6 × cos 75° = **1,55 m**.

## Mesurer une hauteur inaccessible
On mesure la distance horizontale d au pied de l'ouvrage et l'angle α sous lequel on voit le sommet : hauteur = d × tan α + hauteur de l'œil.

## Méthode : quel rapport choisir ?
1. Repérer l'**angle** utilisé et nommer les côtés par rapport à lui : opposé, adjacent, hypoténuse (toujours face à l'angle droit, c'est le plus long) ;
2. Noter les deux côtés concernés (le connu et l'inconnu) ;
3. Choisir le rapport qui les relie (moyen mnémotechnique **SOH-CAH-TOA** : Sinus = Opposé/Hypoténuse ; Cosinus = Adjacent/Hypoténuse ; Tangente = Opposé/Adjacent) ;
4. Isoler l'inconnue et calculer en mode **degrés**.

> [!exemple] Rampe d'accès PMR
> Dénivelé 0,60 m, pente maximale 5 %.
> Longueur horizontale : 0,60 / 0,05 = **12,00 m** ; longueur de la rampe : √(12² + 0,60²) = **12,01 m**.
> Angle : arctan 0,05 = **2,86°**.

> [!exemple] Escalier droit : 2,80 m en 16 marches
> Hauteur de marche : 2,80 / 16 = **17,5 cm** ; giron choisi : 28 cm.
> Angle : arctan(17,5 / 28) = **32,0°** ; reculement : 15 girons × 0,28 = **4,20 m**.
> Longueur de la paillasse : √(4,20² + 2,80²) = **5,05 m**.

> [!exemple] Hauteur d'un château d'eau
> On se place à 25 m du pied, l'œil à 1,60 m, et l'on vise le sommet sous 32°.
> Hauteur = 25 × tan 32° + 1,60 = 15,62 + 1,60 = **17,22 m**.

> [!attention] Erreurs fréquentes
> - Calculatrice en radians (sin 30 = − 0,99 au lieu de 0,5).
> - Prendre pour hypoténuse un côté qui n'est pas face à l'angle droit.
> - Confondre pente et angle : 100 % correspond à 45°, pas à 90°.
> - Utiliser Pythagore dans un triangle non rectangle (voir la loi des cosinus au niveau 3).

> [!retenir]
> - Pythagore : c² = a² + b² ; réciproque pour contrôler un angle droit.
> - sin = opposé/hypoténuse ; cos = adjacent/hypoténuse ; tan = opposé/adjacent.
> - Pente = tan α ; calculatrice en mode degrés.`,
 exercices:[
  {t:"Diagonales et équerrage", d:1, e:`a) Diagonale d'un rectangle de 8 × 6 m ? b) Un maçon mesure 3,00 m et 4,00 m sur deux murs depuis l'angle, puis 5,04 m entre les deux points : l'angle est-il droit ?`, c:`a) √(64 + 36) = **10 m**.
b) Il faudrait 5,00 m : avec 5,04 m, l'angle est **un peu ouvert** (plus de 90°) : on corrige jusqu'à 5,00 m.`},
  {t:"Pente et angle d'un toit", d:1, e:`Un toit a 1,50 m de hauteur pour 6,00 m de demi-portée. Calculer la pente en %, l'angle et la longueur du rampant.`, c:`Pente : 1,50 / 6,00 = **25 %** ; angle : arctan 0,25 = **14,0°** ; rampant : √(36 + 2,25) = **6,18 m**.`},
  {t:"Rampe d'accès", d:2, e:`Une rampe pour personnes à mobilité réduite a une pente de 5 % et doit franchir 0,60 m. Calculer la longueur horizontale, la longueur inclinée et l'angle.`, c:`Horizontale : 0,60 / 0,05 = **12,00 m** ; inclinée : √(144 + 0,36) = **12,02 m** ; angle : arctan 0,05 = **2,9°**.`},
  {t:"Hauteur d'un bâtiment", d:2, e:`Depuis un point situé à 25 m du pied d'un immeuble, on voit le sommet sous un angle de 32° ; l'œil est à 1,60 m du sol. Calculer la hauteur de l'immeuble.`, c:`h = 25 × tan 32° + 1,60 = 25 × 0,6249 + 1,60 = 15,62 + 1,60 = **17,22 m**.`},
  {t:"Longueur d'une contrefiche", d:2, e:`Une contrefiche de charpente part d'un point situé à 1,20 m du pied d'un poteau et rejoint le poteau à 1,60 m de hauteur. Calculer sa longueur et l'angle qu'elle fait avec l'horizontale.`, c:`Longueur : √(1,20² + 1,60²) = √4 = **2,00 m** (triangle 3-4-5 agrandi) ; angle : arctan(1,60 / 1,20) = **53,1°**.`}
 ],
 quiz:[
  {q:"Hypoténuse d'un triangle rectangle de côtés 6 et 8 :", o:["10","14","48","100"], r:0, e:"√(36 + 64)."},
  {q:"tan α = ", o:["Opposé / adjacent","Adjacent / hypoténuse","Opposé / hypoténuse","Hypoténuse / opposé"], r:0, e:"La pente."},
  {q:"Une pente de 100 % correspond à :", o:["45°","90°","100°","10°"], r:0, e:"tan 45° = 1."},
  {q:"sin 30° = ", o:["0,5","0,866","1","0"], r:0, e:"Valeur à connaître."},
  {q:"Le triangle 3-4-5 est :", o:["Rectangle","Équilatéral","Isocèle","Obtusangle"], r:0, e:"9 + 16 = 25."}
 ]},
{id:"math-4", niv:2, titre:"Géométrie dans l'espace : volumes et surfaces", duree:50, contenu:`## Les formules des volumes
| Solide | Volume | Surface latérale |
|---|---|---|
| Pavé (L × l × h) | L × l × h | 2 h (L + l) |
| Prisme droit | aire de base × hauteur | périmètre de base × h |
| Cylindre (R, h) | π R² h | 2 π R h |
| Pyramide, cône | aire de base × h / 3 | — |
| Tronc de pyramide | h/3 × (S1 + S2 + √(S1 S2)) | — |
| Sphère (R) | 4/3 π R³ | 4 π R² |

## Les applications au bâtiment
- **Béton** : semelles, poteaux, poutres, dalles (pavés), poteaux ronds et puits (cylindres), glacis (troncs de pyramide) ;
- **Terrassements** : fouilles (pavés, troncs de pyramide), tas de matériaux (cônes) ;
- **Réservoirs** : cuves cylindriques ou rectangulaires (1 m³ = 1 000 L).
> [!exemple] Tas de sable conique
> Diamètre 4 m, hauteur 1,50 m : V = π × 2² × 1,50 / 3 = **6,28 m³**.

> [!exemple] Citerne cylindrique couchée
> Ø 2,50 m, longueur 6 m : V = π × 1,25² × 6 = **29,45 m³ = 29 450 L**.

## Volume et masse
Masse = masse volumique × volume ; poids (kN) ≈ masse (t) × 10. Une sphère d'eau de 1,5 m de rayon contient 4/3 × π × 1,5³ = **14,14 m³**, soit 14,1 t.

## Application détaillée : fouille, déblais et camions
Une fouille de semelle a un fond de **2,00 × 2,00 m**, un haut de **3,00 × 3,00 m** (talus) et une profondeur de **1,50 m** : c'est un tronc de pyramide.
1. S1 = 4,00 m² ; S2 = 9,00 m² ; √(S1 S2) = 6,00 m² ;
2. V = 1,50 / 3 × (4 + 9 + 6) = **9,50 m³** en place ;
3. Avec un **foisonnement** de 25 % : 9,50 × 1,25 = **11,88 m³** à évacuer ;
4. Avec des camions de 6 m³ : 11,88 / 6 = 1,98 → **2 rotations**.

> [!exemple] Poteau rond Ø 30 cm, hauteur 3,00 m
> Béton : π × 0,15² × 3,00 = **0,212 m³**.
> Coffrage (surface latérale) : 2 × π × 0,15 × 3,00 = **2,83 m²**.

> [!exemple] Coffrage d'une poutre 20 × 40 cm de 5 m
> Fond : 0,20 × 5 = 1,00 m² ; joues : 2 × 0,40 × 5 = 4,00 m².
> Total : **5,00 m²** de coffrage pour 0,20 × 0,40 × 5 = **0,40 m³** de béton.

## Méthode pour un volume de chantier
1. Identifier la **forme** de chaque élément (pavé, cylindre, tronc…) ;
2. Convertir les cotes en mètres ;
3. Appliquer la formule et garder le détail par élément ;
4. Multiplier par le **nombre** d'éléments identiques ;
5. Ajouter pertes ou foisonnement à la fin.

> [!attention] Erreurs fréquentes
> - Oublier le « / 3 » des cônes et pyramides.
> - Mettre le diamètre au lieu du rayon dans π R² h.
> - Convertir des cm³ en m³ en divisant par 1 000 (il faut diviser par 1 000 000).
> - Confondre volume en place et volume foisonné pour les terres.

> [!retenir]
> - Prisme, cylindre : base × hauteur ; pyramide, cône : base × hauteur / 3.
> - Tronc de pyramide : h/3 (S1 + S2 + √S1S2) ; sphère : 4/3 π R³.
> - 1 m³ d'eau = 1 000 L = 1 t.`,
 exercices:[
  {t:"Béton de poteaux ronds", d:1, e:`6 poteaux circulaires de 40 cm de diamètre et 4,00 m de haut. Calculer le volume de béton et la surface de coffrage.`, c:`Volume : 6 × π × 0,20² × 4,00 = **3,02 m³** ; coffrage : 6 × π × 0,40 × 4,00 = **30,2 m²**.`},
  {t:"Tas de gravier", d:1, e:`Un tas de gravier conique a 5 m de diamètre et 1,80 m de hauteur. Quel volume ? Combien de camions de 8 m³ ont été livrés ?`, c:`V = π × 2,5² × 1,80 / 3 = **11,78 m³** → environ **1,5 camion** (un camion de 8 m³ et une partie d'un second).`},
  {t:"Citerne", d:2, e:`Une citerne enterrée rectangulaire mesure intérieurement 3,00 × 2,00 m avec 1,80 m de hauteur d'eau. Capacité en litres ? Combien de jours d'autonomie pour une famille consommant 600 L par jour ?`, c:`V = 3 × 2 × 1,8 = **10,8 m³ = 10 800 L** → 10 800 / 600 = **18 jours**.`},
  {t:"Fouille en tronc de pyramide", d:2, e:`Fouille : fond 2,00 × 2,00 m, haut 3,20 × 3,20 m, profondeur 1,20 m. Calculer le volume.`, c:`S1 = 4 ; S2 = 10,24 ; √(S1 S2) = 6,40 → V = 1,20 / 3 × (4 + 10,24 + 6,40) = 0,40 × 20,64 = **8,26 m³**.`},
  {t:"Réservoir sphérique", d:3, e:`Un château d'eau a une cuve sphérique de 3 m de rayon intérieur. Calculer sa capacité et la masse d'eau. Quelle surface d'étanchéité intérieure faut-il ?`, c:`V = 4/3 × π × 3³ = **113,1 m³** → **113 t** d'eau (≈ 1 130 kN sur la structure).
Surface : 4 × π × 3² = **113,1 m²**.`}
 ],
 quiz:[
  {q:"Volume d'un cylindre de rayon 1 m et hauteur 2 m :", o:["6,28 m³","3,14 m³","12,57 m³","2 m³"], r:0, e:"π × 1 × 2."},
  {q:"Le volume d'un cône vaut :", o:["Base × hauteur / 3","Base × hauteur","Base × hauteur / 2","π R"], r:0, e:"Comme une pyramide."},
  {q:"1 m³ d'eau pèse :", o:["1 t","1 kg","100 kg","10 t"], r:0, e:"1 000 L."},
  {q:"Volume d'un pavé de 2 × 3 × 0,5 m :", o:["3 m³","5,5 m³","6 m³","30 m³"], r:0, e:"Produit des dimensions."},
  {q:"Volume d'une sphère :", o:["4/3 π R³","π R²","4 π R²","2 π R"], r:0, e:"Formule à retenir."}
 ]},
{id:"math-5", niv:2, titre:"Équations, inéquations et systèmes", duree:50, contenu:`## Les équations du premier degré
Résoudre a x + b = c : on isole x en faisant la même opération des deux côtés : x = (c − b) / a.
> [!exemple] Combien de sacs ?
> Un mur nécessite 3 sacs pour la fondation plus 0,09 sac par m² ; on dispose de 12 sacs : 3 + 0,09 x = 12 → x = 9 / 0,09 = **100 m²** de mur.

## Transformer une formule
Les formules techniques se « retournent » : σ = F / A → **A = F / σ** ; P = U × I → **I = P / U** ; V = L × l × h → **h = V / (L × l)**.
> [!exemple]
> Semelle : A = N / σsol = 400 kN / 200 kPa = **2,00 m²**.

## Les inéquations
On les résout comme des équations, mais on **inverse le sens** de l'inégalité quand on multiplie ou divise par un nombre **négatif**. Ex. : budget : 5 500 x ≤ 400 000 → x ≤ 72,7 → **72 sacs** au plus.

## Les systèmes de deux équations
Deux inconnues, deux équations : méthode par **substitution** (exprimer une inconnue et la remplacer) ou par **combinaison** (additionner les équations pour éliminer une inconnue).
> [!exemple] Prix du ciment et du sable
> 3 sacs + 2 m³ de sable = 40 500 F ; 5 sacs + 1 m³ = 39 500 F.
> De la 2ᵉ : s = 39 500 − 5 c → 3 c + 2 (39 500 − 5 c) = 40 500 → − 7 c = − 38 500 → **c = 5 500 F** ; s = 39 500 − 27 500 = **12 000 F/m³**.

> [!exemple] Réactions d'une poutre
> Poutre de 6 m, charge de 50 kN à 2 m de A : RA + RB = 50 et 6 RB = 50 × 2 → **RB = 16,7 kN**, **RA = 33,3 kN**.

## Méthode : mettre un problème en équation
1. **Choisir l'inconnue** et l'écrire en toutes lettres (« x = nombre de jours de location ») ;
2. **Traduire** chaque phrase de l'énoncé en relation mathématique ;
3. **Résoudre** en isolant x ;
4. **Vérifier** en remplaçant x dans l'énoncé de départ ;
5. **Conclure** par une phrase avec l'unité et l'arrondi adapté.

> [!exemple] Location d'un compacteur
> 18 000 F/jour + 25 000 F de transport, budget 150 000 F.
> 25 000 + 18 000 x ≤ 150 000 → x ≤ 125 000 / 18 000 = 6,94.
> On peut louer **6 jours** (6,94 n'est pas un nombre entier de jours : on arrondit vers le bas pour respecter le budget).

> [!exemple] Commande de sable et de gravier
> 20 m³ au total pour 264 000 F ; sable 12 000 F/m³, gravier 15 000 F/m³.
> x + y = 20 et 12 000 x + 15 000 y = 264 000.
> Substitution : 12 000 x + 15 000 (20 − x) = 264 000 → − 3 000 x = − 36 000.
> **x = 12 m³ de sable**, **y = 8 m³ de gravier** ; vérification : 144 000 + 120 000 = 264 000 F.

## Retourner une formule plus complexe
- Pression d'eau p = ρ g h → **h = p / (ρ g)** ;
- Moment d'inertie I = b h³ / 12 → h³ = 12 I / b → **h = ∛(12 I / b)** ;
- Aire d'un trapèze S = (B + b) h / 2 → **h = 2 S / (B + b)**.

> [!attention] Erreurs fréquentes
> - Faire passer un terme de l'autre côté sans changer son signe.
> - Diviser un seul terme d'une somme : (3 + 0,09 x) / 0,09 ≠ 3 + x.
> - Oublier d'inverser le sens d'une inéquation après division par un négatif.
> - Ne pas vérifier la solution dans l'énoncé.

> [!retenir]
> - Isoler l'inconnue en faisant la même opération des deux côtés.
> - Retourner les formules : σ = F/A ⇔ A = F/σ.
> - Inéquation : inverser le sens si l'on multiplie par un négatif.
> - Systèmes : substitution ou combinaison.`,
 exercices:[
  {t:"Équations", d:1, e:`Résoudre : a) 4 x − 7 = 21 ; b) 2,5 x + 3 = 0,5 x + 11 ; c) x / 0,15 = 80 ; d) 1,35 G + 1,5 × 2 = 12.`, c:`a) x = 28 / 4 = **7** ; b) 2 x = 8 → **x = 4** ; c) x = 80 × 0,15 = **12** ; d) 1,35 G = 9 → **G = 6,67**.`},
  {t:"Retourner des formules", d:1, e:`a) Un poteau doit porter 900 kN avec σ = 10 MPa : quelle section en cm² ? b) Un appareil de 2 300 W sous 230 V : quelle intensité ? c) Une dalle de 6,4 m³ couvre 40 m² : quelle épaisseur ?`, c:`a) A = F / σ = 900 000 / 10 = 90 000 mm² = **900 cm²** (30 × 30 cm) ; b) I = 2 300 / 230 = **10 A** ; c) h = 6,4 / 40 = **0,16 m**.`},
  {t:"Système de prix", d:2, e:`Une commande de 10 sacs de ciment et 4 barres d'acier coûte 87 000 F ; une autre de 6 sacs et 10 barres coûte 113 000 F. Trouver le prix d'un sac et d'une barre.`, c:`10 c + 4 b = 87 000 (1) ; 6 c + 10 b = 113 000 (2).
(1) × 5 : 50 c + 20 b = 435 000 ; (2) × 2 : 12 c + 20 b = 226 000 → en soustrayant : 38 c = 209 000 → **c = 5 500 F**.
Dans (1) : 4 b = 87 000 − 55 000 = 32 000 → **b = 8 000 F**. Contrôle (2) : 33 000 + 80 000 = 113 000 ✔.`},
  {t:"Budget de carrelage", d:1, e:`Un client dispose de 1 200 000 F pour son carrelage posé. Le carrelage coûte 9 000 F/m² et la pose 5 000 F/m², plus un forfait de déplacement de 60 000 F. Quelle surface maximale peut-il faire réaliser ?`, c:`14 000 x + 60 000 ≤ 1 200 000 → x ≤ 81,4 → **81 m²** au maximum.`},
  {t:"Réactions d'appui", d:2, e:`Poutre de 5 m sur deux appuis A et B, charge de 30 kN à 1,5 m de A. Écrire les deux équations d'équilibre et calculer RA et RB.`, c:`Somme des forces : RA + RB = 30 ; moments en A : 5 RB = 30 × 1,5 = 45 → **RB = 9 kN** → **RA = 21 kN**.`}
 ],
 quiz:[
  {q:"Solution de 3x + 4 = 19 :", o:["5","7","15","23"], r:0, e:"3x = 15."},
  {q:"Si σ = F/A, alors A = ", o:["F/σ","F × σ","σ/F","F − σ"], r:0, e:"On retourne la formule."},
  {q:"−2x > 6 donne :", o:["x < −3","x > −3","x > 3","x < 3"], r:0, e:"On inverse le sens."},
  {q:"Un système de deux équations permet de trouver :", o:["Deux inconnues","Une seule","Aucune","Trois inconnues"], r:0, e:"Autant d'équations que d'inconnues."},
  {q:"P = U × I ; avec P = 1 150 W et U = 230 V, I = ", o:["5 A","264 500 A","0,2 A","50 A"], r:0, e:"1 150/230."}
 ]},
{id:"math-12", niv:2, titre:"Fonctions affines, graphiques et interpolation", duree:45, contenu:`## La fonction affine
f(x) = **a x + b** : sa représentation est une **droite** ; a est le **coefficient directeur** (pente), b l'**ordonnée à l'origine**. Si b = 0, la fonction est **linéaire** (proportionnalité).
- Coefficient directeur entre deux points : **a = (y2 − y1) / (x2 − x1)** ;
- Puis b = y1 − a x1.
> [!exemple]
> Droite passant par (2 ; 7) et (5 ; 13) : a = 6 / 3 = **2** ; b = 7 − 4 = **3** → f(x) = 2 x + 3.

## Les fonctions de coût
Beaucoup de coûts sont affines : **partie fixe + partie proportionnelle**. Comparer deux offres revient à chercher l'**intersection** de deux droites.
> [!exemple] Béton : fabriquer ou acheter ?
> Fabrication sur place : 25 000 F de mise en place + 1 500 F/m³ de surcoût de main-d'œuvre ; BPE : 4 000 F/m³ de supplément. Égalité : 25 000 + 1 500 x = 4 000 x → **x = 10 m³** : au-delà de 10 m³, l'option à coût fixe devient plus intéressante.

## Lire et tracer un graphique
Choisir une échelle pour chaque axe, placer les points, relier (droite si affine), lire une valeur ou une intersection. Les graphiques servent pour les courbes granulométriques, les plannings (courbes d'avancement), les diagrammes de contraintes…

## L'interpolation linéaire
Pour lire une valeur **entre deux lignes d'un tableau**, on suppose une variation linéaire :
$$ y = y1 + (y2 − y1) × (x − x1) / (x2 − x1)
> [!exemple]
> Facteur de portance Nq : 18,4 pour φ = 30°, 23,2 pour φ = 32° → pour φ = 31° : 18,4 + 4,8 × 1/2 = **20,8**.

## Application : choisir entre deux offres de transport
Offre A : 60 000 F par jour + 500 F/km ; offre B : 40 000 F + 900 F/km.
1. Fonctions : A(x) = 500 x + 60 000 ; B(x) = 900 x + 40 000 ;
2. Égalité : 500 x + 60 000 = 900 x + 40 000 → 400 x = 20 000 → **x = 50 km** ;
3. Conclusion : en dessous de 50 km, B est moins chère ; au-delà, A l'emporte (pour 80 km : A = 100 000 F, B = 112 000 F).

> [!exemple] Prévoir une fin de chantier
> Avancement : 35 % en semaine 4 et 60 % en semaine 8.
> a = (60 − 35) / (8 − 4) = 6,25 %/semaine ; b = 35 − 6,25 × 4 = 10.
> 100 % est atteint pour x = (100 − 10) / 6,25 = **14,4 semaines**, soit en semaine 15 si le rythme se maintient.

## Méthode pour tracer une droite
1. Calculer **deux points** (trois pour contrôler) ;
2. Choisir une échelle qui utilise toute la feuille et la noter sur chaque axe avec l'unité ;
3. Placer les points, tracer à la règle ;
4. Lire les valeurs utiles (intersection, ordonnée à l'origine) et les vérifier par le calcul.

> [!astuce] Interpoler entre deux lignes
> Écrire les deux lignes encadrantes l'une sous l'autre.
> Calculer la fraction parcourue (x − x1) / (x2 − x1).
> Appliquer cette fraction à l'écart des y.

> [!attention] Erreurs fréquentes
> - Inverser Δx et Δy dans le calcul de la pente.
> - **Extrapoler** loin en dehors du tableau : la variation n'y est plus forcément linéaire.
> - Oublier les unités et les graduations sur les axes.
> - Comparer deux offres à un seul point sans chercher le point d'équilibre.

> [!retenir]
> - f(x) = a x + b ; a = Δy / Δx.
> - Coût = fixe + variable ; comparer = chercher l'intersection.
> - Interpolation : y = y1 + (y2 − y1)(x − x1)/(x2 − x1).`,
 exercices:[
  {t:"Équation d'une droite", d:1, e:`Trouver l'équation de la droite passant par A (1 ; 4) et B (4 ; 13). Calculer f(10).`, c:`a = (13 − 4) / (4 − 1) = **3** ; b = 4 − 3 = **1** → f(x) = 3 x + 1 ; f(10) = **31**.`},
  {t:"Location d'une bétonnière", d:2, e:`Loueur A : 20 000 F de transport + 8 000 F par jour. Loueur B : 12 000 F par jour, transport compris. À partir de combien de jours A est-il moins cher ?`, c:`20 000 + 8 000 j < 12 000 j → 20 000 < 4 000 j → **j > 5** : au-delà de 5 jours, le loueur A est moins cher (égalité à 5 jours : 60 000 F).`},
  {t:"Interpolation dans un tableau", d:2, e:`Facteur de portance Nγ : 14,6 pour φ = 28° ; 20,1 pour φ = 30°. Estimer Nγ pour φ = 29,2°.`, c:`Nγ ≈ 14,6 + (20,1 − 14,6) × (29,2 − 28) / 2 = 14,6 + 5,5 × 0,6 = **17,9**.`},
  {t:"Courbe d'avancement", d:2, e:`Un chantier de 20 semaines doit avancer de façon régulière de 0 à 100 %. Écrire la fonction avancement prévu (en %) selon la semaine s. À la semaine 8, l'avancement réel est 34 % : avance ou retard ?`, c:`Avancement prévu : f(s) = 5 s (5 % par semaine) → f(8) = **40 %**. Réel 34 % → **retard de 6 points** (environ 1,2 semaine).`},
  {t:"Dilatation en fonction de la température", d:2, e:`Une barre d'acier mesure 12,000 m à 20 °C et 12,0036 m à 45 °C. Écrire la longueur L en fonction de la température T (fonction affine). Quelle longueur à 35 °C ?`, c:`a = 0,0036 / 25 = **0,000144 m/°C** ; L(T) = 12,000 + 0,000144 × (T − 20).
À 35 °C : 12,000 + 0,000144 × 15 = **12,00216 m** (+ 2,2 mm).`}
 ],
 quiz:[
  {q:"Le coefficient directeur de y = 3x − 2 est :", o:["3","−2","1","0"], r:0, e:"a."},
  {q:"Une fonction linéaire passe toujours par :", o:["L'origine","Le point (1 ; 1)","Le point (0 ; 1)","Aucun point fixe"], r:0, e:"b = 0."},
  {q:"Pente entre (0 ; 2) et (4 ; 10) :", o:["2","8","4","0,5"], r:0, e:"8/4."},
  {q:"Interpoler entre 10 (x = 0) et 20 (x = 1) pour x = 0,3 donne :", o:["13","3","30","15"], r:0, e:"10 + 10 × 0,3."},
  {q:"Comparer deux offres de coût affine revient à chercher :", o:["L'intersection des droites","Leur aire","Leur longueur","Leur couleur"], r:0, e:"Point d'égalité."}
 ]},
{id:"math-13", niv:2, titre:"Le second degré : paraboles et optimisation", duree:45, contenu:`## La fonction du second degré
f(x) = **a x² + b x + c** (a ≠ 0) : sa courbe est une **parabole**, tournée vers le haut si a > 0, vers le bas si a < 0. Son **sommet** est en **x = − b / (2a)** : c'est là que f est maximale (a < 0) ou minimale (a > 0).

## Résoudre a x² + b x + c = 0
Discriminant **Δ = b² − 4 a c** :
- Δ > 0 : deux solutions x = (− b ± √Δ) / (2a) ;
- Δ = 0 : une solution x = − b / (2a) ;
- Δ < 0 : pas de solution réelle.
> [!exemple] Terrain rectangulaire de 600 m² et de 100 m de périmètre
> Côtés x et 50 − x : x (50 − x) = 600 → x² − 50 x + 600 = 0 ; Δ = 2 500 − 2 400 = 100 → x = (50 ± 10) / 2 → **20 m et 30 m**.

## Les paraboles dans le bâtiment
- **Moment fléchissant** d'une poutre sur deux appuis sous charge uniforme q : M(x) = q x (L − x) / 2, parabole maximale au milieu : **M max = q L² / 8** ;
- **Arcs** paraboliques, câbles, jets d'eau ;
- **Optimisation** : surface maximale pour une longueur de clôture donnée, coût minimal.
> [!exemple] Moment d'une poutre
> q = 12 kN/m, L = 5 m : M(x) = 6 x (5 − x) ; sommet en x = 2,5 m → M max = 12 × 25 / 8 = **37,5 kN·m**.

## Application : l'aire maximale contre un mur
On dispose de **60 m** de grillage pour clore un dépôt rectangulaire adossé à un mur (trois côtés à clôturer). Côtés perpendiculaires au mur : x ; côté parallèle : 60 − 2x.
1. Aire : S(x) = x (60 − 2x) = − 2x² + 60x ;
2. a = − 2 < 0 : parabole tournée vers le bas, il y a un **maximum** ;
3. Sommet : x = − 60 / (2 × (− 2)) = **15 m** ; côté parallèle : 60 − 30 = **30 m** ;
4. Aire maximale : 15 × 30 = **450 m²**.

> [!exemple] Hauteur d'un arc parabolique
> Portée 10 m, flèche 2,50 m ; origine au milieu, au niveau des appuis : y = 2,50 − 0,1 x².
> À 3 m de l'axe : y = 2,50 − 0,9 = **1,60 m**.
> Contrôle : à x = 5 m (appui), y = 2,50 − 2,50 = 0.

## Méthode de résolution
1. Mettre l'équation sous la forme **a x² + b x + c = 0** (tout d'un côté) ;
2. Relever a, b, c avec leurs **signes** ;
3. Calculer Δ, puis les solutions ;
4. Garder seulement les solutions qui ont un sens (une longueur est positive) ;
5. Vérifier en remplaçant dans l'équation de départ.

> [!attention] Erreurs fréquentes
> - Oublier que le carré d'un nombre négatif est positif : (− 50)² = + 2 500.
> - Écrire − b / 2a au lieu de − b / (2a) dans la calculatrice.
> - Garder une solution négative pour une longueur.
> - Chercher un maximum alors que a > 0 (la parabole n'a qu'un minimum).

> [!retenir]
> - Δ = b² − 4ac ; x = (− b ± √Δ)/(2a).
> - Sommet en x = − b/(2a) : maximum ou minimum.
> - Moment d'une poutre uniformément chargée : parabole, max q L²/8 au milieu.`,
 exercices:[
  {t:"Résoudre des équations", d:1, e:`Résoudre : a) x² − 5 x + 6 = 0 ; b) 2 x² − 8 = 0 ; c) x² + 2 x + 5 = 0.`, c:`a) Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → **2 et 3** ; b) x² = 4 → **x = 2 ou − 2** ; c) Δ = 4 − 20 = − 16 < 0 → **pas de solution réelle**.`},
  {t:"Enclos le long d'un mur", d:2, e:`Avec 60 m de grillage, on veut clôturer une aire de stockage rectangulaire adossée à un mur (3 côtés à clôturer). Quelles dimensions donnent la plus grande surface ?`, c:`Côtés perpendiculaires au mur : x ; côté parallèle : 60 − 2 x. Surface : S = x (60 − 2 x) = − 2 x² + 60 x.
Sommet : x = − 60 / (2 × (− 2)) = **15 m** → côté parallèle **30 m** → S max = **450 m²**.`},
  {t:"Moment maximal", d:1, e:`Une poutre de 6 m sur deux appuis porte 15 kN/m. Écrire M(x) et calculer le moment maximal.`, c:`M(x) = 15 x (6 − x) / 2 = 7,5 x (6 − x) ; maximum au milieu (x = 3 m) : M max = 15 × 36 / 8 = **67,5 kN·m**.`},
  {t:"Arc parabolique", d:2, e:`L'intrados d'un arc a pour équation y = − 0,1 x² + 4 (en m, x mesuré depuis l'axe). Quelle est sa hauteur au centre ? Quelle est sa portée au sol (y = 0) ?`, c:`Hauteur : y(0) = **4 m**. Au sol : 0,1 x² = 4 → x² = 40 → x = ± 6,32 m → portée **12,65 m**.`},
  {t:"Dimensions d'une dalle", d:2, e:`Une dalle rectangulaire a une surface de 72 m² et sa longueur dépasse sa largeur de 6 m. Trouver ses dimensions.`, c:`l (l + 6) = 72 → l² + 6 l − 72 = 0 ; Δ = 36 + 288 = 324 → l = (− 6 + 18) / 2 = **6 m** (la solution négative est rejetée) → longueur **12 m**.`}
 ],
 quiz:[
  {q:"Le discriminant de x² − 4x + 4 vaut :", o:["0","8","32","−16"], r:0, e:"16 − 16."},
  {q:"Le sommet de y = −2x² + 8x est en x = ", o:["2","4","−2","8"], r:0, e:"−8/(2 × −2)."},
  {q:"Si a < 0, la parabole a :", o:["Un maximum","Un minimum","Ni l'un ni l'autre","Deux sommets"], r:0, e:"Tournée vers le bas."},
  {q:"M max d'une poutre uniformément chargée vaut :", o:["q L²/8","q L/2","q L²/2","q L"], r:0, e:"Au milieu."},
  {q:"Si Δ < 0, l'équation a :", o:["Aucune solution réelle","Deux solutions","Une solution","Une infinité"], r:0, e:"Racine d'un négatif impossible."}
 ]},
{id:"math-9", niv:2, titre:"Statistiques et contrôle qualité", duree:50, contenu:`## Pourquoi des statistiques sur un chantier ?
Les mesures (résistances du béton, dimensions, densités de compactage) **varient** toujours un peu. Les statistiques permettent de **résumer** ces séries et de décider si un lot est **conforme**.

## Les indicateurs
- **Moyenne** : x̄ = somme des valeurs / nombre de valeurs ;
- **Médiane** : valeur du milieu de la série rangée (moyenne des deux du milieu si le nombre est pair) ;
- **Étendue** : max − min ;
- **Écart-type** s : dispersion autour de la moyenne :
$$ s = √[ Σ (xi − x̄)² / (n − 1) ]
Un écart-type faible traduit une **fabrication régulière**.

## La résistance caractéristique
Pour le béton, on retient une valeur que **95 %** des résultats dépassent : **fck ≈ fcm − 1,64 s** (loi normale).
> [!exemple] 10 résultats de compression (MPa) : 27,5 ; 29,8 ; 26,1 ; 31,2 ; 28,4 ; 30,5 ; 25,9 ; 29,1 ; 27,8 ; 30,7
> Moyenne : **28,7 MPa** ; médiane : (28,4 + 29,1) / 2 = **28,75** ; étendue : 31,2 − 25,9 = **5,3** ; écart-type : **1,88 MPa**.
> fck ≈ 28,7 − 1,64 × 1,88 = **25,6 MPa** ≥ 25 → béton **conforme** à la classe C25/30.

## Les tableaux et graphiques
On regroupe les valeurs en **classes** (ex. 25–27, 27–29…) et on trace un **histogramme** ; les **effectifs cumulés** donnent la courbe cumulative (comme une courbe granulométrique).

## L'esprit du contrôle
Une moyenne correcte ne suffit pas : une **dispersion** élevée signale une fabrication irrégulière (dosages au jugé, eau variable) et un risque de valeurs faibles. On agit sur la **régularité** autant que sur le niveau moyen.

## Application détaillée : l'écart-type à la main
Affaissements au cône d'Abrams (cm) sur 5 gâchées : 8 ; 10 ; 9 ; 12 ; 11.

| Valeur xi | Écart xi − x̄ | Carré |
|---|---|---|
| 8 | − 2 | 4 |
| 10 | 0 | 0 |
| 9 | − 1 | 1 |
| 12 | + 2 | 4 |
| 11 | + 1 | 1 |
| Somme 50 | 0 | 10 |

Moyenne : 50 / 5 = **10 cm** ; s = √(10 / 4) = **1,58 cm**.

## Le coefficient de variation
**CV = s / x̄** compare la dispersion de séries de niveaux différents : 1,58 / 10 = **15,8 %** pour les affaissements ; 1,88 / 28,7 = **6,6 %** pour les résistances de l'exemple ci-dessus. Pour un béton, un CV inférieur à 10 % traduit une fabrication bien maîtrisée.

> [!astuce] Sur la calculatrice
> Utiliser le mode statistique (STAT).
> Prendre l'écart-type « σn−1 » ou « s » (échantillon).
> La touche « σn » divise par n et sous-estime la dispersion.

## Méthode de contrôle d'un lot de béton
1. Ranger les résultats et repérer d'éventuelles valeurs aberrantes ;
2. Calculer moyenne et écart-type ;
3. Calculer fck ≈ x̄ − 1,64 s ;
4. Comparer à la classe commandée (C25/30 : 25 MPa) et vérifier qu'aucun résultat isolé n'est trop faible ;
5. Conclure : conforme, ou investigations complémentaires (carottages).

> [!attention] Erreurs fréquentes
> - Calculer la médiane sans ranger la série.
> - Se fier à la moyenne seule : un lot très dispersé peut avoir une bonne moyenne et des valeurs dangereuses.
> - Diviser par n au lieu de n − 1 pour un échantillon.

> [!retenir]
> - Moyenne, médiane, étendue, écart-type.
> - fck ≈ fcm − 1,64 s (95 % des résultats au-dessus).
> - Régularité (s faible) = fabrication maîtrisée.`,
 exercices:[
  {t:"Moyenne et médiane", d:1, e:`Densités sèches mesurées sur un remblai (t/m³) : 1,92 ; 1,88 ; 1,95 ; 1,90 ; 1,86. Calculer la moyenne, la médiane et l'étendue.`, c:`Moyenne : 9,51 / 5 = **1,902 t/m³** ; série rangée : 1,86 ; 1,88 ; 1,90 ; 1,92 ; 1,95 → médiane **1,90** ; étendue : **0,09 t/m³**.`},
  {t:"Écart-type", d:2, e:`Résistances (MPa) : 24 ; 26 ; 28 ; 30 ; 32. Calculer la moyenne et l'écart-type (diviser par n − 1).`, c:`Moyenne : **28 MPa**. Écarts : − 4 ; − 2 ; 0 ; 2 ; 4 → carrés : 16 ; 4 ; 0 ; 4 ; 16 → somme 40 → s = √(40 / 4) = √10 = **3,16 MPa**.`},
  {t:"Conformité d'un béton", d:2, e:`Un béton C25/30 donne fcm = 30,5 MPa avec s = 3,8 MPa sur 12 résultats. Calculer fck estimé. Conclure. Que faudrait-il améliorer ?`, c:`fck ≈ 30,5 − 1,64 × 3,8 = 30,5 − 6,2 = **24,3 MPa** < 25 → **non conforme**, malgré une bonne moyenne.
Il faut **réduire la dispersion** (dosages pesés, eau mesurée, granulats réguliers) : avec s = 2 MPa, fck ≈ 27,2 MPa.`},
  {t:"Regrouper en classes", d:1, e:`Classer les 10 résultats de l'exemple du cours dans les classes [25 ; 27[, [27 ; 29[, [29 ; 31[, [31 ; 33[ et donner les effectifs.`, c:`[25 ; 27[ : 25,9 ; 26,1 → **2** ; [27 ; 29[ : 27,5 ; 27,8 ; 28,4 → **3** ; [29 ; 31[ : 29,1 ; 29,8 ; 30,5 ; 30,7 → **4** ; [31 ; 33[ : 31,2 → **1** (total 10).`},
  {t:"Comparer deux centrales", d:2, e:`Deux centrales livrent un C25/30 : A : fcm = 31 MPa, s = 2,0 ; B : fcm = 33 MPa, s = 4,5. Laquelle est la plus fiable ?`, c:`A : fck ≈ 31 − 3,3 = **27,7 MPa** ; B : fck ≈ 33 − 7,4 = **25,6 MPa**.
A est plus **régulière** et offre la meilleure garantie, bien que sa moyenne soit plus faible.`}
 ],
 quiz:[
  {q:"La médiane de 3 ; 7 ; 9 ; 12 ; 20 est :", o:["9","10,2","12","7"], r:0, e:"Valeur du milieu."},
  {q:"L'écart-type mesure :", o:["La dispersion","La moyenne","Le maximum","Le nombre de valeurs"], r:0, e:"Régularité."},
  {q:"fck ≈ ", o:["fcm − 1,64 s","fcm + 1,64 s","fcm / s","fcm × s"], r:0, e:"95 % au-dessus."},
  {q:"Une moyenne élevée avec un écart-type fort :", o:["Peut quand même être non conforme","Est toujours conforme","Est impossible","N'a aucun sens"], r:0, e:"Valeurs faibles fréquentes."},
  {q:"Moyenne de 10 ; 20 ; 30 :", o:["20","60","30","15"], r:0, e:"60/3."}
 ]},
{id:"math-7", niv:3, titre:"Trigonométrie dans les triangles quelconques", duree:50, contenu:`## Quand le triangle n'est pas rectangle
En topographie, en charpente ou pour des terrains irréguliers, les triangles sont rarement rectangles. Trois outils permettent de les « résoudre » (trouver côtés et angles manquants).

## La loi des sinus
$$ a / sin A = b / sin B = c / sin C
(a est le côté opposé à l'angle A). Utile quand on connaît **deux angles et un côté**.
> [!exemple] Base de 100 m, angles 50° et 60° aux extrémités
> Troisième angle : 180 − 50 − 60 = 70°. Côtés : 100 × sin 50° / sin 70° = **81,5 m** ; 100 × sin 60° / sin 70° = **92,2 m**.

## La loi des cosinus (Al-Kashi)
$$ c² = a² + b² − 2 a b cos C
Utile quand on connaît **deux côtés et l'angle compris**, ou **les trois côtés** (pour trouver un angle : cos C = (a² + b² − c²) / (2ab)). C'est Pythagore généralisé (si C = 90°, cos C = 0).
> [!exemple]
> Deux côtés de 7 et 9 m formant 40° : c² = 49 + 81 − 126 × cos 40° = 33,48 → **c = 5,79 m**.

## L'aire d'un triangle quelconque
- Avec deux côtés et l'angle compris : **S = ½ a b sin C** (ex. ½ × 7 × 9 × sin 40° = **20,25 m²**) ;
- Avec les trois côtés (formule de **Héron**) : s = (a + b + c)/2 ; **S = √[s (s − a)(s − b)(s − c)]** (ex. côtés 5, 6, 7 : s = 9 → S = √216 = **14,70 m²**).

## Application : distance inaccessible
Pour mesurer la largeur d'une rivière, on mesure une **base** AB sur une rive et les angles vers un point C de l'autre rive ; la loi des sinus donne AC, puis la largeur = AC × sin A.

## Méthode : quelle loi utiliser ?
| On connaît | On utilise |
|---|---|
| 2 angles et 1 côté | Somme des angles = 180°, puis loi des sinus |
| 2 côtés et l'angle compris | Loi des cosinus pour le 3ᵉ côté |
| 3 côtés | Loi des cosinus pour un angle (le plus grand d'abord) |
| 2 côtés et un angle non compris | Loi des sinus, avec prudence (cas ambigu) |

> [!exemple] Terrain triangulaire de 40, 55 et 70 m
> Héron : s = 82,5 ; S = √(82,5 × 42,5 × 27,5 × 12,5) = **1 098 m²**.
> Plus grand angle (face à 70 m) : cos C = (40² + 55² − 70²) / (2 × 40 × 55) = − 0,0625 → **C = 93,6°**.
> Les autres : **34,8°** et **51,6°** (somme 180° : contrôle).

> [!exemple] Largeur d'une rivière
> Base AB = 50 m ; angles A = 65° et B = 70° vers un arbre C de l'autre rive ; C = 45°.
> AC = 50 × sin 70° / sin 45° = **66,45 m**.
> Largeur = AC × sin 65° = **60,22 m**.

## Le cas ambigu
Quand on connaît deux côtés et un angle **non compris**, sin B = valeur donne deux angles possibles : B et 180° − B. Il faut vérifier lequel est compatible (somme des angles inférieure à 180°, cohérence avec le croquis).

> [!attention] Erreurs fréquentes
> - Associer un côté à un angle qui ne lui est pas opposé.
> - Oublier le signe moins dans c² = a² + b² − 2ab cos C.
> - Calculer un angle obtus avec la loi des sinus (arcsin ne donne que des angles inférieurs à 90°) : préférer la loi des cosinus.
> - Calculatrice en radians.

> [!retenir]
> - Sinus : a/sin A = b/sin B = c/sin C (deux angles et un côté).
> - Cosinus : c² = a² + b² − 2ab cos C (deux côtés et l'angle compris, ou trois côtés).
> - Aire : ½ ab sin C ou Héron.`,
 exercices:[
  {t:"Angle d'un triangle connu par ses côtés", d:2, e:`Un triangle a pour côtés 5, 6 et 7 m. Calculer l'angle opposé au côté de 7 m et l'aire.`, c:`cos C = (25 + 36 − 49) / (2 × 5 × 6) = 12 / 60 = 0,2 → **C = 78,5°**.
Aire (Héron) : s = 9 → √(9 × 4 × 3 × 2) = **14,70 m²** (contrôle : ½ × 5 × 6 × sin 78,5° = 14,70 ✔).`},
  {t:"Surface d'une parcelle triangulaire", d:2, e:`Une parcelle triangulaire a des côtés de 48, 55 et 62 m. Calculer sa surface et l'angle entre les côtés de 48 et 55 m.`, c:`s = 82,5 → S = √(82,5 × 34,5 × 27,5 × 20,5) = **1 266,7 m²**.
Angle : cos = (48² + 55² − 62²) / (2 × 48 × 55) = 1 485 / 5 280 = 0,281 → **73,7°**.`},
  {t:"Largeur d'une rivière", d:3, e:`On mesure une base AB = 80 m sur une rive ; depuis A, le point C (sur l'autre rive) est vu à 72° de AB ; depuis B, à 65°. Calculer AC puis la largeur de la rivière (distance de C à la droite AB).`, c:`Angle en C : 180 − 72 − 65 = **43°**. AC = 80 × sin 65° / sin 43° = **106,3 m**.
Largeur : AC × sin 72° = 106,3 × 0,951 = **101,1 m**.`},
  {t:"Arbalétrier d'une ferme dissymétrique", d:2, e:`Deux arbalétriers de 5,20 m et 4,10 m se rejoignent au faîte en formant un angle de 100°. Quelle est la longueur de l'entrait qui relie leurs pieds ?`, c:`c² = 5,20² + 4,10² − 2 × 5,20 × 4,10 × cos 100° = 27,04 + 16,81 + 7,40 = 51,25 → **c = 7,16 m**.`},
  {t:"Aire avec deux côtés et un angle", d:1, e:`Un terrain triangulaire a deux côtés de 30 m et 45 m formant un angle de 55°. Calculer sa surface.`, c:`S = ½ × 30 × 45 × sin 55° = 675 × 0,819 = **552,9 m²**.`}
 ],
 quiz:[
  {q:"La loi des sinus s'écrit :", o:["a/sin A = b/sin B = c/sin C","a² = b² + c²","a sin A = b sin B","a + b + c = 180"], r:0, e:"Côtés et angles opposés."},
  {q:"Si C = 90°, Al-Kashi devient :", o:["Pythagore","La loi des sinus","Thalès","Héron"], r:0, e:"cos 90° = 0."},
  {q:"Aire d'un triangle avec a = 4, b = 6, C = 30° :", o:["6","12","24","3"], r:0, e:"½ × 4 × 6 × 0,5."},
  {q:"La formule de Héron utilise :", o:["Les trois côtés","Deux angles","Une hauteur","Le périmètre seul sans les côtés"], r:0, e:"Demi-périmètre s."},
  {q:"Pour trouver une distance inaccessible, on mesure :", o:["Une base et deux angles","Rien","Seulement une distance","Le poids"], r:0, e:"Loi des sinus."}
 ]},
{id:"math-16", niv:3, titre:"Repérage, coordonnées et vecteurs", duree:45, contenu:`## Les coordonnées dans un repère
Un point est repéré par ses coordonnées (x ; y) dans un repère orthonormé (en topographie : X vers l'Est, Y vers le Nord).
- **Distance** entre A et B : AB = √[(xB − xA)² + (yB − yA)²] ;
- **Milieu** : ((xA + xB)/2 ; (yA + yB)/2) ;
- **Direction** : l'angle de AB avec l'axe des x vaut arctan[(yB − yA)/(xB − xA)] (attention au quadrant) ; en topographie, on utilise le **gisement** compté depuis le Nord (voir Topographie).
> [!exemple]
> A (100 ; 200), B (160 ; 280) : AB = √(60² + 80²) = **100 m** ; milieu **(130 ; 240)** ; direction : arctan(80/60) = **53,13°** au-dessus de l'axe des x.

## L'équation d'une droite
y = m x + p, avec m = (yB − yA)/(xB − xA). Deux droites sont **parallèles** si elles ont la même pente, **perpendiculaires** si le produit des pentes vaut − 1.

## Les vecteurs
Un vecteur a une **direction**, un **sens** et une **norme** (longueur). Ses coordonnées : u (ux ; uy) ; norme √(ux² + uy²).
- **Somme** : on additionne les coordonnées (c'est la résultante de plusieurs forces) ;
- **Décomposer** une force F inclinée de α : Fx = F cos α ; Fy = F sin α.
> [!exemple] Forces F1 (3 ; 4) kN et F2 (5 ; − 2) kN : résultante R (8 ; 2), norme √68 = **8,25 kN**.
> Une force de 10 kN inclinée à 30° : Fx = **8,66 kN**, Fy = **5,00 kN**.

## Application : surface d'une parcelle par coordonnées
Parcelle A (0 ; 0), B (40 ; 0), C (45 ; 30), D (5 ; 35), sommets pris dans l'ordre. **Formule de Gauss** (des « lacets ») :
$$ S = ½ × | Σ (xi × yi+1 − xi+1 × yi) |
- A→B : 0 × 0 − 40 × 0 = 0 ;
- B→C : 40 × 30 − 45 × 0 = 1 200 ;
- C→D : 45 × 35 − 5 × 30 = 1 425 ;
- D→A : 5 × 0 − 0 × 35 = 0 ;
- S = ½ × 2 625 = **1 312,5 m²**.

## Le produit scalaire : contrôler un angle droit
u · v = ux vx + uy vy. Deux vecteurs non nuls sont **perpendiculaires** si et seulement si u · v = 0.
> [!exemple] Les côtés AB et BC sont-ils perpendiculaires ?
> AB (40 ; 0) et BC (5 ; 30) : 40 × 5 + 0 × 30 = 200 ≠ 0.
> L'angle en B n'est **pas** droit (il vaut 99,5°).

## Méthode : intersection de deux droites
1. Écrire les deux équations y = m x + p ;
2. Égaler les deux expressions de y et résoudre en x ;
3. Reporter x pour obtenir y ;
4. Contrôler sur un croquis.

> [!attention] Erreurs fréquentes
> - Prendre arctan sans regarder le quadrant (Δx négatif : ajouter 180°).
> - Inverser l'ordre des points dans une différence (xA − xB au lieu de xB − xA) : la distance ne change pas, mais la direction si.
> - Parcourir les sommets dans le désordre dans la formule de Gauss.
> - Additionner les normes des forces au lieu de leurs coordonnées.

> [!retenir]
> - Distance : √(Δx² + Δy²) ; milieu : moyenne des coordonnées.
> - Droite : pente m = Δy/Δx ; parallèles : même pente ; perpendiculaires : m × m' = − 1.
> - Vecteurs : somme des coordonnées ; Fx = F cos α, Fy = F sin α.`,
 exercices:[
  {t:"Distance et milieu", d:1, e:`Les angles d'un bâtiment ont pour coordonnées A (512,40 ; 803,10) et C (530,40 ; 827,10). Calculer la diagonale AC et les coordonnées de son milieu.`, c:`Δx = 18,00 ; Δy = 24,00 → AC = √(324 + 576) = **30,00 m** ; milieu **(521,40 ; 815,10)**.`},
  {t:"Équation d'une limite de parcelle", d:2, e:`Une limite passe par P (0 ; 2) et Q (40 ; 22). Écrire son équation. Un poteau en R (20 ; 13) est-il sur la limite ?`, c:`m = 20 / 40 = **0,5** ; p = 2 → y = 0,5 x + 2.
Pour x = 20 : y = 12 ≠ 13 → R est **1 m au-dessus** (au nord) de la limite : il empiète peut-être sur la parcelle voisine selon le côté.`},
  {t:"Résultante de deux forces", d:1, e:`Une poutre reçoit une force horizontale de 20 kN et une force verticale de 15 kN au même point. Calculer la résultante et son angle avec l'horizontale.`, c:`R = √(20² + 15²) = **25 kN** ; angle : arctan(15/20) = **36,9°**.`},
  {t:"Décomposer une force", d:2, e:`Le câble d'un hauban tire avec 12 kN en faisant 40° avec le sol. Calculer les composantes horizontale et verticale.`, c:`Fx = 12 × cos 40° = **9,19 kN** ; Fy = 12 × sin 40° = **7,71 kN**.`},
  {t:"Perpendicularité", d:2, e:`Un mur suit la droite y = 2 x + 1. Quelle est la pente d'un mur perpendiculaire ? Écrire l'équation du mur perpendiculaire passant par (4 ; 9).`, c:`Pente perpendiculaire : − 1/2 = **− 0,5**. Équation : y = − 0,5 x + p avec 9 = − 2 + p → p = 11 → **y = − 0,5 x + 11**.`}
 ],
 quiz:[
  {q:"Distance entre (0 ; 0) et (6 ; 8) :", o:["10","14","48","7"], r:0, e:"√(36 + 64)."},
  {q:"Milieu de (2 ; 4) et (8 ; 10) :", o:["(5 ; 7)","(10 ; 14)","(6 ; 6)","(3 ; 3)"], r:0, e:"Moyennes."},
  {q:"Deux droites perpendiculaires ont des pentes dont le produit vaut :", o:["−1","1","0","2"], r:0, e:"m × m' = −1."},
  {q:"Composante horizontale d'une force F inclinée de α :", o:["F cos α","F sin α","F tan α","F / α"], r:0, e:"Projection."},
  {q:"La résultante de (3 ; 0) et (0 ; 4) a pour norme :", o:["5","7","12","1"], r:0, e:"√(9 + 16)."}
 ]},
{id:"math-14", niv:3, titre:"Les suites numériques", duree:45, contenu:`## Les suites arithmétiques
Chaque terme s'obtient en **ajoutant** une même raison r : u(n) = u(0) + n r. Somme de n termes consécutifs = n × (premier + dernier) / 2.
- Hauteurs successives des marches (17,5 cm de plus à chaque marche) ;
- **Amortissement linéaire** : un matériel de 12 M F amorti sur 6 ans perd 2 M F par an : valeur après n années = 12 − 2 n ;
- Paliers réguliers (rangs d'agglos : 20 cm de plus par rang).

## Les suites géométriques
Chaque terme s'obtient en **multipliant** par une même raison q : u(n) = u(0) × qⁿ. Somme de n termes : u(0) × (qⁿ − 1)/(q − 1).
- **Inflation** : un coût de 30 M F à + 5 %/an vaut 30 × 1,05ⁿ (48,9 M dans 10 ans) ;
- **Capitalisation** : un placement à t % : C × (1 + t)ⁿ ;
- Épargne régulière : des versements annuels de 1 M F placés à 6 % pendant 5 ans donnent 1 × (1,06⁵ − 1) / 0,06 = **5,64 M F**.

## Reconnaître le type de suite
On calcule les **différences** (constantes → arithmétique) ou les **quotients** (constants → géométrique) entre termes successifs.

## Attention à l'indice de départ
Si le premier terme est noté u(1) au lieu de u(0), la formule devient **u(n) = u(1) + (n − 1) r**. Nombre de termes entre deux valeurs : (dernier − premier) / r + 1.
> [!exemple] Piquets tous les 2 m sur 30 m
> (30 − 0) / 2 + 1 = **16 piquets** (et non 15).
> C'est l'erreur dite « des intervalles et des poteaux ».

> [!exemple] Tuyaux empilés en triangle
> 10 tuyaux au rang du bas, puis un de moins à chaque rang jusqu'à 1.
> Suite arithmétique de raison − 1 : 10 × (10 + 1) / 2 = **55 tuyaux**.

> [!exemple] Amortissement dégressif à 30 %
> Engin de 10 M F perdant 30 % de sa valeur restante chaque année.
> Raison q = 0,7 : après 3 ans, 10 × 0,7³ = **3,43 M F**.

## Méthode
1. Écrire les 3 ou 4 premiers termes ;
2. Calculer différences et quotients pour identifier le type ;
3. Écrire la formule générale avec le bon indice de départ ;
4. Calculer le terme ou la somme demandée ;
5. Contrôler en recalculant un terme à la main.

> [!attention] Erreurs fréquentes
> - Confondre la raison d'une suite géométrique (1,05) et le taux (5 %).
> - Se tromper d'un terme dans le comptage (intervalles et piquets).
> - Utiliser la somme arithmétique pour une suite géométrique.

> [!retenir]
> - Arithmétique : + r ; u(n) = u(0) + n r ; somme = n (premier + dernier)/2.
> - Géométrique : × q ; u(n) = u(0) qⁿ ; somme = u(0)(qⁿ − 1)/(q − 1).
> - Amortissement linéaire (arithmétique), inflation et intérêts composés (géométriques).`,
 exercices:[
  {t:"Hauteurs des marches", d:1, e:`Un escalier a 16 marches de 17,5 cm. À quelle hauteur se trouve le dessus de la 10ᵉ marche ? de la dernière ?`, c:`u(n) = 17,5 n → 10ᵉ marche : **175 cm** ; 16ᵉ : **280 cm** (hauteur d'étage).`},
  {t:"Amortissement linéaire", d:1, e:`Une pelle achetée 45 M F est amortie linéairement sur 9 ans. Quelle est sa valeur comptable après 4 ans ? Quand vaut-elle 10 M F ?`, c:`Amortissement annuel : 45 / 9 = **5 M F** → après 4 ans : 45 − 20 = **25 M F** ; 45 − 5 n = 10 → **n = 7 ans**.`},
  {t:"Somme d'une suite arithmétique", d:2, e:`On empile des agglos en pyramide : 20 au premier rang, 18 au deuxième, … en retirant 2 par rang jusqu'à 2 au sommet. Combien de rangs et d'agglos ?`, c:`Rangs : de 20 à 2 par pas de 2 → **10 rangs** ; total : 10 × (20 + 2) / 2 = **110 agglos**.`},
  {t:"Inflation des coûts", d:2, e:`Une maison coûte 30 M F aujourd'hui. Avec 5 % d'inflation par an, combien coûtera-t-elle dans 10 ans ? Au bout de combien d'années le coût aura-t-il doublé (essayer n = 14 et 15) ?`, c:`Dans 10 ans : 30 × 1,05¹⁰ = **48,87 M F**.
1,05¹⁴ = 1,98 ; 1,05¹⁵ = 2,08 → le coût double au bout d'environ **14 à 15 ans** (14,2 ans exactement, voir logarithmes).`},
  {t:"Épargne pour construire", d:2, e:`Un ménage place 1,5 M F chaque fin d'année à 6 % pendant 6 ans. Quel capital obtient-il ?`, c:`S = 1,5 × (1,06⁶ − 1) / 0,06 = 1,5 × 6,975 = **10,46 M F** (dont 1,46 M d'intérêts).`}
 ],
 quiz:[
  {q:"La suite 5 ; 8 ; 11 ; 14 est :", o:["Arithmétique de raison 3","Géométrique de raison 3","Ni l'une ni l'autre","Géométrique de raison 1,6"], r:0, e:"Différence constante."},
  {q:"La suite 2 ; 6 ; 18 ; 54 est :", o:["Géométrique de raison 3","Arithmétique de raison 4","Arithmétique de raison 3","Constante"], r:0, e:"Quotient constant."},
  {q:"Somme des entiers de 1 à 10 :", o:["55","50","100","45"], r:0, e:"10 × 11/2."},
  {q:"L'amortissement linéaire est une suite :", o:["Arithmétique","Géométrique","Constante","Aléatoire"], r:0, e:"Même baisse chaque année."},
  {q:"Les intérêts composés suivent une suite :", o:["Géométrique","Arithmétique","Constante","Décroissante"], r:0, e:"× (1 + t)."}
 ]},
{id:"math-17", niv:3, titre:"Logarithmes et exponentielles", duree:45, contenu:`## Le logarithme décimal
log(x) est l'exposant de 10 qui donne x : log(1 000) = 3 ; log(0,01) = − 2 ; log(2) ≈ 0,301.
- log(a × b) = log a + log b ; log(a / b) = log a − log b ; log(aⁿ) = n log a ;
- Il transforme les produits en sommes : c'est l'outil des **échelles logarithmiques**.

## Les applications au bâtiment
- **Acoustique** : niveau sonore L = 10 log(I / I₀) en décibels ; doubler la puissance d'une source ajoute **3 dB** (10 log 2) ; multiplier par 10 ajoute **10 dB** ; deux machines de 85 dB donnent **88 dB** (et non 170 !) ;
- **Granulométrie** : l'axe des tamis est en échelle logarithmique ;
- **Géotechnique** : le tassement œdométrique fait intervenir Cc × log(σ'f / σ'0) ;
- **Chimie** : pH = − log[H⁺] ; un béton sain (pH ≈ 13) est 10 000 fois plus basique qu'un béton carbonaté (pH ≈ 9).

## L'exponentielle et le logarithme népérien
eˣ (e ≈ 2,718) et ln(x) sont réciproques : ln(eˣ) = x. Ils décrivent les phénomènes dont la variation est proportionnelle à la valeur : croissance d'intérêts continus, refroidissement, décroissance (consolidation, amortissement des vibrations).

## Résoudre aⁿ = b
On prend le logarithme : **n = log b / log a**.
> [!exemple]
> Temps de doublement à 5 % par an : 1,05ⁿ = 2 → n = log 2 / log 1,05 = 0,301 / 0,0212 = **14,2 ans**.

## Application : additionner des niveaux sonores
On additionne les **intensités**, pas les décibels : L = 10 log(10^(L1/10) + 10^(L2/10)).
> [!exemple] Une machine à 85 dB et une à 80 dB
> 10 log(10^8,5 + 10^8) = **86,2 dB** : la plus faible n'ajoute que 1,2 dB.
> Quand deux niveaux diffèrent de plus de 10 dB, le plus faible est négligeable.

> [!exemple] Atténuation avec la distance
> Source ponctuelle en champ libre : L2 = L1 − 20 log(d2 / d1).
> 90 dB à 2 m deviennent à 16 m : 90 − 20 log 8 = **71,9 dB** (− 6 dB par doublement de distance).

## Application : décroissance exponentielle
L'amplitude d'une vibration amortie suit A = A0 e^(− k t). Avec k = 0,5 s⁻¹, le temps pour descendre à 10 % : e^(− 0,5 t) = 0,1 → t = ln 10 / 0,5 = **4,6 s**.

> [!exemple] Quand le coût atteindra-t-il 40 M F ?
> Coût de 30 M F, inflation 5 %/an : 30 × 1,05ⁿ = 40.
> n = log(40 / 30) / log 1,05 = **5,9 ans**.

## Méthode
1. Isoler la puissance ou l'exponentielle d'un côté ;
2. Prendre le log (ou ln) des deux côtés ;
3. Utiliser log(aⁿ) = n log a pour faire « descendre » l'exposant ;
4. Arrondir à l'unité qui a du sens (années entières : on arrondit au-dessus).

> [!attention] Erreurs fréquentes
> - Écrire log(a + b) = log a + log b (c'est faux : c'est le produit qui devient une somme).
> - Additionner des décibels comme des nombres ordinaires.
> - Confondre les touches log (base 10) et ln (base e).

> [!retenir]
> - log(10ⁿ) = n ; log(ab) = log a + log b ; log(aⁿ) = n log a.
> - Décibels : + 3 dB quand on double, + 10 dB quand on multiplie par 10.
> - aⁿ = b ⇔ n = log b / log a.`,
 exercices:[
  {t:"Calculs de logarithmes", d:1, e:`Calculer sans calculatrice : a) log(10 000) ; b) log(0,001) ; c) log(2) + log(5) ; d) log(1 000 / 10).`, c:`a) **4** ; b) **− 3** ; c) log(10) = **1** ; d) log(100) = **2**.`},
  {t:"Addition de bruits", d:2, e:`Une bétonnière produit 85 dB. Quel niveau avec deux bétonnières identiques ? Avec quatre ? Un compresseur de 70 dB placé à côté d'une machine de 85 dB change-t-il beaucoup le niveau ?`, c:`Deux : 85 + 3 = **88 dB** ; quatre : 85 + 6 = **91 dB**.
70 et 85 dB : la source de 70 dB est 31,6 fois moins puissante : 10 log(1 + 0,0316) ≈ 0,13 dB → **≈ 85,1 dB** : le compresseur ne change presque rien.`},
  {t:"Temps de doublement", d:2, e:`En combien d'années un placement à 8 % double-t-il ? Et un coût qui augmente de 3 % par an ?`, c:`8 % : n = log 2 / log 1,08 = 0,301 / 0,0334 = **9,0 ans**.
3 % : n = 0,301 / 0,01284 = **23,4 ans**.`},
  {t:"Tassement et logarithme", d:2, e:`Calculer log(100 / 60) puis le tassement s = 4 / 2,2 × 0,45 × log(100 / 60) d'une couche d'argile.`, c:`log(100/60) = log 1,667 = **0,2218** → s = 1,818 × 0,45 × 0,2218 = **0,181 m ≈ 18 cm**.`},
  {t:"pH et corrosion", d:1, e:`Un béton sain a un pH de 13, un béton carbonaté un pH de 9. Combien de fois la concentration en ions H⁺ est-elle plus élevée dans le béton carbonaté ? Pourquoi est-ce important ?`, c:`10^(13 − 9) = **10 000 fois** plus d'ions H⁺ (milieu bien moins basique).
Au-dessous d'un pH d'environ 9 à 10, la couche protectrice de l'acier disparaît : les armatures peuvent **rouiller**.`}
 ],
 quiz:[
  {q:"log(1 000) = ", o:["3","1 000","30","0,001"], r:0, e:"10³."},
  {q:"Doubler la puissance d'une source sonore ajoute :", o:["3 dB","10 dB","2 dB","100 dB"], r:0, e:"10 log 2."},
  {q:"log(a × b) = ", o:["log a + log b","log a × log b","log a − log b","a + b"], r:0, e:"Propriété fondamentale."},
  {q:"Pour résoudre 1,05ⁿ = 2, on calcule :", o:["log 2 / log 1,05","2 / 1,05","2 − 1,05","1,05 × 2"], r:0, e:"Logarithme."},
  {q:"Deux machines de 80 dB ensemble donnent :", o:["83 dB","160 dB","80 dB","90 dB"], r:0, e:"+ 3 dB."}
 ]},
{id:"math-15", niv:3, titre:"Probabilités et contrôle par échantillonnage", duree:45, contenu:`## Les notions de base
- **Probabilité** d'un événement A : nombre de cas favorables / nombre de cas possibles (si équiprobables), entre 0 et 1 ;
- **Événement contraire** : P(non A) = 1 − P(A) ;
- **Événements indépendants** : P(A et B) = P(A) × P(B) ;
- **Union** : P(A ou B) = P(A) + P(B) − P(A et B).

## « Au moins un »
Il est souvent plus simple de passer par le contraire : P(au moins un) = 1 − P(aucun).
> [!exemple] Pluie sur une semaine de bétonnage
> Probabilité de pluie un jour donné : 0,3 (jours supposés indépendants). Probabilité d'avoir 5 jours sans pluie : 0,7⁵ = **0,168** ; d'avoir au moins un jour de pluie : 1 − 0,168 = **0,832**. Nombre moyen de jours de pluie : 5 × 0,3 = **1,5**.

## La loi binomiale
On répète n fois une épreuve à deux issues (succès de probabilité p) de façon indépendante : la probabilité d'obtenir exactement k succès est **C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ** ; l'**espérance** (nombre moyen de succès) vaut **n p**.

## Le contrôle par échantillonnage
On ne peut pas tester tous les agglos ou toutes les barres : on prélève un **échantillon** et on décide pour le lot.
> [!exemple] Lot d'agglos dont 5 % sont défectueux, échantillon de 10
> P(aucun défectueux) = 0,95¹⁰ = **0,60** ; P(au moins un) = **0,40** ; P(exactement un) = 10 × 0,05 × 0,95⁹ = **0,32**.
> Si la règle est « refuser le lot dès qu'un agglo défectueux apparaît », un lot à 5 % de défauts n'est refusé que 4 fois sur 10 : l'échantillon est trop petit pour être sévère.

## Application : deux fournisseurs (arbre de probabilités)
60 % des agglos viennent du fournisseur A (2 % de défauts), 40 % du fournisseur B (5 % de défauts).
1. P(défectueux) = 0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,020 = **0,032** (3,2 %) ;
2. Un agglo défectueux est trouvé : la probabilité qu'il vienne de B vaut 0,020 / 0,032 = **0,625**.
On multiplie le long des branches et on additionne les chemins qui mènent au même résultat.

## Rendre un contrôle plus sévère
Reprenons le lot à 5 % de défauts et la règle « refus dès un défaut » :
| Taille de l'échantillon | P(aucun défaut) | P(refus du lot) |
|---|---|---|
| 10 | 0,60 | 0,40 |
| 30 | 0,21 | 0,79 |
Un plan **plus tolérant** (« refus à partir de 2 défauts sur 10 ») accepte le lot avec la probabilité P(0) + P(1) = 0,60 + 0,32 = **0,91**.

## Méthode
1. Définir précisément les événements et vérifier l'indépendance ;
2. Faire un arbre ou un tableau ;
3. Passer par le contraire pour « au moins un » ;
4. Contrôler que les probabilités restent entre 0 et 1 et que les branches d'un même nœud totalisent 1.

> [!attention] Erreurs fréquentes
> - Additionner les probabilités d'événements qui ne sont pas incompatibles.
> - Supposer l'indépendance à tort (des jours de pluie consécutifs sont liés).
> - Confondre « au moins un » (1 − P(aucun)) et le nombre moyen n p.

> [!retenir]
> - P(non A) = 1 − P(A) ; indépendance : P(A et B) = P(A) P(B).
> - P(au moins un) = 1 − P(aucun).
> - Binomiale : C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ ; espérance n p.
> - Un plan d'échantillonnage a un risque d'accepter un mauvais lot : choisir la taille en conséquence.`,
 exercices:[
  {t:"Tirage au hasard", d:1, e:`Une palette contient 60 agglos dont 3 cassés. On en prend un au hasard. Probabilité qu'il soit cassé ? qu'il soit intact ?`, c:`P(cassé) = 3 / 60 = **0,05** ; P(intact) = 1 − 0,05 = **0,95**.`},
  {t:"Jours de pluie", d:2, e:`En saison des pluies, la probabilité d'une pluie empêchant le coulage est 0,4 par jour (jours indépendants). Pour une période de 3 jours, calculer la probabilité de n'avoir aucune pluie, puis au moins un jour de pluie. Combien de jours de pluie en moyenne ?`, c:`Aucune pluie : 0,6³ = **0,216** ; au moins un jour : **0,784** ; moyenne : 3 × 0,4 = **1,2 jour**.
Un coulage de 3 jours consécutifs a donc près de 80 % de risques d'être perturbé : prévoir des bâches et un planning souple.`},
  {t:"Contrôle d'un lot d'acier", d:2, e:`Dans un lot de barres, 10 % ont un diamètre trop faible. On contrôle 5 barres au hasard. Calculer la probabilité qu'aucune ne soit défectueuse et qu'au moins une le soit.`, c:`P(aucune) = 0,9⁵ = **0,59** ; P(au moins une) = **0,41** : avec 5 barres, on détecte le problème moins d'une fois sur deux ; contrôler davantage de barres ou peser le lot.`},
  {t:"Événements indépendants", d:2, e:`Pour couler une dalle, il faut à la fois : la pompe disponible (probabilité 0,95), la centrale à béton disponible (0,90) et pas de pluie (0,70). En supposant l'indépendance, quelle est la probabilité de pouvoir couler le jour prévu ?`, c:`P = 0,95 × 0,90 × 0,70 = **0,60** : une chance sur deux et demie d'être reporté : confirmer la pompe et la centrale la veille et surveiller la météo.`},
  {t:"Loi binomiale", d:3, e:`Un béton a une probabilité 0,05 de donner une éprouvette sous la résistance minimale. Sur 3 éprouvettes, calculer la probabilité d'en avoir exactement 0, exactement 1, et au moins 2 sous le minimum.`, c:`P(0) = 0,95³ = **0,857** ; P(1) = 3 × 0,05 × 0,95² = **0,135** ; P(au moins 2) = 1 − 0,857 − 0,135 = **0,007** (≈ 0,7 %).`}
 ],
 quiz:[
  {q:"P(non A) = ", o:["1 − P(A)","P(A)","P(A) − 1","1 + P(A)"], r:0, e:"Événement contraire."},
  {q:"Pour deux événements indépendants, P(A et B) = ", o:["P(A) × P(B)","P(A) + P(B)","P(A) − P(B)","1"], r:0, e:"Produit."},
  {q:"P(au moins un succès) se calcule souvent par :", o:["1 − P(aucun)","P(un)","1 + P(aucun)","0"], r:0, e:"Contraire."},
  {q:"Espérance d'une binomiale de paramètres n = 20, p = 0,1 :", o:["2","20","0,1","10"], r:0, e:"n p."},
  {q:"Une probabilité est toujours comprise entre :", o:["0 et 1","−1 et 1","0 et 100","1 et 10"], r:0, e:"Ou 0 et 100 %."}
 ]},
{id:"math-8", niv:3, titre:"Mathématiques financières : intérêts, actualisation et amortissements", duree:45, contenu:`## Intérêts simples et composés
- **Intérêts simples** : I = C × t × n (prêts courts, découverts) ;
- **Intérêts composés** : Cn = C × (1 + t)ⁿ (placements, crédits longs) ;
- **Taux proportionnel** mensuel = taux annuel / 12 ; **taux équivalent** = (1 + t)^(1/12) − 1.
> [!exemple]
> 5 M F à 6 % pendant 3 ans : simples → 5,9 M ; composés → 5 × 1,06³ = **5,955 M**.

## L'actualisation
Une somme F reçue dans n années vaut aujourd'hui **F / (1 + t)ⁿ** : c'est ce qui permet de comparer des projets (VAN, voir Économie).

## Les annuités constantes
Une suite de n versements a placés à t % vaut, à la fin : a × [(1 + t)ⁿ − 1] / t ; aujourd'hui : a × [1 − (1 + t)⁻ⁿ] / t. Un emprunt C se rembourse par des annuités **a = C × t / [1 − (1 + t)⁻ⁿ]**.
> [!exemple]
> Emprunt de 20 M F à 9 % sur 10 ans (mensualités, t = 0,75 %/mois, n = 120) : **253 352 F** par mois ; intérêts totaux : **10,4 M F**.

## L'amortissement du matériel
- **Linéaire** : annuité = (valeur d'achat − valeur résiduelle) / durée ;
- **Dégressif** : on applique chaque année un taux fixe à la valeur restante (plus fort au début, suite géométrique).
> [!exemple]
> Bétonnière de 1 200 000 F sur 3 ans, sans valeur résiduelle : **400 000 F par an** en linéaire ; en dégressif à 50 % : 600 000 ; 300 000 ; puis le solde 300 000.

## Application : tableau d'amortissement d'un emprunt
Emprunt de **3 000 000 F** à **10 %** remboursé en 3 annuités constantes : a = 3 000 000 × 0,1 / (1 − 1,1⁻³) = **1 206 344 F**.

| Année | Capital dû en début | Intérêts (10 %) | Amortissement (a − intérêts) | Capital restant |
|---|---|---|---|---|
| 1 | 3 000 000 | 300 000 | 906 344 | 2 093 656 |
| 2 | 2 093 656 | 209 366 | 996 979 | 1 096 677 |
| 3 | 1 096 677 | 109 668 | 1 096 677 | 0 |

Les intérêts **diminuent** et la part de capital remboursée **augmente** chaque année ; coût total du crédit : 3 × 1 206 344 − 3 000 000 = **619 032 F**.

> [!exemple] Payer comptant ou plus tard ?
> Un fournisseur propose 10 M F comptant ou 11,5 M F dans 2 ans ; taux d'actualisation 8 %.
> Valeur actuelle du paiement différé : 11,5 / 1,08² = **9,86 M F** < 10 M F.
> Le paiement différé est plus avantageux.

## Méthode
1. Ramener taux et durée à la **même période** (mois avec mois, années avec années) ;
2. Choisir la formule : capitalisation, actualisation ou annuité ;
3. Calculer et présenter un tableau quand il s'agit d'un échéancier ;
4. Comparer des sommes uniquement à la **même date**.

> [!attention] Erreurs fréquentes
> - Utiliser un taux annuel avec un nombre de mois.
> - Comparer des sommes versées à des dates différentes sans les actualiser.
> - Confondre annuité (versement total) et amortissement (part de capital).

> [!retenir]
> - Simples : C t n ; composés : C (1 + t)ⁿ ; actualisation : F / (1 + t)ⁿ.
> - Annuité d'emprunt : C t / [1 − (1 + t)⁻ⁿ].
> - Amortissement linéaire (arithmétique) ou dégressif (géométrique).`,
 exercices:[
  {t:"Placement", d:1, e:`On place 3 M F à 7 % par an. Quelle somme au bout de 5 ans en intérêts composés ? Combien d'intérêts ?`, c:`3 × 1,07⁵ = 3 × 1,4026 = **4,21 M F** → intérêts : **1,21 M F**.`},
  {t:"Valeur actuelle", d:1, e:`On recevra 10 M F dans 4 ans. Quelle est leur valeur actuelle au taux de 8 % ?`, c:`10 / 1,08⁴ = 10 / 1,3605 = **7,35 M F**.`},
  {t:"Annuité d'un prêt", d:2, e:`Un artisan emprunte 6 M F à 10 % sur 4 ans, remboursables par annuités constantes. Calculer l'annuité et le coût du crédit.`, c:`a = 6 × 0,10 / (1 − 1,1⁻⁴) = 0,6 / 0,3170 = **1,893 M F** → total 7,571 M → coût : **1,571 M F**.`},
  {t:"Amortissement d'un camion", d:2, e:`Un camion acheté 36 M F a une valeur résiduelle de 6 M F après 5 ans. Calculer l'amortissement linéaire annuel et la valeur comptable après 3 ans.`, c:`Annuité : (36 − 6) / 5 = **6 M F** ; après 3 ans : 36 − 18 = **18 M F**.`},
  {t:"Économiser ou emprunter ?", d:2, e:`Pour acheter une bétonnière de 1,2 M F, un artisan peut : a) épargner 100 000 F par mois pendant 12 mois (sans intérêts) ; b) emprunter 1,2 M F sur 12 mois à 12 %/an (mensualité ≈ 106 600 F). Coût de chaque solution ? Quand la bétonnière peut-elle rapporter ?`, c:`a) Coût : **1,2 M F**, bétonnière disponible dans 12 mois.
b) 12 × 106 600 = 1,279 M F → coût du crédit **≈ 79 000 F**, mais la bétonnière travaille **tout de suite** : si elle évite 15 000 F de location par jour de coulage, 6 jours de coulage suffisent à payer les intérêts.`}
 ],
 quiz:[
  {q:"Valeur acquise de 1 M à 10 % composés pendant 2 ans :", o:["1,21 M","1,2 M","1,1 M","2 M"], r:0, e:"1,1²."},
  {q:"Valeur actuelle de 1,1 M reçu dans 1 an à 10 % :", o:["1 M","1,1 M","0,9 M","1,21 M"], r:0, e:"1,1/1,1."},
  {q:"L'amortissement linéaire d'un matériel de 10 M sur 5 ans (sans valeur résiduelle) :", o:["2 M par an","5 M par an","10 M par an","1 M par an"], r:0, e:"10/5."},
  {q:"Les intérêts composés produisent :", o:["Des intérêts sur les intérêts","Des intérêts fixes","Aucun intérêt","Une baisse du capital"], r:0, e:"Capitalisation."},
  {q:"Un amortissement dégressif est :", o:["Plus fort les premières années","Constant","Plus fort à la fin","Nul"], r:0, e:"Taux fixe sur la valeur restante."}
 ]}
]});
