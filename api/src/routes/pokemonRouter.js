const { Router } = require("express");
const getPokemonByID = require("../handlers/getPokemonByID");
const getPokemonByName = require('../handlers/getPokemonByName');
const getAllPokemons = require('../handlers/getAllPokemons');
const createNewPokemon = require('../handlers/createNewPokemon');

const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemons);

pokemonRouter.get('/name', getPokemonByName);

pokemonRouter.get("/:idPokemon", getPokemonByID);

pokemonRouter.post("/", createNewPokemon);

module.exports = pokemonRouter;
