import ridesData from "@/data/rides.json";
import { useBooking } from "@/modules/booking/hooks/useBooking";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import { useTheme } from "@/shared/context/ThemeContext";
import { Ride } from "@/modules/rides/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  RideCardMinimum,
  SummarySection,
  EcoPointsCard,
  ActionButtons,
} from "./components";

const { height: screenHeight } = Dimensions.get("window");

export default function BookingConfirmationScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const params = useLocalSearchParams();
  const rideId = params.rideId as string;
  const bottomSheetRef = useRef(null);
  const { confirmBooking } = useBooking();
  const { incrementRideStats } = useProfile();

  // Get the selected ride from data
  const ride = ridesData.rides.find((r) => r.id === rideId) as Ride;

  if (!ride) {
    return (
      <View style={styles.container}>
        <Text>Ride not found</Text>
      </View>
    );
  }

  const ecoPoints = Math.round(ride.co2Saved * 10);

  // Snap points for bottom sheet
  const snapPoints = useMemo(() => {
    return [
      140, // Minimum (just ride card + confirm button)
      screenHeight * 0.5, // Half screen
      screenHeight * 0.85, // Full screen
    ];
  }, []);

  const handleConfirm = () => {
    // Update booking status
    confirmBooking();
    // Update profile stats (rides count, CO2 saved, EcoPoints)
    incrementRideStats(ride);
    console.log("Booking confirmed for ride:", ride.id);
    // Navigate to success screen
    router.push({
      pathname: "/booking-success",
      params: { rideId: ride.id, eta: ride.eta },
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Map area (empty for now) */}
      <View style={[styles.mapPlaceholder, { backgroundColor: colors.surface }]}>
        <MaterialCommunityIcons name="map" size={48} color={colors.textTertiary} />
        <Text style={[styles.mapPlaceholderText, { color: colors.textTertiary }]}>Map coming soon</Text>
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => router.back()}
      >
        <BottomSheetScrollView style={styles.sheetContent}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />

          {/* Ride Card */}
          <RideCardMinimum ride={ride} />

          {/* Expandable Details Section */}
          <View style={styles.expandableContent}>
            {/* Summary Section */}
            <SummarySection ride={ride} />

            {/* EcoPoints Card */}
            <EcoPointsCard ecoPoints={ecoPoints} />

            {/* Action Buttons */}
            <ActionButtons
              onConfirm={handleConfirm}
              onCancel={() => router.back()}
            />
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  mapPlaceholderText: {
    marginTop: 12,
    color: "#999",
    fontSize: 14,
  },
  sheetContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  dragHandle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    backgroundColor: "#DDD",
    borderRadius: 2,
    marginBottom: 12,
  },
  rideCardMinimum: {
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
  rideDetailsMinimum: {
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
  confirmButton: {
    backgroundColor: "#00C853",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  expandableContent: {
    paddingBottom: 20,
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
  ecoPointsSection: {
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
  cancelButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
});
