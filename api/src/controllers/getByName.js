const axios = require("axios");
const pokemonCleaner = require("../utils/pokemonCleaner");
require("dotenv").config();
const { API_URL } = process.env;

const getByName = async (name) => {
  const pokemon = await axios
    .get(`${API_URL}/pokemon/${name.toLowerCase()}`)
    .then((response) => response.data)

  // console.log(pokemon);
  
  const rawPokemon = [];
  rawPokemon.push(pokemon);

  const cleanPokemon = pokemonCleaner(rawPokemon);

  return cleanPokemon;
};

module.exports = getByName;
