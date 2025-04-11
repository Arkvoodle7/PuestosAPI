const express = require('express');
const cors = require('cors');
const app = express();
const puestosRoutes = require('./routes/puestosRoutes');

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/v1/puestos', puestosRoutes);

module.exports = app;
