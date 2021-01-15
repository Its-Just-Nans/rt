<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# IP

### Gérer les IP

Pour informations, il est [déconseillé et démodé](https://fr.wikipedia.org/wiki/Ifconfig#D%C3%A9pr%C3%A9ciation) d'utiliser `ifconfig` sur Linux, en effet, cette commande fait partie du paquet `net-tools`, or ce paquet n'est plus installé par défaut sur Debian.

Pour y remédier voici un petit guide pour connaitre les commandes à utiliser (en root):



|                                                  |   Windows                                                                             |   Linux                                      |     iOS    |
|:-------------------------------------------------|:-------------------------------------------------------------------------------------:|:--------------------------------------------:|:----------:|
| Changer l'état d'une interface                   |                                                                                       |   `ip link set eth0 up`                      |         |
| Voir la configuration des interfaces             |   `netsh interface ip show config` ou `ipconfig /all`                                 |   `ip a`                                     |     `show ip interface bried`    |
| Changer un IP                                    |   `netsh interface ipv4 set address "Wi-FI 2" static 10.1.1.1 255.255.255.0`          |   `ip addr add 192.168.2.254/24 dev eth0`    |         |
| Voir les interfaces                              |   `netsh interface show interface`                                                    |   `ip a`                                     |      `show int`      |
| Voir les MAC                                     |   `netstat -rn` ou `route print`                                                      |     `ip route` ou `netstat -rn`                                         |            |



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
> On peut donc dire **`l'adresse de `** pour `&`
> 
> On peut donc dire **`la valeur pointée par`** pour `*`


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
