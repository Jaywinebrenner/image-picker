import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FetchLocation = ({ onGetLocation }) => {

  return (

    <View>
      <Button
        style={styles.button}
        title="Get Location"
        onPress={onGetLocation}
        color="black"
      />
    </View>

  )
};

const styles = StyleSheet.create({
  button: {
    padding: 30,
    backgroundColor: 'red',

  }

})

export default FetchLocation;
