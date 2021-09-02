const path = require('path');
const fs = require('fs');
const users = require('../data/users_db');
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

    processRegister : (req,res) => {
        const errors = validationResult(req);


        if(errors.isEmpty()){
            let nuevoUsuario = {
                id : users.length > 0 ? users[users.length - 1].id + 1 : 1, //id del usuario para ubicarlo en el JSON.
                name : req.body.name, 
                surname : req.body.surname,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 12),
                date : req.body.date,
                genero : req.body.genero
            }
            users.push(nuevoUsuario); //Agrego el usuario al final del array
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users,null,2), 'utf-8');
            res.redirect('/');
            } else {
                res.render("register", {
                    errors : errors.mapped()
                })
            }
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

