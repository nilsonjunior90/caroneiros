import React from 'react';
import {
  View,
  Text,
  TimePickerAndroid,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';

class TimePiker extends React.Component {
  state = {
    hour: "00",
    minute: "00",
  }

  render() {
    const { navigation, to, hour, minute } = this.props;
        console.log("TimePiker");
        console.log(hour+":"+minute);

    return  (
      <View >
      <TouchableWithoutFeedback
      onPress={ () => {this.showTimePiker()} }>
          <Text style={styles.text}> {this.state.hour}:{this.state.minute} </Text>
      </TouchableWithoutFeedback>
      </View>
    )

  }

  async showTimePiker(){
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        //formatação da hora...
        let hourFormat = hour
        if (hour < 10){
          hourFormat = "0"+hour
        }
       
        let minuteFormat = minute
        if(minute <10){
          minuteFormat = "0"+minute
        }



        this.setState({
          hour: hourFormat,
          minute: minuteFormat,
      });
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  //inicializar
  componentDidMount(){
    //inicializar com hora do sistema
    this.setState({
      hour: "00",
      minute: "00",
  });
  }

}


export default withNavigation(TimePiker);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,    
  },
  });

