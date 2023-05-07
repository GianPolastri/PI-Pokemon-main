const { Router } = require("express");
const getPokemonByID = require("../handlers/getPokemonByID");
const getPokemonByName = require('../handlers/getPokemonByName');
const getAllPokemons = require('../handlers/getAllPokemons');

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemons);

pokemonRouter.get('/:name', getPokemonByName)

pokemonRouter.get("/:idPokemon", getPokemonByID);

pokemonRouter.post("/", (req, res) => {
  res.send("NIY: El pokemon fue creado");
});

module.exports = pokemonRouter;
