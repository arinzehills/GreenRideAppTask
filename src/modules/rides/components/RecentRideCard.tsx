import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RecentRide } from "@/modules/rides/types";

interface RecentRideCardProps {
  ride: RecentRide;
  onPress?: () => void;
}

export default function RecentRideCard({ ride, onPress }: RecentRideCardProps) {
  const dateObj = new Date(ride.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Date and Route */}
      <View style={styles.content}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.route}>
          {ride.from} → {ride.to}
        </Text>
      </View>

      {/* CO2 and Points */}
      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>🌿</Text>
          <Text style={styles.statValue}>{ride.co2Saved} kg</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statIcon}>⭐</Text>
          <Text style={styles.statValue}>{ride.ecoPoints} pts</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: "#00C853",
  },
  content: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  route: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  statsSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  stat: {
    alignItems: "center",
    minWidth: 50,
  },
  statIcon: {
    fontSize: 14,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#00C853",
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 8,
  },
});