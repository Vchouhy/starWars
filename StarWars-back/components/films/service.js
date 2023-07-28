const createError = require('http-errors');
const controller = require('./controller');


module.exports.getAllFilms = async (req, res, next) => {
  try {
      res.send(await controller.getAllFilms());
  } catch (e) {
      // next(createError(500,'errorservice'));
      console.log('errorService')
  }
};