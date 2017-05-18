import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import FBSDK, { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';
import branch from 'react-native-branch';
import {connect} from 'react-redux';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';
import FacebookLoginBtn from '../containers/facebook-login-button';

class App extends Component{

  componentDidMount(){

    console.info("Subscribing to Branch links")

    branch.subscribe(({ error, params, uri }) => {
      if (error) {
        console.error("Error from Branch: " + error)
        return
      }

      console.info("Received link response from Branch")

      console.log("params: " + JSON.stringify(params))

      console.log("URI: " + uri)
    })
  }

  shouldComponentGenerateUrl(){
    if(!this.props.generatedUrls && this.props.loggedIn){
      return (<GenerateUrl/>);
    }else{
      return (<Text></Text>);
    }
  }

  render(){
    return(
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        {this.shouldComponentGenerateUrl()}
        <RPSDetails />
        <RPSList />
        <View style={{flexDirection: 'row'}}>
          <MessengerBtn />
          <FacebookLoginBtn/>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    urlReducers: state.urlReducers,
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(App);
