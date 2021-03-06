import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


import { withNavigation } from 'react-navigation';
import AppContext from '../context/AppContext';


class LoginScreen extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.handleLoginPress = this.handleLoginPress.bind(this);
    this.handleLoginSucess = this.handleLoginSucess.bind(this);
    this.handleAPIHelpPress = this.handleAPIHelpPress.bind(this);
    this.state = {
      result: 'Faça login utilizando email institucinal da UFS.',
      email: 'passageiro1@ufs.br',
      password: '123456'
    };
  }

  render() {


    return (
      <ImageBackground source={require('../assets/images/wallpaper_UFS.png')} style={{width: '100%', height: '100%'}}> 
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              
              <View style={styles.containerLogo}>
                <Image 
                  source={require('../assets/images/logo.png')}
                  style={{width: '75%', height: '75%', resizeMode: 'contain'}}
                />
                {/* <AppLogo /> */}
              </View>
              <View style={styles.containerForm}>

                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail."
                  placeholderTextColor='#555'
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha."
                  placeholderTextColor='#555'
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => this.handleLoginPress()}>
                  <Text style={styles.loginButtonText}> Entrar </Text>
                </TouchableOpacity>
                
                <Text style={{textAlign:'center', padding: 8, fontWeight: 'bold'}}>{this.state.result && JSON.stringify(this.state.result)}</Text>
              </View>
              
            </KeyboardAvoidingView>   
      </ImageBackground>
    )
  }

  async handleLoginPress() {
    const env = require('../assets/files/environment.json');
    let result = await fetch(`${env.API}/session`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password
      }),
    }).then((response) => response.text())
    .then((responseText) => {
      let token = ""
      token = responseText.substr(1).slice(0,-1);
      console.log(`Login Token: ${token}`);
      return token;
    })
    .catch((error) => {
      console.error(error);
    });

    //console.log(result.length)//167

    if (result.length > 150) {
      this.handleLoginSucess(result)
    }
  }

  //"email": "eve.holt@reqres.in",
  //"password": "cityslicka"


  async handleLoginSucess(token) {
    console.log("LoginSucess")
    this.context.token = token
    console.log(this.context.token)
    this.context.email = this.state.email
    this.props.navigation.navigate('Home'); 
    //{this.props.navigation.state.params.token}
  }

  async handleAPIHelpPress(event) {
    WebBrowser.openBrowserAsync(
      'http://sti.ufs.br/conteudo/60672-nti-lanca-apisistemas'
    );
  }

  componentDidMount() {
    console.log("LoginScreen")
    //this.props.navigation.navigate('Home')
  }

}

export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 3,
    width: Dimensions.get('window').width,
  },
  containerLogo: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  containerForm: {
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    marginTop: 15,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
  
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  centerText: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});











