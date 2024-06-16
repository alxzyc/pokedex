document.addEventListener('DOMContentLoaded', () => {
    const pokemonData = [
        {
            name: "Bulbasaur",
            image: "images/bulbasaur.png",
            description: "Bulbasaur é um Pokémon do tipo Planta/Veneno. Ele tem uma semente de planta nas costas que cresce lentamente conforme ele absorve nutrientes. À medida que ele envelhece, a semente floresce em uma grande planta.",
            types: ["Grama", "Veneno"]
        },
        {
            name: "Ivysaur",
            image: "images/ivysaur.png",
            description: "Ivysaur é a forma evoluída do Bulbasaur. Quando a planta nas costas do Ivysaur começa a florescer, isso significa que ele está próximo de evoluir para Venusaur. Durante este período, ele fica mais forte e suas pernas se tornam mais robustas para suportar o peso da planta.",
            types: ["Grama", "Veneno"]
        },
        {
            name: "Venusaur",
            image: "images/venusaur.png",
            description: "Venusaur é a forma final da linha evolutiva do Bulbasaur. A planta nas suas costas floresceu completamente, tornando-se uma grande flor. Esta flor pode absorver energia solar, que é utilizada para alimentar os movimentos do Venusaur. Ele é um Pokémon poderoso e majestoso.",
            types: ["Grama", "Veneno"]
        }
    ];

    let currentIndex = 0;

    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonDesc = document.getElementById('pokemon-desc');

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    function updatePokemonDisplay() {
        const pokemon = pokemonData[currentIndex];
        pokemonImage.src = pokemon.image;
        pokemonName.textContent = pokemon.name;
        pokemonDesc.textContent = pokemon.description;

        // Atualizar os tipos
        const typeContainer = pokemonDesc.nextElementSibling;
        typeContainer.innerHTML = '';
        pokemon.types.forEach(type => {
            const typeSpan = document.createElement('span');
            typeSpan.classList.add('type');
            typeSpan.classList.add(type.toLowerCase());
            typeSpan.textContent = type;
            typeContainer.appendChild(typeSpan);
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePokemonDisplay();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < pokemonData.length - 1) {
            currentIndex++;
            updatePokemonDisplay();
        }
    });

    // Inicializar a exibição
    updatePokemonDisplay();
});
