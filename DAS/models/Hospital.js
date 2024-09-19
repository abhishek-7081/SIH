const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  areas: [String], // Array of area names this hospital serves
});

module.exports = mongoose.model('Hospital', hospitalSchema);
