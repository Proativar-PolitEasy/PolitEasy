import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import CampoTexto from '../Util/CampoTexto';
import CampoData from '../Util/CampoData';
import Botao from '../Util/Botao';
import stylesForm from '../../Stylesheets/stylesForm';
import Usuario from '../../lib/database/Usuario';

const FormatarData = (data) => {
    const dia = data.getDate().toString();
    const mes = (data.getMonth() + 1).toString();
    const ano = data.getFullYear();

    const diaComZero = dia.length == 1 ? "0" + dia : dia;
    const mesComZero = mes.length == 1 ? "0" + mes : ano;

    return diaComZero + "/" + mesComZero + "/" + ano;
}

const FormCadastro = ({ navigation }) => {
    const [usuario, setUsuario] = useState({
        "nome": "",
        "email": "",
        "senha": "",
        "escolaridade": "",
        "data_nascimento": FormatarData(new Date()),
        "uf": "",
        "cidade": ""
    });

    const EditarUsuario = (propriedade, valor) => {
        // Atualiza o usuário no state
        const usuarioAntigo = { ...usuario };
        usuarioAntigo[propriedade] = valor;
        setUsuario(usuarioAntigo);
    }

    const ValidaDados = () => {
        console.log(usuario);
        // Checar algum campo não preenchido
        if (usuario["email"].length === 0 
            || usuario["senha"].length === 0
            || usuario["nome"].length === 0
            || usuario["escolaridade"].length === 0
            || usuario["uf"].length === 0
            || usuario["cidade"].length === 0
            || usuario["data_nascimento"].length === 0) {
            return false;
        }
        
        // Checar se o email está no formato endereco@servidor.dominio
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario["email"])) {
            return false;
        }
    
        return true;
    }

    const Cadastrar = () => {
        let idUsuario;
    
        if (ValidaDados()) {
            // Campos preenchidos corretamente.
            Usuario.VerificarEmail(usuario["email"])
            .then((emailEhValido) => {
    
                if (!emailEhValido) {
                    console.log("Email já existe no banco.");
                }
                else {
                    idUsuario = Usuario.SalvarUsuario(usuario);
                    navigation.navigate("Home");
                }
    
            })
            .catch((err) => {
                console.log("Erro durante a consulta ao banco.", err);
            });
        }
        else {
            console.log("Campos preenchidos incorretamente.");
        }
    }

    return (
        <ScrollView>
            <View style={stylesForm.containerCadastro}>
                <Text style={stylesForm.heading}>CADASTRO</Text>
                <CampoTexto campo="Nome"                tipo="texto" callbackEntrada={(texto) => EditarUsuario("nome", texto)} />
                <CampoTexto campo="E-mail"              tipo="email" callbackEntrada={(texto) => EditarUsuario("email", texto)} />
                <CampoTexto campo="Senha"               tipo="senha" callbackEntrada={(texto) => EditarUsuario("senha", texto)} />
                <CampoTexto campo="Escolaridade"        tipo="texto" callbackEntrada={(texto) => EditarUsuario("escolaridade", texto)} />
                <CampoData campo="Data de Nascimento"   callbackEntrada = {(data) => EditarUsuario("data_nascimento", data)} />
                <CampoTexto campo="UF"                  tipo="texto" callbackEntrada={(texto) => EditarUsuario("uf", texto)} />
                <CampoTexto campo="Cidade"              tipo="texto" callbackEntrada={(texto) => EditarUsuario("cidade", texto)} />
                <Botao title="CADASTRAR" onPress={Cadastrar}/>
            </View>
        </ScrollView>
    );
}

export default FormCadastro;