const Role = require('../models/role');
const usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {

  const existeRole = await Role.findOne({ rol });

  if (!existeRole) {
    throw new Error(`El rol ${rol} no está registrado en la base de datos`);
  }

}

//Verificar si el correo existente
const existeCorreo = async (correo = '') => {

  const correoExiste = usuario.findOne({ correo });
  if (correoExiste) {
    throw new Error(`El correo: ${correo}, ya está registrado`);
  }

}

module.exports = {
  esRoleValido,
  existeCorreo
};
