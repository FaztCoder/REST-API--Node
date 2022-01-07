const { validationResult } = require('express-validator');

const validacionRes = (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  //sigue con el siguiente middleware
  next();

}

module.exports = {
  validacionRes
}
