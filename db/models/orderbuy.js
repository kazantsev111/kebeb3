'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderbuy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Client, Order }) {
      this.belongsTo(Client, { foreignKey: 'id_client' })
      this.belongsTo(Order, { foreignKey: 'id_order' })
    }
  }
  Orderbuy.init({
    delivery: DataTypes.BOOLEAN,
    adress: DataTypes.STRING,
    id_client: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orderbuy',
  });
  return Orderbuy;
};