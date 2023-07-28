const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth_year: { type: String, required: true },
  eye_color: { type: String, required: true },
  gender: { type: String, required: true },
  hair_color: { type: String, required: true },
  height: { type: String, required: true },
  mass: { type: String, required: true },
  skin_color: { type: String, required: true },
  homeworld: { type: String, required: true },
  films: { type: [String], default: [] },
  species: { type: [String], default: [] },
  starships: { type: [String], default: [] },
  vehicles: { type: [String], default: [] },
  url: { type: String, required: true, unique: true  },
  created: { type: Date, required: true },
  edited: { type: Date, required: true }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;