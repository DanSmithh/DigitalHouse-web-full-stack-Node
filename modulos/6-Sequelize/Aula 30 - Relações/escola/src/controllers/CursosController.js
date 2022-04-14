const { Op } = require("sequelize");
const { Curso, Area, Turma, Professor } = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const cursos = await Curso.findAll({
        include: [
          {
            model: Area,
            as: 'area',
            required: true
          },
          {
            model: Turma,
            as: 'turmas',
            required: true,
            include: {
              model: Professor,
              as: 'professor',
              required: true
            },
          },
        ]
      });

      res.render('cursos', { cursos });
    } catch (erro) {
      console.log(erro)
    }
  },

  async form (req, res) {
    try {
      const { id } = req.params;
      let formAction = '/cursos/cadastrar'
      let formTitle = 'Cadastro de curso'
      let curso = {};

      if (id) {
        curso = await Curso.findByPk(id);
        formAction = '/cursos/editar/' + id;
        formTitle = 'Atualização de curso';
      }

      return res.render('cursosCadastro', { erro: null, curso, formAction, formTitle });
    } catch (erro) {
      console.log(erro);
      return res.render('cursosCadastro', { erro: 'Não foi possível editar o curso!'})
    }
  },

  async criar (req, res) {
    try {
      const { nome, sobrenome, matricula } = req.body;

      await Curso.create({ nome, sobrenome, matricula });

      return res.redirect('/cursos');
    } catch (erro) {
      console.log(erro);
      return res.render('cursosCadastro', { erro: 'Não foi possível cadastrar o curso!'})
    }
  },

  async editar (req, res) {
    try {
      const { id } = req.params;
      const { nome, sobrenome, matricula } = req.body;

      await Curso.update({ nome, sobrenome, matricula }, {
        where: { id }
      });

      return res.redirect('/cursos');
    } catch (erro) {
      console.log(erro);
      return res.render('cursosCadastro', { erro: 'Não foi possível cadastrar o curso!'})
    }
  },

  async deletar (req, res) {
    try {
      const { id } = req.params;

      await Curso.destroy({ where: { id } });

      return res.redirect('/cursos');
    } catch (erro) {
      console.log(erro);
      return res.render('cursos', { erro: 'Não foi possível cadastrar o curso!'})
    }
  }
}