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
      next(createError(500,'errorservice'));
  }
};

const search = async (req, res, next) =>{
  try{
    res.send(await controller.search({
      search: req.query.search
    }))
 
  }catch(e){
    next(createError(500,'errorservice'));
  }
}
const getById = async (req, res, next)=>{
  try{
    console.log(req.params)
    res.send(await controller.getById({
      id: req.params.id
    }))
  }catch(e){
    next(createError(500, 'errorservice'))
  }
}

module.exports = {
  getAllPeopleFromDB, search, getById
};
