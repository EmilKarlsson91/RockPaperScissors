import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';
import {selectedRPS} from '../actions';

class RPSDetails extends Component {
  render(){
    if(!this.props.activeRPSReducer){
      // this.props.selectedRPS(this.props.rpsReducers[1])

      return(
        <View>
          <Image style={{height:340, width:340, marginBottom: 10, borderWidth: 1, borderRadius: 5}} source={this.props.rpsReducers[1].img} />
        </View>
      );
    }
    return(
      <View>
        <Image style={{height:340, width:340, marginBottom: 10, borderWidth: 1, borderRadius: 5}} source={this.props.activeRPSReducer.rps.img} />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    activeRPSReducer: state.activeRPSReducer,
    rpsReducers: state.rpsReducers,
    urlReducers: state.urlReducers
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({selectedRPS: selectedRPS}, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(RPSDetails);
