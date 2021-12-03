import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Pergunta from '../../lib/database/Pergunta';
import Alternativa from '../../lib/database/Pergunta';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExcluiPergunta = ({ route, navigation }) => {
    const [perguntas, setPerguntas] = useState([]);
    const limiteTamanho = 40;

    useEffect(() => {
        Pergunta.RetornarPerguntas()
        .then(questoes => {
            for (let i = 0; i < questoes.length; i++) {
                if (questoes[i]['enunciado'].length > limiteTamanho) {
                    questoes[i]['enunciado'] = questoes[i]['enunciado'].substring(0, limiteTamanho - 3) + '...';
                }
            }

            setPerguntas(questoes);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const RemoverPergunta = (pergunta) => {
        const idPergunta = pergunta['id'];
        Pergunta.DeletarPergunta(pergunta['id']);
        setPerguntas(perguntas.filter(p => p['id'] != idPergunta));
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                    <View style={{ flex: 0, width: '90%' }}>
                        <Text style={stylesForm.heading}>PERGUNTAS</Text>

                        {
                            perguntas.length > 0
                            ?
                            perguntas.map(questao =>
                                <View style={ { ...stylesForm.textField, marginBottom: 10 } } key={questao['id']}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
                                        <Text style={{ width: '70%' }}>{ questao['enunciado'] }</Text>
                                        <TouchableOpacity onPress={() => RemoverPergunta(questao)}>
                                            <FontAwesome name='trash' size={20} color='#545454' />
                                        </TouchableOpacity>
                                    </View>
                                </View>)
                            :
                            <Text>Carregando...</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

export default ExcluiPergunta;