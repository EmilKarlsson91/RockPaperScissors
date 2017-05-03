import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './content/components/app';
import allReducers from './content/reducers';

const store = createStore(allReducers);

export default class Main extends Component {
  render(){
    return(
      <Provider store={store}>
        <Image source={require('./content/resources/background-image.jpg')} style={styles.backgroundImage}>
          <View>
            <App />
          </View>
        </Image>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
