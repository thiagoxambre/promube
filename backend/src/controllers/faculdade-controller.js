const faculdadeService = require('../services/faculdade-service');

module.exports.cadastrar = async (req,res,next) => {
    try {
        const faculdade = JSON.parse(JSON.stringify(req.body));
        const response = await faculdadeService.cadastrar(faculdade);
        return res.status(201).json({ message: response});
    } catch (error) {
        next(error);
    }
};

module.exports.atualizar = async (req,res,next) => {
    try {
        const faculdade = JSON.parse(JSON.stringify(req.body));
        const response = await faculdadeService.atualizarPorId(faculdade);
        return res.status(200).json({ message: response});
    } catch (error) {
        next(error);
    }
};

module.exports.deletarPorId = async (req,res,next) => {
    try {
        console.info(req.params.id);
        const response = await faculdadeService.deletarPorId(req.params.id);
        return res.status(200).json({ message: response});
    } catch (error) {
        next(error);
    }
};

module.exports.listaTodos = async (req,res,next) => {
    try {
        const response = await faculdadeService.listaTodos();
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports.getPorId = async (req,res,next) => {
    try {
        console.info(req.params.id);
        const response = await faculdadeService.getPorId(req.params.id);
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};
