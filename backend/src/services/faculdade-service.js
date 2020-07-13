const faculdadeRepository = require('../repositories/faculdade-repository');
const faculdadeConstant = require('../constants/faculdade-constants');
const models = require('../models');
const faculdadeConstants = require('../constants/faculdade-constants');
const { isUuid } = require('uuidv4');

module.exports.cadastrar = async (faculdade) => {
    const faculdadeDB = await faculdadeRepository.getFaculdadePorCNPJ(faculdade.cnpj);
    console.info(faculdadeDB);
    if (faculdadeDB) {
        throw new Error (faculdadeConstant.alreadyExists,200);
    }
    delete faculdade.id;
    const transaction = await models.sequelize.transaction();
    try {
        const novaFaculdade = await faculdadeRepository.cadastrar(faculdade,transaction);
        await transaction.commit();
        return faculdadeConstant.createSuccess;
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
    
};

module.exports.atualizarPorId = async (faculdade) => {
    if (!faculdade.id) {
        throw new Error (faculdadeConstants.notFound);
    }
    const faculdadeBD = await faculdadeRepository.getFaculdadePorId(faculdade.id);
    if (!faculdadeBD) {
        throw new Error (faculdadeConstants.notFound);
    }
    const transaction = await models.sequelize.transaction();
    try {
        await faculdadeRepository.atualizarPorId(faculdade,transaction);
        await transaction.commit();
        return faculdadeConstant.updateSuccess;
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
}

module.exports.deletarPorId = async (id) => {
    const faculdadeBD = await faculdadeRepository.getFaculdadePorId(id);
    if (!faculdadeBD) {
        throw new Error (faculdadeConstants.notFound);
    }
    const transaction = await models.sequelize.transaction();
    try {
        await faculdadeRepository.deletarPorId(id,transaction);
        await transaction.commit();
        return faculdadeConstant.deleteSuccess;
    } catch (err) {
        await transaction.rollback();
        throw err;
    }

}

module.exports.listaTodos = async () => {
    try {
        return await faculdadeRepository.findAll();
    } catch (err) {
        throw err;
    }
}

module.exports.getPorId = async (id) => {
    try {
        if (!isUuid(id)) {
            throw new Error (faculdadeConstants.notFound);
        }
        const faculdade = await faculdadeRepository.getFaculdadePorId(id);
        if (!faculdade) {
            throw new Error (faculdadeConstants.notFound);
        }
        return faculdade;
    } catch (err) {
        throw err;
    }
}