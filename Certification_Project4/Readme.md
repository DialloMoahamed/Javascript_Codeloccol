# Bank Account Management Program

## Description

L'objectif de ce projet est de créer un programme de gestion de compte bancaire en JavaScript orienté objet.

L'application permet de :

- Créer un compte bancaire.
- Effectuer des dépôts.
- Effectuer des retraits.
- Consulter le solde actuel.
- Afficher l'historique des dépôts.
- Afficher l'historique des retraits.

---

## Objectifs pédagogiques

Ce projet permet de travailler :

- La programmation orientée objet (POO)
- Les classes JavaScript
- Les constructeurs
- Les méthodes d'instance
- Les tableaux et objets
- Les méthodes `filter()` et `map()`
- La manipulation de données

---

## Technologies utilisées

- JavaScript ES6

---

# Structure du projet

Le projet est composé d'une seule classe :

```javascript
class BankAccount
```

Cette classe représente un compte bancaire.

---

## Le constructeur

Le constructeur initialise :

```javascript
constructor() {
    this.balance = 0;
    this.transactions = [];
}
```

Il crée :

- Le solde du compte (`balance`)
- La liste des transactions (`transactions`)

---

# Les méthodes

## deposit(amount)

Cette méthode permet d'ajouter de l'argent sur le compte.

```javascript
deposit(amount)
```

### Fonctionnement

- Vérifie que le montant est supérieur à zéro.
- Ajoute une transaction de type **deposit**.
- Met à jour le solde.
- Retourne un message de confirmation.

Exemple :

```javascript
myAccount.deposit(200);
```

Résultat :

```
Successfully deposited $200. New balance: $200
```

---

## withdraw(amount)

Cette méthode permet de retirer de l'argent.

```javascript
withdraw(amount)
```

### Fonctionnement

- Vérifie que le montant est valide.
- Vérifie que le compte possède suffisamment d'argent.
- Ajoute une transaction de type **withdraw**.
- Met à jour le solde.
- Retourne un message de confirmation.

Exemple :

```javascript
myAccount.withdraw(50);
```

Résultat :

```
Successfully withdrew $50. New balance: $150
```

---

## checkBalance()

Permet d'afficher le solde actuel.

```javascript
checkBalance()
```

Exemple :

```javascript
myAccount.checkBalance();
```

Résultat :

```
Current balance: $325
```

---

## listAllDeposits()

Retourne la liste de tous les dépôts.

```javascript
listAllDeposits()
```

Cette méthode :

- Parcourt les transactions.
- Conserve uniquement les dépôts avec `filter()`.
- Récupère les montants avec `map()`.

Exemple :

```javascript
myAccount.listAllDeposits();
```

Résultat :

```
Deposits: 200,150,100
```

---

## listAllWithdrawals()

Retourne la liste des retraits.

```javascript
listAllWithdrawals()
```

Cette méthode :

- Filtre les transactions de type **withdraw**.
- Retourne uniquement les montants.

Exemple :

```javascript
myAccount.listAllWithdrawals();
```

Résultat :

```
Withdrawals: 50,75
```

---

# Gestion des transactions

Chaque opération est enregistrée sous la forme d'un objet.

Exemple :

```javascript
{
    type: "deposit",
    amount: 200
}
```

ou

```javascript
{
    type: "withdraw",
    amount: 75
}
```

Toutes les transactions sont stockées dans :

```javascript
this.transactions
```

---

# Fonctionnement complet

### Création du compte

```javascript
const myAccount = new BankAccount();
```

Le compte démarre avec :

- Un solde de 0.
- Une liste de transactions vide.

---

### Dépôt

L'utilisateur effectue :

```javascript
myAccount.deposit(200);
```

Le programme :

1. Vérifie le montant.
2. Ajoute une transaction.
3. Met à jour le solde.

---

### Retrait

L'utilisateur effectue :

```javascript
myAccount.withdraw(50);
```

Le programme :

1. Vérifie le solde.
2. Ajoute une transaction.
3. Met à jour le solde.

---

### Consultation

L'utilisateur peut consulter :

```javascript
myAccount.checkBalance();
```

ou

```javascript
myAccount.listAllDeposits();
```

ou

```javascript
myAccount.listAllWithdrawals();
```

---

# Exemple d'utilisation

```javascript
const myAccount = new BankAccount();

myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.deposit(100);
myAccount.withdraw(75);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
```

Résultat :

```
Current balance: $325
Deposits: 200,150,100
Withdrawals: 50,75
```

---

# Compétences acquises

Grâce à ce projet, j'ai appris :

- Les classes JavaScript
- La programmation orientée objet
- La création de méthodes
- La gestion d'un état interne
- La manipulation de tableaux
- L'utilisation de `filter()`
- L'utilisation de `map()`
- L'organisation d'un programme orienté objet

---

# Résultat final

Le programme simule un véritable compte bancaire.

L'utilisateur peut :

- Effectuer des dépôts.
- Effectuer des retraits.
- Consulter son solde.
- Consulter l'historique des dépôts.
- Consulter l'historique des retraits.

Ce projet met en pratique les principaux concepts de la programmation orientée objet en JavaScript à travers un système simple de gestion bancaire.
