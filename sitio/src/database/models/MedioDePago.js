module.exports = (sequelize, dataTypes) => {
    let alias = 'MedioDePago';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        description: {
            type: dataTypes.STRING(100)
        },

    };
    let config = {
        tableName: 'mediosdepagos',
        timestamps: false
    };
    const MedioDePago = sequelize.define(alias, cols, config)

    return MedioDePago;
}