# Exercice — Découverte de Tailwind CSS

**Sprint 2 · Frontend**

Première application React stylée avec **Tailwind CSS**, sans écrire de CSS : un en-tête bleu avec un titre, un texte et un bouton.

## Installation de Tailwind CSS (v4) dans un projet Vite

1. Installer les paquets :
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
2. Ajouter le plugin dans `vite.config.js` :
   ```js
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [tailwindcss(), react()],
   });
   ```
3. Importer Tailwind dans `src/index.css` :
   ```css
   @import "tailwindcss";
   ```

## Notions travaillées

- Les classes utilitaires dans `className`, séparées par des espaces
- Les couleurs (`bg-blue-500`, `text-white`), les espacements (`p-6`, `mt-4`, `py-2 px-4`) et la typographie (`text-4xl`, `font-bold`)
- Les états avec un préfixe : `hover:bg-green-700`

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```
