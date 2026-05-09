'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{msg:"name khong duoc bo trong"},
        len:{args:[2,10],msg:"name phai tu 2-10 ky tu"}
      }
    },
    price: {
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        isFloat:{msg:"Price phai la so"},
        min:{args:[0],msg:"Price phai toi thieu la 0"}
      }
    },
    quantity:DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status:{
      type:DataTypes.TINYINT(1),
      allowNull:false,
      defaultValue:0,
      validate:{
        isIn:{
          args:[[0,1]],
          msg:"Status phai la 0 hoac 1"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};