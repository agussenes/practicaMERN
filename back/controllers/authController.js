const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async(req, res)=>{
    const {email, password} = req.body;
    const usuario = await Usuario.findOne({email});
    if(!usuario) return res.status(401).json({error: 'Contrasela incorrecta'});
    const token = jwt.sign({id:usuario._id, rol:usuario.rol}, process.env.SECRET_KEY,{expiresIn:'1h'});
    res.json({token});
};

exports.register = async (req, res) => {
    const {nombre, email, password} = req.body;
    if(!nombre || !email || !password){
        return res.status(401).json({Error: 'Todos los campos son obligatorios'});        
    }

    try{
        const yaExiste = await Usuario.findOne({email});
        if(yaExiste){
            return res.status(400).json({Error: 'El correo ya existe'});
        }
        
        const nuevoUsuario = new Usuario({nombre, email, password})
        await nuevoUsuario.save();

        res.status(201).json({message:'Usuario registrado exitosamente'});
    }catch(error){
        res.status(500).json({Error: 'Error al registrar usuario'});
    }
};