import ridesData from "@/data/rides.json";
import { RideCard, RecentRidesList } from "@/modules/rides/components";
import { useTheme } from "@/shared/context/ThemeContext";
import { EmptyState } from "@/shared/components/EmptyState";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState, useMemo, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RouteListScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleRecentRides, setVisibleRecentRides] = useState(["1", "2", "3"]);
  const rides = ridesData.rides;

  // Get last 3 rides for recent section
  const recentRides = useMemo(
    () => rides.slice(0, 3).filter((ride) => visibleRecentRides.includes(ride.id)),
    [rides, visibleRecentRides]
  );

  const filteredRides = useMemo(() => {
    if (!searchQuery.trim()) {
      return rides;
    }
    const query = searchQuery.toLowerCase();
    return rides.filter(
      (ride) =>
        ride.vehicleModel.toLowerCase().includes(query) ||
        ride.vehicleType.toLowerCase().includes(query)
    );
  }, [searchQuery, rides]);

  const handleRemoveRecentRide = useCallback((rideId: string) => {
    setVisibleRecentRides((prev) => prev.filter((id) => id !== rideId));
  }, []);

  const handleRidePress = useCallback((rideId: string) => {
    router.push({
      pathname: "/booking",
      params: { rideId },
    });
  }, [router]);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Available Rides
        </Text>
        <TouchableOpacity onPress={handleClose}>
          <MaterialCommunityIcons name="close" size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: colors.surface,
              color: colors.text,
            },
          ]}
          placeholder="Search Ride"
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          testID="ride-search-input"
        />
      </View>

      {/* Recent Rides Section */}
      {isSearchFocused && (
        <RecentRidesList rides={recentRides} onRemove={handleRemoveRecentRide} />
      )}

      {/* Rides List */}
      <FlatList
        data={filteredRides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rideWrapper}>
            <RideCard ride={item} onPress={() => handleRidePress(item.id)} />
          </View>
        )}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <EmptyState
            icon="car-off"
            title="No Rides Found"
            subtitle="Try adjusting your search"
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  searchInput: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 30,
  },
  rideWrapper: {
    marginBottom: 8,
  },
});
