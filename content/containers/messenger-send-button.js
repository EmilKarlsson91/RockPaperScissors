import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View
} from 'react-native';
import FBSDK, {SendButton, LoginButton} from 'react-native-fbsdk';
import branch from 'react-native-branch';

async function branchStuff(){

  let branchUniversalObject = branch.createBranchUniversalObject(
    'content/1234',
    {
      contentTitel: 'CustomContentTitle',
      metadata:{
        user_id: '12345'
      }
    }
  );

  let linkProperties = {
    feature: 'sample-feature',
    channel: 'sample-channel'
  }

  let controlParams = {
    '$desktop_url': 'http://desktop-url.com'
  }
  try{
  let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams);
  alert(url);
}catch(eroor){
  alert(eroor);
}

}

class MessengerBtn extends Component {

  constructor(props){
    super(props);
    branchStuff();
      var shareContent = {
        contentType: 'link',
        contentUrl: 'www.google.com'
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
