import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import stylesTemas from '../../Stylesheets/stylesTemas';
import { EvilIcons } from '@expo/vector-icons';
import Base from '../Barra_nav/Barra';
import Tema from '../../lib/database/Tema';

function Temas({ route, navigation }) {
  const { materiaEscolhida } = route.params;
  const [carregado, setCarregado] = useState(false);
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    // Variável isMounted é usada só pra calar um alerta do ReactNative
    let isMounted = true;

    // Retornar temas assincronamente
    Tema.RetornarTemasPorMateria(materiaEscolhida)
      .then((listaTemas) => {
        if (isMounted) {
          if (listaTemas) {
            setTemas(listaTemas);
            setCarregado(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })

    return () => { isMounted = false };
  }, []);

  return (
    <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: '91%', }}>
          <View style={{ width: '100%', height: '19%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ width: '70%', height: '41%', backgroundColor: 'white', borderRadius: 100 }}>
              <EvilIcons name='search' size={50} />
            </View>
          </View>
          <View style={stylesTemas.temaListContainer}>
            {
              carregado
              ? temas.map(tema =>
                <View style={stylesTemas.temaListItem} key={tema.id}>
                  <TouchableOpacity onPress={() => navigation.navigate("PaginaTema", { temaEscolhido: tema })}>
                    <View>
                      <Text>{tema["descricao"]}</Text>
                    </View>
                  </TouchableOpacity>
                </View>)
              : <View>
                <Text>Carregando...</Text>
              </View>
            }
          </View>
        </View>
        <View>
          <Base navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Temas;