import LoginNavigator from './LoginNavigator';
import 
{
  createAppContainer,
  createSwitchNavigator } 
  from "react-navigation";


export default createAppContainer(
  createSwitchNavigator({
    Auth: LoginNavigator,
    },
    {
      initialRouteName: 'Auth',
    }
    )
);
