import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import FBSDK, { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';
import branch from 'react-native-branch';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';
import FacebookLoginBtn from '../containers/facebook-login-button';

const infoRequest = new GraphRequest(
  '/me',
  null,
  this._responseInfoCallback,
);

export default class App extends Component{

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {

      // this._responseInfoCallback();
      // new GraphRequestManager().addRequest(infoRequest).start();
      console.log('Error fetching data: ' + error.toString());
      console.log(JSON.stringify(error));
    } else {
      console.log('Success fetching data: ' + result.toString());
      console.log(JSON.stringify(result));
    }
  }

  // facebookLogin(){
  //   // Attempt a login using the Facebook login dialog,
  //   // asking for default permissions.
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     function(result) {
  //       if (result.isCancelled) {
  //         console.log('Login was cancelled');
  //       } else {
  //         console.log('Login was successful with permissions: '
  //           + result.grantedPermissions.toString());
  //       }
  //     },
  //     function(error) {
  //       console.log('Login failed with error: ' + error);
  //     }
  //   );
  // }

  // testMethod(){
  //   AccessToken.getCurrentAccessToken().then((data) => {
  //     throw data;
  //   });
  // }
  state = {
    data: null
  }
  componentDidMount(){

    // try{
    //   this.testMethod();
    // }catch(error){
    //   console.log(error);
    //   console.log('Inside Error/app')
    // }

    AccessToken.getCurrentAccessToken().then((result) => {
      this.setState({
        data: result
      })
    })

    // AccessToken.getCurrentAccessToken().then((data) => {
    //   if(!data){
    //     console.log('Not logged in, trying to connect');
    //     this.facebookLogin();
    //   }else{
    //     console.log('Already logged in');
    //   }
    // })

    // console.log(JSON.stringify(AccessToken.getCurrentAccessToken()));
    // AccessToken.getCurrentAccessToken().then(
    //             (data) => {console.log('AccessToken: '), console.log(data);}
    //         )


    // // Attempt a login using the Facebook login dialog,
    // // asking for default permissions.
    // LoginManager.logInWithReadPermissions(['public_profile']).then(
    //   function(result) {
    //     if (result.isCancelled) {
    //       alert('Login was cancelled');
    //     } else {
    //       alert('Login was successful with permissions: '
    //         + result.grantedPermissions.toString());
    //     }
    //   },
    //   function(error) {
    //     alert('Login failed with error: ' + error);
    //   }
    // );

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

  //   var url = Linking.getInitialURL().then((url) => {
  //     if(url){
  //       // alert(url);
  //         var kluns = url.substring(12, 13);
  //
  //       switch(kluns){
  //         case 'r':
  //           alert(url);
  //           break;
  //         case 'p':
  //           alert(url);
  //           break;
  //         case 's':
  //             alert(url);
  //             break;
  //       }
  //     } else {
  //       // alert('My name is NOT URL');
  //     }
  //   });
  // }

  render(){
    if(!this.state.data){
      console.log('No AccessToken');
    }else{
      console.log('AccessToken is in place');
    }
    return(
      //  style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        <GenerateUrl/>
        <RPSDetails />
        <RPSList />
        <View style={{flexDirection: 'row'}}>
          <MessengerBtn />
          <FacebookLoginBtn/>
        </View>

        {/* <BranchMethods/> */}
      </View>
    );
  }

}
