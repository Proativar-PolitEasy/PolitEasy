import 'react-native-gesture-handler';
import {DeviceEventEmitter} from "react-native";
import React, { useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Componentes/Layout/Rotas';
import Perfil from './Componentes/Perfil/Perfil';
import Pergunta from './lib/database/Pergunta';

export default function App() {
  const [usuario, setUsuario] = useState("");

  // Se ocorrer a autenticação, atualiza o usuário nessa função.
  // Escolhido pela simplicidade, caso contrário teríamos que usar Redux ou alguma tecnologia que consumisse tempo de desenvolvimento.
  DeviceEventEmitter.addListener("event.LogarUsuario", (idUsuario) => {
    setUsuario(idUsuario);
  })

  // Se ele sair da conta, limpar ID.
  DeviceEventEmitter.addListener("event.DeslogarUsuario", (idUsuario) => {
    setUsuario("");
  })
  
  return (
    <NavigationContainer>
    <Rotas usuario={usuario} />
    </NavigationContainer>
  );
}