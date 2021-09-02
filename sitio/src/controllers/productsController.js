const fs = require('fs');
const path = require('path');
let categorias = require('../data/categories_db');
let productos = require('../data/products_db');
const { validationResult } = require('express-validator');
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

module.exports = {
    add: (req, res) => {
        res.render('productAdd', {
            productos,
            categorias
        })
    },
    save: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, description, price, discount, category, colors } = req.body;
            if (req.files) {
                var imagenes = req.files.map(imagen => imagen.filename)
            }
            let producto = {
                id: productos[productos.length - 1].id + 1,
                name,
                description,
                price: +price,
                images: req.files.length != 0 ? imagenes : ["default-image.png"],
                discount: +discount,
                category,
                colors

            }
            productos.push(producto);
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2), 'utf-8')
            res.redirect('/')
        } else {
            return res.render('productAdd', {
                errors: errors.mapped(),
                categorias
            })
        }
    },
    detail: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        let categoria = categorias.filter(categoria => categoria.title === req.params.title);
        let relacionados = productos.filter(articulo => articulo.category === producto.category); // guarda los productos relacionados en un array de objetos literales
        res.render('detail', {
            producto,
            productos,
            categorias,
            categoria,
            relacionados
        })
    },
    search: (req, res) => {
        let result = productos.filter(producto => producto.name.toLowerCase().includes(req.query.search));
        res.render('resultSearch', {
            result,
            productos,
            categorias,
            search: req.query.search
        })
    },
    edit: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        return res.render('productEdit', {
            productos,
            producto,
            categorias
        })
    },
    update: (req, res) => {
        const { name, description, price, discount, category, colors } = req.body;
        productos.forEach(producto => {
            if (producto.id === +req.params.id) {
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
        return res.render('listaProductsAdmin', {
            productos,
            categorias
            })
    },
    categoriasProduct: (req, res) => {
        let resultado = productos.filter(producto => producto.category === req.params.title);
            let categoria = categorias.filter(categoria => categoria.title === req.params.title);
            return res.render('categorias', {
                resultado,
                categorias,
                categoria,
                productos,
                title: req.params.title,
            })
    },
    remove: (req, res) => {
        productos = productos.filter((producto) => producto.id !== +req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 2), "utf-8")
        res.redirect("/");
    },
    productos: (req, res) => {
        res.render('vistaProduct', {
            productos,
            categorias
        })
    }
}