'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('User', [
      {
        id: uuidv4(),
        username: 'admin',
        password:  bcrypt.hashSync('admin' , 10),
        name: 'Usuário ADMIN',
      }
    ]);
  }, 

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null , {});
  }
};
