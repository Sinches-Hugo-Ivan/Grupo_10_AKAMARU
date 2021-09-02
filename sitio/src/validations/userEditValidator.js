const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('Debe ingresar un nombre.'),

    check('apellido')
    .notEmpty().withMessage('Debe ingresar un apellido.'),

    check('fecha')
    .notEmpty().withMessage('Debe ingresar su fecha de nacimiento.').bail()
]