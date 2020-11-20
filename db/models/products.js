const { Sequelize, DataTypes } = require ('sequelize');
const db = require('../index.js');

const Product = db.define('Product', {
  timestamps: false,
  createdAt: false,
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  description: DataTypes.STRING,
  title: DataTypes.STRING,
  brand: DataTypes.STRING,
  category: {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    player_Count: DataTypes.STRING,
  },
  specs: {
    part_Number: DataTypes.STRING,
    GTIN: DataTypes.INTEGER,
  },
})

module.exports = Product;
