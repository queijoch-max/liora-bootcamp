# Exercice React — Hooks, app 2 : suivre la souris

**Sprint 2 · Frontend**

Composant `MouseTracker` qui affiche **en direct** les coordonnées X et Y de la souris.

## Fonctionnement

1. Au montage, un écouteur `mousemove` est ajouté sur `window`, et la console affiche « Suivi de la souris activé ! ».
2. À chaque mouvement de la souris, les coordonnées sont mises à jour à l'écran.
3. Au démontage, l'écouteur est **supprimé**, et la console affiche « Suivi de la souris désactivé. ».

## Notions travaillées

- **`useState`** avec un **objet** (`{ x, y }`)
- **`useEffect`** avec `[]` pour n'ajouter l'écouteur qu'une seule fois
- Écouteur d'événement sur `window` (`addEventListener`) et coordonnées `clientX` / `clientY`
- **Fonction de nettoyage** avec `removeEventListener`, pour éviter qu'un écouteur continue de tourner après le démontage (fuite de mémoire)

> En développement, les messages de la console apparaissent en double. C'est normal : `<StrictMode>` monte, démonte puis remonte le composant pour vérifier que le nettoyage fonctionne.

## Structure

```
src/
├── App.jsx            # affiche MouseTracker
├── MouseTracker.jsx   # le composant de l'exercice
├── index.css
└── main.jsx
```

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```

Ouvrir la console du navigateur (**F12**) pour voir les messages.
