
var offset = 0;
var limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot)=>`<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            
            <img src=${pokemon.sprites.front_default}
            alt="${pokemon.name}">
        </div>
        </li>
    `
}
//src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png"
const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');

})


