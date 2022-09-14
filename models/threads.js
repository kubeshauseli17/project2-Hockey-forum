'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class threads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  threads.init({
    user_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'threads',
  });
  return threads;
};