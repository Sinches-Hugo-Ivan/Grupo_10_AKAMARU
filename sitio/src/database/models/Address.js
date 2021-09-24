module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: dataTypes.STRING(255)
        },
        number: {
            type: dataTypes.INTEGER,
        },
        city:{
            type: dataTypes.STRING(255)
        },
        state: {
            type: dataTypes.STRING(255)
        },
        cp: {
            type: dataTypes.INTEGER,
        },
        cpa: {
            type: dataTypes.STRING(20)
        }
    };
    let config = {
        tableName: 'address',
        timestamps: false
    };
    const Address = sequelize.define(alias, cols, config)
        /* Relaciones */
        Address.associate = models => {
            Address.hasMany(models.User,{
                as :'users',
                foreignKey : 'addressId'
            })
        }

    return Address;
}