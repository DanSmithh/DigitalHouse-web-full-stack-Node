const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// C Criação de Usuários
router.get('/cadastrar', UserController.editar);
router.post('/cadastrar', UserController.criar);

router.get('/login', UserController.login);
router.post('/login', UserController.autenticar);

module.exports = router;
