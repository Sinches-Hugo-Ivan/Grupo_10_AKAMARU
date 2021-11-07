var express = require('express');
var router = express.Router();

const { list, search} = require('../../controllers/api/productsController');

/* endpoints: /api/products */
router.get('/', list)
router.get('/search', search)

module.exports = router;