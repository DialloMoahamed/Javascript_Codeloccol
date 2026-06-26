# Voting System

## Description

L'objectif de ce projet est de créer un système de vote simple en JavaScript.

L'application permet de :

- Ajouter des options à un sondage.
- Permettre à des utilisateurs de voter.
- Empêcher un utilisateur de voter plusieurs fois pour la même option.
- Afficher les résultats du sondage.

---

## Objectifs pédagogiques

Ce projet permet de travailler :

- Les structures de données `Map`
- Les structures de données `Set`
- Les fonctions JavaScript
- Les boucles
- La manipulation de collections
- La validation des données

---

## Technologies utilisées

- JavaScript ES6

---

# Structure du projet

Le projet repose sur une structure principale :

```javascript
const poll = new Map();
```

Chaque entrée de la Map contient :

- Le nom d'une option.
- Un `Set` contenant les identifiants des votants.

Exemple :

```javascript
"Turkey" => Set { "traveler1", "traveler2" }
```

---

# Les fonctions

## addOption(option)

Cette fonction ajoute une nouvelle option au sondage.

```javascript
addOption(option)
```

### Fonctionnement

- Vérifie que le nom n'est pas vide.
- Vérifie que l'option n'existe pas déjà.
- Crée une nouvelle entrée dans la Map.
- Associe un `Set` vide à cette option.

Exemple :

```javascript
addOption("Turkey");
```

Résultat :

```
Option "Turkey" added to the poll.
```

---

## vote(option, voterId)

Cette fonction permet à un utilisateur de voter.

```javascript
vote(option, voterId)
```

### Fonctionnement

- Vérifie que l'option existe.
- Récupère le `Set` des votants.
- Vérifie que l'utilisateur n'a pas déjà voté pour cette option.
- Ajoute son identifiant dans le `Set`.

Exemple :

```javascript
vote("Turkey", "traveler1");
```

Résultat :

```
Voter traveler1 voted for "Turkey".
```

Si l'utilisateur vote une seconde fois :

```
Voter traveler1 has already voted for "Turkey".
```

---

## displayResults()

Cette fonction affiche les résultats du sondage.

```javascript
displayResults()
```

### Fonctionnement

Elle parcourt toutes les options enregistrées dans la Map et affiche le nombre de votes obtenu par chacune.

Exemple :

```javascript
displayResults();
```

Résultat :

```
Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
Malaysia: 0 votes
Algeria: 0 votes
```

---

# Gestion des données

Les informations sont stockées dans une `Map`.

Exemple :

```javascript
const poll = new Map();
```

Chaque option possède un `Set` de votants.

Exemple :

```javascript
poll.set("Turkey", new Set());
```

Après plusieurs votes :

```javascript
"Turkey" => Set {
    "traveler1",
    "traveler2"
}
```

Le `Set` garantit qu'un même utilisateur ne peut pas être enregistré plusieurs fois pour une même option.

---

# Fonctionnement complet

### Création des options

Le programme ajoute plusieurs destinations au sondage.

```javascript
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Malaysia");
addOption("Algeria");
```

---

### Vote

Les utilisateurs votent pour leur destination préférée.

```javascript
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
```

Le programme :

1. Vérifie que l'option existe.
2. Vérifie que le votant n'a pas déjà voté.
3. Enregistre le vote.

---

### Affichage des résultats

Le programme affiche ensuite le nombre de votes obtenus.

```javascript
displayResults();
```

---

# Exemple d'utilisation

```javascript
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Malaysia");
addOption("Algeria");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");

console.log(displayResults());
```

Résultat :

```
Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
Malaysia: 0 votes
Algeria: 0 votes
```

---

# Compétences acquises

Grâce à ce projet, j'ai appris :

- L'utilisation de `Map`
- L'utilisation de `Set`
- La gestion de collections de données
- La validation des entrées utilisateur
- La prévention des doublons
- La manipulation des boucles `for...of`
- L'organisation d'un programme JavaScript

---

# Résultat final

L'application simule un véritable système de vote.

L'utilisateur peut :

- Ajouter des options au sondage.
- Voter pour une option.
- Empêcher les votes en double.
- Consulter les résultats en temps réel.

Ce projet met en pratique les structures de données `Map` et `Set` de JavaScript pour développer un système de vote simple, fiable et facilement extensible.
