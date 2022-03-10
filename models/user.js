const { Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  late_name: {
    type: DataTypes.STRING,
    allowNull: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    }
  },

  age: {
    type: DataTpyes.STRING,
    allowNull: true
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false
  },

  health_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }, 
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  });

module.exports = User;