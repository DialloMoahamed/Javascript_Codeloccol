
# Drum Machine

## Description

L'objectif de ce projet est de créer une boîte à rythmes interactive en JavaScript.

L'application permet de :

- Jouer différents sons en cliquant sur les pads.
- Jouer les mêmes sons à l'aide du clavier.
- Afficher le nom du son joué.
- Ajouter un effet visuel lors de l'activation d'un pad.
- Reproduire le fonctionnement d'une véritable boîte à rythmes.

---

## Objectifs pédagogiques

Ce projet permet de travailler :

- La manipulation du DOM
- Les événements souris
- Les événements clavier
- Les éléments audio HTML
- Les classes CSS dynamiques
- Les animations d'interface utilisateur

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6

---

# Structure du projet

Le projet est constitué de trois parties principales :

- L'interface HTML
- La mise en forme CSS
- La logique JavaScript

---

# HTML

L'application est organisée autour d'un conteneur principal.

```html
<div id="drum-machine">
```

À l'intérieur se trouvent :

- Le display
- Le pad bank

---

## Le display

Le display affiche le nom du son joué.

```html
<p id="display">Drum Machine</p>
```

À chaque interaction, son contenu est mis à jour.

---

## Le pad bank

Le pad bank contient les neuf pads de batterie.

```html
<div id="pad-bank">
```

Chaque pad est représenté par un bouton.

Exemple :

```html
<button class="drum-pad" id="Heater-1">
    Q
    <audio
        class="clip"
        id="Q"
        src="...">
    </audio>
</button>
```

Chaque bouton contient :

- Une touche du clavier
- Un élément `<audio>`
- Un identifiant correspondant au nom du son

---

# CSS

Le CSS permet :

- Le centrage de l'application
- L'organisation des pads en grille
- Les effets de survol
- Les animations lors de l'appui
- L'amélioration de l'expérience utilisateur

Exemple :

```css
#pad-bank {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

Les pads changent également de couleur lorsqu'ils sont activés.

```css
.active {
    background: #f59e0b;
}
```

---

# JavaScript

Le JavaScript gère toute l'interactivité de l'application.

---

## Fonction playSound()

Cette fonction joue un son et met à jour l'interface.

```javascript
function playSound(key)
```

---

### Étape 1 : récupération de l'audio

Le programme récupère l'élément audio correspondant.

```javascript
const audio = document.getElementById(key);
```

---

### Étape 2 : remise à zéro

Avant chaque lecture, l'audio est réinitialisé.

```javascript
audio.currentTime = 0;
```

Cela permet de rejouer immédiatement un son.

---

### Étape 3 : lecture

Le son est lancé.

```javascript
audio.play();
```

---

### Étape 4 : affichage

Le nom du pad est affiché.

```javascript
display.innerText = drumPad.id;
```

Par exemple :

```
Heater-1
```

---

### Étape 5 : animation

Une classe CSS est ajoutée temporairement.

```javascript
drumPad.classList.add("active");
```

Puis supprimée après quelques millisecondes.

```javascript
setTimeout(() => {
    drumPad.classList.remove("active");
}, 100);
```

Cette animation donne un effet visuel lors de l'appui.

---

# Gestion des clics

Tous les pads écoutent un événement de clic.

```javascript
pad.addEventListener("click", () => {
    playSound(key);
});
```

Lorsqu'un utilisateur clique :

1. Le pad est identifié.
2. Le son est joué.
3. Le display est mis à jour.
4. L'animation est déclenchée.

---

# Gestion du clavier

Le document écoute les événements clavier.

```javascript
document.addEventListener("keydown", (e) => {
```

La touche est convertie en majuscule.

```javascript
const key = e.key.toUpperCase();
```

Si elle correspond à :

```
Q W E
A S D
Z X C
```

La fonction suivante est exécutée.

```javascript
playSound(key);
```

---

# Fonctionnement complet

### Cas 1 : clic

L'utilisateur clique sur :

```
Q
```

Le programme :

1. Trouve le son associé.
2. Joue le son.
3. Affiche **Heater-1**.
4. Anime le bouton.

---

### Cas 2 : clavier

L'utilisateur appuie sur :

```
W
```

Le programme :

1. Détecte la touche.
2. Lance le son correspondant.
3. Affiche **Heater-2**.
4. Anime le pad.

---

# Exemple d'utilisation

L'utilisateur appuie sur :

```
A
```

Résultat :

```
Heater-4
```

Le son est joué immédiatement et le bouton s'illumine brièvement.

---

# Compétences acquises

Grâce à ce projet, j'ai appris :

- La manipulation du DOM
- Les événements clavier
- Les événements souris
- L'utilisation des éléments audio HTML
- Les animations CSS
- Les classes dynamiques
- La création d'interfaces interactives

---

# Résultat final

L'application reproduit le fonctionnement d'une véritable boîte à rythmes.

L'utilisateur peut :

- Jouer des sons avec la souris.
- Jouer des sons avec le clavier.
- Visualiser le son joué.
- Bénéficier d'un retour visuel grâce aux animations.

Ce projet met en pratique les principales fonctionnalités de JavaScript liées à la gestion des événements, à la manipulation du DOM et à la création d'interfaces interactives.
