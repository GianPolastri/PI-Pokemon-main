const getTypesFromAPI = require('../controllers/getTypesFromAPI');
const getTypesFromDB = require('../controllers/getTypesFromDB')



module.exports = async (req, res) => {
    try {
        const response = await getTypesFromDB();
        res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };