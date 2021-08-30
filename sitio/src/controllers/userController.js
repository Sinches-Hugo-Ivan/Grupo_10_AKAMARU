const path = require('path');
const fs = require('fs');
const users = require('../data/users_db');
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');

module.exports = {
    // r e g i s t e r 
    register : (req, res) => {
        res.render('register')
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
                gender : req.body.gender
            }
            users.push(nuevoUsuario); //Agrego el usuario al final del array
            fs.writeFileSync(path.join(__dirname, '../data/users_db.json'), JSON.stringify(users,null,2), 'utf-8');
            res.redirect('/');
            } else {
                res.render("register", {
                    errors : errors.mapped()
                })
            }
    },

    login: (req, res) => {
        return res.render('login')
    },

    cart: (req, res) => {
        return res.render('cart')
    }

}

