const express = require('express');
const router = express.Router();

const PetsController = require('../controllers/PetsController');

router.get('/', PetsController.index);

module.exports = router;