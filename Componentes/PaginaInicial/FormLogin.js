import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';

let email = "";
let senha = "";

const FormLogin = () => {
    return (
        <View style={stylesForm.container}>
            <Text style={stylesForm.heading}>Entrar na sua conta</Text>
            <CampoTexto campo="E-mail" callbackEntrada={(textoCampo) => email = textoCampo} />
            <CampoTexto campo="Senha" isPassword={true} callbackEntrada={(textoCampo) => senha = textoCampo} />
            <Button title="Entrar" onPress={ValidaDados}></Button>
        </View>
    );
}

const ValidaDados = () => {
    if (email.length === 0 || senha.length === 0) {
        console.log("Dados inválidos");
    }
}

export default FormLogin;