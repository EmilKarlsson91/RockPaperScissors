import React, {Component} from 'react';
import {
  View,
  Text,
  Linking
} from 'react-native';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';

export default class App extends Component{

  // componentDidMount(){
  //   var url = Linking.getInitialURL().then((url) => {
  //     if(url){
  //       alert('My name is URL');
  //     } else {
  //       alert('My name is NOT URL');
  //     }
  //   });
  // }

  render(){
    return(
      <View style={{margin:100, alignItems: 'center'}}>
        <RPSDetails />
        <RPSList />
      </View>
    );
  }

}
