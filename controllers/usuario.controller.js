const { response, request } = require('express');
const res = require('express/lib/response');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuarioGet = (req = request, res = response) => {

  //Parametros de segmento y query
  const query = req.query;

  res.json({
    msg: 'get API - controlador',
    query
  });
}

const usuarioPost = async (req, res = response) => {

  // const { nombre, edad } = req.body;
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en bd
  usuario.save();

  res.json({
    usuario
  });
}

const usuarioPut = (req, res = response) => {

  const { id } = req.params;
  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  })
}

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: 'deelete API - controlador'
  });
}

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete
}
