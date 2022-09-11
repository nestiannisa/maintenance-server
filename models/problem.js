'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      problem.belongsTo(models.subBagian)

    }
  }
  problem.init({
    subBagianId: DataTypes.INTEGER,
    Value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'problem',
  });
  return problem;
};