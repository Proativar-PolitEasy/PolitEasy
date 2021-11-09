import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function TestePolitica({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'91%', backgroundColor:'#16abb2', justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Perguntas")} style={{width:'20%', height:'20%', backgroundColor:'red'}}></TouchableOpacity>
            </View>
            <View>
                <Base navigation={navigation} />
            </View>

        </View>
    );
};




export default TestePolitica;
