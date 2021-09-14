import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../../Stylesheets/styles';

function Sobre ({navigation: { goBack }}) {
    return (
      <View style={{flex:1,backgroundColor:'#16abb2', alignItems:'center'}}>

          {/* SETAR PRA VOLTAR */}
          <View style={{width:'100%',height:'15%', justifyContent:'flex-end', marginLeft:15}}>
            <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name="leftcircleo" size={50} color="black"/>
            </TouchableOpacity>
          </View>

            {/* SOBRE */}
            <View style={{height:'4%', width:'100%', justifyContent:'center', alignItems:'flex-end', flexDirection:'row'}}>
              <Text style={{color: "white", fontSize: 50, fontWeight: "bold", paddingBottom: 15, textAlign: "center"}}>Sobre </Text>
              <View style={{marginBottom:'5%'}}>
                <FontAwesome name="info-circle" size={50} color='white'/>
              </View>
            </View>

            {/* POLITEASY */}
            <View style={{backgroundColor:'#77838d', height:'40%', width:'80%', borderRadius:10, justifyContent:'center', alignItems:'center', elevation:20}}>
              <View style={{height:'95%', width:'95%', backgroundColor:'#cdcccb', borderRadius:10}}>
                <Text style={{fontSize:40, fontWeight:"bold", textAlign:'center'}}>POLITEASY</Text>
                <Text style={{fontSize:16, textAlign:'center'}}>Este aplicativo
                foi criado como um trabalho de conclusão de curso
                do Colégio Técnico Industrial "Prof. Isaac Portal
                Rondán" em 2021. Nosso objetivo é diminuir a grande
                desinformação presente na cabeça de muitos jovens prestes
                a se tornarem seres políticos.
                </Text>
              </View>
            </View>
            {/* DESENVOLVEDORES */}
            <View style={{height:'30%', width:'100%'}}>
              <Text style={{color:'white', textAlign:"center", fontSize:25, fontWeight:"bold", textDecorationLine:'underline'}}>DESENVOLVEDORES:</Text>
              <Text style={{color:"white", textAlign:'center', fontSize:16}}>João Inácio Piton{"\n"}
                Júlia Fragoso Moraes de Oliveira{"\n"}
                Leandro Augusto Guerreiro Brasil{"\n"}
                Leonardo Belissimo Muto{"\n"}
                Leonardo Conde Feitosa{"\n"}
                Leonardo Kaique Garcia{"\n"}
                Lívia Fonseca De Almeida{"\n"}
                Luana Rodrigues da Silva e Lima{"\n"}
                Lucas Kenji Miyashiro
              </Text>
            </View>
        </View>
    );
}

export default Sobre;