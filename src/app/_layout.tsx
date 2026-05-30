import { Provider as AntProvider } from "@ant-design/react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "@/shared/context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AntProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </AntProvider>
    </ThemeProvider>
  );
}