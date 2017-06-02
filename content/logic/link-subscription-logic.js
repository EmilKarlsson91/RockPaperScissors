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
import {opponentsData, setStartedFromURL, generatedUrls, selectedRPS, activeBranchParams} from '../actions';
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
          this.props.activeBranchParams({params});
          console.info("Received link response from Branch");
          console.log(params);
          //Function for checking if app was started by URL or not.
          this.props.setStartedFromURL(true);
          if(params.second_player_name != ""){
            switch(params.first_player_rps_type){
              case 'rock':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                this.props.selectedRPS(this.props.rpsResultReducer[2]);
                this.props.activeBranchParams({params, result: 'played equal'});
                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResultReducer[0]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResultReducer[7]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
              }
              break;
              case 'paper':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResultReducer[1]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
                case 'paper':
                this.props.selectedRPS(this.props.rpsResultReducer[5]);
                this.props.activeBranchParams({params, result: 'played equal'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResultReducer[3]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
              }
              break;
              case 'scissors':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResultReducer[6]);
                  this.props.activeBranchParams({params, result: 'lost'});
                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResultReducer[4]);
                  this.props.activeBranchParams({params, result: 'won'});
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResultReducer[8]);
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
          this.props.setStartedFromURL(false);
          console.log('It\'s a new session after link/link-subscription');
        }
      });
      }else{
        this.props.setStartedFromURL(false);
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
    rpsResultReducer: state.rpsResultReducer,
    activeRPSReducer: state.activeRPSReducer,
    activeBranchParamsReducer: state.activeBranchParamsReducer,
    urlReducers: state.urlReducers,
    loggedIn: state.loggedIn,
    startedFromURLReducer: state.startedFromURLReducer,
    opponentsDataReducer: state.opponentsDataReducer
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({
    setStartedFromURL: setStartedFromURL,
    opponentsData: opponentsData,
    generatedUrls: generatedUrls,
    selectedRPS: selectedRPS,
    activeBranchParams: activeBranchParams
  },dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(LinkSubscription);
