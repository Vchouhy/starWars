const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  episode_id: { type: Number, required: true },
  opening_crawl: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  release_date: { type: Date, required: true },
  species: { type: [String], default: [] },
  starships: { type: [String], default: [] },
  vehicles: { type: [String], default: [] },
  characters: { type: [String], default: [] },
  planets: { type: [String], default: [] },
  url: { type: String, required: true },
  created: { type: Date, required: true },
  edited: { type: Date, required: true }
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;