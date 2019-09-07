import React from 'react';
import {View, 
        TouchableHighlight, 
        Image,
        Text,
        StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

class NewTripButton extends React.Component{

  
  render(){
    const {navigation, to, title, style} = this.props;
    return (
      <View >
      <TouchableHighlight 
      style={[styles.bigButton, style]}
      navigation={navigation}
      onPress={ () => { navigation.navigate(to)} }>
        <Text style={[styles.overlayText,style]}> {title} </Text>
      </TouchableHighlight>
      
      </View>
    )
  }
}

export default withNavigation(NewTripButton);

const styles = StyleSheet.create({
    buttonImage:{
      backgroundColor: 'blue',
      resizeMode: 'contain',
      flex:1,
    },
    overlayText:{
      fontWeight: 'bold',
      fontSize: 20,
      textTransform:"uppercase",
      textAlign: "center",
      textAlignVertical: "center",
      textShadowColor: "gray",
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5,
    },
    bigButton: {
      height: 80,
      width:256,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:'center',
      textAlign:'center',
      margin:20,
    },
    centerView: {
      justifyContent: 'center',
      alignItems: 'center'
    }
});
