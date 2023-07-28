const router = require('express').Router();
const service = require('./service');

  router.get('/', service.getVehiclesFromDB);
  router.get('/search', service.search)

  module.exports = router;