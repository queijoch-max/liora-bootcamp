# TP2 JS — Pokémon Explorer

**Sprint 1 · Fondamentaux**

Application qui affiche des Pokémon grâce à l'API [PokeAPI](https://pokeapi.co).

## Fonctionnalités

- **Génération aléatoire** : un bouton affiche 6 Pokémon tirés au hasard, **triés du plus léger au plus lourd** (image, nom, type, poids).
- **Recherche** : un champ permet de trouver un Pokémon par son nom anglais ou son numéro.
- Un message s'affiche si le Pokémon est **introuvable**.

## Notions travaillées

- Nombres aléatoires avec `Math.random()`
- Plusieurs appels d'API en parallèle avec `Promise.all`
- Tri d'un tableau avec `sort`
- Transformation de données avec `map` et `join`
- Vérification de la réponse avec `response.ok`

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page |
| `style.css` | Mise en forme |
| `script.js` | Appels à l'API, tri et affichage |
| `tp2-api-pokemon.html` | Version en un seul fichier (HTML + CSS + JS) pour Jupyter |
| `consigne.txt` | Énoncé du TP |

## Lancer le TP

Ouvrir `index.html` avec l'extension **Live Server** de VS Code.
