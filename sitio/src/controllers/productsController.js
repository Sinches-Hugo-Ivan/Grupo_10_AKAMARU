const { validationResult } = require('express-validator');
const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    add: (req, res) => {
        db.Category.findAll()
            .then(categorias => {
                return res.render('productAdd', {
                    categorias,
                })
            }).catch(error => console.log(error))

    },

    save: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { name, description, price, cuotas, categoryId, stock } = req.body;
            db.Product.create({
                ...req.body,
                name: name.trim(),
                description: description.trim(),
                price,
                stock,
                cuotas,
                categoryId,
            }).then(product => {

                if (req.files) {
                    var images = [];
                    var imagenes = req.files.map(imagen => imagen.filename);
                    imagenes.forEach(img => {
                        var image = {
                            name: img,
                            productId: product.id
                        }
                        images.push(image)
                    });

                    db.Image.bulkCreate(images, { validate: true })
                        .then(() => { console.log('imagenes agregadas'); res.redirect('/products/vistaAdmin') })
                }


            }).catch(error => console.log(error))

        } else {
            db.Category.findAll()
                .then(categorias => {
                    return res.render('productAdd', {
                        categorias,
                        errors: errors.mapped(),
                        old: req.body
                    })
                }).catch(error => console.log(error))
        }
    },

    detail: (req, res) => {
        let categorias = db.Category.findAll();
        let producto = db.Product.findByPk(req.params.id, {
            include: [
                {
                    association: 'imagenes',
                },
                {
                    association: 'category',
                }
            ]
        })
        Promise.all([categorias, producto])
            .then(([categorias, producto]) => {
                // return res.send(producto); 
                db.Product.findAll({
                    where: {
                        id: { [Op.ne]: producto.id },
                        categoryId: producto.category.id,
                    },
                    include: [
                        { association: 'imagenes' },
                        { association: 'category' }
                    ]
                }).then((relacionados) => {
                    return res.render('detail', {
                        relacionados,
                        producto,
                        categorias
                    })
                })
            }).catch(error => console.log(error))
    },
    search: (req, res) => {
        let categorias = db.Category.findAll();
        let result = db.Product.findAll({
            where: {
                [Op.or]: [
                    {
                        name: { [Op.substring]: req.query.search }
                    },
                    {
                        description: { [Op.substring]: req.query.search }
                    }
                ]
            },
            include: [
                { association: 'imagenes' }
            ]
        })
        Promise.all([categorias, result])
            .then(([categorias, result]) => res.render('resultSearch', {
                result,
                categorias,
                search: req.query.search
            })).catch(error => console.log(error))
    },
    edit: (req, res) => {
        let categorias = db.Category.findAll();
        let producto = db.Product.findByPk(req.params.id, {
            include: [
                { association: 'imagenes' },

            ]
        }
        );
        Promise.all([categorias, producto])
            .then(([categorias, producto]) => {
                return res.render('productEdit', {
                    categorias,
                    producto,
                })
            })

    },
    update: (req, res) => {
        let categorias = db.Category.findAll();
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { name, description, price, cuotas, categoryId, stock } = req.body;
            db.Product.update(
                {
                    ...req.body,
                    name: name.trim(),
                    description: description.trim(),
                    price,
                    cuotas,
                    categoryId,
                    stock
                },
                {
                    where: {
                        id: req.params.id
                    }
                },
            ).then(() => res.redirect('/products/vistaAdmin'))
                .catch(error => console.log(error))
        }
        else {
            let producto = db.Product.findByPk(req.params.id, {
                include: [
                    { association: 'imagenes' },

                ]
            })
            Promise.all([categorias, producto])
                .then(([categorias, producto]) => {
                    return res.render('productEdit', {
                        categorias,
                        producto,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
                .catch(error => console.log(error))
        }
    }
    ,
    vistaAdmin: (req, res) => {
        {
            let categorias = db.Category.findAll();
            let productos = db.Product.findAll({
                include: [
                    {
                        association: 'imagenes',
                    },
                    {
                        association: 'category',
                    }
                ]
            })
            Promise.all([categorias, productos])
                .then(([categorias, productos]) => {
                    return res.render('listaProductsAdmin', {
                        categorias,
                        productos
                    })
                    // return res.send(resultado);
                }).catch(error => console.log(error));

        }
    },
    categoriasProduct: (req, res) => {
        let categoria = db.Category.findByPk(req.params.id);
        let categorias = db.Category.findAll();
        let resultado = db.Product.findAll({
            where: {
                categoryId: req.params.id
            },
            include: [
                { association: 'imagenes' },
                { association: 'category' },
            ]
        })
        Promise.all([categorias, resultado, categoria])
            .then(([categorias, resultado, categoria]) => {
                // return res.send(resultado);
                return res.render('categorias', {
                    resultado,
                    categorias,
                    categoria,

                })
            }).catch(error => console.log(error))
    },
    remove: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            },
            include: [
                { association: 'imagenes' },
                { association: 'category' },
            ]
        }).then(() => res.redirect('/products/vistaAdmin'))
            .catch(error => console.log(error))
    },
    productos: (req, res) => {
        let categorias = db.Category.findAll();
        let productos = db.Product.findAll({
            include: [
                {
                    association: 'imagenes',
                },
                {
                    association: 'category',
                }
            ]
        })
        Promise.all([categorias, productos])
            .then(([categorias, productos]) => {
                return res.render('vistaProduct', {
                    categorias,
                    productos
                })
                // return res.send(resultado);
            }).catch(error => console.log(error));

    }
}