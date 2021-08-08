import 'react-native-gesture-handler';
import React from 'react';
import { View, TextInput } from 'react-native';
import stylesForm from '../../Stylesheets/stylesForm';

/* Propriedades
 * "campo": Define o nome que aparece no campo.
 * "isPassword": Define se será um campo de senha (texto será escondido).
 * "callbackEntrada": Função a ser chamada quando algo for digitado no campo, chamando com o texto dentro do campo.
*/

const CampoTexto = (props) => {
    // Caso o campo isPassword seja especificado, usar seu valor. Caso contrário setar como false.
    let isPassword;

    if (props.isPassword == null){
        isPassword = false;
    } else {
        isPassword = props.isPassword;
    }

    return (
        <View>
            <TextInput 
                style={stylesForm.textField}
                placeholder={props.campo} 
                maxLength={100} 
                secureTextEntry={props.isPassword}
                onChangeText={(textoCampo) => props.callbackEntrada(textoCampo)} 
            />
        </View>
    );
}


export default CampoTexto;