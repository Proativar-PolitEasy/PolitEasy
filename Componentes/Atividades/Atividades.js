import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import styles from '../../Stylesheets/styles';
import { EvilIcons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import Temas from './Temas';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Atividades ({route, navigation}) {
    return (
      <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1, resizeMode:'cover'}}>
        <View style={{flex:1}}>
          <View style={{width:'100%',height:'91%',}}>
          <View style={{width:'100%', height:'19%', justifyContent:'flex-end', alignItems:'center'}}>
            <View style={{width:'70%', height:'41%', backgroundColor:'white', borderRadius:100 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Quizz')}}>
                  <EvilIcons name='search' size={50}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={{width:'100%',height:'100%', flexDirection:'row', flexWrap:'wrap'}}>
            <View style={{width:'50%', height:'41%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <TouchableHighlight 
                  style={{width:150,height:150, borderColor:'#092838', borderWidth:3, borderRadius:75}} 
                  onPress={() => navigation.navigate('Temas', { materiaEscolhida: 'atualidades'})}>
                <Image source={require('../../assets/materias/atualidades.png')} style={{width:'100%',height:'100%', resizeMode:'contain',}}/>
              </TouchableHighlight>
                <Text style={{fontSize:20, color:'white'}}>Atualidades</Text>
            </View>
            <View style={{width:'50%', height:'41%', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <TouchableHighlight 
                  style={{width:150,height:150, borderColor:'#0e577d', borderWidth:3, borderRadius:75}}
                  onPress={() => navigation.navigate('Temas', { materiaEscolhida: 'politica'})}>
                <Image source={require('../../assets/materias/politica.png')} style={{width:'100%',height:'100%', resizeMode:'contain',}}/>
              </TouchableHighlight>
                <Text style={{fontSize:20, color:'white'}}>Política</Text>
            </View>
            <View style={{width:'50%', height:'41%', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <TouchableHighlight 
                  style={{width:150,height:150, borderColor:'#ffe5b6', borderWidth:3, borderRadius:75}}
                  onPress={() => navigation.navigate('Temas', { materiaEscolhida: 'historia'})}>
                <Image source={require('../../assets/materias/historia.png')} style={{width:'100%',height:'100%', resizeMode:'contain',}}/>
              </TouchableHighlight>
                <Text style={{fontSize:20, color:'white'}}>Historia</Text>
            </View>
            <View style={{width:'50%', height:'41%', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
              <TouchableHighlight 
                  style={{width:150,height:150, borderColor:'#b2935b', borderWidth:3, borderRadius:75}}
                  onPress={() => navigation.navigate('Temas', { materiaEscolhida: 'filosofia'})}>
                <Image source={require('../../assets/materias/filosofia.png')} style={{width:'100%',height:'100%', resizeMode:'contain',}}/>
              </TouchableHighlight>
                <Text style={{fontSize:20, color:'white'}}>Filosofia</Text>
            </View>
          </View>
          </View>
          <View>
            <Base navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    );
}

export default Atividades;