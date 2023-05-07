const getByID = require('../controllers/getByID');

module.exports = async (req, res) => {
  const { idPokemon } = req.params;

  const source = isNaN(idPokemon) ? "db" : "api";
  try {
    const pokemon = await getByID(idPokemon, source);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

