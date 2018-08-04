import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import {
    setTargetPace,
} from '../actions/main'

export class Main extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Intro')}}>
                <Text>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.setTargetPace(this.props.targetPace + (5/60))}}>
                <Text>{this.props.targetPace}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const mapStateToProps = state => ({
    targetPace: state.main.targetPace,
  });
  
  const mapDispatchToProps = dispatch => ({
      setTargetPace: (value) => dispatch(setTargetPace(value)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
