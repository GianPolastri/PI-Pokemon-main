const { Router } = require('express');
const getAllTypes = require('../handlers/getAllTypes');

const typeRouter = Router();

typeRouter.get('/', getAllTypes);



module.exports = typeRouter;