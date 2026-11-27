# TP2 React — Annuaire Random User

**Sprint 2 · Frontend**

Interface de recherche d'utilisateurs : quand on clique dans la barre de recherche, une **liste déroulante** affiche 5 personnes (photo, prénom, nom et email), et elle se filtre pendant la saisie. Les données viennent de l'API [Random User](https://randomuser.me).

## Fonctionnalités

- **Chargement de 5 utilisateurs** au démarrage, avec un message pendant le chargement et en cas d'erreur.
- **Liste déroulante** : elle s'ouvre au clic dans la barre (`onFocus`) et se ferme quand on clique ailleurs (`onBlur`).
- **Recherche en direct** par prénom, nom ou email, sans tenir compte des majuscules.
- Un message « Aucun utilisateur trouvé » quand rien ne correspond.

## L'API

```
https://randomuser.me/api/?results=5&nat=fr,gb,us
```

| Paramètre | Rôle |
|---|---|
| `results=5` | Nombre de personnes renvoyées |
| `nat=fr,gb,us` | Nationalités française, britannique et américaine, pour avoir des noms en alphabet latin (sinon, des noms en persan ou en cyrillique ne pouvaient pas être trouvés avec la recherche) |

Champs utilisés : `picture.medium`, `name.first`, `name.last`, `email` et `login.uuid` (la `key` unique de chaque élément de la liste).

## Composants et hook

| Fichier | Rôle |
|---|---|
| `hooks/useFetch.js` | Hook personnalisé réutilisé depuis l'exercice sur les hooks : récupère les données et gère `loading` et `error`, avec annulation de la requête au démontage (`AbortController`) |
| `components/SearchBar.jsx` | Barre de recherche : **input contrôlé** (`value` + `onChange`), qui ouvre et ferme la liste |
| `components/UserCard.jsx` | Une ligne de la liste : photo, prénom et nom, email |
| `App.jsx` | Contient les états `search` et `isOpen`, filtre les utilisateurs et affiche la liste |

## Notions travaillées

- Réutilisation d'un **hook personnalisé** (`useFetch`)
- **Input contrôlé** avec `value` et `onChange`
- Événements `onFocus` et `onBlur`
- **Valeur dérivée** : la liste filtrée est calculée à chaque affichage avec `filter`, `includes` et `toLowerCase`, sans état supplémentaire
- Affichage conditionnel avec `&&` et le ternaire `? :`
- Passage d'un **setter en props** (`setSearch`, `setIsOpen`) d'`App` vers `SearchBar`
- Liste déroulante en CSS : `position: relative` sur le conteneur, `position: absolute` sur la liste

## Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   └── UserCard.jsx
├── hooks/
│   └── useFetch.js
├── App.jsx
├── index.css
└── main.jsx
```

## Lancer le TP

```bash
npm install      # la première fois seulement
npm run dev
```
