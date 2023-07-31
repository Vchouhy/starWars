const Films = require("./model");

module.exports.getAllFilms = async () => {
  try {
    const films = await Films.aggregate(pipeline);
    return films;
  } catch (error) {
    res.status(500).json({ message: "Error al obtener vehicles"});
  }
};

module.exports.search = async (search) => {
  try {
    const searchResults = await Films.find({
      title: { $regex: search.search, $options: "i" },
    });
    return searchResults;
  } catch (error) {
    console.error("Error al buscar elementos:", error);
    res.status(500).json({ error: "Error al buscar elementos" });
  }
};

let pipeline = [
  {
    $lookup: {
      from: "people",
      let: { peopleLinks: "$characters" },
      pipeline: [
        {
          $match: {
            $expr: { $in: ["$url", "$$peopleLinks"] },
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
          },
        },
      ],
      as: "charactersWithNames",
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
      let: { planetLink: "$planets" },
      pipeline: [
        {
          $match: {
            $expr: { $in: ["$url", "$$planetLink"] },
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
          },
        },
      ],
      as: "planetsWithNames",
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
      characters: "$charactersWithNames.name",
      planets: "$planetsWithNames.name",
      vehicles: "$vehiclesWithNames.name",
      starships: "$starshipsWithNames.name",
      species: "$speciesWithNames.name",
    },
  },
  {
    $project: {
      _id: 1,
      url: 1,
      title: 1,
      characters: 1,
      planets: 1,
      vehicles: 1,
      director: 1,
      episode_id: 1,
      opening_crawl: 1,
      producer: 1,
      release_date: 1,
      species: 1,
      starships: 1,
    },
  },
];
