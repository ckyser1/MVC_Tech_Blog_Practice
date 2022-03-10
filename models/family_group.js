const { Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

class Family_group extends Model {}



Family_group.init(
    
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        family_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        family_members: {
            type: DataTypes.STRING
        },
    },
        {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelname: 'family_group',
    
    });

module.exports = Family_group;