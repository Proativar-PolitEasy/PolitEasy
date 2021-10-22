import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Tema from '../../lib/database/Tema';


const CadastrarTema = ({ route, navigation }) => {
    const [tema, setTema] = useState({
        "descricao": "",
        "materia": "",
    });

    const EditarTema = (propriedade, valor) => {
        // Atualiza o usuário no state
        const temaAntigo = { ...tema };
        temaAntigo[propriedade] = valor;
        setTema(temaAntigo);
    }

    const ValidaDados = () => {
        console.log(tema);
        // Checar algum campo não preenchido
        if (tema["descricao"].length === 0
            || tema["materia"].length === 0
            || tema["texto"].length === 0) {
            return false;
        }
        return true;
    }



    const Cadastrar = () => {
        let idTema;

        if (ValidaDados()) {
            Tema.SalvarTema(tema["descricao"], tema["materia"], tema["texto"]);
            navigation.navigate("Home_oficial");
        }
        else {
            console.log("Erro de validação");
        }
    }

    return (
        <ScrollView>
            <View style={stylesForm.containerCadastro}>
                <Text style={stylesForm.heading}>TEMA</Text>

                <CampoTexto campo="materia" tipo="texto" callbackEntrada={(texto) => EditarTema("materia", texto)} />
                <CampoTexto campo="descricao" tipo="texto" callbackEntrada={(texto) => EditarTema("descricao", texto)} />
                <CampoTexto campo="texto" tipo="texto" callbackEntrada={(texto) => EditarTema("texto", texto)} />

                <Botao title="CADASTRAR" onPress={Cadastrar} />
            </View>
        </ScrollView>
    );

}

export default CadastrarTema;