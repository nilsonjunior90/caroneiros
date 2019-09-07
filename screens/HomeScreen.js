import React, { Component } from 'react';
import { 
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions 
} from 'react-native';

import { withNavigation } from 'react-navigation';

import NewTripButton from '../components/NewTripButton';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        };
    }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={{width: '75%', height: '75%', resizeMode: 'contain'}}
        />
        {/* <AppLogo /> */}
      </View>
      <View style={styles.homeBotoes}>
        {/* Menu Principal */}
        <View style={styles.containerHomeBotoes}>
          <Text style={{padding:20, fontWeight: 'bold', fontSize: 20,}}>
            O que você deseja?
        </Text>
       <NewTripButton 
          title="Pedir Carona" 
          to='NovaViagemPassageiro'
          style={{
            backgroundColor: 'white',
            color:'black',
         }}/>
        <NewTripButton
            title="Oferecer Carona"
            to='NovaViagemMotorista'
            style={{
              backgroundColor: 'black',
              color:'white',
          }} />
      </View>
      </View>
    </View>
    );
  }

  componentDidMount(){
      console.log("HomeScreen")
  }
}

export default withNavigation(HomeScreen)



const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: Dimensions.get('window').width,
  },
  containerLogo: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
  },
  homeBotoes: {
    justifyContent: 'center',
    width: '100%',
    height: '60%',
    backgroundColor: '#DDD',
  },
  containerHomeBotoes:{
    justifyContent: 'center',
    alignItems: 'center',

  }
});