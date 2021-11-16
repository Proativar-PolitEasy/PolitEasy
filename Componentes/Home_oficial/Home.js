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
            <View style={{flex:1,}}>
                <View style={{width:'100%',height:'91%'}}>
                    <View style={{ width: '100%'}}>
                        <View style={{width: '100%', height:'40%', justifyContent:'flex-end', alignItems:'center', marginBottom: 20, marginTop: '10%'}}>
                            <View style={{width:'80%', height:'20%', marginBottom: 10}}>
                                <Text style={{fontSize:40, color:'white', textAlign:'center'}}>NOTÍCIAS</Text>
                            </View>
                            <View style={{width:'80%', height:'60%'}}>
                                <TouchableHighlight onPress={() => AbrirNoticia(linkDestaque)} style={{width:'100%', height:'100%', borderRadius:20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor:'white'}}>
                                    <Image source={ imagemDestaque ? {uri: imagemDestaque} : require('../../assets/noticia.jpg') } style={{resizeMode:'contain', width:'100%', height:'100%'}}/>
                                </TouchableHighlight>
                            </View>
                            <View style={{width:'80%', height:'10%', borderRadius:20, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor:'#16abb2', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>{ manchete ? manchete : 'Carregando...' }</Text>
                            </View>
                        </View>
                        <View style={{ height: '45%' }}>
                            <ScrollView contentContainerStyle={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                                
                                {
                                    noticias.map(noticia =>
                                        <View key={noticia['title']} style={{width:'100%', height: '100%', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
                                            <TouchableHighlight onPress={() => AbrirNoticia(noticia['url'])} style={{width:'90%', height: '100%', flexDirection:'column', alignItems:'center', justifyContent:'center'}} >
                                            <View style={{width:'90%', height:70, alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
                                                <View style={{width: '20%', height: 60, borderRadius:99, borderColor: '#16abb2', borderWidth: 5, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 0}}>
                                                    <ImageBackground source={{'uri': noticia['urlToImage']}} style={{resizeMode:'contain', width: '100%', height: '100%', overflow: 'hidden'}} imageStyle={{borderRadius: 100, borderTopRightRadius: 0, borderBottomRightRadius: 0}} />
                                                </View>
                                                <View style={{width:'100%', height:60, backgroundColor:'white', borderRadius:99, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: '#16abb2', borderWidth: 5, borderLeftWidth: 0, padding: 10, paddingLeft: 8, paddingTop: 7, flexDirection: 'row' }}>
                                                    <Text>{ noticia["title"] }</Text>
                                                </View>
                                            </View>
                                            </TouchableHighlight>
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
                </View>
                <View>
                    <Base navigation={navigation} />
                </View>
            </View>
        </ImageBackground>
    );
};