import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';
import 
{ createStackNavigator, 
  createDrawerNavigator, 
  createAppContainer,
  createSwitchNavigator } 
  from "react-navigation";


export default createAppContainer(
  createSwitchNavigator({
    Auth: LoginNavigator,
    Main: MainTabNavigator,
    },
    {
      initialRouteName: 'Auth',
    }
    )
);
