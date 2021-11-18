import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

function EditaUser({route, navigation: { goBack }}) {
    return (
      <View style={{flex:1,backgroundColor:'#16abb2', alignItems:'center'}}>

        {/* SETAR PRA VOLTAR */}
        <View style={{width:'100%',height:'15%', justifyContent:'flex-end', marginLeft:15}}>
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="leftcircleo" size={50} color="white"/>
          </TouchableOpacity>
        </View>

        {/* SOBRE */}
        <View style={{height:'20%', width:'100%', justifyContent:'flex-start', alignItems:'flex-start', alignItems:'center', backgroundColor:'red'}}>
          <FontAwesome name='user-circle' size={90} color='#545454'/>
          <Text style={{fontSize:20, textDecorationLine:'underline'}}>Alterar Usuário</Text>
        </View>
        <View style={{width:'100%', height:'5%', backgroundColor:'blue'}}>
          <Text></Text>
        </View>
        <View style={{width:'100%', height:'15%', backgroundColor:'lightblue'}}>
          <Text></Text>
        </View>
        <View style={{width:'100%', height:'15%', backgroundColor:'green'}}></View>
        <View style={{width:'100%', height:'15%', backgroundColor:'lightgreen'}}></View>
      </View>
    );
}

export default EditaUser;