import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';

interface ISentMessageCard {
  message: string;
}

const SentMessageCard: FC<ISentMessageCard> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: vs(14),
  },
  messageContainer: {
    backgroundColor: colors.black,
    borderRadius: s(20),
    maxWidth: '80%',
    padding: s(12),
  },
  messageText: {
    fontSize: s(16),
    color: colors.white,
  },
});

export default SentMessageCard;
