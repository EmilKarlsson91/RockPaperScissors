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
          <Text>Bilden Hittas inte</Text>
        </View>
      );
    }

    return(
      <View>
        <Image style={{height:200, width:200}} source={this.props.activeRPSReducer.img} />
        <Text>{this.props.activeRPSReducer.name}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    activeRPSReducer: state.activeRPSReducer
  };
}

export default connect(mapStateToProps)(RPSDetails);
