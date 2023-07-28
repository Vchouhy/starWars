const Planet = require('./model');
const mongoose = require('mongoose');


// toObjectId = (id) => mongoose.Types.ObjectId(id);

const getAllPlanetsFromDB = async () => {
  try {
     const planet = await Planet.aggregate(pipeline);
     return planet
  } catch (error) {
    console.log('error')
  }
};

// const getById = async (id) => {
//   try {
//     const ObjectId = mongoose.Types.ObjectId;
//     const objectId = new ObjectId(id); 
//     let aggregate = { $match: { _id: objectId } };
//     pipeline.unshift(aggregate); 
//     const person = await Person.aggregate(pipeline);
//     return person;
//   } catch (error) {
//     console.log(error);
//   }
// // };

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
  getAllPlanetsFromDB, 
//   getById
};