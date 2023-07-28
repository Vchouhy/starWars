const createError = require('http-errors');
const controller = require('./controller');


const getAllPlanetsFromDB = async (req, res, next) => {
  try {
      res.send(await controller.getAllPlanetsFromDB());
  } catch (e) {
      next(createError(500, e));
  }
};



module.exports = {
    getAllPlanetsFromDB
};