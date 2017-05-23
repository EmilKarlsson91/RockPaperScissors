import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import FBSDK, {SendButton, LoginButton, AccessToken} from 'react-native-fbsdk';
import branch from 'react-native-branch';
import SendButtonGray from '../components/send-button-gray';

class MessengerBtn extends Component {
  state = {
    shareContent: shareContent = {
      contentType: 'link',
      contentUrl: 'www.google.com'
    }
  }

  sendButtonActiveate(){
    if(this.props.loggedIn && this.props.activeRPSReducer){
      console.log('Active RPS/MessengerBtn');
      console.log(this.props.startedFromURL);
      console.log(this.props.opponentsChoice)
      this.state.shareContent = {
          contentType: 'link',
          contentUrl: this.props.activeRPSReducer.url
        }
      return(
        <View>
          <SendButton shareContent={this.state.shareContent}/>
        </View>
      );
    }else{
      console.log('SendButton grayed out/MessengerBtn');
      return(
        <View>
          <SendButtonGray/>
        </View>
      );
    }
  }

  render(){
    return(
      <View style={{marginTop:150}}>
        {this.sendButtonActiveate()}
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    activeRPSReducer: state.activeRPSReducer,
    urlReducers: state.urlReducers,
    loggedIn: state.loggedIn,
    opponentsChoice: state.opponentsChoice,
    startedFromURL: state.startedFromURL
  };
}

export default connect(mapStateToProps)(MessengerBtn);
