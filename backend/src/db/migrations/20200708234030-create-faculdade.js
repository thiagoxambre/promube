'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Faculdades', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      razaoSocial: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      nomeFantasia: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      logradouro: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      complemento: Sequelize.DataTypes.STRING,
      bairro: Sequelize.DataTypes.STRING,
      cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Faculdades');
  }
};