const { Router } = require("express");
const peopleRouter = require('./../components/people/route')
const filmsRouter = require('./../components/films/route')
const vehiclesRouter = require('./../components/vehicles/route')
const planetsRouter = require('./../components/planets/route')

const mainRouter = Router();

mainRouter.use('/people', peopleRouter);
mainRouter.use('/films', filmsRouter);
mainRouter.use('/vehicles', vehiclesRouter);
mainRouter.use('/planets', planetsRouter);

module.exports = mainRouter;