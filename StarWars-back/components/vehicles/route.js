const router = require('express').Router();
const service = require('./service');

  router.get('/', service.getVehiclesFromDB);

  module.exports = router;