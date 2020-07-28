const express = require('express');
const bairroController = require('../controllers/bairro-controller')
const router = express.Router();

const prefixoRoute = '/bairro';

router.get(`${prefixoRoute}`, bairroController.listaBairrosPorNome);
router.get(`${prefixoRoute}/:cidadeId/`, bairroController.listaBairrosDaCidadePorNome);

module.exports = router;
