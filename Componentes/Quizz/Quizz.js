import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra'
import Pergunta from '../../lib/database/Pergunta';
import Pontuacao from '../../lib/database/Pontuacao';
import Botao from '../Util/Botao';
import Resposta from '../../lib/database/Resposta';

function Quizz({route, navigation: { goBack }}) {
    const { idTemaEscolhido, idUsuario } = route.params;
    const { temaEscolhido } = route.params;
    const [questoes, setQuestoes] = useState([]);
    const [pergunta, setPergunta] = useState(null);
    const [notificacao, setNotificacao] = useState("");
    const [questaoAtual, setQuestaoAtual] = useState(0); // index de <questoes>
    const [numeroQuestoes, setNumeroQuestoes] = useState(10); // alterar esse valor conforme necessário
    const [acertosConsecutivos, setAcertosConsecutivos] = useState(0);
    const [recompensa, setRecompensa] = useState(0);

    useEffect(() => {
        const tempQuestoes = [];
        let tempNumeroQuestoes;
        let indexPergunta;
        
        if (questoes.length === 0) {
            Pergunta.RetornarPerguntasPorTema(idTemaEscolhido)
            .then((perguntas) => {
                // Achar questões aleatórias sobre o tema.
                console.log(perguntas)
                tempNumeroQuestoes = perguntas.length < numeroQuestoes ? perguntas.length : numeroQuestoes;
                
                for (let i = 1; i <= tempNumeroQuestoes; i++) {
                    // Math.floor e Math.random são usados para achar uma questão aleatória sobre o tema.
                    indexPergunta = Math.floor(Math.random() * perguntas.length);
                    
                    console.log(indexPergunta);
                    // Salvar essa questão encontrada, colocando uma nova propriedade "acertou" para que seja possível 
                    // determinar esse valor mais tarde.
                    tempQuestoes.push(Object.assign(perguntas[indexPergunta], { "acertou": null }));
                    
                    // Eliminar a questão obtida para não obter perguntas repetidas.
                    perguntas.splice(indexPergunta, 1);
                }
                
                setQuestoes(tempQuestoes);
                setPergunta(tempQuestoes[questaoAtual]);
                setNumeroQuestoes(tempNumeroQuestoes);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const ResponderPergunta = (letra) => {
        const questoesValorAntigo = questoes;

        if (notificacao) {
            return;
        }
        
        // Achar a pergunta correspondente à respondida, alterar o seu estado "acertou" para o respectivo valor.
        questoesValorAntigo[questoesValorAntigo.indexOf(pergunta)]["acertou"] = letra === pergunta["resposta"];
        
        // Salvar valores na memória.
        setQuestoes(questoesValorAntigo);

        // Registrar resposta no banco
        Resposta.SalvarResposta(pergunta['id'], idUsuario, letra === pergunta['resposta']);

        // Atualizar acertos consecutivos e recompensa total
        if (letra === pergunta['resposta']) {
            setRecompensa(recompensa + (10 * (acertosConsecutivos + 1)));
            setAcertosConsecutivos(acertosConsecutivos + 1);
        } else {
            console.log('Perda de streak.');
            setAcertosConsecutivos(0);
        }
        
        // Notificar usuário se acertou ou errou.
        setNotificacao(letra === pergunta["resposta"] ? "\n\nParabéns, você acertou!" : "\n\nQue pena, você errou!");
    }
    
    const AlternarPergunta = () => {
        const novaQuestao = questaoAtual + 1;

        setQuestaoAtual(novaQuestao);
        setNotificacao('');
        
        if (novaQuestao >= numeroQuestoes) {
            Pontuacao.SalvarPontuacao(idUsuario, recompensa);
            Alert.alert('QUIZ FINALIZADO!', `Você acertou ${questoes.filter(q => q['acertou']).length} das ${numeroQuestoes} questões.`);
            goBack();
        } else {
            setPergunta(questoes[novaQuestao]);
        }
    }

    return (
        <View style={{flex:1, alignItems:'center', backgroundColor:'#16abb2'}}>
            <View style={{width:'100%', height:'3.5%', backgroundColor:'white'}}></View>

            {/* CABEÇALHO */}
            <View style={{width:'100%',height:'10%', justifyContent:'flex-start', alignItems:'center', backgroundColor:'#092838', flexDirection:'row'}}>
                <View style={{height:'100%', width:'15%', justifyContent:"center", alignItems:'flex-end',marginRight:"3%"}}>{/* SETA VOLTAR*/}
                    <TouchableOpacity onPress={() => goBack()}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{height:'75%', width:'70%', justifyContent:"center", alignItems:'center', backgroundColor:'white', borderRadius:20,}}>{/* TITULO */}
                    <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>{ temaEscolhido.toUpperCase() }</Text>
                </View>
            </View>

            {/* CAIXA DE TEXTO DA PERGUNTA */}
            <View style={{height:'35%', width:'95%', marginTop:'3%', borderRadius:10, justifyContent:'center', alignItems:'center', elevation:5, backgroundColor:'#092838'}}>
                <View style={{height:'94%', width:'96.5%', backgroundColor:'white', borderRadius:10,justifyContent:'flex-end'}}>
                    <View style={{width:'100%', height:'85%', justifyContent:'center'}}>
                        <Text style={estilos.txtpergunta}>{ pergunta ? pergunta["enunciado"] : "Carregando..." }{ notificacao }</Text>
                    </View>
                    <View style={{backgroundColor:'#092838', height:'15%'}}>
                        <Text style={{color:'white', fontSize:22, textAlign:'center'}}>{ questaoAtual + 1 } / { numeroQuestoes }</Text>
                    </View>
                </View>
            </View>

            {/* OPÇÕES */}
            <View style={{width:'100%',height:'35%',alignItems:'center', marginTop:'5%',}}>
                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("A")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "A")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("B")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "B")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("C")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "C")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.btn} onPress={() => ResponderPergunta("D")}>
                    <View style={estilos.btnfundo}>
                        <Text style={estilos.txtoption}>{ pergunta ? pergunta["alternativas"].find(alt => alt["letra"] === "D")["alternativa"] : "" }</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {
                notificacao
                ? 
                    <TouchableOpacity onPress={() => AlternarPergunta()} style={[estilos.btncontinuar]}>
                        <View style={estilos.btnfundocontinuar}>
                            <Text style={estilos.txtcontinuar}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                :
                    <TouchableOpacity onPress={()=>Alert.alert('COMO JOGAR?','Para jogar é muito simples, serão feitas 10 perguntas sobre o tema escolhido e para cada pergunta terá 4 opções, sendo uma delas a opção correta e 3 erradas. O jogador deve ler, interpretar as questões e tentar responder o maior número de questões da maneira correta. Leia os textos de apoio e teste seu conhecimento em nossos quizes preparados especialmente para testar suas habilidades, boa sorte!!!!')} style={{width:'15%', height:'11%', justifyContent:'center', alignItems:'center',}}>
                        <Ionicons name="help-circle-outline" size={50} color="#092838"/>
                    </TouchableOpacity>
            }
        </View>
    );
};

export default Quizz;

const estilos = StyleSheet.create({
    btn:{
        width: '75%',
        height: '22%',
        elevation: 2,
        backgroundColor: "#9aa7b2",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9aa7b2",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10},

    btnfundo:{
        marginBottom: 10,
        right: 1,
        width: '100%',
        height: '100%',
        elevation: 2,
        backgroundColor: "#c7d0d8",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#9aa7b2",
        justifyContent: "center",
        alignItems: "center",},

    txtpergunta:{
        fontSize:16, 
        color: "#1f2136",
        textAlignVertical:'center', 
        textAlign:'center'},

    txtoption:{
        textAlign: "center",
        color:'#1f2136', 
        fontSize:10},

    txtcontinuar:{
        textAlign: "center",
        color:'white', 
        fontSize:20,
        fontWeight:'bold'
    },
    
    btncontinuar:{
        width: '45%',
        height: '6%',
        elevation: 2,
        backgroundColor: "#1f2136",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#616691",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginTop:'5%'
    },

    btnfundocontinuar:{
        marginBottom: 10,
        right: 1,
        width: '100%',
        height: '100%',
        elevation: 2,
        backgroundColor: "#375e73",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#375e73",
        justifyContent: "center",
        alignItems: "center",},
})