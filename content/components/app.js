import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import MessengerBtn from '../containers/messengerSendButton'

export default class App extends Component{

  componentDidMount(){
    var url = Linking.getInitialURL().then((url) => {
      if(url){
        // alert(url);
          var kluns = url.substring(12, 13);

        switch(kluns){
          case 'r':
            alert('Rock!');
            break;
          case 'p':
            alert('Paper!');
            break;
          case 's':
              alert('Scissors!');
              break;
        }
      } else {
        alert('My name is NOT URL');
      }
    });
  }

  render(){
    return(
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        <RPSDetails />
        <RPSList />
        <MessengerBtn />
      </View>
    );
  }

}
