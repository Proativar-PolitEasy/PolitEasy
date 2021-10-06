import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function TestePolitica({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', flexGrow:1}}>
                <Text style={{fontSize:40}}>AQUI É O TESTE</Text>
            </View>
            <View>
                <Base navigation={navigation}/>
            </View>
        </View>
    );
};

export default TestePolitica;