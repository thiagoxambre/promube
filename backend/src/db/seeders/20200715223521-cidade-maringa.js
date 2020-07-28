'use strict';
const { v4: uuidv4 } = require('uuid');
const Uf = require('../../enums/estados-enum');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cidade', [
      {
        id: '347f1fd7-07f0-49a5-a80c-7a1a07e16b95',
        nome: 'Maringá',
        uf:  Uf.PR,
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
    return queryInterface.bulkDelete('Cidade', null , {});
  }
};
