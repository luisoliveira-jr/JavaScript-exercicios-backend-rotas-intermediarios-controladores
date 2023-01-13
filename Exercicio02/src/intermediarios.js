//http://localhost:3000/carros/2?senha=carros123
const validarSenha = (requisição, resposta, next) => {
    const { senha } = requisição.query;

    if (!senha) {
        return resposta.send('A senha não foi informada.');
    };

    if (senha !== "carros123") {
        return resposta.send("Senha incorreta.");
    };

    next();
}

module.exports = {
    validarSenha
}