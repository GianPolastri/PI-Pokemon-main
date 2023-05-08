require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");
const { Type } = require("../db");

const getAllTypesToDB = async () => {
  try {
    const rawData = await axios
      .get(`${API_URL}/type`)
      .then((response) => response.data)
      .then((data) => data.results);

    const cleanURL = rawData.map((obj) => obj.url);

    const rawTypes = [];

    for (let u of cleanURL) {
      let type = await axios.get(u);
      rawTypes.push(type.data);
    }

    const allCleanTypes = rawTypes.map((ty) => {
      const cleanType = {
        id: ty.id,
        name: ty.name,
        name_es: ty.names[5].name,
      };
      return cleanType;
    });
    console.log('Se pegaron los types a la DB');
    Type.bulkCreate(allCleanTypes);
  } catch (error) {
    console.log(error);
  }
};

// getAllTypesToDB();
