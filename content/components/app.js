import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';

export default class App extends Component{

  componentDidMount(){
    var url = Linking.getInitialURL().then((url) => {
      if(url){
        // alert(url);
          var kluns = url.substring(12, 13);

        switch(kluns){
          case 'r':
            alert(url);
            break;
          case 'p':
            alert(url);
            break;
          case 's':
              alert(url);
              break;
        }
      } else {
        // alert('My name is NOT URL');
      }
    });
  }

  render(){
    return(
      //  style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        <GenerateUrl/>
        <RPSDetails />
        <RPSList />
        <MessengerBtn />
        {/* <BranchMethods/> */}
      </View>
    );
  }

}
