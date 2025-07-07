const express = require('express');
const router = express.Router();
const Timeline = require('../models/Timeline');

router.get('/', async (req, res) => {
  const timeline = await Timeline.find();
  res.json(timeline);
});

router.post('/', async (req, res) => {
  const entry = new Timeline(req.body);
  await entry.save();
  res.status(201).json(entry);
});

module.exports = router;
