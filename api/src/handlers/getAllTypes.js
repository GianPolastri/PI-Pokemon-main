const getTypesFromAPI = require('../controllers/getTypesFromAPI');
const getTypesFromDB = require('../controllers/getTypesFromDB')



module.exports = async (req, res) => {
    try {
        const response = await getTypesFromDB();
        if(response.length){
          res.status(200).json(response);
        }else{
          const typesFormAPI = getTypesFromAPI();
          res.status(200).json(typesFormAPI);
        }
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };