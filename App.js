import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation'




export default class App extends React.Component {

  handleGetUserLocation = () => {
    console.log("sup");
  }


  render() {

    return (
      <View style={styles.container}>
        <FetchLocation
          onGetLocation = {this.handleGetUserLocation}
          />
        <Text>Open up App.js to start working on your app!</Text>
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
