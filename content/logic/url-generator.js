import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import branch, { RegisterViewEvent } from 'react-native-branch';
import {generatedUrls} from '../actions';
import FBSDK, { GraphRequest, GraphRequestManager, AccessToken} from 'react-native-fbsdk';

var branchUniversalObject1 = {}
var branchUniversalObject2 = {}
var branchUniversalObject3 = {}

var index = 1;
var urlArray = [];

class GenerateUrl extends Component{

  componentDidMount(){
    const infoRequest = new GraphRequest(
      '/me',
      null,
      this.finishedGeneratingUrls,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
    // this.finishedGeneratingUrls();
  }

  buo = null

  state = {
    results: [],
    // urlArray: [],
  }

  resetComponent = async () => {
      console.log('Resetting objects/url-generator------------------------------------------------------------------------------------------------------');

      if (this.buo) this.buo.release()
      tempBranchUniversalObject1 = {
        title: 'Rock Paper Scissors',
        contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/branch.io/content/resources/RPSBattle.jpg?raw=true',
        contentDescription: '',
        metadata: {
          first_player_name: '',
          second_player_name: '',
          first_player_rps_type: '',
          second_player_rps_type: ''
        }
      }
      tempBranchUniversalObject2 = {
        title: 'Rock Paper Scissors',
        contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/branch.io/content/resources/RPSBattle.jpg?raw=true',
        contentDescription: '',
        metadata: {
          first_player_name: '',
          second_player_name: '',
          first_player_rps_type: '',
          second_player_rps_type: ''
        }
      }
      tempBranchUniversalObject3 = {
        title: 'Rock Paper Scissors',
        contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/branch.io/content/resources/RPSBattle.jpg?raw=true',
        contentDescription: '',
        metadata: {
          first_player_name: '',
          second_player_name: '',
          first_player_rps_type: '',
          second_player_rps_type: ''
        }
      }
      branchUniversalObject1 = tempBranchUniversalObject1;
      branchUniversalObject2 = tempBranchUniversalObject2;
      branchUniversalObject3 = tempBranchUniversalObject3;
    }

  createBranchUniversalObject = async () => {
    if(index === 1){
      branchUniversalObjectTemp = branchUniversalObject1
    }else if (index === 2){
      branchUniversalObjectTemp = branchUniversalObject2
    }else{
      branchUniversalObjectTemp = branchUniversalObject3
    }
    try {
      let result = await branch.createBranchUniversalObject('abc', branchUniversalObjectTemp)
      if (this.buo) this.buo.release()
      this.buo = result
      console.log('createBranchUniversalObject', result)
      this.addResult('success', 'createBranchUniversalObject', result)
    } catch (err) {
      console.log('createBranchUniversalObject err', err.toString())
      this.addResult('error', 'createBranchUniversalObject', err.toString())
    } finally {
      index++;
    }
  }
  generateShortUrl = async () => {
    if (!this.buo) await this.createBranchUniversalObject()
    try {
      let result = await this.buo.generateShortUrl()
      console.log('generateShortUrl', result)
      this.addResult('success', 'generateShortUrl', result)
      this.generateUrlArray(result);
    } catch (err) {
      console.log('generateShortUrl err', err)
      this.addResult('error', 'generateShortUrl', err.toString())
    } finally{
      this.buo = null;
    }
  }

  cycleGenerateUrls = async () => {
    for(var i = 0; i < 3; i++){
      await this.generateShortUrl();
    }
    index = 1;
  }

  setUserProps = async (result) => {
    if(!this.props.startedFromURLReducer){
      branchUniversalObject1.contentDescription = result.name + ' have challanged you to play a game of Rock Paper Scissors, do you dare?'
      branchUniversalObject2.contentDescription = result.name + ' have challanged you to play a game of Rock Paper Scissors, do you dare?'
      branchUniversalObject3.contentDescription = result.name + ' have challanged you to play a game of Rock Paper Scissors, do you dare?'
      branchUniversalObject1.metadata.first_player_name = result.name
      branchUniversalObject2.metadata.first_player_name = result.name
      branchUniversalObject3.metadata.first_player_name = result.name
      branchUniversalObject1.metadata.first_player_rps_type = 'rock'
      branchUniversalObject2.metadata.first_player_rps_type = 'paper'
      branchUniversalObject3.metadata.first_player_rps_type = 'scissors'
    }
    if(this.props.startedFromURLReducer){
      branchUniversalObject1.contentDescription = result.name + ' have responded, click on the link to see the result!'
      branchUniversalObject2.contentDescription = result.name + ' have responded, click on the link to see the result!'
      branchUniversalObject3.contentDescription = result.name + ' have responded, click on the link to see the result!'
      branchUniversalObject1.metadata.second_player_name = result.name
      branchUniversalObject2.metadata.second_player_name = result.name
      branchUniversalObject3.metadata.second_player_name = result.name
      branchUniversalObject1.metadata.first_player_name = this.props.opponentsDataReducer.name
      branchUniversalObject2.metadata.first_player_name = this.props.opponentsDataReducer.name
      branchUniversalObject3.metadata.first_player_name = this.props.opponentsDataReducer.name
      branchUniversalObject1.metadata.second_player_rps_type = 'rock'
      branchUniversalObject2.metadata.second_player_rps_type = 'paper'
      branchUniversalObject3.metadata.second_player_rps_type = 'scissors'
      branchUniversalObject1.metadata.first_player_rps_type = this.props.opponentsDataReducer.rps
      branchUniversalObject2.metadata.first_player_rps_type = this.props.opponentsDataReducer.rps
      branchUniversalObject3.metadata.first_player_rps_type = this.props.opponentsDataReducer.rps
    }
  }
  finishedGeneratingUrls = async (error: ?Object, result: ?Object) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
      console.log(JSON.stringify(error));
    } else {
      console.log('Success fetching data: ' + result.toString());
      console.log(JSON.stringify(result));
      await this.resetComponent().then(await this.setUserProps(result)).then(await this.cycleGenerateUrls()).then(() => this.props.generatedUrls(urlArray)).then(() => this.clearUrl())
    }
  }
  addResult(type, slug, payload) {
    let result = { type, slug, payload }
    // this.setState({
    //   results: [result, ...this.state.results].slice(0, 10)
    // })
  }
  clearUrl(){
    urlArray = [];
  }

  generateUrlArray(payload){
    let result = {payload}
    // this.setState({
    //   urlArray: [result, ...this.state.urlArray]
    // })
    // urlArray = [result, ...urlArray]
    urlArray.push(result);
  }
  render(){
    return(
      <Text></Text>
    );
  }
}

function mapStateToProps(state){
  return{
    urlReducers: state.urlReducers,
    opponentsDataReducer: state.opponentsDataReducer,
    startedFromURLReducer: state.startedFromURLReducer
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({generatedUrls: generatedUrls}, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(GenerateUrl);
