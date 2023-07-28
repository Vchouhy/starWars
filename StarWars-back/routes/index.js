const { Router } = require("express");
const peopleRouter = require('./../components/people/route')
const filmsRouter = require('./../components/films/route')
const vehiclesRouter = require('./../components/vehicles/route')
const planetsRouter = require('./../components/planets/route')

const mainRouter = Router();

mainRouter.use('/people', peopleRouter);
mainRouter.use('/people/search', peopleRouter);

mainRouter.use('/films', filmsRouter);
mainRouter.use('/films/search', peopleRouter);

mainRouter.use('/vehicles', vehiclesRouter);
mainRouter.use('/vehicles/search', vehiclesRouter);

mainRouter.use('/planets', planetsRouter);
mainRouter.use('/planets/search', planetsRouter);


module.exports = mainRouter;