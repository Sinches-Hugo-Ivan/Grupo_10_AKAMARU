module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.INTEGER
        },
        cuotas: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING(500)
        },
        categoryId:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);
    
    /* Relaciones */
    Product.associate = models => {
        Product.belongsTo(models.Category,{
            as :'category',
            foreignKey : 'categoryId'
        })

        Product.hasMany(models.Image,{
            as :'imagenes',
            foreignKey : 'productId'
        })
    }
return Product
}