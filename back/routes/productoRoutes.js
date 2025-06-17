const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productoController');

// middlewares 
const validarProducto = require('../middlewares/validarProducto');
const upload = require('../middlewares/uploadImage');

// routes 
router.get('/', obtenerProductos);
router.post('/', upload.single('imagen'), validarProducto, crearProducto);
router.put('/:id', upload.single('imagen'), actualizarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;