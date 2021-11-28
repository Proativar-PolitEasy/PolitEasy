import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ImageBackground, Image, TouchableHighlight, Linking } from 'react-native';
import { } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import axios from 'axios';

export default function Home_oficial({route, navigation}) {
    const [noticias, setNoticias] = useState([]);
    const [manchete, setManchete] = useState('Carregando...');
    const [imagemDestaque, setImagemDestaque] = useState('');
    const [linkDestaque, setLinkDestaque] = useState('');

    useEffect(() => {
        const k = "2b884b8e8bdd4d8fb3fdaeb682c5de22";
        let artigos;
        let primeiraNoticia;
        /*
        setNoticias([
            { 'title': 'a'},
            { 'title': 'b'},
            { 'title': 'c'},{ 'title': 'd'},{ 'title': 'e'},{ 'title': 'f'},{ 'title': 'g'}]);*/

        // Obter notícias pela API da Google News
        axios.get("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=" + k)
        .then((respostaApi) => {
            artigos = respostaApi['data']['articles'];

            // Cortar título se maior que 70 caracteres
            for (const art of artigos) {
                if (art['title'].length > 70) {
                    art['title'] = art['title'].substring(0, 69) + '...';
                }
            }

            if (artigos.length > 0) {
                [primeiraNoticia] = artigos.splice(0, 1);
                console.log(primeiraNoticia);

                setManchete(primeiraNoticia['title'] || 'Carregando...');
                setImagemDestaque(primeiraNoticia['urlToImage'] || '');
                setLinkDestaque(primeiraNoticia['url'] || '');
            }

            setNoticias(artigos);
        })
        .catch((erroApi) => {
            console.log(erroApi);
        })
    }, []);
    
    const AbrirNoticia = (linkNoticia) => {
        Linking.canOpenURL(linkNoticia)
        .then((suporte) => {
            if (suporte) {
                Linking.openURL(linkNoticia);
            } else {
                console.log('Esse dispositivo não suporta abertura de links pelo navegador.');
            }
        })
    }

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1, resizeMode:'cover'}}>
                <View style={{width:'100%',height:'91%', justifyContent:'flex-start'}}>
                    <View style={{width: '100%', height:'37%', alignItems:'center', backgroundColor:'#092838',}}>
                        <View style={{width:'80%', height:'50%', alignItems:'center',marginTop:'6%'}}>
                            <Text style={{fontWeight:'bold', fontSize:60, color:'white', textAlign:'center'}}>NOTÍCIAS</Text>
                            <FontAwesome name="newspaper-o" size={100} color="white"/>
                        </View>
                    </View>
                    <View style={{height:'62%', marginTop:'1%'}}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',}}>
                            
                            {
                                noticias.map(noticia =>
                                    <View style={{width:'90%', height: '100%', flexDirection:'column', alignItems:'center', justifyContent:'center',}} key={noticia['title']}>
                                        <View style={{width:'90%', height:70, alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                                            <View style={{width: '20%', height: 60, borderRadius:10, borderColor: '#092838', borderWidth: 5, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 0}}>
                                                <ImageBackground source={{'uri': noticia['urlToImage']}} style={{resizeMode:'contain', width: '100%', height: '100%', overflow: 'hidden'}} imageStyle={{borderRadius: 2, borderTopRightRadius: 0, borderBottomRightRadius: 0}} />
                                            </View>
                                            <View style={{width:'100%', height:60, backgroundColor:'white', borderRadius:10, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: '#092838', borderWidth: 5, borderLeftWidth: 0, padding: 10, paddingLeft: 8, paddingTop: 7, flexDirection: 'row' }}>
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
        </ImageBackground>
    );
};