# Masterclass — Pages interactives : Entreprises Info

**Sprint 1 · Fondamentaux**

Recherche d'entreprises françaises par **SIREN** ou par **nom**, avec des suggestions pendant la saisie.

## Fonctionnalités

- **Suggestions en direct** : dès 3 caractères, une liste d'entreprises s'affiche sous le champ (nom, SIREN, ville).
- **Fiche entreprise** : un clic sur une suggestion affiche ses informations :
  - SIREN ;
  - forme juridique ;
  - activité ;
  - date de création ;
  - adresse du siège ;
  - statut (active ou cessée).
- Le bouton **Rechercher** affiche directement la fiche de la première entreprise trouvée.
- La liste se ferme quand on clique ailleurs sur la page.
- Un message s'affiche si aucune entreprise n'est trouvée ou si l'API ne répond pas.

## Notions travaillées

- Événement `input` et **debounce** (`setTimeout` / `clearTimeout`, 300 ms) pour limiter les appels à l'API
- Paramètres d'URL encodés avec `encodeURIComponent`
- Création d'éléments avec `createElement` et affichage sécurisé avec `textContent`
- Opérateurs `?.` et `??` pour les données manquantes
- `preventDefault` sur l'envoi du formulaire

## API utilisée

API de suggestions [Pappers](https://www.pappers.fr) : `https://suggestions.pappers.fr/v2`, gratuite et sans clé.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page |
| `style.css` | Mise en forme |
| `script.js` | Recherche, suggestions et affichage de la fiche |

## Lancer le projet

Ouvrir `index.html` avec l'extension **Live Server** de VS Code.
