const { Router } = require('express');

const typeRouter = Router();

typeRouter.get('/', (req, res) => {
    res.send('NIY: Esta routa trae todas los tipos.')
});

module.exports = typeRouter;