import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function Admin({ route, navigation }) {
    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <View style={{ flex: 1, }}>
                <View style={{ width: '100%', height: '90%', alignItems: 'center', justifyContent: "center" }}>

                    <Text style={estilos.titulo}>{"\n"}ADMINISTRADOR,</Text>
                    <Text style={estilos.subtitulo}>{"\n"}seja bem-vindo!</Text>

                    <TouchableOpacity onPress={() => { navigation.navigate('CadastrarTema') }} style={[estilos.sombra, estilos.btn]}>
                        <Text style={estilos.txtbtn}>Cadastro de Temas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('CadastrarPergunta') }} style={[estilos.sombra, estilos.btn]}>
                        <Text style={estilos.txtbtn}>Cadastro de Perguntas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('ExcluiPergunta') }} style={[estilos.sombra, estilos.btn]}>
                        <Text style={estilos.txtbtn}>Exclusão de Perguntas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('ExcluiTema') }} style={[estilos.sombra, estilos.btn]}>
                        <Text style={estilos.txtbtn}>Exclusão de Temas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('ExcluiUsuario') }} style={[estilos.sombra, estilos.btn]}>
                        <Text style={estilos.txtbtn}>Exclusão de Usuários</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </ImageBackground>
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
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: 5,
        marginBottom: 15,
        borderRadius: 99
    },

    txtestatistica: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    infoestatistica: {
        fontSize: 20,
    },

    titulo: {
        color: "#09283a",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },

    subtitulo: {
        color: "#09283a",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 15,
        textAlign: "center"
    }
})