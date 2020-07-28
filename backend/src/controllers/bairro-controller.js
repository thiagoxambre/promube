const bairroService = require('../services/bairro-service')

module.exports.listaBairrosPorNome = async (req,res,next) => {
    try {
        const response = await bairroService.listaBairrosPorNome(req.query.nomeBairro);
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports.listaBairrosDaCidadePorNome = async (req,res,next) => {
    try {
        console.info(req);
        const response = await bairroService.listaBairrosDaCidadePorNome(req.params.cidadeId,req.query.nomeBairro);
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};
