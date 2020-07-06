'use strict';
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');


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
   return queryInterface.bulkInsert('User', [
     {
       id: uuidv4(),
       username: 'admin',
       password:  md5('admin'),
       name: 'Usuário ADMIN',
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('User', null , {});
  }
};
