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
        "alternativas": [],
        "resposta": resposta,
        "acertos": 0,
        "erros": 0,
        "id_tema": "naoImplementado",
        "excluido": false
    }).key;

    const refPergunta = database.ref("/perguntas/" + idPergunta + "/alternativas");

    for (const alternativa of alternativas) {
        refPergunta.push(alternativa);
    }

    return idPergunta;
}


const RetornarPerguntas = (limite = 10) => {
    const consulta = database.ref("/perguntas").orderByKey().limitToFirst(limite);
    const perguntas = [];
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        consulta.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            for (const idPergunta in snapshotValue) {
                // Ignorar excluídos
                if (snapshotValue[idPergunta]["excluido"]) {
                    continue;
                }
                
                // Preencher perguntas
                jsonAux = {
                    "id": idPergunta,
                    "enunciado": snapshotValue[idPergunta]["enunciado"],
                    "alternativas": [],
                    "resposta": snapshotValue[idPergunta]["resposta"],
                    "acertos": snapshotValue[idPergunta]["acertos"],
                    "erros": snapshotValue[idPergunta]["erros"],
                    "id_tema": snapshotValue[idPergunta]["id_tema"],
                    "excluido": snapshotValue[idPergunta]["excluido"]
                };

                // Preencher alternativas
                for (const idAlternativa in snapshotValue[idPergunta]["alternativas"]) {
                    jsonAux["alternativas"].push({
                        "id": idAlternativa,
                        "alternativa": snapshotValue[idPergunta]["alternativas"][idAlternativa]["alternativa"],
                        "letra": snapshotValue[idPergunta]["alternativas"][idAlternativa]["letra"]
                    });
                }

                // Guardar pergunta
                perguntas.push(jsonAux);
            }

            // Retornar perguntas (then)
            resolve(perguntas);
        })
        .catch((err) => {
            // Retornar erro (catch)
            reject(err);
        });
    });
}


const AlterarPergunta = (id, pergunta) => {
    const ref = database.ref("/perguntas/" + id);

    delete pergunta.id;
    delete pergunta.alternativas;

    ref.update(pergunta);
}

const AlterarAlternativa = (idPergunta, idAlternativa, alternativa) => {
    const ref = database.ref("/perguntas/" + idPergunta + "/alternativas/" + idAlternativa);

    delete alternativa.id;

    ref.update(alternativa);
}


const RetornarPerguntaPorId = (id) => {
    const ref = database.ref("/perguntas/" + id).get();
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref
        .then((snapshot) => {
            const snapshotValue = snapshot.val();
            
            if (snapshotValue["excluido"]) {
                resolve(null);
            }

            jsonAux = {
                "id": id,
                "enunciado": snapshotValue["enunciado"],
                "alternativas": [],
                "resposta": snapshotValue["resposta"],
                "acertos": snapshotValue["acertos"],
                "erros": snapshotValue["erros"],
                "id_tema": snapshotValue["id_tema"],
                "excluido": snapshotValue["excluido"]
            };

            // Preencher alternativas
            for (const idAlternativa in snapshotValue["alternativas"]) {
                jsonAux["alternativas"].push({
                    "id": idAlternativa,
                    "alternativa": snapshotValue["alternativas"][idAlternativa]["alternativa"],
                    "letra": snapshotValue["alternativas"][idAlternativa]["letra"]
                });
            }

            resolve(jsonAux);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

export default {
    CriarAlternativa,
    SalvarPergunta,
    RetornarPerguntas,
    RetornarPerguntaPorId,
    AlterarPergunta,
    AlterarAlternativa
};