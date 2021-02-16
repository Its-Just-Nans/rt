<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Électricité

##### Ceci est une tentative de cours d'électricité :)

## Sources

- [ECOLE SUPÉRIEURE DE NAVIGATION D’ANVERS - MÉQANIQUE NAVALE - Électricité générale - Willem MAES - December 5, 2010](http://magelhaes.hzs.be/willem/Basiselektriciteit2.pdf)

- [IUT MONTBÉLIARD - Mesures Physiques - COURS ELECTRICITE 1ère année Semestre 1 - V. Chollet - 01/10/2007](http://mpeea.free.fr/data/trotech/cours-elec-07.pdf)

- **MINISTERE DE L'ENSEIGNEMENT SUPERIEUR ET DE LA RECHERCHE SCIENTIFIQUE - INSTITUT SUPERIEUR DES ETUDES TECHNOLOGIQUES DE KELIBIA - SUPPORT DE COURS - CIRCUITS ELECTRIQUES - Niveau : Première année - Version 6.2 - Décembre 2018**

- [Wikipedia](https://fr.wikipedia.org/wiki/Portail:%C3%89lectricit%C3%A9_et_%C3%A9lectronique)

---
## Liens utiles

[Grandes dates de l'électricité](https://www.edf.fr/groupe-edf/espaces-dedies/l-energie-de-a-a-z/les-grandes-dates-de-l-electricite)

---
## L'électricité, c'est quoi ?

L'électricité est l'effet du déplacement de particules chargées à l'intérieur d'un matériau conducteur, sous l'effet d'une différence de potentiel aux extrémités de celui-ci ([Wikipedia](https://fr.wikipedia.org/wiki/%C3%89lectricit%C3%A9))

---

## Unité de mesure

### La charge `Q`, en Coulomb (C)

Le [coulomb](https://fr.wikipedia.org/wiki/Coulomb) est l’unité de charge électrique dans le système international (SI). C’est une unité dérivée.

Son nom vient de celui du physicien français Charles de Coulomb.


**Un coulomb c’est la quantité d’électricité traversant une section d’un conducteur parcouru par un courant d’intensité de 1 ampère pendant 1 seconde** (1C = 1A x 1s). Cette quantité est équivalente à `6,241 509 629 152 65x10^(18) e`, avec `e` la [charge élémentaire](https://fr.wikipedia.org/wiki/Charge_%C3%A9l%C3%A9mentaire).


### Le courant électrique ou intensité `I`, en Ampère (A)


Un [courant électrique](https://fr.wikipedia.org/wiki/Courant_%C3%A9lectrique) est un déplacement d’ensemble de porteurs de charge électrique, généralement des électrons, au sein d’un matériau conducteur.

Cette unité doit son nom à André-Marie Ampère, dont la théorie de l'électrodynamique a fortement contribué à la naissance de la théorie de l'électromagnétisme de Maxwell.

Ces déplacements sont imposés par l’action de la force électromagnétique, dont l’interaction avec la matière est le fondement de l’électricité.
Le courant électrique est un nombre décrivant le débit de charge électrique à travers une surface donnée, notamment la section d'un fil électrique :

![Equation](https://latex.codecogs.com/svg.latex?i(t)=\frac{dq\(t\)}{dt})

Comme vu précédemment, **le courant d’un ampère correspond au transport d'une charge électrique d'un coulomb par seconde** à travers une surface (1A = 1C x 1s).

Avec la loi d'Ohm, on a :

![Equation](https://latex.codecogs.com/svg.latex?I=\frac{U}{R})
#### Le sens du courant

Attention : le sens conventionnel du courant électrique est celui de porteurs de charge positive. Dans la majeure partie des cas, les porteurs de charge sont les électrons dont la charge est négative, le sens conventionnel du courant est donc opposé au sens de déplacement des électrons (réel).


Le courant conventionnel (écoulement de particules exclusivement positives) simplifie les concepts et les calculs, mais masque le fait que dans quelques conducteurs (électrolytes, semi-conducteurs, et plasma) les deux types de charges électriques se déplacent dans des directions opposées, ou que dans les métaux, les charges négatives sont quasi exclusivement responsables de la circulation du courant.


### La tension `U` ou `V`, en Volt (V)

La notion de [tension électrique](https://fr.wikipedia.org/wiki/Tension_%C3%A9lectrique) est souvent confondue avec celle de la « différence de [potentiel électrique](https://fr.wikipedia.org/wiki/Potentiel_%C3%A9lectrique) » (DDP) entre deux points d'un circuit électrique. Les deux notions sont équivalentes en régime stationnaire (indépendant du temps). Néanmoins, dans un cas général, en régime variable (par exemple : les courants alternatifs), la circulation du champ électrique n'étant plus conservative en raison du phénomène d'[induction électromagnétique](https://fr.wikipedia.org/wiki/Induction_%C3%A9lectromagn%C3%A9tique), la tension et la différence de potentiel ne sont alors plus synonymes. Dans ce cas général, la différence de potentiel perd sa signification physique et doit être remplacée par la notion de tension.

- La tension électrique est la circulation du champ électrique le long d'un circuit électrique mesurée en volts par un voltmètre. Elle est notée `V` out `U`aux bornes d'un dipôle.

- Le potentiel électrique correspond à l'énergie potentielle électrostatique que posséderait une charge électrique unitaire située en ce point, c'est-à-dire à l'énergie potentielle (mesurée en joules) d'une particule chargée en ce point divisée par la charge (mesurée en coulombs) de la particule.

Le [volt](https://fr.wikipedia.org/wiki/Volt) est la différence de potentiel électrique qui accélère une charge électrique de 1 coulomb en lui donnant une énergie de 1 joule. Il en résulte que le volt est ce qui déplace une charge de 1 coulomb avec une force de 1 newton sur une longueur de 1 mètre.

Le nom `Volt` a été donné en hommage à Alessandro Volta, inventeur italien de la pile voltaïque en 1800.


### La résistance `R`, en Ohm (Ω)

C’est la propriété d’un matériau à s’opposer au passage d’un courant électrique. La différence de potentiel ou tension U (en volts) aux bornes d’une résistance `R` (en `ohms`) est proportionnelle à l’intensité du courant électrique `I` (en `ampères`) qui la traverse.


En effet avec la loi d'Ohm, on a :
![Equation](https://latex.codecogs.com/svg.latex?U=R*I)

Et donc
![Equation](https://latex.codecogs.com/svg.latex?R=\frac{U}{I})

La résistance est responsable d’une dissipation d’énergie sous forme de chaleur. Cette propriété porte le nom d’effet Joule. Cette production de chaleur est parfois un effet souhaité (résistances de chauffage), parfois un effet néfaste (pertes Joule).

L’[ohm](https://fr.wikipedia.org/wiki/Ohm_(unit%C3%A9)), de symbole Ω (la lettre capitale grecque oméga), est l'unité de résistance électrique du Système international (SI).

L’ohm a été nommé ainsi en l’honneur de Georg Ohm, physicien allemand à l'origine notamment de la loi d'Ohm.

### La conductivité `G`, en Siemens (S)

La conductivité électrique est l’aptitude d’un matériau à laisser les charges électriques se déplacer librement, autrement dit à permettre le passage du courant électrique.

C'est l'inverse de la résistance :

![Equation](https://latex.codecogs.com/svg.latex?G=\frac{I}{U})

### La Puissance `P`, en Watt (W)

En physique, la puissance est la quantité d’énergie par unité de temps fournie par un système à un autre. La puissance correspond donc à un débit l’énergie : deux systèmes de puissance différente pourront fournir le même travail (la même énergie), mais le système le plus puissant sera le plus rapide.

La puissance peut être calculé avec plusieurs formule.

En régiment continu, on a :

![Equation](https://latex.codecogs.com/svg.latex?P=U*I)

Or ![Equation](https://latex.codecogs.com/svg.latex?I=\frac{U}{R})

Donc :

![Equation](https://latex.codecogs.com/svg.latex?P=U*\frac{U}{R}=\frac{U^{2}}{R})


Sinon, on a :

![Equation](https://latex.codecogs.com/svg.latex?P=U*I)

Or avec des dipôles :
![Equation](https://latex.codecogs.com/svg.latex?U=R*I)

Donc :

![Equation](https://latex.codecogs.com/svg.latex?P=R*I*I=R*I^{2})


En régime alternatif, on a :

![Equation](https://latex.codecogs.com/svg.latex?p\(t\)=u\(t\)*i\(t\))


---

## Les composants électriques

