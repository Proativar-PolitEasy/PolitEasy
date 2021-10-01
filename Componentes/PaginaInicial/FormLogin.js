import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, TextInput, DeviceEventEmitter } from 'react-native';
import CampoTexto from '../Util/CampoTexto';
import Botao from '../Util/Botao';
import stylesForm from '../../Stylesheets/stylesForm';
import Usuario from '../../lib/database/Usuario';

const FormLogin = ({ route, navigation }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const ValidaDados = () => {
        if (email.length === 0 || senha.length === 0) {
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return false;
        }

        return true;
    }

    const Autenticar = () => {
        if (ValidaDados()) {
            Usuario.AutenticarUsuario(email, senha)
            .then((idUsuario) => {
                if (idUsuario) {
                    DeviceEventEmitter.emit("event.LogarUsuario", idUsuario);
                    console.log("Logado.");

                    navigation.navigate("Home");
                } else {
                    setErro("Credenciais inválidas. Tente novamente.");
                }
            })
            .catch((err) => {
                setErro("Ocorreu um erro ao acessar o banco de dados. Tente novamente mais tarde.");
            })
        } else {
            setErro("Preencha os dados corretamente.");
        }
    }

    return (
        <View style={stylesForm.containerLogin}>
            <Text style={stylesForm.heading}>LOGIN</Text>
            { erro ? <Text style={stylesForm.errorAlert}>{erro}</Text> : <Text></Text> }
            <CampoTexto campo="E-mail" tipo="email" callbackEntrada={(textoCampo) => setEmail(textoCampo)} />
            <CampoTexto campo="Senha" tipo="senha" callbackEntrada={(textoCampo) => setSenha(textoCampo)} />
            <Botao title="ENTRAR" onPress={Autenticar}/>
        </View>
    );
}

export default FormLogin;