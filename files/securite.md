<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Sécurité Réseaux

## Source

- [Cours de M.URVOY-KELLER](http://www.i3s.unice.fr/~urvoy/teaching/)
- [TP de M.URVOY-KELLER](http://www.i3s.unice.fr/~urvoy/teaching/)

---

## Cours

### Rappel fonction hachage :

|                             | MD5 | SHA-1 | SHA-256 |
|:----------------------------|:---:|:-----:|:-------:| 
| Taille en bits :            | 128 |  160  |   256   |
| Taille en hexa (bits/4) :   |  32 |   40  |    64   |
| Taille en octets (bits/8) : |  16 |   20  |    32   |


---

## Commandes

### OpenSSL

Pour chiffer un fichier avec openSSL, on peut faire :
```sh
openssl ALGO_NAME -in NAME_OF_FILE_IN -out NAME_OF_FILE_OUT -k PASSPHRASE
```
> Legend :
> - `ALGO_NAME`, pour voir les algorithmes disponible :
>> Tapez `openssl` puis `[TAB]`
>>
>> ou alors `openssl list -cipher-algorithms` (mais tous ne sont pas disponibles)
>>
>>ou alors  `openssl help` partie `Ciphers commands`

Encoder en base64 :
```sh
openssl base64 -e -in NAME_OF_FILE_IN -out NAME_OF_FILE_OUT
```
> Lengend :
>- `-e` pour encrypter
>- s'il n'y a pas l'option `-out NAME_OF_FILE_OUT`, cela affiche à l'écran
>- si `NAME_OF_FILE_IN` et `NAME_OF_FILE_OUT` sont identiques cela peut supprimer le contenu du fichier

Décoder en base64 :
```sh
openssl base64 -d -in NAME_OF_FILE_IN -out NAME_OF_FILE_OUT
```
> Lengend :
>- `-d` pour décrypter
>- s'il n'y a pas l'option `-out NAME_OF_FILE_OUT`, cela affiche à l'écran


Utilisez des fonctions de hachage :
```sh
openssl HASH_FUNCTION NAME_OF_FILE_IN
```
> Légende :
>- Vous pouvez avoir la liste des fonctions de hachage avec `openssl help` partie `Message Digest commands `