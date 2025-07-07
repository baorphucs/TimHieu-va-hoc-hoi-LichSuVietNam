const express = require('express');
const router = express.Router();
const QuizQuestion = require('../models/QuizQuestion');

// GET tất cả câu hỏi
router.get('/', async (req, res) => {
  const questions = await QuizQuestion.find();
  res.json(questions);
});

// POST thêm câu hỏi
router.post('/', async (req, res) => {
  const question = new QuizQuestion(req.body);
  await question.save();
  res.status(201).json(question);
});

module.exports = router;
