const getAll = require("../controllers/getAll");

module.exports = async (req, res) => {
  try {
    const pokemons = await getAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
