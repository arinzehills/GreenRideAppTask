import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ride } from "@/modules/rides/types";

interface Props {
  ride: Ride;
}

export default function SummarySection({ ride }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />

      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={18}
            color="#666"
          />
          <Text style={styles.summaryLabel}>ETA</Text>
          <Text style={styles.summaryValue}>{ride.eta}</Text>
        </View>

        <View style={styles.summaryItem}>
          <MaterialCommunityIcons name="cash" size={18} color="#666" />
          <Text style={styles.summaryLabel}>Price</Text>
          <Text style={styles.summaryValue}>
            ${ride.price.toFixed(2)}
          </Text>
        </View>

        <View style={styles.summaryItem}>
          <MaterialCommunityIcons name="leaf" size={18} color="#00C853" />
          <Text style={styles.summaryLabel}>CO2 Saved</Text>
          <Text style={[styles.summaryValue, { color: "#00C853" }]}>
            {ride.co2Saved} kg
          </Text>
        </View>
      </View>

      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 11,
    color: "#999",
    marginTop: 6,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});