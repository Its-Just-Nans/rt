<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# GitHub

## Vocabulaire

### `Git` c'est quoi ?

Git est un logiciel de gestion de versions décentralisé.([Wikipedia](https://fr.wikipedia.org/wiki/Git))

[Site de Git](https://git-scm.com/)


### `GitHub` c'est quoi ?

GitHub est un **service web d'hébergement** et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions `Git`. ([Wikipedia](https://fr.wikipedia.org/wiki/GitHub))

## Command GIT sur Visual Studio

### Commandes GIT

`git pull` : permet de récuperer en local les dernières modifications

`git checkout BRANCH_NAME` : permet de changer de branche

`git checkout BRANCH_NAME` : permet de changer de branche

### Faire une commit :

- Aller dans l'onglet `Source Control`

![Source Control](./data/github-source_control.png)

- Dans le bon repository, mettre votre souris sur le fichier à commit

![Source Control](./data/github-mouse-over.png)

- Cliquez sur le `+`, ou `Stage Changes`

![Source Control](./data/github-stage-changes.png)

- On peut voir que le fichier est maintenant dans `Staged Changes`

![Source Control](./data/github-staged-changes.png)

- Saisissez maintenant la description de la commit

>Il est conseillé de mettre un nom précis et/mais simple.
>
>Il est aussi conseillé d'utiliser des mot clés par exemple :
>
>```txt
>[fix] correct somthing
>```
>> Légende:
>> Pour une correction de bug par exemple
>
>```txt
>[feature] add somthing
>```
>> Légende:
>> Pour une nouveauté
>
>Il est fortement conseillé d'écrire le message en anglais (si jamais le projet devient plus grand !)

![Source Control](./data/github-message.png)

- Ensuite, vous pouvez commit, en appuyant que la coche (check mark)

![Source Control](./data/github-commit.png)

- Enfin on `push` (pousse) la commit vers l'origine (GitHub)

![Source Control](./data/github-push.png)