const express = require('express');
const router = express.Router();
const About = require('../models/About');

// Get about information
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.status(404).json({ message: 'About information not found' });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create or update about information
router.post('/', async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      about = await About.findOneAndUpdate({}, req.body, { new: true });
    } else {
      about = new About(req.body);
      await about.save();
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update about information
router.put('/', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate({}, req.body, { new: true });
    if (!about) {
      return res.status(404).json({ message: 'About information not found' });
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 