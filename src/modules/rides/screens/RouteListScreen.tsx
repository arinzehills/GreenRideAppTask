import ridesData from "@/data/rides.json";
import { RideCard } from "@/modules/rides/components";
import { useTheme } from "@/shared/context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RouteListScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const rides = ridesData.rides;

  const handleRidePress = (rideId: string) => {
    router.push({
      pathname: "/booking",
      params: { rideId },
    });
  };

  const handleClose = () => {
    router.back();
  };

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

      {/* Rides List */}
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rideWrapper}>
            <RideCard ride={item} onPress={() => handleRidePress(item.id)} />
          </View>
        )}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContent}
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
  listContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 30,
  },
  rideWrapper: {
    marginBottom: 8,
  },
});
