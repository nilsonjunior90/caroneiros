import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';


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
