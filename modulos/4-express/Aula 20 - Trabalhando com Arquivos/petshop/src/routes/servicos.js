const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination (req, file, callback) {
    callback(null, 'public/images/uploads');
  },

  filename (req, file, callback) {
    const [filename, extension] = file.originalname.split('.');
    callback(null, filename + '-' + Date.now() + '.' + extension);
  }
});

const upload = multer({ storage });

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar', upload.single('servico-img'), ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', upload.single('servico-img'), ServicosController.atualizar);

// D - Deleção de servicos
router.delete('/deletar/:id', ServicosController.deletar);

module.exports = router;