const db = require("../../database/models");
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;
const Op = db.Sequelize.Op;

const productVerify = (carrito,id) => {
    let index = -1;
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id == id){ 
            index = i;
            break
        }
    }
    return index
}


module.exports = {
    show : (req,res) => {
        let response = {
            meta: {
                link: getURL(req)
            },
            data: req.session.cart
        }
        return res.status(200).json(response)
    },
    add : async (req,res) => {
        try {
            let product = await db.Product.findByPk(req.params.id,{
                include : ['category', 'imagenes']
            })
            let item = {
                id: product.id,
                nombre: product.name,
                imagen: product.imagenes[0].name,
                categoria: product.category.name,
                cantidad: 1,
                precio: product.price,
                total: product.price,
            }

            if(req.session.cart.length === 0){
                let order = await db.Order.findOne({
                    where : {
                        userId : req.session.userLogin.id,
                        status: "pending"
                    }
                })

                if(!order){
                    order = await db.Order.create({  //si no tiene crea una orden
                        userId : req.session.userLogin.id,
                        status: "pending" 
                    })
                }
                item = {
                    ...item, //spread operator
                    orderId: order.id
                }
                req.session.cart.push(item)

            }else {
                let index = productVerify(req.session.cart,req.params.id)
                let order = await db.Order.findOne({
                    where : {
                        userId : req.session.userLogin.id,
                        status : 'pending'
                    }
                });
                if(index === -1){
                    item = {
                        ...item,
                        orderId: order.id
                    }
                    req.session.cart.push(item)
                }else{
                    let product = req.session.cart[index]
                    product.cantidad++
                    product.total = product.cantidad * product.precio
                    req.session.cart[index] = product
                    
                }
            }

            
            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)

        }catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }

    },
    remove : async (req,res) => {

        try {
            let index = productVerify(req.session.cart,req.params.id)
            let product = req.session.cart[index]

            if(product.cantidad > 1){
                product.cantidad--
                product.total = product.cantidad * product.precio
                req.session.cart[index] = product   

                /* disminuye la cantidad del producto seleccinado */
                await db.Cart.update(
                    {
                        quantity : product.cantidad
                    },
                    {
                        where : {
                            orderId : product.orderId,
                            productId : product.id
                        }
                    }
                )

            }else{
                req.session.cart.splice(index,1);

                /* elimina el producto de la tabla carrito */
                await db.Cart.destroy({
                    where : {
                        productId : product.id,
                        orderId : product.orderId
                    }
                })
            }

            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)

        }
    },
    empty : async (req,res) => {

        try {
            await db.Order.destroy({
                where : { 
                    userId : req.session.userLogin.id,
                    status : 'pending'
                }
            })

            req.session.cart = [];
            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.cart
            }
            return res.status(200).json(response)
        } catch (error) {
            console.error(error)
            return res.status(500).json(error)

        }
      

    }

}