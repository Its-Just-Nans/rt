<!--
Created by Its-Just-Nans - https://github.com/Its-Just-Nans
Copyright Its-Just-Nans
--->

# Algorithmie avancée

## Sources

- Cours de **Mme. Boudaoud**

## Algorithmes

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
        Si uneChaine[0] != uneChaine[longeurMot-1]:
        Alors
            retourner FAUX;
        Sinon
            Palindrome( Extraire(uneChaine,1 ,longeurMot-1) );
        FinSi
    FinSi
Fin
```