# Exercice Node.js — Premiers modules

**Sprint 2**

Premier projet **Node.js** : exécution d'un script dans le terminal, création d'un module et utilisation d'un paquet npm.

## Contenu

| Fichier | Rôle |
|---|---|
| `exercice.js` | Premier script : affiche « Bonjour, Node.JS » |
| `math.js` | Module maison qui exporte une fonction `substract` avec `module.exports` |
| `app.js` | Importe `substract` avec `require`, puis utilise le paquet **mathjs** (`add`, `sqrt`) |

## Notions travaillées

- Initialisation d'un projet avec `npm init` (`package.json`)
- Modules **CommonJS** : `require` et `module.exports`
- Installation d'une dépendance (`mathjs`) et d'une dépendance de développement (`nodemon`)

## Lancer l'exercice

```bash
npm install      # la première fois seulement
node app.js
```

Pour relancer automatiquement le script à chaque modification :

```bash
npx nodemon app.js
```
