<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Some notes

### SSH

Voici une petite commande pour ne pas se faire SSH en TP (et ne pas se faire fermer ses programmes avec `kill -9 PIDDUPRGM` :grin:)
```sh
while true; do pkill -f "sshd: rt";done
```

---

### Node.js
Commande pour créer un serveur web rapidement
```sh
npm install --global http-server
#or 
npm install -g http-server

cd YOUR-DIRECTORY

http-server
```
> Légende :
> - une option utile est `-p` pour choisir le port du serveur
> - il y a également d'autres options (voir la documentation)

Reference : [http-server](https://www.npmjs.com/package/http-server)

---
### Utilisation de `su` sur Linux (Debian)

La commande `su` permet de changer s'utilisateur pour le temps d'une session (après avoir saisi le mot de passe, s'il y en a un), pour l'utiliser, on écrit :
```sh
su UTILISATEUR
```
On peut aussi l'utiliser pour devenir root simplement en écrivant :
```sh
su
```

Pour devenir superutilisateur sur Linux, on peut faire la commande `su`. Mais parfois, cela ne suffit pas, nous n'avons toujours pas les droits, c'est normal : nous n'avons pas chargé les variables d'environnement du superutilisateur.

Pour ce faire faites simplement
```sh
su -l
#ou encore
su -
#dans ce dernier cas, s'il y a plusieurs options, il faut que le tiret soit la dernière option, avant le pseudo
```

Reference : [manpages.debian](https://manpages.debian.org/stretch/login/su.1.fr.html)

---

### Understand C pointer with examples

The program used :
```c
#include <stdio.h>

int main(){
    int number = 7;
    int *pointerTOnumber = &number;
    printf("%%d number = %d\n", number);
    printf("%%p number = %p\n", number);
    printf("%%d &number = %d\n", &number);
    printf("%%p &number = %p\n", &number);
    printf("%%d pointerTOnumber = %d\n", pointerTOnumber);
    printf("%%p pointerTOnumber = %p\n", pointerTOnumber);
    printf("%%d &pointerTOnumber = %d\n", &pointerTOnumber);
    printf("%%p &pointerTOnumber = %p\n", &pointerTOnumber);
    printf("%%d *pointerTOnumber = %d\n", *pointerTOnumber);
    printf("%%p *pointerTOnumber = %p\n", *pointerTOnumber);
}
```

> Notez que `%%` est utilisé pour afficher que `%`

Le résultat :

```c
%d number = 7                            //valeur de number sous forme décimale
%p number = 0x7                          //valeur de number sous forme Hexa car %p
%d &number = -1104070188                 //valeur de l'adresse de number sous forme décimale
%p &number = 0x7ffdbe3139d4              //valeur de l'adresse sous forme hexa car %p
%d pointerTOnumber = -1104070188         //valeur de l'adresse de number sous forme décimale
%p pointerTOnumber = 0x7ffdbe3139d4      //valeur de l'adresse de number sous forme hexa car %p
%d &pointerTOnumber = -1104070184        //valeur de l'adresse du pointeur sous forme décimale
%p &pointerTOnumber = 0x7ffdbe3139d8     //valeur de l'adresse du pointeur sous forme hexa car %p
%d *pointerTOnumber = 7                  //valeur pointée par le pointeur (donc celle de number) sous forme décimale
%p *pointerTOnumber = 0x7                //valeur pointée par le pointeur (donc celle de number) sous forme hexa car %p
```
> On peut donc lire "**`l'adresse de `**" pour le symbole `&`
> 
> On peut donc lire "**`la valeur pointée par`**" pour le symbole `*`


---

### Paramètre de main en C

`argv[0]` contiendra tout le temps le nom du programme

```
int main(int argc, char *argv[]){
    for(int o=0; o< argc; o++){
        printf("Argument %d : %s\n", o, argv[o]);
    }
    return 0;
}
```

---

### Différence entre les arguments et les paramètres d'une fonctions

C'est une question de vocabulaire :

- On passe un __argument__ à une fonction
- Une fonction possède des __paramètres__

Reference : [StackOverflow](https://stackoverflow.com/questions/156767/whats-the-difference-between-an-argument-and-a-parameter#:~:text=A%20parameter%20is%20a%20variable%20in%20a%20method%20definition.%20When%20a%20method%20is%20called,%20the%20arguments%20are%20the%20data%20you%20pass%20into%20the%20method's%20parameters)

