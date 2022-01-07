
const { Router } = require('express');
const { check } = require('express-validator');


const { validacionRes } = require('../middlewares/validacion-res');
const { esRoleValido } = require('../helpers/db-validators');

const {
  usuarioGet,
  usuarioPut,
  usuarioPost,
  usuarioPatch,
  usuarioDelete } = require('../controllers/usuario.controller');

const router = Router();

router.get('/', usuarioGet);

router.post('/', [
  check('nombre', 'El nombre no es valido').not().isEmpty(),
  check('password', 'El password debe contener 6 letras o números').isLength({ min: 6 }),
  check('correo', 'El correo no es valido').isEmail(),
  // check('rol', 'No es un rol válido').isIn(['ADMIN_ROL', 'USUARIO_ROL']),
  check('rol').custom(esRoleValido),
  validacionRes
], usuarioPost);

router.put('/:id', usuarioPut);

router.patch('/', usuarioPatch);

router.delete('/', usuarioDelete);

module.exports = router;
