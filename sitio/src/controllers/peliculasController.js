const bcrypt = require('bcryptjs');

const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
   
    cine: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('cine',{
                categorias
            })
        })
    },

    peli1: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieRescatePrincesaNieve',{
                categorias
            })
        })
    },

    peli2: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieDemonSlayer',{
                categorias
            })
        })
    },

    peli3: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieDragonBallSuperBroly',{
                categorias
            })
        })
    },

    peli4: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieEvangelion30',{
                categorias
            })
        })
    },

    peli5: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieMyHeroAcademia',{
                categorias
            })
        })
    },

    peli6: (req, res) => {
        db.Category.findAll()
        .then(categorias =>{
            return res.render('peliculas/movieViolet',{
                categorias
            })
        })
    },

}

