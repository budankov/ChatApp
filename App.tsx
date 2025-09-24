import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNotification } from './src/notifications/useNotification';

const App = () => {
  useNotification();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Костя1!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 35,
  },
});

export default App;
