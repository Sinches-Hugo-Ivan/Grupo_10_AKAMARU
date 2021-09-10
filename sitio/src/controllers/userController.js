const path = require('path');
const fs = require('fs');
const users = require('../data/users_db');
let generos = require('../data/generos_db');

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
                firstName : req.body.firstName, 
                lastName : req.body.lastName,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 12),
                fecha : req.body.date,
                genero : req.body.genero,
                image: "default-user.jpg",
                rol : "user"
            }
            console.log(errors)
            users.push(nuevoUsuario); //Agrego el usuario al final del array
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users,null,2), 'utf-8');
            res.redirect('/');
            } else {
                  res.render("register", {
                    categorias,
                    errors : errors.mapped()
                }) 
            }
    },

    login: (req, res) => {
        return res.render('login',{
            categorias
        })
    },
    processLogin: (req, res) => {
        let errores = validationResult(req);
        const { email, password, recordar } = req.body;
        if (errores.isEmpty()) {
            let user = users.find(user => user.email === email)
            req.session.userLogin = {
                email: user.email,
                imagen: user.image,
                id: user.id,
                name: user.firstName,
                lastname: user.lastName,
                rol: user.rol,
                genero : user.genero,
                fecha : user.fecha,
            }
            let userLogin = req.session.userLogin;
            if(recordar){
                req.session.userLogin['cookie'] = "on"
                res.cookie('akamaru', req.session.userLogin, {
                    maxAge: 300000 // duracion de la cookie 5 min
                })
            }else{
                req.session.userLogin['cookie'] = "off"
            };
            res.redirect('/');
        }else {
            return res.render('login', {
                productos,
                categorias,
                errores: errores.mapped()
            });
        }
    },
    cerrarSession: (req,res) =>{
        req.session.destroy(); //destruye la sesion
        res.cookie('akamaru',null,{maxAge: -1}) // destruye la cookie
        return res.redirect("/");
    },
    cart: (req, res) => {
        return res.render('cart',{
            categorias
        })
    },
    vistaPerfil:(req,res) =>{
        res.render('vistaPerfil',{
            session : req.session.userLogin,
            generos,
            categorias,
        });
    },
    editperfil: (req,res) =>{
        console.log(req.session.userLogin);
        res.render('editPerfil',{
            session : req.session.userLogin,
            generos,
            categorias,
        })
    },
    updateperfil: (req, res) => {
        let cookie = req.session.userLogin.cookie; // guardo la cookie(que puede ser on,off) para mantenerla si esta en 'on'
        console.log(req.body);
        let errors = validationResult(req);
        if (errors.isEmpty()){
            const {nombre, apellido, fecha, genero, imagen, correo} = req.body;
            users.forEach(usuario => {
                if(usuario.email === req.body.correo){
                    if(req.file){
                        usuario.image = req.file.filename;
                    }else{
                        usuario.image = usuario.image;
                    }
                    usuario.email = correo,
                    usuario.firstName= nombre,
                    usuario.lastName = apellido,
                    usuario.fecha = fecha,
                    usuario.genero = genero,
                    usuario.image
                    req.session.userLogin = {
                        email: correo,                
                        name: nombre,
                        lastname: apellido,
                        fecha: fecha,
                        genero: genero,
                        cookie : cookie,
                        imagen: usuario.image,
                        rol : usuario.rol
                    }
                    if(req.session.userLogin.cookie === 'on'){
                        console.log('entro');
                        res.cookie('akamaru', req.session.userLogin,{ 
                            maxAge: 300000 // duracion de la cookie 5 min
                        });
                    }
                    console.log(req.session.userLogin)
                }
            });
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2), 'utf-8');
            res.redirect('/')
        }else{
            res.render('editPerfil',{
                errors: errors.mapped(),
                session : req.session.userLogin,
                generos,
                categorias
                })
        }

    }

}

