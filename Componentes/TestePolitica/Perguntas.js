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
        txt:'O que mais importa em uma sociedade é o bem-estar social.ESQ1',
        favor:'e',
        peso:1,
    },
    {
        txt:'A função principal do Estado é Defender a propriedade privada e zelar pela ordem social.DIR2',
        favor:'d',
        peso:2,
    },
    {
        txt:'A função principal do Estado é assegurar diXXXXXXXXXXXXXreitos e benefícios para toda a população.ESQ1',
        favor:'e',
        peso:1,
    },
    {
        txt:'Ser patriota se resume em reverenciar os símbolos de nossa pátria, respeitar as autoridades, preservar nossos costumes e conservá-los. Podemos tomar como exemplo de patriotismo as nossas forças armadas.DIR3',
        favor:'d',
        peso:3,
    },
    {
        txt:'Ser patriota é uma farsa. Isso é uma forma de alienação e manipulação das massas, onde os poderosos lançam os filhos dos trabalhadores para morrerem numa guerra que só interessa à elite.ESQ3',
        favor:'e',
        peso:3,
    },
    {
        txt:'A polícia é uma instituição que serve para manter o privilégio das classes dominantes.ESQ2',
        favor:'e',
        peso:2,
    },
    {
        txt:'A polícia é uma instituição necessária quase incorruptível que impões a ordem social, combatendo a criminalidade e tudo que for prejudicial para a sociedade.DIR2',
        favor:'d',
        peso:2,
    },
    {
        txt:'É uma instituição que possui seus erros e acertos mas ainda possui sua função primordial de proteger e servirNEUTRO',
        favor:'n', //NEUTROOOOOOOOOOOOOOOOOOO
        peso:1,
    },
    {
        txt:'O papel principal da educação nas escolas de ensino básico é fazer os alunos pensarem por si mesmos, tomando como base uma visão racional e crítica de nossa realidade, a fim de formar cidadãos plenos e conscientesNEUTRO',
        favor:'n', //NEUTROOOOOOOOOOOOOOOOOOO
        peso:1,
    },
    {
        txt:'O papel principal da educação nas escolas de ensino básico é *incutir nos alunos, além de conhecimento geral, valores morais, normas de obediência e valorização do caráter, a fim de formar um cidadão correto, patriota e de bons costumes.*incutir: fazer(-se) penetrar em; intordiuzir(-se).DIR2',
        favor:'d',
        peso:2,
    },
    {
        txt:'Para você as classes sociais definem o mérito de cada indivíduo dentro da sociedade, pois o comodismo gera derrota, enquanto a persistência gera sucesso.DIR2',
        favor:'d',
        peso:2,
    },
    {
        txt:'Para você é injusto que hajam classes superiores às outras, portanto a divisão entre classes deveria ser extinta através da união das classes.ESQ2',
        favor:'e',
        peso:2,
    },
    {
        txt:'O abismo entre as classes sociais se dá pela desigualdade de oportunidades, portanto são necessárias políticas afirmativas para estreitar esse abismoNEUTRO',
        favor:'n', //NEUTROOOOOOOOOOOOOOOOOOO
        peso:1,
    },
    {
        txt:'Movimentos sociais são necessários pois são formados de pessoas conscientes dos problemas da sociedade e lutam por causas justas.Movimentos sociais:movimentos em prol de alguma cousa social, como moradia, terra, igualdade de classes, de sexo, etc.ESQ1',
        favor:'e',
        peso:1,
    },
    {
        txt:'Movimentos sociais não passam de baderneiros contrários à moral e aos bons costumes da nossa nação, só querem privilégios..DIR3',
        favor:'d',
        peso:3,
    },
    {
        txt:'A criminalidade é causada por um desvio puramente moral e a melhor forma de consertar isso é aumentando o policiamento contra quem comete crimes e atos ilícitos.DIR1',
        favor:'d',
        peso:1,
    },
    {
        txt:'A criminalidade é causada pela desigualdade social, portano é necessário somente reeducar os criminoso encarcerados a fim de que aprendam algum ofício para que possam se ingressar à sociedade como mão-de-obra.ESQ1',
        favor:'e',
        peso:1,
    },
]

function Perguntas({route, navigation}) { 
    
    let [pontos, setPontos] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    let [pergunta, setPergunta] = useState(0);

    function setNewPontos(p){
        let current = pontos
        current[pergunta] = p*dPergunta[pergunta].peso;
        setPontos(current);

        if (dPergunta[pergunta].peso == 1)
        {

        }
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
        if (dPergunta[pergunta].peso == 1){
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        if (dPergunta[pergunta].peso == 2){
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2/2)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1/2)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        if (dPergunta[pergunta].peso == 3){
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2/3)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1/3)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        else {
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn5}></TouchableOpacity>
            </View>
            )
        }
    }
    function somatoria(){
        let direita = 0;
        let esquerda = 0;
        let neutro = 0;
        let auxiliar = 0;
        let resultado = 0;
        dPergunta.forEach((p,i) => {
            if (p.favor=='d'){
                direita+=pontos[i];
            }
            else if (p.favor=='e'){
                esquerda+=pontos[i];
            }
            else if (p.favor=='n'){
                neutro+=pontos[i];
            }
        });
        console.log(direita,'aqui é direita') //É O RESULTAaDO DO TESTE
        console.log(esquerda,'aqui é esquerda') //É O RESULTaADO DO TESTE
        console.log(neutro,'aqui é neutro') 

        if (esquerda > direita)
            auxiliar = esquerda - direita
        else if (direita > esquerda){
            auxiliar = direita - esquerda
        }
        else if (direita == esquerda)
            auxiliar = 0;

        resultado = auxiliar - neutro;
        if (resultado < 0)
            resultado = 0;
        console.log('AQUI É O RESULTADO FINAL', resultado)
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
                            <TouchableOpacity onPress={()=>somatoria()} style={{width:'33%', height:'100%', alignItems:'flex-end', marginTop:'3%'}}>
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
                        {/*
                        <TouchableOpacity onPress={()=>console.log(dPergunta[pergunta].peso), somatoria()} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                            <Ionicons name="help-circle-outline" size={50} color="pink"/>
                        </TouchableOpacity>
                        */}

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