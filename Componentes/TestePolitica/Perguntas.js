import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons, Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'

let numpergunta = 0;
let botao = [];
let tela = false

let dPergunta = [
    {
        txt:'O que mais importa em uma sociedade é o lucro.',
        favor:'d',
        peso:1,
    },
    {
        txt:'O que mais importa em uma sociedade é o bem-estar social.',
        favor:'e',
        peso:1,
    },
    {
        txt:'A função principal do Estado é Defender a propriedade privada e zelar pela ordem social.',
        favor:'d',
        peso:2,
    },
    {
        txt:'A função principal do Estado é assegurar direitos e benefícios para toda a população.',
        favor:'e',
        peso:1,
    },
    {
        txt:'Ser patriota se resume em reverenciar os símbolos de nossa pátria, respeitar as autoridades, preservar nossos costumes e conservá-los. Podemos tomar como exemplo de patriotismo as nossas forças armadas.',
        favor:'d',
        peso:3,
    },
    {
        txt:'Ser patriota é uma farsa. Isso é uma forma de alienação e manipulação das massas, onde os poderosos lançam os filhos dos trabalhadores para morrerem numa guerra que só interessa à elite.',
        favor:'e',
        peso:3,
    },
    {
        txt:'A polícia é uma instituição que serve para manter o privilégio das classes dominantes.',
        favor:'e',
        peso:2,
    },
    {
        txt:'A polícia é uma instituição necessária quase incorruptível que impões a ordem social, combatendo a criminalidade e tudo que for prejudicial para a sociedade.',
        favor:'d',
        peso:2,
    },
    {
        txt:'A polícia é uma instituição que possui seus erros e acertos mas ainda possui sua função primordial de proteger e servir.',
        favor:'n',
        peso:1,
    },
    {
        txt:'O papel principal da educação nas escolas de ensino básico é fazer os alunos pensarem por si mesmos, tomando como base uma visão racional e crítica de nossa realidade, a fim de formar cidadãos plenos e conscientes.',
        favor:'n',
        peso:1,
    },
    {
        txt:'O papel principal da educação nas escolas de ensino básico é introduzir nos alunos, além de conhecimento geral, valores morais, normas de obediência e valorização do caráter, a fim de formar um cidadão correto, patriota e de bons costumes.',
        favor:'d',
        peso:2,
    },
    {
        txt:'Para você as classes sociais definem o mérito de cada indivíduo dentro da sociedade, pois o comodismo gera derrota, enquanto a persistência gera sucesso.',
        favor:'d',
        peso:2,
    },
    {
        txt:'Para você é injusto que hajam classes superiores às outras, portanto a divisão entre classes deveria ser extinta através da união das classes.',
        favor:'e',
        peso:2,
    },
    {
        txt:'O abismo entre as classes sociais se dá pela desigualdade de oportunidades, portanto são necessárias políticas afirmativas para estreitar esse abismo.',
        favor:'n',
        peso:1,
    },
    {
        txt:'Movimentos sociais são necessários pois são formados de pessoas conscientes dos problemas da sociedade e lutam por causas justas. Movimentos sociais: movimentos em prol de alguma cousa social, como moradia, terra, igualdade de classes, de sexo, etc.',
        favor:'e',
        peso:1,
    },
    {
        txt:'Movimentos sociais não passam de baderneiros contrários à moral e aos bons costumes da nossa nação, só querem privilégios..',
        favor:'d',
        peso:3,
    },
    {
        txt:'A criminalidade é causada por um desvio puramente moral e a melhor forma de consertar isso é aumentando o policiamento contra quem comete crimes e atos ilícitos.',
        favor:'d',
        peso:1,
    },
    {
        txt:'A criminalidade é causada pela desigualdade social, portano é necessário somente reeducar os criminoso encarcerados a fim de que aprendam algum ofício para que possam se ingressar à sociedade como mão-de-obra.',
        favor:'e',
        peso:1,
    },
]

function Perguntas({route, navigation}) { 
    let [tela, setTela] = useState(false);
    let [botao, setBotao] = useState([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3])
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
    
    function setNumBotao(a){
        let newBotao = [...botao]
        newBotao[pergunta] = a
        setBotao(newBotao)
    }

    function renderRightArrow(){
        if(pergunta < dPergunta.length-1){
            return (
            <TouchableOpacity onPress={()=>{setPergunta(pergunta+1)}}>
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
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'1%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2), setNumBotao(1)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1), setNumBotao(2)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0), setNumBotao(3)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1), setNumBotao(4)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2), setNumBotao(5)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        if (dPergunta[pergunta].peso == 2){
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'1%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2/2), setNumBotao(1)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1/2), setNumBotao(2)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0), setNumBotao(3)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1), setNumBotao(4)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2), setNumBotao(5)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        if (dPergunta[pergunta].peso == 3){
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'1%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
                <TouchableOpacity onPress={()=>{setNewPontos(-2/3), setNumBotao(1)}} style={estilos.btn1}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(-1/3), setNumBotao(2)}} style={estilos.btn2}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(0), setNumBotao(3)}} style={estilos.btn3}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+1), setNumBotao(4)}} style={estilos.btn4}></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewPontos(+2), setNumBotao(5)}} style={estilos.btn5}></TouchableOpacity>
            </View>
        )}
        else {
            return(
            <View style={{width:'80%', height:'10%', flexDirection:'row',}}>{/*BOTÕES CONCORDO/DISCORDO*/}
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
        
        if (esquerda > direita){
            if (resultado > 40){
                return(
                    <View style={{height:'48%', width:'80%', backgroundColor:'white', borderRadius:10}}>
                        <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#b90510'}}>
                            <Text style={{textAlign:'center', color:'black', fontSize:25, fontWeight:'bold'}}>EXTREMA ESQUERDA</Text>
                        </View>
                            <ScrollView style={{backgroundColor:'#ffd4d4', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                                <Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia política de esquerda defende que o controle feito Estado, através dos seus governos, é a solução para que exista igualdade entre os cidadãos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                De acordo com essa ideia, o Estado deve controlar o funcionamento de vários setores da sociedade, além de ser responsável por proporcionar educação, saúde, trabalho e outros direitos básicos aos cidadãos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia de esquerda defende, principalmente, as classes sociais menos favorecidas na sociedade, ou seja, aquelas que necessitam de mais atenção e serviços públicos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                Os grupos de esquerda também são conhecidos por apoiarem sistemas de reformas sociais, como o socialismo e o comunismo.
                                </Text>
                            </ScrollView>
                    </View>
                )
            }else{
                return(
                    <View style={{height:'48%', width:'80%', backgroundColor:'white', borderRadius:10}}>
                        <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#b90510'}}>
                            <Text style={{textAlign:'center', color:'black', fontSize:25, fontWeight:'bold'}}>ESQUERDA</Text>
                        </View>
                            <ScrollView style={{backgroundColor:'#ffd4d4', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                                <Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia política de esquerda defende que o controle feito Estado, através dos seus governos, é a solução para que exista igualdade entre os cidadãos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                De acordo com essa ideia, o Estado deve controlar o funcionamento de vários setores da sociedade, além de ser responsável por proporcionar educação, saúde, trabalho e outros direitos básicos aos cidadãos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia de esquerda defende, principalmente, as classes sociais menos favorecidas na sociedade, ou seja, aquelas que necessitam de mais atenção e serviços públicos.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                Os grupos de esquerda também são conhecidos por apoiarem sistemas de reformas sociais, como o socialismo e o comunismo.
                                </Text>
                            </ScrollView>
                    </View>
                )
            }
        }else if (direita > esquerda){
            if (resultado > 34){
                return(
                    <View style={{height:'48%', width:'80%', backgroundColor:'white', borderRadius:10}}>
                        <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#84b4e4'}}><Text style={{textAlign:'center', color:'black', fontSize:30, fontWeight:'bold'}}>EXTREMA DIREITA</Text></View>
                            <ScrollView style={{backgroundColor:'#d9ecff', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                                <Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia política de direita entende que a sociedade será melhor organizada se os direitos individuais tiverem prioridade sobre os direitos de todos, ou seja, da coletividade. É um posicionamento considerado mais conservador.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A direita também defende que o poder do Estado seja limitado, que os governos não tenham tanto poder sobre o funcionamento e a regulamentação dos setores da sociedade e das empresas. Isso significa que parte da responsabilidade deve ser dos cidadãos e não do Estado.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A direita também acredita no conceito de livre mercado, em que as empresas tenham liberdade para agir e se regulamentar por conta própria, sem sofrer intervenção por parte do Estado.
                                </Text>
                            </ScrollView>
                    </View>
                )
            }else{
                return(
                    <View style={{height:'48%', width:'80%', backgroundColor:'white', borderRadius:10}}>
                        <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#84b4e4'}}><Text style={{textAlign:'center', color:'black', fontSize:30, fontWeight:'bold'}}>DIREITA</Text></View>
                            <ScrollView style={{backgroundColor:'#d9ecff', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                                <Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A ideologia política de direita entende que a sociedade será melhor organizada se os direitos individuais tiverem prioridade sobre os direitos de todos, ou seja, da coletividade. É um posicionamento considerado mais conservador.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A direita também defende que o poder do Estado seja limitado, que os governos não tenham tanto poder sobre o funcionamento e a regulamentação dos setores da sociedade e das empresas. Isso significa que parte da responsabilidade deve ser dos cidadãos e não do Estado.
                                </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                                A direita também acredita no conceito de livre mercado, em que as empresas tenham liberdade para agir e se regulamentar por conta própria, sem sofrer intervenção por parte do Estado.
                                </Text>
                            </ScrollView>
                    </View>
                )
            }
        }else if (direita == esquerda){
            return(
                <View style={{height:'48%', width:'80%', backgroundColor:'white', borderRadius:10}}>
                    <View style={{borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:'#5e5e5e'}}><Text style={{textAlign:'center', color:'white', fontSize:30, fontWeight:'bold'}}>CENTRO</Text></View>
                        <ScrollView style={{backgroundColor:'#bfbfbf', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                            <Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                            Um partido de centro não é nem capitalista extremado nem socialista, mas ele vê a necessidade de defender o capitalismo sem deixar de se preocupar com o lado social. 
                            </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                            Na visão da política de centro, não deve haver extremismos ou intransigências na sociedade. Os seus principais valores são: antiextremismo sustentado pelo equilíbrio que cria a tolerância que defende a coexistência pacífica. 
                            </Text><Text style={{textAlign:'justify', marginRight:5, marginLeft:5}}>
                            Os políticos de centro são caracterizados como sendo mais conciliadores e menos intolerantes.
                            </Text>
                        </ScrollView>
                </View>
            )
        }

    }

    function btnfim(){
        if (pergunta != 17)
        {
            return(
                <TouchableOpacity onPress={()=>Alert.alert('Como funciona?','Bem-vindo ao Teste do Espectro Político! Aqui você descobrirá qual a sua posição política. Serão feitas perguntas sobre política e o âmbito social, você deverá responder de acordo com suas opiniões pessoais. Depois de responder as perguntas, nosso app revelará seu posicionamento político (esquerda ou direita).')}>
                    <Ionicons name="help-circle-outline" size={50} color="#092838"/>
                </TouchableOpacity>
            )
        }else if (pergunta == 17)
        {
            return(
                <View style={{width:'100%',height:'20%',alignItems:'center', marginTop:'-5%'}}>
                    <TouchableOpacity style={estilos.btnfim} onPress={() => {setTela(true)}}>
                        <View style={estilos.btnfimfundo}>
                            <Text style={{color:'#e8e8e8', fontSize:20}}>Finalizar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    function setinha(){
        switch (botao[pergunta]){
            case 1:
                return(
                    <View style={{width:"76%", height:'4%', marginTop:'2%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}>
                            <AntDesign name="down" size={20} color="black"/>
                        </View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                    </View>)
                break;
            case 2:
                return(
                    <View style={{width:"76%", height:'4%', marginTop:'2%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}>
                            <AntDesign name="down" size={20} color="black"/>
                        </View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                    </View>)
                break;
            case 3:
                return(
                    <View style={{width:"76%", height:'4%', marginTop:'2%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}>
                            <AntDesign name="down" size={20} color="black"/>
                        </View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                    </View>)
                break;
            case 4:
                return(
                    <View style={{width:"76%", height:'4%', marginTop:'2%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}>
                            <AntDesign name="down" size={20} color="black"/>
                        </View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                    </View>)
                break;
            case 5:
                return(
                    <View style={{width:"76%", height:'4%', marginTop:'2%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}></View>
                        <View style={{width:'20%', height:'100%', alignItems:'center',}}>
                            <AntDesign name="down" size={20} color="black"/>
                        </View>
                    </View>)
                break;
        }
    }

    function Resultado(){
        if (tela == false){
            return(
                <View style={{height:'71%', width:'100%', backgroundColor:'#16abb2', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'100%', width:'100%', alignItems:'center',}}>

                        <View style={{height:'40%', width:'90%', marginTop:'5%', borderRadius:10, backgroundColor:'lightblue', borderColor:'black', borderWidth:2, justifyContent:'center', alignItems:'center'}}>
                            <View style={{height:'90%', width:'95%', justifyContent:'center'}}>
                                <Text style={{textAlignVertical:'center', textAlign:'center',}}>{dPergunta[pergunta].txt}</Text>{/* AQUI É O CORPO DA PERGUNTAAAAAAAAAAAA */}
                            </View>
                        </View>

                        {setinha()}

                        {pontoss()} 

                        <View style={{width:'80%', height:'5%', flexDirection:'row-reverse',justifyContent:'space-between',}}>
                            <Text>Concordo</Text>
                            <Text>Neutro</Text>
                            <Text>Discordo</Text>
                        </View>

                        <View style={{width:'100%', height:'16%', justifyContent:'center', alignItems:'center',}}>
                            {btnfim()}
                        </View>

                        <View style={{width:'90%', height:'21%', flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
                            <View>
                                {renderLeftArrow()}
                            </View>
                            <View>
                                {renderRightArrow()}
                            </View>
                        </View>

                    </View>
                </View>
            )
        }else if (tela == true){
            return(
                <View style={{height:'72%', width:'100%', alignItems:'center', backgroundColor:'#092838'}}>
                    <View style={{height:'43%', width:'100%'}}>
                        <Image source={require('../../assets/textoquiz/esq_dir.jpg')} style={{resizeMode:'stretch', width:'100%', height:'100%'}}/>    
                    </View>
                    <Text style={{fontWeight:'bold', fontSize:15, textAlign:'center', color:'white'}}>RESULTADO:</Text>
                    {somatoria()}
                    <View style={{width:'100%', height:'5%'}}></View>
                </View>
            )
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
                            <TouchableOpacity onPress={()=> navigation.navigate('TestePolitica')} style={{width:'33%', height:'100%', alignItems:'flex-end', marginTop:'3%'}}>
                                <MaterialCommunityIcons name="exit-to-app" size={50} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'100%', height:'50%',}}><Text style={{fontWeight:'bold', fontSize:45, textAlign:'center', color:'white'}}>Teste Politico</Text></View>
                    </View>
                </View>

                {/* CORPO DO TESTEEEEEE */}
                {Resultado()}

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
    btnfim:{
        width: 140,
        height: 40,
        elevation: 5,
        backgroundColor: "#092838",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",},
    
    btnfimfundo:{
        marginBottom: 10,
        right: 1,
        width: 140,
        height: 35,
        elevation: 2,
        backgroundColor: "#2f5c73",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#092838",
        justifyContent: "center",
        alignItems: "center"},
})