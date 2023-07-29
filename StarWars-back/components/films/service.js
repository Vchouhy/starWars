const createError = require('http-errors');
const controller = require('./controller');


module.exports.getAllFilms = async (req, res, next) => {
  try {
      res.send(await controller.getAllFilms());
  } catch (e) {
       next(createError(500,'errorservice'));
  }
};

module.exports.search = async (req, res, next) =>{
  try{
    res.send(await controller.search({
      search: req.query.search
    }))
 
  }catch(e){
    next(createError(500,'errorservice'));

  }
}