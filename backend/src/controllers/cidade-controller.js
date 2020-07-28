const cidadeService = require('../services/cidade-service')

module.exports.listaCidadesPorNome = async (req,res,next) => {
    try {
        const response = await cidadeService.listaCidadesPorNome(req.query.nomeCidade);
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};
