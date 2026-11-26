# Exercice Tailwind CSS — Formulaire de contact stylisé

**Sprint 2 · Frontend**

Formulaire de contact (nom, email, message) stylé uniquement avec des classes **Tailwind CSS**.

## Ce qui est mis en place

| Étape | Classes Tailwind | Équivalent en CSS |
|---|---|---|
| Centrer le formulaire | `max-w-md mx-auto mt-10` | `max-width: 28rem; margin: 2.5rem auto 0;` |
| Espacer les champs | `mb-4` sur chaque bloc, `block mb-1` sur les labels | `margin-bottom` et `display: block` |
| Styliser les champs | `border border-gray-300 rounded p-2 w-full` | bordure grise, coins arrondis, padding, largeur 100 % |
| Styliser le bouton | `bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600` | fond bleu, texte blanc, couleur plus foncée au survol |
| Le titre | `text-3xl font-bold` | `font-size` et `font-weight` |

## Notions travaillées

- Traduire des propriétés CSS en classes Tailwind
- `border` (la bordure) et `border-gray-300` (sa couleur) sont deux classes différentes
- Le préfixe `hover:` pour le survol
- HTML accessible : `htmlFor` relie chaque label à son champ, `textarea` pour le message

## Lancer l'exercice

```bash
npm install      # la première fois seulement
npm run dev
```
