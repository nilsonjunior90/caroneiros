import React from 'react';
import {
  View,
  Text,
  Picker,
  ActivityIndicator,
} from 'react-native';

const env = require('../assets/files/environment.json');

import {getOptions} from '../API/api'


class CarPiker extends React.Component { 
  state = {
    value: "kombi",
    isLoading: true,
    carList: [{"id":"1","name":"Carregando..."}],
  }
  
  if (isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  render() {
    const { navigation, imageName, to, title, driver } = this.props;
    console.log(driver);

    if (this.props.driver == 'true') {
      return (
        <Picker
          selectedValue={this.state.value}
          onValueChange={(itemValue, itemIndex) => this.setState({value: itemValue})}>
          {this.state.carList.map((item, key) => (
            <Picker.Item label={item.name} value={item.name} key={key} />)
          )}
        </Picker>
      )
    } else {
      return (
        <Text> ***Sem Veiculo*** </Text>
      )
    }
  }


  componentDidMount() {
     return fetch(`${env.STATIC}/${env.CAR_LIST}`)
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          carList: responseJson,
        }, function () {
          // In this block you can do something with new state.
          console.log(responseJson);
        });
      })
      .catch((error) => {
        console.error(error);
      }); 
  }


}


export default CarPiker;

