import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Admin({ route, navigation }) {
    return (

        <View style={{ flex: 1,}}>
            <View style={{ width: '100%', height: '100%', backgroundColor: "#16abb2", alignItems: 'center', justifyContent: "space-around" }}>

                <Text style={estilos.titulo}> {"\n"}  Admin   </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('CadastrarPergunta') }} style={[estilos.sombra, estilos.btn]}>
                    <Text style={estilos.txtbtn}>Cadastrar Pergunta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('CadastrarTema') }} style={[estilos.sombra, estilos.btn]}>
                    <Text style={estilos.txtbtn}>Cadastrar Tema</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('ExcluiPergunta') }} style={[estilos.sombra, estilos.btn]}>
                    <Text style={estilos.txtbtn}>Ecluir Pergunta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('ExcluiTema') }} style={[estilos.sombra, estilos.btn]}>
                    <Text style={estilos.txtbtn}>Excluir Tema</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('ExcluiUsuario') }} style={[estilos.sombra, estilos.btn]}>
                    <Text style={estilos.txtbtn}>Excluir Usuario</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};
export default Admin;

const estilos = StyleSheet.create({
    sombra: {
        borderRadius: 2,
        backgroundColor: '#0e577d',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },

    txtbtn: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 16
    },

    btn: {
        width: 200,
        height: 80,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: 5
    },

    txtestatistica: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    infoestatistica: {
        fontSize: 20,
    },

    titulo: {
        fontSize: 30,
        textAlign: 'center',
    },
})