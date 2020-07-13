const express = require('express');
const faculdadeController = require('../controllers/faculdade-controller')
const router = express.Router();

const prefixoRoute = '/faculdade';

router.post(`${prefixoRoute}`, faculdadeController.cadastrar);
router.put(`${prefixoRoute}`, faculdadeController.atualizar);
router.get(`${prefixoRoute}`, faculdadeController.listaTodos);
router.get(`${prefixoRoute}/:id`, faculdadeController.getPorId);
router.delete(`${prefixoRoute}/:id`, faculdadeController.deletarPorId);

module.exports = router;
