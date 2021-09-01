const { body } = require('express-validator'); //Destructuring

module.exports = [
    body("name")
        .notEmpty().withMessage("Debes ingresar un título"),

    body("description")
        .notEmpty().withMessage("Ingresa una descripción del producto")
        .isLength({ max: 500 }).withMessage("La descripción debe tener 500 caracteres como máximo"),

    body("image")
        .notEmpty().withMessage("Ingresa al menos una imágen"),

            body("category")
                .notEmpty().withMessage("Debes seleccionar una categoría"),

            body("colors")
                .notEmpty().withMessage("Debes seleccionar un color"),

            body("price")
                .notEmpty().withMessage("Debes ingresar un precio"),

            body("discount")
                .custom((value, { req }) => {
                    if (value) {
                        if (!Number.isInteger(parseInt(value))) {

                            throw new Error('El descuento debe tener valor numérico');
                        } else if (parseInt(value) > 100) {

                            throw new Error('El descuento no puede ser mayor a 100');
                        }
                    }
                    return true
                })

]