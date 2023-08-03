const Person = require("./model");
const mongoose = require("mongoose");

const getAllPeople = async () => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "films",
          let: { filmLinks: "$films" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$url", "$$filmLinks"] },
              },
            },
            {
              $project: {
                _id: 0,
                title: 1,
              },
            },
          ],
          as: "filmsWithTitles",
        },
      },
      {
        $lookup: {
          from: "vehicles",
          let: { vehiclesLinks: "$vehicles" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$url", "$$vehiclesLinks"] },
              },
            },
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
          as: "vehiclesWithNames",
        },
      },
      {
        $lookup: {
          from: "planets",
          localField: "homeworld",
          foreignField: "url",
          as: "homeworldWithName",
        },
      },
      {
        $addFields: {
          films: "$filmsWithTitles.title",
          homeworld: {
            $cond: {
              if: { $isArray: "$homeworldWithName" },
              then: { $arrayElemAt: ["$homeworldWithName.name", 0] },
              else: null,
            },
          },
          vehicles: {
            $reduce: {
              input: "$vehiclesWithNames",
              initialValue: [],
              in: { $setUnion: ["$$value", ["$$this.name"]] },
            },
          },
        },
      },
      {
        $lookup: {
          from: "species",
          let: { speciesLinks: "$species" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$url", "$$speciesLinks"] },
              },
            },
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
          as: "speciesWithNames",
        },
      },
      {
        $lookup: {
          from: "starships",
          let: { starshipLinks: "$starships" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$url", "$$starshipLinks"] },
              },
            },
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
          as: "starshipsWithNames",
        },
      },
      {
        $addFields: {
          species: "$speciesWithNames.name",
          starships: "$starshipsWithNames.name",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          birth_year: 1,
          eye_color: 1,
          gender: 1,
          hair_color: 1,
          height: 1,
          mass: 1,
          skin_color: 1,
          homeworld: 1,
          films: 1,
          vehicles: 1,
          url: 1,
          starships: 1,
          species: 1,
        },
      },
    ];

    const people = await Person.aggregate(pipeline);
    return people;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};

const search = async (search) => {
  try {
    const searchResults = await Person.find({
      name: { $regex: search.search, $options: "i" },
    });
    return searchResults;
  } catch (error) {
    console.error("Error al buscar elementos:", error);
    res.status(500).json({ error: "Error al buscar elementos" });
  }
};

const getById = async (id) =>{
  try{
    const peopleId = await Person.findById(id.id)
    if(peopleId) return peopleId;
  }catch (error) {
    console.error("Error al buscar elementos:", error);
    res.status(500).json({ error: "Error al buscar elementos" });
  }
};


module.exports = {
  getAllPeople,
  search,
  getById
};
