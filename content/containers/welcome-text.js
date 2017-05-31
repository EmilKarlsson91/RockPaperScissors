import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text
} from 'react-native';

class WelcomeText extends Component {

  _chooseText(){
    if(this.props.opponentsData){
      return('Now playing against:\n' + this.props.opponentsData.name);
    }else{
      return('New game!');
    }
  }

  render(){
    return(
      <Text style={{margin: 15, color: '#0083ff', fontSize: 25, fontFamily: 'Helvetica', fontWeight: 'bold'}}>
        {this._chooseText()}
      </Text>
    );
  }
}

function mapStateToProps(state){
  return{
    opponentsData: state.opponentsData
  };
}

export default connect(mapStateToProps)(WelcomeText);
