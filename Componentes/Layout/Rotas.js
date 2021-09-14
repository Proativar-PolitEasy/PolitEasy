import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../PaginaInicial/Home';
import Home_oficial from '../Home_oficial/Home';
import Atividades from '../Atividades/Atividades';
import Sobre from '../Sobre/Sobre';
import FormLogin from '../PaginaInicial/FormLogin';
import FormCadastro from '../PaginaInicial/FormCadastro';
import Perfil from '../Perfil/Perfil'
import Temas from '../Atividades/Temas';

const Routes = createStackNavigator();

function Rotas() {
  return (
    <Routes.Navigator
    screenOptions={{
      headerShown: false //não ficar com um nome em cima
    }}>
      <Routes.Screen name ="Home" component={Home}/>
      <Routes.Screen name ="Home_oficial" component={Home_oficial}/>
      <Routes.Screen name ="Atividades" component={Atividades}/>
      <Routes.Screen name ="Sobre" component={Sobre}/>
      <Routes.Screen name ="Cadastro" component={FormCadastro}/>
      <Routes.Screen name ="Login" component={FormLogin}/>
      <Routes.Screen name ="Perfil" component={Perfil}/>
      <Routes.Screen name ="Temas" component={Temas}/>
    </Routes.Navigator>
  );
}

export default Rotas;