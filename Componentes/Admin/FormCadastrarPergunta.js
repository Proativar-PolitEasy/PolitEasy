import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Pergunta from '../../lib/database/Pergunta';


const CadastrarPergunta = ({ route, navigation }) => {
    const [pergunta, setPergunta] = useState({
        "enunciado": "",
        "alternativas": "",
        "resposta": "",
        "tema": "",
    });

    const EditarPergunta = (propriedade, valor) => {
        // Atualiza o usuário no state
        const perguntaAntiga = { ...pergunta };
        perguntaAntiga[propriedade] = valor;
        setPergunta(perguntaAntiga);
    }

    const ValidaDados = () => {
        console.log(pergunta);
        // Checar algum campo não preenchido
        if (pergunta["enunciado"].length === 0
            || pergunta["alternativas"].length === 0
            || pergunta["resposta"].length === 0
            || pergunta["tema"].length === 0) {
            return false;
        }
        return true;
    }

    const Cadastrar = () => {
        let idPergunta;

        if (ValidaDados()) {
            Pergunta.SalvarPergunta(pergunta["enunciado"], pergunta["alternativas"], pergunta["resposta"], pergunta["tema"]);
            navigation.navigate("Home_oficial");
        }
        else {
            console.log("Erro de validação");
        }
    }

    return (
        <ScrollView>
            <View style={stylesForm.containerCadastro}>
                <Text style={stylesForm.heading}>PERGUNTAS</Text>

                <CampoTexto campo="enunciado" tipo="texto" callbackEntrada={(texto) => EditarPergunta("enunciado", texto)} />
                <CampoTexto campo="alternativas" tipo="texto" callbackEntrada={(texto) => EditarPergunta("alternativas", texto)} />
                <CampoTexto campo="resposta" tipo="texto" callbackEntrada={(texto) => EditarPergunta("resposta", texto)} />
                <CampoTexto campo="tema" tipo="texto" callbackEntrada={(texto) => EditarPergunta("tema", texto)} />

                <Botao title="CADASTRAR" onPress={Cadastrar} />
            </View>
        </ScrollView>
    );

}

export default CadastrarPergunta;