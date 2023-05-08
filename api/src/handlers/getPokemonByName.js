const getByName = require("../controllers/getByName");


module.exports = async (req, res) => {
  const { name } = req.params;

  try {
    const pokemon = await getByName(name);
    res.status(200).json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
