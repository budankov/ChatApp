import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppIcon from '../assets/icons/AppIcon';
import { colors } from '../styles/colors';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppIcon width={s(30)} height={s(30)} stroke={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(2),
    backgroundColor: colors.black,
  },
});

export default AppHeader;
