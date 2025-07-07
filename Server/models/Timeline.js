const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  year: String,
  event: String,
  details: String,
  image: String
});

module.exports = mongoose.model('Timeline', timelineSchema);
