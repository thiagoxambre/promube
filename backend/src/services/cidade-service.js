const cidadeRepository = require('../repositories/cidade-repository')

module.exports.listaCidadesPorNome = async (nome) => {
    try {
        return await cidadeRepository.getCidadesPorNome(nome);
    } catch (err) {
        throw err;
    }
}
