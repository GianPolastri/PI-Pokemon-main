const getTypesFromAPI = require('../controllers/getTypesFromAPI');

module.exports = async (req, res) => {
    try {
        const response = await getTypesFromAPI();
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };