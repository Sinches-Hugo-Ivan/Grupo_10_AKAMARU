var express = require('express');
var router = express.Router();
const {login,register,cart,processLogin,processRegister} = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator');
const registerValidation = require("../validations/register");
const multer = require('multer');


/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processLogin);
router.get('/register', register);
router.post('/register',registerValidation,processRegister);
router.get('/cart', cart);



// m u l t e r 
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,"../../public/images"))
    },
    filename : (req,file,cb) => {
        cb(null,`img-${Date.now()}${path.extname(file.originalname)}`)
    }
});


const upload = multer({storage});

module.exports = router;