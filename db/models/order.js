'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Curer, Orderbuy }) {
      this.belongsTo(Curer, { foreignKey: 'id_curer' })
      this.hasOne(Orderbuy, { foreignKey: 'id_order' })
    }
  }
  Order.init({
    title: DataTypes.STRING,
    imgpath: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discont: DataTypes.INTEGER,
    id_curer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};