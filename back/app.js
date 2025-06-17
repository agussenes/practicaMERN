// Importación de módulos y dependencias principales
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Importación de la función para conectar con MongoDB
const conectarDB = require('./config/db');

// Rutas definidas
const productosRoutes = require('./routes/productoRoutes');
const userRoutes = require('./routes/userRoutes');

// Configurar variables de entorno (.env)
dotenv.config();

// Inicializar la app de Express
const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Rutas de las API
app.use('/api/productos', productosRoutes);
app.use('/auth', userRoutes)

// Conexión a la base de datos MongoDB
conectarDB();

// Levantar el servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})