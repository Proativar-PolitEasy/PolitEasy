import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Usuario from '../../lib/database/Usuario';
import CampoTexto from '../Util/CampoTexto';
import SHA256 from 'crypto-js/sha256';

function EditaUser({route, navigation: { goBack, navigate }}) {
  const [nome, setNome] = useState(route.params.nome);
  const [email, setEmail] = useState(route.params.email);
  const [senha, setSenha] = useState('');

  const AlterarUsuario = () => {
    const senhaCriptografada = JSON.stringify(SHA256(senha).words);

    if (ValidaDados()) {
      Usuario.AlterarUsuario(route.params.id_usuario, { nome, email, senhaCriptografada });
      setTimeout(() => {
        navigate('Home_oficial');
      }, 1000);
    }
  }

  const ValidaDados = () => {
    // Checar algum campo não preenchido
    if (nome.length === 0 
        || senha.length === 0
        || email.length === 0) {
        return false;
    }
    
    // Checar se o email está no formato endereco@servidor.dominio
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }

    return true;
}

    return (
        <View style={{flex:1,backgroundColor:'#16abb2', alignItems:'center'}}>

            {/* SETAR PRA VOLTAR */}
            <View style={{width:'100%',height:'15%', justifyContent:'flex-end', marginLeft:15, alignItems:'flex-start'}}>
              <View>
                <TouchableOpacity onPress={() => goBack()}>
                  <AntDesign name="leftcircleo" size={50} color="white"/>
                </TouchableOpacity>
              </View>
            </View>

            {/* SOBRE */}
            <View style={{height:'20%', width:'100%', justifyContent:'flex-start', alignItems:'flex-start', alignItems:'center', marginTop:'-10%'}}>
              <FontAwesome name='user-circle' size={90} color='#545454'/>
              <Text style={{fontSize:20, textDecorationLine:'underline'}}>Alterar Usuário</Text>
            </View>
            <View style={{width: '80%', flex:0}}>
              <CampoTexto campo="Nome" valor={nome} tipo="texto" callbackEntrada={(texto) => setNome(texto)} />
              <CampoTexto campo="E-mail" valor={email} tipo="email" callbackEntrada={(texto) => setEmail(texto)} />
              <CampoTexto campo="Senha" tipo="senha" callbackEntrada={(texto) => setSenha(texto)} />
            </View>

            <TouchableOpacity onPress={AlterarUsuario} style={estilos.btnaltera}>
                <View style={estilos.btnfundoaltera}>
                  <Text style={{color:'white', fontSize:20}}>Alterar</Text>
                </View>
            </TouchableOpacity>
            
          </View>
        );
}

export default EditaUser;


const estilos = StyleSheet.create({
  btn:{
      width: '80%',
      height: '40%',
      elevation: 2,
      backgroundColor: "#9aa7b2",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#9aa7b2",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10},

  btnfundo:{
      marginBottom: 10,
      right: 1,
      width: '100%',
      height: '100%',
      elevation: 2,
      backgroundColor: "#c7d0d8",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#9aa7b2",
      justifyContent: "center",
      alignItems: "center",},

  btnaltera:{
      width: '45%',
      height: '7%',
      elevation: 2,
      backgroundColor: "#1f2136",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#616691",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,},

  btnfundoaltera:{
      marginBottom: 10,
      right: 1,
      width: '100%',
      height: '100%',
      elevation: 2,
      backgroundColor: "#375e73",
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#375e73",
      justifyContent: "center",
      alignItems: "center",},
})