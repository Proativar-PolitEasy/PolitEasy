import database from './ConexaoBanco';

const CriarAlternativa = (texto, letra) => {
    return {
        "alternativa": texto,
        "letra": letra
    }
}

const SalvarPergunta = (pergunta, alternativas, resposta) => {
    const idPergunta = database.ref("/perguntas").push({
        "enunciado": pergunta,
        "resposta": resposta
    }).key;

    const refPergunta = database.ref("/perguntas/" + idPergunta);

    for (const alternativa of alternativas) {
        refPergunta.push(alternativa);
    }
}

export default {
    CriarAlternativa,
    SalvarPergunta
};