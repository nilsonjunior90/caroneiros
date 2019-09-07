import React from 'react';
import {View, 
        TouchableHighlight, 
        Image,
        Text,
        StyleSheet,
        FlatList,
        Linking} from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem, List } from 'react-native-elements';
const env = require('../assets/files/environment.json');
//import console = require('console');


class MatchScreen extends React.Component{
  state = {
    isLoading: true,
    matchList: [{
      "name":"Carregando...",
      "avatar_url":"../assets/images/perfil_foto.png",
      "destination":"***",
      "phone":"+5579999999999",
      "score":"?"
   }]
  }

  componentDidMount() {
    const {tripId} = this.props.navigation.state.params;
    console.log("Match")
    console.log(tripId)
    //pupular o state matchList apartir da url
    return fetch(`${env.STATIC}/${env.MATCH}`)
   .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         matchList: responseJson,
       }, function () {
         // In this block you can do something with new state.
         console.log(responseJson);
       });
     })
     .catch((error) => {
       console.error(error);
     }); 
 }

  chat(id){
    console.log(`Vem de ZAP... ${id}`)
    let msg = encodeURIComponent("Mensagem Teste")

    Linking.openURL(`whatsapp://send?text=${msg}&phone=${id}`)
    .catch((err) => console.error('whatsapp não tratou o DeepLinking corretamente' , err));
  }

  
  keyExtractor = (item, index) => index.toString()
  
  renderItem = ({ item }) => (
    <ListItem
      chevron={true}
      title={item.destination}
      subtitle={`[*${item.score}] ${item.name}`}
      onPress={(id)=>{this.chat(item.phone)}}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
     
    />
  )
  
  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.matchList}
        renderItem={this.renderItem}
      />
    )
  }
  
}

MatchScreen.navigationOptions = {
  title: 'Caronas',
};

export default withNavigation(MatchScreen);





///https://wa.me/whatsappphonenumber/?text=urlencodedtext
//whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+55119*******2 ->


