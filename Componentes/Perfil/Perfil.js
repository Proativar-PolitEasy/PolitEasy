import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Usuario from '../../lib/database/Usuario';

function Perfil({ route, navigation }) {
    const logado = route.params.idUsuario.length !== 0;
    const [isAdmin, setAdmin] = useState(false);

    console.log(logado);

    useEffect(() => {
        const idUsuario = route.params.idUsuario;

        if (logado) {
            Usuario.RetornarUsuarioPorId(idUsuario)
            .then((user) => {
                if (user) {
                    setAdmin(user["administrador"]);
                }
            })
        }
    }, [])

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: '100%', height: '91%', backgroundColor: '#16abb2', flexGrow: 1 }}>
                <View style={{ width: '100%', height: '9%', flexDirection: "row", marginTop: 24 }}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Config') }} >
                            <AntDesign name='setting' size={50} color='#545454' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
                    <View style={{ flexGrow: 1, }}></View>
                    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop:'-5%' }}>
                        {/*<FontAwesome name='user-circle' size={200} color='#545454' />  AQUI É O USER SEM LOGIN !!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                        <Image source={require('../../assets/avatares/avatar2.png')} style={{height:'65%', resizeMode:'contain' }} />
                        {   logado  
                            ?   !isAdmin
                                ||
                                <View>
                                    <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
                                        <View style={{ flexGrow: 1, }}></View>
                                        <View style={{ flexGrow: 1, alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity onPress={() => { navigation.navigate('Admin') }} style={[estilos.sombra, estilos.btn]}>
                                                            <Text style={estilos.txtbtn}>ADMIN</Text>
                                                        </TouchableOpacity>
                                                </View>
                                        </View>
                                        <View style={{ flexGrow: 1, }}>
                                        </View>
                                    </View>
                                </View>
                            :
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={[estilos.sombra, estilos.btn]}>
                                    <Text style={estilos.txtbtn}>LOGIN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={[estilos.sombra, estilos.btn]}>
                                    <Text style={estilos.txtbtn}>CRIAR CONTA</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <View style={{ flexGrow: 1, }}>
                    </View>
                </View>

                {
                    !logado ||
                    <View style={{height:'50%', marginTop:'-25%', }}>
                        <View style={{height:'30%', width:'100%', alignItems:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'bold'}}>NOME COMPLETO USUARIO</Text>
                            <Text style={{fontSize:14}}>EMAIL DO USUÁRIO</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('EditaUser') }} style={[estilos.sombra, estilos.btn1]}>
                                    <Text style={estilos.txtbtn}>EDITAR USUÁRIO</Text>
                            </TouchableOpacity>
                            <View style={{width:'90%', height:'1%', backgroundColor:'black', marginTop:'5%'}}></View>
                        </View>
                        <View style={{ width: '100%', height: '15%',marginTop:'13%'}}>
                            <Text style={{ fontSize: 30, textAlign: 'center', textAlignVertical: 'center', fontWeight:'bold' }}>ESTATÍSTICAS</Text>
                        </View>
                        <View style={{ width: '100%', height: '40%', flexDirection: 'row', }}>
                            <View style={{ width: '10%', height: '100%', }}></View>
                            <View style={{ width: '40%', height: '100%', alignItems: 'flex-start', justifyContent: 'space-around' }}>
                                <Text style={estilos.txtestatistica}>Escolaridade:</Text>
                                <Text style={estilos.txtestatistica}>Perguntas:</Text>
                                <Text style={estilos.txtestatistica}>Acertos:</Text>
                                <Text style={estilos.txtestatistica}>Ranking:</Text>
                            </View>
                            <View style={{ width: '40%', height: '100%', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                                <Text style={estilos.infoestatistica}>Aluno</Text>
                                <Text style={estilos.infoestatistica}>250</Text>{/* AQUI É AS INFORMAÇÕES DO PERFIL !! */}
                                <Text style={estilos.infoestatistica}>170</Text>
                                <Text style={estilos.infoestatistica}>Diamante</Text>
                            </View>
                            <View style={{ width: '10%', height: '100%', }}></View>
                        </View>
                    </View>
                }
            </View>
            <View>
                <Base navigation={navigation} />
            </View>
        </View>
    );
};

export default Perfil;

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
        width: '40%',
        height: '40%',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: 5,
        marginTop:'10%'
    },
    btn1: {
        width: '40%',
        height: '45%',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: 5,
    },

    txtestatistica: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    infoestatistica: {
        fontSize: 20,
    }
})