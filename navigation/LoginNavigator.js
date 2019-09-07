import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'
import NovaViagemMotorista from '../screens/NovaViagemMotorista'
import NovaViagemPassageiro from '../screens/NovaViagemPassageiro'
import MatchScreen from '../screens/MatchScreen'


const full = Platform.select({
  default: {headerMode: 'screen'},
});

const header = Platform.select({
  default: {},
});

const LoginStack = createSwitchNavigator(
  {
    Login: LoginScreen,
  },
  full
);

LoginStack.path = '';

const HomeStack = createSwitchNavigator(
  {
    Home: HomeScreen,
    NovaViagemMotorista: NovaViagemMotorista,
    NovaViagemPassageiro: NovaViagemPassageiro,
    Match: MatchScreen,
  },
  header
);

HomeStack.path = '';

const navigator = createSwitchNavigator({
  LoginStack,
  HomeStack,
});

navigator.path = '';


export default navigator;
