const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  MGLT: { type: String, required: true },
  cargo_capacity: { type: String, required: true },
  consumables: { type: String, required: true },
  cost_in_credits: { type: String, required: true },
  created: { type: Date, required: true },
  crew: { type: String, required: true },
  edited: { type: Date, required: true },
  hyperdrive_rating: { type: String, required: true },
  length: { type: String, required: true },
  manufacturer: { type: String, required: true },
  max_atmosphering_speed: { type: String, required: true },
  model: { type: String, required: true },
  name: { type: String, required: true },
  passengers: { type: String, required: true },
  films: [{ type: String, required: true }],
  pilots: [{ type: String, required: true }],
  starship_class: { type: String, required: true },
  url: { type: String, required: true },
});

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;

