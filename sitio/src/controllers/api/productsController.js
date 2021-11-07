const fs = require('fs');
const path = require('path')
const db = require('../../database/models');
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;
const getURLBase = req => `${req.protocol}://${req.get('host')}`;
// const {Op} = require('sequelize');
const Op = db.Sequelize.Op;


const throwError = (res,error) => {
    return res.status(error.status || 500).json({
        status : error.status || 500,
        message : error.message
    })
}

module.exports = {
    list : async (req,res) => {
        let offset = +req.query.limit * (+req.query.current -1) ; //calculo cuantos items tengo que saltar
        try{
            const total = await db.Product.findAll()
            const products = await db.Product.findAll({
                limit : +req.query.limit || 10,
                offset : offset || 0, // salta de forma dinamica a cada pagina del paginador
                include : [
                    {association : "category"},
                    {association : "imagenes"},
                ]
            })
            let response = {
                status : 200,
                meta : {
                    total : total.length,
                    // limit : filter.length,
                    url : getURL(req)
                },
                data : products
                // data: filter
            }
            return res.status(200).json(response)
        } catch (error) {
           throwError(res,error)
        }
    },
    search : async (req,res) => {
        console.log(req.query.search)
        try {  
            let result = await db.Product.findAll({
                where : {
                [Op.or] : [
                    {
                        name :  {[Op.substring] : req.query.search}
                    },
                    {
                        description : {[Op.substring] : req.query.search}
                    }
                ]
                },
            include : [
                {association : 'imagenes'}  
            ]
            })
            // console.log(result);
            let response = {
                status : 200,
                meta : {
                    total : result.length,
                    url : getURL(req)
                },
                data : result
            }
            console.log(response);
            return res.status(200).json(response)
        } catch (error) {
            throwError(res,error)
        }
    },
}