import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';


class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  this.state = {
    value: "Usuario",
    isLoading: true,
    dataSource: [{ "id": "1", "nome": "Carregando..." }],
    usuario: {
      "id": 1,
      "nome": "...",
      "sexo": "...",
      "siglaDepartamento": "...",
      "curso": "...",
      "dataNascimeto": 0,
      "createdAt": 0,
      "updatedAt": 0
    },
  }
  console.log(global.login)
  }

  render() {
    //const {navigation, imageName, to, title} = this.props;
    return (
     <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        {/* Logo do perfil */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/perfil_foto.png') }
            style={styles.profileImage}
          />
          <View style={styles.profile}>
            <Text style={styles.profileName}>{this.state.usuario.nome}</Text>
            <Text style={styles.profileCurso}> {this.state.usuario.curso}</Text>
            <Text style={styles.profileCurso}> {this.state.usuario.siglaDepartamento}</Text>
            <Text style={styles.profileDescription}>Uma breve descrição da pessoa</Text>
          </View>
        </View>
        <View style={{flex:2}}>
          <Text> Detalhes </Text>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {this.handleLogout()}}>
          <Text style={styles.logoutButtonText}> Sair </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
        

    )
  }

  handleLogout(){
    global.login = false;
    this.setState({
        value: "Usuario",
        isLoading: true,
        dataSource: [{ "id": "1", "nome": "Carregando..." }],
        usuario: {
          "id": 1,
          "nome": "...",
          "sexo": "...",
          "siglaDepartamento": "...",
          "curso": "...",
          "dataNascimeto": 0,
          "createdAt": 0,
          "updatedAt": 0
        },
      });
      //
    this.props.navigation.navigate('Login')
    }




  componentDidMount() {
    const env = require('../assets/files/environment.json');
    return fetch(`${env.API}/usuarios/${env.ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          usuario: responseJson.usuario,
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

ProfileScreen.navigationOptions = {
  title: 'Perfil',
};

export default withNavigation(ProfileScreen);


const styles = StyleSheet.create({
  container: {
    padding: 8,
    //paddingBottom: (64 + 8),
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  profileContainer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  profile:{
    flex: 1,
    width: "70%",
    height: 100,
    alignItems: 'center',
  },
  profileImage: {
    width: "30%",
    height: 100,
    resizeMode: 'contain',
  },
  profileName:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});




