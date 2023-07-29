const createError = require('http-errors');
const controller = require('./controller');


const getVehiclesFromDB = async (req, res, next) => {
  try {
      res.send(await controller.getAllVehicles());
  } catch (e) {
      next(createError(500, e));
  }
};

const search = async (req, res, next) =>{
    try{
      res.send(await controller.search({
        search: req.query.search
      }))
   
    }catch(e){
  
    }
  }

module.exports = {
    getVehiclesFromDB, search
};