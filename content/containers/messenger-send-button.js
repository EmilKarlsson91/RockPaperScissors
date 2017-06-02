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
    if(this.props.loggedInReducer && this.props.activeRPSReducer){
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
    loggedInReducer: state.loggedInReducer,
    opponentsDataReducer: state.opponentsDataReducer,
    startedFromURLReducer: state.startedFromURLReducer
  };
}

export default connect(mapStateToProps)(MessengerBtn);
