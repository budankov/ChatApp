import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import TypingEffect from './TypingEffect';

interface IResponseMessageCard {
  message: string;
}

const ResponseMessageCard: FC<IResponseMessageCard> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <TypingEffect style={styles.messageText} text={message} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(4),
    marginBottom: vs(12),
  },
  messageContainer: {
    backgroundColor: colors.grayBlack,
    borderRadius: s(20),
    maxWidth: '80%',
    padding: s(10),
  },
  messageText: {
    fontSize: s(16),
    color: colors.black,
  },
});

export default ResponseMessageCard;
