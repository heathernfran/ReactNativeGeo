import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Geolocation from './components/Geolocation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Geolocation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
