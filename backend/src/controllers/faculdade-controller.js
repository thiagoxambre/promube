const faculdadeService = require('../services/faculdade-service');

module.exports.cadastrar = async (req,res,next) => {
    try {
        const faculdade = JSON.parse(JSON.stringify(req.body));
        const response = await faculdadeService.cadastrar(faculdade);
        return res.status(201).json(response);
    } catch (err) {
        next(err);
    }
};
