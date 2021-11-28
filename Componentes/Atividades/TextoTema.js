import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import Base from '../Barra_nav/Barra'

function TextoTema({route, navigation}) {
    const { textoTema, descricaoTema } = route.params;

    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#e3e3e3', flexGrow:1}}>
                <View style={{backgroundColor:'#092838'}}>
                    <Text style={{fontSize:40, marginTop: 20, color:'white', fontWeight:'bold', textAlign:'center'}}>{ descricaoTema }</Text>
                </View>
                <ScrollView style={{marginLeft:10, marginRight:10, backgroundColor:'#e3e3e3', marginBottom:-2}}>
                    <Text style={{fontSize:14, textAlign:'justify'}}>{ textoTema }</Text>
                </ScrollView>
                
            </View>
        </View>
    );
};

export default TextoTema;