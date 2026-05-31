import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ride } from "@/modules/rides/types";

interface Props {
  ride: Ride;
}

export default function RideCardMinimum({ ride }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.rideIcon}>
        <MaterialCommunityIcons
          name={ride.vehicleType === "Electric" ? "lightning-bolt" : "leaf"}
          size={20}
          color="#FFFFFF"
        />
      </View>
      <View style={styles.rideDetails}>
        <Text style={styles.rideModel}>{ride.vehicleModel}</Text>
        <Text style={styles.rideType}>{ride.vehicleType}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  rideIcon: {
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#00C853",
    justifyContent: "center",
    alignItems: "center",
  },
  rideDetails: {
    flex: 1,
    marginLeft: 12,
  },
  rideModel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  rideType: {
    fontSize: 12,
    color: "#999",
  },
});