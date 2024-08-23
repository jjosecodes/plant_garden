const express = require('express');
const Plant = require('../models/plant');  // Adjust the path if necessary
const router = express.Router();

// Get all plants with filtering and search
router.get('/plants', async (req, res) => {
  const query = {};

  if (req.query.watering) {
    query.watering = req.query.watering;
  }

  if (req.query.sunlight) {
    query.sunlight = { $in: req.query.sunlight.split(',') };
  }

  if (req.query.search) {
    query.common_name = { $regex: req.query.search, $options: 'i' };
  }

  try {
    const plants = await Plant.find(query);
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
