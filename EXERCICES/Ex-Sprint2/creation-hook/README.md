# Exercice React — Hooks personnalisés

**Sprint 2 · Frontend**

Création de **hooks personnalisés** pour sortir la logique des composants et la réutiliser (principe **DRY**, *Don't Repeat Yourself*).

## Les hooks

| Hook | Rôle | Ce qu'il renvoie |
|---|---|---|
| `useFetch(url)` | Récupère des données depuis une URL, gère le chargement et les erreurs, et annule la requête au démontage (`AbortController`) | `{ data, loading, error }` |
| `useProductDetail(productId)` | Utilise `useFetch` pour récupérer **un** produit de [Fake Store API](https://fakestoreapi.com) | `{ product, loading, error }` |
| `useWindowSize()` | Suit la taille de la fenêtre avec un écouteur `resize`, supprimé au démontage | `{ width, height }` |

## Les composants

| Composant | Contenu |
|---|---|
| `ProductDetailPage` | Affiche le titre et la description du produit n° 1, avec les messages de chargement et d'erreur |
| `ResponsiveComponent` | Affiche la largeur et la hauteur de la fenêtre, et un message différent sous 768 px (mobile / ordinateur) |

## Notions travaillées

- Un hook personnalisé est une **fonction dont le nom commence par `use`**, qui utilise d'autres hooks et **renvoie des données** (pas de JSX)
- Un hook peut en utiliser un autre (`useProductDetail` utilise `useFetch`)
- Renommage lors de la déstructuration : `{ data: product }`
- `fetch` avec `async` / `await`, `try` / `catch` / `finally` et la vérification de `response.ok`
- Fonctions de nettoyage de `useEffect` : `controller.abort()` et `removeEventListener`

> **Correction apportée à `useFetch` :** dans le `finally`, `setLoading(false)` n'est appelé que si la requête n'a pas été annulée (`!controller.signal.aborted`). Sans cette vérification, avec `<StrictMode>`, la requête annulée terminait le chargement avant la vraie requête : `product` valait encore `null` et la page plantait.

## Structure

```
src/
├── hooks/
│   ├── useFetch.jsx
│   ├── useProductDetail.jsx
│   └── useWindowSize.jsx
├── App.jsx
├── ProductDetailPage.jsx
├── ResponsiveComponent.jsx
└── main.jsx
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```
