const { body } = require('express-validator'); //Destructuring

module.exports = [
    body("name")
        .notEmpty().withMessage("Debes ingresar un título"),

    body("description")
        .notEmpty().withMessage("Ingresa una descripción del producto")
        .isLength({ max: 1000 }).withMessage("La descripción debe tener 500 caracteres como máximo"),

    body("categoryId")
        .notEmpty().withMessage("Debes seleccionar una categoría"),

    body("price")
        .notEmpty().withMessage("Debes ingresar un precio"),

    body("cuotas")
        .notEmpty().withMessage("Debes ingresar un numero"),

    body("stock")
        .notEmpty().withMessage("Debes seleccionar un color"),




]