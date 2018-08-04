import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Intro from './Views/Intro';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Intro />
      </Provider>
    );
  }
}