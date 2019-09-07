import React from 'react';
import {View, 
        TouchableHighlight, 
        Image,
        Text,
        StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

import NewTripForm from '../components/NewTripForm';

class NovaViagemMotorista extends React.Component{
  
  render(){
    return (
      <View >
      <NewTripForm driver={'true'} />
      </View>
    )
  }
  
}

NovaViagemMotorista.navigationOptions = {
  title: 'Oferecer carona',
};

export default withNavigation(NovaViagemMotorista);



