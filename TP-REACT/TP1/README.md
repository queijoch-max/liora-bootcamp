# TP1 React — Landing page en composants

**Sprint 2 · Frontend**

Intégration d'une page d'accueil découpée en **composants** React.

## Composants

| Composant | Contenu |
|---|---|
| `NavBar` | Logo et liens d'ancre (Accueil, Formulaire, Contact) |
| `Accueil` | Section d'accueil avec un titre, un texte et un bouton d'inscription |
| `Contact` | Formulaire de contact (nom, email, message) |
| `Footer` | Pied de page |

Les quatre composants sont assemblés dans `App.jsx`.

## Notions travaillées

- Création de composants et `export default` / `import`
- Syntaxe **JSX** (`className`, `htmlFor`, balises auto-fermantes)
- Import d'une image depuis `src/assets`

## Structure

```
src/
├── assets/logo.png
├── components/
│   ├── Accueil.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── NavBar.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Lancer le TP

```bash
npm install      # la première fois seulement
npm run dev
```
