import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";
import { CustomModalContextProvider } from "@/contexts/CustomModal";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <CustomModalContextProvider>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="countries" />
          <Stack.Screen name="countries/create" />
          <Stack.Screen name="countries/update/:id" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </CustomModalContextProvider>
    </ThemeProvider>
  );
}
