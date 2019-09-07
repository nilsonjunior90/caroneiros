//import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
// import NovaViagemPassageiro from '../screens/NovaViagemPassageiro';
// import NovaViagemMotorista from '../screens/NovaViagemMotorista';
// import LinksScreen from '../screens/LinksScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import RoutesScreen from '../screens/RoutesScreen';
// import MatchScreen from '../screens/MatchScreen';




const config = Platform.select({
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    // NovaViagemPassageiro: NovaViagemPassageiro,
    // NovaViagemMotorista: NovaViagemMotorista,
    // Match: MatchScreen, 
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

HomeStack.path = '';
/* 
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  };

LinksStack.path = '';


const RoutesStack = createStackNavigator(
  {
    Rotas: RoutesScreen,
  },
  config
);

RoutesStack.navigationOptions = {
  tabBarLabel: 'Rotas',
  };

RoutesStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Perfil: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  };

ProfileStack.path = '';
 */
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  // RoutesStack,
  // ProfileStack,
  // LinksStack,
});

tabNavigator.path = '';


export default tabNavigator;