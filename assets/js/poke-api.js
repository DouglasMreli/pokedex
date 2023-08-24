

const pokeApi = {}


function convertPokeapiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.order;
    
    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.image = pokeDetail.sprites.front_default;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon)=>{
    return fetch(pokemon.url)
            .then((response)=> response.json())
            .then(convertPokeapiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; 
    return fetch(url)
            .then((response)=> response.json()) // recebendo a lista de pokemons
            .then((jsonBody)=>jsonBody.results)
            .then((pokemons)=>pokemons.map(pokeApi.getPokemonDetail)) // recebendo a lista dos detalhes de cada pokemon
            .then((detailRequest)=> Promise.all(detailRequest)) //esperando que todas as requisições terminem
            .then((pokemonsDetails)=>pokemonsDetails)
            
}