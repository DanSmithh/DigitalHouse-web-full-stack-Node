const ServicoModel = require('../models/ServicoModel');
const { validationResult } = require('express-validator');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('servicos', { servicos }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const servicos = ServicoModel.index();
    return res.render('admin-servicos', { servicos });
  },

  editar: (req, res) => {
    const { id } = req.params;
    let servico = null

    const erros = validationResult(req).errors;

    if (id) {
      servico = ServicoModel.buscar(id);
    }

    return res.render('cadastro-edicao', { erros, servico });
  },

  criar: (req, res) => {
    const { body, file } = req;
    const erros = validationResult(req).errors;

    if (!erros.length) {
      ServicoModel.criar(body, file);
      return res.redirect('/servicos/admin');
    }

    return res.render('cadastro-edicao', { erros, servico: null })
  },

  atualizar: (req, res) => {
    const { id } = req.params;

    const erros = validationResult(req).errors;

    if (!erros.length) {
      ServicoModel.atualizar(id, req.body);
      return res.redirect('/servicos/admin');
    }

    const servico = { id, ...req.body };

    return res.render('cadastro-edicao', { erros, servico })
  },

  deletar: (req, res) => {
    const { id } = req.params;
    ServicoModel.deletar(id);
    return res.redirect('/servicos/admin');
  }
};