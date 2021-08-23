import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import stylesForm from '../../Stylesheets/stylesForm';
import styles from '../../Stylesheets/styles';

/* Propriedades
 * "campo": Define o nome que aparece no campo.
 * "tipo": Qual a informação inserida nesse campo. Isso muda a validação de dados e o jeito que o texto aparece no campo.
 *         Tipos possíveis: "email", "senha", "texto"
 * "callbackEntrada": Função a ser chamada quando algo for digitado no campo, chamando com o texto dentro do campo.
*/

const CampoTexto = (props) => {
    const [erro, setErro] = useState("");

    const ValidarCampo = (texto) => {
        switch (props.tipo) {
            case "email":
                // Usar regex pra ver se tem @, um domínio, etc.
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto)) {
                    setErro("Digite um email válido.");
                    return;
                }
                break;
            default:
                // Para outros tipos, só verifica se o campo está preenchido.
                if (texto.length === 0) {
                    setErro("Preencha esse campo.");
                    return;
                }
                break;
        }

        // Limpa o texto de erro se estiver tudo OK.
        setErro("");
    }

    const AtualizarTexto = (texto) => {
        // Dependendo do que o usuário digitou, mostrar uma mensagem de erro pra ajudar ele a escrever o valor certo
        ValidarCampo(texto);

        // "Callback" é uma função passada pra esse componente nos props, aqui ele chama ela com o texto digitado no campo.
        props.callbackEntrada(texto);
    }

    return (
        <View style={stylesForm.textFieldContainer}>
            <Text style={stylesForm.descricaoCampo}>{props.campo}</Text>
            <TextInput 
                style={stylesForm.textField}
                maxLength={100} 
                secureTextEntry={props.tipo === "senha"}
                onChangeText={(textoCampo) => AtualizarTexto(textoCampo)} 
            />
            <View style={stylesForm.textFieldShadow} pointerEvents="none"></View>
            <Text style={stylesForm.errorLog}>{erro}</Text>
        </View>
    );
}


export default CampoTexto;