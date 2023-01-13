//Importar Express
const express = require('express');

//Importar Controladores
const { somar, subtrair, multiplicar, dividir } = require('./controladores/calculadora')

//Instanciar Express
const rotas = express();

rotas.get('/somar', somar);
rotas.get('/subtrair', subtrair);
rotas.get('/multiplicar', multiplicar);
rotas.get('/dividir', dividir);

module.exports = rotas;