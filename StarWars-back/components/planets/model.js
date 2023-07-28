const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diameter: { type: String, required: true },
  rotation_period: { type: String, required: true },
  orbital_period: { type: String, required: true },
  gravity: { type: String, required: true },
  population: { type: String, required: true },
  climate: { type: String, required: true },
  terrain: { type: String, required: true },
  surface_water: { type: String, required: true },
  residents: { type: [String], default: [] }, // Array of People URL Resources
  films: { type: [String], default: [] }, // Array of Film URL Resources
  url: { type: String, required: true },
  created: { type: Date, required: true },
  edited: { type: Date, required: true }
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;