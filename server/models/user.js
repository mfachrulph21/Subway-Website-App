'use strict';
const {
  Model
} = require('sequelize');
const { createHashFromPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, { foreignKey : "userId" })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      allowNull:false,
      unique: {
        msg: 'Email is already exist'
      },
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Fill with email format is required'
        }
      }
    },
    password:{
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        len: {
          args: [5],
          msg: 'Password length minimum is 5 characters'
        }
      }
    }, 
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance, options) => {
    instance.password = createHashFromPassword(instance.password)
  })

  return User;
};