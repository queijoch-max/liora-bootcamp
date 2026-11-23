# Exercice React — Hooks, app 1 : un titre de bienvenue qui change

**Sprint 2 · Frontend**

Composant `DynamicWelcome` dont le titre change tout seul **3 secondes** après l'ouverture de la page.

## Fonctionnement

1. Au montage du composant, la console affiche « Bienvenue sur la page ! ».
2. Le titre affiche d'abord **« Prêt à découvrir React ? »**.
3. Au bout de 3 secondes, il devient **« React, c'est génial ! »**.
4. Si le composant est démonté avant la fin des 3 secondes, le timer est annulé.

## Notions travaillées

- **`useState`** pour stocker le message affiché
- **`useEffect`** avec un tableau de dépendances vide `[]` : l'effet ne s'exécute qu'**une seule fois**, au montage
- **`setTimeout`** pour retarder la mise à jour de l'état
- **Fonction de nettoyage** (`return () => { ... }`) avec `clearTimeout`

> En développement, les messages de la console apparaissent en double. C'est normal : `<StrictMode>` monte, démonte puis remonte le composant pour vérifier que le nettoyage fonctionne.

## Structure

```
src/
├── App.jsx              # affiche DynamicWelcome
├── DynamicWelcome.jsx   # le composant de l'exercice
├── index.css
└── main.jsx
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```

Ouvrir la console du navigateur (**F12**) pour voir les messages.
