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
    const { descricaoTema } = route.params;

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


                    <View style={{width:'100%', height:'25%', alignItems:'center', justifyContent:'center', flexDirection:'row', backgroundColor:'#092838'}}>
                        <View style={{ width: '70%', height: '41%', backgroundColor: 'white', borderRadius: 10, alignItems:'center', justifyContent:'center', marginTop:'10%' }}>
                            <Text style={{fontSize:26, color:'black'}}>DESCRIÇÃO TEMA{ descricaoTema }</Text>
                        </View>
                    </View>
                    <View style={stylesTemas.paginaTemaListContainer}>
                        <View style={stylesTemas.paginaTemaItemContainer1}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("TextoTema", { textoTema: temaEscolhido["texto"], descricaoTema: temaEscolhido["descricao"] })}
                            >
                                <View style={stylesTemas.paginaTemaItem}>
                                    <Image source={require('../../assets/textoquiz/exclamacao.png')} style={{width:'45%', height:'100%', resizeMode:'contain', marginLeft: -20}}/>
                                    <Text style={{fontSize:70, marginLeft:-20, fontWeight: 'bold'}}>Texto</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesTemas.paginaTemaItemContainer2}>
                            <TouchableOpacity onPress={() => acessarQuiz()}>
                                <View style={stylesTemas.paginaTemaItem}>
                                    <Text style={{fontSize:70, marginRight:-10, fontWeight: 'bold'}}>Quiz</Text>
                                    <Image source={require('../../assets/textoquiz/interrogacao.png')} style={{width:'45%', height:'100%', resizeMode:'contain', marginRight: -10}}/>
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