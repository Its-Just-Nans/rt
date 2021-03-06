<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Réseaux

## Cours

- [Cours](https://docplayer.fr/5075273-M1-informatique-2015-16-e-godard-couche-reseau-ipv4.html)
- [Site de Monsieur Urvoy-Keller](https://www.i3s.unice.fr/~urvoy/teaching/)

## Gérer les commandes pour modifier les IPs

Pour informations, il est [déconseillé et démodé](https://fr.wikipedia.org/wiki/Ifconfig#D%C3%A9pr%C3%A9ciation) d'utiliser `ifconfig` sur Linux, en effet, cette commande fait partie du paquet `net-tools`, or ce paquet n'est plus installé par défaut sur Debian.

Pour y remédier voici un petit guide pour connaitre les commandes à utiliser (en root):

|                                                  |   Windows                                                                             |   Linux                                      |                ciscoOS                |
|:-------------------------------------------------|:-------------------------------------------------------------------------------------:|:--------------------------------------------:|:-------------------------------------:|
| Changer l'état d'une interface                   |                                                                                       |   `ip link set eth0 up`                      |                                       |
| Voir la configuration des interfaces             |   `netsh interface ip show config` ou `ipconfig /all`                                 |   `ip a`                                     |     `show ip interface brief`         |
| Changer un IP                                    |   `netsh interface ipv4 set address "Wi-FI 2" static 10.1.1.1 255.255.255.0`          |   `ip addr add 192.168.2.254/24 dev eth0`    |                                       |
| Voir les interfaces                              |   `netsh interface show interface`                                                    |   `ip a`                                     |      `show int`                       |
| Voir les MAC                                     |   `netstat -rn` ou `route print`                                                      |   `ip route` ou `netstat -rn`                |                                       |
