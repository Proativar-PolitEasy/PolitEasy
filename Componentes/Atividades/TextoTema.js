import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import Base from '../Barra_nav/Barra'

function TextoTema({route, navigation}) {
    const { textoTema, descricaoTema } = route.params;

    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', flexGrow:1}}>
                <Text style={{fontSize:40, marginTop: 50}}>{ descricaoTema }</Text>
                <Text style={{fontSize:20}}>{ textoTema }</Text>
            </View>
            <View>
                <Base navigation={navigation}/>
            </View>
        </View>
    );
};

export default TextoTema;