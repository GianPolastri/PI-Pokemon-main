const { Pokemon } = require('../db');

const createPokemon = async (name, img, hp, atk, def, speed, height, weight, types) => {
    //tengo que agregar la validación de que haya imagen
    if(!name || !img || !hp || !atk || !def) throw new Error('Faltan datos obligatorios');

    const newPokemon = await Pokemon.create({name, img, hp, atk, def, speed, height, weight});
    await newPokemon.addTypes(types); 
    return newPokemon;
}


module.exports = createPokemon;