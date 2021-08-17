import database from './ConexaoBanco';

const AlterarTema = (id, tema) => {
    delete tema["id"];

    database.ref("/temas/" + id).update(tema);
}

const SalvarTema = (descricao) => {
    const id = database.ref("/temas").push({
        "descricao": descricao,
        "excluido": false
    }).key;

    return id;
}

const RetornarTemas = () => {
    const ref = database.ref("/temas").orderByKey();
    const temas = [];

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            for (const idTema in snapshotValue) {
                if (snapshotValue[idTema]["excluido"]) {
                    continue;
                }

                temas.push({
                    "id": idTema,
                    "descricao": snapshotValue[idTema]["descricao"],
                    "excluido": snapshotValue[idTema]["excluido"]
                });
            }

            resolve(temas);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

const RetornarTemaPorId = (id) => {
    const ref = database.ref("/temas/" + id);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            if (snapshotValue["excluido"]) {
                return resolve(null);
            } else {
                resolve({
                    "descricao": snapshotValue["descricao"],
                    "excluido": snapshotValue["excluido"]
                });
            }
        })
        .catch((err) => {
            reject(err);
        });
    });
}

export default {
    AlterarTema,
    SalvarTema,
    RetornarTemaPorId,
    RetornarTemas
}