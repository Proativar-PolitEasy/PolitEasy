import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Pergunta from '../../lib/database/Pergunta';
import Alternativa from '../../lib/database/Pergunta';

const CadastrarPergunta = ({ route, navigation }) => {
    const [pergunta, setPergunta] = useState({
        "enunciado": "",
        "alternativas": [],
        "resposta": "",
        "tema": "",
    });

    const EditarPergunta = (propriedade, valor) => {
        // Atualiza o usuário no state
        const perguntaAntiga = { ...pergunta };
        perguntaAntiga[propriedade] = valor;
        setPergunta(perguntaAntiga);
    }

    const InserirAlternativa = (texto, letra) => {
        const alternativas = pergunta["alternativas"];
        const alternativaMesmaLetra = alternativas.find(alt => alt["letra"] === letra);
        const novaAlternativa = Pergunta.CriarAlternativa(texto, letra);
        const perguntaAntiga = pergunta;

        if (alternativaMesmaLetra) {
            alternativas[alternativas.indexOf(alternativaMesmaLetra)] = novaAlternativa;
        } else {
            alternativas.push(novaAlternativa);
        }

        perguntaAntiga["alternativas"] = alternativas;
        setPergunta(perguntaAntiga);
    }


    const ValidaDados = () => {
        console.log(pergunta);
        // Checar algum campo não preenchido
        if (pergunta["enunciado"].length === 0
            || pergunta["alternativas"][0].length === 0
            || pergunta["alternativas"][1].length === 0
            || pergunta["alternativas"][2].length === 0
            || pergunta["alternativas"][3].length === 0
            || pergunta["alternativas"][4].length === 0
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

                <CampoTexto campo="Enunciado" tipo="texto" callbackEntrada={(texto) => EditarPergunta("enunciado", texto)} />
                <CampoTexto campo="Alternativa A" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'A')} />
                <CampoTexto campo="Alternativa B" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'B')} />
                <CampoTexto campo="Alternativa C" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'C')} />
                <CampoTexto campo="Alternativa D" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'D')} />
                <CampoTexto campo="Alternativa E" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'E')} />
                <CampoTexto campo="Resposta" tipo="texto" callbackEntrada={(texto) => EditarPergunta("resposta", texto)} />
                <CampoTexto campo="Tema" tipo="texto" callbackEntrada={(texto) => EditarPergunta("tema", texto)} />

                <Botao title="CADASTRAR" onPress={Cadastrar} />
            </View>
        </ScrollView>
    );

}

export default CadastrarPergunta;