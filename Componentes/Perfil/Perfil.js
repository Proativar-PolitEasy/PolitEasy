import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Perfil({navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', flexGrow:1}}>
                <View style={{width:'100%',height:'9%',flexDirection:"row",marginTop:25}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Rank')}}>
                            <AntDesign name='adduser' size={50} color='#545454'/> 
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'row-reverse'}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Config')}} >
                            <AntDesign name='setting' size={50} color='#545454'/> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:'50%',flexDirection:'row'}}>
                    <View style={{flexGrow:1,}}></View>
                    <View style={{flexGrow:1,alignItems:'center', justifyContent:'flex-start'}}>
                        <FontAwesome name='user-circle' size={200} color='#545454'/>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={[estilos.sombra,estilos.btn]}>
                                <Text style={estilos.txtbtn}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')} style={[estilos.sombra,estilos.btn]}>
                                <Text style={estilos.txtbtn}>CRIAR CONTA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexGrow:1,}}>
                    </View>
                </View>
                <View style={{flexGrow:1, height:'32%'}}>
                    <View style={{width:'100%', height:'20%'}}>
                        <Text style={{fontSize:30, textAlign:'center', textAlignVertical:'center'}}>ESTATÍSTICAS</Text>
                    </View>
                    <View style={{width:'100%', height:'80%', flexDirection:'row'}}>
                        <View style={{width:'10%', height:'100%', }}></View>
                        <View style={{width:'40%', height:'100%', alignItems:'flex-start', justifyContent:'space-around'}}>
                            <Text style={estilos.txtestatistica}>Escolaridade:</Text>
                            <Text style={estilos.txtestatistica}>Perguntas:</Text>
                            <Text style={estilos.txtestatistica}>Acertos:</Text>
                            <Text style={estilos.txtestatistica}>Ranking:</Text>
                        </View>
                        <View style={{width:'40%', height:'100%', alignItems:'flex-end', justifyContent:'space-around'}}>
                            <Text style={estilos.infoestatistica}>Aluno</Text>
                            <Text style={estilos.infoestatistica}>250</Text>
                            <Text style={estilos.infoestatistica}>170</Text>
                            <Text style={estilos.infoestatistica}>Diamante</Text>
                        </View>
                        <View style={{width:'10%', height:'100%',}}></View>
                    </View>
                </View>
            </View>
            <View>
                <Base/>
            </View>
        </View>
    );
};

export default Perfil;

const estilos = StyleSheet.create({
    sombra:{
    borderRadius:2, 
    backgroundColor:'#0e577d',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 7,},
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,},

    txtbtn:{
        textAlign:'center', 
        textAlignVertical:'center',
        color:'white',
        fontSize:16
    },

    btn:{
        width:'40%',
        height:'50%',
        textAlign:'center', 
        justifyContent:'center',
        color:'white',
        margin:5
    },

    txtestatistica:{
        fontSize:20,
        fontWeight:'bold'
    },

    infoestatistica:{
        fontSize:20,
    }
})