const path = require('path');
var express = require('express');
var router = express.Router();
const addValidation = require("../validations/productAdd");

//Middlewares
const adminUserCheck = require("../middlewares/adminUserCheck");

const multer = require("multer");

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, "public/images")
    },
    filename : (req,file,cb) =>{
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
})

const {add,detail,search,save,edit,update,remove, productos,vistaAdmin,categoriasProduct} = require('../controllers/productsController');

/* /products */
router.get('/', productos);
router.get('/add',adminUserCheck, add);                              
router.post('/add',upload.array('images'),addValidation,save);
router.get('/detail/:id',detail);
router.get('/search',search);
router.get('/edit/:id',adminUserCheck, edit);                      
router.put('/edit/:id',adminUserCheck , update);          //         
router.get('/vistaAdmin',adminUserCheck, vistaAdmin);               //
router.get('/categorias', categoriasProduct);
router.get('/categorias/:id', categoriasProduct);
router.delete('/remove/:id',adminUserCheck,remove);              //



module.exports = router;