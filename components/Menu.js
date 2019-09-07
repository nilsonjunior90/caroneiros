import React from 'react';
import {View, 
        TouchableHighlight, 
        Dimensions,
        Image,
        Text,
        StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import { StackActions } from "react-navigation";

class Menu extends React.Component{

  render(){
    return (
      <View style={styles.menu}>
      <TouchableHighlight 
      style={styles.button}
      onPress={ () => { this.props.navigation.navigate('Home')} }>
        <Text style={styles.overlayText}> {"HOME"} </Text>
      </TouchableHighlight>
      <TouchableHighlight 
      style={styles.button}
      onPress={ () => { 
        this.context.token = ""
        this.props.navigation.navigate('Login')} 
          }>
        <Text style={styles.overlayText}> {"Sair"} </Text>
      </TouchableHighlight>
      
      </View>
    )
  }
}

export default withNavigation(Menu);

const styles = StyleSheet.create({
    menu:{
       flexDirection: "row",
       borderWidth:1,
       position:'absolute',
       bottom:0,
       alignSelf:"center",
       alignContent: "space-between",
       justifyContent: "space-evenly",
       width: Dimensions.get('window').width,
      },
    overlayText:{
      fontWeight: 'bold',
      fontSize: 12,
      textTransform:"uppercase",
      textAlign: "center",
      textAlignVertical: "center",
      textShadowColor: "gray",
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5,
    },
    button: {
      height: 64,
      width:64,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:'center',
      textAlign:'center',
      margin:8,
    },
    centerView: {
      justifyContent: 'center',
      alignItems: 'center'
    }
});
