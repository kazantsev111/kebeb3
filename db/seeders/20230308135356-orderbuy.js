'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orderbuys', [{
      delivery: false,
      adress: '82.223.22; 71.213.31',
      id_client: 1,
      id_order: 1
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orderbuys', null, {});
  }
};
