import { StyleSheet, View, Text } from "react-native";

interface Props {
  ecoPoints: number;
}

export default function EcoPointsCard({ ecoPoints }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.ecoPointsIcon}>
        <Text style={styles.ecoIcon}>⭐</Text>
      </View>
      <View>
        <Text style={styles.ecoPointsLabel}>EcoPoints Earned</Text>
        <Text style={styles.ecoPointsValue}>{ecoPoints} points</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F8F5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  ecoPointsIcon: {
    marginRight: 12,
  },
  ecoIcon: {
    fontSize: 24,
  },
  ecoPointsLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  ecoPointsValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#00C853",
  },
});