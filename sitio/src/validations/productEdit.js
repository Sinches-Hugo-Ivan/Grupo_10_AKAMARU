const { check } = require('express-validator'); //Destructuring

module.exports = [
    check("name")
        .notEmpty().withMessage("Debes ingresar un nombre")
        .isLength({min : 5, max : 100}).withMessage("El nombre debe tener entre 5 y 100 caracteres"),

    check("description")
        .notEmpty().withMessage("Ingresa una descripción del producto")
        .isLength({min: 20, max: 1000 }).withMessage("La descripción debe tener 20 y 1000 caracteres"),

    check("images")
    .custom((value,{req}) => {
      
        if(req.files[0]){
            return true
        }else{
            return false
        }
    })
    .withMessage('No ha subido ningun archivo!'), 

    check("categoryId")
        .notEmpty().withMessage("Debes seleccionar una categoría"),

    check("price")
        .notEmpty().withMessage("Debes ingresar un precio"),

    check("cuotas")
        .notEmpty().withMessage("Debes ingresar un número"),

    check("stock")
        .notEmpty().withMessage("Debes ingresar un número"),




]