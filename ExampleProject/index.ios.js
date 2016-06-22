import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TelephoneInput from 'react-native-telephone-input';

class ExampleProject extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TelephoneInput placeholder="Number here, please" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ExampleProject', () => ExampleProject);
