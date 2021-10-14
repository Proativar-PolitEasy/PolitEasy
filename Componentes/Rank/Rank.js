import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Sobre from '../Sobre/Sobre'

function Config({ route, navigation }) {
    let itens = []
    for (let index = 0; index < 99; index++) {
        itens.push(
            < View key={index} >
                <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <View style={{ width: '12%', height: '100%', backgroundColor: '#ff6554', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={estilos.numrank}>#{index+1}</Text>{/* POSIÇÃO RANK */}
                    </View>
                    <View style={{ width: '65%', height: '100%', backgroundColor: '#ffb8b0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={estilos.txtrank}>NOME DO USUARIO</Text>{/* NOME DO USUÁRIO */}
                    </View>
                    <View style={{ width: '23%', height: '100%', backgroundColor: '#ff6554', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={estilos.numrank}>pontos</Text>{/* POSIÇÃO RANK */}
                    </View>
                </View></View>)
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: '100%', height: '91%', backgroundColor: '#16abb2', alignItems: 'center', flexGrow: 1 }}>

                <View style={{ width: '100%', height: '30%' }}>
                    <View style={{ width: '100%', height: '80%', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <FontAwesome5 name="crown" size={100} color="#f8a62a" />
                    </View>
                    <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={estilos.texto}>Sua colocação no ranking: </Text><Text style={estilos.posição}>#7°</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: '65%', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <View style={{ width: '80%', height: '15%', backgroundColor: 'grey', borderTopStartRadius: 10, borderTopEndRadius: 10, borderColor: 'black', borderWidth: 1 }}></View>
                    <View style={{ width: '80%', height: '85%', backgroundColor: 'white', flexDirection: 'row', alignItems: 'flex-start', marginTop: -1, borderColor: 'black', borderWidth: 1 }}>
                        <ScrollView>
                            {itens}
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