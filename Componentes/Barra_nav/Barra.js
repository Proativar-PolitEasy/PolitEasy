import React from 'react';
import { View, Image } from 'react-native';

export default function() {
    return (
        <View style={{width:'100%',height:'30%',flexDirection:"row",backgroundColor:'#092838',justifyContent:'space-around'}}>
            <View style={{flexGrow:1,padding:10}}>
                <Image 
                    source={require('../../assets/home.png')}
                    style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <Image 
                    source={require('../../assets/atividades.png')}
                    style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
            </View>
            <View style={{flexGrow:1}}>
                <Image
                    source={require('../../assets/perfil.png')}
                    style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <Image 
                    source={require('../../assets/rank.png')}
                    style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <Image
                    source={require('../../assets/buzzfeed.png')}
                    style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
            </View>
        </View>
    );
};