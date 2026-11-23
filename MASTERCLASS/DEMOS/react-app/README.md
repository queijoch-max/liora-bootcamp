# Masterclass — Démo React

**Sprint 2 · Frontend**

Premier projet React créé avec **Vite**, réalisé pendant la masterclass.

## Contenu

Une page découpée en **composants** réutilisables :

| Composant | Contenu |
|---|---|
| `Navbar` | Barre de navigation |
| `Hello` | Affiche « Hello {name}, tu as {age} ans. » à partir de ses **props** |
| `Footer` | Pied de page |

Dans `App.jsx`, le composant `Hello` est utilisé trois fois avec des valeurs différentes :

```jsx
<Hello name="Raph" age="12" />
<Hello name="Charlotte" age="13" />
<Hello name="Gilles" age="14" />
```

## Notions travaillées

- Création d'un projet avec Vite
- Composants en fonctions fléchées
- **Props** et déstructuration (`({ name, age })`)
- Fragments `<> </>`

## Lancer le projet

```bash
npm install      # la première fois seulement
npm run dev
```
