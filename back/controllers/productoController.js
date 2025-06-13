const Producto = require('../models/Producto');

exports.obtenerProductos = async(req, res)=>{
    try{
        const productos = await Producto.find();
        res.status(200).json(productos);

    }catch(error){
        res.status(500),json({message: 'Error al obtener productos', error})
    }
};

exports.crearProducto = async (req, res)=>{
    try{
        const {nombre, precio, descripcion, stock} = req.body;
        const imagen = req.file? req.file.filename : null;

        const nuevoProducto = await Producto.create({nombre, precio, descripcion, stock, imagen});
        res.status(201).json(nuevoProducto);
    }catch(error){
        res.status(400).json({message: 'Error al crear producto:', error});
    }
};

exports.actualizarProducto = async(req, res)=>{
    try{
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(producto);
    }catch(error){
        res.status(400).json({message: 'Error al actualizar', error})
    }
};

exports.eliminarProducto = async(req, res)=>{
    try{
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Producto eliminado'});
    }catch(error){
        res.status(500).json({message: 'Error al eliminar', error});
    }
};