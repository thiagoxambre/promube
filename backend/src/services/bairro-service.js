const bairroRepository = require('../repositories/bairro-repository')

module.exports.listaBairrosPorNome = async (nome) => {
    try {
        return await bairroRepository.getBairrosPorNome(nome);
    } catch (err) {
        throw err;
    }
}

module.exports.listaBairrosDaCidadePorNome = async (cidadeId,nome) => {
    try {
        return await bairroRepository.getBairrosDaCidadePorNome(cidadeId,nome);
    } catch (err) {
        throw err;
    }
}