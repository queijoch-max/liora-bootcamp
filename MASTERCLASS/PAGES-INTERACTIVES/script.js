const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const companyDetails = document.getElementById("company-details");

const API_URL = "https://suggestions.pappers.fr/v2";

let companies = [];
let timer;  


async function searchCompanies(text) {
    const response = await fetch(`${API_URL}?q=${encodeURIComponent(text)}&cibles=siren,nom_entreprise`);

    if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
    }

    const data = await response.json();

    return [...data.resultats_siren, ...data.resultats_nom_entreprise];
}

function showSuggestions() {
    searchResults.innerHTML = "";

    if (companies.length === 0) {
        searchResults.innerHTML = `<li class="result-info">Aucune entreprise trouvée.</li>`;
        return;
    }

    companies.forEach((company, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p class="result-name"></p>
            <p class="result-info"></p>
        `;
        li.querySelector(".result-name").textContent = company.nom_entreprise;
        li.querySelector(".result-info").textContent =
            `SIREN ${company.siren_formate} — ${company.siege?.ville ?? ""}`;

        li.addEventListener("click", () => {
            showDetails(companies[index]);
        });

        searchResults.appendChild(li);
    });
}


function showDetails(company) {
    searchResults.innerHTML = "";
    searchInput.value = company.nom_entreprise;

    const siege = company.siege ?? {};

    companyDetails.innerHTML = `
        <h3></h3>
        <p><strong>SIREN :</strong> <span data-field="siren"></span></p>
        <p><strong>Forme juridique :</strong> <span data-field="forme"></span></p>
        <p><strong>Activité :</strong> <span data-field="activite"></span></p>
        <p><strong>Date de création :</strong> <span data-field="creation"></span></p>
        <p><strong>Adresse du siège :</strong> <span data-field="adresse"></span></p>
        <p><strong>Statut :</strong> <span data-field="statut"></span></p>
    `;

    companyDetails.querySelector("h3").textContent = company.nom_entreprise;
    companyDetails.querySelector('[data-field="siren"]').textContent = company.siren_formate;
    companyDetails.querySelector('[data-field="forme"]').textContent = company.forme_juridique ?? "Non renseignée";
    companyDetails.querySelector('[data-field="activite"]').textContent = company.libelle_code_naf ?? "Non renseignée";
    companyDetails.querySelector('[data-field="creation"]').textContent = company.date_creation_formate ?? "Non renseignée";
    companyDetails.querySelector('[data-field="adresse"]').textContent =
        `${siege.adresse_ligne_1 ?? ""} ${siege.code_postal ?? ""} ${siege.ville ?? ""}`;
    companyDetails.querySelector('[data-field="statut"]').textContent =
        company.entreprise_cessee ? "Cessée" : "Active";
}


async function runSearch() {
    const text = searchInput.value.trim();

    if (text.length < 3) {
        searchResults.innerHTML = "";
        return;
    }

    try {
        companies = await searchCompanies(text);
        showSuggestions();
    } catch (error) {
        searchResults.innerHTML = `<li class="result-info">Impossible de contacter l'API. Réessayez plus tard.</li>`;
    }
}


searchInput.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(runSearch, 300);
});

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();   // empêche le formulaire de recharger la page

    await runSearch();
    if (companies.length > 0) {
        showDetails(companies[0]);
    }
});

document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
        searchResults.innerHTML = "";
    }
});
