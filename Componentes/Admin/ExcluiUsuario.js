import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Botao from '../Util/Botao';
import CampoTexto from '../Util/CampoTexto';
import stylesForm from '../../Stylesheets/stylesForm';
import Usuario from '../../lib/database/Usuario';
import Alternativa from '../../lib/database/Pergunta';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExcluiUsuario = ({ route, navigation }) => {
    const [usuarios, setUsuarios] = useState([]);
    const limiteTamanho = 40;

    useEffect(() => {
        Usuario.RetornarUsuarios()
        .then(users => {
            for (let i = 0; i < users.length; i++) {
                if (users[i]['nome'].length > limiteTamanho) {
                    users[i]['nome'] = users[i]['nome'].substring(0, limiteTamanho - 3) + '...';
                }

                if (users[i]['email'].length > limiteTamanho) {
                    users[i]['email'] = users[i]['email'].substring(0, limiteTamanho - 3) + '...';
                }
            }

            setUsuarios(users);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const RemoverUsuario = (usuario) => {
        const idUsuario = usuario['id'];
        Usuario.DeletarUsuario(usuario['id']);
        setUsuarios(usuarios.filter(p => p['id'] != idUsuario));
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
            <ScrollView>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                    <View style={{ flex: 0, width: '90%' }}>
                        <Text style={stylesForm.heading}>USUÁRIOS</Text>

                        {
                            usuarios.length > 0
                            ?
                            usuarios.map(usuario =>
                                <View style={ { ...stylesForm.textField, marginBottom: 10 } } key={usuario['id']}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
                                        <View style={{ width: '70%', flexDirection: 'column' }}>
                                            <Text style={{ fontWeight: 'bold' }}>{ usuario['nome'] }</Text>
                                            <Text>{ usuario['email'] }</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => RemoverUsuario(usuario)}>
                                            <FontAwesome name='trash' size={20} color='#545454' />
                                        </TouchableOpacity>
                                    </View>
                                </View>)
                            :
                            <Text>Carregando...</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

export default ExcluiUsuario;