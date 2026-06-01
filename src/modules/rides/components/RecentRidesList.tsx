import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { memo } from "react";
import { useTheme } from "@/shared/context/ThemeContext";
import { Ride } from "@/modules/rides/types";

interface RecentRidesListProps {
  rides: Ride[];
  onRemove: (rideId: string) => void;
  onRidePress?: (rideId: string) => void;
}

const RecentRidesList = memo(function RecentRidesList({
  rides,
  onRemove,
  onRidePress,
}: RecentRidesListProps) {
  const { colors } = useTheme();

  if (rides.length === 0) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>Recent Rides</Text>
      {rides.map((ride) => (
        <TouchableOpacity
          key={ride.id}
          style={[
            styles.rideItem,
            { borderBottomColor: colors.border },
          ]}
          onPress={() => onRidePress?.(ride.id)}
          activeOpacity={0.7}
          testID={`recent-ride-item-${ride.id}`}
        >
          <Text style={[styles.rideName, { color: colors.text }]}>
            {ride.vehicleModel}
          </Text>
          <View style={styles.rideRight}>
            <Text style={[styles.rideType, { color: colors.primary }]}>
              {ride.vehicleType}
            </Text>
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation?.();
                onRemove(ride.id);
              }}
              testID={`remove-recent-ride-${ride.id}`}
            >
              <MaterialCommunityIcons
                name="close-circle"
                size={20}
                color={colors.textSecondary}
                style={styles.cancelIcon}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
});

export default RecentRidesList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  rideItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  rideName: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },
  rideRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rideType: {
    fontSize: 12,
    fontWeight: "600",
  },
  cancelIcon: {
    marginLeft: 4,
  },
});
