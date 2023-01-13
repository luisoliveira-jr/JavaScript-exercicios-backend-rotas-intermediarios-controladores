const express = require('express');
const app = express();

const { encontrarUmProfessor, filtrarProfessores } = require('./controladores/professores');

const promeiroIntermediario = (requisicao, resposta, next) => {
    console.log('passei no primeiro intermediario');
    next();
}

const segundoIntermediario = (requisicao, resposta, next) => {
    console.log('passei no segundo intermediario');
    next();
}

//app.use(promeiroIntermediario);
//app.use(segundoIntermediario);

//Parâmetro de rota
// localhotst:3000/professores/2
app.get('/professores/:id', encontrarUmProfessor);

//Parâmetro de consulta
// localhotst:3000/professores?stack=backend
app.get('/professores', promeiroIntermediario, filtrarProfessores);

app.listen(3000);