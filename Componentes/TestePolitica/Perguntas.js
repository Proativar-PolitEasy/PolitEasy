import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

let numpergunta = 0;
let txtpergunta = [
    'O que mais importa em uma sociedade é o lucro.DIR1',
    'O que mais importa em uma sociedade é o bem-estar social.ESQ1',
    'A função principal do Estado é Defender a propriedade privada e zelar pela ordem social.DIR2',
    'A função principal do Estado é assegurar diXXXXXXXXXXXXXreitos e benefícios para toda a população.ESQ2',
    'Ser patriota se resume em reverenciar os símbolos de nossa pátria, respeitar as autoridades, preservar nossos costumes e conservá-los. Podemos tomar como exemplo de patriotismo as nossas forças armadas.DIR3',
    'Ser patriota é uma farsa. Isso é uma forma de alienação e manipulação das massas, onde os poderosos lançam os filhos dos trabalhadores para morrerem numa guerra que só interessa à elite.ESQ3',
    'A polícia é uma instituição que serve para manter o privilégio das classes dominantes.ESQ2',
    'A polícia é uma instituição necessária quase incorruptível que impões a ordem social, combatendo a criminalidade e tudo que for prejudicial para a sociedade.DIR2',
    'É uma instituição que possui seus erros e acertos mas ainda possui sua função primordial de proteger e servirNEUTRO',
    'O papel principal da educação nas escolas de ensino básico é fazer os alunos pensarem por si mesmos, tomando como base uma visão racional e crítica de nossa realidade, a fim de formar cidadãos plenos e conscientesNEUTRO',
    'O papel principal da educação nas escolas de ensino básico é *incutir nos alunos, além de conhecimento geral, valores morais, normas de obediência e valorização do caráter, a fim de formar um cidadão correto, patriota e de bons costumes.*incutir: fazer(-se) penetrar em; intordiuzir(-se).DIR2',
    'Para você as classes sociais definem o mérito de cada indivíduo dentro da sociedade, pois o comodismo gera derrota, enquanto a persistência gera sucesso.DIR2',
    'Para você é injusto que hajam classes superiores às outras, portanto a divisão entre classes deveria ser extinta através da união das classes.ESQ2',
    'O abismo entre as classes sociais se dá pela desigualdade de oportunidades, portanto são necessárias políticas afirmativas para estreitar esse abismoNEUTRO',
    'Movimentos sociais são necessários pois são formados de pessoas conscientes dos problemas da sociedade e lutam por causas justas.Movimentos sociais:movimentos em prol de alguma cousa social, como moradia, terra, igualdade de classes, de sexo, etc.ESQ1',
    'Movimentos sociais não passam de baderneiros contrários à moral e aos bons costumes da nossa nação, só querem privilégios..DIR3',
    'A criminalidade é causada por um desvio puramente moral e a melhor forma de consertar isso é aumentando o policiamento contra quem comete crimes e atos ilícitos.DIR1',
    'A criminalidade é causada pela desigualdade social, portano é necessário somente reeducar os criminoso encarcerados a fim de que aprendam algum ofício para que possam se ingressar à sociedade como mão-de-obra.ESQ1'
];

function Perguntas({route, navigation}) {
    return (
        <View style={{flex:1,}}>
            <View style={{width:'100%', height:'100%', backgroundColor:'#16abb2'}}>
                
                <View style={{width:'100%', height:'3.5%', backgroundColor:'white'}}></View>

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

                        <View style={{height:'30%', width:'90%', borderRadius:10, backgroundColor:'lightblue', marginTop:'10%', borderColor:'black', borderWidth:2,justifyContent:'center'}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center'}}>{txtpergunta[14]}</Text>{/* AQUI É O CORPO DA PERGUNTAAAAAAAAAAAA */}
                        </View>
                        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'10%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                            <TouchableOpacity style={{width:'20%', height:'100%', borderColor:'black', borderWidth:0.9, backgroundColor:'#de1414', borderTopLeftRadius: 20, borderBottomLeftRadius:25}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', borderColor:'black', borderWidth:0.9, backgroundColor:'#f54747'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', borderColor:'black', borderWidth:0.9, backgroundColor:'#857c7a'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', borderColor:'black', borderWidth:0.9, backgroundColor:'#72c44f'}}></TouchableOpacity>
                            <TouchableOpacity style={{width:'20%', height:'100%', borderColor:'black', borderWidth:0.9, backgroundColor:'#009942', borderTopRightRadius:25, borderBottomEndRadius:25}}></TouchableOpacity>
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

        </View>
    );
};




export default Perguntas;