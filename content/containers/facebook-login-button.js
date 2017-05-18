import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loggedIn} from '../actions';

class FacebookLoginBtn extends Component {


  facebookLogin(){
    // Attempt a login using the Facebook login dialog,
    // asking for default permissions.
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          console.log('Login was successful with permissions: '
            + result.grantedPermissions.toString());
            this.props.loggedIn(true);
        }
      },
      (error) => {
        console.log('Login failed with error: ' + error);
      }
    );
  }

  componentDidMount(){
    AccessToken.getCurrentAccessToken().then((data) => {
      if(!data){
        console.log('Not logged in, trying to connect');
        this.props.loggedIn(false);
        // this.facebookLogin();
      }else{
        console.log('Already logged in');
        this.props.loggedIn(true);
      }
    })
  }





  render() {
    return (
      <View style={{marginTop:150}}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                console.log("Login was cancelled");
              } else {
                console.log("Login was successful with permissions: " + result.grantedPermissions)
                this.props.loggedIn(true);
              }
            }
          }
          onLogoutFinished={() => {
            console.log("User logged out");
            this.props.loggedIn(false);
          }}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({loggedIn: loggedIn}, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(FacebookLoginBtn);