const mongoose = require('mongoose');

const subEventSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  images: [String],
  video: String,
  quote: String
});

const historyEventSchema = new mongoose.Schema({
  year: String,
  theme: String,
  title: String,
  events: [subEventSchema]
});

module.exports = mongoose.model('HistoryEvent', historyEventSchema);
