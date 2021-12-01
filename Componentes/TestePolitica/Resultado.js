import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Resultado({route, navigation}) {
    return(
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'100%', backgroundColor:'#16abb2'}}>
                
                <View style={{width:'100%', height:'3.5%', backgroundColor:'white'}}></View>

                <View style={{width:'100%',height:'25%', alignItems:'center',flexDirection:'row', backgroundColor:'#092838'}}>
                    {/* TESTE POLÍTICO */}
                    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={{width:'33%', height:'100%', alignItems:'center'}}></View>
                            <View style={{width:'33%', height:'100%', alignItems:'center',}}><Ionicons name="ios-compass" size={80} color="white"/></View>
                            <TouchableOpacity onPress={()=>somatoria()} style={{width:'33%', height:'100%', alignItems:'flex-end', marginTop:'3%'}}>
                                <MaterialCommunityIcons name="exit-to-app" size={50} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%', height:'50%',}}><Text style={{fontWeight:'bold', fontSize:45, textAlign:'center', color:'white'}}>Teste Politico</Text></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Resultado;