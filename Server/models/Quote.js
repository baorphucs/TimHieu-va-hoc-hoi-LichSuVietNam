const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: String,
  context: String
});

module.exports = mongoose.model('Quote', quoteSchema);
