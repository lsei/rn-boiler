import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createSwitchNavigator } from 'react-navigation';

import store from './store';
import Intro from './Views/Intro';
import Main from './Views/Main';

const Views = createSwitchNavigator({
  Intro,
  Main
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Views />
      </Provider>
    );
  }
}