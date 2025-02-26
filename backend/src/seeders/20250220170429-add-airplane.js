'use strict';
const {Op} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber:"airbus 380",
        capacity:900,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"boeing777",
        capacity:600,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"indico 98",
        capacity:750,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Airplanes',
      {
      [Op.or]:[
        {modelNumber:"airbus 380"},
        {modelNumber:"boeing777"}
      ]})
  }
};
