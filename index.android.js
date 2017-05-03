/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Main from './main';

export default class PotatoCat extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('PotatoCat', () => PotatoCat);
