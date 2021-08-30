var express = require('express');
var router = express.Router();
const {login,register,cart,processRegister} = require('../controllers/userController');
const validation = require("../validations/register");
const multer = require('multer');

/* GET users listing. */
router.get('/login', login);
router.get('/register', register);
router.get('/cart', cart);

router.post ('/register', validation, processRegister)

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