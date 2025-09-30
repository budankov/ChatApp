import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VectorIcons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <MaterialDesignIcons name="bike" color="#170101fb" size={100} />
      <MaterialDesignIcons name="blender" color="#170101fb" size={100} />
      <MaterialDesignIcons name="bluetooth" color="#170101fb" size={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  },
});
export default VectorIcons;
