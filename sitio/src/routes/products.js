const path = require('path');
var express = require('express');
var router = express.Router();


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

const {add,detail, search,save,edit,update,remove, productos,vistaAdmin} = require('../controllers/productsController');

/* /products */
router.get('/', productos);
router.get('/Add',add);
router.post('/add',upload.single('image'), save);
router.get('/detail/:id',detail);
router.get('/search',search);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.get('/vistaAdmin', vistaAdmin);
router.delete('/remove/:id',remove);



module.exports = router;