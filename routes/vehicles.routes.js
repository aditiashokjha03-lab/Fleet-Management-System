const express = require('express');
const router = express.Router();
const { getVehicles } = require('../controllers/vehicle.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, getVehicles);

module.exports = router;