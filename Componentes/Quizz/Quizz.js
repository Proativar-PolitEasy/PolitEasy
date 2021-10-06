import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Quizz({route, navigation: { goBack }}) {
    return (
        <ImageBackground source={require('../../assets/bg_historia.jpg')} style={{flex:1, alignItems:'center'}}>
            <View style={{width:'100%', height:25, backgroundColor:'white'}}></View>

            {/* CABEÇALHO */}
            <View style={{width:'100%',height:'10%', justifyContent:'center', backgroundColor:'#cc8135', flexDirection:'row'}}>
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

            {/* CAIXA DE TEXTO DA PERGUNTA */}
            <View style={{height:'35%', width:'95%', marginTop:'3%', borderRadius:10, justifyContent:'center', alignItems:'center', elevation:5, backgroundColor:'#cc8135'}}>
                <View style={{height:'94%', width:'96.5%', backgroundColor:'white', borderRadius:10,justifyContent:'flex-end'}}>
                    <View style={{width:'100%', height:'85%', justifyContent:'center'}}>
                        <Text style={estilos.txtpergunta}>AQUI  É  O  TEXTO  DA  PERGUNTA ! ! ! </Text>
                    </View>
                    <View style={{backgroundColor:'#cc8135', height:'15%'}}>
                        <Text style={{fontSize:22, textAlign:'center'}}>1 / 10</Text>
                    </View>
                </View>
            </View>

            {/* OPÇÕES */}
            <View style={{width:'100%',height:'35%',alignItems:'center', marginTop:'5%',}}>

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

            <TouchableOpacity onPress={()=>Alert.alert('COMO JOGAR?','BLABLABALBLABLALBALBLABLABLLA')} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
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
        fontSize:22, 
        textAlignVertical:'center', 
        textAlign:'center'},

    txtoption:{
        color:'white', 
        fontSize:20},
})