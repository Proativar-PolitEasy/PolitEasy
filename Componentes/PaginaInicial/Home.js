import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../Stylesheets/styles';

function Home ({navigation}) {
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
          onPress={()=> navigation.navigate('Cadastro')} 
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
          onPress={()=>navigation.navigate('Perfil')}
          >
            <Text style={styles.textoheader}>Sobre</Text>
          </TouchableOpacity>
  
        </View>
          <Text style={[styles.textoheader,{textAlign:"center",marginTop:10}]}>ÚLTIMAS NOTÍCIAS</Text>
          <View style={[styles.noticias,styles.curvinha]}>
          </View>
        </View>
    );
}

export default Home;