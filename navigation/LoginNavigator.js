import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';


import LoginScreen from '../screens/LoginScreen.js';
import MainTabNavigator from '../navigation/MainTabNavigator.js';


const config = Platform.select({
  default: {headerMode: 'screen'},
});

const LoginStack = createSwitchNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.path = '';

const HomeStack = createSwitchNavigator(
  {
    Home: MainTabNavigator, 
  },
  config
);

const navigator = createSwitchNavigator({
  LoginStack,
  HomeStack,
});

navigator.path = '';


export default navigator;
