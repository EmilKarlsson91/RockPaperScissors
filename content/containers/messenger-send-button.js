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
      contentUrl: 'https://rockpaperscissor.app.link/nayj0sdcSC'
    };
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
