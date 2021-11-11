switch (pergunta) {
    case 0: 
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda[pergunta]=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda[pergunta]=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita[pergunta]=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerdaP(2)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 1: /* ESQ1 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 2: /* DIR2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 3: /* ESQ1 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>

        </View>)
        break;
    case 4: /* DIR3 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>setDireita(direita+=4)} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 5: /* ESQ3 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=4)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 6: /* ESQ2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 7: /* DIR2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 8: /* NEUTRO */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 9: /* NEUTRO */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 10: /* DIR2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 11: /* DIR2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 12: /* ESQ2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 13: /* NEUTRO */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 14: /* ESQ1 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
    break;
    case 15: /* DIR2 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>setDireita(direita+=3)} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 16: /* DIR1 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;
    case 17: /* ESQ1 */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
            <TouchableOpacity style={estilos.btn3}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>
        </View>)
        break;

    default: /* SEM TOUCHABEL OPAXITY */
        return(
        <View style={{width:'80%', height:'10%', flexDirection:'row', marginTop:'5%'}}>{/*BOTÕES CONCORDO/DISCORDO*/}
            <View style={estilos.btn1}></View>
            <View style={estilos.btn2}></View>
            <View style={estilos.btn3}></View>
            <View style={estilos.btn4}></View>
            <View style={estilos.btn5}></View>
        </View>)
        break;
}
}


let txtpergunta = [
    /* 1 */   'O que mais importa em uma sociedade é o lucro.DIR1',
    /* 2 */   'O que mais importa em uma sociedade é o bem-estar social.ESQ1',
    /* 3 */   'A função principal do Estado é Defender a propriedade privada e zelar pela ordem social.DIR2',
    /* 4 */   'A função principal do Estado é assegurar diXXXXXXXXXXXXXreitos e benefícios para toda a população.ESQ1',
    /* 5 */   'Ser patriota se resume em reverenciar os símbolos de nossa pátria, respeitar as autoridades, preservar nossos costumes e conservá-los. Podemos tomar como exemplo de patriotismo as nossas forças armadas.DIR3',
    /* 6 */   'Ser patriota é uma farsa. Isso é uma forma de alienação e manipulação das massas, onde os poderosos lançam os filhos dos trabalhadores para morrerem numa guerra que só interessa à elite.ESQ3',
    /* 7 */   'A polícia é uma instituição que serve para manter o privilégio das classes dominantes.ESQ2',
    /* 8 */   'A polícia é uma instituição necessária quase incorruptível que impões a ordem social, combatendo a criminalidade e tudo que for prejudicial para a sociedade.DIR2',
    /* 9 */   'É uma instituição que possui seus erros e acertos mas ainda possui sua função primordial de proteger e servirNEUTRO',
    /* 10 */   'O papel principal da educação nas escolas de ensino básico é fazer os alunos pensarem por si mesmos, tomando como base uma visão racional e crítica de nossa realidade, a fim de formar cidadãos plenos e conscientesNEUTRO',
    /* 11 */   'O papel principal da educação nas escolas de ensino básico é *incutir nos alunos, além de conhecimento geral, valores morais, normas de obediência e valorização do caráter, a fim de formar um cidadão correto, patriota e de bons costumes.*incutir: fazer(-se) penetrar em; intordiuzir(-se).DIR2',
    /* 12 */   'Para você as classes sociais definem o mérito de cada indivíduo dentro da sociedade, pois o comodismo gera derrota, enquanto a persistência gera sucesso.DIR2',
    /* 13 */   'Para você é injusto que hajam classes superiores às outras, portanto a divisão entre classes deveria ser extinta através da união das classes.ESQ2',
    /* 14 */   'O abismo entre as classes sociais se dá pela desigualdade de oportunidades, portanto são necessárias políticas afirmativas para estreitar esse abismoNEUTRO',
    /* 15 */   'Movimentos sociais são necessários pois são formados de pessoas conscientes dos problemas da sociedade e lutam por causas justas.Movimentos sociais:movimentos em prol de alguma cousa social, como moradia, terra, igualdade de classes, de sexo, etc.ESQ1',
    /* 16 */   'Movimentos sociais não passam de baderneiros contrários à moral e aos bons costumes da nossa nação, só querem privilégios..DIR3',
    /* 17 */   'A criminalidade é causada por um desvio puramente moral e a melhor forma de consertar isso é aumentando o policiamento contra quem comete crimes e atos ilícitos.DIR1',
    /* 18 */   'A criminalidade é causada pela desigualdade social, portano é necessário somente reeducar os criminoso encarcerados a fim de que aprendam algum ofício para que possam se ingressar à sociedade como mão-de-obra.ESQ1'
    ];