'use strict';

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

    let dataItemsIngredients = require('../data/itemIngredient.json')
    dataItemsIngredients.forEach((el) => {
      delete el.id
      el.createdAt = new Date(),
      el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('ItemIngredients', dataItemsIngredients, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelet('ItemIngredients', null, {})
  }
};
