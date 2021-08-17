import { reject } from 'async';
import database from './ConexaoBanco';

const SalvarPontuacao = (idUsuario, pontuacao) => {
    const ref = database.ref("/pontuacoes").orderByChild("id_usuario").equalTo(idUsuario);

    ref.once("value")
    .then((snapshot) => {
        if (snapshot.val()) {
            const id = Object.keys(snapshot.val())[0];

            database.ref("/pontuacoes/" + id).update({
                "pontuacao": snapshot.val()[id]["pontuacao"] + pontuacao
            });
        }
        else {
            database.ref("/pontuacoes").push({
                "id_usuario": idUsuario,
                "pontuacao": pontuacao
            });
        }
    })
    .catch((err) => {
        reject(err);
    });
}

const RetornarPontuacoes = (limite = 0) => {
    let ref = database.ref("/pontuacoes").orderByKey();
    const pontuacoes = [];

    if (limite > 0) {
        ref = ref.limitToFirst(limite);
    }

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            for (const idPontuacao in snapshotValue) {
                pontuacoes.push({
                    "id": idPontuacao,
                    "id_usuario": snapshotValue[idPontuacao]["id_usuario"],
                    "pontuacao": snapshotValue[idPontuacao]["pontuacao"]
                });
            }

            resolve(pontuacoes);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

const RetornarPontuacaoPorId = (id) => {
    const ref = database.ref("/pontuacoes/" + id);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            resolve({
                "id": id,
                "id_usuario": snapshotValue["id_usuario"],
                "pontuacao": snapshotValue["pontuacao"]
            });
        })
        .catch((err) => {
            reject(err);
        });
    });
}

const RetornarPontuacaoPorUsuario = (idUsuario) => {
    const ref = database.ref("/pontuacoes").orderByChild("id_usuario").equalTo(idUsuario);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            const id = Object.keys(snapshotValue)[0];

            resolve({
                "id": id,
                "id_usuario": idUsuario,
                "pontuacao": snapshotValue[id]["pontuacao"]
            });
        })
        .catch((err) => {
            reject(err);
        })
    });
}

const DeletarPontuacao = (idPontuacao) => {
    database.ref("/pontuacoes").child(idPontuacao).remove();
}

export default {
    SalvarPontuacao,
    RetornarPontuacoes,
    RetornarPontuacaoPorId,
    RetornarPontuacaoPorUsuario,
    DeletarPontuacao
}