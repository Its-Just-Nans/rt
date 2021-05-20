<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Algorithmie

## Sources

- [Cours de Mme. BOUDAOUD](http://users.polytech.unice.fr/~karima/teaching/courses/IUT/Trad2/M4207/)

## Algorithmes

### Initialisation d’une liste

> Fonction Init (D/R uneListe: Liste)

```yaml
Fonction Init(D/R uneListe: Liste)
Var
    ptr : pointeur sur cellule;
Debut
    new(ptr)
    uneListe.tete <- ptr;
    retourner uneListe;
Fin
```

Ou alors

```yaml
Fonction Init(D/R uneListe: Liste)
Var
    ptr : pointeur sur cellule;
Debut
    new(ptr)
    ptr->suivant <- NULL;
    ptr->info <- -1;
    uneListe.tete <- ptr;
    retourner uneListe;
Fin
```

Ou alors

```yaml
Fonction Init(D/R uneListe: Liste)
Debut
    uneListe.tete <- NULL;
    retourner uneListe;
Fin
```

---

### Liste Vide: tester si la liste est vide

> Fonction ListeVide (D uneListe: Liste, R vide: Booleen)

```yaml
Fonction ListeVide(D uneListe: Liste, R unResultat: Boolean)
Debut
    Si (uneListe.tete = NULL)
    Alors
        unResultat <- vrai;
    Sinon
        unResultat <- faux;
    FinSi
    retourner unResultat;
Fin
```

---

### Longueur d’une liste

> Fonction Longueur (D uneListe: Liste, R uneLongueur: Entier)

```yaml
Fonction Longueur(D uneListe: Liste, R uneLongueur: Entier)
Var
    ptr: Pointeur sur Cellule, c'est uneListe.tete;
    cpt: Entier c'est 1;
Debut
    Tant que (ptr != NULL)
    Faire
    Debut
        cpt <- cpt + 1;
        ptr <- ptr->suivant;
    FinTantque
    uneLongueur <- cpt;
    retourner uneLongueur;
Fin
```

Ou alors

```yaml
Fonction Longueur(D uneListe: Liste, R uneLongueur: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete;
Debut
    uneLongueur <- 1
    Tant que (ptr->suivant != NULL)
    Faire
    Debut
        uneLongueur <- uneLongueur + 1;
        ptr <- ptr->suivant;
    FinTantque
    retourner uneLongueur;
Fin
```

> Légende :
>
> - Dans ce cas la, on utilise pas `cpt`
> - C'est plus rapide car on parcours moins la liste :
>
>> - Car on vérifie `ptr->suivant` et pas `ptr`
>> - on commence donc à `1`

---

### Recherche le ième élément

> Fonction Ieme(D uneListe: Liste, D unePosition: Entier, R unElement: Entier )

```yaml
Fonction Ieme(D uneListe: Liste, D unePosition: Entier, R unElement: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    compteur: Entier c'est 1
Debut
    Tant que (compteur < unePosition et ptr->suivant != NULL)
    Faire
    Debut
        compteur <- compteur + 1;
        ptr <- ptr->suivant;
    FinTantque
    Si (ptr->suivant = NULL)
    Alors
        Si (compteur = unePosition)
        Alors
            unElement <- ptr->info;
            retourner unElement;
        Sinon
            unElement <- -1;
            retourner unElement;
        FinSi
    Sinon
        unElement <- ptr->info;
        retourner unElement;
    FinSi
Fin
```

Ou alors

```yaml
Fonction Ieme(D uneListe: Liste, D unePosition: Entier, R unElement: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    compteur: Entier c'est 1
Debut
    Tant que (compteur < unePosition et ptr != NULL)
    Faire
    Debut
        compteur <- compteur + 1;
        ptr <- ptr->suivant;
    FinTantque
    Si (compteur = unePosition et ptr != NULL)
    Alors
        unElement <- ptr->info;
    Sinon
        unElement <- -1;
    FinSi
    retourner unElement;
Fin
```

---

### Appartient: rechercher un élément spécifique dans une liste et s'il existe, retourner Vrai

> Fonction Appartient (D uneListe: Liste, D unElement: Entier, R unResultat: Booleen)

```yaml
Fonction Appartient (D uneListe: Liste, D unElement: Entier, R unResultat: Booleen)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
Debut
    unResultat = Faux;
    Tant que (ptr->suivant != NULL)
    Faire
    Debut
        Si (ptr->info = unElement)
        Alors
            unResultat <- Vrai;
            retourner unResultat
        Sinon
            ptr <- ptr->suivant;
        FinSi
    FinTantque
    retourner unResultat
Fin
```

Ou alors

```yaml
Fonction Appartient (D uneListe: Liste, D unElement: Entier, R unResultat: Booleen)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
Debut
    Tant que (ptr->info != UnElement et ptr->suivant != NULL)
    Faire
    Debut
        ptr <- ptr->suivant;
    FinTantque
    Si (ptr->info = unElement)
    Alors
        unResultat <- Vrai;
    Sinon
        unResultat <- Faux;
    FinSi
    retourner unResultat
Fin
```

### Supprimer: supprimer un élément se trouvant à une position spécifique

> Fonction Supprimer (D/R uneListe: Liste, D unePosition: Entier)

```yaml
Fonction Supprimer (D/R uneListe: Liste, D unePosition: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    ptr2: Pointeur sur Cellule
    compteur: Entier c'est 1
Debut
    Si (unePosition != 1)
    Alors
        Tant que (compteur < (unePosition-1) et ptr->suivant != NULL)
        Faire
        Debut
            compteur <- compteur + 1
            ptr <- ptr->suivant
        FinTantque
        Si(compteur = (unePosition-1) et ptr->suivant != NULL)
        Alors
            ptr2 <- ptr->suivant
            ptr->suivant <- ptr2->suivant
            free(ptr2)
        Sinon
            Ecrire "Erreur pas de position"
        FinSi
    Sinon
        uneListe.tete <- ptr->suivant
        free(ptr)
    FinSi
    retourner uneListe
Fin
```

Ou alors

```yaml
Fonction Supprimer (D/R uneListe: Liste, D unePosition: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete;
    ptrPrec: Pointeur sur Cellule;
    cpt: Entier c'est 1;
Debut
    Si (unePosition = 1)
    Alors
        uneListe.tete <- ptr->suivant;
        free(ptr);
    Sinon
        Tant que (compteur < unePosition et ptr->suivant != NULL)
        Faire
        Debut
            ptrPrec <- ptr;
            ptr <- ptr->suivant;
            compteur <- compteur + 1;
        FinTantque
        Si (cpt=unePosition)
        Alors
            ptrPrec->suivant <- ptr->suivant;
            free(ptr);
        Sinon
            Ecrire("La position n'existe pas")
        FinSi
    FinSi
    retourner uneListe
Fin
```

---

### Ajouter: ajouter un élément donné à une position spécifique

> Fonction Ajouter (D/R uneListe: Liste, D unePosition: Entier, D unElement: Entier )

```yaml
Fonction Ajouter (D/R uneListe: Liste, D unePosition: Entier, D unElement: Entier )
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    ptr2: Pointeur sur Cellule
    ptr3: Pointeur sur Cellule
    compteur: Entier c'est 1
Debut
    Si(ptr != NULL)
    Alors
        Si(unePosition = 1)
        Alors
            new(ptr2)
            ptr2->suivant <- uneListe.tete
            ptr2->info <- unElement
            uneListe.tete -> ptr2
        Sinon
            Tant que (compteur < (unePosition-1) et ptr->suivant != NULL)
            Faire
            Debut
                compteur <- compteur + 1
                ptr <- ptr->suivant
            FinTantque
            Si(compteur = (unePosition-1))
            Alors
                ptr3 <- ptr->suivant
                new(ptr2)
                ptr->suivant <- ptr2
                ptr2->info <- unElement
                ptr2->suivant <- ptr3
            Sinon
                new(ptr2)
                ptr->suivant <- ptr2
                ptr2->info <- unElement
            FinSi
    Sinon
        new(ptr2)
        uneListe.tete -> ptr2
        ptr2->info <- unElement
    FinSi
    retourner uneListe
Fin
```

Ou Alors :

```yaml
Fonction Ajouter (D/R uneListe: Liste, D unePosition: Entier, D unElement: Entier )
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete;
    ptrNouv: Pointeur sur Cellule;
    ptrPrec: Pointeur sur Cellule;
    compteur: Entier c'est 1;
Debut
    new(ptrNouv)
    ptrNouv->info <- unElement;
    prtNouv->suivant <- NULL;
    Si (ptr = NULL)
    Alors
        uneListe->tete <- ptrNouv;
    Sinon
        Si (unePosition = 1)
        Alors
            ptrNouv->suivant <- uneListe->tete;
            uneListe->tete <- ptrNouv;
        Sinon
            Tant que (cpt < unePosition et ptr != NULL)
            Faire
                ptrPrec <_ptr;
                ptr <- ptr->suivant;
                cpt++;
            FinTantQue
            Si ( cpt=unePosition )
            Alors
                ptrPrec->suivant <- ptrNouv;
                ptrNouv->suivant <- ptr;
            Sinon
                ptr->suivant <- ptrNouv;
            FinSi
        FinSi
    FinSi
Fin
```

---

## Files

> Fonction AjouterFile (D/R uneListe: Liste, D unElement: Entier)

```yaml
Fonction AjouterFile (D/R uneFile: File, D unElement: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneFile.queue;
Debut
    new(ptr);
    ptr->info <- unElement;
    ptr->suivant <- NULL;
    Si(uneFile.tete = NULL)
    Alors
        uneFile.tete <- ptr;
        uneFile.queue <- ptr;
    Sinon
        (uneFile.queue)->suivant <- ptr;
        uneFile.queue <- ptr;
    FinSi
    retourner uneFile
Fin
```

> Fonction SupprimerFile (D/R uneFile: Liste)

```yaml
Fonction SupprimerFile (D/R uneFile: Liste)
Var
    ptr: Pointeur sur Cellule;
Debut
    Si(uneFile.tete != NULL)
    Alors
        ptr <- uneFile.tete;
        uneFile.tete <- (ptr->suivant);
        free(ptr);
        Si(uneFile.tete=NULL) //cas où la file devient vide
        Alors
            uneFile.queue <- NULL;
        FinSi
    Sinon
        Ecrire("Erreur : File Vide")
    FinSi
    retourner uneFile
Fin
```
