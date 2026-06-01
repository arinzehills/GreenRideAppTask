import { useMemo, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { Ride } from "@/modules/rides/types";
import { useBooking } from "@/modules/booking/hooks/useBooking";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import RideCardMinimum from "./RideCardMinimum";
import SummarySection from "./SummarySection";
import EcoPointsCard from "./EcoPointsCard";
import ActionButtons from "./ActionButtons";

const { height: screenHeight } = Dimensions.get("window");

interface Props {
  ride: Ride;
  buttonLabel?: string;
  onClose?: () => void;
}

export default function BookingBottomSheet({
  ride,
  buttonLabel = "Confirm Booking",
  onClose,
}: Props) {
  const router = useRouter();
  const bottomSheetRef = useRef(null);
  const { confirmBooking } = useBooking();
  const { incrementRideStats } = useProfile();
  const ecoPoints = Math.round(ride.co2Saved * 10);

  const snapPoints = useMemo(() => {
    return [140, screenHeight * 0.5, screenHeight * 0.85];
  }, []);

  const handleConfirm = () => {
    confirmBooking();
    incrementRideStats(ride);
    router.push({
      pathname: "/booking-success",
      params: { rideId: ride.id, eta: ride.eta },
    });
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => {
        if (onClose) { onClose(); } else {
        router.back(); }
      }}
    >
      <BottomSheetScrollView style={styles.sheetContent}>
        <View style={styles.dragHandle} />
        <RideCardMinimum ride={ride} />

        <View style={styles.expandableContent}>
          <SummarySection ride={ride} />
          <EcoPointsCard ecoPoints={ecoPoints} />
          <ActionButtons
            onConfirm={handleConfirm}
            onCancel={() => router.back()}
            confirmLabel={buttonLabel}
          />
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
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
  expandableContent: {
    paddingBottom: 20,
  },
});