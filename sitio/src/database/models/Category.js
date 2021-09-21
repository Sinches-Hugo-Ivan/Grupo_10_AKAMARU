module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
            //dafaultValue: null
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    /* Relaciones */
    Category.associate = models => {
        Category.hasMany(models.Product,{
            as :'producto',
            foreignKey : 'categoryId'
        });
    }

    return Category;
}