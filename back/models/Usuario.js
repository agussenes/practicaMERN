const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: {type:String, unique: true},
    password: String,
    rol: {type: String, enum:['admin', 'user'],default:'user'}
});

usuarioSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model('Usuario', usuarioSchema);
