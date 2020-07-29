'use strict';

const Uf = require('../enums/estados-enum')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cidade.hasMany(models.Bairro, { foreignKey: 'cidadeId' });
      Cidade.hasMany(models.Faculdade, { foreignKey: 'cidadeId' });
    }
  };
  Cidade.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
      uf: DataTypes.ENUM(Uf) 
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Cidade',
  });
  return Cidade;
};