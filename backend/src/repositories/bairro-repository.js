const Sequelize = require('sequelize');
const models = require('../models');
const { Op } = Sequelize;


module.exports.getBairrosPorNome = async (nome) => {
    return await models.Bairro.findAll({
        where: {
            nome: {
                [Op.iLike]: `%${nome}%`
            },
        },
        order: [['nome','ASC']],
        limit: 10
    });
};

module.exports.getBairrosDaCidadePorNome = async (cidadeId, nome) => {
    return await models.Bairro.findAll({
        where: {
            [Op.and]: [
                { cidadeId },
                {
                    nome: {
                        [Op.iLike]: `%${nome}%`,
                    },
                },
            ],
        },
        order: [['nome','ASC']],
        limit: 10
    });
};