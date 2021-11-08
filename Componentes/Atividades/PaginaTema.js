import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import stylesTemas from '../../Stylesheets/stylesTemas';
import { EvilIcons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import Tema from '../../lib/database/Tema';

function PaginaTema({ route, navigation }) {
    const { temaEscolhido } = route.params;
    const logado = route.params.idUsuario.length !== 0;

    const acessarQuiz = () => {
        if (!logado) {
            // Redirecionar para página de login se não estiver logada
            navigation.navigate("Login");
        } else {
            // Acessar a página de Quiz
            navigation.navigate("Quizz", { idTemaEscolhido: temaEscolhido["id"] })
        }
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: '91%', }}>
                    <View style={{ width: '100%', height: '19%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ width: '70%', height: '41%', backgroundColor: 'white', borderRadius: 100 }}>
                            <EvilIcons name='search' size={50} />
                        </View>
                    </View>
                    <View style={stylesTemas.paginaTemaListContainer}>
                        <View style={stylesTemas.paginaTemaItemContainer}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("TextoTema", { textoTema: temaEscolhido["texto"], descricaoTema: temaEscolhido["descricao"] })}
                            >
                                <View style={stylesTemas.paginaTemaItem}>
                                    <Text>Texto</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesTemas.paginaTemaItemContainer}>
                            <TouchableOpacity onPress={() => acessarQuiz()}>
                                <View style={stylesTemas.paginaTemaItem}>
                                    <Text>Quiz</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Base navigation={navigation} />
                </View>
            </View>
        </ImageBackground>
    );
}

export default PaginaTema;