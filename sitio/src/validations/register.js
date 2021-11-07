const { check, body } = require('express-validator'); //Destructuring
const db = require('../database/models');

module.exports = [
    body("firstName")
           .notEmpty().withMessage("Debes ingresar un nombre"),
    
    body("lastName")
            .notEmpty().withMessage("Debes ingresar un apellido"),

    check("email")
            .notEmpty().withMessage("Debes ingresar un e-mail")
            .isEmail().withMessage("El mail ingresado no es válido"),

    body("email")
            .custom(value => {
                console.log(value)
                return db.User.findOne({
                    where : {
                        email : value
                    }
                }).then(user => {
                    if(user){
                        return Promise.reject('El email ya está registrado')
                    }
                })
            }),
    
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

    body("genero")
            .notEmpty().withMessage("Debes seleccionar una opción")
]

