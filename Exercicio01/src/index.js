const express = require('express');
const app = express();

const { listagemCarros, encontrarUmCarro } = require('./controladores/carros');

//Parâmetro de rota
// localhotst:3000/carros
app.get('/carros', listagemCarros);

//Parâmetro de rota
// localhotst:3000/carros/id
app.get('/carros/:id', encontrarUmCarro);

app.listen(3000);