
# Weather App

## Énoncé

L'objectif de ce projet est de créer une application météo similaire à celle proposée par FreeCodeCamp.

L'application doit permettre :

- De sélectionner une ville dans une liste.
- De récupérer les informations météorologiques via une API.
- D'afficher les principales données météo.
- D'afficher l'icône correspondant aux conditions météorologiques.
- De gérer les erreurs en cas de problème lors de la récupération des données.

---

## Objectifs pédagogiques

Ce projet permet de travailler :

- La consommation d'une API REST avec Fetch
- La programmation asynchrone avec `async/await`
- La manipulation du DOM
- La gestion des événements
- Le traitement de données JSON
- La gestion des erreurs

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6
- Fetch API

---

# Structure du projet

## HTML

L'application est composée d'une liste déroulante permettant de choisir une ville :

```html
<select id="city-select">
```

Cette liste contient plusieurs villes disponibles.

---

### Bouton de recherche

```html
<button id="get-weather-btn">
    Get Weather
</button>
```

Lorsque l'utilisateur clique sur ce bouton, une requête est envoyée à l'API météo.

---

### Icône météo

```html
<img id="weather-icon">
```

Cette image affiche l'icône correspondant aux conditions météorologiques de la ville sélectionnée.

---

### Informations météo

Les différentes informations sont affichées dans plusieurs paragraphes :

```html
<p id="main-temperature"></p>
<p id="feels-like"></p>
<p id="humidity"></p>
<p id="wind"></p>
<p id="wind-gust"></p>
<p id="weather-main"></p>
<p id="location"></p>
```

Chaque élément est mis à jour dynamiquement par JavaScript.

---

# CSS

Le CSS permet :

- De centrer l'application sur la page.
- D'utiliser un fond en dégradé.
- De mettre en valeur les informations météo.
- D'améliorer l'expérience utilisateur grâce à une interface moderne.

Exemple :

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

L'application est centrée horizontalement et verticalement.

---

## Mise en forme du conteneur

Le conteneur principal possède :

```css
#weather-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
```

Cela permet d'obtenir une interface moderne avec des coins arrondis et une ombre portée.

---

## Bouton

Le bouton utilise un effet de survol :

```css
#get-weather-btn:hover {
    background: #2196f3;
}
```

Lorsque l'utilisateur passe la souris dessus, sa couleur change.

---

## Informations météo

Les informations secondaires sont présentées sous forme de cartes :

```css
#humidity,
#wind,
#wind-gust,
#feels-like {
    background: #f5f5f5;
}
```

Cela améliore la lisibilité.

---

# JavaScript

Le JavaScript constitue la partie principale du projet.

---

## Récupération des éléments du DOM

Au début du script, tous les éléments HTML nécessaires sont récupérés :

```javascript
const citySelect =
document.getElementById("city-select");

const getWeatherBtn =
document.getElementById("get-weather-btn");
```

Ainsi que les différents éléments destinés à afficher les informations météo.

---

## Fonction getWeather()

La fonction principale est :

```javascript
async function getWeather(city) {
```

Cette fonction reçoit une ville en paramètre et interroge l'API météo.

---

### Étape 1 : envoi de la requête

```javascript
const response = await fetch(
`https://weather-proxy.freecodecamp.rocks/api/city/${city}`
);
```

Une requête HTTP est envoyée vers l'API de FreeCodeCamp afin de récupérer les données météo.

---

### Étape 2 : conversion de la réponse

```javascript
return await response.json();
```

Les données reçues sont converties au format JSON afin d'être exploitées par JavaScript.

---

### Étape 3 : gestion des erreurs

```javascript
catch (error) {
    console.error(error);
    return undefined;
}
```

En cas d'erreur réseau ou d'indisponibilité de l'API, la fonction retourne `undefined`.

---

## Fonction showWeather()

La deuxième fonction importante est :

```javascript
async function showWeather(city)
```

Son rôle est d'afficher les informations météo dans la page.

---

### Étape 1 : récupération des données

```javascript
const data =
await getWeather(city);
```

Les informations météo sont récupérées grâce à la fonction précédente.

---

### Étape 2 : vérification

```javascript
if (data === undefined) {
    alert(
        "Something went wrong..."
    );
    return;
}
```

Si aucune donnée n'a été reçue, un message d'erreur est affiché.

---

### Étape 3 : affichage de l'icône

```javascript
weatherIcon.src =
data.weather?.[0]?.icon || "";
```

L'image affichée correspond aux conditions météorologiques actuelles.

---

### Étape 4 : affichage de la température

```javascript
mainTemperature.textContent =
data.main?.temp ?? "N/A";
```

La température principale est affichée.

---

### Étape 5 : température ressentie

```javascript
feelsLike.textContent =
data.main?.feels_like ?? "N/A";
```

L'utilisateur peut voir la température ressentie.

---

### Étape 6 : humidité

```javascript
humidity.textContent =
data.main?.humidity ?? "N/A";
```

Le taux d'humidité est affiché.

---

### Étape 7 : vitesse du vent

```javascript
wind.textContent =
data.wind?.speed ?? "N/A";
```

La vitesse du vent est récupérée.

---

### Étape 8 : rafales de vent

```javascript
windGust.textContent =
data.wind?.gust ?? "N/A";
```

Si disponible, la vitesse des rafales est affichée.

---

### Étape 9 : état du ciel

```javascript
weatherMain.textContent =
data.weather?.[0]?.main ?? "N/A";
```

Le type de météo est affiché :

- Clear
- Clouds
- Rain
- Snow
- etc.

---

### Étape 10 : localisation

```javascript
locationElement.textContent =
data.name ?? "N/A";
```

Le nom de la ville apparaît dans l'application.

---

## Gestion du bouton

Le bouton écoute un événement :

```javascript
getWeatherBtn.addEventListener(
    "click",
    () => {}
);
```

Lors du clic :

1. La ville sélectionnée est récupérée.
2. On vérifie qu'une ville est bien choisie.
3. La fonction `showWeather()` est appelée.

---

# Fonctionnement complet

### Cas 1 : recherche d'une ville

L'utilisateur sélectionne :

```text
Paris
```

Le programme :

1. Lit la ville sélectionnée.
2. Envoie une requête à l'API.
3. Récupère les données météo.
4. Met à jour l'interface.

---

### Cas 2 : erreur réseau

Si l'API est inaccessible :

1. Une erreur est interceptée.
2. Un message d'alerte est affiché.
3. L'application évite un plantage.

---

# Exemple d'utilisation

L'utilisateur choisit :

```text
Tokyo
```

Le programme affiche par exemple :

```text
Ville : Tokyo

Température : 28°C

Ressenti : 31°C

Humidité : 72%

Vent : 15 km/h

Temps : Clouds
```

L'icône météo est également affichée.

---

# Compétences acquises

Grâce à ce projet, j'ai appris :

- La consommation d'API REST
- L'utilisation de Fetch API
- La programmation asynchrone avec `async/await`
- La manipulation du DOM
- La gestion des événements
- Le traitement des données JSON
- La gestion des erreurs
- La création d'interfaces web interactives

---

# Résultat final

L'application permet à l'utilisateur de sélectionner une ville et d'obtenir instantanément les principales informations météorologiques.

Les données sont récupérées dynamiquement depuis une API, puis affichées dans une interface claire et moderne.

Ce projet met en pratique la communication avec une API REST, la manipulation du DOM et la programmation asynchrone en JavaScript, tout en respectant les objectifs pédagogiques de FreeCodeCamp.
