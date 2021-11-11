import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

let numpergunta = 0;

let dPergunta = [
    {
        txt:'O que mais importa em uma sociedade é o lucro.DIR1',
        favor:'d',
        peso:1,
    },
    {
        txt:'O que mais importa em uma sociedade é o bem-estar social.ESQ1 TA 2 POR ENQUANTO',
        favor:'e',
        peso:2,
    },
    {
        txt:'O que mais importa em uma sociedade é o bem-estar social.ESQ1 TA 2 POR ENQUANTO',
        favor:'e',
        peso:2,
    },
]

function Perguntas({route, navigation}) { 
    
    let [pontos, setPontos] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    //let [esquerda, setEsquerda] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    let [pergunta, setPergunta] = useState(0);

    function setNewPontos(p){
        let current = pontos
        current[pergunta] = p*(dPergunta[pergunta].peso);
        setPontos(current);
        console.log(pontos)
    }

    function renderRightArrow(){
        if(pergunta < dPergunta.length-1){
            return (
            <TouchableOpacity onPress={()=>{setPergunta(pergunta+1)}}
            >
               <Entypo name="arrow-with-circle-right" size={65} color="#092838"/>
           </TouchableOpacity>
           )
        }
    }
    function renderLeftArrow(){
        if(pergunta != 0){
            return (
                <TouchableOpacity onPress={()=>{setPergunta(pergunta-1)}}>
                <Entypo name="arrow-with-circle-left" size={65} color="#092838"/>
                </TouchableOpacity>
           )
        }
    }
    function pontoss(){
        return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )
    }
    function somatoria(){
        let direita = 0;
        let esquerda = 0;
        dPergunta.forEach((p,i) => {
            if (p.favor=='d'){
                direita+=pontos[i];
            }
            else if (p.favor=='e'){
                esquerda+=pontos[i];
            }
        });
        console.log(direita) //É O RESULTADO DO TESTE
        console.log(esquerda) //É O RESULTADO DO TESTE

        if (esquerda > direita){
            resultado = esquerda - direita
            if (resultado >= 10)
                console.log('VOCE É DE EXTREMA ESQUERDA!!!!!!!!!!!')
            else if (resultado < 10)
                console.log('voce é de esquerda.')
            }
        else if (direita > esquerda){
            resultado = direita - esquerda
            if (resultado >= 10)
                console.log('VOCE É DE EXTREMA DIREITA')
            else if (resultado < 10)
                console.log('voce é de direita.')
        }
    }


    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'100%', backgroundColor:'#16abb2'}}>
                
                <View style={{width:'100%', height:'3.5%', backgroundColor:'white'}}></View>

                <View style={{width:'100%',height:'25%', alignItems:'center',flexDirection:'row', backgroundColor:'#092838'}}>
                    {/* TESTE POLÍTICO */}
                    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={{width:'33%', height:'100%', alignItems:'center'}}></View>
                            <View style={{width:'33%', height:'100%', alignItems:'center',}}><Ionicons name="ios-compass" size={80} color="white"/></View>
                            <TouchableOpacity style={{width:'33%', height:'100%', alignItems:'flex-end', marginTop:'3%'}}>
                                <MaterialCommunityIcons name="exit-to-app" size={50} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%', height:'50%',}}><Text style={{fontWeight:'bold', fontSize:45, textAlign:'center', color:'white'}}>Teste Politico</Text></View>
                    </View>
                </View>

                {/* CORPO DO TESTEEEEEE */}
                <View style={{height:'71%', width:'100%', backgroundColor:'#16abb2', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'100%', width:'100%', alignItems:'center',}}>

                        <View style={{height:'40%', width:'90%', marginTop:'5%', borderRadius:10, backgroundColor:'lightblue', borderColor:'black', borderWidth:2, justifyContent:'center', alignItems:'center'}}>
                            <View style={{height:'90%', width:'95%', justifyContent:'center'}}>
                                <Text style={{textAlignVertical:'center', textAlign:'center',}}>{dPergunta[pergunta].txt} Pontos:{pontos[pergunta]}</Text>{/* AQUI É O CORPO DA PERGUNTAAAAAAAAAAAA */}
                            </View>
                        </View>
                        
                        {pontoss()} 

                        <View style={{width:'80%', height:'10%', flexDirection:'row-reverse',justifyContent:'space-between'}}>
                            <Text>Concordo</Text>
                            <Text>Neutro</Text>
                            <Text>Discordo</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>somatoria()} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                            <Ionicons name="help-circle-outline" size={50} color="pink"/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Alert.alert('Como funciona?','Clique nos vermelhos de acordo com o nível de sua discordância e nos verdes de acordo com sua concordância')} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                            <Ionicons name="help-circle-outline" size={50} color="#092838"/>
                        </TouchableOpacity>

                        <View style={{width:'90%', height:'21%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View>
                                {renderLeftArrow()}
                            </View>
                            <View>
                                {renderRightArrow()}
                            </View>
                        </View>

                    </View>
                </View>

            </View>

        </View>
    );
};

export default Perguntas;

const estilos = StyleSheet.create({
    btn1:{
        width:'20%', 
        height:'100%', 
        borderColor:'black', 
        borderWidth:0.9, 
        backgroundColor:'#de1414', 
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius:25
    },
    btn2:{
        width:'20%', 
        height:'100%', 
        borderColor:'black', 
        borderWidth:0.9, 
        backgroundColor:'#f54747',
    },
    btn3:{
        width:'20%', 
        height:'100%', 
        borderColor:'black', 
        borderWidth:0.9, 
        backgroundColor:'#857c7a',
    },
    btn4:{
        width:'20%', 
        height:'100%', 
        borderColor:'black', 
        borderWidth:0.9, 
        backgroundColor:'#72c44f',
    },
    btn5:{
        width:'20%', 
        height:'100%', 
        borderColor:'black', 
        borderWidth:0.9, 
        backgroundColor:'#009942', 
        borderTopRightRadius:25, 
        borderBottomEndRadius:25,
    },
    btn:{},
    btn:{},
    btn:{},
    btn:{},
})