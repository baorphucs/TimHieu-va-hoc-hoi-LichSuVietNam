const express = require('express');
const router = express.Router();
const HistoryEvent = require('../models/HistoryEvent');

// GET tất cả lịch sử sự kiện
router.get('/', async (req, res) => {
  try {
    const events = await HistoryEvent.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST mới
router.post('/', async (req, res) => {
  try {
    const historyEvent = new HistoryEvent(req.body);
    await historyEvent.save();
    res.status(201).json(historyEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
