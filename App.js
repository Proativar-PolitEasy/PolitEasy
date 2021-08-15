import 'react-native-gesture-handler';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Componentes/Layout/Rotas';
import Pergunta from './lib/Pergunta';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}