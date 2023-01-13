const carros = require('../bancodedados');

//Parâmetro de rota
// localhotst:3000/carros
const listagemCarros = (requisicao, resposta) => {

    //Parâmetro de consulta
    // localhotst:3000/carros?marca=ford&cor=branco
    const { marca, cor } = requisicao.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca;
        })
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor;
        })
    }

    resposta.send(resultado);
};

//Parâmetro de rota
// localhotst:3000/carros/id
const encontrarUmCarro = (requisicao, resposta) => {
    const { id } = requisicao.params;

    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id);
    });

    resposta.send(carroEncontrado);
};

module.exports = {
    listagemCarros,
    encontrarUmCarro
};