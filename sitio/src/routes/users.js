var express = require('express');
const multer = require('multer');
const path = require('path');

var router = express.Router();
const {login,register,cart,processLogin,processRegister,updateperfil,editperfil,cerrarSession,vistaPerfil} = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator');
const registerValidation = require("../validations/register");
const userEditValidator = require('../validations/userEditValidator')
const usersCheck = require("../validations/usersCheck");

//Middlewares
const userSinLoguearse = require("../middlewares/userSinLoguearse");

/*----multer-----*/
const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, "public/images/users")
    },
    filename : (req,file,cb) =>{
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
}) 


/* GET users listing. */
router.get('/login',userSinLoguearse,login); 
router.post('/login',loginValidator,processLogin);
router.get('/logout', cerrarSession);
router.get('/register',userSinLoguearse,register); 
router.post('/register',processRegister); // registerValidation
router.get('/cart', cart);
router.get('/vistaPerfil',usersCheck,vistaPerfil);
router.get('/edituser',usersCheck,editperfil);
router.put('/edituser/:correo',upload.single('imagen'),userEditValidator,usersCheck, updateperfil);


module.exports = router;