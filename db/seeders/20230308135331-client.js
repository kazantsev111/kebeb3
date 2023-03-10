'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [{
      name: 'Vasya',
      login: 'DonDon',
      password: '123',
      email: '123@mail.ru',
      phone: '+79122378892'
    }, {
      name: 'DonAmar',
      login: '12kol',
      password: 'Intima',
      email: 'intimYslyga200r@mail.ru',
      phone: '+79999999991'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Clients', null, {});
  }
};
