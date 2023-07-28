const router = require('express').Router();
const service = require('./service');

router.get('/', service.getAllPlanetsFromDB);
// router.get('/:id', service.getById);


module.exports = router;