const pokemonCleaner = (pokemons) => {
    const cleanPokemons = pokemons.map(pokemon=>{
        const cleanPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.other['official-artwork'].front_default,
            hp: pokemon.stats[0].base_stat,
            atk: pokemon.stats[1].base_stat,
            def: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
        };
        return cleanPokemon;
    })

    return cleanPokemons;
}


module.exports = pokemonCleaner;