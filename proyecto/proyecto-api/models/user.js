'use strict';

const {Model} = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../models');

function hashPassword(pass){
  let saltRounds = 12;
  return bcrypt.hashSync(pass, saltRounds)
}

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.invoice, {
        foreignKey: 'userId',
      });
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: {type : DataTypes.STRING , unique: true},
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      },
      beforeUpdate: (user, options) => {
        user.password = hashPassword(user.password);
      }
    },
    
    sequelize,
    modelName: 'user',
  });
  return user;
};