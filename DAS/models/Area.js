const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

module.exports = mongoose.model('Area', areaSchema);
