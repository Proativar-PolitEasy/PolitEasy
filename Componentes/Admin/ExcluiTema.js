import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Tema from '../../lib/database/Tema';
import Alternativa from '../../lib/database/Pergunta';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExcluiTema = ({ route, navigation }) => {
    const [temas, setTemas] = useState([]);
    const limiteTamanho = 40;

    useEffect(() => {
        Tema.RetornarTemas()
        .then(listaTemas => {
            for (let i = 0; i < listaTemas.length; i++) {
                if (listaTemas[i]['descricao'].length > limiteTamanho) {
                    listaTemas[i]['descricao'] = listaTemas[i]['descricao'].substring(0, limiteTamanho - 3) + '...';
                }
            }

            setTemas(listaTemas);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const RemoverTema = (tema) => {
        const idTema = tema['id'];
        Tema.DeletarTema(tema['id']);
        setTemas(temas.filter(p => p['id'] != idTema));
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                    <View style={{ flex: 0, width: '90%' }}>
                        <Text style={stylesForm.heading}>TEMAS</Text>

                        {
                            temas.length > 0
                            ?
                            temas.map(tema =>
                                <View style={ { ...stylesForm.textField, marginBottom: 10 } } key={tema['id']}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
                                        <Text style={{ width: '70%' }}>{ tema['descricao'] }</Text>
                                        <TouchableOpacity onPress={() => RemoverTema(tema)}>
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

export default ExcluiTema;