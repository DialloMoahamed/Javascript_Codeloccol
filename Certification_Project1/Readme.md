# Markdown to HTML Converter

## Présentation

Ce projet consiste à développer un convertisseur Markdown vers HTML en JavaScript.

L'application permet à l'utilisateur de saisir du texte au format Markdown puis de :

- convertir automatiquement ce texte en HTML ;
- afficher le code HTML généré ;
- afficher un aperçu du rendu HTML.

Le projet a été réalisé dans le cadre du laboratoire FreeCodeCamp.

---

# Énoncé

Markdown est un langage de balisage léger permettant de mettre en forme du texte.

L'objectif de ce laboratoire est de créer une application capable de convertir plusieurs éléments Markdown en HTML à l'aide d'expressions régulières (Regular Expressions).

L'application doit prendre en charge :

- Les titres H1, H2 et H3
- Le texte en gras
- Le texte en italique
- Les images
- Les liens
- Les citations (blockquotes)

Le résultat doit être affiché sous deux formes :

1. Le code HTML brut
2. L'aperçu HTML rendu dans le navigateur

---

# Objectifs pédagogiques

Ce projet permet de travailler :

- Les expressions régulières (Regex)
- La manipulation du DOM
- Les événements JavaScript
- Les fonctions JavaScript
- Les méthodes de chaînes de caractères
- Le HTML dynamique

---

# Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6

---

# Structure du projet

## HTML

Le HTML est composé de trois zones principales.

### Zone de saisie Markdown

```html
<textarea id="markdown-input"></textarea>
```

Permet à l'utilisateur d'écrire du Markdown.

---

### Zone HTML brut

```html
<div id="html-output"></div>
```

Affiche le code HTML généré sous forme de texte.

---

### Zone Preview

```html
<div id="preview"></div>
```

Affiche le rendu HTML réel.

---

# Structure visuelle

```text
Markdown Input
┌───────────────┐
│ Texte Markdown│
└───────────────┘

Raw HTML Output
┌───────────────┐
│ <h1>Hello</h1>
└───────────────┘

HTML Preview
┌───────────────┐
│ Hello
└───────────────┘
```

---

# CSS

Le CSS permet d'organiser l'affichage de l'application.

---

## Réinitialisation

```css
* {
  box-sizing: border-box;
}
```

Permet un calcul plus simple des dimensions.

---

## Style général

```css
body {
  font-family: Arial, sans-serif;
}
```

Définit la police utilisée.

---

## Zone Markdown

```css
#markdown-input
```

Occupe toute la largeur disponible.

---

## Sorties HTML

```css
#html-output
#preview
```

Possèdent :

- une bordure ;
- un fond gris clair ;
- un espacement interne.

---

## Responsive Design

Lorsque l'écran dépasse :

```css
600px
```

Les trois blocs sont affichés côte à côte grâce à :

```css
display: flex;
```

---

# JavaScript

Toute la logique du projet est réalisée dans :

```js
Certification_Project1.js
```

---

# Sélection des éléments

Les éléments HTML sont récupérés grâce à :

```js
document.getElementById()
```

Exemple :

```js
const markdownInput =
document.getElementById(
  "markdown-input"
);
```

---

# Fonction convertMarkdown()

## Déclaration

```js
function convertMarkdown()
```

Cette fonction :

- récupère le texte Markdown ;
- analyse chaque ligne ;
- convertit les éléments Markdown ;
- retourne une chaîne HTML.

---

# Lecture du contenu

```js
let markdown =
markdownInput.value;
```

On récupère ce que l'utilisateur a écrit.

---

# Découpage en lignes

```js
const lines =
markdown.split("\n");
```

Chaque ligne est analysée séparément.

---

# Conversion des titres

## H1

Markdown :

```md
# Mon titre
```

Regex :

```js
/^\\s*#\\s+(.*)$/
```

Résultat :

```html
<h1>Mon titre</h1>
```

---

## H2

Markdown :

```md
## Mon titre
```

Résultat :

```html
<h2>Mon titre</h2>
```

---

## H3

Markdown :

```md
### Mon titre
```

Résultat :

```html
<h3>Mon titre</h3>
```

---

# Conversion des citations

Markdown :

```md
> Ceci est une citation
```

Regex :

```js
/^\\s*>\\s+(.*)$/
```

Résultat :

```html
<blockquote>
  Ceci est une citation
</blockquote>
```

---

# Conversion des images

Markdown :

```md
![logo](image.png)
```

Regex :

```js
/^!\[(.*?)\]\((.*?)\)$/
```

Résultat :

```html
<img alt="logo" src="image.png">
```

---

# Conversion des liens

Markdown :

```md
[Google](https://google.com)
```

Regex :

```js
/^\[(.*?)\]\((.*?)\)$/
```

Résultat :

```html
<a href="https://google.com">
  Google
</a>
```

---

# Conversion du texte en gras

## Avec **

Markdown :

```md
**texte**
```

Résultat :

```html
<strong>texte</strong>
```

---

## Avec __

Markdown :

```md
__texte__
```

Résultat :

```html
<strong>texte</strong>
```

---

# Conversion du texte en italique

## Avec *

Markdown :

```md
*texte*
```

Résultat :

```html
<em>texte</em>
```

---

## Avec _

Markdown :

```md
_texte_
```

Résultat :

```html
<em>texte</em>
```

---

# Formatage imbriqué

Le programme prend également en charge :

```md
> **this is a *quote***
```

Transformation :

```html
<blockquote>
  <strong>
    this is a
    <em>quote</em>
  </strong>
</blockquote>
```

Cette conversion est réalisée grâce aux remplacements globaux :

```js
.replace(...)
```

---

# Génération du HTML final

Après conversion :

```js
.join("")
```

assemble toutes les lignes converties.

Le HTML complet est ensuite retourné.

```js
return html;
```

---

# Événement input

Le laboratoire impose l'utilisation de :

```js
input
```

L'écouteur :

```js
markdownInput.addEventListener(
  "input",
  ...
);
```

détecte chaque modification du texte.

---

# Mise à jour du HTML brut

```js
htmlOutput.textContent = html;
```

Le code HTML est affiché sous forme de texte.

Exemple :

```html
<h1>Titre</h1>
```

---

# Mise à jour de l'aperçu

```js
preview.innerHTML = html;
```

Le navigateur interprète le HTML.

Exemple :

```html
<h1>Titre</h1>
```

devient :

# Titre

---

# Fonctionnement complet

## Étape 1

L'utilisateur saisit :

```md
# Bonjour
```

---

## Étape 2

L'événement :

```js
input
```

est déclenché.

---

## Étape 3

La fonction :

```js
convertMarkdown()
```

analyse le texte.

---

## Étape 4

Le Markdown est transformé en :

```html
<h1>Bonjour</h1>
```

---

## Étape 5

Le HTML est affiché dans :

```html
#html-output
```

---

## Étape 6

Le rendu est affiché dans :

```html
#preview
```

---

# Exemples d'utilisation

## Titre

Markdown :

```md
# Welcome
```

HTML :

```html
<h1>Welcome</h1>
```

---

## Gras

Markdown :

```md
**Important**
```

HTML :

```html
<strong>Important</strong>
```

---

## Italique

Markdown :

```md
*Hello*
```

HTML :

```html
<em>Hello</em>
```

---

## Lien

Markdown :

```md
[GitHub](https://github.com)
```

HTML :

```html
<a href="https://github.com">
GitHub
</a>
```

---

## Image

Markdown :

```md
![Logo](logo.png)
```

HTML :

```html
<img alt="Logo" src="logo.png">
```

---

# Compétences acquises

Grâce à ce projet, j'ai appris :

- Les expressions régulières
- La manipulation du DOM
- Les événements JavaScript
- La génération dynamique de HTML
- Les méthodes de chaînes de caractères
- Le traitement du texte utilisateur
- Le développement d'outils de conversion

---

# Résultat final

L'application permet :

✅ de convertir les titres Markdown

✅ de convertir le texte en gras

✅ de convertir le texte en italique

✅ de convertir les liens

✅ de convertir les images

✅ de convertir les citations

✅ d'afficher le HTML brut

✅ d'afficher un aperçu HTML

✅ de respecter toutes les exigences du laboratoire FreeCodeCamp

Le projet constitue un convertisseur Markdown vers HTML fonctionnel développé entièrement en JavaScript.
