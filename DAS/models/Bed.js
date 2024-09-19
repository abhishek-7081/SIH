const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  _id: Number,
  hospital: String, // Hospital name
  bedNumber: Number,
  occupied: Boolean,
});

module.exports = mongoose.model('Bed', bedSchema);
