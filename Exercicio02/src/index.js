const express = require('express');
const app = express();

const { validarSenha } = require('./intermediarios');
const { listagemCarros, encontrarUmCarro } = require('./controladores/carros');

//Intermediario independente
app.use(validarSenha);

//Parâmetro de rota
// localhotst:3000/carros
app.get('/carros', listagemCarros);

//Parâmetro de rota
//http://localhost:3000/carros/id?senha=carros123
app.get('/carros/:id', encontrarUmCarro);

app.listen(3000);