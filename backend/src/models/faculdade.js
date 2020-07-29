'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculdade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Faculdade.belongsTo(models.Cidade, { foreignKey: 'cidadeId' });
      Faculdade.belongsTo(models.Bairro, { foreignKey: 'bairroId' });
    }
  };
  Faculdade.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    razaoSocial: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nomeFantasia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    complemento: DataTypes.STRING,
    bairroId: DataTypes.UUID,
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cidadeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Faculdade',
  });
  return Faculdade;
};