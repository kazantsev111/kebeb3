'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Curers', [{
      name: 'Javad',
      login: 'Nanana',
      password: '111',
      email: '143@mail.ru',
      phone: '+79184678892'
    }, {
      name: 'Eldomar',
      login: '1kollob',
      password: 'Inma',
      email: 'inyga200r@mail.ru',
      phone: '+79999129991'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Curers', null, {});
  }
};
