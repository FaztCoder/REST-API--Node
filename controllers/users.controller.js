const { response, request } = require('express');
const res = require('express/lib/response');


const userGet = (req = request, res = response) => {

  //Parametros de segmento y query
  const query = req.query;

  res.json({
    msg: 'get API - controlador',
    query
  });
}

const userPost = (req, res = response) => {

  //const body = req.body;
  const { nombre, edad } = req.body;
  res.json({
    msg: 'post API - controlador',
    //body
    nombre,
    edad
  });
}

const userPut = (req, res = response) => {

  const { id } = req.params;
  res.json({
    msg: 'put API - controlador',
    id
  });
}

const userPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controlador'
  })
}

const userDelete = (req, res = response) => {
  res.json({
    msg: 'deelete API - controlador'
  });
}

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete
}
