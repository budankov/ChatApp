import { getApp } from '@react-native-firebase/app';
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  onMessage,
  requestPermission,
} from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

const messaging = getMessaging(getApp());

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
    const authStatus = await requestPermission(messaging);
    const enabled =
      authStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus === AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted (iOS)');
    } else {
      console.log('Notification permission denied (iOS)');
    }
  }
};

const fetchToken = async () => {
  try {
    const token = await getToken(messaging);
    console.log('FCM Token', token);
  } catch (error) {
    console.log('Failed to get FCM Token', error);
  }
};

export const useNotification = () => {
  useEffect(() => {
    requestUserPermission().then(fetchToken);
  }, []);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, async remoteMessage => {
      const msgBody = remoteMessage.notification?.body;
      const msgTitle = remoteMessage.notification?.title;
      Alert.alert(msgTitle, JSON.stringify(msgBody));
    });

    return unsubscribe;
  }, []);
};
