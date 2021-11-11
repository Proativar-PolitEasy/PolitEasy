let direita=0;
let esquerda=0;

switch (pergunta){
    case 0: {/* DIR1 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn5}></TouchableOpacity>
        break;
    case 1:  {/* ESQ1 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>
        break;
    case 2: {/* DIR2 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 3: {/* ESQ1 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 4: {/* DIR3 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>setDireita(direita+=4)} style={estilos.btn5}></TouchableOpacity>

        break;
    case 5: {/* ESQ3 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=4)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 6: {/* ESQ2 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 7: {/* DIR2 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 8: {/* NEUTRO */}
        <TouchableOpacity onPress={()=>} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 9: {/* NEUTRO */}
        <TouchableOpacity onPress={()=>} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 10: {/* DIR2 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 11: {/* DIR2 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 12: {/* ESQ2 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 13: {/* NEUTRO */}
        <TouchableOpacity onPress={()=>} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=2 && setEsquerda(esquerda-=2))}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita-=3) && setEsquerda(esquerda-=3)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 14: {/* ESQ1 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 15: {/* DIR3 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=3)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>setDireita(direita+=4)} style={estilos.btn5}></TouchableOpacity>

        break;
    case 16: {/* DIR1 */}
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn5}></TouchableOpacity>

        break;
    case 17: {/* ESQ1 */}
        <TouchableOpacity onPress={()=>{setDireita(direita+=2)}} style={estilos.btn1}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDireita(direita+=1)}} style={estilos.btn2}></TouchableOpacity>
        <TouchableOpacity onPress={()=>} style={estilos.btn3}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerada+=1)}} style={estilos.btn4}></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setEsquerda(esquerda+=2)}} style={estilos.btn5}></TouchableOpacity>

        break;
}
