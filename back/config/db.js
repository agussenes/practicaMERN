const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const {MONGO_HOST, MONGO_PORT, MONGO_DB} = process.env;

const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const conectarDB = async()=>{
    try{

        await mongoose.connect(URI);
        console.log('Base de datos conectada');

    }catch(error){
        console.error('Error de conecion:', error.message)
        process.exit(1);
    }
}

module.exports = conectarDB