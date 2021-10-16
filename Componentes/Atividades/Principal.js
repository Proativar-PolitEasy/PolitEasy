import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, ImageBackground, BackHandler } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import Atividades from './Atividades';
import Temas from './Temas';
import Tema from '../../lib/database/Tema';

function Principal ({route, navigation}) {
    const [materia, setMateria] = useState("");
    const [pesquisa, setPesquisa] = useState("");
    const [temas, setTemas] = useState([]);
    const [temasVisiveis, setTemasVisiveis] = useState([]);
    const [carregado, setCarregado] = useState(true);

    const backHandler = () => {
        // Pra quando ter entrado em uma matéria, sair apenas dos temas, não da tela de atividades.
        setMateria("");
        setPesquisa("");
        return true;
    }

    const backHandlerCorrect = () => {
        // Pra quando não ter entrado em uma matéria, sair da tela ao apertar em "voltar".
        navigation.goBack(null);
        return true;
    }

    useEffect(() => {
        // Se a variável matéria estiver preenchida, procurar temas.
        setCarregado(false);

        // Carregamento inicial de temas
        Tema.RetornarTemas()
        .then((result) => {
            setTemas(result);
            setCarregado(true);
        })
        .catch((err) => {
            console.log(err);
        })

        return () => {
            if (backHandler) {
                BackHandler.removeEventListener(backHandler);
            }

            if (backHandlerCorrect) {
                BackHandler.removeEventListener(backHandlerCorrect);
            }
        }
    }, []);

    useEffect(() => {
        let temasAux = temas;

        if (materia) {
            temasAux = temasAux.filter(tema => tema["materia"] === materia);
            
            // Com matérias, se apertar pra voltar tira as matérias da tela
            BackHandler.addEventListener("hardwareBackPress", backHandler);
        } else {
            // Sem matérias, se apertar pra voltar sai da tela de atividades
            BackHandler.removeEventListener("hardwareBackPress", backHandler);
            BackHandler.addEventListener("hardwareBackPress", backHandlerCorrect);
        }

        if (pesquisa) {
            temasAux = temasAux.filter(tema => tema["descricao"].toLowerCase().includes(pesquisa.toLowerCase()));
        }

        setTemasVisiveis(temasAux);
    }, [ materia, pesquisa ]);

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={{flex:1, resizeMode:'cover'}}>
        <View style={{ flex: 1 }}>
            <View style={{width:'100%',height:'91%',}}>
                <View style={{width:'100%', height:'19%', justifyContent:'flex-end', alignItems:'center'}}>
                <View style={{width:'70%', height:'41%', backgroundColor:'white', borderRadius: 100, flexDirection: "row", display: "flex" }}>
                    <EvilIcons name='search' size={50}/>
                    <TextInput 
                        style={{ width: "70%" }} 
                        value={pesquisa}
                        onChangeText={(digitado) => setPesquisa(digitado)}
                    />
                </View>
                </View>
                {
                    (materia || pesquisa) 
                    ? ( carregado 
                        ? <Temas temas={temasVisiveis} navigation={navigation} /> 
                        : <View style={{ justifyContent: "center", alignItems: "center", marginTop: "50%" }}>
                            <Text>Carregando...</Text>
                          </View>)
                    : <Atividades setMateria={(mat) => {setTemasVisiveis([]); setMateria(mat)}} />
                }
            </View>
            <View>
              <Base navigation={navigation} />
            </View>
        </View>
        </ImageBackground>
    );
}

export default Principal;