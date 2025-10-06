import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppIcon from '../assets/icons/AppIcon';

const EmptyChat = () => {
  return (
    <View style={styles.container}>
      <AppIcon width={s(100)} height={vs(100)} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subTitle}>What can I help with?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingTop: vs(140),
  },
  title: {
    fontSize: s(24),
    fontWeight: 'bold',
    marginBottom: vs(8),
    marginTop: vs(10),
  },
  subTitle: {
    fontSize: s(18),
  },
});

export default EmptyChat;
