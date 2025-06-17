const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productoController');

// middlewares 
const validarProducto = require('../middlewares/validarProducto');
const upload = require('../middlewares/uploadImage');
const validarRol = require('../middlewares/roleMddleware');
const validarToken = require('../middlewares/authMiddleware');

// routes 
router.get('/', obtenerProductos);
router.post('/', validarToken, validarRol('admin'), upload.single('imagen'), validarProducto, crearProducto);
router.put('/:id', validarToken, validarRol('admin'), upload.single('imagen'), actualizarProducto);
router.delete('/:id', validarToken, validarRol('admin'), eliminarProducto);

module.exports = router;