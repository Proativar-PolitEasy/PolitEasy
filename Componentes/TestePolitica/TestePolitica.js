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
                    <View style={{width:'80%', height:'10%', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', backgroundColor:'#ff1616', borderTopLeftRadius: 20, borderBottomLeftRadius:25}}></View>
                        <View style={{width:'20%', height:'100%', backgroundColor:'#ff5757'}}></View>
                        <View style={{width:'20%', height:'100%', backgroundColor:'grey'}}></View>
                        <View style={{width:'20%', height:'100%', backgroundColor:'#7ed957'}}></View>
                        <View style={{width:'20%', height:'100%', backgroundColor:'#009942', borderTopRightRadius:25, borderBottomEndRadius:25}}></View>
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