import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../../Stylesheets/styles';
import stylesForm from '../../Stylesheets/stylesForm';

/*
* title = O que será mostrado no botão
* onPress = Função a chamar quando tocarem no botão
*/

const Botao = (props) => {
    return (
        <View>
            <TouchableHighlight style={stylesForm.button} onPress={props.onPress}>
                <Text style={stylesForm.buttonText}>{props.title}</Text>
            </TouchableHighlight>
            <View style={stylesForm.buttonShadow} pointerEvents="none"></View>
        </View>
    );
}

export default Botao;