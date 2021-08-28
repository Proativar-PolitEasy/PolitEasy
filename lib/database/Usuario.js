import database from "./ConexaoBanco";

const VerificarEmail = (email) => {
    const ref = database.ref().child("usuarios").orderByChild("email").equalTo(email);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Email já existe
                return resolve(false);
            }

            resolve(true);
        })
        .catch((err) => {
            reject(null);
        })
    });
}

const SalvarUsuario = (usuario) => {
    const ref = database.ref("/usuarios").push(usuario).key;

    return ref;
}

const RetornarUsuarios = (limite = 0) => {
    let ref = database.ref("/usuarios").orderByKey();
    const users = [];
    let jsonAux = {};

    if (limite > 0) {
        ref = ref.limitToFirst(limite);
    }

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            for (const idUsuario in snapshotValue) {
                // Ignorar excluídos
                if (snapshotValue[idUsuario]["excluido"]) {
                    continue;
                }
                
                // Preencher usuários
                jsonAux = {
                    "id": idUsuario,
                    "nome": snapshotValue[idUsuario]["nome"],
                    "email": snapshotValue[idUsuario]["email"],
                    "senha": snapshotValue[idUsuario]["senha"],
                    "dataNascimento": snapshotValue[idUsuario]["dataNascimento"],
                    "escolaridade": snapshotValue[idUsuario]["escolaridade"],
                    "uf": snapshotValue[idUsuario]["uf"],
                    "cidade": snapshotValue[idUsuario]["cidade"],
                    "administrador": snapshotValue[idUsuario]["administrador"],
                    "excluido": snapshotValue[idUsuario]["excluido"]
                };

                // Guardar usuário
                users.push(jsonAux);
            }

            // Retornar perguntas (then)
            resolve(users);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

const RetornarUsuarioPorId = (id) => {
    const ref = database.ref("/usuarios/" + id);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                return resolve(null);
            }

            if (snapshotValue["excluido"]){
                return resolve(null);
            }

            resolve({
                    "id": id,
                    "nome": snapshotValue["nome"],
                    "email": snapshotValue["email"],
                    "senha": snapshotValue["senha"],
                    "dataNascimento": snapshotValue["dataNascimento"],
                    "escolaridade": snapshotValue["escolaridade"],
                    "uf": snapshotValue["uf"],
                    "cidade": snapshotValue["cidade"],
                    "administrador": snapshotValue["administrador"],
                    "excluido": snapshotValue["excluido"]
            });
        })
        .catch((err) => {
            reject(err);
        })
    })
}

const AlterarUsuario = (id, usuario) => {
    delete usuario["id"];
    const ref = database.ref("/usuarios/" + id).update(usuario);
}

const DeletarUsuario = (idUsuario) => {
    database.ref("/usuarios").child(idUsuario).remove();
}

const AutenticarUsuario = (email, senha) => {
    const ref = database.ref("/usuarios").orderByChild("email").equalTo(email);

    return new Promise((resolve, reject) => {
        ref.once("value")
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                // Não achou ninguém com esse email
                return resolve(false);
            }

            const snapshotKey = Object.keys(snapshotValue)[0];

            // Comparar senha
            if (snapshotValue[snapshotKey]["senha"] == senha) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
        .catch((err) => {
            console.log(err);
            reject(err);
        })
    });
}

export default {
    DeletarUsuario,
    SalvarUsuario,
    VerificarEmail,
    RetornarUsuarioPorId,
    RetornarUsuarios,
    AlterarUsuario,
    AutenticarUsuario
};