const fs = require('fs');
const path = require('path');
const productos = require('../data/products_db');

module.exports = {
    add : (req,res) => {
        return res.render('productAdd',{
                    productos
        })
    },
    save : (req,res) => {
        const {title, description,price,category} = req.body;

        let producto = {
            id : productos[productos.length - 1].id + 1,
            title,
            description,
            price : +price,
            image : 'default-image.png',
        }
       productos.push(producto);

       fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productos,null,2),'utf-8')
       return res.redirect('/')
    },
    detail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        return res.render('detail',{
            producto,
            productos
        })
    },
    search : (req,res) => {
        let result = productos.filter(producto => producto.category === req.query.search)
        return res.render('resultSearch',{
            result,
            productos,
            busqueda : req.query.search
        })
    },
    edit : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        return res.render('productEdit',{
            productos,
            producto
        })
    },
    update : (req,res) => {
        res.send(req.body)
    },
    remove : (req,res) => {
        res.send(req.params.id)
    }
     }