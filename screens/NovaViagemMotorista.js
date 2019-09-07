import React from 'react';
import {View, 
        TouchableHighlight, 
        Image,
        Text,
        StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

import NewTripForm from '../components/NewTripForm';
import Menu from '../components/Menu'

class NovaViagemMotorista extends React.Component{
  
  render(){
    return (
      <View style={{paddingTop:20}}>
      <NewTripForm driver={'true'} />
      <Menu/>
      </View>
    )
  }
  
}

NovaViagemMotorista.navigationOptions = {
  title: 'Oferecer carona',
};

export default withNavigation(NovaViagemMotorista);



