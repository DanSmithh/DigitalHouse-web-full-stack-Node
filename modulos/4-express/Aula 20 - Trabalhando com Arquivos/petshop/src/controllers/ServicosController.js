const ServicoModel = require('../models/ServicoModel')

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

    if (id) {
      servico = ServicoModel.buscar(id);
    }

    return res.render('cadastro-edicao', { servico });
  },

  criar: (req, res) => {
    const { body, file } = req;
    ServicoModel.criar(body, file);
    return res.redirect('/servicos/admin');
  },

  atualizar: (req, res) => {
    const { id } = req.params;
    ServicoModel.atualizar(id, req.body);
    return res.redirect('/servicos/admin');
  },

  deletar: (req, res) => {
    const { id } = req.params;
    ServicoModel.deletar(id);
    return res.redirect('/servicos/admin');
  }
};