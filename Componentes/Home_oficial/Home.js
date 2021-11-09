import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import { } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import axios from 'axios';

export default function Home_oficial({route, navigation}) {
    const [noticias, setNoticias] = useState([]);
    
    useEffect(() => {
        const k = "2b884b8e8bdd4d8fb3fdaeb682c5de22";

        // Obter notícias pela API da Google News
        axios.get("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=" + k)
        .then((respostaApi) => {
            setNoticias(respostaApi["data"]["articles"]);
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
                        <ScrollView style={{height:'5%'}}>
                            
                            {
                                noticias.map(noticia =>
                                    <View style={{width:'100%', height:'10%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                        <View style={{width:'90%', height:70, alignItems:'center', justifyContent:'center'}}>
                                            <View style={{width:'100%', height:60, backgroundColor:'grey', borderRadius:99, borderColor: '#16abb2', borderWidth: 5, padding: 10, paddingTop: 7 }}>
                                                <Text>{ noticia["title"] }</Text>
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


                        </ScrollView>
                    </View>
                </View>
                <View>
                    <Base navigation={navigation} />
                </View>
            </View>
        </ImageBackground>
    );
};