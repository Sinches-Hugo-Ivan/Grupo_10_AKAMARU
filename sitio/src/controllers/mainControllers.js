const productos = require('../data/products_db')
const categorias = require('../data/categories_db');
let categoria ;


module.exports = {
    index : (req,res) => {
        return res.render('home', {
            categorias,
            productos  
        })
    },
   
}