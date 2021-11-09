import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import CampoTexto from '../Util/CampoTexto';
import CampoData from '../Util/CampoData';
import Botao from '../Util/Botao';
import stylesForm from '../../Stylesheets/stylesForm';
import Usuario from '../../lib/database/Usuario';
import ModalAvatar from './ModalAvatar';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Pontuacao from '../../lib/database/Pontuacao';
import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';

const FormatarData = (data) => {
    const dia = data.getDate().toString();
    const mes = (data.getMonth() + 1).toString();
    const ano = data.getFullYear();

    const diaComZero = dia.length == 1 ? "0" + dia : dia;
    const mesComZero = mes.length == 1 ? "0" + mes : mes;

    return diaComZero + "/" + mesComZero + "/" + ano;
}

const FormCadastro = ({ route, navigation }) => {
    const [usuario, setUsuario] = useState({
        "nome": "",
        "email": "",
        "senha": "",
        "escolaridade": "",
        "data_nascimento": FormatarData(new Date()),
        "uf": "",
        "cidade": ""
    });
    const [modalVisivel, setModalVisivel] = useState(false);
    const [avatar, setAvatar] = useState(0);

    // Caminhos manuais porque require não aceita caminho dinâmico
    const opcoesAvatar = [
        require('../../assets/avatares/avatar0.png'),
        require('../../assets/avatares/avatar1.png'),
        require('../../assets/avatares/avatar2.png'),
        require('../../assets/avatares/avatar3.png'),
        require('../../assets/avatares/avatar4.png'),
        require('../../assets/avatares/avatar5.png'),
        require('../../assets/avatares/avatar6.png'),
        require('../../assets/avatares/avatar7.png'),
    ];

    const EditarUsuario = (propriedade, valor) => {
        // Atualiza o usuário no state
        const usuarioAntigo = { ...usuario };
        usuarioAntigo[propriedade] = valor;
        setUsuario(usuarioAntigo);
    }

    const ValidaDados = () => {
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
                    // Configurar criptografador.
                    bcrypt.setRandomFallback((len) => {
                        const buf = new Uint8Array(len);
                        return buf.map(() => Math.floor(isaac.random() * 256));
                    });

                    // Criptografa a senha e salva no banco.
                    bcrypt.genSalt(10, (error, salt) => {
                        bcrypt.hash(usuario["senha"], salt, (err, hash) => {
                            const usuarioSenhaCriptografada = usuario;
                            usuarioSenhaCriptografada["senha"] = hash;
                            idUsuario = Usuario.SalvarUsuario(usuarioSenhaCriptografada);
                            Usuario.SalvarAvatar(idUsuario, avatar);
                            Pontuacao.SalvarPontuacao(idUsuario, 0);
                            navigation.navigate("Home_oficial");
                        });
                    });
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

    const AbrirJanela = () => {
        // Abre janela de avatares
        setModalVisivel(true);
    }

    const FecharJanela = (avatarSelecionado = null) => {
        // Fecha janela de avatares.
        setModalVisivel(false);

        // Se o componente que chamou essa função passar um avatar, atribuir como o avatar escolhido pelo usuário.
        if (avatarSelecionado != null) {
            setAvatar(avatarSelecionado);
        }
    }

    return (
        <ScrollView>
            <View style={stylesForm.containerCadastro}>
                <Text style={stylesForm.heading}>CADASTRO</Text>

                <View style={stylesForm.avatarPicker}>
                    <Image source={opcoesAvatar[avatar]} style={stylesForm.avatarPreview}/>
                    <ModalAvatar visible={modalVisivel} onRequestClose={FecharJanela} />
                </View>

                <Botao title="Adicionar avatar" onPress={AbrirJanela}/>
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