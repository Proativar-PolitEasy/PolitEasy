import { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET } from "@env";
import firebase from "firebase";

firebase.setLogLevel('silent');

// Configuração da conexão com o banco
const config = {
    /*apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET

    se der erro do firebase deixa o codigo de baixo*/
    apiKey: 'AIzaSyA6d66PRrDmbyI2JyUFsmYBvptct_cl138',
    authDomain: 'politeasy-d598c.firebaseapp.com',
    databaseURL: 'https://politeasy-d598c-default-rtdb.firebaseio.com',
    storageBucket: 'politeasy-d598c.appspot.com',
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