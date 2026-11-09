// ===== 1. LES ÉLÉMENTS DU HTML =====

const titleImageDay = document.getElementById("day-title");
const imageDay = document.getElementById("day-image");
const descriptionImageDay = document.getElementById("day-description");
const searchInput = document.getElementById("search-input");
const buttonSearch = document.getElementById("btn-search");
const searchTitle = document.getElementById("search-title");
const searchImage = document.getElementById("search-image");
const searchDescription = document.getElementById("search-description");

const API_URL = "https://science.nasa.gov/wp-json/wp/v2/apod-basic";


// ===== 2. AFFICHER UN MESSAGE D'ERREUR =====

function showError(titleElement, imageElement, descriptionElement, message) {
    titleElement.textContent = "";
    imageElement.style.display = "none";
    descriptionElement.textContent = message;
}


// ===== 3. IMAGE DU JOUR =====

async function getImageDay() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            showError(titleImageDay, imageDay, descriptionImageDay,
                `La NASA ne répond pas correctement (erreur ${response.status}). Réessayez plus tard.`);
            return;
        }

        const list = await response.json();

        if (list.length === 0) {
            showError(titleImageDay, imageDay, descriptionImageDay,
                "Aucune image du jour disponible pour le moment.");
            return;
        }

        const data = list[0];

        titleImageDay.textContent = data.title;
        descriptionImageDay.innerHTML = data.explanation.replace("<strong>Explanation:</strong>", "");

        if (data.media_type === "image") {
            imageDay.src = data.hdurl;
            imageDay.style.display = "block";
        } else {
            imageDay.style.display = "none";
            descriptionImageDay.textContent = `Aujourd'hui, c'est une vidéo : ${data.url}`;
        }
    } catch (error) {
        showError(titleImageDay, imageDay, descriptionImageDay,
            "Impossible de contacter la NASA. Vérifiez votre connexion Internet.");
    }
}


// ===== 4. RECHERCHE PAR DATE =====

async function getSearchImage() {
    const date = searchInput.value;

    if (date === "") {
        showError(searchTitle, searchImage, searchDescription,
            "Veuillez choisir une date.");
        return;
    }

    try {
        const apiDate = date.slice(2).replaceAll("-", "");

        const response = await fetch(`${API_URL}?date_from=${apiDate}&date_to=${apiDate}`);

        if (!response.ok) {
            showError(searchTitle, searchImage, searchDescription,
                `La NASA ne répond pas correctement (erreur ${response.status}). Réessayez plus tard.`);
            return;
        }

        const list = await response.json();

        if (list.length === 0) {
            showError(searchTitle, searchImage, searchDescription,
                "Aucune image pour cette date. Les images existent du 16 juin 1995 à aujourd'hui.");
            return;
        }

        const data = list[0];

        searchTitle.textContent = data.title;
        searchDescription.innerHTML = data.explanation.replace("<strong>Explanation:</strong>", "");

        if (data.media_type === "image") {
            searchImage.src = data.hdurl;
            searchImage.style.display = "block";
        } else {
            searchImage.style.display = "none";
            searchDescription.textContent = `Ce jour-là, c'est une vidéo : ${data.url}`;
        }
    } catch (error) {
        showError(searchTitle, searchImage, searchDescription,
            "Impossible de contacter la NASA. Vérifiez votre connexion Internet.");
    }
}


// ===== 5. LANCEMENT =====

getImageDay();

buttonSearch.addEventListener("click", () => {
    getSearchImage();
});
