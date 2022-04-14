// Definir uma Promise
const promise = new Promise((resolve, reject) => {})

// Promise <pending>
console.log(promise)

// Promise <resolved>
const resolved = Promise.resolve(true)

console.log(resolved)

// Promise <rejected>
const rejected = Promise.reject(true)

console.log(rejected)

// Definir Promise com condições
function concatena(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nome) return resolve('Olá ' + nome);

      return reject({ code: 404 });
    }, 5000)
  })
}

concatena('Bruno').then(resultado => {console.log(resultado)}),
concatena().catch(erro => {
  if (erro.code == 404) return console.log('É necessário informar o nome')
})

// // Promises resolve o problema do callback hell.
concatena('Bruno')
  .then(resultado => 'Bem vindo! ' + resultado)
  .then(resultado => console.log(resultado))
  .catch(erro => console.log(erro))

// Utilização de async / await
async function saudar(nome) {
  // espera
  const result = await concatena(nome);
  return result
}
// não espera
concatena('Bruno').then(resultado => console.log(resultado));
saudar('Jorge').then(resultado => console.log(resultado));

// try ... catch
async function saudar2(nome) {
  try {
    const result = await concatena(nome);
    console.log(result)
  } catch (erro) {
    if (erro.code == 404) console.log('Informe o nome!')
  }
}

saudar2('Bruno')
saudar2()
