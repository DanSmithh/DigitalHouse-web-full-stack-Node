const { uuid } = require('uuidv4');

module.exports = {
  servicos: [
    {
      id: 1,
      nome: 'Banho',
      valor: 'R$ 30,00',
      descricao: 'Higienização completa'
    },
    {
      id: 2,
      nome: 'Tosa',
      valor: 'R$ 15,00',
      descricao: 'Tosa completa'
    },
    {
      id: 3,
      nome: 'Corte de unhas',
      valor: 'R$ 5,00',
      descricao: 'Corte de unhas, todas as patas'
    },
  ],

  index () {
    return this.servicos
  },

  criar ({ nome, valor, descricao }) {
    if (!nome || !valor || !descricao) return

    this.servicos.push({ id: uuid(), nome, valor, descricao });
  },

  buscar (id) {
    return this.servicos.find(servico => servico.id == id);
  },

  atualizar (id, { nome, valor, descricao }) {
    if (!id) return

    if (!nome || !valor || !descricao) return

    const servico = this.buscar(id);

    servico.nome = nome;
    servico.valor = valor;
    servico.descricao = descricao;
  }
}