import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from "@env";
import firebase from "firebase";

// Configuração da conexão com o banco
const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET
}

// Iniciar Firebase se não foi iniciado ainda
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
else {
    firebase.app();
}

// Retornar instância do banco de dados
const database = firebase.database();

export default database;