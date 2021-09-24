// const productos = require('../data/products_db')
// const categorias = require('../data/categories_db');
// let categoria ;

const db = require("../database/models");


module.exports = {
    index : (req,res) => {
        let categorias = db.Category.findAll();
        let productos = db.Product.findAll({
            include : [
                {
                    association : 'imagenes',
                },
                {
                    association : 'category',
                }
            ]
        })
        Promise.all([categorias,productos])
        .then(([categorias,productos]) =>{
        return res.render('home',{
            categorias,
            productos  
            })
            // return res.send(resultado);
        }).catch(error => console.log(error));


    },
   
}