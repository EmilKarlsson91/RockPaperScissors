import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View
} from 'react-native';
import FBSDK, {SendButton, LoginButton} from 'react-native-fbsdk';
import branch from 'react-native-branch';
import BranchMethods from '../../test-branch';



// let branchUniversalObject = branch.createBranchUniversalObject(
//   'content/12345', // canonical identifier
//   {
//     title: 'My Content Title',
//     contentImageUrl: 'https://example.com/mycontent-12345.png',
//     contentDescription: 'My Content Description',
//     metadata: {
//       product_picture: '12345',
//       user_id: '6789'
//     }
//   }
// )
//
// let linkProperties = {
//   feature: 'sample-feature',
//   channel: 'sample-channel'
// }
//
// let controlParams = {
//   '$desktop_url': 'http://desktop-url.com'
// }
//
// async function branchStuff(){
//   try{
//     console.log(await branchUniversalObject);
//   let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams);
//     // console.log(url);
//   }catch(error){
//     console.log(error);
//   }
// }
// const defaultBUO = {
//   title: 'wallo'
// }
//
//
// createBranchUniversalObject = async () => {
//   try {
//     let result = await branch.createBranchUniversalObject('abc', defaultBUO)
//     if (this.buo) this.buo.release()
//     this.buo = result
//     console.log('createBranchUniversalObject', result)
//     this.addResult('success', 'createBranchUniversalObject', result)
//   } catch (err) {
//     console.log('createBranchUniversalObject err', err.toString())
//     this.addResult('error', 'createBranchUniversalObject', err.toString())
//   }
// }
//
// generateShortUrl = async () => {
//   if (!this.buo) await this.createBranchUniversalObject()
//   try {
//     let result = await this.buo.generateShortUrl()
//     console.log('generateShortUrl', result)
//     this.addResult('success', 'generateShortUrl', result)
//   } catch (err) {
//     console.log('generateShortUrl err', err)
//     this.addResult('error', 'generateShortUrl', err.toString())
//   }
// }


class MessengerBtn extends Component {
  //
  // buo = null
  //
  // state = {
  //   results: [],
  // }
  //
  // componentWillUnmount() {
  //   if (!this.buo) return
  //   this.buo.release()
  // }

  constructor(props){
    // branchStuff();
    // createBranchUniversalObject();
    super(props);
      var shareContent = {
        contentType: 'link',
        contentUrl: 'www.google.com'
      };
    this.state = {shareContent: shareContent}
  }
  componentDidUpdate(){
    shareContent = {
      contentType: 'link',

      contentUrl: this.props.urlReducers[this.props.activeRPSReducer.id].payload.url
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
    activeRPSReducer: state.activeRPSReducer,
    urlReducers: state.urlReducers
  };
}

export default connect(mapStateToProps)(MessengerBtn);
