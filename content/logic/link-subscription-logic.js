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
import {opponentsData, startedFromURL, generatedUrls, selectedRPS} from '../actions';
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

                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResult[0]);
                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResult[1]);
                break;
              }
              break;
              case 'paper':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResult[0]);
                break;
                case 'paper':

                break;
                case 'scissors':
                  this.props.selectedRPS(this.props.rpsResult[2]);
                break;
              }
              break;
              case 'scissors':
              //Second player
              switch(params.second_player_rps_type){
                case 'rock':
                  this.props.selectedRPS(this.props.rpsResult[1]);
                break;
                case 'paper':
                  this.props.selectedRPS(this.props.rpsResult[2]);
                break;
                case 'scissors':

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
    selectedRPS: selectedRPS
  },dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(LinkSubscription);
