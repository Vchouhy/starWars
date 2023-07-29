const Species = require('./model')
const createError = require('http-errors');

module.exports.getAllSpeciesFromDB = async () => {
    try {
       const species = await Species.find();
       return species
    } catch (error) {
      next(createError(500,'errorservice'));
    }
  };