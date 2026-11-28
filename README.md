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

## TP et exercices réalisés

### TP

| Sprint | TP | Description | Technologies |
|:---:|---|---|---|
| 1 | [TP CSS — À propos de nous](TP-CSS) | Page « À propos de nous » : en-tête, présentation de l'équipe, galerie de 8 images en grille et footer placé en bas de l'écran. | HTML, CSS |
| 1 | [TP1 JS — Random User](TP-Javascript/TP1) | Intégration d'une maquette Figma (menu, section d'accueil, galerie, contact, footer). Au clic sur un bouton, 6 fiches utilisateur sont générées grâce à l'API [Random User](https://randomuser.me). | HTML, CSS, JavaScript |
| 1 | [TP2 JS — Pokémon Explorer](TP-Javascript/TP2) | Au clic sur un bouton, 6 Pokémon tirés au hasard sont affichés, triés du plus léger au plus lourd. Une seconde section permet de rechercher un Pokémon par son nom anglais ou son numéro, avec un message si le Pokémon est introuvable. Données issues de l'API [PokeAPI](https://pokeapi.co). | HTML, CSS, JavaScript |
| 1 | [TP3 JS — NASA Explorer](TP-Javascript/TP3) | Affichage de l'image astronomique du jour de la NASA (titre, image, description) et recherche d'une image par date, avec gestion des vidéos et des erreurs (date manquante, date sans image, API en erreur, connexion impossible). Données issues de l'API APOD de [NASA Science](https://science.nasa.gov). | HTML, CSS, JavaScript |
| 2 | [TP1 React — Landing page en composants](TP-REACT/TP1) | Intégration d'une page d'accueil découpée en **composants** React : barre de navigation avec logo et liens d'ancre (`NavBar`), section d'accueil avec un bouton d'inscription (`Accueil`), formulaire de contact (`Contact`) et pied de page (`Footer`), assemblés dans `App`. | React, Vite, JSX, CSS |
| 2 | [TP2 React — Annuaire Random User](TP-REACT/TP2) | Barre de recherche avec une **liste déroulante** de 5 utilisateurs (photo, prénom, nom, email) issus de l'API [Random User](https://randomuser.me), filtrée en direct par nom ou email. Réutilise le hook personnalisé `useFetch`. | React, Vite, CSS |

Les TP du sprint 1 ont chacun un fichier unique (`tp1-css.html`, `tp1-random-user.html`, `tp2-api-pokemon.html`, `tp3-api-nasa.html`) qui regroupe le HTML, le CSS et le JavaScript, pour l'intégrer dans un notebook Jupyter.

> **Note sur le TP3 JS :** la consigne prévoyait l'API `api.nasa.gov/planetary/apod` avec la clé `DEMO_KEY`. Depuis le transfert des images APOD vers le site NASA Science, cette API renvoie des données erronées (logo NASA et titre générique à la place de l'image). Le TP utilise donc l'API `science.nasa.gov/wp-json/wp/v2/apod-basic`, qui fonctionne sans clé.

### Masterclass

| Sprint | Projet | Description | Technologies |
|:---:|---|---|---|
| 1 | [Pages interactives — Entreprises Info](MASTERCLASS/PAGES-INTERACTIVES) | Recherche d'entreprises françaises par SIREN ou par nom. Les suggestions s'affichent dans une liste pendant la saisie, et un clic sur une entreprise affiche sa fiche (SIREN, forme juridique, activité, date de création, adresse du siège, statut). Données issues de l'API de suggestions [Pappers](https://www.pappers.fr), gratuite et sans clé. | HTML, CSS, JavaScript |
| 2 | [Démo React](MASTERCLASS/DEMOS/react-app) | Premier projet React créé avec Vite : une page découpée en **composants** réutilisables (`Navbar`, `Hello`, `Footer`). Le composant `Hello` reçoit un prénom et un âge en **props** et s'affiche plusieurs fois avec des valeurs différentes. | React, Vite, JSX |

### Exercices

Les exercices sont rangés dans le dossier [EXERCICES](EXERCICES). Ce sont des mises en pratique du cours.

| Sprint | Exercice | Description | Technologies |
|:---:|---|---|---|
| 2 | [Refuge des Patounes](EXERCICES/Ex-Sprint2/my-app) | Page d'un refuge pour chats : barre de navigation, section de présentation et section « La Star du Jour » avec la photo et la description d'un chat à adopter. | React, Vite, JavaScript, CSS |
| 2 | [Premiers modules Node.js](EXERCICES/Ex-Sprint2/My-Project/Exercice1) | Premier projet Node.js : un module maison (`require` / `module.exports`) et l'utilisation du paquet npm **mathjs** pour faire des calculs dans le terminal. | Node.js, npm |
| 2 | [React Router](EXERCICES/Ex-Sprint2/react-router-dom) | Navigation entre plusieurs pages (Accueil, À propos, Contact) avec une barre de navigation commune, une page 404, une redirection et une **route protégée** qui renvoie vers l'accueil si l'utilisateur n'est pas administrateur. | React, Vite, React Router |
| 2 | [URLs dynamiques](EXERCICES/Ex-Sprint2/urls-dynamiques) | Mini-blog avec une **route dynamique** `/articles/:id` : l'identifiant est lu dans l'URL avec `useParams` pour afficher le bon article, avec un message si l'article n'existe pas. | React, Vite, React Router |
| 2 | [Hooks — Titre de bienvenue](EXERCICES/Ex-Sprint2/hook/app1) | Composant `DynamicWelcome` dont le titre change 3 secondes après le montage, grâce à `useState`, `useEffect` et `setTimeout`, avec nettoyage du timer. | React, Vite |
| 2 | [Hooks — Suivi de la souris](EXERCICES/Ex-Sprint2/hook/app2) | Composant `MouseTracker` qui affiche en direct les coordonnées de la souris, avec un écouteur `mousemove` ajouté dans `useEffect` et supprimé au démontage. | React, Vite |
| 2 | [Découverte de Tailwind CSS](EXERCICES/Ex-Sprint2/my-tailwind-app) | Installation de Tailwind CSS v4 dans un projet Vite et premier en-tête stylé uniquement avec des classes utilitaires. | React, Vite, Tailwind CSS |
| 2 | [Formulaire de contact Tailwind](EXERCICES/Ex-Sprint2/formulaire-tailwind-css) | Formulaire de contact (nom, email, message) centré et stylé avec Tailwind : champs avec bordure et coins arrondis, bouton avec effet au survol. | React, Vite, Tailwind CSS |
| 2 | [Hooks personnalisés](EXERCICES/Ex-Sprint2/creation-hook) | Création des hooks `useFetch`, `useProductDetail` (un produit de Fake Store API) et `useWindowSize` (taille de la fenêtre, message différent sous 768 px). | React, Vite |
| 2 | [Optimiser ses hooks](EXERCICES/Ex-Sprint2/optimiser-hooks) | Six exercices pour éviter les re-renders inutiles : fonction stable avec `useCallback`, calcul et objet mémorisés avec `useMemo`, focus automatique et compteur de rendus avec `useRef`, et un hook `useStopwatch` (chronomètre). | React, Vite |

Les prochains TP, masterclass et exercices seront ajoutés au fil du bootcamp.

## Lancer un TP

Chaque TP ou exercice se lance depuis son propre dossier.

**TP en HTML / CSS / JavaScript** : ouvrir le fichier `index.html` du TP avec l'extension **Live Server** de VS Code (clic droit, puis « Open with Live Server »).

**TP avec Node.js ou React** (à partir du sprint 2) :

```bash
cd nom-du-tp
npm install      # la première fois seulement
npm run dev
```

Charlotte Queijo
