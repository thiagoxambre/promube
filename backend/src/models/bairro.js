'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bairro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bairro.belongsTo(models.Cidade, { foreignKey: 'cidadeId' });
      Bairro.hasMany(models.Faculdade, { foreignKey: 'bairroId' });
    }
  };
  Bairro.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    cidadeId: DataTypes.UUID
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Bairro',
  });
  return Bairro;
};