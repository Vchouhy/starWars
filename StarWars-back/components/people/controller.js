const Person = require('./model');
const mongoose = require('mongoose');


// toObjectId = (id) => mongoose.Types.ObjectId(id);

const getAllPeople = async ({page = 0, limit = 6, sort = -1, sortField = 'A-Z', search}) => {
  try {
    const people = await Person.aggregate(pipeline);
    return people;
  } catch (error) {
    console.log('error')
  }
};

const getById = async (id) => {
  try {
    const ObjectId = mongoose.Types.ObjectId;
    const objectId = new ObjectId(id); 
    let aggregate = { $match: { _id: objectId } };
    pipeline.unshift(aggregate); 
    const people = await Person.aggregate(pipeline);
    return people;
  } catch (error) {
    console.log('error');
  }
};

const pipeline = [
  {
    $lookup: {
      from: 'films',
      let: { filmLinks: '$films' },
      pipeline: [
        {
          $match: {
            $expr: { $in: ['$url', '$$filmLinks'] },
          },
        },
        {
          $project: {
            _id: 0,
            title: 1,
          },
        },
      ],
      as: 'filmsWithTitles',
    },
  },
  {
    $lookup: {
      from: 'vehicles',
      let: { vehiclesLinks: '$vehicles' },
      pipeline: [
        {
          $match: {
            $expr: { $in: ['$url', '$$vehiclesLinks'] },
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
          },
        },
      ],
      as: 'vehiclesWithNames',
    },
  },
  {
    $lookup: {
      from: 'planets',
      localField: 'homeworld',
      foreignField: 'url',
      as: 'homeworldWithName',
    },
  },
  {
    $addFields: {
      films: '$filmsWithTitles.title',
      homeworld: {
        $cond: {
          if: { $isArray: '$homeworldWithName' },
          then: { $arrayElemAt: ['$homeworldWithName.name', 0] },
          else: null,
        },
      },
      vehicles: {
        $reduce: {
          input: '$vehiclesWithNames',
          initialValue: [],
          in: { $setUnion: ['$$value', ['$$this.name']] },
        },
      },
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
    },
  },
]


module.exports = {
  getAllPeople, getById
};