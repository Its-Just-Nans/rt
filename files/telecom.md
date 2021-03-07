<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Télécommunications

## Sources

- Cours, TPs et TDs de **Mme.THEYS**
- Cours, TPs et TDs de **M.PAYAN**
- [Site Web de M.Mazet](http://miv.u-strasbg.fr/mazet/mazet-fr.html)
- [Animations sur le site de M.Mazet](http://miv.u-strasbg.fr/mazet/animations/)

---

## Codage Source et Codage  Canal

---

## Bit symbole et valence

Un **symbole** contient plusieurs bits. Le nombre de bits par symbole est noté `n`.

Le nombre d'états possibles d'un signal transmis appelé [valence](https://fr.wikipedia.org/wiki/Valence_(r%C3%A9seau)) est noté M.

On le calcul donc avec :
| Valence ou nombre d'états possibles |
|:-------------------------------:|
| ![Equation](./data/telecom/valence.svg) |

---

## Débit symbole et débit binaire

Le débit symbole est également appelé **rapidité de modulation**. Le débit symbole est l'inverse du temps symbole :

| Débit symbole (**en bauds**)|
|:-------------------------------:|
| ![Equation](./data/telecom/debitSymbole.svg) |

Le débit binaire est l'inverse du temps **binaire** :

| Débit binaire (**en bits/s**)|
|:-------------------------------:|
| ![Equation](./data/telecom/debitBinaire.svg) |

On peut donc réaliser des conversions entre débit symbole et débit binaire:

| Débit binaire en débit symbole en utilisant la Valence (**en bits/s**)|
|:---------------------------------------------------------------------:|
| ![Equation](./data/telecom/debitBinaireDebitSymbole.svg) |

---

## Diagramme de constellation

---

## Diagramme de l'oeil

Le diagramme de l'oeil permet de détecter les interfréquences Inter Symboles.

Pour le tracer, on prend une période (soit T ou 2*T) et on trace le signal sur cette période donnée.

On peut donc mesurer la distance horizontale, aussi appelée "l'ouverture de l'oeil".

[Animation du diagramme de l'oeil](http://miv.u-strasbg.fr/mazet/animations/eyediag.html)

---

## SER et BER

---

## Débit

---

## Modulations

### ASK

_**A**mplitude-**S**hift **K**eying_.

On module en variant l'**amplitude**

|                                                                Fonctionnement                                                                                |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ![FSK image form Wikipedia](https://www.researchgate.net/profile/Ahmad_Fauzi_Abas/publication/221907745/figure/fig1/AS:670028466765837@1536758643863/Example-of-ASK-modulation-foramt-a-binary-signal-and-b-ASK-modulated-signal.png) |

### FSK

_**F**requency-**S**hift **K**eying_ (aussi appelé **MDF** - Modulation par Déplacement de Fréquence).

On module en variant la **fréquence**

|                                                                Fonctionnement                                                                                |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ![FSK image form Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Frequency-shift_keying_fr.svg/330px-Frequency-shift_keying_fr.svg.png) |

### PSK

_**P**hase-**S**hift **K**eying_ .

On module en variant la **phase**.

On peut donc choisir plusieurs phases, voici les modulations PSK connus :

#### BPSK

_**B**inary **P**hase-**S**hift **K**eying_. C'est donc une modulation PSK avec seulement **deux phases**

|                                             Fonctionnement                                          |                                  Diagramme de constellation                                              |
|:---------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:|
| ![BPSK](https://i.pcmag.com/imagery/encyclopedia-terms/psk-_psk.fit_lim.size_1050x.gif) | ![BPSK](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BPSK_Gray_Coded.svg/200px-BPSK_Gray_Coded.svg.png) |

#### QPSK

_**Q**uadrature **P**hase-**S**hift **K**eying_ aussi appelé **4-PSK**.

C'est donc une modulation PSK avec **quatre phases** différentes

|                                             Fonctionnement                                          |                                  Diagramme de constellation                                              |
|:---------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:|
| ![QPSK](https://i.pcmag.com/imagery/encyclopedia-terms/psk-_qpsk.fit_lim.size_800x.gif) | ![QPSK constellation](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/QPSK_Gray_Coded.svg/200px-QPSK_Gray_Coded.svg.png) |

### QAM

_**Q**uadrature **A**mplitude **M**odulation_ (en français MAQ - modulation d'amplitude en quadrature).
