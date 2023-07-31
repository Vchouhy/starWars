const Planet = require('./model');
const mongoose = require('mongoose');



const getAllPlanetsFromDB = async () => {
  try {
     const planet = await Planet.aggregate(pipeline);
     return planet
  } catch (error) {
    console.log('error')
  }
};


const search = async (search) => {
  try {
    const searchResults = await Planet.find({
      name: { $regex: search.search, $options: "i" },
    });
    return searchResults;
  } catch (error) {
    console.error("Error al buscar elementos:", error);
    res.status(500).json({ error: "Error al buscar elementos" });
  }
};


const pipeline = [
    {
      $lookup: {
        from: "films",
        let: { filmUrls: "$films" },
        pipeline: [
          {
            $match: {
              $expr: { $in: ["$url", "$$filmUrls"] },
            },
          },
          {
            $project: {
              _id: 0,
              title: 1,
            },
          },
          {
            $group: {
              _id: null,
              titles: { $push: "$title" },
            },
          },
          {
            $project: {
              _id: 0,
              films: "$titles",
            },
          },
        ],
        as: "films",
      },
    },
    {
      $unwind: {
        path: "$films",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "people",
        let: { residentUrls: "$residents" },
        pipeline: [
          {
            $match: {
              $expr: { $in: ["$url", "$$residentUrls"] },
            },
          },
          {
            $project: {
              _id: 0,
              name: 1,
            },
          },
        ],
        as: "residents",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        climate: 1,
        diameter: 1,
        gravity: 1,
        orbital_period: 1,
        population: 1,
        rotation_period: 1,
        surface_water: 1,
        terrain: 1,
        films: { $ifNull: ["$films.films", []] },
        residents: { $ifNull: ["$residents.name",[]]},
        url:1
      },
    },
  ]

module.exports = {
  getAllPlanetsFromDB, search
};