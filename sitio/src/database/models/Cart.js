module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId:{
            type: dataTypes.INTEGER,
        },
        userId : {
            type: dataTypes.INTEGER,
        },
        productId : {
            type: dataTypes.INTEGER,
        },
        quantity: {
            type: dataTypes.INTEGER,
        },

    };
    let config = {
        tableName: 'cart',
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = models => {
        Cart.belongsTo(models.Product,{
            as :'product',
            foreignKey : 'productId'
        })
        Cart.belongsTo(models.Order,{
            as :'orders',
            foreignKey : 'orderId',
            onDelete : 'cascade'
        })
    }
    return Cart;
}