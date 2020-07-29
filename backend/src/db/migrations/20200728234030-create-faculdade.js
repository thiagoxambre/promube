'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Faculdade', {
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
      bairroId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Bairro',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cidadeId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Cidade',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',

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