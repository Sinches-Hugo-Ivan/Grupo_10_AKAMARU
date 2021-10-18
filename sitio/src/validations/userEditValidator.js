const {check} = require('express-validator');
let extensions = [".jpg",".jpeg",".gif",".png",".webp"]

module.exports = [
    check('archivo').custom((value,{req})=>{
                if(req.files.length == 0){
            return true
        }else{
            for (let i=0;i< req.files.length; i++) {
                if(!extensions.includes(path.extname(req.files[i].originalname))){
                    throw new Error(`Las extensiones permitidas son ${extensions.join(", ")}`);
                }
            }
            return true
        }
    }),
    check('nombre')
    .notEmpty().withMessage("Debe ingresar un nombre.")
    .isLength({min : 2}).withMessage("El nombre debe tener al menos 2 caracteres"),

    check('apellido')
    .notEmpty().withMessage('Debe ingresar un apellido.'),

    check('fecha')
    .notEmpty().withMessage('Debe ingresar su fecha de nacimiento.').bail(),

    check('genero')
    .notEmpty().withMessage('Debe ingresar un genero.'),
]