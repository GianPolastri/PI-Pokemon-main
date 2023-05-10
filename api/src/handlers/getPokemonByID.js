const getByID = require('../controllers/getByID');

module.exports = async (req, res) => {
  const { idPokemon } = req.params;
  // console.log(idPokemon);
  const source = isNaN(idPokemon) ? "db" : "api";
  // console.log(source);
  try {
    const pokemon = await getByID(idPokemon, source);
    console.log(pokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

