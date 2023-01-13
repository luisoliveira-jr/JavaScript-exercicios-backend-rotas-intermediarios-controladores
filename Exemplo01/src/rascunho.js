const express = require('express');
const app = express();

// Rotas -> localhotst:3000/professores
/* app.get('/professores', (requisicao, resposta) => {
//     console.log(requisicao); 
    resposta.send(professores);
}); */

//Parametros de rota -> add /:parâmetro
// localhotst:3000/professores:id
app.get('/professores/:id', (requisicao, resposta) => {
    //console.log(requisicao.params.id);

    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id)
    });

    resposta.send(professorEncontrado);
});

//Parametros de consulta -> add finalDaRota?parâmetro=valor&outroParâmetro=valor
// localhotst:3000/professores?stack=backend
app.get('/professores', (requisicao, resposta) => {

    //desestruturação do parâmetro do objeto
    const { stack } = requisicao.query;

    let resultado = professores;

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }

    resposta.send(resultado);
});

app.listen(3000);