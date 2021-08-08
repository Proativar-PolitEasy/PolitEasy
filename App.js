import 'react-native-gesture-handler';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Componentes/Layout/Rotas';
import FormLogin from './Componentes/PaginaInicial/FormLogin';

export default function App() {
  return (
    <NavigationContainer>
      <FormLogin/>
      {/*<Rotas/>*/}
    </NavigationContainer>
  );
}