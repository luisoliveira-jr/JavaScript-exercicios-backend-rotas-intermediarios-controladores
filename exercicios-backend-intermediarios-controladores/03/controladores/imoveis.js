const imoveis = require('../dados/imoveis');

const get = (requisicao, resposta) => {
    return resposta.json(imoveis);
};

const getPorId = (requisicao, resposta) => {
    const { id } = requisicao.params;

    const imovel = imoveis.find((item) => {
        return item.id === Number(id);
    })
    return resposta.json(imovel);
};

module.exports = {
    get,
    getPorId
}