import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FetchLocation = ({ onGetLocation }) => {

  return (

    <View>
      <Button
        title="Get Location"
        onPress={onGetLocation}
      />
    </View>

  )
};

const styles = StyleSheet.create({


})

export default FetchLocation;
