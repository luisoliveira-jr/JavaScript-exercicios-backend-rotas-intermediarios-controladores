const somar = (requisicao, resposta) => {
    const { num1, num2 } = requisicao.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${Number(num1) + Number(num2)}`);
    }

    return resposta.send('Números inválidos')
};

const subtrair = (requisicao, resposta) => {
    const { num1, num2 } = requisicao.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${Number(num1) - Number(num2)}`);
    }

    return resposta.send('Números inválidos')
};

const multiplicar = (requisicao, resposta) => {
    const { num1, num2 } = requisicao.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${Number(num1) * Number(num2)}`);
    }

    return resposta.send('Números inválidos')
};

const dividir = (requisicao, resposta) => {
    const { num1, num2 } = requisicao.query;

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${Number(num1) / Number(num2)}`);
    }

    return resposta.send('Números inválidos')
};

//Exportar controladores
module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};