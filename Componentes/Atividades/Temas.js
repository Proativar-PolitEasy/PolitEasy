import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, ImageBackground } from 'react-native';
import stylesTemas from '../../Stylesheets/stylesTemas';
import { EvilIcons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import Tema from '../../lib/database/Tema';

function Temas({ navigation, temas }) {  
  /*
  const [carregado, setCarregado] = useState(false);
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    // Variável isMounted é usada só pra calar um alerta do ReactNative
    let isMounted = true;
    let resultadosPesquisa = [];

    // Retornar temas assincronamente
    if (materiaEscolhida) {
      Tema.RetornarTemasPorMateria(materiaEscolhida)
        .then((listaTemas) => {
          if (isMounted) {
            if (listaTemas) {
              if (pesquisa) {
                // Se foi realizada uma pesquisa
                resultadosPesquisa = listaTemas.filter(tema => tema["descricao"].includes(pesquisa));
                setTemas(resultadosPesquisa);
              }
              else {
                setTemas(listaTemas);
              }
            }

            setCarregado(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    return () => { isMounted = false };
  }, []);*/

  return (
    <View style={stylesTemas.temaListContainer}>
      {
        temas.map(tema =>
          <View style={stylesTemas.temaListItem} key={tema.id}>
            <TouchableOpacity onPress={() => navigation.navigate("PaginaTema", { temaEscolhido: tema })}>
              <View>
                <Text>{tema["descricao"]}</Text>
              </View>
            </TouchableOpacity>
          </View>)
      }
    </View>
  );
}

export default Temas;