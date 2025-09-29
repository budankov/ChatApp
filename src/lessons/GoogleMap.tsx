import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = () => {
  return (
    <MapView
      style={styles.mapView}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 50.44968902397098,
        longitude: 30.525781543707208,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default GoogleMap;
