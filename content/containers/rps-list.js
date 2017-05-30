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
import {selectedUrl} from '../actions';

class RPSList extends Component{
   //Behöver göra så att man inte kan trycka på knappen innan urlen är genererad.
  _makeList(){
    console.log('Updating/rps-list');
    if(this.props.activeBranchParams){
      return(
        <View>
          <Text style={{alignItems: 'center', padding: 3, height: 100, width:340, margin: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5, borderColor: '#0083ff', backgroundColor: '#0083ff', color: 'white', fontSize: 20, fontFamily: 'Helvetica'}}>
            {this.props.activeBranchParams.params.first_player_name + '\n'}{this.props.activeBranchParams.result} against{'\n' + this.props.activeBranchParams.params.second_player_name}!
          </Text>
        </View>
          );
    }else if(!this.props.urlReducers){
      return this.props.rpsReducers.map((rps) => {
        return(
          <TouchableNativeFeedback key={rps.id}>
            <Image style={{height: 100, width: 100, margin: 10, borderWidth: 1, borderRadius: 5}} source={rps.img} />
          </TouchableNativeFeedback>
        );
      });
    }
    return this.props.rpsReducers.map((rps) => {
      return(
        <TouchableNativeFeedback key={rps.id} onPress={() => {rps.url = this.props.urlReducers[rps.id].payload.url, this.props.selectedRPS(rps)}}>
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
    rpsReducers: state.rpsReducers,
    urlReducers: state.urlReducers,
    activeBranchParams: state.activeBranchParams
  };
}

function matchdispatchToProps(dispatch){
  return bindActionCreators({
    selectedRPS: selectedRPS,
  }, dispatch)
}

export default connect(mapStateToProps, matchdispatchToProps)(RPSList);
