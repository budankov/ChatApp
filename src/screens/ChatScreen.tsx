import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import { s } from 'react-native-size-matters';
import AppHeader from '../components/AppHeader';
import ChatInput from '../components/ChatInput';
import ResponseMessageCard from '../components/ResponseMessageCard';
import SentMessageCard from '../components/SentMessageCard';
import { RECEIVED, SENT } from '../constants/chat';
import { colors } from '../styles/colors';

interface Message {
  id: number;
  message: string;
  type: string;
}

const ChatScreen = () => {
  const messagesList: Message[] = [
    {
      message: 'Hello',
      id: 1,
      type: SENT,
    },
    {
      message: 'Hi, How can I help you today?',
      id: 2,
      type: RECEIVED,
    },
    {
      message: 'Tell me about React Native',
      id: 3,
      type: SENT,
    },
  ];
  const [messages, setMessages] = useState<Message[]>(messagesList);

  const [flexToggle, setFlexToggle] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setFlexToggle(false);
    });

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setFlexToggle(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={
          flexToggle
            ? [{ flexGrow: 1 }, styles.container]
            : [{ flex: 1 }, styles.container]
        }
        enabled={!flexToggle}
      >
        <AppHeader />
        <FlatList
          data={messages}
          keyExtractor={item => item.id?.toString()}
          renderItem={({ item }) => {
            return item.type === SENT ? (
              <SentMessageCard message={item.message} />
            ) : (
              <ResponseMessageCard message={item.message} />
            );
          }}
          contentContainerStyle={{ paddingHorizontal: s(8) }}
        />
        <ChatInput />
      </KeyboardAvoidingView>
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
