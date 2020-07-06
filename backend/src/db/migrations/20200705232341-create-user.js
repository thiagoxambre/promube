'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const UserTable = queryInterface.createTable('User', {
      id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          primaryKey: true,
      },
      username: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
          unique: true,
      },
      password: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
      },
      name: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
      }
    });
    return UserTable;
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('User');
  }
};
