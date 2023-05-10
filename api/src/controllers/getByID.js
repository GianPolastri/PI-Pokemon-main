const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;
const pokemonCleaner = require("../utils/pokemonCleaner");
const { Pokemon, Type } = require("../db");

const getByID = async (id, source) => {
  const rawPokemon = [];
  console.log(source);
  const pokemon =
    source === "db"
      ? await Pokemon.findByPk(id, {
          include: {
            model: Type,
            through: {
              attributes: [],
            },
          },
        }).then((res) => res.dataValues)
      : await axios
          .get(`${API_URL}/pokemon/${id}`)
          .then((response) => response.data);

  // let pokemon;
  // if (source === "db") {
  //   pokemon = await Pokemon.findByPk(id, {
  //     include: {
  //       model: Type,
  //       through: {
  //         attributes: [],
  //       },
  //     },
  //   }).then((res) => res.dataValues);
  // }else if(source === 'api'){
  //   pokemon = await axios
  //     .get(`${API_URL}/pokemon/${id}`)
  //     .then((response) => response.data);
  // }

  if (!pokemon) throw new Error("No existe el Pokémon");

  rawPokemon.push(pokemon);
  console.log(rawPokemon);

  if (source === "db") {
    return rawPokemon;
  } else {
    const cleanPokemon = pokemonCleaner(rawPokemon);
    return cleanPokemon[0];
  }
};

// getByID("8f0430c6-5aec-4421-851e-63e59458ac77", "db");
// getByID('3', 'api');

module.exports = getByID;
