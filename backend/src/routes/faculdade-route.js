const express = require('express');
const faculdadeController = require('../controllers/faculdade-controller')
const router = express.Router();

const prefixoRoute = '/faculdade';

router.post(`${prefixoRoute}`, faculdadeController.cadastrar);

module.exports = router;
