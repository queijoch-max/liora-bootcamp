# Exercice React — URLs dynamiques

**Sprint 2 · Frontend**

Mini-blog qui utilise une **route dynamique** de React Router : une seule route affiche n'importe quel article selon son identifiant dans l'URL.

## Routes

| URL | Page affichée |
|---|---|
| `/` | `Blog` : la liste des articles |
| `/articles/:id` | `Article` : l'article dont l'`id` est dans l'URL (par exemple `/articles/2`) |

Si l'`id` ne correspond à aucun article (par exemple `/articles/42`), le message « Article non trouvé » s'affiche avec un lien de retour.

## Notions travaillées

- **Paramètre d'URL** `:id` dans le chemin d'une route
- Lecture du paramètre avec le hook **`useParams`**
- Recherche de l'article avec `find`
- Liens générés dynamiquement avec `<Link>` et les template literals
- Affichage d'une liste avec `map` et `key`

## Structure

```
src/
├── data/
│   └── articles.js    # la liste des articles
├── pages/
│   ├── Article.jsx    # un article selon l'id de l'URL
│   └── Blog.jsx       # la liste des articles
├── index.css
└── main.jsx           # déclaration des routes
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```
