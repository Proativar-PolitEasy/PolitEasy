import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import axios from 'axios';

export default function Home_oficial({route, navigation}) {
    const [noticias, setNoticias] = useState([]);
    
    useEffect(() => {
        // Obter notícias pela API da Google News
        axios.get("api_url")
        .then((respostaApi) => {
            setNoticias(respostaApi["articles"]);
        })
        .catch((erroApi) => {
            console.log(erroApi);
        })
    }, []);
    
    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1, resizeMode:'cover'}}>
            <View style={{flex:1,}}>
                <View style={{width:'100%',height:'91%',}}>
                    <View style>
                        <View style={{height:'60%', justifyContent:'flex-end', alignItems:'center'}}>
                            <View style={{width:'80%', height:'20%'}}>
                                <Text style={{fontSize:40, color:'white', textAlign:'center'}}>NOTÍCIAS</Text>
                            </View>
                            <View style={{width:'80%', height:'70%', borderRadius:20, backgroundColor:'white'}}>
                                <Image source={require('../../assets/noticia.jpg')} style={{resizeMode:'contain', width:'100%', height:'100%'}}/>
                            </View>
                        </View>
                        <View style={{height:'40%', alignItems:'center'}}>
                            
                            {
                                noticias.map(noticia =>
                                    <View style={{width:'100%', height:'50%', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                                        <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                            <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}>
                                                { noticia["title"] }
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                            
                            { /* [OLD] NOTÍCIAS
                            <View style={{width:'100%', height:'50%', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                            </View>
                            <View style={{width:'100%', height:'50%', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                                <View style={{width:70, height:70, backgroundColor:'#16abb2', borderRadius:70/2, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:60, height:60, backgroundColor:'grey', borderRadius:99}}></View>
                                </View>
                            </View>
                            */ }


                        </View>
                    </View>
                </View>
                <View>
                    <Base navigation={navigation} />
                </View>
            </View>
        </ImageBackground>
    );
};