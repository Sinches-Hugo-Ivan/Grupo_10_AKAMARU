const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const {productos} = require('../data/products_db');

module.exports = {
    register: (req, res) => {
        return res.render('register')
    },

    login: (req, res) => {
        return res.render('login')
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
                errores : errores.mapped()
            } )
        }

    },
    cart: (req, res) => {
        return res.render('cart')
    }

}

