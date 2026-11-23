# TP3 JS — NASA Explorer

**Sprint 1 · Fondamentaux**

Application qui affiche l'image astronomique du jour de la NASA (APOD) et permet d'en rechercher une par date.

## Fonctionnalités

- **Image du jour** : titre, image et description, chargés à l'ouverture de la page.
- **Recherche par date** : un champ date affiche l'image du jour choisi.
- **Gestion des vidéos** : certains jours, l'APOD est une vidéo ; un lien est alors affiché à la place de l'image.
- **Gestion des erreurs** avec un message clair :
  - date manquante ;
  - date sans image (les images existent depuis le 16 juin 1995) ;
  - API en erreur ;
  - connexion impossible.

## Notions travaillées

- Organisation du code en **fonctions** (`showError`, `getImageDay`, `getSearchImage`)
- Gestion des erreurs avec `try` / `catch` et `response.ok`
- Formatage d'une date pour les paramètres de l'API (`slice`, `replaceAll`)

## Note sur l'API

La consigne prévoyait l'API `api.nasa.gov/planetary/apod` avec la clé `DEMO_KEY`. Depuis le transfert des images APOD vers le site NASA Science, cette API renvoie des données erronées (logo NASA et titre générique). Le TP utilise donc l'API **`science.nasa.gov/wp-json/wp/v2/apod-basic`**, qui fonctionne sans clé.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page |
| `style.css` | Mise en forme |
| `script.js` | Appels à l'API, affichage et gestion des erreurs |
| `tp3-api-nasa.html` | Version en un seul fichier (HTML + CSS + JS) pour Jupyter |
| `consigne.tkt` | Énoncé du TP |

## Lancer le TP

Ouvrir `index.html` avec l'extension **Live Server** de VS Code.
