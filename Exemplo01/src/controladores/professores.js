const professores = require('../bancodedados');

//Parâmetro de rota
// localhotst:3000/professores/2
const encontrarUmProfessor = (requisicao, resposta) => {

    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id)
    });

    resposta.send(professorEncontrado);
};

//Parâmetro de consulta
// localhotst:3000/professores?stack=backend
const filtrarProfessores = (requisicao, resposta) => {

    //desestruturação do parâmetro do objeto
    const { stack } = requisicao.query;

    let resultado = professores;

    console.log('cheguei no controlador de lsitagem do professor');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    };

    resposta.send(resultado);
};

module.exports = {
    encontrarUmProfessor,
    filtrarProfessores

};