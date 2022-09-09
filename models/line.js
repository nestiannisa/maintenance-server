'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  line.init({
    Name: DataTypes.STRING,
    Value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'line',
  });
  return line;
};