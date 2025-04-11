const pool = require('../config/db');

// Controlador que obtiene puestos activos (Vigente) de la tabla `Puesto`
exports.getPuestosActivos = (req, res) => {
  const query = `
    SELECT IdPuesto AS codigo, Nombre 
    FROM puesto 
    WHERE Estado = 'Vigente'
  `;

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error al consultar puestos:', error);
      return res.status(500).json({ message: 'Error al consultar puestos' });
    }

    return res.json(results);
  });
};
