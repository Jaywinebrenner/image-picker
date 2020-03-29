import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FetchLocation from './components/FetchLocation';
import ImagePickerExample from './components/ImagePickerExample'
import logo from './assets/dracula.png'


export default class App extends React.Component {


  render() {

    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source = {logo}
          />
          <Text
            style={styles.text}>To share a photo from your phone with a friend, just press the button below!
          </Text>
          <TouchableOpacity
            onPress={() => alert("sup yall")}
            style={styles.button}
            >
            <Text
              style={styles.buttonText}
              >
              Pick a photo
            </Text>

          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  logo: {
    height: 180,
    width: 100,
     marginBottom: 10,
  },
  button: {
    backgroundColor: '#8a0303',
    padding: 10,
    borderRadius: 7,
    marginTop: 5
  },
  buttonText: {
    fontSize: 29,
    color: '#fff',

  }
});
