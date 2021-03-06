import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Sobre from '../Sobre/Sobre'
import Pontuacao from '../../lib/database/Pontuacao';
import Usuario from '../../lib/database/Usuario';

function Config({ route, navigation }) {
    const [itens, setItens] = useState([]);
    const [posicao, setPosicao] = useState(null);
    const logado = route.params.idUsuario.length !== 0;

    useEffect(() => {
        let rankingTotal = [];
        let top100Usuarios = [];
        let consultasBanco = [];

        if (logado) {
            // Se o usuário está logado, consultar sua posição no ranking, no banco, para apresentar na tela.
            Pontuacao.RetornarPosicao(route.params.idUsuario)
            .then(posicaoBanco => {
                setPosicao(posicaoBanco);
            })
            .catch(err => {
                console.log(err);
            })
        }

        if (itens.length === 0) {
            // Consultar pontuações no banco para mostrar o top 100
            Pontuacao.RetornarPontuacoes()
            .then((pts) => {
                // Ordenar pontuações pela quantia de pontos
                rankingTotal = pts.sort((pt1, pt2) => {
                    if (Number.parseInt(pt1["pontuacao"], 10) > Number.parseInt(pt2["pontuacao"], 10)) {
                        return -1;
                    } else if (Number.parseInt(pt1["pontuacao"], 10) < Number.parseInt(pt2["pontuacao"], 10)) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                // Limitar pontuações para 100 registros
                top100Usuarios = rankingTotal.slice(0, 99);
                
                for (let i = 0; i < top100Usuarios.length; i++) {
                    consultasBanco.push(new Promise((resolve, reject) => {
                        Usuario.RetornarUsuarioPorId(top100Usuarios[i]["id_usuario"])
                        .then(usuario => {
                            top100Usuarios[i]["nome_usuario"] = usuario["nome"];
                            resolve(usuario);
                        })
                        .catch(err => {
                            resolve(null);
                        });
                    }));
                }

                // Aguardar a identificação de cada usuário para depois mostrar na tela
                Promise.all(consultasBanco)
                .then(consulta => {
                    setItens(top100Usuarios.map((item, index) =>
                        <View key={index}>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
                            <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                                <View style={{ width: '12%', height: '100%', backgroundColor: '#ff6554', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={estilos.numrank}>#{index + 1}</Text>
                                </View>
                                <View style={{ width: '65%', height: '100%', backgroundColor: '#ffb8b0', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={estilos.txtrank}>{item["nome_usuario"]}</Text>
                                </View>
                                <View style={{ width: '23%', height: '100%', backgroundColor: '#ff6554', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={estilos.numrank}>{item["pontuacao"]} pts</Text>
                                </View>
                            </View>
                        </View>
                    ));
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, []);

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: '100%', height: '91%', backgroundColor: '#16abb2', alignItems: 'center', flexGrow: 1 }}>

                <View style={{ width: '100%', height: '30%' }}>
                    <View style={{ width: '100%', height: '80%', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <FontAwesome5 name="crown" size={100} color="#f8a62a" />
                    </View>
                    <View style={{ width: '100%', height: '30%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        {
                            !logado ||
                            <View style={{display: "flex", flexDirection: "row", marginBottom: "5%"}}>
                                <Text style={estilos.texto}>Sua colocação no ranking: </Text>
                                <Text style={estilos.posição}>#{posicao ? posicao : "0"}</Text>
                            </View>
                        }
                    </View>
                </View>

                <View style={{ width: '100%', height: '65%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    
                    <View style={{ width: '80%', height: '10%', borderTopStartRadius: 10, borderTopEndRadius: 10, borderColor: 'black', borderWidth: 1, flexDirection:'row' }}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: '#96352a', justifyContent: 'center', alignItems: 'center', borderTopStartRadius: 9, borderTopEndRadius: 9 }}></View>
                    </View>

                    <View style={{ width: '80%', height: '85%', backgroundColor: '#96352a', flexDirection: 'row', alignItems: 'flex-start', marginTop: -1, borderColor: 'black', borderWidth: 1 }}>
                        <ScrollView>
                            { itens || <Text>Carregando...</Text> }
                        </ScrollView>
                    </View>
                </View>

                <View style={{ width: '100%', height: '10%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>

                </View>

            </View>

            <View>
                <Base navigation={navigation} />
            </View>
        </View>
    );
};

export default Config;

const estilos = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    posição: {
        color: '#ffd1d1',
        fontSize: 23,
        fontWeight: 'bold'
    },
    txtrank: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    numrank: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
        textAlignVertical:'center',
    },
})