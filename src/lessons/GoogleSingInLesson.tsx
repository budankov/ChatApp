import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const GoogleSingInLesson = () => {
  GoogleSignin.configure({
    webClientId:
      '771988960970-uclokvvhri781e60acuqeknnb2fqmmg4.apps.googleusercontent.com',
  });

  const [userInfo, setUserInfo] = useState(null);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log('Response = ', JSON.stringify(response.data, null, 3));
        setUserInfo(response.data);
      } else {
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            break;
          default:
        }
      } else {
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={{ uri: userInfo?.user?.photo }} />
      <Text style={styles.title}>
        {`Hello ${userInfo?.user?.givenName} ${userInfo?.user?.familyName}`}
      </Text>
      <Button title="Sing in with Google" onPress={googleSignIn} />
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
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default GoogleSingInLesson;
