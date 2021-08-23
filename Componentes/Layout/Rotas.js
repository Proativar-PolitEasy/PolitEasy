import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../PaginaInicial/Home';
import Atividades from '../Atividades/Atividades';
import Sobre from '../Sobre/Sobre';
import FormLogin from '../PaginaInicial/FormLogin';
import FormCadastro from '../PaginaInicial/FormCadastro';


const Routes = createStackNavigator();

function Rotas() {
  return (
    <Routes.Navigator
    screenOptions={{
      headerShown: false //não ficar com um nome em cima
    }}>
      <Routes.Screen name ="Home" component={Home}/>
      <Routes.Screen name ="Atividades" component={Atividades}/>
      <Routes.Screen name ="Sobre" component={Sobre}/>
      <Routes.Screen name ="Cadastro" component={FormCadastro}/>
      <Routes.Screen name ="Login" component={FormLogin}/>
    </Routes.Navigator>
  );
}

export default Rotas;