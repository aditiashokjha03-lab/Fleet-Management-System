const supabase= require('../config/db');
const VehicleModel = require('../models/vehicle.model');

exports.getAllVehicles = async (req, res) => {
    const {data, error} = await supabase.from('vehicles').select('*');
        if (error) return res.status(500).json({message: err.message});
        res.status(200).json(data);
};

exports.updateVehicleStatus = async (req,res) => {
    const {id} = req.params;
    const {status} = req.body;
    const {data, error} = await supabase.from('vehicles').update({status}).eq('id', id);

    if (error) return res.status(400).json({error: error.message});

    res.status(200).json({message: "Status updated", data});

};
