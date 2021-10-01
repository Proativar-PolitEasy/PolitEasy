import database from './ConexaoBanco';

const SalvarResposta = (idPergunta, idUsuario, acertou) => {
    const ref = database.ref("/respostas").orderByChild("id_pergunta").equalTo(idPergunta);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                database.ref("/respostas").push({
                    "id_pergunta": idPergunta,
                    "id_usuario": idUsuario,
                    "acertou": acertou
                });

                return resolve(true);
            }

            for (const idResposta in snapshotValue) {
                if (snapshotValue[idResposta]["id_usuario"] == idUsuario) {
                    database.ref("/respostas/" + idResposta).set({
                        "id_pergunta": idPergunta,
                        "id_usuario": idUsuario,
                        "acertou": acertou
                    });

                    return resolve(true);
                }
            }

            database.ref("/respostas").push({
                "id_pergunta": idPergunta,
                "id_usuario": idUsuario,
                "acertou": acertou
            });
            
            return resolve(true);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

const RetornarRespostas = () => {
    const ref = database.ref("/respostas").orderByKey();
    const respostas = [];

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            for (const idTema in snapshotValue) {
                respostas.push({
                    "id_usuario": snapshotValue[idTema]["id_usuario"],
                    "id_pergunta": snapshotValue[idTema]["id_pergunta"],
                    "resposta": snapshotValue[idTema]["acertou"]
                });
            }

            resolve(respostas);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

const RetornarRespostasPorUsuario = (idUsuario) => {
    const ref = database.ref("/respostas").orderByChild("id_usuario").equalTo(idUsuario);
    const respostas = [];
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            for (const idResposta of Object.keys(snapshotValue)) {
                jsonAux = {
                    "id_pergunta": snapshotValue[idResposta]["id_pergunta"],
                    "id_usuario": snapshotValue[idResposta]["id_usuario"],
                    "acertou": snapshotValue[idResposta]["acertou"]
                };

                respostas.push(jsonAux);
            }

            resolve(respostas);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

const RetornarRespostasPorPergunta = (idPergunta) => {
    const ref = database.ref("/respostas").orderByChild("id_pergunta").equalTo(idPergunta);
    const respostas = [];
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            for (const idResposta of Object.keys(snapshotValue)) {
                jsonAux = {
                    "id_pergunta": snapshotValue[idResposta]["id_pergunta"],
                    "id_usuario": snapshotValue[idResposta]["id_usuario"],
                    "acertou": snapshotValue[idResposta]["acertou"]
                };

                respostas.push(jsonAux);
            }

            resolve(respostas);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

const RetornarRespostasPorTemaEUsuario = (idUsuario, idTema) => {
    const ref = database.ref("/respostas").orderByChild("id_usuario").equalTo(idUsuario);
    const refPerguntas = database.ref("/perguntas").orderByChild("id_tema").equalTo(idTema);
    let perguntas = [];
    let respostas = [];
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            // Obteve todas as respostas já feitas pelo usuário
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            for (const idResposta of Object.keys(snapshotValue)) {
                jsonAux = {
                    "id_pergunta": snapshotValue[idResposta]["id_pergunta"],
                    "id_usuario": snapshotValue[idResposta]["id_usuario"],
                    "acertou": snapshotValue[idResposta]["acertou"]
                };

                respostas.push(jsonAux);
            }

            refPerguntas.once("value")
            .then((snapshotPerguntas) => {
                if (!snapshotPerguntas.val()) {
                    return resolve(null);
                }

                // Pega todos os IDs de perguntas que pertencem ao tema
                perguntas = Object.keys(snapshotPerguntas.val());
                const respostasTema = respostas.filter(resp => perguntas.includes(resp["id_pergunta"]));
                
                resolve(respostasTema);
            })
            .catch((err) => {
                throw err;
            })
        })
        .catch((err) => {
            reject(err);
        })
    });
}

export default {
    SalvarResposta,
    RetornarRespostas,
    RetornarRespostasPorUsuario,
    RetornarRespostasPorPergunta,
    RetornarRespostasPorTemaEUsuario
}