import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking
} from 'react-native';
import FBSDK, { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import branch from 'react-native-branch';
import RPSDetails from '../containers/rps-details';
import RPSList from '../containers/rps-list';
import GenerateUrl from '../logic/url-generator';
import MessengerBtn from '../containers/messenger-send-button';
import FacebookLoginBtn from '../containers/facebook-login-button';






export default class App extends Component{




constructor(props){
  super(props);
  const infoRequest = new GraphRequest(
    '/me',
    null,
    this._responseInfoCallback,
  );
  new GraphRequestManager().addRequest(infoRequest).start();
}
  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
      console.log(JSON.stringify(error));
    } else {
      console.log('Success fetching data: ' + result.toString());
      console.log(JSON.stringify(result));
    }
  }


  componentDidMount(){
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
    return(
      //  style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}
      <View style={{padding:100, alignItems: 'center', backgroundColor: 'transparent'}}>
        <GenerateUrl/>
        <FacebookLoginBtn/>
        <RPSDetails />
        <RPSList />
        <MessengerBtn />
        {/* <BranchMethods/> */}
      </View>
    );
  }

}
