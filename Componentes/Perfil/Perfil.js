import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Usuario from '../../lib/database/Usuario';
import Resposta from '../../lib/database/Resposta';
import Pontuacao from '../../lib/database/Pontuacao';

function Perfil({ route, navigation }) {
    const logado = route.params.idUsuario.length !== 0;
    const [isAdmin, setAdmin] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [avatar, setAvatar] = useState(null);

    // Caminhos manuais porque require não aceita caminho dinâmico
    const opcoesAvatar = [
        require('../../assets/avatares/avatar0.png'),
        require('../../assets/avatares/avatar1.png'),
        require('../../assets/avatares/avatar2.png'),
        require('../../assets/avatares/avatar3.png'),
        require('../../assets/avatares/avatar4.png'),
        require('../../assets/avatares/avatar5.png'),
        require('../../assets/avatares/avatar6.png'),
        require('../../assets/avatares/avatar7.png'),
    ];

    useEffect(() => {
        const idUsuario = route.params.idUsuario;
        const consultasBanco = [];
        let infoUsuario;
        let respostasUsuario;

        if (logado) {
            consultasBanco.push(Usuario.RetornarUsuarioPorId(idUsuario));
            consultasBanco.push(Resposta.RetornarRespostasPorUsuario(idUsuario));
            consultasBanco.push(Pontuacao.RetornarPosicao(idUsuario));
            consultasBanco.push(Usuario.RetornarAvatar(idUsuario));

            Promise.all(consultasBanco)
            .then(resultados => {
                if (resultados[0]) {
                    setAdmin(resultados[0]['administrador']);
                    infoUsuario = resultados[0];
                    respostasUsuario = resultados[1] ?? [];

                    infoUsuario['perguntas'] = respostasUsuario.length;
                    infoUsuario['acertos'] = respostasUsuario.filter(resp => resp['acertou']).length;
                    infoUsuario['ranking'] = resultados[2];
                    setUsuario(infoUsuario);
                }

                if (resultados[3] != null) {
                    setAvatar(resultados[3]);
                }
            })
            .catch(err => {
                console.log(err);
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
                        {
                            avatar !== null
                            ? <Image source={opcoesAvatar[avatar]} style={{height:'65%', resizeMode:'contain' }} />
                            : <FontAwesome name='user-circle' size={200} color='#545454' />
                        }
                        {   logado  
                            ?   !isAdmin
                                ||
                                <View>
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
                            <Text style={{fontSize:20, fontWeight:'bold'}}>{ usuario ? usuario['nome'].toUpperCase() : 'CARREGANDO' }</Text>
                            <Text style={{fontSize:14}}>{ usuario ? usuario['email'] : '' }</Text>
                            {
                                isAdmin
                                &&
                                <TouchableOpacity onPress={() => { navigation.navigate('Admin') }} style={[estilos.sombra, estilos.btn, {marginTop: 0}]}>
                                <Text style={estilos.txtbtn}>ADMIN</Text>
                                </TouchableOpacity>
                            }
                            <TouchableOpacity onPress={() => { navigation.navigate('EditaUser', { nome: usuario['nome'], email: usuario['email'], id_usuario: usuario['id'] }) }} style={[estilos.sombra, estilos.btn1]}>
                                    <Text style={estilos.txtbtn}>EDITAR USUÁRIO</Text>
                            </TouchableOpacity>
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
                                <Text style={estilos.infoestatistica}>{ usuario ? usuario['escolaridade'] : '' }</Text>
                                <Text style={estilos.infoestatistica}>{ usuario ? usuario['perguntas'] : '' }</Text>{/* AQUI É AS INFORMAÇÕES DO PERFIL !! */}
                                <Text style={estilos.infoestatistica}>{ usuario ? usuario['acertos'] : '' }</Text>
                                <Text style={estilos.infoestatistica}>{ usuario ? usuario['ranking'] : '' }</Text>
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