const models = require('../models');

module.exports.cadastrar = async (faculdade,transaction) => await models.Faculdade.create(faculdade, { transaction });

module.exports.atualizarPorId = async (faculdade,transaction) => {
    return await models.Faculdade.update(
        {...faculdade},
        {
            where: {
                id: faculdade.id,
            },
        },
        {
            transaction,
        },
    );
};

module.exports.deletarPorId = async (id, transaction) => {
    models.Faculdade.destroy(
        {
            where : {
                id: id,
            },
        },
        { transaction },
    );
};

module.exports.getFaculdadePorId = async (id) => {
    return await models.Faculdade.findOne(
        {
            where: {
                id: id,
            },
        },
    );
};

module.exports.getFaculdadePorCNPJ  = async (cnpj) => {
    return await models.Faculdade.findOne(
        {
            where: {
                cnpj: cnpj,
            },
        },
    );
};

module.exports.findAll  = async () => {
    return await models.Faculdade.findAll();
};
