const { Router } = require('express');

const pokemonRouter = Router();

pokemonRouter.get('/', (req, res) => {
    res.send('NIY: Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información. || Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.')
});

pokemonRouter.get('/:idPokemon', (req, res) => {
    const {idPokemon} = req.params;
    res.send(`NIY: Esta ruta trae al pokemon de id ${idPokemon}`);
});

pokemonRouter.post('/', (req, res) => {
    res.send('NIY: El pokemon fue creado')
});

module.exports = pokemonRouter;