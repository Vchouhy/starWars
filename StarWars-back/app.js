const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mainRouter = require('./routes/index');
const seedData = require('./seeder'); // Importar la función de carga de datos inicial
const app = express();
const port = 5001;
const cors = require('cors')

const mongoURI = 'mongodb://localhost:27017/starWars'; // Cambiar la URL según la configuración de tu servidor MongoDB

// Middleware para analizar datos JSON en el cuerpo de las solicitudes
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('dev'));
app.use(express.json());

// Conectar a MongoDB con Mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
    seedData(); // Ejecutar la función de carga de datos inicial después de conectarse a la base de datos
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Middleware para obtener datos de la API de Star Wars y guardarlos en la base de datos
app.use((req, res, next) => {
  // No necesitas la función de carga de datos aquí en el middleware
  next();
});

// Rutas
app.use(mainRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
