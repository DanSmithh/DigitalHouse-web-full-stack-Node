const ServicoModel = require('../models/ServicoModel');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index();
    return res.render('index', { servicos });
  }
}