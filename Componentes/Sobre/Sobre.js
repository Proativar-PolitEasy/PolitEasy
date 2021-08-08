import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../Stylesheets/styles';

function Sobre ({navigation}) {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
    {/*    <TouchableOpacity
          //style={[styles.button,styles.curvinha]}
          onPress={()=> navigation.navigate('Home')} 
        >
        <Image source={require('./barra_lateral.png')}
          style={{height:40,width:40}}
    />  
    Imagem funciona no computador mas não funciona no celular
      </TouchableOpacity>*/}
          <TouchableOpacity
          style={[styles.button,styles.curvinha]}
          onPress={()=> navigation.navigate('Home')} 
          //quando clica redirecionar para outra página (não funciona ainda)
          //.navigate está dando erro
        >
        <Text style={styles.textoheader}>Home</Text>
      </TouchableOpacity>
      <Text style={[styles.textoheader,{marginLeft:20}]}>/</Text>
          <TouchableOpacity
          style={[styles.button,styles.curvinha]}
          onPress={()=> navigation.navigate('Atividades')}
          >
          <Text style={styles.textoheader}>Atividades</Text>
          </TouchableOpacity>
          <Text style={[styles.textoheader,{marginLeft:20}]}>/</Text>
          <TouchableOpacity
          style={[styles.button,styles.curvinha]}
          onPress={()=>navigation.navigate("Sobre")}
          >
            <Text style={styles.textoheader}>Sobre</Text>
             </TouchableOpacity>
  
        </View>
          <Text style={[styles.textoheader,{textAlign:"center",marginTop:10}]}>Sobre</Text>
          <View style={[styles.sobre,styles.curvinha]}>
          <View style={[styles.noticias,styles.curvinha,{marginTop:5}]}>
            <Text style={styles.textotitulo}>POLITEASY</Text>
            <Text style={styles.conteudo}>Este aplicativo
            foi criado como um trabalho de conclusão de curso
            do Colégio Técnico Industrial "Prof. Isaac Portal
            Rondán" em 2021. Nosso objetivo é diminuir a grande
            desinformação presente na cabeça de muitos jovens prestes
            a se tornarem seres políticos.
            </Text>
          </View>
          </View>
          <Text style={[styles.textoheader,{textAlign:"center"}]}>DESENVOLVEDORES:</Text>
          <Text style={[styles.conteudo,{color:"white"}]}>João Inácio Piton{"\n"}
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
    );
}

export default Sobre;