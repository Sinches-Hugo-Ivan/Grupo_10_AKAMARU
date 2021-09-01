const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const {productos} = require('../data/products_db');
const categorias = require('../data/categories_db');


module.exports = {
    register: (req, res) => {
        return res.render('register',{
            categorias
        })
    },

    login: (req, res) => {
        return res.render('login',{
            categorias
        })
    },
    processLogin: (req,res) =>{
        let errores = validationResult(req);
        const {email, password} = req.body;
        if(errores.isEmpty()){
            let usuario = usuarios.find(usuario => usuario.email == email)
            req.session.userLogin = {
            id : usuario.id,    
            name : usuario.firstName,
            }
            return res.redirect('/');
        }else{
            return res.render('login',{
                productos,
                categorias,
                errores : errores.mapped()
            } )
        }

    },
    cart: (req, res) => {
        return res.render('cart',{
            categorias
        })
    }

}

