import React, { useState } from 'react';
import { Platform, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FetchLocation from './components/FetchLocation';
import ImagePickerExample from './components/ImagePickerExample'
import logo from './assets/dracula.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';


  export default function App() {

    let [selectedImage, setSelectedImage] = React.useState(null);

      let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }


      if (Platform.OS === 'web') {
        let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
        setSelectedImage({ localUri: pickerResult.uri, remoteUri });
      } else {
        setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
      }
    };

    let openShareDialogAsync = async () => {
  if (!(await Sharing.isAvailableAsync())) {
       alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
    return;
  }

 Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
};




    if (selectedImage !== null) {
      return (
        <View style={styles.importedImagecontainer}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />

          <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>
          </TouchableOpacity>
        </View>
      );
    }





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
            onPress={openImagePickerAsync}
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
  },
  importedImagecontainer: {
    alignItems: 'center',

  },
  thumbnail: {
  width: 300,
  height: 300,
  resizeMode: "contain"
}
});
