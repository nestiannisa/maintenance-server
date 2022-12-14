'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      section.hasMany(models.bagian)
      section.hasMany(models.jenis_perbaikan)
      // section.hasMany(models.problem)
      // section.hasMany(models.penyebab)

    }
  }
  section.init({
    nama: DataTypes.STRING,
    value: DataTypes.STRING,
    index: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'section',
  });
  return section;
};