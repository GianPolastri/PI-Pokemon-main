const createPokemon = require('../controllers/createPokemon');

module.exports = async (req, res) => {
    const {name, img, hp, atk, def, speed, height, weight} = req.body;
    
    try {
        const newPokemon = await createPokemon(name, img, hp, atk, def, speed, height, weight);
        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}