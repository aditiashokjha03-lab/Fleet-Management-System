const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller')
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, vehicleController, getAllVehicles);
router.patch('/update/:id', auth, vehicleController.updateVehicleStatus);

module.exports = router;
