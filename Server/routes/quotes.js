const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// Lấy tất cả quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo mới 1 quote
router.post('/', async (req, res) => {
  try {
    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json(quote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
