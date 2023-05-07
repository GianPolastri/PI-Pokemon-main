const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;
const pokemonCleaner = require("../utils/pokemonCleaner");
const {Pokemon} = require('../db');

const getByID = async (id, source) => {
  const rawPokemon = [];
  const pokemon =
    source === "db"
      ? await Pokemon.findbyPk(id)
      : await axios
          .get(`${API_URL}/pokemon/${id}`)
          .then((response) => response.data);

  rawPokemon.push(pokemon);

  if (source === "db") {
    return rawPokemon[0];
  } else {
    const cleanPokemon = pokemonCleaner(rawPokemon);
    return cleanPokemon[0];
  }
};

module.exports = getByID;