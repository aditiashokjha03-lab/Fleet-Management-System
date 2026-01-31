const VehicleModel = require('../models/vehicle.model');

const getVehicles = async (req, res) => {
    try {
        const vehicles = await VehicleModel.getAll();
        res.status(200).json(vehicles);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getVehicles };
