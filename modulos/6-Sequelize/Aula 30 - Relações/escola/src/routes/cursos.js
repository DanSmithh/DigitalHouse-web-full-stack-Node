const express = require('express');
const router = express.Router();
const CursosController = require('../controllers/CursosController');


// C - Criação de Cursos
router.get('/cadastrar', CursosController.form);
router.post('/cadastrar', CursosController.criar);

// R - Leitura dos Cursos
router.get('/', CursosController.index);

// U - Atualização de Cursos
router.get('/editar/:id', CursosController.form);
router.post('/editar/:id', CursosController.editar);

// D - Remoção de Cursos
router.post('/deletar/:id', CursosController.deletar);

module.exports = router;