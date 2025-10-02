import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { IS_IOS } from '../constants/platform';
import { colors } from '../styles/colors';

const ChatInput = () => {
  return (
    <View style={[styles.container, IS_IOS && { paddingBottom: vs(20) }]}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.sendButton}>
        <MaterialDesignIcons name="send" color="#fff" size={s(18)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: s(10),
    backgroundColor: colors.white,
    borderTopWidth: s(1),
    borderTopColor: colors.mediumGray,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    marginRight: s(10),
    borderRadius: s(20),
  },
  sendButton: {
    width: s(35),
    height: s(35),
    borderRadius: s(20),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatInput;
