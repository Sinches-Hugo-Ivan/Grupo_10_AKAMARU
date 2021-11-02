const express = require('express');
const router = express.Router();
const path = require('path');

var { create, deleteImages, addImages } = require('../../controllers/api/productImages');

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
})

/* endpoints: /api/products */
router.post('/', create)
router.get('/deleteImages/:id', deleteImages)
router.post('/addImages/:id', upload.any(), addImages)

module.exports = router;