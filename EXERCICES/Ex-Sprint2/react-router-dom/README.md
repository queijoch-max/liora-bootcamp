# Exercice React — React Router

**Sprint 2 · Frontend**

Mise en place de la navigation entre plusieurs pages avec **react-router-dom**.

## Routes

| URL | Page affichée |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/contact` | `Contact`, protégée par `ProtectedRoute` |
| `/a-propos` | Redirige vers `/about` |
| Toute autre URL | `ErrorPage` (404) |

Toutes les pages s'affichent dans le composant `Layout`, qui contient la barre de navigation.

## Notions travaillées

- `createBrowserRouter` et `RouterProvider` pour déclarer les routes
- Routes imbriquées (`children`), route `index` et `<Outlet />`
- Navigation sans rechargement avec `<Link>`
- Page d'erreur avec `errorElement`
- Redirection avec `<Navigate replace />`
- **Route protégée** : `ProtectedRoute` redirige vers l'accueil si l'utilisateur n'est pas administrateur (`isAdmin = false`)

## Structure

```
src/
├── components/
│   ├── Layout.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── ErrorPage.jsx
│   └── Home.jsx
├── index.css
└── main.jsx
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```
