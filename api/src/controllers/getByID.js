const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;

const getByID = async (id, source) => {
  
    const pokemon =
    source === "db"
      ? console.log("NIY")
      : await axios
          .get(`${API_URL}/pokemon/${id}`)
          .then((response) => response.data);

  return pokemon;
};

module.exports = getByID;
