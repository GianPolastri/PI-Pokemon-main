const {Type} = require('../db');


const getTypesFromDB = async ()=>{
    const allTypes = await Type.findAll();
    return allTypes;
}

module.exports = getTypesFromDB;