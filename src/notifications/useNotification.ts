import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

const requestUserPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted (Android)');
    } else {
      console.log('Notification permission denied (Android)');
    }
  } else if (Platform.OS === 'ios') {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted (iOS)');
    } else {
      console.log('Notification permission denied (iOS)');
    }
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token', token);
  } catch (error) {
    console.log('Failed to get FCM Token', error);
  }
};

export const useNotification = () => {
  useEffect(() => {
    requestUserPermission().then(() => {
      getToken();
    });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const msgBody = remoteMessage.notification?.body;
      const msgTitle = remoteMessage.notification?.title;
      Alert.alert(msgTitle, JSON.stringify(msgBody));
    });

    return unsubscribe;
  }, []);
};
