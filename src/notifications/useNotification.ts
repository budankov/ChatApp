import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';

const requestUserPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('Notification permission granted');
  } else {
    console.log('Notification permission denied');
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
    requestUserPermission();
    getToken();
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
