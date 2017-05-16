import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import branch, { RegisterViewEvent } from 'react-native-branch'
import {generatedUrls} from '../actions';

const branchUniversalObject1 = {
  title: 'Rock Paper Scissors',
  contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/master/content/resources/RPSBattle.jpg?raw=true',
  contentDescription: 'Länk 1',
  metadata: {
    user_id: '123',
    rps_type: 'rock'
  }
}
const branchUniversalObject2 = {
  title: 'Rock Paper Scissors',
  contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/master/content/resources/RPSBattle.jpg?raw=true',
  contentDescription: 'Länk 2',
  metadata: {
    user_id: '123',
    rps_type: 'paper'
  }
}
const branchUniversalObject3 = {
  title: 'Rock Paper Scissors',
  contentImageUrl: 'https://github.com/EmilKarlsson91/RockPaperScissors/blob/master/content/resources/RPSBattle.jpg?raw=true',
  contentDescription: 'Länk 3',
  metadata: {
    user_id: '123',
    rps_type: 'scissors'
  }
}

var index = 1;


class GenerateUrl extends Component{
  constructor(props){
    super(props);
    this.finishedGeneratingUrls();
  }
  buo = null

  state = {
    results: [],
    urlArray: [],
  }

  createBranchUniversalObject = async () => {
    if(index === 1){
      branchUniversalObjectTest = branchUniversalObject3
    }else if (index === 2){
      branchUniversalObjectTest = branchUniversalObject2
    }else{
      branchUniversalObjectTest = branchUniversalObject1
    }
    try {
      let result = await branch.createBranchUniversalObject('abc', branchUniversalObjectTest)
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
  }

  finishedGeneratingUrls = async () => {
    await this.cycleGenerateUrls().then(() => this.props.generatedUrls(this.state.urlArray))
  }
  addResult(type, slug, payload) {
    let result = { type, slug, payload }
    this.setState({
      results: [result, ...this.state.results].slice(0, 10)
    })
  }
  generateUrlArray(payload){
    let result = {payload}
    this.setState({
      urlArray: [result, ...this.state.urlArray]
    })
  }
  render(){
    return(
      <Text></Text>
    );
  }
}

function mapStateToProps(state){
  return{
    urlReducers: state.urlReducers
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({generatedUrls: generatedUrls}, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(GenerateUrl);
