const express = require('express');
const Plant = require('../models/Plant');
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

// Get a plant by ID
router.get('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });
    res.json(plant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
