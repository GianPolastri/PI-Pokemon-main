const {Type} = require('../db');


const getTypesFromDB = async ()=>{
    const allTypes = Type.findAll();
    return allTypes;
}

module.exports = getTypesFromDB;