import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome5} from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Perfil({navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', flexGrow:1}}>
                <View style={{width:'100%',height:'9%',flexDirection:"row",marginTop:25}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <TouchableOpacity>
                            <AntDesign name='adduser' size={50} color='#545454'/> 
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'row-reverse'}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Config')}} >
                            <AntDesign name='setting' size={50} color='#545454'/> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:'60%',flexDirection:'row'}}>
                    <View style={{flexGrow:1,}}></View>
                    <View style={{flexGrow:1,alignItems:'center', justifyContent:'flex-start'}}>
                        <FontAwesome5 name='user-graduate' size={200} color='#545454'/>
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
                <Text style={{fontSize:40, textAlign:'center', textAlignVertical:'center'}}></Text>
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
        color:'white'
    },

    btn:{
        width:'40%',
        height:'40%',
        textAlign:'center', 
        justifyContent:'center',
        color:'white',
        margin:5
    }
})