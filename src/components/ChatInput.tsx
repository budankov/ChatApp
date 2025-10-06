import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import React, { FC } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';

interface ChatInputProps {
  messageValue: string;
  setMessageValue: (message: string) => void;
  onMessageSent: () => void;
}

const ChatInput: FC<ChatInputProps> = ({
  messageValue,
  setMessageValue,
  onMessageSent,
}) => {
  const sendMessageHandler = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Type a message..."
        placeholderTextColor={colors.black}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={sendMessageHandler}>
        <MaterialDesignIcons name="send" color="#fff" size={s(18)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: s(10),
    paddingBottom: vs(20),
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
