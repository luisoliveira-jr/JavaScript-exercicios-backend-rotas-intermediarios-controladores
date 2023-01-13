const express = require('express');
const { daVez, consultar, remover, adicionar } = require('./controladores/rodadas');

const rotas = express();

rotas.get('/', daVez);
rotas.get('/consultar', consultar);
rotas.get('/remover', remover);
rotas.get('/adicionar', adicionar);

module.exports = rotas;