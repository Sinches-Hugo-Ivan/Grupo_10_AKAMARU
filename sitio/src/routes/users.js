var express = require('express');
var router = express.Router();
const {login,register,cart} = require('../controllers/userController');


/* GET users listing. */
router.get('/login', login);
router.get('/register', register);
router.get('/cart', cart);


module.exports = router;