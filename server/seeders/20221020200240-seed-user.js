'use strict';

const { createHashFromPassword } = require('../helpers/bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let dataUser = require('../data/user.json')
    dataUser.forEach((el) => {
      delete el.id
      el.createdAt = new Date(),
      el.updatedAt = new Date(),
      el.password = createHashFromPassword(el.password)
    })

    await queryInterface.bulkInsert('Users', dataUser, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {})
  }
};
