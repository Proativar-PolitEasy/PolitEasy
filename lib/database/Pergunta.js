import database from './ConexaoBanco';

const CriarAlternativa = (texto, letra) => {
    return {
        "alternativa": texto,
        "letra": letra,
        "excluido": false
    }
}


const SalvarPergunta = (pergunta, alternativas, resposta, idTema) => {
    const idPergunta = database.ref("/perguntas").push({
        "enunciado": pergunta,
        "alternativas": [],
        "resposta": resposta,
        "id_tema": idTema,
        "excluido": false
    }).key;

    const refPergunta = database.ref("/perguntas/" + idPergunta + "/alternativas");

    for (const alternativa of alternativas) {
        refPergunta.push(alternativa);
    }

    return idPergunta;
}


const RetornarPerguntas = (limite = 0) => {
    let consulta = database.ref("/perguntas").orderByKey();
    const perguntas = [];
    let jsonAux = {};

    if (limite > 0) {
        consulta = consulta.limitToFirst(limite);
    }

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
                    "id_tema": snapshotValue[idPergunta]["id_tema"],
                    "excluido": snapshotValue[idPergunta]["excluido"]
                };

                // Preencher alternativas
                for (const idAlternativa in snapshotValue[idPergunta]["alternativas"]) {
                    // Ignorar alternativas excluídas
                    if (snapshotValue[idPergunta]["alternativas"][idAlternativa]["excluido"]) {
                        continue;
                    }

                    jsonAux["alternativas"].push({
                        "id": idAlternativa,
                        "alternativa": snapshotValue[idPergunta]["alternativas"][idAlternativa]["alternativa"],
                        "letra": snapshotValue[idPergunta]["alternativas"][idAlternativa]["letra"],
                        "excluido": snapshotValue[idPergunta]["alternativas"][idAlternativa]["excluido"]
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
            
            if (!snapshotValue) {
                return resolve(null);
            }

            if (snapshotValue["excluido"]) {
                return resolve(null);
            }

            jsonAux = {
                "id": id,
                "enunciado": snapshotValue["enunciado"],
                "alternativas": [],
                "resposta": snapshotValue["resposta"],
                "id_tema": snapshotValue["id_tema"],
                "excluido": snapshotValue["excluido"]
            };

            // Preencher alternativas
            for (const idAlternativa in snapshotValue["alternativas"]) {
                // Ignorar alternativas excluídas
                if (snapshotValue["alternativas"][idAlternativa]["excluido"]) {
                    continue;
                }

                jsonAux["alternativas"].push({
                    "id": idAlternativa,
                    "alternativa": snapshotValue["alternativas"][idAlternativa]["alternativa"],
                    "letra": snapshotValue["alternativas"][idAlternativa]["letra"],
                    "excluido": snapshotValue["alternativas"][idAlternativa]["excluido"]
                });
            }

            resolve(jsonAux);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

const RetornarPerguntasPorTema = (idTema) => {
    const ref = database.ref("/perguntas").orderByChild("id_tema").equalTo(idTema);
    const perguntas = [];
    let alternativas = [];
    let jsonAlternativaAux = {};
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            for (const id of Object.keys(snapshotValue)) {
                for (const idAlternativa of Object.keys(snapshotValue[id]["alternativas"])) {
                    // Ignorar alternativas excluídas
                    if (snapshotValue[id]["alternativas"][idAlternativa]["excluido"]) {
                        continue;
                    }
                    
                    alternativas.push({
                        "id": idAlternativa,
                        "alternativa": snapshotValue[id]["alternativas"][idAlternativa]["alternativa"],
                        "letra": snapshotValue[id]["alternativas"][idAlternativa]["letra"],
                        "excluido": snapshotValue[id]["alternativas"][idAlternativa]["excluido"]
                    });
                }

                jsonAux = {
                    "id": id,
                    "enunciado": snapshotValue[id]["enunciado"],
                    "alternativas": alternativas,
                    "resposta": snapshotValue[id]["resposta"],
                    "id_tema": idTema,
                    "excluido": snapshotValue[id]["excluido"]
                };

                perguntas.push(jsonAux);
            }

            resolve(perguntas);
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
    RetornarPerguntasPorTema,
    AlterarPergunta,
    AlterarAlternativa
};