import { StyleSheet, ActivityIndicator, View } from "react-native";
import MapViewLib, { Marker } from "react-native-maps";
import { useMapLocation } from "@/modules/map/hooks";
import { Ride } from "@/modules/rides/types";

interface MapViewProps {
  ride: Ride;
}

export default function MapView({ ride }: MapViewProps) {
  const { userLocation, loading } = useMapLocation();

  if (loading || !userLocation) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00C853" />
      </View>
    );
  }

  return (
    <MapViewLib
      style={styles.map}
      initialRegion={{
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {/* User Location Marker */}
      <Marker
        coordinate={{
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        }}
        title="Your Location"
        pinColor="blue"
      />

      {/* Ride Destination Marker */}
      <Marker
        coordinate={{
          latitude: 37.7849,
          longitude: -122.4094,
        }}
        title={ride.vehicleModel}
        description={`${ride.eta} away`}
        pinColor={ride.vehicleType === "Electric" ? "#00C853" : "#8BC34A"}
      />
    </MapViewLib>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});