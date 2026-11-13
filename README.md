# Liora Bootcamp — Développeuse Full Stack

Ce dépôt regroupe mes TP et exercices réalisés pendant le bootcamp **Développeur Full Stack de Liora** (ex-DataScientest), que je suis en parallèle de la préparation du titre **RNCP niveau 6 Concepteur Développeur d'Applications (CDA)**.

Chaque TP est rangé dans son propre dossier et fonctionne de manière indépendante.

## Programme du bootcamp

| Sprint | Thème | Contenu |
|:---:|---|---|
| 1 | Fondamentaux | HTML, CSS, JavaScript, Figma, GitHub |
| 2 | Frontend | React, Tailwind CSS |
| 3 | Bases de données | SQL (SQLite), NoSQL (MongoDB, Neo4j, HBase, Couchbase, Redis, Cassandra) |
| 4 | Backend | Node.js, Express.js |
| 5 | Interaction | React / Node.js, Node.js / MongoDB / PostgreSQL |
| 6 | Sécurité | Tokens (jsonwebtoken), validation et données sensibles (Zod, Argon2) |
| 7 | DevOps | Déploiement front et back, tests avec Jest, CI/CD avec GitHub |
| 8 | Gestion de projet | Méthode Agile, product management, coûts d'un projet data |

## TP réalisés

### Sprint 1 — CSS

| TP | Description | Technologies |
|---|---|---|
| [TP1 — À propos de nous](TP-CSS) | Page « À propos de nous » : en-tête, présentation de l'équipe, galerie de 8 images en grille et footer placé en bas de l'écran. | HTML, CSS (flexbox, grid) |

Le fichier `tp1-css.html` est prévu pour un notebook Jupyter : il commence par `%%html` et se colle dans une cellule de code.

### Sprint 1 — JavaScript

| TP | Description | Technologies |
|---|---|---|
| [TP1 — Random User](TP-Javascript/TP1) | Intégration d'une maquette Figma (menu, section d'accueil, galerie, contact, footer). Au clic sur un bouton, 6 fiches utilisateur sont générées grâce à l'API [Random User](https://randomuser.me). | HTML, CSS (flexbox), JavaScript (DOM, `fetch`, `async`/`await`) |
| [TP2 — Pokémon Explorer](TP-Javascript/TP2) | Au clic sur un bouton, 6 Pokémon tirés au hasard sont affichés, triés du plus léger au plus lourd. Une seconde section permet de rechercher un Pokémon par son nom anglais ou son numéro, avec un message si le Pokémon est introuvable. Données issues de l'API [PokeAPI](https://pokeapi.co). | HTML, CSS (flexbox, `flex-wrap`), JavaScript (`fetch`, `Promise.all`, `Math.random`, `sort`, gestion d'erreur) |
| [TP3 — NASA Explorer](TP-Javascript/TP3) | Affichage de l'image astronomique du jour de la NASA (titre, image, description) et recherche d'une image par date, avec gestion des vidéos et des erreurs (date manquante, date sans image, API en erreur, connexion impossible). Données issues de l'API APOD de [NASA Science](https://science.nasa.gov). | HTML, CSS (flexbox), JavaScript (`fetch`, `try`/`catch`, `response.ok`, manipulation de dates) |

> **Note sur le TP3 :** la consigne prévoyait l'API `api.nasa.gov/planetary/apod` avec la clé `DEMO_KEY`. Depuis le transfert des images APOD vers le site NASA Science, cette API renvoie des données erronées (logo NASA et titre générique à la place de l'image). Le TP utilise donc l'API `science.nasa.gov/wp-json/wp/v2/apod-basic`, qui fonctionne sans clé.

Pour chaque TP JavaScript, un fichier unique (`tp1-random-user.html`, `tp2-api-pokemon.html`, `tp3-api-nasa.html`) regroupe le HTML, le CSS et le JavaScript, pour l'intégrer dans un notebook Jupyter.

### Masterclass

| Projet | Description | Technologies |
|---|---|---|
| [Pages interactives — Entreprises Info](MASTERCLASS/PAGES-INTERACTIVES) | Recherche d'entreprises françaises par SIREN ou par nom. Les suggestions s'affichent dans une liste pendant la saisie, et un clic sur une entreprise affiche sa fiche (SIREN, forme juridique, activité, date de création, adresse du siège, statut). Données issues de l'API de suggestions [Pappers](https://www.pappers.fr), gratuite et sans clé. | HTML, CSS (flexbox, `position: absolute`, `:empty`), JavaScript (`fetch`, événement `input`, `setTimeout`, `createElement`, `textContent`) |

Les dossiers des prochains TP seront ajoutés au fil du bootcamp.

## Lancer un TP

Chaque TP se lance depuis son propre dossier.

**TP en HTML / CSS / JavaScript** : ouvrir le fichier `index.html` du TP avec l'extension **Live Server** de VS Code (clic droit, puis « Open with Live Server »).

**TP avec Node.js ou React** (à partir du sprint 2) :

```bash
cd nom-du-tp
npm install      # la première fois seulement
npm run dev
```

## Autrice

Charlotte Queijo
