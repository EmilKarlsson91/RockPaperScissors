
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View
} from 'react-native';

class WelcomeText extends Component {

    _chooseText(){
      if(this.props.activeBranchParamsReducer){
        console.log('fån text: ' + this.props.activeBranchParamsReducer)
       if(this.props.activeBranchParamsReducer.params.second_player_name){
           return('Results:');
        }else if(this.props.activeBranchParamsReducer.params.first_player_name){
          return(
            <Text>
              Now playing against:
              {'\n' + this.props.activeBranchParamsReducer.params.first_player_name}
            </Text>
          );
        }else{
          return(
            <Text>
              bajs
            </Text>
          );
        }
      }else{
        return(
          <Text>
            New game!
          </Text>
        );
      }
    }


  render(){
    return(
      <View>
        <Text style={{margin: 15, color: '#0083ff', fontSize: 25, fontFamily: 'Helvetica', fontWeight: 'bold'}}>
          {this._chooseText()}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    opponentsDataReducer: state.opponentsDataReducer,
    activeBranchParamsReducer: state.activeBranchParamsReducer
  };
}

export default connect(mapStateToProps)(WelcomeText);
