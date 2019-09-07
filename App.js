import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>?????</Text>
        <AppNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;