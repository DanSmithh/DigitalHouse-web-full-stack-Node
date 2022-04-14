const { Op } = require("sequelize");
const { Aluno } = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const alunos = await Aluno.findAll();

      res.render('alunos', { alunos });
    } catch (erro) {
      console.log(erro)
    }
  },

  async form (req, res) {
    try {
      const { id } = req.params;
      let formAction = '/alunos/cadastrar'
      let formTitle = 'Cadastro de Aluno'
      let aluno = {};

      if (id) {
        aluno = await Aluno.findByPk(id);
        formAction = '/alunos/editar/' + id;
        formTitle = 'Atualização de Aluno';
      }

      return res.render('alunosCadastro', { erro: null, aluno, formAction, formTitle });
    } catch (erro) {
      console.log(erro);
      return res.render('alunosCadastro', { erro: 'Não foi possível editar o aluno!'})
    }
  },

  async criar (req, res) {
    try {
      const { nome, sobrenome, matricula } = req.body;

      await Aluno.create({ nome, sobrenome, matricula });

      return res.redirect('/alunos');
    } catch (erro) {
      console.log(erro);
      return res.render('alunosCadastro', { erro: 'Não foi possível cadastrar o aluno!'})
    }
  },

  async editar (req, res) {
    try {
      const { id } = req.params;
      const { nome, sobrenome, matricula } = req.body;

      await Aluno.update({ nome, sobrenome, matricula }, {
        where: { id }
      });

      return res.redirect('/alunos');
    } catch (erro) {
      console.log(erro);
      return res.render('alunosCadastro', { erro: 'Não foi possível cadastrar o aluno!'})
    }
  },

  async deletar (req, res) {
    try {
      const { id } = req.params;

      await Aluno.destroy({ where: { id } });

      return res.redirect('/alunos');
    } catch (erro) {
      console.log(erro);
      return res.render('alunos', { erro: 'Não foi possível cadastrar o aluno!'})
    }
  }
}