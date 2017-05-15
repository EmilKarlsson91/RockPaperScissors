import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import FBSDK, {SendButton, LoginButton} from 'react-native-fbsdk';
import branch from 'react-native-branch';

class MessengerBtn extends Component {

  state = {
    shareContent: shareContent = {
      contentType: 'link',
      contentUrl: 'www.google.com'
    }
  }

  render(){
    if(this.props.activeRPSReducer){
      this.state.shareContent = {
          contentType: 'link',
          contentUrl: this.props.activeRPSReducer.url
        }
      return(
        <View style={{marginTop:150}}>
          <SendButton shareContent={this.state.shareContent}/>
        </View>
      );
    }
    return(
      <View style={{marginTop:150}}>
        <SendButton shareContent={this.state.shareContent}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    activeRPSReducer: state.activeRPSReducer,
    urlReducers: state.urlReducers,
  };
}

export default connect(mapStateToProps)(MessengerBtn);
