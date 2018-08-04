import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';



export class Intro extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>RN Boiler – Intro</Text>
          <Text>{this.props.targetPace}</Text>
        </View>
    );
  }
}

const mapStateToProps = state => ({
    targetPace: state.main.targetPace,
  });
  
  const mapDispatchToProps = dispatch => ({
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Intro);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
