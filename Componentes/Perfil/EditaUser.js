import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Pergunta from '../../lib/database/Pergunta';
import Pontuacao from '../../lib/database/Pontuacao';
import Botao from '../Util/Botao';
import Resposta from '../../lib/database/Resposta';

function EditaUser({route, navigation: { goBack }}) {
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
            <View style={{width:'100%', height:'3%',}}></View>
            <View style={{width:'100%', height:'18%', justifyContent:'flex-start', alignItems:'center',}}>
                <View style={{width:'70%', marginBottom:'1%'}}><Text style={{fontSize:15}}>Nome</Text></View>
                <View style={estilos.btn}>
                  <View style={estilos.btnfundo}></View>
                </View>
            </View>
            <View style={{width:'100%', height:'18%', justifyContent:'flex-start', alignItems:'center',}}>
                <View style={{width:'70%', marginBottom:'1%'}}><Text style={{fontSize:15}}>Email</Text></View>
                <View style={estilos.btn}>
                  <View style={estilos.btnfundo}></View>
                </View>
            </View>
            <View style={{width:'100%', height:'18%', justifyContent:'flex-start', alignItems:'center',}}>
                <View style={{width:'70%', marginBottom:'1%'}}><Text style={{fontSize:15}}>Senha</Text></View>
                <View style={estilos.btn}>
                  <View style={estilos.btnfundo}></View>
                </View>
            </View>

            <TouchableOpacity onPress={{/* FUNÇÃO ALTERA */}} style={estilos.btnaltera}>
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