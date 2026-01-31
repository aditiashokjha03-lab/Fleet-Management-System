const express = require('express');
const userRoutes = require('./routes/user.routes');
const vehicleRoutes = require('./routes/vehicles.routes');
const tripRoutes = require('./routes/trip.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/trips', tripRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});