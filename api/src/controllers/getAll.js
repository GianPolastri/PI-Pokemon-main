require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const pokemonCleaner = require("../utils/pokemonCleaner");

const getAll = async () => {
  const rawData = await axios
    .get(`${API_URL}/pokemon`)
    .then((response) => response.data)
    .then((data) => data.results);

  const cleanURL = rawData.map((obj) => obj.url);

  const rawPokemons = [];
  try {
    for (let u of cleanURL) {
      let pokemon = await axios.get(u);
      rawPokemons.push(pokemon.data);
    }
  } catch (error) {
    console.log(error.message);
  }

  const allCleanPokemons = pokemonCleaner(rawPokemons);
  // console.log(allCleanPokemons);
  return allCleanPokemons;
};

// getAll();
module.exports = getAll;
