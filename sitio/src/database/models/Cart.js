module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
            // dafaultValue: null
        },
        total: {
            type: dataTypes.INTEGER,
        },
        fechaCompra : {
            type : dataTypes.DATE,
        },
        mediosDePagoId : {
            type: dataTypes.INTEGER,
        },
        userId : {
            type: dataTypes.INTEGER,
        },
        productId : {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tableName: 'cart',
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config)

    return Cart;
}