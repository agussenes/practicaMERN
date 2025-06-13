module.exports = (req, res, next) => {
    const {nombre, precio, descripcion} = req.body;

    const precioNumero = Number(precio)

    if(!nombre || !descripcion || isNaN(precioNumero)){
        return res.status(400).json({error: 'Nombre, Descripcion y precio con valor incorrecto'});
    }
    
    next();

};