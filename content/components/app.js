import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking,
  TouchableNativeFeedback,
  AppRegistry,
  reactContext
} from 'react-native';
import FBSDK, {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken
} from 'react-native-fbsdk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import branch from 'react-native-branch';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';
import FacebookLoginBtn from '../containers/facebook-login-button';
import RNRestart from 'react-native-restart';
import LinkSubscription from '../logic/link-subscription-logic';
import {opponentsData, startedFromURL, generatedUrls, selectedRPS} from '../actions';

var num = 0;

class App extends Component{

  constructor(props){
    super(props);
  }

  shouldComponentGenerateUrl(){
    console.log('Running shouldComponentGenerateUrl/app')
    if(!this.props.urlReducers && this.props.loggedIn){
      if(this.props.startedFromURL && !this.props.opponentsData){
        return (<Text></Text>);
      }
      // console.olg(this.props.selectedRPS({}))
      console.log('Test1' + this.props.urlReducers);
      console.log('Test2' + this.props.activeRPSReducer);
      console.log('Generating url/app');
      return (<GenerateUrl/>);
    }else{
      return (<Text></Text>);
    }
  }
  shouldComonentSubscribeToLink(){
    console.log('Running LinkSubscription/app');
    console.log(num);
    if(num < 1){
      console.log('Returning LinkSubscription/app');
      return(<LinkSubscription/>);
    }else{
      return(<Text></Text>);
    }
  }

  restart(){
    num++;

    // this.props.generatedUrls(null);
    // this.props.opponentsData(null);
    //GenerateUrl = require('../logic/url-generator');
    RNRestart.Restart();

  }

  render(){
    return(
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        {this.shouldComponentGenerateUrl()}
        {this.shouldComonentSubscribeToLink()}
        {/* <LinkSubscription/> */}
        <RPSDetails />
        <RPSList />
        <View style={{flexDirection: 'row'}}>
          <MessengerBtn />
          <FacebookLoginBtn/>
          <TouchableNativeFeedback onPress={() => {this.restart()}}>
            <Text style={{marginTop: 150, backgroundColor: 'blue', borderWidth: 1, borderRadius: 2, borderColor: 'transparent', color: 'white'}}>
              Restart
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    rpsReducers: state.rpsReducers,
    activeRPSReducer: state.activeRPSReducer,
    urlReducers: state.urlReducers,
    loggedIn: state.loggedIn,
    startedFromURL: state.startedFromURL,
    opponentsData: state.opponentsData
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({
    startedFromURL: startedFromURL,
    opponentsData: opponentsData,
    generatedUrls: generatedUrls,
    selectedRPS: selectedRPS
  }, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(App);
