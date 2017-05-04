import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View
} from 'react-native';
import FBSDK, {SendButton, LoginButton} from 'react-native-fbsdk';

class MessengerBtn extends Component {

  constructor(props){
    super(props);
    if(!this.props.activeRPSReducer){
      var shareContent = {
        contentType: 'link',
        contentUrl: 'http://google.com'
      };
    }else{
      var shareContent = {
        contentType: 'link',
        contentUrl: this.props.activeRPSReducer.url
      };
    }
    this.state = {shareContent: shareContent}
  }

  render(){

    return(
      <View style={{marginTop:200}}>
        <SendButton shareContent={this.state.shareContent}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    activeRPSReducer: state.activeRPSReducer
  };
}

export default connect(mapStateToProps)(MessengerBtn);
