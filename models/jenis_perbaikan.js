'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenis_perbaikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jenis_perbaikan.belongsTo(models.section);
    }
  }
  jenis_perbaikan.init({
    sectionId: DataTypes.INTEGER,
    Value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jenis_perbaikan',
  });
  return jenis_perbaikan;
};