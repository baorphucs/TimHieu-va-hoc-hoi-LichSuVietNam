const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswerIndex: Number,
  explanation: String
});

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema);
