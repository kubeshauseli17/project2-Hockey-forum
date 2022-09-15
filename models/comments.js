'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.belongsTo(models.users)
      models.comments.belongsTo(models.threads)
    }
  }
  comments.init({
    user_name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    threadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};