import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ride } from "@/modules/rides/types";

interface RideCardProps {
  ride: Ride;
  onPress?: () => void;
}

export default function RideCard({ ride, onPress }: RideCardProps) {
  const isElectric = ride.vehicleType === "Electric";
  const iconName = isElectric ? "lightning-bolt" : "leaf";
  const badgeColor = isElectric ? "#00C853" : "#8BC34A";

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Vehicle Type Icon */}
      <View style={[styles.iconContainer, { backgroundColor: badgeColor }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color="#FFFFFF"
        />
      </View>

      {/* Vehicle Info */}
      <View style={styles.content}>
        <Text style={styles.model}>{ride.vehicleModel}</Text>
        <Text style={styles.type}>{ride.vehicleType}</Text>
      </View>

      {/* ETA */}
      <View style={styles.etaSection}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={16}
          color="#666"
        />
        <Text style={styles.eta}>{ride.eta}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 8,
    padding: 10,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  model: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  type: {
    fontSize: 12,
    color: "#999",
  },
  etaSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  eta: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginLeft: 6,
  },
});