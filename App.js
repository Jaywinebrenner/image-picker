import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation'




export default class App extends React.Component {

  handleGetUserLocation = () => {

  }


  render() {

    return (
      <View style={styles.container}>
        <FetchLocation
          onGetLocation = {this.handleGetUserLocation}
          />
        <Text>Location Location Location</Text>
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
