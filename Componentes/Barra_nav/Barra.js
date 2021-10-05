import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function({ navigation }) {
    return (
        <View style={{width:'100%',height:'30%',flexDirection:"row",backgroundColor:'#092838',justifyContent:'space-around'}}>
            <View style={{flexGrow:1,padding:10}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home_oficial")}>
                    <Image 
                        source={require('../../assets/home.png')}
                        style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <TouchableOpacity onPress={() => navigation.navigate("Atividades")}>
                    <Image 
                        source={require('../../assets/atividades.png')}
                        style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexGrow:1}}>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <Image
                        source={require('../../assets/perfil.png')}
                        style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <TouchableOpacity onPress={() => navigation.navigate("Rank")}>
                    <Image 
                        source={require('../../assets/rank.png')}
                        style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexGrow:1,padding:10}}>
                <TouchableOpacity onPress={() => navigation.navigate("Quizz")}>
                    <Image
                        source={require('../../assets/buzzfeed.png')}
                        style={{width:"100%",height:'100%',resizeMode:'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};