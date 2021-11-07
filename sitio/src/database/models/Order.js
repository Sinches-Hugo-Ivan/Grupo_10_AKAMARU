module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status:{
            type: dataTypes.STRING(255),
        },
        userId : {
            type: dataTypes.INTEGER,
        },
        total: {
            type: dataTypes.DECIMAL,
        }

    };
    let config = {
        tableName: 'orders',
        timestamps: false
    };
    const Order = sequelize.define(alias, cols, config)

    Order.associate = models => {
        Order.belongsTo(models.User,{
            as :'users',
            foreignKey : 'userId'
        })
        Order.hasMany(models.Cart,{
            as :'carts',
            foreignKey : 'orderId',
            // onDelete : 'cascade'
        })
    }

    return Order;
}