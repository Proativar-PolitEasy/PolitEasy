import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { AntDesign, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Sobre from '../Sobre/Sobre'

function Config({navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', alignItems:'center', flexGrow:1}}>
                <View style={{width:'100%',height:'15%', justifyContent:'flex-end', marginLeft:15}}>
                </View>

                <View style={{width:'90%',height:'50%', marginTop:'5%', marginBottom:'20%', borderRadius:18,
                            flexDirection:'column', alignItems:'center', justifyContent:'space-around',}}>
                    <View style={estilos.boxconfigs}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Som Geral</Text>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Octicons name="unmute" size={50} color='white'/>
                            <Octicons name="mute" size={50} color='white'/>
                        </TouchableOpacity>
                    </View>
                    <View style={estilos.boxconfigs}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Notificações</Text>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Ionicons name="notifications" size={50} color='white'/>
                            <Ionicons name="notifications-off" size={50} color='white'/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={estilos.boxconfigs} onPress={()=>{navigation.navigate('Sobre')}}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Sobre</Text>
                        <View style={{marginRight:20}}>
                            <FontAwesome name="info-circle" size={50} color='white'/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{width:'100%',height:'20%',alignItems:'center'}}>
                    <TouchableOpacity style={{
                                            width: 160,
                                            height: 40,
                                            elevation: 5,
                                            backgroundColor: "#9b0000",
                                            borderRadius: 18,
                                            borderWidth: 1,
                                            borderColor: "#9b0000",
                                            justifyContent: "center",
                                            alignItems: "center",}}>
                        <View style={{marginBottom: 20,
                                        right: 1,
                                        width: 160,
                                        height: 50,
                                        elevation: 2,
                                        backgroundColor: "#c43c3c",
                                        borderRadius: 18,
                                        borderWidth: 1,
                                        borderColor: "#9b0000",
                                        justifyContent: "center",
                                        alignItems: "center"}}>
                            <Text style={{color:'white', fontSize:20}}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Base/>
            </View>
        </View>
    );
};

export default Config;

const liga = (n) => {return n++}

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
        color:'white'
    },

    btn:{
        width:'40%',
        height:'40%',
        textAlign:'center', 
        justifyContent:'center',
        color:'white',
        margin:5
    },

    boxconfigs:{
        flexDirection:'row',
        width: '80%',
        height: 60,
        elevation: 5,
        backgroundColor: "#0e587d",
        borderRadius: 18,
        borderColor: "#0e587d",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})