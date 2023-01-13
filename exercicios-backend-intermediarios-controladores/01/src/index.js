//Importar Express
const express = require('express');

const rotas = require('./roteador');

//Instanciar Express
const app = express();

app.use(rotas);

//Direcionador de porta
app.listen(3000);
