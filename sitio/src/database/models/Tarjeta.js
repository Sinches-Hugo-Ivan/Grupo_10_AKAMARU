module.exports = (sequelize, dataTypes) => {
    let alias = 'Tarjeta';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nroTarjeta: {
            type: dataTypes.INTEGER,
        },
        userId: {
            type: dataTypes.INTEGER,
        },
        mediosDePagosId: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'tarjetas',
        timestamps: false
    };
    const Tarjeta = sequelize.define(alias, cols, config)

    /* Relaciones */
    // Tarjeta.associate = models => {
    //     Tarjeta.belongsTo(models.User,{
    //         as :'usuario',
    //         foreignKey : 'userId'
    //     });
    // }
    return Tarjeta;
}