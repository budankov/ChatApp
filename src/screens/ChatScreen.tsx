import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { s } from 'react-native-size-matters';
import AppHeader from '../components/AppHeader';
import ChatInput from '../components/ChatInput';
import ResponseMessageCard from '../components/ResponseMessageCard';
import SentMessageCard from '../components/SentMessageCard';
import { RECEIVED, SENT } from '../constants/chat';
import { IS_IOS } from '../constants/platform';
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

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={IS_IOS ? 'padding' : undefined}
        keyboardVerticalOffset={IS_IOS ? 50 : 0}
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
