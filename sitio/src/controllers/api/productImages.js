const fs = require('fs');
const path = require('path')
const db = require('../../database/models');
const getURLBase = req => `${req.protocol}://${req.get('host')}`;

module.exports = {
    create: async (req, res) => {
        console.log(req.body)
        try {
            const producto = await db.Product.create({
                ...req.body,

            })
            let response = {
                status: 201,
                meta: {
                    url: getURLBase(req) + '/api/products/' + producto.id
                },
                message: 'Producto agregado con éxito'
            }
            return res.status(201).json(response)
        } catch (error) {
            return res.status(400).json({
                status: 400,
                messages: error.errors.map(error => error.message)
            })
        }
    },
    deleteImages: async (req, res) => {
        try {
            let image = await db.Image.findByPk(req.params.id)

            fs.existsSync(path.join(__dirname, '../../public/images/' + image.file)) ? fs.unlinkSync(path.join(__dirname, '../../public/images/' + image.file)) : null

            await db.Image.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            let images = await db.Image.findAll({
                where: {
                    productId: image.productId
                }
            })
            let response = {
                status: 200,
                message: 'Imagen eliminada con éxito',
                images
            }
            return res.status(201).json(response)

        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error
            })
        }
    },
    addImages: async (req, res) => {
        console.log(req.files)
        try {
            let files = req.files.map(image => {
                let img = {
                    name: image.filename,
                    productId: req.params.id
                }
                return img
            })
            await db.Image.bulkCreate(files, { validate: true })
            let images = await db.Image.findAll({
                where: {
                    productId: req.params.id 
                }
            })
            let response = {
                status: 200,
                message: 'Imagenes agregadas con éxito',
                images
            }
            return res.status(201).json(response)
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error
            })
        }
    }
}