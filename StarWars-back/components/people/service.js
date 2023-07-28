const createError = require('http-errors');
const controller = require('./controller');


const getAllPeopleFromDB = async (req, res, next) => {
  try {
      res.send(await controller.getAllPeople({
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        sortField: req.query.sortField,
        search: req.query.search,
      }));
  } catch (e) {
      // next(createError(500,'errorservice'));
      console.log('errorService')
  }
};

const getById = async (req, res, next) => {
  try {
    console.log('done')
      // res.send(await controller.getById(req.params.id));
  } catch (e) {
    console.log('error')
      // next(createError(500, e));
  }
};

module.exports = {
  getAllPeopleFromDB, getById
};
