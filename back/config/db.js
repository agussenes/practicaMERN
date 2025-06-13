const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const {MONGO_URI} = process.env;

const URI = MONGO_URI;

const conectarDB = async()=>{
    try{

        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Base de datos conectada');

    }catch(error){
        console.error('Error de conecion:', error.message)
        process.exit(1);
    }
}

module.exports = conectarDB