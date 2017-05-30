import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking,
  TouchableNativeFeedback
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {opponentsData, startedFromURL, generatedUrls, selectedRPS, activeBranchParams} from '../actions';
import branch from 'react-native-branch';



class LinkSubscription extends Component{

  constructor(){
    super();
      console.info("Subscribing to Branch links");
      const url = Linking.getInitialURL().then((url) => {
        if(url){
          console.log('URL');
          console.log(url);
      branch.subscribe(({ error, params, uri }) => {
        if (error) {
          console.error("Error from Branch: " + error)
          return
        }else if(params.first_player_name){
          console.info("Received link response from Branch");
          console.log(params);
          //Function for checking if app was started by URL or not.
          this.props.startedFromURL(true);
          if(params.second_player_name != ""){
            switch(params.first_player_rps_type){
              case 'rock':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                this.props.selectedRPS(this.props.rpsResult[2]);
                this.props.activeBranchParams({params, result: 'played equal'});
                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResult[0]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResult[7]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
              }
              break;
              case 'paper':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResult[1]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
                case 'paper':
                this.props.selectedRPS(this.props.rpsResult[5]);
                this.props.activeBranchParams({params, result: 'played equal'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResult[3]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
              }
              break;
              case 'scissors':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResult[6]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResult[4]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResult[8]);
                  this.props.activeBranchParams({params, result: 'played equal'});
                break;
              }
              break;
            }
          }
          switch(params.first_player_rps_type){
            case 'rock':
              this.props.opponentsData({rps:'rock', name: params.first_player_name});
            break;
            case 'paper':
              this.props.opponentsData({rps:'paper', name: params.first_player_name});
            break;
            case 'scissors':
              this.props.opponentsData({rps:'scissors', name: params.first_player_name});
            break;
          }
        }else{
          console.log(params);
          this.props.opponentsData(null);
          this.props.startedFromURL(false);
          console.log('It\'s a new session after link/link-subscription');
        }
      });
      }else{
        this.props.opponentsData(null);
        this.props.startedFromURL(false);
        console.log('It\'s a brand new session/link-subscription');
      }
    });
  }
  render(){
    return(
      <Text></Text>
    );
  }
}

function mapStateToProps(state){
  return {
    rpsResult: state.rpsResult,
    activeRPSReducer: state.activeRPSReducer,
    activeBranchParams: state.activeBranchParams,
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
    selectedRPS: selectedRPS,
    activeBranchParams: activeBranchParams
  },dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(LinkSubscription);
