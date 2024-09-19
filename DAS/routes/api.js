const express = require('express');
const Area = require('../models/Area');
const Hospital = require('../models/Hospital');
const Doctor = require('../models/Doctor');
const Bed = require('../models/Bed');

const router = express.Router();

// Get all areas
router.get('/areas', async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get hospitals by area
router.get('/hospitals/:area', async (req, res) => {
  try {
    const hospitals = await Hospital.find({ areas: req.params.area });
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get doctors by hospital
router.get('/doctors/:hospital', async (req, res) => {
  try {
    const doctors = await Doctor.find({ hospital: req.params.hospital });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get beds by hospital
router.get('/beds/:hospital', async (req, res) => {
  try {
    const beds = await Bed.find({ hospital: req.params.hospital });
    res.json(beds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// this is backenmd of Hospitallist.js
// or hospitals section 


module.exports = router;
