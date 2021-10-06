import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Quizz({route, navigation: { goBack }}) {
    return (
        <View style={{flex:1,backgroundColor:'#fac287', alignItems:'center'}}>
            <View style={{width:'100%', height:25, backgroundColor:'white'}}></View>

            {/* CABEÇALHO */}
            <View style={{width:'100%',height:'10%', justifyContent:'center', backgroundColor:'#f59e42', flexDirection:'row'}}>

                <View style={{height:'100%', width:'15%', justifyContent:"center", alignItems:'flex-end',marginRight:"3%"}}>{/* SETA VOLTAR*/}
                    <TouchableOpacity onPress={() => goBack()}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </TouchableOpacity>
                </View>

                <View style={{height:'100%', width:'60%', justifyContent:"center", alignItems:'center',}}>{/* TITULO */}
                    <Text style={{fontFamily:'Roboto', fontSize:30,}}>TEMA QUIZZ</Text>
                </View>

                <View style={{height:'100%', width:'15%', justifyContent:"center", alignItems:'center',flexDirection:'row',marginRight:"3%"}}>{/* CRONOMETRO */}
                    <MaterialCommunityIcons name="timer-outline" size={45} color="white"/>
                    <Text style={{fontFamily:'Roboto', fontSize:30, fontWeight:'bold', color:'white',}}>60'</Text>
                </View>

            </View>

            {/* BARRA DO TEMPO -> width vai aumentando e ao quanto mais anda o verde vai ficando vermelho */}
            <View style={{height:10, width:'100%', backgroundColor:'white', flexDirection:'row'}}>
                <View style={{height:'100%', width:'20%', backgroundColor:'#6ac740'}}></View>
            </View>

            {/* CAIXA DE TEXTO DA PERGUNTA */}
            <View style={{backgroundColor:'#77838d', height:'40%', width:'95%', marginTop:'3%', borderRadius:10, justifyContent:'center', alignItems:'center', elevation:20, backgroundColor:'orange'}}>
              <View style={{height:'95%', width:'96.5%', backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={estilos.txtpergunta}>AQUI  É  O  TEXTO  DA  PERGUNTA ! ! ! </Text>
              </View>
            </View>

            <View style={{width:'100%',height:'20%',alignItems:'center', marginTop:'5%'}}>

                <TouchableOpacity style={estilos.btn}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>O P Ç Ã O  1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>O P Ç Ã O  2</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>O P Ç Ã O  3</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>O P Ç Ã O  4</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>

    );
};

export default Quizz;

const estilos = StyleSheet.create({
    btn:{
        width: '75%',
        height: 45,
        elevation: 5,
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
        fontSize:22, 
        textAlign:'center', 
        textAlignVertical:'center', 
        textAlign:'center'},

    txtoption:{
        color:'white', 
        fontSize:20},
})