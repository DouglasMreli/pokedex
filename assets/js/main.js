
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot)=>`<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            
            <img src=${pokemon.image} alt="${pokemon.name}">
        </div>
        </li>
    `
}
//src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png"
const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons(0,50).then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');

})


