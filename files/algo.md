# Algorithmie

## Sources

- Cours de **Mme. Boudaoud**

## Algorithmes

### Initialisation d’une liste 

> Fonction Init (D/R uneListe: Liste)
```yaml
Fonction Init(R uneListe: Liste)
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
Fonction Init(R uneListe: Liste)
Var
    ptr : pointeur sur cellule;
Debut
    new(ptr)
    ptr->suivant <- null;
    ptr->info <- -1;
    uneListe.tete <- ptr;
    retourner uneListe;
Fin
```

Ou alors

```yaml
Fonction Init(R uneListe: Liste)
Debut
    uneListe.tete <- null;
    retourner uneListe;
Fin
```

---


### Liste Vide: tester si la liste est vide

> Fonction ListeVide (D uneListe: Liste, R ?vide: Booleen)

```yaml
Fonction ListeVide(D uneListe: Liste, R unResultat: Boolean)
Debut
    Si (uneListe.tete=null)
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
    ptr: Pointeur sur Cellule c'est uneListe.tete;
    cpt: Entier c'est 0;
Debut
    Tant que (ptr != null)
    Faire
    Debut
        cpt++;
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
    Tant que (ptr->suivant != null)
    Faire
    Debut
        uneLongueur <- uneLongueur + 1;
        ptr <- ptr->suivant;
    FinTantque
    retourner uneLongueur;
Fin
```
> Légende :
> - Dans ce cas la, on utilise pas `cpt`
> - C'est plus rapide car on parcours moins la liste :
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
    Tant que (compteur < unePosition et ptr->suivant != null)
    Faire
    Debut
        compteur <- compteur + 1;
        ptr <- ptr->suivant;
    FinTantque
    Si (ptr->suivant = null)
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
    Tant que (compteur < unePosition et ptr != null)
    Faire
    Debut
        compteur <- compteur + 1;
        ptr <- ptr->suivant;
    FinTantque
    Si (compteur = unePosition et ptr != null)
    Alors
        unElement <- ptr->info;
    Sinon
        unElement <- -1;
    FinSi
        retourner unElement;
Fin
```

--- 

<!--

### Supprimer: supprimer un élément se trouvant à une position spécifique

> Fonction Supprimer (D/R uneListe: Liste, D unePosition: Entier)

```
Fonction Supprimer (D/R uneListe: Liste, D unePosition: Entier)
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    ptr2: Pointeur sur Cellule
    ptr3: Pointeur sur Cellule
    compteur: Entier c'est 0
Debut
    Tant que (compteur != (unePosition-2) )
    Faire
    Debut
        compteur <- compteur + 1
        ptr <- ptr->suivant
    FinTantque
    ptr2 <- ptr
    ptr3 <- ptr->suivant
    free(ptr)
    ptr2.suivant <- *ptr3
    retourner uneListe
Fin
```
<!--

---

### Ajouter: ajouter un élément donné à une position spécifique
> Fonction Ajouter (D/R uneListe: Liste, D unePosition: Entier, D unElement: Entier )

```
Fonction Ajouter (D/R uneListe: Liste, D unePosition: Entier, D unElement: Entier )
Var
    ptr: Pointeur sur Cellule c'est uneListe.tete
    ptr2: Pointeur sur Cellule
    ptr3: Pointeur sur Cellule
    compteur: Entier c'est 0
Debut
    Tant que (compteur != (unePosition-2) )
    Faire
    Debut
        compteur <- compteur + 1
        ptr <- ptr->suivant
    FinTantque
    new(ptr2)
    ptr.suivant <-
    ptr3 <- ptr->suivant
    free(ptr)
    ptr2.suivant <- *ptr3
    retourner uneListe
Fin
```



-->