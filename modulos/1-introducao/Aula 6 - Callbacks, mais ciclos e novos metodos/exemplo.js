// Para executar este arquivo na linha de comando, utilize o comando 'node exemplo.js'

function cumprimentar(parametro1) {
  console.log('Olá ' + parametro1)
}

const processarDadosDoClienteBruno = (funcao) => {
  let nome = 'Bruno'
  funcao(nome)
}

const processarDadosDoClienteWesley = (funcao) => {
  let nome = 'Wesley'
  funcao(nome)
}

const processarDadosDoClienteMarcus = (funcao) => {
  let nome = 'Marcus'
  funcao(nome)
}

const processarDadosDoClienteIvone = (funcao) => {
  let nome = 'Ivone'
  funcao(nome)
}

processarDadosDoClienteBruno(cumprimentar)
processarDadosDoClienteWesley(cumprimentar)
processarDadosDoClienteMarcus(cumprimentar)
processarDadosDoClienteIvone(cumprimentar)

// Utilizando callbacks em métodos de arrays

let lista1 = [1, 2, 3, 4]

lista1.forEach(cumprimentar)

// Utilizando callbacks em operações matemáticas

function mostraResultado(parametro){
  console.log('Resultado: ' + parametro)
}

function soma (a, b, callback) {
  callback(a + b)
}

soma(1, 2, mostraResultado)