import database from './ConexaoBanco';

const AlterarTema = (id, tema) => {
    delete tema["id"];

    database.ref("/temas/" + id).update(tema);
}

const SalvarTema = (descricao, materia, texto) => {
    const id = database.ref("/temas").push({
        "descricao": descricao,
        "materia": materia,
        "texto": texto,
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
                    "materia": snapshotValue[idTema]["materia"],
                    "texto": snapshotValue[idTema]["texto"],
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
                    "id": id,
                    "descricao": snapshotValue["descricao"],
                    "materia": snapshotValue["materia"],
                    "texto": snapshotValue["texto"],
                    "excluido": snapshotValue["excluido"]
                });
            }
        })
        .catch((err) => {
            reject(err);
        });
    });
}

const RetornarTemasPorMateria = (materia) => {
    const ref = database.ref("/temas").orderByChild("materia").equalTo(materia);
    const temas = [];
    let jsonAux = {};

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            for (const idTema of Object.keys(snapshotValue)) {
                jsonAux = {
                    "id": idTema,
                    "descricao": snapshotValue[idTema]["descricao"],
                    "materia": snapshotValue[idTema]["materia"],
                    "texto": snapshotValue[idTema]["texto"],
                    "excluido": snapshotValue[idTema]["excluido"]
                };

                temas.push(jsonAux);
            }

            resolve(temas);
        })
        .catch((err) => {
            reject(err);
        })
    });
}

const DeletarTema = (idTema) => {
    database.ref("/temas").child(idTema).remove();
}


export default {
    AlterarTema,
    SalvarTema,
    RetornarTemaPorId,
    RetornarTemas,
    RetornarTemasPorMateria,
    DeletarTema
}