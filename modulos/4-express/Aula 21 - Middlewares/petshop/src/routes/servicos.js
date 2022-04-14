const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const validadorCadastroServicos = require('../middlewares/validadorCadastroServicos');
const multer = require('../middlewares/multer')

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar',  multer.single('servico-img'), validadorCadastroServicos, ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', multer.single('servico-img'), validadorCadastroServicos, ServicosController.atualizar);

// D - Deleção de servicos
router.delete('/deletar/:id', ServicosController.deletar);

module.exports = router;