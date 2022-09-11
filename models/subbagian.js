'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subBagian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subBagian.belongsTo(models.bagian)
      subBagian.hasMany(models.problem)
      subBagian.hasMany(models.penyebab)
    }
  }
  subBagian.init({
    bagianId: DataTypes.INTEGER,
    Value: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subBagian',
  });
  return subBagian;
};