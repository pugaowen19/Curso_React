'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,  {
        foreignKey: 'userId'
     });
    }
  }
  invoice.init({
    amount: DataTypes.FLOAT ,
    date: DataTypes.DATEONLY,
    userId: {type: DataTypes.INTEGER ,references: {
      //model: user, 
      key: 'id'
    }}
  }, {
    sequelize,
    modelName: 'invoice',
  });
  return invoice;
};