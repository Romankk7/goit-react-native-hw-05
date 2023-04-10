import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";


const Map = ({route, navigation}) => {
    
    return(<View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{latitude: 48.9731,
            longitude: 23.9836,
            latitudeDelta: 0.01,
            longitudeDelta: 0.06,
          }}
        >
          <Marker
            coordinate={{ latitude: 48.9731, longitude: 23.9836 }}
            title="travel photo"
          />
        </MapView>
      </View>);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Map;