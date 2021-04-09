<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Algorithmie avancée

## Sources

- [Cours de Mme. BOUDAOUD](http://users.polytech.unice.fr/~karima/teaching/courses/IUT/Trad2/M4207/Recursivite/)

## Algorithmes

> [Explication de la récursivité](https://youtu.be/rf60MejMz3E)

### Fibonacci

```yaml
Fonction Fibo (D unChiffre: Entier)
Var

Debut
    Si unChiffre >= 0:
    Alors
        Si unChiffre = 0:
        Alors
            retourner 0
        Sinon
            Si unChiffre = 1:
            Alors
                retourner 1
            Sinon
            retourner fibo(unChiffre-1) + fibo(unChiffre-2)
        FinSi
    Sinon
        ecrire "Erreur négatif"
    FinSi
Fin
```

### Puissance

```yaml
Fonction Puiss (D unChiffre: Reel, D unePuissance: Entier)
Var

Debut
    Si unePuissance > 0:
    Alors
        Si unePuissance = 0:
        Alors
            retourner 1;
        Sinon
            Si unePuissance = 1:
            Alors
                retourner unChiffre;
            Sinon
                retourner Puiss(unChiffre, unePuissance-1)*unChiffre;
    Sinon
        Ecrire "Erreur nombre négatif";
Fin
```

Ou alors

```yaml
Fonction Puiss (D unChiffre: Reel, D unePuissance: Entier)
Var

Debut
    Si unePuissance = 0:
    Alors
        retourner 1;
    Sinon
        retourner Puiss(unChiffre, unePuissance-1)*unChiffre;
    FinSi
Fin
```

---

### Nombre de chiffres

```yaml
Fonction NbChiffres (D unChiffre: Entier)
Var

Debut
    Si unChiffre < 10:
    Alors
        retourner 1;
    Sinon
        retourner NbChiffres(unChiffre/10)+1
    FinSi
Fin
```

---

### Palindrome

```yaml
Fonction Palindrome (D uneChaine: chaine)
Var
    longeurMot: Entier c'est Longeur(uneChaine)
Debut
    Si longeurMot = 0 ou longeurMot = 1:
    Alors
        retourner VRAI;
    Sinon
        Si Extraire(uneChaine,0,1) != Extraire(uneChaine,longeurMot-1 ,1):
        Alors
            retourner FAUX;
        Sinon
            Palindrome( Extraire(uneChaine,1 ,longeurMot-2) );
        FinSi
    FinSi
Fin
```

---

### Afficher une liste

```yaml
Proc Afficher (D UnPtrSurElem: ptr sur elem)
Var
    
Debut
    Si UnPtrSurElem.LePtrSurSuiv != NULL:
        printf UnPtrSurElem.LInfo;
        Afficher(UnPtrSurElem.LePtrSurSuiv);
    FinSi
Fin
```

---

### Compter les éléments dans une liste

```yaml
Proc CompteElemDsListe (D UnPtrSurElem: ptr sur elem)
Var
    
Debut
    Si UnPtrSurElem = NULL:
    Alors
        retourner 0;
    Sinon
        retourner CompteElemDsListe(UnPtrSurElem.LePtrSurSuiv) + 1;
    FinSi
Fin
```

---

### Compter le nombre d'occurence d'un même élément

```yaml
Proc CompteUnElem (D UnPtrSurElem: ptr sur elem, element: entier)
Var
    
Debut        
    Si UnPtrSurElem.Linfo = element:
    Alors
        Si  UnPtrSurElem.LePtrSurSuiv != NULL:
        Alors
            retourner CompteUnElem(UnPtrSurElem.LePtrSurSuiv) + 1;
        Sinon
            retourner 1;
        FinSi
    Sinon
        retourner 0;
    FinSi
Fin
```

---

### Tour de Hanoï

```yaml
Proc Deplacer(N, tDebut: tour debut, tFin: tour fin, tImt: tour intermediaire):
Var

Debut
    Deplacer(N-1, tDebut, tImt):
    Deplacer(1, tDebut, tFin):
    Deplacer(N-1, tImt, tFin):
Fin
```

---

## Arbres et récursivité

```yaml
Proc Rechercher(D/R unArbre: Pointeur sur Noeud, D uneCle: Entier):
Var

Debut
    Si (uneCle = unArbre.cle ou unArbre = NULL)
    Alors
        retourner unArbre;
    Sinon
        Si(unArbre.cle < uneCle)
        Alors
            Rechercher(unArbre.gauche, uneCle)
        Sinon
            Rechercher(unArbre.droite, uneCle)
        FinSi
    FinSi
Fin
```

```yaml
Proc Nombre(PtrNoeud: Pointeur sur Noeud, nombreNoeud: Entier):
Var
    nombreNoeud: Entier c'est 0;
Debut
    Si (PtrNoeud == NULL)
    Alors
        retourner 0;
    Sinon
        Si(PtrNoeud.gauche = NULL et PtrNoeud.droite = NULL)
        Alors
            retourner 1;
        Sinon
            retourner 1 + Nombre(PtrNoeud.droite) + Nombre(PtrNoeud.gauche);
        FinSi
    FinSi
Fin
```

```yaml
Proc Infixe(PtrNoeud: Pointeur sur Noeud, nombreActuel: Entier):
Var

Debut
    Si (PtrNoeud == NULL)
    Alors
        Si (PtrNoeud.gauche == NULL)
        Alors
            Si(PtrNoeud.gauche->info > nombreActuel )
            Alors
                Infixe(PtrNoeud.gauche, nombreActuel)
            Sinon
                Infixe(PtrNoeud.droite, nombreActuel)
            FinSi
        Sinon
            Si(PtrNoeud.droite == NULL)
            Alors
                Infixe()
            Sinon

            FinSi
        FinSi
    Sinon
        Ecrire("Arbre vide")
    FinSi
Fin
```

```yaml
Proc Ajouter(D/R unArbre: Pointeur sur Noeud, D uneCle: Entier):
Var
    trouver: boolean c'est Faux
    noeudPrecedent: c'est un pointeur sur  Noeud
    noeudRacine: c'est un un pointeur sur Noeud
Debut
    Si unArbre != NULL
    Alors
        noeudRacine<-unArbre
        // save value
        Si (Rechercher(uneArbre, uneCle) != NULL)
        Alors
            Ecrire("deja présent")
        Sinon
            // go to the correct place
            TantQue(trouver == faux)
            Faire
                noeudPrecedent <- unArbre
                Si(unArbre.cle < uneCle)
                Alors
                    unArbre <- unArbre.droite
                Sinon
                    unArbre <- unArbre.gauche
                FinSi
                Si (unArbre == NULL)
                Alors
                    trouver = vrai
                Fin Si
            FinTantQue
            noeud <- new Noeud()
            noeud.cle <- uneCle
            Si(noeudPrecedent.cle > uneCle)
            Alors
                noeudPrecedent->gauche <- noeud
            Sinon
                noeudPrecedent->droit <- noeud
            FinSi
        FinSi
        unArbre <- noeudRacine
    Sinon
        # Ajouter le noeud à la racine
        noeud <- new Noeud()
        noeud.cle <- uneCle
        unArbre <- noeud
    FinSi
Fin
```

```yaml
Proc Supprimer(D/R unArbre: Pointeur sur Noeud, D unNoeud: Pointeur sur Noeud):
Var
    noeudPrecedent: c'est un pointeur sur  Noeud
    noeudRacine: c'est un pointeur sur Noeud
    resultat: c'est un pointeur sur Noeud
    saveRightChild: c'est un pointeur sur Noeud
    saveLeftChild: c'est un pointeur sur Noeud
Debut
    Si unArbre != NULL
    Alors
        noeudRacine<-unArbre
        // save value
        Rechercher(uneArbre, unNoeud.uneCle, resultat)
        Si (resultat == NULL)
        Alors
            Ecrire("non présent")
        Sinon
            Si(resultat.droit != NULL et resultat.gauche != NULL)
            Alors
                Si(resultat.parent.cle > resultat.uneCle)
                Alors
                    resultat.parent.gauche <- NULL
                Sinon
                    resultat.parent.droit <- NULL
                Fin
                free(resultat)
                resultat <- NULL
            Sinon
                Si(resultat.droit == NULL)
                Alors
                    free(resultat.droit)
                Sinon
                    Si(resultat.gauche == NULL)
                    Alors
                        resultat.cle <- resultat.droit
                        free(resultat.droit)
                    FinSi
                FinSI
            FinSi
            # to finish
        FinSi
        unArbre <- noeudRacine
    Sinon
        Ecrire("non présent")
    FinSi
Fin
```
