var express = require('express');
var router = express.Router();
const {login,register,cart,processLogin} = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator');


/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processLogin);
router.get('/register', register);
router.get('/cart', cart);


module.exports = router;