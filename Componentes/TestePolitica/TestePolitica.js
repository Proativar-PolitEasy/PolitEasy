import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

function TestePolitica({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'91%', backgroundColor:'#16abb2'}}>
                
                <View style={{width:'100%', height:'4%', backgroundColor:'white'}}></View>

                <View style={{width:'100%',height:'25%', alignItems:'center',flexDirection:'row', backgroundColor:'#092838'}}>

                        {/* TESTE POLÍTICO */}
                        <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                            <Ionicons name="ios-compass" size={80} color="white"/>
                            <View style={{width:'100%', height:'50%',}}><Text style={{fontWeight:'bold', fontSize:45, textAlign:'center', color:'white'}}>Teste Politico</Text></View>
                        </View>
                </View>

                {/* CORPO DO TESTEEEEEE */}
                <View style={{height:'71%', width:'100%', backgroundColor:'#16abb2', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'100%', width:'100%', alignItems:'center',}}>

                        <View style={{height:'20%', width:'90%', borderRadius:10, backgroundColor:'lightblue', marginTop:'20%'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center'}}>PERGUNTA POLÍTICA</Text>
                        </View>
                        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'10%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#de1414', borderTopLeftRadius: 20, borderBottomLeftRadius:25}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#f54747'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#857c7a'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#72c44f'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', backgroundColor:'#009942', borderTopRightRadius:25, borderBottomEndRadius:25}}></TouchableOpacity>
                        </View>
                        <View style={{width:'80%', height:'10%', flexDirection:'row-reverse',justifyContent:'space-between'}}>
                            <Text>Concordo</Text>
                            <Text>Neutro</Text>
                            <Text>Discordo</Text>
                        </View>

                        <TouchableOpacity onPress={()=>Alert.alert('Como funciona?','Clique nos vermelhos de acordo com o nível de sua discordância e nos verdes de acordo com sua concordância')} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                            <Ionicons name="help-circle-outline" size={50} color="#092838"/>
                        </TouchableOpacity>

                        <View style={{width:'90%', height:'21%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <TouchableOpacity>
                                <Entypo name="arrow-with-circle-left" size={65} color="#092838"/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Entypo name="arrow-with-circle-right" size={65} color="#092838"/>
                            </TouchableOpacity>
                        </View>

                    </View>                    
                </View>

            </View>

            <View>
                <Base navigation={navigation} />
            </View>

        </View>
    );
};

export default TestePolitica;