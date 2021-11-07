var express = require('express');
var router = express.Router();

const { show,add,remove,empty } = require('../../controllers/api/cartsController');

/* endpoints: /api/carts */
 
router.get('/show', show)
router.get('/add/:id', add)
router.get('/remove/:id', remove)
router.get('/empty', empty)


module.exports = router;