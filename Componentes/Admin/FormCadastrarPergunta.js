import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Pergunta from '../../lib/database/Pergunta';
import Tema from '../../lib/database/Tema';
import Alternativa from '../../lib/database/Pergunta';
import DropDownPicker from 'react-native-dropdown-picker';

const CadastrarPergunta = ({ route, navigation }) => {
    const [pergunta, setPergunta] = useState({
        "enunciado": "",
        "alternativas": [],
        "resposta": "",
        "tema": "",
    });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const listaOpcoes = [];

        Tema.RetornarTemas()
        .then(temas => {
            for (let i = 0; i < temas.length; i++) {
                listaOpcoes.push({label: temas[i]['descricao'], value: temas[i]['id']});
            }

            setItems(listaOpcoes);
        })
    }, []);

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
        if (!value)
            return false;

        if (pergunta["enunciado"].length === 0
            || pergunta["alternativas"][0].length === 0
            || pergunta["alternativas"][1].length === 0
            || pergunta["alternativas"][2].length === 0
            || pergunta["alternativas"][3].length === 0
            || pergunta["resposta"].length === 0
            || value.length === 0) {
            return false;
        }
        return true;
    }

    const Cadastrar = () => {
        let idPergunta;

        if (ValidaDados()) {
            Pergunta.SalvarPergunta(pergunta["enunciado"], pergunta["alternativas"], pergunta["resposta"], value);
            navigation.navigate("Home_oficial");
        }
        else {
            console.log("Erro de validação");
        }
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                    <View style={{ flex: 0, width: '90%' }}>
                        <Text style={stylesForm.heading}>PERGUNTAS</Text>

                        <CampoTexto campo="Enunciado" tipo="texto" callbackEntrada={(texto) => EditarPergunta("enunciado", texto)} />
                        <CampoTexto campo="Alternativa A" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'A')} />
                        <CampoTexto campo="Alternativa B" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'B')} />
                        <CampoTexto campo="Alternativa C" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'C')} />
                        <CampoTexto campo="Alternativa D" tipo="texto" callbackEntrada={(texto) => InserirAlternativa(texto, 'D')} />
                        <CampoTexto campo="Resposta" tipo="texto" callbackEntrada={(texto) => EditarPergunta("resposta", texto)} />
                        <Text style={stylesForm.descricaoCampo}>{'Tema'}</Text>
                        <DropDownPicker
                            style={{...stylesForm.textField}}
                            listMode={'MODAL'}
                            open={open}
                            value={value}
                            items={items}
                            loading={items.length > 0}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder={'Selecione um tema...'}
                        />
                        <View style={stylesForm.textFieldShadow} pointerEvents="none"></View>

                        <Botao title="CADASTRAR" onPress={Cadastrar} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

export default CadastrarPergunta;