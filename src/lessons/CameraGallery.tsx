import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CameraGallery = () => {
  const [selectedImageURI, setSelectedImageURI] = useState('');

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      setSelectedImageURI(result.assets[0]?.uri);
      console.log(result);
    } catch (error) {
      console.log('Error happen opening Gallery', error);
    }
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });
      console.log(result);
    } catch (error) {
      console.log('Error happen opening Gallery', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={{ uri: selectedImageURI }} />
      <Text style={styles.title} onPress={openGallery}>
        Open Gallery
      </Text>
      <Text style={styles.title} onPress={openCamera}>
        Open Camera
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    paddingBottom: 20,
  },
  icon: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default CameraGallery;
