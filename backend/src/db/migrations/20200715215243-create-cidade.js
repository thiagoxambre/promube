'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CidadeTable = queryInterface.createTable('Cidade', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
    return CidadeTable;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cidade');
  }
};
