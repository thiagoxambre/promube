'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Bairro', [
      {
        id: uuidv4(),
        nome: 'Centro',
        cidadeId:  '347f1fd7-07f0-49a5-a80c-7a1a07e16b95',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'Jardim Vila Bosque',
        cidadeId:  '347f1fd7-07f0-49a5-a80c-7a1a07e16b95',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ]);

  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Bairro', null , {});
  }
};
