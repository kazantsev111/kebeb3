'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orderbuys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delivery: {
        type: Sequelize.BOOLEAN
      },
      adress: {
        type: Sequelize.STRING
      },
      id_client: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
      		key: 'id',
      }
      },
      id_order: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
      		key: 'id',
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orderbuys');
  }
};