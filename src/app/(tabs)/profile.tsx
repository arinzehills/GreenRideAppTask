import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useTheme } from "@/shared/context/ThemeContext";
import { DarkModeToggle } from "@/modules/profile/components/DarkModeToggle";

export default function ProfilePage() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#F2F2F7" },
      ]}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            { color: isDark ? "#FFFFFF" : "#333" },
          ]}
        >
          Profile
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: isDark ? "#8E8E93" : "#666" },
          ]}
        >
          Coming soon...
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <DarkModeToggle />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  toggleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});