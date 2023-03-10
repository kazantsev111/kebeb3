'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      title: 'Gamburger',
      imgpath: 'img/1.jpg',
      location: '82.223.23; 71.213.32',
      price: 1500,
      discont: 400,
      id_curer: 1
    }, {
      title: 'Doshirak',
      imgpath: 'img/2.jpg',
      location: '82.203.23; 71.673.32',
      price: 45,
      discont: 35,
      id_curer: 2
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
