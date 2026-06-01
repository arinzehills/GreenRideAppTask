import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/shared/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#2C2C2E" : "#F5F5F7",
          shadowColor: isDark ? "#000000" : "#000000",
          shadowOpacity: isDark ? 0.3 : 0.1,
        },
      ]}
      onPress={toggleTheme}
      activeOpacity={0.7}
      accessible={true}
      accessibilityLabel={`Toggle theme to ${isDark ? "light" : "dark"} mode`}
      accessibilityRole="switch"
      accessibilityState={{ checked: isDark }}
      accessibilityHint="Double tap to switch between light and dark theme"
    >
      <Ionicons
        name="sunny"
        size={20}
        color={isDark ? "#8E8E93" : "#FFB800"}
      />

      <View style={styles.divider} />

      <Text
        style={[
          styles.label,
          { color: isDark ? "#E5E5EA" : "#333" },
        ]}
      >
        {isDark ? "Dark" : "Light"}
      </Text>

      <View style={styles.divider} />

      <Ionicons
        name="moon"
        size={20}
        color={isDark ? "#8E8E93" : "#8E8E93"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "rgba(200, 200, 200, 0.3)",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
});