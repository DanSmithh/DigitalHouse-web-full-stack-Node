// Para iniciar o servidor web com express, utilize o comando 'npm start'
// Utilize o software Postman para fazer requests para esta api e ver o seu resultado

const express = require('express');

const app = express();
app.use(express.json());

var usuarios = [];

app.get('/usuarios', (req, res) => {
  res.send(JSON.stringify(usuarios));
});

app.post('/usuarios', (req, res) => {
  usuarios.push(req.body);
  res.send(200, usuarios);
});

app.listen(3000, () => {
  console.log('Servidor rodando no endereço http://localhost:3000');
});