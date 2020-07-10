const faculdadeRepository = require('../repositories/faculdade-repository');
const faculdadeConstant = require('../constants/faculdade-constants');
const models = require('../models');
const faculdadeConstants = require('../constants/faculdade-constants');

module.exports.cadastrar = async (faculdade) => {
    const faculdadeDB = await faculdadeRepository.getFaculdadePorCNPJ(faculdade.cnpj);
    if (faculdadeDB) {
        throw new Error (faculdadeConstant.alreadyExists);
    }
    const transaction = await models.sequelize.transaction();
    try {
        const novaFaculdade = await faculdadeRepository.cadastrar(faculdade,transaction);
        await transaction.commit();
        return novaFaculdade;
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
    
};

module.exports.atualizarPorId = async (faculdade) => {
    if (!faculdadeRepository.getFaculdadePorId(faculdade.id)) {
        throw new Error (faculdadeConstants.notFound);
    }
    const transaction = await models.sequelize.transaction();
    try {
        await faculdadeRepository.atualizarPorId(faculdade,transaction);
        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
    }
} 