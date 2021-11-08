import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Pergunta from '../../lib/database/Pergunta';

function Quizz({route, navigation: { goBack }}) {
    const { idTemaEscolhido } = route.params;
    const [pergunta, setPergunta] = useState(null);
    const [notificacao, setNotificacao] = useState("");

    useEffect(() => {
        Pergunta.RetornarPerguntasPorTema(idTemaEscolhido)
        .then((perguntas) => {
            // Seleciona pergunta aleatória
            setPergunta(perguntas[Math.floor(Math.random() * perguntas.length)]);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const ResponderPergunta = (letra) => {
        if (letra === pergunta["resposta"]) {
            setNotificacao("\n\nVocê acertou!");
        } else {
            setNotificacao("\n\nVocê errou! A resposta era " + pergunta["resposta"]);
        }
    }

    return (
        <ImageBackground source={require('../../assets/bg_historia.jpg')} style={{flex:1, alignItems:'center'}}>
            <View style={{width:'100%', height:25, backgroundColor:'white'}}></View>

            {/* CABEÇALHO */}
            <View style={{width:'100%',height:'10%', justifyContent:'center', backgroundColor:'#a3672a', flexDirection:'row'}}>
                <View style={{height:'100%', width:'15%', justifyContent:"center", alignItems:'flex-end',marginRight:"3%"}}>{/* SETA VOLTAR*/}
                    <TouchableOpacity onPress={() => goBack()}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{height:'100%', width:'60%', justifyContent:"center", alignItems:'center',}}>{/* TITULO */}
                    <Text style={{fontFamily:'Roboto', fontSize:30,}}>QUIZ</Text>
                </View>
                <View style={{height:'100%', width:'15%', justifyContent:"center", alignItems:'center',flexDirection:'row',marginRight:"3%"}}>
                </View>
            </View>

            {/* CAIXA DE TEXTO DA PERGUNTA */}
            <View style={{height:'35%', width:'95%', marginTop:'3%', borderRadius:10, justifyContent:'center', alignItems:'center', elevation:5, backgroundColor:'#a3672a'}}>
                <View style={{height:'94%', width:'96.5%', backgroundColor:'white', borderRadius:10,justifyContent:'flex-end'}}>
                    <View style={{width:'100%', height:'85%', justifyContent:'center'}}>
                        <Text style={estilos.txtpergunta}>{ pergunta ? pergunta["enunciado"] : "Carregando..." }{ notificacao }</Text>
                    </View>
                    <View style={{backgroundColor:'#a3672a', height:'15%'}}>
                        <Text style={{fontSize:22, textAlign:'center'}}>1 / 10</Text>
                    </View>
                </View>
            </View>

            {/* OPÇÕES */}
            <View style={{width:'100%',height:'35%',alignItems:'center', marginTop:'5%',}}>
                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("A")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "A")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("B")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "B")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("C")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "C")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("D")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "D")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>Alert.alert('COMO JOGAR?','Para jogar é muito simples, serão feitas 10 perguntas sobre o tema escolhido e para cada pergunta terá 4 opções, sendo uma delas a opção correta e 3 erradas. O jogador deve ler, interpretar as questões e tentar responder o maior número de questões da maneira correta. Leia os textos de apoio e teste seu conhecimento em nossos quizes preparados especialmente para testar suas habilidades, boa sorte!!!!')} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                <Ionicons name="help-circle-outline" size={50} color="#6d767d"/>
            </TouchableOpacity>

        </ImageBackground>

    );
};

export default Quizz;

const estilos = StyleSheet.create({
    btn:{
        width: '75%',
        height: 45,
        elevation: 2,
        backgroundColor: "#9aa7b2",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9aa7b2",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10},

    btnfundo:{
        marginBottom: 10,
        right: 1,
        width: '100%',
        height: 40,
        elevation: 2,
        backgroundColor: "#c7d0d8",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9aa7b2",
        justifyContent: "center",
        alignItems: "center",},

    txtpergunta:{
        fontSize:16, 
        color: "#1f2136",
        textAlignVertical:'center', 
        textAlign:'center'},

    txtoption:{
        textAlign: "center",
        color:'#1f2136', 
        fontSize:10},
})