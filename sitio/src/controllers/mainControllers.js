const productos = require('../data/products_db')


module.exports = {
    index : (req,res) => {
        return res.render('home', {
            productos  
        })
    },
   
}