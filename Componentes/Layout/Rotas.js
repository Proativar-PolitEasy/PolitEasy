import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../PaginaInicial/Home';
import Home_oficial from '../Home_oficial/Home';
import Atividades from '../Atividades/Atividades';
import Sobre from '../Sobre/Sobre';
import FormLogin from '../PaginaInicial/FormLogin';
import FormCadastro from '../PaginaInicial/FormCadastro';
import Perfil from '../Perfil/Perfil';
import Temas from '../Atividades/Temas';
import Config from '../Config/Config';
import Rank from '../Rank/Rank';
import Quizz from '../Quizz/Quizz'
import TestePolitica from '../TestePolitica/TestePolitica'

const Routes = createStackNavigator();

function Rotas(props) {
  // initialParams é passado para todos os componentes para que eles recebam a informação se o usuário está logado ou não.
  return (
    <Routes.Navigator
    screenOptions={{
      headerShown: false //não ficar com um nome em cima
    }}>
      <Routes.Screen name ="Home_oficial" component={Home_oficial} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Atividades" component={Atividades} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Sobre" component={Sobre} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Cadastro" component={FormCadastro} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Login" component={FormLogin} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Perfil" component={Perfil} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Config" component={Config} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Temas" component={Temas} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Rank" component={Rank} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="Quizz" component={Quizz} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name ="TestePolitica" component={TestePolitica} initialParams={{ idUsuario: props.usuario }} />
    </Routes.Navigator>
  );
}

export default Rotas;