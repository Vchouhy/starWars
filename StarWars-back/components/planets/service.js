const createError = require('http-errors');
const controller = require('./controller');


const getAllPlanetsFromDB = async (req, res, next) => {
  try {
      res.send(await controller.getAllPlanetsFromDB());
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
    getAllPlanetsFromDB, search
};