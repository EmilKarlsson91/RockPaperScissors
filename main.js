import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './content/components/app';
import allReducers from './content/reducers';

const store = createStore(allReducers);

export default class Main extends Component {
  render(){
    return(
      <Provider store={store} style={{ backgroundColor: 'rgba(52, 52, 52, 0.3)'}} >
        <App />
      </Provider>
    );
  }
}
