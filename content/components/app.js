import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import FBSDK, {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken
} from 'react-native-fbsdk';
import {bindActionCreators} from 'redux';
import branch from 'react-native-branch';
import {connect} from 'react-redux';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';
import FacebookLoginBtn from '../containers/facebook-login-button';
import {opponentsChoice, startedFromURL} from '../actions';


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

          //Function for checking if app was started by URL or not.
          var url = Linking.getInitialURL().then((url) => {
            if(url){
              this.props.startedFromURL(true);
              console.log('The oponent choice: ' + JSON.stringify(params.first_player_rps_type));
              switch(params.first_player_rps_type){
                case 'rock':
                  this.props.opponentsChoice('rock');
                  break;
                case 'paper':
                  this.props.opponentsChoice('paper');
                  break;
                case 'scissors':
                  this.props.opponentsChoice('scissors');
                  break;
              }

            }else{
              this.props.opponentsChoice (null);
              this.props.startedFromURL(false);
              console.log('It\'s a brand new session');
            }
          });
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
    startedFromURL: state.startedFromURL,
    opponentsChoice: state.opponentsChoice
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({
    startedFromURL: startedFromURL,
    opponentsChoice: opponentsChoice
  },dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(App);
