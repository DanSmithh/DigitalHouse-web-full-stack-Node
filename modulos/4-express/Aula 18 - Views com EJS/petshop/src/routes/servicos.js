const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');

router.get('/', ServicosController.index);

module.exports = router;