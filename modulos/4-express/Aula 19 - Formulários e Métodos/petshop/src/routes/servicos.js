const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar', ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', ServicosController.atualizar);

module.exports = router;