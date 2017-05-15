import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image
} from 'react-native';

class RPSDetails extends Component {
  render(){
    if(!this.props.activeRPSReducer){
      return(
        <View>
          <Image style={{height:340, width:340, marginBottom: 10, borderWidth: 1, borderRadius: 5}} source={this.props.rpsReducers[1].img} />
          {/* <Text>{this.props.rpsReducers[1].name}</Text> */}
        </View>
      );
    }
    if(!this.props.urlReducers){
      return(
        <View>
          <Image style={{height:340, width:340, marginBottom: 10, borderWidth: 1, borderRadius: 5}} source={this.props.activeRPSReducer.img} />
          <Text>Fel</Text>
        </View>
      );
    }
    return(
      <View>
        <Image style={{height:340, width:340, marginBottom: 10, borderWidth: 1, borderRadius: 5}} source={this.props.activeRPSReducer.img} />
        {/* <Text>{this.props.activeRPSReducer.name}</Text> */}
        {/* <Text>{this.props.urlReducers[this.props.activeRPSReducer.id].payload.url}</Text> */}
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

export default connect(mapStateToProps)(RPSDetails);
