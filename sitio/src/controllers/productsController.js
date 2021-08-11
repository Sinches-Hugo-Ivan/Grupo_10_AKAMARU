const fs = require('fs');
const path = require('path');
let productos = require('../data/products_db');
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

module.exports = {
    add: (req, res) => {
        res.render('productAdd', {
            productos,

        })
    },
    save: (req, res) => {
        const { name, description, price, discount, category, colors } = req.body;
        let producto = {
            id: productos[productos.length - 1].id + 1,
            name,
            description,
            price: +price,
            image: req.file ? "/images/" + req.file.filename :"/images/default-image.png",
            discount: +discount,
            category,
            colors

        }
        productos.push(producto);

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2), 'utf-8')

        res.redirect('/')

    },
    detail: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        res.render('detail', {
            producto,
            productos
        })
    },
    search: (req, res) => {
        let result = productos.filter(producto => producto.category === req.query.search)
        return res.render('resultSearch', {
            result,
            productos,
            busqueda: req.query.search
        })
    },
    edit: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        return res.render('productEdit', {
            productos,
            producto
        })
    },
    update: (req, res) => {
        const { name, description, price, discount, category, colors } = req.body;

        productos.forEach(producto => {
           if(producto.id === +req.params.id){
            producto.id === +req.params.id;
            producto.name = name;
            producto.description = description;
            producto.price = +price;
            producto.discount = +discount;
            producto.category = category;
            producto.colors = colors 
        }
            
        });  
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2), 'utf-8');

        res.redirect('/products/detail/' + req.params.id)

    },
    vistaAdmin: (req, res) => {
        return res.render('listaProductsAdmin',{
            productos,
        })
    } ,
    remove: (req, res) => {
        productos = productos.filter((producto) => producto.id !== +req.params.id);
        fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,2),"utf-8")
        res.redirect("/");

    },
    productos: (req, res) => {
        res.render('vistaProduct', {
            productos
        })
    }
}