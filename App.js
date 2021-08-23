import 'react-native-gesture-handler';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Componentes/Layout/Rotas';
import Perfil from './Componentes/Perfil/Perfil';

export default function App() {
  return (
    <NavigationContainer>
    <Rotas/>
    </NavigationContainer>
  );
}