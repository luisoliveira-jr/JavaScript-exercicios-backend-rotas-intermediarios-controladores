Rotas e Controladores

Etapas de uma requisição HTTP

cliente -> manda requisição -> servidor

1 - a requisição passa pelo roteador (rota)
2 - ela é redireciona para os controladores especificos
3 - que por sua vez faz o processamento das informações da requisição
4 - e devolve uma resposta ao cliente

Nodemon
npm install -D nodemon
Será utilizado somente como dependência de desenvolvimento
O nodemon é uma biblioteca reiniciando automaticamente o servidor.

package.json:
  "scripts": {
    "dev": "nodemon ./src/index.js",
    "start": "nodemon index.js"
  },

Insomnia
Insomnia é um framework Open Source para desenvolvimento/teste de API Clients. 

Rotas

Intermediarios
Duas formas: intermediarios independentes ou em rotas
Função que passa para o método
*********************************************************************************

Implementações
//Cria .gitignore (ignorando o nome_modules)

//Inicializar o servidor node
npm init -y

//Instalar Express
npm install express

//Instalar Nodemon
npm install nodemon

//Atualizar scripts de compilação do Nodemon no package.json
  "scripts": {
    "dev": "nodemon ./src/index.js",
    "start": "nodemon index.js"
  },

//Index.js
//Importar Express
const express = require('express');
const app = express();

//Importar controladores (com desestruturação)
const { validarSenha } = require('./intermediarios');

//Intermediario independente
app.use(validarSenha);

//Parâmetro de rota
//localhotst:3000/carros
app.get('/carros', listagemCarros);

//Parâmetro de rota com parâmetro com parâmetro de consulta
//http://localhost:3000/carros/id?senha=carros123
app.get('/carros/:id', encontrarUmCarro);

//Direcionador de porta
app.listen(3000);

//Banco de dados
//Exportar banco de dados
module.exports = carros;

//Controladores
//Importar banco de dados
const carros = require('../bancodedados');

//Exportar controladores
module.exports = {
    listagemCarros,
    encontrarUmCarro
};

//Intermediarios / roteadores
//Exportar intermediarios
module.exports = {
    validarSenha
}

