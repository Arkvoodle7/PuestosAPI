const express = require('express');
const router = express.Router();
const { getPuestosActivos } = require('../controllers/puestosController');

// GET /api/v1/puestos
router.get('/', getPuestosActivos);

module.exports = router;
