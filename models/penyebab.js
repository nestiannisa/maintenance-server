'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penyebab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      penyebab.belongsTo(models.section);
    }
  }
  penyebab.init({
    sectionId: DataTypes.INTEGER,
    Value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'penyebab',
  });
  return penyebab;
};