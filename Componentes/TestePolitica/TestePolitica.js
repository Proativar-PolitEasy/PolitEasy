import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function TestePolitica({route, navigation}) {
    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1,}}>
            
            <View style={{width:'100%', height:'91%', alignItems:'center', justifyContent:'flex-start'}}>

                {/*<View style={{width:'100%', height:'25%', alignItems:'center', justifyContent:'center', flexDirection:'row',}}>
                    <View style={{ width: '75%', height: '50%', backgroundColor:'black', borderRadius: 10, alignItems:'center', justifyContent:'center', marginTop:'10%' }}>*/}
                        <View style={{width:'94%', height:'25%', borderRadius:5, alignItems:'center', justifyContent:'flex-end'}}>
                            <Text style={{fontWeight:'bold', fontSize:45, color:'#092838', textAlign:'center'}}>ESPECTRO POLÍTICO</Text>
                        </View>
                    {/*</View>
                </View>*/}

                <View style={{width:'80%', height:'45%', marginTop:'2%', flexDirection:'row'}}>
                    <Image source={require('../../assets/textoquiz/cerebro.png')} style={{resizeMode:'contain', width:'100%', height:'100%'}}/>
                </View>

                <TouchableOpacity onPress={()=>Alert.alert('O QUE É?','Bem-vindo ao Teste do Espectro Político! Aqui você descobrirá qual a sua posição política. Serão feitas perguntas sobre política e o âmbito social, você deverá responder de acordo com suas opiniões pessoais. Depois de responder as perguntas, nosso app revelará seu posicionamento político (esquerda ou direita).')}
                style={{width:'35%',height:'20%',alignItems:'center', marginTop:'2%'}}> 
                    <View style={estilos.btn}>
                        <View style={estilos.btnfundo}>
                            <Text style={{color:'white', fontSize:20}}>O QUE É?</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Perguntas")} 
                style={{width:'35%',height:'20%',alignItems:'center', marginTop:'-10%'}}> 
                    <View style={estilos.btn1}>
                        <View style={estilos.btnfundo1}>
                            <Text style={{color:'white', fontSize:20}}>COMEÇAR</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            
            <View>
                <Base navigation={navigation} />
            </View>

        </ImageBackground>
    );
};

const estilos = StyleSheet.create({
    btn:{
        width: 160,
        height: 60,
        elevation: 5,
        backgroundColor: "#004096",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#004096",
        justifyContent: "center",
        alignItems: "center",},
    btn1:{
        width: 160,
        height: 60,
        elevation: 5,
        backgroundColor: "#096b00",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#096b00",
        justifyContent: "center",
        alignItems: "center",},
    
    btnfundo:{
        marginBottom: 10,
        right: 1,
        width: 160,
        height: 50,
        elevation: 2,
        backgroundColor: "#0070c8",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#004096",
        justifyContent: "center",
        alignItems: "center"},
    btnfundo1:{
        marginBottom: 10,
        right: 1,
        width: 160,
        height: 50,
        elevation: 2,
        backgroundColor: "#0d9d00",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#096b00",
        justifyContent: "center",
        alignItems: "center"},

    boxconfigs:{
        flexDirection:'row',
        width: '80%',
        height: 60,
        elevation: 5,
        backgroundColor: "#0e587d",
        borderRadius: 18,
        borderColor: "#0e587d",
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})


export default TestePolitica;
