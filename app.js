var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var alunosRouter = require('./src/routes/alunos');
var cursosRouter = require('./src/routes/cursos');

var app = express();

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alunos', alunosRouter);
app.use('/cursos', cursosRouter);

module.exports = app;
