import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function TestePolitica({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'91%', backgroundColor:'#16abb2'}}>
                
                <View style={{width:'100%', height:'4%', backgroundColor:'white'}}></View>

                <View style={{width:'100%',height:'25%', alignItems:'center',flexDirection:'row', backgroundColor:'#092838'}}>

                        {/* TESTE POLÍTICO */}
                        <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                            <Ionicons name="ios-compass" size={80} color="white"/>
                            <View style={{width:'100%', height:'50%',}}><Text style={{fontWeight:'bold', fontSize:45, textAlign:'center', color:'white'}}>Teste Politico</Text></View>
                        </View>
                </View>

                {/* CORPO DO TESTEEEEEE */}
                <View style={{height:'71%', width:'100%', backgroundColor:'#cad3e0', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'100%', width:'100%', backgroundColor:'blue', alignItems:'center'}}>

                        <View style={{height:'20%', width:'90%', borderRadius:10, backgroundColor:'lightblue'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center'}}>VOCÊ É A FAVOR DO ABORTO?</Text>
                        </View>
                        <View style={{width:'80%', height:'10%', flexDirection:'row'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#ff1616', borderTopLeftRadius: 20, borderBottomLeftRadius:25}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#ff5757'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'grey'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#7ed957'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#009942', borderTopRightRadius:25, borderBottomEndRadius:25}}></TouchableOpacity>
                        </View>
                    </View>                    
                </View>

            </View>

            <View>
                <Base navigation={navigation} />
            </View>

        </View>
    );
};

export default TestePolitica;