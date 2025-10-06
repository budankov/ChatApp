import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { s } from 'react-native-size-matters';
import AppHeader from '../components/AppHeader';
import ChatInput from '../components/ChatInput';
import EmptyChat from '../components/EmptyChat';
import KeyboardAvoidingViewContainer from '../components/KeyboardAvoidingViewContainer';
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
  const [messagesData, setMessagesData] = useState<Message[]>([]);
  const [msgInput, setMsgInput] = useState<string>('');
  const flatListRef = useRef<FlatList>(null);

  const scrollToBottom = () => {
    if (flatListRef.current && messagesData.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesData]);

  const onMessageSent = (message: string) => {
    setMessagesData(prevMessages => [
      ...prevMessages,
      {
        message: msgInput,
        id: prevMessages.length + 1,
        type: SENT,
      },
    ]);

    setTimeout(() => {
      onGetResponse(
        'Lorem Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem*3 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      );
    }, 2000);
  };

  const onGetResponse = (responseMessage: string) => {
    setMessagesData(prevMessages => [
      ...prevMessages,
      {
        message: responseMessage,
        id: prevMessages.length + 1,
        type: RECEIVED,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingViewContainer>
        <AppHeader />
        <FlatList
          ref={flatListRef}
          data={messagesData}
          keyExtractor={item => item.id?.toString()}
          renderItem={({ item }) => {
            return item.type === SENT ? (
              <SentMessageCard message={item.message} />
            ) : (
              <ResponseMessageCard message={item.message} />
            );
          }}
          contentContainerStyle={{ paddingHorizontal: s(8) }}
          ListEmptyComponent={<EmptyChat />}
          onLayout={scrollToBottom}
          onContentSizeChange={scrollToBottom}
        />
        <ChatInput
          messageValue={msgInput}
          setMessageValue={setMsgInput}
          onMessageSent={onMessageSent}
        />
      </KeyboardAvoidingViewContainer>
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
