<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# About

## Informations

This website have been created by @Its-Just-Nans for `R&T` students.

If you found a bug on the website or want to improve it, you can do some [Pull Request](https://github.com/Its-Just-Nans/rt/pulls) or create [Issues](https://github.com/Its-Just-Nans/rt/issues).

Unfortunately, I work on this website on my free time so maybe I will not have the time to correct bugs or accept pull request (sorry :confused:)

---

### Pourquoi ce site ?

Partage des connaissances, aide à la compréhension, garder en mémoire ce qu'on a appris etc, etc ....

---

## Erreurs sur le site

je suis totalement conscient d'avoir sûrement fait des erreurs de Français, d'Anglais ou techniques. Vous pouvez d'ailleurs les corriger en créant des [Pull Requests](https://github.com/Its-Just-Nans/rt/pulls).

Vous pouvez également créer du contenu et faire des [Pull Requests](https://github.com/Its-Just-Nans/rt/pulls).

---

## Comment marche le site ?

La navigation du site fonctionne avec l'attribut `window.location.hash` (l'attribut `ancre` ou `anchor` ou `#`). En effet, en modifiant le hash de la page cela ne recharge pas le contenu.

Avec ce principe, je peux charger les fichiers sans recharger la page à chaque fois, je fais seulement une requête pour avoir le contenu du fichier voulu.

Le site marche donc avec des fichiers [MarkDown](https://fr.wikipedia.org/wiki/Markdown) convertit à la volée par la libraire [Showdown](https://github.com/showdownjs/showdown).

Le site possède aussi des pages webs contenant du JavaScript. Les scripts sont évalués avec la fonction `eval()` (méthode très artisanale et techniquement peu sécurisée mais amusante).

Le site utilise aussi l' [API GitHub](https://docs.github.com/en/rest) pour, par exemple, l'onglet `Raw Files` ou encore l'onglet `Search`. J'aurais techniquement dû utiliser cette `API` pour l'affichage du menu, mais comme l'API possède des Limits Rate, je préfère que le menu soit en dur.

Certains fichiers MarkDown utilisent des formules créées automatiquement par ce site [https://latex.codecogs.com](https://latex.codecogs.com)

---

## Pourquoi le site est parfois en Français et parfois en Anglais ?

Car je ne suis pas bilingue

---

## Share

Share the website :

```html
https://its-just-nans.github.io/rt
```

Share with QR Code :
![QR Code to this website](./data/qr_code.png)
