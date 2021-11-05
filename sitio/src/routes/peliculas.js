var express = require('express');
const multer = require('multer');
const path = require('path');

var router = express.Router();
const {cine,peli1,peli2,peli3,peli4,peli5,peli6} = require('../controllers/peliculasController');


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


/* peliculas */

router.get('/cine', cine);
router.get('/peliculas/movieRescatePrincesaNieve', peli1);
router.get('/peliculas/movieDemonSlayer', peli2);
router.get('/peliculas/movieDragonBallSuperBroly', peli3);
router.get('/peliculas/movieEvangelion30', peli4);
router.get('/peliculas/movieMyHeroAcademia', peli5);
router.get('/peliculas/movieViolet', peli6);




module.exports = router;