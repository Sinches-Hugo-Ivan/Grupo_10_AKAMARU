const {body} = require('express-validator'); //Destructuring

module.exports = [
    body("name")
           .notEmpty().withMessage("Debes ingresar un nombre"),
    
    body("surname")
            .notEmpty().withMessage("Debes ingresar un apellido"),
    
    body("email")
            .notEmpty().withMessage("Debes ingresar un e-mail")
            .isEmail().withMessage("El mail ingresado no es válido"),
    
    body("password")
            .notEmpty().withMessage("Debes ingresar una contraseña")
            .isLength({min:8, max:15}).withMessage("La contraseña debe tener entre 8 y 15 caracteres"),
    
    body("password2")
            .notEmpty().withMessage("Debes ingresar una contraseña")
            .custom((value,{req}) => {
                if (value === req.body.password) {
                    return true
                }
                return false
            }).withMessage("Las contraseñas no coinciden"),

    body("date")
            .notEmpty().withMessage("Debes ingresar tu fecha de nacimiento"),

    body("gender")
            .notEmpty().withMessage("Debes seleccionar una opción")
]

