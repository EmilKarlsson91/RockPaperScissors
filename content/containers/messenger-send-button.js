import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View
} from 'react-native';
import FBSDK, {SendButton, LoginButton} from 'react-native-fbsdk';

class MessengerBtn extends Component {

  constructor(props){
    super(props);
      var shareContent = {
        contentType: 'link',
        contentUrl: 'http://google.com'
      };
    this.state = {shareContent: shareContent}
  }
  componentDidUpdate(){
    shareContent = {
      contentType: 'link',

      contentUrl: this.props.activeRPSReducer.url
    };
    this.state = {shareContent: shareContent}
  }



  render(){

    return(
      <View style={{marginTop:150}}>
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
