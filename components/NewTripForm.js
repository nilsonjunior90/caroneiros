import React from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Text,
  Picker,
  Dimensions,
  StyleSheet,

} from 'react-native';

import { postTrip, getIdByEmail } from '../API/api';
import AppContext from '../context/AppContext';

import { withNavigation } from 'react-navigation';


import CarPiker from '../components/CarPiker';
import TimePicker from '../components/TimePiker';


class NewTripForm extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      minHours: 0,
      minMinutes: 0,
      maxHours: 0,
      maxMinutes: 0,
      saida: "-10.9251602,-37.1034327",
      endereco: "",
      sentido: "PARA_CASA",
      car: "",
      id: "7",
    };
    
    
  }




  render() {
    const { minHours, minMinutes, maxHours, maxMinutes } = this.state;
    console.log(this.props.driver);


    return (
      <View style={styles.container}>
        {/*<RoutePiker />*/}
        {/* Endereços */}
        <View style={{ flex: 2 }}>
          {/*<TextInput
            style={styles.input}
            placeholder="UFS"
            placeholderTextColor='#999'
            onChangeText={(saida) => this.setState({ saida })}
            value={this.state.saida}
          />*/}
          <TextInput
            style={styles.input}
            placeholder="Endereço Completo"
            placeholderTextColor='#999'
            onChangeText={(endereco) => this.setState({ endereco })}
            value={this.state.endereco}
          />
          <Picker
          selectedValue={this.state.sentido}
          onValueChange={(itemValue, itemIndex)=> this.setState({sentido: itemValue})}>
            <Picker.Item label={"UFS > Endereço"} value={"PARA_CASA"} key={0} />
            <Picker.Item label={"Endereço > UFS"} value={"PARA_UFS"} key={1} />
        </Picker>
        </View>
        {/* Horario */}
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center" }}>
            Horário de saída:
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {/* de */}
            <View style={{ flexDirection: "column" }}>
              <Text>de:</Text>
              <TimePicker
                hour={minHours}
                //initial Hourse value
                minute={minMinutes}
                //initial Minutes value
                onChange={(hours, minutes) =>
                  this.setState({ minHours: hours, minMinutes: minutes })}
              />
            </View>
            {/* as */}
            <View style={{ flexDirection: "column" }}>
              <Text>as:</Text>
              <TimePicker
                hour={maxHours}
                //initial Hourse value
                minute={maxMinutes}
                //initial Minutes value
                onChange={(hours, minutes) =>
                  this.setState({ maxHours: hours, maxMinutes: minutes })
                }
              />
            </View>
          </View>
        </View>

        {/* Veiculo */}
        <View style={{ flex: 3 }}>
          <CarPiker driver={[this.props.driver]}
            onChangeText={(car) => this.setState({ car })} />


          <TouchableOpacity style={styles.registerButton} onPress={() => {this.handleSubmit(this.state)}}>
            <Text style={styles.registerButtonText}> Registrar </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  handleSubmit(trip) {
    let tripId = postTrip(this.context.token,trip)
    .then(this.props.navigation.navigate('Match',{tripId}))
    //this.props.navigation.navigate('Match',{tripId});
  }

  componentDidMount(){
    ///{{API}}/usuarios?email=passageiro1@ufs.br
    let userId=''
    userId = getIdByEmail(this.context.email,this.context.token)
    .then(this.setState({id: 7}))
    console.log(`User Id: ${userId}`)
    console.log(`User Id: ${this.state.id}`)
  }
}


export default withNavigation(NewTripForm);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    //paddingBottom: (64 + 8),
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  button: {
    margin: 15,
    padding: 15,
    height: 32,
    width: 32,
  },

  registerButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});

