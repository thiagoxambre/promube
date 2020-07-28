const Sequelize = require('sequelize');
const models = require('../models');
const { Op } = Sequelize;


module.exports.getCidadesPorNome = async (nome) => {
    return await models.Cidade.findAll({
        where: {
            nome: {
                [Op.iLike]: `%${nome}%`
            },
        },
        order: [['nome','ASC']],
        limit: 10
    });
};
