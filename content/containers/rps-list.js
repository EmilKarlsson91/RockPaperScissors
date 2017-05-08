import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native';
import {selectedRPS} from '../actions';

class RPSList extends Component{

  _makeList(){
    return this.props.rpsReducers.map((rps) => {
      return(
        <TouchableNativeFeedback key={rps.id} onPress={() => this.props.selectedRPS(rps)}>
          <Image style={{height: 100, width: 100, margin: 10, borderWidth: 1, borderRadius: 5}} source={rps.img} />
        </TouchableNativeFeedback>
      );
    });
  }
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        {this._makeList()}
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    rpsReducers: state.rpsReducers
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({selectedRPS: selectedRPS}, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(RPSList);
