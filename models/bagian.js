'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bagian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bagian.belongsTo(models.section)
      bagian.hasMany(models.problem)
    }
  }
  bagian.init({
    sectionId: DataTypes.INTEGER,
    Value: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bagian',
  });
  return bagian;
};