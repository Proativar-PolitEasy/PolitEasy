import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Sobre from '../Sobre/Sobre'

function Config({route, navigation}) {
    const Logout = () => {
        DeviceEventEmitter.emit("event.DeslogarUsuario");
        navigation.navigate("Home_oficial");
    }
    
    function Som(){
        let x=true;
    }
    function Vibra(){
        let x=true;
    }


    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', alignItems:'center', flexGrow:1}}>

                {/* SETAR PRA VOLTAR */}
                <View style={{width:'100%',height:'17%', justifyContent:'flex-end', marginLeft:15}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </TouchableOpacity>
                </View>

                {/* SOBRE */}
                <View style={{height:'4%', width:'100%', justifyContent:'center', alignItems:'flex-end', flexDirection:'row', marginLeft:'5%'}}>
                    <Text style={{color: "white", fontSize: 50, fontWeight: "bold", paddingBottom: 15, textAlign: "center"}}>Ajustes</Text>
                    <View style={{marginBottom:'5%'}}>
                        <AntDesign name='setting' size={50} color='white'/> 
                    </View>
                </View>


                <View style={{width:'90%',height:'50%', marginTop:'5%', marginBottom:'15%', borderRadius:18,
                            flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                    <TouchableOpacity style={estilos.boxconfigs}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Som Geral</Text>
                        <View style={{marginRight:20}}>
                            <Octicons name="unmute" size={50} color='white'/>
                            {/*<Octicons name="mute" size={50} color='white'/>        OP????O DESLIGADO           */}
                        </View>
                    </TouchableOpacity>

                    <View style={{height:10}}></View>

                    <TouchableOpacity style={estilos.boxconfigs}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Vibra????o</Text>
                        <View style={{marginRight:20}}>
                            <MaterialCommunityIcons name="vibrate" size={50} color='white'/>
                            {/*<MaterialCommunityIcons name="vibrate-off" size={50} color='white'/>        OP????O DESLIGADO           */}
                        </View>
                    </TouchableOpacity>

                    <View style={{height:10}}></View>

                    <TouchableOpacity style={estilos.boxconfigs} onPress={()=>{navigation.navigate('Sobre')}}>
                        <Text style={{fontSize:32, textAlign:'left', marginLeft:10, color:'white'}}>Sobre</Text>
                        <View style={{marginRight:20}}>
                            <FontAwesome name="info-circle" size={50} color='white'/>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{width:'100%',height:'20%',alignItems:'center',}}> 
                    <TouchableOpacity style={estilos.btn}
                                        onPress={() => Logout()}>
                        {/*BOT??O SAIR*/}

                        <View style={estilos.btnfundo}>
                            <Text style={{color:'white', fontSize:20}}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Base navigation={navigation} />
            </View>
        </View>
    );
};

export default Config;

const liga = (n) => {return n++}

const estilos = StyleSheet.create({
    btn:{
        width: 160,
        height: 60,
        elevation: 5,
        backgroundColor: "#9b0000",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9b0000",
        justifyContent: "center",
        alignItems: "center",},
    
    btnfundo:{
        marginBottom: 10,
        right: 1,
        width: 160,
        height: 50,
        elevation: 2,
        backgroundColor: "#c43c3c",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9b0000",
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