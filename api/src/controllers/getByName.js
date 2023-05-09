const axios = require("axios");
const pokemonCleaner = require("../utils/pokemonCleaner");
require("dotenv").config();
const { API_URL } = process.env;
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const getByName = async (name) => {
  const dbPokemon = await Pokemon.findAll({
    where: {
      name: {
        [Op.substring]: `${name.toLowerCase()}`,
      },
    },
    include: {
      model: Type,
      through: {
        attributes: [],
      }
    }
  });

  
  if (dbPokemon.length!==0) {
    // console.log(dbPokemon);
    return dbPokemon;
  } else {
    const apiPokemon = await axios
      .get(`${API_URL}/pokemon/${name.toLowerCase()}`)
      .then((response) => response.data);

    // console.log(pokemon);

    const rawApiPokemon = [];
    rawApiPokemon.push(apiPokemon);

    const cleanApiPokemon = pokemonCleaner(rawApiPokemon);
    // console.log(cleanApiPokemon);
    return cleanApiPokemon;
  }
};

// getByName("eevee");

module.exports = getByName;
