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
      console.log('Test häär');
      return(
        <View>
          <SendButtonGray/>
        </View>
      );
    }
  }
  //
  // {
  //     console.log('Logged in/MessengerBtn');
  //     else{
  //       console.log('No active RPS/MessengerBtn');
  //       return(
  //         <View>
  //           <SendButton />
  //         </View>
  //       );
  //     }
  //   }

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
  };
}

export default connect(mapStateToProps)(MessengerBtn);
