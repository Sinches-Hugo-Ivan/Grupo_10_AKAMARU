const { body } = require('express-validator'); //Destructuring

module.exports = [
    body("name")
        .notEmpty().withMessage("Debes ingresar un título")
        .isLength({ min:5 }).withMessage("El nombre del producto debe tener al menos 5 caracteres"),

    body("description")
        .notEmpty().withMessage("Ingresa una descripción del producto")
        .isLength({ min: 20 }).withMessage("La descripción debe tener 20 caracteres como mínimo"),

     body('images')
    .custom((value,{req}) => {
      
        if(req.files[0]){
            return true
        }else{
            return false
        }
    })
    .withMessage('No ha subido ningun archivo!'),
    
    body("categoryId")
        .notEmpty().withMessage("Debes seleccionar una categoría"),

    body("price")
        .notEmpty().withMessage("Debes ingresar un precio"),

    body("cuotas")
        .notEmpty().withMessage("Debes ingresar un numero"),

    body("stock")
        .notEmpty().withMessage("Debes seleccionar un numero"),


]