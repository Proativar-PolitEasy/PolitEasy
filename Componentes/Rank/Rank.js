import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Sobre from '../Sobre/Sobre'

function Config({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%',height:'91%', backgroundColor:'#16abb2', alignItems:'center', flexGrow:1}}>
                
                <View style={{width:'100%', height:'30%'}}>
                    <View style={{width:'100%', height:'80%', alignItems:'center', justifyContent:'flex-end'}}>
                        <FontAwesome5 name="crown" size={100} color="#f8a62a"/>
                    </View>
                    <View style={{width:'100%', height:'20%', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                        <Text style={estilos.texto}>Sua colocação no ranking: </Text><Text style={estilos.posição}>#7°</Text>
                    </View>
                </View>

                <View style={{width:'100%', height:'65%', alignItems:'center', justifyContent:'flex-start'}}>
                    <View style={{width:'80%', height:'15%', backgroundColor:'grey', borderTopStartRadius:10, borderTopEndRadius:10}}></View>
                    <View style={{ width:'80%', height:'85%', backgroundColor:'white', flexDirection:'row', alignItems:'flex-end', marginTop:-1, borderBottomStartRadius: 10, borderBottomEndRadius: 10}}>
                        <ScrollView>
                            <View style={{width:'100%', height:40, backgroundColor:'red'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'orange'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'yellow'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'lightgreen'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'green'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'blue'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'purple'}}></View>
                            
                            <View style={{width:'100%', height:40, backgroundColor:'red'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'orange'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'yellow'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'lightgreen'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'green'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'blue'}}></View>
                            <View style={{width:'100%', height:40, backgroundColor:'purple'}}></View>
                            
                            
                            <Text style={{fontSize:60}}>DESCE A TELA AQUI.... COLOQUEI UM SCROLL VIEW PARA ENUMERAR OS RANKS DAS PESSOAS COM MAIS PONTOS NO APP</Text>
                        </ScrollView>
                    </View>
                </View>

                <View style={{width:'100%', height:'10%', alignItems:'center', justifyContent:'flex-start', flexDirection:'row'}}>
                    
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
    texto:{
        color:'white', 
        fontSize:23, 
        fontWeight: 'bold'
    },
    posição:{
        color:'#ffd1d1', 
        fontSize:23, 
        fontWeight: 'bold'
    },
})