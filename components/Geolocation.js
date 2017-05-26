import React from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '0',
      lng: '0',
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Does not work on Android emulator or Sketch'
      });
    } else {
      this.getLocation();
    }
  }

  getLocation = async () => {
    // Check that permission is granted for device
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location is not allowed'
      });
    }

    // Coordinates for latitude and longitude are set
    let currentPosition = await Location.getCurrentPositionAsync({});
    this.setState({
      lat: currentPosition.coords.latitude,
      lng: currentPosition.coords.longitude,
    });
  }

  render() {
    return (
      <View>
        <Text>Current position</Text>
        <Text>{`latitude: ${JSON.stringify(this.state.lat)}, longitude: ${JSON.stringify(this.state.lng)}`}</Text>
      </View>
    );
  }
}
