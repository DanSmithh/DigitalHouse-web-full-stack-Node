const { check } = require('express-validator');

module.exports = [
  check('nome')
    .notEmpty().withMessage('Campo nome é obrigatório!').bail()
    .isLength({ min: 3 }).withMessage('Campo nome precisa ter mais que 3 caracteres'),
  check('valor')
    .notEmpty().withMessage('Campo valor é obrigatório!').bail()
    .isNumeric().withMessage('Campo valor precisa ser um número'),
  check('descricao')
    .notEmpty().withMessage('Campo descrição é obrigatório').bail()
    .isLength({ min: 10 }).withMessage('Campo descrição precisa ter mais que 10 caracteres!')
]