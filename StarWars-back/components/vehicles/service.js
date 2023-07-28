const createError = require('http-errors');
const controller = require('./controller');


const getVehiclesFromDB = async (req, res, next) => {
  try {
      res.send(await controller.getAllVehicles());
  } catch (e) {
      next(createError(500, e));
  }
};



module.exports = {
    getVehiclesFromDB
};