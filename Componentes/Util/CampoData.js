import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import stylesForm from '../../Stylesheets/stylesForm';
import DateTimePicker from '@react-native-community/datetimepicker';

/* Propriedades
 * "campo": Define o nome que aparece no campo.
 * "callbackEntrada": Função a ser chamada quando uma data for selecionada. Passa o valor da data pra ela.
*/

const CampoData = (props) => {
    const [mostrarSelecionador, setMostrarSelecionador] = useState(false);
    const [data, setData] = useState(new Date());

    const SelecionarData = (dateObject) => {
        const novaData = dateObject["nativeEvent"]["timestamp"];
        setData(new Date(novaData));
        setMostrarSelecionador(false);
        props.callbackEntrada(FormatarData(new Date(novaData)));
    }

    const FormatarData = (data) => {
        const dia = data.getDate().toString();
        const mes = (data.getMonth() + 1).toString();
        const ano = data.getFullYear();

        const diaComZero = dia.length == 1 ? "0" + dia : dia;
        const mesComZero = mes.length == 1 ? "0" + mes : ano;

        return diaComZero + "/" + mesComZero + "/" + ano;
    }

    return (
        <View style={stylesForm.textFieldContainer}>
            <Text style={stylesForm.descricaoCampo}>{props.campo}</Text>
            {mostrarSelecionador && (
                <DateTimePicker
                testID="dateTimePicker"
                value={data}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={SelecionarData}
                />
            )}
            <View style={stylesForm.textField} pointerEvents="box-none">
            <TouchableWithoutFeedback
                onPress={() => setMostrarSelecionador(true)}
            >
                <Text style={stylesForm.dateFieldText}>{ FormatarData(data) }</Text>
            </TouchableWithoutFeedback>
            </View>
            <View style={stylesForm.textFieldShadow} pointerEvents="none"></View>
        </View>
    );
}


export default CampoData;