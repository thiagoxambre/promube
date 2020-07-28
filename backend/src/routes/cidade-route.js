const express = require('express');
const cidadeController = require('../controllers/cidade-controller')
const router = express.Router();

const prefixoRoute = '/cidade';

router.get(`${prefixoRoute}`, cidadeController.listaCidadesPorNome);

module.exports = router;
