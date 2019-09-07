import React from 'react';
import {View, 
        TouchableHighlight, 
        Image,
        Text,
        StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

import NewTripForm from '../components/NewTripForm';

class NovaViagemPassageiro extends React.Component{
  
  render(){
    //const {navigation, imageName, to, title} = this.props;
    return (
      <View >
      <NewTripForm driver={'false'}/>
      </View>
    )
  }
  
}

NovaViagemPassageiro.navigationOptions = {
  title: 'Procurar Carona',
};

export default withNavigation(NovaViagemPassageiro);



