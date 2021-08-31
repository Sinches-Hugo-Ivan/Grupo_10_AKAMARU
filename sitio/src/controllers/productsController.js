const fs = require('fs');
const path = require('path');
let categorias = require('../data/categories_db');
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
        if(req.files){
            var imagenes = req.files.map(imagen => imagen.filename)
        }
        let producto = {
            id: productos[productos.length - 1].id + 1,
            name,
            description,
            price: +price,
            images: req.files.length != 0 ? imagenes :["default-image.png"],
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
        let categoria = categorias.filter(categoria => categoria.title === req.params.title);
        res.render('detail', {
            producto,
            productos,
            categorias,
            categoria
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
    categoriasProduct: (req, res) => {
        let resultado = productos.filter(producto => producto.category === req.params.title);
        let categoria = categorias.filter(categoria => categoria.title === req.params.title);
        return res.render('categorias',{
            resultado, 
            categorias,
            categoria,
            productos,
            title: req.params.title,
             
        })
    },
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