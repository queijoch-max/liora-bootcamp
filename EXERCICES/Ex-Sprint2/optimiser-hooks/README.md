# Exercice React — Optimiser ses hooks

**Sprint 2 · Frontend**

Six exercices pour garder des fonctions et des objets **stables** d'un rendu à l'autre et éviter les re-renders inutiles, avec `React.memo`, `useCallback`, `useMemo` et `useRef`. Tous les exercices sont affichés les uns sous les autres dans `App`.

## Les exercices

| N° | Composant | Hook utilisé | Ce qui est résolu |
|:---:|---|---|---|
| 1 | `UserList` | `useCallback` | La fonction `handleDelete` reste la même entre les rendus : taper dans le filtre ne re-rend plus les `UserItem` (protégés par `React.memo`) |
| 2 | `ProductDashboard` | `useMemo` | Le produit le plus cher parmi 1 000 produits n'est calculé qu'une seule fois, et plus à chaque clic sur « Cacher / Afficher » |
| 3 | `LoginForm` | `useRef` | Le champ « Nom d'utilisateur » reçoit le focus dès l'affichage du formulaire |
| 4 | `MapContainer` | `useMemo` | L'objet `mapOptions` garde la même référence : cliquer sur « Zoomer » ne re-rend plus la carte |
| 5 | `RenderCounter` | `useRef` | Compte le nombre de rendus du composant sans provoquer de boucle infinie |
| 6 | `Stopwatch` | hook `useStopwatch` | Chronomètre avec Start, Stop et Reset |

## Le hook `useStopwatch`

| Élément | Rôle |
|---|---|
| `time` (`useState`) | Le temps écoulé en secondes, affiché à l'écran |
| `intervalRef` (`useRef`) | L'identifiant du `setInterval`, gardé pour pouvoir l'arrêter, sans provoquer de rendu |
| `start`, `stop`, `reset` (`useCallback`) | Fonctions stables pour démarrer, arrêter et remettre à zéro le chrono |
| `useEffect` | Arrête l'intervalle si le composant est démonté |

`start` ne lance pas de nouvel intervalle si un chrono tourne déjà.

## Notions travaillées

- **Stabilité référentielle :** une fonction ou un objet est recréé à chaque rendu, donc `{} === {}` vaut `false`
- **`React.memo`** enveloppe un **composant** et évite son re-render si ses props n'ont pas changé
- **`useCallback`** mémorise une **fonction**, et **`useMemo`** mémorise une **valeur** (un objet ou le résultat d'un calcul)
- **`useRef`** garde une valeur entre les rendus **sans déclencher de re-render**, ou donne accès à un élément du DOM avec `ref={...}`
- Le **tableau de dépendances** : `[]` quand rien de variable n'est utilisé dans le hook
- Renvoyer un objet depuis une fonction fléchée : `() => ({ ... })`

> **À savoir :** en développement, `<StrictMode>` affiche chaque composant deux fois. C'est pour ça que le compteur de l'exercice 5 augmente de 2 en 2 et que certains `console.log` apparaissent en double.

## Structure

```
src/
├── components/
│   ├── UserList.jsx          # Exercice 1
│   ├── ProductDashboard.jsx  # Exercice 2
│   ├── LoginForm.jsx         # Exercice 3
│   ├── MapContainer.jsx      # Exercice 4
│   ├── RenderCounter.jsx     # Exercice 5
│   └── Stopwatch.jsx         # Exercice 6
├── hooks/
│   └── useStopwatch.js       # Exercice 6
├── App.jsx
├── index.css
└── main.jsx
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```

Ouvrir la console du navigateur (**F12**) pour voir les `console.log` de chaque exercice.
