const buttonCharge = document.getElementById("btn-charge");
const buttonSearch = document.getElementById("btn-search");
const pokemonGallery = document.getElementById("pokemon-gallery");
const inputSearch = document.getElementById("input-search");
const cardPokemon = document.getElementById("card-pokemon");

async function getPokemons() {
    const ids = [];
    for (let i = 0; i < 6; i++) {
        ids.push(Math.floor(Math.random() * 1025) + 1);
    }

    const pokemons = await Promise.all(
        ids.map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return response.json();
        })
    );

    pokemons.sort((a, b) => a.weight - b.weight);

    pokemonGallery.innerHTML = "";

    pokemons.forEach((pokemon) => {
        pokemonGallery.innerHTML += `
            <div class="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p class="pokemon-name">${pokemon.name}</p>
                <p>Type: ${pokemon.types.map((t) => t.type.name).join(", ")}</p>
                <p>Poids: ${pokemon.weight / 10} kg</p>
            </div>
        `;
    });
}

buttonCharge.addEventListener("click", () => {
    getPokemons();
});


async function searchPokemon() {
    const name = inputSearch.value.trim().toLowerCase();

    if (name === "") {
        return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
        cardPokemon.innerHTML = `<p>Pokémon introuvable 😢</p>`;
        return;
    }

    const pokemon = await response.json();

    cardPokemon.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p class="pokemon-name">${pokemon.name}</p>
        <p>Type: ${pokemon.types.map((t) => t.type.name).join(", ")}</p>
        <p>Poids: ${pokemon.weight / 10} kg</p>
    `;
}

buttonSearch.addEventListener("click", () => {
    searchPokemon();
});