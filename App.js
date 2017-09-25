import React from 'react';
import { Text, View } from 'react-native';
import Styles from 'global-styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={ Styles.container }>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hi, this is will</Text>
      </View>
    );
  }
}
