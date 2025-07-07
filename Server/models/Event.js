const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: Number,
  title: String,
  date: String,
  location: String,
  description: String,
  details: String,
  image: String
});

module.exports = mongoose.model('Event', eventSchema);
