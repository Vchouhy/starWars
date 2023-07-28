const Vehicle = require("./model");
// const Film = require("./../films/model")



const getAllVehicles = async () => {
  try {
    const vehicles = await Vehicle.aggregate(pipeline);
    return vehicles
  } catch (error) {
    // res.status(500).json({ message: "Error al obtener vehicles"});
  }
};


const search = async (search) => {
  try {
    const searchResults = await Vehicle.find({
      name: { $regex: search.search, $options: "i" },
    });
    console.log(searchResults)
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
      let: { pilotsUrls: "$pilots" },
      pipeline: [
        {
          $match: {
            $expr: { $in: ["$url", "$$pilotsUrls"] },
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
          },
        },
      ],
      as: "pilots",
    },
  },
  {
    $project: {
      _id: 1,
      __v : 1,
      cargo_capacity : 1,
      consumables : 1,
      cost_in_credits : 1,
      crew : 1,
      length : 1,
      manufacturer : 1,
      max_atmosphering_speed : 1,
      model : 1,
      name : 1,
      passengers : "0",
      vehicle_class : 1,
      films: { $ifNull: ["$films.films", []] },
      pilots: { $ifNull: ["$pilots.name",[]]},
      url:1
    },
  },
]
/**
 {
    "_id" : ObjectId("64c2d8accf8a292b5d8f9599"),
    "url" : "https://swapi.dev/api/vehicles/14/",
    "__v" : 1,
    "cargo_capacity" : 1,
    "consumables" : 1,
    "cost_in_credits" : 1,

    "crew" : 1,

   
    "length" : 1,
    "manufacturer" : 1,
    "max_atmosphering_speed" : 1,
    "model" : 1,
    "name" : 1,
    "passengers" : "0",
  
    "vehicle_class" : 1,
}
 */

module.exports = {
  getAllVehicles, search
};
