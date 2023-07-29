const Starship = require('./model')
const createError = require('http-errors');

module.exports.getAllStarshipsFromDB = async () => {
    try {
       const starship = await Starship.find();
       return starship;
    } catch (error) {
      next(createError(500,'errorservice'));
    }
  };