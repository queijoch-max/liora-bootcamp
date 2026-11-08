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

### Sprint 1 — JavaScript

| TP | Description | Technologies |
|---|---|---|
| [TP1 — Random User](TP-Javascript/TP1) | Intégration d'une maquette Figma (menu, section d'accueil, galerie, contact, footer). Au clic sur un bouton, 6 fiches utilisateur sont générées grâce à l'API [Random User](https://randomuser.me). | HTML, CSS (flexbox), JavaScript (DOM, `fetch`, `async`/`await`) |

Le fichier `tp1-random-user.html` regroupe le HTML, le CSS et le JavaScript du TP1 en un seul fichier, pour l'intégrer dans un notebook Jupyter.

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
