
const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
  rol: {
    type: String,
    required: [true, 'El rol debe ser obligatorio']
  }
});

module.exports = model('Role', RoleSchema);
