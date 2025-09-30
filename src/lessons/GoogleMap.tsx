import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = () => {
  return (
    <MapView
      style={styles.mapView}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 50.44968902397098,
        longitude: 30.525781543707208,
        latitudeDelta: 0.045,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{
          latitude: 50.44968902397098,
          longitude: 30.525781543707208,
        }}
        title="Rozetka"
        description="Графік роботи з пн-нд з 8:00 - 21:00"
      />

      <Marker
        coordinate={{
          latitude: 50.45968902397098,
          longitude: 30.525781543707208,
        }}
        title="Rozetka"
        description="Графік роботи з пн-нд з 9:00 - 22:00"
      />

      <Marker
        coordinate={{
          latitude: 50.44968902397098,
          longitude: 30.535781543707208,
        }}
        title="Rozetka"
        description="Графік роботи з пн-нд з 8:00 - 21:00"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export default GoogleMap;
