'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data.init({
    Section: DataTypes.STRING,
    No_Mesin: DataTypes.INTEGER,
    Nama_Mesin: DataTypes.STRING,
    Tindakan_Perbaikan: DataTypes.STRING,
    Catatan: DataTypes.STRING,
    Gejala_Kerusakan: DataTypes.STRING,
    Bagian: DataTypes.STRING,
    Problem: DataTypes.STRING,
    Penyebab: DataTypes.STRING,
    Jenis_Perbaikan: DataTypes.STRING,
    category: DataTypes.STRING,
    part: DataTypes.STRING,
    Running_Hours: DataTypes.INTEGER,
    Durasi: DataTypes.INTEGER,
    subBagian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};