import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../PaginaInicial/Home';
import Home_oficial from '../Home_oficial/Home';
import Principal from '../Atividades/Principal';
import Atividades from '../Atividades/Atividades';
import Sobre from '../Sobre/Sobre';
import FormLogin from '../PaginaInicial/FormLogin';
import FormCadastro from '../PaginaInicial/FormCadastro';
import Perfil from '../Perfil/Perfil';
import Temas from '../Atividades/Temas';
import PaginaTema from '../Atividades/PaginaTema';
import TextoTema from '../Atividades/TextoTema';
import Config from '../Config/Config';
import Rank from '../Rank/Rank';
import Quizz from '../Quizz/Quizz'
import TestePolitica from '../TestePolitica/TestePolitica'
import Admin from '../Admin/Admin'
import ExcluiUsuario from '../Admin/ExcluiUsuario';
import ExcluiTema from '../Admin/ExcluiTema';
import ExcluiPergunta from '../Admin/ExcluiPergunta';
import CadastrarTema from '../Admin/FormCadastrarTema';
import CadastrarPergunta from '../Admin/FormCadastrarPergunta';
import Perguntas from '../TestePolitica/Perguntas';
import EditaUser from '../Perfil/EditaUser';
import Resultado from '../TestePolitica/Resultado'

const Routes = createStackNavigator();

function Rotas(props) {
  // initialParams é passado para todos os componentes para que eles recebam a informação se o usuário está logado ou não.
  return (
    <Routes.Navigator
      screenOptions={{
        headerShown: false //não ficar com um nome em cima
      }}>
      <Routes.Screen name="Home_oficial" component={Home_oficial} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Atividades/Principal" component={Principal} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Atividades" component={Atividades} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Sobre" component={Sobre} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Cadastro" component={FormCadastro} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Login" component={FormLogin} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Perfil" component={Perfil} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Config" component={Config} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Temas" component={Temas} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="PaginaTema" component={PaginaTema} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="TextoTema" component={TextoTema} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Rank" component={Rank} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Quizz" component={Quizz} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="TestePolitica" component={TestePolitica} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Admin" component={Admin} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="CadastrarPergunta" component={CadastrarPergunta} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="CadastrarTema" component={CadastrarTema} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="ExcluiPergunta" component={ExcluiPergunta} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="ExcluiTema" component={ExcluiTema} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="ExcluiUsuario" component={ExcluiUsuario} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Perguntas" component={Perguntas} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="EditaUser" component={EditaUser} initialParams={{ idUsuario: props.usuario }} />
      <Routes.Screen name="Resultado" component={Resultado} initialParams={{ idUsuario: props.usuario }} />
    </Routes.Navigator>
  );
}

export default Rotas;