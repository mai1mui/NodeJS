'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product,{
        foreignKey:"categoryId",
        as:"category",
        onDelete:"RESTRICT",
        onUpdate:"CASCADE"
      })
    }
  }
  Category.init({
    name: DataTypes.STRING,
    status: DataTypes.TINYINT(1)
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};