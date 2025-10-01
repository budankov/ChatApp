import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import { colors } from '../styles/colors';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ChatScreen;
