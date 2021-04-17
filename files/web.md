<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Web

## Protocole HTTP

- [Le protocole HTTP](https://lig-membres.imag.fr/donsez/cours/http.pdf)

---

<style>
    p img{
        max-width:100%;
    }
</style>

## Mini-Cours - Les serveurs Web

A l'opposé d'un logiciel normal (par exemple un editeur de texte), un serveur web a besoin d'être démarré et de rester (pendant l'utilisation) allumé. Comme un site web est toujours disponible, le serveur web doit être tooujours allumé !

- En production ce logiciel est donc mit sur un serveur web qu'on laissé éveillé.
- En développement, on peut démarrer et l'éteindre quand on le souhaite.

Abordons maintenant un aspect technique, comment marche un site web ?

### Le protocole HTTP

#### Côté client

C'est très simple. Tout commence par un requête d'un utilisateur. Cette requête est réalisé avec le protocole `HTTP` (ou `HTTPS`), sur une couche généralement de [TCP](https://fr.wikipedia.org/wiki/Transmission_Control_Protocol) mais aussi sur une couche de [QUIC](https://en.wikipedia.org/wiki/QUIC).

Le protocole `HTTP` permet de savoir 3 choses qui vont nous intéresser :

- L'`URL`, ou plus simplement le chemin qu'on souhaite,
- Le type de requête qu'on fait : généralement `POST` ou `GET` ([ou d'autres](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods))
- Le contenu de la requête (s'il y en a un)

Bien évidemment, il y a beaucoup d'autre paramètres possibles (comme par exemple des paramètres d'authentification)

![Exemple de requête HTTP capturée avec WireShark](./data/web/http.jpg)

En combinant le `Host` et les caractères après le `GET` on options l'`URL` qui est affiché sur notre ordinateur, ici ça sera donc (on rajoute `http://` devant) [http://isis.unice.fr/~wn906559/ext/](http://isis.unice.fr/~wn906559/ext/)

Avec une URL, on peut accèder a plusieurs choses, il s'agit seulement d'un chemin, une `URL` peut donc mené à :

- Une page Web
- Un service
- Et d'autres comportement par exemple, les erreurs

#### Côté serveur

Sur le serveur web, c'est donc très simple : si le serveur à accès à la ressource demandé (et que les autorisations sont correctes), le serveur web renvoie ce qui est demandé.

Dans tout les cas, quand la requête arrive au serveur, le serveur web va effectuer une action :

- Cela peut être simple, comme lire un fichier est le renvoyer (c'est le cas pour des pages web simple)
- Lire un fichier et effectuer certaines actions (par exemple, changer des valeurs dans la page, selon l'utilisateur qui fait la requête)
- Mais ça peut être plus compliqué comme récupérer des données d'une base de données, effectuer des tâches sur des données, etc ...

Le serveur répond donc avec du contenu et un code indiquant si tout c'est bien passé ou non.

On peut donc citer le code `200` quand tout c'est bien passé, le fameux code `404` quand il n'a pas trouvé la ressource, ou le code `500` quand une erreur s'est produite côté serveur.

Il en existe d'autres, ils sont disponibles sur le web, par exemple, sur Wikipedia : [Liste des codes HTTP](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)

### Cas concret

Voyons par exemple comment marche l'onglet [Raws files](#raws) de ce site. On va pouvoir d'ailleurs voir du Javascript !

Le code utilisé est disponible :

- en version visuelle ici : [https://github.com/Its-Just-Nans/cdn/blob/main/githubExplorer.js](https://github.com/Its-Just-Nans/cdn/blob/main/githubExplorer.js)
- en version utilisable ici :[https://its-just-nans.github.io/cdn/githubExplorer.js](https://its-just-nans.github.io/cdn/githubExplorer.js)

Dès que le script va s'activer, il va d'abord, vérifier le fichier que l'on souhaite, c'est la fonction `startRender()`, et cela va nous générer une `URL`.
Puis avec cette `URL`, le code va exécuter la fonction `generateTable()` qui est composé de trois grandes parties :

- La réation la partie supérieur du tableau
- L'exécution d'une requête pour aller chercher les données
- La création de la partie basse du tableau

La deuxième étape est réalisée à l'aide d'une fonction "custom" mais on aurait très bien pu la faire avec la fonction `fetch()`

Si on regarde dans l'onglet `Network` des outils de développeurs (appuyer sur `F12` ou `Inspecter l'élément`, puis aller sur la page "[Raws files](#raws)"), on peut voir la requête !

![requestAPI](./data/web/requestAPI.jpg)

On voit que le script a fait une requête `GET` avec comme `URL` "[https://api.github.com/repos/its-just-nans/rt/contents/raws/](https://api.github.com/repos/its-just-nans/rt/contents/raws/)".

Cette `URL` nous renvoie vers une redirection (code `302`) avec une nouvelle adresse. Le navigateur nous redirige donc vers cette adresse, et nous avons accès aux données. Ici nous avons un document au format `JSON`, ici on a un tableau (représentation avec des crochets `[]`) qui contient des [objets](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON) (représentation avec des accolades `{}`)

Dans ces données qu'on peut visualiser dans l'onglet `Preview` (déjà [parser](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)) ou `Response`, on retrouve les données qui sont afficher dans le tableau de la page "[Raws files](#raws)" :

- le `type` de l'élément
- la `size` (taille) de l'élément
- le `path` (chemin) vers l'élément

![previewAPI](./data/web/previewAPI.jpg)
