import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';

export default class FacebookLoginBtn extends Component {
  render() {
    return (
      <View>
        <LoginButton
          // publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                console.log("Login was cancelled");
              } else {
                console.log("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
}
