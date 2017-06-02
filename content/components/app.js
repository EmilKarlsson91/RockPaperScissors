import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking,
  TouchableNativeFeedback,
  AppRegistry,
  reactContext,
  AppState
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
import {opponentsData, setStartedFromURL, generatedUrls, selectedRPS} from '../actions';
import WelcomeText from '../containers/welcome-text';

var num = 0;
var num2 = 0;

class App extends Component{

  state = {
      appState: AppState.currentState,
      shouldComponentRestart: false,
    }

   componentDidMount() {
     AppState.addEventListener('change', this._handleAppStateChange);
  }

   componentWillUnmount() {
     AppState.removeEventListener('change', this._handleAppStateChange);
  }

  shouldComponentGenerateUrl(){
    console.log('Started from url value/app');
    console.log(this.props.startedFromURLReducer);
    if(AppState.currentState === 'active'){
      console.log('Running shouldComponentGenerateUrl/app')
      if(num2 < 1 && this.props.loggedInReducer){
        num2++;
        if(this.props.startedFromURLReducer === null && !this.props.opponentsDataReducer){
          return (<Text></Text>);
        }else{
          console.log('Generating url/app');
          console.log('Number two/app' + num2);
          return (<GenerateUrl/>);
        }
      }else{
        return (<Text></Text>);
      }
    }
  }
  shouldComonentSubscribeToLink(){
    console.log(AppState.currentState);
    console.log('Running LinkSubscription/app');
    console.log(num);
    if(num < 1){
      console.log('Returning LinkSubscription/app');
      num++;
      return(<LinkSubscription/>);
    }else{
      return(<Text></Text>);
    }
  }

    _handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background') {
        console.log('App has come to the background');
        this.setState({appState: nextAppState});
        this.setState({shouldComponentRestart: true});
      }else if(nextAppState === 'active'){
        console.log('App is active');
        this.setState({appState: nextAppState, haveRestarted: false});
        if(this.state.shouldComponentRestart){
          this.setState({shouldComponentRestart: false});
          this.restart();
        }
      }
    }

    resetStates = async () => {
      this.props.generatedUrls(null);
      this.props.opponentsData(null);
    }
    restartCall(){
      RNRestart.Restart()
    }

    restart = async () => {
        num2 = 0;
        await this.resetStates().then(() => this.restartCall());
        console.log('Restart successfull');
    }

  render(){
    return(
      <View style={{padding:15, alignItems: 'center', backgroundColor: 'transparent'}}>
        {this.shouldComponentGenerateUrl()}
        {this.shouldComonentSubscribeToLink()}
        {/* <LinkSubscription/> */}
        <WelcomeText />
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
    rpsReducers: state.rpsReducers,
    activeRPSReducer: state.activeRPSReducer,
    urlReducers: state.urlReducers,
    loggedInReducer: state.loggedInReducer,
    startedFromURLReducer: state.startedFromURLReducer,
    opponentsDataReducer: state.opponentsDataReducer
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({
    setStartedFromURL: setStartedFromURL,
    opponentsData: opponentsData,
    generatedUrls: generatedUrls,
    selectedRPS: selectedRPS
  }, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(App);
