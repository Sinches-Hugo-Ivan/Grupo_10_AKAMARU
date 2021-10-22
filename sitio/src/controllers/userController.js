const bcrypt = require('bcryptjs');
const { validationResult, body } = require('express-validator');

const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    register: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('register',{
                categorias
            })
        }).catch(error => console.log(error))
    },

    processRegister : (req,res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()){
            let {firstName,lastName,email,password,date,genero} = req.body;
            // return res.send(req.body);
            db.User.create({
                firstname : firstName,
                lastname : lastName,
                email: email,
                password: bcrypt.hashSync(password, 12),
                avatar : "default-user.jpg",
                rol : "user",
                genre : genero, 
                addressId : 1,
                date: date
            })
            res.redirect("login");
        } else {
            db.Category.findAll()
            .then(categorias =>{
                res.render("register", {
                    categorias,
                    errors : errors.mapped()
                }) 
            })

        }
    },

    login: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('login',{
                categorias 
            })
        })
    },

    processLogin: (req, res) => {
        let errores = validationResult(req);
        const { email, password, recordar } = req.body;
        if (errores.isEmpty()) {
            db.User.findOne({
                where : {
                    email
                }
            }).then(user => {
                req.session.userLogin = {
                    id : user.id,
                    email: user.email,
                    name: user.firstname,
                    lastname: user.lastname,
                    rol : user.rol,
                    imagen : user.avatar,
                    genero : user.genre,
                    fecha : user.date 
                }
                console.log(req.session.userLogin);
                res.locals.userLogin = req.session.userLogin;
                console.log(res.locals.userLogin);
                if(recordar){
                    req.session.userLogin['cookie'] = "on"
                    res.cookie('akamaru', req.session.userLogin, {
                        maxAge: 300000 // duracion de la cookie 5 min
                    })
                }else{
                    req.session.userLogin['cookie'] = "off"
                };
                return res.redirect('vistaPerfil')
            })

        }else{
            db.Category.findAll()
            .then(categorias =>{
                return res.render('login',{
                    errores : errores.mapped(),
                    categorias
                })
            })
        }
    },

    cerrarSession: (req,res) => {
        req.session.destroy(); //destruye la sesion
        res.cookie('akamaru',null,{maxAge: -1}) // destruye la cookie
        return res.redirect("/");
    },

    cart: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('cart',{
                categorias
            })
        })
    },

    vistaPerfil:(req,res) =>{
        db.Category.findAll()
        .then(categorias =>{
            return res.render('vistaPerfil',{
                session : req.session.userLogin,
                categorias
            })
        })
    },

    editperfil: (req,res) =>{
        generos = ["Masculino","Femenino","Otro"];
        db.Category.findAll()
        // console.log(req.session.userLogin)
        .then(categorias =>{
            res.render('EditPerfil',{
                session : req.session.userLogin,
                generos,
                categorias
            })
        }).catch(error => console.log(error))
    },

    updateperfil: (req, res) => {
        let cookie = req.session.userLogin.cookie; // guardo la cookie(que puede ser on,off) para mantenerla si esta en 'on'
        console.log(req.body);
        let errors = validationResult(req);
        const {nombre, apellido, genero, correo, fecha} = req.body;
        console.log("------------")
        db.User.findOne({
            where : {
                email : correo,
            }
        }).then((resultado) =>{
            db.User.update(
            {
                firstname : nombre,
                lastname : apellido,
                genre : genero,
                avatar : req.file ? req.file.filename : resultado.avatar,
                date: fecha
            },
            {
                 where : {email : correo }
            });
            req.session.userLogin = {
                email: correo,
                name: nombre,
                lastname: apellido,
                fecha: fecha,
                genero: genero,
                cookie: cookie,
                imagen: req.file ? req.file.filename : resultado.avatar

            }
            if(req.session.userLogin.cookie === 'on'){
                console.log('entro');
                res.cookie('akamaru', req.session.userLogin,{ 
                    maxAge: 300000 // duracion de la cookie 5 min
                });
            }
            console.log(req.session.userLogin)
            return res.redirect('/')
            res.redirect('/')
        }).catch(error => console.log(error))
    }

}

