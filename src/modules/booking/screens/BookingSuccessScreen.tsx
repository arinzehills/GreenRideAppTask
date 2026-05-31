import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useRef, useEffect } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/shared/context/ThemeContext";

export default function BookingSuccessScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const params = useLocalSearchParams();
  const rideId = params.rideId as string;
  const eta = params.eta as string;
  const driverName = params.driverName as string;
  const confettiRef = useRef<ConfettiCannon>(null);

  useEffect(() => {
    // Trigger confetti on mount
    setTimeout(() => {
      confettiRef.current?.start();
    }, 300);
  }, []);

  const handleGoHome = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Confetti Animation */}
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
      />

      {/* Success Content */}
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="check-circle"
            size={80}
            color={colors.primary}
          />
        </View>

        {/* Success Message */}
        <Text style={[styles.title, { color: colors.text }]}>Booking Confirmed!</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Your vehicle is on its way</Text>

        {/* Driver Info */}
        <View style={[styles.driverInfo, { backgroundColor: colors.primaryLight }]}>
          <MaterialCommunityIcons
            name="car-electric"
            size={24}
            color={colors.primary}
          />
          <View style={styles.driverDetails}>
            <Text style={[styles.driverLabel, { color: colors.textSecondary }]}>Arriving in</Text>
            <Text style={[styles.eta, { color: colors.primary }]}>{eta || "3 mins"}</Text>
          </View>
        </View>

        {/* Go Home Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleGoHome}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  confetti: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 32,
    width: "100%",
  },
  driverDetails: {
    marginLeft: 16,
  },
  driverLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  eta: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00C853",
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});