const jogadores = ['José', 'Maria', 'João', 'Marcos', 'Fernanda'];
let jogadorDaVez = 0;

const daVez = (requisicao, resposta) => {
    const nomeDoJogador = jogadores[jogadorDaVez];
    jogadorDaVez++;

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }

    return resposta.send(`É a vez de ${nomeDoJogador} jogar!`);
};

const consultar = (requisicao, resposta) => {
    return resposta.send(jogadores);
};

const remover = (requisicao, resposta) => {
    const indiceDoArray = Number(requisicao.query.indice);

    if (indiceDoArray >= jogadores.length) {
        return resposta.send(`Não existe jogador no índice informado ${indiceDoArray} para ser removido.`);
    }

    jogadores.splice(indiceDoArray, 1);

    return resposta.send(jogadores);
};

const adicionar = (requisicao, resposta) => {
    let nomeDoJogador = requisicao.query.nome;
    const indiceDoArray = Number(requisicao.query.indice);

    nomeDoJogador = `${nomeDoJogador[0].toUpperCase()}${nomeDoJogador.slice(1).toLowerCase()}`

    if (isNaN(indiceDoArray)) {
        jogadores.push(nomeDoJogador);
        return resposta.send(jogadores);
    }

    if (indiceDoArray >= jogadores.length) {
        return resposta.send(`O índice informado ${indiceDoArray} não existe no array. Novo jogador não será adicionado.`);
    }

    jogadores.splice(indiceDoArray, 0, nomeDoJogador);
    return resposta.send(jogadores);
};

module.exports = {
    daVez,
    consultar,
    remover,
    adicionar
}