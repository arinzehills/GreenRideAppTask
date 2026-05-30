import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🌱 GreenRide</Text>
        <Text style={styles.subtitle}>Eco-Friendly Ride Booking</Text>
        <Text style={styles.description}>
          Book sustainable rides and track your carbon savings
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#00C853",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#00C853",
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderRadius: 28,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
