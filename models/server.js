const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT
    this.pathUsuarios = '/api/usuarios';

    //Conexión a la base de datos
    this.conectarDB();

    //Middleware
    this.middleware();

    //Rutas de la aplicación
    this.routes();
  }

  async conectarDB () {
    await dbConnection();
  }

  middleware () {

    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //direcotrio público
    this.app.use(express.static('public'))
  }
  //TODO: se tiene que mover las rutas a un archivo independiente
  routes () {
    this.app.use(this.pathUsuarios, require('../routes/usuarios.routes'));
  }
  listen () {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    })
  }
}

module.exports = Server;
